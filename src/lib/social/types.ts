/* ==================================================================
   Robot Facebook de Thermopompes À Vendre.ca : types partagés.

   Une publication naît de FAITS calculés par le code à partir des
   données du site (catalogue, liste LogisVert, dates ENERGY STAR,
   normales climatiques, compteurs de /methode, calcul de charge de
   ThermoMatch). Le texte est rédigé à partir de ces faits (IA sous
   garde-fou, sinon gabarit) ; les visuels n'affichent que ces faits.
   Aucune dépendance serveur : importable partout.
   ================================================================== */

export const FORMATS = ["thermopompe-semaine", "duel", "grand-froid", "chiffre", "subventions", "thermomatch", "nouveautes"] as const;
export type FormatId = (typeof FORMATS)[number];

export const FORMAT_LIBELLES: Record<FormatId, string> = {
  "thermopompe-semaine": "Thermopompe de la semaine",
  duel: "Duel",
  "grand-froid": "Grand froid",
  chiffre: "Le chiffre",
  subventions: "Subventions",
  thermomatch: "ThermoMatch",
  nouveautes: "Nouveautés",
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
  /** Provenance de cette température, en clair (« la documentation du fabricant »). */
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
  /** Mise en marché déclarée à ENERGY STAR pour l'appariement de référence (AAAA-MM-JJ), ou null. */
  marcheLe: string | null;
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
  /** Page du site (/thermopompe/<slug>). */
  chemin: string;
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

export type CritereClassement = "froid" | "hspf2" | "seer2" | "capacite15";

export interface ClassementFaits {
  id: string;
  critere: CritereClassement;
  /** « chez Fujitsu », « des murales simple zone de 12 000 BTU ». */
  perimetre: string;
  /** Nombre de machines distinctes comparées (même périmètre, valeur publiée). */
  comparees: number;
  /** Autres machines à la même valeur (0 : seule en tête). */
  exAequo: number;
  valeur: number;
  modele: ModeleFaits;
}

export interface RegionFaits {
  nom: string;
  villes: number;
  plusFroide: { nom: string; conceptionC: number };
  plusDouce: { nom: string; conceptionC: number };
  nuitsLesPlusFroides: { nom: string; janvierMinC: number } | null;
}

/** Maison type du format ThermoMatch : entrées explicites, charge calculée par le moteur du site. */
export interface MaisonFaits {
  id: string;
  /** « Bungalow de 1 100 pi² » */
  libelle: string;
  /** « construit entre 1960 et 1980 » */
  periode: string;
  superficiePi2: number;
  etages: number;
  conduits: boolean;
  /** Charge estimée à −15 °C (ThermoMatch, BTU/h). */
  charge15: number;
  /** Charge à la température de conception de la ville (BTU/h). */
  chargeConception: number;
}

interface FaitsBase {
  usage: Usage;
  /** Identifiant du sujet : unique sur 365 jours. */
  sujetId: string;
  /** Clés de rotation (sujet, modele:…, serie:…, ville:…, paire:…) : pas deux fois la même sur 365 jours. */
  cles: string[];
  /** Sujet en clair, pour la file de gestion. */
  sujet: string;
  /** Page du site visée (chemin, ancre comprise). */
  chemin: string;
}

export type AngleGrandFroid = { type: "ville"; ville: VilleFaits; tiennent: number; connues: number } | { type: "region"; region: RegionFaits; connues: number };

export type AngleChiffre = { type: "compteur"; chiffre: ChiffreFaits } | { type: "classement"; classement: ClassementFaits };

export type AngleSubventions =
  | { type: "marque"; marque: { slug: string; nom: string; logo: string | null }; admissibles: number; min: number; max: number }
  | { type: "type"; typeLibelle: string; admissibles: number; marques: number; min: number; max: number }
  | { type: "segment"; typeLibelle: string; calibreBtu: number; admissibles: number; min: number; max: number; meilleur: ModeleFaits };

export type Faits =
  | (FaitsBase & { format: "thermopompe-semaine"; modele: ModeleFaits; dateListe: string | null })
  | (FaitsBase & { format: "nouveautes"; modele: ModeleFaits; marcheLe: string; dateEnergyStar: string; dateListe: string | null })
  | (FaitsBase & { format: "duel"; a: ModeleFaits; b: ModeleFaits; dateListe: string | null })
  | (FaitsBase & { format: "grand-froid"; angle: AngleGrandFroid })
  | (FaitsBase & { format: "chiffre"; angle: AngleChiffre })
  | (FaitsBase & { format: "subventions"; angle: AngleSubventions; dateListe: string | null })
  | (FaitsBase & { format: "thermomatch"; maison: MaisonFaits; ville: VilleFaits; fiches: number; marques: number; questions: string });

export type FaitsDe<F extends FormatId> = Extract<Faits, { format: F }>;

/* ------------------------------------------------------------------
   File de publication
   ------------------------------------------------------------------ */

export const STATUTS = ["brouillon", "en_attente", "approuvee", "publiee", "echec", "refusee"] as const;
export type Statut = (typeof STATUTS)[number];

export const STATUT_LIBELLES: Record<Statut, string> = {
  brouillon: "Brouillon",
  en_attente: "En attente d'approbation",
  approuvee: "Approuvée",
  publiee: "Publiée",
  echec: "Échec d'envoi",
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

/** Requête qui partirait vers Facebook (mode essai) : jamais de jeton. */
export interface RequeteEssai {
  methode: "GET" | "POST";
  chemin: string;
  champs: Record<string, string>;
}

/** État de l'envoi à Facebook : chaque identifiant est enregistré dès qu'il est connu. */
export interface EnvoiFacebook {
  tentatives: number;
  prochainEssai?: string;
  derniereErreur?: string;
  derniereErreurLe?: string;
  /** Verrou : un seul passage à la fois pour cette publication. */
  verrou?: { id: string; jusqua: string };
  /** Story : photo envoyée non publiée (étape 1). Publication : identifiant de la photo. */
  photoId?: string;
  /** Identifiant Facebook de la publication ou de la story. */
  postId?: string;
  lien?: string;
  publieeLe?: string;
  /** L'étape qui publie a peut-être abouti (réponse perdue) : vérifier sur Facebook avant tout nouvel essai. */
  aVerifier?: boolean;
  /** Mode essai : ce qui serait parti, pour quelle version du texte. */
  essai?: { le: string; version: string; raisons: string[]; requetes: RequeteEssai[] };
}

export interface PublicationSociale {
  /** fb-AAAAMMJJ-<format>-pub | -story (suffixe -2, -3… si le même jour en a déjà une). */
  id: string;
  genre: Genre;
  format: FormatId;
  statut: Statut;
  /** Moment prévu (UTC, ISO). */
  prevueLe: string;
  creeLe: string;
  majLe: string;
  faits: Faits;
  /** Mise en page retenue (rotation dans la direction artistique du site). */
  variante: number;
  /** Première phrase du texte : jamais la même sur 365 jours. */
  accroche: string;
  /** Texte principal imprimé sur le visuel : jamais le même sur 365 jours. */
  texteVisuel: string;
  /** Texte complet de la légende, lien suivi compris. */
  texte: string;
  /** Lien suivi (UTM) vers la page du site. */
  lien: string;
  redaction: Redaction;
  /** Vrai si le propriétaire a modifié le texte. */
  modifiee: boolean;
  historique: EvenementHistorique[];
  envoi: EnvoiFacebook;
}

export interface Rythme {
  actif: boolean;
  /** Une fois tous les N jours (1 = chaque jour). */
  tousLesJours: number;
  /** HH:MM, heure de Montréal. */
  heure: string;
}

export interface ReglagesSociaux {
  publication: Rythme;
  story: Rythme;
  /** La file est générée ce nombre de jours à l'avance. */
  joursAvance: number;
  approbation: {
    /** Première mise en ligne réelle (ISO) : les 7 jours d'approbation se comptent d'ici ; null tant que rien n'est parti. */
    depart: string | null;
    /** Vrai : chaque élément attend l'approbation, même après les 7 jours. */
    toujoursObligatoire: boolean;
  };
  majLe?: string;
  majPar?: string;
}

export interface JournalSocial {
  le: string;
  niveau: "info" | "ok" | "erreur" | "essai";
  message: string;
  publicationId?: string;
}

export interface SocialData {
  version: 2;
  reglages: ReglagesSociaux;
  publications: PublicationSociale[];
  journal: JournalSocial[];
  /** Retrait de l'ancienne file du studio (presence.json) : fait une seule fois. */
  ancienneFileRetireeLe?: string;
}

export const PUBLICATION_ID_RE = /^fb-\d{8}-[a-z-]+-(?:pub|story)(?:-\d{1,3})?$/;
