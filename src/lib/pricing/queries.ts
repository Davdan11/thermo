/* ==================================================================
   Pricing — Data access layer

   Reads price observations from the registry.
   Returns raw data — never transforms or invents.
   ================================================================== */

import type { PriceObservation } from "../data/types";
import type { QuebecRegion } from "./types";
import { registry } from "../data/registry";
import { MAX_OBSERVATION_AGE_DAYS } from "./factors";

/* ------------------------------------------------------------------
   Postal code → region mapping (FSA prefix)
   ------------------------------------------------------------------ */

/* ------------------------------------------------------------------
   Get price observations for a configuration or model
   ------------------------------------------------------------------ */

export interface PriceQueryResult {
  observations: PriceObservation[];
  recentObservations: PriceObservation[];
  /** How many observations exist total */
  totalCount: number;
  /** How many are within the freshness window */
  recentCount: number;
}

export function getPriceObservations(opts: {
  configurationId?: string;
  modelId?: string;
  type?: string;
  region?: string;
}): PriceQueryResult {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - MAX_OBSERVATION_AGE_DAYS);
  const cutoffIso = cutoffDate.toISOString().slice(0, 10);

  let observations = registry.priceObservations;

  if (opts.configurationId) {
    observations = observations.filter(
      (p) => p.configurationId === opts.configurationId,
    );
  } else if (opts.modelId) {
    observations = observations.filter((p) => p.modelId === opts.modelId);
  }

  if (opts.type) {
    observations = observations.filter((p) => p.type === opts.type);
  }

  if (opts.region) {
    observations = observations.filter(
      (p) => !p.region || p.region === opts.region,
    );
  }

  const recentObservations = observations.filter(
    (p) => p.observedAt >= cutoffIso,
  );

  return {
    observations,
    recentObservations,
    totalCount: observations.length,
    recentCount: recentObservations.length,
  };
}

/* ------------------------------------------------------------------
   Get all price observations by system type category
   ------------------------------------------------------------------ */

export function getPriceObservationsByCategory(
  systemType: string,
): PriceObservation[] {
  // Find all models of this system type
  const modelIds = new Set(
    registry.models
      .filter((m) => m.systemType === systemType && m.status === "published")
      .map((m) => m.id),
  );

  return registry.priceObservations.filter(
    (p) => p.modelId && modelIds.has(p.modelId),
  );
}
