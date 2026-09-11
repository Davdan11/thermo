/* ==================================================================
   Google Agenda (API v3) par compte de service, avec délégation au niveau
   du domaine Google Workspace. Crée le rendez-vous dans l'agenda du
   conseiller et, pour une rencontre en ligne, obtient un lien Google Meet.

   Variables : GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_KEY
   (PEM, « \n » échappés ou base64), GOOGLE_CALENDAR_USER (agenda par défaut).
   Mise en place : DEPLOIEMENT.md, section « Google Agenda et Google Meet ».
   Aucune fonction ne lance : { ok: false, error } en cas d'échec.
   ================================================================== */
import { createSign, randomUUID } from "node:crypto";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const API = "https://www.googleapis.com/calendar/v3";
const SCOPE = "https://www.googleapis.com/auth/calendar.events";

function privateKey(): string {
  let k = process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "";
  if (k && !k.includes("BEGIN")) {
    try { k = Buffer.from(k, "base64").toString("utf8"); } catch { /* laissé tel quel */ }
  }
  return k.replace(/\\n/g, "\n").trim();
}

export function calendarEnabled(): boolean {
  return Boolean(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && privateKey());
}

export function organizerFor(advisor: { email: string | null } | null | undefined): string | null {
  return advisor?.email || process.env.GOOGLE_CALENDAR_USER || null;
}

const b64url = (input: string) => Buffer.from(input).toString("base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");

const tokens = new Map<string, { token: string; exp: number }>();

async function accessToken(subject: string): Promise<string> {
  const cached = tokens.get(subject);
  if (cached && cached.exp > Date.now() + 60_000) return cached.token;

  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({
    iss: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL, sub: subject, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600,
  }));
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = signer.sign(privateKey(), "base64").replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: `${header}.${claims}.${signature}` }),
    cache: "no-store",
  });
  const data = (await res.json().catch(() => ({}))) as { access_token?: string; expires_in?: number; error?: string; error_description?: string };
  if (!res.ok || !data.access_token) {
    throw new Error(`jeton Google refusé (${res.status}) : ${data.error ?? ""} ${data.error_description ?? ""}`.trim());
  }
  tokens.set(subject, { token: data.access_token, exp: Date.now() + (data.expires_in ?? 3600) * 1000 });
  return data.access_token;
}

export interface CalendarEventInput {
  organizer: string | null;
  summary: string;
  description?: string;
  location?: string;
  start: Date;
  end: Date;
  timezone: string;
  attendees?: Array<{ email: string; displayName?: string }>;
  meet?: boolean;
  sendInvites?: boolean;
}

export type CalendarResult = { ok: true; eventId: string; htmlLink: string; meetLink: string | null } | { ok: false; error: string };

export async function createCalendarEvent(ev: CalendarEventInput): Promise<CalendarResult> {
  if (!calendarEnabled()) return { ok: false, error: "non-configure" };
  if (!ev.organizer) return { ok: false, error: "aucun agenda (GOOGLE_CALENDAR_USER ou courriel du conseiller manquant)" };
  try {
    const token = await accessToken(ev.organizer);
    const body = {
      summary: ev.summary,
      description: ev.description || undefined,
      location: ev.location || undefined,
      start: { dateTime: ev.start.toISOString(), timeZone: ev.timezone },
      end: { dateTime: ev.end.toISOString(), timeZone: ev.timezone },
      attendees: ev.attendees?.length ? ev.attendees : undefined,
      guestsCanModify: false,
      guestsCanInviteOthers: false,
      reminders: { useDefault: true },
      conferenceData: ev.meet ? { createRequest: { requestId: randomUUID(), conferenceSolutionKey: { type: "hangoutsMeet" } } } : undefined,
    };
    const params = new URLSearchParams({ conferenceDataVersion: "1", sendUpdates: ev.sendInvites ? "all" : "none" });
    const res = await fetch(`${API}/calendars/primary/events?${params}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const data = (await res.json().catch(() => ({}))) as {
      id?: string; htmlLink?: string; hangoutLink?: string; error?: { message?: string };
      conferenceData?: { entryPoints?: Array<{ entryPointType?: string; uri?: string }> };
    };
    if (!res.ok) return { ok: false, error: `Google Agenda ${res.status} : ${data.error?.message ?? JSON.stringify(data).slice(0, 200)}` };
    const video = data.conferenceData?.entryPoints?.find((e) => e.entryPointType === "video");
    return { ok: true, eventId: data.id ?? "", htmlLink: data.htmlLink ?? "", meetLink: data.hangoutLink ?? video?.uri ?? null };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

/** Supprime un événement (annulation, ou nettoyage après un test). */
export async function deleteCalendarEvent(organizer: string, eventId: string): Promise<{ ok: boolean; error?: string }> {
  if (!calendarEnabled() || !organizer || !eventId) return { ok: false, error: "non-configure" };
  try {
    const token = await accessToken(organizer);
    const res = await fetch(`${API}/calendars/primary/events/${encodeURIComponent(eventId)}?sendUpdates=none`, {
      method: "DELETE", headers: { Authorization: `Bearer ${token}` }, cache: "no-store",
    });
    if (!res.ok && res.status !== 410) return { ok: false, error: `Google Agenda ${res.status}` };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
