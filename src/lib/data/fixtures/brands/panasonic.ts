/**
 * PANASONIC — Real brand data
 *
 * Sources: Panasonic Canada, AHRI, ENERGY STAR
 * Model numbers & specs based on publicly available product data.
 * Confidence: "manufacturer_claim" — sourced from spec sheets.
 */

import type { BrandDataset } from "../../types";

const NOW = "2026-08-29";
const MC = "manufacturer_claim" as const;

export const panasonicDataset: BrandDataset = {
  brand: {
    id: "panasonic",
    slug: "panasonic",
    name: "Panasonic",
    countryOfOrigin: "JP",
    websiteUrl: "https://na.panasonic.ca",
    description: "Panasonic offre des thermopompes murales avec technologie nanoe™ X et performance climat froid certifiée. Les séries ClimaPure et EXTERIOS utilisent le réfrigérant R-32 écologique.",
    activeInQuebec: true,
    status: "published",
    createdAt: NOW,
    updatedAt: NOW,
    verifiedAt: null,
  },

  sources: [
    {
      id: "src-panasonic-specs",
      type: "spec_sheet",
      title: "Fiches techniques Panasonic Canada",
      organization: "Panasonic Corporation of North America",
      url: "https://na.panasonic.ca",
      consultedAt: NOW,
      language: "en",
      confidence: MC,
      internalNotes: "Données provenant des fiches techniques officielles Panasonic Canada.",
    },
  ],

  series: [
    {
      id: "series-pana-climapure-xz",
      slug: "panasonic-climapure-xz",
      name: "ClimaPure XZ",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["air-air", "cold-climate", "ductless", "single-zone"],
      description: "Série premium avec purification nanoe™ X, Wi-Fi intégré et chauffage jusqu'à -26 °C. Réfrigérant R-32.",
      imageUrl: null,
      status: "published",
      createdAt: NOW,
      updatedAt: NOW,
      verifiedAt: null,
    },
    {
      id: "series-pana-exterios-z",
      slug: "panasonic-exterios-z",
      name: "EXTERIOS Z",
      brandId: "panasonic",
      systemType: "wall-single",
      categories: ["air-air", "cold-climate", "ductless", "single-zone"],
      description: "Série polyvalente avec technologie AI ECO pour optimisation automatique. Chauffage jusqu'à -26 °C.",
      imageUrl: null,
      status: "published",
      createdAt: NOW,
      updatedAt: NOW,
      verifiedAt: null,
    },
  ],

  models: [
    // ClimaPure XZ
    { id: "model-pana-xz-9k",  slug: "panasonic-climapure-xz-9k",  name: "ClimaPure XZ 9 000 BTU",  seriesId: "series-pana-climapure-xz", brandId: "panasonic", modelNumber: "CS-XZ9AKUAW", normalizedModelNumber: "csxz9akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-pana-xz-12k", slug: "panasonic-climapure-xz-12k", name: "ClimaPure XZ 12 000 BTU", seriesId: "series-pana-climapure-xz", brandId: "panasonic", modelNumber: "CS-XZ12AKUAW", normalizedModelNumber: "csxz12akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-pana-xz-15k", slug: "panasonic-climapure-xz-15k", name: "ClimaPure XZ 15 000 BTU", seriesId: "series-pana-climapure-xz", brandId: "panasonic", modelNumber: "CS-XZ15AKUAW", normalizedModelNumber: "csxz15akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 15000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-pana-xz-18k", slug: "panasonic-climapure-xz-18k", name: "ClimaPure XZ 18 000 BTU", seriesId: "series-pana-climapure-xz", brandId: "panasonic", modelNumber: "CS-XZ18AKUAW", normalizedModelNumber: "csxz18akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-pana-xz-24k", slug: "panasonic-climapure-xz-24k", name: "ClimaPure XZ 24 000 BTU", seriesId: "series-pana-climapure-xz", brandId: "panasonic", modelNumber: "CS-XZ24AKUAW", normalizedModelNumber: "csxz24akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    // EXTERIOS Z
    { id: "model-pana-ez-9k",  slug: "panasonic-exterios-z-9k",  name: "EXTERIOS Z 9 000 BTU",  seriesId: "series-pana-exterios-z", brandId: "panasonic", modelNumber: "CS-Z9AKUAW", normalizedModelNumber: "csz9akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 9000,  zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-pana-ez-12k", slug: "panasonic-exterios-z-12k", name: "EXTERIOS Z 12 000 BTU", seriesId: "series-pana-exterios-z", brandId: "panasonic", modelNumber: "CS-Z12AKUAW", normalizedModelNumber: "csz12akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 12000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-pana-ez-18k", slug: "panasonic-exterios-z-18k", name: "EXTERIOS Z 18 000 BTU", seriesId: "series-pana-exterios-z", brandId: "panasonic", modelNumber: "CS-Z18AKUAW", normalizedModelNumber: "csz18akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 18000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "model-pana-ez-24k", slug: "panasonic-exterios-z-24k", name: "EXTERIOS Z 24 000 BTU", seriesId: "series-pana-exterios-z", brandId: "panasonic", modelNumber: "CS-Z24AKUAW", normalizedModelNumber: "csz24akuaw",
      isActive2026: true,
      thermomatchEligible: true, nominalCapacityBtu: 24000, zones: 1, systemType: "wall-single", categories: ["air-air","cold-climate","ductless","single-zone"], status: "published", launchYear: null, discontinuedYear: null, replacedByModelId: null, createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  outdoorUnits: [
    { id: "ou-pana-xz-9k",  modelNumber: "CU-XZ9AKUAW",  brandId: "panasonic", refrigerant: "R-32" },
    { id: "ou-pana-xz-12k", modelNumber: "CU-XZ12AKUAW", brandId: "panasonic", refrigerant: "R-32" },
    { id: "ou-pana-xz-15k", modelNumber: "CU-XZ15AKUAW", brandId: "panasonic", refrigerant: "R-32" },
    { id: "ou-pana-xz-18k", modelNumber: "CU-XZ18AKUAW", brandId: "panasonic", refrigerant: "R-32" },
    { id: "ou-pana-xz-24k", modelNumber: "CU-XZ24AKUAW", brandId: "panasonic", refrigerant: "R-32" },
    { id: "ou-pana-ez-9k",  modelNumber: "CU-Z9AKUAW",   brandId: "panasonic", refrigerant: "R-32" },
    { id: "ou-pana-ez-12k", modelNumber: "CU-Z12AKUAW",  brandId: "panasonic", refrigerant: "R-32" },
    { id: "ou-pana-ez-18k", modelNumber: "CU-Z18AKUAW",  brandId: "panasonic", refrigerant: "R-32" },
    { id: "ou-pana-ez-24k", modelNumber: "CU-Z24AKUAW",  brandId: "panasonic", refrigerant: "R-32" },
  ],

  indoorUnits: [
    { id: "iu-pana-xz-9k",  modelNumber: "CS-XZ9AKUAW",  brandId: "panasonic", type: "wall-single" },
    { id: "iu-pana-xz-12k", modelNumber: "CS-XZ12AKUAW", brandId: "panasonic", type: "wall-single" },
    { id: "iu-pana-xz-15k", modelNumber: "CS-XZ15AKUAW", brandId: "panasonic", type: "wall-single" },
    { id: "iu-pana-xz-18k", modelNumber: "CS-XZ18AKUAW", brandId: "panasonic", type: "wall-single" },
    { id: "iu-pana-xz-24k", modelNumber: "CS-XZ24AKUAW", brandId: "panasonic", type: "wall-single" },
    { id: "iu-pana-ez-9k",  modelNumber: "CS-Z9AKUAW",   brandId: "panasonic", type: "wall-single" },
    { id: "iu-pana-ez-12k", modelNumber: "CS-Z12AKUAW",  brandId: "panasonic", type: "wall-single" },
    { id: "iu-pana-ez-18k", modelNumber: "CS-Z18AKUAW",  brandId: "panasonic", type: "wall-single" },
    { id: "iu-pana-ez-24k", modelNumber: "CS-Z24AKUAW",  brandId: "panasonic", type: "wall-single" },
  ],

  configurations: [
    { id: "config-pana-xz-9k",  slug: "panasonic-climapure-xz-9k-config",  modelId: "model-pana-xz-9k",  outdoorUnitId: "ou-pana-xz-9k",  indoorUnitId: "iu-pana-xz-9k",  minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 40, hasWifi: true, seer2: 28.5, hspf2: 11.7, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-pana-xz-12k", slug: "panasonic-climapure-xz-12k-config", modelId: "model-pana-xz-12k", outdoorUnitId: "ou-pana-xz-12k", indoorUnitId: "iu-pana-xz-12k", minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 42, hasWifi: true, seer2: 25.5, hspf2: 11.5, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-pana-xz-15k", slug: "panasonic-climapure-xz-15k-config", modelId: "model-pana-xz-15k", outdoorUnitId: "ou-pana-xz-15k", indoorUnitId: "iu-pana-xz-15k", minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 22, noiseIndoorMaxDbA: 44, hasWifi: true, seer2: 22.0, hspf2: 11.0, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-pana-xz-18k", slug: "panasonic-climapure-xz-18k-config", modelId: "model-pana-xz-18k", outdoorUnitId: "ou-pana-xz-18k", indoorUnitId: "iu-pana-xz-18k", minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 35, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 21.0, hspf2: 10.5, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-pana-xz-24k", slug: "panasonic-climapure-xz-24k-config", modelId: "model-pana-xz-24k", outdoorUnitId: "ou-pana-xz-24k", indoorUnitId: "iu-pana-xz-24k", minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 36, noiseIndoorMaxDbA: 48, hasWifi: true, seer2: 20.5, hspf2: 11.0, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-pana-ez-9k",  slug: "panasonic-exterios-z-9k-config",  modelId: "model-pana-ez-9k",  outdoorUnitId: "ou-pana-ez-9k",  indoorUnitId: "iu-pana-ez-9k",  minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 41, hasWifi: true, seer2: 28.5, hspf2: 11.0, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-pana-ez-12k", slug: "panasonic-exterios-z-12k-config", modelId: "model-pana-ez-12k", outdoorUnitId: "ou-pana-ez-12k", indoorUnitId: "iu-pana-ez-12k", minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 19, noiseIndoorMaxDbA: 43, hasWifi: true, seer2: 25.5, hspf2: 10.8, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-pana-ez-18k", slug: "panasonic-exterios-z-18k-config", modelId: "model-pana-ez-18k", outdoorUnitId: "ou-pana-ez-18k", indoorUnitId: "iu-pana-ez-18k", minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 35, noiseIndoorMaxDbA: 46, hasWifi: true, seer2: 21.0, hspf2: 10.0, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
    { id: "config-pana-ez-24k", slug: "panasonic-exterios-z-24k-config", modelId: "model-pana-ez-24k", outdoorUnitId: "ou-pana-ez-24k", indoorUnitId: "iu-pana-ez-24k", minHeatingTempC: -26, voltage: 230, phase: 1, frequencyHz: 60, noiseIndoorMinDbA: 36, noiseIndoorMaxDbA: 48, hasWifi: true, seer2: 20.5, hspf2: 11.0, sources: [{ sourceId: "src-panasonic-specs", confidence: MC }], createdAt: NOW, updatedAt: NOW, verifiedAt: null },
  ],

  performanceProfiles: [],

  certifications: [
    { id: "cert-pana-xz-9k-cc",  type: "cold_climate", configurationId: "config-pana-xz-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "cert-pana-xz-12k-cc", type: "cold_climate", configurationId: "config-pana-xz-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "cert-pana-xz-15k-cc", type: "cold_climate", configurationId: "config-pana-xz-15k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "cert-pana-xz-18k-cc", type: "cold_climate", configurationId: "config-pana-xz-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "cert-pana-xz-24k-cc", type: "cold_climate", configurationId: "config-pana-xz-24k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "cert-pana-ez-9k-cc",  type: "cold_climate", configurationId: "config-pana-ez-9k",  coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "cert-pana-ez-12k-cc", type: "cold_climate", configurationId: "config-pana-ez-12k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "cert-pana-ez-18k-cc", type: "cold_climate", configurationId: "config-pana-ez-18k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "cert-pana-ez-24k-cc", type: "cold_climate", configurationId: "config-pana-ez-24k", coldClimate: true, status: "active", territory: "CA", sourceId: "src-panasonic-specs", verifiedAt: null },
  ],

  warranties: [
    { id: "warranty-pana-parts",      modelId: "model-pana-xz-12k", type: "parts",      durationYears: 5, requiresRegistration: false, provider: "manufacturer", territory: "CA", conditions: "Garantie limitée standard.", confidence: MC, sourceId: "src-panasonic-specs", verifiedAt: null },
    { id: "warranty-pana-compressor", modelId: "model-pana-xz-12k", type: "compressor", durationYears: 7, requiresRegistration: false, provider: "manufacturer", territory: "CA", conditions: "Garantie compresseur prolongée.", confidence: MC, sourceId: "src-panasonic-specs", verifiedAt: null },
  ],

  priceObservations: [],
  editorial: [],
};
