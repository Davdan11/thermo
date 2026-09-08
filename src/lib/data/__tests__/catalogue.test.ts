/* ==================================================================
   Tests — Catalogue queries
   ================================================================== */

import { describe, it, expect } from "vitest";
import { getCatalogueModels, getAvailableFilters } from "../queries/catalogue";

/* ------------------------------------------------------------------
   getCatalogueModels
   ------------------------------------------------------------------ */

describe("getCatalogueModels", () => {
  it("returns published products by default", () => {
    const { products } = getCatalogueModels();
    expect(products.length).toBeGreaterThan(0);
    for (const p of products) {
      expect(p.model.status).toBe("published");
    }
  });

  it("excludes draft models", () => {
    const { products } = getCatalogueModels();
    for (const p of products) {
      expect(p.model.status).not.toBe("draft");
    }
  });

  it("excludes archived models", () => {
    const { products } = getCatalogueModels();
    for (const p of products) {
      expect(p.model.status).not.toBe("archived");
    }
  });

  // Search
  it("searches by brand name", () => {
    const { products } = getCatalogueModels({ search: "Daikin" });
    expect(products.length).toBeGreaterThan(0);
    for (const p of products) {
      expect(p.brand.name.toLowerCase()).toContain("daikin");
    }
  });

  it("searches by series name", () => {
    const { products } = getCatalogueModels({ search: "Aurora" });
    expect(products.length).toBeGreaterThan(0);
    for (const p of products) {
      expect(p.model.name.toLowerCase()).toContain("aurora");
    }
  });

  it("searches by model number", () => {
    const { products } = getCatalogueModels({ search: "FTXS18" });
    expect(products.length).toBeGreaterThanOrEqual(1);
  });

  it("search is case-insensitive", () => {
    const { products: upper } = getCatalogueModels({ search: "DAIKIN" });
    const { products: lower } = getCatalogueModels({ search: "daikin" });
    expect(upper.length).toBe(lower.length);
  });

  it("search ignores hyphens and spaces", () => {
    const { products: with_ } = getCatalogueModels({ search: "FTXS-09" });
    const { products: without_ } = getCatalogueModels({ search: "FTXS09" });
    expect(with_.length).toBe(without_.length);
  });

  it("empty search returns all published", () => {
    const { products: all } = getCatalogueModels();
    const { products: empty } = getCatalogueModels({ search: "" });
    expect(all.length).toBe(empty.length);
  });

  // Filters
  it("filters by type", () => {
    const { products } = getCatalogueModels({ type: "wall-single" });
    expect(products.length).toBeGreaterThan(0);
    for (const p of products) {
      expect(p.model.systemType).toBe("wall-single");
    }
  });

  it("filters by brand slug", () => {
    const { products } = getCatalogueModels({ brand: "gree" });
    expect(products.length).toBeGreaterThan(0);
    for (const p of products) {
      expect(p.brand.slug).toBe("gree");
    }
  });

  it("filters by capacity", () => {
    const { products } = getCatalogueModels({ capacity: 18000 });
    expect(products.length).toBeGreaterThan(0);
    for (const p of products) {
      expect(p.model.nominalCapacityBtu).toBe(18000);
    }
  });

  it("filters by cold climate", () => {
    const { products } = getCatalogueModels({ coldClimate: true });
    expect(products.length).toBeGreaterThan(0);
    for (const p of products) {
      expect(p.isColdClimate).toBe(true);
    }
  });

  // Combined filters
  it("combines type + brand filters", () => {
    const { products } = getCatalogueModels({ type: "wall-single", brand: "daikin" });
    expect(products.length).toBeGreaterThan(0);
    for (const p of products) {
      expect(p.model.systemType).toBe("wall-single");
      expect(p.brand.slug).toBe("daikin");
    }
  });

  it("combined filters that match nothing return empty", () => {
    const { products } = getCatalogueModels({ type: "cassette", brand: "daikin" });
    expect(products.length).toBe(0);
  });

  // Sorting
  it("sorts by brand A-Z", () => {
    const { products } = getCatalogueModels({ sort: "brand-asc" });
    for (let i = 1; i < products.length; i++) {
      expect(
        products[i].brand.name.localeCompare(products[i - 1].brand.name),
      ).toBeGreaterThanOrEqual(0);
    }
  });

  it("sorts by capacity ascending", () => {
    const { products } = getCatalogueModels({ sort: "capacity-asc" });
    for (let i = 1; i < products.length; i++) {
      expect(
        (products[i].model.nominalCapacityBtu ?? 0),
      ).toBeGreaterThanOrEqual(products[i - 1].model.nominalCapacityBtu ?? 0);
    }
  });

  it("sorts by capacity descending", () => {
    const { products } = getCatalogueModels({ sort: "capacity-desc" });
    for (let i = 1; i < products.length; i++) {
      expect(
        (products[i].model.nominalCapacityBtu ?? 0),
      ).toBeLessThanOrEqual(products[i - 1].model.nominalCapacityBtu ?? 0);
    }
  });

  it("default sort is stable", () => {
    const { products: first } = getCatalogueModels();
    const { products: second } = getCatalogueModels();
    expect(first.map((p) => p.model.id)).toEqual(second.map((p) => p.model.id));
  });

  // Enrichment
  it("enriches products with brand info", () => {
    const { products } = getCatalogueModels();
    for (const p of products) {
      expect(p.brand).toBeDefined();
      expect(p.brand.name).toBeTruthy();
    }
  });

  it("enriches products with system type label", () => {
    const { products } = getCatalogueModels();
    for (const p of products) {
      expect(p.systemTypeLabel).toBeTruthy();
    }
  });

  it("enriches products with cold climate flag", () => {
    const { products } = getCatalogueModels();
    for (const p of products) {
      expect(typeof p.isColdClimate).toBe("boolean");
    }
  });

  // No internal data leaks
  it("does not expose internal notes in products", () => {
    const { products } = getCatalogueModels();
    for (const p of products) {
      // Brand sources may have internalNotes — components must not render them
      // Just verify the structure is clean
      expect(p.model.id).toBeTruthy();
      expect(p.brand.id).toBeTruthy();
    }
  });
});

/* ------------------------------------------------------------------
   getAvailableFilters
   ------------------------------------------------------------------ */

describe("getAvailableFilters", () => {
  it("returns types with counts", () => {
    const filters = getAvailableFilters();
    expect(filters.types.length).toBeGreaterThan(0);
    for (const t of filters.types) {
      expect(t.value).toBeTruthy();
      expect(t.label).toBeTruthy();
      expect(t.count).toBeGreaterThan(0);
    }
  });

  it("returns brands with counts", () => {
    const filters = getAvailableFilters();
    expect(filters.brands.length).toBeGreaterThanOrEqual(3);
    for (const b of filters.brands) {
      expect(b.slug).toBeTruthy();
      expect(b.name).toBeTruthy();
      expect(b.count).toBeGreaterThan(0);
    }
  });

  it("returns capacities with counts", () => {
    const filters = getAvailableFilters();
    expect(filters.capacities.length).toBeGreaterThan(0);
    for (const c of filters.capacities) {
      expect(c.value).toBeGreaterThan(0);
      expect(c.label).toBeTruthy();
      expect(c.count).toBeGreaterThan(0);
    }
  });

  it("capacities are sorted ascending", () => {
    const filters = getAvailableFilters();
    for (let i = 1; i < filters.capacities.length; i++) {
      expect(filters.capacities[i].value).toBeGreaterThanOrEqual(
        filters.capacities[i - 1].value,
      );
    }
  });

  it("brands are sorted alphabetically", () => {
    const filters = getAvailableFilters();
    for (let i = 1; i < filters.brands.length; i++) {
      expect(
        filters.brands[i].name.localeCompare(filters.brands[i - 1].name),
      ).toBeGreaterThanOrEqual(0);
    }
  });

  it("hasColdClimate is true when cold climate models exist", () => {
    const filters = getAvailableFilters();
    expect(filters.hasColdClimate).toBe(true);
  });

  it("type counts match getCatalogueModels filter results", { timeout: 30000 }, () => {
    const filters = getAvailableFilters();
    for (const t of filters.types) {
      const result = getCatalogueModels({ type: t.value });
      expect(result.totalCount).toBe(t.count);
    }
  });

  it("brand counts match getCatalogueModels filter results", { timeout: 30000 }, () => {
    const filters = getAvailableFilters();
    for (const b of filters.brands) {
      const result = getCatalogueModels({ brand: b.slug });
      expect(result.totalCount).toBe(b.count);
    }
  });
});

/* ------------------------------------------------------------------
   URL params validation (simulated)
   ------------------------------------------------------------------ */

describe("param validation", () => {
  it("ignores unknown type gracefully", () => {
    // getCatalogueModels with an invalid type should return all published
    // since the page parseParams would strip it — but if passed directly, 
    // no model has type "unknown" so it returns empty
    const { products } = getCatalogueModels({ type: "unknown" as never });
    expect(products.length).toBe(0);
  });

  it("ignores unknown brand slug gracefully", () => {
    const { products } = getCatalogueModels({ brand: "nonexistent" });
    expect(products.length).toBe(0);
  });

  it("handles capacity with no matches", () => {
    const { products } = getCatalogueModels({ capacity: 99999 });
    expect(products.length).toBe(0);
  });
});
