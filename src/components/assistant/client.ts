/* ==================================================================
   Assistant — client navigateur, sans SDK : POST /api/assistant et
   lecture du flux NDJSON (un événement JSON par ligne).
   ================================================================== */

import type { AssistantEvent } from "@/lib/assistant/run";
import type { ModelCard } from "@/lib/assistant/tools";

export type { AssistantEvent };
export type AssistantCard = ModelCard;

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

/** Découpe un flux NDJSON en événements ; les lignes illisibles sont ignorées. */
export function createNdjsonParser(onEvent: (e: AssistantEvent) => void) {
  let buffer = "";
  const emitLine = (line: string) => {
    const t = line.trim();
    if (!t) return;
    try {
      onEvent(JSON.parse(t) as AssistantEvent);
    } catch {
      /* ligne incomplète ou invalide */
    }
  };
  return {
    push(chunk: string) {
      buffer += chunk;
      let nl: number;
      while ((nl = buffer.indexOf("\n")) >= 0) {
        emitLine(buffer.slice(0, nl));
        buffer = buffer.slice(nl + 1);
      }
    },
    end() {
      emitLine(buffer);
      buffer = "";
    },
  };
}

const UNAVAILABLE = "L'assistant est momentanément indisponible. Réessayez ou appelez-nous au 438-900-3224.";

export async function askAssistant(messages: ChatMessage[], onEvent: (e: AssistantEvent) => void, signal?: AbortSignal): Promise<void> {
  const resp = await fetch("/api/assistant", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
    signal,
  });
  if (!resp.ok || !resp.body) {
    let message = UNAVAILABLE;
    try {
      const data = (await resp.json()) as { error?: string };
      if (data?.error) message = data.error;
    } catch {
      /* corps non JSON */
    }
    onEvent({ t: "error", v: message });
    onEvent({ t: "done" });
    return;
  }
  const parser = createNdjsonParser(onEvent);
  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    parser.push(decoder.decode(value, { stream: true }));
  }
  parser.end();
}
