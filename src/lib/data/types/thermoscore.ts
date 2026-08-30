/* ==================================================================
   ThermoScore — transparent scoring methodology
   
   Score is NEVER manually written. It is always computed from
   a versioned methodology using verified product data.
   If data is insufficient → "Score non disponible".
   ================================================================== */

import type { DataConfidence } from "./enums";

export interface ThermoScoreMethodology {
  version: string;
  /** Human-readable name (e.g. "v1.0 — Lancement") */
  name: string;
  criteria: ThermoScoreCriterion[];
  /** When this methodology was established */
  createdAt: string;
}

export interface ThermoScoreCriterion {
  id: string;
  label: string;
  /** Weight as a percentage (all weights should sum to 100) */
  weightPct: number;
  /** Human-readable description of how this is scored */
  description: string;
}

/**
 * A computed score for a specific configuration.
 * Always tied to a methodology version.
 */
export interface ThermoScoreResult {
  configurationId: string;
  methodologyVersion: string;
  /** Sub-scores per criterion */
  subScores: ThermoScoreSubScore[];
  /** Final score 0-100, or null if insufficient data */
  finalScore: number | null;
  /** Confidence in the result */
  confidence: DataConfidence;
  /** Which data fields were missing or uncertain */
  missingData?: string[];
  /** Human-readable explanation */
  explanation?: string | null;
  /** ISO date of computation */
  computedAt: string;
}

export interface ThermoScoreSubScore {
  criterionId: string;
  /** Raw value used for scoring */
  rawValue: number | null;
  /** Normalized score 0-100 */
  normalizedScore: number | null;
  /** Weighted contribution to final */
  weightedScore: number | null;
  confidence: DataConfidence;
}
