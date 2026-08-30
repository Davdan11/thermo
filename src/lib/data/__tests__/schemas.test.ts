/* ==================================================================
   Tests — Zod schema validation
   ================================================================== */

import { describe, it, expect } from "vitest";
import {
  brandSchema,
  productModelSchema,
  systemConfigurationSchema,
  performanceDataPointSchema,
  certificationSchema,
  priceObservationSchema,
  warrantySchema,
  brandDatasetSchema,
} from "../schemas";
import { daikinDataset as brandAlphaDataset } from "../fixtures/brands/daikin";
import { mitsubishiElectricDataset as brandBetaDataset } from "../fixtures/brands/mitsubishi-electric";
import { fujitsuDataset as brandGammaDataset } from "../fixtures/brands/fujitsu";

/* ------------------------------------------------------------------
   Brand schema
   ------------------------------------------------------------------ */

describe("brandSchema", () => {
  it("validates a correct brand", () => {
    const result = brandSchema.safeParse(brandAlphaDataset.brand);
    expect(result.success).toBe(true);
  });

  it("rejects an invalid slug", () => {
    const result = brandSchema.safeParse({
      ...brandAlphaDataset.brand,
      slug: "Invalid Slug!",
    });
    expect(result.success).toBe(false);
  });

  it("rejects a duplicate-style slug with uppercase", () => {
    const result = brandSchema.safeParse({
      ...brandAlphaDataset.brand,
      slug: "Alpha",
    });
    expect(result.success).toBe(false);
  });

  it("rejects empty name", () => {
    const result = brandSchema.safeParse({
      ...brandAlphaDataset.brand,
      name: "",
    });
    expect(result.success).toBe(false);
  });
});

/* ------------------------------------------------------------------
   Product Model schema
   ------------------------------------------------------------------ */

describe("productModelSchema", () => {
  const validModel = brandAlphaDataset.models[0];

  it("validates a correct published model", () => {
    const result = productModelSchema.safeParse(validModel);
    expect(result.success).toBe(true);
  });

  it("rejects a model with nominalCapacityBtu = 0", () => {
    const result = productModelSchema.safeParse({
      ...validModel,
      nominalCapacityBtu: 0,
    });
    expect(result.success).toBe(false);
  });

  it("allows nominalCapacityBtu = null (unknown)", () => {
    const result = productModelSchema.safeParse({
      ...validModel,
      nominalCapacityBtu: null,
    });
    expect(result.success).toBe(true);
  });

  it("rejects discontinuedYear before launchYear", () => {
    const result = productModelSchema.safeParse({
      ...validModel,
      launchYear: 2024,
      discontinuedYear: 2020,
    });
    expect(result.success).toBe(false);
  });
});

/* ------------------------------------------------------------------
   System Configuration schema
   ------------------------------------------------------------------ */

describe("systemConfigurationSchema", () => {
  const validConfig = brandAlphaDataset.configurations[0];

  it("validates a correct configuration", () => {
    const result = systemConfigurationSchema.safeParse(validConfig);
    expect(result.success).toBe(true);
  });

  it("rejects min > max for cooling capacity", () => {
    const result = systemConfigurationSchema.safeParse({
      ...validConfig,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 10000,
    });
    expect(result.success).toBe(false);
  });

  it("rejects min > max for heating capacity", () => {
    const result = systemConfigurationSchema.safeParse({
      ...validConfig,
      heatingCapacityMinBtu: 30000,
      heatingCapacityMaxBtu: 15000,
    });
    expect(result.success).toBe(false);
  });

  it("rejects min > max for indoor noise", () => {
    const result = systemConfigurationSchema.safeParse({
      ...validConfig,
      noiseIndoorMinDbA: 45,
      noiseIndoorMaxDbA: 20,
    });
    expect(result.success).toBe(false);
  });

  it("rejects min > max for estimated coverage", () => {
    const result = systemConfigurationSchema.safeParse({
      ...validConfig,
      estimatedCoverageSqFtMin: 2000,
      estimatedCoverageSqFtMax: 500,
    });
    expect(result.success).toBe(false);
  });
});

/* ------------------------------------------------------------------
   Performance Data Point
   ------------------------------------------------------------------ */

describe("performanceDataPointSchema", () => {
  it("validates a correct data point", () => {
    const result = performanceDataPointSchema.safeParse({
      outdoorTempC: -15,
      heatingCapacityBtu: 12000,
      cop: 2.5,
      confidence: "placeholder",
    });
    expect(result.success).toBe(true);
  });

  it("rejects negative heating capacity", () => {
    const result = performanceDataPointSchema.safeParse({
      outdoorTempC: -15,
      heatingCapacityBtu: -1000,
      confidence: "verified",
    });
    expect(result.success).toBe(false);
  });
});

/* ------------------------------------------------------------------
   Certification
   ------------------------------------------------------------------ */

describe("certificationSchema", () => {
  it("validates with a configurationId", () => {
    const result = certificationSchema.safeParse({
      id: "cert-1",
      type: "energy_star",
      configurationId: "config-alpha-glacier-18k",
      coldClimate: true,
      status: "active",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing configurationId", () => {
    const result = certificationSchema.safeParse({
      id: "cert-1",
      type: "energy_star",
      configurationId: "",
      coldClimate: true,
      status: "active",
    });
    expect(result.success).toBe(false);
  });
});

/* ------------------------------------------------------------------
   Price Observation
   ------------------------------------------------------------------ */

describe("priceObservationSchema", () => {
  it("validates a correct price", () => {
    const result = priceObservationSchema.safeParse({
      id: "price-1",
      modelId: "model-alpha-glacier-18k",
      type: "estimate",
      amountCents: 500000,
      currency: "CAD",
      taxesIncluded: false,
      confidence: "placeholder",
      observedAt: "2026-01-15",
    });
    expect(result.success).toBe(true);
  });

  it("rejects price of 0", () => {
    const result = priceObservationSchema.safeParse({
      id: "price-1",
      modelId: "model-1",
      type: "estimate",
      amountCents: 0,
      currency: "CAD",
      taxesIncluded: false,
      confidence: "placeholder",
      observedAt: "2026-01-15",
    });
    expect(result.success).toBe(false);
  });

  it("rejects negative price", () => {
    const result = priceObservationSchema.safeParse({
      id: "price-1",
      modelId: "model-1",
      type: "estimate",
      amountCents: -100,
      currency: "CAD",
      taxesIncluded: false,
      confidence: "placeholder",
      observedAt: "2026-01-15",
    });
    expect(result.success).toBe(false);
  });
});

/* ------------------------------------------------------------------
   Warranty
   ------------------------------------------------------------------ */

describe("warrantySchema", () => {
  it("validates a correct warranty", () => {
    const result = warrantySchema.safeParse({
      id: "w-1",
      modelId: "model-alpha-glacier-18k",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: true,
      provider: "manufacturer",
      confidence: "manufacturer_claim",
    });
    expect(result.success).toBe(true);
  });
});

/* ------------------------------------------------------------------
   Full Brand Dataset validation
   ------------------------------------------------------------------ */

describe("brandDatasetSchema", () => {
  it("validates the Alpha dev fixture", () => {
    const result = brandDatasetSchema.safeParse(brandAlphaDataset);
    expect(result.success).toBe(true);
  });

  it("validates the Beta dev fixture", () => {
    const result = brandDatasetSchema.safeParse(brandBetaDataset);
    expect(result.success).toBe(true);
  });

  it("validates the Gamma dev fixture", () => {
    const result = brandDatasetSchema.safeParse(brandGammaDataset);
    expect(result.success).toBe(true);
  });
});
