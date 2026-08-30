/* ==================================================================
   Tests — Highlight Rules
   ================================================================== */

import { describe, it, expect } from "vitest";
import {
  highestSeer2,
  lowestIndoorNoise,
  lowestMinTemp,
  highestCapacityAtTemp,
  longestWarranty,
  computeHighlights,
} from "../highlights";
import { getProductDetail } from "@/lib/data/queries/product-detail";
import type { ProductDetail } from "@/lib/data/queries/product-detail";

/* ---- Test data ---- */

function loadDetail(slug: string): ProductDetail {
  const d = getProductDetail(slug);
  if (!d) throw new Error(`Fixture not found: ${slug}`);
  return d;
}

const aurora18k = loadDetail("daikin-aurora-18k");
const aurora9k = loadDetail("daikin-aurora-9k");
const flexx36k = loadDetail("gree-flexx-36k");
const mitsFs12k = loadDetail("mitsubishi-fs-12k");

/* ------------------------------------------------------------------
   SEER2
   ------------------------------------------------------------------ */

describe("highestSeer2", () => {
  it("returns null when fewer than 2 have data", () => {
    const result = highestSeer2([aurora18k, aurora9k]);
    // Only aurora18k has SEER2
    expect(result.bestIndex).toBeNull();
    expect(result.dataCount).toBe(1);
  });

  it("returns null when no products have data", () => {
    const result = highestSeer2([aurora9k, flexx36k]);
    expect(result.bestIndex).toBeNull();
    expect(result.dataCount).toBe(0);
  });
});

/* ------------------------------------------------------------------
   Indoor noise
   ------------------------------------------------------------------ */

describe("lowestIndoorNoise", () => {
  it("identifies lowest noise when 2+ have data", () => {
    // aurora18k min=21, aurora9k min=19, mitsFs12k min=20
    const result = lowestIndoorNoise([aurora18k, aurora9k, mitsFs12k]);
    expect(result.bestIndex).toBe(1); // aurora9k at index 1 (19 dB)
    expect(result.dataCount).toBe(3);
  });

  it("returns null when only 1 has data", () => {
    const result = lowestIndoorNoise([aurora18k, flexx36k]);
    // Only aurora18k has noise data
    expect(result.bestIndex).toBeNull();
    expect(result.dataCount).toBe(1);
  });
});

/* ------------------------------------------------------------------
   Min temperature
   ------------------------------------------------------------------ */

describe("lowestMinTemp", () => {
  it("identifies lowest temp", () => {
    // aurora18k = -25, mitsFs12k = -25, flexx36k = -30
    const result = lowestMinTemp([aurora18k, flexx36k]);
    expect(result.bestIndex).toBe(1); // flexx36k = -30
  });

  it("handles tie", () => {
    // Both aurora18k and aurora9k = -25
    const result = lowestMinTemp([aurora18k, aurora9k]);
    expect(result.bestIndex).toBeNull();
  });
});

/* ------------------------------------------------------------------
   Capacity at temp
   ------------------------------------------------------------------ */

describe("highestCapacityAtTemp", () => {
  it("returns null when only 1 product has data at that temp", () => {
    const result = highestCapacityAtTemp([aurora18k, aurora9k], -15);
    // Only aurora18k has data at -15°C
    expect(result.bestIndex).toBeNull();
    expect(result.dataCount).toBe(1);
  });

  it("returns null for unknown temperature", () => {
    const result = highestCapacityAtTemp([aurora18k, aurora9k], -40);
    expect(result.bestIndex).toBeNull();
    expect(result.dataCount).toBe(0);
  });
});

/* ------------------------------------------------------------------
   Warranty
   ------------------------------------------------------------------ */

describe("longestWarranty", () => {
  it("returns null when only 1 product has warranty data", () => {
    const result = longestWarranty([aurora18k, aurora9k], "compressor");
    // Only aurora18k has warranty data
    expect(result.bestIndex).toBeNull();
    expect(result.dataCount).toBe(1);
  });

  it("returns null when no products have warranty data", () => {
    const result = longestWarranty([aurora9k, flexx36k], "compressor");
    expect(result.bestIndex).toBeNull();
    expect(result.dataCount).toBe(0);
  });
});

/* ------------------------------------------------------------------
   computeHighlights — integration
   ------------------------------------------------------------------ */

describe("computeHighlights", () => {
  it("computes all highlight fields", () => {
    const h = computeHighlights([aurora18k, aurora9k, mitsFs12k]);
    expect(h).toHaveProperty("seer2");
    expect(h).toHaveProperty("hspf2");
    expect(h).toHaveProperty("noiseIndoor");
    expect(h).toHaveProperty("noiseOutdoor");
    expect(h).toHaveProperty("minTemp");
    expect(h).toHaveProperty("capacityMinus8");
    expect(h).toHaveProperty("capacityMinus15");
    expect(h).toHaveProperty("capacityMinus25");
    expect(h).toHaveProperty("warrantyParts");
    expect(h).toHaveProperty("warrantyCompressor");
  });

  it("does not produce false winners with partial data", () => {
    const h = computeHighlights([aurora18k, flexx36k]);
    // SEER2: only aurora18k has it → null
    expect(h.seer2.bestIndex).toBeNull();
    // Noise: only aurora18k → null
    expect(h.noiseIndoor.bestIndex).toBeNull();
  });

  it("noise: aurora9k wins with 3 products", () => {
    const h = computeHighlights([aurora18k, aurora9k, mitsFs12k]);
    expect(h.noiseIndoor.bestIndex).toBe(1); // 19 dB(A)
  });
});
