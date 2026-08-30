/* ==================================================================
   Data Registry — loads, validates, and indexes all brand datasets
   
   This is the SINGLE SOURCE OF TRUTH for product data.
   All queries go through this registry.
   
   When migrating to a database, only this file changes.
   ================================================================== */

import type {
  BrandDataset,
  Brand,
  ProductSeries,
  ProductModel,
  OutdoorUnit,
  IndoorUnit,
  SystemConfiguration,
  PerformanceProfile,
  Certification,
  Warranty,
  PriceObservation,
  SourceReference,
  EditorialContent,
} from "./types";
import { brandDatasetSchema } from "./schemas";

/* ---- Import fixtures ---- */
import { daikinDataset } from "./fixtures/brands/daikin-auto";
import { mitsubishielectricDataset as mitsubishiElectricDataset } from "./fixtures/brands/mitsubishi-electric-auto";
// Fujitsu utilise le jeu vérifié manuellement : modèles KZAH1 exacts et photos officielles.
import { fujitsuDataset } from "./fixtures/brands/fujitsu";
import { greeDataset } from "./fixtures/brands/gree-auto";
// Midea utilise le jeu vérifié manuellement : appariements All Easy Pro officiels.
import { mideaDataset } from "./fixtures/brands/midea";
import { lgDataset } from "./fixtures/brands/lg-auto";
import { samsungDataset } from "./fixtures/brands/samsung-auto";
import { moovairDataset } from "./fixtures/brands/moovair-auto";
import { panasonicDataset } from "./fixtures/brands/panasonic-auto";
import { mainlineDataset } from "./fixtures/brands/mainline";

import { sharpDataset } from "./fixtures/brands/sharp-auto";
import { zephyrDataset } from "./fixtures/brands/zephyr-auto";
import { goodmanDataset } from "./fixtures/brands/goodman-auto";
import { boschDataset } from "./fixtures/brands/bosch-auto";
import { lennoxDataset } from "./fixtures/brands/lennox-auto";
import { tosotDataset } from "./fixtures/brands/tosot-auto";
import { senvilleDataset } from "./fixtures/brands/senville-auto";
import { napoleonDataset } from "./fixtures/brands/napoleon-auto";
import { directairDataset } from "./fixtures/brands/directair";

/* ------------------------------------------------------------------
   Raw datasets — add new brands here
   ------------------------------------------------------------------ */

const RAW_DATASETS: BrandDataset[] = [
  daikinDataset,
  mitsubishiElectricDataset,
  fujitsuDataset,
  greeDataset,
  mideaDataset,
  lgDataset,
  samsungDataset,
  moovairDataset,
  panasonicDataset,
  mainlineDataset,
  sharpDataset,
  zephyrDataset,
  goodmanDataset,
  boschDataset,
  lennoxDataset,
  tosotDataset,
  senvilleDataset,
  napoleonDataset,
  directairDataset,
];

/* ------------------------------------------------------------------
   Validation
   ------------------------------------------------------------------ */

function validateDatasets(datasets: BrandDataset[]): BrandDataset[] {
  const slugsSeen = new Set<string>();
  const idsSeen = new Set<string>();
  const errors: string[] = [];

  for (const ds of datasets) {
    // Validate with Zod
    const result = brandDatasetSchema.safeParse(ds);
    if (!result.success) {
      errors.push(
        `Brand "${ds.brand.name}" failed validation:\n` +
          result.error.issues
            .map((i) => `  - ${i.path.join(".")}: ${i.message}`)
            .join("\n"),
      );
      continue;
    }

    // Check unique slugs
    const allSlugs = [
      ds.brand.slug,
      ...ds.series.map((s) => s.slug),
      ...ds.models.map((m) => m.slug),
      ...ds.configurations.map((c) => c.slug),
    ];
    for (const slug of allSlugs) {
      if (slugsSeen.has(slug)) {
        errors.push(`Duplicate slug: "${slug}" in brand "${ds.brand.name}"`);
      }
      slugsSeen.add(slug);
    }

    // Check unique IDs
    const allIds = [
      ds.brand.id,
      ...ds.series.map((s) => s.id),
      ...ds.models.map((m) => m.id),
      ...ds.outdoorUnits.map((u) => u.id),
      ...ds.indoorUnits.map((u) => u.id),
      ...ds.configurations.map((c) => c.id),
      ...ds.certifications.map((c) => c.id),
      ...ds.warranties.map((w) => w.id),
      ...ds.priceObservations.map((p) => p.id),
      ...ds.sources.map((s) => s.id),
    ];
    for (const id of allIds) {
      if (idsSeen.has(id)) {
        errors.push(`Duplicate id: "${id}" in brand "${ds.brand.name}"`);
      }
      idsSeen.add(id);
    }

    // Check referential integrity
    const modelIds = new Set(ds.models.map((m) => m.id));
    const seriesIds = new Set(ds.series.map((s) => s.id));
    const ouIds = new Set(ds.outdoorUnits.map((u) => u.id));
    const configIds = new Set(ds.configurations.map((c) => c.id));
    const sourceIds = new Set(ds.sources.map((s) => s.id));

    for (const model of ds.models) {
      if (!seriesIds.has(model.seriesId)) {
        errors.push(
          `Model "${model.slug}": seriesId "${model.seriesId}" not found`,
        );
      }
    }
    for (const config of ds.configurations) {
      if (!modelIds.has(config.modelId)) {
        errors.push(
          `Configuration "${config.slug}": modelId "${config.modelId}" not found`,
        );
      }
      if (!ouIds.has(config.outdoorUnitId)) {
        errors.push(
          `Configuration "${config.slug}": outdoorUnitId "${config.outdoorUnitId}" not found`,
        );
      }
    }
    for (const cert of ds.certifications) {
      if (!configIds.has(cert.configurationId)) {
        errors.push(
          `Certification "${cert.id}": configurationId "${cert.configurationId}" not found`,
        );
      }
    }
    for (const perf of ds.performanceProfiles) {
      if (!configIds.has(perf.configurationId)) {
        errors.push(
          `PerformanceProfile: configurationId "${perf.configurationId}" not found`,
        );
      }
    }

    // Check source references
    const allSourceLinks = [
      ...(ds.brand.sources ?? []),
      ...ds.series.flatMap((s) => s.sources ?? []),
      ...ds.configurations.flatMap((c) => c.sources ?? []),
    ];
    for (const link of allSourceLinks) {
      if (!sourceIds.has(link.sourceId)) {
        errors.push(`SourceLink references unknown sourceId "${link.sourceId}"`);
      }
    }
  }

  if (errors.length > 0) {
    const msg = `Data validation failed:\n${errors.join("\n")}`;
    if (process.env.NODE_ENV === "production") {
      console.error(msg);
    } else {
      console.warn(msg);
    }
  }

  return datasets;
}

/* ------------------------------------------------------------------
   Indexed data — computed once at module load
   ------------------------------------------------------------------ */

const VALIDATED = validateDatasets(RAW_DATASETS);

// Flatten all entities for efficient lookup
const ALL_BRANDS: Brand[] = VALIDATED.map((d) => d.brand);
const ALL_SERIES: ProductSeries[] = VALIDATED.flatMap((d) => d.series);
const ALL_MODELS: ProductModel[] = VALIDATED.flatMap((d) => d.models);
const ALL_OUTDOOR_UNITS: OutdoorUnit[] = VALIDATED.flatMap((d) => d.outdoorUnits);
const ALL_INDOOR_UNITS: IndoorUnit[] = VALIDATED.flatMap((d) => d.indoorUnits);
const ALL_CONFIGURATIONS: SystemConfiguration[] = VALIDATED.flatMap((d) => d.configurations);
const ALL_PERFORMANCE_PROFILES: PerformanceProfile[] = VALIDATED.flatMap((d) => d.performanceProfiles);
const ALL_CERTIFICATIONS: Certification[] = VALIDATED.flatMap((d) => d.certifications);
const ALL_WARRANTIES: Warranty[] = VALIDATED.flatMap((d) => d.warranties);
const ALL_PRICE_OBSERVATIONS: PriceObservation[] = VALIDATED.flatMap((d) => d.priceObservations);
const ALL_SOURCES: SourceReference[] = VALIDATED.flatMap((d) => d.sources);
const ALL_EDITORIAL: EditorialContent[] = VALIDATED.flatMap((d) => d.editorial);

// Build indexes
const BRAND_BY_SLUG = new Map(ALL_BRANDS.map((b) => [b.slug, b]));
const BRAND_BY_ID = new Map(ALL_BRANDS.map((b) => [b.id, b]));
const MODEL_BY_SLUG = new Map(ALL_MODELS.map((m) => [m.slug, m]));
const MODEL_BY_ID = new Map(ALL_MODELS.map((m) => [m.id, m]));
const CONFIG_BY_ID = new Map(ALL_CONFIGURATIONS.map((c) => [c.id, c]));
const SOURCE_BY_ID = new Map(ALL_SOURCES.map((s) => [s.id, s]));

/* ------------------------------------------------------------------
   Public API — exported for use by queries
   ------------------------------------------------------------------ */

export const registry = {
  brands: ALL_BRANDS,
  series: ALL_SERIES,
  models: ALL_MODELS,
  outdoorUnits: ALL_OUTDOOR_UNITS,
  indoorUnits: ALL_INDOOR_UNITS,
  configurations: ALL_CONFIGURATIONS,
  performanceProfiles: ALL_PERFORMANCE_PROFILES,
  certifications: ALL_CERTIFICATIONS,
  warranties: ALL_WARRANTIES,
  priceObservations: ALL_PRICE_OBSERVATIONS,
  sources: ALL_SOURCES,
  editorial: ALL_EDITORIAL,

  // Indexes
  brandBySlug: BRAND_BY_SLUG,
  brandById: BRAND_BY_ID,
  modelBySlug: MODEL_BY_SLUG,
  modelById: MODEL_BY_ID,
  configById: CONFIG_BY_ID,
  sourceById: SOURCE_BY_ID,
} as const;
