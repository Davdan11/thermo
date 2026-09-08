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

/** Ce que le questionnaire fournit au moteur. */
export interface MatchRequest {
  heatedAreaFt2: number;
  homeType: HomeType;
  floors: number;
  /** "any" quand le client ne sait pas encore. */
  systemKind: SystemKind | "any";
  /** Nombre de zones intérieures souhaitées (1 = murale simple ou centrale). */
  zones: number;
  /** Fournaise gaz/mazout conservée : la thermopompe peut couvrir moins que 100 %. */
  backupHeatAvailable: boolean;
  priorities: Priority[];
  budget: BudgetBracket;
  /* Questions optionnelles (valeurs par défaut si absentes) */
  constructionPeriod?: ConstructionPeriod;
  insulation?: InsulationLevel;
  windowShare?: WindowShare;
  basement?: BasementType;
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
  /** L'unité extérieure est certifiée avec plusieurs unités intérieures. */
  multiZoneCapable: boolean;
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

export interface MatchResult extends ScoredCandidate {
  rank: number;
  badge: ResultBadge;
  reasons: string[];
  warnings: string[];
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
