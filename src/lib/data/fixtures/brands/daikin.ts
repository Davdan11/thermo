/**
 * DAIKIN — Real brand data
 *
 * Sources: Daikin Canada, AHRI, ENERGY STAR, LogisVert
 * Model numbers & specs based on publicly available product data.
 * Confidence: "manufacturer_claim" — sourced from spec sheets.
 */

import type { BrandDataset } from "../../types";

const NOW = "2026-08-28";
const MC = "manufacturer_claim" as const;

export const daikinDataset: BrandDataset = {
  brand: {
    id: "brand-daikin",
    slug: "daikin",
    name: "Daikin",
    countryOfOrigin: "JP",
    websiteUrl: "https://www.daikin.ca",
    description: "Leader mondial de la climatisation et du chauffage, Daikin est reconnu pour ses thermopompes Aurora conçues pour le climat froid canadien. Technologie inverter japonaise, réfrigérant R-32 et fiabilité éprouvée.",
    activeInQuebec: true,
    status: "published",
    createdAt: NOW,
    updatedAt: NOW,
    verifiedAt: null,
  },

  sources: [
    {
      id: "src-daikin-specs",
      type: "spec_sheet",
      title: "Fiches techniques Daikin Canada",
      organization: "Daikin Industries",
      url: "https://www.daikin.ca",
      consultedAt: NOW,
      language: "fr",
      confidence: MC,
      internalNotes: "Données provenant des fiches techniques officielles Daikin Canada.",
    },
  ],

  series: [
    {
      id: "series-daikin-aurora",
      slug: "daikin-aurora",
      name: "Aurora",
      brandId: "brand-daikin",
      systemType: "wall-single",
      categories: ["air-air", "cold-climate", "ductless", "single-zone"],
      description: "Série phare de Daikin pour le climat froid. Chauffage garanti jusqu'à -25 °C avec 100 % de capacité à -15 °C.",
      imageUrl: "https://daikincomfort.com/images/default-source/products/heating-and-cooling/single-zone-systems/heat-pumps/aurorawall.png",
      status: "published",
      createdAt: NOW,
      updatedAt: NOW,
      verifiedAt: null,
    },
    {
      id: "series-daikin-fit-aurora",
      slug: "daikin-fit-aurora",
      name: "FIT Aurora",
      brandId: "brand-daikin",
      systemType: "central-ducted",
      categories: ["air-air", "cold-climate", "ducted", "single-zone"],
      description: "Système central à vitesse variable avec évacuation frontale. Idéal pour remplacer un système central existant.",
      imageUrl: "https://daikincomfort.com/images/default-source/home-solutions/home-additions/daikin-fit-unit.png",
      status: "published",
      createdAt: NOW,
      updatedAt: NOW,
      verifiedAt: null,
    },
    {
      id: "series-daikin-atmosphera",
      slug: "daikin-atmosphera",
      name: "Atmosphera",
      brandId: "brand-daikin",
      systemType: "wall-single",
      categories: ["air-air", "cold-climate", "ductless", "single-zone"],
      description: "Option haut de gamme Daikin avec design épuré et performance climat froid.",
      imageUrl: "https://daikincomfort.com/images/default-source/products/heating-and-cooling/single-zone-systems/heat-pumps/aurorawall.png",
      status: "published",
      createdAt: NOW,
      updatedAt: NOW,
      verifiedAt: null,
    },
  ],

  models: [
    // Aurora
    { id: "model-daikin-aurora-9k",  slug: "daikin-aurora-9k",  name: "Aurora 9 000 BTU",  seriesId: "series-daikin-aurora", brandId: "brand-daikin", modelNumber: "FTXS09WVJU", normalizedModelNumber: "ftxs09wvju",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-daikin-aurora-12k", slug: "daikin-aurora-12k", name: "Aurora 12 000 BTU", seriesId: "series-daikin-aurora", brandId: "brand-daikin", modelNumber: "FTXS12WVJU", normalizedModelNumber: "ftxs12wvju",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-daikin-aurora-15k", slug: "daikin-aurora-15k", name: "Aurora 15 000 BTU", seriesId: "series-daikin-aurora", brandId: "brand-daikin", modelNumber: "FTXS15WVJU", normalizedModelNumber: "ftxs15wvju",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 15000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-daikin-aurora-18k", slug: "daikin-aurora-18k", name: "Aurora 18 000 BTU", seriesId: "series-daikin-aurora", brandId: "brand-daikin", modelNumber: "FTXS18WVJU", normalizedModelNumber: "ftxs18wvju",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-daikin-aurora-24k", slug: "daikin-aurora-24k", name: "Aurora 24 000 BTU", seriesId: "series-daikin-aurora", brandId: "brand-daikin", modelNumber: "FTXS24WVJU", normalizedModelNumber: "ftxs24wvju",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    // FIT Aurora
    { id: "model-daikin-fit-18k",    slug: "daikin-fit-aurora-18k", name: "FIT Aurora 18 000 BTU", seriesId: "series-daikin-fit-aurora", brandId: "brand-daikin", modelNumber: "DZ17VSA-18A", normalizedModelNumber: "dz17vsa18a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "central-ducted", categories: ["air-air","cold-climate","ducted","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-daikin-fit-24k",    slug: "daikin-fit-aurora-24k", name: "FIT Aurora 24 000 BTU", seriesId: "series-daikin-fit-aurora", brandId: "brand-daikin", modelNumber: "DZ17VSA-24A", normalizedModelNumber: "dz17vsa24a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "central-ducted", categories: ["air-air","cold-climate","ducted","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-daikin-fit-36k",    slug: "daikin-fit-aurora-36k", name: "FIT Aurora 36 000 BTU", seriesId: "series-daikin-fit-aurora", brandId: "brand-daikin", modelNumber: "DZ17VSA-36A", normalizedModelNumber: "dz17vsa36a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 36000, zones: 1, systemType: "central-ducted", categories: ["air-air","cold-climate","ducted","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    // Atmosphera
    { id: "model-daikin-atmo-9k",    slug: "daikin-atmosphera-9k",  name: "Atmosphera 9 000 BTU",  seriesId: "series-daikin-atmosphera", brandId: "brand-daikin", modelNumber: "FTXA09WVJU", normalizedModelNumber: "ftxa09wvju",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-daikin-atmo-12k",   slug: "daikin-atmosphera-12k", name: "Atmosphera 12 000 BTU", seriesId: "series-daikin-atmosphera", brandId: "brand-daikin", modelNumber: "FTXA12WVJU", normalizedModelNumber: "ftxa12wvju",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  outdoorUnits: [
    { id: "ou-daikin-aurora-9k",  modelNumber: "RXL09QMVJU",  brandId: "brand-daikin", refrigerant: "R-410A" },
    { id: "ou-daikin-aurora-12k", modelNumber: "RXL12QMVJU",  brandId: "brand-daikin", refrigerant: "R-410A" },
    { id: "ou-daikin-aurora-15k", modelNumber: "RXL15QMVJU",  brandId: "brand-daikin", refrigerant: "R-410A" },
    { id: "ou-daikin-aurora-18k", modelNumber: "RXL18QMVJU",  brandId: "brand-daikin", refrigerant: "R-410A" },
    { id: "ou-daikin-aurora-24k", modelNumber: "RXL24QMVJU",  brandId: "brand-daikin", refrigerant: "R-410A" },
    { id: "ou-daikin-fit-18k",    modelNumber: "DZ17VSA-18A",  brandId: "brand-daikin", refrigerant: "R-410A" },
    { id: "ou-daikin-fit-24k",    modelNumber: "DZ17VSA-24A",  brandId: "brand-daikin", refrigerant: "R-410A" },
    { id: "ou-daikin-fit-36k",    modelNumber: "DZ17VSA-36A",  brandId: "brand-daikin", refrigerant: "R-410A" },
    { id: "ou-daikin-atmo-9k",    modelNumber: "RXA09MVJU",    brandId: "brand-daikin", refrigerant: "R-32" },
    { id: "ou-daikin-atmo-12k",   modelNumber: "RXA12MVJU",    brandId: "brand-daikin", refrigerant: "R-32" },
  ],

  indoorUnits: [
    { id: "iu-daikin-aurora-9k",  modelNumber: "FTXS09WVJU", brandId: "brand-daikin", type: "wall-single" },
    { id: "iu-daikin-aurora-12k", modelNumber: "FTXS12WVJU", brandId: "brand-daikin", type: "wall-single" },
    { id: "iu-daikin-aurora-15k", modelNumber: "FTXS15WVJU", brandId: "brand-daikin", type: "wall-single" },
    { id: "iu-daikin-aurora-18k", modelNumber: "FTXS18WVJU", brandId: "brand-daikin", type: "wall-single" },
    { id: "iu-daikin-aurora-24k", modelNumber: "FTXS24WVJU", brandId: "brand-daikin", type: "wall-single" },
    { id: "iu-daikin-atmo-9k",    modelNumber: "FTXA09WVJU", brandId: "brand-daikin", type: "wall-single" },
    { id: "iu-daikin-atmo-12k",   modelNumber: "FTXA12WVJU", brandId: "brand-daikin", type: "wall-single" },
  ],

  configurations: [
    { id: "config-daikin-aurora-9k",  slug: "daikin-aurora-9k-config",  modelId: "model-daikin-aurora-9k",  outdoorUnitId: "ou-daikin-aurora-9k",  indoorUnitId: "iu-daikin-aurora-9k",  minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 40, hasWifi: true, seer2: 20.0, hspf2: 10.3, airflowCfmMin: 176, airflowCfmMax: 294, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-aurora-12k", slug: "daikin-aurora-12k-config", modelId: "model-daikin-aurora-12k", outdoorUnitId: "ou-daikin-aurora-12k", indoorUnitId: "iu-daikin-aurora-12k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 20.0, hspf2: 10.0, airflowCfmMin: 200, airflowCfmMax: 353, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-aurora-15k", slug: "daikin-aurora-15k-config", modelId: "model-daikin-aurora-15k", outdoorUnitId: "ou-daikin-aurora-15k", indoorUnitId: "iu-daikin-aurora-15k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 44, hasWifi: true, seer2: 20.0, hspf2: 10.5, airflowCfmMin: 212, airflowCfmMax: 412, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-aurora-18k", slug: "daikin-aurora-18k-config", modelId: "model-daikin-aurora-18k", outdoorUnitId: "ou-daikin-aurora-18k", indoorUnitId: "iu-daikin-aurora-18k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 21, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 20.0, hspf2: 10.5, airflowCfmMin: 247, airflowCfmMax: 471, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-aurora-24k", slug: "daikin-aurora-24k-config", modelId: "model-daikin-aurora-24k", outdoorUnitId: "ou-daikin-aurora-24k", indoorUnitId: "iu-daikin-aurora-24k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 48, hasWifi: true, seer2: 20.0, hspf2: 10.0, airflowCfmMin: 271, airflowCfmMax: 530, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-fit-18k",    slug: "daikin-fit-aurora-18k-config", modelId: "model-daikin-fit-18k", outdoorUnitId: "ou-daikin-fit-18k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 38, noiseIndoorMaxDbA: 55, hasWifi: true, seer2: 17.5, hspf2: 8.5, airflowCfmMin: 550, airflowCfmMax: 800, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-fit-24k",    slug: "daikin-fit-aurora-24k-config", modelId: "model-daikin-fit-24k", outdoorUnitId: "ou-daikin-fit-24k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 40, noiseIndoorMaxDbA: 57, hasWifi: true, seer2: 17.5, hspf2: 8.5, airflowCfmMin: 650, airflowCfmMax: 1000, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-fit-36k",    slug: "daikin-fit-aurora-36k-config", modelId: "model-daikin-fit-36k", outdoorUnitId: "ou-daikin-fit-36k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 42, noiseIndoorMaxDbA: 59, hasWifi: true, seer2: 16.0, hspf2: 8.0, airflowCfmMin: 800, airflowCfmMax: 1200, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-atmo-9k",    slug: "daikin-atmosphera-9k-config",  modelId: "model-daikin-atmo-9k",  outdoorUnitId: "ou-daikin-atmo-9k",  indoorUnitId: "iu-daikin-atmo-9k",  minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 40, hasWifi: true, seer2: 27.4, hspf2: 11.2, airflowCfmMin: 165, airflowCfmMax: 282, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-daikin-atmo-12k",   slug: "daikin-atmosphera-12k-config", modelId: "model-daikin-atmo-12k", outdoorUnitId: "ou-daikin-atmo-12k", indoorUnitId: "iu-daikin-atmo-12k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 26.0, hspf2: 10.1, airflowCfmMin: 176, airflowCfmMax: 341, sources: [{ sourceId: "src-daikin-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  performanceProfiles: [
    {
      configurationId: "config-daikin-aurora-18k",
      nominalHeatingBtu: 18000, nominalRatingTempC: 8.3,
      dataPoints: [
        { outdoorTempC: -8,  heatingCapacityBtu: 18000, capacityRetentionPct: 100, confidence: MC },
        { outdoorTempC: -15, heatingCapacityBtu: 18000, capacityRetentionPct: 100, confidence: MC },
        { outdoorTempC: -25, heatingCapacityBtu: 12600, capacityRetentionPct: 70,  confidence: MC },
      ],
    },
  ],

  certifications: [
    { id: "cert-daikin-aurora-9k-cc",  type: "cold_climate", configurationId: "config-daikin-aurora-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-aurora-12k-cc", type: "cold_climate", configurationId: "config-daikin-aurora-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-aurora-15k-cc", type: "cold_climate", configurationId: "config-daikin-aurora-15k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-aurora-18k-cc", type: "cold_climate", configurationId: "config-daikin-aurora-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-aurora-24k-cc", type: "cold_climate", configurationId: "config-daikin-aurora-24k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-fit-18k-cc",    type: "cold_climate", configurationId: "config-daikin-fit-18k",    coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-fit-24k-cc",    type: "cold_climate", configurationId: "config-daikin-fit-24k",    coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-fit-36k-cc",    type: "cold_climate", configurationId: "config-daikin-fit-36k",    coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-atmo-9k-cc",    type: "cold_climate", configurationId: "config-daikin-atmo-9k",    coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "cert-daikin-atmo-12k-cc",   type: "cold_climate", configurationId: "config-daikin-atmo-12k",   coldClimate: true, status: "active", territory: "CA", sourceId: "src-daikin-specs", verifiedAt: null },
  ],

  warranties: [
    { id: "warranty-daikin-parts",      modelId: "model-daikin-aurora-18k", type: "parts",      durationYears: 12, requiresRegistration: true, provider: "manufacturer", territory: "CA", conditions: "Enregistrement requis dans les 90 jours.", confidence: MC, sourceId: "src-daikin-specs", verifiedAt: null },
    { id: "warranty-daikin-compressor", modelId: "model-daikin-aurora-18k", type: "compressor", durationYears: 12, requiresRegistration: true, provider: "manufacturer", territory: "CA", conditions: "Enregistrement requis. Sans enregistrement : 5 ans.", confidence: MC, sourceId: "src-daikin-specs", verifiedAt: null },
  ],

  priceObservations: [],
  editorial: [],
};
