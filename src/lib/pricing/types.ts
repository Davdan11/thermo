/* ==================================================================
   Pricing — Types for the price estimation engine

   These types are INDEPENDENT of React. The engine is pure logic.
   ================================================================== */

/* ------------------------------------------------------------------
   Confidence Level
   ------------------------------------------------------------------ */

export type ConfidenceLevel =
  | "insufficient"   // < 3 observations → refuse to estimate
  | "preliminary"    // 3-5 observations or data > 6 months
  | "moderate"       // 5-10 recent observations, region known
  | "good";          // 10+ recent observations, exact model, region known

export const CONFIDENCE_LABELS: Record<ConfidenceLevel, string> = {
  insufficient: "Données insuffisantes",
  preliminary: "Estimation préliminaire",
  moderate: "Confiance modérée",
  good: "Estimation plus précise",
};

/* ------------------------------------------------------------------
   Project Type
   ------------------------------------------------------------------ */

export type ProjectType =
  | "wall-single-new"        // Ajout murale simple zone
  | "wall-single-replace"    // Remplacement murale simple zone
  | "multi-zone-new"         // Installation multizone
  | "multi-zone-replace"     // Remplacement multizone
  | "central-new"            // Ajout centrale
  | "central-replace"        // Remplacement centrale
  | "outdoor-replace"        // Remplacement unité extérieure
  | "unknown";               // Pas encore déterminé

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  "wall-single-new": "Ajout d'une thermopompe murale simple zone",
  "wall-single-replace": "Remplacement d'une thermopompe murale",
  "multi-zone-new": "Installation multizone",
  "multi-zone-replace": "Remplacement multizone",
  "central-new": "Ajout d'une thermopompe centrale",
  "central-replace": "Remplacement d'un système central",
  "outdoor-replace": "Remplacement de l'unité extérieure",
  "unknown": "Type de projet à déterminer",
};

/* ------------------------------------------------------------------
   Installation Complexity
   ------------------------------------------------------------------ */

export type AccessComplexity = "standard" | "difficult" | "very-difficult";

export const ACCESS_COMPLEXITY_LABELS: Record<AccessComplexity, string> = {
  standard: "Accès standard",
  difficult: "Accès difficile",
  "very-difficult": "Accès très difficile",
};

/* ------------------------------------------------------------------
   Region
   ------------------------------------------------------------------ */

export type QuebecRegion =
  | "montreal"
  | "quebec-city"
  | "laval"
  | "monteregie"
  | "laurentides"
  | "lanaudiere"
  | "estrie"
  | "outaouais"
  | "mauricie"
  | "saguenay"
  | "bas-saint-laurent"
  | "abitibi"
  | "cote-nord"
  | "gaspesie"
  | "nord-du-quebec"
  | "unknown";

export const REGION_LABELS: Record<QuebecRegion, string> = {
  montreal: "Montréal",
  "quebec-city": "Québec",
  laval: "Laval",
  monteregie: "Montérégie",
  laurentides: "Laurentides",
  lanaudiere: "Lanaudière",
  estrie: "Estrie",
  outaouais: "Outaouais",
  mauricie: "Mauricie / Centre-du-Québec",
  saguenay: "Saguenay–Lac-Saint-Jean",
  "bas-saint-laurent": "Bas-Saint-Laurent",
  abitibi: "Abitibi-Témiscamingue",
  "cote-nord": "Côte-Nord",
  gaspesie: "Gaspésie–Îles-de-la-Madeleine",
  "nord-du-quebec": "Nord-du-Québec",
  unknown: "Région inconnue",
};

/* ------------------------------------------------------------------
   Estimator Input — what the user provides
   ------------------------------------------------------------------ */

export interface EstimatorInput {
  projectType: ProjectType;

  // Habitation
  postalCode?: string;
  propertyType?: string;
  areaSqFt?: string;       // Range value like "<1000", "1000-1500", etc.
  floors?: string;

  // System
  currentSystem?: string;
  heatPumpType?: string;    // "murale" | "centrale" | "multizone"
  zones?: number;
  capacityBtu?: number;

  // Product selection
  configurationId?: string; // Exact config known
  modelId?: string;         // Exact model known
  systemCategory?: string;  // General category

  // Installation
  installationType: "new" | "replacement";
  lineLength?: "standard" | "long" | "very-long";
  accessComplexity?: AccessComplexity;
  height?: "ground" | "second-floor" | "third-plus";
  electricalWork?: boolean;
  ductwork?: boolean;
  removal?: boolean;

  // Budget (optional, informational only)
  budgetRange?: string;

  // Source tracking
  fromThermoMatch?: boolean;
}

/* ------------------------------------------------------------------
   Adjustment Factor — each change explained
   ------------------------------------------------------------------ */

export interface AdjustmentFactor {
  id: string;
  label: string;
  /** Positive = increases price, negative = decreases */
  amountCents: number;
  /** Why this adjustment exists */
  reason: string;
  /** The input value that triggered it */
  trigger: string;
}

/* ------------------------------------------------------------------
   Price Breakdown — transparent decomposition
   ------------------------------------------------------------------ */

export interface PriceBreakdown {
  /** Equipment base price in cents CAD */
  equipmentBaseCents: number | null;
  /** Installation base price in cents CAD */
  installationBaseCents: number | null;
  /** Adjustments applied */
  adjustments: AdjustmentFactor[];
  /** Total adjustments in cents */
  totalAdjustmentsCents: number;
}

/* ------------------------------------------------------------------
   Estimator Result — the full output
   ------------------------------------------------------------------ */

export interface EstimatorResult {
  /** Can we estimate? */
  canEstimate: boolean;

  /** Price range in cents CAD */
  minCents: number;
  maxCents: number;

  /** Breakdown */
  breakdown: PriceBreakdown;

  /** Confidence */
  confidence: ConfidenceLevel;

  /** Taxes */
  taxesIncluded: boolean;
  taxNote: string;

  /** What's generally included */
  includedItems: string[];
  /** What's NOT included or unknown */
  excludedItems: string[];
  /** Factors that could change the price */
  variableFactors: string[];

  /** Warnings */
  warnings: string[];
  /** Missing data that would improve the estimate */
  missingData: string[];
  /** Assumptions made */
  assumptions: string[];

  /** Metadata */
  methodVersion: string;
  calculatedAt: string;
  input: EstimatorInput;

  /** Number of price observations used */
  observationCount: number;

  /** If canEstimate is false, why */
  refusalReason?: string;
}
