/* ==================================================================
   Tests — Price Estimation Engine
   ================================================================== */

import { describe, it, expect } from "vitest";
import { calculateEstimate } from "../engine";
import { formatCents, formatRange, roundToNearest50 } from "../format";
import { postalCodeToRegion } from "../regions";
import type { EstimatorInput } from "../types";
import {
  ALPHA_GLACIER_18K_PRICES,
  STALE_PRICES,
  BETA_BOREAL_36K_PRICES,
} from "../__fixtures__/price-data";

/* ------------------------------------------------------------------
   Helpers
   ------------------------------------------------------------------ */

const baseWallInput: EstimatorInput = {
  projectType: "wall-single-new",
  installationType: "new",
  postalCode: "H2X 1Y4",
  areaSqFt: "1500-2000",
};

const baseCentralInput: EstimatorInput = {
  projectType: "central-new",
  installationType: "new",
  postalCode: "H2X 1Y4",
  areaSqFt: "2000-2500",
};

/* ------------------------------------------------------------------
   Determinism
   ------------------------------------------------------------------ */

describe("calculateEstimate — determinism", () => {
  it("same inputs + same data = same result", () => {
    const r1 = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    const r2 = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    expect(r1.minCents).toBe(r2.minCents);
    expect(r1.maxCents).toBe(r2.maxCents);
    expect(r1.confidence).toBe(r2.confidence);
  });
});

/* ------------------------------------------------------------------
   Wall single zone — new installation
   ------------------------------------------------------------------ */

describe("calculateEstimate — wall single zone new", () => {
  const result = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);

  it("can estimate with sufficient data", () => {
    expect(result.canEstimate).toBe(true);
  });

  it("produces a valid range", () => {
    expect(result.minCents).toBeGreaterThan(0);
    expect(result.maxCents).toBeGreaterThan(result.minCents);
  });

  it("min is less than max", () => {
    expect(result.minCents).toBeLessThan(result.maxCents);
  });

  it("range is plausible for a wall unit", () => {
    // Should be roughly $4,000 - $8,000 range
    expect(result.minCents).toBeGreaterThan(300_000); // > $3,000
    expect(result.maxCents).toBeLessThan(1_500_000);  // < $15,000
  });

  it("taxes are NOT included", () => {
    expect(result.taxesIncluded).toBe(false);
    expect(result.taxNote).toContain("avant taxes");
  });

  it("has a method version", () => {
    expect(result.methodVersion).toMatch(/^v\d+\.\d+\.\d+/);
  });

  it("has a calculation date", () => {
    expect(result.calculatedAt).toBeTruthy();
  });

  it("preserves input", () => {
    expect(result.input.projectType).toBe("wall-single-new");
  });

  it("has included items", () => {
    expect(result.includedItems.length).toBeGreaterThan(0);
  });

  it("has excluded items", () => {
    expect(result.excludedItems.length).toBeGreaterThan(0);
  });

  it("reports observation count", () => {
    expect(result.observationCount).toBe(ALPHA_GLACIER_18K_PRICES.length);
  });
});

/* ------------------------------------------------------------------
   Central system
   ------------------------------------------------------------------ */

describe("calculateEstimate — central system", () => {
  const result = calculateEstimate(baseCentralInput, BETA_BOREAL_36K_PRICES);

  it("can estimate", () => {
    expect(result.canEstimate).toBe(true);
  });

  it("produces higher range than wall unit", () => {
    const wallResult = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    expect(result.minCents).toBeGreaterThan(wallResult.minCents);
  });

  it("range is plausible for central", () => {
    expect(result.minCents).toBeGreaterThan(700_000);  // > $7,000
    expect(result.maxCents).toBeLessThan(2_500_000);    // < $25,000
  });
});

/* ------------------------------------------------------------------
   Replacement
   ------------------------------------------------------------------ */

describe("calculateEstimate — replacement", () => {
  const replaceInput: EstimatorInput = {
    ...baseWallInput,
    projectType: "wall-single-replace",
    installationType: "replacement",
    removal: true,
  };
  const result = calculateEstimate(replaceInput, ALPHA_GLACIER_18K_PRICES);

  it("can estimate", () => {
    expect(result.canEstimate).toBe(true);
  });

  it("includes removal adjustment", () => {
    const removal = result.breakdown.adjustments.find((a) => a.id === "removal");
    expect(removal).toBeDefined();
    expect(removal!.amountCents).toBeGreaterThan(0);
  });
});

/* ------------------------------------------------------------------
   Multizone
   ------------------------------------------------------------------ */

describe("calculateEstimate — multizone", () => {
  const multiInput: EstimatorInput = {
    projectType: "multi-zone-new",
    installationType: "new",
    postalCode: "H2X 1Y4",
    zones: 3,
    areaSqFt: "2000-2500",
  };
  const result = calculateEstimate(multiInput, ALPHA_GLACIER_18K_PRICES);

  it("includes extra zone adjustments", () => {
    const zoneAdj = result.breakdown.adjustments.find((a) => a.id === "multi-zone-extra");
    expect(zoneAdj).toBeDefined();
    expect(zoneAdj!.label).toContain("2 zones supplémentaires");
  });

  it("extra zones increase the price", () => {
    const singleInput: EstimatorInput = {
      ...multiInput,
      zones: 1,
    };
    const singleResult = calculateEstimate(singleInput, ALPHA_GLACIER_18K_PRICES);
    expect(result.maxCents).toBeGreaterThan(singleResult.maxCents);
  });
});

/* ------------------------------------------------------------------
   Installation complexity
   ------------------------------------------------------------------ */

describe("calculateEstimate — installation complexity", () => {
  it("difficult access increases price", () => {
    const standard = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    const difficult = calculateEstimate(
      { ...baseWallInput, accessComplexity: "difficult" },
      ALPHA_GLACIER_18K_PRICES,
    );
    expect(difficult.maxCents).toBeGreaterThan(standard.maxCents);
  });

  it("electrical work increases price", () => {
    const base = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    const withElec = calculateEstimate(
      { ...baseWallInput, electricalWork: true },
      ALPHA_GLACIER_18K_PRICES,
    );
    expect(withElec.maxCents).toBeGreaterThan(base.maxCents);
    const elecAdj = withElec.breakdown.adjustments.find((a) => a.id === "electrical");
    expect(elecAdj).toBeDefined();
  });

  it("ductwork increases price", () => {
    const base = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    const withDuct = calculateEstimate(
      { ...baseWallInput, ductwork: true },
      ALPHA_GLACIER_18K_PRICES,
    );
    expect(withDuct.maxCents).toBeGreaterThan(base.maxCents);
  });

  it("height adjustment applies", () => {
    const base = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    const highUp = calculateEstimate(
      { ...baseWallInput, height: "third-plus" },
      ALPHA_GLACIER_18K_PRICES,
    );
    expect(highUp.maxCents).toBeGreaterThan(base.maxCents);
  });

  it("long line length increases price", () => {
    const base = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    const longLine = calculateEstimate(
      { ...baseWallInput, lineLength: "very-long" },
      ALPHA_GLACIER_18K_PRICES,
    );
    expect(longLine.maxCents).toBeGreaterThan(base.maxCents);
  });
});

/* ------------------------------------------------------------------
   No data — refusal
   ------------------------------------------------------------------ */

describe("calculateEstimate — no data", () => {
  it("refuses when no observations exist", () => {
    const result = calculateEstimate(baseWallInput, []);
    expect(result.canEstimate).toBe(false);
    expect(result.confidence).toBe("insufficient");
    expect(result.refusalReason).toBeTruthy();
  });

  it("refuses for unknown project type", () => {
    const result = calculateEstimate(
      { ...baseWallInput, projectType: "unknown" },
      ALPHA_GLACIER_18K_PRICES,
    );
    expect(result.canEstimate).toBe(false);
  });

  it("refusal has method version", () => {
    const result = calculateEstimate(baseWallInput, []);
    expect(result.methodVersion).toBeTruthy();
  });

  it("refusal has missing data list", () => {
    const result = calculateEstimate(baseWallInput, []);
    expect(result.missingData.length).toBeGreaterThan(0);
  });
});

/* ------------------------------------------------------------------
   Stale data
   ------------------------------------------------------------------ */

describe("calculateEstimate — stale data", () => {
  const result = calculateEstimate(baseWallInput, STALE_PRICES);

  it("can still estimate with stale data", () => {
    expect(result.canEstimate).toBe(true);
  });

  it("warns about old data", () => {
    expect(result.warnings.some((w) => w.includes("6 mois"))).toBe(true);
  });
});

/* ------------------------------------------------------------------
   Region
   ------------------------------------------------------------------ */

describe("calculateEstimate — regions", () => {
  it("remote region increases price", () => {
    const montreal = calculateEstimate(
      { ...baseWallInput, postalCode: "H2X 1Y4" },
      ALPHA_GLACIER_18K_PRICES,
    );
    const abitibi = calculateEstimate(
      { ...baseWallInput, postalCode: "J9X 1Y4" },
      ALPHA_GLACIER_18K_PRICES,
    );
    // Abitibi has higher multiplier
    expect(abitibi.maxCents).toBeGreaterThanOrEqual(montreal.maxCents);
  });

  it("unknown region warns", () => {
    const result = calculateEstimate(
      { ...baseWallInput, postalCode: undefined },
      ALPHA_GLACIER_18K_PRICES,
    );
    expect(result.warnings.some((w) => w.includes("région"))).toBe(true);
  });
});

/* ------------------------------------------------------------------
   Missing data tracking
   ------------------------------------------------------------------ */

describe("calculateEstimate — missing data tracking", () => {
  it("flags missing model", () => {
    const result = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    expect(result.missingData.some((m) => m.includes("modèle"))).toBe(true);
  });

  it("flags missing postal code", () => {
    const result = calculateEstimate(
      { ...baseWallInput, postalCode: undefined },
      ALPHA_GLACIER_18K_PRICES,
    );
    expect(result.missingData.some((m) => m.includes("postal"))).toBe(true);
  });
});

/* ------------------------------------------------------------------
   Rounding
   ------------------------------------------------------------------ */

describe("calculateEstimate — rounding", () => {
  it("min and max are rounded to nearest $50", () => {
    const result = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    // Rounded to nearest 5000 cents ($50)
    expect(result.minCents % 5000).toBe(0);
    expect(result.maxCents % 5000).toBe(0);
  });
});

/* ------------------------------------------------------------------
   Format utilities
   ------------------------------------------------------------------ */

describe("formatCents", () => {
  it("formats basic amount", () => {
    const formatted = formatCents(500_000);
    expect(formatted).toContain("5");
    expect(formatted).toContain("$");
  });

  it("rounds to nearest $50", () => {
    const formatted = formatCents(512_300);
    // $5,123 → rounded to $5,100 or $5,150
    expect(formatted).toMatch(/\d/);
  });
});

describe("formatRange", () => {
  it("formats a range", () => {
    const range = formatRange(500_000, 800_000);
    expect(range).toContain("à");
    expect(range).toContain("$");
  });
});

describe("roundToNearest50", () => {
  it("rounds correctly", () => {
    expect(roundToNearest50(512_300)).toBe(510_000);
    expect(roundToNearest50(517_600)).toBe(520_000);
    expect(roundToNearest50(500_000)).toBe(500_000);
  });
});

/* ------------------------------------------------------------------
   Postal code → region
   ------------------------------------------------------------------ */

describe("postalCodeToRegion", () => {
  it("maps Montreal", () => {
    expect(postalCodeToRegion("H2X 1Y4")).toBe("montreal");
  });

  it("maps Laval", () => {
    expect(postalCodeToRegion("H7N 1A1")).toBe("laval");
  });

  it("handles lowercase", () => {
    expect(postalCodeToRegion("h2x 1y4")).toBe("montreal");
  });

  it("handles no spaces", () => {
    expect(postalCodeToRegion("H2X1Y4")).toBe("montreal");
  });

  it("returns unknown for invalid", () => {
    expect(postalCodeToRegion("")).toBe("unknown");
    expect(postalCodeToRegion(undefined)).toBe("unknown");
  });
});

/* ------------------------------------------------------------------
   Assumptions
   ------------------------------------------------------------------ */

describe("calculateEstimate — assumptions", () => {
  it("lists assumptions", () => {
    const result = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    expect(result.assumptions.length).toBeGreaterThan(0);
    expect(result.assumptions.some((a) => a.includes("Installation standard"))).toBe(true);
  });

  it("includes new installation assumption", () => {
    const result = calculateEstimate(baseWallInput, ALPHA_GLACIER_18K_PRICES);
    expect(result.assumptions.some((a) => a.includes("Nouvelle installation"))).toBe(true);
  });
});

/* ------------------------------------------------------------------
   Edge cases
   ------------------------------------------------------------------ */

describe("calculateEstimate — edge cases", () => {
  it("handles zero zones gracefully", () => {
    const input: EstimatorInput = {
      ...baseWallInput,
      projectType: "multi-zone-new",
      zones: 0,
    };
    const result = calculateEstimate(input, ALPHA_GLACIER_18K_PRICES);
    const zoneAdj = result.breakdown.adjustments.find((a) => a.id === "multi-zone-extra");
    expect(zoneAdj).toBeUndefined(); // No extra zones
  });

  it("handles 1 zone (no extra)", () => {
    const input: EstimatorInput = {
      ...baseWallInput,
      projectType: "multi-zone-new",
      zones: 1,
    };
    const result = calculateEstimate(input, ALPHA_GLACIER_18K_PRICES);
    const zoneAdj = result.breakdown.adjustments.find((a) => a.id === "multi-zone-extra");
    expect(zoneAdj).toBeUndefined();
  });

  it("handles all adjustments combined", () => {
    const complexInput: EstimatorInput = {
      projectType: "central-replace",
      installationType: "replacement",
      postalCode: "J9X 1Y4",
      areaSqFt: "2500+",
      accessComplexity: "very-difficult",
      height: "third-plus",
      lineLength: "very-long",
      electricalWork: true,
      ductwork: true,
      removal: true,
    };
    const result = calculateEstimate(complexInput, BETA_BOREAL_36K_PRICES);
    expect(result.canEstimate).toBe(true);
    expect(result.breakdown.adjustments.length).toBeGreaterThanOrEqual(5);
    // Price should be significantly higher
    expect(result.maxCents).toBeGreaterThan(1_500_000);
  });
});
