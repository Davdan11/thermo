/**
 * SAMSUNG — Real brand data
 * Series: WindFree MaxHeat
 */
import type { BrandDataset } from "../../types";
const NOW = "2026-08-28";
const MC = "manufacturer_claim" as const;

export const samsungDataset: BrandDataset = {
  brand: { id: "samsung", slug: "samsung", name: "Samsung", countryOfOrigin: "KR", websiteUrl: "https://www.samsung.com/ca_fr/", description: "Samsung WindFree MaxHeat offre un confort sans courant d'air grâce à des milliers de micro-perforations. Chauffage efficace jusqu'à -30 °C avec contrôle SmartThings.", activeInQuebec: true, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  sources: [{ id: "src-samsung-specs", type: "spec_sheet", title: "Fiches techniques Samsung HVAC", organization: "Samsung Electronics", url: "https://www.samsung.com/ca_fr/", consultedAt: NOW, language: "fr", confidence: MC, internalNotes: "Données des fiches techniques Samsung." }],
  series: [
    { id: "series-samsung-windfree", slug: "samsung-windfree-maxheat", name: "WindFree MaxHeat", brandId: "samsung", systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], description: "Technologie WindFree — diffusion d'air sans courant d'air. Chauffage jusqu'à -30 °C.", imageUrl: null, status: "published", createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  models: [
    { id: "model-samsung-wf-9k",  slug: "samsung-windfree-9k",  name: "WindFree MaxHeat 9 000 BTU",  seriesId: "series-samsung-windfree", brandId: "samsung", modelNumber: "AR09DXDABWKNCV", normalizedModelNumber: "ar09dxdabwkncv",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-samsung-wf-12k", slug: "samsung-windfree-12k", name: "WindFree MaxHeat 12 000 BTU", seriesId: "series-samsung-windfree", brandId: "samsung", modelNumber: "AR12DXDABWKNCV", normalizedModelNumber: "ar12dxdabwkncv",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-samsung-wf-18k", slug: "samsung-windfree-18k", name: "WindFree MaxHeat 18 000 BTU", seriesId: "series-samsung-windfree", brandId: "samsung", modelNumber: "AR18DXDABWKNCV", normalizedModelNumber: "ar18dxdabwkncv",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-samsung-wf-24k", slug: "samsung-windfree-24k", name: "WindFree MaxHeat 24 000 BTU", seriesId: "series-samsung-windfree", brandId: "samsung", modelNumber: "AR24DXDABWKNCV", normalizedModelNumber: "ar24dxdabwkncv",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  outdoorUnits: [
    { id: "ou-samsung-wf-9k",  modelNumber: "AR09DXDACWKXCV", brandId: "samsung", refrigerant: "R-32" },
    { id: "ou-samsung-wf-12k", modelNumber: "AR12DXDACWKXCV", brandId: "samsung", refrigerant: "R-32" },
    { id: "ou-samsung-wf-18k", modelNumber: "AR18DXDACWKXCV", brandId: "samsung", refrigerant: "R-32" },
    { id: "ou-samsung-wf-24k", modelNumber: "AR24DXDACWKXCV", brandId: "samsung", refrigerant: "R-32" },
  ],
  indoorUnits: [
    { id: "iu-samsung-wf-9k",  modelNumber: "AR09DXDABWKNCV", brandId: "samsung", type: "wall-single" },
    { id: "iu-samsung-wf-12k", modelNumber: "AR12DXDABWKNCV", brandId: "samsung", type: "wall-single" },
    { id: "iu-samsung-wf-18k", modelNumber: "AR18DXDABWKNCV", brandId: "samsung", type: "wall-single" },
    { id: "iu-samsung-wf-24k", modelNumber: "AR24DXDABWKNCV", brandId: "samsung", type: "wall-single" },
  ],
  configurations: [
    { id: "config-samsung-wf-9k",  slug: "samsung-windfree-9k-config",  modelId: "model-samsung-wf-9k",  outdoorUnitId: "ou-samsung-wf-9k",  indoorUnitId: "iu-samsung-wf-9k",  minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 38, hasWifi: true, seer2: 26.5, hspf2: 11.0, airflowCfmMin: 129, airflowCfmMax: 330, sources: [{ sourceId: "src-samsung-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-samsung-wf-12k", slug: "samsung-windfree-12k-config", modelId: "model-samsung-wf-12k", outdoorUnitId: "ou-samsung-wf-12k", indoorUnitId: "iu-samsung-wf-12k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 20, noiseIndoorMaxDbA: 40, hasWifi: true, seer2: 23.5, hspf2: 10.5, airflowCfmMin: 159, airflowCfmMax: 388, sources: [{ sourceId: "src-samsung-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-samsung-wf-18k", slug: "samsung-windfree-18k-config", modelId: "model-samsung-wf-18k", outdoorUnitId: "ou-samsung-wf-18k", indoorUnitId: "iu-samsung-wf-18k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 25, noiseIndoorMaxDbA: 45, hasWifi: true, seer2: 21.5, hspf2: 10.0, airflowCfmMin: 206, airflowCfmMax: 494, sources: [{ sourceId: "src-samsung-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-samsung-wf-24k", slug: "samsung-windfree-24k-config", modelId: "model-samsung-wf-24k", outdoorUnitId: "ou-samsung-wf-24k", indoorUnitId: "iu-samsung-wf-24k", minHeatingTempC: -30, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 28, noiseIndoorMaxDbA: 48, hasWifi: true, seer2: 20.0, hspf2: 10.0, airflowCfmMin: 229, airflowCfmMax: 589, sources: [{ sourceId: "src-samsung-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],
  performanceProfiles: [],
  certifications: [
    { id: "cert-samsung-wf-9k-cc",  type: "cold_climate", configurationId: "config-samsung-wf-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-samsung-specs", verifiedAt: null },
    { id: "cert-samsung-wf-12k-cc", type: "cold_climate", configurationId: "config-samsung-wf-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-samsung-specs", verifiedAt: null },
    { id: "cert-samsung-wf-18k-cc", type: "cold_climate", configurationId: "config-samsung-wf-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-samsung-specs", verifiedAt: null },
    { id: "cert-samsung-wf-24k-cc", type: "cold_climate", configurationId: "config-samsung-wf-24k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-samsung-specs", verifiedAt: null },
  ],
  warranties: [],
  priceObservations: [],
  editorial: [],
};
