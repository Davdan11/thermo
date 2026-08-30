/**
 * LG — Real brand data
 * Series: Art Cool Mirror (LGRED°), Standard LGRED°
 */
import type { BrandDataset } from "../../types";
const NOW = "2026-08-28";
const MC = "manufacturer_claim" as const;

export const lgDataset: BrandDataset = {
  brand: { id: "brand-lg", slug: "lg", name: "LG", countryOfOrigin: "KR", websiteUrl: "https://www.lg.com/ca_fr", description: "LG combine design élégant et technologie LGRED° pour un chauffage efficace jusqu'à -25 °C. Série Art Cool Mirror avec Wi-Fi ThinQ intégré et panneau miroir distinctif.", activeInQuebec: true, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  sources: [{ id: "src-lg-specs", type: "spec_sheet", title: "Fiches techniques LG Canada", organization: "LG Electronics", url: "https://www.lg.com/ca_fr", consultedAt: NOW, language: "fr", confidence: MC, internalNotes: "Données des fiches techniques LG." }],
  series: [
    { id: "series-lg-artcool", slug: "lg-art-cool-mirror", name: "Art Cool Mirror (LGRED°)", brandId: "brand-lg", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Design miroir noir élégant avec technologie LGRED° pour climat froid.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "series-lg-standard", slug: "lg-standard-lgred", name: "Standard LGRED°", brandId: "brand-lg", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Thermopompe murale LGRED° au design classique.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  models: [
    { id: "model-lg-artcool-9k",  slug: "lg-art-cool-9k",  name: "Art Cool Mirror 9 000 BTU",  seriesId: "series-lg-artcool", brandId: "brand-lg", modelNumber: "LAN090HSV5", normalizedModelNumber: "lan090hsv5",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-lg-artcool-12k", slug: "lg-art-cool-12k", name: "Art Cool Mirror 12 000 BTU", seriesId: "series-lg-artcool", brandId: "brand-lg", modelNumber: "LAN120HSV5", normalizedModelNumber: "lan120hsv5",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-lg-artcool-18k", slug: "lg-art-cool-18k", name: "Art Cool Mirror 18 000 BTU", seriesId: "series-lg-artcool", brandId: "brand-lg", modelNumber: "LAN180HSV5", normalizedModelNumber: "lan180hsv5",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-lg-std-9k",  slug: "lg-standard-9k",  name: "Standard LGRED° 9 000 BTU",  seriesId: "series-lg-standard", brandId: "brand-lg", modelNumber: "LSN090HSV5", normalizedModelNumber: "lsn090hsv5",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-lg-std-12k", slug: "lg-standard-12k", name: "Standard LGRED° 12 000 BTU", seriesId: "series-lg-standard", brandId: "brand-lg", modelNumber: "LSN120HSV5", normalizedModelNumber: "lsn120hsv5",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-lg-std-18k", slug: "lg-standard-18k", name: "Standard LGRED° 18 000 BTU", seriesId: "series-lg-standard", brandId: "brand-lg", modelNumber: "LSN180HSV5", normalizedModelNumber: "lsn180hsv5",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  outdoorUnits: [
    { id: "ou-lg-artcool-9k",  modelNumber: "LAU090HSV5", brandId: "brand-lg", refrigerant: "R-410A" },
    { id: "ou-lg-artcool-12k", modelNumber: "LAU120HSV5", brandId: "brand-lg", refrigerant: "R-410A" },
    { id: "ou-lg-artcool-18k", modelNumber: "LAU180HSV5", brandId: "brand-lg", refrigerant: "R-410A" },
    { id: "ou-lg-std-9k",  modelNumber: "LSU090HSV5", brandId: "brand-lg", refrigerant: "R-410A" },
    { id: "ou-lg-std-12k", modelNumber: "LSU120HSV5", brandId: "brand-lg", refrigerant: "R-410A" },
    { id: "ou-lg-std-18k", modelNumber: "LSU180HSV5", brandId: "brand-lg", refrigerant: "R-410A" },
  ],
  indoorUnits: [
    { id: "iu-lg-artcool-9k",  modelNumber: "LAN090HSV5", brandId: "brand-lg", type: "wall-single" },
    { id: "iu-lg-artcool-12k", modelNumber: "LAN120HSV5", brandId: "brand-lg", type: "wall-single" },
    { id: "iu-lg-artcool-18k", modelNumber: "LAN180HSV5", brandId: "brand-lg", type: "wall-single" },
    { id: "iu-lg-std-9k",  modelNumber: "LSN090HSV5", brandId: "brand-lg", type: "wall-single" },
    { id: "iu-lg-std-12k", modelNumber: "LSN120HSV5", brandId: "brand-lg", type: "wall-single" },
    { id: "iu-lg-std-18k", modelNumber: "LSN180HSV5", brandId: "brand-lg", type: "wall-single" },
  ],
  configurations: [
    { id: "config-lg-artcool-9k",  slug: "lg-art-cool-9k-config",  modelId: "model-lg-artcool-9k",  outdoorUnitId: "ou-lg-artcool-9k",  indoorUnitId: "iu-lg-artcool-9k",  minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 23.5, hspf2: 10.4, sources: [{ sourceId: "src-lg-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-lg-artcool-12k", slug: "lg-art-cool-12k-config", modelId: "model-lg-artcool-12k", outdoorUnitId: "ou-lg-artcool-12k", indoorUnitId: "iu-lg-artcool-12k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 21.5, hspf2: 10.4, sources: [{ sourceId: "src-lg-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-lg-artcool-18k", slug: "lg-art-cool-18k-config", modelId: "model-lg-artcool-18k", outdoorUnitId: "ou-lg-artcool-18k", indoorUnitId: "iu-lg-artcool-18k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 28, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 21.5, hspf2: 10.0, sources: [{ sourceId: "src-lg-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-lg-std-9k",  slug: "lg-standard-9k-config",  modelId: "model-lg-std-9k",  outdoorUnitId: "ou-lg-std-9k",  indoorUnitId: "iu-lg-std-9k",  minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 23.5, hspf2: 10.4, sources: [{ sourceId: "src-lg-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-lg-std-12k", slug: "lg-standard-12k-config", modelId: "model-lg-std-12k", outdoorUnitId: "ou-lg-std-12k", indoorUnitId: "iu-lg-std-12k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 21.5, hspf2: 10.4, sources: [{ sourceId: "src-lg-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-lg-std-18k", slug: "lg-standard-18k-config", modelId: "model-lg-std-18k", outdoorUnitId: "ou-lg-std-18k", indoorUnitId: "iu-lg-std-18k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 28, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 21.5, hspf2: 10.0, sources: [{ sourceId: "src-lg-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  performanceProfiles: [],
  certifications: [
    { id: "cert-lg-artcool-9k-cc",  type: "cold_climate", configurationId: "config-lg-artcool-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-lg-specs", verifiedAt: null },
    { id: "cert-lg-artcool-12k-cc", type: "cold_climate", configurationId: "config-lg-artcool-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-lg-specs", verifiedAt: null },
    { id: "cert-lg-artcool-18k-cc", type: "cold_climate", configurationId: "config-lg-artcool-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-lg-specs", verifiedAt: null },
    { id: "cert-lg-std-9k-cc",  type: "cold_climate", configurationId: "config-lg-std-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-lg-specs", verifiedAt: null },
    { id: "cert-lg-std-12k-cc", type: "cold_climate", configurationId: "config-lg-std-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-lg-specs", verifiedAt: null },
    { id: "cert-lg-std-18k-cc", type: "cold_climate", configurationId: "config-lg-std-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-lg-specs", verifiedAt: null },
  ],
  warranties: [
    { id: "warranty-lg-parts", modelId: "model-lg-artcool-12k", type: "parts", durationYears: 10, requiresRegistration: true, provider: "manufacturer", territory: "CA", conditions: "Enregistrement requis.", confidence: MC, sourceId: "src-lg-specs", verifiedAt: null },
    { id: "warranty-lg-comp",  modelId: "model-lg-artcool-12k", type: "compressor", durationYears: 10, requiresRegistration: true, provider: "manufacturer", territory: "CA", conditions: "Enregistrement requis.", confidence: MC, sourceId: "src-lg-specs", verifiedAt: null },
  ],
  priceObservations: [],
  editorial: [],
};
