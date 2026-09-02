/* ==================================================================
   Queries — Brand detail & index data assembly
   ================================================================== */

import type {
  Brand,
  ProductSeries,
  Certification,
  Warranty,
  SourceReference,
  EditorialContent,
} from "../types";
import type { SystemType } from "../types/enums";
import { SYSTEM_TYPE_LABELS } from "../types/enums";
import { registry } from "../registry";
import type { CatalogueProduct } from "./catalogue";

/* ------------------------------------------------------------------
   Brand Detail — everything needed for a brand page
   ------------------------------------------------------------------ */

export interface SeriesSummary {
  series: ProductSeries;
  modelCount: number;
  systemTypeLabel: string;
  capacityRange: { min: number; max: number } | null;
  hasColdClimate: boolean;
  coldClimateCount: number;
}

export interface BrandDetail {
  brand: Brand;
  series: SeriesSummary[];
  models: CatalogueProduct[];
  /** Unique system types with labels */
  systemTypes: { value: SystemType; label: string }[];
  /** Capacity range across all models */
  capacityRange: { min: number; max: number } | null;
  /** Whether any model is cold-climate certified */
  hasColdClimate: boolean;
  coldClimateCount: number;
  /** All warranties across this brand's models */
  warranties: (Warranty & { modelName: string })[];
  /** All certifications */
  certifications: (Certification & { modelName: string })[];
  /** Source references linked to the brand */
  sources: SourceReference[];
  /** Editorial content for models of this brand */
  editorialContent: (EditorialContent & { modelName: string; modelSlug: string })[];
  /** Other published brands for comparison */
  otherBrands: BrandSummary[];
  /** Computed counts */
  modelCount: number;
  configCount: number;
  seriesCount: number;
}

/* ------------------------------------------------------------------
   Brand Summary — lightweight for index
   ------------------------------------------------------------------ */

export interface BrandSummary {
  brand: Brand;
  seriesCount: number;
  modelCount: number;
  systemTypes: { value: SystemType; label: string }[];
  hasColdClimate: boolean;
  coldClimateCount: number;
  capacityRange: { min: number; max: number } | null;
}

/* ------------------------------------------------------------------
   Get all published brands with summary stats
   ------------------------------------------------------------------ */

export function getPublishedBrandsSummary(): BrandSummary[] {
  const publishedBrands = registry.brands.filter(
    (b) => b.status === "published",
  );

  return publishedBrands
    .map((brand) => {
      const models = registry.models.filter(
        (m) => m.brandId === brand.id && m.status === "published",
      );
      const series = registry.series.filter(
        (s) => s.brandId === brand.id && s.status === "published",
      );

      const typeSet = new Map<SystemType, string>();
      let hasColdClimate = false;
      let coldClimateCount = 0;
      const capacities: number[] = [];

      for (const m of models) {
        typeSet.set(m.systemType, SYSTEM_TYPE_LABELS[m.systemType]);
        if (m.categories.includes("cold-climate")) {
          hasColdClimate = true;
          coldClimateCount++;
        }
        if (m.nominalCapacityBtu != null) {
          capacities.push(m.nominalCapacityBtu);
        }
      }

      return {
        brand,
        seriesCount: series.length,
        modelCount: models.length,
        systemTypes: Array.from(typeSet.entries()).map(([value, label]) => ({
          value,
          label,
        })),
        hasColdClimate,
        coldClimateCount,
        capacityRange:
          capacities.length > 0
            ? { min: Math.min(...capacities), max: Math.max(...capacities) }
            : null,
      };
    })
    .sort((a, b) => a.brand.name.localeCompare(b.brand.name));
}

/* ------------------------------------------------------------------
   Get full brand detail for a brand page
   ------------------------------------------------------------------ */

export function getBrandDetail(slug: string): BrandDetail | null {
  const brand = registry.brandBySlug.get(slug);
  if (!brand || brand.status !== "published") return null;

  // Series
  const allSeries = registry.series
    .filter((s) => s.brandId === brand.id && s.status === "published")
    .sort((a, b) => a.name.localeCompare(b.name));

  // Models
  const publishedModels = registry.models.filter(
    (m) => m.brandId === brand.id && m.status === "published",
  );

  // Build series summaries
  const seriesSummaries: SeriesSummary[] = allSeries.map((s) => {
    const seriesModels = publishedModels.filter((m) => m.seriesId === s.id);
    const caps = seriesModels
      .map((m) => m.nominalCapacityBtu)
      .filter((c): c is number => c != null);
    const ccCount = seriesModels.filter((m) =>
      m.categories.includes("cold-climate"),
    ).length;

    return {
      series: s,
      modelCount: seriesModels.length,
      systemTypeLabel: SYSTEM_TYPE_LABELS[s.systemType],
      capacityRange:
        caps.length > 0
          ? { min: Math.min(...caps), max: Math.max(...caps) }
          : null,
      hasColdClimate: ccCount > 0,
      coldClimateCount: ccCount,
    };
  });

  // Enrich models as CatalogueProduct
  const catalogueProducts: CatalogueProduct[] = publishedModels.map(
    (model) => {
      const configuration =
        registry.configurations.find((c) => c.modelId === model.id) ?? null;
      const ser = registry.series.find((s) => s.id === model.seriesId);
      let refrigerant: string | null = null;
      if (configuration) {
        const outdoorUnit = registry.outdoorUnits.find((u) => u.id === configuration.outdoorUnitId);
        if (outdoorUnit && outdoorUnit.refrigerant) {
          refrigerant = outdoorUnit.refrigerant as string;
        }
      }

      return {
        model,
        brand,
        configuration,
        systemTypeLabel: SYSTEM_TYPE_LABELS[model.systemType],
        isColdClimate: model.categories.includes("cold-climate"),
        imageUrl: model.imageUrl ?? ser?.imageUrl ?? null,
        refrigerant,
      };
    },
  );

  // System types
  const typeSet = new Map<SystemType, string>();
  for (const m of publishedModels) {
    typeSet.set(m.systemType, SYSTEM_TYPE_LABELS[m.systemType]);
  }

  // Capacity range
  const allCaps = publishedModels
    .map((m) => m.nominalCapacityBtu)
    .filter((c): c is number => c != null);

  // Cold climate
  const coldClimateCount = publishedModels.filter((m) =>
    m.categories.includes("cold-climate"),
  ).length;

  // Warranties (with model name for context)
  const warranties: (Warranty & { modelName: string })[] = [];
  for (const m of publishedModels) {
    const ws = registry.warranties.filter((w) => w.modelId === m.id);
    for (const w of ws) {
      warranties.push({ ...w, modelName: m.name });
    }
  }

  // Certifications
  const certifications: (Certification & { modelName: string })[] = [];
  for (const m of publishedModels) {
    const modelConfigs = registry.configurations.filter(
      (c) => c.modelId === m.id,
    );
    for (const config of modelConfigs) {
      const certs = registry.certifications.filter(
        (c) => c.configurationId === config.id,
      );
      for (const cert of certs) {
        certifications.push({ ...cert, modelName: m.name });
      }
    }
  }

  // Sources: collect all sourceIds referenced across brand, series, configs
  const allSourceIds = new Set<string>();
  for (const sl of brand.sources ?? []) {
    allSourceIds.add(sl.sourceId);
  }
  for (const s of allSeries) {
    for (const sl of s.sources ?? []) {
      allSourceIds.add(sl.sourceId);
    }
  }
  const brandConfigs = registry.configurations.filter((c) =>
    publishedModels.some((m) => m.id === c.modelId),
  );
  for (const config of brandConfigs) {
    for (const sl of config.sources ?? []) {
      allSourceIds.add(sl.sourceId);
    }
  }
  // If no SourceLinks found, fall back to all sources from this brand's dataset
  // by matching sources that reference this brand's models/series
  const sources = allSourceIds.size > 0
    ? registry.sources.filter((s) => allSourceIds.has(s.id))
    : registry.sources.filter((s) =>
        s.title.toLowerCase().includes(brand.name.toLowerCase().replace(" [dev]", "")),
      );

  // Editorial
  const editorialContent: (EditorialContent & {
    modelName: string;
    modelSlug: string;
  })[] = [];
  for (const m of publishedModels) {
    const ed = registry.editorial.find((e) => e?.modelId && e.modelId === m.id);
    if (ed) {
      editorialContent.push({ ...ed, modelName: m.name, modelSlug: m.slug });
    }
  }

  // Configurations count
  const configCount = registry.configurations.filter((c) =>
    publishedModels.some((m) => m.id === c.modelId),
  ).length;

  // Other brands
  const otherBrands = getPublishedBrandsSummary().filter(
    (bs) => bs.brand.id !== brand.id,
  );

  return {
    brand,
    series: seriesSummaries,
    models: catalogueProducts,
    systemTypes: Array.from(typeSet.entries()).map(([value, label]) => ({
      value,
      label,
    })),
    capacityRange:
      allCaps.length > 0
        ? { min: Math.min(...allCaps), max: Math.max(...allCaps) }
        : null,
    hasColdClimate: coldClimateCount > 0,
    coldClimateCount,
    warranties,
    certifications,
    sources,
    editorialContent,
    otherBrands,
    modelCount: publishedModels.length,
    configCount,
    seriesCount: allSeries.length,
  };
}
