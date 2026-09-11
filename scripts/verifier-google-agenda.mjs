#!/usr/bin/env node
/* ==================================================================
   Vérifie la configuration Google Agenda / Google Meet du site :
   lit .env, crée un événement test avec lien Meet demain à 9 h dans
   l'agenda GOOGLE_CALENDAR_USER, affiche le lien, puis le supprime.

   Usage, dans current/ sur le VPS (lit .env) :  node scripts/verifier-google-agenda.mjs
   ================================================================== */
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
try {
  const env = await readFile(path.join(root, '.env'), 'utf8');
  for (const line of env.split('\n')) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!m || process.env[m[1]]) continue;
    let v = m[2].replace(/\s+#.*$/, '');
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    process.env[m[1]] = v;
  }
} catch {
  console.log('(pas de fichier .env, variables de l’environnement seulement)');
}

import { createSign, randomUUID } from 'node:crypto';
/* ==================================================================
   Google Agenda (API v3) par compte de service, avec délégation au niveau
   du domaine Google Workspace. Sert à créer le rendez-vous dans l'agenda
   du conseiller et, pour les rencontres en ligne, à obtenir un lien Google Meet.

   Variables d'environnement :
   - GOOGLE_SERVICE_ACCOUNT_EMAIL : courriel du compte de service (…@….iam.gserviceaccount.com)
   - GOOGLE_SERVICE_ACCOUNT_KEY   : clé privée du compte de service (PEM ; les « \n » échappés
                                    ou le PEM encodé en base64 sont acceptés)
   - GOOGLE_CALENDAR_USER         : utilisateur Workspace dont l'agenda reçoit les rendez-vous
                                    quand le conseiller n'a pas de courriel (ex. info@…)

   Mise en place (une fois, dans Google Cloud + console d'administration Workspace) :
   voir DEPLOIEMENT.md, section « Google Agenda et Google Meet ».

   Aucune fonction ne lance : en cas d'échec, { ok: false, error } et le rendez-vous
   reste enregistré, la confirmation part sans lien Meet.
   ================================================================== */



const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const API = 'https://www.googleapis.com/calendar/v3';
const SCOPE = 'https://www.googleapis.com/auth/calendar.events';

function privateKey() {
  let k = process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '';
  if (k && !k.includes('BEGIN')) {
    try { k = Buffer.from(k, 'base64').toString('utf8'); } catch { /* laissé tel quel */ }
  }
  return k.replace(/\\n/g, '\n').trim();
}

function calendarEnabled() {
  return Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && privateKey());
}

/** Agenda utilisé : celui du conseiller s'il a un courriel, sinon GOOGLE_CALENDAR_USER. */
function organizerFor(advisor) {
  return (advisor && advisor.email) || process.env.GOOGLE_CALENDAR_USER || null;
}

const b64url = (input) => Buffer.from(input).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

const tokens = new Map(); // subject → { token, exp }

async function accessToken(subject) {
  const cached = tokens.get(subject);
  if (cached && cached.exp > Date.now() + 60_000) return cached.token;

  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(JSON.stringify({
    iss: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    sub: subject,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }));
  const signer = createSign('RSA-SHA256');
  signer.update(`${header}.${claims}`);
  const signature = signer.sign(privateKey(), 'base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
  const assertion = `${header}.${claims}.${signature}`;

  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    cache: 'no-store',
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.access_token) {
    throw new Error(`jeton Google refusé (${res.status}) : ${data.error || ''} ${data.error_description || ''}`.trim());
  }
  tokens.set(subject, { token: data.access_token, exp: Date.now() + (data.expires_in || 3600) * 1000 });
  return data.access_token;
}

/**
 * Crée un événement dans l'agenda principal de `organizer` (utilisateur Workspace).
 * @param {{
 *   organizer: string, summary: string, description?: string, location?: string,
 *   start: Date, end: Date, timezone: string,
 *   attendees?: Array<{ email: string, displayName?: string }>,
 *   meet?: boolean, sendInvites?: boolean
 * }} ev
 * @returns {Promise<{ ok: true, eventId: string, htmlLink: string, meetLink: string|null } | { ok: false, error: string }>}
 */
async function createCalendarEvent(ev) {
  if (!calendarEnabled()) return { ok: false, error: 'non-configure' };
  if (!ev.organizer) return { ok: false, error: 'aucun agenda (GOOGLE_CALENDAR_USER ou courriel du conseiller manquant)' };
  try {
    const token = await accessToken(ev.organizer);
    const body = {
      summary: ev.summary,
      description: ev.description || undefined,
      location: ev.location || undefined,
      start: { dateTime: ev.start.toISOString(), timeZone: ev.timezone },
      end: { dateTime: ev.end.toISOString(), timeZone: ev.timezone },
      attendees: ev.attendees && ev.attendees.length ? ev.attendees : undefined,
      guestsCanModify: false,
      guestsCanInviteOthers: false,
      reminders: { useDefault: true },
      conferenceData: ev.meet
        ? { createRequest: { requestId: randomUUID(), conferenceSolutionKey: { type: 'hangoutsMeet' } } }
        : undefined,
    };
    const params = new URLSearchParams({
      conferenceDataVersion: '1',
      sendUpdates: ev.sendInvites ? 'all' : 'none',
    });
    const res = await fetch(`${API}/calendars/primary/events?${params}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: `Google Agenda ${res.status} : ${data.error?.message || JSON.stringify(data).slice(0, 200)}` };
    }
    const video = data.conferenceData?.entryPoints?.find((e) => e.entryPointType === 'video');
    return { ok: true, eventId: data.id, htmlLink: data.htmlLink, meetLink: data.hangoutLink || video?.uri || null };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/** Supprime un événement (annulation, ou nettoyage après un test). */
async function deleteCalendarEvent(organizer, eventId) {
  if (!calendarEnabled() || !organizer || !eventId) return { ok: false, error: 'non-configure' };
  try {
    const token = await accessToken(organizer);
    const res = await fetch(`${API}/calendars/primary/events/${encodeURIComponent(eventId)}?sendUpdates=none`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
      cache: 'no-store',
    });
    if (!res.ok && res.status !== 410) return { ok: false, error: `Google Agenda ${res.status}` };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

const cal = { calendarEnabled, createCalendarEvent, deleteCalendarEvent };

if (!cal.calendarEnabled()) {
  console.log('✗ GOOGLE_SERVICE_ACCOUNT_EMAIL ou GOOGLE_SERVICE_ACCOUNT_KEY manquant dans .env');
  process.exit(1);
}
const organizer = process.env.GOOGLE_CALENDAR_USER;
if (!organizer) {
  console.log('✗ GOOGLE_CALENDAR_USER manquant dans .env');
  process.exit(1);
}

const start = new Date();
start.setDate(start.getDate() + 1);
start.setHours(9, 0, 0, 0);
const end = new Date(start.getTime() + 45 * 60000);

console.log(`Création d’un événement test dans l’agenda de ${organizer}…`);
const r = await cal.createCalendarEvent({
  organizer,
  summary: 'TEST site web — à ignorer (supprimé automatiquement)',
  description: 'Vérification de la configuration Google Agenda / Google Meet.',
  start, end,
  timezone: 'America/Toronto',
  attendees: [],
  meet: true,
  sendInvites: false,
});
if (!r.ok) {
  console.log('✗ Échec :', r.error);
  console.log('  Voir DEPLOIEMENT.md, section « Google Agenda et Google Meet » (délégation, API activée, clé).');
  process.exit(1);
}
console.log('✓ Événement créé :', r.htmlLink);
console.log(r.meetLink ? `✓ Lien Google Meet obtenu : ${r.meetLink}` : '✗ Aucun lien Meet (Meet désactivé pour cet utilisateur Workspace ?)');
const d = await cal.deleteCalendarEvent(organizer, r.eventId);
console.log(d.ok ? '✓ Événement test supprimé. Configuration valide.' : `(événement test non supprimé : ${d.error})`);
