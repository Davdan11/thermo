/* ==================================================================
   Magasins du volet B, à côté de gestion.json (droits 600) :
     automatisations.json  interrupteurs, journal des envois (clés
                           uniques), dernier passage du moteur
     apres-vente.json      dossiers après-vente des jobs (sondage,
                           LogisVert, références, demandes du client),
                           désabonnements des suivis
   Même écriture que les autres magasins : verrou, fichier temporaire
   + rename. Au volume visé (centaines de dossiers), le JSON suffit ;
   prévoir SQLite quand le journal dépassera quelques dizaines de
   milliers d'entrées.
   ================================================================== */

import path from "node:path";
import { createHash, randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "../store";
import { toE164 } from "../sms";
import { newToken } from "@/lib/soumissions/tokens";
import { isAutomationId, type AfterSaleData, type AfterSaleDossier, type AutomationsData, type AutomationSettings, type LogEntry } from "./types";

export const automationsFile = () => path.join(gestionDataDir(), "automatisations.json");
export const afterSaleFile = () => path.join(gestionDataDir(), "apres-vente.json");

const obj = <T,>(v: unknown): Record<string, T> => (v && typeof v === "object" && !Array.isArray(v) ? (v as Record<string, T>) : {});

export function normalizeAutomationSettings(s: Partial<AutomationSettings> | undefined): AutomationSettings {
  const enabled: AutomationSettings["enabled"] = {};
  for (const [k, v] of Object.entries(obj<unknown>(s?.enabled))) if (isAutomationId(k) && typeof v === "boolean") enabled[k] = v;
  return {
    enabled,
    referralReward: typeof s?.referralReward === "string" ? s.referralReward.trim().slice(0, 200) : "",
    ...(s?.updatedAt ? { updatedAt: s.updatedAt } : {}),
    ...(s?.updatedBy ? { updatedBy: s.updatedBy } : {}),
  };
}

export const emptyAutomations = (): AutomationsData => ({ version: 1, startedAt: null, lastTick: null, settings: normalizeAutomationSettings(undefined), log: {} });

export function normalizeAutomations(d: Partial<AutomationsData> | null | undefined): AutomationsData {
  const log: Record<string, LogEntry> = {};
  for (const [k, e] of Object.entries(obj<LogEntry>(d?.log))) if (e && typeof e === "object" && isAutomationId(e.automation)) log[k] = { ...e, key: k };
  return {
    version: 1,
    startedAt: typeof d?.startedAt === "string" ? d.startedAt : null,
    lastTick: d?.lastTick && typeof d.lastTick === "object" ? d.lastTick : null,
    settings: normalizeAutomationSettings(d?.settings),
    log,
  };
}

export async function readAutomations(): Promise<AutomationsData> {
  return normalizeAutomations(await readJson<Partial<AutomationsData> | null>(automationsFile(), () => null));
}

export function mutateAutomations<T>(fn: (data: AutomationsData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<AutomationsData, T>(automationsFile(), emptyAutomations, normalizeAutomations, fn);
}

export const emptyAfterSale = (): AfterSaleData => ({ version: 1, dossiers: {}, suppressed: [], referrals: {} });

export function normalizeAfterSale(d: Partial<AfterSaleData> | null | undefined): AfterSaleData {
  const dossiers: Record<string, AfterSaleDossier> = {};
  for (const [k, x] of Object.entries(obj<AfterSaleDossier>(d?.dossiers))) {
    if (!x || typeof x !== "object" || typeof x.token !== "string") continue;
    dossiers[k] = { ...x, jobId: k, requests: Array.isArray(x.requests) ? x.requests : [] };
  }
  return {
    version: 1,
    dossiers,
    suppressed: Array.isArray(d?.suppressed) ? d.suppressed.filter((s): s is string => typeof s === "string") : [],
    referrals: obj<string>(d?.referrals),
  };
}

export async function readAfterSale(): Promise<AfterSaleData> {
  return normalizeAfterSale(await readJson<Partial<AfterSaleData> | null>(afterSaleFile(), () => null));
}

export function mutateAfterSale<T>(fn: (data: AfterSaleData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<AfterSaleData, T>(afterSaleFile(), emptyAfterSale, normalizeAfterSale, fn);
}

/* ---------------- Aides ---------------- */

/** Empreinte d'une clé de désabonnement (« p:+15145550123 », « e:marie@exemple.ca »). */
export const suppressionHash = (key: string) => createHash("sha256").update(key).digest("hex");

export function contactKeys(c: { phone?: string | null; email?: string | null }): string[] {
  const out: string[] = [];
  const p = c.phone ? toE164(c.phone) : null;
  if (p) out.push(`p:${p}`);
  const e = c.email?.trim().toLowerCase();
  if (e && e.includes("@")) out.push(`e:${e}`);
  return out;
}

/** Dossier du job, créé au besoin (jeton aléatoire de 43 caractères, comme les soumissions). */
export function ensureDossierIn(data: AfterSaleData, jobId: string, now: Date): { dossier: AfterSaleDossier; created: boolean } {
  const existing = data.dossiers[jobId];
  if (existing) return { dossier: existing, created: false };
  const dossier: AfterSaleDossier = { jobId, token: newToken(), createdAt: now.toISOString(), requests: [] };
  data.dossiers[jobId] = dossier;
  return { dossier, created: true };
}

export function ensureDossier(jobId: string, now = new Date()): Promise<AfterSaleDossier> {
  return mutateAfterSale((data) => {
    const r = ensureDossierIn(data, jobId, now);
    return { result: structuredClone(r.dossier), changed: r.created };
  });
}

/** Code de référence : 8 lettres minuscules (jamais de suite de chiffres, que l'attribution masquerait). */
export function newReferralCode(): string {
  const alphabet = "abcdefghjkmnpqrstuvwxyz";
  const bytes = randomBytes(8);
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
}
