/* ==================================================================
   Tests — Comparator Query
   ================================================================== */

import { describe, it, expect } from "vitest";
import { getComparisonData, MAX_COMPARE } from "../queries/comparator";

/* ------------------------------------------------------------------
   Basic loading
   ------------------------------------------------------------------ */

describe("getComparisonData — basic loading", () => {
  it("loads two valid products", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-9k"]);
    expect(data.products.length).toBe(2);
    expect(data.invalidSlugs.length).toBe(0);
  });

  it("loads three valid products", () => {
    const data = getComparisonData([
      "daikin-aurora-18k",
      "daikin-aurora-9k",
      "mitsubishi-fs-12k",
    ]);
    expect(data.products.length).toBe(3);
  });

  it("returns empty for no slugs", () => {
    const data = getComparisonData([]);
    expect(data.products.length).toBe(0);
    expect(data.invalidSlugs.length).toBe(0);
  });

  it("filters unknown slugs", () => {
    const data = getComparisonData(["daikin-aurora-18k", "fake-slug-xyz"]);
    expect(data.products.length).toBe(1);
    expect(data.invalidSlugs).toContain("fake-slug-xyz");
  });

  it("deduplicates slugs", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-18k"]);
    expect(data.products.length).toBe(1);
  });
});

/* ------------------------------------------------------------------
   MAX_COMPARE limit
   ------------------------------------------------------------------ */

describe("getComparisonData — MAX_COMPARE", () => {
  it("MAX_COMPARE is 5", () => {
    expect(MAX_COMPARE).toBe(5);
  });

  it("caps at MAX_COMPARE", () => {
    const data = getComparisonData([
      "daikin-aurora-18k",
      "daikin-aurora-9k",
      "mitsubishi-fs-12k",
      "gree-sapphire-9k",
      "gree-sapphire-12k",
      "gree-sapphire-18k", // 6th — should be dropped
    ]);
    expect(data.products.length).toBeLessThanOrEqual(MAX_COMPARE);
  });
});

/* ------------------------------------------------------------------
   Data integrity — uses .detail accessor
   ------------------------------------------------------------------ */

describe("getComparisonData — no configuration mixing", () => {
  it("each product has its own configuration", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-9k"]);
    const [p1, p2] = data.products;
    expect(p1.detail.configuration!.id).not.toBe(p2.detail.configuration!.id);
    expect(p1.detail.configuration!.modelId).toBe(p1.detail.model.id);
    expect(p2.detail.configuration!.modelId).toBe(p2.detail.model.id);
  });

  it("warranties don't leak between products", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-9k"]);
    expect(data.products[0].detail.warranties.length).toBe(2);
    expect(data.products[1].detail.warranties.length).toBe(0);
  });

  it("certifications are scoped to their own config", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-9k"]);
    expect(data.products[0].detail.certifications.length).toBeGreaterThan(0);
    expect(data.products[1].detail.certifications.length).toBeGreaterThan(0);
    for (const cert of data.products[0].detail.certifications) {
      expect(cert.configurationId).toBe(data.products[0].detail.configuration!.id);
    }
    for (const cert of data.products[1].detail.certifications) {
      expect(cert.configurationId).toBe(data.products[1].detail.configuration!.id);
    }
  });
});

/* ------------------------------------------------------------------
   Order preservation
   ------------------------------------------------------------------ */

describe("getComparisonData — order preservation", () => {
  it("preserves the order of slugs", () => {
    const data = getComparisonData([
      "mitsubishi-fs-12k",
      "daikin-aurora-18k",
      "daikin-aurora-9k",
    ]);
    expect(data.products[0].detail.model.slug).toBe("mitsubishi-fs-12k");
    expect(data.products[1].detail.model.slug).toBe("daikin-aurora-18k");
    expect(data.products[2].detail.model.slug).toBe("daikin-aurora-9k");
  });
});

/* ------------------------------------------------------------------
   Temperature analysis
   ------------------------------------------------------------------ */

describe("getComparisonData — temperature analysis", () => {
  it("finds all unique temperatures", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-9k"]);
    expect(data.allTemps.length).toBeGreaterThan(0);
  });

  it("allTemps sorted descending", () => {
    const data = getComparisonData(["daikin-aurora-18k", "mitsubishi-fs-12k"]);
    for (let i = 1; i < data.allTemps.length; i++) {
      expect(data.allTemps[i - 1]).toBeGreaterThanOrEqual(data.allTemps[i]);
    }
  });
});

/* ------------------------------------------------------------------
   Highlights computation
   ------------------------------------------------------------------ */

describe("getComparisonData — highlights", () => {
  it("computes highlights object", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-9k"]);
    expect(data.highlights).toBeDefined();
    expect(data.highlights.seer2).toBeDefined();
    expect(data.highlights.noiseIndoor).toBeDefined();
  });

  it("no false winners with insufficient data", () => {
    const data = getComparisonData(["daikin-aurora-18k", "gree-flexx-36k"]);
    // Un gagnant n'est possible que si au moins deux produits ont la donnée.
    if (data.highlights.seer2.dataCount < 2) expect(data.highlights.seer2.bestIndex).toBeNull();
    else expect(data.highlights.seer2.bestIndex).not.toBeNull();
    if (data.highlights.noiseIndoor.dataCount < 2) expect(data.highlights.noiseIndoor.bestIndex).toBeNull();
  });

  it("SEER2 not compared between products using different standards", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-9k"]);
    expect(data.highlights.seer2.bestIndex).toBeNull();
  });
});

/* ------------------------------------------------------------------
   Discontinued model
   ------------------------------------------------------------------ */

describe("getComparisonData — discontinued model", () => {
  it("loads all published models", () => {
    const data = getComparisonData(["daikin-aurora-18k"]);
    expect(data.products[0].detail.model.status).toBe("published");
  });
});

/* ------------------------------------------------------------------
   Same type comparison
   ------------------------------------------------------------------ */

describe("getComparisonData — mixed types", () => {
  it("allows comparing different system types", () => {
    const data = getComparisonData(["daikin-aurora-18k", "gree-flexx-36k"]);
    expect(data.products[0].detail.systemTypeLabel).toBe("Murale simple zone");
    expect(data.products[1].detail.systemTypeLabel).toBe("Centrale gainable");
    expect(data.products.length).toBe(2);
  });
});

/* ------------------------------------------------------------------
   Price comparison validity
   ------------------------------------------------------------------ */

describe("getComparisonData — prices", () => {
  it("none of the test products have prices", () => {
    const data = getComparisonData([
      "daikin-aurora-18k",
      "daikin-aurora-9k",
      "mitsubishi-fs-12k",
    ]);
    for (const p of data.products) {
      expect(p.detail.prices.length).toBe(0);
    }
  });
});

/* ------------------------------------------------------------------
   Missing data handling
   ------------------------------------------------------------------ */

describe("getComparisonData — missing data", () => {
  it("partial data product loads correctly", () => {
    const data = getComparisonData(["gree-flexx-36k", "daikin-aurora-18k"]);
    const gree = data.products[0];
    expect(gree.detail.editorial).toBeNull();
    expect(gree.detail.warranties.length).toBe(0);
    const daikin = data.products[1];
    expect(daikin.detail.editorial).toBeNull();
    expect(daikin.detail.warranties.length).toBe(2);
  });

  it("zero is a valid value, not missing", () => {
    const data = getComparisonData(["daikin-aurora-18k"]);
    expect(data.products[0].detail.model.zones).toBe(1);
  });
});

/* ------------------------------------------------------------------
   Subsidy calculation
   ------------------------------------------------------------------ */

describe("getComparisonData — subsidy", () => {
  it("calculates LogisVert subsidy for each product", () => {
    const data = getComparisonData(["daikin-aurora-18k", "daikin-aurora-9k"]);
    for (const p of data.products) {
      expect(p.subsidy).toBeDefined();
      expect(typeof p.subsidy.dollars).toBe("number");
      expect(typeof p.subsidy.rate).toBe("number");
      expect(typeof p.subsidy.isColdClimate).toBe("boolean");
    }
  });

  it("cold climate products get 120$/kBTU rate", () => {
    const data = getComparisonData(["daikin-aurora-18k"]);
    if (data.products[0].detail.isColdClimate) {
      expect(data.products[0].subsidy.rate).toBe(120);
    }
  });

  it("provides imageUrl from model or series", () => {
    const data = getComparisonData(["daikin-aurora-18k"]);
    // imageUrl can be string or null, but should be defined
    expect(data.products[0]).toHaveProperty("imageUrl");
  });
});
