/* ==================================================================
   Queries — Brand access functions
   ================================================================== */

import type { Brand, ProductSeries } from "../types";
import type { PublicationStatus } from "../types/enums";
import { registry } from "../registry";

/**
 * Get all brands with a specific status (default: "published").
 */
export function getBrands(
  status: PublicationStatus | "all" = "published",
): Brand[] {
  if (status === "all") return registry.brands;
  return registry.brands.filter((b) => b.status === status);
}

/**
 * Get a brand by its public slug.
 */
export function getBrandBySlug(slug: string): Brand | null {
  return registry.brandBySlug.get(slug) ?? null;
}

/**
 * Get a brand by its internal ID.
 */
export function getBrandById(id: string): Brand | null {
  return registry.brandById.get(id) ?? null;
}

/**
 * Get all series belonging to a brand.
 */
export function getSeriesByBrand(
  brandId: string,
  status: PublicationStatus | "all" = "published",
): ProductSeries[] {
  const series = registry.series.filter((s) => s.brandId === brandId);
  if (status === "all") return series;
  return series.filter((s) => s.status === status);
}
