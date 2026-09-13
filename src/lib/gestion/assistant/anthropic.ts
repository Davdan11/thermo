/* ==================================================================
   Chantier A — appel direct de l'API Messages d'Anthropic (fetch, sans
   SDK ni dépendance). Serveur seulement : la clé ne quitte jamais le
   serveur. N'est construit qu'en production avec une clé (voir
   service.ts) ; les tests passent un fetch simulé.
   ================================================================== */

import { ANTHROPIC_MESSAGES_URL, ANTHROPIC_VERSION } from "./config";

export type Block = { type: string; [k: string]: unknown };

export interface ApiMessage {
  role: "user" | "assistant";
  content: string | Block[];
}

export interface ToolDef {
  name: string;
  description: string;
  input_schema: Record<string, unknown>;
  cache_control?: { type: "ephemeral" };
}

export interface MessagesRequest {
  model: string;
  max_tokens: number;
  system: Array<{ type: "text"; text: string; cache_control?: { type: "ephemeral" } }>;
  tools: ToolDef[];
  tool_choice: { type: "auto" | "none" };
  messages: ApiMessage[];
  output_config?: { effort: "low" | "medium" | "high" };
  fallbacks?: "default";
}

export interface MessagesResponse {
  model?: string;
  content: Block[];
  stop_reason: string | null;
  usage?: {
    input_tokens?: number;
    output_tokens?: number;
    cache_read_input_tokens?: number | null;
    cache_creation_input_tokens?: number | null;
  };
}

export type MessagesCall = (body: MessagesRequest) => Promise<MessagesResponse>;

export type ApiErrorCode = "cle-refusee" | "modele" | "limite-anthropic" | "surcharge" | "requete" | "reseau" | "delai";

export class AssistantApiError extends Error {
  constructor(
    readonly code: ApiErrorCode,
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "AssistantApiError";
  }
}

export const API_ERROR_MESSAGES: Record<ApiErrorCode, string> = {
  "cle-refusee": "La clé ANTHROPIC_API_KEY a été refusée par Anthropic. Vérifiez-la dans shared/.env.",
  modele: "Le modèle demandé (ANTHROPIC_MODEL) est introuvable chez Anthropic.",
  "limite-anthropic": "Anthropic limite le nombre de demandes en ce moment. Réessayez dans une minute.",
  surcharge: "Le service d’Anthropic est surchargé. Réessayez dans quelques instants.",
  requete: "Anthropic a refusé la demande. Réessayez ; si le problème persiste, consultez les journaux du serveur.",
  reseau: "Impossible de joindre Anthropic. Vérifiez la connexion du serveur.",
  delai: "Anthropic a mis trop de temps à répondre. Réessayez avec une question plus simple.",
};

function codeFor(status: number): ApiErrorCode {
  if (status === 401 || status === 403) return "cle-refusee";
  if (status === 404) return "modele";
  if (status === 429) return "limite-anthropic";
  if (status >= 500) return "surcharge";
  return "requete";
}

export function createAnthropicCaller(opts: { apiKey: string; fetchImpl?: typeof fetch; timeoutMs: number; betas?: string[] }): MessagesCall {
  const doFetch = opts.fetchImpl ?? fetch;
  return async (body) => {
    let res: Response;
    try {
      res = await doFetch(ANTHROPIC_MESSAGES_URL, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": opts.apiKey,
          "anthropic-version": ANTHROPIC_VERSION,
          ...(opts.betas?.length ? { "anthropic-beta": opts.betas.join(",") } : {}),
        },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(opts.timeoutMs),
      });
    } catch (e) {
      const name = (e as { name?: string })?.name;
      throw new AssistantApiError(name === "TimeoutError" || name === "AbortError" ? "delai" : "reseau", String((e as Error)?.message ?? e));
    }
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      // Le détail reste dans les journaux du serveur (jamais la clé, jamais renvoyé tel quel au navigateur).
      console.error(`[assistant] Anthropic ${res.status} : ${detail.slice(0, 300)}`);
      throw new AssistantApiError(codeFor(res.status), `HTTP ${res.status}`, res.status);
    }
    const json = (await res.json()) as MessagesResponse;
    if (!json || !Array.isArray(json.content)) throw new AssistantApiError("requete", "Réponse illisible.");
    return json;
  };
}
