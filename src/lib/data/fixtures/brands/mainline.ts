/**
 * MAINLINE — Real brand data
 *
 * Sources: hvacmainline.com, AHRI
 * Mainline HVAC — Nexus and Nexus Ultra Heat series.
 * Confidence: "manufacturer_claim" — sourced from spec sheets.
 */

import type { BrandDataset } from "../../types";

const NOW = "2026-08-29";
const MC = "manufacturer_claim" as const;

export const mainlineDataset: BrandDataset = {
  brand: {
    id: "mainline",
    slug: "mainline",
    name: "Mainline",
    countryOfOrigin: "US",
    websiteUrl: "https://hvacmainline.com",
    description: "Mainline HVAC offre les séries Nexus et Nexus Ultra Heat avec réfrigérant R-454B. Conçues pour le climat froid canadien avec chauffage jusqu'à -30 °C.",
    activeInQuebec: true,
    status: "published",
    createdAt: NOW,
    updatedAt: NOW,
    verifiedAt: null,
  },

  sources: [
    {
      id: "src-mainline-specs",
      type: "spec_sheet",
      title: "Fiches techniques Mainline HVAC",
      organization: "Mainline HVAC / Hajoca Corporation",
      url: "https://hvacmainline.com",
      consultedAt: NOW,
      language: "en",
      confidence: MC,
      internalNotes: "Données provenant du site officiel hvacmainline.com.",
    },
  ],

  series: [
    {
      id: "series-mainline-nexus",
      slug: "mainline-nexus",
      name: "Nexus",
      brandId: "mainline",
      systemType: "wall-single",
      categories: ["air-air", "cold-climate", "ductless", "single-zone"],
      description: "Série Nexus avec inverter, Wi-Fi intégré et chauffage jusqu'à -25 °C. Réfrigérant R-454B.",
      imageUrl: null,
      status: "published",
      createdAt: NOW,
      updatedAt: NOW,
      verifiedAt: null,
    },
    {
      id: "series-mainline-nexus-ultra",
      slug: "mainline-nexus-ultra",
      name: "Nexus Ultra Heat",
      brandId: "mainline",
      systemType: "wall-single",
      categories: ["air-air", "cold-climate", "ductless", "single-zone"],
      description: "Série Nexus Ultra Heat — performance extrême climat froid jusqu'à -30 °C. Jusqu'à 26 SEER2 / 14.6 HSPF2.",
      imageUrl: null,
      status: "published",
      createdAt: NOW,
      updatedAt: NOW,
      verifiedAt: null,
    },
  ],

  models: [
    // Nexus
    { id: "model-ml-nexus-9k",  slug: "mainline-nexus-9k",  name: "Nexus 9 000 BTU",  seriesId: "series-mainline-nexus", brandId: "mainline", modelNumber: "ML09HP230NEX-O",  normalizedModelNumber: "ml09hp230nexo",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-ml-nexus-12k", slug: "mainline-nexus-12k", name: "Nexus 12 000 BTU", seriesId: "series-mainline-nexus", brandId: "mainline", modelNumber: "ML12HP230NEX-O",  normalizedModelNumber: "ml12hp230nexo",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-ml-nexus-18k", slug: "mainline-nexus-18k", name: "Nexus 18 000 BTU", seriesId: "series-mainline-nexus", brandId: "mainline", modelNumber: "ML18HP230NEX-O",  normalizedModelNumber: "ml18hp230nexo",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-ml-nexus-24k", slug: "mainline-nexus-24k", name: "Nexus 24 000 BTU", seriesId: "series-mainline-nexus", brandId: "mainline", modelNumber: "ML24HP230NEX-O",  normalizedModelNumber: "ml24hp230nexo",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    // Nexus Ultra Heat
    { id: "model-ml-ultra-9k",  slug: "mainline-nexus-ultra-9k",  name: "Nexus Ultra 9 000 BTU",  seriesId: "series-mainline-nexus-ultra", brandId: "mainline", modelNumber: "ML09HP230NEXH-O", normalizedModelNumber: "ml09hp230nexho",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-ml-ultra-12k", slug: "mainline-nexus-ultra-12k", name: "Nexus Ultra 12 000 BTU", seriesId: "series-mainline-nexus-ultra", brandId: "mainline", modelNumber: "ML12HP230NEXH-O", normalizedModelNumber: "ml12hp230nexho",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-ml-ultra-18k", slug: "mainline-nexus-ultra-18k", name: "Nexus Ultra 18 000 BTU", seriesId: "series-mainline-nexus-ultra", brandId: "mainline", modelNumber: "ML18HP230NEXH-O", normalizedModelNumber: "ml18hp230nexho",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-ml-ultra-24k", slug: "mainline-nexus-ultra-24k", name: "Nexus Ultra 24 000 BTU", seriesId: "series-mainline-nexus-ultra", brandId: "mainline", modelNumber: "ML24HP230NEXH-O", normalizedModelNumber: "ml24hp230nexho",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  outdoorUnits: [
    { id: "ou-ml-nexus-9k",  modelNumber: "ML09HP230NEX-O",  brandId: "mainline", refrigerant: "R-454B" },
    { id: "ou-ml-nexus-12k", modelNumber: "ML12HP230NEX-O",  brandId: "mainline", refrigerant: "R-454B" },
    { id: "ou-ml-nexus-18k", modelNumber: "ML18HP230NEX-O",  brandId: "mainline", refrigerant: "R-454B" },
    { id: "ou-ml-nexus-24k", modelNumber: "ML24HP230NEX-O",  brandId: "mainline", refrigerant: "R-454B" },
    { id: "ou-ml-ultra-9k",  modelNumber: "ML09HP230NEXH-O", brandId: "mainline", refrigerant: "R-454B" },
    { id: "ou-ml-ultra-12k", modelNumber: "ML12HP230NEXH-O", brandId: "mainline", refrigerant: "R-454B" },
    { id: "ou-ml-ultra-18k", modelNumber: "ML18HP230NEXH-O", brandId: "mainline", refrigerant: "R-454B" },
    { id: "ou-ml-ultra-24k", modelNumber: "ML24HP230NEXH-O", brandId: "mainline", refrigerant: "R-454B" },
  ],

  indoorUnits: [
    { id: "iu-ml-nexus-9k",  modelNumber: "ML09HP230NEX-I",  brandId: "mainline", type: "wall-single" },
    { id: "iu-ml-nexus-12k", modelNumber: "ML12HP230NEX-I",  brandId: "mainline", type: "wall-single" },
    { id: "iu-ml-nexus-18k", modelNumber: "ML18HP230NEX-I",  brandId: "mainline", type: "wall-single" },
    { id: "iu-ml-nexus-24k", modelNumber: "ML24HP230NEX-I",  brandId: "mainline", type: "wall-single" },
    { id: "iu-ml-ultra-9k",  modelNumber: "ML09HP230NEXH-I", brandId: "mainline", type: "wall-single" },
    { id: "iu-ml-ultra-12k", modelNumber: "ML12HP230NEXH-I", brandId: "mainline", type: "wall-single" },
    { id: "iu-ml-ultra-18k", modelNumber: "ML18HP230NEXH-I", brandId: "mainline", type: "wall-single" },
    { id: "iu-ml-ultra-24k", modelNumber: "ML24HP230NEXH-I", brandId: "mainline", type: "wall-single" },
  ],

  configurations: [
    { id: "config-ml-nexus-9k",  slug: "mainline-nexus-9k-config",  modelId: "model-ml-nexus-9k",  outdoorUnitId: "ou-ml-nexus-9k",  indoorUnitId: "iu-ml-nexus-9k",  minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 24.6, hspf2: 13.0, sources: [{ sourceId: "src-mainline-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-ml-nexus-12k", slug: "mainline-nexus-12k-config", modelId: "model-ml-nexus-12k", outdoorUnitId: "ou-ml-nexus-12k", indoorUnitId: "iu-ml-nexus-12k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 23, noiseIndoorMaxDbA: 44, hasWifi: true, seer2: 23.0, hspf2: 12.5, sources: [{ sourceId: "src-mainline-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-ml-nexus-18k", slug: "mainline-nexus-18k-config", modelId: "model-ml-nexus-18k", outdoorUnitId: "ou-ml-nexus-18k", indoorUnitId: "iu-ml-nexus-18k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 24, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 22.0, hspf2: 12.0, sources: [{ sourceId: "src-mainline-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-ml-nexus-24k", slug: "mainline-nexus-24k-config", modelId: "model-ml-nexus-24k", outdoorUnitId: "ou-ml-nexus-24k", indoorUnitId: "iu-ml-nexus-24k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 25, noiseIndoorMaxDbA: 48, hasWifi: true, seer2: 21.0, hspf2: 11.5, sources: [{ sourceId: "src-mainline-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-ml-ultra-9k",  slug: "mainline-nexus-ultra-9k-config",  modelId: "model-ml-ultra-9k",  outdoorUnitId: "ou-ml-ultra-9k",  indoorUnitId: "iu-ml-ultra-9k",  minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 26.0, hspf2: 14.6, sources: [{ sourceId: "src-mainline-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-ml-ultra-12k", slug: "mainline-nexus-ultra-12k-config", modelId: "model-ml-ultra-12k", outdoorUnitId: "ou-ml-ultra-12k", indoorUnitId: "iu-ml-ultra-12k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 23, noiseIndoorMaxDbA: 44, hasWifi: true, seer2: 25.0, hspf2: 14.0, sources: [{ sourceId: "src-mainline-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-ml-ultra-18k", slug: "mainline-nexus-ultra-18k-config", modelId: "model-ml-ultra-18k", outdoorUnitId: "ou-ml-ultra-18k", indoorUnitId: "iu-ml-ultra-18k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 24, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 23.0, hspf2: 13.0, sources: [{ sourceId: "src-mainline-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-ml-ultra-24k", slug: "mainline-nexus-ultra-24k-config", modelId: "model-ml-ultra-24k", outdoorUnitId: "ou-ml-ultra-24k", indoorUnitId: "iu-ml-ultra-24k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 25, noiseIndoorMaxDbA: 48, hasWifi: true, seer2: 22.0, hspf2: 12.5, sources: [{ sourceId: "src-mainline-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  performanceProfiles: [],

  certifications: [
    { id: "cert-ml-nexus-9k-cc",  type: "cold_climate", configurationId: "config-ml-nexus-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-mainline-specs", verifiedAt: null },
    { id: "cert-ml-nexus-12k-cc", type: "cold_climate", configurationId: "config-ml-nexus-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mainline-specs", verifiedAt: null },
    { id: "cert-ml-nexus-18k-cc", type: "cold_climate", configurationId: "config-ml-nexus-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mainline-specs", verifiedAt: null },
    { id: "cert-ml-nexus-24k-cc", type: "cold_climate", configurationId: "config-ml-nexus-24k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mainline-specs", verifiedAt: null },
    { id: "cert-ml-ultra-9k-cc",  type: "cold_climate", configurationId: "config-ml-ultra-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-mainline-specs", verifiedAt: null },
    { id: "cert-ml-ultra-12k-cc", type: "cold_climate", configurationId: "config-ml-ultra-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mainline-specs", verifiedAt: null },
    { id: "cert-ml-ultra-18k-cc", type: "cold_climate", configurationId: "config-ml-ultra-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mainline-specs", verifiedAt: null },
    { id: "cert-ml-ultra-24k-cc", type: "cold_climate", configurationId: "config-ml-ultra-24k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mainline-specs", verifiedAt: null },
  ],

  warranties: [
    { id: "warranty-ml-parts",      modelId: "model-ml-nexus-12k", type: "parts",      durationYears: 5,  requiresRegistration: false, provider: "manufacturer", territory: "CA", conditions: "Garantie limitée pièces.", confidence: MC, sourceId: "src-mainline-specs", verifiedAt: null },
    { id: "warranty-ml-compressor", modelId: "model-ml-nexus-12k", type: "compressor", durationYears: 7,  requiresRegistration: false, provider: "manufacturer", territory: "CA", conditions: "Garantie compresseur.", confidence: MC, sourceId: "src-mainline-specs", verifiedAt: null },
  ],

  priceObservations: [],
  editorial: [],
};
