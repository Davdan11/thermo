/* ==================================================================
   crm.json, à côté de gestion.json (shared/data sur le VPS, data/ en
   développement, GESTION_DATA_DIR pour l'imposer). Même écriture que
   les autres magasins : verrou (processus et fichier .lock), fichier
   temporaire + rename, droits 600.

   Ne contient que ce que le propriétaire ajoute : étapes choisies,
   notes, tâches, fusions et séparations, contacts saisis à la main,
   réglages. Les clés des clients y sont en empreinte SHA-256.
   ================================================================== */

import path from "node:path";
import { randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "../store";
import { emptyExtensions, normalizeExtensions } from "./extensions";
import { normalizeParcoursSettings } from "./parcours"; // Refonte R2
import { DEFAULT_CRM_SETTINGS, isStage, type CrmData, type CrmSettings } from "./types";

export const crmFile = () => path.join(gestionDataDir(), "crm.json");

export const emptyCrm = (): CrmData => ({
  version: 1,
  clients: {},
  aliases: {},
  merges: [],
  splits: [],
  manualContacts: [],
  tasks: [],
  taskState: {},
  settings: { ...DEFAULT_CRM_SETTINGS, pipedriveStageMap: {} },
  // Volet C : tâches à étapes, modèles, réglages des ventes, consentements de relance de saison.
  ...emptyExtensions(),
});

const num = (v: unknown, def: number, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : def);

export function normalizeSettings(s: Partial<CrmSettings> | undefined): CrmSettings {
  const map: CrmSettings["pipedriveStageMap"] = {};
  const raw = s?.pipedriveStageMap && typeof s.pipedriveStageMap === "object" ? s.pipedriveStageMap : {};
  for (const [k, v] of Object.entries(raw)) if (isStage(k) && (v === null || (Number.isInteger(v) && (v as number) > 0))) map[k] = v as number | null;
  return {
    callbackHours: num(s?.callbackHours, DEFAULT_CRM_SETTINGS.callbackHours, 0.5, 72),
    openedFollowDays: num(s?.openedFollowDays, DEFAULT_CRM_SETTINGS.openedFollowDays, 1, 30),
    jobNoAnswerHours: num(s?.jobNoAnswerHours, DEFAULT_CRM_SETTINGS.jobNoAnswerHours, 4, 240),
    expiringDays: num(s?.expiringDays, DEFAULT_CRM_SETTINGS.expiringDays, 0, 30),
    pipedriveStageMap: map,
    ...(s?.updatedAt ? { updatedAt: s.updatedAt } : {}),
    ...(s?.updatedBy ? { updatedBy: s.updatedBy } : {}),
  };
}

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
const obj = <T,>(v: unknown): Record<string, T> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, T>) : {});

export function normalizeCrm(d: Partial<CrmData> | null | undefined): CrmData {
  const clients: CrmData["clients"] = {};
  for (const [id, r] of Object.entries(obj<CrmData["clients"][string]>(d?.clients))) {
    if (!r || typeof r !== "object") continue;
    clients[id] = { ...r, id, keys: arr<string>(r.keys), stageLog: arr(r.stageLog), notes: arr(r.notes), tags: arr<string>(r.tags), createdAt: r.createdAt ?? new Date(0).toISOString(), updatedAt: r.updatedAt ?? r.createdAt ?? new Date(0).toISOString() };
  }
  return {
    version: 1,
    clients,
    aliases: obj<string>(d?.aliases),
    merges: arr<[string, string]>(d?.merges).filter((m) => Array.isArray(m) && m.length === 2),
    splits: arr<string[]>(d?.splits).filter((s) => Array.isArray(s) && s.length > 0),
    manualContacts: arr(d?.manualContacts),
    tasks: arr(d?.tasks),
    taskState: obj(d?.taskState),
    settings: normalizeSettings(d?.settings),
    // Volet C : clés absentes d'un crm.json de la phase 1 → valeurs vides (rétrocompatible, sans migration).
    ...normalizeExtensions(d),
    ...(d?.seed ? { seed: true as const } : {}),
    // Refonte R2 : réglages des étapes, seulement s'ils existent (un crm.json plus ancien reste identique).
    ...(d?.parcours !== undefined && d?.parcours !== null ? { parcours: normalizeParcoursSettings(d.parcours) } : {}),
  };
}

export async function readCrm(): Promise<CrmData> {
  return normalizeCrm(await readJson<Partial<CrmData> | null>(crmFile(), () => null));
}

export function mutateCrm<T>(fn: (data: CrmData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<CrmData, T>(crmFile(), emptyCrm, normalizeCrm, fn);
}

/** « t_ », « n_ », « m_ » + 11 caractères. */
export const newCrmId = (prefix: "t" | "n" | "m") => `${prefix}_${randomBytes(8).toString("base64url")}`;
