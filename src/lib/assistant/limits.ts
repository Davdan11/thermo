/* ==================================================================
   Assistant — limites (constantes pures, lisibles côté client et serveur)
   ================================================================== */

export const ASSISTANT_LIMITS = {
  /** Longueur maximale d'une question (caractères). */
  maxQuestionChars: 500,
  /** Questions par conversation. */
  maxUserTurns: 6,
  /** Longueur maximale d'une réponse précédente renvoyée par le navigateur. */
  maxAssistantChars: 2400,
  /** Taille maximale du corps de la requête (octets). */
  maxBodyBytes: 24_000,
  /** Jetons de sortie par appel au modèle (avec Claude, la réflexion adaptative est comprise). */
  maxOutputTokens: 1500,
  /** Appels d'outils par réponse. */
  maxToolCalls: 5,
  /** Allers-retours avec les outils avant la réponse finale obligatoire. */
  maxToolRounds: 3,
  /** Requêtes par adresse IP. */
  perIpPerMinute: 6,
  perIpPerDay: 60,
} as const;
