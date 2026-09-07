import type { BrandDataset } from "../../types";

export const rheemDataset: BrandDataset = {
  brand: {
    id: "rheem",
    slug: "rheem",
    name: "RHEEM",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "rheem-standard",
      slug: "rheem-standard",
      name: "Standard",
      brandId: "rheem",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series",
      slug: "rheem-prestige-series",
      name: "PRESTIGE SERIES",
      brandId: "rheem",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus",
      slug: "rheem-classic-plus",
      name: "Classic Plus",
      brandId: "rheem",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus",
      slug: "rheem-f-series-plus",
      name: "F - SERIES PLUS",
      brandId: "rheem",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series",
      slug: "rheem-f-series",
      name: "F Series",
      brandId: "rheem",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series",
      slug: "rheem-k-series",
      name: "K-SERIES",
      brandId: "rheem",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-classic",
      slug: "rheem-floating-air-classic",
      name: "Floating Air Classic",
      brandId: "rheem",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-select",
      slug: "rheem-floating-air-select",
      name: "Floating  Air Select",
      brandId: "rheem",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-pro",
      slug: "rheem-floating-air-pro",
      name: "Floating Air Pro",
      brandId: "rheem",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-classic-plus",
      slug: "rheem-floating-air-classic-plus",
      name: "Floating Air Classic Plus",
      brandId: "rheem",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige",
      slug: "rheem-floating-air-prestige",
      name: "Floating Air Prestige",
      brandId: "rheem",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "rheem-standard-wall-single-9000",
      slug: "rheem-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-12000",
      slug: "rheem-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-18000",
      slug: "rheem-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-24000",
      slug: "rheem-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-15000",
      slug: "rheem-standard-wall-single-15000",
      name: "Standard 15 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-20000",
      slug: "rheem-standard-wall-single-20000",
      name: "Standard 20 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-42000",
      slug: "rheem-standard-wall-single-42000",
      name: "Standard 42 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-30000",
      slug: "rheem-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-36000",
      slug: "rheem-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-wall-single-48000",
      slug: "rheem-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-central-ducted-24000",
      slug: "rheem-standard-central-ducted-24000",
      name: "Standard 24 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 22600,
      heatingCapacity5FMaxBtu: 22800,
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
      id: "rheem-standard-central-ducted-36000",
      slug: "rheem-standard-central-ducted-36000",
      name: "Standard 36 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-standard-central-ducted-48000",
      slug: "rheem-standard-central-ducted-48000",
      name: "Standard 48 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-prestige-series-central-ducted-24000",
      slug: "rheem-prestige-series-central-ducted-24000",
      name: "PRESTIGE SERIES 24 000 BTU",
      seriesId: "rheem-prestige-series",
      brandId: "rheem",
      modelNumber: "PRESTIGE SERIES 24k",
      normalizedModelNumber: "prestige-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      heatingCapacity5FMinBtu: 15100,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 17,
      seer2Max: 20,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 2.1,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000",
      slug: "rheem-prestige-series-central-ducted-36000",
      name: "PRESTIGE SERIES 36 000 BTU",
      seriesId: "rheem-prestige-series",
      brandId: "rheem",
      modelNumber: "PRESTIGE SERIES 36k",
      normalizedModelNumber: "prestige-series-36000",
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
      id: "rheem-standard-central-ducted-42000",
      slug: "rheem-standard-central-ducted-42000",
      name: "Standard 42 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-classic-plus-wall-single-18000",
      slug: "rheem-classic-plus-wall-single-18000",
      name: "Classic Plus 18 000 BTU",
      seriesId: "rheem-classic-plus",
      brandId: "rheem",
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
      id: "rheem-classic-plus-wall-single-20000",
      slug: "rheem-classic-plus-wall-single-20000",
      name: "Classic Plus 20 000 BTU",
      seriesId: "rheem-classic-plus",
      brandId: "rheem",
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
      id: "rheem-classic-plus-central-ducted-36000",
      slug: "rheem-classic-plus-central-ducted-36000",
      name: "CLASSIC PLUS 36 000 BTU",
      seriesId: "rheem-classic-plus",
      brandId: "rheem",
      modelNumber: "CLASSIC PLUS 36k",
      normalizedModelNumber: "classic-plus-36000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 23600,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 8.5,
      cop5FMin: 2.3,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000",
      slug: "rheem-f-series-plus-central-ducted-36000",
      name: "F - SERIES PLUS 36 000 BTU",
      seriesId: "rheem-f-series-plus",
      brandId: "rheem",
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
      id: "rheem-f-series-central-ducted-60000",
      slug: "rheem-f-series-central-ducted-60000",
      name: "F Series 60 000 BTU",
      seriesId: "rheem-f-series",
      brandId: "rheem",
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
      id: "rheem-prestige-series-central-ducted-60000",
      slug: "rheem-prestige-series-central-ducted-60000",
      name: "PRESTIGE SERIES 60 000 BTU",
      seriesId: "rheem-prestige-series",
      brandId: "rheem",
      modelNumber: "PRESTIGE SERIES 60k",
      normalizedModelNumber: "prestige-series-60000",
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
      id: "rheem-k-series-central-ducted-24000",
      slug: "rheem-k-series-central-ducted-24000",
      name: "K-SERIES 24 000 BTU",
      seriesId: "rheem-k-series",
      brandId: "rheem",
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
      id: "rheem-f-series-central-ducted-48000",
      slug: "rheem-f-series-central-ducted-48000",
      name: "F Series 48 000 BTU",
      seriesId: "rheem-f-series",
      brandId: "rheem",
      modelNumber: "F Series 48k",
      normalizedModelNumber: "f-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      heatingCapacity5FMinBtu: 32200,
      heatingCapacity5FMaxBtu: 33000,
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
      id: "rheem-prestige-series-central-ducted-48000",
      slug: "rheem-prestige-series-central-ducted-48000",
      name: "PRESTIGE SERIES 48 000 BTU",
      seriesId: "rheem-prestige-series",
      brandId: "rheem",
      modelNumber: "PRESTIGE SERIES 48k",
      normalizedModelNumber: "prestige-series-48000",
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
      id: "rheem-standard-wall-single-60000",
      slug: "rheem-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "rheem-standard",
      brandId: "rheem",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 51000,
      heatingCapacity5FMaxBtu: 51000,
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
      id: "rheem-floating-air-classic-wall-single-9000",
      slug: "rheem-floating-air-classic-wall-single-9000",
      name: "Floating Air Classic 9 000 BTU",
      seriesId: "rheem-floating-air-classic",
      brandId: "rheem",
      modelNumber: "Floating Air Classic 9k",
      normalizedModelNumber: "floating-air-classic-9000",
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
      id: "rheem-floating-air-select-wall-single-18000",
      slug: "rheem-floating-air-select-wall-single-18000",
      name: "Floating  Air Select 18 000 BTU",
      seriesId: "rheem-floating-air-select",
      brandId: "rheem",
      modelNumber: "Floating  Air Select 18k",
      normalizedModelNumber: "floating-air-select-18000",
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
      id: "rheem-floating-air-pro-wall-single-9000",
      slug: "rheem-floating-air-pro-wall-single-9000",
      name: "Floating Air Pro 9 000 BTU",
      seriesId: "rheem-floating-air-pro",
      brandId: "rheem",
      modelNumber: "Floating Air Pro 9k",
      normalizedModelNumber: "floating-air-pro-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 9500,
      heatingCapacity5FMaxBtu: 9500,
      seer2Min: 23,
      seer2Max: 23,
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
      id: "rheem-floating-air-classic-plus-wall-single-12000",
      slug: "rheem-floating-air-classic-plus-wall-single-12000",
      name: "Floating Air Classic Plus 12 000 BTU",
      seriesId: "rheem-floating-air-classic-plus",
      brandId: "rheem",
      modelNumber: "Floating Air Classic Plus 12k",
      normalizedModelNumber: "floating-air-classic-plus-12000",
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
      id: "rheem-floating-air-classic-plus-wall-single-9000",
      slug: "rheem-floating-air-classic-plus-wall-single-9000",
      name: "Floating Air Classic Plus 9 000 BTU",
      seriesId: "rheem-floating-air-classic-plus",
      brandId: "rheem",
      modelNumber: "Floating Air Classic Plus 9k",
      normalizedModelNumber: "floating-air-classic-plus-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 9000,
      seer2Min: 25,
      seer2Max: 25,
      hspf2Min: 11,
      hspf2Max: 11,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-pro-wall-single-18000",
      slug: "rheem-floating-air-pro-wall-single-18000",
      name: "Floating Air Pro 18 000 BTU",
      seriesId: "rheem-floating-air-pro",
      brandId: "rheem",
      modelNumber: "Floating Air Pro 18k",
      normalizedModelNumber: "floating-air-pro-18000",
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
      id: "rheem-floating-air-classic-plus-wall-single-24000",
      slug: "rheem-floating-air-classic-plus-wall-single-24000",
      name: "Floating Air Classic Plus 24 000 BTU",
      seriesId: "rheem-floating-air-classic-plus",
      brandId: "rheem",
      modelNumber: "Floating Air Classic Plus 24k",
      normalizedModelNumber: "floating-air-classic-plus-24000",
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
      id: "rheem-prestige-series-central-ducted-42000",
      slug: "rheem-prestige-series-central-ducted-42000",
      name: "PRESTIGE SERIES 42 000 BTU",
      seriesId: "rheem-prestige-series",
      brandId: "rheem",
      modelNumber: "PRESTIGE SERIES 42k",
      normalizedModelNumber: "prestige-series-42000",
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
      id: "rheem-prestige-series-central-ducted-30000",
      slug: "rheem-prestige-series-central-ducted-30000",
      name: "PRESTIGE SERIES 30 000 BTU",
      seriesId: "rheem-prestige-series",
      brandId: "rheem",
      modelNumber: "PRESTIGE SERIES 30k",
      normalizedModelNumber: "prestige-series-30000",
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
      id: "rheem-prestige-series-central-ducted-20000",
      slug: "rheem-prestige-series-central-ducted-20000",
      name: "PRESTIGE SERIES 20 000 BTU",
      seriesId: "rheem-prestige-series",
      brandId: "rheem",
      modelNumber: "PRESTIGE SERIES 20k",
      normalizedModelNumber: "prestige-series-20000",
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
      id: "rheem-k-series-central-ducted-20000",
      slug: "rheem-k-series-central-ducted-20000",
      name: "K-SERIES 20 000 BTU",
      seriesId: "rheem-k-series",
      brandId: "rheem",
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
      id: "rheem-k-series-central-ducted-42000",
      slug: "rheem-k-series-central-ducted-42000",
      name: "K-SERIES 42 000 BTU",
      seriesId: "rheem-k-series",
      brandId: "rheem",
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
      id: "rheem-k-series-central-ducted-48000",
      slug: "rheem-k-series-central-ducted-48000",
      name: "K-SERIES 48 000 BTU",
      seriesId: "rheem-k-series",
      brandId: "rheem",
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
      id: "rheem-k-series-central-ducted-30000",
      slug: "rheem-k-series-central-ducted-30000",
      name: "K-SERIES 30 000 BTU",
      seriesId: "rheem-k-series",
      brandId: "rheem",
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
      id: "rheem-f-series-plus-central-ducted-24000",
      slug: "rheem-f-series-plus-central-ducted-24000",
      name: "F-Series Plus 24 000 BTU",
      seriesId: "rheem-f-series-plus",
      brandId: "rheem",
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
      id: "rheem-f-series-plus-central-ducted-42000",
      slug: "rheem-f-series-plus-central-ducted-42000",
      name: "F-Series Plus 42 000 BTU",
      seriesId: "rheem-f-series-plus",
      brandId: "rheem",
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
      id: "rheem-f-series-plus-central-ducted-60000",
      slug: "rheem-f-series-plus-central-ducted-60000",
      name: "F-Series Plus 60 000 BTU",
      seriesId: "rheem-f-series-plus",
      brandId: "rheem",
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
      id: "rheem-floating-air-prestige-wall-single-9000",
      slug: "rheem-floating-air-prestige-wall-single-9000",
      name: "Floating Air Prestige 9 000 BTU",
      seriesId: "rheem-floating-air-prestige",
      brandId: "rheem",
      modelNumber: "Floating Air Prestige 9k",
      normalizedModelNumber: "floating-air-prestige-9000",
      isActive2026: true,
      thermomatchEligible: true,
      brochureUrl: null,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
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
      id: "rheem-floating-air-prestige-wall-single-12000",
      slug: "rheem-floating-air-prestige-wall-single-12000",
      name: "Floating Air Prestige 12 000 BTU",
      seriesId: "rheem-floating-air-prestige",
      brandId: "rheem",
      modelNumber: "Floating Air Prestige 12k",
      normalizedModelNumber: "floating-air-prestige-12000",
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
      id: "rheem-floating-air-prestige-wall-single-18000",
      slug: "rheem-floating-air-prestige-wall-single-18000",
      name: "Floating Air Prestige 18 000 BTU",
      seriesId: "rheem-floating-air-prestige",
      brandId: "rheem",
      modelNumber: "Floating Air Prestige 18k",
      normalizedModelNumber: "floating-air-prestige-18000",
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
      id: "rheem-floating-air-prestige-wall-single-24000",
      slug: "rheem-floating-air-prestige-wall-single-24000",
      name: "Floating Air Prestige 24 000 BTU",
      seriesId: "rheem-floating-air-prestige",
      brandId: "rheem",
      modelNumber: "Floating Air Prestige 24k",
      normalizedModelNumber: "floating-air-prestige-24000",
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
      id: "rheem-floating-air-prestige-wall-single-30000",
      slug: "rheem-floating-air-prestige-wall-single-30000",
      name: "Floating Air Prestige 30 000 BTU",
      seriesId: "rheem-floating-air-prestige",
      brandId: "rheem",
      modelNumber: "Floating Air Prestige 30k",
      normalizedModelNumber: "floating-air-prestige-30000",
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
      id: "rheem-floating-air-prestige-wall-single-36000",
      slug: "rheem-floating-air-prestige-wall-single-36000",
      name: "Floating Air Prestige 36 000 BTU",
      seriesId: "rheem-floating-air-prestige",
      brandId: "rheem",
      modelNumber: "Floating Air Prestige 36k",
      normalizedModelNumber: "floating-air-prestige-36000",
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
      id: "rheem-rosh09afwj",
      modelNumber: "ROSH09AFWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh09ahwj",
      modelNumber: "ROSH09AHWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh09ahhj",
      modelNumber: "ROSH09AHHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh09affhj",
      modelNumber: "ROSH09AFFHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh09affj",
      modelNumber: "ROSH09AFFJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh09afcj",
      modelNumber: "ROSH09AFCJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh09bfwj",
      modelNumber: "ROSH09BFWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz09aj2s",
      modelNumber: "RO1HFZ09AJ2S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz09aj2h",
      modelNumber: "RO1HFZ09AJ2H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz09aj2h",
      modelNumber: "RO1HHZ09AJ2H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hgz09aj1s",
      modelNumber: "RO1HGZ09AJ1S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hgz09aj1h",
      modelNumber: "RO1HGZ09AJ1H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz09aj3s",
      modelNumber: "RO1HHZ09AJ3S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz09aj2s",
      modelNumber: "RO1HHZ09AJ2S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz09aj8s",
      modelNumber: "RO1HHZ09AJ8S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh12afwj",
      modelNumber: "ROSH12AFWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh12ahwj",
      modelNumber: "ROSH12AHWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh12ahhj",
      modelNumber: "ROSH12AHHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh12affhj",
      modelNumber: "ROSH12AFFHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh12affj",
      modelNumber: "ROSH12AFFJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh12afcj",
      modelNumber: "ROSH12AFCJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh12bfwj",
      modelNumber: "ROSH12BFWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz12aj2s",
      modelNumber: "RO1HFZ12AJ2S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz12aj2h",
      modelNumber: "RO1HFZ12AJ2H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hgz12aj1s",
      modelNumber: "RO1HGZ12AJ1S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hgz12aj1h",
      modelNumber: "RO1HGZ12AJ1H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz12aj3s",
      modelNumber: "RO1HHZ12AJ3S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz12aj2s",
      modelNumber: "RO1HHZ12AJ2S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz12aj8s",
      modelNumber: "RO1HHZ12AJ8S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fshsr12b1c",
      modelNumber: "FSHSR12B1C",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh18asj",
      modelNumber: "ROSH18ASJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh18axfwj",
      modelNumber: "ROSH18AXFWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh18ahxhj",
      modelNumber: "ROSH18AHXHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh18afcj",
      modelNumber: "ROSH18AFCJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-romh18fxzhj",
      modelNumber: "ROMH18FXZHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh18vgsn",
      modelNumber: "ROSH18VGSN",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz18aj2h",
      modelNumber: "RO1HFZ18AJ2H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz18aj2s",
      modelNumber: "RO1HHZ18AJ2S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz18aj3s",
      modelNumber: "RO1HHZ18AJ3S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz18aj8s",
      modelNumber: "RO1HHZ18AJ8S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh24asj",
      modelNumber: "ROSH24ASJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp2024bjv",
      modelNumber: "RP2024BJV",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh24vgsn",
      modelNumber: "ROSH24VGSN",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp1724hjvxa",
      modelNumber: "RP1724HJVXA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz24aj3s",
      modelNumber: "RO1HHZ24AJ3S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz24aj8s",
      modelNumber: "RO1HHZ24AJ8S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16az24ajvua",
      modelNumber: "RD16AZ24AJVUA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fshsr24b3d",
      modelNumber: "FSHSR24B3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh15ahwj",
      modelNumber: "ROSH15AHWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh15ahhj",
      modelNumber: "ROSH15AHHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh15affhj",
      modelNumber: "ROSH15AFFHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh15affj",
      modelNumber: "ROSH15AFFJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz15aj2s",
      modelNumber: "RO1HFZ15AJ2S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz15aj2h",
      modelNumber: "RO1HFZ15AJ2H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hgz15aj1s",
      modelNumber: "RO1HGZ15AJ1S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hgz15aj1h",
      modelNumber: "RO1HGZ15AJ1H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh24axfwj",
      modelNumber: "ROSH24AXFWJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh24ahxhj",
      modelNumber: "ROSH24AHXHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-romh24fxzhj",
      modelNumber: "ROMH24FXZHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz24aj2h",
      modelNumber: "RO1HFZ24AJ2H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz24aj2s",
      modelNumber: "RO1HHZ24AJ2S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-romh45afxzj",
      modelNumber: "ROMH45AFXZJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp18az48ajvc",
      modelNumber: "RP18AZ48AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hgz42aj8s",
      modelNumber: "RO1HGZ42AJ8S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro5hfz45aj2s",
      modelNumber: "RO5HFZ45AJ2S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh30ahxhj",
      modelNumber: "ROSH30AHXHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh30vgsn",
      modelNumber: "ROSH30VGSN",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp1730hjvxa",
      modelNumber: "RP1730HJVXA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hfz30aj2h",
      modelNumber: "RO1HFZ30AJ2H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz30aj3s",
      modelNumber: "RO1HHZ30AJ3S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz36aj3s",
      modelNumber: "RO1HHZ36AJ3S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz30aj8s",
      modelNumber: "RO1HHZ30AJ8S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16az30ajvua",
      modelNumber: "RD16AZ30AJVUA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16az30ajhua",
      modelNumber: "RD16AZ30AJHUA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16az36ajhua",
      modelNumber: "RD16AZ36AJHUA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16ay36ajvc",
      modelNumber: "RD16AY36AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-romh36fxzhj",
      modelNumber: "ROMH36FXZHJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-romh36afxzj",
      modelNumber: "ROMH36AFXZJ",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp2036bjv",
      modelNumber: "RP2036BJV",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh36vgsn",
      modelNumber: "ROSH36VGSN",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp1736hjvxa",
      modelNumber: "RP1736HJVXA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16az36ajvua",
      modelNumber: "RD16AZ36AJVUA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro4hfz36aj1h",
      modelNumber: "RO4HFZ36AJ1H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hhz36aj8s",
      modelNumber: "RO1HHZ36AJ8S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp2048bjv",
      modelNumber: "RP2048BJV",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp1748hjvxa",
      modelNumber: "RP1748HJVXA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rosh48vgsn",
      modelNumber: "ROSH48VGSN",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp18az60ajvc",
      modelNumber: "RP18AZ60AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro1hgz48aj8s",
      modelNumber: "RO1HGZ48AJ8S",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16az48ajvua",
      modelNumber: "RD16AZ48AJVUA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16az48ajhua",
      modelNumber: "RD16AZ48AJHUA",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp19ay60ajvc",
      modelNumber: "RP19AY60AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp18az24ajvc",
      modelNumber: "RP18AZ24AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd17az24aj3n",
      modelNumber: "RD17AZ24AJ3N",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp18az36ajvc",
      modelNumber: "RP18AZ36AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd17az36aj3n",
      modelNumber: "RD17AZ36AJ3N",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp19ay36ajvc",
      modelNumber: "RP19AY36AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro2hfz18aj1h",
      modelNumber: "RO2HFZ18AJ1H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-ro3hfz24aj1h",
      modelNumber: "RO3HFZ24AJ1H",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd17az60aj3n",
      modelNumber: "RD17AZ60AJ3N",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd17az48aj3n",
      modelNumber: "RD17AZ48AJ3N",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rp19ay48ajvc",
      modelNumber: "RP19AY48AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd18ay60ajvc",
      modelNumber: "RD18AY60AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fshsr09b1c",
      modelNumber: "FSHSR09B1C",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fshsr18b3d",
      modelNumber: "FSHSR18B3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphsr09a1c",
      modelNumber: "FPHSR09A1C",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphsr12a1c",
      modelNumber: "FPHSR12A1C",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphsr12a3d",
      modelNumber: "FPHSR12A3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphsr09a3d",
      modelNumber: "FPHSR09A3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphsr18a3d",
      modelNumber: "FPHSR18A3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphsr24a3d",
      modelNumber: "FPHSR24A3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd18ay48ajvc",
      modelNumber: "RD18AY48AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd18ay36ajvc",
      modelNumber: "RD18AY36AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd18ay24ajvc",
      modelNumber: "RD18AY24AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16ay24ajvc",
      modelNumber: "RD16AY24AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16ay48ajvc",
      modelNumber: "RD16AY48AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-rd16ay60ajvc",
      modelNumber: "RD16AY60AJVC",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphfr09a3d",
      modelNumber: "FPHFR09A3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphfr12a3d",
      modelNumber: "FPHFR12A3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphfr18a3d",
      modelNumber: "FPHFR18A3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphfr24a3d",
      modelNumber: "FPHFR24A3D",
      brandId: "rheem",
      refrigerant: null as any,
    },
    {
      id: "rheem-fphfr36a3d",
      modelNumber: "FPHFR36A3D",
      brandId: "rheem",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [
    {
      id: "rheem-riwh09avfj",
      modelNumber: "RIWH09AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh09ahwj",
      modelNumber: "RIWH09AHWJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rifh09avfj",
      modelNumber: "RIFH09AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-ridh09avfj",
      modelNumber: "RIDH09AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rich09avfj",
      modelNumber: "RICH09AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh09bvfj",
      modelNumber: "RIWH09BVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rifhfz09aj2s",
      modelNumber: "RIFHFZ09AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz09aj2s",
      modelNumber: "RIWHHZ09AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhgz09aj1s",
      modelNumber: "RIWHGZ09AJ1S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz09aj3s",
      modelNumber: "RIWHHZ09AJ3S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-richhz09aj8s",
      modelNumber: "RICHHZ09AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh12avfj",
      modelNumber: "RIWH12AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh12ahwj",
      modelNumber: "RIWH12AHWJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rifh12avfj",
      modelNumber: "RIFH12AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-ridh12avfj",
      modelNumber: "RIDH12AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rich12avfj",
      modelNumber: "RICH12AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh12bvfj",
      modelNumber: "RIWH12BVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rifhfz12aj2s",
      modelNumber: "RIFHFZ12AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhgz12aj1s",
      modelNumber: "RIWHGZ12AJ1S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz12aj3s",
      modelNumber: "RIWHHZ12AJ3S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz12aj2s",
      modelNumber: "RIWHHZ12AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-richhz12aj8s",
      modelNumber: "RICHHZ12AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rimhhz12aj8s",
      modelNumber: "RIMHHZ12AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fahsw12a1c",
      modelNumber: "FAHSW12A1C",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh18asj",
      modelNumber: "RIWH18ASJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh18avfj",
      modelNumber: "RIWH18AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-ridh18avfj",
      modelNumber: "RIDH18AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rich18avfj",
      modelNumber: "RICH18AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-appareils-sans-conduits",
      modelNumber: "Appareils sans conduits",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-appareils-avec-conduits",
      modelNumber: "Appareils avec conduits",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-combinaison-d-appareils-avec-ou-sans-conduits",
      modelNumber: "Combinaison d'appareils avec ou sans conduits",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rich18axcj",
      modelNumber: "RICH18AXCJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhfz18aj2s",
      modelNumber: "RIWHFZ18AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz18aj2s",
      modelNumber: "RIWHHZ18AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz18aj3s",
      modelNumber: "RIWHHZ18AJ3S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-richhz18aj8s",
      modelNumber: "RICHHZ18AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rimhhz18aj8s",
      modelNumber: "RIMHHZ18AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-righhz18aj8s",
      modelNumber: "RIGHHZ18AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rishhz18aj8s",
      modelNumber: "RISHHZ18AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh24asj",
      modelNumber: "RIWH24ASJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmv2421ueac",
      modelNumber: "RHMV2421UEAC",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rich24axcj",
      modelNumber: "RICH24AXCJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmv2421mnac",
      modelNumber: "RHMV2421MNAC",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz24aj3s",
      modelNumber: "RIWHHZ24AJ3S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rimhhz24aj8s",
      modelNumber: "RIMHHZ24AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-righhz24aj8s",
      modelNumber: "RIGHHZ24AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rishhz24aj8s",
      modelNumber: "RISHHZ24AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmvz2421mnaunj",
      modelNumber: "RHMVZ2421MNAUNJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fahfw24a3d",
      modelNumber: "FAHFW24A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh15ahwj",
      modelNumber: "RIWH15AHWJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rifh15avfj",
      modelNumber: "RIFH15AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rifhfz15aj2s",
      modelNumber: "RIFHFZ15AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhgz15aj1s",
      modelNumber: "RIWHGZ15AJ1S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh24avfj",
      modelNumber: "RIWH24AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhfz24aj2s",
      modelNumber: "RIWHFZ24AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz24aj2s",
      modelNumber: "RIWHHZ24AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmvz6021seaca",
      modelNumber: "RHMVZ6021SEACA",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rimhgz42aj8s",
      modelNumber: "RIMHGZ42AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwh30avfj",
      modelNumber: "RIWH30AVFJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rich30axcj",
      modelNumber: "RICH30AXCJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmv3021snac",
      modelNumber: "RHMV3021SNAC",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhfz30aj2s",
      modelNumber: "RIWHFZ30AJ2S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz30aj3s",
      modelNumber: "RIWHHZ30AJ3S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-riwhhz36aj3s",
      modelNumber: "RIWHHZ36AJ3S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rimhhz30aj8s",
      modelNumber: "RIMHHZ30AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-righhz30aj8s",
      modelNumber: "RIGHHZ30AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rishhz30aj8s",
      modelNumber: "RISHHZ30AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmvz3021snaunj",
      modelNumber: "RHMVZ3021SNAUNJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmvz3621mnauaj",
      modelNumber: "RHMVZ3621MNAUAJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rh2vy3617stacn",
      modelNumber: "RH2VY3617STACN",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmv6021seac",
      modelNumber: "RHMV6021SEAC",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rich36axcj",
      modelNumber: "RICH36AXCJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmv3621mnac",
      modelNumber: "RHMV3621MNAC",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rimhhz36aj8s",
      modelNumber: "RIMHHZ36AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-righhz36aj8s",
      modelNumber: "RIGHHZ36AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rishhz36aj8s",
      modelNumber: "RISHHZ36AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmv4821snac",
      modelNumber: "RHMV4821SNAC",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rich48axcj",
      modelNumber: "RICH48AXCJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rimhgz48aj8s",
      modelNumber: "RIMHGZ48AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-righgz48aj8s",
      modelNumber: "RIGHGZ48AJ8S",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rhmvz4821snauaj",
      modelNumber: "RHMVZ4821SNAUAJ",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rcf2421uea",
      modelNumber: "RCF2421UEA",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcf6021sea",
      modelNumber: "RCF6021SEA",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfz6021seaam",
      modelNumber: "RCFZ6021SEAAM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfy6021seaam",
      modelNumber: "RCFY6021SEAAM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rhmvz2421heaca",
      modelNumber: "RHMVZ2421HEACA",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfz2421heaam",
      modelNumber: "RCFZ2421HEAAM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2tz3617stann",
      modelNumber: "RH2TZ3617STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vz3617stann",
      modelNumber: "RH2VZ3617STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfz3621mtanm",
      modelNumber: "RCFZ3621MTANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh3vz4821stacn",
      modelNumber: "RH3VZ4821STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rhmvy3621meaca",
      modelNumber: "RHMVY3621MEACA",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfy3621meaam",
      modelNumber: "RCFY3621MEAAM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2tz3621mtana",
      modelNumber: "RH2TZ3621MTANA",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vz3621mtana",
      modelNumber: "RH2VZ3621MTANA",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vz3621mtann",
      modelNumber: "RH2VZ3621MTANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfz3621mtaam",
      modelNumber: "RCFZ3621MTAAM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2tz3621mtann",
      modelNumber: "RH2TZ3621MTANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rf2tz3624stans",
      modelNumber: "RF2TZ3624STANS",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rb2tz3621stanm",
      modelNumber: "RB2TZ3621STANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vz6024stann",
      modelNumber: "RH2VZ6024STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2tz6024stann",
      modelNumber: "RH2TZ6024STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfz6024stanm",
      modelNumber: "RCFZ6024STANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh3vz4824stacn",
      modelNumber: "RH3VZ4824STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh3vz6024stacn",
      modelNumber: "RH3VZ6024STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfz2417mtanm",
      modelNumber: "RCFZ2417MTANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh3vz3617stacn",
      modelNumber: "RH3VZ3617STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rf2tz2421stans",
      modelNumber: "RF2TZ2421STANS",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rb2tz2417stanm",
      modelNumber: "RB2TZ2417STANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfz4824mtanm",
      modelNumber: "RCFZ4824MTANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rhmvy4821seaca",
      modelNumber: "RHMVY4821SEACA",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfy4821seaam",
      modelNumber: "RCFY4821SEAAM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vy6024stacn",
      modelNumber: "RH2VY6024STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfy6024stanm",
      modelNumber: "RCFY6024STANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vy6021staca",
      modelNumber: "RH2VY6021STACA",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2ty6024stann",
      modelNumber: "RH2TY6024STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rhmvy6024seacn",
      modelNumber: "RHMVY6024SEACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rhmvy6021seaca",
      modelNumber: "RHMVY6021SEACA",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fahsw09a1c",
      modelNumber: "FAHSW09A1C",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fahfw18a3d",
      modelNumber: "FAHFW18A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fahfw12a3d",
      modelNumber: "FAHFW12A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fahfw09a3d",
      modelNumber: "FAHFW09A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-rcfy4824mtanm",
      modelNumber: "RCFY4824MTANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vy4824stacn",
      modelNumber: "RH2VY4824STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vy4821stacn",
      modelNumber: "RH2VY4821STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2ty4824mtann",
      modelNumber: "RH2TY4824MTANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2ty4824stann",
      modelNumber: "RH2TY4824STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2ty4821stann",
      modelNumber: "RH2TY4821STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vy3621mtacn",
      modelNumber: "RH2VY3621MTACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfy3621mtanm",
      modelNumber: "RCFY3621MTANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfy3624mtanm",
      modelNumber: "RCFY3624MTANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vy3621stacn",
      modelNumber: "RH2VY3621STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2ty3621stann",
      modelNumber: "RH2TY3621STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2ty3617stann",
      modelNumber: "RH2TY3617STANN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rcfy2417mtanm",
      modelNumber: "RCFY2417MTANM",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rhmvy2421meacn",
      modelNumber: "RHMVY2421MEACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rf2ty2421stans",
      modelNumber: "RF2TY2421STANS",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-rh2vy2417stacn",
      modelNumber: "RH2VY2417STACN",
      brandId: "rheem",
      type: "central-ducted",
    },
    {
      id: "rheem-fphfd09a3d",
      modelNumber: "FPHFD09A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphfc09a3d",
      modelNumber: "FPHFC09A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphfd12a3d",
      modelNumber: "FPHFD12A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphfc12a3d",
      modelNumber: "FPHFC12A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphfc18a3d",
      modelNumber: "FPHFC18A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphfd18a3d",
      modelNumber: "FPHFD18A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphfc24a3d",
      modelNumber: "FPHFC24A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphfd24a3d",
      modelNumber: "FPHFD24A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphsd36a3d",
      modelNumber: "FPHSD36A3D",
      brandId: "rheem",
      type: "wall-single",
    },
    {
      id: "rheem-fphsc36a3d",
      modelNumber: "FPHSC36A3D",
      brandId: "rheem",
      type: "wall-single",
    }
  ],
  configurations: [
    {
      id: "rheem-standard-wall-single-9000-cfg-1",
      slug: "rheem-standard-wall-single-9000-cfg-1",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-rosh09afwj",
      indoorUnitId: "rheem-riwh09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-2",
      slug: "rheem-standard-wall-single-9000-cfg-2",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-rosh09ahwj",
      indoorUnitId: "rheem-riwh09ahwj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-3",
      slug: "rheem-standard-wall-single-9000-cfg-3",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-rosh09ahhj",
      indoorUnitId: "rheem-riwh09ahwj",
      coolingCapacityMinBtu: 9007,
      coolingCapacityMaxBtu: 9007,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-4",
      slug: "rheem-standard-wall-single-9000-cfg-4",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-rosh09affhj",
      indoorUnitId: "rheem-rifh09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-5",
      slug: "rheem-standard-wall-single-9000-cfg-5",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-rosh09affj",
      indoorUnitId: "rheem-rifh09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-6",
      slug: "rheem-standard-wall-single-9000-cfg-6",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-rosh09afcj",
      indoorUnitId: "rheem-ridh09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-7",
      slug: "rheem-standard-wall-single-9000-cfg-7",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-rosh09afcj",
      indoorUnitId: "rheem-rich09avfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-8",
      slug: "rheem-standard-wall-single-9000-cfg-8",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-rosh09bfwj",
      indoorUnitId: "rheem-riwh09bvfj",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-9",
      slug: "rheem-standard-wall-single-9000-cfg-9",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-ro1hfz09aj2s",
      indoorUnitId: "rheem-rifhfz09aj2s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-10",
      slug: "rheem-standard-wall-single-9000-cfg-10",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-ro1hfz09aj2h",
      indoorUnitId: "rheem-rifhfz09aj2s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-11",
      slug: "rheem-standard-wall-single-9000-cfg-11",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-ro1hhz09aj2h",
      indoorUnitId: "rheem-riwhhz09aj2s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-12",
      slug: "rheem-standard-wall-single-9000-cfg-12",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-ro1hgz09aj1s",
      indoorUnitId: "rheem-riwhgz09aj1s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-13",
      slug: "rheem-standard-wall-single-9000-cfg-13",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-ro1hgz09aj1h",
      indoorUnitId: "rheem-riwhgz09aj1s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-14",
      slug: "rheem-standard-wall-single-9000-cfg-14",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-ro1hhz09aj3s",
      indoorUnitId: "rheem-riwhhz09aj3s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-15",
      slug: "rheem-standard-wall-single-9000-cfg-15",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-ro1hhz09aj2s",
      indoorUnitId: "rheem-riwhhz09aj2s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-9000-cfg-16",
      slug: "rheem-standard-wall-single-9000-cfg-16",
      modelId: "rheem-standard-wall-single-9000",
      outdoorUnitId: "rheem-ro1hhz09aj8s",
      indoorUnitId: "rheem-richhz09aj8s",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-1",
      slug: "rheem-standard-wall-single-12000-cfg-1",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-rosh12afwj",
      indoorUnitId: "rheem-riwh12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-2",
      slug: "rheem-standard-wall-single-12000-cfg-2",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-rosh12ahwj",
      indoorUnitId: "rheem-riwh12ahwj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-3",
      slug: "rheem-standard-wall-single-12000-cfg-3",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-rosh12ahhj",
      indoorUnitId: "rheem-riwh12ahwj",
      coolingCapacityMinBtu: 12010,
      coolingCapacityMaxBtu: 12010,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-4",
      slug: "rheem-standard-wall-single-12000-cfg-4",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-rosh12affhj",
      indoorUnitId: "rheem-rifh12avfj",
      coolingCapacityMinBtu: 12010,
      coolingCapacityMaxBtu: 12010,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-5",
      slug: "rheem-standard-wall-single-12000-cfg-5",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-rosh12affj",
      indoorUnitId: "rheem-rifh12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-6",
      slug: "rheem-standard-wall-single-12000-cfg-6",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-rosh12afcj",
      indoorUnitId: "rheem-ridh12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-7",
      slug: "rheem-standard-wall-single-12000-cfg-7",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-rosh12afcj",
      indoorUnitId: "rheem-rich12avfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-8",
      slug: "rheem-standard-wall-single-12000-cfg-8",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-rosh12bfwj",
      indoorUnitId: "rheem-riwh12bvfj",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-9",
      slug: "rheem-standard-wall-single-12000-cfg-9",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-ro1hfz12aj2s",
      indoorUnitId: "rheem-rifhfz12aj2s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-10",
      slug: "rheem-standard-wall-single-12000-cfg-10",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-ro1hfz12aj2h",
      indoorUnitId: "rheem-rifhfz12aj2s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-11",
      slug: "rheem-standard-wall-single-12000-cfg-11",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-ro1hgz12aj1s",
      indoorUnitId: "rheem-riwhgz12aj1s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-12",
      slug: "rheem-standard-wall-single-12000-cfg-12",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-ro1hgz12aj1h",
      indoorUnitId: "rheem-riwhgz12aj1s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-13",
      slug: "rheem-standard-wall-single-12000-cfg-13",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-ro1hhz12aj3s",
      indoorUnitId: "rheem-riwhhz12aj3s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-14",
      slug: "rheem-standard-wall-single-12000-cfg-14",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-ro1hhz12aj2s",
      indoorUnitId: "rheem-riwhhz12aj2s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-15",
      slug: "rheem-standard-wall-single-12000-cfg-15",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-ro1hhz12aj8s",
      indoorUnitId: "rheem-richhz12aj8s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-16",
      slug: "rheem-standard-wall-single-12000-cfg-16",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-ro1hhz12aj8s",
      indoorUnitId: "rheem-rimhhz12aj8s",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-12000-cfg-17",
      slug: "rheem-standard-wall-single-12000-cfg-17",
      modelId: "rheem-standard-wall-single-12000",
      outdoorUnitId: "rheem-fshsr12b1c",
      indoorUnitId: "rheem-fahsw12a1c",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-1",
      slug: "rheem-standard-wall-single-18000-cfg-1",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-rosh18asj",
      indoorUnitId: "rheem-riwh18asj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-2",
      slug: "rheem-standard-wall-single-18000-cfg-2",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-rosh18axfwj",
      indoorUnitId: "rheem-riwh18avfj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-3",
      slug: "rheem-standard-wall-single-18000-cfg-3",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-rosh18ahxhj",
      indoorUnitId: "rheem-riwh18avfj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-4",
      slug: "rheem-standard-wall-single-18000-cfg-4",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-rosh18afcj",
      indoorUnitId: "rheem-ridh18avfj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-5",
      slug: "rheem-standard-wall-single-18000-cfg-5",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-rosh18afcj",
      indoorUnitId: "rheem-rich18avfj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-6",
      slug: "rheem-standard-wall-single-18000-cfg-6",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-romh18fxzhj",
      indoorUnitId: "rheem-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-7",
      slug: "rheem-standard-wall-single-18000-cfg-7",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-romh18fxzhj",
      indoorUnitId: "rheem-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-8",
      slug: "rheem-standard-wall-single-18000-cfg-8",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-romh18fxzhj",
      indoorUnitId: "rheem-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-9",
      slug: "rheem-standard-wall-single-18000-cfg-9",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-rosh18vgsn",
      indoorUnitId: "rheem-rich18axcj",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-10",
      slug: "rheem-standard-wall-single-18000-cfg-10",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-ro1hfz18aj2h",
      indoorUnitId: "rheem-riwhfz18aj2s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-11",
      slug: "rheem-standard-wall-single-18000-cfg-11",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-ro1hhz18aj2s",
      indoorUnitId: "rheem-riwhhz18aj2s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-12",
      slug: "rheem-standard-wall-single-18000-cfg-12",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-ro1hhz18aj3s",
      indoorUnitId: "rheem-riwhhz18aj3s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-13",
      slug: "rheem-standard-wall-single-18000-cfg-13",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-ro1hhz18aj8s",
      indoorUnitId: "rheem-richhz18aj8s",
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-14",
      slug: "rheem-standard-wall-single-18000-cfg-14",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-ro1hhz18aj8s",
      indoorUnitId: "rheem-rimhhz18aj8s",
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-15",
      slug: "rheem-standard-wall-single-18000-cfg-15",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-ro1hhz18aj8s",
      indoorUnitId: "rheem-righhz18aj8s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-18000-cfg-16",
      slug: "rheem-standard-wall-single-18000-cfg-16",
      modelId: "rheem-standard-wall-single-18000",
      outdoorUnitId: "rheem-ro1hhz18aj8s",
      indoorUnitId: "rheem-rishhz18aj8s",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-1",
      slug: "rheem-standard-wall-single-24000-cfg-1",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-rosh24asj",
      indoorUnitId: "rheem-riwh24asj",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-2",
      slug: "rheem-standard-wall-single-24000-cfg-2",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rhmv2421ueac",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-3",
      slug: "rheem-standard-wall-single-24000-cfg-3",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-rosh24vgsn",
      indoorUnitId: "rheem-rich24axcj",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-4",
      slug: "rheem-standard-wall-single-24000-cfg-4",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-rp1724hjvxa",
      indoorUnitId: "rheem-rhmv2421mnac",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-5",
      slug: "rheem-standard-wall-single-24000-cfg-5",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-ro1hhz24aj3s",
      indoorUnitId: "rheem-riwhhz24aj3s",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-6",
      slug: "rheem-standard-wall-single-24000-cfg-6",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-ro1hhz24aj8s",
      indoorUnitId: "rheem-rimhhz24aj8s",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-7",
      slug: "rheem-standard-wall-single-24000-cfg-7",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-ro1hhz24aj8s",
      indoorUnitId: "rheem-righhz24aj8s",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-8",
      slug: "rheem-standard-wall-single-24000-cfg-8",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-ro1hhz24aj8s",
      indoorUnitId: "rheem-rishhz24aj8s",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-9",
      slug: "rheem-standard-wall-single-24000-cfg-9",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-rd16az24ajvua",
      indoorUnitId: "rheem-rhmvz2421mnaunj",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-24000-cfg-10",
      slug: "rheem-standard-wall-single-24000-cfg-10",
      modelId: "rheem-standard-wall-single-24000",
      outdoorUnitId: "rheem-fshsr24b3d",
      indoorUnitId: "rheem-fahfw24a3d",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-15000-cfg-1",
      slug: "rheem-standard-wall-single-15000-cfg-1",
      modelId: "rheem-standard-wall-single-15000",
      outdoorUnitId: "rheem-rosh15ahwj",
      indoorUnitId: "rheem-riwh15ahwj",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-15000-cfg-2",
      slug: "rheem-standard-wall-single-15000-cfg-2",
      modelId: "rheem-standard-wall-single-15000",
      outdoorUnitId: "rheem-rosh15ahhj",
      indoorUnitId: "rheem-riwh15ahwj",
      coolingCapacityMinBtu: 14501,
      coolingCapacityMaxBtu: 14501,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-15000-cfg-3",
      slug: "rheem-standard-wall-single-15000-cfg-3",
      modelId: "rheem-standard-wall-single-15000",
      outdoorUnitId: "rheem-rosh15affhj",
      indoorUnitId: "rheem-rifh15avfj",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-15000-cfg-4",
      slug: "rheem-standard-wall-single-15000-cfg-4",
      modelId: "rheem-standard-wall-single-15000",
      outdoorUnitId: "rheem-rosh15affj",
      indoorUnitId: "rheem-rifh15avfj",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-15000-cfg-5",
      slug: "rheem-standard-wall-single-15000-cfg-5",
      modelId: "rheem-standard-wall-single-15000",
      outdoorUnitId: "rheem-ro1hfz15aj2s",
      indoorUnitId: "rheem-rifhfz15aj2s",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-15000-cfg-6",
      slug: "rheem-standard-wall-single-15000-cfg-6",
      modelId: "rheem-standard-wall-single-15000",
      outdoorUnitId: "rheem-ro1hfz15aj2h",
      indoorUnitId: "rheem-rifhfz15aj2s",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-15000-cfg-7",
      slug: "rheem-standard-wall-single-15000-cfg-7",
      modelId: "rheem-standard-wall-single-15000",
      outdoorUnitId: "rheem-ro1hgz15aj1s",
      indoorUnitId: "rheem-riwhgz15aj1s",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-15000-cfg-8",
      slug: "rheem-standard-wall-single-15000-cfg-8",
      modelId: "rheem-standard-wall-single-15000",
      outdoorUnitId: "rheem-ro1hgz15aj1h",
      indoorUnitId: "rheem-riwhgz15aj1s",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-20000-cfg-1",
      slug: "rheem-standard-wall-single-20000-cfg-1",
      modelId: "rheem-standard-wall-single-20000",
      outdoorUnitId: "rheem-rosh24axfwj",
      indoorUnitId: "rheem-riwh24avfj",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-20000-cfg-2",
      slug: "rheem-standard-wall-single-20000-cfg-2",
      modelId: "rheem-standard-wall-single-20000",
      outdoorUnitId: "rheem-rosh24ahxhj",
      indoorUnitId: "rheem-riwh24avfj",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-20000-cfg-3",
      slug: "rheem-standard-wall-single-20000-cfg-3",
      modelId: "rheem-standard-wall-single-20000",
      outdoorUnitId: "rheem-romh24fxzhj",
      indoorUnitId: "rheem-appareils-sans-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-20000-cfg-4",
      slug: "rheem-standard-wall-single-20000-cfg-4",
      modelId: "rheem-standard-wall-single-20000",
      outdoorUnitId: "rheem-romh24fxzhj",
      indoorUnitId: "rheem-appareils-avec-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-20000-cfg-5",
      slug: "rheem-standard-wall-single-20000-cfg-5",
      modelId: "rheem-standard-wall-single-20000",
      outdoorUnitId: "rheem-romh24fxzhj",
      indoorUnitId: "rheem-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-20000-cfg-6",
      slug: "rheem-standard-wall-single-20000-cfg-6",
      modelId: "rheem-standard-wall-single-20000",
      outdoorUnitId: "rheem-ro1hfz24aj2h",
      indoorUnitId: "rheem-riwhfz24aj2s",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-20000-cfg-7",
      slug: "rheem-standard-wall-single-20000-cfg-7",
      modelId: "rheem-standard-wall-single-20000",
      outdoorUnitId: "rheem-ro1hhz24aj2s",
      indoorUnitId: "rheem-riwhhz24aj2s",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-42000-cfg-1",
      slug: "rheem-standard-wall-single-42000-cfg-1",
      modelId: "rheem-standard-wall-single-42000",
      outdoorUnitId: "rheem-romh45afxzj",
      indoorUnitId: "rheem-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-42000-cfg-2",
      slug: "rheem-standard-wall-single-42000-cfg-2",
      modelId: "rheem-standard-wall-single-42000",
      outdoorUnitId: "rheem-romh45afxzj",
      indoorUnitId: "rheem-appareils-avec-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-42000-cfg-3",
      slug: "rheem-standard-wall-single-42000-cfg-3",
      modelId: "rheem-standard-wall-single-42000",
      outdoorUnitId: "rheem-romh45afxzj",
      indoorUnitId: "rheem-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-42000-cfg-4",
      slug: "rheem-standard-wall-single-42000-cfg-4",
      modelId: "rheem-standard-wall-single-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rhmvz6021seaca",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-42000-cfg-5",
      slug: "rheem-standard-wall-single-42000-cfg-5",
      modelId: "rheem-standard-wall-single-42000",
      outdoorUnitId: "rheem-ro1hgz42aj8s",
      indoorUnitId: "rheem-rimhgz42aj8s",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-42000-cfg-6",
      slug: "rheem-standard-wall-single-42000-cfg-6",
      modelId: "rheem-standard-wall-single-42000",
      outdoorUnitId: "rheem-ro5hfz45aj2s",
      indoorUnitId: "rheem-appareils-sans-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-42000-cfg-7",
      slug: "rheem-standard-wall-single-42000-cfg-7",
      modelId: "rheem-standard-wall-single-42000",
      outdoorUnitId: "rheem-ro5hfz45aj2s",
      indoorUnitId: "rheem-appareils-avec-conduits",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-1",
      slug: "rheem-standard-wall-single-30000-cfg-1",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-rosh30ahxhj",
      indoorUnitId: "rheem-riwh30avfj",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-2",
      slug: "rheem-standard-wall-single-30000-cfg-2",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-rosh30vgsn",
      indoorUnitId: "rheem-rich30axcj",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-3",
      slug: "rheem-standard-wall-single-30000-cfg-3",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-rp1730hjvxa",
      indoorUnitId: "rheem-rhmv3021snac",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-4",
      slug: "rheem-standard-wall-single-30000-cfg-4",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-ro1hfz30aj2h",
      indoorUnitId: "rheem-riwhfz30aj2s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-5",
      slug: "rheem-standard-wall-single-30000-cfg-5",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-ro1hhz30aj3s",
      indoorUnitId: "rheem-riwhhz30aj3s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-6",
      slug: "rheem-standard-wall-single-30000-cfg-6",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-ro1hhz36aj3s",
      indoorUnitId: "rheem-riwhhz36aj3s",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-7",
      slug: "rheem-standard-wall-single-30000-cfg-7",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-ro1hhz30aj8s",
      indoorUnitId: "rheem-rimhhz30aj8s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-8",
      slug: "rheem-standard-wall-single-30000-cfg-8",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-ro1hhz30aj8s",
      indoorUnitId: "rheem-righhz30aj8s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-9",
      slug: "rheem-standard-wall-single-30000-cfg-9",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-ro1hhz30aj8s",
      indoorUnitId: "rheem-rishhz30aj8s",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-10",
      slug: "rheem-standard-wall-single-30000-cfg-10",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-rd16az30ajvua",
      indoorUnitId: "rheem-rhmvz3021snaunj",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-11",
      slug: "rheem-standard-wall-single-30000-cfg-11",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-rd16az30ajhua",
      indoorUnitId: "rheem-rhmvz3021snaunj",
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-12",
      slug: "rheem-standard-wall-single-30000-cfg-12",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-rd16az36ajhua",
      indoorUnitId: "rheem-rhmvz3621mnauaj",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-30000-cfg-13",
      slug: "rheem-standard-wall-single-30000-cfg-13",
      modelId: "rheem-standard-wall-single-30000",
      outdoorUnitId: "rheem-rd16ay36ajvc",
      indoorUnitId: "rheem-rh2vy3617stacn",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-1",
      slug: "rheem-standard-wall-single-36000-cfg-1",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-romh36fxzhj",
      indoorUnitId: "rheem-appareils-sans-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-2",
      slug: "rheem-standard-wall-single-36000-cfg-2",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-romh36fxzhj",
      indoorUnitId: "rheem-appareils-avec-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-3",
      slug: "rheem-standard-wall-single-36000-cfg-3",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-romh36fxzhj",
      indoorUnitId: "rheem-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-4",
      slug: "rheem-standard-wall-single-36000-cfg-4",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-romh36afxzj",
      indoorUnitId: "rheem-combinaison-d-appareils-avec-ou-sans-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-5",
      slug: "rheem-standard-wall-single-36000-cfg-5",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rhmv6021seac",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-6",
      slug: "rheem-standard-wall-single-36000-cfg-6",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-rosh36vgsn",
      indoorUnitId: "rheem-rich36axcj",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-7",
      slug: "rheem-standard-wall-single-36000-cfg-7",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-rp1736hjvxa",
      indoorUnitId: "rheem-rhmv3621mnac",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-8",
      slug: "rheem-standard-wall-single-36000-cfg-8",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-rd16az36ajvua",
      indoorUnitId: "rheem-rhmvz3621mnauaj",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-9",
      slug: "rheem-standard-wall-single-36000-cfg-9",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-ro4hfz36aj1h",
      indoorUnitId: "rheem-appareils-sans-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-10",
      slug: "rheem-standard-wall-single-36000-cfg-10",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-ro4hfz36aj1h",
      indoorUnitId: "rheem-appareils-avec-conduits",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-11",
      slug: "rheem-standard-wall-single-36000-cfg-11",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-ro1hhz36aj8s",
      indoorUnitId: "rheem-rimhhz36aj8s",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-12",
      slug: "rheem-standard-wall-single-36000-cfg-12",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-ro1hhz36aj8s",
      indoorUnitId: "rheem-righhz36aj8s",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-36000-cfg-13",
      slug: "rheem-standard-wall-single-36000-cfg-13",
      modelId: "rheem-standard-wall-single-36000",
      outdoorUnitId: "rheem-ro1hhz36aj8s",
      indoorUnitId: "rheem-rishhz36aj8s",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-48000-cfg-1",
      slug: "rheem-standard-wall-single-48000-cfg-1",
      modelId: "rheem-standard-wall-single-48000",
      outdoorUnitId: "rheem-rp2048bjv",
      indoorUnitId: "rheem-rhmv6021seac",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-48000-cfg-2",
      slug: "rheem-standard-wall-single-48000-cfg-2",
      modelId: "rheem-standard-wall-single-48000",
      outdoorUnitId: "rheem-rp1748hjvxa",
      indoorUnitId: "rheem-rhmv4821snac",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-48000-cfg-3",
      slug: "rheem-standard-wall-single-48000-cfg-3",
      modelId: "rheem-standard-wall-single-48000",
      outdoorUnitId: "rheem-rosh48vgsn",
      indoorUnitId: "rheem-rich48axcj",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-48000-cfg-4",
      slug: "rheem-standard-wall-single-48000-cfg-4",
      modelId: "rheem-standard-wall-single-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rhmvz6021seaca",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-48000-cfg-5",
      slug: "rheem-standard-wall-single-48000-cfg-5",
      modelId: "rheem-standard-wall-single-48000",
      outdoorUnitId: "rheem-ro1hgz48aj8s",
      indoorUnitId: "rheem-rimhgz48aj8s",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-48000-cfg-6",
      slug: "rheem-standard-wall-single-48000-cfg-6",
      modelId: "rheem-standard-wall-single-48000",
      outdoorUnitId: "rheem-ro1hgz48aj8s",
      indoorUnitId: "rheem-righgz48aj8s",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-48000-cfg-7",
      slug: "rheem-standard-wall-single-48000-cfg-7",
      modelId: "rheem-standard-wall-single-48000",
      outdoorUnitId: "rheem-rd16az48ajvua",
      indoorUnitId: "rheem-rhmvz4821snauaj",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-48000-cfg-8",
      slug: "rheem-standard-wall-single-48000-cfg-8",
      modelId: "rheem-standard-wall-single-48000",
      outdoorUnitId: "rheem-rd16az48ajhua",
      indoorUnitId: "rheem-rhmvz4821snauaj",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-1",
      slug: "rheem-standard-central-ducted-24000-cfg-1",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-2",
      slug: "rheem-standard-central-ducted-24000-cfg-2",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-3",
      slug: "rheem-standard-central-ducted-24000-cfg-3",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-4",
      slug: "rheem-standard-central-ducted-24000-cfg-4",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-5",
      slug: "rheem-standard-central-ducted-24000-cfg-5",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-6",
      slug: "rheem-standard-central-ducted-24000-cfg-6",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-7",
      slug: "rheem-standard-central-ducted-24000-cfg-7",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-8",
      slug: "rheem-standard-central-ducted-24000-cfg-8",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-9",
      slug: "rheem-standard-central-ducted-24000-cfg-9",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-24000-cfg-10",
      slug: "rheem-standard-central-ducted-24000-cfg-10",
      modelId: "rheem-standard-central-ducted-24000",
      outdoorUnitId: "rheem-rp2024bjv",
      indoorUnitId: "rheem-rcf2421uea",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-1",
      slug: "rheem-standard-central-ducted-36000-cfg-1",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-2",
      slug: "rheem-standard-central-ducted-36000-cfg-2",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-3",
      slug: "rheem-standard-central-ducted-36000-cfg-3",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-4",
      slug: "rheem-standard-central-ducted-36000-cfg-4",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-5",
      slug: "rheem-standard-central-ducted-36000-cfg-5",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-6",
      slug: "rheem-standard-central-ducted-36000-cfg-6",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-7",
      slug: "rheem-standard-central-ducted-36000-cfg-7",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-8",
      slug: "rheem-standard-central-ducted-36000-cfg-8",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-9",
      slug: "rheem-standard-central-ducted-36000-cfg-9",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-10",
      slug: "rheem-standard-central-ducted-36000-cfg-10",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-11",
      slug: "rheem-standard-central-ducted-36000-cfg-11",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-12",
      slug: "rheem-standard-central-ducted-36000-cfg-12",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-13",
      slug: "rheem-standard-central-ducted-36000-cfg-13",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-14",
      slug: "rheem-standard-central-ducted-36000-cfg-14",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-36000-cfg-15",
      slug: "rheem-standard-central-ducted-36000-cfg-15",
      modelId: "rheem-standard-central-ducted-36000",
      outdoorUnitId: "rheem-rp2036bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-1",
      slug: "rheem-standard-central-ducted-48000-cfg-1",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp2048bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-2",
      slug: "rheem-standard-central-ducted-48000-cfg-2",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp2048bjv",
      indoorUnitId: "rheem-rcf6021sea",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-3",
      slug: "rheem-standard-central-ducted-48000-cfg-3",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-4",
      slug: "rheem-standard-central-ducted-48000-cfg-4",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-5",
      slug: "rheem-standard-central-ducted-48000-cfg-5",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-6",
      slug: "rheem-standard-central-ducted-48000-cfg-6",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-7",
      slug: "rheem-standard-central-ducted-48000-cfg-7",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-8",
      slug: "rheem-standard-central-ducted-48000-cfg-8",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-9",
      slug: "rheem-standard-central-ducted-48000-cfg-9",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-10",
      slug: "rheem-standard-central-ducted-48000-cfg-10",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-11",
      slug: "rheem-standard-central-ducted-48000-cfg-11",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-12",
      slug: "rheem-standard-central-ducted-48000-cfg-12",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-13",
      slug: "rheem-standard-central-ducted-48000-cfg-13",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp18az60ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-14",
      slug: "rheem-standard-central-ducted-48000-cfg-14",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-15",
      slug: "rheem-standard-central-ducted-48000-cfg-15",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-16",
      slug: "rheem-standard-central-ducted-48000-cfg-16",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-17",
      slug: "rheem-standard-central-ducted-48000-cfg-17",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-18",
      slug: "rheem-standard-central-ducted-48000-cfg-18",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-19",
      slug: "rheem-standard-central-ducted-48000-cfg-19",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-20",
      slug: "rheem-standard-central-ducted-48000-cfg-20",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-21",
      slug: "rheem-standard-central-ducted-48000-cfg-21",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-22",
      slug: "rheem-standard-central-ducted-48000-cfg-22",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-23",
      slug: "rheem-standard-central-ducted-48000-cfg-23",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-48000-cfg-24",
      slug: "rheem-standard-central-ducted-48000-cfg-24",
      modelId: "rheem-standard-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rcfy6021seaam",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-1",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-1",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rhmvz2421heaca",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-2",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-2",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-3",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-3",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-4",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-4",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-5",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-5",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-6",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-6",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-7",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-7",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-8",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-8",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-9",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-9",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-10",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-10",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-11",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-11",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-12",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-12",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-13",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-13",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-14",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-14",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-15",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-15",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-16",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-16",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-17",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-17",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-18",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-18",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-19",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-19",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-20",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-20",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-21",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-21",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-22",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-22",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-23",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-23",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-24",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-24",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: "rheem-rcfz2421heaam",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-25",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-25",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rh2tz3617stann",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-24000-cfg-26",
      slug: "rheem-prestige-series-central-ducted-24000-cfg-26",
      modelId: "rheem-prestige-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rh2vz3617stann",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-1",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-1",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rhmvz6021seaca",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-2",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-2",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-3",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-3",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-4",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-4",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-5",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-5",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-6",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-6",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-7",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-7",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-8",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-8",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-9",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-9",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-10",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-10",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-11",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-11",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-12",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-12",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-13",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-13",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-14",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-14",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-15",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-15",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-16",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-16",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-17",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-17",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-18",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-18",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-19",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-19",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-20",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-20",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-21",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-21",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-22",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-22",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-23",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-23",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-24",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-24",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-25",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-25",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp18az36ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-26",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-26",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-27",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-27",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-28",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-28",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-29",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-29",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-30",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-30",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-31",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-31",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-32",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-32",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-33",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-33",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-34",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-34",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-35",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-35",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-36",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-36",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-37",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-37",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-38",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-38",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-39",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-39",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-40",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-40",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-41",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-41",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-42",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-42",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-43",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-43",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-44",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-44",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-45",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-45",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-46",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-46",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rh3vz4821stacn",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-47",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-47",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rhmvy3621meaca",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-48",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-48",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-49",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-49",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-50",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-50",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-51",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-51",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-52",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-52",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-53",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-53",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-54",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-54",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-55",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-55",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-56",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-56",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-57",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-57",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-58",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-58",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-59",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-59",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-60",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-60",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-36000-cfg-61",
      slug: "rheem-prestige-series-central-ducted-36000-cfg-61",
      modelId: "rheem-prestige-series-central-ducted-36000",
      outdoorUnitId: "rheem-rp19ay36ajvc",
      indoorUnitId: "rheem-rcfy3621meaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-1",
      slug: "rheem-standard-central-ducted-42000-cfg-1",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-2",
      slug: "rheem-standard-central-ducted-42000-cfg-2",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-3",
      slug: "rheem-standard-central-ducted-42000-cfg-3",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-4",
      slug: "rheem-standard-central-ducted-42000-cfg-4",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-5",
      slug: "rheem-standard-central-ducted-42000-cfg-5",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-6",
      slug: "rheem-standard-central-ducted-42000-cfg-6",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-7",
      slug: "rheem-standard-central-ducted-42000-cfg-7",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-8",
      slug: "rheem-standard-central-ducted-42000-cfg-8",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-9",
      slug: "rheem-standard-central-ducted-42000-cfg-9",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-10",
      slug: "rheem-standard-central-ducted-42000-cfg-10",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-11",
      slug: "rheem-standard-central-ducted-42000-cfg-11",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-12",
      slug: "rheem-standard-central-ducted-42000-cfg-12",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-13",
      slug: "rheem-standard-central-ducted-42000-cfg-13",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-14",
      slug: "rheem-standard-central-ducted-42000-cfg-14",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-15",
      slug: "rheem-standard-central-ducted-42000-cfg-15",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-16",
      slug: "rheem-standard-central-ducted-42000-cfg-16",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-17",
      slug: "rheem-standard-central-ducted-42000-cfg-17",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-18",
      slug: "rheem-standard-central-ducted-42000-cfg-18",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-19",
      slug: "rheem-standard-central-ducted-42000-cfg-19",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-central-ducted-42000-cfg-20",
      slug: "rheem-standard-central-ducted-42000-cfg-20",
      modelId: "rheem-standard-central-ducted-42000",
      outdoorUnitId: "rheem-rp18az48ajvc",
      indoorUnitId: "rheem-rcfz6021seaam",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-wall-single-18000-cfg-1",
      slug: "rheem-classic-plus-wall-single-18000-cfg-1",
      modelId: "rheem-classic-plus-wall-single-18000",
      outdoorUnitId: "rheem-ro2hfz18aj1h",
      indoorUnitId: "rheem-appareils-sans-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-wall-single-18000-cfg-2",
      slug: "rheem-classic-plus-wall-single-18000-cfg-2",
      modelId: "rheem-classic-plus-wall-single-18000",
      outdoorUnitId: "rheem-ro2hfz18aj1h",
      indoorUnitId: "rheem-appareils-avec-conduits",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-wall-single-20000-cfg-1",
      slug: "rheem-classic-plus-wall-single-20000-cfg-1",
      modelId: "rheem-classic-plus-wall-single-20000",
      outdoorUnitId: "rheem-ro3hfz24aj1h",
      indoorUnitId: "rheem-appareils-sans-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-wall-single-20000-cfg-2",
      slug: "rheem-classic-plus-wall-single-20000-cfg-2",
      modelId: "rheem-classic-plus-wall-single-20000",
      outdoorUnitId: "rheem-ro3hfz24aj1h",
      indoorUnitId: "rheem-appareils-avec-conduits",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-1",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-1",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rh2tz3621mtana",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-2",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-2",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rh2vz3621mtana",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-3",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-3",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rh2vz3621mtann",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-4",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-4",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-5",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-5",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-6",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-6",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtaam",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-7",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-7",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-8",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-8",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-9",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-9",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-10",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-10",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-11",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-11",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-12",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-12",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-classic-plus-central-ducted-36000-cfg-13",
      slug: "rheem-classic-plus-central-ducted-36000-cfg-13",
      modelId: "rheem-classic-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-1",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-1",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rh2tz3621mtann",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-2",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-2",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-3",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-3",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-4",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-4",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-5",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-5",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-6",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-6",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-7",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-7",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-8",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-8",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-9",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-9",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-10",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-10",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-11",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-11",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-12",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-12",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-13",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-13",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-14",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-14",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-15",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-15",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-16",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-16",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-17",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-17",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-18",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-18",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-19",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-19",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-20",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-20",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-21",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-21",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-22",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-22",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-23",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-23",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-24",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-24",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-25",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-25",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-26",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-26",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-27",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-27",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-28",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-28",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-29",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-29",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-30",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-30",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-31",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-31",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-32",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-32",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-33",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-33",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-34",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-34",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-35",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-35",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-36",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-36",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-37",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-37",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-38",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-38",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-39",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-39",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-40",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-40",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-41",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-41",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-42",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-42",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rcfz3621mtanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-43",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-43",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rf2tz3624stans",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-36000-cfg-44",
      slug: "rheem-f-series-plus-central-ducted-36000-cfg-44",
      modelId: "rheem-f-series-plus-central-ducted-36000",
      outdoorUnitId: "rheem-rd17az36aj3n",
      indoorUnitId: "rheem-rb2tz3621stanm",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-1",
      slug: "rheem-f-series-central-ducted-60000-cfg-1",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rh2vz6024stann",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-2",
      slug: "rheem-f-series-central-ducted-60000-cfg-2",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rh2tz6024stann",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-3",
      slug: "rheem-f-series-central-ducted-60000-cfg-3",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-4",
      slug: "rheem-f-series-central-ducted-60000-cfg-4",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-5",
      slug: "rheem-f-series-central-ducted-60000-cfg-5",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-6",
      slug: "rheem-f-series-central-ducted-60000-cfg-6",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-7",
      slug: "rheem-f-series-central-ducted-60000-cfg-7",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-8",
      slug: "rheem-f-series-central-ducted-60000-cfg-8",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-9",
      slug: "rheem-f-series-central-ducted-60000-cfg-9",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-10",
      slug: "rheem-f-series-central-ducted-60000-cfg-10",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-11",
      slug: "rheem-f-series-central-ducted-60000-cfg-11",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-12",
      slug: "rheem-f-series-central-ducted-60000-cfg-12",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-13",
      slug: "rheem-f-series-central-ducted-60000-cfg-13",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-14",
      slug: "rheem-f-series-central-ducted-60000-cfg-14",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-15",
      slug: "rheem-f-series-central-ducted-60000-cfg-15",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-16",
      slug: "rheem-f-series-central-ducted-60000-cfg-16",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-17",
      slug: "rheem-f-series-central-ducted-60000-cfg-17",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-18",
      slug: "rheem-f-series-central-ducted-60000-cfg-18",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-19",
      slug: "rheem-f-series-central-ducted-60000-cfg-19",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-20",
      slug: "rheem-f-series-central-ducted-60000-cfg-20",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-21",
      slug: "rheem-f-series-central-ducted-60000-cfg-21",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-22",
      slug: "rheem-f-series-central-ducted-60000-cfg-22",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-23",
      slug: "rheem-f-series-central-ducted-60000-cfg-23",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-24",
      slug: "rheem-f-series-central-ducted-60000-cfg-24",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-25",
      slug: "rheem-f-series-central-ducted-60000-cfg-25",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-26",
      slug: "rheem-f-series-central-ducted-60000-cfg-26",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-27",
      slug: "rheem-f-series-central-ducted-60000-cfg-27",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-28",
      slug: "rheem-f-series-central-ducted-60000-cfg-28",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-29",
      slug: "rheem-f-series-central-ducted-60000-cfg-29",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-30",
      slug: "rheem-f-series-central-ducted-60000-cfg-30",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-31",
      slug: "rheem-f-series-central-ducted-60000-cfg-31",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-32",
      slug: "rheem-f-series-central-ducted-60000-cfg-32",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-60000-cfg-33",
      slug: "rheem-f-series-central-ducted-60000-cfg-33",
      modelId: "rheem-f-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rh3vz4824stacn",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-1",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-1",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-2",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-2",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-3",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-3",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-4",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-4",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-5",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-5",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-6",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-6",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-7",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-7",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-8",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-8",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-9",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-9",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-10",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-10",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-11",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-11",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-12",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-12",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-13",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-13",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-14",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-14",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-60000-cfg-15",
      slug: "rheem-prestige-series-central-ducted-60000-cfg-15",
      modelId: "rheem-prestige-series-central-ducted-60000",
      outdoorUnitId: "rheem-rd17az60aj3n",
      indoorUnitId: "rheem-rh3vz6024stacn",
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-1",
      slug: "rheem-k-series-central-ducted-24000-cfg-1",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-2",
      slug: "rheem-k-series-central-ducted-24000-cfg-2",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-3",
      slug: "rheem-k-series-central-ducted-24000-cfg-3",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-4",
      slug: "rheem-k-series-central-ducted-24000-cfg-4",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-5",
      slug: "rheem-k-series-central-ducted-24000-cfg-5",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-6",
      slug: "rheem-k-series-central-ducted-24000-cfg-6",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-7",
      slug: "rheem-k-series-central-ducted-24000-cfg-7",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-8",
      slug: "rheem-k-series-central-ducted-24000-cfg-8",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-9",
      slug: "rheem-k-series-central-ducted-24000-cfg-9",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-10",
      slug: "rheem-k-series-central-ducted-24000-cfg-10",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-11",
      slug: "rheem-k-series-central-ducted-24000-cfg-11",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-12",
      slug: "rheem-k-series-central-ducted-24000-cfg-12",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-13",
      slug: "rheem-k-series-central-ducted-24000-cfg-13",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-14",
      slug: "rheem-k-series-central-ducted-24000-cfg-14",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-15",
      slug: "rheem-k-series-central-ducted-24000-cfg-15",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-16",
      slug: "rheem-k-series-central-ducted-24000-cfg-16",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-17",
      slug: "rheem-k-series-central-ducted-24000-cfg-17",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-18",
      slug: "rheem-k-series-central-ducted-24000-cfg-18",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-19",
      slug: "rheem-k-series-central-ducted-24000-cfg-19",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-20",
      slug: "rheem-k-series-central-ducted-24000-cfg-20",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-21",
      slug: "rheem-k-series-central-ducted-24000-cfg-21",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-22",
      slug: "rheem-k-series-central-ducted-24000-cfg-22",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-23",
      slug: "rheem-k-series-central-ducted-24000-cfg-23",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-24",
      slug: "rheem-k-series-central-ducted-24000-cfg-24",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-25",
      slug: "rheem-k-series-central-ducted-24000-cfg-25",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-26",
      slug: "rheem-k-series-central-ducted-24000-cfg-26",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-27",
      slug: "rheem-k-series-central-ducted-24000-cfg-27",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-28",
      slug: "rheem-k-series-central-ducted-24000-cfg-28",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-29",
      slug: "rheem-k-series-central-ducted-24000-cfg-29",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-30",
      slug: "rheem-k-series-central-ducted-24000-cfg-30",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-31",
      slug: "rheem-k-series-central-ducted-24000-cfg-31",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-32",
      slug: "rheem-k-series-central-ducted-24000-cfg-32",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-33",
      slug: "rheem-k-series-central-ducted-24000-cfg-33",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-34",
      slug: "rheem-k-series-central-ducted-24000-cfg-34",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-35",
      slug: "rheem-k-series-central-ducted-24000-cfg-35",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-36",
      slug: "rheem-k-series-central-ducted-24000-cfg-36",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-37",
      slug: "rheem-k-series-central-ducted-24000-cfg-37",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-38",
      slug: "rheem-k-series-central-ducted-24000-cfg-38",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-39",
      slug: "rheem-k-series-central-ducted-24000-cfg-39",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rcfz2417mtanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-40",
      slug: "rheem-k-series-central-ducted-24000-cfg-40",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rh3vz3617stacn",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-41",
      slug: "rheem-k-series-central-ducted-24000-cfg-41",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rf2tz2421stans",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-24000-cfg-42",
      slug: "rheem-k-series-central-ducted-24000-cfg-42",
      modelId: "rheem-k-series-central-ducted-24000",
      outdoorUnitId: "rheem-rd17az24aj3n",
      indoorUnitId: "rheem-rb2tz2417stanm",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-1",
      slug: "rheem-f-series-central-ducted-48000-cfg-1",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-2",
      slug: "rheem-f-series-central-ducted-48000-cfg-2",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-3",
      slug: "rheem-f-series-central-ducted-48000-cfg-3",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-4",
      slug: "rheem-f-series-central-ducted-48000-cfg-4",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-5",
      slug: "rheem-f-series-central-ducted-48000-cfg-5",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-6",
      slug: "rheem-f-series-central-ducted-48000-cfg-6",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-7",
      slug: "rheem-f-series-central-ducted-48000-cfg-7",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-8",
      slug: "rheem-f-series-central-ducted-48000-cfg-8",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-9",
      slug: "rheem-f-series-central-ducted-48000-cfg-9",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-10",
      slug: "rheem-f-series-central-ducted-48000-cfg-10",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-11",
      slug: "rheem-f-series-central-ducted-48000-cfg-11",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-12",
      slug: "rheem-f-series-central-ducted-48000-cfg-12",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-13",
      slug: "rheem-f-series-central-ducted-48000-cfg-13",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-14",
      slug: "rheem-f-series-central-ducted-48000-cfg-14",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-15",
      slug: "rheem-f-series-central-ducted-48000-cfg-15",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-16",
      slug: "rheem-f-series-central-ducted-48000-cfg-16",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-17",
      slug: "rheem-f-series-central-ducted-48000-cfg-17",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-18",
      slug: "rheem-f-series-central-ducted-48000-cfg-18",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-19",
      slug: "rheem-f-series-central-ducted-48000-cfg-19",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-20",
      slug: "rheem-f-series-central-ducted-48000-cfg-20",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-21",
      slug: "rheem-f-series-central-ducted-48000-cfg-21",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-22",
      slug: "rheem-f-series-central-ducted-48000-cfg-22",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-23",
      slug: "rheem-f-series-central-ducted-48000-cfg-23",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-24",
      slug: "rheem-f-series-central-ducted-48000-cfg-24",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-25",
      slug: "rheem-f-series-central-ducted-48000-cfg-25",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-26",
      slug: "rheem-f-series-central-ducted-48000-cfg-26",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-27",
      slug: "rheem-f-series-central-ducted-48000-cfg-27",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-28",
      slug: "rheem-f-series-central-ducted-48000-cfg-28",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-29",
      slug: "rheem-f-series-central-ducted-48000-cfg-29",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-30",
      slug: "rheem-f-series-central-ducted-48000-cfg-30",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-31",
      slug: "rheem-f-series-central-ducted-48000-cfg-31",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-32",
      slug: "rheem-f-series-central-ducted-48000-cfg-32",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-33",
      slug: "rheem-f-series-central-ducted-48000-cfg-33",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-34",
      slug: "rheem-f-series-central-ducted-48000-cfg-34",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-35",
      slug: "rheem-f-series-central-ducted-48000-cfg-35",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-36",
      slug: "rheem-f-series-central-ducted-48000-cfg-36",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-37",
      slug: "rheem-f-series-central-ducted-48000-cfg-37",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-38",
      slug: "rheem-f-series-central-ducted-48000-cfg-38",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-39",
      slug: "rheem-f-series-central-ducted-48000-cfg-39",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-40",
      slug: "rheem-f-series-central-ducted-48000-cfg-40",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-41",
      slug: "rheem-f-series-central-ducted-48000-cfg-41",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-42",
      slug: "rheem-f-series-central-ducted-48000-cfg-42",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-43",
      slug: "rheem-f-series-central-ducted-48000-cfg-43",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-44",
      slug: "rheem-f-series-central-ducted-48000-cfg-44",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-45",
      slug: "rheem-f-series-central-ducted-48000-cfg-45",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-46",
      slug: "rheem-f-series-central-ducted-48000-cfg-46",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-47",
      slug: "rheem-f-series-central-ducted-48000-cfg-47",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-48",
      slug: "rheem-f-series-central-ducted-48000-cfg-48",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-49",
      slug: "rheem-f-series-central-ducted-48000-cfg-49",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-50",
      slug: "rheem-f-series-central-ducted-48000-cfg-50",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-51",
      slug: "rheem-f-series-central-ducted-48000-cfg-51",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-52",
      slug: "rheem-f-series-central-ducted-48000-cfg-52",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-53",
      slug: "rheem-f-series-central-ducted-48000-cfg-53",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-54",
      slug: "rheem-f-series-central-ducted-48000-cfg-54",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-55",
      slug: "rheem-f-series-central-ducted-48000-cfg-55",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-56",
      slug: "rheem-f-series-central-ducted-48000-cfg-56",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-57",
      slug: "rheem-f-series-central-ducted-48000-cfg-57",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-58",
      slug: "rheem-f-series-central-ducted-48000-cfg-58",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-59",
      slug: "rheem-f-series-central-ducted-48000-cfg-59",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-60",
      slug: "rheem-f-series-central-ducted-48000-cfg-60",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-61",
      slug: "rheem-f-series-central-ducted-48000-cfg-61",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-62",
      slug: "rheem-f-series-central-ducted-48000-cfg-62",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-63",
      slug: "rheem-f-series-central-ducted-48000-cfg-63",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-64",
      slug: "rheem-f-series-central-ducted-48000-cfg-64",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-65",
      slug: "rheem-f-series-central-ducted-48000-cfg-65",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-66",
      slug: "rheem-f-series-central-ducted-48000-cfg-66",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-67",
      slug: "rheem-f-series-central-ducted-48000-cfg-67",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-68",
      slug: "rheem-f-series-central-ducted-48000-cfg-68",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-69",
      slug: "rheem-f-series-central-ducted-48000-cfg-69",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-70",
      slug: "rheem-f-series-central-ducted-48000-cfg-70",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-71",
      slug: "rheem-f-series-central-ducted-48000-cfg-71",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-72",
      slug: "rheem-f-series-central-ducted-48000-cfg-72",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-73",
      slug: "rheem-f-series-central-ducted-48000-cfg-73",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-74",
      slug: "rheem-f-series-central-ducted-48000-cfg-74",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-75",
      slug: "rheem-f-series-central-ducted-48000-cfg-75",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-76",
      slug: "rheem-f-series-central-ducted-48000-cfg-76",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-77",
      slug: "rheem-f-series-central-ducted-48000-cfg-77",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-78",
      slug: "rheem-f-series-central-ducted-48000-cfg-78",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-79",
      slug: "rheem-f-series-central-ducted-48000-cfg-79",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-80",
      slug: "rheem-f-series-central-ducted-48000-cfg-80",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-81",
      slug: "rheem-f-series-central-ducted-48000-cfg-81",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-82",
      slug: "rheem-f-series-central-ducted-48000-cfg-82",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-83",
      slug: "rheem-f-series-central-ducted-48000-cfg-83",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-84",
      slug: "rheem-f-series-central-ducted-48000-cfg-84",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-85",
      slug: "rheem-f-series-central-ducted-48000-cfg-85",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-86",
      slug: "rheem-f-series-central-ducted-48000-cfg-86",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-87",
      slug: "rheem-f-series-central-ducted-48000-cfg-87",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-88",
      slug: "rheem-f-series-central-ducted-48000-cfg-88",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-89",
      slug: "rheem-f-series-central-ducted-48000-cfg-89",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-90",
      slug: "rheem-f-series-central-ducted-48000-cfg-90",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-91",
      slug: "rheem-f-series-central-ducted-48000-cfg-91",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-92",
      slug: "rheem-f-series-central-ducted-48000-cfg-92",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-93",
      slug: "rheem-f-series-central-ducted-48000-cfg-93",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-94",
      slug: "rheem-f-series-central-ducted-48000-cfg-94",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-95",
      slug: "rheem-f-series-central-ducted-48000-cfg-95",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-96",
      slug: "rheem-f-series-central-ducted-48000-cfg-96",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-97",
      slug: "rheem-f-series-central-ducted-48000-cfg-97",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-98",
      slug: "rheem-f-series-central-ducted-48000-cfg-98",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-99",
      slug: "rheem-f-series-central-ducted-48000-cfg-99",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz4824mtanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-100",
      slug: "rheem-f-series-central-ducted-48000-cfg-100",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rcfz6024stanm",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-central-ducted-48000-cfg-101",
      slug: "rheem-f-series-central-ducted-48000-cfg-101",
      modelId: "rheem-f-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rh2tz6024stann",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-1",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-1",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd17az48aj3n",
      indoorUnitId: "rheem-rh3vz6024stacn",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-2",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-2",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rhmvy4821seaca",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-3",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-3",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-4",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-4",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-5",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-5",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-6",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-6",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-7",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-7",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-8",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-8",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-9",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-9",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-10",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-10",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-11",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-11",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-12",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-12",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-13",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-13",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-14",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-14",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: "rheem-rcfy4821seaam",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-15",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-15",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rh2vy6024stacn",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-16",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-16",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-17",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-17",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-18",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-18",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-19",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-19",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-20",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-20",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-21",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-21",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-22",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-22",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-23",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-23",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-24",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-24",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-25",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-25",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-26",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-26",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-27",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-27",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-28",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-28",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-29",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-29",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-30",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-30",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-31",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-31",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-32",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-32",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-33",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-33",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-34",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-34",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rh2vy6021staca",
      coolingCapacityMinBtu: 49500,
      coolingCapacityMaxBtu: 49500,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-35",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-35",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rh2ty6024stann",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-48000-cfg-36",
      slug: "rheem-prestige-series-central-ducted-48000-cfg-36",
      modelId: "rheem-prestige-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rhmvy6024seacn",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-60000-cfg-1",
      slug: "rheem-standard-wall-single-60000-cfg-1",
      modelId: "rheem-standard-wall-single-60000",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: "rheem-rhmvy6021seaca",
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-classic-wall-single-9000-cfg-1",
      slug: "rheem-floating-air-classic-wall-single-9000-cfg-1",
      modelId: "rheem-floating-air-classic-wall-single-9000",
      outdoorUnitId: "rheem-fshsr09b1c",
      indoorUnitId: "rheem-fahsw09a1c",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-select-wall-single-18000-cfg-1",
      slug: "rheem-floating-air-select-wall-single-18000-cfg-1",
      modelId: "rheem-floating-air-select-wall-single-18000",
      outdoorUnitId: "rheem-fshsr18b3d",
      indoorUnitId: "rheem-fahfw18a3d",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-pro-wall-single-9000-cfg-1",
      slug: "rheem-floating-air-pro-wall-single-9000-cfg-1",
      modelId: "rheem-floating-air-pro-wall-single-9000",
      outdoorUnitId: "rheem-fphsr09a1c",
      indoorUnitId: "rheem-fahsw09a1c",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-classic-plus-wall-single-12000-cfg-1",
      slug: "rheem-floating-air-classic-plus-wall-single-12000-cfg-1",
      modelId: "rheem-floating-air-classic-plus-wall-single-12000",
      outdoorUnitId: "rheem-fphsr12a1c",
      indoorUnitId: "rheem-fahsw12a1c",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-classic-plus-wall-single-12000-cfg-2",
      slug: "rheem-floating-air-classic-plus-wall-single-12000-cfg-2",
      modelId: "rheem-floating-air-classic-plus-wall-single-12000",
      outdoorUnitId: "rheem-fphsr12a3d",
      indoorUnitId: "rheem-fahfw12a3d",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-classic-plus-wall-single-9000-cfg-1",
      slug: "rheem-floating-air-classic-plus-wall-single-9000-cfg-1",
      modelId: "rheem-floating-air-classic-plus-wall-single-9000",
      outdoorUnitId: "rheem-fphsr09a3d",
      indoorUnitId: "rheem-fahfw09a3d",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-pro-wall-single-18000-cfg-1",
      slug: "rheem-floating-air-pro-wall-single-18000-cfg-1",
      modelId: "rheem-floating-air-pro-wall-single-18000",
      outdoorUnitId: "rheem-fphsr18a3d",
      indoorUnitId: "rheem-fahfw18a3d",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-classic-plus-wall-single-24000-cfg-1",
      slug: "rheem-floating-air-classic-plus-wall-single-24000-cfg-1",
      modelId: "rheem-floating-air-classic-plus-wall-single-24000",
      outdoorUnitId: "rheem-fphsr24a3d",
      indoorUnitId: "rheem-fahfw24a3d",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-1",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-1",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rh2vy6024stacn",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-2",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-2",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-3",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-3",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-4",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-4",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-5",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-5",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-6",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-6",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-7",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-7",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-8",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-8",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-9",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-9",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-10",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-10",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-11",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-11",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-12",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-12",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-13",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-13",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-14",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-14",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-15",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-15",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-16",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-16",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-17",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-17",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-18",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-18",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-19",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-19",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-20",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-20",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-21",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-21",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rh2vy4824stacn",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-22",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-22",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rh2vy4821stacn",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-23",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-23",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rhmvy6024seacn",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-24",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-24",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rh2ty4824mtann",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-25",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-25",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rh2ty4824stann",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-42000-cfg-26",
      slug: "rheem-prestige-series-central-ducted-42000-cfg-26",
      modelId: "rheem-prestige-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rh2ty4821stann",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-1",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-1",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rh2vy3621mtacn",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-2",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-2",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-3",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-3",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-4",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-4",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-5",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-5",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-6",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-6",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-7",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-7",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-8",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-8",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-9",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-9",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-10",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-10",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-11",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-11",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-12",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-12",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-13",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-13",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-14",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-14",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-15",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-15",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-16",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-16",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-17",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-17",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-18",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-18",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-19",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-19",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-20",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-20",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-21",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-21",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-22",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-22",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-23",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-23",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-24",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-24",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-25",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-25",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-26",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-26",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-27",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-27",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-28",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-28",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-29",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-29",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-30",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-30",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-31",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-31",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-32",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-32",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-33",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-33",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-34",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-34",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-35",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-35",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-36",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-36",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-37",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-37",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-38",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-38",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-39",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-39",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-40",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-40",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-41",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-41",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-42",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-42",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-43",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-43",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-44",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-44",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-45",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-45",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-46",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-46",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-47",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-47",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-48",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-48",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-49",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-49",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-50",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-50",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rh2vy3617stacn",
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-51",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-51",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rh2vy3621stacn",
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-52",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-52",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rh2ty3621stann",
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-30000-cfg-53",
      slug: "rheem-prestige-series-central-ducted-30000-cfg-53",
      modelId: "rheem-prestige-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rh2ty3617stann",
      coolingCapacityMinBtu: 31600,
      coolingCapacityMaxBtu: 31600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-1",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-1",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rh2vy3617stacn",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-2",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-2",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-3",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-3",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-4",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-4",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-5",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-5",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-6",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-6",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-7",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-7",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-8",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-8",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-9",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-9",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-10",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-10",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-11",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-11",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-12",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-12",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-13",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-13",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-14",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-14",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-15",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-15",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rhmvy2421meacn",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-20000-cfg-16",
      slug: "rheem-prestige-series-central-ducted-20000-cfg-16",
      modelId: "rheem-prestige-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rf2ty2421stans",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-1",
      slug: "rheem-k-series-central-ducted-20000-cfg-1",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-2",
      slug: "rheem-k-series-central-ducted-20000-cfg-2",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-3",
      slug: "rheem-k-series-central-ducted-20000-cfg-3",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-4",
      slug: "rheem-k-series-central-ducted-20000-cfg-4",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-5",
      slug: "rheem-k-series-central-ducted-20000-cfg-5",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-6",
      slug: "rheem-k-series-central-ducted-20000-cfg-6",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-7",
      slug: "rheem-k-series-central-ducted-20000-cfg-7",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-8",
      slug: "rheem-k-series-central-ducted-20000-cfg-8",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-20000-cfg-9",
      slug: "rheem-k-series-central-ducted-20000-cfg-9",
      modelId: "rheem-k-series-central-ducted-20000",
      outdoorUnitId: "rheem-rd18ay24ajvc",
      indoorUnitId: "rheem-rcfy2417mtanm",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-1",
      slug: "rheem-k-series-central-ducted-42000-cfg-1",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-2",
      slug: "rheem-k-series-central-ducted-42000-cfg-2",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-3",
      slug: "rheem-k-series-central-ducted-42000-cfg-3",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-4",
      slug: "rheem-k-series-central-ducted-42000-cfg-4",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-5",
      slug: "rheem-k-series-central-ducted-42000-cfg-5",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-6",
      slug: "rheem-k-series-central-ducted-42000-cfg-6",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-7",
      slug: "rheem-k-series-central-ducted-42000-cfg-7",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-8",
      slug: "rheem-k-series-central-ducted-42000-cfg-8",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-9",
      slug: "rheem-k-series-central-ducted-42000-cfg-9",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-10",
      slug: "rheem-k-series-central-ducted-42000-cfg-10",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-11",
      slug: "rheem-k-series-central-ducted-42000-cfg-11",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-12",
      slug: "rheem-k-series-central-ducted-42000-cfg-12",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-13",
      slug: "rheem-k-series-central-ducted-42000-cfg-13",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-14",
      slug: "rheem-k-series-central-ducted-42000-cfg-14",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-15",
      slug: "rheem-k-series-central-ducted-42000-cfg-15",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-16",
      slug: "rheem-k-series-central-ducted-42000-cfg-16",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-42000-cfg-17",
      slug: "rheem-k-series-central-ducted-42000-cfg-17",
      modelId: "rheem-k-series-central-ducted-42000",
      outdoorUnitId: "rheem-rd18ay48ajvc",
      indoorUnitId: "rheem-rcfy4824mtanm",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-1",
      slug: "rheem-k-series-central-ducted-48000-cfg-1",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-2",
      slug: "rheem-k-series-central-ducted-48000-cfg-2",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-3",
      slug: "rheem-k-series-central-ducted-48000-cfg-3",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-4",
      slug: "rheem-k-series-central-ducted-48000-cfg-4",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-5",
      slug: "rheem-k-series-central-ducted-48000-cfg-5",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-6",
      slug: "rheem-k-series-central-ducted-48000-cfg-6",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-7",
      slug: "rheem-k-series-central-ducted-48000-cfg-7",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-8",
      slug: "rheem-k-series-central-ducted-48000-cfg-8",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-9",
      slug: "rheem-k-series-central-ducted-48000-cfg-9",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-10",
      slug: "rheem-k-series-central-ducted-48000-cfg-10",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-11",
      slug: "rheem-k-series-central-ducted-48000-cfg-11",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-12",
      slug: "rheem-k-series-central-ducted-48000-cfg-12",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-13",
      slug: "rheem-k-series-central-ducted-48000-cfg-13",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-14",
      slug: "rheem-k-series-central-ducted-48000-cfg-14",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-15",
      slug: "rheem-k-series-central-ducted-48000-cfg-15",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-16",
      slug: "rheem-k-series-central-ducted-48000-cfg-16",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-48000-cfg-17",
      slug: "rheem-k-series-central-ducted-48000-cfg-17",
      modelId: "rheem-k-series-central-ducted-48000",
      outdoorUnitId: "rheem-rd18ay60ajvc",
      indoorUnitId: "rheem-rcfy6024stanm",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-1",
      slug: "rheem-k-series-central-ducted-30000-cfg-1",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-2",
      slug: "rheem-k-series-central-ducted-30000-cfg-2",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-3",
      slug: "rheem-k-series-central-ducted-30000-cfg-3",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-4",
      slug: "rheem-k-series-central-ducted-30000-cfg-4",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-5",
      slug: "rheem-k-series-central-ducted-30000-cfg-5",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-6",
      slug: "rheem-k-series-central-ducted-30000-cfg-6",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-7",
      slug: "rheem-k-series-central-ducted-30000-cfg-7",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-8",
      slug: "rheem-k-series-central-ducted-30000-cfg-8",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-9",
      slug: "rheem-k-series-central-ducted-30000-cfg-9",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-10",
      slug: "rheem-k-series-central-ducted-30000-cfg-10",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-11",
      slug: "rheem-k-series-central-ducted-30000-cfg-11",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-12",
      slug: "rheem-k-series-central-ducted-30000-cfg-12",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-13",
      slug: "rheem-k-series-central-ducted-30000-cfg-13",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-14",
      slug: "rheem-k-series-central-ducted-30000-cfg-14",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-15",
      slug: "rheem-k-series-central-ducted-30000-cfg-15",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-16",
      slug: "rheem-k-series-central-ducted-30000-cfg-16",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-17",
      slug: "rheem-k-series-central-ducted-30000-cfg-17",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-18",
      slug: "rheem-k-series-central-ducted-30000-cfg-18",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-19",
      slug: "rheem-k-series-central-ducted-30000-cfg-19",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-20",
      slug: "rheem-k-series-central-ducted-30000-cfg-20",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-21",
      slug: "rheem-k-series-central-ducted-30000-cfg-21",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-22",
      slug: "rheem-k-series-central-ducted-30000-cfg-22",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3621mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-23",
      slug: "rheem-k-series-central-ducted-30000-cfg-23",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-24",
      slug: "rheem-k-series-central-ducted-30000-cfg-24",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-25",
      slug: "rheem-k-series-central-ducted-30000-cfg-25",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-26",
      slug: "rheem-k-series-central-ducted-30000-cfg-26",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-27",
      slug: "rheem-k-series-central-ducted-30000-cfg-27",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-28",
      slug: "rheem-k-series-central-ducted-30000-cfg-28",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-29",
      slug: "rheem-k-series-central-ducted-30000-cfg-29",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-30",
      slug: "rheem-k-series-central-ducted-30000-cfg-30",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-31",
      slug: "rheem-k-series-central-ducted-30000-cfg-31",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-32",
      slug: "rheem-k-series-central-ducted-30000-cfg-32",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-33",
      slug: "rheem-k-series-central-ducted-30000-cfg-33",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-34",
      slug: "rheem-k-series-central-ducted-30000-cfg-34",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-35",
      slug: "rheem-k-series-central-ducted-30000-cfg-35",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-36",
      slug: "rheem-k-series-central-ducted-30000-cfg-36",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-37",
      slug: "rheem-k-series-central-ducted-30000-cfg-37",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-38",
      slug: "rheem-k-series-central-ducted-30000-cfg-38",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-k-series-central-ducted-30000-cfg-39",
      slug: "rheem-k-series-central-ducted-30000-cfg-39",
      modelId: "rheem-k-series-central-ducted-30000",
      outdoorUnitId: "rheem-rd18ay36ajvc",
      indoorUnitId: "rheem-rcfy3624mtanm",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-24000-cfg-1",
      slug: "rheem-f-series-plus-central-ducted-24000-cfg-1",
      modelId: "rheem-f-series-plus-central-ducted-24000",
      outdoorUnitId: "rheem-rd16ay24ajvc",
      indoorUnitId: "rheem-rh2vy2417stacn",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-42000-cfg-1",
      slug: "rheem-f-series-plus-central-ducted-42000-cfg-1",
      modelId: "rheem-f-series-plus-central-ducted-42000",
      outdoorUnitId: "rheem-rd16ay48ajvc",
      indoorUnitId: "rheem-rh2vy4821stacn",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-f-series-plus-central-ducted-60000-cfg-1",
      slug: "rheem-f-series-plus-central-ducted-60000-cfg-1",
      modelId: "rheem-f-series-plus-central-ducted-60000",
      outdoorUnitId: "rheem-rd16ay60ajvc",
      indoorUnitId: "rheem-rh2vy6024stacn",
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-9000-cfg-1",
      slug: "rheem-floating-air-prestige-wall-single-9000-cfg-1",
      modelId: "rheem-floating-air-prestige-wall-single-9000",
      outdoorUnitId: "rheem-fphfr09a3d",
      indoorUnitId: "rheem-fphfd09a3d",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-9000-cfg-2",
      slug: "rheem-floating-air-prestige-wall-single-9000-cfg-2",
      modelId: "rheem-floating-air-prestige-wall-single-9000",
      outdoorUnitId: "rheem-fphfr09a3d",
      indoorUnitId: "rheem-fphfc09a3d",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-12000-cfg-1",
      slug: "rheem-floating-air-prestige-wall-single-12000-cfg-1",
      modelId: "rheem-floating-air-prestige-wall-single-12000",
      outdoorUnitId: "rheem-fphfr12a3d",
      indoorUnitId: "rheem-fphfd12a3d",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-12000-cfg-2",
      slug: "rheem-floating-air-prestige-wall-single-12000-cfg-2",
      modelId: "rheem-floating-air-prestige-wall-single-12000",
      outdoorUnitId: "rheem-fphfr12a3d",
      indoorUnitId: "rheem-fphfc12a3d",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-18000-cfg-1",
      slug: "rheem-floating-air-prestige-wall-single-18000-cfg-1",
      modelId: "rheem-floating-air-prestige-wall-single-18000",
      outdoorUnitId: "rheem-fphfr18a3d",
      indoorUnitId: "rheem-fphfc18a3d",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-18000-cfg-2",
      slug: "rheem-floating-air-prestige-wall-single-18000-cfg-2",
      modelId: "rheem-floating-air-prestige-wall-single-18000",
      outdoorUnitId: "rheem-fphfr18a3d",
      indoorUnitId: "rheem-fphfd18a3d",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-24000-cfg-1",
      slug: "rheem-floating-air-prestige-wall-single-24000-cfg-1",
      modelId: "rheem-floating-air-prestige-wall-single-24000",
      outdoorUnitId: "rheem-fphfr24a3d",
      indoorUnitId: "rheem-fphfc24a3d",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-24000-cfg-2",
      slug: "rheem-floating-air-prestige-wall-single-24000-cfg-2",
      modelId: "rheem-floating-air-prestige-wall-single-24000",
      outdoorUnitId: "rheem-fphfr24a3d",
      indoorUnitId: "rheem-fphfd24a3d",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-30000-cfg-1",
      slug: "rheem-floating-air-prestige-wall-single-30000-cfg-1",
      modelId: "rheem-floating-air-prestige-wall-single-30000",
      outdoorUnitId: "rheem-fphfr36a3d",
      indoorUnitId: "rheem-fphsd36a3d",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-floating-air-prestige-wall-single-36000-cfg-1",
      slug: "rheem-floating-air-prestige-wall-single-36000-cfg-1",
      modelId: "rheem-floating-air-prestige-wall-single-36000",
      outdoorUnitId: "rheem-fphfr36a3d",
      indoorUnitId: "rheem-fphsc36a3d",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-8",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-9",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-10",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-11",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-12",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-13",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-14",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-15",
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
      configurationId: "rheem-standard-wall-single-9000-cfg-16",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-8",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-9",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-10",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-11",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-12",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-13",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-14",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-15",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-16",
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
      configurationId: "rheem-standard-wall-single-12000-cfg-17",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-8",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-9",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-10",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-11",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-12",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-13",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-14",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-15",
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
      configurationId: "rheem-standard-wall-single-18000-cfg-16",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-8",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-9",
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
      configurationId: "rheem-standard-wall-single-24000-cfg-10",
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
      configurationId: "rheem-standard-wall-single-15000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-15000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-15000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-15000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-15000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-15000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-15000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-15000-cfg-8",
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
      configurationId: "rheem-standard-wall-single-20000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-20000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-20000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-20000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-20000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-20000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-20000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-42000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-42000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-42000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-42000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-42000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-42000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-42000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-8",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-9",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-10",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-11",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-12",
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
      configurationId: "rheem-standard-wall-single-30000-cfg-13",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-8",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-9",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-10",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-11",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-12",
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
      configurationId: "rheem-standard-wall-single-36000-cfg-13",
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
      configurationId: "rheem-standard-wall-single-48000-cfg-1",
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
      configurationId: "rheem-standard-wall-single-48000-cfg-2",
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
      configurationId: "rheem-standard-wall-single-48000-cfg-3",
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
      configurationId: "rheem-standard-wall-single-48000-cfg-4",
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
      configurationId: "rheem-standard-wall-single-48000-cfg-5",
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
      configurationId: "rheem-standard-wall-single-48000-cfg-6",
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
      configurationId: "rheem-standard-wall-single-48000-cfg-7",
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
      configurationId: "rheem-standard-wall-single-48000-cfg-8",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-1",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-2",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-3",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-4",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-5",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-6",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-7",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-8",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-9",
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
      configurationId: "rheem-standard-central-ducted-24000-cfg-10",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-1",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-2",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-3",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-4",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-5",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-6",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-7",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-8",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-9",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-10",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-11",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-12",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-13",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-14",
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
      configurationId: "rheem-standard-central-ducted-36000-cfg-15",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-1",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-2",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-3",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-4",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-5",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-6",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-7",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-8",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-9",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-10",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-11",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-12",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-13",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-14",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-15",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-16",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-17",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-18",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-19",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-20",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-21",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-22",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-23",
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
      configurationId: "rheem-standard-central-ducted-48000-cfg-24",
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
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-25",
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
      configurationId: "rheem-prestige-series-central-ducted-24000-cfg-26",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-1",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-2",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-3",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-4",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-5",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-6",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-7",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-8",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-9",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-10",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-11",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-12",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-13",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-14",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-15",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-16",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-17",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-18",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-19",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-20",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-21",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-22",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-23",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-24",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-25",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-26",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-27",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-28",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-29",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-30",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-31",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-32",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-33",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-34",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-35",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-36",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-37",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-38",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-39",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-40",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-41",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-42",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-43",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-44",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-45",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-46",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-47",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-48",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-49",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-50",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-51",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-52",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-53",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-54",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-55",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-56",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-57",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-58",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-59",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-60",
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
      configurationId: "rheem-prestige-series-central-ducted-36000-cfg-61",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-1",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-2",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-3",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-4",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-5",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-6",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-7",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-8",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-9",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-10",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-11",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-12",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-13",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-14",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-15",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-16",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-17",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-18",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-19",
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
      configurationId: "rheem-standard-central-ducted-42000-cfg-20",
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
      configurationId: "rheem-classic-plus-wall-single-18000-cfg-1",
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
      configurationId: "rheem-classic-plus-wall-single-18000-cfg-2",
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
      configurationId: "rheem-classic-plus-wall-single-20000-cfg-1",
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
      configurationId: "rheem-classic-plus-wall-single-20000-cfg-2",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-1",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-2",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-3",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-4",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-5",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-6",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-7",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-8",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-9",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-10",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-11",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-12",
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
      configurationId: "rheem-classic-plus-central-ducted-36000-cfg-13",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-1",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-2",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-3",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-4",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-5",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-6",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-7",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-8",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-9",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-10",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-11",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-12",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-13",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-14",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-15",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-16",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-17",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-18",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-19",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-20",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-21",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-22",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-23",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-24",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-25",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-26",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-27",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-28",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-29",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-30",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-31",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-32",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-33",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-34",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-35",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-36",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-37",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-38",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-39",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-40",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-41",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-42",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-43",
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
      configurationId: "rheem-f-series-plus-central-ducted-36000-cfg-44",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-1",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-2",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-3",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-4",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-5",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-6",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-7",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-8",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-9",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-10",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-11",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-12",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-13",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-14",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-15",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-16",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-17",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-18",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-19",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-20",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-21",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-22",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-23",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-24",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-25",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-26",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-27",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-28",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-29",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-30",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-31",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-32",
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
      configurationId: "rheem-f-series-central-ducted-60000-cfg-33",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-1",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-2",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-3",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-4",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-5",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-6",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-7",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-8",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-9",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-10",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-11",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-12",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-13",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-14",
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
      configurationId: "rheem-prestige-series-central-ducted-60000-cfg-15",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-1",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-2",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-3",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-4",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-5",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-6",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-7",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-8",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-9",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-10",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-11",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-12",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-13",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-14",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-15",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-16",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-17",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-18",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-19",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-20",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-21",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-22",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-23",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-24",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-25",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-26",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-27",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-28",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-29",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-30",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-31",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-32",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-33",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-34",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-35",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-36",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-37",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-38",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-39",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-40",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-41",
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
      configurationId: "rheem-k-series-central-ducted-24000-cfg-42",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-1",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-2",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-3",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-4",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-5",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-6",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-7",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-8",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-9",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-10",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-11",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-12",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-13",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-14",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-15",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-16",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-17",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-18",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-19",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-20",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-21",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-22",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-23",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-24",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-25",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-26",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-27",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-28",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-29",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-30",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-31",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-32",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-33",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-34",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-35",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-36",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-37",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-38",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-39",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-40",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-41",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-42",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-43",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-44",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-45",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-46",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-47",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-48",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-49",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-50",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-51",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-52",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-53",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-54",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-55",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-56",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-57",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-58",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-59",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-60",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-61",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-62",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-63",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-64",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-65",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-66",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-67",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-68",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-69",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-70",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-71",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-72",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-73",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-74",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-75",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-76",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-77",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-78",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-79",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-80",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-81",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-82",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-83",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-84",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-85",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-86",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-87",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-88",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-89",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-90",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-91",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-92",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-93",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-94",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-95",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-96",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-97",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-98",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-99",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-100",
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
      configurationId: "rheem-f-series-central-ducted-48000-cfg-101",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-1",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-2",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-3",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-4",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-5",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-6",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-7",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-8",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-9",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-10",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-11",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-12",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-13",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-14",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-15",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-16",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-17",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-18",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-19",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-20",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-21",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-22",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-23",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-24",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-25",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-26",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-27",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-28",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-29",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-30",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-31",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-32",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-33",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-34",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-35",
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
      configurationId: "rheem-prestige-series-central-ducted-48000-cfg-36",
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
      configurationId: "rheem-standard-wall-single-60000-cfg-1",
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
      configurationId: "rheem-floating-air-classic-wall-single-9000-cfg-1",
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
      configurationId: "rheem-floating-air-select-wall-single-18000-cfg-1",
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
      configurationId: "rheem-floating-air-pro-wall-single-9000-cfg-1",
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
      configurationId: "rheem-floating-air-classic-plus-wall-single-12000-cfg-1",
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
      configurationId: "rheem-floating-air-classic-plus-wall-single-12000-cfg-2",
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
      configurationId: "rheem-floating-air-classic-plus-wall-single-9000-cfg-1",
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
      configurationId: "rheem-floating-air-pro-wall-single-18000-cfg-1",
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
      configurationId: "rheem-floating-air-classic-plus-wall-single-24000-cfg-1",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-1",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-2",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-3",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-4",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-5",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-6",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-7",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-8",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-9",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-10",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-11",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-12",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-13",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-14",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-15",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-16",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-17",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-18",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-19",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-20",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-21",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-22",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-23",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-24",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-25",
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
      configurationId: "rheem-prestige-series-central-ducted-42000-cfg-26",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-1",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-2",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-3",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-4",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-5",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-6",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-7",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-8",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-9",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-10",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-11",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-12",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-13",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-14",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-15",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-16",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-17",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-18",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-19",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-20",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-21",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-22",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-23",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-24",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-25",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-26",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-27",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-28",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-29",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-30",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-31",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-32",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-33",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-34",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-35",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-36",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-37",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-38",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-39",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-40",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-41",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-42",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-43",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-44",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-45",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-46",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-47",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-48",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-49",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-50",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-51",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-52",
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
      configurationId: "rheem-prestige-series-central-ducted-30000-cfg-53",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-1",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-2",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-3",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-4",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-5",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-6",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-7",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-8",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-9",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-10",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-11",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-12",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-13",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-14",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-15",
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
      configurationId: "rheem-prestige-series-central-ducted-20000-cfg-16",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-1",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-2",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-3",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-4",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-5",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-6",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-7",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-8",
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
      configurationId: "rheem-k-series-central-ducted-20000-cfg-9",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-1",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-2",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-3",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-4",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-5",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-6",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-7",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-8",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-9",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-10",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-11",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-12",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-13",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-14",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-15",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-16",
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
      configurationId: "rheem-k-series-central-ducted-42000-cfg-17",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-1",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-2",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-3",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-4",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-5",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-6",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-7",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-8",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-9",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-10",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-11",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-12",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-13",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-14",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-15",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-16",
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
      configurationId: "rheem-k-series-central-ducted-48000-cfg-17",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-1",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-2",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-3",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-4",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-5",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-6",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-7",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-8",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-9",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-10",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-11",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-12",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-13",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-14",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-15",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-16",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-17",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-18",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-19",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-20",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-21",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-22",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-23",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-24",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-25",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-26",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-27",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-28",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-29",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-30",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-31",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-32",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-33",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-34",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-35",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-36",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-37",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-38",
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
      configurationId: "rheem-k-series-central-ducted-30000-cfg-39",
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
      configurationId: "rheem-f-series-plus-central-ducted-24000-cfg-1",
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
      configurationId: "rheem-f-series-plus-central-ducted-42000-cfg-1",
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
      configurationId: "rheem-f-series-plus-central-ducted-60000-cfg-1",
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
      configurationId: "rheem-floating-air-prestige-wall-single-9000-cfg-1",
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
      configurationId: "rheem-floating-air-prestige-wall-single-9000-cfg-2",
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
      configurationId: "rheem-floating-air-prestige-wall-single-12000-cfg-1",
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
      configurationId: "rheem-floating-air-prestige-wall-single-12000-cfg-2",
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
      configurationId: "rheem-floating-air-prestige-wall-single-18000-cfg-1",
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
      configurationId: "rheem-floating-air-prestige-wall-single-18000-cfg-2",
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
      configurationId: "rheem-floating-air-prestige-wall-single-24000-cfg-1",
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
      configurationId: "rheem-floating-air-prestige-wall-single-24000-cfg-2",
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
      configurationId: "rheem-floating-air-prestige-wall-single-30000-cfg-1",
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
      configurationId: "rheem-floating-air-prestige-wall-single-36000-cfg-1",
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
