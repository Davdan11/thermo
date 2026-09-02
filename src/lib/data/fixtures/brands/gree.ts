/**
 * GREE — Real brand data
 * Series: Sapphire, Crown, FLEXX
 */
import type { BrandDataset } from "../../types";
const NOW = "2026-08-28";
const MC = "manufacturer_claim" as const;

export const greeDataset: BrandDataset = {
  brand: { id: "brand-gree", slug: "gree", name: "Gree", countryOfOrigin: "CN", websiteUrl: "https://www.gree.ca", description: "Plus grand fabricant de climatiseurs au monde, Gree offre des thermopompes Sapphire ultra-silencieuses et performantes jusqu'à -30 °C. Excellent rapport qualité-prix.", activeInQuebec: true, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  sources: [{ id: "src-gree-specs", type: "spec_sheet", title: "Fiches techniques Gree Canada", organization: "Gree Electric Appliances", url: "https://www.gree.ca", consultedAt: NOW, language: "fr", confidence: MC, internalNotes: "Données des fiches techniques officielles Gree." }],
  series: [
    { id: "series-gree-sapphire", slug: "gree-sapphire", name: "Sapphire", brandId: "brand-gree", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Ultra silencieux, haute efficacité jusqu'à 38 SEER. Chauffage jusqu'à -30 °C.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "series-gree-crown", slug: "gree-crown", name: "Crown", brandId: "brand-gree", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Design compact et moderne avec performance climat froid.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "series-gree-flexx", slug: "gree-flexx", name: "FLEXX", brandId: "brand-gree", systemType: "central-ducted", categories: ["air-air","cold-climate","ducted","single-zone"], description: "Système central polyvalent, idéal en remplacement ou en mode hybride avec fournaise existante.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  models: [
    { id: "model-gree-sapphire-9k",  slug: "gree-sapphire-9k",  name: "Sapphire 9 000 BTU",  seriesId: "series-gree-sapphire", brandId: "brand-gree", modelNumber: "GWH09ACD-D6DNA1A", normalizedModelNumber: "gwh09acdd6dna1a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-gree-sapphire-12k", slug: "gree-sapphire-12k", name: "Sapphire 12 000 BTU", seriesId: "series-gree-sapphire", brandId: "brand-gree", modelNumber: "GWH12ACD-D6DNA1A", normalizedModelNumber: "gwh12acdd6dna1a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-gree-sapphire-18k", slug: "gree-sapphire-18k", name: "Sapphire 18 000 BTU", seriesId: "series-gree-sapphire", brandId: "brand-gree", modelNumber: "GWH18ACD-D6DNA1A", normalizedModelNumber: "gwh18acdd6dna1a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-gree-sapphire-24k", slug: "gree-sapphire-24k", name: "Sapphire 24 000 BTU", seriesId: "series-gree-sapphire", brandId: "brand-gree", modelNumber: "GWH24ACD-D6DNA1A", normalizedModelNumber: "gwh24acdd6dna1a",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-gree-crown-9k",  slug: "gree-crown-9k",  name: "Crown 9 000 BTU",  seriesId: "series-gree-crown", brandId: "brand-gree", modelNumber: "GWH09QC-D6DNA1B", normalizedModelNumber: "gwh09qcd6dna1b",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-gree-crown-12k", slug: "gree-crown-12k", name: "Crown 12 000 BTU", seriesId: "series-gree-crown", brandId: "brand-gree", modelNumber: "GWH12QC-D6DNA1B", normalizedModelNumber: "gwh12qcd6dna1b",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-gree-flexx-36k", slug: "gree-flexx-36k", name: "FLEXX 36 000 BTU", seriesId: "series-gree-flexx", brandId: "brand-gree", modelNumber: "FLEXX36HP230V1AH", normalizedModelNumber: "flexx36hp230v1ah",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 36000, zones: 1, systemType: "central-ducted", categories: ["air-air","cold-climate","ducted","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  outdoorUnits: [
    { id: "ou-gree-sapphire-9k",  modelNumber: "GWH09ACD-D6DNA1A-OD", brandId: "brand-gree", refrigerant: "R-32" },
    { id: "ou-gree-sapphire-12k", modelNumber: "GWH12ACD-D6DNA1A-OD", brandId: "brand-gree", refrigerant: "R-32" },
    { id: "ou-gree-sapphire-18k", modelNumber: "GWH18ACD-D6DNA1A-OD", brandId: "brand-gree", refrigerant: "R-32" },
    { id: "ou-gree-sapphire-24k", modelNumber: "GWH24ACD-D6DNA1A-OD", brandId: "brand-gree", refrigerant: "R-32" },
    { id: "ou-gree-crown-9k",  modelNumber: "GWH09QC-D6DNA1B-OD", brandId: "brand-gree", refrigerant: "R-32" },
    { id: "ou-gree-crown-12k", modelNumber: "GWH12QC-D6DNA1B-OD", brandId: "brand-gree", refrigerant: "R-32" },
    { id: "ou-gree-flexx-36k", modelNumber: "FLEXX36HP230V1AH",    brandId: "brand-gree", refrigerant: "R-410A" },
  ],
  indoorUnits: [
    { id: "iu-gree-sapphire-9k",  modelNumber: "GWH09ACD-D6DNA1A-IU", brandId: "brand-gree", type: "wall-single" },
    { id: "iu-gree-sapphire-12k", modelNumber: "GWH12ACD-D6DNA1A-IU", brandId: "brand-gree", type: "wall-single" },
    { id: "iu-gree-sapphire-18k", modelNumber: "GWH18ACD-D6DNA1A-IU", brandId: "brand-gree", type: "wall-single" },
    { id: "iu-gree-sapphire-24k", modelNumber: "GWH24ACD-D6DNA1A-IU", brandId: "brand-gree", type: "wall-single" },
    { id: "iu-gree-crown-9k",  modelNumber: "GWH09QC-D6DNA1B-IU", brandId: "brand-gree", type: "wall-single" },
    { id: "iu-gree-crown-12k", modelNumber: "GWH12QC-D6DNA1B-IU", brandId: "brand-gree", type: "wall-single" },
  ],
  configurations: [
    { id: "config-gree-sapphire-9k",  slug: "gree-sapphire-9k-config",  modelId: "model-gree-sapphire-9k",  outdoorUnitId: "ou-gree-sapphire-9k",  indoorUnitId: "iu-gree-sapphire-9k",  minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 43, hasWifi: true, seer2: 38.0, hspf2: 11.5, airflowCfmMin: 159, airflowCfmMax: 294, sources: [{ sourceId: "src-gree-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-gree-sapphire-12k", slug: "gree-sapphire-12k-config", modelId: "model-gree-sapphire-12k", outdoorUnitId: "ou-gree-sapphire-12k", indoorUnitId: "iu-gree-sapphire-12k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 44, hasWifi: true, seer2: 30.5, hspf2: 10.5, airflowCfmMin: 194, airflowCfmMax: 353, sources: [{ sourceId: "src-gree-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-gree-sapphire-18k", slug: "gree-sapphire-18k-config", modelId: "model-gree-sapphire-18k", outdoorUnitId: "ou-gree-sapphire-18k", indoorUnitId: "iu-gree-sapphire-18k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 34, noiseIndoorMaxDbA: 48, hasWifi: true, seer2: 24.5, hspf2: 10.5, airflowCfmMin: 235, airflowCfmMax: 459, sources: [{ sourceId: "src-gree-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-gree-sapphire-24k", slug: "gree-sapphire-24k-config", modelId: "model-gree-sapphire-24k", outdoorUnitId: "ou-gree-sapphire-24k", indoorUnitId: "iu-gree-sapphire-24k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 36, noiseIndoorMaxDbA: 50, hasWifi: true, seer2: 21.5, hspf2: 10.5, airflowCfmMin: 259, airflowCfmMax: 530, sources: [{ sourceId: "src-gree-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-gree-crown-9k",  slug: "gree-crown-9k-config",  modelId: "model-gree-crown-9k",  outdoorUnitId: "ou-gree-crown-9k",  indoorUnitId: "iu-gree-crown-9k",  minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 41, hasWifi: true, seer2: 30.5, hspf2: 10.5, airflowCfmMin: 159, airflowCfmMax: 294, sources: [{ sourceId: "src-gree-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-gree-crown-12k", slug: "gree-crown-12k-config", modelId: "model-gree-crown-12k", outdoorUnitId: "ou-gree-crown-12k", indoorUnitId: "iu-gree-crown-12k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 23.0, hspf2: 10.5, airflowCfmMin: 194, airflowCfmMax: 353, sources: [{ sourceId: "src-gree-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-gree-flexx-36k", slug: "gree-flexx-36k-config", modelId: "model-gree-flexx-36k", outdoorUnitId: "ou-gree-flexx-36k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 45, noiseIndoorMaxDbA: 55, hasWifi: true, seer2: 18.0, hspf2: 9.0, sources: [{ sourceId: "src-gree-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  performanceProfiles: [],
  certifications: [
    { id: "cert-gree-sapphire-9k-cc",  type: "cold_climate", configurationId: "config-gree-sapphire-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-gree-specs", verifiedAt: null },
    { id: "cert-gree-sapphire-12k-cc", type: "cold_climate", configurationId: "config-gree-sapphire-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-gree-specs", verifiedAt: null },
    { id: "cert-gree-sapphire-18k-cc", type: "cold_climate", configurationId: "config-gree-sapphire-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-gree-specs", verifiedAt: null },
    { id: "cert-gree-sapphire-24k-cc", type: "cold_climate", configurationId: "config-gree-sapphire-24k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-gree-specs", verifiedAt: null },
    { id: "cert-gree-crown-9k-cc",  type: "cold_climate", configurationId: "config-gree-crown-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-gree-specs", verifiedAt: null },
    { id: "cert-gree-crown-12k-cc", type: "cold_climate", configurationId: "config-gree-crown-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-gree-specs", verifiedAt: null },
    { id: "cert-gree-flexx-36k-cc", type: "cold_climate", configurationId: "config-gree-flexx-36k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-gree-specs", verifiedAt: null },
  ],
  warranties: [],
  priceObservations: [],
  editorial: [],
};
