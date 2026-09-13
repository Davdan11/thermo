/* ==================================================================
   Chantier A — boucle d'outils (pure : le transport est injecté).

   Chaque réponse « tool_use » est renvoyée telle quelle (blocs de
   réflexion compris), puis tous les résultats d'outils partent dans
   UN seul message. Le dernier tour se fait sans outil (tool_choice
   « none ») pour garantir une réponse. Plafonds : tours et appels.
   ================================================================== */

import type { ApiMessage, Block, MessagesCall, ToolDef } from "./anthropic";
import { addUsage, emptyUsage, type Usage } from "./cost";

export interface LoopOptions {
  call: MessagesCall;
  model: string;
  system: string;
  tools: ToolDef[];
  messages: ApiMessage[];
  execute: (name: string, input: unknown) => Promise<string>;
  maxOutputTokens: number;
  maxToolRounds: number;
  maxToolCalls: number;
  fallbacks: boolean;
  /** Appelé après chaque appel réussi : l'usage reste compté même si un appel suivant échoue. */
  onUsage?: (u: Usage) => void;
}

export interface LoopResult {
  text: string;
  stopReason: string;
  usage: Usage;
  toolCalls: string[];
  toolOutputs: string[];
}

const textOf = (blocks: Block[]) =>
  blocks
    .filter((b) => b.type === "text" && typeof b.text === "string")
    .map((b) => b.text as string)
    .join("")
    .trim();

export async function runToolLoop(o: LoopOptions): Promise<LoopResult> {
  const messages = [...o.messages];
  let usage = emptyUsage();
  const toolCalls: string[] = [];
  const toolOutputs: string[] = [];
  const texts: string[] = [];
  // Outils et consignes identiques d'un appel à l'autre : préfixe mis en cache.
  const tools = o.tools.map((t, i) => (i === o.tools.length - 1 ? { ...t, cache_control: { type: "ephemeral" as const } } : t));

  for (let round = 0; round <= o.maxToolRounds; round++) {
    const last = round === o.maxToolRounds || toolCalls.length >= o.maxToolCalls;
    const res = await o.call({
      model: o.model,
      max_tokens: o.maxOutputTokens,
      system: [{ type: "text", text: o.system, cache_control: { type: "ephemeral" } }],
      tools,
      tool_choice: { type: last ? "none" : "auto" },
      messages,
      // Questions de gestion : « medium » suffit et coûte moins (réflexion adaptative par défaut).
      output_config: { effort: "medium" },
      ...(o.fallbacks ? { fallbacks: "default" as const } : {}),
    });
    const step = addUsage(emptyUsage(), {
      requests: 1,
      inputTokens: res.usage?.input_tokens ?? 0,
      outputTokens: res.usage?.output_tokens ?? 0,
      cacheReadTokens: res.usage?.cache_read_input_tokens ?? 0,
      cacheWriteTokens: res.usage?.cache_creation_input_tokens ?? 0,
    });
    usage = addUsage(usage, step);
    o.onUsage?.(step);
    const content = Array.isArray(res.content) ? res.content : [];
    const text = textOf(content);
    if (text) texts.push(text);
    const stop = res.stop_reason ?? "end_turn";

    if (stop !== "tool_use" || last) {
      // Réponse finale : le texte du dernier appel (le préambule d'avant les outils n'est pas répété).
      return { text: text || texts.join("\n\n"), stopReason: stop, usage, toolCalls, toolOutputs };
    }

    const uses = content.filter((b) => b.type === "tool_use" && typeof b.id === "string" && typeof b.name === "string");
    messages.push({ role: "assistant", content });
    const results: Block[] = await Promise.all(
      uses.map(async (u) => {
        if (toolCalls.length >= o.maxToolCalls) return { type: "tool_result", tool_use_id: u.id, content: "Limite d’outils atteinte pour cette question.", is_error: true };
        toolCalls.push(u.name as string);
        try {
          const out = await o.execute(u.name as string, u.input);
          toolOutputs.push(out);
          return { type: "tool_result", tool_use_id: u.id, content: out };
        } catch (e) {
          console.error(`[assistant] outil ${String(u.name)} :`, e);
          return { type: "tool_result", tool_use_id: u.id, content: "Erreur de l’outil : donnée indisponible.", is_error: true };
        }
      }),
    );
    messages.push({ role: "user", content: results });
  }
  return { text: texts.join("\n\n"), stopReason: "end_turn", usage, toolCalls, toolOutputs };
}
