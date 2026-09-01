/* ==================================================================
   Queries — Comparator data assembly
   ================================================================== */

import { getProductDetail } from "./product-detail";
import type { ProductDetail } from "./product-detail";
import { computeHighlights } from "@/lib/compare/highlights";
import type { ComparisonHighlights } from "@/lib/compare/highlights";
import { calculateLogisVertSimple } from "@/lib/subsidies/logisvert-calculator";

/* ------------------------------------------------------------------
   Types
   ------------------------------------------------------------------ */

export interface CompareSubsidy {
  dollars: number;
  rate: number;
  isColdClimate: boolean;
  capacityBtu: number;
}

export interface CompareProduct {
  detail: ProductDetail;
  imageUrl: string | null;
  subsidy: CompareSubsidy;
}

export interface ComparisonData {
  /** Valid products with resolved image + subsidy */
  products: CompareProduct[];
  /** Raw product details (for highlights compat) */
  details: ProductDetail[];
  /** Slugs that were not found */
  invalidSlugs: string[];
  /** Computed highlights */
  highlights: ComparisonHighlights;
  /** Common performance temperatures across all products */
  commonTemps: number[];
  /** All unique performance temperatures across any product */
  allTemps: number[];
}

/* ------------------------------------------------------------------
   Main query
   ------------------------------------------------------------------ */

const MAX_COMPARE = 5;

/**
 * Load comparison data for the given model slugs.
 * - Deduplicates slugs
 * - Rejects unknowns
 * - Caps at MAX_COMPARE
 * - Computes highlights
 * - Calculates LogisVert subsidy for each product
 */
export function getComparisonData(slugs: string[]): ComparisonData {
  // Deduplicate and cap
  const uniqueSlugs = [...new Set(slugs)].slice(0, MAX_COMPARE);

  const details: ProductDetail[] = [];
  const invalidSlugs: string[] = [];

  for (const slug of uniqueSlugs) {
    const detail = getProductDetail(slug);
    if (detail) {
      details.push(detail);
    } else {
      invalidSlugs.push(slug);
    }
  }

  // Compute highlights
  const highlights = computeHighlights(details);

  // Build enriched products with image + subsidy
  const products: CompareProduct[] = details.map((d) => {
    const imageUrl = d.model.imageUrl ?? d.series.imageUrl ?? null;
    // Derive BTU from available fields
    const nominalBtu =
      d.model.nominalCapacityBtu ??
      d.model.heatingCapacity5FMaxBtu ??
      d.model.coolingCapacityMaxBtu ??
      0;
    const logis = calculateLogisVertSimple(nominalBtu, d.isColdClimate);
    return {
      detail: d,
      imageUrl,
      subsidy: {
        dollars: logis.dollars,
        rate: logis.rate,
        isColdClimate: d.isColdClimate,
        capacityBtu: nominalBtu,
      },
    };
  });

  // Find common and all performance temperatures
  const tempSets = details.map((p) => {
    if (!p.performanceProfile) return new Set<number>();
    return new Set(p.performanceProfile.dataPoints.map((dp) => dp.outdoorTempC));
  });

  const allTempsSet = new Set<number>();
  for (const ts of tempSets) {
    for (const t of ts) allTempsSet.add(t);
  }

  const commonTemps: number[] = [];
  for (const t of allTempsSet) {
    if (tempSets.every((ts) => ts.size === 0 || ts.has(t))) {
      commonTemps.push(t);
    }
  }

  const allTemps = [...allTempsSet].sort((a, b) => b - a);
  commonTemps.sort((a, b) => b - a);

  return {
    products,
    details,
    invalidSlugs,
    highlights,
    commonTemps,
    allTemps,
  };
}

export { MAX_COMPARE };
