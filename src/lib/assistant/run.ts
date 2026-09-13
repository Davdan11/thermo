/* ==================================================================
   Assistant — orchestration d'une réponse

   Fournisseur ↔ outils, puis vérifications avant la fin du flux :
   chiffres vérifiés, liens reconnus, fiches citées. Émet des
   événements NDJSON lus par le panneau. Aucune conversation n'est
   journalisée : seules les erreurs techniques (sans contenu) le sont.
   ================================================================== */

import { ASSISTANT_LIMITS, type ChatTurn } from "./config";
import { EMPTY_FALLBACK, SAFE_FALLBACK, checkFigures, citedCards, sanitizeLinks } from "./grounding";
import { SYSTEM_PROMPT } from "./prompt";
import { TOOL_DEFS, isKnownHref, runTool, type ModelCard } from "./tools";
import type { AssistantProvider, ProviderUsage } from "./providers/types";

export type AssistantEvent =
  | { t: "text"; v: string }
  | { t: "tool"; v: string }
  | { t: "final"; v: string }
  | { t: "cards"; v: ModelCard[] }
  | { t: "error"; v: string }
  | { t: "done" };

export const UNAVAILABLE_MESSAGE =
  "L'assistant est momentanément indisponible. Réessayez dans un instant ou appelez-nous au 438-900-3224.";

export interface FinalizedAnswer {
  text: string;
  replaced: boolean;
  ungrounded: number[];
}

/** Vérifie la réponse complète : chiffres fondés sur les outils ou la conversation, liens reconnus. */
export function finalizeAnswer(answer: string, toolResults: string[], history: ChatTurn[]): FinalizedAnswer {
  if (!answer.trim()) return { text: EMPTY_FALLBACK, replaced: true, ungrounded: [] };
  const figures = checkFigures(answer, [...toolResults, ...history.map((t) => t.content)]);
  if (!figures.ok) return { text: SAFE_FALLBACK, replaced: true, ungrounded: figures.ungrounded };
  return { text: sanitizeLinks(answer, isKnownHref), replaced: false, ungrounded: [] };
}

export interface RunResult {
  answer: string;
  replaced: boolean;
  toolCalls: number;
  cards: ModelCard[];
  usage: ProviderUsage | null;
}

export async function runAssistant(opts: {
  provider: AssistantProvider;
  history: ChatTurn[];
  emit: (e: AssistantEvent) => void;
  signal?: AbortSignal;
}): Promise<RunResult> {
  const { provider, history, emit, signal } = opts;
  const toolResults: string[] = [];
  const candidates: ModelCard[] = [];
  let toolCalls = 0;
  let answer = "";

  const executeTool = async (name: string, input: unknown): Promise<string> => {
    toolCalls += 1;
    if (toolCalls > ASSISTANT_LIMITS.maxToolCalls) {
      return JSON.stringify({ error: "Limite de consultations atteinte pour cette réponse : réponds avec les données déjà obtenues." });
    }
    emit({ t: "tool", v: name });
    const out = runTool(name, input);
    const json = JSON.stringify(out.data);
    toolResults.push(json);
    candidates.push(...out.cards);
    return json;
  };

  let usage: ProviderUsage | null = null;
  try {
    usage = await provider.run({
      system: SYSTEM_PROMPT,
      history,
      tools: TOOL_DEFS,
      executeTool,
      onText: (delta) => {
        answer += delta;
        emit({ t: "text", v: delta });
      },
      maxOutputTokens: ASSISTANT_LIMITS.maxOutputTokens,
      maxToolRounds: ASSISTANT_LIMITS.maxToolRounds,
      signal,
    });
  } catch (err) {
    if (signal?.aborted) return { answer, replaced: false, toolCalls, cards: [], usage };
    const status = (err as { status?: unknown })?.status;
    console.error(`[assistant] erreur du fournisseur ${provider.id}: ${(err as Error)?.name ?? "Error"}${typeof status === "number" ? ` ${status}` : ""}`);
    if (!answer.trim()) {
      emit({ t: "error", v: UNAVAILABLE_MESSAGE });
      emit({ t: "done" });
      return { answer: "", replaced: true, toolCalls, cards: [], usage };
    }
    // Réponse interrompue : on ne laisse pas un texte partiel non vérifié.
    emit({ t: "final", v: EMPTY_FALLBACK });
    emit({ t: "done" });
    return { answer: EMPTY_FALLBACK, replaced: true, toolCalls, cards: [], usage };
  }

  const final = finalizeAnswer(answer, toolResults, history);
  if (final.replaced) console.warn(`[assistant] réponse remplacée (${final.ungrounded.length ? "chiffre non vérifié" : "réponse vide"})`);
  if (final.text !== answer) emit({ t: "final", v: final.text });
  const cards = final.replaced ? [] : citedCards(final.text, candidates, 3);
  if (cards.length) emit({ t: "cards", v: cards });
  emit({ t: "done" });
  return { answer: final.text, replaced: final.replaced, toolCalls, cards, usage };
}
