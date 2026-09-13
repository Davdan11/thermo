/* ==================================================================
   Chantier R — vérification automatique des licences RBQ.

   Source officielle : « Liste des licences actives de la Régie du
   bâtiment du Québec », Données Québec (licence CC-BY 4.0, mise à jour
   quotidienne). Le fichier ne contient QUE les licences actives :
   une licence absente est « absente de la liste des licences
   actives » (suspendue, annulée, expirée ou numéro mal saisi : le
   fichier ne permet pas de le distinguer). Aucun statut n'est inventé.
   ================================================================== */

export const RBQ_OUTCOMES = ["active", "suspendue", "annulee", "autre", "introuvable", "numero-manquant"] as const;
export type RbqOutcome = (typeof RBQ_OUTCOMES)[number];

export const RBQ_OUTCOME_LABELS: Record<RbqOutcome, string> = {
  active: "Active selon la RBQ",
  suspendue: "Suspendue selon la RBQ",
  annulee: "Annulée selon la RBQ",
  autre: "Statut inhabituel",
  introuvable: "Absente de la liste des licences actives",
  "numero-manquant": "Numéro à saisir",
};

/** Une licence telle que lue dans le fichier (plusieurs lignes par licence : une par sous-catégorie). */
export interface RbqRecord {
  /** Chiffres seulement. */
  number: string;
  /** Statut tel qu'écrit dans le fichier. */
  status: string;
  licenceType: string;
  category: string;
  subcategories: string[];
  restriction: string;
  restrictionStart: string;
  restrictionEnd: string;
  /** Nom de l'intervenant au registre (jamais le courriel ni le téléphone, qui ne sont pas conservés). */
  name: string;
  municipality: string;
  region: string;
  issuedOn: string;
}

export interface RbqSourceMeta {
  url: string;
  fetchedAt: string;
  /** En-tête Last-Modified du fichier, s'il est fourni. */
  lastModified: string | null;
  rows: number;
  licences: number;
  encoding: string;
  delimiter: string;
}

export interface RbqVerification {
  checkedAt: string;
  /** Numéro vérifié, tel que saisi. */
  number: string;
  outcome: RbqOutcome;
  /** Statut tel qu'écrit dans le fichier ; absent si la licence n'y figure pas. */
  rawStatus?: string;
  licenceType?: string;
  subcategories: string[];
  registryName?: string;
  restriction?: { text: string; from: string; to: string } | null;
  /** Sous-catégories exigées par le propriétaire (réglage) et absentes de la licence. */
  missingSubcategories: string[];
  source: { url: string; fetchedAt: string; lastModified: string | null; licences: number };
  /** Première vérification où le blocage a été constaté (clé stable de la tâche). */
  blockingSince?: string;
  /** Le propriétaire a vérifié lui-même au registre public : blocage levé jusqu'à `until`. */
  override?: { at: string; by: string; note: string; until: string } | null;
}

export type RbqRunStatus = "ok" | "desactive" | "hors-production" | "echec" | "source-illisible";

export const RBQ_RUN_LABELS: Record<RbqRunStatus, string> = {
  ok: "Vérification faite",
  desactive: "Désactivée",
  "hors-production": "Hors production : aucun téléchargement",
  echec: "Échec du téléchargement",
  "source-illisible": "Fichier illisible : rien n’a changé",
};

export interface RbqRun {
  at: string;
  status: RbqRunStatus;
  detail: string;
  source?: RbqSourceMeta;
  checked: number;
  blocked: number;
  lifted: number;
  /** Résultat du courriel d'alerte au propriétaire, s'il y en a eu un. */
  alert?: string;
}
