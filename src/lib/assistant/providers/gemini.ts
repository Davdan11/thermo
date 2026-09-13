/* ==================================================================
   Assistant — fournisseur de repli : Gemini (API REST, comme ThermoScan)

   Pas de dépendance : appel direct à streamGenerateContent (SSE) avec
   appel de fonctions. Clé transmise en en-tête (jamais dans l'adresse,
   pour qu'elle n'apparaisse pas dans les journaux).
   ================================================================== */

import type { ToolDef } from "../tools";
import type { AssistantProvider, ProviderRunArgs } from "./types";
import { emptyUsage, withTimeout } from "./types";

interface GeminiPart {
  text?: string;
  thought?: boolean;
  thoughtSignature?: string;
  functionCall?: { id?: string; name: string; args?: Record<string, unknown> };
  functionResponse?: { id?: string; name: string; response: Record<string, unknown> };
}
interface GeminiContent {
  role: "user" | "model";
  parts: GeminiPart[];
}
interface GeminiChunk {
  candidates?: Array<{ content?: { parts?: GeminiPart[] }; finishReason?: string }>;
  error?: { code?: number; status?: string };
  usageMetadata?: { promptTokenCount?: number; candidatesTokenCount?: number; thoughtsTokenCount?: number; cachedContentTokenCount?: number };
}

/** Schéma JSON des outils → schéma OpenAPI de Gemini (types en majuscules). */
export function toGeminiDeclaration(t: ToolDef) {
  const properties = Object.fromEntries(
    Object.entries(t.input_schema.properties).map(([k, p]) => [k, { type: p.type.toUpperCase(), description: p.description, ...(p.enum ? { enum: p.enum } : {}) }]),
  );
  return {
    name: t.name,
    description: t.description,
    parameters: { type: "OBJECT", properties, ...(t.input_schema.required?.length ? { required: t.input_schema.required } : {}) },
  };
}

const RETRYABLE = new Set([429, 500, 502, 503, 504]);

export function createGeminiProvider(apiKey: string, model: string): AssistantProvider {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:streamGenerateContent?alt=sse`;

  return {
    id: "gemini",
    async run({ system, history, tools, executeTool, onText, maxOutputTokens, maxToolRounds, signal }: ProviderRunArgs) {
      const usage = emptyUsage();
      const declarations = tools.map(toGeminiDeclaration);
      const contents: GeminiContent[] = history.map((t) => ({ role: t.role === "assistant" ? "model" : "user", parts: [{ text: t.content }] }));
      let wroteText = false;

      for (let round = 0; round <= maxToolRounds; round++) {
        const lastRound = round === maxToolRounds;
        const body = JSON.stringify({
          systemInstruction: { parts: [{ text: system }] },
          contents,
          tools: [{ functionDeclarations: declarations }],
          // Premier appel : au moins un outil. Sans cela, Gemini répond parfois de mémoire (chiffres inventés compris).
          toolConfig: { functionCallingConfig: { mode: lastRound ? "NONE" : round === 0 ? "ANY" : "AUTO" } },
          generationConfig: { temperature: 0.2, maxOutputTokens, thinkingConfig: { thinkingBudget: 0 } },
        });

        // Une reprise sur erreur passagère (fréquent avec Gemini), avant tout texte diffusé.
        let resp: Response | null = null;
        for (let attempt = 0; attempt < 2; attempt++) {
          resp = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
            body,
            signal: withTimeout(signal, 45_000),
          });
          if (resp.ok || !RETRYABLE.has(resp.status) || attempt === 1) break;
          await resp.body?.cancel().catch(() => {});
          await new Promise((r) => setTimeout(r, 1200));
        }
        if (!resp || !resp.ok || !resp.body) throw Object.assign(new Error(`Gemini HTTP ${resp?.status ?? "?"}`), { status: resp?.status });

        const modelParts: GeminiPart[] = [];
        const calls: NonNullable<GeminiPart["functionCall"]>[] = [];
        let roundHasText = false;
        let lastUsage: GeminiChunk["usageMetadata"];
        let finishReason: string | undefined;

        const handle = (chunk: GeminiChunk) => {
          // Erreur au milieu du flux (quota, surcharge) : on s'arrête, la réponse partielle sera remplacée.
          if (chunk.error) throw Object.assign(new Error(`Gemini ${chunk.error.status ?? "erreur"}`), { status: chunk.error.code });
          if (chunk.usageMetadata) lastUsage = chunk.usageMetadata;
          const reason = chunk.candidates?.[0]?.finishReason;
          if (reason) finishReason = reason;
          for (const part of chunk.candidates?.[0]?.content?.parts ?? []) {
            if (part.thought) {
              modelParts.push(part);
              continue;
            }
            if (part.functionCall) {
              modelParts.push(part);
              calls.push(part.functionCall);
              continue;
            }
            if (typeof part.text === "string" && part.text) {
              if (!roundHasText && wroteText) onText("\n\n");
              roundHasText = true;
              wroteText = true;
              onText(part.text);
              const prev = modelParts[modelParts.length - 1];
              if (prev && typeof prev.text === "string" && !prev.thought && !prev.thoughtSignature) prev.text += part.text;
              else modelParts.push({ ...part });
            }
          }
        };

        const handleLine = (line: string) => {
          let chunk: GeminiChunk | null = null;
          try {
            chunk = JSON.parse(line.slice(5)) as GeminiChunk;
          } catch {
            /* ligne incomplète ou non JSON : ignorée */
          }
          if (chunk) handle(chunk);
        };

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        for (;;) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          let nl: number;
          while ((nl = buffer.indexOf("\n")) >= 0) {
            const line = buffer.slice(0, nl).trim();
            buffer = buffer.slice(nl + 1);
            if (line.startsWith("data:")) handleLine(line);
          }
        }
        const tail = buffer.trim();
        if (tail.startsWith("data:")) handleLine(tail);

        usage.requests += 1;
        usage.inputTokens += lastUsage?.promptTokenCount ?? 0;
        usage.outputTokens += (lastUsage?.candidatesTokenCount ?? 0) + (lastUsage?.thoughtsTokenCount ?? 0);
        usage.cacheReadTokens += lastUsage?.cachedContentTokenCount ?? 0;

        // Texte final sans fin normale (flux coupé, limite de jetons, filtre) : pas de phrase tronquée à l'écran.
        if (!calls.length && finishReason !== "STOP") {
          throw new Error(`Gemini : réponse incomplète (${finishReason ?? "flux coupé"})`);
        }
        if (!calls.length || lastRound) break;

        contents.push({ role: "model", parts: modelParts });
        const responses = await Promise.all(
          calls.map(async (c) => {
            const result = JSON.parse(await executeTool(c.name, c.args ?? {})) as Record<string, unknown>;
            return { functionResponse: { ...(c.id ? { id: c.id } : {}), name: c.name, response: result } } satisfies GeminiPart;
          }),
        );
        contents.push({ role: "user", parts: responses });
      }
      return usage;
    },
  };
}
