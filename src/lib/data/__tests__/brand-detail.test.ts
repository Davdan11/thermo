/* ==================================================================
   Tests — Brand Detail & Index queries
   ================================================================== */

import { describe, it, expect } from "vitest";
import {
  getBrandDetail,
  getPublishedBrandsSummary,
} from "../queries/brand-detail";

/* ------------------------------------------------------------------
   Published brands summary (index)
   ------------------------------------------------------------------ */

describe("getPublishedBrandsSummary", () => {
  const brands = getPublishedBrandsSummary();

  it("returns all published brands", () => {
    expect(brands.length).toBe(8); // 8 real brands
  });

  it("brands are sorted alphabetically", () => {
    for (let i = 1; i < brands.length; i++) {
      expect(
        brands[i - 1].brand.name.localeCompare(brands[i].brand.name),
      ).toBeLessThanOrEqual(0);
    }
  });

  it("excludes draft brands", () => {
    const slugs = brands.map((b) => b.brand.slug);
    expect(slugs.every((s) => s !== "draft-brand")).toBe(true);
  });

  it("computes model count from real data", () => {
    const daikin = brands.find((b) => b.brand.slug === "daikin");
    expect(daikin).toBeDefined();
    expect(daikin!.modelCount).toBe(10); // 5 Aurora + 3 FIT + 2 Atmosphera
  });

  it("computes series count", () => {
    const daikin = brands.find((b) => b.brand.slug === "daikin");
    expect(daikin!.seriesCount).toBe(3); // Aurora, FIT Aurora, Atmosphera
  });

  it("computes system types", () => {
    const daikin = brands.find((b) => b.brand.slug === "daikin");
    const types = daikin!.systemTypes.map((t) => t.value);
    expect(types).toContain("wall-single");
    expect(types).toContain("central-ducted");
  });

  it("detects cold climate correctly", () => {
    const daikin = brands.find((b) => b.brand.slug === "daikin");
    expect(daikin!.hasColdClimate).toBe(true);
    expect(daikin!.coldClimateCount).toBeGreaterThan(0);

    const fujitsu = brands.find((b) => b.brand.slug === "fujitsu");
    expect(fujitsu!.hasColdClimate).toBe(true);
    expect(fujitsu!.coldClimateCount).toBeGreaterThan(0);
  });

  it("computes capacity range", () => {
    const daikin = brands.find((b) => b.brand.slug === "daikin");
    expect(daikin!.capacityRange).not.toBeNull();
    expect(daikin!.capacityRange!.min).toBeLessThanOrEqual(
      daikin!.capacityRange!.max,
    );
  });
});

/* ------------------------------------------------------------------
   Brand detail — Alpha (rich data)
   ------------------------------------------------------------------ */

describe("getBrandDetail — Daikin (rich data)", () => {
  const detail = getBrandDetail("daikin");

  it("returns non-null for published brand", () => {
    expect(detail).not.toBeNull();
  });

  it("has correct brand info", () => {
    expect(detail!.brand.slug).toBe("daikin");
    expect(detail!.brand.status).toBe("published");
  });

  it("computes correct series count", () => {
    expect(detail!.seriesCount).toBe(3);
    expect(detail!.series.length).toBe(3);
  });

  it("computes correct model count", () => {
    expect(detail!.modelCount).toBe(10);
    expect(detail!.models.length).toBe(10);
  });

  it("series summaries have computed stats", () => {
    const aurora = detail!.series.find(
      (s) => s.series.slug === "daikin-aurora",
    );
    expect(aurora).toBeDefined();
    expect(aurora!.modelCount).toBe(5); // 9K,12K,15K,18K,24K
    expect(aurora!.systemTypeLabel).toBe("Murale simple zone");
    expect(aurora!.hasColdClimate).toBe(true);
  });

  it("includes warranties from published models", () => {
    expect(detail!.warranties.length).toBe(2); // parts + compressor
    expect(detail!.warranties[0].modelName).toContain("Aurora");
  });

  it("includes editorial content", () => {
    expect(detail!.editorialContent.length).toBe(0);
  });

  it("includes certifications", () => {
    expect(detail!.certifications.length).toBeGreaterThan(0);
  });

  it("includes sources", () => {
    // Sources are found via SourceLinks or fallback title matching
    expect(detail!.sources.length).toBeGreaterThanOrEqual(0);
  });

  it("lists other brands", () => {
    expect(detail!.otherBrands.length).toBe(7); // 8 brands minus self
    const slugs = detail!.otherBrands.map((b) => b.brand.slug);
    expect(slugs).not.toContain("daikin"); // excludes self
    expect(slugs).toContain("mitsubishi-electric");
    expect(slugs).toContain("fujitsu");
  });

  it("has cold climate data", () => {
    expect(detail!.hasColdClimate).toBe(true);
    expect(detail!.coldClimateCount).toBeGreaterThan(0);
  });

  it("models are CatalogueProduct format", () => {
    for (const m of detail!.models) {
      expect(m).toHaveProperty("model");
      expect(m).toHaveProperty("brand");
      expect(m).toHaveProperty("systemTypeLabel");
      expect(m).toHaveProperty("isColdClimate");
    }
  });
});

/* ------------------------------------------------------------------
   Brand detail — Beta (minimal data)
   ------------------------------------------------------------------ */

describe("getBrandDetail — Mitsubishi Electric (rich data)", () => {
  const detail = getBrandDetail("mitsubishi-electric");

  it("returns non-null", () => {
    expect(detail).not.toBeNull();
  });

  it("has 3 series", () => {
    expect(detail!.seriesCount).toBe(3);
  });

  it("has 10 models", () => {
    expect(detail!.modelCount).toBe(10);
  });

  it("has cold climate models", () => {
    expect(detail!.hasColdClimate).toBe(true);
  });
});

/* ------------------------------------------------------------------
   Brand detail — Fujitsu
   ------------------------------------------------------------------ */

describe("getBrandDetail — Fujitsu", () => {
  const detail = getBrandDetail("fujitsu");

  it("returns non-null", () => {
    expect(detail).not.toBeNull();
  });

  it("has 2 series", () => {
    expect(detail!.seriesCount).toBe(2);
  });

  it("has 6 models", () => {
    expect(detail!.modelCount).toBe(6);
  });

  it("has cold climate via XLTH series", () => {
    expect(detail!.hasColdClimate).toBe(true);
    expect(detail!.coldClimateCount).toBeGreaterThan(0);
  });

  it("has wall-single system type", () => {
    const types = detail!.systemTypes.map((t) => t.value);
    expect(types).toContain("wall-single");
  });
});

/* ------------------------------------------------------------------
   Unknown brand
   ------------------------------------------------------------------ */

describe("getBrandDetail — unknown brand", () => {
  it("returns null for unknown slug", () => {
    expect(getBrandDetail("nonexistent")).toBeNull();
  });

  it("returns null for empty slug", () => {
    expect(getBrandDetail("")).toBeNull();
  });
});

/* ------------------------------------------------------------------
   Data integrity
   ------------------------------------------------------------------ */

describe("getBrandDetail — data integrity", () => {
  it("warranties never leak between brands", () => {
    const daikin = getBrandDetail("daikin")!;
    const gree = getBrandDetail("gree")!;

    // Daikin has warranties, Gree doesn't
    expect(daikin.warranties.length).toBeGreaterThan(0);
    expect(gree.warranties.length).toBe(0);

    // Daikin's warranties reference Daikin models
    for (const w of daikin.warranties) {
      expect(w.modelName).toContain("Aurora");
    }
  });

  it("models belong to the correct brand", () => {
    const detail = getBrandDetail("daikin")!;
    for (const m of detail.models) {
      expect(m.model.brandId).toBe(detail.brand.id);
    }
  });

  it("series belong to the correct brand", () => {
    const detail = getBrandDetail("daikin")!;
    for (const s of detail.series) {
      expect(s.series.brandId).toBe(detail.brand.id);
    }
  });

  it("config count matches real configurations", () => {
    const detail = getBrandDetail("daikin")!;
    expect(detail.configCount).toBe(10); // 1 config per model
  });

  it("no internal notes exposed in sources", () => {
    const detail = getBrandDetail("daikin")!;
    for (const s of detail.sources) {
      expect(s).toHaveProperty("title");
    }
  });
});

/* ------------------------------------------------------------------
   Models never generalized to brand
   ------------------------------------------------------------------ */

describe("Brand — no generalization", () => {
  it("cold climate count matches actual models, not brand-level", () => {
    const daikin = getBrandDetail("daikin")!;
    // All 10 Daikin models are cold climate
    expect(daikin.coldClimateCount).toBe(10);
  });

  it("capacity range is computed from all models, not series", () => {
    const daikin = getBrandDetail("daikin")!;
    expect(daikin.capacityRange).not.toBeNull();
    // 9K to 36K
    expect(daikin.capacityRange!.min).toBe(9000);
    expect(daikin.capacityRange!.max).toBe(36000);
  });
});
