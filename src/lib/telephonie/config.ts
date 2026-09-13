/* ==================================================================
   Chantier T — réglages lus dans l'environnement (shared/.env).

   TWILIO_FORWARD_CELL : cellulaire du propriétaire. Il ne sort JAMAIS
   du serveur : seul l'appel REST à Twilio (champ To) le contient. Dans
   l'interface et les journaux : quatre derniers chiffres au plus.
   ================================================================== */

import { toE164 } from "@/lib/gestion/sms";
import { phoneConfig } from "@/lib/phone/ivr-flow";

type Env = Record<string, string | undefined>;

export function twilioCreds(env: Env = process.env): { sid: string; token: string } | null {
  const sid = (env.TWILIO_ACCOUNT_SID ?? "").trim();
  const token = (env.TWILIO_AUTH_TOKEN ?? "").trim();
  return sid && token ? { sid, token } : null;
}

/** Numéro du site (affiché aux clients). */
export function siteNumber(env: Env = process.env): string | null {
  const raw = (env.TWILIO_PHONE_NUMBER ?? "").trim();
  return raw ? toE164(raw) : null;
}

/** Cellulaire du propriétaire (TWILIO_FORWARD_CELL), jamais égal au numéro du site. Serveur seulement. */
export function ownerCell(env: Env = process.env): string | null {
  const cell = phoneConfig(env).cellNumber;
  return cell ? toE164(cell) : null;
}

/** « …0142 » : quatre derniers chiffres au plus (interface, journaux). */
export function tail4(phone: string | null | undefined): string {
  const d = (phone ?? "").replace(/\D/g, "");
  return d.length >= 4 ? `…${d.slice(-4)}` : "…";
}

export interface CallsReadiness {
  ok: boolean;
  missing: string[];
}

/** Ce qu'il manque pour lancer un appel masqué. */
export function callsReadiness(env: Env = process.env): CallsReadiness {
  const missing: string[] = [];
  if (!twilioCreds(env)) missing.push("TWILIO_ACCOUNT_SID et TWILIO_AUTH_TOKEN");
  if (!siteNumber(env)) missing.push("TWILIO_PHONE_NUMBER");
  if (!ownerCell(env)) missing.push("TWILIO_FORWARD_CELL");
  return { ok: missing.length === 0, missing };
}

export function geminiKey(env: Env = process.env): string | null {
  const k = (env.GEMINI_API_KEY ?? "").trim();
  return k || null;
}

/** Modèle Gemini : le même que ThermoScan (quota gratuit partagé). */
export const GEMINI_MODEL = "gemini-2.5-flash";

/** Base de l'API REST de Twilio pour ce compte. */
export const twilioApi = (sid: string) => `https://api.twilio.com/2010-04-01/Accounts/${encodeURIComponent(sid)}`;

export const basicAuth = (c: { sid: string; token: string }) => `Basic ${Buffer.from(`${c.sid}:${c.token}`).toString("base64")}`;
