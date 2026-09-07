import type { BrandDataset } from "../../types";

export const boschDataset: BrandDataset = {
  brand: {
    id: "bosch",
    slug: "bosch",
    name: "BOSCH",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "bosch-standard",
      slug: "bosch-standard",
      name: "Standard",
      brandId: "bosch",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series",
      slug: "bosch-bms-series",
      name: "BMS series",
      brandId: "bosch",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500",
      slug: "bosch-bms500",
      name: "BMS500",
      brandId: "bosch",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp",
      slug: "bosch-ids-premium-lgwp",
      name: "IDS Premium LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra",
      slug: "bosch-ids-ultra",
      name: "IDS Ultra",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp",
      slug: "bosch-ids-light-lgwp",
      name: "IDS Light-LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp",
      slug: "bosch-idp-premium-lgwp",
      name: "IDP Premium LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-plus-lgwp",
      slug: "bosch-idp-plus-lgwp",
      name: "IDP Plus LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "bosch-standard-wall-single-24000",
      slug: "bosch-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15300,
      heatingCapacity5FMaxBtu: 23000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000",
      slug: "bosch-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 28400,
      heatingCapacity5FMaxBtu: 43500,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000",
      slug: "bosch-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 34400,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000",
      slug: "bosch-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 16800,
      heatingCapacity5FMaxBtu: 28000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-9000",
      slug: "bosch-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000",
      slug: "bosch-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7200,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-18000",
      slug: "bosch-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11100,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000",
      slug: "bosch-standard-wall-single-42000",
      name: "Standard 42 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 31000,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000",
      slug: "bosch-standard-central-ducted-42000",
      name: "Standard 42 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 35600,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000",
      slug: "bosch-standard-central-ducted-48000",
      name: "Standard 48 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 32000,
      heatingCapacity5FMaxBtu: 38500,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000",
      slug: "bosch-standard-central-ducted-24000",
      name: "Standard 24 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 17200,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000",
      slug: "bosch-standard-central-ducted-30000",
      name: "Standard 30 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 22600,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000",
      slug: "bosch-standard-central-ducted-36000",
      name: "Standard 36 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000",
      slug: "bosch-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "bosch-standard",
      brandId: "bosch",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 17200,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000",
      slug: "bosch-bms-series-wall-single-12000",
      name: "BMS series 12 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS series 12k",
      normalizedModelNumber: "bms-series-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8400,
      heatingCapacity5FMaxBtu: 10000,
      seer2Min: 19,
      seer2Max: 25.5,
      hspf2Min: 9.5,
      hspf2Max: 11.6,
      cop5FMin: 1.8,
      cop5FMax: 2.48,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000",
      slug: "bosch-bms500-wall-single-9000",
      name: "BMS500 9 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 9k",
      normalizedModelNumber: "bms500-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6100,
      heatingCapacity5FMaxBtu: 10100,
      seer2Min: 19.2,
      seer2Max: 28.1,
      hspf2Min: 10,
      hspf2Max: 12.3,
      cop5FMin: 1.59,
      cop5FMax: 2.17,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000",
      slug: "bosch-bms500-wall-single-12000",
      name: "BMS500 12 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 12k",
      normalizedModelNumber: "bms500-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 10600,
      seer2Min: 19,
      seer2Max: 25.5,
      hspf2Min: 9.5,
      hspf2Max: 10.7,
      cop5FMin: 1.8,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000",
      slug: "bosch-bms500-wall-single-18000",
      name: "BMS500 18 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 18k",
      normalizedModelNumber: "bms500-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 10900,
      heatingCapacity5FMaxBtu: 16000,
      seer2Min: 18,
      seer2Max: 23.5,
      hspf2Min: 9.3,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-24000",
      slug: "bosch-bms500-wall-single-24000",
      name: "BMS500 24 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 24k",
      normalizedModelNumber: "bms500-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 16200,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 19,
      seer2Max: 22,
      hspf2Min: 9.7,
      hspf2Max: 11.5,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-6000",
      slug: "bosch-bms500-wall-single-6000",
      name: "BMS500 6 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 6k",
      normalizedModelNumber: "bms500-6000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 6000,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 8500,
      seer2Min: 26.5,
      seer2Max: 26.5,
      hspf2Min: 13.6,
      hspf2Max: 13.6,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-30000",
      slug: "bosch-bms500-wall-single-30000",
      name: "BMS500 30 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 30k",
      normalizedModelNumber: "bms500-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 20,
      seer2Max: 24.6,
      hspf2Min: 9,
      hspf2Max: 10.6,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-15000",
      slug: "bosch-bms500-wall-single-15000",
      name: "BMS500 15 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 15k",
      normalizedModelNumber: "bms500-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 15600,
      seer2Min: 20,
      seer2Max: 20.5,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-36000",
      slug: "bosch-bms500-wall-single-36000",
      name: "BMS500 36 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 36k",
      normalizedModelNumber: "bms500-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 26800,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 20.6,
      seer2Max: 23.9,
      hspf2Min: 9.5,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-48000",
      slug: "bosch-bms500-wall-single-48000",
      name: "BMS500 48 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 48k",
      normalizedModelNumber: "bms500-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 34000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 20.9,
      seer2Max: 23.4,
      hspf2Min: 8.7,
      hspf2Max: 9.8,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-20000",
      slug: "bosch-bms500-wall-single-20000",
      name: "BMS500 20 000 BTU",
      seriesId: "bosch-bms500",
      brandId: "bosch",
      modelNumber: "BMS500 20k",
      normalizedModelNumber: "bms500-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 19400,
      seer2Min: 18.9,
      seer2Max: 18.9,
      hspf2Min: 10.4,
      hspf2Max: 10.4,
      cop5FMin: 1.89,
      cop5FMax: 1.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-20000",
      slug: "bosch-bms-series-wall-single-20000",
      name: "BMS series 20 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS series 20k",
      normalizedModelNumber: "bms-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      heatingCapacity5FMinBtu: 14200,
      heatingCapacity5FMaxBtu: 14200,
      seer2Min: 21.5,
      seer2Max: 21.5,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000",
      name: "IDS Premium LGWP 24 000 BTU",
      seriesId: "bosch-ids-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Premium LGWP 24k",
      normalizedModelNumber: "ids-premium-lgwp-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 15.2,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 9.5,
      cop5FMin: 1.85,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-36000",
      slug: "bosch-ids-premium-lgwp-central-ducted-36000",
      name: "IDS Premium LGWP 36 000 BTU",
      seriesId: "bosch-ids-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Premium LGWP 36k",
      normalizedModelNumber: "ids-premium-lgwp-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 28000,
      seer2Min: 17.5,
      seer2Max: 19,
      hspf2Min: 9,
      hspf2Max: 9.5,
      cop5FMin: 1.88,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-30000",
      slug: "bosch-ids-premium-lgwp-central-ducted-30000",
      name: "IDS Premium LGWP 30 000 BTU",
      seriesId: "bosch-ids-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Premium LGWP 30k",
      normalizedModelNumber: "ids-premium-lgwp-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 24600,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.85,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000",
      name: "IDS Premium LGWP 48 000 BTU",
      seriesId: "bosch-ids-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Premium LGWP 48k",
      normalizedModelNumber: "ids-premium-lgwp-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 33000,
      heatingCapacity5FMaxBtu: 44000,
      seer2Min: 17.5,
      seer2Max: 18.5,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-42000",
      slug: "bosch-ids-premium-lgwp-central-ducted-42000",
      name: "IDS Premium LGWP 42 000 BTU",
      seriesId: "bosch-ids-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Premium LGWP 42k",
      normalizedModelNumber: "ids-premium-lgwp-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 44500,
      heatingCapacity5FMinBtu: 35000,
      heatingCapacity5FMaxBtu: 35600,
      seer2Min: 16,
      seer2Max: 17,
      hspf2Min: 8.8,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-48000",
      slug: "bosch-ids-ultra-central-ducted-48000",
      name: "IDS Ultra 48 000 BTU",
      seriesId: "bosch-ids-ultra",
      brandId: "bosch",
      modelNumber: "IDS Ultra 48k",
      normalizedModelNumber: "ids-ultra-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48500,
      coolingCapacityMaxBtu: 53500,
      heatingCapacity5FMinBtu: 48500,
      heatingCapacity5FMaxBtu: 55000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000",
      slug: "bosch-ids-ultra-central-ducted-42000",
      name: "IDS Ultra 42 000 BTU",
      seriesId: "bosch-ids-ultra",
      brandId: "bosch",
      modelNumber: "IDS Ultra 42k",
      normalizedModelNumber: "ids-ultra-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 44500,
      heatingCapacity5FMinBtu: 45500,
      heatingCapacity5FMaxBtu: 47500,
      seer2Min: 15.2,
      seer2Max: 17,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000",
      slug: "bosch-bms-series-wall-single-9000",
      name: "BMS Series 9 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series 9k",
      normalizedModelNumber: "bms-series-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 9800,
      seer2Min: 19.5,
      seer2Max: 27.4,
      hspf2Min: 11,
      hspf2Max: 12.5,
      cop5FMin: 1.8,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000",
      slug: "bosch-bms-series-wall-single-18000",
      name: "BMS Series 18 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series 18k",
      normalizedModelNumber: "bms-series-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 13600,
      heatingCapacity5FMaxBtu: 17600,
      seer2Min: 18,
      seer2Max: 25.1,
      hspf2Min: 9.8,
      hspf2Max: 12.2,
      cop5FMin: 1.89,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-15000",
      slug: "bosch-bms-series-wall-single-15000",
      name: "BMS Series 15 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series 15k",
      normalizedModelNumber: "bms-series-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      heatingCapacity5FMinBtu: 14900,
      heatingCapacity5FMaxBtu: 14900,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 12.3,
      hspf2Max: 12.3,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000",
      slug: "bosch-bms-series-wall-single-24000",
      name: "BMS Series 24 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series 24k",
      normalizedModelNumber: "bms-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 27000,
      heatingCapacity5FMinBtu: 18400,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 19,
      seer2Max: 25,
      hspf2Min: 9,
      hspf2Max: 13.5,
      cop5FMin: 2,
      cop5FMax: 2.54,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-30000",
      slug: "bosch-bms-series-wall-single-30000",
      name: "BMS Series 30 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series 30k",
      normalizedModelNumber: "bms-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 20400,
      heatingCapacity5FMaxBtu: 24000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.03,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000",
      slug: "bosch-bms-series-wall-single-36000",
      name: "BMS Series 36 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series 36k",
      normalizedModelNumber: "bms-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 26400,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 19.4,
      seer2Max: 24,
      hspf2Min: 9.2,
      hspf2Max: 10.7,
      cop5FMin: 2,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-48000",
      slug: "bosch-bms-series-wall-single-48000",
      name: "BMS Series 48 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series 48k",
      normalizedModelNumber: "bms-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 36600,
      heatingCapacity5FMaxBtu: 44500,
      seer2Min: 17.1,
      seer2Max: 24,
      hspf2Min: 9.8,
      hspf2Max: 11,
      cop5FMin: 2,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-42000",
      slug: "bosch-bms-series-wall-single-42000",
      name: "BMS Series 42 000 BTU",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series 42k",
      normalizedModelNumber: "bms-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 20.4,
      seer2Max: 20.4,
      hspf2Min: 10.6,
      hspf2Max: 10.6,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000",
      slug: "bosch-ids-light-lgwp-central-ducted-24000",
      name: "IDS Light-LGWP 24 000 BTU",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP 24k",
      normalizedModelNumber: "ids-light-lgwp-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 17600,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.88,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000",
      slug: "bosch-ids-light-lgwp-central-ducted-48000",
      name: "IDS Light-LGWP 48 000 BTU",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP 48k",
      normalizedModelNumber: "ids-light-lgwp-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 46000,
      heatingCapacity5FMinBtu: 28400,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: 16,
      seer2Max: 17,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.85,
      cop5FMax: 1.87,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-36000",
      slug: "bosch-ids-light-lgwp-central-ducted-36000",
      name: "IDS Light-LGWP 36 000 BTU",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP 36k",
      normalizedModelNumber: "ids-light-lgwp-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 34200,
      heatingCapacity5FMaxBtu: 34200,
      seer2Min: 17,
      seer2Max: 17,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-60000",
      slug: "bosch-ids-light-lgwp-central-ducted-60000",
      name: "IDS Light-LGWP 60 000 BTU",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP 60k",
      normalizedModelNumber: "ids-light-lgwp-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 40000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 16.5,
      seer2Max: 16.5,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.87,
      cop5FMax: 1.87,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-42000",
      slug: "bosch-ids-light-lgwp-central-ducted-42000",
      name: "IDS Light-LGWP 42 000 BTU",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP 42k",
      normalizedModelNumber: "ids-light-lgwp-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 44500,
      heatingCapacity5FMinBtu: 33000,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-36000",
      slug: "bosch-idp-premium-lgwp-central-ducted-36000",
      name: "IDP Premium LGWP 36 000 BTU",
      seriesId: "bosch-idp-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDP Premium LGWP 36k",
      normalizedModelNumber: "idp-premium-lgwp-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 25000,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-60000",
      slug: "bosch-idp-premium-lgwp-central-ducted-60000",
      name: "IDP Premium LGWP 60 000 BTU",
      seriesId: "bosch-idp-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDP Premium LGWP 60k",
      normalizedModelNumber: "idp-premium-lgwp-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 43000,
      heatingCapacity5FMaxBtu: 43000,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-plus-lgwp-central-ducted-60000",
      slug: "bosch-idp-plus-lgwp-central-ducted-60000",
      name: "IDP Plus LGWP 60 000 BTU",
      seriesId: "bosch-idp-plus-lgwp",
      brandId: "bosch",
      modelNumber: "IDP Plus LGWP 60k",
      normalizedModelNumber: "idp-plus-lgwp-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 40500,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-18000",
      slug: "bosch-ids-light-lgwp-central-ducted-18000",
      name: "IDS Light-LGWP 18 000 BTU",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP 18k",
      normalizedModelNumber: "ids-light-lgwp-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 14800,
      heatingCapacity5FMaxBtu: 15000,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.81,
      cop5FMax: 1.81,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-30000",
      slug: "bosch-ids-light-lgwp-central-ducted-30000",
      name: "IDS Light-LGWP 30 000 BTU",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP 30k",
      normalizedModelNumber: "ids-light-lgwp-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 28600,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 21800,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "bosch-bova-36hdn1-m18m",
      modelNumber: "BOVA-36HDN1-M18M",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxxa",
      modelNumber: "BMS500-AAS024-1CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-36hdn1-m20g",
      modelNumber: "BOVA-36HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxra",
      modelNumber: "BMS500-AAS024-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxhb",
      modelNumber: "BMS500-AAS024-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovb-36hdn1-m18m",
      modelNumber: "BOVB-36HDN1-M18M",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovb-36hdn1-m20g",
      modelNumber: "BOVB-36HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-24hdn1-m15g",
      modelNumber: "BOVA-24HDN1-M15G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-36hdn1-m15g",
      modelNumber: "BOVA-36HDN1-M15G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovc-36hdn1-m20g",
      modelNumber: "BOVC-36HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovd-36hdn1-m20g",
      modelNumber: "BOVD-36HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60hdn1-m18m",
      modelNumber: "BOVA-60HDN1-M18M",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60hdn1-m20g",
      modelNumber: "BOVA-60HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas048-1csxlb",
      modelNumber: "BMS500-AAS048-1CSXLB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxra",
      modelNumber: "BMS500-AAM048-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovb-60hdn1-m18m",
      modelNumber: "BOVB-60HDN1-M18M",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bovb-60hdn1-m20g",
      modelNumber: "BOVB-60HDN1-M20G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas048-1csxlc",
      modelNumber: "BMS500-AAS048-1CSXLC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60hdn1-m15g",
      modelNumber: "BOVA-60HDN1-M15G",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas060-1csxlb",
      modelNumber: "BMS500-AAS060-1CSXLB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas060-1csxld",
      modelNumber: "BMS500-AAS060-1CSXLD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxlb",
      modelNumber: "BMS500-AAS036-1CSXLB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxhb",
      modelNumber: "BMS500-AAM036-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxrc",
      modelNumber: "BMS500-AAS036-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxlc",
      modelNumber: "BMS500-AAS036-1CSXLC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxrd",
      modelNumber: "BMS500-AAS036-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-0csxxa",
      modelNumber: "BMS500-AAS009-0CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxxa",
      modelNumber: "BMS500-AAS009-1CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxra",
      modelNumber: "BMS500-AAS009-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxhb",
      modelNumber: "BMS500-AAS009-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-0csxxa",
      modelNumber: "BMS500-AAS012-0CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-0csxrb",
      modelNumber: "BMS500-AAS012-0CSXRB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxra",
      modelNumber: "BMS500-AAS012-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxhb",
      modelNumber: "BMS500-AAS012-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxxa",
      modelNumber: "BMS500-AAS012-1CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxxa",
      modelNumber: "BMS500-AAS018-1CSXXA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxra",
      modelNumber: "BMS500-AAS018-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxra",
      modelNumber: "BMS500-AAM018-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bpha-36rcb-m16s",
      modelNumber: "BPHA-36RCB-M16S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxra",
      modelNumber: "BMS500-AAM027-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxra",
      modelNumber: "BMS500-AAM036-1CSXRA",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxhb",
      modelNumber: "BMS500-AAM027-1CSXHB",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-0csxrc",
      modelNumber: "BMS500-AAS012-0CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxhd",
      modelNumber: "BMS500-AAS012-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxrd",
      modelNumber: "BMS500-AAS012-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-0csxrd",
      modelNumber: "BMS500-AAS012-0CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxrc",
      modelNumber: "BMS500-AAS009-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxhc",
      modelNumber: "BMS500-AAS009-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxrc",
      modelNumber: "BMS500-AAS012-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas012-1csxhc",
      modelNumber: "BMS500-AAS012-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxrc",
      modelNumber: "BMS500-AAS018-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxhc",
      modelNumber: "BMS500-AAS018-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxrc",
      modelNumber: "BMS500-AAM018-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxhc",
      modelNumber: "BMS500-AAM018-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxrc",
      modelNumber: "BMS500-AAS024-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxhc",
      modelNumber: "BMS500-AAS024-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas030-1csxrc",
      modelNumber: "BMS500-AAS030-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxrc",
      modelNumber: "BMS500-AAM027-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxhc",
      modelNumber: "BMS500-AAM027-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxrc",
      modelNumber: "BMS500-AAM036-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxhc",
      modelNumber: "BMS500-AAM036-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxrc",
      modelNumber: "BMS500-AAM048-1CSXRC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxhc",
      modelNumber: "BMS500-AAM048-1CSXHC",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-36rtb-m20s",
      modelNumber: "BOVA-36RTB-M20S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60rtb-m20s",
      modelNumber: "BOVA-60RTB-M20S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60mtb-m19e",
      modelNumber: "BOVA-60MTB-M19E",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxhd",
      modelNumber: "BMS500-AAS009-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas009-1csxrd",
      modelNumber: "BMS500-AAS009-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxhd",
      modelNumber: "BMS500-AAS018-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas018-1csxrd",
      modelNumber: "BMS500-AAS018-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxhd",
      modelNumber: "BMS500-AAM018-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam018-1csxrd",
      modelNumber: "BMS500-AAM018-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxhd",
      modelNumber: "BMS500-AAS024-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas024-1csxrd",
      modelNumber: "BMS500-AAS024-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxhd",
      modelNumber: "BMS500-AAM027-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam027-1csxrd",
      modelNumber: "BMS500-AAM027-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas030-1csxrd",
      modelNumber: "BMS500-AAS030-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas036-1csxld",
      modelNumber: "BMS500-AAS036-1CSXLD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxhd",
      modelNumber: "BMS500-AAM036-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam036-1csxrd",
      modelNumber: "BMS500-AAM036-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aas048-1csxld",
      modelNumber: "BMS500-AAS048-1CSXLD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxhd",
      modelNumber: "BMS500-AAM048-1CSXHD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bms500-aam048-1csxrd",
      modelNumber: "BMS500-AAM048-1CSXRD",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-24rxb-m15s",
      modelNumber: "BOVA-24RXB-M15S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-36rxb-m15s",
      modelNumber: "BOVA-36RXB-M15S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bova-60rxb-m15s",
      modelNumber: "BOVA-60RXB-M15S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bpba-36rcb-m18s",
      modelNumber: "BPBA-36RCB-M18S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bpba-60rcb-m18s",
      modelNumber: "BPBA-60RCB-M18S",
      brandId: "bosch",
      refrigerant: null as any,
    },
    {
      id: "bosch-bpha-60rcb-m16s",
      modelNumber: "BPHA-60RCB-M16S",
      brandId: "bosch",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "bosch-standard-wall-single-24000-cfg-1",
      slug: "bosch-standard-wall-single-24000-cfg-1",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-2",
      slug: "bosch-standard-wall-single-24000-cfg-2",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxxa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-3",
      slug: "bosch-standard-wall-single-24000-cfg-3",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-4",
      slug: "bosch-standard-wall-single-24000-cfg-4",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-5",
      slug: "bosch-standard-wall-single-24000-cfg-5",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-6",
      slug: "bosch-standard-wall-single-24000-cfg-6",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-7",
      slug: "bosch-standard-wall-single-24000-cfg-7",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-8",
      slug: "bosch-standard-wall-single-24000-cfg-8",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-9",
      slug: "bosch-standard-wall-single-24000-cfg-9",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-10",
      slug: "bosch-standard-wall-single-24000-cfg-10",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-11",
      slug: "bosch-standard-wall-single-24000-cfg-11",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-12",
      slug: "bosch-standard-wall-single-24000-cfg-12",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-13",
      slug: "bosch-standard-wall-single-24000-cfg-13",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-14",
      slug: "bosch-standard-wall-single-24000-cfg-14",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-15",
      slug: "bosch-standard-wall-single-24000-cfg-15",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-16",
      slug: "bosch-standard-wall-single-24000-cfg-16",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-17",
      slug: "bosch-standard-wall-single-24000-cfg-17",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-18",
      slug: "bosch-standard-wall-single-24000-cfg-18",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-19",
      slug: "bosch-standard-wall-single-24000-cfg-19",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-20",
      slug: "bosch-standard-wall-single-24000-cfg-20",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-21",
      slug: "bosch-standard-wall-single-24000-cfg-21",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-22",
      slug: "bosch-standard-wall-single-24000-cfg-22",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-23",
      slug: "bosch-standard-wall-single-24000-cfg-23",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-24",
      slug: "bosch-standard-wall-single-24000-cfg-24",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-25",
      slug: "bosch-standard-wall-single-24000-cfg-25",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-26",
      slug: "bosch-standard-wall-single-24000-cfg-26",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-27",
      slug: "bosch-standard-wall-single-24000-cfg-27",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-28",
      slug: "bosch-standard-wall-single-24000-cfg-28",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-29",
      slug: "bosch-standard-wall-single-24000-cfg-29",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-24000-cfg-30",
      slug: "bosch-standard-wall-single-24000-cfg-30",
      modelId: "bosch-standard-wall-single-24000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-1",
      slug: "bosch-standard-wall-single-48000-cfg-1",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-2",
      slug: "bosch-standard-wall-single-48000-cfg-2",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-3",
      slug: "bosch-standard-wall-single-48000-cfg-3",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-4",
      slug: "bosch-standard-wall-single-48000-cfg-4",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-5",
      slug: "bosch-standard-wall-single-48000-cfg-5",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-6",
      slug: "bosch-standard-wall-single-48000-cfg-6",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-7",
      slug: "bosch-standard-wall-single-48000-cfg-7",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-8",
      slug: "bosch-standard-wall-single-48000-cfg-8",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-9",
      slug: "bosch-standard-wall-single-48000-cfg-9",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aas048-1csxlb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-10",
      slug: "bosch-standard-wall-single-48000-cfg-10",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aas048-1csxlb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-11",
      slug: "bosch-standard-wall-single-48000-cfg-11",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-12",
      slug: "bosch-standard-wall-single-48000-cfg-12",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-13",
      slug: "bosch-standard-wall-single-48000-cfg-13",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-14",
      slug: "bosch-standard-wall-single-48000-cfg-14",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-15",
      slug: "bosch-standard-wall-single-48000-cfg-15",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-16",
      slug: "bosch-standard-wall-single-48000-cfg-16",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-17",
      slug: "bosch-standard-wall-single-48000-cfg-17",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-18",
      slug: "bosch-standard-wall-single-48000-cfg-18",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-19",
      slug: "bosch-standard-wall-single-48000-cfg-19",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-20",
      slug: "bosch-standard-wall-single-48000-cfg-20",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aas048-1csxlc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-21",
      slug: "bosch-standard-wall-single-48000-cfg-21",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aas048-1csxlc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-48000-cfg-22",
      slug: "bosch-standard-wall-single-48000-cfg-22",
      modelId: "bosch-standard-wall-single-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-1",
      slug: "bosch-standard-wall-single-60000-cfg-1",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-2",
      slug: "bosch-standard-wall-single-60000-cfg-2",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-3",
      slug: "bosch-standard-wall-single-60000-cfg-3",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bms500-aas060-1csxlb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-4",
      slug: "bosch-standard-wall-single-60000-cfg-4",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-5",
      slug: "bosch-standard-wall-single-60000-cfg-5",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-6",
      slug: "bosch-standard-wall-single-60000-cfg-6",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-7",
      slug: "bosch-standard-wall-single-60000-cfg-7",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-8",
      slug: "bosch-standard-wall-single-60000-cfg-8",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-60000-cfg-9",
      slug: "bosch-standard-wall-single-60000-cfg-9",
      modelId: "bosch-standard-wall-single-60000",
      outdoorUnitId: "bosch-bms500-aas060-1csxld",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-1",
      slug: "bosch-standard-wall-single-36000-cfg-1",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-2",
      slug: "bosch-standard-wall-single-36000-cfg-2",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-3",
      slug: "bosch-standard-wall-single-36000-cfg-3",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-4",
      slug: "bosch-standard-wall-single-36000-cfg-4",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aas036-1csxlb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-5",
      slug: "bosch-standard-wall-single-36000-cfg-5",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aas036-1csxlb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-6",
      slug: "bosch-standard-wall-single-36000-cfg-6",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-7",
      slug: "bosch-standard-wall-single-36000-cfg-7",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-8",
      slug: "bosch-standard-wall-single-36000-cfg-8",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-9",
      slug: "bosch-standard-wall-single-36000-cfg-9",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-10",
      slug: "bosch-standard-wall-single-36000-cfg-10",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-11",
      slug: "bosch-standard-wall-single-36000-cfg-11",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-12",
      slug: "bosch-standard-wall-single-36000-cfg-12",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-13",
      slug: "bosch-standard-wall-single-36000-cfg-13",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-14",
      slug: "bosch-standard-wall-single-36000-cfg-14",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-15",
      slug: "bosch-standard-wall-single-36000-cfg-15",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-16",
      slug: "bosch-standard-wall-single-36000-cfg-16",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-17",
      slug: "bosch-standard-wall-single-36000-cfg-17",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-18",
      slug: "bosch-standard-wall-single-36000-cfg-18",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-19",
      slug: "bosch-standard-wall-single-36000-cfg-19",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-20",
      slug: "bosch-standard-wall-single-36000-cfg-20",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-21",
      slug: "bosch-standard-wall-single-36000-cfg-21",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aas036-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-22",
      slug: "bosch-standard-wall-single-36000-cfg-22",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aas036-1csxlc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-23",
      slug: "bosch-standard-wall-single-36000-cfg-23",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aas036-1csxlc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-24",
      slug: "bosch-standard-wall-single-36000-cfg-24",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-25",
      slug: "bosch-standard-wall-single-36000-cfg-25",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-26",
      slug: "bosch-standard-wall-single-36000-cfg-26",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-27",
      slug: "bosch-standard-wall-single-36000-cfg-27",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-28",
      slug: "bosch-standard-wall-single-36000-cfg-28",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-29",
      slug: "bosch-standard-wall-single-36000-cfg-29",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-30",
      slug: "bosch-standard-wall-single-36000-cfg-30",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-36000-cfg-31",
      slug: "bosch-standard-wall-single-36000-cfg-31",
      modelId: "bosch-standard-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aas036-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-9000-cfg-1",
      slug: "bosch-standard-wall-single-9000-cfg-1",
      modelId: "bosch-standard-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-0csxxa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-9000-cfg-2",
      slug: "bosch-standard-wall-single-9000-cfg-2",
      modelId: "bosch-standard-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxxa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-9000-cfg-3",
      slug: "bosch-standard-wall-single-9000-cfg-3",
      modelId: "bosch-standard-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-9000-cfg-4",
      slug: "bosch-standard-wall-single-9000-cfg-4",
      modelId: "bosch-standard-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-9000-cfg-5",
      slug: "bosch-standard-wall-single-9000-cfg-5",
      modelId: "bosch-standard-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-9000-cfg-6",
      slug: "bosch-standard-wall-single-9000-cfg-6",
      modelId: "bosch-standard-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-9000-cfg-7",
      slug: "bosch-standard-wall-single-9000-cfg-7",
      modelId: "bosch-standard-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-1",
      slug: "bosch-standard-wall-single-12000-cfg-1",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-0csxxa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-2",
      slug: "bosch-standard-wall-single-12000-cfg-2",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-0csxrb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-3",
      slug: "bosch-standard-wall-single-12000-cfg-3",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-4",
      slug: "bosch-standard-wall-single-12000-cfg-4",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-5",
      slug: "bosch-standard-wall-single-12000-cfg-5",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-6",
      slug: "bosch-standard-wall-single-12000-cfg-6",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-7",
      slug: "bosch-standard-wall-single-12000-cfg-7",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-8",
      slug: "bosch-standard-wall-single-12000-cfg-8",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxxa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-9",
      slug: "bosch-standard-wall-single-12000-cfg-9",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 10800,
      coolingCapacityMaxBtu: 10800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-12000-cfg-10",
      slug: "bosch-standard-wall-single-12000-cfg-10",
      modelId: "bosch-standard-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 10800,
      coolingCapacityMaxBtu: 10800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-18000-cfg-1",
      slug: "bosch-standard-wall-single-18000-cfg-1",
      modelId: "bosch-standard-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxxa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-18000-cfg-2",
      slug: "bosch-standard-wall-single-18000-cfg-2",
      modelId: "bosch-standard-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-18000-cfg-3",
      slug: "bosch-standard-wall-single-18000-cfg-3",
      modelId: "bosch-standard-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-18000-cfg-4",
      slug: "bosch-standard-wall-single-18000-cfg-4",
      modelId: "bosch-standard-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-18000-cfg-5",
      slug: "bosch-standard-wall-single-18000-cfg-5",
      modelId: "bosch-standard-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-18000-cfg-6",
      slug: "bosch-standard-wall-single-18000-cfg-6",
      modelId: "bosch-standard-wall-single-18000",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-18000-cfg-7",
      slug: "bosch-standard-wall-single-18000-cfg-7",
      modelId: "bosch-standard-wall-single-18000",
      outdoorUnitId: "bosch-bova-24hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-1",
      slug: "bosch-standard-wall-single-42000-cfg-1",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-2",
      slug: "bosch-standard-wall-single-42000-cfg-2",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-3",
      slug: "bosch-standard-wall-single-42000-cfg-3",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-4",
      slug: "bosch-standard-wall-single-42000-cfg-4",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-5",
      slug: "bosch-standard-wall-single-42000-cfg-5",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-6",
      slug: "bosch-standard-wall-single-42000-cfg-6",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-7",
      slug: "bosch-standard-wall-single-42000-cfg-7",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-8",
      slug: "bosch-standard-wall-single-42000-cfg-8",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-9",
      slug: "bosch-standard-wall-single-42000-cfg-9",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-10",
      slug: "bosch-standard-wall-single-42000-cfg-10",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-42000-cfg-11",
      slug: "bosch-standard-wall-single-42000-cfg-11",
      modelId: "bosch-standard-wall-single-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-1",
      slug: "bosch-standard-central-ducted-42000-cfg-1",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-2",
      slug: "bosch-standard-central-ducted-42000-cfg-2",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-3",
      slug: "bosch-standard-central-ducted-42000-cfg-3",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-4",
      slug: "bosch-standard-central-ducted-42000-cfg-4",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-5",
      slug: "bosch-standard-central-ducted-42000-cfg-5",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-6",
      slug: "bosch-standard-central-ducted-42000-cfg-6",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-7",
      slug: "bosch-standard-central-ducted-42000-cfg-7",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-8",
      slug: "bosch-standard-central-ducted-42000-cfg-8",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-9",
      slug: "bosch-standard-central-ducted-42000-cfg-9",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-10",
      slug: "bosch-standard-central-ducted-42000-cfg-10",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-11",
      slug: "bosch-standard-central-ducted-42000-cfg-11",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-12",
      slug: "bosch-standard-central-ducted-42000-cfg-12",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-13",
      slug: "bosch-standard-central-ducted-42000-cfg-13",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-14",
      slug: "bosch-standard-central-ducted-42000-cfg-14",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-15",
      slug: "bosch-standard-central-ducted-42000-cfg-15",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-16",
      slug: "bosch-standard-central-ducted-42000-cfg-16",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-17",
      slug: "bosch-standard-central-ducted-42000-cfg-17",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-18",
      slug: "bosch-standard-central-ducted-42000-cfg-18",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-19",
      slug: "bosch-standard-central-ducted-42000-cfg-19",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-20",
      slug: "bosch-standard-central-ducted-42000-cfg-20",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-21",
      slug: "bosch-standard-central-ducted-42000-cfg-21",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-22",
      slug: "bosch-standard-central-ducted-42000-cfg-22",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-23",
      slug: "bosch-standard-central-ducted-42000-cfg-23",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-42000-cfg-24",
      slug: "bosch-standard-central-ducted-42000-cfg-24",
      modelId: "bosch-standard-central-ducted-42000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-1",
      slug: "bosch-standard-central-ducted-48000-cfg-1",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-2",
      slug: "bosch-standard-central-ducted-48000-cfg-2",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-3",
      slug: "bosch-standard-central-ducted-48000-cfg-3",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-4",
      slug: "bosch-standard-central-ducted-48000-cfg-4",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-5",
      slug: "bosch-standard-central-ducted-48000-cfg-5",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-6",
      slug: "bosch-standard-central-ducted-48000-cfg-6",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-7",
      slug: "bosch-standard-central-ducted-48000-cfg-7",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-8",
      slug: "bosch-standard-central-ducted-48000-cfg-8",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-9",
      slug: "bosch-standard-central-ducted-48000-cfg-9",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-10",
      slug: "bosch-standard-central-ducted-48000-cfg-10",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-11",
      slug: "bosch-standard-central-ducted-48000-cfg-11",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-12",
      slug: "bosch-standard-central-ducted-48000-cfg-12",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-13",
      slug: "bosch-standard-central-ducted-48000-cfg-13",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-14",
      slug: "bosch-standard-central-ducted-48000-cfg-14",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-15",
      slug: "bosch-standard-central-ducted-48000-cfg-15",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-16",
      slug: "bosch-standard-central-ducted-48000-cfg-16",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-17",
      slug: "bosch-standard-central-ducted-48000-cfg-17",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-18",
      slug: "bosch-standard-central-ducted-48000-cfg-18",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-19",
      slug: "bosch-standard-central-ducted-48000-cfg-19",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-20",
      slug: "bosch-standard-central-ducted-48000-cfg-20",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-21",
      slug: "bosch-standard-central-ducted-48000-cfg-21",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-22",
      slug: "bosch-standard-central-ducted-48000-cfg-22",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-23",
      slug: "bosch-standard-central-ducted-48000-cfg-23",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-24",
      slug: "bosch-standard-central-ducted-48000-cfg-24",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-25",
      slug: "bosch-standard-central-ducted-48000-cfg-25",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-26",
      slug: "bosch-standard-central-ducted-48000-cfg-26",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-27",
      slug: "bosch-standard-central-ducted-48000-cfg-27",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-28",
      slug: "bosch-standard-central-ducted-48000-cfg-28",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bovb-60hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-48000-cfg-29",
      slug: "bosch-standard-central-ducted-48000-cfg-29",
      modelId: "bosch-standard-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-1",
      slug: "bosch-standard-central-ducted-24000-cfg-1",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-2",
      slug: "bosch-standard-central-ducted-24000-cfg-2",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-3",
      slug: "bosch-standard-central-ducted-24000-cfg-3",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-4",
      slug: "bosch-standard-central-ducted-24000-cfg-4",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-5",
      slug: "bosch-standard-central-ducted-24000-cfg-5",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-6",
      slug: "bosch-standard-central-ducted-24000-cfg-6",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-7",
      slug: "bosch-standard-central-ducted-24000-cfg-7",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-8",
      slug: "bosch-standard-central-ducted-24000-cfg-8",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-9",
      slug: "bosch-standard-central-ducted-24000-cfg-9",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-10",
      slug: "bosch-standard-central-ducted-24000-cfg-10",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-11",
      slug: "bosch-standard-central-ducted-24000-cfg-11",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-12",
      slug: "bosch-standard-central-ducted-24000-cfg-12",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-13",
      slug: "bosch-standard-central-ducted-24000-cfg-13",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-14",
      slug: "bosch-standard-central-ducted-24000-cfg-14",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-15",
      slug: "bosch-standard-central-ducted-24000-cfg-15",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-16",
      slug: "bosch-standard-central-ducted-24000-cfg-16",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-17",
      slug: "bosch-standard-central-ducted-24000-cfg-17",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-18",
      slug: "bosch-standard-central-ducted-24000-cfg-18",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-19",
      slug: "bosch-standard-central-ducted-24000-cfg-19",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-20",
      slug: "bosch-standard-central-ducted-24000-cfg-20",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-21",
      slug: "bosch-standard-central-ducted-24000-cfg-21",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-22",
      slug: "bosch-standard-central-ducted-24000-cfg-22",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-23",
      slug: "bosch-standard-central-ducted-24000-cfg-23",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-24",
      slug: "bosch-standard-central-ducted-24000-cfg-24",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-25",
      slug: "bosch-standard-central-ducted-24000-cfg-25",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-26",
      slug: "bosch-standard-central-ducted-24000-cfg-26",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-27",
      slug: "bosch-standard-central-ducted-24000-cfg-27",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-28",
      slug: "bosch-standard-central-ducted-24000-cfg-28",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-29",
      slug: "bosch-standard-central-ducted-24000-cfg-29",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-30",
      slug: "bosch-standard-central-ducted-24000-cfg-30",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-31",
      slug: "bosch-standard-central-ducted-24000-cfg-31",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-24000-cfg-32",
      slug: "bosch-standard-central-ducted-24000-cfg-32",
      modelId: "bosch-standard-central-ducted-24000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-1",
      slug: "bosch-standard-central-ducted-30000-cfg-1",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-2",
      slug: "bosch-standard-central-ducted-30000-cfg-2",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-3",
      slug: "bosch-standard-central-ducted-30000-cfg-3",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-4",
      slug: "bosch-standard-central-ducted-30000-cfg-4",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-5",
      slug: "bosch-standard-central-ducted-30000-cfg-5",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-6",
      slug: "bosch-standard-central-ducted-30000-cfg-6",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-7",
      slug: "bosch-standard-central-ducted-30000-cfg-7",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-8",
      slug: "bosch-standard-central-ducted-30000-cfg-8",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-9",
      slug: "bosch-standard-central-ducted-30000-cfg-9",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-10",
      slug: "bosch-standard-central-ducted-30000-cfg-10",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-11",
      slug: "bosch-standard-central-ducted-30000-cfg-11",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-12",
      slug: "bosch-standard-central-ducted-30000-cfg-12",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-13",
      slug: "bosch-standard-central-ducted-30000-cfg-13",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-14",
      slug: "bosch-standard-central-ducted-30000-cfg-14",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-15",
      slug: "bosch-standard-central-ducted-30000-cfg-15",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-16",
      slug: "bosch-standard-central-ducted-30000-cfg-16",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-17",
      slug: "bosch-standard-central-ducted-30000-cfg-17",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-18",
      slug: "bosch-standard-central-ducted-30000-cfg-18",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-19",
      slug: "bosch-standard-central-ducted-30000-cfg-19",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-20",
      slug: "bosch-standard-central-ducted-30000-cfg-20",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-21",
      slug: "bosch-standard-central-ducted-30000-cfg-21",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-22",
      slug: "bosch-standard-central-ducted-30000-cfg-22",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-23",
      slug: "bosch-standard-central-ducted-30000-cfg-23",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-24",
      slug: "bosch-standard-central-ducted-30000-cfg-24",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-25",
      slug: "bosch-standard-central-ducted-30000-cfg-25",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-26",
      slug: "bosch-standard-central-ducted-30000-cfg-26",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-27",
      slug: "bosch-standard-central-ducted-30000-cfg-27",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-30000-cfg-28",
      slug: "bosch-standard-central-ducted-30000-cfg-28",
      modelId: "bosch-standard-central-ducted-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-1",
      slug: "bosch-standard-central-ducted-36000-cfg-1",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-2",
      slug: "bosch-standard-central-ducted-36000-cfg-2",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-3",
      slug: "bosch-standard-central-ducted-36000-cfg-3",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-4",
      slug: "bosch-standard-central-ducted-36000-cfg-4",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-5",
      slug: "bosch-standard-central-ducted-36000-cfg-5",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-6",
      slug: "bosch-standard-central-ducted-36000-cfg-6",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-7",
      slug: "bosch-standard-central-ducted-36000-cfg-7",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-8",
      slug: "bosch-standard-central-ducted-36000-cfg-8",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-9",
      slug: "bosch-standard-central-ducted-36000-cfg-9",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-10",
      slug: "bosch-standard-central-ducted-36000-cfg-10",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-11",
      slug: "bosch-standard-central-ducted-36000-cfg-11",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-12",
      slug: "bosch-standard-central-ducted-36000-cfg-12",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-13",
      slug: "bosch-standard-central-ducted-36000-cfg-13",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-14",
      slug: "bosch-standard-central-ducted-36000-cfg-14",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-15",
      slug: "bosch-standard-central-ducted-36000-cfg-15",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-16",
      slug: "bosch-standard-central-ducted-36000-cfg-16",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-17",
      slug: "bosch-standard-central-ducted-36000-cfg-17",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-18",
      slug: "bosch-standard-central-ducted-36000-cfg-18",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-19",
      slug: "bosch-standard-central-ducted-36000-cfg-19",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-20",
      slug: "bosch-standard-central-ducted-36000-cfg-20",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-21",
      slug: "bosch-standard-central-ducted-36000-cfg-21",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-22",
      slug: "bosch-standard-central-ducted-36000-cfg-22",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovb-60hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-23",
      slug: "bosch-standard-central-ducted-36000-cfg-23",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-24",
      slug: "bosch-standard-central-ducted-36000-cfg-24",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-25",
      slug: "bosch-standard-central-ducted-36000-cfg-25",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-26",
      slug: "bosch-standard-central-ducted-36000-cfg-26",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-27",
      slug: "bosch-standard-central-ducted-36000-cfg-27",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-28",
      slug: "bosch-standard-central-ducted-36000-cfg-28",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-29",
      slug: "bosch-standard-central-ducted-36000-cfg-29",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-30",
      slug: "bosch-standard-central-ducted-36000-cfg-30",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-central-ducted-36000-cfg-31",
      slug: "bosch-standard-central-ducted-36000-cfg-31",
      modelId: "bosch-standard-central-ducted-36000",
      outdoorUnitId: "bosch-bpha-36rcb-m16s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-1",
      slug: "bosch-standard-wall-single-30000-cfg-1",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-2",
      slug: "bosch-standard-wall-single-30000-cfg-2",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-3",
      slug: "bosch-standard-wall-single-30000-cfg-3",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-4",
      slug: "bosch-standard-wall-single-30000-cfg-4",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-5",
      slug: "bosch-standard-wall-single-30000-cfg-5",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam036-1csxra",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-6",
      slug: "bosch-standard-wall-single-30000-cfg-6",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxhb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-7",
      slug: "bosch-standard-wall-single-30000-cfg-7",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-8",
      slug: "bosch-standard-wall-single-30000-cfg-8",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-9",
      slug: "bosch-standard-wall-single-30000-cfg-9",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-10",
      slug: "bosch-standard-wall-single-30000-cfg-10",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m18m",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-11",
      slug: "bosch-standard-wall-single-30000-cfg-11",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-12",
      slug: "bosch-standard-wall-single-30000-cfg-12",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-13",
      slug: "bosch-standard-wall-single-30000-cfg-13",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovb-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-14",
      slug: "bosch-standard-wall-single-30000-cfg-14",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bova-36hdn1-m15g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-15",
      slug: "bosch-standard-wall-single-30000-cfg-15",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-16",
      slug: "bosch-standard-wall-single-30000-cfg-16",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-17",
      slug: "bosch-standard-wall-single-30000-cfg-17",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-18",
      slug: "bosch-standard-wall-single-30000-cfg-18",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-19",
      slug: "bosch-standard-wall-single-30000-cfg-19",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-20",
      slug: "bosch-standard-wall-single-30000-cfg-20",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-21",
      slug: "bosch-standard-wall-single-30000-cfg-21",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-22",
      slug: "bosch-standard-wall-single-30000-cfg-22",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-23",
      slug: "bosch-standard-wall-single-30000-cfg-23",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovc-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-24",
      slug: "bosch-standard-wall-single-30000-cfg-24",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-25",
      slug: "bosch-standard-wall-single-30000-cfg-25",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-standard-wall-single-30000-cfg-26",
      slug: "bosch-standard-wall-single-30000-cfg-26",
      modelId: "bosch-standard-wall-single-30000",
      outdoorUnitId: "bosch-bovd-36hdn1-m20g",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-1",
      slug: "bosch-bms-series-wall-single-12000-cfg-1",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-0csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-2",
      slug: "bosch-bms-series-wall-single-12000-cfg-2",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-3",
      slug: "bosch-bms-series-wall-single-12000-cfg-3",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-4",
      slug: "bosch-bms-series-wall-single-12000-cfg-4",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-5",
      slug: "bosch-bms-series-wall-single-12000-cfg-5",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-6",
      slug: "bosch-bms-series-wall-single-12000-cfg-6",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-7",
      slug: "bosch-bms-series-wall-single-12000-cfg-7",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-8",
      slug: "bosch-bms-series-wall-single-12000-cfg-8",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-9",
      slug: "bosch-bms-series-wall-single-12000-cfg-9",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-12000-cfg-10",
      slug: "bosch-bms-series-wall-single-12000-cfg-10",
      modelId: "bosch-bms-series-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-0csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.4,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000-cfg-1",
      slug: "bosch-bms500-wall-single-9000-cfg-1",
      modelId: "bosch-bms500-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.5,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000-cfg-2",
      slug: "bosch-bms500-wall-single-9000-cfg-2",
      modelId: "bosch-bms500-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000-cfg-3",
      slug: "bosch-bms500-wall-single-9000-cfg-3",
      modelId: "bosch-bms500-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000-cfg-4",
      slug: "bosch-bms500-wall-single-9000-cfg-4",
      modelId: "bosch-bms500-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000-cfg-5",
      slug: "bosch-bms500-wall-single-9000-cfg-5",
      modelId: "bosch-bms500-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000-cfg-6",
      slug: "bosch-bms500-wall-single-9000-cfg-6",
      modelId: "bosch-bms500-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000-cfg-7",
      slug: "bosch-bms500-wall-single-9000-cfg-7",
      modelId: "bosch-bms500-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-9000-cfg-8",
      slug: "bosch-bms500-wall-single-9000-cfg-8",
      modelId: "bosch-bms500-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000-cfg-1",
      slug: "bosch-bms500-wall-single-12000-cfg-1",
      modelId: "bosch-bms500-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000-cfg-2",
      slug: "bosch-bms500-wall-single-12000-cfg-2",
      modelId: "bosch-bms500-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000-cfg-3",
      slug: "bosch-bms500-wall-single-12000-cfg-3",
      modelId: "bosch-bms500-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000-cfg-4",
      slug: "bosch-bms500-wall-single-12000-cfg-4",
      modelId: "bosch-bms500-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000-cfg-5",
      slug: "bosch-bms500-wall-single-12000-cfg-5",
      modelId: "bosch-bms500-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000-cfg-6",
      slug: "bosch-bms500-wall-single-12000-cfg-6",
      modelId: "bosch-bms500-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000-cfg-7",
      slug: "bosch-bms500-wall-single-12000-cfg-7",
      modelId: "bosch-bms500-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-12000-cfg-8",
      slug: "bosch-bms500-wall-single-12000-cfg-8",
      modelId: "bosch-bms500-wall-single-12000",
      outdoorUnitId: "bosch-bms500-aas012-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-1",
      slug: "bosch-bms500-wall-single-18000-cfg-1",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-2",
      slug: "bosch-bms500-wall-single-18000-cfg-2",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-3",
      slug: "bosch-bms500-wall-single-18000-cfg-3",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-4",
      slug: "bosch-bms500-wall-single-18000-cfg-4",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-5",
      slug: "bosch-bms500-wall-single-18000-cfg-5",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.9,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-6",
      slug: "bosch-bms500-wall-single-18000-cfg-6",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-7",
      slug: "bosch-bms500-wall-single-18000-cfg-7",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.95,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-8",
      slug: "bosch-bms500-wall-single-18000-cfg-8",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-9",
      slug: "bosch-bms500-wall-single-18000-cfg-9",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-10",
      slug: "bosch-bms500-wall-single-18000-cfg-10",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-11",
      slug: "bosch-bms500-wall-single-18000-cfg-11",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-18000-cfg-12",
      slug: "bosch-bms500-wall-single-18000-cfg-12",
      modelId: "bosch-bms500-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-24000-cfg-1",
      slug: "bosch-bms500-wall-single-24000-cfg-1",
      modelId: "bosch-bms500-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-24000-cfg-2",
      slug: "bosch-bms500-wall-single-24000-cfg-2",
      modelId: "bosch-bms500-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-24000-cfg-3",
      slug: "bosch-bms500-wall-single-24000-cfg-3",
      modelId: "bosch-bms500-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-24000-cfg-4",
      slug: "bosch-bms500-wall-single-24000-cfg-4",
      modelId: "bosch-bms500-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-24000-cfg-5",
      slug: "bosch-bms500-wall-single-24000-cfg-5",
      modelId: "bosch-bms500-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-24000-cfg-6",
      slug: "bosch-bms500-wall-single-24000-cfg-6",
      modelId: "bosch-bms500-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-6000-cfg-1",
      slug: "bosch-bms500-wall-single-6000-cfg-1",
      modelId: "bosch-bms500-wall-single-6000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 26.5,
      hspf2: 13.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-30000-cfg-1",
      slug: "bosch-bms500-wall-single-30000-cfg-1",
      modelId: "bosch-bms500-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aas030-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-30000-cfg-2",
      slug: "bosch-bms500-wall-single-30000-cfg-2",
      modelId: "bosch-bms500-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 24.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-30000-cfg-3",
      slug: "bosch-bms500-wall-single-30000-cfg-3",
      modelId: "bosch-bms500-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-30000-cfg-4",
      slug: "bosch-bms500-wall-single-30000-cfg-4",
      modelId: "bosch-bms500-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.8,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-30000-cfg-5",
      slug: "bosch-bms500-wall-single-30000-cfg-5",
      modelId: "bosch-bms500-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 23,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-30000-cfg-6",
      slug: "bosch-bms500-wall-single-30000-cfg-6",
      modelId: "bosch-bms500-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-30000-cfg-7",
      slug: "bosch-bms500-wall-single-30000-cfg-7",
      modelId: "bosch-bms500-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.5,
      hspf2: 10.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-15000-cfg-1",
      slug: "bosch-bms500-wall-single-15000-cfg-1",
      modelId: "bosch-bms500-wall-single-15000",
      outdoorUnitId: "bosch-bms500-aas018-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-15000-cfg-2",
      slug: "bosch-bms500-wall-single-15000-cfg-2",
      modelId: "bosch-bms500-wall-single-15000",
      outdoorUnitId: "bosch-bms500-aas018-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-36000-cfg-1",
      slug: "bosch-bms500-wall-single-36000-cfg-1",
      modelId: "bosch-bms500-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.9,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-36000-cfg-2",
      slug: "bosch-bms500-wall-single-36000-cfg-2",
      modelId: "bosch-bms500-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-36000-cfg-3",
      slug: "bosch-bms500-wall-single-36000-cfg-3",
      modelId: "bosch-bms500-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.6,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-48000-cfg-1",
      slug: "bosch-bms500-wall-single-48000-cfg-1",
      modelId: "bosch-bms500-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-48000-cfg-2",
      slug: "bosch-bms500-wall-single-48000-cfg-2",
      modelId: "bosch-bms500-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.95,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-48000-cfg-3",
      slug: "bosch-bms500-wall-single-48000-cfg-3",
      modelId: "bosch-bms500-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.8,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-48000-cfg-4",
      slug: "bosch-bms500-wall-single-48000-cfg-4",
      modelId: "bosch-bms500-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-48000-cfg-5",
      slug: "bosch-bms500-wall-single-48000-cfg-5",
      modelId: "bosch-bms500-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.35,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms500-wall-single-20000-cfg-1",
      slug: "bosch-bms500-wall-single-20000-cfg-1",
      modelId: "bosch-bms500-wall-single-20000",
      outdoorUnitId: "bosch-bms500-aas024-1csxhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-20000-cfg-1",
      slug: "bosch-bms-series-wall-single-20000-cfg-1",
      modelId: "bosch-bms-series-wall-single-20000",
      outdoorUnitId: "bosch-bms500-aas024-1csxrc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-1",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-1",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-2",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-2",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-3",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-3",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-4",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-4",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-5",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-5",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-6",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-6",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-7",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-7",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-8",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-8",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-9",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-9",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-10",
      slug: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-10",
      modelId: "bosch-ids-premium-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-1",
      slug: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-1",
      modelId: "bosch-ids-premium-lgwp-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-2",
      slug: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-2",
      modelId: "bosch-ids-premium-lgwp-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-3",
      slug: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-3",
      modelId: "bosch-ids-premium-lgwp-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-4",
      slug: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-4",
      modelId: "bosch-ids-premium-lgwp-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-5",
      slug: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-5",
      modelId: "bosch-ids-premium-lgwp-central-ducted-36000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-1",
      slug: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-1",
      modelId: "bosch-ids-premium-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-2",
      slug: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-2",
      modelId: "bosch-ids-premium-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-3",
      slug: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-3",
      modelId: "bosch-ids-premium-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-4",
      slug: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-4",
      modelId: "bosch-ids-premium-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-5",
      slug: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-5",
      modelId: "bosch-ids-premium-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-6",
      slug: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-6",
      modelId: "bosch-ids-premium-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-7",
      slug: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-7",
      modelId: "bosch-ids-premium-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-1",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-1",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-2",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-2",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-3",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-3",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-4",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-4",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-5",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-5",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-6",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-6",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-7",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-7",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-8",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-8",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-9",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-9",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-10",
      slug: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-10",
      modelId: "bosch-ids-premium-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-1",
      slug: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-1",
      modelId: "bosch-ids-premium-lgwp-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-2",
      slug: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-2",
      modelId: "bosch-ids-premium-lgwp-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-3",
      slug: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-3",
      modelId: "bosch-ids-premium-lgwp-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-4",
      slug: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-4",
      modelId: "bosch-ids-premium-lgwp-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-5",
      slug: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-5",
      modelId: "bosch-ids-premium-lgwp-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60rtb-m20s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-48000-cfg-1",
      slug: "bosch-ids-ultra-central-ducted-48000-cfg-1",
      modelId: "bosch-ids-ultra-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48500,
      coolingCapacityMaxBtu: 48500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-48000-cfg-2",
      slug: "bosch-ids-ultra-central-ducted-48000-cfg-2",
      modelId: "bosch-ids-ultra-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-48000-cfg-3",
      slug: "bosch-ids-ultra-central-ducted-48000-cfg-3",
      modelId: "bosch-ids-ultra-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-48000-cfg-4",
      slug: "bosch-ids-ultra-central-ducted-48000-cfg-4",
      modelId: "bosch-ids-ultra-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-48000-cfg-5",
      slug: "bosch-ids-ultra-central-ducted-48000-cfg-5",
      modelId: "bosch-ids-ultra-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-48000-cfg-6",
      slug: "bosch-ids-ultra-central-ducted-48000-cfg-6",
      modelId: "bosch-ids-ultra-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-48000-cfg-7",
      slug: "bosch-ids-ultra-central-ducted-48000-cfg-7",
      modelId: "bosch-ids-ultra-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000-cfg-1",
      slug: "bosch-ids-ultra-central-ducted-42000-cfg-1",
      modelId: "bosch-ids-ultra-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000-cfg-2",
      slug: "bosch-ids-ultra-central-ducted-42000-cfg-2",
      modelId: "bosch-ids-ultra-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000-cfg-3",
      slug: "bosch-ids-ultra-central-ducted-42000-cfg-3",
      modelId: "bosch-ids-ultra-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000-cfg-4",
      slug: "bosch-ids-ultra-central-ducted-42000-cfg-4",
      modelId: "bosch-ids-ultra-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000-cfg-5",
      slug: "bosch-ids-ultra-central-ducted-42000-cfg-5",
      modelId: "bosch-ids-ultra-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000-cfg-6",
      slug: "bosch-ids-ultra-central-ducted-42000-cfg-6",
      modelId: "bosch-ids-ultra-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000-cfg-7",
      slug: "bosch-ids-ultra-central-ducted-42000-cfg-7",
      modelId: "bosch-ids-ultra-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-42000-cfg-8",
      slug: "bosch-ids-ultra-central-ducted-42000-cfg-8",
      modelId: "bosch-ids-ultra-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60mtb-m19e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-1",
      slug: "bosch-bms-series-wall-single-9000-cfg-1",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-2",
      slug: "bosch-bms-series-wall-single-9000-cfg-2",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-3",
      slug: "bosch-bms-series-wall-single-9000-cfg-3",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-4",
      slug: "bosch-bms-series-wall-single-9000-cfg-4",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-5",
      slug: "bosch-bms-series-wall-single-9000-cfg-5",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.8,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-6",
      slug: "bosch-bms-series-wall-single-9000-cfg-6",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.1,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-7",
      slug: "bosch-bms-series-wall-single-9000-cfg-7",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-8",
      slug: "bosch-bms-series-wall-single-9000-cfg-8",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-9000-cfg-9",
      slug: "bosch-bms-series-wall-single-9000-cfg-9",
      modelId: "bosch-bms-series-wall-single-9000",
      outdoorUnitId: "bosch-bms500-aas009-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.8,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-1",
      slug: "bosch-bms-series-wall-single-18000-cfg-1",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-2",
      slug: "bosch-bms-series-wall-single-18000-cfg-2",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-3",
      slug: "bosch-bms-series-wall-single-18000-cfg-3",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-4",
      slug: "bosch-bms-series-wall-single-18000-cfg-4",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-5",
      slug: "bosch-bms-series-wall-single-18000-cfg-5",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-6",
      slug: "bosch-bms-series-wall-single-18000-cfg-6",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-7",
      slug: "bosch-bms-series-wall-single-18000-cfg-7",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aas018-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-8",
      slug: "bosch-bms-series-wall-single-18000-cfg-8",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 25,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-9",
      slug: "bosch-bms-series-wall-single-18000-cfg-9",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-10",
      slug: "bosch-bms-series-wall-single-18000-cfg-10",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-11",
      slug: "bosch-bms-series-wall-single-18000-cfg-11",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-12",
      slug: "bosch-bms-series-wall-single-18000-cfg-12",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-18000-cfg-13",
      slug: "bosch-bms-series-wall-single-18000-cfg-13",
      modelId: "bosch-bms-series-wall-single-18000",
      outdoorUnitId: "bosch-bms500-aam018-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.55,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-15000-cfg-1",
      slug: "bosch-bms-series-wall-single-15000-cfg-1",
      modelId: "bosch-bms-series-wall-single-15000",
      outdoorUnitId: "bosch-bms500-aas018-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-1",
      slug: "bosch-bms-series-wall-single-24000-cfg-1",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-2",
      slug: "bosch-bms-series-wall-single-24000-cfg-2",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-3",
      slug: "bosch-bms-series-wall-single-24000-cfg-3",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-4",
      slug: "bosch-bms-series-wall-single-24000-cfg-4",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-5",
      slug: "bosch-bms-series-wall-single-24000-cfg-5",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-6",
      slug: "bosch-bms-series-wall-single-24000-cfg-6",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aas024-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-7",
      slug: "bosch-bms-series-wall-single-24000-cfg-7",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aam027-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-8",
      slug: "bosch-bms-series-wall-single-24000-cfg-8",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aam027-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 25,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-9",
      slug: "bosch-bms-series-wall-single-24000-cfg-9",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aam027-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-24000-cfg-10",
      slug: "bosch-bms-series-wall-single-24000-cfg-10",
      modelId: "bosch-bms-series-wall-single-24000",
      outdoorUnitId: "bosch-bms500-aam027-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26800,
      coolingCapacityMaxBtu: 26800,
      seer2: 23,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-30000-cfg-1",
      slug: "bosch-bms-series-wall-single-30000-cfg-1",
      modelId: "bosch-bms-series-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aas030-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-30000-cfg-2",
      slug: "bosch-bms-series-wall-single-30000-cfg-2",
      modelId: "bosch-bms-series-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-30000-cfg-3",
      slug: "bosch-bms-series-wall-single-30000-cfg-3",
      modelId: "bosch-bms-series-wall-single-30000",
      outdoorUnitId: "bosch-bms500-aam027-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000-cfg-1",
      slug: "bosch-bms-series-wall-single-36000-cfg-1",
      modelId: "bosch-bms-series-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aas036-1csxld",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000-cfg-2",
      slug: "bosch-bms-series-wall-single-36000-cfg-2",
      modelId: "bosch-bms-series-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aas036-1csxld",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000-cfg-3",
      slug: "bosch-bms-series-wall-single-36000-cfg-3",
      modelId: "bosch-bms-series-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000-cfg-4",
      slug: "bosch-bms-series-wall-single-36000-cfg-4",
      modelId: "bosch-bms-series-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000-cfg-5",
      slug: "bosch-bms-series-wall-single-36000-cfg-5",
      modelId: "bosch-bms-series-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.2,
      hspf2: 10.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000-cfg-6",
      slug: "bosch-bms-series-wall-single-36000-cfg-6",
      modelId: "bosch-bms-series-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 24,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000-cfg-7",
      slug: "bosch-bms-series-wall-single-36000-cfg-7",
      modelId: "bosch-bms-series-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-36000-cfg-8",
      slug: "bosch-bms-series-wall-single-36000-cfg-8",
      modelId: "bosch-bms-series-wall-single-36000",
      outdoorUnitId: "bosch-bms500-aam036-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 22,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-48000-cfg-1",
      slug: "bosch-bms-series-wall-single-48000-cfg-1",
      modelId: "bosch-bms-series-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aas048-1csxld",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-48000-cfg-2",
      slug: "bosch-bms-series-wall-single-48000-cfg-2",
      modelId: "bosch-bms-series-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aas048-1csxld",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-48000-cfg-3",
      slug: "bosch-bms-series-wall-single-48000-cfg-3",
      modelId: "bosch-bms-series-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-48000-cfg-4",
      slug: "bosch-bms-series-wall-single-48000-cfg-4",
      modelId: "bosch-bms-series-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-48000-cfg-5",
      slug: "bosch-bms-series-wall-single-48000-cfg-5",
      modelId: "bosch-bms-series-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxhd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 21.7,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-48000-cfg-6",
      slug: "bosch-bms-series-wall-single-48000-cfg-6",
      modelId: "bosch-bms-series-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 24,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-48000-cfg-7",
      slug: "bosch-bms-series-wall-single-48000-cfg-7",
      modelId: "bosch-bms-series-wall-single-48000",
      outdoorUnitId: "bosch-bms500-aam048-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 22.2,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-wall-single-42000-cfg-1",
      slug: "bosch-bms-series-wall-single-42000-cfg-1",
      modelId: "bosch-bms-series-wall-single-42000",
      outdoorUnitId: "bosch-bms500-aam048-1csxrd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-2",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-2",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-3",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-3",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-4",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-4",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-5",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-5",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-6",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-6",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-7",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-7",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-8",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-8",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-9",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-9",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-10",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-10",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-11",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-11",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-12",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-12",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-13",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-13",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-14",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-14",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-15",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-15",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-16",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-16",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-17",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-17",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-18",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-18",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-19",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-19",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-20",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-20",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-21",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-21",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-22",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-22",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-23",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-23",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-24",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-24",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-24000-cfg-25",
      slug: "bosch-ids-light-lgwp-central-ducted-24000-cfg-25",
      modelId: "bosch-ids-light-lgwp-central-ducted-24000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-2",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-2",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-3",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-3",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-4",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-4",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-5",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-5",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-6",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-6",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-7",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-7",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-8",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-8",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-9",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-9",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-10",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-10",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-11",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-11",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-12",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-12",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-13",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-13",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-48000-cfg-14",
      slug: "bosch-ids-light-lgwp-central-ducted-48000-cfg-14",
      modelId: "bosch-ids-light-lgwp-central-ducted-48000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-36000-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-36000-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted-36000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-60000-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-60000-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted-60000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-42000-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-42000-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-42000-cfg-2",
      slug: "bosch-ids-light-lgwp-central-ducted-42000-cfg-2",
      modelId: "bosch-ids-light-lgwp-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-42000-cfg-3",
      slug: "bosch-ids-light-lgwp-central-ducted-42000-cfg-3",
      modelId: "bosch-ids-light-lgwp-central-ducted-42000",
      outdoorUnitId: "bosch-bova-60rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-36000-cfg-1",
      slug: "bosch-idp-premium-lgwp-central-ducted-36000-cfg-1",
      modelId: "bosch-idp-premium-lgwp-central-ducted-36000",
      outdoorUnitId: "bosch-bpba-36rcb-m18s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-60000-cfg-1",
      slug: "bosch-idp-premium-lgwp-central-ducted-60000-cfg-1",
      modelId: "bosch-idp-premium-lgwp-central-ducted-60000",
      outdoorUnitId: "bosch-bpba-60rcb-m18s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-plus-lgwp-central-ducted-60000-cfg-1",
      slug: "bosch-idp-plus-lgwp-central-ducted-60000-cfg-1",
      modelId: "bosch-idp-plus-lgwp-central-ducted-60000",
      outdoorUnitId: "bosch-bpha-60rcb-m16s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-18000-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-18000-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted-18000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-18000-cfg-2",
      slug: "bosch-ids-light-lgwp-central-ducted-18000-cfg-2",
      modelId: "bosch-ids-light-lgwp-central-ducted-18000",
      outdoorUnitId: "bosch-bova-24rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-30000-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-30000-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-30000-cfg-2",
      slug: "bosch-ids-light-lgwp-central-ducted-30000-cfg-2",
      modelId: "bosch-ids-light-lgwp-central-ducted-30000",
      outdoorUnitId: "bosch-bova-36rxb-m15s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-48000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-60000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-36000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-9000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-9000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-12000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-18000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-42000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-42000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-48000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-24000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-30000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-central-ducted-36000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-standard-wall-single-30000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-12000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-9000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-9000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 1.59,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-9000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-12000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-12000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9900,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-12000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-18000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-6000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-15000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-15000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms500-wall-single-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 55000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 53000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 53000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-9000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-18000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-15000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.54,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-wall-single-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-idp-premium-lgwp-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-idp-premium-lgwp-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-idp-plus-lgwp-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    }
  ],
  certifications: [],
  warranties: [],
  priceObservations: [],
  sources: [],
  editorial: [],
};
