/* ==================================================================
   Chantier T — magasin telephonie.json, à côté de crm.json
   (shared/data sur le VPS, data/ en développement ; dossier imposable
   avec TELEPHONIE_DATA_DIR, sinon GESTION_DATA_DIR). Même écriture que
   les autres magasins : verrou, fichier temporaire + rename, droits 600
   (numéros, transcriptions).
   ================================================================== */

import path from "node:path";
import { randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import type { Campaign, CallbackSlot, ExpressConsent, MaskedCall, RecordingJob, SpeedLead, TelephonieData, TelephonieSettings } from "./types";

export function telephonieDir(): string {
  return process.env.TELEPHONIE_DATA_DIR || gestionDataDir();
}

export const telephonieFile = () => path.join(telephonieDir(), "telephonie.json");

/* ---------------- Valeurs par défaut ---------------- */

/** Corps proposé : caractères GSM-7 seulement (« A » sans accent), pour rester dans les textos de 153 à 160 caractères. */
export const DEFAULT_SPEED_TEXT = "Bonjour {prenom}, merci pour votre demande! Ici l'équipe de Thermopompes A Vendre. Choisissez le moment de notre appel : {lien}";

export const DEFAULT_SLOTS: CallbackSlot[] = [
  { id: "matin", label: "Matin", start: "09:00", end: "12:00", days: [1, 2, 3, 4, 5] },
  { id: "apres-midi", label: "Après-midi", start: "13:00", end: "16:00", days: [1, 2, 3, 4, 5] },
  { id: "fin-de-journee", label: "Fin de journée", start: "16:00", end: "18:00", days: [1, 2, 3, 4, 5] },
];

export const defaultSettings = (): TelephonieSettings => ({
  calls: { record: false },
  speed: {
    enabled: false,
    text: DEFAULT_SPEED_TEXT,
    delaySeconds: 0,
    quietStart: 21,
    quietEnd: 8,
    ownerAlert: true,
    callLinkMinutes: 60,
    slots: DEFAULT_SLOTS.map((s) => ({ ...s, days: [...s.days] })),
    horizonDays: 5,
    linkDays: 7,
  },
  transcription: { enabled: true, retention: "jours", retentionDays: 90 },
  campaigns: { startHour: 10, endHour: 19, days: [1, 2, 3, 4, 5, 6], perTick: 20 },
});

export const emptyTelephonie = (): TelephonieData => ({ version: 1, settings: defaultSettings(), calls: [], leads: [], recordings: [], campaigns: [], consents: {}, gemini: {} });

/* ---------------- Normalisation ---------------- */

const isObj = (v: unknown): v is Record<string, unknown> => Boolean(v) && typeof v === "object" && !Array.isArray(v);
const num = (v: unknown, def: number, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : def);
const bool = (v: unknown, def: boolean) => (typeof v === "boolean" ? v : def);
const text = (v: unknown, def: string, max: number) => (typeof v === "string" ? v.replace(/\r\n?/g, "\n").slice(0, max) : def);
export const HHMM_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;
export const SLOT_ID_RE = /^[a-z0-9-]{1,24}$/;

function days(v: unknown, def: number[]): number[] {
  if (!Array.isArray(v)) return [...def];
  return [...new Set(v.filter((d): d is number => Number.isInteger(d) && d >= 0 && d <= 6))].sort();
}

export function normalizeSlots(v: unknown): CallbackSlot[] {
  if (!Array.isArray(v)) return DEFAULT_SLOTS.map((s) => ({ ...s, days: [...s.days] }));
  const out: CallbackSlot[] = [];
  const seen = new Set<string>();
  for (const s of v) {
    if (!isObj(s) || typeof s.id !== "string" || !SLOT_ID_RE.test(s.id) || seen.has(s.id)) continue;
    const start = typeof s.start === "string" && HHMM_RE.test(s.start) ? s.start : null;
    const end = typeof s.end === "string" && HHMM_RE.test(s.end) ? s.end : null;
    const label = text(s.label, "", 40).trim();
    if (!start || !end || end <= start || !label) continue;
    seen.add(s.id);
    out.push({ id: s.id, label, start, end, days: days(s.days, [1, 2, 3, 4, 5]) });
  }
  return out.slice(0, 8);
}

export function normalizeSettings(v: unknown): TelephonieSettings {
  const d = defaultSettings();
  const s = isObj(v) ? v : {};
  const calls = isObj(s.calls) ? s.calls : {};
  const speed = isObj(s.speed) ? s.speed : {};
  const tr = isObj(s.transcription) ? s.transcription : {};
  const cp = isObj(s.campaigns) ? s.campaigns : {};
  const startHour = num(cp.startHour, d.campaigns.startHour, 0, 23);
  return {
    calls: { record: bool(calls.record, d.calls.record) },
    speed: {
      enabled: bool(speed.enabled, d.speed.enabled),
      text: text(speed.text, d.speed.text, 480).trim() || d.speed.text,
      delaySeconds: num(speed.delaySeconds, d.speed.delaySeconds, 0, 60),
      quietStart: num(speed.quietStart, d.speed.quietStart, 0, 23),
      quietEnd: num(speed.quietEnd, d.speed.quietEnd, 0, 23),
      ownerAlert: bool(speed.ownerAlert, d.speed.ownerAlert),
      callLinkMinutes: num(speed.callLinkMinutes, d.speed.callLinkMinutes, 5, 720),
      slots: normalizeSlots(speed.slots),
      horizonDays: num(speed.horizonDays, d.speed.horizonDays, 1, 14),
      linkDays: num(speed.linkDays, d.speed.linkDays, 1, 30),
    },
    transcription: {
      enabled: bool(tr.enabled, d.transcription.enabled),
      retention: tr.retention === "apres-transcription" ? "apres-transcription" : "jours",
      retentionDays: num(tr.retentionDays, d.transcription.retentionDays, 1, 365),
    },
    campaigns: {
      startHour,
      endHour: Math.max(startHour + 1, num(cp.endHour, d.campaigns.endHour, 1, 24)),
      days: days(cp.days, d.campaigns.days),
      perTick: num(cp.perTick, d.campaigns.perTick, 1, 60),
    },
    ...(typeof s.updatedAt === "string" ? { updatedAt: s.updatedAt } : {}),
    ...(typeof s.updatedBy === "string" ? { updatedBy: s.updatedBy.slice(0, 200) } : {}),
  };
}

const list = <T,>(v: unknown, ok: (x: Record<string, unknown>) => boolean, max: number): T[] => (Array.isArray(v) ? (v.filter((x) => isObj(x) && ok(x)) as T[]).slice(-max) : []);

export const MAX_CALLS = 300;
export const MAX_LEADS = 500;
export const MAX_RECORDINGS = 1000;
export const MAX_CAMPAIGNS = 100;

export function normalizeTelephonie(d: Partial<TelephonieData> | null | undefined): TelephonieData {
  const consents: Record<string, ExpressConsent> = {};
  if (isObj(d?.consents)) {
    for (const [id, c] of Object.entries(d.consents)) if (/^c_[0-9a-f]{12}$/.test(id) && isObj(c) && typeof c.at === "string") consents[id] = c as unknown as ExpressConsent;
  }
  return {
    version: 1,
    settings: normalizeSettings(d?.settings),
    calls: list<MaskedCall>(d?.calls, (x) => typeof x.id === "string" && typeof x.phone === "string", MAX_CALLS),
    leads: list<SpeedLead>(d?.leads, (x) => typeof x.id === "string" && isObj(x.sms), MAX_LEADS),
    recordings: list<RecordingJob>(d?.recordings, (x) => typeof x.id === "string" && typeof x.recordingSid === "string", MAX_RECORDINGS),
    campaigns: list<Campaign>(d?.campaigns, (x) => typeof x.id === "string" && Array.isArray(x.recipients), MAX_CAMPAIGNS),
    consents,
    gemini: isObj(d?.gemini) ? (d.gemini as TelephonieData["gemini"]) : {},
  };
}

export async function readTelephonie(): Promise<TelephonieData> {
  return normalizeTelephonie(await readJson<Partial<TelephonieData> | null>(telephonieFile(), () => null));
}

export function mutateTelephonie<T>(fn: (data: TelephonieData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<TelephonieData, T>(telephonieFile(), emptyTelephonie, normalizeTelephonie, async (data) => {
    const r = await fn(data);
    // Plafonds : les plus anciens sortent (le fichier reste petit).
    if (r.changed) {
      if (data.calls.length > MAX_CALLS) data.calls.splice(0, data.calls.length - MAX_CALLS);
      if (data.leads.length > MAX_LEADS) data.leads.splice(0, data.leads.length - MAX_LEADS);
      if (data.recordings.length > MAX_RECORDINGS) data.recordings.splice(0, data.recordings.length - MAX_RECORDINGS);
      if (data.campaigns.length > MAX_CAMPAIGNS) data.campaigns.splice(0, data.campaigns.length - MAX_CAMPAIGNS);
    }
    return r;
  });
}

/* ---------------- Identifiants ---------------- */

export type IdPrefix = "a" | "l" | "r" | "k";
export const newTelId = (prefix: IdPrefix) => `${prefix}_${randomBytes(8).toString("base64url")}`;

export const CALL_ID_RE = /^a_[A-Za-z0-9_-]{8,16}$/;
export const LEAD_ID_RE = /^l_[A-Za-z0-9_-]{8,16}$/;
export const RECORDING_ID_RE = /^r_[A-Za-z0-9_-]{8,16}$/;
export const CAMPAIGN_ID_RE = /^k_[A-Za-z0-9_-]{8,16}$/;
/** Identifiants Twilio. */
export const RECORDING_SID_RE = /^RE[0-9a-f]{32}$/;
export const CALL_SID_RE = /^CA[0-9a-f]{32}$/;
