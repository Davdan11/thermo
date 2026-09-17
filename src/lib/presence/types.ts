/* ==================================================================
   Studio de présence : réglages communs et ancienne file.

   Depuis le robot Facebook (src/lib/social), presence.json ne garde
   que l'interrupteur « Publication automatique », son journal et
   l'ancienne file, conservée pour l'historique : ses éléments sont
   retirés (rejetés) et ne partent jamais. Aucune dépendance serveur.
   ================================================================== */

export type SourceValue = number | string | boolean | null;

/** « D'où viennent les chiffres » d'un texte (articles du blogue). */
export interface PostSource {
  subject: string;
  page: string;
  pageLabel: string;
  values: Record<string, SourceValue>;
  labels: Record<string, string>;
  texts: string[];
  datasets: Array<{ label: string; url?: string }>;
  derived?: Array<{ key: string; formula: string }>;
  generatedAt: string;
}

export interface PresenceSettings {
  /** Interrupteur général. Éteint (par défaut) : rien ne part vers Facebook, le studio montre ce qui serait envoyé. */
  autoPublish: boolean;
  updatedAt?: string;
  updatedBy?: string;
}

/** Élément de l'ancienne file (séries modèle, froid, LogisVert…) : lu et retiré, jamais envoyé. Les autres champs sont gardés tels quels. */
export interface AncienElement {
  id: string;
  series: string;
  date: string;
  status: string;
  scheduledAt?: string;
  source?: { subject?: string };
  rejectedAt?: string;
  rejectedBy?: string;
  rejectReason?: string;
  updatedAt?: string;
  publishedAt?: string;
  [champ: string]: unknown;
}

export interface PresenceLogEntry {
  at: string;
  postId?: string;
  level: "info" | "ok" | "erreur" | "essai";
  message: string;
}

export interface PresenceData {
  version: 1;
  settings: PresenceSettings;
  /** Ancienne file (lecture seule, éléments retirés). */
  posts: AncienElement[];
  log: PresenceLogEntry[];
  [champ: string]: unknown;
}
