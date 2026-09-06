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

/* ---- Import fixtures ---- */
import { readFileSync } from "fs";
import { join } from "path";

// Load JSON dynamically to bypass TypeScript OOM during next build
const autoDatasetsPath = join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const allAutoDatasets = JSON.parse(readFileSync(autoDatasetsPath, "utf8")) as Record<string, BrandDataset>;

// Manual datasets (curated models with verified specs — these override auto data)
import { daikinDataset as daikinManual } from "./fixtures/brands/daikin";
import { mitsubishiElectricDataset as mitsubishiManual } from "./fixtures/brands/mitsubishi-electric";
import { fujitsuDataset as fujitsuManual } from "./fixtures/brands/fujitsu";
import { greeDataset as greeManual } from "./fixtures/brands/gree";
import { mideaDataset as mideaManual } from "./fixtures/brands/midea";
import { lgDataset as lgManual } from "./fixtures/brands/lg";
import { samsungDataset as samsungManual } from "./fixtures/brands/samsung";
import { moovairDataset as moovairManual } from "./fixtures/brands/moovair";
import { panasonicDataset as panasonicManual } from "./fixtures/brands/panasonic";
import { mainlineDataset as mainlineManual } from "./fixtures/brands/mainline";
import { directairDataset as directairManual } from "./fixtures/brands/directair";
import { boschDataset as boschManual } from "./fixtures/brands/bosch";
import { goodmanDataset as goodmanManual } from "./fixtures/brands/goodman";
import { lennoxDataset as lennoxManual } from "./fixtures/brands/lennox";
import { tosotDataset as tosotManual } from "./fixtures/brands/tosot";
import { senvilleDataset as senvilleManual } from "./fixtures/brands/senville";
import { napoleonDataset as napoleonManual } from "./fixtures/brands/napoleon";
import { sharpDataset as sharpManual } from "./fixtures/brands/sharp";
import { zephyrDataset as zephyrManual } from "./fixtures/brands/zephyr";

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

  const manualModelSignatures = new Set(
    manual.models
      .filter((m) => m.seriesId && m.nominalCapacityBtu != null)
      .map((m) => `${m.seriesId}-${m.nominalCapacityBtu}`)
  );

  const autoModelSignatures = new Set<string>();
  const autoModelsFiltered = auto.models.filter((m) => {
    if (m.seriesId && m.nominalCapacityBtu != null) {
      const sig = `${m.seriesId}-${m.nominalCapacityBtu}`;
      if (manualModelSignatures.has(sig)) {
        return false;
      }
      if (autoModelSignatures.has(sig)) {
        return false; // Deduplicate within auto data
      }
      autoModelSignatures.add(sig);
    }
    return true;
  });

  const validAutoModelIds = new Set(autoModelsFiltered.map(m => m.id));
  const autoConfigsFiltered = auto.configurations.filter(c => validAutoModelIds.has(c.modelId));

  return {
    brand: manual.brand.description ? manual.brand : auto.brand,
    sources: [...(auto.sources || []), ...(manual.sources || [])],
    series: dedup(auto.series, manual.series),
    models: dedup(autoModelsFiltered, manual.models),
    outdoorUnits: dedup(auto.outdoorUnits, manual.outdoorUnits),
    indoorUnits: dedup(auto.indoorUnits, manual.indoorUnits),
    configurations: dedup(autoConfigsFiltered, manual.configurations),
    performanceProfiles: [...(auto.performanceProfiles || []), ...(manual.performanceProfiles || [])],
    certifications: dedup(auto.certifications || [], manual.certifications || []),
    warranties: [...(auto.warranties || []), ...(manual.warranties || [])],
    priceObservations: [...(auto.priceObservations || []), ...(manual.priceObservations || [])],
    editorial: [...(auto.editorial || []), ...(manual.editorial || [])],
  };
}

/* ------------------------------------------------------------------
   Manual overrides map — slug → manual dataset
   ------------------------------------------------------------------ */

const manualOverrides: Record<string, BrandDataset> = {
  "daikin": daikinManual,
  "mitsubishi-electric": mitsubishiManual,
  "fujitsu": fujitsuManual,
  "gree": greeManual,
  "midea": mideaManual,
  "lg": lgManual,
  "samsung": samsungManual,
  "moovair": moovairManual,
  "panasonic": panasonicManual,
  "mainline": mainlineManual,
  "directair": directairManual,
  "bosch": boschManual,
  "goodman": goodmanManual,
  "lennox": lennoxManual,
  "tosot": tosotManual,
  "senville": senvilleManual,
  "napoleon": napoleonManual,
  "sharp": sharpManual,
  "zephyr": zephyrManual,
};

/* ------------------------------------------------------------------
   Build RAW_DATASETS — merge auto + manual for each brand
   ------------------------------------------------------------------ */

const RAW_DATASETS: BrandDataset[] = [];

// First: add all auto datasets (merged with manual if available)
for (const [slug, autoDs] of Object.entries(allAutoDatasets)) {
  const manualDs = manualOverrides[slug];
  if (manualDs) {
    RAW_DATASETS.push(mergeDatasets(autoDs, manualDs));
  } else {
    RAW_DATASETS.push(autoDs);
  }
}

// Then: add manual-only brands that don't have auto files
for (const [slug, manualDs] of Object.entries(manualOverrides)) {
  if (!allAutoDatasets[slug]) {
    RAW_DATASETS.push(manualDs);
  }
}

/* ------------------------------------------------------------------
   Validation
   ------------------------------------------------------------------ */

function validateDatasets(datasets: BrandDataset[]): BrandDataset[] {
  const brandSlugs = new Set<string>();
  const errors: string[] = [];

  for (const ds of datasets) {
    // Quick structural check — just verify brand has required fields
    if (!ds.brand?.id || !ds.brand?.slug || !ds.brand?.name) {
      errors.push(`Brand missing required fields: ${JSON.stringify(ds.brand?.name || 'unknown')}`);
      continue;
    }

    // Check unique brand slugs (important — must be unique)
    if (brandSlugs.has(ds.brand.slug)) {
      errors.push(`Duplicate brand slug: "${ds.brand.slug}"`);
    }
    brandSlugs.add(ds.brand.slug);

    // Check referential integrity for models → series
    const seriesIds = new Set(ds.series.map((s) => s.id));
    for (const model of ds.models) {
      if (!seriesIds.has(model.seriesId)) {
        errors.push(
          `Model "${model.slug}": seriesId "${model.seriesId}" not found`,
        );
      }
    }
  }

  if (errors.length > 0) {
    const msg = `Data validation (${errors.length} issues):\n${errors.slice(0, 20).join("\n")}${errors.length > 20 ? `\n... and ${errors.length - 20} more` : ""}`;
    console.warn(msg);
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
