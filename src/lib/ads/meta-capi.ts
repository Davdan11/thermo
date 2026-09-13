/* ==================================================================
   API Conversions de Meta (serveur). INACTIVE sans clés, et jamais
   d'appel réseau hors production (NODE_ENV !== "production").

   Variables (shared/.env) : META_PIXEL_ID, META_CAPI_TOKEN ;
   facultatives : META_TEST_EVENT_CODE (onglet « Tester les
   événements »), META_API_VERSION (défaut v25.0).
   Courriel et téléphone : normalisés selon Meta (courriel en
   minuscules sans espaces ; téléphone en chiffres seulement, indicatif
   du pays compris, sans zéro en tête), puis hachés en SHA-256. fbc,
   fbp et navigateur ne sont pas hachés (règle de Meta). L'appelant ne
   passe ces renseignements qu'avec le consentement du visiteur.
   ================================================================== */

import { createHash } from "node:crypto";
import { CURRENCY } from "./config";

export const META_DEFAULT_VERSION = "v25.0";

export const sha256Hex = (s: string) => createHash("sha256").update(s, "utf8").digest("hex");

export function normalizeEmailForMeta(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const e = raw.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e) ? e : null;
}

/** « (514) 555-0199 » → « 15145550199 » ; 10 chiffres = Amérique du Nord (indicatif 1 ajouté). */
export function normalizePhoneForMeta(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const digits = raw.replace(/\D/g, "").replace(/^0+/, "");
  if (digits.length === 10) return `1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return digits;
  return digits.length >= 11 && digits.length <= 15 ? digits : null;
}

export interface MetaConfig {
  pixelId: string;
  token: string;
  testEventCode?: string;
  version: string;
}

export function metaConfig(env: NodeJS.ProcessEnv = process.env): MetaConfig | null {
  const pixelId = env.META_PIXEL_ID?.trim() ?? "";
  const token = env.META_CAPI_TOKEN?.trim() ?? "";
  if (!/^\d{5,20}$/.test(pixelId) || token.length < 20) return null;
  const version = /^v\d{1,3}\.\d$/.test(env.META_API_VERSION?.trim() ?? "") ? env.META_API_VERSION!.trim() : META_DEFAULT_VERSION;
  const test = env.META_TEST_EVENT_CODE?.trim();
  return { pixelId, token, version, ...(test && /^[A-Za-z0-9_-]{3,40}$/.test(test) ? { testEventCode: test } : {}) };
}

/** Envois réels : production ET clés présentes. */
export function metaActive(env: NodeJS.ProcessEnv = process.env): boolean {
  return env.NODE_ENV === "production" && metaConfig(env) !== null;
}

export interface MetaEventInput {
  name: "Lead" | "Purchase";
  eventId: string;
  time: Date;
  sourceUrl: string;
  userAgent?: string | null;
  emails?: Array<string | null | undefined>;
  phones?: Array<string | null | undefined>;
  fbc?: string;
  fbp?: string;
  valueCents?: number;
}

export interface MetaServerEvent {
  event_name: "Lead" | "Purchase";
  event_time: number;
  event_id: string;
  action_source: "website";
  event_source_url: string;
  user_data: { em?: string[]; ph?: string[]; fbc?: string; fbp?: string; client_user_agent?: string };
  custom_data?: { value: number; currency: string };
}

const uniq = (xs: Array<string | null>) => [...new Set(xs.filter((x): x is string => Boolean(x)))];

export function buildMetaEvent(i: MetaEventInput): MetaServerEvent {
  const em = uniq((i.emails ?? []).map(normalizeEmailForMeta)).map(sha256Hex);
  const ph = uniq((i.phones ?? []).map(normalizePhoneForMeta)).map(sha256Hex);
  const user_data: MetaServerEvent["user_data"] = {};
  if (em.length) user_data.em = em;
  if (ph.length) user_data.ph = ph;
  if (i.fbc) user_data.fbc = i.fbc;
  if (i.fbp) user_data.fbp = i.fbp;
  if (i.userAgent) user_data.client_user_agent = i.userAgent.slice(0, 400);
  return {
    event_name: i.name,
    event_time: Math.floor(i.time.getTime() / 1000),
    event_id: i.eventId,
    action_source: "website",
    event_source_url: i.sourceUrl,
    user_data,
    ...(i.valueCents !== undefined ? { custom_data: { value: Math.round(i.valueCents) / 100, currency: CURRENCY } } : {}),
  };
}

export interface MetaSendResult {
  status: "inactif" | "envoye" | "erreur";
  detail: string;
}

export type FetchLike = (url: string, init: RequestInit) => Promise<{ ok: boolean; status: number; json(): Promise<unknown> }>;

export async function sendMetaEvents(events: MetaServerEvent[], opts: { env?: NodeJS.ProcessEnv; fetchImpl?: FetchLike } = {}): Promise<MetaSendResult> {
  const env = opts.env ?? process.env;
  if (!events.length) return { status: "inactif", detail: "Rien à envoyer." };
  if (env.NODE_ENV !== "production") return { status: "inactif", detail: "Hors production : aucun envoi." };
  const cfg = metaConfig(env);
  if (!cfg) return { status: "inactif", detail: "META_PIXEL_ID ou META_CAPI_TOKEN absent." };
  const doFetch: FetchLike = opts.fetchImpl ?? ((url, init) => fetch(url, init));
  try {
    const res = await doFetch(`https://graph.facebook.com/${cfg.version}/${cfg.pixelId}/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Jeton dans le corps (jamais dans une adresse qui pourrait être journalisée).
      body: JSON.stringify({ data: events, access_token: cfg.token, ...(cfg.testEventCode ? { test_event_code: cfg.testEventCode } : {}) }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!res.ok) return { status: "erreur", detail: `Meta a répondu ${res.status}.` };
    const body = (await res.json().catch(() => ({}))) as { events_received?: number };
    return { status: "envoye", detail: `${body.events_received ?? events.length} événement(s) reçu(s)${cfg.testEventCode ? " (mode test)" : ""}.` };
  } catch (e) {
    return { status: "erreur", detail: e instanceof Error && e.name === "TimeoutError" ? "Délai dépassé." : "Envoi impossible." };
  }
}
