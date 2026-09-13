/* ==================================================================
   Chantier S — connexion à deux étapes de /gestion.

   Méthodes :
     - « totp »    application d'authentification (principale) ;
     - « secours » 10 codes à usage unique, gardés en empreintes HMAC ;
     - « texto »   code à 6 chiffres envoyé à ALERT_SMS_TO (cellulaire
                   du propriétaire, jamais affiché en entier), 10 minutes.

   Activation guidée, sans risque de se bloquer dehors :
     1. startEnrollment : clé proposée (rien n'est encore exigé) ;
     2. confirmEnrollment : un code de l'application prouve que la clé
        est bien enregistrée ; les codes de secours sont montrés UNE fois ;
     3. finalizeEnrollment : le propriétaire confirme les avoir notés,
        la 2e étape devient obligatoire.
   Une activation abandonnée expire (30 minutes) sans rien changer.

   Limite de tentatives persistante (fichier) : 5 échecs en 15 minutes
   bloquent la 2e étape de cette adresse pendant 15 minutes, toutes
   méthodes confondues. Comparaisons en temps constant partout.
   ================================================================== */

import { createHmac, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
import { toE164 } from "../sms";
import { mutateSecurity, readSecurity, twoFactorEnabledIn, type BackupCodes, type MfaMethod, type SecurityData, type UserSecurity } from "./store";
import { newTotpSecret, otpauthUri, verifyTotp } from "./totp";

export const ISSUER = "ThermopompesAVendre";
export const MAX_FAILURES = 5;
export const FAILURE_WINDOW_MS = 15 * 60 * 1000;
export const ENROLL_TTL_MS = 30 * 60 * 1000;
export const SMS_TTL_MS = 10 * 60 * 1000;
export const SMS_MAX_ATTEMPTS = 5;
export const SMS_PER_HOUR = 3;
export const BACKUP_CODE_COUNT = 10;
/** Accès sensible (clés, désactivation) : 2e étape faite il y a moins de 10 minutes, par un code. */
export const RECENT_MFA_MS = 10 * 60 * 1000;

const key = (email: string) => email.trim().toLowerCase();
const user = (d: SecurityData, email: string): UserSecurity => (d.users[key(email)] ??= {});

/* ---------------- Codes de secours ---------------- */

const ALPHABET = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ"; // sans 0/O, 1/I : lisibles sur papier

const hmac = (salt: string, value: string) => createHmac("sha256", Buffer.from(salt, "base64url")).update(value).digest("hex");

function safeEqualHex(a: string, b: string): boolean {
  const x = Buffer.from(a, "hex");
  const y = Buffer.from(b, "hex");
  return x.length === y.length && x.length > 0 && timingSafeEqual(x, y);
}

export function normalizeBackupCode(input: string): string {
  return String(input ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

/** 10 codes « ABCD-EFGH » (40 bits chacun). Le texte clair n'est renvoyé qu'ici, pour être montré une fois. */
export function generateBackupCodes(now = new Date(), count = BACKUP_CODE_COUNT): { plain: string[]; record: BackupCodes } {
  const salt = randomBytes(16).toString("base64url");
  const plain: string[] = [];
  for (let i = 0; i < count; i++) {
    let c = "";
    for (let j = 0; j < 8; j++) c += ALPHABET[randomInt(ALPHABET.length)];
    plain.push(`${c.slice(0, 4)}-${c.slice(4)}`);
  }
  return { plain, record: { salt, createdAt: now.toISOString(), codes: plain.map((p) => ({ h: hmac(salt, normalizeBackupCode(p)) })) } };
}

/** Consomme un code de secours (une seule fois). Toutes les empreintes sont comparées. */
export function consumeBackupCode(record: BackupCodes | undefined, input: string, now = new Date()): boolean {
  if (!record) return false;
  const norm = normalizeBackupCode(input);
  if (norm.length !== 8) return false;
  const h = hmac(record.salt, norm);
  let hit: { h: string; usedAt?: string } | undefined;
  for (const c of record.codes) {
    const match = safeEqualHex(c.h, h);
    if (match && !c.usedAt && !hit) hit = c;
  }
  if (!hit) return false;
  hit.usedAt = now.toISOString();
  return true;
}

export const backupRemaining = (record: BackupCodes | undefined) => (record ? record.codes.filter((c) => !c.usedAt).length : 0);

/* ---------------- Limite de tentatives ---------------- */

export function lockedUntil(u: UserSecurity, now: number): number | null {
  const recent = (u.failures ?? []).filter((t) => now - t < FAILURE_WINDOW_MS);
  if (recent.length < MAX_FAILURES) return null;
  return Math.min(...recent) + FAILURE_WINDOW_MS;
}

function fail(u: UserSecurity, now: number): { locked: boolean } {
  u.failures = [...(u.failures ?? []).filter((t) => now - t < FAILURE_WINDOW_MS), now].slice(-20);
  return { locked: lockedUntil(u, now) !== null };
}

function lockMessage(until: number, now: number): string {
  const min = Math.max(1, Math.ceil((until - now) / 60000));
  return `Trop d’essais. Réessayez dans ${min} minute${min > 1 ? "s" : ""}.`;
}

/* ---------------- État ---------------- */

export interface TwoFactorStatus {
  enabled: boolean;
  suspended: boolean;
  enabledAt: string | null;
  backupRemaining: number;
  smsAvailable: boolean;
  smsMasked: string | null;
  pending: boolean;
}

/** Cellulaire du propriétaire, jamais en entier : « ••• ••• ••34 ». */
export function maskedOwnerPhone(): string | null {
  const e164 = process.env.ALERT_SMS_TO ? toE164(process.env.ALERT_SMS_TO) : null;
  if (!e164) return null;
  return `••• ••• ••${e164.slice(-2)}`;
}

export function smsFallbackAvailable(): boolean {
  return Boolean(maskedOwnerPhone() && process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER);
}

export async function twoFactorStatus(email: string, now = Date.now()): Promise<TwoFactorStatus> {
  const d = await readSecurity();
  const u = d.users[key(email)] ?? {};
  return {
    enabled: twoFactorEnabledIn(d, email),
    suspended: process.env.GESTION_2FA_DESACTIVEE === "1",
    enabledAt: u.totp?.enabledAt ?? null,
    backupRemaining: backupRemaining(u.backup),
    smsAvailable: smsFallbackAvailable(),
    smsMasked: maskedOwnerPhone(),
    pending: Boolean(u.pending && now - Date.parse(u.pending.createdAt) < ENROLL_TTL_MS),
  };
}

export async function isTwoFactorEnabled(email: string): Promise<boolean> {
  return twoFactorEnabledIn(await readSecurity(), email);
}

/* ---------------- Activation ---------------- */

/** Étape 1 : nouvelle clé (remplace une activation en cours). La clé n'est montrée que pendant l'activation. */
export async function startEnrollment(email: string, now = new Date()): Promise<{ secret: string; uri: string }> {
  const secret = newTotpSecret();
  await mutateSecurity((d) => {
    user(d, email).pending = { secret, createdAt: now.toISOString() };
    return { result: undefined, changed: true };
  });
  return { secret, uri: otpauthUri({ secret, account: key(email), issuer: ISSUER }) };
}

/** Clé de l'activation en cours (pour réafficher l'étape 1), ou null. */
export async function pendingEnrollment(email: string, now = Date.now()): Promise<{ secret: string; uri: string; confirmed: boolean } | null> {
  const p = (await readSecurity()).users[key(email)]?.pending;
  if (!p || now - Date.parse(p.createdAt) >= ENROLL_TTL_MS) return null;
  return { secret: p.secret, uri: otpauthUri({ secret: p.secret, account: key(email), issuer: ISSUER }), confirmed: Boolean(p.confirmedAt) };
}

export type EnrollResult = { ok: true; codes: string[] } | { ok: false; error: string };

/** Étape 2 : un code de l'application prouve que la clé est enregistrée. Codes de secours créés (montrés une fois). */
export async function confirmEnrollment(email: string, code: string, now = new Date()): Promise<EnrollResult> {
  return mutateSecurity<EnrollResult>((d) => {
    const u = user(d, email);
    const t = now.getTime();
    const until = lockedUntil(u, t);
    if (until) return { result: { ok: false, error: lockMessage(until, t) }, changed: false };
    const p = u.pending;
    if (!p || t - Date.parse(p.createdAt) >= ENROLL_TTL_MS) {
      u.pending = undefined;
      return { result: { ok: false, error: "L’activation a expiré. Recommencez." }, changed: Boolean(p) };
    }
    const step = verifyTotp(p.secret, code, { timeMs: t });
    if (step === null) {
      fail(u, t);
      return { result: { ok: false, error: "Code refusé. Vérifiez l’heure du téléphone et entrez le code affiché maintenant." }, changed: true };
    }
    const { plain, record } = generateBackupCodes(now);
    u.pending = { ...p, confirmedAt: now.toISOString(), backup: record };
    u.failures = [];
    return { result: { ok: true, codes: plain }, changed: true };
  });
}

/** Étape 3 : le propriétaire a noté ses codes de secours. La 2e étape devient obligatoire. */
export async function finalizeEnrollment(email: string, now = new Date()): Promise<{ ok: true } | { ok: false; error: string }> {
  return mutateSecurity<{ ok: true } | { ok: false; error: string }>((d) => {
    const u = user(d, email);
    const p = u.pending;
    if (!p?.confirmedAt || !p.backup || now.getTime() - Date.parse(p.createdAt) >= ENROLL_TTL_MS) {
      return { result: { ok: false as const, error: "L’activation a expiré. Recommencez." }, changed: false };
    }
    u.totp = { secret: p.secret, enabledAt: now.toISOString(), lastStep: null };
    u.backup = p.backup;
    u.pending = undefined;
    u.sms = undefined;
    return { result: { ok: true as const }, changed: true };
  });
}

export async function cancelEnrollment(email: string): Promise<void> {
  await mutateSecurity((d) => {
    const u = d.users[key(email)];
    if (!u?.pending) return { result: undefined, changed: false };
    u.pending = undefined;
    return { result: undefined, changed: true };
  });
}

/** Désactivation (page Sécurité après un code, ou serveur en récupération). */
export async function disableTwoFactor(email: string): Promise<boolean> {
  return mutateSecurity((d) => {
    const u = d.users[key(email)];
    if (!u?.totp && !u?.pending) return { result: false, changed: false };
    d.users[key(email)] = { failures: [] };
    return { result: true, changed: true };
  });
}

export async function regenerateBackupCodes(email: string, now = new Date()): Promise<string[] | null> {
  return mutateSecurity((d) => {
    const u = d.users[key(email)];
    if (!u?.totp) return { result: null, changed: false };
    const { plain, record } = generateBackupCodes(now);
    u.backup = record;
    return { result: plain, changed: true };
  });
}

/* ---------------- Vérification ---------------- */

export type VerifyMethod = "totp" | "secours" | "texto";
export type VerifyResult = { ok: true; method: MfaMethod; backupLeft?: number } | { ok: false; error: string; locked?: boolean };

/** Vérifie un code de 2e étape. Compte les échecs ; bloque après 5 en 15 minutes. */
export async function verifySecondFactor(email: string, method: VerifyMethod, code: string, now = new Date()): Promise<VerifyResult> {
  return mutateSecurity<VerifyResult>((d) => {
    const t = now.getTime();
    if (!twoFactorEnabledIn(d, email)) return { result: { ok: false, error: "La connexion à deux étapes n’est pas activée." }, changed: false };
    const u = user(d, email);
    const until = lockedUntil(u, t);
    if (until) return { result: { ok: false, error: lockMessage(until, t), locked: true }, changed: false };

    let ok = false;
    if (method === "totp" && u.totp) {
      const step = verifyTotp(u.totp.secret, code, { timeMs: t, lastStep: u.totp.lastStep });
      if (step !== null) {
        u.totp.lastStep = step;
        ok = true;
      }
    } else if (method === "secours") {
      ok = consumeBackupCode(u.backup, code, now);
    } else if (method === "texto" && u.sms) {
      const c = String(code ?? "").replace(/\s/g, "");
      if (Date.parse(u.sms.expiresAt) <= t || u.sms.attempts >= SMS_MAX_ATTEMPTS) {
        u.sms = undefined;
      } else if (/^\d{6}$/.test(c) && safeEqualHex(u.sms.h, hmac(u.sms.salt, c))) {
        u.sms = undefined;
        ok = true;
      } else {
        u.sms.attempts += 1;
      }
    }

    if (ok) {
      u.failures = [];
      return { result: { ok: true, method, ...(method === "secours" ? { backupLeft: backupRemaining(u.backup) } : {}) }, changed: true };
    }
    const { locked } = fail(u, t);
    const error = locked ? lockMessage(lockedUntil(u, t)!, t) : method === "texto" && !u.sms ? "Ce code texto a expiré. Demandez-en un nouveau." : "Code refusé.";
    return { result: { ok: false, error, locked }, changed: true };
  });
}

/* ---------------- Code par texto ---------------- */

export type SmsSender = (body: string) => Promise<string>;

/** Envoi réel : texto au propriétaire (simulé hors production, voir liveSendsAllowed). */
const defaultSender: SmsSender = async (body) => (await import("../automatisations/send")).sendOwnerSms(body, "code de connexion");

export async function requestSmsCode(email: string, now = new Date(), send: SmsSender = defaultSender): Promise<{ ok: true; masked: string; simulated: boolean } | { ok: false; error: string }> {
  const masked = maskedOwnerPhone();
  if (!masked || !smsFallbackAvailable()) return { ok: false, error: "Le code par texto n’est pas configuré (ALERT_SMS_TO et Twilio)." };
  const code = String(randomInt(0, 1_000_000)).padStart(6, "0");
  const reserved = await mutateSecurity<{ ok: true } | { ok: false; error: string }>((d) => {
    const t = now.getTime();
    if (!twoFactorEnabledIn(d, email)) return { result: { ok: false, error: "La connexion à deux étapes n’est pas activée." }, changed: false };
    const u = user(d, email);
    const until = lockedUntil(u, t);
    if (until) return { result: { ok: false, error: lockMessage(until, t) }, changed: false };
    const sent = (u.smsSent ?? []).filter((x) => t - x < 60 * 60 * 1000);
    if (sent.length >= SMS_PER_HOUR) return { result: { ok: false, error: "Trois codes par texto en une heure : utilisez l’application ou un code de secours." }, changed: false };
    const salt = randomBytes(16).toString("base64url");
    u.sms = { salt, h: hmac(salt, code), createdAt: now.toISOString(), expiresAt: new Date(t + SMS_TTL_MS).toISOString(), attempts: 0 };
    u.smsSent = [...sent, t];
    return { result: { ok: true }, changed: true };
  });
  if (!reserved.ok) return reserved;
  const outcome = await send(`TAV gestion : votre code de connexion est ${code}. Il expire dans 10 minutes. Ne le donnez à personne.`);
  if (outcome !== "envoye" && outcome !== "simule") return { ok: false, error: "Le texto n’est pas parti. Utilisez l’application ou un code de secours." };
  return { ok: true, masked, simulated: outcome === "simule" };
}

/** 2e étape faite récemment par un vrai code (pas par un appareil de confiance). */
export function hasRecentSecondFactor(p: { mfa?: number; mm?: MfaMethod } | null | undefined, now = Date.now()): boolean {
  if (!p || typeof p.mfa !== "number" || p.mm === "appareil") return false;
  return now - p.mfa * 1000 <= RECENT_MFA_MS && p.mfa * 1000 <= now + 60_000;
}
