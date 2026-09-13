/* ==================================================================
   Chantier S — garde des sessions de /gestion (appelée par dal.ts).

   Le jeton de session reste sans état (signé HMAC, voir
   session-token.ts) ; ce module ajoute trois contrôles côté serveur :
     - révocation : « Déconnecter partout » (notBefore) et fermeture
       d'une session précise (revokedAt) ;
     - 2e étape : une fois activée pour l'adresse, un jeton sans la
       marque « 2e étape faite » (mfa) ne donne plus accès ;
     - liste des sessions actives (dernière activité notée au plus
       toutes les 5 minutes : pas d'écriture à chaque requête).
   Appareils de confiance : jeton aléatoire dans un cookie httpOnly,
   empreinte SHA-256 seulement dans le fichier.
   Aucun import de dal.ts ici (pas de cycle).
   ================================================================== */

import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import type { SessionPayload } from "../auth/session-token";
import { MAX_TRUST_DAYS, mutateSecurity, readSecurity, twoFactorEnabledIn, type MfaMethod, type SecurityData, type SessionRecord, type TrustedDevice } from "./store";

export const DEVICE_COOKIE = "tav_gestion_appareil";
export const MFA_PATH = "/gestion/connexion/deux-etapes";
const TOUCH_MS = 5 * 60 * 1000;
const KEEP_MS = 35 * 24 * 60 * 60 * 1000;
const MAX_SESSIONS = 300;

export interface RequestMeta {
  ip?: string;
  ua?: string | null;
}

export type SessionCheck = "ok" | "revoked" | "mfa-required";

/** « iPhone · Safari », « Windows · Chrome » : assez pour reconnaître un appareil, sans l'en-tête complet. */
export function describeDevice(ua: string | null | undefined): string {
  if (!ua) return "Appareil inconnu";
  const os = /iPhone/.test(ua) ? "iPhone" : /iPad/.test(ua) ? "iPad" : /Android/.test(ua) ? "Android" : /Mac OS X|Macintosh/.test(ua) ? "Mac" : /Windows/.test(ua) ? "Windows" : /Linux/.test(ua) ? "Linux" : "Autre";
  const br = /Edg\//.test(ua) ? "Edge" : /Firefox\//.test(ua) ? "Firefox" : /CriOS|Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "navigateur";
  return `${os} · ${br}`;
}

const nb = (d: SecurityData, email: string) => Math.max(d.notBefore["*"] ?? 0, d.notBefore[email.toLowerCase()] ?? 0);

function prune(d: SecurityData, now: number): void {
  d.sessions = d.sessions
    .filter((s) => now - Date.parse(s.lastSeenAt) < KEEP_MS && (!s.exp || s.exp * 1000 > now - KEEP_MS))
    .slice(-MAX_SESSIONS);
  d.devices = d.devices.filter((x) => Date.parse(x.expiresAt) > now - KEEP_MS);
}

function upsert(d: SecurityData, p: SessionPayload, meta: RequestMeta, now: number, mfa?: MfaMethod): SessionRecord {
  let rec = d.sessions.find((s) => s.sid === p.sid);
  const at = new Date(now).toISOString();
  if (!rec) {
    rec = { sid: p.sid, email: p.email, createdAt: new Date(p.iat * 1000).toISOString(), lastSeenAt: at, exp: p.exp };
    d.sessions.push(rec);
  }
  rec.lastSeenAt = at;
  rec.exp = p.exp;
  if (meta.ip) rec.ip = meta.ip.slice(0, 64);
  if (meta.ua !== undefined) rec.device = describeDevice(meta.ua);
  const mfaAt = mfa ? at : typeof p.mfa === "number" ? new Date(p.mfa * 1000).toISOString() : undefined;
  if (mfaAt) {
    rec.mfaAt = mfaAt;
    rec.mfaMethod = mfa ?? p.mm;
  }
  return rec;
}

/**
 * Contrôle d'un jeton déjà vérifié (signature, expiration, adresse autorisée) :
 * révoqué ? 2e étape exigée ? Note l'activité (au plus toutes les 5 minutes).
 */
export async function checkSession(p: SessionPayload, meta: RequestMeta = {}, now = Date.now()): Promise<SessionCheck> {
  const d = await readSecurity();
  if (p.iat < nb(d, p.email)) return "revoked";
  const rec = typeof p.sid === "string" ? d.sessions.find((s) => s.sid === p.sid) : undefined;
  if (rec?.revokedAt) return "revoked";
  const state: SessionCheck = twoFactorEnabledIn(d, p.email) && typeof p.mfa !== "number" ? "mfa-required" : "ok";
  if (typeof p.sid === "string" && (!rec || now - Date.parse(rec.lastSeenAt) > TOUCH_MS)) {
    await mutateSecurity((dd) => {
      prune(dd, now);
      upsert(dd, p, meta, now);
      return { result: undefined, changed: true };
    }).catch((e) => console.error("[sécurité] activité de session non notée :", (e as Error)?.message));
  }
  return state;
}

/** Nouvelle session (après le lien de connexion) ou session passée à « 2e étape faite ». */
export async function recordSession(p: SessionPayload, meta: RequestMeta, now = Date.now(), mfa?: MfaMethod): Promise<void> {
  await mutateSecurity((d) => {
    prune(d, now);
    upsert(d, p, meta, now, mfa);
    return { result: undefined, changed: true };
  });
}

export async function revokeSession(sid: string, now = new Date()): Promise<boolean> {
  return mutateSecurity((d) => {
    const rec = d.sessions.find((s) => s.sid === sid);
    if (!rec || rec.revokedAt) return { result: false, changed: false };
    rec.revokedAt = now.toISOString();
    return { result: true, changed: true };
  });
}

/** « Déconnecter partout » : toutes les sessions et tous les appareils de confiance. */
export async function revokeAllSessions(now = new Date()): Promise<{ sessions: number; devices: number }> {
  return mutateSecurity((d) => {
    const at = now.toISOString();
    d.notBefore["*"] = Math.floor(now.getTime() / 1000);
    let sessions = 0;
    let devices = 0;
    for (const s of d.sessions) if (!s.revokedAt) ((s.revokedAt = at), sessions++);
    for (const x of d.devices) if (!x.revokedAt) ((x.revokedAt = at), devices++);
    return { result: { sessions, devices }, changed: true };
  });
}

export interface ActiveSession {
  sid: string;
  email: string;
  device: string;
  ip: string | null;
  createdAt: string;
  lastSeenAt: string;
  mfaMethod: MfaMethod | null;
}

export async function listActiveSessions(now = Date.now()): Promise<ActiveSession[]> {
  const d = await readSecurity();
  return d.sessions
    .filter((s) => !s.revokedAt && (!s.exp || s.exp * 1000 > now) && Date.parse(s.createdAt) / 1000 >= nb(d, s.email) - 1 && now - Date.parse(s.lastSeenAt) < 30 * 86_400_000)
    .sort((a, b) => b.lastSeenAt.localeCompare(a.lastSeenAt))
    .map((s) => ({ sid: s.sid, email: s.email, device: s.device ?? "Appareil inconnu", ip: s.ip ?? null, createdAt: s.createdAt, lastSeenAt: s.lastSeenAt, mfaMethod: s.mfaMethod ?? null }));
}

/* ---------------- Appareils de confiance ---------------- */

const sha = (v: string) => createHash("sha256").update(v).digest("hex");
export const DEVICE_TOKEN_RE = /^[A-Za-z0-9_-]{40,64}$/;

export async function trustDays(): Promise<number> {
  return (await readSecurity()).settings.trustDays;
}

/** Crée un appareil de confiance ; renvoie le jeton (pour le cookie seulement) et sa durée en secondes. */
export async function createTrustedDevice(email: string, meta: RequestMeta, now = new Date()): Promise<{ token: string; maxAge: number } | null> {
  const token = randomBytes(32).toString("base64url");
  return mutateSecurity((d) => {
    const days = d.settings.trustDays;
    if (!days) return { result: null, changed: false };
    prune(d, now.getTime());
    const rec: TrustedDevice = {
      hash: sha(token),
      email: email.toLowerCase(),
      createdAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + days * 86_400_000).toISOString(),
      device: describeDevice(meta.ua),
    };
    d.devices.push(rec);
    return { result: { token, maxAge: days * 86_400 }, changed: true };
  });
}

/** L'appareil est-il de confiance pour cette adresse ? (non révoqué, non expiré, durée toujours permise) */
export async function checkTrustedDevice(token: string | undefined | null, email: string, now = new Date()): Promise<boolean> {
  if (!token || !DEVICE_TOKEN_RE.test(token)) return false;
  const h = Buffer.from(sha(token), "hex");
  return mutateSecurity((d) => {
    if (!twoFactorEnabledIn(d, email) || !d.settings.trustDays) return { result: false, changed: false };
    let hit: TrustedDevice | undefined;
    for (const x of d.devices) {
      const same = timingSafeEqual(Buffer.from(x.hash, "hex").subarray(0, 32), h.length === 32 ? h : Buffer.alloc(32));
      if (same && !hit) hit = x;
    }
    const t = now.getTime();
    const maxAge = Math.min(d.settings.trustDays, MAX_TRUST_DAYS) * 86_400_000;
    if (!hit || hit.revokedAt || hit.email !== email.toLowerCase() || Date.parse(hit.expiresAt) <= t || t - Date.parse(hit.createdAt) > maxAge) return { result: false, changed: false };
    hit.lastUsedAt = now.toISOString();
    return { result: true, changed: true };
  });
}

export interface DeviceView {
  id: string;
  email: string;
  device: string;
  createdAt: string;
  expiresAt: string;
  lastUsedAt: string | null;
}

/** Identifiant affichable : début de l'empreinte (l'empreinte ne permet pas de retrouver le jeton). */
export async function listTrustedDevices(now = Date.now()): Promise<DeviceView[]> {
  const d = await readSecurity();
  return d.devices
    .filter((x) => !x.revokedAt && Date.parse(x.expiresAt) > now)
    .map((x) => ({ id: x.hash.slice(0, 12), email: x.email, device: x.device ?? "Appareil inconnu", createdAt: x.createdAt, expiresAt: x.expiresAt, lastUsedAt: x.lastUsedAt ?? null }));
}

export async function revokeTrustedDevice(id: string, now = new Date()): Promise<boolean> {
  if (!/^[0-9a-f]{12}$/.test(id)) return false;
  return mutateSecurity((d) => {
    const x = d.devices.find((v) => v.hash.startsWith(id) && !v.revokedAt);
    if (!x) return { result: false, changed: false };
    x.revokedAt = now.toISOString();
    return { result: true, changed: true };
  });
}

export async function saveTrustDays(days: number, by: string, now = new Date()): Promise<number> {
  const v = Math.min(MAX_TRUST_DAYS, Math.max(0, Math.round(days)));
  await mutateSecurity((d) => {
    d.settings = { trustDays: v, updatedAt: now.toISOString(), updatedBy: by };
    return { result: undefined, changed: true };
  });
  return v;
}
