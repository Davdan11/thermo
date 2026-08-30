/* ==================================================================
   Queries — ThermoMatch-specific access layer
   
   Provides the filtered candidates that ThermoMatch needs
   without duplicating product data.
   ================================================================== */

import type { ProductModel, SystemConfiguration, PerformanceProfile } from "../types";
import type { SystemType } from "../types/enums";
import { registry } from "../registry";

/* ------------------------------------------------------------------
   ThermoMatch filter interface
   ------------------------------------------------------------------ */

export interface ThermoMatchFilters {
  /** Required system type from questionnaire */
  systemType?: SystemType | null;
  /** Number of zones needed */
  zones?: number | null;
  /** Minimum capacity needed (BTU/h) */
  minCapacityBtu?: number | null;
  /** Must be cold-climate rated? */
  coldClimate?: boolean;
  /** Minimum operating temperature needed (°C) */
  minOperatingTempC?: number | null;
  /** Maximum budget in cents CAD */
  maxBudgetCents?: number | null;
  /** Priority preferences from questionnaire */
  priorities?: string[];
}

/**
 * Enriched model with configuration and performance data
 * for ThermoMatch recommendation display.
 */
export interface ThermoMatchCandidate {
  model: ProductModel;
  configuration: SystemConfiguration;
  performanceProfile: PerformanceProfile | null;
  brandName: string;
}

/**
 * Get all product models that could match ThermoMatch answers.
 *
 * This function ONLY filters — it does NOT score or rank.
 * Scoring is a separate concern (ThermoScore methodology).
 *
 * Only returns models with status "published" or "verified".
 */
export function getThermoMatchCandidates(
  filters: ThermoMatchFilters,
): ThermoMatchCandidate[] {
  const publishableStatuses = new Set(["published", "verified"]);

  const candidates: ThermoMatchCandidate[] = [];

  for (const model of registry.models) {
    // Only publishable models
    if (!publishableStatuses.has(model.status)) continue;

    // System type filter
    if (filters.systemType && model.systemType !== filters.systemType) continue;

    // Cold climate filter
    if (filters.coldClimate && !model.categories.includes("cold-climate"))
      continue;

    // Zones filter
    if (filters.zones != null && model.zones != null && model.zones < filters.zones)
      continue;

    // Capacity filter
    if (
      filters.minCapacityBtu != null &&
      model.nominalCapacityBtu != null &&
      model.nominalCapacityBtu < filters.minCapacityBtu
    )
      continue;

    // Get configurations for this model
    const configs = registry.configurations.filter(
      (c) => c.modelId === model.id,
    );
    if (configs.length === 0) continue;

    // Check config-level filters
    for (const config of configs) {
      // Min operating temperature
      if (
        filters.minOperatingTempC != null &&
        config.minHeatingTempC != null &&
        config.minHeatingTempC > filters.minOperatingTempC
      )
        continue;

      const perf =
        registry.performanceProfiles.find(
          (p) => p.configurationId === config.id,
        ) ?? null;

      const brand = registry.brandById.get(model.brandId);

      candidates.push({
        model,
        configuration: config,
        performanceProfile: perf,
        brandName: brand?.name ?? model.brandId,
      });
    }
  }

  return candidates;
}
