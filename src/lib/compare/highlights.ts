/* ==================================================================
   Compare — Highlight Rules
   
   Centralized, testable rules for determining which value is
   "best" in a comparison. Every rule returns null when data is
   insufficient for a fair comparison.
   
   IMPORTANT: "Best" is context-dependent. A higher number is NOT
   always better. Each rule documents its logic.
   ================================================================== */

import type { ProductDetail } from "@/lib/data/queries/product-detail";

/* ------------------------------------------------------------------
   Types
   ------------------------------------------------------------------ */

export type HighlightResult = {
  /** Index of the "best" product in the array, or null if undetermined */
  bestIndex: number | null;
  /** Reason why this is best (or why no winner) */
  reason: string;
  /** How many products had data for this comparison */
  dataCount: number;
  /** Total products being compared */
  totalCount: number;
};

/* ------------------------------------------------------------------
   Rule: Lowest indoor noise (min dB(A))
   Lower is better. Only compare if all have data.
   ------------------------------------------------------------------ */

export function lowestIndoorNoise(details: ProductDetail[]): HighlightResult {
  const values = details.map((d) => d.configuration?.noiseIndoorMinDbA ?? null);
  return findLowest(values, details.length, "bruit intérieur minimal");
}

/* ------------------------------------------------------------------
   Rule: Lowest outdoor noise (dB(A))
   ------------------------------------------------------------------ */

export function lowestOutdoorNoise(details: ProductDetail[]): HighlightResult {
  const values = details.map((d) => d.configuration?.noiseOutdoorDbA ?? null);
  return findLowest(values, details.length, "bruit extérieur");
}

/* ------------------------------------------------------------------
   Rule: Highest SEER2
   Higher is better. Only compare same standard.
   ------------------------------------------------------------------ */

export function highestSeer2(details: ProductDetail[]): HighlightResult {
  const values = details.map((d) => d.configuration?.seer2 ?? null);
  return findHighest(values, details.length, "SEER2");
}

/* ------------------------------------------------------------------
   Rule: Highest HSPF2
   ------------------------------------------------------------------ */

export function highestHspf2(details: ProductDetail[]): HighlightResult {
  const values = details.map((d) => d.configuration?.hspf2 ?? null);
  return findHighest(values, details.length, "HSPF2");
}

/* ------------------------------------------------------------------
   Rule: Lowest minimum heating temperature
   Lower is better (can heat in colder weather).
   ------------------------------------------------------------------ */

export function lowestMinTemp(details: ProductDetail[]): HighlightResult {
  const values = details.map((d) => d.configuration?.minHeatingTempC ?? null);
  return findLowest(values, details.length, "temp. min. annoncée");
}

/* ------------------------------------------------------------------
   Rule: Highest heating capacity at a specific temperature
   Only compare if data exists at the SAME temperature for all.
   ------------------------------------------------------------------ */

export function highestCapacityAtTemp(
  details: ProductDetail[],
  targetTempC: number,
): HighlightResult {
  const values = details.map((d) => {
    if (!d.performanceProfile) return null;
    const dp = d.performanceProfile.dataPoints.find(
      (p) => p.outdoorTempC === targetTempC,
    );
    return dp?.heatingCapacityBtu ?? null;
  });
  return findHighest(values, details.length, `capacité à ${targetTempC} °C`);
}

/* ------------------------------------------------------------------
   Rule: Longest warranty of a specific type
   Only compare if conditions are roughly equivalent.
   ------------------------------------------------------------------ */

export function longestWarranty(
  details: ProductDetail[],
  warrantyType: string,
): HighlightResult {
  const values = details.map((d) => {
    const w = d.warranties.find((w) => w.type === warrantyType);
    return w?.durationYears ?? null;
  });
  return findHighest(values, details.length, `garantie ${warrantyType}`);
}

/* ------------------------------------------------------------------
   Helper: find the index with the lowest value
   Returns null if fewer than 2 products have data, or if tied.
   ------------------------------------------------------------------ */

function findLowest(
  values: (number | null)[],
  total: number,
  label: string,
): HighlightResult {
  const withData = values.filter((v) => v !== null);
  const dataCount = withData.length;

  if (dataCount < 2) {
    return {
      bestIndex: null,
      reason: `Données insuffisantes pour comparer : ${label}`,
      dataCount,
      totalCount: total,
    };
  }

  const minVal = Math.min(...(withData as number[]));
  const minIndices = values
    .map((v, i) => (v === minVal ? i : -1))
    .filter((i) => i >= 0);

  if (minIndices.length > 1) {
    return {
      bestIndex: null,
      reason: `Valeurs identiques pour ${label}`,
      dataCount,
      totalCount: total,
    };
  }

  return {
    bestIndex: minIndices[0],
    reason:
      dataCount < total
        ? `Valeur la plus basse parmi ${dataCount} modèles sur ${total} (${label})`
        : `Valeur la plus basse (${label})`,
    dataCount,
    totalCount: total,
  };
}

/* ------------------------------------------------------------------
   Helper: find the index with the highest value
   ------------------------------------------------------------------ */

function findHighest(
  values: (number | null)[],
  total: number,
  label: string,
): HighlightResult {
  const withData = values.filter((v) => v !== null);
  const dataCount = withData.length;

  if (dataCount < 2) {
    return {
      bestIndex: null,
      reason: `Données insuffisantes pour comparer : ${label}`,
      dataCount,
      totalCount: total,
    };
  }

  const maxVal = Math.max(...(withData as number[]));
  const maxIndices = values
    .map((v, i) => (v === maxVal ? i : -1))
    .filter((i) => i >= 0);

  if (maxIndices.length > 1) {
    return {
      bestIndex: null,
      reason: `Valeurs identiques pour ${label}`,
      dataCount,
      totalCount: total,
    };
  }

  return {
    bestIndex: maxIndices[0],
    reason:
      dataCount < total
        ? `Valeur la plus élevée parmi ${dataCount} modèles sur ${total} (${label})`
        : `Valeur la plus élevée (${label})`,
    dataCount,
    totalCount: total,
  };
}

/* ------------------------------------------------------------------
   Compute all highlights for a comparison
   ------------------------------------------------------------------ */

export interface ComparisonHighlights {
  seer2: HighlightResult;
  hspf2: HighlightResult;
  noiseIndoor: HighlightResult;
  noiseOutdoor: HighlightResult;
  minTemp: HighlightResult;
  capacityMinus8: HighlightResult;
  capacityMinus15: HighlightResult;
  capacityMinus25: HighlightResult;
  warrantyParts: HighlightResult;
  warrantyCompressor: HighlightResult;
}

export function computeHighlights(
  details: ProductDetail[],
): ComparisonHighlights {
  return {
    seer2: highestSeer2(details),
    hspf2: highestHspf2(details),
    noiseIndoor: lowestIndoorNoise(details),
    noiseOutdoor: lowestOutdoorNoise(details),
    minTemp: lowestMinTemp(details),
    capacityMinus8: highestCapacityAtTemp(details, -8),
    capacityMinus15: highestCapacityAtTemp(details, -15),
    capacityMinus25: highestCapacityAtTemp(details, -25),
    warrantyParts: longestWarranty(details, "parts"),
    warrantyCompressor: longestWarranty(details, "compressor"),
  };
}
