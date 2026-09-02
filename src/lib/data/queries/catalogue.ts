/* ==================================================================
   Queries — Catalogue-specific access layer
   
   Server-side functions for the /thermopompes catalogue page.
   Handles filtering, searching, sorting in one orchestrated call.
   ================================================================== */

import type { ProductModel, SystemConfiguration, Brand } from "../types";
import type { SystemType } from "../types/enums";
import { SYSTEM_TYPE_LABELS } from "../types/enums";
import { registry } from "../registry";

/* ------------------------------------------------------------------
   Catalogue filter params (from URL searchParams)
   ------------------------------------------------------------------ */

export interface CatalogueParams {
  search?: string;
  type?: SystemType;
  brand?: string;        // brand slug
  series?: string;       // series slug
  capacity?: number;     // nominal BTU
  coldClimate?: boolean;
  sort?: CatalogueSort;
}

export type CatalogueSort =
  | "relevance"
  | "brand-asc"
  | "capacity-asc"
  | "capacity-desc";

export const SORT_OPTIONS: { value: CatalogueSort; label: string }[] = [
  { value: "relevance", label: "Pertinence" },
  { value: "brand-asc", label: "Marque (A-Z)" },
  { value: "capacity-asc", label: "Capacité (croissante)" },
  { value: "capacity-desc", label: "Capacité (décroissante)" },
];

/* ------------------------------------------------------------------
   Enriched model for catalogue display
   ------------------------------------------------------------------ */

export interface CatalogueProduct {
  model: ProductModel;
  brand: Brand;
  configuration: SystemConfiguration | null;
  systemTypeLabel: string;
  isColdClimate: boolean;
  /** Official manufacturer image URL (from model or series) */
  imageUrl: string | null;
  refrigerant: string | null;
}

/* ------------------------------------------------------------------
   Available filter values (computed from actual data)
   ------------------------------------------------------------------ */

export interface AvailableFilters {
  types: { value: SystemType; label: string; count: number }[];
  brands: { slug: string; name: string; count: number }[];
  capacities: { value: number; label: string; count: number }[];
  hasColdClimate: boolean;
}

/**
 * Compute available filter options from published models.
 */
export function getAvailableFilters(): AvailableFilters {
  const published = registry.models.filter((m) => m.status === "published" && m.isActive2026);

  // Types
  const typeMap = new Map<SystemType, number>();
  for (const m of published) {
    typeMap.set(m.systemType, (typeMap.get(m.systemType) ?? 0) + 1);
  }
  const types = Array.from(typeMap.entries())
    .map(([value, count]) => ({
      value,
      label: SYSTEM_TYPE_LABELS[value],
      count,
    }))
    .sort((a, b) => b.count - a.count);

  // Brands
  const brandMap = new Map<string, { name: string; count: number }>();
  for (const m of published) {
    const brand = registry.brandById.get(m.brandId);
    if (!brand) continue;
    const existing = brandMap.get(brand.slug);
    if (existing) {
      existing.count++;
    } else {
      brandMap.set(brand.slug, { name: brand.name, count: 1 });
    }
  }
  const brands = Array.from(brandMap.entries())
    .map(([slug, { name, count }]) => ({ slug, name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Capacities
  const capMap = new Map<number, number>();
  for (const m of published) {
    if (m.nominalCapacityBtu != null) {
      capMap.set(
        m.nominalCapacityBtu,
        (capMap.get(m.nominalCapacityBtu) ?? 0) + 1,
      );
    }
  }
  const capacities = Array.from(capMap.entries())
    .map(([value, count]) => ({
      value,
      label: `${(value / 1000).toFixed(0)}\u2009000 BTU`,
      count,
    }))
    .sort((a, b) => a.value - b.value);

  // Cold climate
  const hasColdClimate = published.some((m) =>
    m.categories.includes("cold-climate"),
  );

  return { types, brands, capacities, hasColdClimate };
}

/* ------------------------------------------------------------------
   Main catalogue query
   ------------------------------------------------------------------ */

export function getCatalogueModels(
  params: CatalogueParams = {},
): CatalogueProduct[] {
  let models = registry.models.filter((m) => m.status === "published" && m.isActive2026);

  // ---- Search ----
  if (params.search) {
    const q = params.search.toLowerCase().replace(/[\s\-]/g, "");
    if (q.length > 0) {
      models = models.filter((m) => {
        const brand = registry.brandById.get(m.brandId);
        const searchable = [
          m.normalizedModelNumber,
          m.name.toLowerCase(),
          m.modelNumber.toLowerCase().replace(/[\s\-]/g, ""),
          brand?.name.toLowerCase() ?? "",
        ].join(" ");
        return searchable.includes(q);
      });
    }
  }

  // ---- Filters ----
  if (params.type) {
    models = models.filter((m) => m.systemType === params.type);
  }

  if (params.brand) {
    const brand = registry.brandBySlug.get(params.brand);
    if (brand) {
      models = models.filter((m) => m.brandId === brand.id);
    } else {
      // Unknown brand slug → no results
      models = [];
    }
  }

  if (params.series) {
    const matchedSeries = registry.series.find((s) => s.slug === params.series);
    if (matchedSeries) {
      models = models.filter((m) => m.seriesId === matchedSeries.id);
    } else {
      models = [];
    }
  }

  if (params.capacity) {
    models = models.filter(
      (m) => m.nominalCapacityBtu === params.capacity,
    );
  }

  if (params.coldClimate) {
    models = models.filter((m) => m.categories.includes("cold-climate"));
  }

  // ---- Enrich with brand + config ----
  const products: CatalogueProduct[] = models.map((model) => {
    const brand = registry.brandById.get(model.brandId)!;
    const configuration =
      registry.configurations.find((c) => c.modelId === model.id) ?? null;
    const series = registry.series.find((s) => s.id === model.seriesId);

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
      imageUrl: model.imageUrl ?? series?.imageUrl ?? null,
      refrigerant,
    };
  });

  // ---- Sort ----
  const sort = params.sort ?? "relevance";
  switch (sort) {
    case "brand-asc":
      products.sort((a, b) => a.brand.name.localeCompare(b.brand.name));
      break;
    case "capacity-asc":
      products.sort(
        (a, b) =>
          (a.model.nominalCapacityBtu ?? 0) -
          (b.model.nominalCapacityBtu ?? 0),
      );
      break;
    case "capacity-desc":
      products.sort(
        (a, b) =>
          (b.model.nominalCapacityBtu ?? 0) -
          (a.model.nominalCapacityBtu ?? 0),
      );
      break;
    case "relevance":
    default:
      // Stable order: brand name → capacity
      products.sort((a, b) => {
        const brandCmp = a.brand.name.localeCompare(b.brand.name);
        if (brandCmp !== 0) return brandCmp;
        return (
          (a.model.nominalCapacityBtu ?? 0) -
          (b.model.nominalCapacityBtu ?? 0)
        );
      });
      break;
  }

  return products;
}

/* ------------------------------------------------------------------
   Lightweight model list for the CompareSelector
   ------------------------------------------------------------------ */

export interface SelectableModelData {
  slug: string;
  name: string;
  brandName: string;
  brandSlug: string;
  capacityBtu: number | null;
  imageUrl: string | null;
  isColdClimate: boolean;
  systemTypeLabel: string;
  /* ---- Specs from configuration ---- */
  minHeatingTempC: number | null;
  seer2: number | null;
  hspf2: number | null;
  noiseIndoorMinDbA: number | null;
  hasWifi: boolean | null;
  refrigerant: string | null;
}

export function getSelectableModels(): SelectableModelData[] {
  const published = registry.models.filter((m) => m.status === "published");

  const mapped = published
    .map((model) => {
      const brand = registry.brandById.get(model.brandId);
      if (!brand) return null;
      const series = registry.series.find((s) => s.id === model.seriesId);
      const config =
        registry.configurations.find((c) => c.modelId === model.id) ?? null;
      const outdoorUnit = config
        ? registry.outdoorUnits.find((u) => u.id === config.outdoorUnitId) ??
          null
        : null;

      return {
        slug: model.slug,
        name: model.name,
        brandName: brand.name,
        brandSlug: brand.slug,
        capacityBtu: model.nominalCapacityBtu ?? null,
        imageUrl: model.imageUrl ?? series?.imageUrl ?? null,
        isColdClimate: model.categories.includes("cold-climate"),
        systemTypeLabel: SYSTEM_TYPE_LABELS[model.systemType],
        minHeatingTempC: config?.minHeatingTempC ?? null,
        seer2: config?.seer2 ?? null,
        hspf2: config?.hspf2 ?? null,
        noiseIndoorMinDbA: config?.noiseIndoorMinDbA ?? null,
        hasWifi: config?.hasWifi ?? null,
        refrigerant: (outdoorUnit?.refrigerant as string | undefined) ?? null,
      } satisfies SelectableModelData;
    });

  const filtered: SelectableModelData[] = mapped.filter(
    (m): m is SelectableModelData => m !== null,
  );

  return filtered.sort((a, b) => {
    const brandCmp = a.brandName.localeCompare(b.brandName);
    if (brandCmp !== 0) return brandCmp;
    return (a.capacityBtu ?? 0) - (b.capacityBtu ?? 0);
  });
}

