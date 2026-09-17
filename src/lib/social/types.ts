/* ==================================================================
   Robot Facebook de Thermopompes À Vendre.ca : types partagés.

   Une publication naît de FAITS calculés par le code à partir des
   données du site (catalogue, liste LogisVert, normales climatiques,
   compteurs de /methode). Le texte est rédigé à partir de ces faits
   (IA sous garde-fou, sinon gabarit) ; les visuels n'affichent que
   ces faits. Aucune dépendance serveur : importable partout.
   ================================================================== */

export const FORMATS = ["thermopompe-semaine", "duel", "grand-froid", "chiffre", "subventions", "thermomatch"] as const;
export type FormatId = (typeof FORMATS)[number];

export const FORMAT_LIBELLES: Record<FormatId, string> = {
  "thermopompe-semaine": "Thermopompe de la semaine",
  duel: "Duel",
  "grand-froid": "Grand froid",
  chiffre: "Le chiffre",
  subventions: "Subventions",
  thermomatch: "ThermoMatch",
};

/** Publication du fil (1080 × 1350) ou story (1080 × 1920). */
export type Genre = "publication" | "story";

export type Saison = "hiver" | "printemps" | "ete" | "automne";
/** Ce que la saison met en avant : le chauffage (automne, hiver, printemps) ou la climatisation (été). */
export type Usage = "chauffage" | "climatisation";

/* ------------------------------------------------------------------
   Faits
   ------------------------------------------------------------------ */

export interface ModeleFaits {
  id: string;
  /** Adresse actuelle de la fiche (/produit/<slug>). */
  slug: string;
  marque: string;
  marqueSlug: string;
  /** Nom commercial documenté (série du fabricant ou nom imprimé pour ce numéro), jamais un simple code. */
  nomCommercial: string;
  numero: string;
  /** Calibre commercial (classe arrondie), ex. 12 000. */
  calibreBtu: number;
  /** « Murale simple zone », « Centrale gainable »… */
  typeLibelle: string;
  /** Température extérieure minimale de chauffage publiée (°C), ou null. */
  chauffeJusquaC: number | null;
  /** Provenance de cette température, en clair (« brochure du fabricant »). */
  chauffeSource: string | null;
  /** Capacité maximale à −15 °C de l'appariement de la fiche, avec sa condition. */
  capacite15: { btu: number; libelle: string; source: string } | null;
  /** Montant officiel LogisVert de l'appariement de référence (0 : aucun). */
  logisVert: number;
  ahri: string | null;
  seer2: number | null;
  hspf2: number | null;
  climatFroid: boolean;
  /** Photo réelle du fabricant (chemin public), ou null : jamais d'image inventée. */
  photo: string | null;
  /** Logo vérifié de la marque (chemin public), ou null. */
  logo: string | null;
}

export interface VilleFaits {
  slug: string;
  nom: string;
  region: string;
  /** Température de conception de la zone (table des codes postaux du site). */
  conceptionC: number;
  janvierMinC: number | null;
  janvierMoyC: number | null;
  extremeMinC: number | null;
  extremeAnnee: number | null;
  station: string | null;
  periode: string | null;
}

export interface ChiffreFaits {
  cle: string;
  valeur: number;
  libelle: string;
  titre: string;
  definition: string;
  source: string;
  /** « 17 juillet 2025 ». */
  date: string;
}

interface FaitsBase {
  usage: Usage;
  /** Clés de rotation (modele:…, ville:…, chiffre:…, subvention:…) : pas deux fois la même sur 60 jours. */
  cles: string[];
  /** Sujet en clair, pour la file de gestion. */
  sujet: string;
  /** Page du site visée (chemin, ancre comprise). */
  chemin: string;
}

export type Faits =
  | (FaitsBase & { format: "thermopompe-semaine"; modele: ModeleFaits; dateListe: string | null })
  | (FaitsBase & { format: "duel"; a: ModeleFaits; b: ModeleFaits; dateListe: string | null })
  | (FaitsBase & { format: "grand-froid"; ville: VilleFaits; tiennent: number; connues: number })
  | (FaitsBase & { format: "chiffre"; chiffre: ChiffreFaits })
  | (FaitsBase & { format: "subventions"; marque: { slug: string; nom: string; logo: string | null }; admissibles: number; min: number; max: number; climatFroid: number; dateListe: string | null })
  | (FaitsBase & { format: "thermomatch"; fiches: number; marques: number; questions: string });

export type FaitsDe<F extends FormatId> = Extract<Faits, { format: F }>;

/* ------------------------------------------------------------------
   File de publication
   ------------------------------------------------------------------ */

export const STATUTS = ["brouillon", "en_attente", "approuvee", "publiee", "refusee"] as const;
export type Statut = (typeof STATUTS)[number];

export const STATUT_LIBELLES: Record<Statut, string> = {
  brouillon: "Brouillon",
  en_attente: "En attente d'approbation",
  approuvee: "Approuvée",
  publiee: "Publiée",
  refusee: "Refusée",
};

export interface Redaction {
  /** « ia » : texte de l'IA accepté par le garde-fou ; « gabarit » : texte écrit sans IA. */
  mode: "ia" | "gabarit";
  fournisseur?: string;
  /** Raisons du rejet du texte de l'IA (repli sur le gabarit). */
  rejets?: string[];
}

export interface EvenementHistorique {
  le: string;
  statut: Statut;
  par: string;
  note?: string;
}

export interface PublicationSociale {
  /** fb-AAAAMMJJ-<format>-pub | -story (suffixe -2, -3… si ajoutée à la main le même jour). */
  id: string;
  genre: Genre;
  format: FormatId;
  statut: Statut;
  /** Moment prévu (UTC, ISO). */
  prevueLe: string;
  creeLe: string;
  majLe: string;
  faits: Faits;
  /** Texte complet de la légende, lien suivi compris. */
  texte: string;
  /** Lien suivi (UTM) vers la page du site. */
  lien: string;
  redaction: Redaction;
  /** Vrai si le propriétaire a modifié le texte. */
  modifiee: boolean;
  historique: EvenementHistorique[];
  /** Réponse de Facebook, une fois publiée (étape 2). */
  facebook?: { postId?: string; photoId?: string; publieeLe?: string; erreur?: string };
}

export interface SocialData {
  version: 1;
  /** Première publication créée : les 7 jours d'approbation se comptent d'ici. */
  demarreLe: string | null;
  publications: PublicationSociale[];
}

export const PUBLICATION_ID_RE = /^fb-\d{8}-[a-z-]+-(?:pub|story)(?:-\d{1,3})?$/;
