/* ==================================================================
   Chantier A — assistant.json, à côté de gestion.json (droits 600).

   - prices   : tarifs saisis par le propriétaire (par million de jetons) ;
   - months   : usage cumulé par mois (jetons, questions) ;
   - journal  : les questions posées (masquées, 240 caractères), les
                outils consultés, les jetons et le coût. JAMAIS la
                réponse : seulement sa longueur.
   ================================================================== */

import path from "node:path";
import { randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "../store";
import { CRM_ASSISTANT_LIMITS } from "./config";
import { addUsage, emptyUsage, type Prices, type Usage } from "./cost";

export const assistantFile = () => path.join(gestionDataDir(), "assistant.json");

export type JournalOutcome = "ok" | "refus" | "coupee" | "erreur";

export interface AssistantJournalRow {
  id: string;
  at: string;
  by: string;
  question: string;
  clientId?: string;
  tools: string[];
  usage: Usage;
  costCents: number | null;
  outcome: JournalOutcome;
  mode: "api" | "simule";
  answerChars: number;
  drafts: number;
  error?: string;
}

export type MonthUsage = Usage & { questions: number };

export interface AssistantData {
  version: 1;
  prices: Prices | null;
  pricesUpdatedAt?: string;
  pricesUpdatedBy?: string;
  months: Record<string, MonthUsage>;
  journal: AssistantJournalRow[];
}

export const emptyAssistant = (): AssistantData => ({ version: 1, prices: null, months: {}, journal: [] });

const n = (v: unknown) => (typeof v === "number" && Number.isFinite(v) && v >= 0 ? v : 0);
const usageOf = (u: Partial<Usage> | undefined): Usage => ({ requests: n(u?.requests), inputTokens: n(u?.inputTokens), outputTokens: n(u?.outputTokens), cacheReadTokens: n(u?.cacheReadTokens), cacheWriteTokens: n(u?.cacheWriteTokens) });

export function normalizePrices(p: unknown): Prices | null {
  if (!p || typeof p !== "object") return null;
  const o = p as Record<string, unknown>;
  const ok = (v: unknown) => typeof v === "number" && Number.isFinite(v) && v >= 0 && v <= 10_000;
  if (!ok(o.input) || !ok(o.output) || !ok(o.cacheWrite) || !ok(o.cacheRead)) return null;
  return { input: o.input as number, output: o.output as number, cacheWrite: o.cacheWrite as number, cacheRead: o.cacheRead as number };
}

export function normalizeAssistant(d: Partial<AssistantData> | null | undefined): AssistantData {
  const months: Record<string, MonthUsage> = {};
  for (const [k, v] of Object.entries(d?.months && typeof d.months === "object" ? d.months : {})) {
    if (/^\d{4}-\d{2}$/.test(k)) months[k] = { ...usageOf(v), questions: n((v as MonthUsage)?.questions) };
  }
  return {
    version: 1,
    prices: normalizePrices(d?.prices),
    ...(typeof d?.pricesUpdatedAt === "string" ? { pricesUpdatedAt: d.pricesUpdatedAt } : {}),
    ...(typeof d?.pricesUpdatedBy === "string" ? { pricesUpdatedBy: d.pricesUpdatedBy } : {}),
    months,
    journal: Array.isArray(d?.journal) ? d.journal.slice(-CRM_ASSISTANT_LIMITS.journalMax) : [],
  };
}

export async function readAssistant(): Promise<AssistantData> {
  return normalizeAssistant(await readJson<Partial<AssistantData> | null>(assistantFile(), () => null));
}

export function mutateAssistant<T>(fn: (d: AssistantData) => { result: T; changed: boolean }): Promise<T> {
  return mutateJson<AssistantData, T>(assistantFile(), emptyAssistant, normalizeAssistant, fn);
}

export const monthUsage = (d: AssistantData, month: string): MonthUsage => d.months[month] ?? { ...emptyUsage(), questions: 0 };

/** Ajoute une question au journal et son usage au mois. */
export function recordQuestion(month: string, row: Omit<AssistantJournalRow, "id">): Promise<void> {
  return mutateAssistant((d) => {
    const cur = monthUsage(d, month);
    d.months[month] = { ...addUsage(cur, row.usage), questions: cur.questions + 1 };
    d.journal = [...d.journal, { id: `a_${randomBytes(6).toString("base64url")}`, ...row }].slice(-CRM_ASSISTANT_LIMITS.journalMax);
    return { result: undefined, changed: true };
  });
}

export function savePrices(prices: Prices | null, by: string, now = new Date()): Promise<void> {
  return mutateAssistant((d) => {
    d.prices = prices;
    d.pricesUpdatedAt = now.toISOString();
    d.pricesUpdatedBy = by;
    return { result: undefined, changed: true };
  });
}
