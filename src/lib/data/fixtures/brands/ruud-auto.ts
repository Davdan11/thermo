import type { BrandDataset } from "../../types";

export const ruudDataset: BrandDataset = {
  brand: {
    id: "ruud",
    slug: "ruud",
    name: "RUUD",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ruud-standard",
      slug: "ruud-standard",
      name: "Standard",
      brandId: "ruud",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series",
      slug: "ruud-ultra-series",
      name: "ULTRA SERIES",
      brandId: "ruud",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus",
      slug: "ruud-classic-plus",
      name: "Classic Plus",
      brandId: "ruud",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus",
      slug: "ruud-achiever-plus",
      name: "ACHIEVER PLUS",
      brandId: "ruud",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus",
      slug: "ruud-f-series-plus",
      name: "F - SERIES PLUS",
      brandId: "ruud",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series",
      slug: "ruud-f-series",
      name: "F Series",
      brandId: "ruud",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series",
      slug: "ruud-k-series",
      name: "K-SERIES",
      brandId: "ruud",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-acheiver",
      slug: "ruud-floating-air-acheiver",
      name: "Floating Air Acheiver",
      brandId: "ruud",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus",
      slug: "ruud-floating-air-achiever-plus",
      name: "Floating Air Achiever Plus",
      brandId: "ruud",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra",
      slug: "ruud-ultra",
      name: "Ultra",
      brandId: "ruud",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra",
      slug: "ruud-floating-air-ultra",
      name: "Floating Air Ultra",
      brandId: "ruud",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ruud-standard-wall-single-36000",
      slug: "ruud-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 21400,
      heatingCapacity5FMaxBtu: 37400,
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
      id: "ruud-standard-wall-single-48000",
      slug: "ruud-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 31400,
      heatingCapacity5FMaxBtu: 46500,
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
      id: "ruud-standard-central-ducted-24000",
      slug: "ruud-standard-central-ducted-24000",
      name: "Standard 24 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
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
      id: "ruud-standard-central-ducted-36000",
      slug: "ruud-standard-central-ducted-36000",
      name: "Standard 36 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 36600,
      heatingCapacity5FMaxBtu: 37400,
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
      id: "ruud-standard-central-ducted-48000",
      slug: "ruud-standard-central-ducted-48000",
      name: "Standard 48 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 40000,
      heatingCapacity5FMaxBtu: 51500,
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
      id: "ruud-standard-wall-single-24000",
      slug: "ruud-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15300,
      heatingCapacity5FMaxBtu: 24200,
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
      id: "ruud-standard-wall-single-30000",
      slug: "ruud-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 18900,
      heatingCapacity5FMaxBtu: 25600,
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
      id: "ruud-standard-wall-single-9000",
      slug: "ruud-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6200,
      heatingCapacity5FMaxBtu: 7800,
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
      id: "ruud-standard-wall-single-12000",
      slug: "ruud-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8800,
      heatingCapacity5FMaxBtu: 10700,
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
      id: "ruud-standard-wall-single-18000",
      slug: "ruud-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11200,
      heatingCapacity5FMaxBtu: 15800,
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
      id: "ruud-standard-wall-single-15000",
      slug: "ruud-standard-wall-single-15000",
      name: "Standard 15 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 15k",
      normalizedModelNumber: "standard-15000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 15000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11200,
      heatingCapacity5FMaxBtu: 11600,
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
      id: "ruud-standard-wall-single-20000",
      slug: "ruud-standard-wall-single-20000",
      name: "Standard 20 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 20k",
      normalizedModelNumber: "standard-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 18000,
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
      id: "ruud-standard-wall-single-42000",
      slug: "ruud-standard-wall-single-42000",
      name: "Standard 42 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 27800,
      heatingCapacity5FMaxBtu: 41500,
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
      id: "ruud-ultra-series-central-ducted-36000",
      slug: "ruud-ultra-series-central-ducted-36000",
      name: "ULTRA SERIES 36 000 BTU",
      seriesId: "ruud-ultra-series",
      brandId: "ruud",
      modelNumber: "ULTRA SERIES 36k",
      normalizedModelNumber: "ultra-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 23400,
      heatingCapacity5FMaxBtu: 41000,
      seer2Min: 17,
      seer2Max: 21,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000",
      slug: "ruud-standard-central-ducted-42000",
      name: "Standard 42 000 BTU",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard 42k",
      normalizedModelNumber: "standard-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 44500,
      heatingCapacity5FMaxBtu: 45000,
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
      id: "ruud-classic-plus-wall-single-18000",
      slug: "ruud-classic-plus-wall-single-18000",
      name: "Classic Plus 18 000 BTU",
      seriesId: "ruud-classic-plus",
      brandId: "ruud",
      modelNumber: "Classic Plus 18k",
      normalizedModelNumber: "classic-plus-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 14200,
      heatingCapacity5FMaxBtu: 14200,
      seer2Min: 21.5,
      seer2Max: 21.5,
      hspf2Min: 9.6,
      hspf2Max: 9.6,
      cop5FMin: 1.84,
      cop5FMax: 1.84,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single-20000",
      slug: "ruud-classic-plus-wall-single-20000",
      name: "Classic Plus 20 000 BTU",
      seriesId: "ruud-classic-plus",
      brandId: "ruud",
      modelNumber: "Classic Plus 20k",
      normalizedModelNumber: "classic-plus-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2.06,
      cop5FMax: 2.06,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000",
      slug: "ruud-achiever-plus-central-ducted-36000",
      name: "ACHIEVER PLUS 36 000 BTU",
      seriesId: "ruud-achiever-plus",
      brandId: "ruud",
      modelNumber: "ACHIEVER PLUS 36k",
      normalizedModelNumber: "achiever-plus-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 23800,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 8.5,
      cop5FMin: 2.2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000",
      slug: "ruud-f-series-plus-central-ducted-36000",
      name: "F - SERIES PLUS 36 000 BTU",
      seriesId: "ruud-f-series-plus",
      brandId: "ruud",
      modelNumber: "F - SERIES PLUS 36k",
      normalizedModelNumber: "f-series-plus-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 22800,
      heatingCapacity5FMaxBtu: 31600,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 2.3,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000",
      slug: "ruud-f-series-central-ducted-60000",
      name: "F Series 60 000 BTU",
      seriesId: "ruud-f-series",
      brandId: "ruud",
      modelNumber: "F Series 60k",
      normalizedModelNumber: "f-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 36000,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000",
      slug: "ruud-ultra-series-central-ducted-60000",
      name: "ULTRA SERIES 60 000 BTU",
      seriesId: "ruud-ultra-series",
      brandId: "ruud",
      modelNumber: "ULTRA SERIES 60k",
      normalizedModelNumber: "ultra-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55500,
      heatingCapacity5FMinBtu: 50000,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000",
      slug: "ruud-k-series-central-ducted-24000",
      name: "K-SERIES 24 000 BTU",
      seriesId: "ruud-k-series",
      brandId: "ruud",
      modelNumber: "K-SERIES 24k",
      normalizedModelNumber: "k-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      heatingCapacity5FMinBtu: 15200,
      heatingCapacity5FMaxBtu: 19100,
      seer2Min: 17,
      seer2Max: 17,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000",
      slug: "ruud-f-series-central-ducted-48000",
      name: "F Series 48 000 BTU",
      seriesId: "ruud-f-series",
      brandId: "ruud",
      modelNumber: "F Series 48k",
      normalizedModelNumber: "f-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      heatingCapacity5FMinBtu: 32200,
      heatingCapacity5FMaxBtu: 33200,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-24000",
      slug: "ruud-ultra-series-central-ducted-24000",
      name: "ULTRA SERIES 24 000 BTU",
      seriesId: "ruud-ultra-series",
      brandId: "ruud",
      modelNumber: "ULTRA SERIES 24k",
      normalizedModelNumber: "ultra-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      heatingCapacity5FMinBtu: 15100,
      heatingCapacity5FMaxBtu: 15300,
      seer2Min: 17,
      seer2Max: 17,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000",
      slug: "ruud-ultra-series-central-ducted-48000",
      name: "ULTRA SERIES 48 000 BTU",
      seriesId: "ruud-ultra-series",
      brandId: "ruud",
      modelNumber: "ULTRA SERIES 48k",
      normalizedModelNumber: "ultra-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 40000,
      heatingCapacity5FMaxBtu: 43000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-acheiver-wall-single-9000",
      slug: "ruud-floating-air-acheiver-wall-single-9000",
      name: "Floating Air Acheiver 9 000 BTU",
      seriesId: "ruud-floating-air-acheiver",
      brandId: "ruud",
      modelNumber: "Floating Air Acheiver 9k",
      normalizedModelNumber: "floating-air-acheiver-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 6800,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-acheiver-wall-single-18000",
      slug: "ruud-floating-air-acheiver-wall-single-18000",
      name: "Floating Air Acheiver 18 000 BTU",
      seriesId: "ruud-floating-air-acheiver",
      brandId: "ruud",
      modelNumber: "Floating Air Acheiver 18k",
      normalizedModelNumber: "floating-air-acheiver-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 14800,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 9.8,
      hspf2Max: 9.8,
      cop5FMin: 2.5,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-9000",
      slug: "ruud-floating-air-achiever-plus-wall-single-9000",
      name: "Floating Air Achiever Plus 9 000 BTU",
      seriesId: "ruud-floating-air-achiever-plus",
      brandId: "ruud",
      modelNumber: "Floating Air Achiever Plus 9k",
      normalizedModelNumber: "floating-air-achiever-plus-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 9500,
      seer2Min: 23,
      seer2Max: 25,
      hspf2Min: 10,
      hspf2Max: 11,
      cop5FMin: 1.9,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-12000",
      slug: "ruud-floating-air-achiever-plus-wall-single-12000",
      name: "Floating Air Achiever Plus 12 000 BTU",
      seriesId: "ruud-floating-air-achiever-plus",
      brandId: "ruud",
      modelNumber: "Floating Air Achiever Plus 12k",
      normalizedModelNumber: "floating-air-achiever-plus-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9300,
      heatingCapacity5FMaxBtu: 10800,
      seer2Min: 22,
      seer2Max: 23,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-18000",
      slug: "ruud-floating-air-achiever-plus-wall-single-18000",
      name: "Floating Air Achiever Plus 18 000 BTU",
      seriesId: "ruud-floating-air-achiever-plus",
      brandId: "ruud",
      modelNumber: "Floating Air Achiever Plus 18k",
      normalizedModelNumber: "floating-air-achiever-plus-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 18000,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-24000",
      slug: "ruud-floating-air-achiever-plus-wall-single-24000",
      name: "Floating Air Achiever Plus 24 000 BTU",
      seriesId: "ruud-floating-air-achiever-plus",
      brandId: "ruud",
      modelNumber: "Floating Air Achiever Plus 24k",
      normalizedModelNumber: "floating-air-achiever-plus-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 22000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 22.5,
      seer2Max: 22.5,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000",
      slug: "ruud-ultra-central-ducted-36000",
      name: "Ultra 36 000 BTU",
      seriesId: "ruud-ultra",
      brandId: "ruud",
      modelNumber: "Ultra 36k",
      normalizedModelNumber: "ultra-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-48000",
      slug: "ruud-ultra-central-ducted-48000",
      name: "Ultra 48 000 BTU",
      seriesId: "ruud-ultra",
      brandId: "ruud",
      modelNumber: "Ultra 48k",
      normalizedModelNumber: "ultra-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      heatingCapacity5FMinBtu: 42000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000",
      slug: "ruud-ultra-series-central-ducted-30000",
      name: "ULTRA SERIES 30 000 BTU",
      seriesId: "ruud-ultra-series",
      brandId: "ruud",
      modelNumber: "ULTRA SERIES 30k",
      normalizedModelNumber: "ultra-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 31600,
      coolingCapacityMaxBtu: 32800,
      heatingCapacity5FMinBtu: 28000,
      heatingCapacity5FMaxBtu: 29800,
      seer2Min: 18,
      seer2Max: 20,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000",
      slug: "ruud-ultra-series-central-ducted-42000",
      name: "ULTRA SERIES 42 000 BTU",
      seriesId: "ruud-ultra-series",
      brandId: "ruud",
      modelNumber: "ULTRA SERIES 42k",
      normalizedModelNumber: "ultra-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 43500,
      heatingCapacity5FMinBtu: 35600,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000",
      slug: "ruud-ultra-series-central-ducted-20000",
      name: "ULTRA SERIES 20 000 BTU",
      seriesId: "ruud-ultra-series",
      brandId: "ruud",
      modelNumber: "ULTRA SERIES 20k",
      normalizedModelNumber: "ultra-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 21200,
      heatingCapacity5FMinBtu: 17900,
      heatingCapacity5FMaxBtu: 18300,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000",
      slug: "ruud-k-series-central-ducted-20000",
      name: "K-SERIES 20 000 BTU",
      seriesId: "ruud-k-series",
      brandId: "ruud",
      modelNumber: "K-SERIES 20k",
      normalizedModelNumber: "k-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      heatingCapacity5FMinBtu: 18100,
      heatingCapacity5FMaxBtu: 18200,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000",
      slug: "ruud-k-series-central-ducted-42000",
      name: "K-SERIES 42 000 BTU",
      seriesId: "ruud-k-series",
      brandId: "ruud",
      modelNumber: "K-SERIES 42k",
      normalizedModelNumber: "k-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      heatingCapacity5FMinBtu: 35800,
      heatingCapacity5FMaxBtu: 36200,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000",
      slug: "ruud-k-series-central-ducted-48000",
      name: "K-SERIES 48 000 BTU",
      seriesId: "ruud-k-series",
      brandId: "ruud",
      modelNumber: "K-SERIES 48k",
      normalizedModelNumber: "k-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 41500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000",
      slug: "ruud-k-series-central-ducted-30000",
      name: "K-SERIES 30 000 BTU",
      seriesId: "ruud-k-series",
      brandId: "ruud",
      modelNumber: "K-SERIES 30k",
      normalizedModelNumber: "k-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      heatingCapacity5FMinBtu: 29200,
      heatingCapacity5FMaxBtu: 29800,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-24000",
      slug: "ruud-f-series-plus-central-ducted-24000",
      name: "F-Series Plus 24 000 BTU",
      seriesId: "ruud-f-series-plus",
      brandId: "ruud",
      modelNumber: "F-Series Plus 24k",
      normalizedModelNumber: "f-series-plus-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      heatingCapacity5FMinBtu: 15800,
      heatingCapacity5FMaxBtu: 15800,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-42000",
      slug: "ruud-f-series-plus-central-ducted-42000",
      name: "F-Series Plus 42 000 BTU",
      seriesId: "ruud-f-series-plus",
      brandId: "ruud",
      modelNumber: "F-Series Plus 42k",
      normalizedModelNumber: "f-series-plus-42000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 30400,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-60000",
      slug: "ruud-f-series-plus-central-ducted-60000",
      name: "F-Series Plus 60 000 BTU",
      seriesId: "ruud-f-series-plus",
      brandId: "ruud",
      modelNumber: "F-Series Plus 60k",
      normalizedModelNumber: "f-series-plus-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      heatingCapacity5FMinBtu: 36800,
      heatingCapacity5FMaxBtu: 36800,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 2.2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-12000",
      slug: "ruud-floating-air-ultra-wall-single-12000",
      name: "Floating Air Ultra 12 000 BTU",
      seriesId: "ruud-floating-air-ultra",
      brandId: "ruud",
      modelNumber: "Floating Air Ultra 12k",
      normalizedModelNumber: "floating-air-ultra-12000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8700,
      heatingCapacity5FMaxBtu: 8900,
      seer2Min: 19.5,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-9000",
      slug: "ruud-floating-air-ultra-wall-single-9000",
      name: "Floating Air Ultra 9 000 BTU",
      seriesId: "ruud-floating-air-ultra",
      brandId: "ruud",
      modelNumber: "Floating Air Ultra 9k",
      normalizedModelNumber: "floating-air-ultra-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 8900,
      heatingCapacity5FMaxBtu: 8900,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-18000",
      slug: "ruud-floating-air-ultra-wall-single-18000",
      name: "Floating Air Ultra 18 000 BTU",
      seriesId: "ruud-floating-air-ultra",
      brandId: "ruud",
      modelNumber: "Floating Air Ultra 18k",
      normalizedModelNumber: "floating-air-ultra-18000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 14100,
      seer2Min: 19,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-24000",
      slug: "ruud-floating-air-ultra-wall-single-24000",
      name: "Floating Air Ultra 24 000 BTU",
      seriesId: "ruud-floating-air-ultra",
      brandId: "ruud",
      modelNumber: "Floating Air Ultra 24k",
      normalizedModelNumber: "floating-air-ultra-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 18200,
      heatingCapacity5FMaxBtu: 19100,
      seer2Min: 19,
      seer2Max: 20,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-30000",
      slug: "ruud-floating-air-ultra-wall-single-30000",
      name: "Floating Air Ultra 30 000 BTU",
      seriesId: "ruud-floating-air-ultra",
      brandId: "ruud",
      modelNumber: "Floating Air Ultra 30k",
      normalizedModelNumber: "floating-air-ultra-30000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 25600,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 18.5,
      seer2Max: 18.5,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-36000",
      slug: "ruud-floating-air-ultra-wall-single-36000",
      name: "Floating Air Ultra 36 000 BTU",
      seriesId: "ruud-floating-air-ultra",
      brandId: "ruud",
      modelNumber: "Floating Air Ultra 36k",
      normalizedModelNumber: "floating-air-ultra-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 25600,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 19.5,
      seer2Max: 19.5,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ruud-up2036bjv",
      modelNumber: "UP2036BJV",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rp1736hjvxa",
      modelNumber: "RP1736HJVXA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-romh36fxzhj",
      modelNumber: "ROMH36FXZHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-romh36afxzj",
      modelNumber: "ROMH36AFXZJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh36vgsn",
      modelNumber: "ROSH36VGSN",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16az36ajvua",
      modelNumber: "RD16AZ36AJVUA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro4hfz36aj1h",
      modelNumber: "RO4HFZ36AJ1H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz36aj8s",
      modelNumber: "RO1HHZ36AJ8S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up2048bjv",
      modelNumber: "UP2048BJV",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rp1748hjvxa",
      modelNumber: "RP1748HJVXA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh48vgsn",
      modelNumber: "ROSH48VGSN",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up18az60ajvc",
      modelNumber: "UP18AZ60AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hgz48aj8s",
      modelNumber: "RO1HGZ48AJ8S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16az48ajvua",
      modelNumber: "RD16AZ48AJVUA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16az48ajhua",
      modelNumber: "RD16AZ48AJHUA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up2024bjv",
      modelNumber: "UP2024BJV",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up18az24ajvc",
      modelNumber: "UP18AZ24AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up19ay60ajvc",
      modelNumber: "UP19AY60AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rp1724hjvxa",
      modelNumber: "RP1724HJVXA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh24asj",
      modelNumber: "ROSH24ASJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh24vgsn",
      modelNumber: "ROSH24VGSN",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz24aj3s",
      modelNumber: "RO1HHZ24AJ3S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz24aj8s",
      modelNumber: "RO1HHZ24AJ8S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16az24ajvua",
      modelNumber: "RD16AZ24AJVUA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fshsr24b3d",
      modelNumber: "FSHSR24B3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rp1730hjvxa",
      modelNumber: "RP1730HJVXA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh30ahxhj",
      modelNumber: "ROSH30AHXHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh30vgsn",
      modelNumber: "ROSH30VGSN",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz30aj2h",
      modelNumber: "RO1HFZ30AJ2H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz30aj3s",
      modelNumber: "RO1HHZ30AJ3S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz36aj3s",
      modelNumber: "RO1HHZ36AJ3S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz30aj8s",
      modelNumber: "RO1HHZ30AJ8S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16az30ajvua",
      modelNumber: "RD16AZ30AJVUA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16az30ajhua",
      modelNumber: "RD16AZ30AJHUA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16az36ajhua",
      modelNumber: "RD16AZ36AJHUA",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16ay36ajvc",
      modelNumber: "RD16AY36AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh09afwj",
      modelNumber: "ROSH09AFWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh09ahwj",
      modelNumber: "ROSH09AHWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh09ahhj",
      modelNumber: "ROSH09AHHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh09affhj",
      modelNumber: "ROSH09AFFHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh09affj",
      modelNumber: "ROSH09AFFJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh09afcj",
      modelNumber: "ROSH09AFCJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh09bfwj",
      modelNumber: "ROSH09BFWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz09aj2s",
      modelNumber: "RO1HFZ09AJ2S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz09aj2h",
      modelNumber: "RO1HFZ09AJ2H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz09aj2h",
      modelNumber: "RO1HHZ09AJ2H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hgz09aj1s",
      modelNumber: "RO1HGZ09AJ1S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hgz09aj1h",
      modelNumber: "RO1HGZ09AJ1H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz09aj3s",
      modelNumber: "RO1HHZ09AJ3S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz09aj2s",
      modelNumber: "RO1HHZ09AJ2S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz09aj8s",
      modelNumber: "RO1HHZ09AJ8S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh12afwj",
      modelNumber: "ROSH12AFWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh12ahwj",
      modelNumber: "ROSH12AHWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh12ahhj",
      modelNumber: "ROSH12AHHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh12affhj",
      modelNumber: "ROSH12AFFHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh12affj",
      modelNumber: "ROSH12AFFJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh12afcj",
      modelNumber: "ROSH12AFCJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh12bfwj",
      modelNumber: "ROSH12BFWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz12aj2s",
      modelNumber: "RO1HFZ12AJ2S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz12aj2h",
      modelNumber: "RO1HFZ12AJ2H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hgz12aj1s",
      modelNumber: "RO1HGZ12AJ1S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hgz12aj1h",
      modelNumber: "RO1HGZ12AJ1H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz12aj3s",
      modelNumber: "RO1HHZ12AJ3S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz12aj2s",
      modelNumber: "RO1HHZ12AJ2S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz12aj8s",
      modelNumber: "RO1HHZ12AJ8S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fshsr12b1c",
      modelNumber: "FSHSR12B1C",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh18asj",
      modelNumber: "ROSH18ASJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh18axfwj",
      modelNumber: "ROSH18AXFWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh18ahxhj",
      modelNumber: "ROSH18AHXHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh18afcj",
      modelNumber: "ROSH18AFCJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-romh18fxzhj",
      modelNumber: "ROMH18FXZHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh18vgsn",
      modelNumber: "ROSH18VGSN",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz18aj2h",
      modelNumber: "RO1HFZ18AJ2H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz18aj2s",
      modelNumber: "RO1HHZ18AJ2S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz18aj3s",
      modelNumber: "RO1HHZ18AJ3S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz18aj8s",
      modelNumber: "RO1HHZ18AJ8S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh15ahwj",
      modelNumber: "ROSH15AHWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh15ahhj",
      modelNumber: "ROSH15AHHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh15affhj",
      modelNumber: "ROSH15AFFHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh15affj",
      modelNumber: "ROSH15AFFJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz15aj2s",
      modelNumber: "RO1HFZ15AJ2S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz15aj2h",
      modelNumber: "RO1HFZ15AJ2H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hgz15aj1s",
      modelNumber: "RO1HGZ15AJ1S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hgz15aj1h",
      modelNumber: "RO1HGZ15AJ1H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh24axfwj",
      modelNumber: "ROSH24AXFWJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rosh24ahxhj",
      modelNumber: "ROSH24AHXHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-romh24fxzhj",
      modelNumber: "ROMH24FXZHJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hfz24aj2h",
      modelNumber: "RO1HFZ24AJ2H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hhz24aj2s",
      modelNumber: "RO1HHZ24AJ2S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-romh45afxzj",
      modelNumber: "ROMH45AFXZJ",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up18az48ajvc",
      modelNumber: "UP18AZ48AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro1hgz42aj8s",
      modelNumber: "RO1HGZ42AJ8S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro5hfz45aj2s",
      modelNumber: "RO5HFZ45AJ2S",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up18az36ajvc",
      modelNumber: "UP18AZ36AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd17az36aj3n",
      modelNumber: "RD17AZ36AJ3N",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up19ay36ajvc",
      modelNumber: "UP19AY36AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro2hfz18aj1h",
      modelNumber: "RO2HFZ18AJ1H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-ro3hfz24aj1h",
      modelNumber: "RO3HFZ24AJ1H",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd17az60aj3n",
      modelNumber: "RD17AZ60AJ3N",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd17az24aj3n",
      modelNumber: "RD17AZ24AJ3N",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd17az48aj3n",
      modelNumber: "RD17AZ48AJ3N",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-up19ay48ajvc",
      modelNumber: "UP19AY48AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd18ay60ajvc",
      modelNumber: "RD18AY60AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fshsr09b1c",
      modelNumber: "FSHSR09B1C",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fshsr18b3d",
      modelNumber: "FSHSR18B3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphsr09a1c",
      modelNumber: "FPHSR09A1C",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphsr09a3d",
      modelNumber: "FPHSR09A3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphsr12a1c",
      modelNumber: "FPHSR12A1C",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphsr12a3d",
      modelNumber: "FPHSR12A3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphsr18a3d",
      modelNumber: "FPHSR18A3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphsr24a3d",
      modelNumber: "FPHSR24A3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd18ay36ajvc",
      modelNumber: "RD18AY36AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd18ay48ajvc",
      modelNumber: "RD18AY48AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd18ay24ajvc",
      modelNumber: "RD18AY24AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16ay24ajvc",
      modelNumber: "RD16AY24AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16ay48ajvc",
      modelNumber: "RD16AY48AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-rd16ay60ajvc",
      modelNumber: "RD16AY60AJVC",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphfr12a3d",
      modelNumber: "FPHFR12A3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphfr09a3d",
      modelNumber: "FPHFR09A3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphfr18a3d",
      modelNumber: "FPHFR18A3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphfr24a3d",
      modelNumber: "FPHFR24A3D",
      brandId: "ruud",
      refrigerant: null as any,
    },
    {
      id: "ruud-fphfr36a3d",
      modelNumber: "FPHFR36A3D",
      brandId: "ruud",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "ruud-rhmv6021seac",
      modelNumber: "RHMV6021SEAC",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmv3621mnac",
      modelNumber: "RHMV3621MNAC",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-appareils-sans-conduits",
      modelNumber: "Appareils sans conduits",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-appareils-avec-conduits",
      modelNumber: "Appareils avec conduits",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-combinaison-d-appareils-avec-ou-sans-conduits",
      modelNumber: "Combinaison d'appareils avec ou sans conduits",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rich36axcj",
      modelNumber: "RICH36AXCJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmvz3621mnauaj",
      modelNumber: "RHMVZ3621MNAUAJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rimhhz36aj8s",
      modelNumber: "RIMHHZ36AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-righhz36aj8s",
      modelNumber: "RIGHHZ36AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rishhz36aj8s",
      modelNumber: "RISHHZ36AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmv4821snac",
      modelNumber: "RHMV4821SNAC",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rich48axcj",
      modelNumber: "RICH48AXCJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmvz6021seaca",
      modelNumber: "RHMVZ6021SEACA",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rimhgz48aj8s",
      modelNumber: "RIMHGZ48AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-righgz48aj8s",
      modelNumber: "RIGHGZ48AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmvz4821snauaj",
      modelNumber: "RHMVZ4821SNAUAJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rcf2421uea",
      modelNumber: "RCF2421UEA",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcf2421ue",
      modelNumber: "RCF2421UE",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfz2421heaam",
      modelNumber: "RCFZ2421HEAAM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcf6021sea",
      modelNumber: "RCF6021SEA",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfz6021seaam",
      modelNumber: "RCFZ6021SEAAM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfy6021seaam",
      modelNumber: "RCFY6021SEAAM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rhmv2421ueac",
      modelNumber: "RHMV2421UEAC",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmv2421mnac",
      modelNumber: "RHMV2421MNAC",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh24asj",
      modelNumber: "UIWH24ASJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rich24axcj",
      modelNumber: "RICH24AXCJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmvz2421heaca",
      modelNumber: "RHMVZ2421HEACA",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz24aj3s",
      modelNumber: "UIWHHZ24AJ3S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rimhhz24aj8s",
      modelNumber: "RIMHHZ24AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-righhz24aj8s",
      modelNumber: "RIGHHZ24AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rishhz24aj8s",
      modelNumber: "RISHHZ24AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmvz2421mnaunj",
      modelNumber: "RHMVZ2421MNAUNJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fahfw24a3d",
      modelNumber: "FAHFW24A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmv3021snac",
      modelNumber: "RHMV3021SNAC",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh30avfj",
      modelNumber: "UIWH30AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rich30axcj",
      modelNumber: "RICH30AXCJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhfz30aj2s",
      modelNumber: "UIWHFZ30AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz30aj3s",
      modelNumber: "UIWHHZ30AJ3S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz36aj3s",
      modelNumber: "UIWHHZ36AJ3S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rimhhz30aj8s",
      modelNumber: "RIMHHZ30AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-righhz30aj8s",
      modelNumber: "RIGHHZ30AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rishhz30aj8s",
      modelNumber: "RISHHZ30AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rhmvz3021snaunj",
      modelNumber: "RHMVZ3021SNAUNJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rh2vy3617stacn",
      modelNumber: "RH2VY3617STACN",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh09avfj",
      modelNumber: "UIWH09AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh09ahwj",
      modelNumber: "UIWH09AHWJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rifh09avfj",
      modelNumber: "RIFH09AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-ridh09avfj",
      modelNumber: "RIDH09AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rich09avfj",
      modelNumber: "RICH09AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh09bvfj",
      modelNumber: "UIWH09BVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rifhfz09aj2s",
      modelNumber: "RIFHFZ09AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz09aj2s",
      modelNumber: "UIWHHZ09AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhgz09aj1s",
      modelNumber: "UIWHGZ09AJ1S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz09aj3s",
      modelNumber: "UIWHHZ09AJ3S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-richhz09aj8s",
      modelNumber: "RICHHZ09AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh12avfj",
      modelNumber: "UIWH12AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh12ahwj",
      modelNumber: "UIWH12AHWJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rifh12avfj",
      modelNumber: "RIFH12AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-ridh12avfj",
      modelNumber: "RIDH12AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rich12avfj",
      modelNumber: "RICH12AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh12bvfj",
      modelNumber: "UIWH12BVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rifhfz12aj2s",
      modelNumber: "RIFHFZ12AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhgz12aj1s",
      modelNumber: "UIWHGZ12AJ1S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz12aj3s",
      modelNumber: "UIWHHZ12AJ3S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz12aj2s",
      modelNumber: "UIWHHZ12AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-richhz12aj8s",
      modelNumber: "RICHHZ12AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rimhhz12aj8s",
      modelNumber: "RIMHHZ12AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fahsw12a1c",
      modelNumber: "FAHSW12A1C",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh18asj",
      modelNumber: "UIWH18ASJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh18avfj",
      modelNumber: "UIWH18AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-ridh18avfj",
      modelNumber: "RIDH18AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rich18avfj",
      modelNumber: "RICH18AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rich18axcj",
      modelNumber: "RICH18AXCJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhfz18aj2s",
      modelNumber: "UIWHFZ18AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz18aj2s",
      modelNumber: "UIWHHZ18AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz18aj3s",
      modelNumber: "UIWHHZ18AJ3S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-richhz18aj8s",
      modelNumber: "RICHHZ18AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rimhhz18aj8s",
      modelNumber: "RIMHHZ18AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-righhz18aj8s",
      modelNumber: "RIGHHZ18AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rishhz18aj8s",
      modelNumber: "RISHHZ18AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh15ahwj",
      modelNumber: "UIWH15AHWJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rifh15avfj",
      modelNumber: "RIFH15AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rifhfz15aj2s",
      modelNumber: "RIFHFZ15AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhgz15aj1s",
      modelNumber: "UIWHGZ15AJ1S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwh24avfj",
      modelNumber: "UIWH24AVFJ",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhfz24aj2s",
      modelNumber: "UIWHFZ24AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-uiwhhz24aj2s",
      modelNumber: "UIWHHZ24AJ2S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rimhgz42aj8s",
      modelNumber: "RIMHGZ42AJ8S",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rcfz3621mtanm",
      modelNumber: "RCFZ3621MTANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh3vz4821stacn",
      modelNumber: "RH3VZ4821STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfy3621meaam",
      modelNumber: "RCFY3621MEAAM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2tz3621mtana",
      modelNumber: "RH2TZ3621MTANA",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vz3621mtann",
      modelNumber: "RH2VZ3621MTANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vz3621mtana",
      modelNumber: "RH2VZ3621MTANA",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfz3621mtaam",
      modelNumber: "RCFZ3621MTAAM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfz3624mtanm",
      modelNumber: "RCFZ3624MTANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2tz3621mtann",
      modelNumber: "RH2TZ3621MTANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rf2tz3624stans",
      modelNumber: "RF2TZ3624STANS",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rb2tz3621stanm",
      modelNumber: "RB2TZ3621STANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vz6024stann",
      modelNumber: "RH2VZ6024STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2tz6024stann",
      modelNumber: "RH2TZ6024STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfz6024stanm",
      modelNumber: "RCFZ6024STANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh3vz4824stacn",
      modelNumber: "RH3VZ4824STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh3vz6024stacn",
      modelNumber: "RH3VZ6024STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfz2417mtanm",
      modelNumber: "RCFZ2417MTANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh3vz3617stacn",
      modelNumber: "RH3VZ3617STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rb2tz2417stanm",
      modelNumber: "RB2TZ2417STANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rf2tz2421stans",
      modelNumber: "RF2TZ2421STANS",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfz4824mtanm",
      modelNumber: "RCFZ4824MTANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfz4821staam",
      modelNumber: "RCFZ4821STAAM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2tz3617stann",
      modelNumber: "RH2TZ3617STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vz3617stann",
      modelNumber: "RH2VZ3617STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfy4821seaam",
      modelNumber: "RCFY4821SEAAM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vy6024stacn",
      modelNumber: "RH2VY6024STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfy6024stanm",
      modelNumber: "RCFY6024STANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vy6021staca",
      modelNumber: "RH2VY6021STACA",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2ty6024stann",
      modelNumber: "RH2TY6024STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rhmvy6024seacn",
      modelNumber: "RHMVY6024SEACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-fahsw09a1c",
      modelNumber: "FAHSW09A1C",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fahfw18a3d",
      modelNumber: "FAHFW18A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fahfw09a3d",
      modelNumber: "FAHFW09A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fahfw12a3d",
      modelNumber: "FAHFW12A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-rh2vy3621mtacn",
      modelNumber: "RH2VY3621MTACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfy3621mtanm",
      modelNumber: "RCFY3621MTANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfy3624mtanm",
      modelNumber: "RCFY3624MTANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vy3621stacn",
      modelNumber: "RH2VY3621STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2ty3617stann",
      modelNumber: "RH2TY3617STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2ty3621stann",
      modelNumber: "RH2TY3621STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfy4824mtanm",
      modelNumber: "RCFY4824MTANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vy4824stacn",
      modelNumber: "RH2VY4824STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vy4821stacn",
      modelNumber: "RH2VY4821STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2ty4824mtann",
      modelNumber: "RH2TY4824MTANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2ty4824stann",
      modelNumber: "RH2TY4824STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2ty4821stann",
      modelNumber: "RH2TY4821STANN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rcfy2417mtanm",
      modelNumber: "RCFY2417MTANM",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rhmvy2421meacn",
      modelNumber: "RHMVY2421MEACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rf2ty2421stans",
      modelNumber: "RF2TY2421STANS",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-rh2vy2417stacn",
      modelNumber: "RH2VY2417STACN",
      brandId: "ruud",
      type: "central-ducted",
    },
    {
      id: "ruud-fphfd12a3d",
      modelNumber: "FPHFD12A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fphfc12a3d",
      modelNumber: "FPHFC12A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fphfc09a3d",
      modelNumber: "FPHFC09A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fphfc18a3d",
      modelNumber: "FPHFC18A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fphfd18a3d",
      modelNumber: "FPHFD18A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fphfc24a3d",
      modelNumber: "FPHFC24A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fphfd24a3d",
      modelNumber: "FPHFD24A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fphsd36a3d",
      modelNumber: "FPHSD36A3D",
      brandId: "ruud",
      type: "wall-single",
    },
    {
      id: "ruud-fphsc36a3d",
      modelNumber: "FPHSC36A3D",
      brandId: "ruud",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "ruud-standard-wall-single-36000-cfg-1",
      slug: "ruud-standard-wall-single-36000-cfg-1",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rhmv6021seac",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-2",
      slug: "ruud-standard-wall-single-36000-cfg-2",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-rp1736hjvxa",
      indoorUnitId: "ruud-rhmv3621mnac",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-3",
      slug: "ruud-standard-wall-single-36000-cfg-3",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-romh36fxzhj",
      indoorUnitId: "ruud-appareils-sans-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-4",
      slug: "ruud-standard-wall-single-36000-cfg-4",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-romh36fxzhj",
      indoorUnitId: "ruud-appareils-avec-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-5",
      slug: "ruud-standard-wall-single-36000-cfg-5",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-romh36fxzhj",
      indoorUnitId: "ruud-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-6",
      slug: "ruud-standard-wall-single-36000-cfg-6",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-romh36afxzj",
      indoorUnitId: "ruud-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-7",
      slug: "ruud-standard-wall-single-36000-cfg-7",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-rosh36vgsn",
      indoorUnitId: "ruud-rich36axcj",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-8",
      slug: "ruud-standard-wall-single-36000-cfg-8",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-rd16az36ajvua",
      indoorUnitId: "ruud-rhmvz3621mnauaj",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-9",
      slug: "ruud-standard-wall-single-36000-cfg-9",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-ro4hfz36aj1h",
      indoorUnitId: "ruud-appareils-sans-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-10",
      slug: "ruud-standard-wall-single-36000-cfg-10",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-ro4hfz36aj1h",
      indoorUnitId: "ruud-appareils-avec-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-11",
      slug: "ruud-standard-wall-single-36000-cfg-11",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-ro1hhz36aj8s",
      indoorUnitId: "ruud-rimhhz36aj8s",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-12",
      slug: "ruud-standard-wall-single-36000-cfg-12",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-ro1hhz36aj8s",
      indoorUnitId: "ruud-righhz36aj8s",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-36000-cfg-13",
      slug: "ruud-standard-wall-single-36000-cfg-13",
      modelId: "ruud-standard-wall-single-36000",
      outdoorUnitId: "ruud-ro1hhz36aj8s",
      indoorUnitId: "ruud-rishhz36aj8s",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-48000-cfg-1",
      slug: "ruud-standard-wall-single-48000-cfg-1",
      modelId: "ruud-standard-wall-single-48000",
      outdoorUnitId: "ruud-up2048bjv",
      indoorUnitId: "ruud-rhmv6021seac",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-48000-cfg-2",
      slug: "ruud-standard-wall-single-48000-cfg-2",
      modelId: "ruud-standard-wall-single-48000",
      outdoorUnitId: "ruud-rp1748hjvxa",
      indoorUnitId: "ruud-rhmv4821snac",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-48000-cfg-3",
      slug: "ruud-standard-wall-single-48000-cfg-3",
      modelId: "ruud-standard-wall-single-48000",
      outdoorUnitId: "ruud-rosh48vgsn",
      indoorUnitId: "ruud-rich48axcj",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-48000-cfg-4",
      slug: "ruud-standard-wall-single-48000-cfg-4",
      modelId: "ruud-standard-wall-single-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rhmvz6021seaca",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-48000-cfg-5",
      slug: "ruud-standard-wall-single-48000-cfg-5",
      modelId: "ruud-standard-wall-single-48000",
      outdoorUnitId: "ruud-ro1hgz48aj8s",
      indoorUnitId: "ruud-rimhgz48aj8s",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-48000-cfg-6",
      slug: "ruud-standard-wall-single-48000-cfg-6",
      modelId: "ruud-standard-wall-single-48000",
      outdoorUnitId: "ruud-ro1hgz48aj8s",
      indoorUnitId: "ruud-righgz48aj8s",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-48000-cfg-7",
      slug: "ruud-standard-wall-single-48000-cfg-7",
      modelId: "ruud-standard-wall-single-48000",
      outdoorUnitId: "ruud-rd16az48ajvua",
      indoorUnitId: "ruud-rhmvz4821snauaj",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-48000-cfg-8",
      slug: "ruud-standard-wall-single-48000-cfg-8",
      modelId: "ruud-standard-wall-single-48000",
      outdoorUnitId: "ruud-rd16az48ajhua",
      indoorUnitId: "ruud-rhmvz4821snauaj",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-1",
      slug: "ruud-standard-central-ducted-24000-cfg-1",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-2",
      slug: "ruud-standard-central-ducted-24000-cfg-2",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-3",
      slug: "ruud-standard-central-ducted-24000-cfg-3",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-4",
      slug: "ruud-standard-central-ducted-24000-cfg-4",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421ue",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-5",
      slug: "ruud-standard-central-ducted-24000-cfg-5",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-6",
      slug: "ruud-standard-central-ducted-24000-cfg-6",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-7",
      slug: "ruud-standard-central-ducted-24000-cfg-7",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-8",
      slug: "ruud-standard-central-ducted-24000-cfg-8",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-9",
      slug: "ruud-standard-central-ducted-24000-cfg-9",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-10",
      slug: "ruud-standard-central-ducted-24000-cfg-10",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-11",
      slug: "ruud-standard-central-ducted-24000-cfg-11",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-12",
      slug: "ruud-standard-central-ducted-24000-cfg-12",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-13",
      slug: "ruud-standard-central-ducted-24000-cfg-13",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-14",
      slug: "ruud-standard-central-ducted-24000-cfg-14",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-15",
      slug: "ruud-standard-central-ducted-24000-cfg-15",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-16",
      slug: "ruud-standard-central-ducted-24000-cfg-16",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-17",
      slug: "ruud-standard-central-ducted-24000-cfg-17",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-18",
      slug: "ruud-standard-central-ducted-24000-cfg-18",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-19",
      slug: "ruud-standard-central-ducted-24000-cfg-19",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-20",
      slug: "ruud-standard-central-ducted-24000-cfg-20",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-21",
      slug: "ruud-standard-central-ducted-24000-cfg-21",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-22",
      slug: "ruud-standard-central-ducted-24000-cfg-22",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-23",
      slug: "ruud-standard-central-ducted-24000-cfg-23",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-24",
      slug: "ruud-standard-central-ducted-24000-cfg-24",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-25",
      slug: "ruud-standard-central-ducted-24000-cfg-25",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-26",
      slug: "ruud-standard-central-ducted-24000-cfg-26",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-27",
      slug: "ruud-standard-central-ducted-24000-cfg-27",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-28",
      slug: "ruud-standard-central-ducted-24000-cfg-28",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-29",
      slug: "ruud-standard-central-ducted-24000-cfg-29",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-30",
      slug: "ruud-standard-central-ducted-24000-cfg-30",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-31",
      slug: "ruud-standard-central-ducted-24000-cfg-31",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-24000-cfg-32",
      slug: "ruud-standard-central-ducted-24000-cfg-32",
      modelId: "ruud-standard-central-ducted-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-1",
      slug: "ruud-standard-central-ducted-36000-cfg-1",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-2",
      slug: "ruud-standard-central-ducted-36000-cfg-2",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-3",
      slug: "ruud-standard-central-ducted-36000-cfg-3",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-4",
      slug: "ruud-standard-central-ducted-36000-cfg-4",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-5",
      slug: "ruud-standard-central-ducted-36000-cfg-5",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-6",
      slug: "ruud-standard-central-ducted-36000-cfg-6",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-7",
      slug: "ruud-standard-central-ducted-36000-cfg-7",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-8",
      slug: "ruud-standard-central-ducted-36000-cfg-8",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-9",
      slug: "ruud-standard-central-ducted-36000-cfg-9",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-10",
      slug: "ruud-standard-central-ducted-36000-cfg-10",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-11",
      slug: "ruud-standard-central-ducted-36000-cfg-11",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-12",
      slug: "ruud-standard-central-ducted-36000-cfg-12",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-13",
      slug: "ruud-standard-central-ducted-36000-cfg-13",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-14",
      slug: "ruud-standard-central-ducted-36000-cfg-14",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-36000-cfg-15",
      slug: "ruud-standard-central-ducted-36000-cfg-15",
      modelId: "ruud-standard-central-ducted-36000",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-1",
      slug: "ruud-standard-central-ducted-48000-cfg-1",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up2048bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-2",
      slug: "ruud-standard-central-ducted-48000-cfg-2",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up2048bjv",
      indoorUnitId: "ruud-rcf6021sea",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-3",
      slug: "ruud-standard-central-ducted-48000-cfg-3",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-4",
      slug: "ruud-standard-central-ducted-48000-cfg-4",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-5",
      slug: "ruud-standard-central-ducted-48000-cfg-5",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-6",
      slug: "ruud-standard-central-ducted-48000-cfg-6",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-7",
      slug: "ruud-standard-central-ducted-48000-cfg-7",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-8",
      slug: "ruud-standard-central-ducted-48000-cfg-8",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-9",
      slug: "ruud-standard-central-ducted-48000-cfg-9",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-10",
      slug: "ruud-standard-central-ducted-48000-cfg-10",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-11",
      slug: "ruud-standard-central-ducted-48000-cfg-11",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-12",
      slug: "ruud-standard-central-ducted-48000-cfg-12",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-13",
      slug: "ruud-standard-central-ducted-48000-cfg-13",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up18az60ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-14",
      slug: "ruud-standard-central-ducted-48000-cfg-14",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-15",
      slug: "ruud-standard-central-ducted-48000-cfg-15",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-16",
      slug: "ruud-standard-central-ducted-48000-cfg-16",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-17",
      slug: "ruud-standard-central-ducted-48000-cfg-17",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-18",
      slug: "ruud-standard-central-ducted-48000-cfg-18",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-19",
      slug: "ruud-standard-central-ducted-48000-cfg-19",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-20",
      slug: "ruud-standard-central-ducted-48000-cfg-20",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-21",
      slug: "ruud-standard-central-ducted-48000-cfg-21",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-22",
      slug: "ruud-standard-central-ducted-48000-cfg-22",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-23",
      slug: "ruud-standard-central-ducted-48000-cfg-23",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-24",
      slug: "ruud-standard-central-ducted-48000-cfg-24",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-25",
      slug: "ruud-standard-central-ducted-48000-cfg-25",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-26",
      slug: "ruud-standard-central-ducted-48000-cfg-26",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-27",
      slug: "ruud-standard-central-ducted-48000-cfg-27",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-48000-cfg-28",
      slug: "ruud-standard-central-ducted-48000-cfg-28",
      modelId: "ruud-standard-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay60ajvc",
      indoorUnitId: "ruud-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-1",
      slug: "ruud-standard-wall-single-24000-cfg-1",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: "ruud-rhmv2421ueac",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-2",
      slug: "ruud-standard-wall-single-24000-cfg-2",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-rp1724hjvxa",
      indoorUnitId: "ruud-rhmv2421mnac",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-3",
      slug: "ruud-standard-wall-single-24000-cfg-3",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-rosh24asj",
      indoorUnitId: "ruud-uiwh24asj",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-4",
      slug: "ruud-standard-wall-single-24000-cfg-4",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-rosh24vgsn",
      indoorUnitId: "ruud-rich24axcj",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-5",
      slug: "ruud-standard-wall-single-24000-cfg-5",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: "ruud-rhmvz2421heaca",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-6",
      slug: "ruud-standard-wall-single-24000-cfg-6",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-ro1hhz24aj3s",
      indoorUnitId: "ruud-uiwhhz24aj3s",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-7",
      slug: "ruud-standard-wall-single-24000-cfg-7",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-ro1hhz24aj8s",
      indoorUnitId: "ruud-rimhhz24aj8s",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-8",
      slug: "ruud-standard-wall-single-24000-cfg-8",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-ro1hhz24aj8s",
      indoorUnitId: "ruud-righhz24aj8s",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-9",
      slug: "ruud-standard-wall-single-24000-cfg-9",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-ro1hhz24aj8s",
      indoorUnitId: "ruud-rishhz24aj8s",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-10",
      slug: "ruud-standard-wall-single-24000-cfg-10",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-rd16az24ajvua",
      indoorUnitId: "ruud-rhmvz2421mnaunj",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-24000-cfg-11",
      slug: "ruud-standard-wall-single-24000-cfg-11",
      modelId: "ruud-standard-wall-single-24000",
      outdoorUnitId: "ruud-fshsr24b3d",
      indoorUnitId: "ruud-fahfw24a3d",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-1",
      slug: "ruud-standard-wall-single-30000-cfg-1",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-rp1730hjvxa",
      indoorUnitId: "ruud-rhmv3021snac",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-2",
      slug: "ruud-standard-wall-single-30000-cfg-2",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-rosh30ahxhj",
      indoorUnitId: "ruud-uiwh30avfj",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-3",
      slug: "ruud-standard-wall-single-30000-cfg-3",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-rosh30vgsn",
      indoorUnitId: "ruud-rich30axcj",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-4",
      slug: "ruud-standard-wall-single-30000-cfg-4",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-ro1hfz30aj2h",
      indoorUnitId: "ruud-uiwhfz30aj2s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-5",
      slug: "ruud-standard-wall-single-30000-cfg-5",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-ro1hhz30aj3s",
      indoorUnitId: "ruud-uiwhhz30aj3s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-6",
      slug: "ruud-standard-wall-single-30000-cfg-6",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-ro1hhz36aj3s",
      indoorUnitId: "ruud-uiwhhz36aj3s",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-7",
      slug: "ruud-standard-wall-single-30000-cfg-7",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-ro1hhz30aj8s",
      indoorUnitId: "ruud-rimhhz30aj8s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-8",
      slug: "ruud-standard-wall-single-30000-cfg-8",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-ro1hhz30aj8s",
      indoorUnitId: "ruud-righhz30aj8s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-9",
      slug: "ruud-standard-wall-single-30000-cfg-9",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-ro1hhz30aj8s",
      indoorUnitId: "ruud-rishhz30aj8s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-10",
      slug: "ruud-standard-wall-single-30000-cfg-10",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-rd16az30ajvua",
      indoorUnitId: "ruud-rhmvz3021snaunj",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-11",
      slug: "ruud-standard-wall-single-30000-cfg-11",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-rd16az30ajhua",
      indoorUnitId: "ruud-rhmvz3021snaunj",
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-12",
      slug: "ruud-standard-wall-single-30000-cfg-12",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-rd16az36ajhua",
      indoorUnitId: "ruud-rhmvz3621mnauaj",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-30000-cfg-13",
      slug: "ruud-standard-wall-single-30000-cfg-13",
      modelId: "ruud-standard-wall-single-30000",
      outdoorUnitId: "ruud-rd16ay36ajvc",
      indoorUnitId: "ruud-rh2vy3617stacn",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-1",
      slug: "ruud-standard-wall-single-9000-cfg-1",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-rosh09afwj",
      indoorUnitId: "ruud-uiwh09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-2",
      slug: "ruud-standard-wall-single-9000-cfg-2",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-rosh09ahwj",
      indoorUnitId: "ruud-uiwh09ahwj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-3",
      slug: "ruud-standard-wall-single-9000-cfg-3",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-rosh09ahhj",
      indoorUnitId: "ruud-uiwh09ahwj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-4",
      slug: "ruud-standard-wall-single-9000-cfg-4",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-rosh09affhj",
      indoorUnitId: "ruud-rifh09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-5",
      slug: "ruud-standard-wall-single-9000-cfg-5",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-rosh09affj",
      indoorUnitId: "ruud-rifh09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-6",
      slug: "ruud-standard-wall-single-9000-cfg-6",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-rosh09afcj",
      indoorUnitId: "ruud-ridh09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-7",
      slug: "ruud-standard-wall-single-9000-cfg-7",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-rosh09afcj",
      indoorUnitId: "ruud-rich09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-8",
      slug: "ruud-standard-wall-single-9000-cfg-8",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-rosh09bfwj",
      indoorUnitId: "ruud-uiwh09bvfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-9",
      slug: "ruud-standard-wall-single-9000-cfg-9",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-ro1hfz09aj2s",
      indoorUnitId: "ruud-rifhfz09aj2s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-10",
      slug: "ruud-standard-wall-single-9000-cfg-10",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-ro1hfz09aj2h",
      indoorUnitId: "ruud-rifhfz09aj2s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-11",
      slug: "ruud-standard-wall-single-9000-cfg-11",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-ro1hhz09aj2h",
      indoorUnitId: "ruud-uiwhhz09aj2s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-12",
      slug: "ruud-standard-wall-single-9000-cfg-12",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-ro1hgz09aj1s",
      indoorUnitId: "ruud-uiwhgz09aj1s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-13",
      slug: "ruud-standard-wall-single-9000-cfg-13",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-ro1hgz09aj1h",
      indoorUnitId: "ruud-uiwhgz09aj1s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-14",
      slug: "ruud-standard-wall-single-9000-cfg-14",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-ro1hhz09aj3s",
      indoorUnitId: "ruud-uiwhhz09aj3s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-15",
      slug: "ruud-standard-wall-single-9000-cfg-15",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-ro1hhz09aj2s",
      indoorUnitId: "ruud-uiwhhz09aj2s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-9000-cfg-16",
      slug: "ruud-standard-wall-single-9000-cfg-16",
      modelId: "ruud-standard-wall-single-9000",
      outdoorUnitId: "ruud-ro1hhz09aj8s",
      indoorUnitId: "ruud-richhz09aj8s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-1",
      slug: "ruud-standard-wall-single-12000-cfg-1",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-rosh12afwj",
      indoorUnitId: "ruud-uiwh12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-2",
      slug: "ruud-standard-wall-single-12000-cfg-2",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-rosh12ahwj",
      indoorUnitId: "ruud-uiwh12ahwj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-3",
      slug: "ruud-standard-wall-single-12000-cfg-3",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-rosh12ahhj",
      indoorUnitId: "ruud-uiwh12ahwj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-4",
      slug: "ruud-standard-wall-single-12000-cfg-4",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-rosh12affhj",
      indoorUnitId: "ruud-rifh12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-5",
      slug: "ruud-standard-wall-single-12000-cfg-5",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-rosh12affj",
      indoorUnitId: "ruud-rifh12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-6",
      slug: "ruud-standard-wall-single-12000-cfg-6",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-rosh12afcj",
      indoorUnitId: "ruud-ridh12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-7",
      slug: "ruud-standard-wall-single-12000-cfg-7",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-rosh12afcj",
      indoorUnitId: "ruud-rich12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-8",
      slug: "ruud-standard-wall-single-12000-cfg-8",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-rosh12bfwj",
      indoorUnitId: "ruud-uiwh12bvfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-9",
      slug: "ruud-standard-wall-single-12000-cfg-9",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-ro1hfz12aj2s",
      indoorUnitId: "ruud-rifhfz12aj2s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-10",
      slug: "ruud-standard-wall-single-12000-cfg-10",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-ro1hfz12aj2h",
      indoorUnitId: "ruud-rifhfz12aj2s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-11",
      slug: "ruud-standard-wall-single-12000-cfg-11",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-ro1hgz12aj1s",
      indoorUnitId: "ruud-uiwhgz12aj1s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-12",
      slug: "ruud-standard-wall-single-12000-cfg-12",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-ro1hgz12aj1h",
      indoorUnitId: "ruud-uiwhgz12aj1s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-13",
      slug: "ruud-standard-wall-single-12000-cfg-13",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-ro1hhz12aj3s",
      indoorUnitId: "ruud-uiwhhz12aj3s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-14",
      slug: "ruud-standard-wall-single-12000-cfg-14",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-ro1hhz12aj2s",
      indoorUnitId: "ruud-uiwhhz12aj2s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-15",
      slug: "ruud-standard-wall-single-12000-cfg-15",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-ro1hhz12aj8s",
      indoorUnitId: "ruud-richhz12aj8s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-16",
      slug: "ruud-standard-wall-single-12000-cfg-16",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-ro1hhz12aj8s",
      indoorUnitId: "ruud-rimhhz12aj8s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-12000-cfg-17",
      slug: "ruud-standard-wall-single-12000-cfg-17",
      modelId: "ruud-standard-wall-single-12000",
      outdoorUnitId: "ruud-fshsr12b1c",
      indoorUnitId: "ruud-fahsw12a1c",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-1",
      slug: "ruud-standard-wall-single-18000-cfg-1",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-rosh18asj",
      indoorUnitId: "ruud-uiwh18asj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-2",
      slug: "ruud-standard-wall-single-18000-cfg-2",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-rosh18axfwj",
      indoorUnitId: "ruud-uiwh18avfj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-3",
      slug: "ruud-standard-wall-single-18000-cfg-3",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-rosh18ahxhj",
      indoorUnitId: "ruud-uiwh18avfj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-4",
      slug: "ruud-standard-wall-single-18000-cfg-4",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-rosh18afcj",
      indoorUnitId: "ruud-ridh18avfj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-5",
      slug: "ruud-standard-wall-single-18000-cfg-5",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-rosh18afcj",
      indoorUnitId: "ruud-rich18avfj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-6",
      slug: "ruud-standard-wall-single-18000-cfg-6",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-romh18fxzhj",
      indoorUnitId: "ruud-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-7",
      slug: "ruud-standard-wall-single-18000-cfg-7",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-romh18fxzhj",
      indoorUnitId: "ruud-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-8",
      slug: "ruud-standard-wall-single-18000-cfg-8",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-romh18fxzhj",
      indoorUnitId: "ruud-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-9",
      slug: "ruud-standard-wall-single-18000-cfg-9",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-rosh18vgsn",
      indoorUnitId: "ruud-rich18axcj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-10",
      slug: "ruud-standard-wall-single-18000-cfg-10",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-ro1hfz18aj2h",
      indoorUnitId: "ruud-uiwhfz18aj2s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-11",
      slug: "ruud-standard-wall-single-18000-cfg-11",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-ro1hhz18aj2s",
      indoorUnitId: "ruud-uiwhhz18aj2s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-12",
      slug: "ruud-standard-wall-single-18000-cfg-12",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-ro1hhz18aj3s",
      indoorUnitId: "ruud-uiwhhz18aj3s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-13",
      slug: "ruud-standard-wall-single-18000-cfg-13",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-ro1hhz18aj8s",
      indoorUnitId: "ruud-richhz18aj8s",
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-14",
      slug: "ruud-standard-wall-single-18000-cfg-14",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-ro1hhz18aj8s",
      indoorUnitId: "ruud-rimhhz18aj8s",
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-15",
      slug: "ruud-standard-wall-single-18000-cfg-15",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-ro1hhz18aj8s",
      indoorUnitId: "ruud-righhz18aj8s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-18000-cfg-16",
      slug: "ruud-standard-wall-single-18000-cfg-16",
      modelId: "ruud-standard-wall-single-18000",
      outdoorUnitId: "ruud-ro1hhz18aj8s",
      indoorUnitId: "ruud-rishhz18aj8s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-15000-cfg-1",
      slug: "ruud-standard-wall-single-15000-cfg-1",
      modelId: "ruud-standard-wall-single-15000",
      outdoorUnitId: "ruud-rosh15ahwj",
      indoorUnitId: "ruud-uiwh15ahwj",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-15000-cfg-2",
      slug: "ruud-standard-wall-single-15000-cfg-2",
      modelId: "ruud-standard-wall-single-15000",
      outdoorUnitId: "ruud-rosh15ahhj",
      indoorUnitId: "ruud-uiwh15ahwj",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-15000-cfg-3",
      slug: "ruud-standard-wall-single-15000-cfg-3",
      modelId: "ruud-standard-wall-single-15000",
      outdoorUnitId: "ruud-rosh15affhj",
      indoorUnitId: "ruud-rifh15avfj",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-15000-cfg-4",
      slug: "ruud-standard-wall-single-15000-cfg-4",
      modelId: "ruud-standard-wall-single-15000",
      outdoorUnitId: "ruud-rosh15affj",
      indoorUnitId: "ruud-rifh15avfj",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-15000-cfg-5",
      slug: "ruud-standard-wall-single-15000-cfg-5",
      modelId: "ruud-standard-wall-single-15000",
      outdoorUnitId: "ruud-ro1hfz15aj2s",
      indoorUnitId: "ruud-rifhfz15aj2s",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-15000-cfg-6",
      slug: "ruud-standard-wall-single-15000-cfg-6",
      modelId: "ruud-standard-wall-single-15000",
      outdoorUnitId: "ruud-ro1hfz15aj2h",
      indoorUnitId: "ruud-rifhfz15aj2s",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-15000-cfg-7",
      slug: "ruud-standard-wall-single-15000-cfg-7",
      modelId: "ruud-standard-wall-single-15000",
      outdoorUnitId: "ruud-ro1hgz15aj1s",
      indoorUnitId: "ruud-uiwhgz15aj1s",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-15000-cfg-8",
      slug: "ruud-standard-wall-single-15000-cfg-8",
      modelId: "ruud-standard-wall-single-15000",
      outdoorUnitId: "ruud-ro1hgz15aj1h",
      indoorUnitId: "ruud-uiwhgz15aj1s",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-20000-cfg-1",
      slug: "ruud-standard-wall-single-20000-cfg-1",
      modelId: "ruud-standard-wall-single-20000",
      outdoorUnitId: "ruud-rosh24axfwj",
      indoorUnitId: "ruud-uiwh24avfj",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-20000-cfg-2",
      slug: "ruud-standard-wall-single-20000-cfg-2",
      modelId: "ruud-standard-wall-single-20000",
      outdoorUnitId: "ruud-rosh24ahxhj",
      indoorUnitId: "ruud-uiwh24avfj",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-20000-cfg-3",
      slug: "ruud-standard-wall-single-20000-cfg-3",
      modelId: "ruud-standard-wall-single-20000",
      outdoorUnitId: "ruud-romh24fxzhj",
      indoorUnitId: "ruud-appareils-sans-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-20000-cfg-4",
      slug: "ruud-standard-wall-single-20000-cfg-4",
      modelId: "ruud-standard-wall-single-20000",
      outdoorUnitId: "ruud-romh24fxzhj",
      indoorUnitId: "ruud-appareils-avec-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-20000-cfg-5",
      slug: "ruud-standard-wall-single-20000-cfg-5",
      modelId: "ruud-standard-wall-single-20000",
      outdoorUnitId: "ruud-romh24fxzhj",
      indoorUnitId: "ruud-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-20000-cfg-6",
      slug: "ruud-standard-wall-single-20000-cfg-6",
      modelId: "ruud-standard-wall-single-20000",
      outdoorUnitId: "ruud-ro1hfz24aj2h",
      indoorUnitId: "ruud-uiwhfz24aj2s",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-20000-cfg-7",
      slug: "ruud-standard-wall-single-20000-cfg-7",
      modelId: "ruud-standard-wall-single-20000",
      outdoorUnitId: "ruud-ro1hhz24aj2s",
      indoorUnitId: "ruud-uiwhhz24aj2s",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-42000-cfg-1",
      slug: "ruud-standard-wall-single-42000-cfg-1",
      modelId: "ruud-standard-wall-single-42000",
      outdoorUnitId: "ruud-romh45afxzj",
      indoorUnitId: "ruud-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-42000-cfg-2",
      slug: "ruud-standard-wall-single-42000-cfg-2",
      modelId: "ruud-standard-wall-single-42000",
      outdoorUnitId: "ruud-romh45afxzj",
      indoorUnitId: "ruud-appareils-avec-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-42000-cfg-3",
      slug: "ruud-standard-wall-single-42000-cfg-3",
      modelId: "ruud-standard-wall-single-42000",
      outdoorUnitId: "ruud-romh45afxzj",
      indoorUnitId: "ruud-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-42000-cfg-4",
      slug: "ruud-standard-wall-single-42000-cfg-4",
      modelId: "ruud-standard-wall-single-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rhmvz6021seaca",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-42000-cfg-5",
      slug: "ruud-standard-wall-single-42000-cfg-5",
      modelId: "ruud-standard-wall-single-42000",
      outdoorUnitId: "ruud-ro1hgz42aj8s",
      indoorUnitId: "ruud-rimhgz42aj8s",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-42000-cfg-6",
      slug: "ruud-standard-wall-single-42000-cfg-6",
      modelId: "ruud-standard-wall-single-42000",
      outdoorUnitId: "ruud-ro5hfz45aj2s",
      indoorUnitId: "ruud-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-42000-cfg-7",
      slug: "ruud-standard-wall-single-42000-cfg-7",
      modelId: "ruud-standard-wall-single-42000",
      outdoorUnitId: "ruud-ro5hfz45aj2s",
      indoorUnitId: "ruud-appareils-avec-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-1",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-1",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rhmvz6021seaca",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-2",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-2",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-3",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-3",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-4",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-4",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-5",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-5",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-6",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-6",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-7",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-7",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-8",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-8",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-9",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-9",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-10",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-10",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-11",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-11",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-12",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-12",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-13",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-13",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-14",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-14",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-15",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-15",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-16",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-16",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-17",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-17",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-18",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-18",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-19",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-19",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-20",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-20",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-21",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-21",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-22",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-22",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-23",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-23",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-24",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-24",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up18az36ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-25",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-25",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-26",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-26",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-27",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-27",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-28",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-28",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-29",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-29",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-30",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-30",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-31",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-31",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-32",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-32",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-33",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-33",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-34",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-34",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-35",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-35",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-36",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-36",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-37",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-37",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-38",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-38",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-39",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-39",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-40",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-40",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-41",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-41",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-42",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-42",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-43",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-43",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-44",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-44",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-45",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-45",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rh3vz4821stacn",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-46",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-46",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-47",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-47",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-48",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-48",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-49",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-49",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-50",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-50",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-51",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-51",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-52",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-52",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-53",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-53",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-54",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-54",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-36000-cfg-55",
      slug: "ruud-ultra-series-central-ducted-36000-cfg-55",
      modelId: "ruud-ultra-series-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-1",
      slug: "ruud-standard-central-ducted-42000-cfg-1",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-2",
      slug: "ruud-standard-central-ducted-42000-cfg-2",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-3",
      slug: "ruud-standard-central-ducted-42000-cfg-3",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-4",
      slug: "ruud-standard-central-ducted-42000-cfg-4",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-5",
      slug: "ruud-standard-central-ducted-42000-cfg-5",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-6",
      slug: "ruud-standard-central-ducted-42000-cfg-6",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-7",
      slug: "ruud-standard-central-ducted-42000-cfg-7",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-8",
      slug: "ruud-standard-central-ducted-42000-cfg-8",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-9",
      slug: "ruud-standard-central-ducted-42000-cfg-9",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-10",
      slug: "ruud-standard-central-ducted-42000-cfg-10",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-11",
      slug: "ruud-standard-central-ducted-42000-cfg-11",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-12",
      slug: "ruud-standard-central-ducted-42000-cfg-12",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-13",
      slug: "ruud-standard-central-ducted-42000-cfg-13",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-14",
      slug: "ruud-standard-central-ducted-42000-cfg-14",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-15",
      slug: "ruud-standard-central-ducted-42000-cfg-15",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-16",
      slug: "ruud-standard-central-ducted-42000-cfg-16",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-17",
      slug: "ruud-standard-central-ducted-42000-cfg-17",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-18",
      slug: "ruud-standard-central-ducted-42000-cfg-18",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-42000-cfg-19",
      slug: "ruud-standard-central-ducted-42000-cfg-19",
      modelId: "ruud-standard-central-ducted-42000",
      outdoorUnitId: "ruud-up18az48ajvc",
      indoorUnitId: "ruud-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single-18000-cfg-1",
      slug: "ruud-classic-plus-wall-single-18000-cfg-1",
      modelId: "ruud-classic-plus-wall-single-18000",
      outdoorUnitId: "ruud-ro2hfz18aj1h",
      indoorUnitId: "ruud-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single-18000-cfg-2",
      slug: "ruud-classic-plus-wall-single-18000-cfg-2",
      modelId: "ruud-classic-plus-wall-single-18000",
      outdoorUnitId: "ruud-ro2hfz18aj1h",
      indoorUnitId: "ruud-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single-20000-cfg-1",
      slug: "ruud-classic-plus-wall-single-20000-cfg-1",
      modelId: "ruud-classic-plus-wall-single-20000",
      outdoorUnitId: "ruud-ro3hfz24aj1h",
      indoorUnitId: "ruud-appareils-sans-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single-20000-cfg-2",
      slug: "ruud-classic-plus-wall-single-20000-cfg-2",
      modelId: "ruud-classic-plus-wall-single-20000",
      outdoorUnitId: "ruud-ro3hfz24aj1h",
      indoorUnitId: "ruud-appareils-avec-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-1",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-1",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rh2tz3621mtana",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-2",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-2",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rh2vz3621mtann",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-3",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-3",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rh2vz3621mtana",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-4",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-4",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-5",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-5",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-6",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-6",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3624mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-7",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-7",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-8",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-8",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-9",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-9",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3624mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-10",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-10",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3624mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-11",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-11",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-12",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-12",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-13",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-13",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-14",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-14",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-15",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-15",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-16",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-16",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-17",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-17",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-36000-cfg-18",
      slug: "ruud-achiever-plus-central-ducted-36000-cfg-18",
      modelId: "ruud-achiever-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-1",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-1",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rh2tz3621mtann",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-2",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-2",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-3",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-3",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-4",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-4",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-5",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-5",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-6",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-6",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-7",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-7",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-8",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-8",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-9",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-9",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-10",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-10",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-11",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-11",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-12",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-12",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-13",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-13",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-14",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-14",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-15",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-15",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-16",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-16",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-17",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-17",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-18",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-18",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-19",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-19",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-20",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-20",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-21",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-21",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-22",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-22",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-23",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-23",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-24",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-24",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-25",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-25",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-26",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-26",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-27",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-27",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-28",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-28",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-29",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-29",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-30",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-30",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-31",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-31",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-32",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-32",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-33",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-33",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-34",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-34",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-35",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-35",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-36",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-36",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-37",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-37",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-38",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-38",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-39",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-39",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-40",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-40",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-41",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-41",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rf2tz3624stans",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-36000-cfg-42",
      slug: "ruud-f-series-plus-central-ducted-36000-cfg-42",
      modelId: "ruud-f-series-plus-central-ducted-36000",
      outdoorUnitId: "ruud-rd17az36aj3n",
      indoorUnitId: "ruud-rb2tz3621stanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-1",
      slug: "ruud-f-series-central-ducted-60000-cfg-1",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rh2vz6024stann",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-2",
      slug: "ruud-f-series-central-ducted-60000-cfg-2",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rh2tz6024stann",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-3",
      slug: "ruud-f-series-central-ducted-60000-cfg-3",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-4",
      slug: "ruud-f-series-central-ducted-60000-cfg-4",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-5",
      slug: "ruud-f-series-central-ducted-60000-cfg-5",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-6",
      slug: "ruud-f-series-central-ducted-60000-cfg-6",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-7",
      slug: "ruud-f-series-central-ducted-60000-cfg-7",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-8",
      slug: "ruud-f-series-central-ducted-60000-cfg-8",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-9",
      slug: "ruud-f-series-central-ducted-60000-cfg-9",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-10",
      slug: "ruud-f-series-central-ducted-60000-cfg-10",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-11",
      slug: "ruud-f-series-central-ducted-60000-cfg-11",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-12",
      slug: "ruud-f-series-central-ducted-60000-cfg-12",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-13",
      slug: "ruud-f-series-central-ducted-60000-cfg-13",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-14",
      slug: "ruud-f-series-central-ducted-60000-cfg-14",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-15",
      slug: "ruud-f-series-central-ducted-60000-cfg-15",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-16",
      slug: "ruud-f-series-central-ducted-60000-cfg-16",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-17",
      slug: "ruud-f-series-central-ducted-60000-cfg-17",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-18",
      slug: "ruud-f-series-central-ducted-60000-cfg-18",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-19",
      slug: "ruud-f-series-central-ducted-60000-cfg-19",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-20",
      slug: "ruud-f-series-central-ducted-60000-cfg-20",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-21",
      slug: "ruud-f-series-central-ducted-60000-cfg-21",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-22",
      slug: "ruud-f-series-central-ducted-60000-cfg-22",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-23",
      slug: "ruud-f-series-central-ducted-60000-cfg-23",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-24",
      slug: "ruud-f-series-central-ducted-60000-cfg-24",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-25",
      slug: "ruud-f-series-central-ducted-60000-cfg-25",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-26",
      slug: "ruud-f-series-central-ducted-60000-cfg-26",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-27",
      slug: "ruud-f-series-central-ducted-60000-cfg-27",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-28",
      slug: "ruud-f-series-central-ducted-60000-cfg-28",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-29",
      slug: "ruud-f-series-central-ducted-60000-cfg-29",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-30",
      slug: "ruud-f-series-central-ducted-60000-cfg-30",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-31",
      slug: "ruud-f-series-central-ducted-60000-cfg-31",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-60000-cfg-32",
      slug: "ruud-f-series-central-ducted-60000-cfg-32",
      modelId: "ruud-f-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rh3vz4824stacn",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-1",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-1",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-2",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-2",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-3",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-3",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-4",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-4",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-5",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-5",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-6",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-6",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-7",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-7",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-8",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-8",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-9",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-9",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-10",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-10",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-11",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-11",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-12",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-12",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-13",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-13",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-14",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-14",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-60000-cfg-15",
      slug: "ruud-ultra-series-central-ducted-60000-cfg-15",
      modelId: "ruud-ultra-series-central-ducted-60000",
      outdoorUnitId: "ruud-rd17az60aj3n",
      indoorUnitId: "ruud-rh3vz6024stacn",
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-1",
      slug: "ruud-k-series-central-ducted-24000-cfg-1",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-2",
      slug: "ruud-k-series-central-ducted-24000-cfg-2",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-3",
      slug: "ruud-k-series-central-ducted-24000-cfg-3",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-4",
      slug: "ruud-k-series-central-ducted-24000-cfg-4",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-5",
      slug: "ruud-k-series-central-ducted-24000-cfg-5",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-6",
      slug: "ruud-k-series-central-ducted-24000-cfg-6",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-7",
      slug: "ruud-k-series-central-ducted-24000-cfg-7",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-8",
      slug: "ruud-k-series-central-ducted-24000-cfg-8",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-9",
      slug: "ruud-k-series-central-ducted-24000-cfg-9",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-10",
      slug: "ruud-k-series-central-ducted-24000-cfg-10",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-11",
      slug: "ruud-k-series-central-ducted-24000-cfg-11",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-12",
      slug: "ruud-k-series-central-ducted-24000-cfg-12",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-13",
      slug: "ruud-k-series-central-ducted-24000-cfg-13",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-14",
      slug: "ruud-k-series-central-ducted-24000-cfg-14",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-15",
      slug: "ruud-k-series-central-ducted-24000-cfg-15",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-16",
      slug: "ruud-k-series-central-ducted-24000-cfg-16",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-17",
      slug: "ruud-k-series-central-ducted-24000-cfg-17",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-18",
      slug: "ruud-k-series-central-ducted-24000-cfg-18",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-19",
      slug: "ruud-k-series-central-ducted-24000-cfg-19",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-20",
      slug: "ruud-k-series-central-ducted-24000-cfg-20",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-21",
      slug: "ruud-k-series-central-ducted-24000-cfg-21",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-22",
      slug: "ruud-k-series-central-ducted-24000-cfg-22",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-23",
      slug: "ruud-k-series-central-ducted-24000-cfg-23",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-24",
      slug: "ruud-k-series-central-ducted-24000-cfg-24",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-25",
      slug: "ruud-k-series-central-ducted-24000-cfg-25",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-26",
      slug: "ruud-k-series-central-ducted-24000-cfg-26",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-27",
      slug: "ruud-k-series-central-ducted-24000-cfg-27",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-28",
      slug: "ruud-k-series-central-ducted-24000-cfg-28",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-29",
      slug: "ruud-k-series-central-ducted-24000-cfg-29",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-30",
      slug: "ruud-k-series-central-ducted-24000-cfg-30",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-31",
      slug: "ruud-k-series-central-ducted-24000-cfg-31",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-32",
      slug: "ruud-k-series-central-ducted-24000-cfg-32",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-33",
      slug: "ruud-k-series-central-ducted-24000-cfg-33",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-34",
      slug: "ruud-k-series-central-ducted-24000-cfg-34",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-35",
      slug: "ruud-k-series-central-ducted-24000-cfg-35",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-36",
      slug: "ruud-k-series-central-ducted-24000-cfg-36",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-37",
      slug: "ruud-k-series-central-ducted-24000-cfg-37",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-38",
      slug: "ruud-k-series-central-ducted-24000-cfg-38",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-39",
      slug: "ruud-k-series-central-ducted-24000-cfg-39",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rh3vz3617stacn",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-40",
      slug: "ruud-k-series-central-ducted-24000-cfg-40",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rb2tz2417stanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-24000-cfg-41",
      slug: "ruud-k-series-central-ducted-24000-cfg-41",
      modelId: "ruud-k-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rf2tz2421stans",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-1",
      slug: "ruud-f-series-central-ducted-48000-cfg-1",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-2",
      slug: "ruud-f-series-central-ducted-48000-cfg-2",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-3",
      slug: "ruud-f-series-central-ducted-48000-cfg-3",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-4",
      slug: "ruud-f-series-central-ducted-48000-cfg-4",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-5",
      slug: "ruud-f-series-central-ducted-48000-cfg-5",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-6",
      slug: "ruud-f-series-central-ducted-48000-cfg-6",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-7",
      slug: "ruud-f-series-central-ducted-48000-cfg-7",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-8",
      slug: "ruud-f-series-central-ducted-48000-cfg-8",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-9",
      slug: "ruud-f-series-central-ducted-48000-cfg-9",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-10",
      slug: "ruud-f-series-central-ducted-48000-cfg-10",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-11",
      slug: "ruud-f-series-central-ducted-48000-cfg-11",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-12",
      slug: "ruud-f-series-central-ducted-48000-cfg-12",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-13",
      slug: "ruud-f-series-central-ducted-48000-cfg-13",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-14",
      slug: "ruud-f-series-central-ducted-48000-cfg-14",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-15",
      slug: "ruud-f-series-central-ducted-48000-cfg-15",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-16",
      slug: "ruud-f-series-central-ducted-48000-cfg-16",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-17",
      slug: "ruud-f-series-central-ducted-48000-cfg-17",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-18",
      slug: "ruud-f-series-central-ducted-48000-cfg-18",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-19",
      slug: "ruud-f-series-central-ducted-48000-cfg-19",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-20",
      slug: "ruud-f-series-central-ducted-48000-cfg-20",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-21",
      slug: "ruud-f-series-central-ducted-48000-cfg-21",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-22",
      slug: "ruud-f-series-central-ducted-48000-cfg-22",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-23",
      slug: "ruud-f-series-central-ducted-48000-cfg-23",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-24",
      slug: "ruud-f-series-central-ducted-48000-cfg-24",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-25",
      slug: "ruud-f-series-central-ducted-48000-cfg-25",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-26",
      slug: "ruud-f-series-central-ducted-48000-cfg-26",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-27",
      slug: "ruud-f-series-central-ducted-48000-cfg-27",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-28",
      slug: "ruud-f-series-central-ducted-48000-cfg-28",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-29",
      slug: "ruud-f-series-central-ducted-48000-cfg-29",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-30",
      slug: "ruud-f-series-central-ducted-48000-cfg-30",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-31",
      slug: "ruud-f-series-central-ducted-48000-cfg-31",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-32",
      slug: "ruud-f-series-central-ducted-48000-cfg-32",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-33",
      slug: "ruud-f-series-central-ducted-48000-cfg-33",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-34",
      slug: "ruud-f-series-central-ducted-48000-cfg-34",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-35",
      slug: "ruud-f-series-central-ducted-48000-cfg-35",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-36",
      slug: "ruud-f-series-central-ducted-48000-cfg-36",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-37",
      slug: "ruud-f-series-central-ducted-48000-cfg-37",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-38",
      slug: "ruud-f-series-central-ducted-48000-cfg-38",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-39",
      slug: "ruud-f-series-central-ducted-48000-cfg-39",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-40",
      slug: "ruud-f-series-central-ducted-48000-cfg-40",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-41",
      slug: "ruud-f-series-central-ducted-48000-cfg-41",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-42",
      slug: "ruud-f-series-central-ducted-48000-cfg-42",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-43",
      slug: "ruud-f-series-central-ducted-48000-cfg-43",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-44",
      slug: "ruud-f-series-central-ducted-48000-cfg-44",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-45",
      slug: "ruud-f-series-central-ducted-48000-cfg-45",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-46",
      slug: "ruud-f-series-central-ducted-48000-cfg-46",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-47",
      slug: "ruud-f-series-central-ducted-48000-cfg-47",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-48",
      slug: "ruud-f-series-central-ducted-48000-cfg-48",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-49",
      slug: "ruud-f-series-central-ducted-48000-cfg-49",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-50",
      slug: "ruud-f-series-central-ducted-48000-cfg-50",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-51",
      slug: "ruud-f-series-central-ducted-48000-cfg-51",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-52",
      slug: "ruud-f-series-central-ducted-48000-cfg-52",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-53",
      slug: "ruud-f-series-central-ducted-48000-cfg-53",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-54",
      slug: "ruud-f-series-central-ducted-48000-cfg-54",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-55",
      slug: "ruud-f-series-central-ducted-48000-cfg-55",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-56",
      slug: "ruud-f-series-central-ducted-48000-cfg-56",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-57",
      slug: "ruud-f-series-central-ducted-48000-cfg-57",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-58",
      slug: "ruud-f-series-central-ducted-48000-cfg-58",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-59",
      slug: "ruud-f-series-central-ducted-48000-cfg-59",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-60",
      slug: "ruud-f-series-central-ducted-48000-cfg-60",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-61",
      slug: "ruud-f-series-central-ducted-48000-cfg-61",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-62",
      slug: "ruud-f-series-central-ducted-48000-cfg-62",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-63",
      slug: "ruud-f-series-central-ducted-48000-cfg-63",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-64",
      slug: "ruud-f-series-central-ducted-48000-cfg-64",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-65",
      slug: "ruud-f-series-central-ducted-48000-cfg-65",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-66",
      slug: "ruud-f-series-central-ducted-48000-cfg-66",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-67",
      slug: "ruud-f-series-central-ducted-48000-cfg-67",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-68",
      slug: "ruud-f-series-central-ducted-48000-cfg-68",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-69",
      slug: "ruud-f-series-central-ducted-48000-cfg-69",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-70",
      slug: "ruud-f-series-central-ducted-48000-cfg-70",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-71",
      slug: "ruud-f-series-central-ducted-48000-cfg-71",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-72",
      slug: "ruud-f-series-central-ducted-48000-cfg-72",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-73",
      slug: "ruud-f-series-central-ducted-48000-cfg-73",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-74",
      slug: "ruud-f-series-central-ducted-48000-cfg-74",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-75",
      slug: "ruud-f-series-central-ducted-48000-cfg-75",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-76",
      slug: "ruud-f-series-central-ducted-48000-cfg-76",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-77",
      slug: "ruud-f-series-central-ducted-48000-cfg-77",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-78",
      slug: "ruud-f-series-central-ducted-48000-cfg-78",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-79",
      slug: "ruud-f-series-central-ducted-48000-cfg-79",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-80",
      slug: "ruud-f-series-central-ducted-48000-cfg-80",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-81",
      slug: "ruud-f-series-central-ducted-48000-cfg-81",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-82",
      slug: "ruud-f-series-central-ducted-48000-cfg-82",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-83",
      slug: "ruud-f-series-central-ducted-48000-cfg-83",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-84",
      slug: "ruud-f-series-central-ducted-48000-cfg-84",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-85",
      slug: "ruud-f-series-central-ducted-48000-cfg-85",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-86",
      slug: "ruud-f-series-central-ducted-48000-cfg-86",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-87",
      slug: "ruud-f-series-central-ducted-48000-cfg-87",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-88",
      slug: "ruud-f-series-central-ducted-48000-cfg-88",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-89",
      slug: "ruud-f-series-central-ducted-48000-cfg-89",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-90",
      slug: "ruud-f-series-central-ducted-48000-cfg-90",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-91",
      slug: "ruud-f-series-central-ducted-48000-cfg-91",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-92",
      slug: "ruud-f-series-central-ducted-48000-cfg-92",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-93",
      slug: "ruud-f-series-central-ducted-48000-cfg-93",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-94",
      slug: "ruud-f-series-central-ducted-48000-cfg-94",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-95",
      slug: "ruud-f-series-central-ducted-48000-cfg-95",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-96",
      slug: "ruud-f-series-central-ducted-48000-cfg-96",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-97",
      slug: "ruud-f-series-central-ducted-48000-cfg-97",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-98",
      slug: "ruud-f-series-central-ducted-48000-cfg-98",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-99",
      slug: "ruud-f-series-central-ducted-48000-cfg-99",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rh2tz6024stann",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-48000-cfg-100",
      slug: "ruud-f-series-central-ducted-48000-cfg-100",
      modelId: "ruud-f-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rcfz4821staam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-24000-cfg-1",
      slug: "ruud-ultra-series-central-ducted-24000-cfg-1",
      modelId: "ruud-ultra-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rh2tz3617stann",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-24000-cfg-2",
      slug: "ruud-ultra-series-central-ducted-24000-cfg-2",
      modelId: "ruud-ultra-series-central-ducted-24000",
      outdoorUnitId: "ruud-rd17az24aj3n",
      indoorUnitId: "ruud-rh2vz3617stann",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-1",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-1",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd17az48aj3n",
      indoorUnitId: "ruud-rh3vz6024stacn",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-2",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-2",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-3",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-3",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-4",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-4",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-5",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-5",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-6",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-6",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-7",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-7",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-8",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-8",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-9",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-9",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-10",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-10",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-11",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-11",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-12",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-12",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rh2vy6024stacn",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-13",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-13",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-14",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-14",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-15",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-15",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-16",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-16",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-17",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-17",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-18",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-18",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-19",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-19",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-20",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-20",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-21",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-21",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-22",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-22",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-23",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-23",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-24",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-24",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-25",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-25",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-26",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-26",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-27",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-27",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-28",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-28",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-29",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-29",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-30",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-30",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-31",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-31",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rh2vy6021staca",
      coolingCapacityMinBtu: 49500,
      coolingCapacityMaxBtu: 49500,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-32",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-32",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rh2ty6024stann",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-48000-cfg-33",
      slug: "ruud-ultra-series-central-ducted-48000-cfg-33",
      modelId: "ruud-ultra-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rhmvy6024seacn",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-acheiver-wall-single-9000-cfg-1",
      slug: "ruud-floating-air-acheiver-wall-single-9000-cfg-1",
      modelId: "ruud-floating-air-acheiver-wall-single-9000",
      outdoorUnitId: "ruud-fshsr09b1c",
      indoorUnitId: "ruud-fahsw09a1c",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-acheiver-wall-single-18000-cfg-1",
      slug: "ruud-floating-air-acheiver-wall-single-18000-cfg-1",
      modelId: "ruud-floating-air-acheiver-wall-single-18000",
      outdoorUnitId: "ruud-fshsr18b3d",
      indoorUnitId: "ruud-fahfw18a3d",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-9000-cfg-1",
      slug: "ruud-floating-air-achiever-plus-wall-single-9000-cfg-1",
      modelId: "ruud-floating-air-achiever-plus-wall-single-9000",
      outdoorUnitId: "ruud-fphsr09a1c",
      indoorUnitId: "ruud-fahsw09a1c",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-9000-cfg-2",
      slug: "ruud-floating-air-achiever-plus-wall-single-9000-cfg-2",
      modelId: "ruud-floating-air-achiever-plus-wall-single-9000",
      outdoorUnitId: "ruud-fphsr09a3d",
      indoorUnitId: "ruud-fahfw09a3d",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-12000-cfg-1",
      slug: "ruud-floating-air-achiever-plus-wall-single-12000-cfg-1",
      modelId: "ruud-floating-air-achiever-plus-wall-single-12000",
      outdoorUnitId: "ruud-fphsr12a1c",
      indoorUnitId: "ruud-fahsw12a1c",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-12000-cfg-2",
      slug: "ruud-floating-air-achiever-plus-wall-single-12000-cfg-2",
      modelId: "ruud-floating-air-achiever-plus-wall-single-12000",
      outdoorUnitId: "ruud-fphsr12a3d",
      indoorUnitId: "ruud-fahfw12a3d",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-18000-cfg-1",
      slug: "ruud-floating-air-achiever-plus-wall-single-18000-cfg-1",
      modelId: "ruud-floating-air-achiever-plus-wall-single-18000",
      outdoorUnitId: "ruud-fphsr18a3d",
      indoorUnitId: "ruud-fahfw18a3d",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single-24000-cfg-1",
      slug: "ruud-floating-air-achiever-plus-wall-single-24000-cfg-1",
      modelId: "ruud-floating-air-achiever-plus-wall-single-24000",
      outdoorUnitId: "ruud-fphsr24a3d",
      indoorUnitId: "ruud-fahfw24a3d",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-1",
      slug: "ruud-ultra-central-ducted-36000-cfg-1",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-2",
      slug: "ruud-ultra-central-ducted-36000-cfg-2",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-3",
      slug: "ruud-ultra-central-ducted-36000-cfg-3",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-4",
      slug: "ruud-ultra-central-ducted-36000-cfg-4",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-5",
      slug: "ruud-ultra-central-ducted-36000-cfg-5",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-6",
      slug: "ruud-ultra-central-ducted-36000-cfg-6",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-7",
      slug: "ruud-ultra-central-ducted-36000-cfg-7",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-8",
      slug: "ruud-ultra-central-ducted-36000-cfg-8",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-9",
      slug: "ruud-ultra-central-ducted-36000-cfg-9",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-10",
      slug: "ruud-ultra-central-ducted-36000-cfg-10",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-11",
      slug: "ruud-ultra-central-ducted-36000-cfg-11",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-36000-cfg-12",
      slug: "ruud-ultra-central-ducted-36000-cfg-12",
      modelId: "ruud-ultra-central-ducted-36000",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: "ruud-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-48000-cfg-1",
      slug: "ruud-ultra-central-ducted-48000-cfg-1",
      modelId: "ruud-ultra-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-48000-cfg-2",
      slug: "ruud-ultra-central-ducted-48000-cfg-2",
      modelId: "ruud-ultra-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-48000-cfg-3",
      slug: "ruud-ultra-central-ducted-48000-cfg-3",
      modelId: "ruud-ultra-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-48000-cfg-4",
      slug: "ruud-ultra-central-ducted-48000-cfg-4",
      modelId: "ruud-ultra-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-48000-cfg-5",
      slug: "ruud-ultra-central-ducted-48000-cfg-5",
      modelId: "ruud-ultra-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-48000-cfg-6",
      slug: "ruud-ultra-central-ducted-48000-cfg-6",
      modelId: "ruud-ultra-central-ducted-48000",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: "ruud-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-1",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-1",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rh2vy3621mtacn",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-2",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-2",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-3",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-3",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-4",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-4",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-5",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-5",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-6",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-6",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-7",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-7",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-8",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-8",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-9",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-9",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-10",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-10",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-11",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-11",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-12",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-12",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-13",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-13",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-14",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-14",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-15",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-15",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-16",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-16",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-17",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-17",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-18",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-18",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-19",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-19",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-20",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-20",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-21",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-21",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-22",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-22",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-23",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-23",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-24",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-24",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-25",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-25",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-26",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-26",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-27",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-27",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-28",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-28",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-29",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-29",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-30",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-30",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-31",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-31",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-32",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-32",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-33",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-33",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-34",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-34",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-35",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-35",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-36",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-36",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-37",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-37",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-38",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-38",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-39",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-39",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-40",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-40",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-41",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-41",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-42",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-42",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-43",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-43",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-44",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-44",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-45",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-45",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-46",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-46",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-47",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-47",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-48",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-48",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-49",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-49",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-50",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-50",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rh2vy3617stacn",
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-51",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-51",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rh2vy3621stacn",
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-52",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-52",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rh2ty3617stann",
      coolingCapacityMinBtu: 31600,
      coolingCapacityMaxBtu: 31600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-30000-cfg-53",
      slug: "ruud-ultra-series-central-ducted-30000-cfg-53",
      modelId: "ruud-ultra-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rh2ty3621stann",
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-1",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-1",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rh2vy6024stacn",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-2",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-2",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-3",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-3",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-4",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-4",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-5",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-5",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-6",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-6",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-7",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-7",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-8",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-8",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-9",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-9",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-10",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-10",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-11",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-11",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-12",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-12",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-13",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-13",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-14",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-14",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-15",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-15",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-16",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-16",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-17",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-17",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-18",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-18",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-19",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-19",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-20",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-20",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-21",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-21",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rh2vy4824stacn",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-22",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-22",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rh2vy4821stacn",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-23",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-23",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rhmvy6024seacn",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-24",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-24",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rh2ty4824mtann",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-25",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-25",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rh2ty4824stann",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-42000-cfg-26",
      slug: "ruud-ultra-series-central-ducted-42000-cfg-26",
      modelId: "ruud-ultra-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rh2ty4821stann",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-1",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-1",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rh2vy3617stacn",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-2",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-2",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-3",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-3",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-4",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-4",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-5",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-5",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-6",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-6",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-7",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-7",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-8",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-8",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-9",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-9",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-10",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-10",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-11",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-11",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-12",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-12",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-13",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-13",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-14",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-14",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-15",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-15",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rhmvy2421meacn",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-20000-cfg-16",
      slug: "ruud-ultra-series-central-ducted-20000-cfg-16",
      modelId: "ruud-ultra-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rf2ty2421stans",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-1",
      slug: "ruud-k-series-central-ducted-20000-cfg-1",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-2",
      slug: "ruud-k-series-central-ducted-20000-cfg-2",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-3",
      slug: "ruud-k-series-central-ducted-20000-cfg-3",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-4",
      slug: "ruud-k-series-central-ducted-20000-cfg-4",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-5",
      slug: "ruud-k-series-central-ducted-20000-cfg-5",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-6",
      slug: "ruud-k-series-central-ducted-20000-cfg-6",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-7",
      slug: "ruud-k-series-central-ducted-20000-cfg-7",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-8",
      slug: "ruud-k-series-central-ducted-20000-cfg-8",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-20000-cfg-9",
      slug: "ruud-k-series-central-ducted-20000-cfg-9",
      modelId: "ruud-k-series-central-ducted-20000",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: "ruud-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-1",
      slug: "ruud-k-series-central-ducted-42000-cfg-1",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-2",
      slug: "ruud-k-series-central-ducted-42000-cfg-2",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-3",
      slug: "ruud-k-series-central-ducted-42000-cfg-3",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-4",
      slug: "ruud-k-series-central-ducted-42000-cfg-4",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-5",
      slug: "ruud-k-series-central-ducted-42000-cfg-5",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-6",
      slug: "ruud-k-series-central-ducted-42000-cfg-6",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-7",
      slug: "ruud-k-series-central-ducted-42000-cfg-7",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-8",
      slug: "ruud-k-series-central-ducted-42000-cfg-8",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-9",
      slug: "ruud-k-series-central-ducted-42000-cfg-9",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-10",
      slug: "ruud-k-series-central-ducted-42000-cfg-10",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-11",
      slug: "ruud-k-series-central-ducted-42000-cfg-11",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-12",
      slug: "ruud-k-series-central-ducted-42000-cfg-12",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-13",
      slug: "ruud-k-series-central-ducted-42000-cfg-13",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-14",
      slug: "ruud-k-series-central-ducted-42000-cfg-14",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-15",
      slug: "ruud-k-series-central-ducted-42000-cfg-15",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-16",
      slug: "ruud-k-series-central-ducted-42000-cfg-16",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-42000-cfg-17",
      slug: "ruud-k-series-central-ducted-42000-cfg-17",
      modelId: "ruud-k-series-central-ducted-42000",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: "ruud-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-1",
      slug: "ruud-k-series-central-ducted-48000-cfg-1",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-2",
      slug: "ruud-k-series-central-ducted-48000-cfg-2",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-3",
      slug: "ruud-k-series-central-ducted-48000-cfg-3",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-4",
      slug: "ruud-k-series-central-ducted-48000-cfg-4",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-5",
      slug: "ruud-k-series-central-ducted-48000-cfg-5",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-6",
      slug: "ruud-k-series-central-ducted-48000-cfg-6",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-7",
      slug: "ruud-k-series-central-ducted-48000-cfg-7",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-8",
      slug: "ruud-k-series-central-ducted-48000-cfg-8",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-9",
      slug: "ruud-k-series-central-ducted-48000-cfg-9",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-10",
      slug: "ruud-k-series-central-ducted-48000-cfg-10",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-11",
      slug: "ruud-k-series-central-ducted-48000-cfg-11",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-12",
      slug: "ruud-k-series-central-ducted-48000-cfg-12",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-13",
      slug: "ruud-k-series-central-ducted-48000-cfg-13",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-14",
      slug: "ruud-k-series-central-ducted-48000-cfg-14",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-15",
      slug: "ruud-k-series-central-ducted-48000-cfg-15",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-16",
      slug: "ruud-k-series-central-ducted-48000-cfg-16",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-48000-cfg-17",
      slug: "ruud-k-series-central-ducted-48000-cfg-17",
      modelId: "ruud-k-series-central-ducted-48000",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: "ruud-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-1",
      slug: "ruud-k-series-central-ducted-30000-cfg-1",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-2",
      slug: "ruud-k-series-central-ducted-30000-cfg-2",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-3",
      slug: "ruud-k-series-central-ducted-30000-cfg-3",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-4",
      slug: "ruud-k-series-central-ducted-30000-cfg-4",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-5",
      slug: "ruud-k-series-central-ducted-30000-cfg-5",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-6",
      slug: "ruud-k-series-central-ducted-30000-cfg-6",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-7",
      slug: "ruud-k-series-central-ducted-30000-cfg-7",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-8",
      slug: "ruud-k-series-central-ducted-30000-cfg-8",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-9",
      slug: "ruud-k-series-central-ducted-30000-cfg-9",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-10",
      slug: "ruud-k-series-central-ducted-30000-cfg-10",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-11",
      slug: "ruud-k-series-central-ducted-30000-cfg-11",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-12",
      slug: "ruud-k-series-central-ducted-30000-cfg-12",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-13",
      slug: "ruud-k-series-central-ducted-30000-cfg-13",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-14",
      slug: "ruud-k-series-central-ducted-30000-cfg-14",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-15",
      slug: "ruud-k-series-central-ducted-30000-cfg-15",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-16",
      slug: "ruud-k-series-central-ducted-30000-cfg-16",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-17",
      slug: "ruud-k-series-central-ducted-30000-cfg-17",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-18",
      slug: "ruud-k-series-central-ducted-30000-cfg-18",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-19",
      slug: "ruud-k-series-central-ducted-30000-cfg-19",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-20",
      slug: "ruud-k-series-central-ducted-30000-cfg-20",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-21",
      slug: "ruud-k-series-central-ducted-30000-cfg-21",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-22",
      slug: "ruud-k-series-central-ducted-30000-cfg-22",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-23",
      slug: "ruud-k-series-central-ducted-30000-cfg-23",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-24",
      slug: "ruud-k-series-central-ducted-30000-cfg-24",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-25",
      slug: "ruud-k-series-central-ducted-30000-cfg-25",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-26",
      slug: "ruud-k-series-central-ducted-30000-cfg-26",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-27",
      slug: "ruud-k-series-central-ducted-30000-cfg-27",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-28",
      slug: "ruud-k-series-central-ducted-30000-cfg-28",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-29",
      slug: "ruud-k-series-central-ducted-30000-cfg-29",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-30",
      slug: "ruud-k-series-central-ducted-30000-cfg-30",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-31",
      slug: "ruud-k-series-central-ducted-30000-cfg-31",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-32",
      slug: "ruud-k-series-central-ducted-30000-cfg-32",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-33",
      slug: "ruud-k-series-central-ducted-30000-cfg-33",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-34",
      slug: "ruud-k-series-central-ducted-30000-cfg-34",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-35",
      slug: "ruud-k-series-central-ducted-30000-cfg-35",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-36",
      slug: "ruud-k-series-central-ducted-30000-cfg-36",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-37",
      slug: "ruud-k-series-central-ducted-30000-cfg-37",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-38",
      slug: "ruud-k-series-central-ducted-30000-cfg-38",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted-30000-cfg-39",
      slug: "ruud-k-series-central-ducted-30000-cfg-39",
      modelId: "ruud-k-series-central-ducted-30000",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: "ruud-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-24000-cfg-1",
      slug: "ruud-f-series-plus-central-ducted-24000-cfg-1",
      modelId: "ruud-f-series-plus-central-ducted-24000",
      outdoorUnitId: "ruud-rd16ay24ajvc",
      indoorUnitId: "ruud-rh2vy2417stacn",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-42000-cfg-1",
      slug: "ruud-f-series-plus-central-ducted-42000-cfg-1",
      modelId: "ruud-f-series-plus-central-ducted-42000",
      outdoorUnitId: "ruud-rd16ay48ajvc",
      indoorUnitId: "ruud-rh2vy4821stacn",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-60000-cfg-1",
      slug: "ruud-f-series-plus-central-ducted-60000-cfg-1",
      modelId: "ruud-f-series-plus-central-ducted-60000",
      outdoorUnitId: "ruud-rd16ay60ajvc",
      indoorUnitId: "ruud-rh2vy6024stacn",
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-12000-cfg-1",
      slug: "ruud-floating-air-ultra-wall-single-12000-cfg-1",
      modelId: "ruud-floating-air-ultra-wall-single-12000",
      outdoorUnitId: "ruud-fphfr12a3d",
      indoorUnitId: "ruud-fphfd12a3d",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-12000-cfg-2",
      slug: "ruud-floating-air-ultra-wall-single-12000-cfg-2",
      modelId: "ruud-floating-air-ultra-wall-single-12000",
      outdoorUnitId: "ruud-fphfr12a3d",
      indoorUnitId: "ruud-fphfc12a3d",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-9000-cfg-1",
      slug: "ruud-floating-air-ultra-wall-single-9000-cfg-1",
      modelId: "ruud-floating-air-ultra-wall-single-9000",
      outdoorUnitId: "ruud-fphfr09a3d",
      indoorUnitId: "ruud-fphfc09a3d",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-18000-cfg-1",
      slug: "ruud-floating-air-ultra-wall-single-18000-cfg-1",
      modelId: "ruud-floating-air-ultra-wall-single-18000",
      outdoorUnitId: "ruud-fphfr18a3d",
      indoorUnitId: "ruud-fphfc18a3d",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-18000-cfg-2",
      slug: "ruud-floating-air-ultra-wall-single-18000-cfg-2",
      modelId: "ruud-floating-air-ultra-wall-single-18000",
      outdoorUnitId: "ruud-fphfr18a3d",
      indoorUnitId: "ruud-fphfd18a3d",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-24000-cfg-1",
      slug: "ruud-floating-air-ultra-wall-single-24000-cfg-1",
      modelId: "ruud-floating-air-ultra-wall-single-24000",
      outdoorUnitId: "ruud-fphfr24a3d",
      indoorUnitId: "ruud-fphfc24a3d",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-24000-cfg-2",
      slug: "ruud-floating-air-ultra-wall-single-24000-cfg-2",
      modelId: "ruud-floating-air-ultra-wall-single-24000",
      outdoorUnitId: "ruud-fphfr24a3d",
      indoorUnitId: "ruud-fphfd24a3d",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-30000-cfg-1",
      slug: "ruud-floating-air-ultra-wall-single-30000-cfg-1",
      modelId: "ruud-floating-air-ultra-wall-single-30000",
      outdoorUnitId: "ruud-fphfr36a3d",
      indoorUnitId: "ruud-fphsd36a3d",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-36000-cfg-1",
      slug: "ruud-floating-air-ultra-wall-single-36000-cfg-1",
      modelId: "ruud-floating-air-ultra-wall-single-36000",
      outdoorUnitId: "ruud-fphfr36a3d",
      indoorUnitId: "ruud-fphsc36a3d",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-1",
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
      configurationId: "ruud-standard-wall-single-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-36000-cfg-12",
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
      configurationId: "ruud-standard-wall-single-36000-cfg-13",
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
      configurationId: "ruud-standard-wall-single-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-48000-cfg-3",
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
      configurationId: "ruud-standard-wall-single-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-48000-cfg-5",
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
      configurationId: "ruud-standard-wall-single-48000-cfg-6",
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
      configurationId: "ruud-standard-wall-single-48000-cfg-7",
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
      configurationId: "ruud-standard-wall-single-48000-cfg-8",
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
      configurationId: "ruud-standard-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-2",
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
      configurationId: "ruud-standard-central-ducted-24000-cfg-3",
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
      configurationId: "ruud-standard-central-ducted-24000-cfg-4",
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
      configurationId: "ruud-standard-central-ducted-24000-cfg-5",
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
      configurationId: "ruud-standard-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-12",
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
      configurationId: "ruud-standard-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-24000-cfg-31",
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
      configurationId: "ruud-standard-central-ducted-24000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-36000-cfg-1",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-36000-cfg-3",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-36000-cfg-7",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-8",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-9",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-10",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-11",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-12",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-13",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-14",
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
      configurationId: "ruud-standard-central-ducted-36000-cfg-15",
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
      configurationId: "ruud-standard-central-ducted-48000-cfg-1",
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
      configurationId: "ruud-standard-central-ducted-48000-cfg-2",
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
      configurationId: "ruud-standard-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-48000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-24000-cfg-1",
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
      configurationId: "ruud-standard-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-24000-cfg-3",
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
      configurationId: "ruud-standard-wall-single-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-24000-cfg-5",
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
      configurationId: "ruud-standard-wall-single-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-24000-cfg-8",
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
      configurationId: "ruud-standard-wall-single-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-24000-cfg-11",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-1",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-30000-cfg-3",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-30000-cfg-5",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-6",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-7",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-30000-cfg-9",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-30000-cfg-11",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-12",
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
      configurationId: "ruud-standard-wall-single-30000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-1",
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
      configurationId: "ruud-standard-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-4",
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
      configurationId: "ruud-standard-wall-single-9000-cfg-5",
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
      configurationId: "ruud-standard-wall-single-9000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-9",
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
      configurationId: "ruud-standard-wall-single-9000-cfg-10",
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
      configurationId: "ruud-standard-wall-single-9000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-9000-cfg-16",
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
      configurationId: "ruud-standard-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-4",
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
      configurationId: "ruud-standard-wall-single-12000-cfg-5",
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
      configurationId: "ruud-standard-wall-single-12000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-9",
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
      configurationId: "ruud-standard-wall-single-12000-cfg-10",
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
      configurationId: "ruud-standard-wall-single-12000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-12000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-18000-cfg-16",
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
      configurationId: "ruud-standard-wall-single-15000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-15000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-15000-cfg-3",
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
      configurationId: "ruud-standard-wall-single-15000-cfg-4",
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
      configurationId: "ruud-standard-wall-single-15000-cfg-5",
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
      configurationId: "ruud-standard-wall-single-15000-cfg-6",
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
      configurationId: "ruud-standard-wall-single-15000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-15000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-20000-cfg-1",
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
      configurationId: "ruud-standard-wall-single-20000-cfg-2",
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
      configurationId: "ruud-standard-wall-single-20000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-20000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-20000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-20000-cfg-6",
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
      configurationId: "ruud-standard-wall-single-20000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-42000-cfg-3",
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
      configurationId: "ruud-standard-wall-single-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-wall-single-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-48",
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
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-49",
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
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-50",
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
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-51",
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
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-52",
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
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-53",
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
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-54",
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
      configurationId: "ruud-ultra-series-central-ducted-36000-cfg-55",
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
      configurationId: "ruud-standard-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-standard-central-ducted-42000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-classic-plus-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-classic-plus-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-classic-plus-wall-single-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-classic-plus-wall-single-20000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-achiever-plus-central-ducted-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-36000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-60000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-60000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 50000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-1",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-3",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-4",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-5",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-8",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-10",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-11",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-13",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-15",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-16",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-17",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-20",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-21",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-23",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-24",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-25",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-30",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-31",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-32",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-35",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-36",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-37",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-38",
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
      configurationId: "ruud-k-series-central-ducted-24000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-24000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-60",
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
      configurationId: "ruud-f-series-central-ducted-48000-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-92",
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
      configurationId: "ruud-f-series-central-ducted-48000-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-central-ducted-48000-cfg-100",
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
      configurationId: "ruud-ultra-series-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-12",
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
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-48000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-acheiver-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-acheiver-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-achiever-plus-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-achiever-plus-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-achiever-plus-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-achiever-plus-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-achiever-plus-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-achiever-plus-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-central-ducted-36000-cfg-1",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-2",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-3",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-4",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-5",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-6",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-7",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-8",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-9",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-10",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-11",
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
      configurationId: "ruud-ultra-central-ducted-36000-cfg-12",
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
      configurationId: "ruud-ultra-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-30000-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-42000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17900,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-ultra-series-central-ducted-20000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-20000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-42000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-48000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-k-series-central-ducted-30000-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-f-series-plus-central-ducted-60000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19100,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ruud-floating-air-ultra-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
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
