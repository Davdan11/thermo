/* ==================================================================
   Queries — Product access functions
   ================================================================== */

import type {
  ProductModel,
  SystemConfiguration,
  PerformanceProfile,
  Certification,
  Warranty,
  PriceObservation,
  EditorialContent,
  SourceReference,
} from "../types";
import type { PublicationStatus, SystemType, SystemCategory } from "../types/enums";
import { registry } from "../registry";

/* ------------------------------------------------------------------
   Model queries
   ------------------------------------------------------------------ */

export function getModelBySlug(slug: string): ProductModel | null {
  return registry.modelBySlug.get(slug) ?? null;
}

export function getModelById(id: string): ProductModel | null {
  return registry.modelById.get(id) ?? null;
}

export function getModelsByBrand(
  brandId: string,
  status: PublicationStatus | "all" = "published",
): ProductModel[] {
  const models = registry.models.filter((m) => m.brandId === brandId);
  if (status === "all") return models;
  return models.filter((m) => m.status === status);
}

export function getModelsBySeries(
  seriesId: string,
  status: PublicationStatus | "all" = "published",
): ProductModel[] {
  const models = registry.models.filter((m) => m.seriesId === seriesId);
  if (status === "all") return models;
  return models.filter((m) => m.status === status);
}

/**
 * Search models by manufacturer model number (fuzzy-ish).
 */
export function searchByModelNumber(query: string): ProductModel[] {
  const normalized = query.toLowerCase().replace(/[\s-]/g, "");
  if (!normalized) return [];
  return registry.models.filter((m) =>
    m.normalizedModelNumber.includes(normalized),
  );
}

/* ------------------------------------------------------------------
   Filter interface
   ------------------------------------------------------------------ */

export interface ModelFilters {
  systemType?: SystemType;
  category?: SystemCategory;
  brandId?: string;
  minCapacityBtu?: number;
  maxCapacityBtu?: number;
  coldClimate?: boolean;
  zones?: number;
  status?: PublicationStatus | "all";
}

/**
 * Filter models by multiple criteria.
 */
export function filterModels(filters: ModelFilters): ProductModel[] {
  const status = filters.status ?? "published";

  return registry.models.filter((m) => {
    // Status filter
    if (status !== "all" && m.status !== status) return false;

    // System type
    if (filters.systemType && m.systemType !== filters.systemType) return false;

    // Category
    if (filters.category && !m.categories.includes(filters.category))
      return false;

    // Brand
    if (filters.brandId && m.brandId !== filters.brandId) return false;

    // Capacity range
    if (
      filters.minCapacityBtu &&
      (m.nominalCapacityBtu == null ||
        m.nominalCapacityBtu < filters.minCapacityBtu)
    )
      return false;
    if (
      filters.maxCapacityBtu &&
      (m.nominalCapacityBtu == null ||
        m.nominalCapacityBtu > filters.maxCapacityBtu)
    )
      return false;

    // Cold climate
    if (filters.coldClimate && !m.categories.includes("cold-climate"))
      return false;

    // Zones
    if (filters.zones && m.zones !== filters.zones) return false;

    return true;
  });
}

/* ------------------------------------------------------------------
   Configuration queries
   ------------------------------------------------------------------ */

export function getConfigurationsForModel(
  modelId: string,
): SystemConfiguration[] {
  return registry.configurations.filter((c) => c.modelId === modelId);
}

export function getConfigurationBySlug(
  slug: string,
): SystemConfiguration | null {
  return registry.configurations.find((c) => c.slug === slug) ?? null;
}

/* ------------------------------------------------------------------
   Performance queries
   ------------------------------------------------------------------ */

export function getPerformanceProfile(
  configurationId: string,
): PerformanceProfile | null {
  return (
    registry.performanceProfiles.find(
      (p) => p.configurationId === configurationId,
    ) ?? null
  );
}

/* ------------------------------------------------------------------
   Related data queries
   ------------------------------------------------------------------ */

export function getCertificationsForConfig(
  configurationId: string,
): Certification[] {
  return registry.certifications.filter(
    (c) => c.configurationId === configurationId,
  );
}

export function getWarrantiesForModel(modelId: string): Warranty[] {
  return registry.warranties.filter((w) => w.modelId === modelId);
}

export function getPriceObservationsForModel(
  modelId: string,
): PriceObservation[] {
  return registry.priceObservations.filter((p) => p.modelId === modelId);
}

export function getEditorialForModel(
  modelId: string,
): EditorialContent | null {
  return registry.editorial.find((e) => e.modelId === modelId) ?? null;
}

export function getSourceById(id: string): SourceReference | null {
  return registry.sourceById.get(id) ?? null;
}

/* ------------------------------------------------------------------
   Review helpers
   ------------------------------------------------------------------ */

/**
 * Get models that haven't been verified recently.
 * Useful for editorial/data maintenance workflows.
 */
export function getModelsNeedingReview(
  olderThanDays: number = 90,
): ProductModel[] {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - olderThanDays);
  const cutoffStr = cutoff.toISOString().split("T")[0];

  return registry.models.filter(
    (m) =>
      m.status === "needs_review" ||
      m.verifiedAt == null ||
      m.verifiedAt < cutoffStr,
  );
}
