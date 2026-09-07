/* ==================================================================
   Pricing — Estimation Engine

   PURE FUNCTION. No React. No side effects. Deterministic.
   Same inputs + same data + same version = same result.

   Can REFUSE to estimate when data is insufficient.
   ================================================================== */

import type {
  EstimatorInput,
  EstimatorResult,
  AdjustmentFactor,
  ConfidenceLevel,
  PriceBreakdown,
} from "./types";
import type { PriceObservation } from "../data/types";
import {
  METHOD_VERSION,
  INSTALLATION_BASE_CENTS,
  WALL_SINGLE_PRICE_BANDS,
  CENTRAL_PRICE_BANDS,
  MULTI_ZONE_PER_ZONE_CENTS,
  LINE_LENGTH_ADJUSTMENTS,
  ACCESS_ADJUSTMENTS,
  HEIGHT_ADJUSTMENTS,
  ELECTRICAL_WORK_CENTS,
  DUCTWORK_CENTS,
  REMOVAL_CENTS,
  REGION_MULTIPLIERS,
  BASE_UNCERTAINTY_PERCENT,
  UNCERTAINTY_ADJUSTMENTS,
  GENERALLY_INCLUDED,
  GENERALLY_EXCLUDED,
  VARIABLE_FACTORS,
  MIN_OBSERVATIONS,
  MAX_OBSERVATION_AGE_DAYS,
} from "./factors";
import { postalCodeToRegion } from "./regions";
import { roundToNearest50 } from "./format";

/* ------------------------------------------------------------------
   Main entry point
   ------------------------------------------------------------------ */

export function calculateEstimate(
  input: EstimatorInput,
  priceObservations: PriceObservation[],
): EstimatorResult {
  const now = new Date().toISOString();
  const region = postalCodeToRegion(input.postalCode);
  const warnings: string[] = [];
  const missingData: string[] = [];
  const assumptions: string[] = [];

  // ---- 1. Validate project type ----
  if (input.projectType === "unknown") {
    return buildRefusal(input, now, "Le type de projet n'est pas déterminé.");
  }

  const installBase = INSTALLATION_BASE_CENTS[input.projectType];
  if (installBase === null) {
    return buildRefusal(
      input,
      now,
      "Ce type de projet ne peut pas encore être estimé.",
    );
  }

  // ---- 2. Determine equipment price range ----
  const equipmentRange = getEquipmentRange(input, priceObservations);

  if (!equipmentRange) {
    return buildRefusal(
      input,
      now,
      "Aucune donnée de prix d'équipement disponible pour cette configuration.",
    );
  }

  // ---- 3. Compute confidence ----
  const confidence = computeConfidence(
    input,
    priceObservations,
    region,
  );

  // On permet au moteur de continuer avec les bandes de prix par catégorie (fallback)
  // même si on n'a aucune observation spécifique pour le modèle.

  // ---- 4. Build adjustments ----
  const adjustments = buildAdjustments(input);

  const totalAdjustmentsCents = adjustments.reduce(
    (sum, a) => sum + a.amountCents,
    0,
  );

  // ---- 5. Compute base range ----
  const baseMinCents = equipmentRange.minCents + installBase;
  const baseMaxCents = equipmentRange.maxCents + installBase;

  // Apply adjustments
  const adjustedMinCents = baseMinCents + totalAdjustmentsCents;
  const adjustedMaxCents = baseMaxCents + totalAdjustmentsCents;

  // Apply regional multiplier
  const regionMultiplier = REGION_MULTIPLIERS[region];
  const regionalMinCents = adjustedMinCents * regionMultiplier;
  const regionalMaxCents = adjustedMaxCents * regionMultiplier;

  // ---- 6. Apply uncertainty ----
  const uncertaintyPercent = computeUncertainty(input, priceObservations, region);
  const uncertaintyFactor = uncertaintyPercent / 100;

  const finalMinCents = roundToNearest50(
    regionalMinCents * (1 - uncertaintyFactor),
  );
  const finalMaxCents = roundToNearest50(
    regionalMaxCents * (1 + uncertaintyFactor),
  );

  // ---- 7. Build result ----
  // Warnings
  if (region === "unknown") {
    warnings.push(
      "La région n'a pas pu être déterminée. L'estimation utilise une marge plus large.",
    );
  }

  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - MAX_OBSERVATION_AGE_DAYS);
  const oldObservations = priceObservations.filter(
    (p) => p.observedAt < cutoffDate.toISOString().slice(0, 10),
  );
  if (oldObservations.length > 0 && priceObservations.length > 0) {
    warnings.push(
      "Certaines observations de prix datent de plus de 6 mois. Les prix ont pu évoluer.",
    );
  }

  if (confidence === "preliminary") {
    warnings.push(
      "Cette estimation repose sur un nombre limité d'observations. La fourchette est volontairement large.",
    );
  }

  // Missing data
  if (!input.configurationId && !input.modelId) {
    missingData.push(
      "Aucun modèle précis sélectionné — l'estimation utilise une gamme de prix par catégorie.",
    );
  }
  if (!input.postalCode) {
    missingData.push(
      "Code postal non fourni — l'ajustement régional est approximatif.",
    );
  }
  if (input.accessComplexity === undefined) {
    missingData.push(
      "Complexité d'accès non précisée — installation standard présumée.",
    );
  }

  // Assumptions
  assumptions.push("Installation standard incluse.");
  assumptions.push("Accès standard à l'emplacement d'installation.");
  assumptions.push("Longueur de conduites standard (moins de 5 mètres).");
  if (input.installationType === "new") {
    assumptions.push("Nouvelle installation — aucun système à retirer.");
  }

  const breakdown: PriceBreakdown = {
    equipmentBaseCents: (equipmentRange.minCents + equipmentRange.maxCents) / 2,
    installationBaseCents: installBase,
    adjustments,
    totalAdjustmentsCents,
  };

  return {
    canEstimate: true,
    minCents: finalMinCents,
    maxCents: finalMaxCents,
    breakdown,
    confidence,
    taxesIncluded: false,
    taxNote: "Les montants sont avant taxes (TPS + TVQ).",
    includedItems: [...GENERALLY_INCLUDED],
    excludedItems: [...GENERALLY_EXCLUDED],
    variableFactors: [...VARIABLE_FACTORS],
    warnings,
    missingData,
    assumptions,
    methodVersion: METHOD_VERSION,
    calculatedAt: now,
    input,
    observationCount: priceObservations.length,
  };
}

/* ------------------------------------------------------------------
   Equipment price range
   ------------------------------------------------------------------ */

interface EquipmentRange {
  minCents: number;
  maxCents: number;
  source: "observation" | "category-band";
}

function getEquipmentRange(
  input: EstimatorInput,
  observations: PriceObservation[],
): EquipmentRange | null {
  // Try exact observations first
  const equipmentObs = observations.filter((p) => p.type === "equipment" || p.type === "msrp");
  if (equipmentObs.length >= 1) {
    const amounts = equipmentObs.map((p) => p.amountCents);
    return {
      minCents: Math.min(...amounts),
      maxCents: Math.max(...amounts),
      source: "observation",
    };
  }

  // Try installed price observations (subtract installation)
  const installedObs = observations.filter((p) => p.type === "installed");
  if (installedObs.length >= 1) {
    const installBase = INSTALLATION_BASE_CENTS[input.projectType] ?? 0;
    const amounts = installedObs.map((p) => Math.max(0, p.amountCents - installBase));
    return {
      minCents: Math.min(...amounts),
      maxCents: Math.max(...amounts),
      source: "observation",
    };
  }

  // Fall back to category-based pricing
  return getEquipmentRangeByCategory(input);
}

function getEquipmentRangeByCategory(
  input: EstimatorInput,
): EquipmentRange | null {
  const capacity = input.capacityBtu ?? getDefaultCapacity(input);
  if (!capacity) return null;

  const bands = isCentralProject(input.projectType)
    ? CENTRAL_PRICE_BANDS
    : WALL_SINGLE_PRICE_BANDS;

  const band = bands.find((b) => capacity >= b.minBtu && capacity <= b.maxBtu);
  if (!band) {
    // Use the last band as ceiling
    const lastBand = bands[bands.length - 1];
    return lastBand
      ? {
          minCents: lastBand.equipmentMinCents,
          maxCents: lastBand.equipmentMaxCents,
          source: "category-band",
        }
      : null;
  }

  return {
    minCents: band.equipmentMinCents,
    maxCents: band.equipmentMaxCents,
    source: "category-band",
  };
}

function isCentralProject(projectType: string): boolean {
  return projectType.startsWith("central-");
}

function getDefaultCapacity(input: EstimatorInput): number | null {
  // Derive from area if available
  if (input.areaSqFt) {
    const areaMap: Record<string, number> = {
      "<1000": 9_000,
      "1000-1500": 12_000,
      "1500-2000": 18_000,
      "2000-2500": 24_000,
      "2500+": 36_000,
    };
    return areaMap[input.areaSqFt] ?? 12_000;
  }
  // Default for wall single
  if (input.projectType.startsWith("wall-single")) return 12_000;
  if (input.projectType.startsWith("central")) return 36_000;
  if (input.projectType.startsWith("multi-zone")) return 24_000;
  return 12_000;
}

/* ------------------------------------------------------------------
   Adjustments
   ------------------------------------------------------------------ */

function buildAdjustments(
  input: EstimatorInput,
): AdjustmentFactor[] {
  const adjustments: AdjustmentFactor[] = [];

  // Multizone extra zones
  if (
    input.projectType.startsWith("multi-zone") &&
    input.zones &&
    input.zones > 1
  ) {
    const extraZones = input.zones - 1;
    adjustments.push({
      id: "multi-zone-extra",
      label: `${extraZones} zone${extraZones > 1 ? "s" : ""} supplémentaire${extraZones > 1 ? "s" : ""}`,
      amountCents: extraZones * MULTI_ZONE_PER_ZONE_CENTS,
      reason: "Chaque zone supplémentaire nécessite une unité intérieure et de la tuyauterie additionnelle.",
      trigger: `${input.zones} zones`,
    });
  }

  // Line length
  if (input.lineLength && input.lineLength !== "standard") {
    const amount = LINE_LENGTH_ADJUSTMENTS[input.lineLength] ?? 0;
    if (amount > 0) {
      adjustments.push({
        id: "line-length",
        label: input.lineLength === "long" ? "Tuyauterie longue" : "Tuyauterie très longue",
        amountCents: amount,
        reason: "Une distance plus grande entre les unités nécessite plus de matériaux et de main-d'œuvre.",
        trigger: input.lineLength,
      });
    }
  }

  // Access complexity
  if (input.accessComplexity && input.accessComplexity !== "standard") {
    const amount = ACCESS_ADJUSTMENTS[input.accessComplexity] ?? 0;
    if (amount > 0) {
      adjustments.push({
        id: "access",
        label: input.accessComplexity === "difficult" ? "Accès difficile" : "Accès très difficile",
        amountCents: amount,
        reason: "Un accès limité augmente le temps d'installation et peut nécessiter de l'équipement supplémentaire.",
        trigger: input.accessComplexity,
      });
    }
  }

  // Height
  if (input.height && input.height !== "ground") {
    const amount = HEIGHT_ADJUSTMENTS[input.height] ?? 0;
    if (amount > 0) {
      adjustments.push({
        id: "height",
        label: input.height === "second-floor" ? "Installation au 2e étage" : "Installation au 3e étage ou plus",
        amountCents: amount,
        reason: "L'installation en hauteur nécessite plus de tuyauterie et de main-d'œuvre.",
        trigger: input.height,
      });
    }
  }

  // Electrical work
  if (input.electricalWork) {
    adjustments.push({
      id: "electrical",
      label: "Travaux électriques",
      amountCents: ELECTRICAL_WORK_CENTS,
      reason: "Mise à niveau du panneau électrique ou ajout d'un circuit dédié.",
      trigger: "Travaux électriques requis",
    });
  }

  // Ductwork
  if (input.ductwork) {
    adjustments.push({
      id: "ductwork",
      label: "Travaux de conduits",
      amountCents: DUCTWORK_CENTS,
      reason: "Modification ou installation de conduits pour le système central.",
      trigger: "Travaux de conduits requis",
    });
  }

  // Removal
  if (input.removal) {
    adjustments.push({
      id: "removal",
      label: "Retrait de l'ancien système",
      amountCents: REMOVAL_CENTS,
      reason: "Démontage et disposition de l'équipement existant.",
      trigger: "Retrait de l'ancien système",
    });
  }

  return adjustments;
}

/* ------------------------------------------------------------------
   Confidence
   ------------------------------------------------------------------ */

function computeConfidence(
  input: EstimatorInput,
  observations: PriceObservation[],
  region: string,
): ConfidenceLevel {
  const count = observations.length;

  if (count === 0) return "insufficient";
  if (count < MIN_OBSERVATIONS.preliminary) return "insufficient";
  if (count < MIN_OBSERVATIONS.moderate) return "preliminary";

  // Check freshness
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - MAX_OBSERVATION_AGE_DAYS);
  const recentCount = observations.filter(
    (p) => p.observedAt >= cutoffDate.toISOString().slice(0, 10),
  ).length;

  if (recentCount < MIN_OBSERVATIONS.preliminary) return "preliminary";

  // Has exact model and known region?
  if (
    (input.configurationId || input.modelId) &&
    region !== "unknown" &&
    recentCount >= MIN_OBSERVATIONS.good
  ) {
    return "good";
  }

  return "moderate";
}

/* ------------------------------------------------------------------
   Uncertainty
   ------------------------------------------------------------------ */

function computeUncertainty(
  input: EstimatorInput,
  observations: PriceObservation[],
  region: string,
): number {
  let uncertainty = BASE_UNCERTAINTY_PERCENT;

  if (!input.configurationId && !input.modelId) {
    uncertainty += UNCERTAINTY_ADJUSTMENTS.noExactModel;
  }
  if (region === "unknown") {
    uncertainty += UNCERTAINTY_ADJUSTMENTS.noRegion;
  }
  if (input.installationType === "replacement") {
    uncertainty += UNCERTAINTY_ADJUSTMENTS.replacement;
  }
  if (input.projectType.startsWith("multi-zone")) {
    uncertainty += UNCERTAINTY_ADJUSTMENTS.multiZone;
  }

  // Old data
  if (observations.length > 0) {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - MAX_OBSERVATION_AGE_DAYS);
    const allOld = observations.every(
      (p) => p.observedAt < cutoffDate.toISOString().slice(0, 10),
    );
    if (allOld) {
      uncertainty += UNCERTAINTY_ADJUSTMENTS.oldData;
    }
  }

  return uncertainty;
}

/* ------------------------------------------------------------------
   Refusal builder
   ------------------------------------------------------------------ */

function buildRefusal(
  input: EstimatorInput,
  now: string,
  reason: string,
): EstimatorResult {
  return {
    canEstimate: false,
    minCents: 0,
    maxCents: 0,
    breakdown: {
      equipmentBaseCents: null,
      installationBaseCents: null,
      adjustments: [],
      totalAdjustmentsCents: 0,
    },
    confidence: "insufficient",
    taxesIncluded: false,
    taxNote: "Aucune estimation disponible.",
    includedItems: [],
    excludedItems: [],
    variableFactors: [],
    warnings: [],
    missingData: [
      "Observations de prix d'équipement",
      "Observations de prix installé",
      "Barèmes d'installation par région",
    ],
    assumptions: [],
    methodVersion: METHOD_VERSION,
    calculatedAt: now,
    input,
    observationCount: 0,
    refusalReason: reason,
  };
}
