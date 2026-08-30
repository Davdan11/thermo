/**
 * MOOVAIR — Real brand data (marque québécoise)
 * Series: Meridian HEAT+, Mistral, Morelis
 */
import type { BrandDataset } from "../../types";
const NOW = "2026-08-28";
const MC = "manufacturer_claim" as const;

export const moovairDataset: BrandDataset = {
  brand: { id: "brand-moovair", slug: "moovair", name: "Moovair", countryOfOrigin: "CA", websiteUrl: "https://www.moovair.ca", description: "Marque québécoise reconnue pour ses thermopompes adaptées au climat canadien. Technologie HEAT+ pour chauffage constant jusqu'à -30 °C. R-32 et R-454B disponibles.", activeInQuebec: true, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  sources: [{ id: "src-moovair-specs", type: "spec_sheet", title: "Fiches techniques Moovair", organization: "Moovair", url: "https://www.moovair.ca", consultedAt: NOW, language: "fr", confidence: MC, internalNotes: "Données des fiches techniques Moovair." }],
  series: [
    { id: "series-moovair-meridian", slug: "moovair-meridian", name: "Meridian HEAT+", brandId: "brand-moovair", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Technologie HEAT+ pour chaleur constante jusqu'à -30 °C.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "series-moovair-mistral", slug: "moovair-mistral", name: "Mistral", brandId: "brand-moovair", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Option abordable et fiable pour climat froid.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "series-moovair-morelis", slug: "moovair-morelis", name: "Morelis", brandId: "brand-moovair", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Gamme supérieure — efficacité maximale avec R-454B.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  models: [
    // Meridian
    { id: "model-moovair-mdn-9k",  slug: "moovair-meridian-9k",  name: "Meridian 9 000 BTU",  seriesId: "series-moovair-meridian", brandId: "brand-moovair", modelNumber: "MDN-09-INT", normalizedModelNumber: "mdn09int",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-moovair-mdn-12k", slug: "moovair-meridian-12k", name: "Meridian 12 000 BTU", seriesId: "series-moovair-meridian", brandId: "brand-moovair", modelNumber: "MDN-12-INT", normalizedModelNumber: "mdn12int",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-moovair-mdn-18k", slug: "moovair-meridian-18k", name: "Meridian 18 000 BTU", seriesId: "series-moovair-meridian", brandId: "brand-moovair", modelNumber: "MDN-18-INT", normalizedModelNumber: "mdn18int",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-moovair-mdn-24k", slug: "moovair-meridian-24k", name: "Meridian 24 000 BTU", seriesId: "series-moovair-meridian", brandId: "brand-moovair", modelNumber: "MDN-24-INT", normalizedModelNumber: "mdn24int",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    // Mistral
    { id: "model-moovair-mst-9k",  slug: "moovair-mistral-9k",  name: "Mistral 9 000 BTU",  seriesId: "series-moovair-mistral", brandId: "brand-moovair", modelNumber: "MST-09-INT", normalizedModelNumber: "mst09int",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-moovair-mst-12k", slug: "moovair-mistral-12k", name: "Mistral 12 000 BTU", seriesId: "series-moovair-mistral", brandId: "brand-moovair", modelNumber: "MST-12-INT", normalizedModelNumber: "mst12int",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    // Morelis
    { id: "model-moovair-mrl-12k", slug: "moovair-morelis-12k", name: "Morelis 12 000 BTU", seriesId: "series-moovair-morelis", brandId: "brand-moovair", modelNumber: "MRL-12-INT", normalizedModelNumber: "mrl12int",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-moovair-mrl-18k", slug: "moovair-morelis-18k", name: "Morelis 18 000 BTU", seriesId: "series-moovair-morelis", brandId: "brand-moovair", modelNumber: "MRL-18-INT", normalizedModelNumber: "mrl18int",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  outdoorUnits: [
    { id: "ou-moovair-mdn-9k",  modelNumber: "MDN-09-EXT", brandId: "brand-moovair", refrigerant: "R-32" },
    { id: "ou-moovair-mdn-12k", modelNumber: "MDN-12-EXT", brandId: "brand-moovair", refrigerant: "R-32" },
    { id: "ou-moovair-mdn-18k", modelNumber: "MDN-18-EXT", brandId: "brand-moovair", refrigerant: "R-32" },
    { id: "ou-moovair-mdn-24k", modelNumber: "MDN-24-EXT", brandId: "brand-moovair", refrigerant: "R-32" },
    { id: "ou-moovair-mst-9k",  modelNumber: "MST-09-EXT", brandId: "brand-moovair", refrigerant: "R-32" },
    { id: "ou-moovair-mst-12k", modelNumber: "MST-12-EXT", brandId: "brand-moovair", refrigerant: "R-32" },
    { id: "ou-moovair-mrl-12k", modelNumber: "MRL-12-EXT", brandId: "brand-moovair", refrigerant: "R-454B" },
    { id: "ou-moovair-mrl-18k", modelNumber: "MRL-18-EXT", brandId: "brand-moovair", refrigerant: "R-454B" },
  ],
  indoorUnits: [
    { id: "iu-moovair-mdn-9k",  modelNumber: "MDN-09-INT", brandId: "brand-moovair", type: "wall-single" },
    { id: "iu-moovair-mdn-12k", modelNumber: "MDN-12-INT", brandId: "brand-moovair", type: "wall-single" },
    { id: "iu-moovair-mdn-18k", modelNumber: "MDN-18-INT", brandId: "brand-moovair", type: "wall-single" },
    { id: "iu-moovair-mdn-24k", modelNumber: "MDN-24-INT", brandId: "brand-moovair", type: "wall-single" },
    { id: "iu-moovair-mst-9k",  modelNumber: "MST-09-INT", brandId: "brand-moovair", type: "wall-single" },
    { id: "iu-moovair-mst-12k", modelNumber: "MST-12-INT", brandId: "brand-moovair", type: "wall-single" },
    { id: "iu-moovair-mrl-12k", modelNumber: "MRL-12-INT", brandId: "brand-moovair", type: "wall-single" },
    { id: "iu-moovair-mrl-18k", modelNumber: "MRL-18-INT", brandId: "brand-moovair", type: "wall-single" },
  ],
  configurations: [
    { id: "config-moovair-mdn-9k",  slug: "moovair-meridian-9k-config",  modelId: "model-moovair-mdn-9k",  outdoorUnitId: "ou-moovair-mdn-9k",  indoorUnitId: "iu-moovair-mdn-9k",  minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 25, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 26.5, hspf2: 11.0, sources: [{ sourceId: "src-moovair-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-moovair-mdn-12k", slug: "moovair-meridian-12k-config", modelId: "model-moovair-mdn-12k", outdoorUnitId: "ou-moovair-mdn-12k", indoorUnitId: "iu-moovair-mdn-12k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 26, noiseIndoorMaxDbA: 43, hasWifi: true, seer2: 26.0, hspf2: 10.5, sources: [{ sourceId: "src-moovair-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-moovair-mdn-18k", slug: "moovair-meridian-18k-config", modelId: "model-moovair-mdn-18k", outdoorUnitId: "ou-moovair-mdn-18k", indoorUnitId: "iu-moovair-mdn-18k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 35, noiseIndoorMaxDbA: 48, hasWifi: true, seer2: 21.0, hspf2: 10.5, sources: [{ sourceId: "src-moovair-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-moovair-mdn-24k", slug: "moovair-meridian-24k-config", modelId: "model-moovair-mdn-24k", outdoorUnitId: "ou-moovair-mdn-24k", indoorUnitId: "iu-moovair-mdn-24k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 36, noiseIndoorMaxDbA: 50, hasWifi: true, seer2: 21.5, hspf2: 10.5, sources: [{ sourceId: "src-moovair-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-moovair-mst-9k",  slug: "moovair-mistral-9k-config",  modelId: "model-moovair-mst-9k",  outdoorUnitId: "ou-moovair-mst-9k",  indoorUnitId: "iu-moovair-mst-9k",  minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 25, noiseIndoorMaxDbA: 41, hasWifi: true, seer2: 23.5, hspf2: 10.0, sources: [{ sourceId: "src-moovair-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-moovair-mst-12k", slug: "moovair-mistral-12k-config", modelId: "model-moovair-mst-12k", outdoorUnitId: "ou-moovair-mst-12k", indoorUnitId: "iu-moovair-mst-12k", minHeatingTempC: -25, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 26, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 22.5, hspf2: 10.0, sources: [{ sourceId: "src-moovair-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-moovair-mrl-12k", slug: "moovair-morelis-12k-config", modelId: "model-moovair-mrl-12k", outdoorUnitId: "ou-moovair-mrl-12k", indoorUnitId: "iu-moovair-mrl-12k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 28.5, hspf2: 11.5, sources: [{ sourceId: "src-moovair-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-moovair-mrl-18k", slug: "moovair-morelis-18k-config", modelId: "model-moovair-mrl-18k", outdoorUnitId: "ou-moovair-mrl-18k", indoorUnitId: "iu-moovair-mrl-18k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 34, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 24.5, hspf2: 10.5, sources: [{ sourceId: "src-moovair-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  performanceProfiles: [],
  certifications: [
    { id: "cert-moovair-mdn-9k-cc",  type: "cold_climate", configurationId: "config-moovair-mdn-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-moovair-specs", verifiedAt: null },
    { id: "cert-moovair-mdn-12k-cc", type: "cold_climate", configurationId: "config-moovair-mdn-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-moovair-specs", verifiedAt: null },
    { id: "cert-moovair-mdn-18k-cc", type: "cold_climate", configurationId: "config-moovair-mdn-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-moovair-specs", verifiedAt: null },
    { id: "cert-moovair-mdn-24k-cc", type: "cold_climate", configurationId: "config-moovair-mdn-24k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-moovair-specs", verifiedAt: null },
    { id: "cert-moovair-mst-9k-cc",  type: "cold_climate", configurationId: "config-moovair-mst-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-moovair-specs", verifiedAt: null },
    { id: "cert-moovair-mst-12k-cc", type: "cold_climate", configurationId: "config-moovair-mst-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-moovair-specs", verifiedAt: null },
    { id: "cert-moovair-mrl-12k-cc", type: "cold_climate", configurationId: "config-moovair-mrl-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-moovair-specs", verifiedAt: null },
    { id: "cert-moovair-mrl-18k-cc", type: "cold_climate", configurationId: "config-moovair-mrl-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-moovair-specs", verifiedAt: null },
  ],
  warranties: [],
  priceObservations: [],
  editorial: [],
};
