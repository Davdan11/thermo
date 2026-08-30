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

/**
 * Map a Canadian postal code to a Quebec region.
 * Uses the FSA (first 2-3 characters) for approximation.
 * Returns "unknown" if the region cannot be determined.
 *
 * Quebec FSAs are complex — some prefixes overlap between regions.
 * This mapping is simplified and conservative.
 */
export function postalCodeToRegion(postalCode: string | undefined): QuebecRegion {
  if (!postalCode) return "unknown";

  const cleaned = postalCode.replace(/\s/g, "").toUpperCase();
  if (cleaned.length < 3) return "unknown";

  const fsa = cleaned.slice(0, 3); // e.g. "H2X"
  const firstTwo = cleaned.slice(0, 2); // e.g. "H2"
  const firstChar = cleaned[0]; // e.g. "H"

  // Not a Quebec postal code
  if (firstChar !== "G" && firstChar !== "H" && firstChar !== "J") {
    return "unknown";
  }

  // Montreal (H1-H5, H8, H9)
  if (firstTwo === "H1" || firstTwo === "H2" || firstTwo === "H3" ||
      firstTwo === "H4" || firstTwo === "H5" || firstTwo === "H8" ||
      firstTwo === "H9") {
    return "montreal";
  }

  // Laval (H7)
  if (firstTwo === "H7") return "laval";

  // Montérégie (J0-J6, simplified)
  if (firstTwo === "J2" || firstTwo === "J3" || firstTwo === "J4" ||
      firstTwo === "J5" || firstTwo === "J6") {
    return "monteregie";
  }

  // Laurentides (J7)
  if (firstTwo === "J7") return "laurentides";

  // Outaouais (J8, J9)
  if (firstTwo === "J8" || firstTwo === "J9") return "outaouais";

  // J0 is split across many regions — use 3rd character
  if (firstTwo === "J0") {
    const third = fsa[2];
    if (third === "Y" || third === "Z") return "abitibi";
    if (third === "K" || third === "N") return "lanaudiere";
    return "monteregie"; // Default for J0
  }

  // J1 — Estrie / Montérégie overlap (simplified to Estrie)
  if (firstTwo === "J1") return "estrie";

  // Quebec City (G1-G3)
  if (firstTwo === "G1" || firstTwo === "G2" || firstTwo === "G3") {
    return "quebec-city";
  }

  // Saguenay (G7)
  if (firstTwo === "G7") return "saguenay";

  // Mauricie (G8, G9)
  if (firstTwo === "G8" || firstTwo === "G9") return "mauricie";

  // G4 — Côte-Nord / Mauricie overlap
  if (firstTwo === "G4") return "cote-nord";

  // G5 — Bas-Saint-Laurent / Centre-du-Québec
  if (firstTwo === "G5") return "bas-saint-laurent";

  // G6 — Centre-du-Québec / Chaudière-Appalaches
  if (firstTwo === "G6") return "mauricie";

  // G0 — rural, varies widely
  if (firstTwo === "G0") return "bas-saint-laurent";

  // H6 — Montérégie
  if (firstTwo === "H6") return "monteregie";

  return "unknown";
}

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
