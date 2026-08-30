/* ==================================================================
   Warranty
   ================================================================== */

import type { WarrantyType, DataConfidence } from "./enums";

export interface Warranty {
  id: string;
  modelId: string;
  type: WarrantyType;
  /** Duration in years */
  durationYears: number;
  /** Is this the standard warranty or requires registration? */
  requiresRegistration: boolean;
  /** Who provides it */
  provider: "manufacturer" | "installer" | "third_party";
  territory?: string | null;
  conditions?: string | null;
  confidence: DataConfidence;
  sourceId?: string | null;
  verifiedAt?: string | null;
}
