/**
 * DEV FIXTURE — Brand Beta (fictional)
 *
 * ⚠️ ALL DATA IN THIS FILE IS FICTIONAL AND FOR DEVELOPMENT ONLY.
 * Status "published" with confidence "placeholder" — for catalogue testing.
 */

import type { BrandDataset } from "../../types";

const NOW = "2026-01-15";
const PH = "placeholder" as const;

export const brandBetaDataset: BrandDataset = {
  brand: {
    id: "brand-beta",
    slug: "beta",
    name: "Beta [DEV]",
    countryOfOrigin: "JP",
    websiteUrl: null,
    description: "Marque fictive de développement — centrales.",
    activeInQuebec: false,
    status: "published",
    createdAt: NOW,
    updatedAt: NOW,
    verifiedAt: null,
  },

  sources: [
    {
      id: "src-beta-dev",
      type: "internal",
      title: "DEV — Données fictives Beta",
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
      id: "series-beta-boreal",
      slug: "beta-boreal",
      name: "Boréal [DEV]",
      brandId: "brand-beta",
      systemType: "central-ducted",
      categories: ["air-air", "cold-climate", "ducted", "single-zone"],
      description: null,
      status: "published",
      createdAt: NOW,
      updatedAt: NOW,
      verifiedAt: null,
    },
  ],

  models: [
    {
      id: "model-beta-boreal-24k",
      slug: "beta-boreal-24k",
      name: "Boréal 24K [DEV]",
      seriesId: "series-beta-boreal",
      brandId: "brand-beta",
      modelNumber: "BBR-24CD-DEV",
      normalizedModelNumber: "bbr24cddev",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      zones: 1,
      systemType: "central-ducted",
      categories: ["air-air", "cold-climate", "ducted", "single-zone"],
      status: "published",
      launchYear: null, discontinuedYear: null, replacedByModelId: null,
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
    {
      id: "model-beta-boreal-36k",
      slug: "beta-boreal-36k",
      name: "Boréal 36K [DEV]",
      seriesId: "series-beta-boreal",
      brandId: "brand-beta",
      modelNumber: "BBR-36CD-DEV",
      normalizedModelNumber: "bbr36cddev",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      zones: 1,
      systemType: "central-ducted",
      categories: ["air-air", "cold-climate", "ducted", "single-zone"],
      status: "published",
      launchYear: null, discontinuedYear: null, replacedByModelId: null,
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
  ],

  outdoorUnits: [
    { id: "ou-beta-boreal-24k", modelNumber: "BBR-24OD-DEV", brandId: "brand-beta", refrigerant: "R-410A" },
    { id: "ou-beta-boreal-36k", modelNumber: "BBR-36OD-DEV", brandId: "brand-beta", refrigerant: "R-410A" },
  ],

  indoorUnits: [
    { id: "iu-beta-boreal-24k", modelNumber: "BBR-24AH-DEV", brandId: "brand-beta", type: "central-ducted" },
    { id: "iu-beta-boreal-36k", modelNumber: "BBR-36AH-DEV", brandId: "brand-beta", type: "central-ducted" },
  ],

  configurations: [
    {
      id: "config-beta-boreal-24k", slug: "beta-boreal-24k-config",
      modelId: "model-beta-boreal-24k", outdoorUnitId: "ou-beta-boreal-24k", indoorUnitId: "iu-beta-boreal-24k",
      minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60,
      sources: [{ sourceId: "src-beta-dev", confidence: PH }],
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
    {
      id: "config-beta-boreal-36k", slug: "beta-boreal-36k-config",
      modelId: "model-beta-boreal-36k", outdoorUnitId: "ou-beta-boreal-36k", indoorUnitId: "iu-beta-boreal-36k",
      minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60,
      sources: [{ sourceId: "src-beta-dev", confidence: PH }],
      createdAt: NOW, updatedAt: NOW, verifiedAt: null,
    },
  ],

  performanceProfiles: [
    {
      configurationId: "config-beta-boreal-36k",
      nominalHeatingBtu: 36000, nominalRatingTempC: 8.3,
      dataPoints: [
        { outdoorTempC: -8, heatingCapacityBtu: 30600, capacityRetentionPct: 85, confidence: PH },
        { outdoorTempC: -15, heatingCapacityBtu: 25200, capacityRetentionPct: 70, confidence: PH },
        { outdoorTempC: -25, heatingCapacityBtu: 18000, capacityRetentionPct: 50, confidence: PH },
      ],
    },
  ],

  certifications: [],
  warranties: [],
  priceObservations: [],
  editorial: [],
};

