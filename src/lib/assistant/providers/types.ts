/* ==================================================================
   Assistant — interface commune des fournisseurs (Claude, Gemini, factice)
   Les outils et les consignes sont partagés ; seul le transport change.
   ================================================================== */

import type { ChatTurn, ProviderId } from "../config";
import type { ToolDef } from "../tools";

export interface ProviderUsage {
  requests: number;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheWriteTokens: number;
}

export interface ProviderRunArgs {
  system: string;
  history: ChatTurn[];
  tools: ToolDef[];
  /** Exécute un outil ; renvoie son résultat en JSON (objet). */
  executeTool: (name: string, input: unknown) => Promise<string>;
  /** Morceau de texte de la réponse, dès qu'il arrive. */
  onText: (delta: string) => void;
  maxOutputTokens: number;
  /** Allers-retours avec les outils ; le dernier appel n'a plus droit aux outils. */
  maxToolRounds: number;
  signal?: AbortSignal;
}

export interface AssistantProvider {
  id: ProviderId;
  run(args: ProviderRunArgs): Promise<ProviderUsage>;
}

export const emptyUsage = (): ProviderUsage => ({ requests: 0, inputTokens: 0, outputTokens: 0, cacheReadTokens: 0, cacheWriteTokens: 0 });

/** Signal annulé par la déconnexion du visiteur ou après `ms`. */
export function withTimeout(signal: AbortSignal | undefined, ms: number): AbortSignal {
  const timeout = AbortSignal.timeout(ms);
  if (!signal) return timeout;
  const any = (AbortSignal as unknown as { any?: (s: AbortSignal[]) => AbortSignal }).any;
  if (typeof any === "function") return any([signal, timeout]);
  const ctrl = new AbortController();
  const abort = () => ctrl.abort();
  signal.addEventListener("abort", abort, { once: true });
  timeout.addEventListener("abort", abort, { once: true });
  return ctrl.signal;
}
