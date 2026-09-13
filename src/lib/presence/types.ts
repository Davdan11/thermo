/* ==================================================================
   Studio de présence (Facebook + Instagram) : types partagés.
   Aucune dépendance serveur : importable par les composants client.
   ================================================================== */

export const SERIES = ["modele", "question", "froid", "logisvert", "comparatif", "glossaire", "chantier"] as const;
export type SeriesId = (typeof SERIES)[number];

export const STATUSES = ["brouillon", "a_approuver", "planifiee", "publiee", "echec", "rejetee"] as const;
export type PostStatus = (typeof STATUSES)[number];

export const STATUS_LABELS: Record<PostStatus, string> = {
  brouillon: "Brouillon",
  a_approuver: "À approuver",
  planifiee: "Planifiée",
  publiee: "Publiée",
  echec: "Échec",
  rejetee: "Rejetée",
};

export type Network = "facebook" | "instagram";
export const NETWORKS: Network[] = ["facebook", "instagram"];

export type SourceValue = number | string | boolean | null;

/** « D'où viennent les chiffres » : tout ce qu'une publication affiche vient d'ici. */
export interface PostSource {
  /** Ce qui a été choisi (modèle, ville, terme…), en clair. */
  subject: string;
  /** Page du site d'où viennent les chiffres (chemin, sans domaine). */
  page: string;
  pageLabel: string;
  /** Valeurs exactes utilisées, telles que lues dans les données du site. */
  values: Record<string, SourceValue>;
  /** Libellé de chaque valeur, pour le panneau des sources. */
  labels: Record<string, string>;
  /** Noms propres et identifiants repris tels quels (numéros de modèle, AHRI, station) : retirés avant le contrôle des nombres. */
  texts: string[];
  /** Jeux de données consultés. */
  datasets: Array<{ label: string; url?: string }>;
  /** Valeurs calculées à partir des données, avec leur formule en clair. */
  derived?: Array<{ key: string; formula: string }>;
  generatedAt: string;
}

export interface SlidePhoto {
  /** Chemin public de la photo du fabricant (ex. /images/products/official/…webp). */
  path: string;
  /** Vrai si l'URL contient /representatives/ : la mention « Photo représentative » est alors imprimée. */
  representative: boolean;
}

export interface CompareSide {
  kicker: string;
  title: string;
  photo?: SlidePhoto | null;
}

export type Slide =
  | { kind: "cover"; eyebrow: string; kicker?: string; title: string; subtitle?: string; photo?: SlidePhoto | null; facts?: string[] }
  | { kind: "big"; eyebrow: string; value: string; unit: string; lines: string[]; bar?: { pct: number; label: string } | null }
  | { kind: "rows"; eyebrow: string; title: string; rows: Array<{ label: string; value: string; note?: string }> }
  | { kind: "compare"; eyebrow: string; a: CompareSide; b: CompareSide; rows: Array<{ label: string; a: string; b: string }> }
  | { kind: "temp"; eyebrow: string; place: string; value: number; label: string; marks: Array<{ t: number; label: string }> }
  | { kind: "text"; eyebrow: string; title: string; body: string }
  | { kind: "cta"; eyebrow: string; title: string; body: string; url: string };

export type VisualFormat = "carrousel" | "story";

export interface DryRequest {
  network: Network;
  method: "GET" | "POST";
  path: string;
  params: Record<string, string>;
}

export interface FacebookState {
  photoIds?: string[];
  postId?: string;
  pendingVerify?: boolean;
  at?: string;
}

export interface InstagramState {
  childIds?: string[];
  containerId?: string;
  mediaId?: string;
  pendingVerify?: boolean;
  storyContainerId?: string;
  storyMediaId?: string;
  storyPendingVerify?: boolean;
  at?: string;
}

export interface PublishState {
  attempts: number;
  nextAttemptAt?: string;
  lastError?: string;
  lastErrorAt?: string;
  /** Verrou de publication : un seul passage à la fois pour une publication. */
  lockId?: string;
  lockUntil?: string;
  facebook?: FacebookState;
  instagram?: InstagramState;
  /** Mode essai : ce qui aurait été envoyé (sans jeton). */
  dryRun?: { at: string; rev: number; reasons: string[]; requests: DryRequest[] };
}

export interface Post {
  id: string;
  series: SeriesId;
  /** Jour de publication, AAAA-MM-JJ, heure de Montréal. */
  date: string;
  /** Moment exact (UTC, ISO). */
  scheduledAt: string;
  status: PostStatus;
  /** Incrémenté à chaque régénération : change les adresses signées des visuels. */
  rev: number;
  /** Tournure du gabarit retenue. */
  variant: number;
  /** Texte principal (modifiable). Lien, « Lien dans la bio » et mots-clics sont ajoutés selon le réseau. */
  text: string;
  hashtags: string[];
  /** Page du site : chemin, nom affiché (« Lien dans la bio ») et phrase d'appel avant le lien Facebook. */
  link: { path: string; label: string; cta: string };
  source: PostSource;
  slides: Slide[];
  story: Slide | null;
  /** Ligne de source imprimée au bas des visuels. */
  footnote: string;
  /** Clés de rotation (model:…, ville:…, terme:…). */
  rotationKeys: string[];
  edited: boolean;
  question?: { question: string; answer: string };
  createdAt: string;
  updatedAt: string;
  approvedAt?: string;
  approvedBy?: string;
  rejectedAt?: string;
  rejectedBy?: string;
  rejectReason?: string;
  publishedAt?: string;
  publish: PublishState;
}

export interface SeriesSettings {
  enabled: boolean;
  /** Publication sans approbation (possible seulement après une première approbation ; jamais pour « question »). */
  auto: boolean;
  /** Heure de publication, HH:MM, heure de Montréal. */
  time: string;
  /** Publier aussi une story Instagram (1080 × 1920). */
  story: boolean;
}

export interface PresenceSettings {
  /** Interrupteur général. Éteint : rien ne part vers Meta, le studio montre ce qui serait envoyé. */
  autoPublish: boolean;
  /** Pas le même modèle, la même ville ou le même terme avant ce nombre de semaines. */
  rotationWeeks: number;
  series: Record<SeriesId, SeriesSettings>;
  updatedAt?: string;
  updatedBy?: string;
}

export interface TemplateApproval {
  at: string;
  by: string;
  postId: string;
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
  /** Première approbation de chaque série (« une seule validation du gabarit »). */
  approvals: Partial<Record<SeriesId, TemplateApproval>>;
  posts: Post[];
  log: PresenceLogEntry[];
}

/** p-AAAAMMJJ-serie, avec un suffixe -2, -3… pour une publication ajoutée à la main le même jour. */
export const POST_ID_RE = /^p-\d{8}-[a-z]+(?:-\d{1,3})?$/;
