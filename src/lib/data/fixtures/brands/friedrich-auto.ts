import type { BrandDataset } from "../../types";

export const friedrichDataset: BrandDataset = {
  brand: {
    id: "friedrich",
    slug: "friedrich",
    name: "FRIEDRICH",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "friedrich-standard",
      slug: "friedrich-standard",
      name: "Standard",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-premier",
      slug: "friedrich-premier",
      name: "Premier",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro",
      slug: "friedrich-pro",
      name: "Pro",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze",
      slug: "friedrich-breeze",
      name: "Breeze",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus",
      slug: "friedrich-f-series-plus",
      name: "F - SERIES PLUS",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series",
      slug: "friedrich-f-series",
      name: "F Series",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series",
      slug: "friedrich-k-series",
      name: "K-SERIES",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-select",
      slug: "friedrich-floating-air-select",
      name: "Floating  Air Select",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro",
      slug: "friedrich-floating-air-pro",
      name: "Floating Air Pro",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x",
      slug: "friedrich-floating-air-pro-x",
      name: "Floating Air Pro X",
      brandId: "friedrich",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-select",
      slug: "friedrich-breeze-select",
      name: "Breeze Select",
      brandId: "friedrich",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "friedrich-standard-wall-single-12000",
      slug: "friedrich-standard-wall-single-12000",
      name: "Standard 12 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 12k",
      normalizedModelNumber: "standard-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 8800,
      seer2Min: 26.8,
      seer2Max: 25.1,
      hspf2Min: 11.9,
      hspf2Max: 11.5,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-9000",
      slug: "friedrich-standard-wall-single-9000",
      name: "Standard 9 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 9k",
      normalizedModelNumber: "standard-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6100,
      heatingCapacity5FMaxBtu: 6500,
      seer2Min: 24.3,
      seer2Max: 19.2,
      hspf2Min: 11.5,
      hspf2Max: 9.7,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-18000",
      slug: "friedrich-standard-wall-single-18000",
      name: "Standard 18 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 18k",
      normalizedModelNumber: "standard-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 12471,
      heatingCapacity5FMaxBtu: 12471,
      seer2Min: 27.5,
      seer2Max: 20.0,
      hspf2Min: 8.4,
      hspf2Max: 11.6,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-20000",
      slug: "friedrich-standard-wall-single-20000",
      name: "Standard 20 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 20k",
      normalizedModelNumber: "standard-20000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 14700,
      heatingCapacity5FMaxBtu: 14700,
      seer2Min: 23.0,
      seer2Max: 18.2,
      hspf2Min: 11.2,
      hspf2Max: 10.3,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-premier-wall-single-12000",
      slug: "friedrich-premier-wall-single-12000",
      name: "Premier 12 000 BTU",
      seriesId: "friedrich-premier",
      brandId: "friedrich",
      modelNumber: "Premier 12k",
      normalizedModelNumber: "premier-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 8000,
      seer2Min: 23.5,
      seer2Max: 23.5,
      hspf2Min: 9.8,
      hspf2Max: 9.8,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-9000",
      slug: "friedrich-pro-wall-single-9000",
      name: "Pro 9 000 BTU",
      seriesId: "friedrich-pro",
      brandId: "friedrich",
      modelNumber: "Pro 9k",
      normalizedModelNumber: "pro-9000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 9000,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 5000,
      seer2Min: 18.5,
      seer2Max: 22,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-12000",
      slug: "friedrich-pro-wall-single-12000",
      name: "Pro 12 000 BTU",
      seriesId: "friedrich-pro",
      brandId: "friedrich",
      modelNumber: "Pro 12k",
      normalizedModelNumber: "pro-12000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 12000,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 7500,
      seer2Min: 20.5,
      seer2Max: 21.7,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.75,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-18000",
      slug: "friedrich-pro-wall-single-18000",
      name: "Pro 18 000 BTU",
      seriesId: "friedrich-pro",
      brandId: "friedrich",
      modelNumber: "Pro 18k",
      normalizedModelNumber: "pro-18000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 18000,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 12200,
      seer2Min: 20.5,
      seer2Max: 22.5,
      hspf2Min: 9.2,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-24000",
      slug: "friedrich-pro-wall-single-24000",
      name: "Pro 24 000 BTU",
      seriesId: "friedrich-pro",
      brandId: "friedrich",
      modelNumber: "Pro 24k",
      normalizedModelNumber: "pro-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 15400,
      heatingCapacity5FMaxBtu: 19600,
      seer2Min: 18.5,
      seer2Max: 22,
      hspf2Min: 9.05,
      hspf2Max: 10,
      cop5FMin: 1.84,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-30000",
      slug: "friedrich-pro-wall-single-30000",
      name: "Pro 30 000 BTU",
      seriesId: "friedrich-pro",
      brandId: "friedrich",
      modelNumber: "Pro 30k",
      normalizedModelNumber: "pro-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 23200,
      seer2Min: 21,
      seer2Max: 21,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.84,
      cop5FMax: 1.84,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-42000",
      slug: "friedrich-pro-wall-single-42000",
      name: "Pro 42 000 BTU",
      seriesId: "friedrich-pro",
      brandId: "friedrich",
      modelNumber: "Pro 42k",
      normalizedModelNumber: "pro-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 24000,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 8.95,
      hspf2Max: 8.95,
      cop5FMin: 1.84,
      cop5FMax: 1.84,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-24000",
      slug: "friedrich-standard-wall-single-24000",
      name: "Standard 24 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 24k",
      normalizedModelNumber: "standard-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 13000,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 17.1,
      seer2Max: 21.2,
      hspf2Min: 11.7,
      hspf2Max: 12.8,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-60000",
      slug: "friedrich-standard-wall-single-60000",
      name: "Standard 60 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 60k",
      normalizedModelNumber: "standard-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 40000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 22.6,
      seer2Max: 28.1,
      hspf2Min: 10.3,
      hspf2Max: 12.6,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-20000",
      slug: "friedrich-breeze-central-ducted-20000",
      name: "Breeze 20 000 BTU",
      seriesId: "friedrich-breeze",
      brandId: "friedrich",
      modelNumber: "Breeze 20k",
      normalizedModelNumber: "breeze-20000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 16000,
      seer2Min: 16.5,
      seer2Max: 16.5,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 2.05,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-36000",
      slug: "friedrich-breeze-central-ducted-36000",
      name: "Breeze 36 000 BTU",
      seriesId: "friedrich-breeze",
      brandId: "friedrich",
      modelNumber: "Breeze 36k",
      normalizedModelNumber: "breeze-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 24000,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 2.05,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-48000",
      slug: "friedrich-breeze-central-ducted-48000",
      name: "Breeze 48 000 BTU",
      seriesId: "friedrich-breeze",
      brandId: "friedrich",
      modelNumber: "Breeze 48k",
      normalizedModelNumber: "breeze-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 31000,
      heatingCapacity5FMaxBtu: 31000,
      seer2Min: 17.5,
      seer2Max: 17.5,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-42000",
      slug: "friedrich-breeze-central-ducted-42000",
      name: "Breeze 42 000 BTU",
      seriesId: "friedrich-breeze",
      brandId: "friedrich",
      modelNumber: "Breeze 42k",
      normalizedModelNumber: "breeze-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 31200,
      heatingCapacity5FMaxBtu: 31200,
      seer2Min: 15.55,
      seer2Max: 15.55,
      hspf2Min: 8.55,
      hspf2Max: 8.55,
      cop5FMin: 1.94,
      cop5FMax: 1.94,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000",
      slug: "friedrich-f-series-plus-central-ducted-36000",
      name: "F - SERIES PLUS 36 000 BTU",
      seriesId: "friedrich-f-series-plus",
      brandId: "friedrich",
      modelNumber: "F - SERIES PLUS 36k",
      normalizedModelNumber: "f-series-plus-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 22800,
      heatingCapacity5FMaxBtu: 31600,
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
      id: "friedrich-f-series-central-ducted-36000",
      slug: "friedrich-f-series-central-ducted-36000",
      name: "F Series 36 000 BTU",
      seriesId: "friedrich-f-series",
      brandId: "friedrich",
      modelNumber: "F Series 36k",
      normalizedModelNumber: "f-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 31600,
      seer2Min: 17,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 1.9,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000",
      slug: "friedrich-f-series-central-ducted-60000",
      name: "F Series 60 000 BTU",
      seriesId: "friedrich-f-series",
      brandId: "friedrich",
      modelNumber: "F Series 60k",
      normalizedModelNumber: "f-series-60000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 60000,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55500,
      heatingCapacity5FMinBtu: 36000,
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
      id: "friedrich-k-series-central-ducted-24000",
      slug: "friedrich-k-series-central-ducted-24000",
      name: "K-SERIES 24 000 BTU",
      seriesId: "friedrich-k-series",
      brandId: "friedrich",
      modelNumber: "K-SERIES 24k",
      normalizedModelNumber: "k-series-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      heatingCapacity5FMinBtu: 15100,
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
      id: "friedrich-f-series-central-ducted-48000",
      slug: "friedrich-f-series-central-ducted-48000",
      name: "F Series 48 000 BTU",
      seriesId: "friedrich-f-series",
      brandId: "friedrich",
      modelNumber: "F Series 48k",
      normalizedModelNumber: "f-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      heatingCapacity5FMinBtu: 32200,
      heatingCapacity5FMaxBtu: 43000,
      seer2Min: 16,
      seer2Max: 17,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-select-wall-single-9000",
      slug: "friedrich-floating-air-select-wall-single-9000",
      name: "Floating  Air Select 9 000 BTU",
      seriesId: "friedrich-floating-air-select",
      brandId: "friedrich",
      modelNumber: "Floating  Air Select 9k",
      normalizedModelNumber: "floating-air-select-9000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-select-wall-single-18000",
      slug: "friedrich-floating-air-select-wall-single-18000",
      name: "Floating  Air Select 18 000 BTU",
      seriesId: "friedrich-floating-air-select",
      brandId: "friedrich",
      modelNumber: "Floating  Air Select 18k",
      normalizedModelNumber: "floating-air-select-18000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-wall-single-9000",
      slug: "friedrich-floating-air-pro-wall-single-9000",
      name: "Floating Air Pro 9 000 BTU",
      seriesId: "friedrich-floating-air-pro",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro 9k",
      normalizedModelNumber: "floating-air-pro-9000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-wall-single-12000",
      slug: "friedrich-floating-air-pro-wall-single-12000",
      name: "Floating Air Pro 12 000 BTU",
      seriesId: "friedrich-floating-air-pro",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro 12k",
      normalizedModelNumber: "floating-air-pro-12000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-wall-single-18000",
      slug: "friedrich-floating-air-pro-wall-single-18000",
      name: "Floating Air Pro 18 000 BTU",
      seriesId: "friedrich-floating-air-pro",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro 18k",
      normalizedModelNumber: "floating-air-pro-18000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-wall-single-24000",
      slug: "friedrich-floating-air-pro-wall-single-24000",
      name: "Floating Air Pro 24 000 BTU",
      seriesId: "friedrich-floating-air-pro",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro 24k",
      normalizedModelNumber: "floating-air-pro-24000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-k-series-central-ducted-36000",
      slug: "friedrich-k-series-central-ducted-36000",
      name: "K-SERIES 36 000 BTU",
      seriesId: "friedrich-k-series",
      brandId: "friedrich",
      modelNumber: "K-SERIES 36k",
      normalizedModelNumber: "k-series-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 9.5,
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
      id: "friedrich-standard-central-ducted-48000",
      slug: "friedrich-standard-central-ducted-48000",
      name: "Standard 48 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 51000,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 26.4,
      seer2Max: 20.6,
      hspf2Min: 12.0,
      hspf2Max: 10.6,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-9000",
      slug: "friedrich-floating-air-pro-x-wall-single-9000",
      name: "Floating Air Pro X 9 000 BTU",
      seriesId: "friedrich-floating-air-pro-x",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro X 9k",
      normalizedModelNumber: "floating-air-pro-x-9000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-x-wall-single-12000",
      slug: "friedrich-floating-air-pro-x-wall-single-12000",
      name: "Floating Air Pro X 12 000 BTU",
      seriesId: "friedrich-floating-air-pro-x",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro X 12k",
      normalizedModelNumber: "floating-air-pro-x-12000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-x-wall-single-18000",
      slug: "friedrich-floating-air-pro-x-wall-single-18000",
      name: "Floating Air Pro X 18 000 BTU",
      seriesId: "friedrich-floating-air-pro-x",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro X 18k",
      normalizedModelNumber: "floating-air-pro-x-18000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-x-wall-single-24000",
      slug: "friedrich-floating-air-pro-x-wall-single-24000",
      name: "Floating Air Pro X 24 000 BTU",
      seriesId: "friedrich-floating-air-pro-x",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro X 24k",
      normalizedModelNumber: "floating-air-pro-x-24000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-x-wall-single-30000",
      slug: "friedrich-floating-air-pro-x-wall-single-30000",
      name: "Floating Air Pro X 30 000 BTU",
      seriesId: "friedrich-floating-air-pro-x",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro X 30k",
      normalizedModelNumber: "floating-air-pro-x-30000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-floating-air-pro-x-wall-single-36000",
      slug: "friedrich-floating-air-pro-x-wall-single-36000",
      name: "Floating Air Pro X 36 000 BTU",
      seriesId: "friedrich-floating-air-pro-x",
      brandId: "friedrich",
      modelNumber: "Floating Air Pro X 36k",
      normalizedModelNumber: "floating-air-pro-x-36000",
      isActive2026: true,
      thermomatchEligible: true,
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
    },
    {
      id: "friedrich-breeze-select-central-ducted-24000",
      slug: "friedrich-breeze-select-central-ducted-24000",
      name: "Breeze Select 24 000 BTU",
      seriesId: "friedrich-breeze-select",
      brandId: "friedrich",
      modelNumber: "Breeze Select 24k",
      normalizedModelNumber: "breeze-select-24000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 24000,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 17000,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-36000",
      slug: "friedrich-standard-wall-single-36000",
      name: "Standard 36 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 36k",
      normalizedModelNumber: "standard-36000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 36000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 22200,
      heatingCapacity5FMaxBtu: 22200,
      seer2Min: 27.6,
      seer2Max: 23.3,
      hspf2Min: 11.7,
      hspf2Max: 12.1,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-select-central-ducted-48000",
      slug: "friedrich-breeze-select-central-ducted-48000",
      name: "Breeze Select 48 000 BTU",
      seriesId: "friedrich-breeze-select",
      brandId: "friedrich",
      modelNumber: "Breeze Select 48k",
      normalizedModelNumber: "breeze-select-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 32200,
      heatingCapacity5FMaxBtu: 32200,
      seer2Min: 18,
      seer2Max: 18,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-48000",
      slug: "friedrich-standard-wall-single-48000",
      name: "Standard 48 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 48k",
      normalizedModelNumber: "standard-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 33200,
      heatingCapacity5FMaxBtu: 33200,
      seer2Min: 24.5,
      seer2Max: 23.9,
      hspf2Min: 10.7,
      hspf2Max: 10.5,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000",
      slug: "friedrich-k-series-central-ducted-20000",
      name: "K-SERIES 20 000 BTU",
      seriesId: "friedrich-k-series",
      brandId: "friedrich",
      modelNumber: "K-SERIES 20k",
      normalizedModelNumber: "k-series-20000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 20000,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 21200,
      heatingCapacity5FMinBtu: 18100,
      heatingCapacity5FMaxBtu: 18300,
      seer2Min: 17,
      seer2Max: 18,
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
      id: "friedrich-k-series-central-ducted-42000",
      slug: "friedrich-k-series-central-ducted-42000",
      name: "K-SERIES 42 000 BTU",
      seriesId: "friedrich-k-series",
      brandId: "friedrich",
      modelNumber: "K-SERIES 42k",
      normalizedModelNumber: "k-series-42000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 42000,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 43500,
      heatingCapacity5FMinBtu: 35600,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000",
      slug: "friedrich-k-series-central-ducted-48000",
      name: "K-SERIES 48 000 BTU",
      seriesId: "friedrich-k-series",
      brandId: "friedrich",
      modelNumber: "K-SERIES 48k",
      normalizedModelNumber: "k-series-48000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 48000,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 41000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 16,
      seer2Max: 18,
      hspf2Min: 8.1,
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
      id: "friedrich-k-series-central-ducted-30000",
      slug: "friedrich-k-series-central-ducted-30000",
      name: "K-SERIES 30 000 BTU",
      seriesId: "friedrich-k-series",
      brandId: "friedrich",
      modelNumber: "K-SERIES 30k",
      normalizedModelNumber: "k-series-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: 31600,
      coolingCapacityMaxBtu: 32800,
      heatingCapacity5FMinBtu: 28800,
      heatingCapacity5FMaxBtu: 29800,
      seer2Min: 18,
      seer2Max: 19,
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
      id: "friedrich-f-series-plus-central-ducted-24000",
      slug: "friedrich-f-series-plus-central-ducted-24000",
      name: "F-Series Plus 24 000 BTU",
      seriesId: "friedrich-f-series-plus",
      brandId: "friedrich",
      modelNumber: "F-Series Plus 24k",
      normalizedModelNumber: "f-series-plus-24000",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "friedrich-standard-wall-single-30000",
      slug: "friedrich-standard-wall-single-30000",
      name: "Standard 30 000 BTU",
      seriesId: "friedrich-standard",
      brandId: "friedrich",
      modelNumber: "Standard 30k",
      normalizedModelNumber: "standard-30000",
      isActive2026: true,
      thermomatchEligible: true,
      nominalCapacityBtu: 30000,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 23200,
      heatingCapacity5FMaxBtu: 23200,
      seer2Min: 26.5,
      seer2Max: 18.5,
      hspf2Min: 11.1,
      hspf2Max: 10.6,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-42000",
      slug: "friedrich-f-series-plus-central-ducted-42000",
      name: "F-Series Plus 42 000 BTU",
      seriesId: "friedrich-f-series-plus",
      brandId: "friedrich",
      modelNumber: "F-Series Plus 42k",
      normalizedModelNumber: "f-series-plus-42000",
      isActive2026: true,
      thermomatchEligible: true,
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
    }
  ],
  outdoorUnits: [
    {
      id: "friedrich-mrh12y3j",
      modelNumber: "MRH12Y3J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrad12y1j",
      modelNumber: "MRAD12Y1J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrh12y3ja",
      modelNumber: "MRH12Y3JA",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-vrp12k",
      modelNumber: "VRP12K******-*",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-vrp12r",
      modelNumber: "VRP12R******-*",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fshsr12b1c",
      modelNumber: "FSHSR12B1C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrad09y1j",
      modelNumber: "MRAD09Y1J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrh09y3ja",
      modelNumber: "MRH09Y3JA",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frhsr09a3a",
      modelNumber: "FRHSR09A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frhsr09a3a-a",
      modelNumber: "FRHSR09A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrad18y3j",
      modelNumber: "MRAD18Y3J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-mrad24y3j",
      modelNumber: "MRAD24Y3J",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frhsr12a3a",
      modelNumber: "FRHSR12A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frhsr12a3a-a",
      modelNumber: "FRHSR12A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a3a",
      modelNumber: "FPHSR09A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a1a",
      modelNumber: "FPHSR09A1A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a1a-a",
      modelNumber: "FPHSR09A1A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a3a-a",
      modelNumber: "FPHSR09A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a3a",
      modelNumber: "FPHSR12A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a1a",
      modelNumber: "FPHSR12A1A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr12a3a",
      modelNumber: "FPHFR12A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a1a-a",
      modelNumber: "FPHSR12A1A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a3a-a",
      modelNumber: "FPHSR12A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr18a3a",
      modelNumber: "FPHSR18A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr18a3a",
      modelNumber: "FPHFR18A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr18a3a-a",
      modelNumber: "FPHSR18A3A-A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphmr18a3a",
      modelNumber: "FPHMR18A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphmr24a3a",
      modelNumber: "FPHMR24A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr24a3a",
      modelNumber: "FPHFR24A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphmr36a3a",
      modelNumber: "FPHMR36A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphmr42a3a",
      modelNumber: "FPHMR42A3A",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-vrp24k",
      modelNumber: "VRP24K******-*",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-vrp24r",
      modelNumber: "VRP24R******-*",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fshsr24b3d",
      modelNumber: "FSHSR24B3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17z603c",
      modelNumber: "WFPU17Z603C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17z243c",
      modelNumber: "WFPU17Z243C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu18z363c",
      modelNumber: "WFPU18Z363C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu18z483c",
      modelNumber: "WFPU18Z483C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd17az36aj3n",
      modelNumber: "RD17AZ36AJ3N",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd17az60aj3n",
      modelNumber: "RD17AZ60AJ3N",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd17az24aj3n",
      modelNumber: "RD17AZ24AJ3N",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd17az48aj3n",
      modelNumber: "RD17AZ48AJ3N",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fshsr09b1c",
      modelNumber: "FSHSR09B1C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fshsr18b3d",
      modelNumber: "FSHSR18B3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a1c",
      modelNumber: "FPHSR09A1C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr09a3d",
      modelNumber: "FPHSR09A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a1c",
      modelNumber: "FPHSR12A1C",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr12a3d",
      modelNumber: "FPHSR12A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr18a3d",
      modelNumber: "FPHSR18A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphsr24a3d",
      modelNumber: "FPHSR24A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frp19ay36ajvc",
      modelNumber: "FRP19AY36AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-frp19ay60ajvc",
      modelNumber: "FRP19AY60AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr09a3d",
      modelNumber: "FPHFR09A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr12a3d",
      modelNumber: "FPHFR12A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr18a3d",
      modelNumber: "FPHFR18A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr24a3d",
      modelNumber: "FPHFR24A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-fphfr36a3d",
      modelNumber: "FPHFR36A3D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17y243d",
      modelNumber: "WFPU17Y243D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17y363d",
      modelNumber: "WFPU17Y363D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17y483d",
      modelNumber: "WFPU17Y483D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-wfpu17y603d",
      modelNumber: "WFPU17Y603D",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd18ay24ajvc",
      modelNumber: "RD18AY24AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd18ay48ajvc",
      modelNumber: "RD18AY48AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd18ay60ajvc",
      modelNumber: "RD18AY60AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd18ay36ajvc",
      modelNumber: "RD18AY36AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd16ay24ajvc",
      modelNumber: "RD16AY24AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd16ay36ajvc",
      modelNumber: "RD16AY36AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    },
    {
      id: "friedrich-rd16ay48ajvc",
      modelNumber: "RD16AY48AJVC",
      brandId: "friedrich",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "friedrich-standard-wall-single-12000-cfg-1",
      slug: "friedrich-standard-wall-single-12000-cfg-1",
      modelId: "friedrich-standard-wall-single-12000",
      outdoorUnitId: "friedrich-mrh12y3j",
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
      id: "friedrich-standard-wall-single-12000-cfg-2",
      slug: "friedrich-standard-wall-single-12000-cfg-2",
      modelId: "friedrich-standard-wall-single-12000",
      outdoorUnitId: "friedrich-mrad12y1j",
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
      id: "friedrich-standard-wall-single-12000-cfg-3",
      slug: "friedrich-standard-wall-single-12000-cfg-3",
      modelId: "friedrich-standard-wall-single-12000",
      outdoorUnitId: "friedrich-mrh12y3ja",
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
      id: "friedrich-standard-wall-single-12000-cfg-4",
      slug: "friedrich-standard-wall-single-12000-cfg-4",
      modelId: "friedrich-standard-wall-single-12000",
      outdoorUnitId: "friedrich-vrp12k",
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
      id: "friedrich-standard-wall-single-12000-cfg-5",
      slug: "friedrich-standard-wall-single-12000-cfg-5",
      modelId: "friedrich-standard-wall-single-12000",
      outdoorUnitId: "friedrich-vrp12r",
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
      id: "friedrich-standard-wall-single-12000-cfg-6",
      slug: "friedrich-standard-wall-single-12000-cfg-6",
      modelId: "friedrich-standard-wall-single-12000",
      outdoorUnitId: "friedrich-fshsr12b1c",
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
      id: "friedrich-standard-wall-single-9000-cfg-1",
      slug: "friedrich-standard-wall-single-9000-cfg-1",
      modelId: "friedrich-standard-wall-single-9000",
      outdoorUnitId: "friedrich-mrad09y1j",
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
      id: "friedrich-standard-wall-single-9000-cfg-2",
      slug: "friedrich-standard-wall-single-9000-cfg-2",
      modelId: "friedrich-standard-wall-single-9000",
      outdoorUnitId: "friedrich-mrh09y3ja",
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
      id: "friedrich-standard-wall-single-9000-cfg-3",
      slug: "friedrich-standard-wall-single-9000-cfg-3",
      modelId: "friedrich-standard-wall-single-9000",
      outdoorUnitId: "friedrich-frhsr09a3a",
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
      id: "friedrich-standard-wall-single-9000-cfg-4",
      slug: "friedrich-standard-wall-single-9000-cfg-4",
      modelId: "friedrich-standard-wall-single-9000",
      outdoorUnitId: "friedrich-frhsr09a3a-a",
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
      id: "friedrich-standard-wall-single-18000-cfg-1",
      slug: "friedrich-standard-wall-single-18000-cfg-1",
      modelId: "friedrich-standard-wall-single-18000",
      outdoorUnitId: "friedrich-mrad18y3j",
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
      id: "friedrich-standard-wall-single-20000-cfg-1",
      slug: "friedrich-standard-wall-single-20000-cfg-1",
      modelId: "friedrich-standard-wall-single-20000",
      outdoorUnitId: "friedrich-mrad24y3j",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-premier-wall-single-12000-cfg-1",
      slug: "friedrich-premier-wall-single-12000-cfg-1",
      modelId: "friedrich-premier-wall-single-12000",
      outdoorUnitId: "friedrich-frhsr12a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-premier-wall-single-12000-cfg-2",
      slug: "friedrich-premier-wall-single-12000-cfg-2",
      modelId: "friedrich-premier-wall-single-12000",
      outdoorUnitId: "friedrich-frhsr12a3a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-9000-cfg-1",
      slug: "friedrich-pro-wall-single-9000-cfg-1",
      modelId: "friedrich-pro-wall-single-9000",
      outdoorUnitId: "friedrich-fphsr09a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-9000-cfg-2",
      slug: "friedrich-pro-wall-single-9000-cfg-2",
      modelId: "friedrich-pro-wall-single-9000",
      outdoorUnitId: "friedrich-fphsr09a1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-9000-cfg-3",
      slug: "friedrich-pro-wall-single-9000-cfg-3",
      modelId: "friedrich-pro-wall-single-9000",
      outdoorUnitId: "friedrich-fphsr09a1a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-9000-cfg-4",
      slug: "friedrich-pro-wall-single-9000-cfg-4",
      modelId: "friedrich-pro-wall-single-9000",
      outdoorUnitId: "friedrich-fphsr09a3a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-12000-cfg-1",
      slug: "friedrich-pro-wall-single-12000-cfg-1",
      modelId: "friedrich-pro-wall-single-12000",
      outdoorUnitId: "friedrich-fphsr12a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-12000-cfg-2",
      slug: "friedrich-pro-wall-single-12000-cfg-2",
      modelId: "friedrich-pro-wall-single-12000",
      outdoorUnitId: "friedrich-fphsr12a1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-12000-cfg-3",
      slug: "friedrich-pro-wall-single-12000-cfg-3",
      modelId: "friedrich-pro-wall-single-12000",
      outdoorUnitId: "friedrich-fphfr12a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-12000-cfg-4",
      slug: "friedrich-pro-wall-single-12000-cfg-4",
      modelId: "friedrich-pro-wall-single-12000",
      outdoorUnitId: "friedrich-fphsr12a1a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-12000-cfg-5",
      slug: "friedrich-pro-wall-single-12000-cfg-5",
      modelId: "friedrich-pro-wall-single-12000",
      outdoorUnitId: "friedrich-fphsr12a3a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-18000-cfg-1",
      slug: "friedrich-pro-wall-single-18000-cfg-1",
      modelId: "friedrich-pro-wall-single-18000",
      outdoorUnitId: "friedrich-fphsr18a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-18000-cfg-2",
      slug: "friedrich-pro-wall-single-18000-cfg-2",
      modelId: "friedrich-pro-wall-single-18000",
      outdoorUnitId: "friedrich-fphfr18a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-18000-cfg-3",
      slug: "friedrich-pro-wall-single-18000-cfg-3",
      modelId: "friedrich-pro-wall-single-18000",
      outdoorUnitId: "friedrich-fphsr18a3a-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-18000-cfg-4",
      slug: "friedrich-pro-wall-single-18000-cfg-4",
      modelId: "friedrich-pro-wall-single-18000",
      outdoorUnitId: "friedrich-fphmr18a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-24000-cfg-1",
      slug: "friedrich-pro-wall-single-24000-cfg-1",
      modelId: "friedrich-pro-wall-single-24000",
      outdoorUnitId: "friedrich-fphmr24a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-24000-cfg-2",
      slug: "friedrich-pro-wall-single-24000-cfg-2",
      modelId: "friedrich-pro-wall-single-24000",
      outdoorUnitId: "friedrich-fphfr24a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-30000-cfg-1",
      slug: "friedrich-pro-wall-single-30000-cfg-1",
      modelId: "friedrich-pro-wall-single-30000",
      outdoorUnitId: "friedrich-fphmr36a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-pro-wall-single-42000-cfg-1",
      slug: "friedrich-pro-wall-single-42000-cfg-1",
      modelId: "friedrich-pro-wall-single-42000",
      outdoorUnitId: "friedrich-fphmr42a3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-24000-cfg-1",
      slug: "friedrich-standard-wall-single-24000-cfg-1",
      modelId: "friedrich-standard-wall-single-24000",
      outdoorUnitId: "friedrich-vrp24k",
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
      id: "friedrich-standard-wall-single-24000-cfg-2",
      slug: "friedrich-standard-wall-single-24000-cfg-2",
      modelId: "friedrich-standard-wall-single-24000",
      outdoorUnitId: "friedrich-vrp24r",
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
      id: "friedrich-standard-wall-single-24000-cfg-3",
      slug: "friedrich-standard-wall-single-24000-cfg-3",
      modelId: "friedrich-standard-wall-single-24000",
      outdoorUnitId: "friedrich-fshsr24b3d",
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
      id: "friedrich-standard-wall-single-60000-cfg-1",
      slug: "friedrich-standard-wall-single-60000-cfg-1",
      modelId: "friedrich-standard-wall-single-60000",
      outdoorUnitId: "friedrich-wfpu17z603c",
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
      id: "friedrich-breeze-central-ducted-20000-cfg-1",
      slug: "friedrich-breeze-central-ducted-20000-cfg-1",
      modelId: "friedrich-breeze-central-ducted-20000",
      outdoorUnitId: "friedrich-wfpu17z243c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-36000-cfg-1",
      slug: "friedrich-breeze-central-ducted-36000-cfg-1",
      modelId: "friedrich-breeze-central-ducted-36000",
      outdoorUnitId: "friedrich-wfpu18z363c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-36000-cfg-2",
      slug: "friedrich-breeze-central-ducted-36000-cfg-2",
      modelId: "friedrich-breeze-central-ducted-36000",
      outdoorUnitId: "friedrich-wfpu18z363c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-48000-cfg-1",
      slug: "friedrich-breeze-central-ducted-48000-cfg-1",
      modelId: "friedrich-breeze-central-ducted-48000",
      outdoorUnitId: "friedrich-wfpu18z483c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-central-ducted-42000-cfg-1",
      slug: "friedrich-breeze-central-ducted-42000-cfg-1",
      modelId: "friedrich-breeze-central-ducted-42000",
      outdoorUnitId: "friedrich-wfpu18z483c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 15.55,
      hspf2: 8.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-1",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-1",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-2",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-2",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-3",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-3",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-4",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-4",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-5",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-5",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-6",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-6",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-7",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-7",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-8",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-8",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-9",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-9",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-10",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-10",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-11",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-11",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-12",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-12",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-13",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-13",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-14",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-14",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-15",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-15",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-16",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-16",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-17",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-17",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-18",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-18",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-19",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-19",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-20",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-20",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-21",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-21",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-22",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-22",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-23",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-23",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-24",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-24",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-25",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-25",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-26",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-26",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-27",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-27",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-28",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-28",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-29",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-29",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-30",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-30",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-31",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-31",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-32",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-32",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-33",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-33",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-34",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-34",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-35",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-35",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-36",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-36",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-37",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-37",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-38",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-38",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-39",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-39",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-40",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-40",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-41",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-41",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-42",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-42",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-36000-cfg-43",
      slug: "friedrich-f-series-plus-central-ducted-36000-cfg-43",
      modelId: "friedrich-f-series-plus-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-1",
      slug: "friedrich-f-series-central-ducted-36000-cfg-1",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-2",
      slug: "friedrich-f-series-central-ducted-36000-cfg-2",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-3",
      slug: "friedrich-f-series-central-ducted-36000-cfg-3",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-4",
      slug: "friedrich-f-series-central-ducted-36000-cfg-4",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-5",
      slug: "friedrich-f-series-central-ducted-36000-cfg-5",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-6",
      slug: "friedrich-f-series-central-ducted-36000-cfg-6",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-7",
      slug: "friedrich-f-series-central-ducted-36000-cfg-7",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-8",
      slug: "friedrich-f-series-central-ducted-36000-cfg-8",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-9",
      slug: "friedrich-f-series-central-ducted-36000-cfg-9",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-10",
      slug: "friedrich-f-series-central-ducted-36000-cfg-10",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-11",
      slug: "friedrich-f-series-central-ducted-36000-cfg-11",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-12",
      slug: "friedrich-f-series-central-ducted-36000-cfg-12",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-13",
      slug: "friedrich-f-series-central-ducted-36000-cfg-13",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-14",
      slug: "friedrich-f-series-central-ducted-36000-cfg-14",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-15",
      slug: "friedrich-f-series-central-ducted-36000-cfg-15",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-16",
      slug: "friedrich-f-series-central-ducted-36000-cfg-16",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-17",
      slug: "friedrich-f-series-central-ducted-36000-cfg-17",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-18",
      slug: "friedrich-f-series-central-ducted-36000-cfg-18",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-19",
      slug: "friedrich-f-series-central-ducted-36000-cfg-19",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-20",
      slug: "friedrich-f-series-central-ducted-36000-cfg-20",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-36000-cfg-21",
      slug: "friedrich-f-series-central-ducted-36000-cfg-21",
      modelId: "friedrich-f-series-central-ducted-36000",
      outdoorUnitId: "friedrich-rd17az36aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-1",
      slug: "friedrich-f-series-central-ducted-60000-cfg-1",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-2",
      slug: "friedrich-f-series-central-ducted-60000-cfg-2",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-3",
      slug: "friedrich-f-series-central-ducted-60000-cfg-3",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-4",
      slug: "friedrich-f-series-central-ducted-60000-cfg-4",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-5",
      slug: "friedrich-f-series-central-ducted-60000-cfg-5",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-6",
      slug: "friedrich-f-series-central-ducted-60000-cfg-6",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-7",
      slug: "friedrich-f-series-central-ducted-60000-cfg-7",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-8",
      slug: "friedrich-f-series-central-ducted-60000-cfg-8",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-9",
      slug: "friedrich-f-series-central-ducted-60000-cfg-9",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-10",
      slug: "friedrich-f-series-central-ducted-60000-cfg-10",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-11",
      slug: "friedrich-f-series-central-ducted-60000-cfg-11",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-12",
      slug: "friedrich-f-series-central-ducted-60000-cfg-12",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-13",
      slug: "friedrich-f-series-central-ducted-60000-cfg-13",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-14",
      slug: "friedrich-f-series-central-ducted-60000-cfg-14",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-15",
      slug: "friedrich-f-series-central-ducted-60000-cfg-15",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-16",
      slug: "friedrich-f-series-central-ducted-60000-cfg-16",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-17",
      slug: "friedrich-f-series-central-ducted-60000-cfg-17",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-18",
      slug: "friedrich-f-series-central-ducted-60000-cfg-18",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-19",
      slug: "friedrich-f-series-central-ducted-60000-cfg-19",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-20",
      slug: "friedrich-f-series-central-ducted-60000-cfg-20",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-21",
      slug: "friedrich-f-series-central-ducted-60000-cfg-21",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-22",
      slug: "friedrich-f-series-central-ducted-60000-cfg-22",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-23",
      slug: "friedrich-f-series-central-ducted-60000-cfg-23",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-24",
      slug: "friedrich-f-series-central-ducted-60000-cfg-24",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-25",
      slug: "friedrich-f-series-central-ducted-60000-cfg-25",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-26",
      slug: "friedrich-f-series-central-ducted-60000-cfg-26",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-27",
      slug: "friedrich-f-series-central-ducted-60000-cfg-27",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-28",
      slug: "friedrich-f-series-central-ducted-60000-cfg-28",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-29",
      slug: "friedrich-f-series-central-ducted-60000-cfg-29",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-30",
      slug: "friedrich-f-series-central-ducted-60000-cfg-30",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-31",
      slug: "friedrich-f-series-central-ducted-60000-cfg-31",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-32",
      slug: "friedrich-f-series-central-ducted-60000-cfg-32",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-33",
      slug: "friedrich-f-series-central-ducted-60000-cfg-33",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-34",
      slug: "friedrich-f-series-central-ducted-60000-cfg-34",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-35",
      slug: "friedrich-f-series-central-ducted-60000-cfg-35",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-36",
      slug: "friedrich-f-series-central-ducted-60000-cfg-36",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-37",
      slug: "friedrich-f-series-central-ducted-60000-cfg-37",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-38",
      slug: "friedrich-f-series-central-ducted-60000-cfg-38",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-60000-cfg-39",
      slug: "friedrich-f-series-central-ducted-60000-cfg-39",
      modelId: "friedrich-f-series-central-ducted-60000",
      outdoorUnitId: "friedrich-rd17az60aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-1",
      slug: "friedrich-k-series-central-ducted-24000-cfg-1",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-2",
      slug: "friedrich-k-series-central-ducted-24000-cfg-2",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-3",
      slug: "friedrich-k-series-central-ducted-24000-cfg-3",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-4",
      slug: "friedrich-k-series-central-ducted-24000-cfg-4",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-5",
      slug: "friedrich-k-series-central-ducted-24000-cfg-5",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-6",
      slug: "friedrich-k-series-central-ducted-24000-cfg-6",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-7",
      slug: "friedrich-k-series-central-ducted-24000-cfg-7",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-8",
      slug: "friedrich-k-series-central-ducted-24000-cfg-8",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-9",
      slug: "friedrich-k-series-central-ducted-24000-cfg-9",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-10",
      slug: "friedrich-k-series-central-ducted-24000-cfg-10",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-11",
      slug: "friedrich-k-series-central-ducted-24000-cfg-11",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-12",
      slug: "friedrich-k-series-central-ducted-24000-cfg-12",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-13",
      slug: "friedrich-k-series-central-ducted-24000-cfg-13",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-14",
      slug: "friedrich-k-series-central-ducted-24000-cfg-14",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-15",
      slug: "friedrich-k-series-central-ducted-24000-cfg-15",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-16",
      slug: "friedrich-k-series-central-ducted-24000-cfg-16",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-17",
      slug: "friedrich-k-series-central-ducted-24000-cfg-17",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-18",
      slug: "friedrich-k-series-central-ducted-24000-cfg-18",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-19",
      slug: "friedrich-k-series-central-ducted-24000-cfg-19",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-20",
      slug: "friedrich-k-series-central-ducted-24000-cfg-20",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-21",
      slug: "friedrich-k-series-central-ducted-24000-cfg-21",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-22",
      slug: "friedrich-k-series-central-ducted-24000-cfg-22",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-23",
      slug: "friedrich-k-series-central-ducted-24000-cfg-23",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-24",
      slug: "friedrich-k-series-central-ducted-24000-cfg-24",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-25",
      slug: "friedrich-k-series-central-ducted-24000-cfg-25",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-26",
      slug: "friedrich-k-series-central-ducted-24000-cfg-26",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-27",
      slug: "friedrich-k-series-central-ducted-24000-cfg-27",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-28",
      slug: "friedrich-k-series-central-ducted-24000-cfg-28",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-29",
      slug: "friedrich-k-series-central-ducted-24000-cfg-29",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-30",
      slug: "friedrich-k-series-central-ducted-24000-cfg-30",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-31",
      slug: "friedrich-k-series-central-ducted-24000-cfg-31",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-32",
      slug: "friedrich-k-series-central-ducted-24000-cfg-32",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-33",
      slug: "friedrich-k-series-central-ducted-24000-cfg-33",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-34",
      slug: "friedrich-k-series-central-ducted-24000-cfg-34",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-35",
      slug: "friedrich-k-series-central-ducted-24000-cfg-35",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-36",
      slug: "friedrich-k-series-central-ducted-24000-cfg-36",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-24000-cfg-37",
      slug: "friedrich-k-series-central-ducted-24000-cfg-37",
      modelId: "friedrich-k-series-central-ducted-24000",
      outdoorUnitId: "friedrich-rd17az24aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-1",
      slug: "friedrich-f-series-central-ducted-48000-cfg-1",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-2",
      slug: "friedrich-f-series-central-ducted-48000-cfg-2",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-3",
      slug: "friedrich-f-series-central-ducted-48000-cfg-3",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-4",
      slug: "friedrich-f-series-central-ducted-48000-cfg-4",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-5",
      slug: "friedrich-f-series-central-ducted-48000-cfg-5",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-6",
      slug: "friedrich-f-series-central-ducted-48000-cfg-6",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-7",
      slug: "friedrich-f-series-central-ducted-48000-cfg-7",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-8",
      slug: "friedrich-f-series-central-ducted-48000-cfg-8",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-9",
      slug: "friedrich-f-series-central-ducted-48000-cfg-9",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-10",
      slug: "friedrich-f-series-central-ducted-48000-cfg-10",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-11",
      slug: "friedrich-f-series-central-ducted-48000-cfg-11",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-12",
      slug: "friedrich-f-series-central-ducted-48000-cfg-12",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-13",
      slug: "friedrich-f-series-central-ducted-48000-cfg-13",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-14",
      slug: "friedrich-f-series-central-ducted-48000-cfg-14",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-15",
      slug: "friedrich-f-series-central-ducted-48000-cfg-15",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-16",
      slug: "friedrich-f-series-central-ducted-48000-cfg-16",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-17",
      slug: "friedrich-f-series-central-ducted-48000-cfg-17",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-18",
      slug: "friedrich-f-series-central-ducted-48000-cfg-18",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-19",
      slug: "friedrich-f-series-central-ducted-48000-cfg-19",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-20",
      slug: "friedrich-f-series-central-ducted-48000-cfg-20",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-21",
      slug: "friedrich-f-series-central-ducted-48000-cfg-21",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-22",
      slug: "friedrich-f-series-central-ducted-48000-cfg-22",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-23",
      slug: "friedrich-f-series-central-ducted-48000-cfg-23",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-24",
      slug: "friedrich-f-series-central-ducted-48000-cfg-24",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-25",
      slug: "friedrich-f-series-central-ducted-48000-cfg-25",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-26",
      slug: "friedrich-f-series-central-ducted-48000-cfg-26",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-27",
      slug: "friedrich-f-series-central-ducted-48000-cfg-27",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-28",
      slug: "friedrich-f-series-central-ducted-48000-cfg-28",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-29",
      slug: "friedrich-f-series-central-ducted-48000-cfg-29",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-30",
      slug: "friedrich-f-series-central-ducted-48000-cfg-30",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-31",
      slug: "friedrich-f-series-central-ducted-48000-cfg-31",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-32",
      slug: "friedrich-f-series-central-ducted-48000-cfg-32",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-33",
      slug: "friedrich-f-series-central-ducted-48000-cfg-33",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-34",
      slug: "friedrich-f-series-central-ducted-48000-cfg-34",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-35",
      slug: "friedrich-f-series-central-ducted-48000-cfg-35",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-36",
      slug: "friedrich-f-series-central-ducted-48000-cfg-36",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-central-ducted-48000-cfg-37",
      slug: "friedrich-f-series-central-ducted-48000-cfg-37",
      modelId: "friedrich-f-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd17az48aj3n",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-select-wall-single-9000-cfg-1",
      slug: "friedrich-floating-air-select-wall-single-9000-cfg-1",
      modelId: "friedrich-floating-air-select-wall-single-9000",
      outdoorUnitId: "friedrich-fshsr09b1c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-select-wall-single-18000-cfg-1",
      slug: "friedrich-floating-air-select-wall-single-18000-cfg-1",
      modelId: "friedrich-floating-air-select-wall-single-18000",
      outdoorUnitId: "friedrich-fshsr18b3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-wall-single-9000-cfg-1",
      slug: "friedrich-floating-air-pro-wall-single-9000-cfg-1",
      modelId: "friedrich-floating-air-pro-wall-single-9000",
      outdoorUnitId: "friedrich-fphsr09a1c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-wall-single-9000-cfg-2",
      slug: "friedrich-floating-air-pro-wall-single-9000-cfg-2",
      modelId: "friedrich-floating-air-pro-wall-single-9000",
      outdoorUnitId: "friedrich-fphsr09a3d",
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
      id: "friedrich-floating-air-pro-wall-single-12000-cfg-1",
      slug: "friedrich-floating-air-pro-wall-single-12000-cfg-1",
      modelId: "friedrich-floating-air-pro-wall-single-12000",
      outdoorUnitId: "friedrich-fphsr12a1c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-wall-single-12000-cfg-2",
      slug: "friedrich-floating-air-pro-wall-single-12000-cfg-2",
      modelId: "friedrich-floating-air-pro-wall-single-12000",
      outdoorUnitId: "friedrich-fphsr12a3d",
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
      id: "friedrich-floating-air-pro-wall-single-18000-cfg-1",
      slug: "friedrich-floating-air-pro-wall-single-18000-cfg-1",
      modelId: "friedrich-floating-air-pro-wall-single-18000",
      outdoorUnitId: "friedrich-fphsr18a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-wall-single-24000-cfg-1",
      slug: "friedrich-floating-air-pro-wall-single-24000-cfg-1",
      modelId: "friedrich-floating-air-pro-wall-single-24000",
      outdoorUnitId: "friedrich-fphsr24a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-1",
      slug: "friedrich-k-series-central-ducted-36000-cfg-1",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-2",
      slug: "friedrich-k-series-central-ducted-36000-cfg-2",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-3",
      slug: "friedrich-k-series-central-ducted-36000-cfg-3",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-4",
      slug: "friedrich-k-series-central-ducted-36000-cfg-4",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-5",
      slug: "friedrich-k-series-central-ducted-36000-cfg-5",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-6",
      slug: "friedrich-k-series-central-ducted-36000-cfg-6",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-7",
      slug: "friedrich-k-series-central-ducted-36000-cfg-7",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-8",
      slug: "friedrich-k-series-central-ducted-36000-cfg-8",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-9",
      slug: "friedrich-k-series-central-ducted-36000-cfg-9",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-10",
      slug: "friedrich-k-series-central-ducted-36000-cfg-10",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-11",
      slug: "friedrich-k-series-central-ducted-36000-cfg-11",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-12",
      slug: "friedrich-k-series-central-ducted-36000-cfg-12",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-13",
      slug: "friedrich-k-series-central-ducted-36000-cfg-13",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-14",
      slug: "friedrich-k-series-central-ducted-36000-cfg-14",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-15",
      slug: "friedrich-k-series-central-ducted-36000-cfg-15",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-16",
      slug: "friedrich-k-series-central-ducted-36000-cfg-16",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-17",
      slug: "friedrich-k-series-central-ducted-36000-cfg-17",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-18",
      slug: "friedrich-k-series-central-ducted-36000-cfg-18",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-19",
      slug: "friedrich-k-series-central-ducted-36000-cfg-19",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-20",
      slug: "friedrich-k-series-central-ducted-36000-cfg-20",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-21",
      slug: "friedrich-k-series-central-ducted-36000-cfg-21",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-22",
      slug: "friedrich-k-series-central-ducted-36000-cfg-22",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-23",
      slug: "friedrich-k-series-central-ducted-36000-cfg-23",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-24",
      slug: "friedrich-k-series-central-ducted-36000-cfg-24",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-25",
      slug: "friedrich-k-series-central-ducted-36000-cfg-25",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-26",
      slug: "friedrich-k-series-central-ducted-36000-cfg-26",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-27",
      slug: "friedrich-k-series-central-ducted-36000-cfg-27",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-36000-cfg-28",
      slug: "friedrich-k-series-central-ducted-36000-cfg-28",
      modelId: "friedrich-k-series-central-ducted-36000",
      outdoorUnitId: "friedrich-frp19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-central-ducted-48000-cfg-1",
      slug: "friedrich-standard-central-ducted-48000-cfg-1",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-2",
      slug: "friedrich-standard-central-ducted-48000-cfg-2",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-3",
      slug: "friedrich-standard-central-ducted-48000-cfg-3",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-4",
      slug: "friedrich-standard-central-ducted-48000-cfg-4",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-5",
      slug: "friedrich-standard-central-ducted-48000-cfg-5",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-6",
      slug: "friedrich-standard-central-ducted-48000-cfg-6",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-7",
      slug: "friedrich-standard-central-ducted-48000-cfg-7",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-8",
      slug: "friedrich-standard-central-ducted-48000-cfg-8",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-9",
      slug: "friedrich-standard-central-ducted-48000-cfg-9",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-10",
      slug: "friedrich-standard-central-ducted-48000-cfg-10",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-standard-central-ducted-48000-cfg-11",
      slug: "friedrich-standard-central-ducted-48000-cfg-11",
      modelId: "friedrich-standard-central-ducted-48000",
      outdoorUnitId: "friedrich-frp19ay60ajvc",
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
      id: "friedrich-floating-air-pro-x-wall-single-9000-cfg-1",
      slug: "friedrich-floating-air-pro-x-wall-single-9000-cfg-1",
      modelId: "friedrich-floating-air-pro-x-wall-single-9000",
      outdoorUnitId: "friedrich-fphfr09a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-9000-cfg-2",
      slug: "friedrich-floating-air-pro-x-wall-single-9000-cfg-2",
      modelId: "friedrich-floating-air-pro-x-wall-single-9000",
      outdoorUnitId: "friedrich-fphfr09a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-12000-cfg-1",
      slug: "friedrich-floating-air-pro-x-wall-single-12000-cfg-1",
      modelId: "friedrich-floating-air-pro-x-wall-single-12000",
      outdoorUnitId: "friedrich-fphfr12a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-12000-cfg-2",
      slug: "friedrich-floating-air-pro-x-wall-single-12000-cfg-2",
      modelId: "friedrich-floating-air-pro-x-wall-single-12000",
      outdoorUnitId: "friedrich-fphfr12a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-18000-cfg-1",
      slug: "friedrich-floating-air-pro-x-wall-single-18000-cfg-1",
      modelId: "friedrich-floating-air-pro-x-wall-single-18000",
      outdoorUnitId: "friedrich-fphfr18a3d",
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
      id: "friedrich-floating-air-pro-x-wall-single-18000-cfg-2",
      slug: "friedrich-floating-air-pro-x-wall-single-18000-cfg-2",
      modelId: "friedrich-floating-air-pro-x-wall-single-18000",
      outdoorUnitId: "friedrich-fphfr18a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-24000-cfg-1",
      slug: "friedrich-floating-air-pro-x-wall-single-24000-cfg-1",
      modelId: "friedrich-floating-air-pro-x-wall-single-24000",
      outdoorUnitId: "friedrich-fphfr24a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-24000-cfg-2",
      slug: "friedrich-floating-air-pro-x-wall-single-24000-cfg-2",
      modelId: "friedrich-floating-air-pro-x-wall-single-24000",
      outdoorUnitId: "friedrich-fphfr24a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-30000-cfg-1",
      slug: "friedrich-floating-air-pro-x-wall-single-30000-cfg-1",
      modelId: "friedrich-floating-air-pro-x-wall-single-30000",
      outdoorUnitId: "friedrich-fphfr36a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-floating-air-pro-x-wall-single-36000-cfg-1",
      slug: "friedrich-floating-air-pro-x-wall-single-36000-cfg-1",
      modelId: "friedrich-floating-air-pro-x-wall-single-36000",
      outdoorUnitId: "friedrich-fphfr36a3d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-select-central-ducted-24000-cfg-1",
      slug: "friedrich-breeze-select-central-ducted-24000-cfg-1",
      modelId: "friedrich-breeze-select-central-ducted-24000",
      outdoorUnitId: "friedrich-wfpu17y243d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-36000-cfg-1",
      slug: "friedrich-standard-wall-single-36000-cfg-1",
      modelId: "friedrich-standard-wall-single-36000",
      outdoorUnitId: "friedrich-wfpu17y363d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-breeze-select-central-ducted-48000-cfg-1",
      slug: "friedrich-breeze-select-central-ducted-48000-cfg-1",
      modelId: "friedrich-breeze-select-central-ducted-48000",
      outdoorUnitId: "friedrich-wfpu17y483d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-48000-cfg-1",
      slug: "friedrich-standard-wall-single-48000-cfg-1",
      modelId: "friedrich-standard-wall-single-48000",
      outdoorUnitId: "friedrich-wfpu17y603d",
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
      id: "friedrich-k-series-central-ducted-20000-cfg-1",
      slug: "friedrich-k-series-central-ducted-20000-cfg-1",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-2",
      slug: "friedrich-k-series-central-ducted-20000-cfg-2",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-3",
      slug: "friedrich-k-series-central-ducted-20000-cfg-3",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-4",
      slug: "friedrich-k-series-central-ducted-20000-cfg-4",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-5",
      slug: "friedrich-k-series-central-ducted-20000-cfg-5",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-6",
      slug: "friedrich-k-series-central-ducted-20000-cfg-6",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-7",
      slug: "friedrich-k-series-central-ducted-20000-cfg-7",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-8",
      slug: "friedrich-k-series-central-ducted-20000-cfg-8",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-9",
      slug: "friedrich-k-series-central-ducted-20000-cfg-9",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-10",
      slug: "friedrich-k-series-central-ducted-20000-cfg-10",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-11",
      slug: "friedrich-k-series-central-ducted-20000-cfg-11",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-12",
      slug: "friedrich-k-series-central-ducted-20000-cfg-12",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-13",
      slug: "friedrich-k-series-central-ducted-20000-cfg-13",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-14",
      slug: "friedrich-k-series-central-ducted-20000-cfg-14",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-15",
      slug: "friedrich-k-series-central-ducted-20000-cfg-15",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-16",
      slug: "friedrich-k-series-central-ducted-20000-cfg-16",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-17",
      slug: "friedrich-k-series-central-ducted-20000-cfg-17",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-18",
      slug: "friedrich-k-series-central-ducted-20000-cfg-18",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-19",
      slug: "friedrich-k-series-central-ducted-20000-cfg-19",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21000,
      coolingCapacityMaxBtu: 21000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-20",
      slug: "friedrich-k-series-central-ducted-20000-cfg-20",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-21",
      slug: "friedrich-k-series-central-ducted-20000-cfg-21",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-22",
      slug: "friedrich-k-series-central-ducted-20000-cfg-22",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-20000-cfg-23",
      slug: "friedrich-k-series-central-ducted-20000-cfg-23",
      modelId: "friedrich-k-series-central-ducted-20000",
      outdoorUnitId: "friedrich-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 17,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-1",
      slug: "friedrich-k-series-central-ducted-42000-cfg-1",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-2",
      slug: "friedrich-k-series-central-ducted-42000-cfg-2",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-3",
      slug: "friedrich-k-series-central-ducted-42000-cfg-3",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-4",
      slug: "friedrich-k-series-central-ducted-42000-cfg-4",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-5",
      slug: "friedrich-k-series-central-ducted-42000-cfg-5",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-6",
      slug: "friedrich-k-series-central-ducted-42000-cfg-6",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-7",
      slug: "friedrich-k-series-central-ducted-42000-cfg-7",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-8",
      slug: "friedrich-k-series-central-ducted-42000-cfg-8",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-9",
      slug: "friedrich-k-series-central-ducted-42000-cfg-9",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-10",
      slug: "friedrich-k-series-central-ducted-42000-cfg-10",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-11",
      slug: "friedrich-k-series-central-ducted-42000-cfg-11",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-12",
      slug: "friedrich-k-series-central-ducted-42000-cfg-12",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-13",
      slug: "friedrich-k-series-central-ducted-42000-cfg-13",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-14",
      slug: "friedrich-k-series-central-ducted-42000-cfg-14",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-15",
      slug: "friedrich-k-series-central-ducted-42000-cfg-15",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-16",
      slug: "friedrich-k-series-central-ducted-42000-cfg-16",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-17",
      slug: "friedrich-k-series-central-ducted-42000-cfg-17",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-18",
      slug: "friedrich-k-series-central-ducted-42000-cfg-18",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-19",
      slug: "friedrich-k-series-central-ducted-42000-cfg-19",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-20",
      slug: "friedrich-k-series-central-ducted-42000-cfg-20",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-21",
      slug: "friedrich-k-series-central-ducted-42000-cfg-21",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-22",
      slug: "friedrich-k-series-central-ducted-42000-cfg-22",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-23",
      slug: "friedrich-k-series-central-ducted-42000-cfg-23",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-24",
      slug: "friedrich-k-series-central-ducted-42000-cfg-24",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-25",
      slug: "friedrich-k-series-central-ducted-42000-cfg-25",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-26",
      slug: "friedrich-k-series-central-ducted-42000-cfg-26",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-27",
      slug: "friedrich-k-series-central-ducted-42000-cfg-27",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-28",
      slug: "friedrich-k-series-central-ducted-42000-cfg-28",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-29",
      slug: "friedrich-k-series-central-ducted-42000-cfg-29",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-30",
      slug: "friedrich-k-series-central-ducted-42000-cfg-30",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-31",
      slug: "friedrich-k-series-central-ducted-42000-cfg-31",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-32",
      slug: "friedrich-k-series-central-ducted-42000-cfg-32",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-33",
      slug: "friedrich-k-series-central-ducted-42000-cfg-33",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-34",
      slug: "friedrich-k-series-central-ducted-42000-cfg-34",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-35",
      slug: "friedrich-k-series-central-ducted-42000-cfg-35",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-36",
      slug: "friedrich-k-series-central-ducted-42000-cfg-36",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-37",
      slug: "friedrich-k-series-central-ducted-42000-cfg-37",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-38",
      slug: "friedrich-k-series-central-ducted-42000-cfg-38",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-42000-cfg-39",
      slug: "friedrich-k-series-central-ducted-42000-cfg-39",
      modelId: "friedrich-k-series-central-ducted-42000",
      outdoorUnitId: "friedrich-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-1",
      slug: "friedrich-k-series-central-ducted-48000-cfg-1",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-2",
      slug: "friedrich-k-series-central-ducted-48000-cfg-2",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-3",
      slug: "friedrich-k-series-central-ducted-48000-cfg-3",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-4",
      slug: "friedrich-k-series-central-ducted-48000-cfg-4",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-5",
      slug: "friedrich-k-series-central-ducted-48000-cfg-5",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-6",
      slug: "friedrich-k-series-central-ducted-48000-cfg-6",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-7",
      slug: "friedrich-k-series-central-ducted-48000-cfg-7",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-8",
      slug: "friedrich-k-series-central-ducted-48000-cfg-8",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-9",
      slug: "friedrich-k-series-central-ducted-48000-cfg-9",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-10",
      slug: "friedrich-k-series-central-ducted-48000-cfg-10",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-11",
      slug: "friedrich-k-series-central-ducted-48000-cfg-11",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-12",
      slug: "friedrich-k-series-central-ducted-48000-cfg-12",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-13",
      slug: "friedrich-k-series-central-ducted-48000-cfg-13",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-14",
      slug: "friedrich-k-series-central-ducted-48000-cfg-14",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-15",
      slug: "friedrich-k-series-central-ducted-48000-cfg-15",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-16",
      slug: "friedrich-k-series-central-ducted-48000-cfg-16",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-17",
      slug: "friedrich-k-series-central-ducted-48000-cfg-17",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-18",
      slug: "friedrich-k-series-central-ducted-48000-cfg-18",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-19",
      slug: "friedrich-k-series-central-ducted-48000-cfg-19",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-20",
      slug: "friedrich-k-series-central-ducted-48000-cfg-20",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-21",
      slug: "friedrich-k-series-central-ducted-48000-cfg-21",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-22",
      slug: "friedrich-k-series-central-ducted-48000-cfg-22",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-23",
      slug: "friedrich-k-series-central-ducted-48000-cfg-23",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-24",
      slug: "friedrich-k-series-central-ducted-48000-cfg-24",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-25",
      slug: "friedrich-k-series-central-ducted-48000-cfg-25",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-26",
      slug: "friedrich-k-series-central-ducted-48000-cfg-26",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-27",
      slug: "friedrich-k-series-central-ducted-48000-cfg-27",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-28",
      slug: "friedrich-k-series-central-ducted-48000-cfg-28",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-29",
      slug: "friedrich-k-series-central-ducted-48000-cfg-29",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-30",
      slug: "friedrich-k-series-central-ducted-48000-cfg-30",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-31",
      slug: "friedrich-k-series-central-ducted-48000-cfg-31",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-32",
      slug: "friedrich-k-series-central-ducted-48000-cfg-32",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-33",
      slug: "friedrich-k-series-central-ducted-48000-cfg-33",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 17,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-34",
      slug: "friedrich-k-series-central-ducted-48000-cfg-34",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-35",
      slug: "friedrich-k-series-central-ducted-48000-cfg-35",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-48000-cfg-36",
      slug: "friedrich-k-series-central-ducted-48000-cfg-36",
      modelId: "friedrich-k-series-central-ducted-48000",
      outdoorUnitId: "friedrich-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-1",
      slug: "friedrich-k-series-central-ducted-30000-cfg-1",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-2",
      slug: "friedrich-k-series-central-ducted-30000-cfg-2",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-3",
      slug: "friedrich-k-series-central-ducted-30000-cfg-3",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-4",
      slug: "friedrich-k-series-central-ducted-30000-cfg-4",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-5",
      slug: "friedrich-k-series-central-ducted-30000-cfg-5",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-6",
      slug: "friedrich-k-series-central-ducted-30000-cfg-6",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-7",
      slug: "friedrich-k-series-central-ducted-30000-cfg-7",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-8",
      slug: "friedrich-k-series-central-ducted-30000-cfg-8",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-9",
      slug: "friedrich-k-series-central-ducted-30000-cfg-9",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-10",
      slug: "friedrich-k-series-central-ducted-30000-cfg-10",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-11",
      slug: "friedrich-k-series-central-ducted-30000-cfg-11",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-12",
      slug: "friedrich-k-series-central-ducted-30000-cfg-12",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-13",
      slug: "friedrich-k-series-central-ducted-30000-cfg-13",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-14",
      slug: "friedrich-k-series-central-ducted-30000-cfg-14",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-15",
      slug: "friedrich-k-series-central-ducted-30000-cfg-15",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-16",
      slug: "friedrich-k-series-central-ducted-30000-cfg-16",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-17",
      slug: "friedrich-k-series-central-ducted-30000-cfg-17",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-18",
      slug: "friedrich-k-series-central-ducted-30000-cfg-18",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-19",
      slug: "friedrich-k-series-central-ducted-30000-cfg-19",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-20",
      slug: "friedrich-k-series-central-ducted-30000-cfg-20",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-21",
      slug: "friedrich-k-series-central-ducted-30000-cfg-21",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-22",
      slug: "friedrich-k-series-central-ducted-30000-cfg-22",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-23",
      slug: "friedrich-k-series-central-ducted-30000-cfg-23",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-24",
      slug: "friedrich-k-series-central-ducted-30000-cfg-24",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-25",
      slug: "friedrich-k-series-central-ducted-30000-cfg-25",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-26",
      slug: "friedrich-k-series-central-ducted-30000-cfg-26",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-27",
      slug: "friedrich-k-series-central-ducted-30000-cfg-27",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-28",
      slug: "friedrich-k-series-central-ducted-30000-cfg-28",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-29",
      slug: "friedrich-k-series-central-ducted-30000-cfg-29",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-30",
      slug: "friedrich-k-series-central-ducted-30000-cfg-30",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-31",
      slug: "friedrich-k-series-central-ducted-30000-cfg-31",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-32",
      slug: "friedrich-k-series-central-ducted-30000-cfg-32",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-33",
      slug: "friedrich-k-series-central-ducted-30000-cfg-33",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-34",
      slug: "friedrich-k-series-central-ducted-30000-cfg-34",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-35",
      slug: "friedrich-k-series-central-ducted-30000-cfg-35",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-36",
      slug: "friedrich-k-series-central-ducted-30000-cfg-36",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-37",
      slug: "friedrich-k-series-central-ducted-30000-cfg-37",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-38",
      slug: "friedrich-k-series-central-ducted-30000-cfg-38",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-39",
      slug: "friedrich-k-series-central-ducted-30000-cfg-39",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-40",
      slug: "friedrich-k-series-central-ducted-30000-cfg-40",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-41",
      slug: "friedrich-k-series-central-ducted-30000-cfg-41",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-42",
      slug: "friedrich-k-series-central-ducted-30000-cfg-42",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-43",
      slug: "friedrich-k-series-central-ducted-30000-cfg-43",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-44",
      slug: "friedrich-k-series-central-ducted-30000-cfg-44",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-45",
      slug: "friedrich-k-series-central-ducted-30000-cfg-45",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-46",
      slug: "friedrich-k-series-central-ducted-30000-cfg-46",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-47",
      slug: "friedrich-k-series-central-ducted-30000-cfg-47",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-48",
      slug: "friedrich-k-series-central-ducted-30000-cfg-48",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-49",
      slug: "friedrich-k-series-central-ducted-30000-cfg-49",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-50",
      slug: "friedrich-k-series-central-ducted-30000-cfg-50",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-51",
      slug: "friedrich-k-series-central-ducted-30000-cfg-51",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-52",
      slug: "friedrich-k-series-central-ducted-30000-cfg-52",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-53",
      slug: "friedrich-k-series-central-ducted-30000-cfg-53",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-54",
      slug: "friedrich-k-series-central-ducted-30000-cfg-54",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-55",
      slug: "friedrich-k-series-central-ducted-30000-cfg-55",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-56",
      slug: "friedrich-k-series-central-ducted-30000-cfg-56",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-57",
      slug: "friedrich-k-series-central-ducted-30000-cfg-57",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-58",
      slug: "friedrich-k-series-central-ducted-30000-cfg-58",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-59",
      slug: "friedrich-k-series-central-ducted-30000-cfg-59",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-60",
      slug: "friedrich-k-series-central-ducted-30000-cfg-60",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-61",
      slug: "friedrich-k-series-central-ducted-30000-cfg-61",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-62",
      slug: "friedrich-k-series-central-ducted-30000-cfg-62",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-63",
      slug: "friedrich-k-series-central-ducted-30000-cfg-63",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-64",
      slug: "friedrich-k-series-central-ducted-30000-cfg-64",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-65",
      slug: "friedrich-k-series-central-ducted-30000-cfg-65",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-66",
      slug: "friedrich-k-series-central-ducted-30000-cfg-66",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-67",
      slug: "friedrich-k-series-central-ducted-30000-cfg-67",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-68",
      slug: "friedrich-k-series-central-ducted-30000-cfg-68",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-69",
      slug: "friedrich-k-series-central-ducted-30000-cfg-69",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-70",
      slug: "friedrich-k-series-central-ducted-30000-cfg-70",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-71",
      slug: "friedrich-k-series-central-ducted-30000-cfg-71",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-72",
      slug: "friedrich-k-series-central-ducted-30000-cfg-72",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-73",
      slug: "friedrich-k-series-central-ducted-30000-cfg-73",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-74",
      slug: "friedrich-k-series-central-ducted-30000-cfg-74",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-75",
      slug: "friedrich-k-series-central-ducted-30000-cfg-75",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-76",
      slug: "friedrich-k-series-central-ducted-30000-cfg-76",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-77",
      slug: "friedrich-k-series-central-ducted-30000-cfg-77",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-78",
      slug: "friedrich-k-series-central-ducted-30000-cfg-78",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-79",
      slug: "friedrich-k-series-central-ducted-30000-cfg-79",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-80",
      slug: "friedrich-k-series-central-ducted-30000-cfg-80",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-81",
      slug: "friedrich-k-series-central-ducted-30000-cfg-81",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-82",
      slug: "friedrich-k-series-central-ducted-30000-cfg-82",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-83",
      slug: "friedrich-k-series-central-ducted-30000-cfg-83",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-84",
      slug: "friedrich-k-series-central-ducted-30000-cfg-84",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-85",
      slug: "friedrich-k-series-central-ducted-30000-cfg-85",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-86",
      slug: "friedrich-k-series-central-ducted-30000-cfg-86",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-87",
      slug: "friedrich-k-series-central-ducted-30000-cfg-87",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31600,
      coolingCapacityMaxBtu: 31600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-k-series-central-ducted-30000-cfg-88",
      slug: "friedrich-k-series-central-ducted-30000-cfg-88",
      modelId: "friedrich-k-series-central-ducted-30000",
      outdoorUnitId: "friedrich-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-f-series-plus-central-ducted-24000-cfg-1",
      slug: "friedrich-f-series-plus-central-ducted-24000-cfg-1",
      modelId: "friedrich-f-series-plus-central-ducted-24000",
      outdoorUnitId: "friedrich-rd16ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "friedrich-standard-wall-single-30000-cfg-1",
      slug: "friedrich-standard-wall-single-30000-cfg-1",
      modelId: "friedrich-standard-wall-single-30000",
      outdoorUnitId: "friedrich-rd16ay36ajvc",
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
      id: "friedrich-f-series-plus-central-ducted-42000-cfg-1",
      slug: "friedrich-f-series-plus-central-ducted-42000-cfg-1",
      modelId: "friedrich-f-series-plus-central-ducted-42000",
      outdoorUnitId: "friedrich-rd16ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "friedrich-standard-wall-single-12000-cfg-1",
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
      configurationId: "friedrich-standard-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-12000-cfg-3",
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
      configurationId: "friedrich-standard-wall-single-12000-cfg-4",
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
      configurationId: "friedrich-standard-wall-single-12000-cfg-5",
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
      configurationId: "friedrich-standard-wall-single-12000-cfg-6",
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
      configurationId: "friedrich-standard-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12471,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-20000-cfg-1",
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
      configurationId: "friedrich-premier-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-premier-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-9000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-9000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-9000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-9000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-12000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-12000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-12000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-12000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-12000-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-18000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-18000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-18000-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-18000-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-30000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-pro-wall-single-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-24000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-24000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-standard-wall-single-24000-cfg-3",
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
      configurationId: "friedrich-standard-wall-single-60000-cfg-1",
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
      configurationId: "friedrich-breeze-central-ducted-20000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-breeze-central-ducted-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-breeze-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-breeze-central-ducted-48000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-breeze-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-1",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-2",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-3",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-4",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-5",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-6",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-7",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-8",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-9",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-10",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-11",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-12",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-13",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-14",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-15",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-16",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-17",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-18",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-19",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-20",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-21",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-22",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-23",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-24",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-25",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-26",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-27",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-28",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-29",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-30",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-31",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-32",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-33",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-34",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-35",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-36",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-37",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-38",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-39",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-40",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-41",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-42",
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
      configurationId: "friedrich-f-series-plus-central-ducted-36000-cfg-43",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-1",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-3",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-4",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-5",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-6",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-7",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-9",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-10",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-11",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-12",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-13",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-14",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-15",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-16",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-17",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-18",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-19",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-20",
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
      configurationId: "friedrich-f-series-central-ducted-36000-cfg-21",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-1",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-2",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-3",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-4",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-5",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-6",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-7",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-8",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-9",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-10",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-11",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-12",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-13",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-14",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-15",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-16",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-17",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-18",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-19",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-20",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-21",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-22",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-23",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-24",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-25",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-26",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-27",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-28",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-29",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-30",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-31",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-32",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-33",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-34",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-35",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-36",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-37",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-38",
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
      configurationId: "friedrich-f-series-central-ducted-60000-cfg-39",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-2",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-3",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-4",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-5",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-6",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-7",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-8",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-9",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-10",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-11",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-12",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-13",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-14",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-15",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-16",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-17",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-18",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-19",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-20",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-21",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-22",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-23",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-24",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-25",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-26",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-27",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-28",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-29",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-30",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-31",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-32",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-33",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-34",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-35",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-36",
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
      configurationId: "friedrich-k-series-central-ducted-24000-cfg-37",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-1",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-2",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-3",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-4",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-5",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-6",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-7",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-8",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-9",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-10",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-11",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-12",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-13",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-14",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-15",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-16",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-17",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-18",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-19",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-20",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-21",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-22",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-23",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-24",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-25",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-26",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-27",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-28",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-29",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-30",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-31",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-32",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-33",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-34",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-35",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-36",
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
      configurationId: "friedrich-f-series-central-ducted-48000-cfg-37",
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
      configurationId: "friedrich-floating-air-select-wall-single-9000-cfg-1",
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
      configurationId: "friedrich-floating-air-select-wall-single-18000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-wall-single-9000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-wall-single-9000-cfg-2",
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
      configurationId: "friedrich-floating-air-pro-wall-single-12000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-wall-single-12000-cfg-2",
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
      configurationId: "friedrich-floating-air-pro-wall-single-18000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-wall-single-24000-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-2",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-3",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-4",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-5",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-6",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-7",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-8",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-9",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-10",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-11",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-12",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-13",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-14",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-15",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-16",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-17",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-18",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-19",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-20",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-21",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-22",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-23",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-24",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-25",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-26",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-27",
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
      configurationId: "friedrich-k-series-central-ducted-36000-cfg-28",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-1",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-2",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-3",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-4",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-5",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-6",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-7",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-8",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-9",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-10",
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
      configurationId: "friedrich-standard-central-ducted-48000-cfg-11",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-9000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-9000-cfg-2",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-12000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-12000-cfg-2",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-18000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-18000-cfg-2",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-24000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-24000-cfg-2",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-30000-cfg-1",
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
      configurationId: "friedrich-floating-air-pro-x-wall-single-36000-cfg-1",
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
      configurationId: "friedrich-breeze-select-central-ducted-24000-cfg-1",
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
      configurationId: "friedrich-standard-wall-single-36000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "friedrich-breeze-select-central-ducted-48000-cfg-1",
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
      configurationId: "friedrich-standard-wall-single-48000-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-2",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-3",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-4",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-5",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-6",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-7",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-8",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-9",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-10",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-11",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-12",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-13",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-14",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-15",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-16",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-17",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-18",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-19",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-20",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-21",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-22",
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
      configurationId: "friedrich-k-series-central-ducted-20000-cfg-23",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-2",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-3",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-4",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-5",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-6",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-7",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-8",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-9",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-10",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-11",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-12",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-13",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-14",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-15",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-16",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-17",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-18",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-19",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-20",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-21",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-22",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-23",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-24",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-25",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-26",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-27",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-28",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-29",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-30",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-31",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-32",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-33",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-34",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-35",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-36",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-37",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-38",
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
      configurationId: "friedrich-k-series-central-ducted-42000-cfg-39",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-2",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-3",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-4",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-5",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-6",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-7",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-8",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-9",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-10",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-11",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-12",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-13",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-14",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-15",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-16",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-17",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-18",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-19",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-20",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-21",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-22",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-23",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-24",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-25",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-26",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-27",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-28",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-29",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-30",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-31",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-32",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-33",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-34",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-35",
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
      configurationId: "friedrich-k-series-central-ducted-48000-cfg-36",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-1",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-2",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-3",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-4",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-5",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-6",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-7",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-8",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-9",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-10",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-11",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-12",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-13",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-14",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-15",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-16",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-17",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-18",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-19",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-20",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-21",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-22",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-23",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-24",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-25",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-26",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-27",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-28",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-29",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-30",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-31",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-32",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-33",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-34",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-35",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-36",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-37",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-38",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-39",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-40",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-41",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-42",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-43",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-44",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-45",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-46",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-47",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-48",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-49",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-50",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-51",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-52",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-53",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-54",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-55",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-56",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-57",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-58",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-59",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-60",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-61",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-62",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-63",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-64",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-65",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-66",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-67",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-68",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-69",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-70",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-71",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-72",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-73",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-74",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-75",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-76",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-77",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-78",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-79",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-80",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-81",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-82",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-83",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-84",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-85",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-86",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-87",
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
      configurationId: "friedrich-k-series-central-ducted-30000-cfg-88",
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
      configurationId: "friedrich-f-series-plus-central-ducted-24000-cfg-1",
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
      configurationId: "friedrich-standard-wall-single-30000-cfg-1",
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
      configurationId: "friedrich-f-series-plus-central-ducted-42000-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
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
