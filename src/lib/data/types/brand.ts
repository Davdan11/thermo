/* ==================================================================
   Brand — manufacturer or commercial brand
   ================================================================== */

import type { PublicationStatus } from "./enums";
import type { SourceLink } from "./source";

export interface Brand {
  id: string;
  slug: string;
  name: string;
  /** Country where the brand is headquartered */
  countryOfOrigin?: string | null;
  websiteUrl?: string | null;
  /** Editorial description — consumer-facing */
  description?: string | null;
  /** Whether this brand is currently active in the Quebec market */
  activeInQuebec: boolean;
  status: PublicationStatus;
  sources?: SourceLink[];
  /** ISO dates */
  createdAt: string;
  updatedAt: string;
  verifiedAt?: string | null;
}
