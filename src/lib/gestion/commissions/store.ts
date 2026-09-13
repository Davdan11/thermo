/* ==================================================================
   commissions.json, à côté de gestion.json (shared/data sur le VPS,
   data/ en développement, GESTION_DATA_DIR pour l'imposer). Même
   écriture que les autres magasins : verrou (processus + fichier
   .lock), fichier temporaire + rename, droits 600.
   Les factures ne sont jamais retirées du fichier.
   ================================================================== */

import path from "node:path";
import { randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "../store";
import { cleanPercent } from "./calc";
import { DEFAULT_COMMISSION_SETTINGS, type CommissionSettings, type CommissionsData } from "./types";

export const commissionsFile = () => path.join(gestionDataDir(), "commissions.json");

export const newInvoiceId = () => `f_${randomBytes(8).toString("base64url")}`;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const num = (v: unknown, def: number, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : def);

export function normalizeCommissionSettings(s: Partial<CommissionSettings> | undefined): CommissionSettings {
  const email = typeof s?.interacEmail === "string" ? s.interacEmail.trim().toLowerCase().slice(0, 160) : "";
  return {
    percent: cleanPercent(s?.percent, DEFAULT_COMMISSION_SETTINGS.percent),
    dueDays: num(s?.dueDays, DEFAULT_COMMISSION_SETTINGS.dueDays, 0, 60),
    graceDays: num(s?.graceDays, DEFAULT_COMMISSION_SETTINGS.graceDays, 0, 60),
    interacEmail: EMAIL_RE.test(email) ? email : "",
    interacNote: typeof s?.interacNote === "string" ? s.interacNote.trim().slice(0, 300) : "",
    ...(s?.updatedAt ? { updatedAt: s.updatedAt } : {}),
    ...(s?.updatedBy ? { updatedBy: s.updatedBy } : {}),
  };
}

export const emptyCommissions = (): CommissionsData => ({ version: 1, counters: {}, invoices: [], jobLinks: {}, settings: { ...DEFAULT_COMMISSION_SETTINGS } });

export function normalizeCommissions(d: Partial<CommissionsData> | null | undefined): CommissionsData {
  const obj = <T,>(v: unknown): Record<string, T> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, T>) : {});
  return {
    version: 1,
    counters: obj<number>(d?.counters),
    invoices: Array.isArray(d?.invoices) ? d.invoices.map((i) => ({ ...i, sends: Array.isArray(i.sends) ? i.sends : [], events: Array.isArray(i.events) ? i.events : [] })) : [],
    jobLinks: obj<string>(d?.jobLinks),
    settings: normalizeCommissionSettings(d?.settings),
  };
}

export async function readCommissions(): Promise<CommissionsData> {
  return normalizeCommissions(await readJson<Partial<CommissionsData> | null>(commissionsFile(), () => null));
}

export function mutateCommissions<T>(fn: (data: CommissionsData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<CommissionsData, T>(commissionsFile(), emptyCommissions, normalizeCommissions, fn);
}
