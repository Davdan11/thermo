/* ==================================================================
   Textos reçus au numéro du site (Twilio) : une conversation par
   numéro de client, avec son fil de messages.
   ================================================================== */

/** Mots-clés reconnus : désabonnement, réabonnement, aide. */
export type Keyword = "stop" | "start" | "aide";

export interface TextoMedia {
  /** URL Twilio de la pièce jointe (MMS). Lue seulement par la route protégée /gestion/api/textos/media. */
  url: string;
  type: string;
}

/**
 * Statuts Twilio (queued, sent, delivered…) et statuts locaux :
 * « auto » (réponse TwiML automatique), « echec » (refus de l'API), « simule » (développement).
 */
export type TextoStatus =
  | "accepted"
  | "scheduled"
  | "queued"
  | "sending"
  | "sent"
  | "delivered"
  | "read"
  | "undelivered"
  | "failed"
  | "canceled"
  | "echec"
  | "simule"
  | "auto";

export interface TextoMessage {
  /** Identifiant local (m_…), utilisé dans les URL de l'outil. */
  id: string;
  /** MessageSid de Twilio. Sert à l'idempotence des webhooks. */
  sid?: string;
  dir: "in" | "out";
  body: string;
  media?: TextoMedia[];
  /** Reçu (entrant) ou envoyé (sortant), ISO. */
  at: string;
  /** Entrant : mot-clé reconnu (ARRÊT, DEBUT, AIDE…). */
  keyword?: Keyword;
  /** Sortant automatique : accusé de réception ou confirmation d'un mot-clé. */
  auto?: "accuse" | Keyword;
  /** Sortant manuel : adresse de la personne connectée. */
  by?: string;
  status?: TextoStatus;
  error?: string;
  errorCode?: number;
}

export interface Conversation {
  /** Identifiant opaque (c_…) : le numéro n'apparaît jamais dans les URL. */
  id: string;
  /** Numéro du client, E.164 (+15145551234). Clé de la conversation. */
  phone: string;
  createdAt: string;
  lastAt: string;
  unread: number;
  archived: boolean;
  /** A écrit ARRÊT, STOP… : plus aucun envoi tant qu'il n'écrit pas DEBUT, START ou OUI. */
  optedOut: boolean;
  optChangedAt?: string;
  lastAutoReplyAt?: string;
  lastManualAt?: string;
  /** Avis courriel au propriétaire : au plus un par 10 minutes ; `pending` = messages pas encore signalés. */
  notify: { lastEmailAt?: string; pending: number };
  /** Ville et province transmises par Twilio (FromCity, FromState), si connues. */
  place?: string;
  messages: TextoMessage[];
}

export interface TextosSettings {
  autoReply: boolean;
  autoReplyText: string;
  updatedAt?: string;
  updatedBy?: string;
}

export interface TextosData {
  version: 1;
  /** Clé : numéro E.164 du client. */
  conversations: Record<string, Conversation>;
  settings: TextosSettings;
  /** Données de démonstration (scripts/textos-seed.ts), jamais en production. */
  seed?: true;
}
