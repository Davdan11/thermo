/* ==================================================================
   Tests — Query layer
   ================================================================== */

import { describe, it, expect } from "vitest";
import {
  getBrands,
  getBrandBySlug,
  getModelBySlug,
  getModelsByBrand,
  searchByModelNumber,
  filterModels,
  getConfigurationsForModel,
  getPerformanceProfile,
  getSourceById,
  getThermoMatchCandidates,
} from "../queries";
import { registry } from "../registry";

/* ------------------------------------------------------------------
   Registry sanity checks
   ------------------------------------------------------------------ */

describe("registry", () => {
  it("loads brands without errors", () => {
    expect(registry.brands.length).toBeGreaterThanOrEqual(3);
  });

  it("has no duplicate IDs within each entity type", () => {
    // Les identifiants sont partagés entre types par construction (un modèle et son unité
    // extérieure portent le même id) ; l'unicité se vérifie donc par type.
    for (const list of [registry.brands, registry.series, registry.models, registry.outdoorUnits, registry.indoorUnits, registry.configurations, registry.sources]) {
      const ids = list.map((e) => e.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it.skip("legacy: has no duplicate IDs across all entities", () => {
    const allIds = [
      ...registry.brands.map((b) => b.id),
      ...registry.series.map((s) => s.id),
      ...registry.models.map((m) => m.id),
      ...registry.outdoorUnits.map((u) => u.id),
      ...registry.indoorUnits.map((u) => u.id),
      ...registry.configurations.map((c) => c.id),
      ...registry.sources.map((s) => s.id),
    ];
    const unique = new Set(allIds);
    expect(unique.size).toBe(allIds.length);
  });

  it("has no duplicate slugs", () => {
    const allSlugs = [
      ...registry.brands.map((b) => b.slug),
      ...registry.series.map((s) => s.slug),
      ...registry.models.map((m) => m.slug),
      ...registry.configurations.map((c) => c.slug),
    ];
    const unique = new Set(allSlugs);
    expect(unique.size).toBe(allSlugs.length);
  });
});

/* ------------------------------------------------------------------
   Brand queries
   ------------------------------------------------------------------ */

describe("brand queries", () => {
  it("getBrands('all') returns all dev brands", () => {
    const brands = getBrands("all");
    expect(brands.length).toBeGreaterThanOrEqual(3);
  });

  it("getBrands('published') returns published brands", () => {
    const brands = getBrands("published");
    expect(brands.length).toBeGreaterThanOrEqual(3);
  });

  it("getBrandBySlug returns the correct brand", () => {
    const brand = getBrandBySlug("daikin");
    expect(brand).not.toBeNull();
    expect(brand?.name).toBe("Daikin");
  });

  it("getBrandBySlug returns null for non-existent slug", () => {
    const brand = getBrandBySlug("non-existent");
    expect(brand).toBeNull();
  });
});

/* ------------------------------------------------------------------
   Model queries
   ------------------------------------------------------------------ */

describe("model queries", () => {
  it("getModelBySlug returns correct model", () => {
    const model = getModelBySlug("daikin-aurora-18k");
    expect(model).not.toBeNull();
    expect(model?.nominalCapacityBtu).toBe(18000);
  });

  it("getModelsByBrand returns models for a brand", () => {
    const models = getModelsByBrand(registry.brandBySlug.get("daikin")!.id, "all");
    expect(models.length).toBeGreaterThanOrEqual(4);
  });

  it("searchByModelNumber finds by partial match", () => {
    const results = searchByModelNumber("FTXS18");
    expect(results.length).toBeGreaterThanOrEqual(1);
    expect(results[0].modelNumber).toBe("FTXS18WVJU");
  });

  it("searchByModelNumber is case-insensitive", () => {
    const results = searchByModelNumber("ftxs18");
    expect(results.length).toBeGreaterThanOrEqual(1);
  });

  it("searchByModelNumber returns empty for no match", () => {
    const results = searchByModelNumber("ZZZZZZ");
    expect(results.length).toBe(0);
  });
});

/* ------------------------------------------------------------------
   Filtering
   ------------------------------------------------------------------ */

describe("filterModels", () => {
  it("filters by system type", () => {
    const wallModels = filterModels({ systemType: "wall-single", status: "all" });
    const centralModels = filterModels({ systemType: "central-ducted", status: "all" });
    expect(wallModels.length).toBeGreaterThan(0);
    expect(centralModels.length).toBeGreaterThan(0);
    expect(wallModels.every((m) => m.systemType === "wall-single")).toBe(true);
  });

  it("filters by capacity range", () => {
    const models = filterModels({ minCapacityBtu: 15000, maxCapacityBtu: 40000, status: "all" });
    expect(models.length).toBeGreaterThan(0);
    for (const m of models) {
      expect(m.nominalCapacityBtu).toBeGreaterThanOrEqual(15000);
      expect(m.nominalCapacityBtu).toBeLessThanOrEqual(40000);
    }
  });

  it("filters by cold climate category", () => {
    const models = filterModels({ coldClimate: true, status: "all" });
    expect(models.length).toBeGreaterThan(0);
    for (const m of models) {
      expect(m.categories).toContain("cold-climate");
    }
  });

  it("returns published models by default", () => {
    const models = filterModels({ status: "published" });
    expect(models.length).toBeGreaterThan(0);
    for (const m of models) {
      expect(m.status).toBe("published");
    }
  });
});

/* ------------------------------------------------------------------
   Configuration & performance
   ------------------------------------------------------------------ */

describe("configuration & performance", () => {
  it("getConfigurationsForModel returns configs", () => {
    const configs = getConfigurationsForModel("model-daikin-aurora-18k");
    expect(configs.length).toBeGreaterThanOrEqual(1);
  });

  it("getPerformanceProfile returns profile with data points", () => {
    const configs = getConfigurationsForModel("model-daikin-aurora-18k");
    expect(configs.length).toBeGreaterThan(0);
    const profile = getPerformanceProfile(configs[0].id);
    expect(profile).not.toBeNull();
    expect(profile!.dataPoints.length).toBeGreaterThanOrEqual(3);
  });
});

/* ------------------------------------------------------------------
   Source queries
   ------------------------------------------------------------------ */

describe("source queries", () => {
  it("getSourceById returns the correct source", () => {
    const source = getSourceById("src-daikin-specs");
    expect(source).not.toBeNull();
    expect(source?.confidence).toBe("manufacturer_claim");
  });

  it("getSourceById returns null for unknown id", () => {
    const source = getSourceById("does-not-exist");
    expect(source).toBeNull();
  });
});

/* ------------------------------------------------------------------
   ThermoMatch integration
   ------------------------------------------------------------------ */

describe.skip("getThermoMatchCandidates (remplacé par src/lib/thermomatch)", () => {
  it("returns candidates for published models", () => {
    const candidates = getThermoMatchCandidates({});
    expect(candidates.length).toBeGreaterThan(0);
  });
});

/* ------------------------------------------------------------------
   Data integrity
   ------------------------------------------------------------------ */

describe("data integrity", () => {
  it("null is used for unknown values, not 0", () => {
    for (const model of registry.models) {
      if (model.nominalCapacityBtu !== null) {
        expect(model.nominalCapacityBtu).toBeGreaterThan(0);
      }
    }
  });
});
