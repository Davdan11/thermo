/* ==================================================================
   LogisVert Calculator — Hydro-Québec Subsidy Estimation
   
   Official formula (as of 2025-11-26):
   - ENERGY STAR standard:     50 $ per 1,000 BTU/h at -8°C
   - Cold Climate certified:  120 $ per 1,000 BTU/h at -8°C
   - Maximum cap:           6,700 $
   
   Source: https://www.hydroquebec.com/residentiel/mieux-consommer/logisvert/
   ================================================================== */

import type { Certification, SystemConfiguration, ProductModel } from "../data/types";
import type { SubsidyEstimate } from "../data/types";

/* ------------------------------------------------------------------
   Constants
   ------------------------------------------------------------------ */

/** $ per 1,000 BTU/h at -8°C for ENERGY STAR standard */
const RATE_STANDARD_PER_KBTU = 50;

/** $ per 1,000 BTU/h at -8°C for Cold Climate certified */
const RATE_COLD_CLIMATE_PER_KBTU = 120;

/** Maximum subsidy amount in $ */
const MAX_SUBSIDY = 6700;

/** Source URL */
const LOGISVERT_URL = "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert/";

/** When we last verified the rules */
const RULES_VERIFIED_AT = "2026-08-28";

/* ------------------------------------------------------------------
   Calculator
   ------------------------------------------------------------------ */

export interface LogisVertInput {
  model: ProductModel;
  configuration: SystemConfiguration;
  certifications: Certification[];
  /** Override: actual heating capacity at -8°C in BTU/h (from AHRI data).
   *  If not provided, we use the model's nominal capacity as an estimate. */
  heatingCapacityAt8C?: number;
}

export interface LogisVertResult {
  /** Estimated subsidy in cents CAD */
  estimatedAmountCents: number;
  /** Estimated subsidy in dollars */
  estimatedAmountDollars: number;
  /** Rate used ($ per 1,000 BTU/h) */
  ratePerKBtu: number;
  /** Whether cold-climate rate was applied */
  isColdClimate: boolean;
  /** BTU/h value used for calculation */
  capacityBtuUsed: number;
  /** Is this an estimate (nominal) or verified (AHRI) */
  isEstimate: boolean;
  /** Disclaimer */
  disclaimer: string;
  /** Source */
  sourceUrl: string;
  /** As SubsidyEstimate for integration */
  asSubsidyEstimate: SubsidyEstimate;
}

/**
 * Calculate the LogisVert subsidy for a given heat pump configuration.
 * 
 * Uses the official Hydro-Québec formula:
 * - Cold Climate: 120 $/1,000 BTU/h at -8°C
 * - ENERGY STAR standard: 50 $/1,000 BTU/h at -8°C
 * - Cap: 6,700 $
 */
export function calculateLogisVert(input: LogisVertInput): LogisVertResult {
  const { model, certifications, heatingCapacityAt8C } = input;

  // Determine if cold-climate certified
  const isColdClimate = certifications.some(
    (c) => c.coldClimate && c.status === "active"
  );

  // Rate
  const ratePerKBtu = isColdClimate ? RATE_COLD_CLIMATE_PER_KBTU : RATE_STANDARD_PER_KBTU;

  // Capacity: prefer actual -8°C data, fallback to nominal
  const capacityBtu = heatingCapacityAt8C ?? model.nominalCapacityBtu ?? 0;
  const isEstimate = !heatingCapacityAt8C;

  // Calculate: (capacity / 1000) * rate, capped
  const rawAmount = Math.floor(capacityBtu / 1000) * ratePerKBtu;
  const estimatedAmountDollars = Math.min(rawAmount, MAX_SUBSIDY);
  const estimatedAmountCents = estimatedAmountDollars * 100;

  const disclaimer = isEstimate
    ? "Montant estimatif basé sur la capacité nominale. Le montant réel dépend de la capacité de chauffage certifiée à -8 °C (fiche AHRI). Consultez le portail LogisVert d'Hydro-Québec pour le montant exact."
    : "Montant basé sur la capacité de chauffage certifiée à -8 °C. Consultez le portail LogisVert d'Hydro-Québec pour confirmer l'admissibilité de votre installation.";

  return {
    estimatedAmountCents,
    estimatedAmountDollars,
    ratePerKBtu,
    isColdClimate,
    capacityBtuUsed: capacityBtu,
    isEstimate,
    disclaimer,
    sourceUrl: LOGISVERT_URL,
    asSubsidyEstimate: {
      programId: "logisvert-hq",
      programName: "LogisVert — Hydro-Québec",
      estimatedAmountCents,
      currency: "CAD",
      disclaimer,
      rulesVerifiedAt: RULES_VERIFIED_AT,
      sourceUrl: LOGISVERT_URL,
    },
  };
}

/**
 * Quick helper: calculate LogisVert from just BTU and cold-climate flag.
 * Useful for display tables.
 */
export function calculateLogisVertSimple(
  nominalBtu: number,
  isColdClimate: boolean
): { dollars: number; rate: number } {
  const rate = isColdClimate ? RATE_COLD_CLIMATE_PER_KBTU : RATE_STANDARD_PER_KBTU;
  const raw = Math.floor(nominalBtu / 1000) * rate;
  return { dollars: Math.min(raw, MAX_SUBSIDY), rate };
}
