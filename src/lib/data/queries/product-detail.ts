/* ==================================================================
   Queries — Product Detail page data assembly
   ================================================================== */

import type {
  ProductModel,
  ProductSeries,
  Brand,
  SystemConfiguration,
  OutdoorUnit,
  IndoorUnit,
  PerformanceProfile,
  Certification,
  Warranty,
  PriceObservation,
  EditorialContent,
  SourceReference,
} from "../types";
import { registry } from "../registry";
import type { CatalogueProduct } from "./catalogue";
import { SYSTEM_TYPE_LABELS } from "../types/enums";

/* ------------------------------------------------------------------
   Product Detail — everything needed for a product page
   ------------------------------------------------------------------ */

export interface ProductDetail {
  model: ProductModel;
  series: ProductSeries;
  brand: Brand;
  configuration: SystemConfiguration | null;
  outdoorUnit: OutdoorUnit | null;
  indoorUnit: IndoorUnit | null;
  performanceProfile: PerformanceProfile | null;
  certifications: Certification[];
  warranties: Warranty[];
  prices: PriceObservation[];
  editorial: EditorialContent | null;
  sources: SourceReference[];
  isColdClimate: boolean;
  systemTypeLabel: string;
  /** Other models in the same series (for config switching) */
  seriesSiblings: ProductModel[];
  /** Similar models from other series/brands */
  similarModels: CatalogueProduct[];
}

/**
 * Load all data for a product detail page.
 * Returns null if the model doesn't exist or isn't published.
 */
export function getProductDetail(slug: string): ProductDetail | null {
  const model = registry.modelBySlug.get(slug);
  if (!model) return null;

  // Only show published models
  if (model.status !== "published" && model.status !== "discontinued") {
    return null;
  }

  const brand = registry.brandById.get(model.brandId);
  if (!brand) return null;

  const series = registry.series.find((s) => s.id === model.seriesId);
  if (!series) return null;

  // Configuration (first available — models have 1 config each in current architecture)
  const configuration =
    registry.configurations.find((c) => c.modelId === model.id) ?? null;

  // Units
  const outdoorUnit = configuration
    ? registry.outdoorUnits.find((u) => u.id === configuration.outdoorUnitId) ?? null
    : null;
  const indoorUnit = configuration?.indoorUnitId
    ? registry.indoorUnits.find((u) => u.id === configuration.indoorUnitId) ?? null
    : null;

  // Performance
  const performanceProfile = configuration
    ? registry.performanceProfiles.find(
        (p) => p.configurationId === configuration.id,
      ) ?? null
    : null;

  // Certifications
  const certifications = configuration
    ? registry.certifications.filter(
        (c) => c.configurationId === configuration.id,
      )
    : [];

  // Warranties
  const warranties = registry.warranties.filter(
    (w) => w.modelId === model.id,
  );

  // Prices
  const prices = registry.priceObservations.filter(
    (p) => p.modelId === model.id || p.configurationId === configuration?.id,
  );

  // Editorial
  const editorial =
    registry.editorial.find((e) => e.modelId === model.id) ?? null;

  // Sources — collect all source IDs referenced by this product
  const sourceIds = new Set<string>();

  // From brand
  for (const sl of brand.sources ?? []) {
    sourceIds.add(sl.sourceId);
  }
  // From series
  for (const sl of series.sources ?? []) {
    sourceIds.add(sl.sourceId);
  }
  // From configuration
  if (configuration) {
    for (const sl of configuration.sources ?? []) {
      sourceIds.add(sl.sourceId);
    }
  }
  // From certifications
  for (const cert of certifications) {
    if (cert.sourceId) sourceIds.add(cert.sourceId);
  }
  // From warranties
  for (const w of warranties) {
    if (w.sourceId) sourceIds.add(w.sourceId);
  }
  // From prices
  for (const p of prices) {
    if (p.sourceId) sourceIds.add(p.sourceId);
  }

  const sources: SourceReference[] = [];
  for (const sid of sourceIds) {
    const src = registry.sourceById.get(sid);
    if (src) sources.push(src);
  }

  // Series siblings (other models in the same series, excluding current)
  const seriesSiblings = registry.models.filter(
    (m) =>
      m.seriesId === model.seriesId &&
      m.id !== model.id &&
      m.status === "published",
  );

  // Similar models — same type, different model, published
  const similarModels: CatalogueProduct[] = registry.models
    .filter(
      (m) =>
        m.id !== model.id &&
        m.status === "published" &&
        m.systemType === model.systemType,
    )
    .slice(0, 4)
    .map((m) => {
      const b = registry.brandById.get(m.brandId)!;
      const cfg =
        registry.configurations.find((c) => c.modelId === m.id) ?? null;
      const ser = registry.series.find((s) => s.id === m.seriesId);
      let refrigerant: string | null = null;
      if (cfg) {
        const outdoorUnit = registry.outdoorUnits.find((u) => u.id === cfg.outdoorUnitId);
        if (outdoorUnit && outdoorUnit.refrigerant) {
          refrigerant = outdoorUnit.refrigerant as string;
        }
      }
      return {
        model: m,
        brand: b,
        configuration: cfg,
        systemTypeLabel: SYSTEM_TYPE_LABELS[m.systemType],
        isColdClimate: m.categories.includes("cold-climate"),
        imageUrl: m.imageUrl ?? ser?.imageUrl ?? null,
        refrigerant,
      };
    });

  return {
    model,
    series,
    brand,
    configuration,
    outdoorUnit,
    indoorUnit,
    performanceProfile,
    certifications,
    warranties,
    prices,
    editorial,
    sources,
    isColdClimate: model.categories.includes("cold-climate"),
    systemTypeLabel: SYSTEM_TYPE_LABELS[model.systemType],
    seriesSiblings,
    similarModels,
  };
}
