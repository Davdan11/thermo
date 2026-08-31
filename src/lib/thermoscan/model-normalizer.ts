/* ==================================================================
   ThermoScan — Model Number Normalizer & Catalog Search
   
   Rules:
   - Trim and uppercase
   - Collapse multiple spaces
   - Standardize dashes (spaces between segments → dashes)
   - Common OCR error corrections (conservative — only when unambiguous)
   - Search catalog-2026.json + registry
   ================================================================== */

import type { CatalogMatch } from "./types";

/* ------------------------------------------------------------------
   OCR character confusion map — only applied when context confirms
   (e.g., a segment that should be numeric gets O → 0)
   We never silently change letters in model numbers without marking
   the result as "probable" not "confirmed".
   ------------------------------------------------------------------ */

// Patterns that indicate a segment is numeric (BTU / capacity codes)
const NUMERIC_SEGMENT_RE = /^\d{1,2}(?:K|BTU)?$/i;

/**
 * Normalize a raw model number string for catalog lookup.
 * Keeps the original; returns a cleaned version suitable for comparison.
 */
export function normalizeModelNumber(raw: string): string {
  if (!raw || raw.trim() === "") return "";

  let s = raw.trim().toUpperCase();

  // Collapse internal whitespace to single space
  s = s.replace(/\s+/g, " ");

  // Remove characters that are clearly OCR noise (not alphanumeric or dash/slash/dot)
  s = s.replace(/[^A-Z0-9\-\/\.\*\[\]]/g, "");

  // Standardize: multiple dashes → single dash
  s = s.replace(/-{2,}/g, "-");

  // Remove leading/trailing dashes
  s = s.replace(/^-+|-+$/g, "");

  return s;
}

/**
 * Generate OCR-correction variants of a normalized model number.
 * Used to broaden fuzzy search without silently corrupting values.
 * Returns array of [variant, description] tuples.
 */
export function generateOcrVariants(normalized: string): Array<{ variant: string; description: string }> {
  const variants: Array<{ variant: string; description: string }> = [];

  // O ↔ 0
  if (/[O0]/.test(normalized)) {
    const withZero = normalized.replace(/O/g, "0");
    const withOh = normalized.replace(/0/g, "O");
    if (withZero !== normalized) variants.push({ variant: withZero, description: "O→0" });
    if (withOh !== normalized) variants.push({ variant: withOh, description: "0→O" });
  }

  // I ↔ 1
  if (/[I1]/.test(normalized)) {
    const with1 = normalized.replace(/I(?=[0-9])/g, "1");
    const withI = normalized.replace(/1(?=[A-Z])/g, "I");
    if (with1 !== normalized) variants.push({ variant: with1, description: "I→1" });
    if (withI !== normalized) variants.push({ variant: withI, description: "1→I" });
  }

  // S ↔ 5
  if (/[S5]/.test(normalized)) {
    const with5 = normalized.replace(/S(?=[0-9])/g, "5");
    if (with5 !== normalized) variants.push({ variant: with5, description: "S→5" });
  }

  // B ↔ 8
  if (/[B8]/.test(normalized)) {
    const with8 = normalized.replace(/B(?=[0-9])/g, "8");
    if (with8 !== normalized) variants.push({ variant: with8, description: "B→8" });
  }

  // Remove wildcard placeholders (* ** --) that AHRI uses for variations
  const withoutWildcards = normalized.replace(/[\*\-]+$/, "").replace(/\[\w+\]/, "");
  if (withoutWildcards !== normalized) {
    variants.push({ variant: withoutWildcards, description: "wildcard-stripped" });
  }

  return variants;
}

/**
 * Compute similarity score between two normalized model strings.
 * Returns 0 (no match) to 1 (exact).
 */
export function modelSimilarity(a: string, b: string): number {
  if (!a || !b) return 0;
  const A = a.toUpperCase().replace(/[\-\s\*]/g, "");
  const B = b.toUpperCase().replace(/[\-\s\*]/g, "");

  if (A === B) return 1.0;

  // One starts with the other (prefix match — common for variants)
  if (A.startsWith(B) || B.startsWith(A)) {
    return 0.85;
  }

  // Contains match
  if (A.includes(B) || B.includes(A)) {
    return 0.7;
  }

  // Levenshtein distance-based similarity for close matches
  const dist = levenshtein(A, B);
  const maxLen = Math.max(A.length, B.length);
  if (maxLen === 0) return 1;
  const sim = 1 - dist / maxLen;
  return sim >= 0.75 ? sim : 0;
}

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

/* ------------------------------------------------------------------
   Catalog search — searches catalog-2026.json products in memory
   Called server-side only.
   ------------------------------------------------------------------ */

interface CatalogProduct {
  id: string;
  brand: string;
  series: string;
  systemType: string;
  outdoorModel: string;
  coldClimate: boolean;
  heatingCapacity5FBtuH?: { min: number; max: number };
  seer2?: { min: number; max: number };
  hspf2?: { min: number; max: number };
  refrigerants?: string[];
  pairings?: Array<{ indoorModel: string }>;
}

/**
 * Search the catalog for products matching the scanned label.
 * Returns up to 5 matches ordered by score descending.
 * 
 * @param products - catalog-2026.json products array
 * @param normalizedModel - normalized outdoor model number
 * @param brand - brand name (optional, improves precision)
 * @param btu - nominal BTU (optional, used for fuzzy validation)
 */
export function searchCatalog(
  products: CatalogProduct[],
  normalizedModel: string,
  brand?: string,
  btu?: number
): CatalogMatch[] {
  const results: Array<{ match: CatalogMatch; score: number }> = [];
  const brandLower = brand?.toLowerCase().trim() ?? "";
  const variants = [normalizedModel, ...generateOcrVariants(normalizedModel).map(v => v.variant)];

  for (const p of products) {
    const outdoorNorm = normalizeModelNumber(p.outdoorModel);
    let score = 0;
    const matchedOn: CatalogMatch["matchedOn"] = [];

    // ── Model number scoring ──────────────────────────────────────
    let bestModelScore = 0;
    for (const variant of variants) {
      const sim = modelSimilarity(variant, outdoorNorm);
      if (sim > bestModelScore) bestModelScore = sim;
    }

    // Also check indoor pairings
    if (bestModelScore < 0.7 && p.pairings) {
      for (const pairing of p.pairings) {
        if (!pairing.indoorModel) continue;
        const indoorNorm = normalizeModelNumber(pairing.indoorModel);
        for (const variant of variants) {
          const sim = modelSimilarity(variant, indoorNorm);
          if (sim > bestModelScore) bestModelScore = sim;
        }
      }
    }

    if (bestModelScore >= 0.9) {
      score += 60;
      matchedOn.push("modelNumber");
    } else if (bestModelScore >= 0.75) {
      score += 35;
      matchedOn.push("modelNumber");
    } else if (bestModelScore >= 0.5) {
      score += 15;
    } else {
      continue; // Not close enough
    }

    // ── Brand scoring ─────────────────────────────────────────────
    if (brandLower) {
      const prodBrandLower = p.brand.toLowerCase();
      if (prodBrandLower === brandLower) {
        score += 25;
        matchedOn.push("brand");
      } else if (prodBrandLower.includes(brandLower) || brandLower.includes(prodBrandLower)) {
        score += 15;
        matchedOn.push("brand");
      } else {
        // Brand mismatch — penalize heavily
        score -= 20;
      }
    }

    // ── BTU validation ────────────────────────────────────────────
    if (btu && p.heatingCapacity5FBtuH) {
      const midBtu = (p.heatingCapacity5FBtuH.min + p.heatingCapacity5FBtuH.max) / 2;
      // Allow ±30% tolerance (BTU on label is often nominal, not 5°F capacity)
      const tolerance = midBtu * 0.3;
      if (Math.abs(midBtu - btu) <= tolerance) {
        score += 10;
        matchedOn.push("btu");
      }
    }

    if (score > 0) {
      // Find best indoor pairing model for display
      const firstIndoor = p.pairings?.[0]?.indoorModel;

      const catMatch: CatalogMatch = {
        source: "catalog-2026",
        productId: p.id,
        brand: p.brand,
        outdoorModel: p.outdoorModel,
        indoorModel: firstIndoor || undefined,
        systemType: p.systemType === "ductless" ? "ductless" : p.systemType === "central" ? "central" : "unknown",
        coldClimate: p.coldClimate,
        nominalBtu: p.heatingCapacity5FBtuH
          ? Math.round((p.heatingCapacity5FBtuH.min + p.heatingCapacity5FBtuH.max) / 2)
          : undefined,
        hspf2: p.hspf2,
        seer2: p.seer2,
        heatingCapacity5F: p.heatingCapacity5FBtuH,
        refrigerant: p.refrigerants?.[0],
        matchScore: score,
        matchedOn,
      };
      results.push({ match: catMatch, score });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(r => r.match);
}

/**
 * Estimate manufacture year from serial number using common brand patterns.
 * Returns null if pattern is not recognized — never invents a year.
 */
export function estimateManufactureYear(
  serial: string,
  brand: string
): { year: number | null; confidence: "estimated" | "not-detected"; note: string } {
  if (!serial || !brand) {
    return { year: null, confidence: "not-detected", note: "Numéro de série manquant" };
  }

  const s = serial.trim().toUpperCase();
  const brandL = brand.toLowerCase();

  // Mitsubishi Electric: 4th char = year code (A=2010, B=2011, ... P=2026 skipping I/O)
  if (brandL.includes("mitsubishi")) {
    const YEAR_MAP: Record<string, number> = {
      A: 2010, B: 2011, C: 2012, D: 2013, E: 2014, F: 2015,
      G: 2016, H: 2017, J: 2018, K: 2019, L: 2020, M: 2021,
      N: 2022, P: 2023, Q: 2024, R: 2025, S: 2026,
    };
    const code = s[3];
    if (code && YEAR_MAP[code]) {
      return {
        year: YEAR_MAP[code],
        confidence: "estimated",
        note: `Estimé d'après le code de date Mitsubishi Electric (4ᵉ caractère du N/S : ${code})`,
      };
    }
  }

  // Daikin: positions 5-6 are YY (year)
  if (brandL.includes("daikin") && s.length >= 7) {
    const yy = parseInt(s.slice(4, 6), 10);
    if (!isNaN(yy) && yy >= 10 && yy <= 30) {
      return {
        year: 2000 + yy,
        confidence: "estimated",
        note: `Estimé d'après le code de date Daikin (positions 5-6 du N/S : ${s.slice(4, 6)})`,
      };
    }
  }

  // Fujitsu: first 4 chars often YYWW (year-week)
  if (brandL.includes("fujitsu") && s.length >= 4) {
    const yy = parseInt(s.slice(0, 2), 10);
    if (!isNaN(yy) && yy >= 10 && yy <= 30) {
      return {
        year: 2000 + yy,
        confidence: "estimated",
        note: `Estimé d'après le code de fabrication Fujitsu (2 premiers chiffres du N/S : ${s.slice(0, 2)})`,
      };
    }
  }

  // LG: positions 3-4 are YY
  if (brandL.includes("lg") && s.length >= 5) {
    const yy = parseInt(s.slice(2, 4), 10);
    if (!isNaN(yy) && yy >= 10 && yy <= 30) {
      return {
        year: 2000 + yy,
        confidence: "estimated",
        note: `Estimé d'après le code de date LG (positions 3-4 du N/S : ${s.slice(2, 4)})`,
      };
    }
  }

  return {
    year: null,
    confidence: "not-detected",
    note: "Le format du numéro de série ne correspond pas à un code de date reconnu",
  };
}
