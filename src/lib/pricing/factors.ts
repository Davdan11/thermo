/* ==================================================================
   Pricing — Centralized factor definitions

   ALL multipliers, barèmes, and adjustments live here.
   NEVER scatter amounts in React components.

   ⚠️ Current values are STRUCTURAL PLACEHOLDERS.
   They define the shape of real data but do not represent
   verified market prices. Each value must be replaced with
   observed data before the estimator goes live.
   ================================================================== */

import type { ProjectType, AccessComplexity, QuebecRegion } from "./types";

/* ------------------------------------------------------------------
   Method version — increment when changing any factor
   ------------------------------------------------------------------ */

export const METHOD_VERSION = "v0.1.0-dev";

/* ------------------------------------------------------------------
   Installation base cost by project type (cents CAD)

   These represent a STANDARD installation with:
   - Ground-floor access
   - Standard line length (< 5m)
   - No electrical panel upgrade
   - No duct work
   - No removal
   ------------------------------------------------------------------ */

export const INSTALLATION_BASE_CENTS: Record<ProjectType, number | null> = {
  "wall-single-new": 250_000,       // $2,500
  "wall-single-replace": 200_000,   // $2,000
  "multi-zone-new": 400_000,        // $4,000
  "multi-zone-replace": 350_000,    // $3,500
  "central-new": 500_000,           // $5,000
  "central-replace": 400_000,       // $4,000
  "outdoor-replace": 150_000,       // $1,500
  "unknown": null,                  // Cannot estimate
};

/* ------------------------------------------------------------------
   Equipment base cost by capacity range (cents CAD)
   When no specific model is selected, use category-based pricing.
   ------------------------------------------------------------------ */

export interface CapacityPriceBand {
  minBtu: number;
  maxBtu: number;
  label: string;
  /** Equipment price range in cents CAD */
  equipmentMinCents: number;
  equipmentMaxCents: number;
}

export const WALL_SINGLE_PRICE_BANDS: CapacityPriceBand[] = [
  { minBtu: 0, maxBtu: 12_000, label: "9 000 à 12 000 BTU", equipmentMinCents: 150_000, equipmentMaxCents: 250_000 },
  { minBtu: 12_001, maxBtu: 18_000, label: "12 000 à 18 000 BTU", equipmentMinCents: 200_000, equipmentMaxCents: 350_000 },
  { minBtu: 18_001, maxBtu: 24_000, label: "18 000 à 24 000 BTU", equipmentMinCents: 280_000, equipmentMaxCents: 450_000 },
  { minBtu: 24_001, maxBtu: 36_000, label: "24 000 à 36 000 BTU", equipmentMinCents: 350_000, equipmentMaxCents: 550_000 },
  { minBtu: 36_001, maxBtu: 60_000, label: "36 000+ BTU", equipmentMinCents: 450_000, equipmentMaxCents: 750_000 },
];

export const CENTRAL_PRICE_BANDS: CapacityPriceBand[] = [
  { minBtu: 0, maxBtu: 24_000, label: "Jusqu'à 24 000 BTU", equipmentMinCents: 350_000, equipmentMaxCents: 550_000 },
  { minBtu: 24_001, maxBtu: 36_000, label: "24 000 à 36 000 BTU", equipmentMinCents: 450_000, equipmentMaxCents: 700_000 },
  { minBtu: 36_001, maxBtu: 48_000, label: "36 000 à 48 000 BTU", equipmentMinCents: 550_000, equipmentMaxCents: 850_000 },
  { minBtu: 48_001, maxBtu: 60_000, label: "48 000 à 60 000 BTU", equipmentMinCents: 650_000, equipmentMaxCents: 1_000_000 },
];

/* ------------------------------------------------------------------
   Adjustment amounts (cents CAD)
   ------------------------------------------------------------------ */

/** Additional zones for multizone systems */
export const MULTI_ZONE_PER_ZONE_CENTS = 100_000; // $1,000 per additional zone

/** Line length adjustments */
export const LINE_LENGTH_ADJUSTMENTS: Record<string, number> = {
  standard: 0,
  long: 30_000,            // $300
  "very-long": 75_000,     // $750
};

/** Access complexity adjustments */
export const ACCESS_ADJUSTMENTS: Record<AccessComplexity, number> = {
  standard: 0,
  difficult: 50_000,       // $500
  "very-difficult": 120_000, // $1,200
};

/** Height adjustments */
export const HEIGHT_ADJUSTMENTS: Record<string, number> = {
  ground: 0,
  "second-floor": 25_000,  // $250
  "third-plus": 60_000,    // $600
};

/** Electrical work (panel upgrade or dedicated circuit) */
export const ELECTRICAL_WORK_CENTS = 80_000; // $800

/** Ductwork */
export const DUCTWORK_CENTS = 150_000; // $1,500

/** Removal of old system */
export const REMOVAL_CENTS = 40_000; // $400

/* ------------------------------------------------------------------
   Regional multipliers
   1.0 = baseline (Montreal metro)
   ------------------------------------------------------------------ */

export const REGION_MULTIPLIERS: Record<QuebecRegion, number> = {
  montreal: 1.0,
  laval: 1.0,
  monteregie: 1.0,
  laurentides: 1.02,
  lanaudiere: 1.02,
  "quebec-city": 1.0,
  estrie: 1.03,
  outaouais: 1.03,
  mauricie: 1.03,
  saguenay: 1.05,
  "bas-saint-laurent": 1.05,
  abitibi: 1.08,
  "cote-nord": 1.10,
  gaspesie: 1.10,
  "nord-du-quebec": 1.15,
  unknown: 1.05, // Conservative middle ground
};

/* ------------------------------------------------------------------
   Uncertainty margin
   Applied as ± percentage to create the final range
   ------------------------------------------------------------------ */

export const BASE_UNCERTAINTY_PERCENT = 15; // ±15%

/** Extra uncertainty when data is weak */
export const UNCERTAINTY_ADJUSTMENTS = {
  noExactModel: 5,      // +5% if no specific model selected
  noRegion: 3,           // +3% if region unknown
  replacement: 3,        // +3% for replacements (unknown existing conditions)
  multiZone: 5,          // +5% for multizone (variable complexity)
  oldData: 5,            // +5% if data older than 6 months
} as const;

/* ------------------------------------------------------------------
   Tax rates (Quebec)
   ------------------------------------------------------------------ */

export const TAX_RATES = {
  gst: 0.05,   // TPS — 5%
  qst: 0.09975, // TVQ — 9.975%
  combined: 0.14975, // Total
} as const;

/* ------------------------------------------------------------------
   What's generally included / excluded
   ------------------------------------------------------------------ */

export const GENERALLY_INCLUDED = [
  "Équipement (unité intérieure et extérieure)",
  "Installation standard",
  "Matériaux de base (support, conduites standard)",
  "Mise en service et vérification",
  "Garantie du fabricant (selon le modèle)",
] as const;

export const GENERALLY_EXCLUDED = [
  "Taxes (TPS + TVQ)",
  "Mise à niveau du panneau électrique (si nécessaire)",
  "Travaux de conduits (si nécessaire)",
  "Retrait de l'ancien système (si applicable)",
  "Travaux de finition (plâtre, peinture)",
  "Permis municipaux (si requis)",
  "Grue ou équipement spécialisé",
  "Cache-tuyaux décoratif",
  "Pompe de condensat",
  "Thermostat intelligent",
] as const;

export const VARIABLE_FACTORS = [
  "Longueur de la tuyauterie entre les unités",
  "Complexité de l'accès à l'emplacement",
  "Hauteur d'installation",
  "Travaux électriques requis",
  "Région et distance de déplacement",
  "Complexité structurelle de l'habitation",
  "Conditions découvertes pendant l'installation",
] as const;

/* ------------------------------------------------------------------
   Minimum observations required per confidence level
   ------------------------------------------------------------------ */

export const MIN_OBSERVATIONS = {
  insufficient: 0,
  preliminary: 3,
  moderate: 5,
  good: 10,
} as const;

/** Maximum age in days for observations to be considered "recent" */
export const MAX_OBSERVATION_AGE_DAYS = 180;
