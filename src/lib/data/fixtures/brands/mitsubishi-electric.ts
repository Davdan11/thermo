/**
 * MITSUBISHI ELECTRIC — Real brand data
 *
 * Sources: Mitsubishi Electric Canada, AHRI, ENERGY STAR
 * H2i (Hyper-Heat) technology — designed for Canadian cold climates.
 */

import type { BrandDataset } from "../../types";

const NOW = "2026-08-28";
const MC = "manufacturer_claim" as const;

export const mitsubishiElectricDataset: BrandDataset = {
  brand: {
    id: "mitsubishi-electric",
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    countryOfOrigin: "JP",
    websiteUrl: "https://www.mitsubishielectric.ca",
    description: "Référence en thermopompes murales au Canada, Mitsubishi Electric est reconnu pour sa technologie Hyper-Heat (H2i) offrant un chauffage fiable jusqu'à -25 °C. Capteur 3D i-see, silence exceptionnel et fiabilité légendaire.",
    activeInQuebec: true,
    status: "published",
    createdAt: NOW, updatedAt: NOW, verifiedAt: null,
  },

  sources: [
    { id: "src-mitsubishi-specs", type: "spec_sheet", title: "Fiches techniques Mitsubishi Electric Canada", organization: "Mitsubishi Electric", url: "https://www.mitsubishielectric.ca", consultedAt: NOW, language: "fr", confidence: MC, internalNotes: "Données provenant des fiches techniques officielles." },
  ],

  series: [
    { id: "series-mits-fs", slug: "mitsubishi-fs-deluxe", name: "FS Deluxe (H2i)", brandId: "mitsubishi-electric", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Série phare H2i Deluxe avec capteur 3D i-see, filtration avancée et chauffage garanti jusqu'à -25 °C.", imageUrl: "https://dw2p0k56b2hr9.cloudfront.net/ME_FS_FH_Front_copy_9dd3c80ea6.webp", status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "series-mits-fh", slug: "mitsubishi-fh-standard", name: "FH Standard (H2i)", brandId: "mitsubishi-electric", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Série H2i Standard — excellent rapport qualité-prix pour le climat froid.", imageUrl: "https://dw2p0k56b2hr9.cloudfront.net/ME_FS_FH_Front_copy_9dd3c80ea6.webp", status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "series-mits-ln", slug: "mitsubishi-ln-premium", name: "LN Design Premium", brandId: "mitsubishi-electric", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Série haut de gamme Design Premium avec filtration Plasma Quad et finitions multiples.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  models: [
    // FS Deluxe H2i
    { id: "model-mits-fs-06", slug: "mitsubishi-fs-6k",  name: "FS 6 000 BTU H2i",  seriesId: "series-mits-fs", brandId: "mitsubishi-electric", modelNumber: "MSZ-FS06NA",  normalizedModelNumber: "mszfs06na",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 6000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-mits-fs-09", slug: "mitsubishi-fs-9k",  name: "FS 9 000 BTU H2i",  seriesId: "series-mits-fs", brandId: "mitsubishi-electric", modelNumber: "MSZ-FS09NA",  normalizedModelNumber: "mszfs09na",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-mits-fs-12", slug: "mitsubishi-fs-12k", name: "FS 12 000 BTU H2i", seriesId: "series-mits-fs", brandId: "mitsubishi-electric", modelNumber: "MSZ-FS12NA",  normalizedModelNumber: "mszfs12na",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-mits-fs-15", slug: "mitsubishi-fs-15k", name: "FS 15 000 BTU H2i", seriesId: "series-mits-fs", brandId: "mitsubishi-electric", modelNumber: "MSZ-FS15NA",  normalizedModelNumber: "mszfs15na",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 15000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-mits-fs-18", slug: "mitsubishi-fs-18k", name: "FS 18 000 BTU H2i", seriesId: "series-mits-fs", brandId: "mitsubishi-electric", modelNumber: "MSZ-FS18NA",  normalizedModelNumber: "mszfs18na",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    // FH Standard H2i
    { id: "model-mits-fh-09", slug: "mitsubishi-fh-9k",  name: "FH 9 000 BTU H2i",  seriesId: "series-mits-fh", brandId: "mitsubishi-electric", modelNumber: "MSZ-FH09NA",  normalizedModelNumber: "mszfh09na",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-mits-fh-12", slug: "mitsubishi-fh-12k", name: "FH 12 000 BTU H2i", seriesId: "series-mits-fh", brandId: "mitsubishi-electric", modelNumber: "MSZ-FH12NA",  normalizedModelNumber: "mszfh12na",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-mits-fh-18", slug: "mitsubishi-fh-18k", name: "FH 18 000 BTU H2i", seriesId: "series-mits-fh", brandId: "mitsubishi-electric", modelNumber: "MSZ-FH18NA",  normalizedModelNumber: "mszfh18na",
      isActive2026: true,
      thermomatchEligible: true,  nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    // LN Design Premium
    { id: "model-mits-ln-09", slug: "mitsubishi-ln-9k",  name: "LN 9 000 BTU Premium",  seriesId: "series-mits-ln", brandId: "mitsubishi-electric", modelNumber: "MSZ-LN09VH", normalizedModelNumber: "mszln09vh",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-mits-ln-12", slug: "mitsubishi-ln-12k", name: "LN 12 000 BTU Premium", seriesId: "series-mits-ln", brandId: "mitsubishi-electric", modelNumber: "MSZ-LN12VH", normalizedModelNumber: "mszln12vh",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  outdoorUnits: [
    { id: "ou-mits-fs-06", modelNumber: "MUZ-FS06NAH", brandId: "mitsubishi-electric", refrigerant: "R-410A" },
    { id: "ou-mits-fs-09", modelNumber: "MUZ-FS09NAH", brandId: "mitsubishi-electric", refrigerant: "R-410A" },
    { id: "ou-mits-fs-12", modelNumber: "MUZ-FS12NAH", brandId: "mitsubishi-electric", refrigerant: "R-410A" },
    { id: "ou-mits-fs-15", modelNumber: "MUZ-FS15NAH", brandId: "mitsubishi-electric", refrigerant: "R-410A" },
    { id: "ou-mits-fs-18", modelNumber: "MUZ-FS18NAH", brandId: "mitsubishi-electric", refrigerant: "R-410A" },
    { id: "ou-mits-fh-09", modelNumber: "MUZ-FH09NAH", brandId: "mitsubishi-electric", refrigerant: "R-410A" },
    { id: "ou-mits-fh-12", modelNumber: "MUZ-FH12NAH", brandId: "mitsubishi-electric", refrigerant: "R-410A" },
    { id: "ou-mits-fh-18", modelNumber: "MUZ-FH18NAH", brandId: "mitsubishi-electric", refrigerant: "R-410A" },
    { id: "ou-mits-ln-09", modelNumber: "MUZ-LN09VH",  brandId: "mitsubishi-electric", refrigerant: "R-32" },
    { id: "ou-mits-ln-12", modelNumber: "MUZ-LN12VH",  brandId: "mitsubishi-electric", refrigerant: "R-32" },
  ],

  indoorUnits: [
    { id: "iu-mits-fs-06", modelNumber: "MSZ-FS06NA", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-fs-09", modelNumber: "MSZ-FS09NA", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-fs-12", modelNumber: "MSZ-FS12NA", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-fs-15", modelNumber: "MSZ-FS15NA", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-fs-18", modelNumber: "MSZ-FS18NA", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-fh-09", modelNumber: "MSZ-FH09NA", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-fh-12", modelNumber: "MSZ-FH12NA", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-fh-18", modelNumber: "MSZ-FH18NA", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-ln-09", modelNumber: "MSZ-LN09VH", brandId: "mitsubishi-electric", type: "wall-single" },
    { id: "iu-mits-ln-12", modelNumber: "MSZ-LN12VH", brandId: "mitsubishi-electric", type: "wall-single" },
  ],

  configurations: [
    { id: "config-mits-fs-06", slug: "mitsubishi-fs-6k-config",  modelId: "model-mits-fs-06", outdoorUnitId: "ou-mits-fs-06", indoorUnitId: "iu-mits-fs-06", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 38, hasWifi: true, seer2: 33.1, hspf2: 12.5, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-fs-09", slug: "mitsubishi-fs-9k-config",  modelId: "model-mits-fs-09", outdoorUnitId: "ou-mits-fs-09", indoorUnitId: "iu-mits-fs-09", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 40, hasWifi: true, seer2: 28.5, hspf2: 11.9, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-fs-12", slug: "mitsubishi-fs-12k-config", modelId: "model-mits-fs-12", outdoorUnitId: "ou-mits-fs-12", indoorUnitId: "iu-mits-fs-12", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 26.1, hspf2: 11.3, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-fs-15", slug: "mitsubishi-fs-15k-config", modelId: "model-mits-fs-15", outdoorUnitId: "ou-mits-fs-15", indoorUnitId: "iu-mits-fs-15", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 44, hasWifi: true, seer2: 21.0, hspf2: 10.3, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-fs-18", slug: "mitsubishi-fs-18k-config", modelId: "model-mits-fs-18", outdoorUnitId: "ou-mits-fs-18", indoorUnitId: "iu-mits-fs-18", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 21, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 21.0, hspf2: 10.5, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-fh-09", slug: "mitsubishi-fh-9k-config",  modelId: "model-mits-fh-09", outdoorUnitId: "ou-mits-fh-09", indoorUnitId: "iu-mits-fh-09", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 30.5, hspf2: 12.0, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-fh-12", slug: "mitsubishi-fh-12k-config", modelId: "model-mits-fh-12", outdoorUnitId: "ou-mits-fh-12", indoorUnitId: "iu-mits-fh-12", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 21, noiseIndoorMaxDbA: 44, hasWifi: true, seer2: 26.1, hspf2: 11.2, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-fh-18", slug: "mitsubishi-fh-18k-config", modelId: "model-mits-fh-18", outdoorUnitId: "ou-mits-fh-18", indoorUnitId: "iu-mits-fh-18", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 21.0, hspf2: 10.5, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-ln-09", slug: "mitsubishi-ln-9k-config",  modelId: "model-mits-ln-09", outdoorUnitId: "ou-mits-ln-09", indoorUnitId: "iu-mits-ln-09", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 38, hasWifi: true, seer2: 30.5, hspf2: 12.2, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-mits-ln-12", slug: "mitsubishi-ln-12k-config", modelId: "model-mits-ln-12", outdoorUnitId: "ou-mits-ln-12", indoorUnitId: "iu-mits-ln-12", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 40, hasWifi: true, seer2: 26.1, hspf2: 11.5, sources: [{ sourceId: "src-mitsubishi-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  performanceProfiles: [
    {
      configurationId: "config-mits-fs-12",
      nominalHeatingBtu: 12000, nominalRatingTempC: 8.3,
      dataPoints: [
        { outdoorTempC: -8,  heatingCapacityBtu: 12000, capacityRetentionPct: 100, confidence: MC },
        { outdoorTempC: -15, heatingCapacityBtu: 12000, capacityRetentionPct: 100, confidence: MC },
        { outdoorTempC: -25, heatingCapacityBtu: 9720,  capacityRetentionPct: 81,  confidence: MC },
      ],
    },
  ],

  certifications: [
    { id: "cert-mits-fs-06-cc", type: "cold_climate", configurationId: "config-mits-fs-06", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-fs-09-cc", type: "cold_climate", configurationId: "config-mits-fs-09", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-fs-12-cc", type: "cold_climate", configurationId: "config-mits-fs-12", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-fs-15-cc", type: "cold_climate", configurationId: "config-mits-fs-15", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-fs-18-cc", type: "cold_climate", configurationId: "config-mits-fs-18", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-fh-09-cc", type: "cold_climate", configurationId: "config-mits-fh-09", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-fh-12-cc", type: "cold_climate", configurationId: "config-mits-fh-12", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-fh-18-cc", type: "cold_climate", configurationId: "config-mits-fh-18", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-ln-09-cc", type: "cold_climate", configurationId: "config-mits-ln-09", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "cert-mits-ln-12-cc", type: "cold_climate", configurationId: "config-mits-ln-12", coldClimate: true, status: "active", territory: "CA", sourceId: "src-mitsubishi-specs", verifiedAt: null },
  ],

  warranties: [
    { id: "warranty-mits-parts",      modelId: "model-mits-fs-12", type: "parts",      durationYears: 10, requiresRegistration: true, provider: "manufacturer", territory: "CA", conditions: "Enregistrement requis.", confidence: MC, sourceId: "src-mitsubishi-specs", verifiedAt: null },
    { id: "warranty-mits-compressor", modelId: "model-mits-fs-12", type: "compressor", durationYears: 12, requiresRegistration: true, provider: "manufacturer", territory: "CA", conditions: "Installation par entrepreneur certifié Mitsubishi.", confidence: MC, sourceId: "src-mitsubishi-specs", verifiedAt: null },
  ],

  priceObservations: [],
  editorial: [],
};
