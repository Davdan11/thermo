/* ==================================================================
   Subsidy / Incentive Program
   
   Rules are separate from products. A program has eligibility rules.
   Results are CALCULATED, never hard-coded on a model.
   ================================================================== */

import type { DataConfidence } from "./enums";

/**
 * A government or utility incentive program.
 * Rules change over time — always track verification dates.
 */
export interface IncentiveProgram {
  id: string;
  slug: string;
  name: string;
  /** Organization administering the program */
  organization: string;
  /** Province/territory/region */
  territory: string;
  /** Official program URL */
  url?: string | null;
  /** Is the program currently accepting applications? */
  active: boolean;
  /** ISO dates for program validity */
  validFrom?: string | null;
  validUntil?: string | null;
  /** When we last verified the rules */
  rulesVerifiedAt: string;
  confidence: DataConfidence;
  sourceId?: string | null;
}

/**
 * An eligibility rule within a program.
 * Conditions are structured so the calculator can evaluate them.
 */
export interface EligibilityRule {
  id: string;
  programId: string;
  /** Human-readable description of this rule */
  description: string;
  /** Conditions that must be met */
  conditions: EligibilityCondition;
  /** Potential incentive amount in cents CAD */
  amountCents?: number | null;
  /** Or a percentage */
  amountPercentage?: number | null;
  /** Maximum cap in cents CAD */
  maxAmountCents?: number | null;
  verifiedAt: string;
}

/**
 * Structured conditions for programmatic evaluation.
 * All fields are optional — only present conditions must be satisfied.
 */
export interface EligibilityCondition {
  /** Required certifications */
  requiresCertification?: ("energy_star" | "cold_climate")[];
  /** Minimum HSPF2 */
  minHspf2?: number | null;
  /** Minimum SEER2 */
  minSeer2?: number | null;
  /** Required system types */
  systemTypes?: string[];
  /** Must replace specific existing system types */
  replacesSystem?: string[];
  /** Region restrictions */
  regions?: string[];
  /** Installation date constraints */
  installAfter?: string | null;
  installBefore?: string | null;
}

/**
 * A calculated subsidy result — NEVER stored on a model.
 * Always computed at runtime from current rules + product data.
 */
export interface SubsidyEstimate {
  programId: string;
  programName: string;
  estimatedAmountCents: number;
  currency: "CAD";
  /** Disclaimer for the consumer */
  disclaimer: string;
  /** When the rules were last verified */
  rulesVerifiedAt: string;
  /** Official URL */
  sourceUrl?: string | null;
}
