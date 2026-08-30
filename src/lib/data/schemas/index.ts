/* ==================================================================
   Zod Schemas — Validation for all data entities
   
   These schemas validate data at import time and provide
   meaningful error messages to help developers fix fixture data.
   ================================================================== */

import { z } from "zod";
import {
  SYSTEM_TYPES,
  SYSTEM_CATEGORIES,
  PUBLICATION_STATUSES,
  DATA_CONFIDENCE_LEVELS,
  SOURCE_TYPES,
  PRICE_TYPES,
  WARRANTY_TYPES,
  CERTIFICATION_TYPES,
  CERTIFICATION_STATUSES,
  REFRIGERANTS,
  VOLTAGES,
} from "../types/enums";

/* ------------------------------------------------------------------
   Shared primitives
   ------------------------------------------------------------------ */

/** Slug: lowercase alphanumeric with hyphens */
const slugSchema = z
  .string()
  .min(1, "Slug cannot be empty")
  .regex(
    /^[a-z0-9]+(-[a-z0-9]+)*$/,
    "Slug must be lowercase alphanumeric with hyphens (e.g. 'daikin-fit-18k')",
  );

/** ISO date string */
const isoDateSchema = z.string().datetime({ offset: true }).or(
  z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Must be ISO date (YYYY-MM-DD)"),
);

/** Positive number or null — never 0 for unknown values */
const positiveOrNull = z
  .number()
  .positive("Must be positive; use null for unknown values, not 0")
  .nullable();

/** Non-negative number or null */
const nonNegativeOrNull = z.number().nonnegative().nullable();

/* ------------------------------------------------------------------
   Source
   ------------------------------------------------------------------ */

export const sourceLinkSchema = z.object({
  sourceId: z.string().min(1),
  fields: z.array(z.string()).optional(),
  confidence: z.enum(DATA_CONFIDENCE_LEVELS),
  verifiedAt: isoDateSchema.nullable().optional(),
});

export const sourceReferenceSchema = z.object({
  id: z.string().min(1),
  type: z.enum(SOURCE_TYPES),
  title: z.string().min(1),
  organization: z.string().nullable().optional(),
  url: z.string().url().nullable().optional(),
  publishedAt: isoDateSchema.nullable().optional(),
  consultedAt: isoDateSchema,
  language: z.enum(["fr", "en"]).nullable().optional(),
  confidence: z.enum(DATA_CONFIDENCE_LEVELS),
  internalNotes: z.string().nullable().optional(),
});

/* ------------------------------------------------------------------
   Brand
   ------------------------------------------------------------------ */

export const brandSchema = z.object({
  id: z.string().min(1),
  slug: slugSchema,
  name: z.string().min(1),
  countryOfOrigin: z.string().nullable().optional(),
  websiteUrl: z.string().url().nullable().optional(),
  description: z.string().nullable().optional(),
  activeInQuebec: z.boolean(),
  status: z.enum(PUBLICATION_STATUSES),
  sources: z.array(sourceLinkSchema).optional(),
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
  verifiedAt: isoDateSchema.nullable().optional(),
});

/* ------------------------------------------------------------------
   Product Series
   ------------------------------------------------------------------ */

export const productSeriesSchema = z.object({
  id: z.string().min(1),
  slug: slugSchema,
  name: z.string().min(1),
  brandId: z.string().min(1),
  systemType: z.enum(SYSTEM_TYPES),
  categories: z.array(z.enum(SYSTEM_CATEGORIES)).min(1),
  description: z.string().nullable().optional(),
  status: z.enum(PUBLICATION_STATUSES),
  sources: z.array(sourceLinkSchema).optional(),
  createdAt: isoDateSchema,
  updatedAt: isoDateSchema,
  verifiedAt: isoDateSchema.nullable().optional(),
});

/* ------------------------------------------------------------------
   Product Model
   ------------------------------------------------------------------ */

export const productModelSchema = z
  .object({
    id: z.string().min(1),
    slug: slugSchema,
    name: z.string().min(1),
    seriesId: z.string().min(1),
    brandId: z.string().min(1),
    modelNumber: z.string().min(1),
    normalizedModelNumber: z.string().min(1),
    
    isActive2026: z.boolean(),
    thermomatchEligible: z.boolean(),
    
    coolingCapacityMinBtu: positiveOrNull.optional(),
    coolingCapacityMaxBtu: positiveOrNull.optional(),
    heatingCapacity5FMinBtu: positiveOrNull.optional(),
    heatingCapacity5FMaxBtu: positiveOrNull.optional(),
    
    seer2Min: positiveOrNull.optional(),
    seer2Max: positiveOrNull.optional(),
    hspf2Min: positiveOrNull.optional(),
    hspf2Max: positiveOrNull.optional(),
    cop5FMin: positiveOrNull.optional(),
    cop5FMax: positiveOrNull.optional(),
    
    minimumOperatingTemperatureC: z.number().nullable().optional(),
    strengths: z.array(z.string()).optional(),
    limitations: z.array(z.string()).optional(),

    nominalCapacityBtu: positiveOrNull.optional(),
    zones: z.number().int().positive().nullable().optional(),
    systemType: z.enum(SYSTEM_TYPES),
    categories: z.array(z.enum(SYSTEM_CATEGORIES)).min(1),
    status: z.enum(PUBLICATION_STATUSES),
    launchYear: z.number().int().min(1990).max(2100).nullable().optional(),
    discontinuedYear: z.number().int().min(1990).max(2100).nullable().optional(),
    replacedByModelId: z.string().nullable().optional(),
    sources: z.array(sourceLinkSchema).optional(),
    createdAt: isoDateSchema,
    updatedAt: isoDateSchema,
    verifiedAt: isoDateSchema.nullable().optional(),
  })
  .refine(
    (m) =>
      !(
        m.launchYear != null &&
        m.discontinuedYear != null &&
        m.discontinuedYear < m.launchYear
      ),
    {
      message: "discontinuedYear cannot be before launchYear",
      path: ["discontinuedYear"],
    },
  );

/* ------------------------------------------------------------------
   Outdoor / Indoor Units
   ------------------------------------------------------------------ */

export const outdoorUnitSchema = z.object({
  id: z.string().min(1),
  modelNumber: z.string().min(1),
  brandId: z.string().min(1),
  widthMm: positiveOrNull.optional(),
  heightMm: positiveOrNull.optional(),
  depthMm: positiveOrNull.optional(),
  weightKg: positiveOrNull.optional(),
  noiseLevelDbA: nonNegativeOrNull.optional(),
  refrigerant: z.enum(REFRIGERANTS).nullable().optional(),
  refrigerantChargeKg: positiveOrNull.optional(),
  sources: z.array(sourceLinkSchema).optional(),
});

export const indoorUnitSchema = z.object({
  id: z.string().min(1),
  modelNumber: z.string().min(1),
  brandId: z.string().min(1),
  type: z.enum(SYSTEM_TYPES),
  widthMm: positiveOrNull.optional(),
  heightMm: positiveOrNull.optional(),
  depthMm: positiveOrNull.optional(),
  weightKg: positiveOrNull.optional(),
  noiseMinDbA: nonNegativeOrNull.optional(),
  noiseMaxDbA: nonNegativeOrNull.optional(),
  sources: z.array(sourceLinkSchema).optional(),
});

/* ------------------------------------------------------------------
   System Configuration
   ------------------------------------------------------------------ */

export const systemConfigurationSchema = z
  .object({
    id: z.string().min(1),
    slug: slugSchema,
    modelId: z.string().min(1),
    outdoorUnitId: z.string().min(1),
    indoorUnitId: z.string().nullable().optional(),
    coolingCapacityMinBtu: positiveOrNull.optional(),
    coolingCapacityMaxBtu: positiveOrNull.optional(),
    heatingCapacityMinBtu: positiveOrNull.optional(),
    heatingCapacityMaxBtu: positiveOrNull.optional(),
    seer2: positiveOrNull.optional(),
    eer2: positiveOrNull.optional(),
    hspf2: positiveOrNull.optional(),
    cop: positiveOrNull.optional(),
    minHeatingTempC: z.number().nullable().optional(),
    maxCoolingTempC: z.number().nullable().optional(),
    voltage: z.enum(VOLTAGES.map(String) as [string, ...string[]]).transform(Number).nullable().optional()
      .or(z.number().nullable().optional()),
    phase: z.union([z.literal(1), z.literal(3)]).nullable().optional(),
    frequencyHz: z.union([z.literal(50), z.literal(60)]).nullable().optional(),
    minCircuitAmps: positiveOrNull.optional(),
    maxFuseAmps: positiveOrNull.optional(),
    ratedWatts: positiveOrNull.optional(),
    noiseIndoorMinDbA: nonNegativeOrNull.optional(),
    noiseIndoorMaxDbA: nonNegativeOrNull.optional(),
    noiseOutdoorDbA: nonNegativeOrNull.optional(),
    fanSpeeds: z.number().int().positive().nullable().optional(),
    hasDehumidification: z.boolean().nullable().optional(),
    hasWifi: z.boolean().nullable().optional(),
    hasSmartControl: z.boolean().nullable().optional(),
    filtration: z.string().nullable().optional(),
    modes: z.array(z.string()).nullable().optional(),
    maxLineLengthM: positiveOrNull.optional(),
    maxElevationDiffM: positiveOrNull.optional(),
    lineDiameterMm: z.string().nullable().optional(),
    drainageType: z.string().nullable().optional(),
    installationNotes: z.string().nullable().optional(),
    estimatedCoverageSqFtMin: positiveOrNull.optional(),
    estimatedCoverageSqFtMax: positiveOrNull.optional(),
    sources: z.array(sourceLinkSchema).optional(),
    createdAt: isoDateSchema,
    updatedAt: isoDateSchema,
    verifiedAt: isoDateSchema.nullable().optional(),
  })
  .refine(
    (c) =>
      !(
        c.coolingCapacityMinBtu != null &&
        c.coolingCapacityMaxBtu != null &&
        c.coolingCapacityMinBtu > c.coolingCapacityMaxBtu
      ),
    {
      message: "coolingCapacityMinBtu cannot exceed coolingCapacityMaxBtu",
      path: ["coolingCapacityMinBtu"],
    },
  )
  .refine(
    (c) =>
      !(
        c.heatingCapacityMinBtu != null &&
        c.heatingCapacityMaxBtu != null &&
        c.heatingCapacityMinBtu > c.heatingCapacityMaxBtu
      ),
    {
      message: "heatingCapacityMinBtu cannot exceed heatingCapacityMaxBtu",
      path: ["heatingCapacityMinBtu"],
    },
  )
  .refine(
    (c) =>
      !(
        c.noiseIndoorMinDbA != null &&
        c.noiseIndoorMaxDbA != null &&
        c.noiseIndoorMinDbA > c.noiseIndoorMaxDbA
      ),
    {
      message: "noiseIndoorMinDbA cannot exceed noiseIndoorMaxDbA",
      path: ["noiseIndoorMinDbA"],
    },
  )
  .refine(
    (c) =>
      !(
        c.estimatedCoverageSqFtMin != null &&
        c.estimatedCoverageSqFtMax != null &&
        c.estimatedCoverageSqFtMin > c.estimatedCoverageSqFtMax
      ),
    {
      message: "estimatedCoverageSqFtMin cannot exceed estimatedCoverageSqFtMax",
      path: ["estimatedCoverageSqFtMin"],
    },
  );

/* ------------------------------------------------------------------
   Performance
   ------------------------------------------------------------------ */

export const performanceDataPointSchema = z.object({
  outdoorTempC: z.number(),
  heatingCapacityBtu: z.number().positive(),
  cop: positiveOrNull.optional(),
  capacityRetentionPct: z.number().min(0).max(100).nullable().optional(),
  testStandard: z.string().nullable().optional(),
  sourceId: z.string().nullable().optional(),
  confidence: z.enum(DATA_CONFIDENCE_LEVELS),
  verifiedAt: isoDateSchema.nullable().optional(),
});

export const performanceProfileSchema = z.object({
  configurationId: z.string().min(1),
  nominalHeatingBtu: positiveOrNull.optional(),
  nominalRatingTempC: z.number().nullable().optional(),
  dataPoints: z.array(performanceDataPointSchema).min(1),
});

/* ------------------------------------------------------------------
   Certification
   ------------------------------------------------------------------ */

export const certificationSchema = z.object({
  id: z.string().min(1),
  type: z.enum(CERTIFICATION_TYPES),
  configurationId: z.string().min(1),
  referenceNumber: z.string().nullable().optional(),
  coldClimate: z.boolean(),
  territory: z.string().nullable().optional(),
  status: z.enum(CERTIFICATION_STATUSES),
  verificationUrl: z.string().url().nullable().optional(),
  validFrom: isoDateSchema.nullable().optional(),
  validUntil: isoDateSchema.nullable().optional(),
  verifiedAt: isoDateSchema.nullable().optional(),
  sourceId: z.string().nullable().optional(),
});

/* ------------------------------------------------------------------
   Warranty
   ------------------------------------------------------------------ */

export const warrantySchema = z.object({
  id: z.string().min(1),
  modelId: z.string().min(1),
  type: z.enum(WARRANTY_TYPES),
  durationYears: z.number().int().positive(),
  requiresRegistration: z.boolean(),
  provider: z.enum(["manufacturer", "installer", "third_party"]),
  territory: z.string().nullable().optional(),
  conditions: z.string().nullable().optional(),
  confidence: z.enum(DATA_CONFIDENCE_LEVELS),
  sourceId: z.string().nullable().optional(),
  verifiedAt: isoDateSchema.nullable().optional(),
});

/* ------------------------------------------------------------------
   Price Observation
   ------------------------------------------------------------------ */

export const priceObservationSchema = z.object({
  id: z.string().min(1),
  configurationId: z.string().nullable().optional(),
  modelId: z.string().nullable().optional(),
  type: z.enum(PRICE_TYPES),
  amountCents: z.number().int().positive("Price must be positive; use null fields for unknown prices"),
  currency: z.literal("CAD"),
  taxesIncluded: z.boolean(),
  region: z.string().nullable().optional(),
  installationType: z.string().nullable().optional(),
  confidence: z.enum(DATA_CONFIDENCE_LEVELS),
  sourceId: z.string().nullable().optional(),
  observedAt: isoDateSchema,
  verifiedAt: isoDateSchema.nullable().optional(),
});

/* ------------------------------------------------------------------
   Editorial Content
   ------------------------------------------------------------------ */

export const editorialContentSchema = z.object({
  modelId: z.string().min(1),
  summary: z.string().nullable().optional(),
  bestFor: z.string().nullable().optional(),
  pros: z.array(z.string()).nullable().optional(),
  cons: z.array(z.string()).nullable().optional(),
  beginnerExplanation: z.string().nullable().optional(),
  verdict: z.string().nullable().optional(),
  recommendation: z
    .enum(["highly_recommended", "recommended", "acceptable", "not_recommended"])
    .nullable()
    .optional(),
  internalNotes: z.string().nullable().optional(),
  faq: z
    .array(z.object({ question: z.string(), answer: z.string() }))
    .nullable()
    .optional(),
  seoTitle: z.string().nullable().optional(),
  seoDescription: z.string().nullable().optional(),
  updatedAt: isoDateSchema,
  authorId: z.string().nullable().optional(),
});

/* ------------------------------------------------------------------
   Brand Dataset — the aggregate
   ------------------------------------------------------------------ */

export const brandDatasetSchema = z.object({
  brand: brandSchema,
  series: z.array(productSeriesSchema),
  models: z.array(productModelSchema),
  outdoorUnits: z.array(outdoorUnitSchema),
  indoorUnits: z.array(indoorUnitSchema),
  configurations: z.array(systemConfigurationSchema),
  performanceProfiles: z.array(performanceProfileSchema),
  certifications: z.array(certificationSchema),
  warranties: z.array(warrantySchema),
  priceObservations: z.array(priceObservationSchema),
  sources: z.array(sourceReferenceSchema),
  editorial: z.array(editorialContentSchema),
});
