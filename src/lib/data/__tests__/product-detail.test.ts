/* ==================================================================
   Tests — Product Detail query
   ================================================================== */

import { describe, it, expect } from "vitest";
import { getProductDetail } from "../queries/product-detail";

/* ------------------------------------------------------------------
   Published model — full data (Daikin Aurora 18K)
   ------------------------------------------------------------------ */

describe("getProductDetail — published model with full data", () => {
  const detail = getProductDetail("daikin-aurora-18k");

  it("returns non-null for a published model", () => {
    expect(detail).not.toBeNull();
  });

  it("loads the correct model", () => {
    expect(detail!.model.id).toBe("model-daikin-aurora-18k");
    expect(detail!.model.slug).toBe("daikin-aurora-18k");
  });

  it("loads brand", () => {
    expect(detail!.brand.slug).toBe("daikin");
  });

  it("loads series", () => {
    expect(detail!.series.id).toBe("series-daikin-aurora");
  });

  it("loads configuration with SEER2/HSPF2", () => {
    expect(detail!.configuration).not.toBeNull();
    expect(detail!.configuration!.seer2).toBe(20.0);
    expect(detail!.configuration!.hspf2).toBe(10.5);
  });

  it("loads outdoor unit", () => {
    expect(detail!.outdoorUnit).not.toBeNull();
    expect(detail!.outdoorUnit!.modelNumber).toBe("RXL18QMVJU");
  });

  it("loads indoor unit", () => {
    expect(detail!.indoorUnit).not.toBeNull();
    expect(detail!.indoorUnit!.modelNumber).toBe("FTXS18WVJU");
  });

  it("loads performance profile", () => {
    expect(detail!.performanceProfile).not.toBeNull();
    expect(detail!.performanceProfile!.dataPoints.length).toBe(3);
  });

  it("loads certifications", () => {
    expect(detail!.certifications.length).toBeGreaterThanOrEqual(1);
    expect(detail!.certifications[0].coldClimate).toBe(true);
  });

  it("loads warranties", () => {
    expect(detail!.warranties.length).toBe(2);
    expect(detail!.warranties.some((w) => w.type === "compressor")).toBe(true);
    expect(detail!.warranties.some((w) => w.type === "parts")).toBe(true);
  });

  it("has no editorial content", () => {
    expect(detail!.editorial).toBeNull();
  });

  it("loads sources", () => {
    expect(detail!.sources.length).toBeGreaterThan(0);
  });

  it("has isColdClimate = true", () => {
    expect(detail!.isColdClimate).toBe(true);
  });

  it("has correct systemTypeLabel", () => {
    expect(detail!.systemTypeLabel).toBe("Murale simple zone");
  });

  it("finds series siblings", () => {
    // Aurora series has 9K, 12K, 15K, 18K, 24K — siblings of 18K are the other 4
    expect(detail!.seriesSiblings.length).toBe(4);
    expect(detail!.seriesSiblings.some((m) => m.slug === "daikin-aurora-9k")).toBe(true);
    expect(detail!.seriesSiblings.some((m) => m.slug === "daikin-aurora-12k")).toBe(true);
  });

  it("finds similar models", () => {
    // Same type (wall-single), different model
    expect(detail!.similarModels.length).toBeGreaterThan(0);
    for (const sim of detail!.similarModels) {
      expect(sim.model.systemType).toBe("wall-single");
      expect(sim.model.id).not.toBe("model-daikin-aurora-18k");
    }
  });
});

/* ------------------------------------------------------------------
   Published model — central ducted (Daikin FIT Aurora 36K)
   ------------------------------------------------------------------ */

describe("getProductDetail — central ducted model", () => {
  const detail = getProductDetail("daikin-fit-aurora-36k");

  it("returns non-null", () => {
    expect(detail).not.toBeNull();
  });

  it("has no editorial", () => {
    expect(detail!.editorial).toBeNull();
  });

  it("has empty prices", () => {
    expect(detail!.prices.length).toBe(0);
  });

  it("is a central ducted system", () => {
    expect(detail!.systemTypeLabel).toBe("Centrale gainable");
  });
});

/* ------------------------------------------------------------------
   Non-cold-climate model (Fujitsu RLS3 9K — standard, not cold-climate)
   ------------------------------------------------------------------ */

describe("getProductDetail — standard ENERGY STAR model", () => {
  const detail = getProductDetail("fujitsu-rls3-9k");

  it("returns non-null", () => {
    expect(detail).not.toBeNull();
  });

  it("isColdClimate is false", () => {
    expect(detail!.isColdClimate).toBe(false);
  });

  it("has no cold climate certification", () => {
    const ccCerts = detail!.certifications.filter((c) => c.coldClimate);
    expect(ccCerts.length).toBe(0);
  });
});

/* ------------------------------------------------------------------
   Unknown slug → null
   ------------------------------------------------------------------ */

describe("getProductDetail — unknown slug", () => {
  it("returns null for a non-existent slug", () => {
    expect(getProductDetail("does-not-exist")).toBeNull();
  });

  it("returns null for an empty slug", () => {
    expect(getProductDetail("")).toBeNull();
  });
});

/* ------------------------------------------------------------------
   Draft/non-published model → null
   ------------------------------------------------------------------ */

describe("getProductDetail — draft model", () => {
  it("would return null for a draft model if one existed", () => {
    const all = getProductDetail("daikin-aurora-18k");
    expect(all).not.toBeNull();
    expect(all!.model.status).toBe("published");
  });
});

/* ------------------------------------------------------------------
   Data integrity — no configuration mixing
   ------------------------------------------------------------------ */

describe("getProductDetail — no configuration mixing", () => {
  it("Aurora 18K config belongs to Aurora 18K model", () => {
    const detail = getProductDetail("daikin-aurora-18k");
    expect(detail!.configuration!.modelId).toBe(detail!.model.id);
  });

  it("Aurora 9K config does NOT leak into Aurora 18K", () => {
    const detail18 = getProductDetail("daikin-aurora-18k");
    const detail9 = getProductDetail("daikin-aurora-9k");

    expect(detail18!.configuration!.id).not.toBe(detail9!.configuration!.id);
    expect(detail18!.outdoorUnit!.id).not.toBe(detail9!.outdoorUnit!.id);
  });

  it("performance profile matches configuration", () => {
    const detail = getProductDetail("daikin-aurora-18k");
    expect(detail!.performanceProfile!.configurationId).toBe(
      detail!.configuration!.id,
    );
  });
});

/* ------------------------------------------------------------------
   Warranties are model-scoped, not leaked
   ------------------------------------------------------------------ */

describe("getProductDetail — warranty scoping", () => {
  it("Aurora 18K has warranties", () => {
    const detail = getProductDetail("daikin-aurora-18k");
    expect(detail!.warranties.length).toBe(2);
  });

  it("Aurora 9K does NOT inherit 18K warranties", () => {
    const detail = getProductDetail("daikin-aurora-9k");
    expect(detail!.warranties.length).toBe(0);
  });
});

/* ------------------------------------------------------------------
   Certifications are config-scoped, not leaked
   ------------------------------------------------------------------ */

describe("getProductDetail — certification scoping", () => {
  it("Aurora 18K has cold climate certification", () => {
    const detail = getProductDetail("daikin-aurora-18k");
    expect(detail!.certifications.length).toBeGreaterThanOrEqual(1);
  });

  it("Aurora 9K has its own certification", () => {
    const detail = getProductDetail("daikin-aurora-9k");
    // In our data, Aurora 9K also has a cold-climate cert
    expect(detail!.certifications.length).toBeGreaterThanOrEqual(1);
  });
});
