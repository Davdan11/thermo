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
import { productNames } from "./product-name";
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

  // Une fiche manuelle (curée) remplace la fiche auto de la même unité extérieure.
  // Clé : numéro de modèle normalisé (unité extérieure des configurations manuelles
  // ou numéro principal du modèle manuel). On ne jette jamais une machine différente.
  const normModel = (v: string | null | undefined) => (v ?? "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const manualUnitKeys = new Set<string>();
  for (const ou of manual.outdoorUnits) manualUnitKeys.add(normModel(ou.modelNumber));
  for (const m of manual.models) manualUnitKeys.add(normModel(m.modelNumber));
  manualUnitKeys.delete("");

  const seenAutoUnits = new Set<string>();
  const autoModelsFiltered = auto.models.filter((m) => {
    const key = normModel(m.modelNumber);
    if (key && manualUnitKeys.has(key)) return false;
    if (key && seenAutoUnits.has(key)) return false;
    if (key) seenAutoUnits.add(key);
    return true;
  });

  // Une série manuelle (curée) remplace la série auto qui porte le même slug :
  // les modèles auto sont rattachés à la série manuelle et la série auto disparaît.
  const manualSeriesBySlug = new Map(manual.series.map((s) => [s.slug, s]));
  const autoSeriesRemap = new Map<string, string>();
  const autoSeriesFiltered = auto.series.filter((s) => {
    const m = manualSeriesBySlug.get(s.slug);
    if (m && m.id !== s.id) { autoSeriesRemap.set(s.id, m.id); return false; }
    return true;
  });
  for (const m of autoModelsFiltered) {
    const target = autoSeriesRemap.get(m.seriesId);
    if (target) m.seriesId = target;
  }

  const validAutoModelIds = new Set(autoModelsFiltered.map(m => m.id));
  const autoConfigsFiltered = auto.configurations.filter(c => validAutoModelIds.has(c.modelId));

  return {
    brand: manual.brand.description ? manual.brand : auto.brand,
    sources: [...(auto.sources || []), ...(manual.sources || [])],
    series: dedup(autoSeriesFiltered, manual.series),
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
/* ---- Adresse publique des fiches ----------------------------------
   Les gens cherchent « Haier Tempo 9000 BTU », pas « 1Q09TE1BE » : l'adresse
   porte le nom commercial et la capacité et garde le numéro de modèle à la fin
   (« /produit/haier-tempo-9000-btu-1q09te1be »). L'ancienne adresse reste
   connue du registre : la fiche y répond par une redirection permanente.
   ------------------------------------------------------------------- */

const SERIES_BY_ID = new Map(ALL_SERIES.map((s) => [s.id, s]));

const slugWords = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/** Fiche par marque + fin de l'ancienne adresse (le numéro de modèle) : retrouve une fiche renommée. */
const MODEL_BY_BRAND_TAIL = new Map<string, ProductModel>();

for (const model of ALL_MODELS) {
  const brand = BRAND_BY_ID.get(model.brandId);
  if (!brand) continue;
  const prefix = `${brand.slug}-`;
  const tail = model.slug.startsWith(prefix) ? model.slug.slice(prefix.length) : model.slug;
  MODEL_BY_BRAND_TAIL.set(`${brand.slug}|${tail}`, model);

  const series = SERIES_BY_ID.get(model.seriesId);
  const names = productNames({
    brand: brand.name,
    seriesName: series?.name,
    seriesSlug: series?.slug,
    capacityBtu: model.nominalCapacityBtu,
    modelNumber: model.modelNumber,
  });
  // Le nom de la série commence parfois par la marque (« Haier Tempo ») : on ne la répète pas.
  const nom = names.series ? slugWords(names.series) : null;
  const serieSlug = !nom || nom === brand.slug ? null : nom.startsWith(prefix) ? nom.slice(prefix.length) : nom;
  const btu = model.nominalCapacityBtu;
  const next = [brand.slug, serieSlug, btu ? `${Math.round(btu / 1000)}000-btu` : null, tail]
    .filter(Boolean)
    .join("-");
  if (next !== model.slug && next.length <= 90 && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(next)) {
    model.legacySlug = model.slug;
    model.slug = next;
  }
}

/**
 * Fiches par adresse : l'adresse courante, les anciennes, et toute adresse
 * intermédiaire qui finit par le numéro de modèle de la fiche (le nom commercial
 * ou la capacité ont pu changer depuis).
 */
class ModelSlugIndex extends Map<string, ProductModel> {
  override get(slug: string): ProductModel | undefined {
    const direct = super.get(slug);
    if (direct) return direct;
    // La marque la plus longue d'abord : « ge-appliances-… » n'est pas une fiche « ge ».
    const coupes: number[] = [];
    for (let i = slug.indexOf("-"); i > 0; i = slug.indexOf("-", i + 1)) if (BRAND_BY_SLUG.has(slug.slice(0, i))) coupes.push(i);
    for (const i of coupes.reverse()) {
      const brandSlug = slug.slice(0, i);
      for (let j = i; j > 0; j = slug.indexOf("-", j + 1)) {
        const found = MODEL_BY_BRAND_TAIL.get(`${brandSlug}|${slug.slice(j + 1)}`);
        if (found) return found;
      }
    }
    return undefined;
  }
}

const MODEL_BY_SLUG: Map<string, ProductModel> = new ModelSlugIndex(ALL_MODELS.map((m) => [m.slug, m] as const));
for (const m of ALL_MODELS) if (m.legacySlug && !MODEL_BY_SLUG.has(m.legacySlug)) MODEL_BY_SLUG.set(m.legacySlug, m);
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
