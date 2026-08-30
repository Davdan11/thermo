/* ==================================================================
   Price Observation
   
   A price is ALWAYS an observation at a point in time.
   Never store a permanent price on a model.
   ================================================================== */

import type { PriceType, DataConfidence } from "./enums";

export interface PriceObservation {
  id: string;
  /** Which configuration this price applies to */
  configurationId?: string | null;
  /** Or which model (for general equipment pricing) */
  modelId?: string | null;
  type: PriceType;
  /** Price in cents CAD (integer to avoid floating point) */
  amountCents: number;
  currency: "CAD";
  /** Does this include taxes? */
  taxesIncluded: boolean;
  /** Region where observed */
  region?: string | null;
  /** Installation type context */
  installationType?: string | null;
  confidence: DataConfidence;
  sourceId?: string | null;
  /** ISO date of observation */
  observedAt: string;
  verifiedAt?: string | null;
}
