/* ==================================================================
   Source — provenance tracking for any data point
   ================================================================== */

import type { SourceType, DataConfidence } from "./enums";

/**
 * A reference to the origin of a piece of data.
 * Can be attached to any entity or field that requires traceability.
 */
export interface SourceReference {
  /** Internal identifier */
  id: string;
  type: SourceType;
  title: string;
  organization?: string | null;
  url?: string | null;
  /** ISO date — when the source was published (if known) */
  publishedAt?: string | null;
  /** ISO date — when we consulted this source */
  consultedAt: string;
  language?: "fr" | "en" | null;
  confidence: DataConfidence;
  /** Internal-only notes — never exposed to public */
  internalNotes?: string | null;
}

/**
 * Lightweight source link for embedding in other entities.
 * Points to a SourceReference by id.
 */
export interface SourceLink {
  sourceId: string;
  /** Which field(s) this source supports */
  fields?: string[];
  confidence: DataConfidence;
  verifiedAt?: string | null;
}
