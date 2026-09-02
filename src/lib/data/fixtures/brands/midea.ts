/**
 * MIDEA — Real brand data
 * Series: Mission (mural), EVOX G3 (central)
 */
import type { BrandDataset } from "../../types";
const NOW = "2026-08-29";
const MC = "manufacturer_claim" as const;

export const mideaDataset: BrandDataset = {
  brand: { id: "midea", slug: "midea", name: "Midea", countryOfOrigin: "CN", websiteUrl: "https://www.midea.com/ca/fr", description: "Midea propose des thermopompes au meilleur rapport qualité-prix du marché, avec le réfrigérant R-454B de nouvelle génération. Série Mission pour le mural, EVOX G3 pour le central.", activeInQuebec: true, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  sources: [{ id: "src-midea-specs", type: "spec_sheet", title: "Midea High Wall Split 2025 — North America", organization: "Midea America", url: "https://www.mideacomfort.us/pdf/new/Leaflet_High%20Wall%20Split_2025.pdf", consultedAt: NOW, language: "en", confidence: MC, internalNotes: "Combinaisons All Easy Pro Extreme Heat, performances et numéros AHRI vérifiés dans la brochure officielle." }],
  series: [
    { id: "series-midea-mission", slug: "midea-mission", name: "All Easy Pro Extreme Heat", brandId: "midea", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Thermopompe murale nord-américaine pour climat froid, offerte de 6 000 à 33 000 BTU/h.", imageUrl: "/images/products/midea-mission-12k.webp", status: "published", sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "series-midea-evox", slug: "midea-evox-g3", name: "EVOX G3", brandId: "midea", systemType: "central-ducted", categories: ["air-air","cold-climate","ducted","single-zone"], description: "Système central pour froid extrême jusqu'à -30 °C.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  models: [
    { id: "model-midea-mission-9k", slug: "midea-mission-9k", name: "All Easy Pro Extreme Heat 9 000 BTU", seriesId: "series-midea-mission", brandId: "midea", modelNumber: "MSEHU-H09B-2A / MO1HS-H09B-2A", normalizedModelNumber: "msehuh09b2amo1hsh09b2a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, imageUrl: "/images/products/midea-mission-9k.webp", sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "model-midea-mission-12k", slug: "midea-mission-12k", name: "All Easy Pro Extreme Heat 12 000 BTU", seriesId: "series-midea-mission", brandId: "midea", modelNumber: "MSEHU-H12B-2A / MO1HS-H12B-2A", normalizedModelNumber: "msehuh12b2amo1hsh12b2a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, imageUrl: "/images/products/midea-mission-12k.webp", sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "model-midea-mission-18k", slug: "midea-mission-18k", name: "All Easy Pro Extreme Heat 18 000 BTU", seriesId: "series-midea-mission", brandId: "midea", modelNumber: "MSEHU-H18B-2A / MO1HS-H18B-2A", normalizedModelNumber: "msehuh18b2amo1hsh18b2a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, imageUrl: "/images/products/midea-mission-18k.webp", sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "model-midea-mission-24k", slug: "midea-mission-24k", name: "All Easy Pro Extreme Heat 24 000 BTU", seriesId: "series-midea-mission", brandId: "midea", modelNumber: "MSEHU-H24B-2A / MO1HS-H24B-2A", normalizedModelNumber: "msehuh24b2amo1hsh24b2a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, imageUrl: "/images/products/midea-mission-24k.webp", sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "model-midea-evox-36k", slug: "midea-evox-36k", name: "EVOX G3 36 000 BTU", seriesId: "series-midea-evox", brandId: "midea", modelNumber: "DLCMRAH-36-22S-G3", normalizedModelNumber: "dlcmrah3622sg3",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 36000, zones: 1, systemType: "central-ducted", categories: ["air-air","cold-climate","ducted","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-midea-evox-48k", slug: "midea-evox-48k", name: "EVOX G3 48 000 BTU", seriesId: "series-midea-evox", brandId: "midea", modelNumber: "DLCMRAH-48-22S-G3", normalizedModelNumber: "dlcmrah4822sg3",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 48000, zones: 1, systemType: "central-ducted", categories: ["air-air","cold-climate","ducted","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  outdoorUnits: [
    { id: "ou-midea-mission-9k", modelNumber: "MO1HS-H09B-2A", brandId: "midea", noiseLevelDbA: 56, refrigerant: "R-454B" },
    { id: "ou-midea-mission-12k", modelNumber: "MO1HS-H12B-2A", brandId: "midea", noiseLevelDbA: 56, refrigerant: "R-454B" },
    { id: "ou-midea-mission-18k", modelNumber: "MO1HS-H18B-2A", brandId: "midea", noiseLevelDbA: 59, refrigerant: "R-454B" },
    { id: "ou-midea-mission-24k", modelNumber: "MO1HS-H24B-2A", brandId: "midea", noiseLevelDbA: 62, refrigerant: "R-454B" },
    { id: "ou-midea-evox-36k",    modelNumber: "DLCMRAH-36-22S-G3",   brandId: "midea", refrigerant: "R-454B" },
    { id: "ou-midea-evox-48k",    modelNumber: "DLCMRAH-48-22S-G3",   brandId: "midea", refrigerant: "R-454B" },
  ],
  indoorUnits: [
    { id: "iu-midea-mission-9k", modelNumber: "MSEHU-H09B-2A", brandId: "midea", type: "wall-single", noiseMinDbA: 20, noiseMaxDbA: 38 },
    { id: "iu-midea-mission-12k", modelNumber: "MSEHU-H12B-2A", brandId: "midea", type: "wall-single", noiseMinDbA: 20, noiseMaxDbA: 47 },
    { id: "iu-midea-mission-18k", modelNumber: "MSEHU-H18B-2A", brandId: "midea", type: "wall-single", noiseMinDbA: 20, noiseMaxDbA: 50 },
    { id: "iu-midea-mission-24k", modelNumber: "MSEHU-H24B-2A", brandId: "midea", type: "wall-single", noiseMinDbA: 16, noiseMaxDbA: 55 },
  ],
  configurations: [
    { id: "config-midea-mission-9k", slug: "midea-mission-9k-config", modelId: "model-midea-mission-9k", outdoorUnitId: "ou-midea-mission-9k", indoorUnitId: "iu-midea-mission-9k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 38, noiseOutdoorDbA: 56, hasWifi: true, seer2: 27.4, eer2: 15.4, sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "config-midea-mission-12k", slug: "midea-mission-12k-config", modelId: "model-midea-mission-12k", outdoorUnitId: "ou-midea-mission-12k", indoorUnitId: "iu-midea-mission-12k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 47, noiseOutdoorDbA: 56, hasWifi: true, seer2: 25.4, eer2: 13.4, sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "config-midea-mission-18k", slug: "midea-mission-18k-config", modelId: "model-midea-mission-18k", outdoorUnitId: "ou-midea-mission-18k", indoorUnitId: "iu-midea-mission-18k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 50, noiseOutdoorDbA: 59, hasWifi: true, seer2: 21.4, eer2: 12.5, sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "config-midea-mission-24k", slug: "midea-mission-24k-config", modelId: "model-midea-mission-24k", outdoorUnitId: "ou-midea-mission-24k", indoorUnitId: "iu-midea-mission-24k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 16, noiseIndoorMaxDbA: 55, noiseOutdoorDbA: 62, hasWifi: true, seer2: 21, eer2: 13, sources: [{ sourceId: "src-midea-specs", confidence: MC, verifiedAt: NOW }], createdAt: NOW, updatedAt: NOW, verifiedAt: NOW },
    { id: "config-midea-evox-36k", slug: "midea-evox-36k-config", modelId: "model-midea-evox-36k", outdoorUnitId: "ou-midea-evox-36k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, hasWifi: true, seer2: 18.0, hspf2: 9.0, sources: [{ sourceId: "src-midea-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-midea-evox-48k", slug: "midea-evox-48k-config", modelId: "model-midea-evox-48k", outdoorUnitId: "ou-midea-evox-48k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, hasWifi: true, seer2: 16.5, hspf2: 8.5, sources: [{ sourceId: "src-midea-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  performanceProfiles: [],
  certifications: [
    { id: "cert-midea-mission-9k-ahri", type: "ahri", configurationId: "config-midea-mission-9k", referenceNumber: "215471380", coldClimate: true, status: "active", territory: "US/CA", sourceId: "src-midea-specs", verifiedAt: NOW },
    { id: "cert-midea-mission-12k-ahri", type: "ahri", configurationId: "config-midea-mission-12k", referenceNumber: "215471381", coldClimate: true, status: "active", territory: "US/CA", sourceId: "src-midea-specs", verifiedAt: NOW },
    { id: "cert-midea-mission-18k-ahri", type: "ahri", configurationId: "config-midea-mission-18k", referenceNumber: "215471382", coldClimate: true, status: "active", territory: "US/CA", sourceId: "src-midea-specs", verifiedAt: NOW },
    { id: "cert-midea-mission-24k-ahri", type: "ahri", configurationId: "config-midea-mission-24k", referenceNumber: "215471383", coldClimate: true, status: "active", territory: "US/CA", sourceId: "src-midea-specs", verifiedAt: NOW },
    { id: "cert-midea-evox-36k-cc", type: "cold_climate", configurationId: "config-midea-evox-36k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-midea-specs", verifiedAt: null },
    { id: "cert-midea-evox-48k-cc", type: "cold_climate", configurationId: "config-midea-evox-48k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-midea-specs", verifiedAt: null },
  ],
  warranties: [],
  priceObservations: [],
  editorial: [],
};
