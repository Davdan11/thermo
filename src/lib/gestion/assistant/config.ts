/* ==================================================================
   Chantier A — Assistant IA du CRM (« Demande à Claude ») :
   configuration et limites.

   Variables (shared/.env, ajoutées par le propriétaire) :
     ANTHROPIC_API_KEY               clé de l'API (jamais dans le dépôt)
     ANTHROPIC_MODEL                 modèle, « claude-opus-5 » par défaut
     ANTHROPIC_MONTHLY_BUDGET_CENTS  plafond mensuel, en cents (facultatif)

   Hors production (développement, tests), AUCUN appel réel : un
   transport simulé répond à partir des mêmes outils. Les tests du vrai
   chemin passent un environnement « production » et un fetch simulé.
   ================================================================== */

type Env = Record<string, string | undefined>;

export const CRM_ASSISTANT_DEFAULT_MODEL = "claude-opus-5";
export const ANTHROPIC_MESSAGES_URL = "https://api.anthropic.com/v1/messages";
export const ANTHROPIC_VERSION = "2023-06-01";
/** Reprise d'une question refusée par les filtres de sécurité sur le modèle de repli recommandé (claude-opus-5 seulement). */
export const FALLBACK_BETA = "server-side-fallback-2026-07-01";

export const CRM_ASSISTANT_LIMITS = {
  /** Longueur d'une question (caractères). */
  maxQuestionChars: 1000,
  /** Tours gardés dans la conversation (questions + réponses). */
  maxHistoryTurns: 10,
  /** Longueur d'une réponse précédente renvoyée par le navigateur. */
  maxHistoryChars: 4000,
  /** Taille du corps de la requête (octets). */
  maxBodyBytes: 60_000,
  /** Jetons de sortie par appel (réflexion adaptative comprise). */
  maxOutputTokens: 6000,
  /** Allers-retours avec les outils avant la réponse obligatoire. */
  maxToolRounds: 5,
  /** Appels d'outils par question. */
  maxToolCalls: 12,
  /** Questions par administrateur. */
  perMinute: 6,
  perHour: 60,
  /** Délai d'un appel à l'API. */
  timeoutMs: 90_000,
  /** Lignes gardées dans le journal des questions. */
  journalMax: 300,
} as const;

export type AssistantMode = "api" | "simule" | "cle-absente";

/** « api » : vrais appels (production, clé présente). « simule » : développement et tests. */
export function assistantMode(env: Env = process.env): AssistantMode {
  if (env.NODE_ENV !== "production") return "simule";
  return env.ANTHROPIC_API_KEY?.trim() ? "api" : "cle-absente";
}

export function crmAssistantModel(env: Env = process.env): string {
  return env.ANTHROPIC_MODEL?.trim() || CRM_ASSISTANT_DEFAULT_MODEL;
}

/** Plafond mensuel en cents ; null si absent ou illisible (aucun plafond n'est inventé). */
export function monthlyBudgetCents(env: Env = process.env): number | null {
  const raw = env.ANTHROPIC_MONTHLY_BUDGET_CENTS?.trim();
  if (!raw) return null;
  const n = Number(raw);
  return Number.isFinite(n) && n >= 0 ? Math.floor(n) : null;
}

/** Repli côté serveur (paramètre « fallbacks » et en-tête bêta) : ÉTEINT par défaut, tant que sa prise en charge par l’API n’est pas confirmée
    (un paramètre ou un en-tête inconnu ferait refuser la requête). ANTHROPIC_SERVER_FALLBACKS=1 l’allume, pour le modèle par défaut seulement. */
export const usesServerFallbacks = (model: string, env: Record<string, string | undefined> = process.env): boolean =>
  env.ANTHROPIC_SERVER_FALLBACKS?.trim() === "1" && model === CRM_ASSISTANT_DEFAULT_MODEL;
