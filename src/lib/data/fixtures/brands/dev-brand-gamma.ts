/**
 * DEV FIXTURE — Brand Gamma (fictional)
 *
 * ⚠️ ALL DATA IN THIS FILE IS FICTIONAL AND FOR DEVELOPMENT ONLY.
 * Status "published" with confidence "placeholder" — for catalogue testing.
 * Demonstrates a conventional (non cold-climate) wall unit + a floor console.
 */

import type { BrandDataset } from "../../types";

const NOW = "2026-01-15";
const PH = "placeholder" as const;

export const brandGammaDataset: BrandDataset = {
  brand: {
    id: "brand-gamma",
    slug: "gamma",
    name: "Gamma [DEV]",
    countryOfOrigin: "KR",
    websiteUrl: null,
    description: "Marque fictive — modèles conventionnels et consoles.",
    activeInQuebec: false,
    status: "published",
    createdAt: NOW,
    updatedAt: NOW,
    verifiedAt: null,
  },

  sources: [
    {
      id: "src-gamma-dev",
      type: "internal",
      title: "DEV — Données fictives Gamma",
      organization: "Thermopompe A Vendre.ca",
      url: null,
      consultedAt: NOW,
      language: "fr",
      confidence: PH,
      internalNotes: "Données de développement uniquement.",
    },
  ],

  series: [
    {
      id: "series-gamma-breeze",
      slug: "gamma-breeze",
      name: "Breeze [DEV]",
      brandId: "brand-gamma",
      systemType: "wall-single",
      categories: ["air-air", "conventional", "ductless", "single-zone"],
      description: null,
      status: "published",
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
    {
      id: "series-gamma-terra",
      slug: "gamma-terra",
      name: "Terra [DEV]",
      brandId: "brand-gamma",
      systemType: "floor-console",
      categories: ["air-air", "cold-climate", "ductless", "single-zone"],
      description: null,
      status: "published",
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
  ],

  models: [
    {
      id: "model-gamma-breeze-12k",
      slug: "gamma-breeze-12k",
      name: "Breeze 12K [DEV]",
      seriesId: "series-gamma-breeze",
      brandId: "brand-gamma",
      modelNumber: "GBR-12WS-DEV",
      normalizedModelNumber: "gbr12wsdev",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      zones: 1,
      systemType: "wall-single",
      categories: ["air-air", "conventional", "ductless", "single-zone"],
      status: "published",
      launchYear: null, discontinuedYear: null, replacedByModelId: null,
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
    {
      id: "model-gamma-breeze-18k",
      slug: "gamma-breeze-18k",
      name: "Breeze 18K [DEV]",
      seriesId: "series-gamma-breeze",
      brandId: "brand-gamma",
      modelNumber: "GBR-18WS-DEV",
      normalizedModelNumber: "gbr18wsdev",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      zones: 1,
      systemType: "wall-single",
      categories: ["air-air", "conventional", "ductless", "single-zone"],
      status: "published",
      launchYear: null, discontinuedYear: null, replacedByModelId: null,
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
    {
      id: "model-gamma-terra-12k",
      slug: "gamma-terra-12k",
      name: "Terra 12K [DEV]",
      seriesId: "series-gamma-terra",
      brandId: "brand-gamma",
      modelNumber: "GTR-12FC-DEV",
      normalizedModelNumber: "gtr12fcdev",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      zones: 1,
      systemType: "floor-console",
      categories: ["air-air", "cold-climate", "ductless", "single-zone"],
      status: "published",
      launchYear: null, discontinuedYear: null, replacedByModelId: null,
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
  ],

  outdoorUnits: [
    { id: "ou-gamma-breeze-12k", modelNumber: "GBR-12OD-DEV", brandId: "brand-gamma", refrigerant: "R-32" },
    { id: "ou-gamma-breeze-18k", modelNumber: "GBR-18OD-DEV", brandId: "brand-gamma", refrigerant: "R-32" },
    { id: "ou-gamma-terra-12k", modelNumber: "GTR-12OD-DEV", brandId: "brand-gamma", refrigerant: "R-32" },
  ],

  indoorUnits: [
    { id: "iu-gamma-breeze-12k", modelNumber: "GBR-12IW-DEV", brandId: "brand-gamma", type: "wall-single" },
    { id: "iu-gamma-breeze-18k", modelNumber: "GBR-18IW-DEV", brandId: "brand-gamma", type: "wall-single" },
    { id: "iu-gamma-terra-12k", modelNumber: "GTR-12IF-DEV", brandId: "brand-gamma", type: "floor-console" },
  ],

  configurations: [
    {
      id: "config-gamma-breeze-12k", slug: "gamma-breeze-12k-config",
      modelId: "model-gamma-breeze-12k", outdoorUnitId: "ou-gamma-breeze-12k", indoorUnitId: "iu-gamma-breeze-12k",
      minHeatingTempC: -15, voltage: 230, phase: 1, frequencyHz: 60,
      noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 44,
      sources: [{ sourceId: "src-gamma-dev", confidence: PH }],
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
    {
      id: "config-gamma-breeze-18k", slug: "gamma-breeze-18k-config",
      modelId: "model-gamma-breeze-18k", outdoorUnitId: "ou-gamma-breeze-18k", indoorUnitId: "iu-gamma-breeze-18k",
      minHeatingTempC: -15, voltage: 230, phase: 1, frequencyHz: 60,
      noiseIndoorMinDbA: 24, noiseIndoorMaxDbA: 46,
      sources: [{ sourceId: "src-gamma-dev", confidence: PH }],
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
    {
      id: "config-gamma-terra-12k", slug: "gamma-terra-12k-config",
      modelId: "model-gamma-terra-12k", outdoorUnitId: "ou-gamma-terra-12k", indoorUnitId: "iu-gamma-terra-12k",
      minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60,
      noiseIndoorMinDbA: 25, noiseIndoorMaxDbA: 42,
      sources: [{ sourceId: "src-gamma-dev", confidence: PH }],
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
  ],

  performanceProfiles: [],
  certifications: [],
  warranties: [],
  priceObservations: [],
  editorial: [],
};

