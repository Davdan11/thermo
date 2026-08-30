/* ==================================================================
   Enums & Reference Values
   
   Strict union types for all categorical data.
   Using `as const` arrays + derived types for runtime validation
   compatibility (Zod can reference the arrays).
   ================================================================== */

/* ------------------------------------------------------------------
   System Types — physical installation type
   ------------------------------------------------------------------ */

export const SYSTEM_TYPES = [
  "wall-single",
  "multi-zone",
  "central-ducted",
  "floor-console",
  "cassette",
  "ceiling",
  "hybrid",
  "other",
] as const;
export type SystemType = (typeof SYSTEM_TYPES)[number];

/** Human-readable labels (fr-CA) */
export const SYSTEM_TYPE_LABELS: Record<SystemType, string> = {
  "wall-single": "Murale simple zone",
  "multi-zone": "Multizone",
  "central-ducted": "Centrale gainable",
  "floor-console": "Console au plancher",
  cassette: "Cassette",
  ceiling: "Plafonnier",
  hybrid: "Système hybride",
  other: "Autre",
};

/* ------------------------------------------------------------------
   System Categories — classification axes (non-exclusive)
   ------------------------------------------------------------------ */

export const SYSTEM_CATEGORIES = [
  "air-air",
  "cold-climate",
  "conventional",
  "ductless",
  "ducted",
  "single-zone",
  "multi-zone",
] as const;
export type SystemCategory = (typeof SYSTEM_CATEGORIES)[number];

export const SYSTEM_CATEGORY_LABELS: Record<SystemCategory, string> = {
  "air-air": "Air-air",
  "cold-climate": "Climat froid",
  conventional: "Conventionnelle",
  ductless: "Sans conduits",
  ducted: "Avec conduits",
  "single-zone": "Simple zone",
  "multi-zone": "Multizone",
};

/* ------------------------------------------------------------------
   Publication Status
   ------------------------------------------------------------------ */

export const PUBLICATION_STATUSES = [
  "draft",
  "needs_review",
  "verified",
  "published",
  "discontinued",
  "archived",
] as const;
export type PublicationStatus = (typeof PUBLICATION_STATUSES)[number];

/* ------------------------------------------------------------------
   Data Confidence — how much to trust a value
   ------------------------------------------------------------------ */

export const DATA_CONFIDENCE_LEVELS = [
  "verified",
  "manufacturer_claim",
  "estimated",
  "placeholder",
  "needs_review",
  "deprecated",
] as const;
export type DataConfidence = (typeof DATA_CONFIDENCE_LEVELS)[number];

/* ------------------------------------------------------------------
   Source Types
   ------------------------------------------------------------------ */

export const SOURCE_TYPES = [
  "spec_sheet",
  "install_manual",
  "ahri",
  "energy_star",
  "government",
  "distributor",
  "price_observation",
  "internal",
  "other",
] as const;
export type SourceType = (typeof SOURCE_TYPES)[number];

/* ------------------------------------------------------------------
   Price Types
   ------------------------------------------------------------------ */

export const PRICE_TYPES = [
  "equipment",
  "installed",
  "observed",
  "msrp",
  "promotional",
  "estimate",
] as const;
export type PriceType = (typeof PRICE_TYPES)[number];

/* ------------------------------------------------------------------
   Warranty Types
   ------------------------------------------------------------------ */

export const WARRANTY_TYPES = [
  "parts",
  "compressor",
  "labor",
  "replacement",
] as const;
export type WarrantyType = (typeof WARRANTY_TYPES)[number];

/* ------------------------------------------------------------------
   Certification
   ------------------------------------------------------------------ */

export const CERTIFICATION_TYPES = [
  "energy_star",
  "ahri",
  "cold_climate",
  "government_list",
] as const;
export type CertificationType = (typeof CERTIFICATION_TYPES)[number];

export const CERTIFICATION_STATUSES = [
  "active",
  "expired",
  "unknown",
  "needs_review",
] as const;
export type CertificationStatus = (typeof CERTIFICATION_STATUSES)[number];

/* ------------------------------------------------------------------
   Refrigerants
   ------------------------------------------------------------------ */

export const REFRIGERANTS = [
  "R-410A",
  "R-32",
  "R-454B",
  "R-290",
  "other",
] as const;
export type Refrigerant = (typeof REFRIGERANTS)[number];

/* ------------------------------------------------------------------
   Electrical
   ------------------------------------------------------------------ */

export const VOLTAGES = [115, 208, 230, 240, 460, 575] as const;
export type Voltage = (typeof VOLTAGES)[number];

export const PHASES = [1, 3] as const;
export type Phase = (typeof PHASES)[number];
