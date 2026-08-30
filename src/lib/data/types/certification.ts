/* ==================================================================
   Certification — ENERGY STAR, AHRI, government lists
   ================================================================== */

import type { CertificationType, CertificationStatus } from "./enums";

export interface Certification {
  id: string;
  type: CertificationType;
  /** The specific configuration this cert applies to */
  configurationId: string;
  /** Official reference number (AHRI#, etc.) */
  referenceNumber?: string | null;
  /** Cold-climate certified? */
  coldClimate: boolean;
  territory?: string | null;
  status: CertificationStatus;
  /** URL to official listing */
  verificationUrl?: string | null;
  validFrom?: string | null;
  validUntil?: string | null;
  verifiedAt?: string | null;
  sourceId?: string | null;
}
