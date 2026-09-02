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
// Auto-generated datasets
import { daikinDataset as daikinAuto } from "./fixtures/brands/daikin-auto";
import { mitsubishielectricDataset as mitsubishiAuto } from "./fixtures/brands/mitsubishi-electric-auto";
import { greeDataset as greeAuto } from "./fixtures/brands/gree-auto";
import { lgDataset as lgAuto } from "./fixtures/brands/lg-auto";
import { samsungDataset as samsungAuto } from "./fixtures/brands/samsung-auto";
import { moovairDataset as moovairAuto } from "./fixtures/brands/moovair-auto";
import { panasonicDataset as panasonicAuto } from "./fixtures/brands/panasonic-auto";
import { sharpDataset } from "./fixtures/brands/sharp-auto";
import { zephyrDataset } from "./fixtures/brands/zephyr-auto";
import { goodmanDataset } from "./fixtures/brands/goodman-auto";
import { boschDataset } from "./fixtures/brands/bosch-auto";
import { lennoxDataset } from "./fixtures/brands/lennox-auto";
import { tosotDataset } from "./fixtures/brands/tosot-auto";
import { senvilleDataset } from "./fixtures/brands/senville-auto";
import { napoleonDataset } from "./fixtures/brands/napoleon-auto";

// Manual datasets (curated models with verified specs)
import { daikinDataset as daikinManual } from "./fixtures/brands/daikin";
import { mitsubishiElectricDataset as mitsubishiManual } from "./fixtures/brands/mitsubishi-electric";
import { fujitsuDataset } from "./fixtures/brands/fujitsu";
import { greeDataset as greeManual } from "./fixtures/brands/gree";
import { mideaDataset } from "./fixtures/brands/midea";
import { lgDataset as lgManual } from "./fixtures/brands/lg";
import { samsungDataset as samsungManual } from "./fixtures/brands/samsung";
import { moovairDataset as moovairManual } from "./fixtures/brands/moovair";
import { panasonicDataset as panasonicManual } from "./fixtures/brands/panasonic";
import { mainlineDataset } from "./fixtures/brands/mainline";
import { directairDataset } from "./fixtures/brands/directair";

/* ------------------------------------------------------------------
   Merge function — combines auto-generated + manual datasets
   Manual data takes priority for the brand object.
   Arrays are concatenated, deduped by ID (manual wins on conflict).
   ------------------------------------------------------------------ */

function mergeDatasets(auto: BrandDataset, manual: BrandDataset): BrandDataset {
  const dedup = <T extends { id: string }>(autoArr: T[], manualArr: T[]): T[] => {
    const byId = new Map<string, T>();
    for (const item of autoArr) byId.set(item.id, item);
    for (const item of manualArr) byId.set(item.id, item); // manual overrides
    return [...byId.values()];
  };

  return {
    brand: manual.brand.description ? manual.brand : auto.brand,
    sources: [...(auto.sources || []), ...(manual.sources || [])],
    series: dedup(auto.series, manual.series),
    models: dedup(auto.models, manual.models),
    outdoorUnits: dedup(auto.outdoorUnits, manual.outdoorUnits),
    indoorUnits: dedup(auto.indoorUnits, manual.indoorUnits),
    configurations: dedup(auto.configurations, manual.configurations),
    performanceProfiles: [...(auto.performanceProfiles || []), ...(manual.performanceProfiles || [])],
    certifications: dedup(auto.certifications || [], manual.certifications || []),
    warranties: [...(auto.warranties || []), ...(manual.warranties || [])],
    priceObservations: [...(auto.priceObservations || []), ...(manual.priceObservations || [])],
    editorialContent: [...(auto.editorialContent || []), ...(manual.editorialContent || [])],
  };
}

/* ------------------------------------------------------------------
   Raw datasets — add new brands here
   ------------------------------------------------------------------ */

const RAW_DATASETS: BrandDataset[] = [
  mergeDatasets(daikinAuto, daikinManual),
  mergeDatasets(mitsubishiAuto, mitsubishiManual),
  fujitsuDataset,
  mergeDatasets(greeAuto, greeManual),
  mideaDataset,
  mergeDatasets(lgAuto, lgManual),
  mergeDatasets(samsungAuto, samsungManual),
  mergeDatasets(moovairAuto, moovairManual),
  mergeDatasets(panasonicAuto, panasonicManual),
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
