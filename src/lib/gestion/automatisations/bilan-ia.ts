/* ==================================================================
   Refonte R2 — bilan hebdomadaire : reformulation par l'assistant IA
   (chantier A) SEULEMENT si l'assistant est en mode « api »
   (production ET ANTHROPIC_API_KEY présente). Sinon, ou au moindre
   doute, le bilan construit par règles (crm/bilan.ts) est gardé.

   Garde-fous :
     - aucun nom de client n'est envoyé : seules les lignes sans nom
       (chiffres agrégés, noms d'étapes) partent ; les dossiers à
       traiter (prénom, ville) sont ajoutés ensuite, tels quels ;
     - plafond mensuel de l'assistant respecté (budgetState) ; usage
       noté dans son journal (question « Bilan hebdomadaire ») ;
     - aucun chiffre inventé : chaque nombre de la réponse doit se
       trouver dans les faits envoyés, sinon la réponse est écartée ;
     - hors production : aucun appel (mode « simule »), règles.
   Même transport que l'assistant (appel direct de l'API Messages,
   sans dépendance) ; mêmes modèle et repli (config.ts).
   ================================================================== */

import { createAnthropicCaller, type MessagesCall, type MessagesRequest } from "../assistant/anthropic";
import { assistantMode, CRM_ASSISTANT_LIMITS, crmAssistantModel, FALLBACK_BETA, monthlyBudgetCents, usesServerFallbacks } from "../assistant/config";
import { addUsage, budgetState, costCents, emptyUsage } from "../assistant/cost";
import { monthUsage, readAssistant, recordQuestion, type JournalOutcome } from "../assistant/store";
import { bilanFacts, bilanFromFacts, type Bilan } from "../crm/bilan";
import type { CrmIndex } from "../crm/model";
import { localYmd } from "../crm/time";

type Env = Record<string, string | undefined>;
type Lines = Pick<Bilan, "wins" | "blocks" | "todo">;

export const BILAN_SYSTEM = [
  "Tu rédiges le bilan hebdomadaire d’une entreprise québécoise de thermopompes, pour son propriétaire.",
  "On te donne trois listes de faits en JSON : wins (ce qui a marché), blocks (ce qui bloque), todo (quoi faire).",
  "Réécris-les en français du Québec, sobre et direct, sans formule creuse. Garde le sens exact de chaque fait.",
  "N’ajoute aucun chiffre, aucun montant, aucun fait qui n’est pas dans les listes reçues.",
  "Réponds uniquement par un objet JSON de la forme {\"wins\": [...], \"blocks\": [...], \"todo\": [...]} : trois éléments au plus par liste, 180 caractères au plus par élément.",
].join("\n");

const digitsOf = (s: string): string[] => (s.match(/\d+(?:[\s  .,]\d+)*/g) ?? []).flatMap((n) => [n.replace(/\D/g, ""), ...n.split(/[\s  .,]/).filter(Boolean)]);

/** Chaque nombre des lignes doit apparaître dans la source (aucun chiffre inventé). */
export function numbersKnown(lines: readonly string[], source: string): boolean {
  const known = new Set(digitsOf(source));
  return lines.every((l) => (l.match(/\d+(?:[\s  .,]\d+)*/g) ?? []).every((n) => known.has(n.replace(/\D/g, ""))));
}

/** Objet JSON de la réponse, validé (listes de phrases courtes) ; null s'il est illisible. */
export function parseBilanJson(text: string): Lines | null {
  const a = text.indexOf("{");
  const b = text.lastIndexOf("}");
  if (a < 0 || b <= a) return null;
  let raw: unknown;
  try {
    raw = JSON.parse(text.slice(a, b + 1));
  } catch {
    return null;
  }
  if (!raw || typeof raw !== "object") return null;
  const list = (v: unknown): string[] | null => (Array.isArray(v) && v.every((x) => typeof x === "string") ? v.map((x: string) => x.replace(/\s+/g, " ").trim()).filter(Boolean).slice(0, 3).map((x) => x.slice(0, 200)) : null);
  const o = raw as Record<string, unknown>;
  const wins = list(o.wins);
  const blocks = list(o.blocks);
  const todo = list(o.todo);
  return wins && blocks && todo && wins.length && blocks.length ? { wins, blocks, todo } : null;
}

export interface PhraseDeps {
  env?: Env;
  now?: Date;
  /** Tests : appel simulé (le vrai transport n'est construit qu'en production avec une clé). */
  call?: MessagesCall;
}

/** Reformule des lignes SANS nom de client ; null : garder les règles. */
export async function phraseBilan(lines: Lines, deps: PhraseDeps = {}): Promise<Lines | null> {
  const env = deps.env ?? process.env;
  const now = deps.now ?? new Date();
  const mode = assistantMode(env);
  if (!deps.call && mode !== "api") return null;
  const data = await readAssistant();
  const month = localYmd(now).slice(0, 7);
  const budget = budgetState(monthUsage(data, month), data.prices, monthlyBudgetCents(env));
  if (budget.block) return null;
  const model = crmAssistantModel(env);
  const fallbacks = mode === "api" && usesServerFallbacks(model, env);
  const call = deps.call ?? createAnthropicCaller({ apiKey: (env.ANTHROPIC_API_KEY ?? "").trim(), timeoutMs: CRM_ASSISTANT_LIMITS.timeoutMs, betas: fallbacks ? [FALLBACK_BETA] : [] });
  const facts = JSON.stringify(lines);
  // Requête sans outils : une seule réponse texte (le type partagé exige des outils, d'où la conversion).
  const body = { model, max_tokens: 2000, system: [{ type: "text", text: BILAN_SYSTEM }], messages: [{ role: "user", content: facts }], output_config: { effort: "low" }, ...(fallbacks ? { fallbacks: "default" } : {}) } as unknown as MessagesRequest;
  let usage = emptyUsage();
  let outcome: JournalOutcome = "erreur";
  let error: string | undefined;
  let chars = 0;
  try {
    const res = await call(body);
    usage = addUsage(usage, { requests: 1, inputTokens: res.usage?.input_tokens ?? 0, outputTokens: res.usage?.output_tokens ?? 0, cacheReadTokens: res.usage?.cache_read_input_tokens ?? 0, cacheWriteTokens: res.usage?.cache_creation_input_tokens ?? 0 });
    if (res.stop_reason === "refusal") {
      outcome = "refus";
      return null;
    }
    const text = res.content.filter((x) => x.type === "text").map((x) => String(x.text ?? "")).join("\n");
    chars = text.length;
    const parsed = parseBilanJson(text);
    if (!parsed || !numbersKnown([...parsed.wins, ...parsed.blocks, ...parsed.todo], facts)) {
      error = "bilan-ecarte";
      return null;
    }
    outcome = "ok";
    return parsed;
  } catch (e) {
    error = (e as { code?: string })?.code ?? "interne";
    console.error("[automatisations] bilan IA :", (e as Error)?.message ?? e);
    return null;
  } finally {
    await recordQuestion(month, { at: now.toISOString(), by: "automatisation", question: "Bilan hebdomadaire (automatique)", tools: [], usage, costCents: costCents(usage, data.prices), outcome, mode: mode === "api" ? "api" : "simule", answerChars: chars, drafts: 0, ...(error ? { error } : {}) }).catch((e) => console.error("[automatisations] journal de l’assistant :", e));
  }
}

/** Bilan de la semaine : règles, reformulées par l'assistant quand c'est permis ; dossiers nominatifs ajoutés tels quels. */
export async function buildWeeklyBilan(index: CrmIndex, now: Date, alertsSent: number, deps: PhraseDeps = {}): Promise<Bilan> {
  const rules = bilanFromFacts(bilanFacts(index, now, alertsSent));
  const generic: Lines = { wins: rules.wins, blocks: rules.blocks, todo: rules.todo.filter((t) => !rules.named.includes(t)) };
  const ai = await phraseBilan(generic, { now, ...deps }).catch(() => null);
  if (!ai) return { wins: rules.wins, blocks: rules.blocks, todo: rules.todo, source: "regles" };
  return { wins: ai.wins, blocks: ai.blocks, todo: [...ai.todo, ...rules.named], source: "ia" };
}
