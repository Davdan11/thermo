/* ==================================================================
   Assistant — fournisseur principal : Claude (SDK officiel @anthropic-ai/sdk)

   Boucle d'outils en flux : chaque appel diffuse son texte, puis les
   outils demandés sont exécutés et renvoyés. Le dernier appel se fait
   sans outil (tool_choice « none ») pour garantir une réponse.
   Consignes + outils mis en cache (préfixe identique à chaque appel).
   ================================================================== */

import Anthropic from "@anthropic-ai/sdk";
import type { AssistantProvider, ProviderRunArgs } from "./types";
import { emptyUsage, withTimeout } from "./types";

export function createAnthropicProvider(apiKey: string, model: string): AssistantProvider {
  const client = new Anthropic({ apiKey, maxRetries: 1, timeout: 45_000 });

  return {
    id: "anthropic",
    async run({ system, history, tools, executeTool, onText, maxOutputTokens, maxToolRounds, signal }: ProviderRunArgs) {
      const usage = emptyUsage();
      const toolParams: Anthropic.Tool[] = tools.map((t) => ({ name: t.name, description: t.description, input_schema: t.input_schema }));
      const messages: Anthropic.MessageParam[] = history.map((t) => ({ role: t.role, content: t.content }));
      let wroteText = false;

      for (let round = 0; round <= maxToolRounds; round++) {
        const lastRound = round === maxToolRounds;
        const stream = client.messages.stream(
          {
            model,
            max_tokens: maxOutputTokens,
            system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
            tools: toolParams,
            tool_choice: lastRound ? { type: "none" } : { type: "auto" },
            // Questions courtes, réponses courtes : peu de réflexion suffit et coûte moins.
            output_config: { effort: "low" },
            messages,
          },
          { signal: withTimeout(signal, 60_000) },
        );

        let roundHasText = false;
        stream.on("text", (delta) => {
          if (!roundHasText && wroteText) onText("\n\n");
          roundHasText = true;
          wroteText = true;
          onText(delta);
        });

        const message = await stream.finalMessage();
        usage.requests += 1;
        usage.inputTokens += message.usage.input_tokens;
        usage.outputTokens += message.usage.output_tokens;
        usage.cacheReadTokens += message.usage.cache_read_input_tokens ?? 0;
        usage.cacheWriteTokens += message.usage.cache_creation_input_tokens ?? 0;

        // Réponse coupée par la limite de jetons : le repli prudent vaut mieux qu'une phrase tronquée.
        if (message.stop_reason === "max_tokens") throw new Error("Claude : réponse coupée (max_tokens)");
        if (message.stop_reason !== "tool_use") break;

        const toolUses = message.content.filter((b): b is Anthropic.ToolUseBlock => b.type === "tool_use");
        messages.push({ role: "assistant", content: message.content });
        const results: Anthropic.ToolResultBlockParam[] = await Promise.all(
          toolUses.map(async (u) => ({ type: "tool_result" as const, tool_use_id: u.id, content: await executeTool(u.name, u.input) })),
        );
        messages.push({ role: "user", content: results });
      }
      return usage;
    },
  };
}
