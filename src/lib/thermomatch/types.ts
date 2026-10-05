/* ==================================================================
   ThermoMatch v2 — Types
   Moteur de recommandation déterministe, sans IA.
   Toutes les capacités sont en BTU/h, toutes les températures en °C.
   ================================================================== */

export type SystemKind = "central" | "ductless";
export type BrandTier = "premium" | "mid" | "value";
export type Priority = "economies" | "grand-froid" | "silence" | "prix" | "qualite";
export type BudgetBracket = "low" | "mid" | "high" | "top" | "unknown";
export type HomeType = "detached" | "condo" | "duplex" | "triplex";
export type ConstructionPeriod = "pre_1960" | "1960_1980" | "1981_2000" | "2001_2015" | "2016_plus";
export type InsulationLevel = "poor" | "standard" | "good" | "high_performance";
export type WindowShare = "low" | "standard" | "high";
export type BasementType = "none" | "unheated" | "heated";
/**
 * Classe d'un appariement AHRI : centrale sur conduits, multizone (une unité extérieure, plusieurs
 * têtes : « Combinaison d'appareils », « Appareils sans/avec conduits » dans LogisVert) ou simple zone.
 */
export type PairingClass = "central" | "multi" | "single";

/** Ce que le questionnaire fournit au moteur. */
export interface MatchRequest {
  heatedAreaFt2: number;
  homeType: HomeType;
  floors: number;
  /** "any" quand le client ne sait pas encore. */
  systemKind: SystemKind | "any";
  /** Nombre de zones intérieures souhaitées (1 = murale simple ou centrale). */
  zones: number;
  /** Fournaise ou chaudière conservée : la thermopompe peut couvrir moins que 100 %. */
  backupHeatAvailable: boolean;
  priorities: Priority[];
  budget: BudgetBracket;
  /* Questions optionnelles (valeurs par défaut si absentes) */
  constructionPeriod?: ConstructionPeriod;
  insulation?: InsulationLevel;
  windowShare?: WindowShare;
  basement?: BasementType;
  /* Architecture décidée avant le choix des machines (architecture.ts) */
  /** Classe d'appariements retenue ; absente : filtre sur systemKind (anciens appels). */
  pairingClass?: PairingClass;
  /** Charge pour laquelle chaque machine est calibrée (zone la plus chargée, espace principal) ; absente : toute la maison. */
  sizingLoadBtuH?: number;
  /** Ce que couvre la charge de calibrage (« de l'espace principal »), pour les raisons. */
  sizingLabel?: string;
  /** Nombre d'unités intérieures ; murales indépendantes : autant de machines. */
  heads?: number;
  /** Murales indépendantes : une machine par espace (la couverture se compte × heads). */
  independentUnits?: boolean;
  /** Relève conservée, pour les raisons (« fournaise », « chaudière ») ; absente : « fournaise ». */
  backupLabel?: string;
}

/** Résultat du calcul de charge. */
export interface LoadEstimate {
  /** Charge de chauffage estimée à la température de conception (BTU/h). */
  loadBtuH: number;
  /** Détail des facteurs appliqués, pour la transparence. */
  factors: {
    baseBtuPerFt2: number;
    homeType: number;
    floors: number;
    construction: number;
    insulation: number;
    windows: number;
    basement: number;
  };
  /** Fourchette plausible autour de l'estimation (±). */
  uncertaintyPct: number;
}

/** Une machine candidate, une par unité extérieure réellement distincte. */
export interface Candidate {
  id: string;
  brand: string;
  series: string;
  outdoorModel: string;
  /** Unité intérieure de l'appariement retenu (celui qui colle le mieux à la charge). */
  indoorModel?: string;
  /** Référence AHRI de l'appariement retenu. */
  ahri?: string;
  systemKind: SystemKind;
  nominalBtu: number;
  /** Capacité de chauffage certifiée à -15 °C (5 °F). */
  h5Btu: number;
  /** false si h5 a été estimée à partir de h17 (appareil sans données ENERGY STAR). */
  h5Certified: boolean;
  /** Capacité de chauffage certifiée à -8 °C (17 °F). */
  h17Btu: number;
  cop5?: number;
  seer2?: number;
  hspf2?: number;
  coldClimate: boolean;
  /** Montant officiel LogisVert (Hydro-Québec) pour l'appariement retenu. */
  logisVertDollars: number;
  tier: BrandTier;
  imageUrl?: string | null;
  /** Autres marques vendant exactement la même machine (rebadgée). */
  alsoSoldAs: string[];
  /** Empreinte technique servant à repérer les machines identiques. */
  signature: string;
  /** L'unité extérieure est certifiée en multizone (au moins un appariement de classe « multi »). */
  multiZoneCapable: boolean;
  /** Classe de l'appariement retenu. */
  pairingClass?: PairingClass;
}

export interface ScoreBreakdown {
  fit: number;
  cold: number;
  efficiency: number;
  subsidy: number;
  budget: number;
  dataQuality: number;
}

export type Weights = ScoreBreakdown;

export interface ScoredCandidate {
  candidate: Candidate;
  /** Score total 0–100. */
  score: number;
  /** Contribution de chaque critère (déjà pondérée, somme = score). */
  breakdown: ScoreBreakdown;
  /** Ratio capacité à -15 °C / charge estimée. */
  fitRatio: number;
}

export type ResultBadge = "Meilleur choix" | "Haut de gamme" | "Meilleure valeur" | "Alternative équilibrée";

/** Égalité avec une recommandation voisine : écart sous la précision de l'estimation. */
export interface TieInfo {
  withRank: number;
  /** Le départage dit en clair (ties.ts). */
  decidedBy: string;
}

export interface MatchResult extends ScoredCandidate {
  rank: number;
  badge: ResultBadge;
  reasons: string[];
  warnings: string[];
  tie?: TieInfo;
}

export interface MatchDiagnostics {
  candidatesTotal: number;
  afterSystemKind: number;
  afterCapacityWindow: number;
  afterDedup: number;
  scored: number;
}

export interface MatchOutput {
  load: LoadEstimate;
  results: MatchResult[];
  weights: Weights;
  diagnostics: MatchDiagnostics;
  warnings: string[];
}
