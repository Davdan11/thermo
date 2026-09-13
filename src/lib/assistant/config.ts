/* ==================================================================
   Assistant — configuration, fournisseur et limites

   Fournisseur choisi côté serveur uniquement :
   - Claude (ANTHROPIC_API_KEY), modèle ASSISTANT_MODEL (défaut claude-sonnet-5) ;
   - Gemini seulement sur demande explicite (ASSISTANT_GEMINI=1) : GEMINI_API_KEY sert
     d’abord à ThermoScan, dont l’assistant ne doit jamais vider le quota ;
   - sinon rien : le bouton n'est pas affiché et l'API répond 503.
   Le fournisseur factice (« mock ») n'existe qu'en développement.
   ================================================================== */

import { ASSISTANT_LIMITS } from "./limits";

export { ASSISTANT_LIMITS };

export type ProviderId = "anthropic" | "gemini" | "mock";

type Env = Record<string, string | undefined>;

export const ASSISTANT_DEFAULT_MODEL = "claude-sonnet-5";
export const ASSISTANT_DEFAULT_GEMINI_MODEL = "gemini-2.5-flash";

/** Réponses par jour, tous visiteurs confondus (garde-fou de coût). */
export function dailyGlobalLimit(env: Env = process.env): number {
  const n = Number(env.ASSISTANT_DAILY_LIMIT);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 800;
}

export function resolveProvider(env: Env = process.env): ProviderId | null {
  if (env.ASSISTANT_DISABLED === "1") return null;
  // Fournisseur factice : jamais en production, quelle que soit la configuration.
  if (env.NODE_ENV !== "production" && env.ASSISTANT_PROVIDER === "mock") return "mock";
  if (env.ANTHROPIC_API_KEY?.trim()) return "anthropic";
  if (env.ASSISTANT_GEMINI === "1" && env.GEMINI_API_KEY?.trim()) return "gemini";
  return null;
}

/** Vrai si l'assistant peut répondre : sinon le bouton n'est pas rendu du tout. */
export function isAssistantEnabled(env: Env = process.env): boolean {
  return resolveProvider(env) !== null;
}

export function anthropicModel(env: Env = process.env): string {
  return env.ASSISTANT_MODEL?.trim() || ASSISTANT_DEFAULT_MODEL;
}

export function geminiModel(env: Env = process.env): string {
  return env.ASSISTANT_GEMINI_MODEL?.trim() || ASSISTANT_DEFAULT_GEMINI_MODEL;
}

/* ------------------------------------------------------------------
   Validation de la conversation envoyée par le navigateur
   ------------------------------------------------------------------ */

export interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

export type ValidationResult =
  | { ok: true; history: ChatTurn[] }
  | { ok: false; status: number; error: string };

export function validateConversation(body: unknown): ValidationResult {
  const raw = (body as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(raw) || raw.length === 0) return { ok: false, status: 400, error: "Question manquante." };
  if (raw.length > ASSISTANT_LIMITS.maxUserTurns * 2) {
    return { ok: false, status: 400, error: "Cette conversation est terminée. Recommencez-en une nouvelle." };
  }

  const history: ChatTurn[] = [];
  for (const item of raw) {
    const role = (item as { role?: unknown })?.role;
    const content = (item as { content?: unknown })?.content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") {
      return { ok: false, status: 400, error: "Conversation invalide." };
    }
    const text = content.trim();
    if (role === "user") {
      if (!text) return { ok: false, status: 400, error: "Question vide." };
      if (text.length > ASSISTANT_LIMITS.maxQuestionChars) {
        return { ok: false, status: 400, error: `Votre question dépasse ${ASSISTANT_LIMITS.maxQuestionChars} caractères. Raccourcissez-la.` };
      }
    }
    // Une réponse précédente vide (interrompue) est ignorée ; trop longue, elle est tronquée.
    if (role === "assistant" && !text) continue;
    history.push({ role, content: role === "assistant" ? text.slice(0, ASSISTANT_LIMITS.maxAssistantChars) : text });
  }

  // Tours alternés, en commençant et en finissant par une question.
  const merged: ChatTurn[] = [];
  for (const turn of history) {
    const last = merged[merged.length - 1];
    if (last && last.role === turn.role) return { ok: false, status: 400, error: "Conversation invalide." };
    merged.push(turn);
  }
  if (merged[0]?.role !== "user" || merged[merged.length - 1]?.role !== "user") {
    return { ok: false, status: 400, error: "Conversation invalide." };
  }
  const userTurns = merged.filter((t) => t.role === "user").length;
  if (userTurns > ASSISTANT_LIMITS.maxUserTurns) {
    return { ok: false, status: 400, error: "Cette conversation est terminée. Recommencez-en une nouvelle." };
  }
  return { ok: true, history: merged };
}
