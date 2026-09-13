/* ==================================================================
   Chantier A — « Demande à Claude » : orchestration (serveur seulement).

   AUCUNE vérification d'accès ici : la route /gestion/api/assistant
   vérifie la session (getAdminSession) avant d'appeler askCrmAssistant.

   Ordre des gardes : clé → question → plafond mensuel → une question
   à la fois → fréquence. Puis : contexte en lecture seule, boucle
   d'outils, vérification des liens et des montants, journal (question
   masquée, jamais la réponse) et usage du mois.
   ================================================================== */

import { dollars } from "@/components/gestion/kit/format";
import { createLimiter } from "../rate-limit";
import { localYmd, todayLong } from "../crm/time";
import { CLIENT_ID_RE } from "../crm/types";
import { API_ERROR_MESSAGES, AssistantApiError, createAnthropicCaller, type ApiMessage, type MessagesCall } from "./anthropic";
import { cleanLinks, unverifiedAmounts } from "./answer";
import { assistantMode, CRM_ASSISTANT_LIMITS as L, crmAssistantModel, FALLBACK_BETA, monthlyBudgetCents, usesServerFallbacks, type AssistantMode } from "./config";
import { loadAssistantContext, type AssistantContext } from "./context";
import { addUsage, budgetState, costCents, emptyUsage, totalTokens, type BudgetBlock, type Prices, type Usage } from "./cost";
import { CRM_SYSTEM_PROMPT, questionText } from "./prompt";
import { journalQuestion, maskPersonal } from "./redact";
import { runToolLoop } from "./run";
import { createSimulatedCaller } from "./simulated";
import { monthUsage, readAssistant, recordQuestion, type JournalOutcome } from "./store";
import { executeTool, TOOL_DEFS, TOOL_LABELS, type Draft, type ToolSink } from "./tools";

type Env = Record<string, string | undefined>;

export interface MonthStatus {
  month: string;
  questions: number;
  tokens: number;
  spentCents: number | null;
  budgetCents: number | null;
  share: number | null;
  pricesSet: boolean;
}

export interface PanelStatus {
  mode: AssistantMode;
  model: string;
  month: MonthStatus;
  block: BudgetBlock;
}

export type AskErrorCode = "cle-absente" | "invalide" | "plafond" | "tarifs-manquants" | "en-cours" | "frequence" | "erreur";

export type AskResult =
  | {
      ok: true;
      answer: string;
      drafts: Draft[];
      /** Outils consultés (libellés), pour la transparence. */
      tools: string[];
      /** Un montant de la réponse n'a pas été retrouvé dans les données consultées. */
      unverified: boolean;
      mode: "api" | "simule";
      usage: { tokens: number; costCents: number | null };
      month: MonthStatus;
    }
  | { ok: false; code: AskErrorCode; message: string; month?: MonthStatus };

export interface AskInput {
  email: string;
  question: string;
  history?: Array<{ role: "user" | "assistant"; content: string }>;
  clientId?: string;
}

export interface AskDeps {
  env?: Env;
  fetchImpl?: typeof fetch;
  now?: Date;
  context?: AssistantContext;
  call?: MessagesCall;
}

/* ---------------- Limites (en mémoire : un seul processus pm2) ---------------- */

const perMinute = createLimiter({ limit: L.perMinute, windowMs: 60_000 });
const perHour = createLimiter({ limit: L.perHour, windowMs: 3_600_000 });
const inflight = new Set<string>();

export function resetAssistantLimits(): void {
  perMinute.reset();
  perHour.reset();
  inflight.clear();
}

/* ---------------- État du mois ---------------- */

async function monthState(env: Env, now: Date): Promise<{ status: MonthStatus; block: BudgetBlock; prices: Prices | null }> {
  const data = await readAssistant();
  const month = localYmd(now).slice(0, 7);
  const u = monthUsage(data, month);
  const b = budgetState(u, data.prices, monthlyBudgetCents(env));
  return {
    status: { month, questions: u.questions, tokens: totalTokens(u), spentCents: b.spentCents, budgetCents: b.budgetCents, share: b.share, pricesSet: data.prices !== null },
    block: b.block,
    prices: data.prices,
  };
}

/** État affiché par le panneau (mode, modèle, usage du mois, blocage éventuel). */
export async function panelStatus(env: Env = process.env, now = new Date()): Promise<PanelStatus> {
  const s = await monthState(env, now);
  return { mode: assistantMode(env), model: crmAssistantModel(env), month: s.status, block: s.block };
}

/* ---------------- Conversation ---------------- */

/** Historique renvoyé par le navigateur : masqué, raccourci, tours alternés commençant par une question. */
function historyMessages(history: AskInput["history"]): ApiMessage[] {
  const out: ApiMessage[] = [];
  for (const t of (history ?? []).slice(-L.maxHistoryTurns)) {
    const text = maskPersonal(t.content.trim(), { keepLast4: t.role === "user" }).slice(0, L.maxHistoryChars);
    if (!text) continue;
    if (!out.length && t.role !== "user") continue;
    if (out.length && out[out.length - 1].role === t.role) continue;
    out.push({ role: t.role, content: text });
  }
  if (out.length && out[out.length - 1].role === "user") out.pop();
  return out;
}

const blockMessage = (s: MonthStatus): string =>
  `Plafond mensuel atteint : ${dollars(s.spentCents ?? 0)} sur ${dollars(s.budgetCents ?? 0)}. L’assistant reprendra le mois prochain, ou augmentez ANTHROPIC_MONTHLY_BUDGET_CENTS.`;

export async function askCrmAssistant(input: AskInput, deps: AskDeps = {}): Promise<AskResult> {
  const env = deps.env ?? process.env;
  const now = deps.now ?? new Date();
  const mode = assistantMode(env);
  if (mode === "cle-absente") {
    return { ok: false, code: "cle-absente", message: "L’assistant n’est pas encore branché : ajoutez ANTHROPIC_API_KEY dans shared/.env, puis redémarrez le site." };
  }
  const question = input.question.trim();
  if (!question || question.length > L.maxQuestionChars) return { ok: false, code: "invalide", message: `Question vide ou trop longue (${L.maxQuestionChars} caractères au plus).` };
  if (input.clientId && !CLIENT_ID_RE.test(input.clientId)) return { ok: false, code: "invalide", message: "Fiche invalide." };

  const state = await monthState(env, now);
  if (state.block === "plafond") return { ok: false, code: "plafond", message: blockMessage(state.status), month: state.status };
  if (state.block === "tarifs-manquants") {
    return { ok: false, code: "tarifs-manquants", message: "Un plafond mensuel est fixé, mais les tarifs ne sont pas saisis : la dépense ne peut pas être vérifiée. Saisissez-les dans Assistant IA → Tarifs.", month: state.status };
  }
  const who = input.email.toLowerCase();
  if (inflight.has(who)) return { ok: false, code: "en-cours", message: "Une question est déjà en cours : attendez sa réponse." };
  if (!perMinute.hit(who) || !perHour.hit(who)) return { ok: false, code: "frequence", message: "Beaucoup de questions en peu de temps. Réessayez dans une minute." };

  inflight.add(who);
  const month = state.status.month;
  const record = (row: { outcome: JournalOutcome; usage: Usage; tools: string[]; answerChars: number; drafts: number; error?: string }) =>
    recordQuestion(month, {
      at: now.toISOString(),
      by: who,
      question: journalQuestion(question),
      ...(input.clientId ? { clientId: input.clientId } : {}),
      tools: row.tools,
      usage: row.usage,
      costCents: costCents(row.usage, state.prices),
      outcome: row.outcome,
      mode: mode === "api" ? "api" : "simule",
      answerChars: row.answerChars,
      drafts: row.drafts,
      ...(row.error ? { error: row.error } : {}),
    }).catch((e) => console.error("[assistant] journal :", e));

  let spent = emptyUsage();
  try {
    const ctx = deps.context ?? (await loadAssistantContext(now));
    const sink: ToolSink = { drafts: [] };
    const model = crmAssistantModel(env);
    const call =
      deps.call ??
      (mode === "api"
        ? createAnthropicCaller({ apiKey: env.ANTHROPIC_API_KEY!.trim(), fetchImpl: deps.fetchImpl, timeoutMs: L.timeoutMs, betas: usesServerFallbacks(model, env) ? [FALLBACK_BETA] : [] })
        : createSimulatedCaller());
    const messages: ApiMessage[] = [
      ...historyMessages(input.history),
      { role: "user", content: questionText(maskPersonal(question, { keepLast4: true }), { today: todayLong(now), clientId: input.clientId }) },
    ];

    let result;
    try {
      result = await runToolLoop({
        call,
        model,
        system: CRM_SYSTEM_PROMPT,
        tools: TOOL_DEFS,
        messages,
        execute: (name, args) => executeTool(name, args, ctx, sink),
        maxOutputTokens: L.maxOutputTokens,
        maxToolRounds: L.maxToolRounds,
        maxToolCalls: L.maxToolCalls,
        fallbacks: mode === "api" && usesServerFallbacks(model, env),
        onUsage: (u) => {
          spent = addUsage(spent, u);
        },
      });
    } catch (e) {
      const code = e instanceof AssistantApiError ? e.code : null;
      if (!code) console.error("[assistant] erreur :", e);
      await record({ outcome: "erreur", usage: spent, tools: [], answerChars: 0, drafts: 0, error: code ?? "interne" });
      return { ok: false, code: "erreur", message: code ? API_ERROR_MESSAGES[code] : "L’assistant a rencontré une erreur. Réessayez." };
    }

    const refusal = result.stopReason === "refusal";
    const cut = result.stopReason === "max_tokens";
    let answer = refusal ? "Claude a refusé de répondre à cette question. Reformulez-la autrement." : cleanLinks(result.text, (id) => ctx.index.byId.has(id));
    if (cut) answer += "\n\n_(Réponse coupée : posez une question plus précise.)_";
    if (!answer.trim()) answer = "Je n’ai pas pu formuler de réponse. Réessayez.";
    const unverified = !refusal && unverifiedAmounts(answer, [...result.toolOutputs, question]).length > 0;
    const cost = costCents(result.usage, state.prices);

    await record({ outcome: refusal ? "refus" : cut ? "coupee" : "ok", usage: result.usage, tools: result.toolCalls, answerChars: answer.length, drafts: sink.drafts.length });
    const after = await monthState(env, now).catch(() => state);

    return {
      ok: true,
      answer,
      drafts: sink.drafts,
      tools: [...new Set(result.toolCalls.map((t) => TOOL_LABELS[t] ?? t))],
      unverified,
      mode: mode === "api" ? "api" : "simule",
      usage: { tokens: totalTokens(result.usage), costCents: cost },
      month: after.status,
    };
  } finally {
    inflight.delete(who);
  }
}
