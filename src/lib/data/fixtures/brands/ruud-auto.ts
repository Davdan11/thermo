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
      id: "ruud-standard-wall-single",
      slug: "ruud-standard-wall-single",
      name: "Standard",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6200,
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
      id: "ruud-standard-central-ducted",
      slug: "ruud-standard-central-ducted",
      name: "Standard",
      seriesId: "ruud-standard",
      brandId: "ruud",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 22600,
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
      id: "ruud-ultra-series-central-ducted",
      slug: "ruud-ultra-series-central-ducted",
      name: "ULTRA SERIES",
      seriesId: "ruud-ultra-series",
      brandId: "ruud",
      modelNumber: "ULTRA SERIES",
      normalizedModelNumber: "ultra-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 55500,
      heatingCapacity5FMinBtu: 15100,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 16,
      seer2Max: 21,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.75,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single",
      slug: "ruud-classic-plus-wall-single",
      name: "Classic Plus",
      seriesId: "ruud-classic-plus",
      brandId: "ruud",
      modelNumber: "Classic Plus",
      normalizedModelNumber: "classic-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 22000,
      heatingCapacity5FMinBtu: 14200,
      heatingCapacity5FMaxBtu: 15400,
      seer2Min: 20,
      seer2Max: 21.5,
      hspf2Min: 9.6,
      hspf2Max: 10,
      cop5FMin: 1.84,
      cop5FMax: 2.06,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted",
      slug: "ruud-achiever-plus-central-ducted",
      name: "ACHIEVER PLUS",
      seriesId: "ruud-achiever-plus",
      brandId: "ruud",
      modelNumber: "ACHIEVER PLUS",
      normalizedModelNumber: "achiever-plus",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "ruud-f-series-plus-central-ducted",
      slug: "ruud-f-series-plus-central-ducted",
      name: "F - SERIES PLUS",
      seriesId: "ruud-f-series-plus",
      brandId: "ruud",
      modelNumber: "F - SERIES PLUS",
      normalizedModelNumber: "f-series-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 56000,
      heatingCapacity5FMinBtu: 15800,
      heatingCapacity5FMaxBtu: 36800,
      seer2Min: 16,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted",
      slug: "ruud-f-series-central-ducted",
      name: "F Series",
      seriesId: "ruud-f-series",
      brandId: "ruud",
      modelNumber: "F Series",
      normalizedModelNumber: "f-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 32200,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 16,
      seer2Max: 18,
      hspf2Min: 8.1,
      hspf2Max: 8.1,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-k-series-central-ducted",
      slug: "ruud-k-series-central-ducted",
      name: "K-SERIES",
      seriesId: "ruud-k-series",
      brandId: "ruud",
      modelNumber: "K-SERIES",
      normalizedModelNumber: "k-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 15200,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 9.5,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-acheiver-wall-single",
      slug: "ruud-floating-air-acheiver-wall-single",
      name: "Floating Air Acheiver",
      seriesId: "ruud-floating-air-acheiver",
      brandId: "ruud",
      modelNumber: "Floating Air Acheiver",
      normalizedModelNumber: "floating-air-acheiver",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 20,
      seer2Max: 21,
      hspf2Min: 9,
      hspf2Max: 9.8,
      cop5FMin: 2,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-achiever-plus-wall-single",
      slug: "ruud-floating-air-achiever-plus-wall-single",
      name: "Floating Air Achiever Plus",
      seriesId: "ruud-floating-air-achiever-plus",
      brandId: "ruud",
      modelNumber: "Floating Air Achiever Plus",
      normalizedModelNumber: "floating-air-achiever-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 21,
      seer2Max: 25,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted",
      slug: "ruud-ultra-central-ducted",
      name: "Ultra",
      seriesId: "ruud-ultra",
      brandId: "ruud",
      modelNumber: "Ultra",
      normalizedModelNumber: "ultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 45500,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 18,
      seer2Max: 21,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single",
      slug: "ruud-floating-air-ultra-wall-single",
      name: "Floating Air Ultra",
      seriesId: "ruud-floating-air-ultra",
      brandId: "ruud",
      modelNumber: "Floating Air Ultra",
      normalizedModelNumber: "floating-air-ultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 8700,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 18.5,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
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
      id: "ruud-up2048bjv",
      modelNumber: "UP2048BJV",
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
      id: "ruud-rp1724hjvxa",
      modelNumber: "RP1724HJVXA",
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
      id: "ruud-rp1736hjvxa",
      modelNumber: "RP1736HJVXA",
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
      id: "ruud-rosh09afwj",
      modelNumber: "ROSH09AFWJ",
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
      id: "ruud-rosh18asj",
      modelNumber: "ROSH18ASJ",
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
      id: "ruud-rosh12ahwj",
      modelNumber: "ROSH12AHWJ",
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
      id: "ruud-rosh09ahwj",
      modelNumber: "ROSH09AHWJ",
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
      id: "ruud-rosh24axfwj",
      modelNumber: "ROSH24AXFWJ",
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
      id: "ruud-rosh09ahhj",
      modelNumber: "ROSH09AHHJ",
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
      id: "ruud-rosh15ahhj",
      modelNumber: "ROSH15AHHJ",
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
      id: "ruud-rosh24ahxhj",
      modelNumber: "ROSH24AHXHJ",
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
      id: "ruud-rosh09affhj",
      modelNumber: "ROSH09AFFHJ",
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
      id: "ruud-rosh15affhj",
      modelNumber: "ROSH15AFFHJ",
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
      id: "ruud-rosh12affj",
      modelNumber: "ROSH12AFFJ",
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
      id: "ruud-rosh09afcj",
      modelNumber: "ROSH09AFCJ",
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
      id: "ruud-romh24fxzhj",
      modelNumber: "ROMH24FXZHJ",
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
      id: "ruud-rosh18vgsn",
      modelNumber: "ROSH18VGSN",
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
      id: "ruud-rosh30vgsn",
      modelNumber: "ROSH30VGSN",
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
      id: "ruud-rosh48vgsn",
      modelNumber: "ROSH48VGSN",
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
      id: "ruud-rosh12bfwj",
      modelNumber: "ROSH12BFWJ",
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
      id: "ruud-up18az48ajvc",
      modelNumber: "UP18AZ48AJVC",
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
      id: "ruud-ro1hfz09aj2s",
      modelNumber: "RO1HFZ09AJ2S",
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
      id: "ruud-ro1hfz15aj2s",
      modelNumber: "RO1HFZ15AJ2S",
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
      id: "ruud-ro1hfz12aj2h",
      modelNumber: "RO1HFZ12AJ2H",
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
      id: "ruud-ro1hfz18aj2h",
      modelNumber: "RO1HFZ18AJ2H",
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
      id: "ruud-ro1hfz30aj2h",
      modelNumber: "RO1HFZ30AJ2H",
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
      id: "ruud-ro1hhz12aj3s",
      modelNumber: "RO1HHZ12AJ3S",
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
      id: "ruud-ro1hhz18aj2s",
      modelNumber: "RO1HHZ18AJ2S",
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
      id: "ruud-ro1hhz18aj3s",
      modelNumber: "RO1HHZ18AJ3S",
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
      id: "ruud-ro1hhz09aj2s",
      modelNumber: "RO1HHZ09AJ2S",
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
      id: "ruud-ro1hhz09aj8s",
      modelNumber: "RO1HHZ09AJ8S",
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
      id: "ruud-ro1hhz18aj8s",
      modelNumber: "RO1HHZ18AJ8S",
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
      id: "ruud-ro1hgz48aj8s",
      modelNumber: "RO1HGZ48AJ8S",
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
      id: "ruud-rd16az48ajvua",
      modelNumber: "RD16AZ48AJVUA",
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
      id: "ruud-ro4hfz36aj1h",
      modelNumber: "RO4HFZ36AJ1H",
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
      id: "ruud-ro1hhz30aj8s",
      modelNumber: "RO1HHZ30AJ8S",
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
      id: "ruud-rd16az24ajvua",
      modelNumber: "RD16AZ24AJVUA",
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
      id: "ruud-rd16az48ajhua",
      modelNumber: "RD16AZ48AJHUA",
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
      id: "ruud-fshsr24b3d",
      modelNumber: "FSHSR24B3D",
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
      id: "ruud-up19ay60ajvc",
      modelNumber: "UP19AY60AJVC",
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
      id: "ruud-up19ay36ajvc",
      modelNumber: "UP19AY36AJVC",
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
      id: "ruud-rd18ay60ajvc",
      modelNumber: "RD18AY60AJVC",
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
      id: "ruud-fphsr12a1c",
      modelNumber: "FPHSR12A1C",
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

  ],
  configurations: [
    {
      id: "ruud-standard-wall-single-cfg-1",
      slug: "ruud-standard-wall-single-cfg-1",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-wall-single-cfg-2",
      slug: "ruud-standard-wall-single-cfg-2",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-up2048bjv",
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
      id: "ruud-standard-wall-single-cfg-3",
      slug: "ruud-standard-wall-single-cfg-3",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-4",
      slug: "ruud-standard-wall-single-cfg-4",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rp1724hjvxa",
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
      id: "ruud-standard-wall-single-cfg-5",
      slug: "ruud-standard-wall-single-cfg-5",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rp1730hjvxa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-6",
      slug: "ruud-standard-wall-single-cfg-6",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rp1736hjvxa",
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
      id: "ruud-standard-wall-single-cfg-7",
      slug: "ruud-standard-wall-single-cfg-7",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rp1748hjvxa",
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
      id: "ruud-standard-wall-single-cfg-8",
      slug: "ruud-standard-wall-single-cfg-8",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh09afwj",
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
      id: "ruud-standard-wall-single-cfg-9",
      slug: "ruud-standard-wall-single-cfg-9",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh12afwj",
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
      id: "ruud-standard-wall-single-cfg-10",
      slug: "ruud-standard-wall-single-cfg-10",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh18asj",
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
      id: "ruud-standard-wall-single-cfg-11",
      slug: "ruud-standard-wall-single-cfg-11",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh24asj",
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
      id: "ruud-standard-wall-single-cfg-12",
      slug: "ruud-standard-wall-single-cfg-12",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh12ahwj",
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
      id: "ruud-standard-wall-single-cfg-13",
      slug: "ruud-standard-wall-single-cfg-13",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh15ahwj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-14",
      slug: "ruud-standard-wall-single-cfg-14",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh09ahwj",
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
      id: "ruud-standard-wall-single-cfg-15",
      slug: "ruud-standard-wall-single-cfg-15",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh18axfwj",
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
      id: "ruud-standard-wall-single-cfg-16",
      slug: "ruud-standard-wall-single-cfg-16",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh24axfwj",
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
      id: "ruud-standard-wall-single-cfg-17",
      slug: "ruud-standard-wall-single-cfg-17",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh45afxzj",
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
      id: "ruud-standard-wall-single-cfg-18",
      slug: "ruud-standard-wall-single-cfg-18",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh09ahhj",
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
      id: "ruud-standard-wall-single-cfg-19",
      slug: "ruud-standard-wall-single-cfg-19",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh12ahhj",
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
      id: "ruud-standard-wall-single-cfg-20",
      slug: "ruud-standard-wall-single-cfg-20",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh15ahhj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-21",
      slug: "ruud-standard-wall-single-cfg-21",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh18ahxhj",
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
      id: "ruud-standard-wall-single-cfg-22",
      slug: "ruud-standard-wall-single-cfg-22",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh24ahxhj",
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
      id: "ruud-standard-wall-single-cfg-23",
      slug: "ruud-standard-wall-single-cfg-23",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh30ahxhj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-24",
      slug: "ruud-standard-wall-single-cfg-24",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh09affhj",
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
      id: "ruud-standard-wall-single-cfg-25",
      slug: "ruud-standard-wall-single-cfg-25",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh12affhj",
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
      id: "ruud-standard-wall-single-cfg-26",
      slug: "ruud-standard-wall-single-cfg-26",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh15affhj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-27",
      slug: "ruud-standard-wall-single-cfg-27",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh09affj",
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
      id: "ruud-standard-wall-single-cfg-28",
      slug: "ruud-standard-wall-single-cfg-28",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh12affj",
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
      id: "ruud-standard-wall-single-cfg-29",
      slug: "ruud-standard-wall-single-cfg-29",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh15affj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-30",
      slug: "ruud-standard-wall-single-cfg-30",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh09afcj",
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
      id: "ruud-standard-wall-single-cfg-31",
      slug: "ruud-standard-wall-single-cfg-31",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh12afcj",
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
      id: "ruud-standard-wall-single-cfg-32",
      slug: "ruud-standard-wall-single-cfg-32",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh18afcj",
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
      id: "ruud-standard-wall-single-cfg-33",
      slug: "ruud-standard-wall-single-cfg-33",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh09afcj",
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
      id: "ruud-standard-wall-single-cfg-34",
      slug: "ruud-standard-wall-single-cfg-34",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh12afcj",
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
      id: "ruud-standard-wall-single-cfg-35",
      slug: "ruud-standard-wall-single-cfg-35",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh18afcj",
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
      id: "ruud-standard-wall-single-cfg-36",
      slug: "ruud-standard-wall-single-cfg-36",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh18fxzhj",
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
      id: "ruud-standard-wall-single-cfg-37",
      slug: "ruud-standard-wall-single-cfg-37",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh18fxzhj",
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
      id: "ruud-standard-wall-single-cfg-38",
      slug: "ruud-standard-wall-single-cfg-38",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh18fxzhj",
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
      id: "ruud-standard-wall-single-cfg-39",
      slug: "ruud-standard-wall-single-cfg-39",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh24fxzhj",
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
      id: "ruud-standard-wall-single-cfg-40",
      slug: "ruud-standard-wall-single-cfg-40",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh24fxzhj",
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
      id: "ruud-standard-wall-single-cfg-41",
      slug: "ruud-standard-wall-single-cfg-41",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh24fxzhj",
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
      id: "ruud-standard-wall-single-cfg-42",
      slug: "ruud-standard-wall-single-cfg-42",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh36fxzhj",
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
      id: "ruud-standard-wall-single-cfg-43",
      slug: "ruud-standard-wall-single-cfg-43",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh36fxzhj",
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
      id: "ruud-standard-wall-single-cfg-44",
      slug: "ruud-standard-wall-single-cfg-44",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh36fxzhj",
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
      id: "ruud-standard-wall-single-cfg-45",
      slug: "ruud-standard-wall-single-cfg-45",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh36afxzj",
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
      id: "ruud-standard-wall-single-cfg-46",
      slug: "ruud-standard-wall-single-cfg-46",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh45afxzj",
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
      id: "ruud-standard-wall-single-cfg-47",
      slug: "ruud-standard-wall-single-cfg-47",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-romh45afxzj",
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
      id: "ruud-standard-wall-single-cfg-48",
      slug: "ruud-standard-wall-single-cfg-48",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh18vgsn",
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
      id: "ruud-standard-wall-single-cfg-49",
      slug: "ruud-standard-wall-single-cfg-49",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh24vgsn",
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
      id: "ruud-standard-wall-single-cfg-50",
      slug: "ruud-standard-wall-single-cfg-50",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh30vgsn",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-51",
      slug: "ruud-standard-wall-single-cfg-51",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh36vgsn",
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
      id: "ruud-standard-wall-single-cfg-52",
      slug: "ruud-standard-wall-single-cfg-52",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh48vgsn",
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
      id: "ruud-standard-wall-single-cfg-53",
      slug: "ruud-standard-wall-single-cfg-53",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh09bfwj",
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
      id: "ruud-standard-wall-single-cfg-54",
      slug: "ruud-standard-wall-single-cfg-54",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rosh12bfwj",
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
      id: "ruud-standard-wall-single-cfg-55",
      slug: "ruud-standard-wall-single-cfg-55",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-56",
      slug: "ruud-standard-wall-single-cfg-56",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-wall-single-cfg-57",
      slug: "ruud-standard-wall-single-cfg-57",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-wall-single-cfg-58",
      slug: "ruud-standard-wall-single-cfg-58",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz09aj2s",
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
      id: "ruud-standard-wall-single-cfg-59",
      slug: "ruud-standard-wall-single-cfg-59",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz12aj2s",
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
      id: "ruud-standard-wall-single-cfg-60",
      slug: "ruud-standard-wall-single-cfg-60",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz15aj2s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-61",
      slug: "ruud-standard-wall-single-cfg-61",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz09aj2h",
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
      id: "ruud-standard-wall-single-cfg-62",
      slug: "ruud-standard-wall-single-cfg-62",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz12aj2h",
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
      id: "ruud-standard-wall-single-cfg-63",
      slug: "ruud-standard-wall-single-cfg-63",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz15aj2h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-64",
      slug: "ruud-standard-wall-single-cfg-64",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz18aj2h",
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
      id: "ruud-standard-wall-single-cfg-65",
      slug: "ruud-standard-wall-single-cfg-65",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz24aj2h",
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
      id: "ruud-standard-wall-single-cfg-66",
      slug: "ruud-standard-wall-single-cfg-66",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hfz30aj2h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-67",
      slug: "ruud-standard-wall-single-cfg-67",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz09aj2h",
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
      id: "ruud-standard-wall-single-cfg-68",
      slug: "ruud-standard-wall-single-cfg-68",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz09aj1s",
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
      id: "ruud-standard-wall-single-cfg-69",
      slug: "ruud-standard-wall-single-cfg-69",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz09aj1h",
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
      id: "ruud-standard-wall-single-cfg-70",
      slug: "ruud-standard-wall-single-cfg-70",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz12aj1s",
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
      id: "ruud-standard-wall-single-cfg-71",
      slug: "ruud-standard-wall-single-cfg-71",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz12aj1h",
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
      id: "ruud-standard-wall-single-cfg-72",
      slug: "ruud-standard-wall-single-cfg-72",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz15aj1s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-73",
      slug: "ruud-standard-wall-single-cfg-73",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz15aj1h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-74",
      slug: "ruud-standard-wall-single-cfg-74",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz12aj3s",
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
      id: "ruud-standard-wall-single-cfg-75",
      slug: "ruud-standard-wall-single-cfg-75",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz09aj3s",
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
      id: "ruud-standard-wall-single-cfg-76",
      slug: "ruud-standard-wall-single-cfg-76",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz18aj2s",
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
      id: "ruud-standard-wall-single-cfg-77",
      slug: "ruud-standard-wall-single-cfg-77",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz24aj2s",
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
      id: "ruud-standard-wall-single-cfg-78",
      slug: "ruud-standard-wall-single-cfg-78",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz18aj3s",
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
      id: "ruud-standard-wall-single-cfg-79",
      slug: "ruud-standard-wall-single-cfg-79",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz24aj3s",
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
      id: "ruud-standard-wall-single-cfg-80",
      slug: "ruud-standard-wall-single-cfg-80",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz30aj3s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-81",
      slug: "ruud-standard-wall-single-cfg-81",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz36aj3s",
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
      id: "ruud-standard-wall-single-cfg-82",
      slug: "ruud-standard-wall-single-cfg-82",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz09aj2s",
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
      id: "ruud-standard-wall-single-cfg-83",
      slug: "ruud-standard-wall-single-cfg-83",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz12aj2s",
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
      id: "ruud-standard-wall-single-cfg-84",
      slug: "ruud-standard-wall-single-cfg-84",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz09aj8s",
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
      id: "ruud-standard-wall-single-cfg-85",
      slug: "ruud-standard-wall-single-cfg-85",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz12aj8s",
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
      id: "ruud-standard-wall-single-cfg-86",
      slug: "ruud-standard-wall-single-cfg-86",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz18aj8s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-87",
      slug: "ruud-standard-wall-single-cfg-87",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz12aj8s",
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
      id: "ruud-standard-wall-single-cfg-88",
      slug: "ruud-standard-wall-single-cfg-88",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz42aj8s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-89",
      slug: "ruud-standard-wall-single-cfg-89",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz48aj8s",
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
      id: "ruud-standard-wall-single-cfg-90",
      slug: "ruud-standard-wall-single-cfg-90",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hgz48aj8s",
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
      id: "ruud-standard-wall-single-cfg-91",
      slug: "ruud-standard-wall-single-cfg-91",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rd16az36ajvua",
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
      id: "ruud-standard-wall-single-cfg-92",
      slug: "ruud-standard-wall-single-cfg-92",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rd16az48ajvua",
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
      id: "ruud-standard-wall-single-cfg-93",
      slug: "ruud-standard-wall-single-cfg-93",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro5hfz45aj2s",
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
      id: "ruud-standard-wall-single-cfg-94",
      slug: "ruud-standard-wall-single-cfg-94",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro4hfz36aj1h",
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
      id: "ruud-standard-wall-single-cfg-95",
      slug: "ruud-standard-wall-single-cfg-95",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro5hfz45aj2s",
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
      id: "ruud-standard-wall-single-cfg-96",
      slug: "ruud-standard-wall-single-cfg-96",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro4hfz36aj1h",
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
      id: "ruud-standard-wall-single-cfg-97",
      slug: "ruud-standard-wall-single-cfg-97",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz18aj8s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-98",
      slug: "ruud-standard-wall-single-cfg-98",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz24aj8s",
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
      id: "ruud-standard-wall-single-cfg-99",
      slug: "ruud-standard-wall-single-cfg-99",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz30aj8s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-100",
      slug: "ruud-standard-wall-single-cfg-100",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz36aj8s",
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
      id: "ruud-standard-wall-single-cfg-101",
      slug: "ruud-standard-wall-single-cfg-101",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz18aj8s",
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
      id: "ruud-standard-wall-single-cfg-102",
      slug: "ruud-standard-wall-single-cfg-102",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz24aj8s",
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
      id: "ruud-standard-wall-single-cfg-103",
      slug: "ruud-standard-wall-single-cfg-103",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz30aj8s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-104",
      slug: "ruud-standard-wall-single-cfg-104",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz36aj8s",
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
      id: "ruud-standard-wall-single-cfg-105",
      slug: "ruud-standard-wall-single-cfg-105",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz18aj8s",
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
      id: "ruud-standard-wall-single-cfg-106",
      slug: "ruud-standard-wall-single-cfg-106",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz24aj8s",
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
      id: "ruud-standard-wall-single-cfg-107",
      slug: "ruud-standard-wall-single-cfg-107",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz30aj8s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-108",
      slug: "ruud-standard-wall-single-cfg-108",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-ro1hhz36aj8s",
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
      id: "ruud-standard-wall-single-cfg-109",
      slug: "ruud-standard-wall-single-cfg-109",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rd16az24ajvua",
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
      id: "ruud-standard-wall-single-cfg-110",
      slug: "ruud-standard-wall-single-cfg-110",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rd16az30ajvua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-111",
      slug: "ruud-standard-wall-single-cfg-111",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rd16az30ajhua",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-wall-single-cfg-112",
      slug: "ruud-standard-wall-single-cfg-112",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rd16az36ajhua",
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
      id: "ruud-standard-wall-single-cfg-113",
      slug: "ruud-standard-wall-single-cfg-113",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rd16az48ajhua",
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
      id: "ruud-standard-wall-single-cfg-114",
      slug: "ruud-standard-wall-single-cfg-114",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-fshsr12b1c",
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
      id: "ruud-standard-wall-single-cfg-115",
      slug: "ruud-standard-wall-single-cfg-115",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-fshsr24b3d",
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
      id: "ruud-standard-wall-single-cfg-116",
      slug: "ruud-standard-wall-single-cfg-116",
      modelId: "ruud-standard-wall-single",
      outdoorUnitId: "ruud-rd16ay36ajvc",
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
      id: "ruud-standard-central-ducted-cfg-1",
      slug: "ruud-standard-central-ducted-cfg-1",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-2",
      slug: "ruud-standard-central-ducted-cfg-2",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-3",
      slug: "ruud-standard-central-ducted-cfg-3",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-4",
      slug: "ruud-standard-central-ducted-cfg-4",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-5",
      slug: "ruud-standard-central-ducted-cfg-5",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-6",
      slug: "ruud-standard-central-ducted-cfg-6",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-7",
      slug: "ruud-standard-central-ducted-cfg-7",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-8",
      slug: "ruud-standard-central-ducted-cfg-8",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-9",
      slug: "ruud-standard-central-ducted-cfg-9",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-10",
      slug: "ruud-standard-central-ducted-cfg-10",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2024bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-11",
      slug: "ruud-standard-central-ducted-cfg-11",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-12",
      slug: "ruud-standard-central-ducted-cfg-12",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-13",
      slug: "ruud-standard-central-ducted-cfg-13",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-14",
      slug: "ruud-standard-central-ducted-cfg-14",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-15",
      slug: "ruud-standard-central-ducted-cfg-15",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-16",
      slug: "ruud-standard-central-ducted-cfg-16",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-17",
      slug: "ruud-standard-central-ducted-cfg-17",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-18",
      slug: "ruud-standard-central-ducted-cfg-18",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-19",
      slug: "ruud-standard-central-ducted-cfg-19",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-20",
      slug: "ruud-standard-central-ducted-cfg-20",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-21",
      slug: "ruud-standard-central-ducted-cfg-21",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-22",
      slug: "ruud-standard-central-ducted-cfg-22",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-23",
      slug: "ruud-standard-central-ducted-cfg-23",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-24",
      slug: "ruud-standard-central-ducted-cfg-24",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-25",
      slug: "ruud-standard-central-ducted-cfg-25",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2036bjv",
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
      id: "ruud-standard-central-ducted-cfg-26",
      slug: "ruud-standard-central-ducted-cfg-26",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2048bjv",
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
      id: "ruud-standard-central-ducted-cfg-27",
      slug: "ruud-standard-central-ducted-cfg-27",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up2048bjv",
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
      id: "ruud-standard-central-ducted-cfg-28",
      slug: "ruud-standard-central-ducted-cfg-28",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-29",
      slug: "ruud-standard-central-ducted-cfg-29",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-30",
      slug: "ruud-standard-central-ducted-cfg-30",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-31",
      slug: "ruud-standard-central-ducted-cfg-31",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-32",
      slug: "ruud-standard-central-ducted-cfg-32",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-33",
      slug: "ruud-standard-central-ducted-cfg-33",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-34",
      slug: "ruud-standard-central-ducted-cfg-34",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-35",
      slug: "ruud-standard-central-ducted-cfg-35",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-36",
      slug: "ruud-standard-central-ducted-cfg-36",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-37",
      slug: "ruud-standard-central-ducted-cfg-37",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-38",
      slug: "ruud-standard-central-ducted-cfg-38",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-39",
      slug: "ruud-standard-central-ducted-cfg-39",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-40",
      slug: "ruud-standard-central-ducted-cfg-40",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-41",
      slug: "ruud-standard-central-ducted-cfg-41",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-42",
      slug: "ruud-standard-central-ducted-cfg-42",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-43",
      slug: "ruud-standard-central-ducted-cfg-43",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-44",
      slug: "ruud-standard-central-ducted-cfg-44",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-45",
      slug: "ruud-standard-central-ducted-cfg-45",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-46",
      slug: "ruud-standard-central-ducted-cfg-46",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-47",
      slug: "ruud-standard-central-ducted-cfg-47",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-48",
      slug: "ruud-standard-central-ducted-cfg-48",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-49",
      slug: "ruud-standard-central-ducted-cfg-49",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-50",
      slug: "ruud-standard-central-ducted-cfg-50",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-51",
      slug: "ruud-standard-central-ducted-cfg-51",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-52",
      slug: "ruud-standard-central-ducted-cfg-52",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-53",
      slug: "ruud-standard-central-ducted-cfg-53",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-54",
      slug: "ruud-standard-central-ducted-cfg-54",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-55",
      slug: "ruud-standard-central-ducted-cfg-55",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-56",
      slug: "ruud-standard-central-ducted-cfg-56",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-57",
      slug: "ruud-standard-central-ducted-cfg-57",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-58",
      slug: "ruud-standard-central-ducted-cfg-58",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-59",
      slug: "ruud-standard-central-ducted-cfg-59",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-60",
      slug: "ruud-standard-central-ducted-cfg-60",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-61",
      slug: "ruud-standard-central-ducted-cfg-61",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-62",
      slug: "ruud-standard-central-ducted-cfg-62",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-63",
      slug: "ruud-standard-central-ducted-cfg-63",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-64",
      slug: "ruud-standard-central-ducted-cfg-64",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-65",
      slug: "ruud-standard-central-ducted-cfg-65",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-66",
      slug: "ruud-standard-central-ducted-cfg-66",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-67",
      slug: "ruud-standard-central-ducted-cfg-67",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-68",
      slug: "ruud-standard-central-ducted-cfg-68",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-69",
      slug: "ruud-standard-central-ducted-cfg-69",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az48ajvc",
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
      id: "ruud-standard-central-ducted-cfg-70",
      slug: "ruud-standard-central-ducted-cfg-70",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-71",
      slug: "ruud-standard-central-ducted-cfg-71",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-72",
      slug: "ruud-standard-central-ducted-cfg-72",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-73",
      slug: "ruud-standard-central-ducted-cfg-73",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-74",
      slug: "ruud-standard-central-ducted-cfg-74",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-75",
      slug: "ruud-standard-central-ducted-cfg-75",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-76",
      slug: "ruud-standard-central-ducted-cfg-76",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-77",
      slug: "ruud-standard-central-ducted-cfg-77",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-78",
      slug: "ruud-standard-central-ducted-cfg-78",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-standard-central-ducted-cfg-79",
      slug: "ruud-standard-central-ducted-cfg-79",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up18az60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-80",
      slug: "ruud-standard-central-ducted-cfg-80",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-81",
      slug: "ruud-standard-central-ducted-cfg-81",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-82",
      slug: "ruud-standard-central-ducted-cfg-82",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-83",
      slug: "ruud-standard-central-ducted-cfg-83",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-84",
      slug: "ruud-standard-central-ducted-cfg-84",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-85",
      slug: "ruud-standard-central-ducted-cfg-85",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-86",
      slug: "ruud-standard-central-ducted-cfg-86",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-87",
      slug: "ruud-standard-central-ducted-cfg-87",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-88",
      slug: "ruud-standard-central-ducted-cfg-88",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-89",
      slug: "ruud-standard-central-ducted-cfg-89",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-90",
      slug: "ruud-standard-central-ducted-cfg-90",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-91",
      slug: "ruud-standard-central-ducted-cfg-91",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-92",
      slug: "ruud-standard-central-ducted-cfg-92",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-93",
      slug: "ruud-standard-central-ducted-cfg-93",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-standard-central-ducted-cfg-94",
      slug: "ruud-standard-central-ducted-cfg-94",
      modelId: "ruud-standard-central-ducted",
      outdoorUnitId: "ruud-up19ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-1",
      slug: "ruud-ultra-series-central-ducted-cfg-1",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-2",
      slug: "ruud-ultra-series-central-ducted-cfg-2",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-3",
      slug: "ruud-ultra-series-central-ducted-cfg-3",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-4",
      slug: "ruud-ultra-series-central-ducted-cfg-4",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-5",
      slug: "ruud-ultra-series-central-ducted-cfg-5",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-6",
      slug: "ruud-ultra-series-central-ducted-cfg-6",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-7",
      slug: "ruud-ultra-series-central-ducted-cfg-7",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-8",
      slug: "ruud-ultra-series-central-ducted-cfg-8",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-9",
      slug: "ruud-ultra-series-central-ducted-cfg-9",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-10",
      slug: "ruud-ultra-series-central-ducted-cfg-10",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-11",
      slug: "ruud-ultra-series-central-ducted-cfg-11",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-12",
      slug: "ruud-ultra-series-central-ducted-cfg-12",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-13",
      slug: "ruud-ultra-series-central-ducted-cfg-13",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-14",
      slug: "ruud-ultra-series-central-ducted-cfg-14",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-15",
      slug: "ruud-ultra-series-central-ducted-cfg-15",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-16",
      slug: "ruud-ultra-series-central-ducted-cfg-16",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-17",
      slug: "ruud-ultra-series-central-ducted-cfg-17",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-18",
      slug: "ruud-ultra-series-central-ducted-cfg-18",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-19",
      slug: "ruud-ultra-series-central-ducted-cfg-19",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-20",
      slug: "ruud-ultra-series-central-ducted-cfg-20",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-21",
      slug: "ruud-ultra-series-central-ducted-cfg-21",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-22",
      slug: "ruud-ultra-series-central-ducted-cfg-22",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-23",
      slug: "ruud-ultra-series-central-ducted-cfg-23",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-24",
      slug: "ruud-ultra-series-central-ducted-cfg-24",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up18az36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-25",
      slug: "ruud-ultra-series-central-ducted-cfg-25",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-26",
      slug: "ruud-ultra-series-central-ducted-cfg-26",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-27",
      slug: "ruud-ultra-series-central-ducted-cfg-27",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-28",
      slug: "ruud-ultra-series-central-ducted-cfg-28",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-29",
      slug: "ruud-ultra-series-central-ducted-cfg-29",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-30",
      slug: "ruud-ultra-series-central-ducted-cfg-30",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-31",
      slug: "ruud-ultra-series-central-ducted-cfg-31",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-32",
      slug: "ruud-ultra-series-central-ducted-cfg-32",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-33",
      slug: "ruud-ultra-series-central-ducted-cfg-33",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-34",
      slug: "ruud-ultra-series-central-ducted-cfg-34",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-35",
      slug: "ruud-ultra-series-central-ducted-cfg-35",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-36",
      slug: "ruud-ultra-series-central-ducted-cfg-36",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-37",
      slug: "ruud-ultra-series-central-ducted-cfg-37",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-38",
      slug: "ruud-ultra-series-central-ducted-cfg-38",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-39",
      slug: "ruud-ultra-series-central-ducted-cfg-39",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-40",
      slug: "ruud-ultra-series-central-ducted-cfg-40",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-41",
      slug: "ruud-ultra-series-central-ducted-cfg-41",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-42",
      slug: "ruud-ultra-series-central-ducted-cfg-42",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-43",
      slug: "ruud-ultra-series-central-ducted-cfg-43",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-44",
      slug: "ruud-ultra-series-central-ducted-cfg-44",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-45",
      slug: "ruud-ultra-series-central-ducted-cfg-45",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-46",
      slug: "ruud-ultra-series-central-ducted-cfg-46",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-47",
      slug: "ruud-ultra-series-central-ducted-cfg-47",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-48",
      slug: "ruud-ultra-series-central-ducted-cfg-48",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-49",
      slug: "ruud-ultra-series-central-ducted-cfg-49",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-50",
      slug: "ruud-ultra-series-central-ducted-cfg-50",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-51",
      slug: "ruud-ultra-series-central-ducted-cfg-51",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-52",
      slug: "ruud-ultra-series-central-ducted-cfg-52",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-53",
      slug: "ruud-ultra-series-central-ducted-cfg-53",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-54",
      slug: "ruud-ultra-series-central-ducted-cfg-54",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-55",
      slug: "ruud-ultra-series-central-ducted-cfg-55",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-56",
      slug: "ruud-ultra-series-central-ducted-cfg-56",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-57",
      slug: "ruud-ultra-series-central-ducted-cfg-57",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-58",
      slug: "ruud-ultra-series-central-ducted-cfg-58",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-59",
      slug: "ruud-ultra-series-central-ducted-cfg-59",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-60",
      slug: "ruud-ultra-series-central-ducted-cfg-60",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-61",
      slug: "ruud-ultra-series-central-ducted-cfg-61",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-62",
      slug: "ruud-ultra-series-central-ducted-cfg-62",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-63",
      slug: "ruud-ultra-series-central-ducted-cfg-63",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-ultra-series-central-ducted-cfg-64",
      slug: "ruud-ultra-series-central-ducted-cfg-64",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-65",
      slug: "ruud-ultra-series-central-ducted-cfg-65",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-66",
      slug: "ruud-ultra-series-central-ducted-cfg-66",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-67",
      slug: "ruud-ultra-series-central-ducted-cfg-67",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-68",
      slug: "ruud-ultra-series-central-ducted-cfg-68",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-69",
      slug: "ruud-ultra-series-central-ducted-cfg-69",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-70",
      slug: "ruud-ultra-series-central-ducted-cfg-70",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-71",
      slug: "ruud-ultra-series-central-ducted-cfg-71",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-72",
      slug: "ruud-ultra-series-central-ducted-cfg-72",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-73",
      slug: "ruud-ultra-series-central-ducted-cfg-73",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-74",
      slug: "ruud-ultra-series-central-ducted-cfg-74",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-75",
      slug: "ruud-ultra-series-central-ducted-cfg-75",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-76",
      slug: "ruud-ultra-series-central-ducted-cfg-76",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-77",
      slug: "ruud-ultra-series-central-ducted-cfg-77",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-78",
      slug: "ruud-ultra-series-central-ducted-cfg-78",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-79",
      slug: "ruud-ultra-series-central-ducted-cfg-79",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-80",
      slug: "ruud-ultra-series-central-ducted-cfg-80",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-81",
      slug: "ruud-ultra-series-central-ducted-cfg-81",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-82",
      slug: "ruud-ultra-series-central-ducted-cfg-82",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-83",
      slug: "ruud-ultra-series-central-ducted-cfg-83",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-84",
      slug: "ruud-ultra-series-central-ducted-cfg-84",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-85",
      slug: "ruud-ultra-series-central-ducted-cfg-85",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-86",
      slug: "ruud-ultra-series-central-ducted-cfg-86",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-87",
      slug: "ruud-ultra-series-central-ducted-cfg-87",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-88",
      slug: "ruud-ultra-series-central-ducted-cfg-88",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-89",
      slug: "ruud-ultra-series-central-ducted-cfg-89",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-90",
      slug: "ruud-ultra-series-central-ducted-cfg-90",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-91",
      slug: "ruud-ultra-series-central-ducted-cfg-91",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-92",
      slug: "ruud-ultra-series-central-ducted-cfg-92",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-93",
      slug: "ruud-ultra-series-central-ducted-cfg-93",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-94",
      slug: "ruud-ultra-series-central-ducted-cfg-94",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-95",
      slug: "ruud-ultra-series-central-ducted-cfg-95",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-96",
      slug: "ruud-ultra-series-central-ducted-cfg-96",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-97",
      slug: "ruud-ultra-series-central-ducted-cfg-97",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-98",
      slug: "ruud-ultra-series-central-ducted-cfg-98",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-99",
      slug: "ruud-ultra-series-central-ducted-cfg-99",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-100",
      slug: "ruud-ultra-series-central-ducted-cfg-100",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-101",
      slug: "ruud-ultra-series-central-ducted-cfg-101",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-102",
      slug: "ruud-ultra-series-central-ducted-cfg-102",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-103",
      slug: "ruud-ultra-series-central-ducted-cfg-103",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-104",
      slug: "ruud-ultra-series-central-ducted-cfg-104",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-105",
      slug: "ruud-ultra-series-central-ducted-cfg-105",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-106",
      slug: "ruud-ultra-series-central-ducted-cfg-106",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-107",
      slug: "ruud-ultra-series-central-ducted-cfg-107",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-108",
      slug: "ruud-ultra-series-central-ducted-cfg-108",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-109",
      slug: "ruud-ultra-series-central-ducted-cfg-109",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-110",
      slug: "ruud-ultra-series-central-ducted-cfg-110",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-111",
      slug: "ruud-ultra-series-central-ducted-cfg-111",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-112",
      slug: "ruud-ultra-series-central-ducted-cfg-112",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-113",
      slug: "ruud-ultra-series-central-ducted-cfg-113",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-114",
      slug: "ruud-ultra-series-central-ducted-cfg-114",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-115",
      slug: "ruud-ultra-series-central-ducted-cfg-115",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-116",
      slug: "ruud-ultra-series-central-ducted-cfg-116",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-117",
      slug: "ruud-ultra-series-central-ducted-cfg-117",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-118",
      slug: "ruud-ultra-series-central-ducted-cfg-118",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-119",
      slug: "ruud-ultra-series-central-ducted-cfg-119",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-120",
      slug: "ruud-ultra-series-central-ducted-cfg-120",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-121",
      slug: "ruud-ultra-series-central-ducted-cfg-121",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-122",
      slug: "ruud-ultra-series-central-ducted-cfg-122",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-123",
      slug: "ruud-ultra-series-central-ducted-cfg-123",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-124",
      slug: "ruud-ultra-series-central-ducted-cfg-124",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-125",
      slug: "ruud-ultra-series-central-ducted-cfg-125",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-126",
      slug: "ruud-ultra-series-central-ducted-cfg-126",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-127",
      slug: "ruud-ultra-series-central-ducted-cfg-127",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-128",
      slug: "ruud-ultra-series-central-ducted-cfg-128",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-129",
      slug: "ruud-ultra-series-central-ducted-cfg-129",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-130",
      slug: "ruud-ultra-series-central-ducted-cfg-130",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-131",
      slug: "ruud-ultra-series-central-ducted-cfg-131",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-132",
      slug: "ruud-ultra-series-central-ducted-cfg-132",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-133",
      slug: "ruud-ultra-series-central-ducted-cfg-133",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-134",
      slug: "ruud-ultra-series-central-ducted-cfg-134",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-135",
      slug: "ruud-ultra-series-central-ducted-cfg-135",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 49500,
      coolingCapacityMaxBtu: 49500,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-136",
      slug: "ruud-ultra-series-central-ducted-cfg-136",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-137",
      slug: "ruud-ultra-series-central-ducted-cfg-137",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-138",
      slug: "ruud-ultra-series-central-ducted-cfg-138",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-139",
      slug: "ruud-ultra-series-central-ducted-cfg-139",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-140",
      slug: "ruud-ultra-series-central-ducted-cfg-140",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-141",
      slug: "ruud-ultra-series-central-ducted-cfg-141",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-142",
      slug: "ruud-ultra-series-central-ducted-cfg-142",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-143",
      slug: "ruud-ultra-series-central-ducted-cfg-143",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-144",
      slug: "ruud-ultra-series-central-ducted-cfg-144",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-145",
      slug: "ruud-ultra-series-central-ducted-cfg-145",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-146",
      slug: "ruud-ultra-series-central-ducted-cfg-146",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-147",
      slug: "ruud-ultra-series-central-ducted-cfg-147",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-148",
      slug: "ruud-ultra-series-central-ducted-cfg-148",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-149",
      slug: "ruud-ultra-series-central-ducted-cfg-149",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-150",
      slug: "ruud-ultra-series-central-ducted-cfg-150",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-151",
      slug: "ruud-ultra-series-central-ducted-cfg-151",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-152",
      slug: "ruud-ultra-series-central-ducted-cfg-152",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-153",
      slug: "ruud-ultra-series-central-ducted-cfg-153",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-154",
      slug: "ruud-ultra-series-central-ducted-cfg-154",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-155",
      slug: "ruud-ultra-series-central-ducted-cfg-155",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-156",
      slug: "ruud-ultra-series-central-ducted-cfg-156",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-157",
      slug: "ruud-ultra-series-central-ducted-cfg-157",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-158",
      slug: "ruud-ultra-series-central-ducted-cfg-158",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-159",
      slug: "ruud-ultra-series-central-ducted-cfg-159",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-160",
      slug: "ruud-ultra-series-central-ducted-cfg-160",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-161",
      slug: "ruud-ultra-series-central-ducted-cfg-161",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-162",
      slug: "ruud-ultra-series-central-ducted-cfg-162",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-163",
      slug: "ruud-ultra-series-central-ducted-cfg-163",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-164",
      slug: "ruud-ultra-series-central-ducted-cfg-164",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-165",
      slug: "ruud-ultra-series-central-ducted-cfg-165",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-166",
      slug: "ruud-ultra-series-central-ducted-cfg-166",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-167",
      slug: "ruud-ultra-series-central-ducted-cfg-167",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-168",
      slug: "ruud-ultra-series-central-ducted-cfg-168",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-169",
      slug: "ruud-ultra-series-central-ducted-cfg-169",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-170",
      slug: "ruud-ultra-series-central-ducted-cfg-170",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-171",
      slug: "ruud-ultra-series-central-ducted-cfg-171",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-172",
      slug: "ruud-ultra-series-central-ducted-cfg-172",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-173",
      slug: "ruud-ultra-series-central-ducted-cfg-173",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-174",
      slug: "ruud-ultra-series-central-ducted-cfg-174",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-175",
      slug: "ruud-ultra-series-central-ducted-cfg-175",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-176",
      slug: "ruud-ultra-series-central-ducted-cfg-176",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-177",
      slug: "ruud-ultra-series-central-ducted-cfg-177",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-178",
      slug: "ruud-ultra-series-central-ducted-cfg-178",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-179",
      slug: "ruud-ultra-series-central-ducted-cfg-179",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-180",
      slug: "ruud-ultra-series-central-ducted-cfg-180",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-181",
      slug: "ruud-ultra-series-central-ducted-cfg-181",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-182",
      slug: "ruud-ultra-series-central-ducted-cfg-182",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-183",
      slug: "ruud-ultra-series-central-ducted-cfg-183",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-184",
      slug: "ruud-ultra-series-central-ducted-cfg-184",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-185",
      slug: "ruud-ultra-series-central-ducted-cfg-185",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-186",
      slug: "ruud-ultra-series-central-ducted-cfg-186",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-187",
      slug: "ruud-ultra-series-central-ducted-cfg-187",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-188",
      slug: "ruud-ultra-series-central-ducted-cfg-188",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 31800,
      coolingCapacityMaxBtu: 31800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-189",
      slug: "ruud-ultra-series-central-ducted-cfg-189",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-190",
      slug: "ruud-ultra-series-central-ducted-cfg-190",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-191",
      slug: "ruud-ultra-series-central-ducted-cfg-191",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-192",
      slug: "ruud-ultra-series-central-ducted-cfg-192",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-193",
      slug: "ruud-ultra-series-central-ducted-cfg-193",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-194",
      slug: "ruud-ultra-series-central-ducted-cfg-194",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-195",
      slug: "ruud-ultra-series-central-ducted-cfg-195",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-196",
      slug: "ruud-ultra-series-central-ducted-cfg-196",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-197",
      slug: "ruud-ultra-series-central-ducted-cfg-197",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-198",
      slug: "ruud-ultra-series-central-ducted-cfg-198",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-series-central-ducted-cfg-199",
      slug: "ruud-ultra-series-central-ducted-cfg-199",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-ultra-series-central-ducted-cfg-200",
      slug: "ruud-ultra-series-central-ducted-cfg-200",
      modelId: "ruud-ultra-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-classic-plus-wall-single-cfg-1",
      slug: "ruud-classic-plus-wall-single-cfg-1",
      modelId: "ruud-classic-plus-wall-single",
      outdoorUnitId: "ruud-ro2hfz18aj1h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single-cfg-2",
      slug: "ruud-classic-plus-wall-single-cfg-2",
      modelId: "ruud-classic-plus-wall-single",
      outdoorUnitId: "ruud-ro2hfz18aj1h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single-cfg-3",
      slug: "ruud-classic-plus-wall-single-cfg-3",
      modelId: "ruud-classic-plus-wall-single",
      outdoorUnitId: "ruud-ro3hfz24aj1h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-classic-plus-wall-single-cfg-4",
      slug: "ruud-classic-plus-wall-single-cfg-4",
      modelId: "ruud-classic-plus-wall-single",
      outdoorUnitId: "ruud-ro3hfz24aj1h",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-achiever-plus-central-ducted-cfg-1",
      slug: "ruud-achiever-plus-central-ducted-cfg-1",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-2",
      slug: "ruud-achiever-plus-central-ducted-cfg-2",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-3",
      slug: "ruud-achiever-plus-central-ducted-cfg-3",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-4",
      slug: "ruud-achiever-plus-central-ducted-cfg-4",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-5",
      slug: "ruud-achiever-plus-central-ducted-cfg-5",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-6",
      slug: "ruud-achiever-plus-central-ducted-cfg-6",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-7",
      slug: "ruud-achiever-plus-central-ducted-cfg-7",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-8",
      slug: "ruud-achiever-plus-central-ducted-cfg-8",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-9",
      slug: "ruud-achiever-plus-central-ducted-cfg-9",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-10",
      slug: "ruud-achiever-plus-central-ducted-cfg-10",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-11",
      slug: "ruud-achiever-plus-central-ducted-cfg-11",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-12",
      slug: "ruud-achiever-plus-central-ducted-cfg-12",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-13",
      slug: "ruud-achiever-plus-central-ducted-cfg-13",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-14",
      slug: "ruud-achiever-plus-central-ducted-cfg-14",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-15",
      slug: "ruud-achiever-plus-central-ducted-cfg-15",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-16",
      slug: "ruud-achiever-plus-central-ducted-cfg-16",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-17",
      slug: "ruud-achiever-plus-central-ducted-cfg-17",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-achiever-plus-central-ducted-cfg-18",
      slug: "ruud-achiever-plus-central-ducted-cfg-18",
      modelId: "ruud-achiever-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-1",
      slug: "ruud-f-series-plus-central-ducted-cfg-1",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-2",
      slug: "ruud-f-series-plus-central-ducted-cfg-2",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-3",
      slug: "ruud-f-series-plus-central-ducted-cfg-3",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-4",
      slug: "ruud-f-series-plus-central-ducted-cfg-4",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-5",
      slug: "ruud-f-series-plus-central-ducted-cfg-5",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-6",
      slug: "ruud-f-series-plus-central-ducted-cfg-6",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-7",
      slug: "ruud-f-series-plus-central-ducted-cfg-7",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-8",
      slug: "ruud-f-series-plus-central-ducted-cfg-8",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-9",
      slug: "ruud-f-series-plus-central-ducted-cfg-9",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-10",
      slug: "ruud-f-series-plus-central-ducted-cfg-10",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-11",
      slug: "ruud-f-series-plus-central-ducted-cfg-11",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-12",
      slug: "ruud-f-series-plus-central-ducted-cfg-12",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-13",
      slug: "ruud-f-series-plus-central-ducted-cfg-13",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-14",
      slug: "ruud-f-series-plus-central-ducted-cfg-14",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-15",
      slug: "ruud-f-series-plus-central-ducted-cfg-15",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-16",
      slug: "ruud-f-series-plus-central-ducted-cfg-16",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-17",
      slug: "ruud-f-series-plus-central-ducted-cfg-17",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-18",
      slug: "ruud-f-series-plus-central-ducted-cfg-18",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-19",
      slug: "ruud-f-series-plus-central-ducted-cfg-19",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-20",
      slug: "ruud-f-series-plus-central-ducted-cfg-20",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-21",
      slug: "ruud-f-series-plus-central-ducted-cfg-21",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-22",
      slug: "ruud-f-series-plus-central-ducted-cfg-22",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-23",
      slug: "ruud-f-series-plus-central-ducted-cfg-23",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-24",
      slug: "ruud-f-series-plus-central-ducted-cfg-24",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-25",
      slug: "ruud-f-series-plus-central-ducted-cfg-25",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-26",
      slug: "ruud-f-series-plus-central-ducted-cfg-26",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-27",
      slug: "ruud-f-series-plus-central-ducted-cfg-27",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-28",
      slug: "ruud-f-series-plus-central-ducted-cfg-28",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-29",
      slug: "ruud-f-series-plus-central-ducted-cfg-29",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-30",
      slug: "ruud-f-series-plus-central-ducted-cfg-30",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-31",
      slug: "ruud-f-series-plus-central-ducted-cfg-31",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-32",
      slug: "ruud-f-series-plus-central-ducted-cfg-32",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-33",
      slug: "ruud-f-series-plus-central-ducted-cfg-33",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-34",
      slug: "ruud-f-series-plus-central-ducted-cfg-34",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-35",
      slug: "ruud-f-series-plus-central-ducted-cfg-35",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-36",
      slug: "ruud-f-series-plus-central-ducted-cfg-36",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-37",
      slug: "ruud-f-series-plus-central-ducted-cfg-37",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-38",
      slug: "ruud-f-series-plus-central-ducted-cfg-38",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-39",
      slug: "ruud-f-series-plus-central-ducted-cfg-39",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-40",
      slug: "ruud-f-series-plus-central-ducted-cfg-40",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-41",
      slug: "ruud-f-series-plus-central-ducted-cfg-41",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-42",
      slug: "ruud-f-series-plus-central-ducted-cfg-42",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd17az36aj3n",
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
      id: "ruud-f-series-plus-central-ducted-cfg-43",
      slug: "ruud-f-series-plus-central-ducted-cfg-43",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd16ay24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-cfg-44",
      slug: "ruud-f-series-plus-central-ducted-cfg-44",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd16ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-plus-central-ducted-cfg-45",
      slug: "ruud-f-series-plus-central-ducted-cfg-45",
      modelId: "ruud-f-series-plus-central-ducted",
      outdoorUnitId: "ruud-rd16ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-f-series-central-ducted-cfg-1",
      slug: "ruud-f-series-central-ducted-cfg-1",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-2",
      slug: "ruud-f-series-central-ducted-cfg-2",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-3",
      slug: "ruud-f-series-central-ducted-cfg-3",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-4",
      slug: "ruud-f-series-central-ducted-cfg-4",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-5",
      slug: "ruud-f-series-central-ducted-cfg-5",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-6",
      slug: "ruud-f-series-central-ducted-cfg-6",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-7",
      slug: "ruud-f-series-central-ducted-cfg-7",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-8",
      slug: "ruud-f-series-central-ducted-cfg-8",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-9",
      slug: "ruud-f-series-central-ducted-cfg-9",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-10",
      slug: "ruud-f-series-central-ducted-cfg-10",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-11",
      slug: "ruud-f-series-central-ducted-cfg-11",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-12",
      slug: "ruud-f-series-central-ducted-cfg-12",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-13",
      slug: "ruud-f-series-central-ducted-cfg-13",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-14",
      slug: "ruud-f-series-central-ducted-cfg-14",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-15",
      slug: "ruud-f-series-central-ducted-cfg-15",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-16",
      slug: "ruud-f-series-central-ducted-cfg-16",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-17",
      slug: "ruud-f-series-central-ducted-cfg-17",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-18",
      slug: "ruud-f-series-central-ducted-cfg-18",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-19",
      slug: "ruud-f-series-central-ducted-cfg-19",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-20",
      slug: "ruud-f-series-central-ducted-cfg-20",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-21",
      slug: "ruud-f-series-central-ducted-cfg-21",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-22",
      slug: "ruud-f-series-central-ducted-cfg-22",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-23",
      slug: "ruud-f-series-central-ducted-cfg-23",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-24",
      slug: "ruud-f-series-central-ducted-cfg-24",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-25",
      slug: "ruud-f-series-central-ducted-cfg-25",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-26",
      slug: "ruud-f-series-central-ducted-cfg-26",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-27",
      slug: "ruud-f-series-central-ducted-cfg-27",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-28",
      slug: "ruud-f-series-central-ducted-cfg-28",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-29",
      slug: "ruud-f-series-central-ducted-cfg-29",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-30",
      slug: "ruud-f-series-central-ducted-cfg-30",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-31",
      slug: "ruud-f-series-central-ducted-cfg-31",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-32",
      slug: "ruud-f-series-central-ducted-cfg-32",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-33",
      slug: "ruud-f-series-central-ducted-cfg-33",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-34",
      slug: "ruud-f-series-central-ducted-cfg-34",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-35",
      slug: "ruud-f-series-central-ducted-cfg-35",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-36",
      slug: "ruud-f-series-central-ducted-cfg-36",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-37",
      slug: "ruud-f-series-central-ducted-cfg-37",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-38",
      slug: "ruud-f-series-central-ducted-cfg-38",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-39",
      slug: "ruud-f-series-central-ducted-cfg-39",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-40",
      slug: "ruud-f-series-central-ducted-cfg-40",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-41",
      slug: "ruud-f-series-central-ducted-cfg-41",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-42",
      slug: "ruud-f-series-central-ducted-cfg-42",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-43",
      slug: "ruud-f-series-central-ducted-cfg-43",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-44",
      slug: "ruud-f-series-central-ducted-cfg-44",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-45",
      slug: "ruud-f-series-central-ducted-cfg-45",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-46",
      slug: "ruud-f-series-central-ducted-cfg-46",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-47",
      slug: "ruud-f-series-central-ducted-cfg-47",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-48",
      slug: "ruud-f-series-central-ducted-cfg-48",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-49",
      slug: "ruud-f-series-central-ducted-cfg-49",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-50",
      slug: "ruud-f-series-central-ducted-cfg-50",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-51",
      slug: "ruud-f-series-central-ducted-cfg-51",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-52",
      slug: "ruud-f-series-central-ducted-cfg-52",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-53",
      slug: "ruud-f-series-central-ducted-cfg-53",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-54",
      slug: "ruud-f-series-central-ducted-cfg-54",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-55",
      slug: "ruud-f-series-central-ducted-cfg-55",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-56",
      slug: "ruud-f-series-central-ducted-cfg-56",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-57",
      slug: "ruud-f-series-central-ducted-cfg-57",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-58",
      slug: "ruud-f-series-central-ducted-cfg-58",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-59",
      slug: "ruud-f-series-central-ducted-cfg-59",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-60",
      slug: "ruud-f-series-central-ducted-cfg-60",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-61",
      slug: "ruud-f-series-central-ducted-cfg-61",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-62",
      slug: "ruud-f-series-central-ducted-cfg-62",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-63",
      slug: "ruud-f-series-central-ducted-cfg-63",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-64",
      slug: "ruud-f-series-central-ducted-cfg-64",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-65",
      slug: "ruud-f-series-central-ducted-cfg-65",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-66",
      slug: "ruud-f-series-central-ducted-cfg-66",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-67",
      slug: "ruud-f-series-central-ducted-cfg-67",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-68",
      slug: "ruud-f-series-central-ducted-cfg-68",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-69",
      slug: "ruud-f-series-central-ducted-cfg-69",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-70",
      slug: "ruud-f-series-central-ducted-cfg-70",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-71",
      slug: "ruud-f-series-central-ducted-cfg-71",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-72",
      slug: "ruud-f-series-central-ducted-cfg-72",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-73",
      slug: "ruud-f-series-central-ducted-cfg-73",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-74",
      slug: "ruud-f-series-central-ducted-cfg-74",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-75",
      slug: "ruud-f-series-central-ducted-cfg-75",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-76",
      slug: "ruud-f-series-central-ducted-cfg-76",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-77",
      slug: "ruud-f-series-central-ducted-cfg-77",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-78",
      slug: "ruud-f-series-central-ducted-cfg-78",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-79",
      slug: "ruud-f-series-central-ducted-cfg-79",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-80",
      slug: "ruud-f-series-central-ducted-cfg-80",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-81",
      slug: "ruud-f-series-central-ducted-cfg-81",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-82",
      slug: "ruud-f-series-central-ducted-cfg-82",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-83",
      slug: "ruud-f-series-central-ducted-cfg-83",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-84",
      slug: "ruud-f-series-central-ducted-cfg-84",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-85",
      slug: "ruud-f-series-central-ducted-cfg-85",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-86",
      slug: "ruud-f-series-central-ducted-cfg-86",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-87",
      slug: "ruud-f-series-central-ducted-cfg-87",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-88",
      slug: "ruud-f-series-central-ducted-cfg-88",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-89",
      slug: "ruud-f-series-central-ducted-cfg-89",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-90",
      slug: "ruud-f-series-central-ducted-cfg-90",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-91",
      slug: "ruud-f-series-central-ducted-cfg-91",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-92",
      slug: "ruud-f-series-central-ducted-cfg-92",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-93",
      slug: "ruud-f-series-central-ducted-cfg-93",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-94",
      slug: "ruud-f-series-central-ducted-cfg-94",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-95",
      slug: "ruud-f-series-central-ducted-cfg-95",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-96",
      slug: "ruud-f-series-central-ducted-cfg-96",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-97",
      slug: "ruud-f-series-central-ducted-cfg-97",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-98",
      slug: "ruud-f-series-central-ducted-cfg-98",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-99",
      slug: "ruud-f-series-central-ducted-cfg-99",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-100",
      slug: "ruud-f-series-central-ducted-cfg-100",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-101",
      slug: "ruud-f-series-central-ducted-cfg-101",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-102",
      slug: "ruud-f-series-central-ducted-cfg-102",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-103",
      slug: "ruud-f-series-central-ducted-cfg-103",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-104",
      slug: "ruud-f-series-central-ducted-cfg-104",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-105",
      slug: "ruud-f-series-central-ducted-cfg-105",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-106",
      slug: "ruud-f-series-central-ducted-cfg-106",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-107",
      slug: "ruud-f-series-central-ducted-cfg-107",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-108",
      slug: "ruud-f-series-central-ducted-cfg-108",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-109",
      slug: "ruud-f-series-central-ducted-cfg-109",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-110",
      slug: "ruud-f-series-central-ducted-cfg-110",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-111",
      slug: "ruud-f-series-central-ducted-cfg-111",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-112",
      slug: "ruud-f-series-central-ducted-cfg-112",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-113",
      slug: "ruud-f-series-central-ducted-cfg-113",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-114",
      slug: "ruud-f-series-central-ducted-cfg-114",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-115",
      slug: "ruud-f-series-central-ducted-cfg-115",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-116",
      slug: "ruud-f-series-central-ducted-cfg-116",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-117",
      slug: "ruud-f-series-central-ducted-cfg-117",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-118",
      slug: "ruud-f-series-central-ducted-cfg-118",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-119",
      slug: "ruud-f-series-central-ducted-cfg-119",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-120",
      slug: "ruud-f-series-central-ducted-cfg-120",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-121",
      slug: "ruud-f-series-central-ducted-cfg-121",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-122",
      slug: "ruud-f-series-central-ducted-cfg-122",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-123",
      slug: "ruud-f-series-central-ducted-cfg-123",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-124",
      slug: "ruud-f-series-central-ducted-cfg-124",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-125",
      slug: "ruud-f-series-central-ducted-cfg-125",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-126",
      slug: "ruud-f-series-central-ducted-cfg-126",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-127",
      slug: "ruud-f-series-central-ducted-cfg-127",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-128",
      slug: "ruud-f-series-central-ducted-cfg-128",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-129",
      slug: "ruud-f-series-central-ducted-cfg-129",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-130",
      slug: "ruud-f-series-central-ducted-cfg-130",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-131",
      slug: "ruud-f-series-central-ducted-cfg-131",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az60aj3n",
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
      id: "ruud-f-series-central-ducted-cfg-132",
      slug: "ruud-f-series-central-ducted-cfg-132",
      modelId: "ruud-f-series-central-ducted",
      outdoorUnitId: "ruud-rd17az48aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-1",
      slug: "ruud-k-series-central-ducted-cfg-1",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-2",
      slug: "ruud-k-series-central-ducted-cfg-2",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-3",
      slug: "ruud-k-series-central-ducted-cfg-3",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-4",
      slug: "ruud-k-series-central-ducted-cfg-4",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-5",
      slug: "ruud-k-series-central-ducted-cfg-5",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-6",
      slug: "ruud-k-series-central-ducted-cfg-6",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-7",
      slug: "ruud-k-series-central-ducted-cfg-7",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-8",
      slug: "ruud-k-series-central-ducted-cfg-8",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-9",
      slug: "ruud-k-series-central-ducted-cfg-9",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-10",
      slug: "ruud-k-series-central-ducted-cfg-10",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-11",
      slug: "ruud-k-series-central-ducted-cfg-11",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-12",
      slug: "ruud-k-series-central-ducted-cfg-12",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-13",
      slug: "ruud-k-series-central-ducted-cfg-13",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-14",
      slug: "ruud-k-series-central-ducted-cfg-14",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-15",
      slug: "ruud-k-series-central-ducted-cfg-15",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-16",
      slug: "ruud-k-series-central-ducted-cfg-16",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-17",
      slug: "ruud-k-series-central-ducted-cfg-17",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-18",
      slug: "ruud-k-series-central-ducted-cfg-18",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-19",
      slug: "ruud-k-series-central-ducted-cfg-19",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-20",
      slug: "ruud-k-series-central-ducted-cfg-20",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-21",
      slug: "ruud-k-series-central-ducted-cfg-21",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-22",
      slug: "ruud-k-series-central-ducted-cfg-22",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-23",
      slug: "ruud-k-series-central-ducted-cfg-23",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-24",
      slug: "ruud-k-series-central-ducted-cfg-24",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-25",
      slug: "ruud-k-series-central-ducted-cfg-25",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-26",
      slug: "ruud-k-series-central-ducted-cfg-26",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-27",
      slug: "ruud-k-series-central-ducted-cfg-27",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-28",
      slug: "ruud-k-series-central-ducted-cfg-28",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-29",
      slug: "ruud-k-series-central-ducted-cfg-29",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-30",
      slug: "ruud-k-series-central-ducted-cfg-30",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-31",
      slug: "ruud-k-series-central-ducted-cfg-31",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-32",
      slug: "ruud-k-series-central-ducted-cfg-32",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-33",
      slug: "ruud-k-series-central-ducted-cfg-33",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-34",
      slug: "ruud-k-series-central-ducted-cfg-34",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-35",
      slug: "ruud-k-series-central-ducted-cfg-35",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-36",
      slug: "ruud-k-series-central-ducted-cfg-36",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-37",
      slug: "ruud-k-series-central-ducted-cfg-37",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-38",
      slug: "ruud-k-series-central-ducted-cfg-38",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-39",
      slug: "ruud-k-series-central-ducted-cfg-39",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-40",
      slug: "ruud-k-series-central-ducted-cfg-40",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-41",
      slug: "ruud-k-series-central-ducted-cfg-41",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd17az24aj3n",
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
      id: "ruud-k-series-central-ducted-cfg-42",
      slug: "ruud-k-series-central-ducted-cfg-42",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-43",
      slug: "ruud-k-series-central-ducted-cfg-43",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-44",
      slug: "ruud-k-series-central-ducted-cfg-44",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-45",
      slug: "ruud-k-series-central-ducted-cfg-45",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-46",
      slug: "ruud-k-series-central-ducted-cfg-46",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-47",
      slug: "ruud-k-series-central-ducted-cfg-47",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-48",
      slug: "ruud-k-series-central-ducted-cfg-48",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-49",
      slug: "ruud-k-series-central-ducted-cfg-49",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-50",
      slug: "ruud-k-series-central-ducted-cfg-50",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-51",
      slug: "ruud-k-series-central-ducted-cfg-51",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-52",
      slug: "ruud-k-series-central-ducted-cfg-52",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-53",
      slug: "ruud-k-series-central-ducted-cfg-53",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-54",
      slug: "ruud-k-series-central-ducted-cfg-54",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-55",
      slug: "ruud-k-series-central-ducted-cfg-55",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-56",
      slug: "ruud-k-series-central-ducted-cfg-56",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-57",
      slug: "ruud-k-series-central-ducted-cfg-57",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-58",
      slug: "ruud-k-series-central-ducted-cfg-58",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-59",
      slug: "ruud-k-series-central-ducted-cfg-59",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-60",
      slug: "ruud-k-series-central-ducted-cfg-60",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-61",
      slug: "ruud-k-series-central-ducted-cfg-61",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-62",
      slug: "ruud-k-series-central-ducted-cfg-62",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-63",
      slug: "ruud-k-series-central-ducted-cfg-63",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-64",
      slug: "ruud-k-series-central-ducted-cfg-64",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-65",
      slug: "ruud-k-series-central-ducted-cfg-65",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay60ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-66",
      slug: "ruud-k-series-central-ducted-cfg-66",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-67",
      slug: "ruud-k-series-central-ducted-cfg-67",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-68",
      slug: "ruud-k-series-central-ducted-cfg-68",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay24ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-69",
      slug: "ruud-k-series-central-ducted-cfg-69",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-70",
      slug: "ruud-k-series-central-ducted-cfg-70",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-71",
      slug: "ruud-k-series-central-ducted-cfg-71",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-72",
      slug: "ruud-k-series-central-ducted-cfg-72",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-73",
      slug: "ruud-k-series-central-ducted-cfg-73",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-74",
      slug: "ruud-k-series-central-ducted-cfg-74",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-75",
      slug: "ruud-k-series-central-ducted-cfg-75",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-76",
      slug: "ruud-k-series-central-ducted-cfg-76",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-77",
      slug: "ruud-k-series-central-ducted-cfg-77",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-78",
      slug: "ruud-k-series-central-ducted-cfg-78",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-79",
      slug: "ruud-k-series-central-ducted-cfg-79",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-80",
      slug: "ruud-k-series-central-ducted-cfg-80",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-81",
      slug: "ruud-k-series-central-ducted-cfg-81",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-82",
      slug: "ruud-k-series-central-ducted-cfg-82",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-83",
      slug: "ruud-k-series-central-ducted-cfg-83",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-84",
      slug: "ruud-k-series-central-ducted-cfg-84",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-85",
      slug: "ruud-k-series-central-ducted-cfg-85",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-86",
      slug: "ruud-k-series-central-ducted-cfg-86",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-87",
      slug: "ruud-k-series-central-ducted-cfg-87",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-88",
      slug: "ruud-k-series-central-ducted-cfg-88",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-89",
      slug: "ruud-k-series-central-ducted-cfg-89",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-90",
      slug: "ruud-k-series-central-ducted-cfg-90",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-91",
      slug: "ruud-k-series-central-ducted-cfg-91",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-92",
      slug: "ruud-k-series-central-ducted-cfg-92",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-93",
      slug: "ruud-k-series-central-ducted-cfg-93",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-94",
      slug: "ruud-k-series-central-ducted-cfg-94",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-95",
      slug: "ruud-k-series-central-ducted-cfg-95",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-96",
      slug: "ruud-k-series-central-ducted-cfg-96",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-97",
      slug: "ruud-k-series-central-ducted-cfg-97",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-98",
      slug: "ruud-k-series-central-ducted-cfg-98",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-99",
      slug: "ruud-k-series-central-ducted-cfg-99",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-100",
      slug: "ruud-k-series-central-ducted-cfg-100",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-101",
      slug: "ruud-k-series-central-ducted-cfg-101",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-102",
      slug: "ruud-k-series-central-ducted-cfg-102",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-103",
      slug: "ruud-k-series-central-ducted-cfg-103",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-104",
      slug: "ruud-k-series-central-ducted-cfg-104",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-105",
      slug: "ruud-k-series-central-ducted-cfg-105",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-106",
      slug: "ruud-k-series-central-ducted-cfg-106",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay48ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-107",
      slug: "ruud-k-series-central-ducted-cfg-107",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-108",
      slug: "ruud-k-series-central-ducted-cfg-108",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-109",
      slug: "ruud-k-series-central-ducted-cfg-109",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-110",
      slug: "ruud-k-series-central-ducted-cfg-110",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-111",
      slug: "ruud-k-series-central-ducted-cfg-111",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-112",
      slug: "ruud-k-series-central-ducted-cfg-112",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-113",
      slug: "ruud-k-series-central-ducted-cfg-113",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-114",
      slug: "ruud-k-series-central-ducted-cfg-114",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-115",
      slug: "ruud-k-series-central-ducted-cfg-115",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-116",
      slug: "ruud-k-series-central-ducted-cfg-116",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-117",
      slug: "ruud-k-series-central-ducted-cfg-117",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-118",
      slug: "ruud-k-series-central-ducted-cfg-118",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-119",
      slug: "ruud-k-series-central-ducted-cfg-119",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-120",
      slug: "ruud-k-series-central-ducted-cfg-120",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-121",
      slug: "ruud-k-series-central-ducted-cfg-121",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-122",
      slug: "ruud-k-series-central-ducted-cfg-122",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-k-series-central-ducted-cfg-123",
      slug: "ruud-k-series-central-ducted-cfg-123",
      modelId: "ruud-k-series-central-ducted",
      outdoorUnitId: "ruud-rd18ay36ajvc",
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
      id: "ruud-floating-air-acheiver-wall-single-cfg-1",
      slug: "ruud-floating-air-acheiver-wall-single-cfg-1",
      modelId: "ruud-floating-air-acheiver-wall-single",
      outdoorUnitId: "ruud-fshsr09b1c",
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
      id: "ruud-floating-air-acheiver-wall-single-cfg-2",
      slug: "ruud-floating-air-acheiver-wall-single-cfg-2",
      modelId: "ruud-floating-air-acheiver-wall-single",
      outdoorUnitId: "ruud-fshsr18b3d",
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
      id: "ruud-floating-air-achiever-plus-wall-single-cfg-1",
      slug: "ruud-floating-air-achiever-plus-wall-single-cfg-1",
      modelId: "ruud-floating-air-achiever-plus-wall-single",
      outdoorUnitId: "ruud-fphsr09a1c",
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
      id: "ruud-floating-air-achiever-plus-wall-single-cfg-2",
      slug: "ruud-floating-air-achiever-plus-wall-single-cfg-2",
      modelId: "ruud-floating-air-achiever-plus-wall-single",
      outdoorUnitId: "ruud-fphsr12a1c",
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
      id: "ruud-floating-air-achiever-plus-wall-single-cfg-3",
      slug: "ruud-floating-air-achiever-plus-wall-single-cfg-3",
      modelId: "ruud-floating-air-achiever-plus-wall-single",
      outdoorUnitId: "ruud-fphsr09a3d",
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
      id: "ruud-floating-air-achiever-plus-wall-single-cfg-4",
      slug: "ruud-floating-air-achiever-plus-wall-single-cfg-4",
      modelId: "ruud-floating-air-achiever-plus-wall-single",
      outdoorUnitId: "ruud-fphsr12a3d",
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
      id: "ruud-floating-air-achiever-plus-wall-single-cfg-5",
      slug: "ruud-floating-air-achiever-plus-wall-single-cfg-5",
      modelId: "ruud-floating-air-achiever-plus-wall-single",
      outdoorUnitId: "ruud-fphsr18a3d",
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
      id: "ruud-floating-air-achiever-plus-wall-single-cfg-6",
      slug: "ruud-floating-air-achiever-plus-wall-single-cfg-6",
      modelId: "ruud-floating-air-achiever-plus-wall-single",
      outdoorUnitId: "ruud-fphsr24a3d",
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
      id: "ruud-ultra-central-ducted-cfg-1",
      slug: "ruud-ultra-central-ducted-cfg-1",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-2",
      slug: "ruud-ultra-central-ducted-cfg-2",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-3",
      slug: "ruud-ultra-central-ducted-cfg-3",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-4",
      slug: "ruud-ultra-central-ducted-cfg-4",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-5",
      slug: "ruud-ultra-central-ducted-cfg-5",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-6",
      slug: "ruud-ultra-central-ducted-cfg-6",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-7",
      slug: "ruud-ultra-central-ducted-cfg-7",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-8",
      slug: "ruud-ultra-central-ducted-cfg-8",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-9",
      slug: "ruud-ultra-central-ducted-cfg-9",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-10",
      slug: "ruud-ultra-central-ducted-cfg-10",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-11",
      slug: "ruud-ultra-central-ducted-cfg-11",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-12",
      slug: "ruud-ultra-central-ducted-cfg-12",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay36ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-13",
      slug: "ruud-ultra-central-ducted-cfg-13",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-14",
      slug: "ruud-ultra-central-ducted-cfg-14",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-15",
      slug: "ruud-ultra-central-ducted-cfg-15",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-16",
      slug: "ruud-ultra-central-ducted-cfg-16",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-17",
      slug: "ruud-ultra-central-ducted-cfg-17",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-ultra-central-ducted-cfg-18",
      slug: "ruud-ultra-central-ducted-cfg-18",
      modelId: "ruud-ultra-central-ducted",
      outdoorUnitId: "ruud-up19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ruud-floating-air-ultra-wall-single-cfg-1",
      slug: "ruud-floating-air-ultra-wall-single-cfg-1",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr12a3d",
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
      id: "ruud-floating-air-ultra-wall-single-cfg-2",
      slug: "ruud-floating-air-ultra-wall-single-cfg-2",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr09a3d",
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
      id: "ruud-floating-air-ultra-wall-single-cfg-3",
      slug: "ruud-floating-air-ultra-wall-single-cfg-3",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr12a3d",
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
      id: "ruud-floating-air-ultra-wall-single-cfg-4",
      slug: "ruud-floating-air-ultra-wall-single-cfg-4",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr18a3d",
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
      id: "ruud-floating-air-ultra-wall-single-cfg-5",
      slug: "ruud-floating-air-ultra-wall-single-cfg-5",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr24a3d",
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
      id: "ruud-floating-air-ultra-wall-single-cfg-6",
      slug: "ruud-floating-air-ultra-wall-single-cfg-6",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr18a3d",
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
      id: "ruud-floating-air-ultra-wall-single-cfg-7",
      slug: "ruud-floating-air-ultra-wall-single-cfg-7",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr24a3d",
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
      id: "ruud-floating-air-ultra-wall-single-cfg-8",
      slug: "ruud-floating-air-ultra-wall-single-cfg-8",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr36a3d",
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
      id: "ruud-floating-air-ultra-wall-single-cfg-9",
      slug: "ruud-floating-air-ultra-wall-single-cfg-9",
      modelId: "ruud-floating-air-ultra-wall-single",
      outdoorUnitId: "ruud-fphfr36a3d",
      indoorUnitId: null,
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
      configurationId: "ruud-standard-wall-single-cfg-1",
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
      configurationId: "ruud-standard-wall-single-cfg-2",
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
      configurationId: "ruud-standard-wall-single-cfg-3",
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
      configurationId: "ruud-standard-wall-single-cfg-4",
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
      configurationId: "ruud-standard-wall-single-cfg-5",
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
      configurationId: "ruud-standard-wall-single-cfg-6",
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
      configurationId: "ruud-standard-wall-single-cfg-7",
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
      configurationId: "ruud-standard-wall-single-cfg-8",
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
      configurationId: "ruud-standard-wall-single-cfg-9",
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
      configurationId: "ruud-standard-wall-single-cfg-10",
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
      configurationId: "ruud-standard-wall-single-cfg-11",
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
      configurationId: "ruud-standard-wall-single-cfg-12",
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
      configurationId: "ruud-standard-wall-single-cfg-13",
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
      configurationId: "ruud-standard-wall-single-cfg-14",
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
      configurationId: "ruud-standard-wall-single-cfg-15",
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
      configurationId: "ruud-standard-wall-single-cfg-16",
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
      configurationId: "ruud-standard-wall-single-cfg-17",
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
      configurationId: "ruud-standard-wall-single-cfg-18",
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
      configurationId: "ruud-standard-wall-single-cfg-19",
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
      configurationId: "ruud-standard-wall-single-cfg-20",
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
      configurationId: "ruud-standard-wall-single-cfg-21",
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
      configurationId: "ruud-standard-wall-single-cfg-22",
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
      configurationId: "ruud-standard-wall-single-cfg-23",
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
      configurationId: "ruud-standard-wall-single-cfg-24",
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
      configurationId: "ruud-standard-wall-single-cfg-25",
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
      configurationId: "ruud-standard-wall-single-cfg-26",
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
      configurationId: "ruud-standard-wall-single-cfg-27",
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
      configurationId: "ruud-standard-wall-single-cfg-28",
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
      configurationId: "ruud-standard-wall-single-cfg-29",
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
      configurationId: "ruud-standard-wall-single-cfg-30",
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
      configurationId: "ruud-standard-wall-single-cfg-31",
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
      configurationId: "ruud-standard-wall-single-cfg-32",
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
      configurationId: "ruud-standard-wall-single-cfg-33",
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
      configurationId: "ruud-standard-wall-single-cfg-34",
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
      configurationId: "ruud-standard-wall-single-cfg-35",
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
      configurationId: "ruud-standard-wall-single-cfg-36",
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
      configurationId: "ruud-standard-wall-single-cfg-37",
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
      configurationId: "ruud-standard-wall-single-cfg-38",
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
      configurationId: "ruud-standard-wall-single-cfg-39",
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
      configurationId: "ruud-standard-wall-single-cfg-40",
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
      configurationId: "ruud-standard-wall-single-cfg-41",
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
      configurationId: "ruud-standard-wall-single-cfg-42",
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
      configurationId: "ruud-standard-wall-single-cfg-43",
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
      configurationId: "ruud-standard-wall-single-cfg-44",
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
      configurationId: "ruud-standard-wall-single-cfg-45",
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
      configurationId: "ruud-standard-wall-single-cfg-46",
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
      configurationId: "ruud-standard-wall-single-cfg-47",
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
      configurationId: "ruud-standard-wall-single-cfg-48",
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
      configurationId: "ruud-standard-wall-single-cfg-49",
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
      configurationId: "ruud-standard-wall-single-cfg-50",
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
      configurationId: "ruud-standard-wall-single-cfg-51",
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
      configurationId: "ruud-standard-wall-single-cfg-52",
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
      configurationId: "ruud-standard-wall-single-cfg-53",
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
      configurationId: "ruud-standard-wall-single-cfg-54",
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
      configurationId: "ruud-standard-wall-single-cfg-55",
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
      configurationId: "ruud-standard-wall-single-cfg-56",
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
      configurationId: "ruud-standard-wall-single-cfg-57",
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
      configurationId: "ruud-standard-wall-single-cfg-58",
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
      configurationId: "ruud-standard-wall-single-cfg-59",
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
      configurationId: "ruud-standard-wall-single-cfg-60",
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
      configurationId: "ruud-standard-wall-single-cfg-61",
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
      configurationId: "ruud-standard-wall-single-cfg-62",
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
      configurationId: "ruud-standard-wall-single-cfg-63",
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
      configurationId: "ruud-standard-wall-single-cfg-64",
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
      configurationId: "ruud-standard-wall-single-cfg-65",
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
      configurationId: "ruud-standard-wall-single-cfg-66",
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
      configurationId: "ruud-standard-wall-single-cfg-67",
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
      configurationId: "ruud-standard-wall-single-cfg-68",
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
      configurationId: "ruud-standard-wall-single-cfg-69",
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
      configurationId: "ruud-standard-wall-single-cfg-70",
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
      configurationId: "ruud-standard-wall-single-cfg-71",
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
      configurationId: "ruud-standard-wall-single-cfg-72",
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
      configurationId: "ruud-standard-wall-single-cfg-73",
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
      configurationId: "ruud-standard-wall-single-cfg-74",
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
      configurationId: "ruud-standard-wall-single-cfg-75",
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
      configurationId: "ruud-standard-wall-single-cfg-76",
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
      configurationId: "ruud-standard-wall-single-cfg-77",
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
      configurationId: "ruud-standard-wall-single-cfg-78",
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
      configurationId: "ruud-standard-wall-single-cfg-79",
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
      configurationId: "ruud-standard-wall-single-cfg-80",
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
      configurationId: "ruud-standard-wall-single-cfg-81",
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
      configurationId: "ruud-standard-wall-single-cfg-82",
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
      configurationId: "ruud-standard-wall-single-cfg-83",
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
      configurationId: "ruud-standard-wall-single-cfg-84",
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
      configurationId: "ruud-standard-wall-single-cfg-85",
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
      configurationId: "ruud-standard-wall-single-cfg-86",
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
      configurationId: "ruud-standard-wall-single-cfg-87",
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
      configurationId: "ruud-standard-wall-single-cfg-88",
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
      configurationId: "ruud-standard-wall-single-cfg-89",
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
      configurationId: "ruud-standard-wall-single-cfg-90",
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
      configurationId: "ruud-standard-wall-single-cfg-91",
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
      configurationId: "ruud-standard-wall-single-cfg-92",
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
      configurationId: "ruud-standard-wall-single-cfg-93",
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
      configurationId: "ruud-standard-wall-single-cfg-94",
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
      configurationId: "ruud-standard-wall-single-cfg-95",
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
      configurationId: "ruud-standard-wall-single-cfg-96",
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
      configurationId: "ruud-standard-wall-single-cfg-97",
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
      configurationId: "ruud-standard-wall-single-cfg-98",
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
      configurationId: "ruud-standard-wall-single-cfg-99",
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
      configurationId: "ruud-standard-wall-single-cfg-100",
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
      configurationId: "ruud-standard-wall-single-cfg-101",
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
      configurationId: "ruud-standard-wall-single-cfg-102",
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
      configurationId: "ruud-standard-wall-single-cfg-103",
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
      configurationId: "ruud-standard-wall-single-cfg-104",
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
      configurationId: "ruud-standard-wall-single-cfg-105",
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
      configurationId: "ruud-standard-wall-single-cfg-106",
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
      configurationId: "ruud-standard-wall-single-cfg-107",
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
      configurationId: "ruud-standard-wall-single-cfg-108",
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
      configurationId: "ruud-standard-wall-single-cfg-109",
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
      configurationId: "ruud-standard-wall-single-cfg-110",
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
      configurationId: "ruud-standard-wall-single-cfg-111",
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
      configurationId: "ruud-standard-wall-single-cfg-112",
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
      configurationId: "ruud-standard-wall-single-cfg-113",
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
      configurationId: "ruud-standard-wall-single-cfg-114",
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
      configurationId: "ruud-standard-wall-single-cfg-115",
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
      configurationId: "ruud-standard-wall-single-cfg-116",
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
      configurationId: "ruud-standard-central-ducted-cfg-1",
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
      configurationId: "ruud-standard-central-ducted-cfg-2",
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
      configurationId: "ruud-standard-central-ducted-cfg-3",
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
      configurationId: "ruud-standard-central-ducted-cfg-4",
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
      configurationId: "ruud-standard-central-ducted-cfg-5",
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
      configurationId: "ruud-standard-central-ducted-cfg-6",
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
      configurationId: "ruud-standard-central-ducted-cfg-7",
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
      configurationId: "ruud-standard-central-ducted-cfg-8",
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
      configurationId: "ruud-standard-central-ducted-cfg-9",
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
      configurationId: "ruud-standard-central-ducted-cfg-10",
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
      configurationId: "ruud-standard-central-ducted-cfg-11",
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
      configurationId: "ruud-standard-central-ducted-cfg-12",
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
      configurationId: "ruud-standard-central-ducted-cfg-13",
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
      configurationId: "ruud-standard-central-ducted-cfg-14",
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
      configurationId: "ruud-standard-central-ducted-cfg-15",
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
      configurationId: "ruud-standard-central-ducted-cfg-16",
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
      configurationId: "ruud-standard-central-ducted-cfg-17",
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
      configurationId: "ruud-standard-central-ducted-cfg-18",
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
      configurationId: "ruud-standard-central-ducted-cfg-19",
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
      configurationId: "ruud-standard-central-ducted-cfg-20",
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
      configurationId: "ruud-standard-central-ducted-cfg-21",
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
      configurationId: "ruud-standard-central-ducted-cfg-22",
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
      configurationId: "ruud-standard-central-ducted-cfg-23",
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
      configurationId: "ruud-standard-central-ducted-cfg-24",
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
      configurationId: "ruud-standard-central-ducted-cfg-25",
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
      configurationId: "ruud-standard-central-ducted-cfg-26",
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
      configurationId: "ruud-standard-central-ducted-cfg-27",
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
      configurationId: "ruud-standard-central-ducted-cfg-28",
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
      configurationId: "ruud-standard-central-ducted-cfg-29",
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
      configurationId: "ruud-standard-central-ducted-cfg-30",
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
      configurationId: "ruud-standard-central-ducted-cfg-31",
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
      configurationId: "ruud-standard-central-ducted-cfg-32",
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
      configurationId: "ruud-standard-central-ducted-cfg-33",
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
      configurationId: "ruud-standard-central-ducted-cfg-34",
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
      configurationId: "ruud-standard-central-ducted-cfg-35",
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
      configurationId: "ruud-standard-central-ducted-cfg-36",
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
      configurationId: "ruud-standard-central-ducted-cfg-37",
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
      configurationId: "ruud-standard-central-ducted-cfg-38",
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
      configurationId: "ruud-standard-central-ducted-cfg-39",
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
      configurationId: "ruud-standard-central-ducted-cfg-40",
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
      configurationId: "ruud-standard-central-ducted-cfg-41",
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
      configurationId: "ruud-standard-central-ducted-cfg-42",
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
      configurationId: "ruud-standard-central-ducted-cfg-43",
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
      configurationId: "ruud-standard-central-ducted-cfg-44",
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
      configurationId: "ruud-standard-central-ducted-cfg-45",
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
      configurationId: "ruud-standard-central-ducted-cfg-46",
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
      configurationId: "ruud-standard-central-ducted-cfg-47",
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
      configurationId: "ruud-standard-central-ducted-cfg-48",
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
      configurationId: "ruud-standard-central-ducted-cfg-49",
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
      configurationId: "ruud-standard-central-ducted-cfg-50",
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
      configurationId: "ruud-standard-central-ducted-cfg-51",
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
      configurationId: "ruud-standard-central-ducted-cfg-52",
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
      configurationId: "ruud-standard-central-ducted-cfg-53",
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
      configurationId: "ruud-standard-central-ducted-cfg-54",
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
      configurationId: "ruud-standard-central-ducted-cfg-55",
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
      configurationId: "ruud-standard-central-ducted-cfg-56",
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
      configurationId: "ruud-standard-central-ducted-cfg-57",
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
      configurationId: "ruud-standard-central-ducted-cfg-58",
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
      configurationId: "ruud-standard-central-ducted-cfg-59",
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
      configurationId: "ruud-standard-central-ducted-cfg-60",
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
      configurationId: "ruud-standard-central-ducted-cfg-61",
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
      configurationId: "ruud-standard-central-ducted-cfg-62",
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
      configurationId: "ruud-standard-central-ducted-cfg-63",
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
      configurationId: "ruud-standard-central-ducted-cfg-64",
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
      configurationId: "ruud-standard-central-ducted-cfg-65",
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
      configurationId: "ruud-standard-central-ducted-cfg-66",
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
      configurationId: "ruud-standard-central-ducted-cfg-67",
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
      configurationId: "ruud-standard-central-ducted-cfg-68",
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
      configurationId: "ruud-standard-central-ducted-cfg-69",
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
      configurationId: "ruud-standard-central-ducted-cfg-70",
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
      configurationId: "ruud-standard-central-ducted-cfg-71",
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
      configurationId: "ruud-standard-central-ducted-cfg-72",
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
      configurationId: "ruud-standard-central-ducted-cfg-73",
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
      configurationId: "ruud-standard-central-ducted-cfg-74",
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
      configurationId: "ruud-standard-central-ducted-cfg-75",
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
      configurationId: "ruud-standard-central-ducted-cfg-76",
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
      configurationId: "ruud-standard-central-ducted-cfg-77",
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
      configurationId: "ruud-standard-central-ducted-cfg-78",
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
      configurationId: "ruud-standard-central-ducted-cfg-79",
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
      configurationId: "ruud-standard-central-ducted-cfg-80",
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
      configurationId: "ruud-standard-central-ducted-cfg-81",
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
      configurationId: "ruud-standard-central-ducted-cfg-82",
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
      configurationId: "ruud-standard-central-ducted-cfg-83",
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
      configurationId: "ruud-standard-central-ducted-cfg-84",
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
      configurationId: "ruud-standard-central-ducted-cfg-85",
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
      configurationId: "ruud-standard-central-ducted-cfg-86",
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
      configurationId: "ruud-standard-central-ducted-cfg-87",
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
      configurationId: "ruud-standard-central-ducted-cfg-88",
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
      configurationId: "ruud-standard-central-ducted-cfg-89",
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
      configurationId: "ruud-standard-central-ducted-cfg-90",
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
      configurationId: "ruud-standard-central-ducted-cfg-91",
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
      configurationId: "ruud-standard-central-ducted-cfg-92",
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
      configurationId: "ruud-standard-central-ducted-cfg-93",
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
      configurationId: "ruud-standard-central-ducted-cfg-94",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-1",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-2",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-3",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-4",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-5",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-6",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-7",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-8",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-9",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-10",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-11",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-12",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-13",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-14",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-15",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-16",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-17",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-18",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-19",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-20",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-21",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-22",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-23",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-24",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-25",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-26",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-27",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-28",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-29",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-30",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-31",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-32",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-33",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-34",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-35",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-36",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-37",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-38",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-39",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-40",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-41",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-42",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-43",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-44",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-45",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-46",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-47",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-48",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-49",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-50",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-51",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-52",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-53",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-54",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-55",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-56",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-57",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-58",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-59",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-60",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-61",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-62",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-63",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-64",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-65",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-66",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-67",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-68",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-69",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-70",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-71",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-72",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-73",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-74",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-75",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-76",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-77",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-78",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-79",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-80",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-81",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-82",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-83",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-84",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-85",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-86",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-87",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-88",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-89",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-90",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-91",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-92",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-93",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-94",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-95",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-96",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-97",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-98",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-99",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-100",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-101",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-102",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-103",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-104",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-105",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-106",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-107",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-108",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-109",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-110",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-111",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-112",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-113",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-114",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-115",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-116",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-117",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-118",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-119",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-120",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-121",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-122",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-123",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-124",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-125",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-126",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-127",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-128",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-129",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-130",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-131",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-132",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-133",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-134",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-135",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-136",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-137",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-138",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-139",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-140",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-141",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-142",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-143",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-144",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-145",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-146",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-147",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-148",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-149",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-150",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-151",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-152",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-153",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-154",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-155",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-156",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-157",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-158",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-159",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-160",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-161",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-162",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-163",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-164",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-165",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-166",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-167",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-168",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-169",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-170",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-171",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-172",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-173",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-174",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-175",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-176",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-177",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-178",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-179",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-180",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-181",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-182",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-183",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-184",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-185",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-186",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-187",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-188",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-189",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-190",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-191",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-192",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-193",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-194",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-195",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-196",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-197",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-198",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-199",
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
      configurationId: "ruud-ultra-series-central-ducted-cfg-200",
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
      configurationId: "ruud-classic-plus-wall-single-cfg-1",
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
      configurationId: "ruud-classic-plus-wall-single-cfg-2",
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
      configurationId: "ruud-classic-plus-wall-single-cfg-3",
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
      configurationId: "ruud-classic-plus-wall-single-cfg-4",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-1",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-2",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-3",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-4",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-5",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-6",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-7",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-8",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-9",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-10",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-11",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-12",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-13",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-14",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-15",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-16",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-17",
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
      configurationId: "ruud-achiever-plus-central-ducted-cfg-18",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-1",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-2",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-3",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-4",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-5",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-6",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-7",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-8",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-9",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-10",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-11",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-12",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-13",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-14",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-15",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-16",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-17",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-18",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-19",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-20",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-21",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-22",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-23",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-24",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-25",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-26",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-27",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-28",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-29",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-30",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-31",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-32",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-33",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-34",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-35",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-36",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-37",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-38",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-39",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-40",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-41",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-42",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-43",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-44",
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
      configurationId: "ruud-f-series-plus-central-ducted-cfg-45",
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
      configurationId: "ruud-f-series-central-ducted-cfg-1",
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
      configurationId: "ruud-f-series-central-ducted-cfg-2",
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
      configurationId: "ruud-f-series-central-ducted-cfg-3",
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
      configurationId: "ruud-f-series-central-ducted-cfg-4",
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
      configurationId: "ruud-f-series-central-ducted-cfg-5",
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
      configurationId: "ruud-f-series-central-ducted-cfg-6",
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
      configurationId: "ruud-f-series-central-ducted-cfg-7",
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
      configurationId: "ruud-f-series-central-ducted-cfg-8",
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
      configurationId: "ruud-f-series-central-ducted-cfg-9",
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
      configurationId: "ruud-f-series-central-ducted-cfg-10",
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
      configurationId: "ruud-f-series-central-ducted-cfg-11",
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
      configurationId: "ruud-f-series-central-ducted-cfg-12",
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
      configurationId: "ruud-f-series-central-ducted-cfg-13",
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
      configurationId: "ruud-f-series-central-ducted-cfg-14",
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
      configurationId: "ruud-f-series-central-ducted-cfg-15",
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
      configurationId: "ruud-f-series-central-ducted-cfg-16",
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
      configurationId: "ruud-f-series-central-ducted-cfg-17",
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
      configurationId: "ruud-f-series-central-ducted-cfg-18",
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
      configurationId: "ruud-f-series-central-ducted-cfg-19",
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
      configurationId: "ruud-f-series-central-ducted-cfg-20",
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
      configurationId: "ruud-f-series-central-ducted-cfg-21",
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
      configurationId: "ruud-f-series-central-ducted-cfg-22",
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
      configurationId: "ruud-f-series-central-ducted-cfg-23",
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
      configurationId: "ruud-f-series-central-ducted-cfg-24",
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
      configurationId: "ruud-f-series-central-ducted-cfg-25",
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
      configurationId: "ruud-f-series-central-ducted-cfg-26",
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
      configurationId: "ruud-f-series-central-ducted-cfg-27",
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
      configurationId: "ruud-f-series-central-ducted-cfg-28",
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
      configurationId: "ruud-f-series-central-ducted-cfg-29",
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
      configurationId: "ruud-f-series-central-ducted-cfg-30",
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
      configurationId: "ruud-f-series-central-ducted-cfg-31",
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
      configurationId: "ruud-f-series-central-ducted-cfg-32",
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
      configurationId: "ruud-f-series-central-ducted-cfg-33",
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
      configurationId: "ruud-f-series-central-ducted-cfg-34",
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
      configurationId: "ruud-f-series-central-ducted-cfg-35",
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
      configurationId: "ruud-f-series-central-ducted-cfg-36",
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
      configurationId: "ruud-f-series-central-ducted-cfg-37",
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
      configurationId: "ruud-f-series-central-ducted-cfg-38",
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
      configurationId: "ruud-f-series-central-ducted-cfg-39",
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
      configurationId: "ruud-f-series-central-ducted-cfg-40",
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
      configurationId: "ruud-f-series-central-ducted-cfg-41",
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
      configurationId: "ruud-f-series-central-ducted-cfg-42",
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
      configurationId: "ruud-f-series-central-ducted-cfg-43",
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
      configurationId: "ruud-f-series-central-ducted-cfg-44",
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
      configurationId: "ruud-f-series-central-ducted-cfg-45",
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
      configurationId: "ruud-f-series-central-ducted-cfg-46",
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
      configurationId: "ruud-f-series-central-ducted-cfg-47",
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
      configurationId: "ruud-f-series-central-ducted-cfg-48",
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
      configurationId: "ruud-f-series-central-ducted-cfg-49",
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
      configurationId: "ruud-f-series-central-ducted-cfg-50",
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
      configurationId: "ruud-f-series-central-ducted-cfg-51",
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
      configurationId: "ruud-f-series-central-ducted-cfg-52",
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
      configurationId: "ruud-f-series-central-ducted-cfg-53",
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
      configurationId: "ruud-f-series-central-ducted-cfg-54",
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
      configurationId: "ruud-f-series-central-ducted-cfg-55",
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
      configurationId: "ruud-f-series-central-ducted-cfg-56",
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
      configurationId: "ruud-f-series-central-ducted-cfg-57",
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
      configurationId: "ruud-f-series-central-ducted-cfg-58",
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
      configurationId: "ruud-f-series-central-ducted-cfg-59",
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
      configurationId: "ruud-f-series-central-ducted-cfg-60",
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
      configurationId: "ruud-f-series-central-ducted-cfg-61",
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
      configurationId: "ruud-f-series-central-ducted-cfg-62",
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
      configurationId: "ruud-f-series-central-ducted-cfg-63",
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
      configurationId: "ruud-f-series-central-ducted-cfg-64",
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
      configurationId: "ruud-f-series-central-ducted-cfg-65",
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
      configurationId: "ruud-f-series-central-ducted-cfg-66",
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
      configurationId: "ruud-f-series-central-ducted-cfg-67",
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
      configurationId: "ruud-f-series-central-ducted-cfg-68",
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
      configurationId: "ruud-f-series-central-ducted-cfg-69",
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
      configurationId: "ruud-f-series-central-ducted-cfg-70",
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
      configurationId: "ruud-f-series-central-ducted-cfg-71",
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
      configurationId: "ruud-f-series-central-ducted-cfg-72",
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
      configurationId: "ruud-f-series-central-ducted-cfg-73",
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
      configurationId: "ruud-f-series-central-ducted-cfg-74",
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
      configurationId: "ruud-f-series-central-ducted-cfg-75",
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
      configurationId: "ruud-f-series-central-ducted-cfg-76",
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
      configurationId: "ruud-f-series-central-ducted-cfg-77",
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
      configurationId: "ruud-f-series-central-ducted-cfg-78",
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
      configurationId: "ruud-f-series-central-ducted-cfg-79",
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
      configurationId: "ruud-f-series-central-ducted-cfg-80",
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
      configurationId: "ruud-f-series-central-ducted-cfg-81",
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
      configurationId: "ruud-f-series-central-ducted-cfg-82",
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
      configurationId: "ruud-f-series-central-ducted-cfg-83",
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
      configurationId: "ruud-f-series-central-ducted-cfg-84",
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
      configurationId: "ruud-f-series-central-ducted-cfg-85",
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
      configurationId: "ruud-f-series-central-ducted-cfg-86",
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
      configurationId: "ruud-f-series-central-ducted-cfg-87",
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
      configurationId: "ruud-f-series-central-ducted-cfg-88",
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
      configurationId: "ruud-f-series-central-ducted-cfg-89",
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
      configurationId: "ruud-f-series-central-ducted-cfg-90",
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
      configurationId: "ruud-f-series-central-ducted-cfg-91",
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
      configurationId: "ruud-f-series-central-ducted-cfg-92",
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
      configurationId: "ruud-f-series-central-ducted-cfg-93",
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
      configurationId: "ruud-f-series-central-ducted-cfg-94",
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
      configurationId: "ruud-f-series-central-ducted-cfg-95",
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
      configurationId: "ruud-f-series-central-ducted-cfg-96",
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
      configurationId: "ruud-f-series-central-ducted-cfg-97",
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
      configurationId: "ruud-f-series-central-ducted-cfg-98",
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
      configurationId: "ruud-f-series-central-ducted-cfg-99",
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
      configurationId: "ruud-f-series-central-ducted-cfg-100",
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
      configurationId: "ruud-f-series-central-ducted-cfg-101",
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
      configurationId: "ruud-f-series-central-ducted-cfg-102",
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
      configurationId: "ruud-f-series-central-ducted-cfg-103",
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
      configurationId: "ruud-f-series-central-ducted-cfg-104",
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
      configurationId: "ruud-f-series-central-ducted-cfg-105",
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
      configurationId: "ruud-f-series-central-ducted-cfg-106",
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
      configurationId: "ruud-f-series-central-ducted-cfg-107",
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
      configurationId: "ruud-f-series-central-ducted-cfg-108",
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
      configurationId: "ruud-f-series-central-ducted-cfg-109",
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
      configurationId: "ruud-f-series-central-ducted-cfg-110",
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
      configurationId: "ruud-f-series-central-ducted-cfg-111",
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
      configurationId: "ruud-f-series-central-ducted-cfg-112",
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
      configurationId: "ruud-f-series-central-ducted-cfg-113",
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
      configurationId: "ruud-f-series-central-ducted-cfg-114",
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
      configurationId: "ruud-f-series-central-ducted-cfg-115",
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
      configurationId: "ruud-f-series-central-ducted-cfg-116",
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
      configurationId: "ruud-f-series-central-ducted-cfg-117",
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
      configurationId: "ruud-f-series-central-ducted-cfg-118",
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
      configurationId: "ruud-f-series-central-ducted-cfg-119",
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
      configurationId: "ruud-f-series-central-ducted-cfg-120",
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
      configurationId: "ruud-f-series-central-ducted-cfg-121",
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
      configurationId: "ruud-f-series-central-ducted-cfg-122",
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
      configurationId: "ruud-f-series-central-ducted-cfg-123",
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
      configurationId: "ruud-f-series-central-ducted-cfg-124",
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
      configurationId: "ruud-f-series-central-ducted-cfg-125",
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
      configurationId: "ruud-f-series-central-ducted-cfg-126",
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
      configurationId: "ruud-f-series-central-ducted-cfg-127",
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
      configurationId: "ruud-f-series-central-ducted-cfg-128",
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
      configurationId: "ruud-f-series-central-ducted-cfg-129",
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
      configurationId: "ruud-f-series-central-ducted-cfg-130",
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
      configurationId: "ruud-f-series-central-ducted-cfg-131",
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
      configurationId: "ruud-f-series-central-ducted-cfg-132",
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
      configurationId: "ruud-k-series-central-ducted-cfg-1",
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
      configurationId: "ruud-k-series-central-ducted-cfg-2",
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
      configurationId: "ruud-k-series-central-ducted-cfg-3",
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
      configurationId: "ruud-k-series-central-ducted-cfg-4",
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
      configurationId: "ruud-k-series-central-ducted-cfg-5",
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
      configurationId: "ruud-k-series-central-ducted-cfg-6",
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
      configurationId: "ruud-k-series-central-ducted-cfg-7",
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
      configurationId: "ruud-k-series-central-ducted-cfg-8",
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
      configurationId: "ruud-k-series-central-ducted-cfg-9",
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
      configurationId: "ruud-k-series-central-ducted-cfg-10",
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
      configurationId: "ruud-k-series-central-ducted-cfg-11",
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
      configurationId: "ruud-k-series-central-ducted-cfg-12",
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
      configurationId: "ruud-k-series-central-ducted-cfg-13",
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
      configurationId: "ruud-k-series-central-ducted-cfg-14",
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
      configurationId: "ruud-k-series-central-ducted-cfg-15",
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
      configurationId: "ruud-k-series-central-ducted-cfg-16",
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
      configurationId: "ruud-k-series-central-ducted-cfg-17",
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
      configurationId: "ruud-k-series-central-ducted-cfg-18",
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
      configurationId: "ruud-k-series-central-ducted-cfg-19",
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
      configurationId: "ruud-k-series-central-ducted-cfg-20",
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
      configurationId: "ruud-k-series-central-ducted-cfg-21",
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
      configurationId: "ruud-k-series-central-ducted-cfg-22",
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
      configurationId: "ruud-k-series-central-ducted-cfg-23",
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
      configurationId: "ruud-k-series-central-ducted-cfg-24",
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
      configurationId: "ruud-k-series-central-ducted-cfg-25",
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
      configurationId: "ruud-k-series-central-ducted-cfg-26",
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
      configurationId: "ruud-k-series-central-ducted-cfg-27",
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
      configurationId: "ruud-k-series-central-ducted-cfg-28",
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
      configurationId: "ruud-k-series-central-ducted-cfg-29",
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
      configurationId: "ruud-k-series-central-ducted-cfg-30",
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
      configurationId: "ruud-k-series-central-ducted-cfg-31",
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
      configurationId: "ruud-k-series-central-ducted-cfg-32",
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
      configurationId: "ruud-k-series-central-ducted-cfg-33",
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
      configurationId: "ruud-k-series-central-ducted-cfg-34",
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
      configurationId: "ruud-k-series-central-ducted-cfg-35",
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
      configurationId: "ruud-k-series-central-ducted-cfg-36",
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
      configurationId: "ruud-k-series-central-ducted-cfg-37",
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
      configurationId: "ruud-k-series-central-ducted-cfg-38",
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
      configurationId: "ruud-k-series-central-ducted-cfg-39",
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
      configurationId: "ruud-k-series-central-ducted-cfg-40",
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
      configurationId: "ruud-k-series-central-ducted-cfg-41",
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
      configurationId: "ruud-k-series-central-ducted-cfg-42",
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
      configurationId: "ruud-k-series-central-ducted-cfg-43",
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
      configurationId: "ruud-k-series-central-ducted-cfg-44",
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
      configurationId: "ruud-k-series-central-ducted-cfg-45",
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
      configurationId: "ruud-k-series-central-ducted-cfg-46",
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
      configurationId: "ruud-k-series-central-ducted-cfg-47",
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
      configurationId: "ruud-k-series-central-ducted-cfg-48",
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
      configurationId: "ruud-k-series-central-ducted-cfg-49",
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
      configurationId: "ruud-k-series-central-ducted-cfg-50",
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
      configurationId: "ruud-k-series-central-ducted-cfg-51",
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
      configurationId: "ruud-k-series-central-ducted-cfg-52",
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
      configurationId: "ruud-k-series-central-ducted-cfg-53",
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
      configurationId: "ruud-k-series-central-ducted-cfg-54",
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
      configurationId: "ruud-k-series-central-ducted-cfg-55",
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
      configurationId: "ruud-k-series-central-ducted-cfg-56",
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
      configurationId: "ruud-k-series-central-ducted-cfg-57",
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
      configurationId: "ruud-k-series-central-ducted-cfg-58",
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
      configurationId: "ruud-k-series-central-ducted-cfg-59",
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
      configurationId: "ruud-k-series-central-ducted-cfg-60",
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
      configurationId: "ruud-k-series-central-ducted-cfg-61",
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
      configurationId: "ruud-k-series-central-ducted-cfg-62",
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
      configurationId: "ruud-k-series-central-ducted-cfg-63",
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
      configurationId: "ruud-k-series-central-ducted-cfg-64",
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
      configurationId: "ruud-k-series-central-ducted-cfg-65",
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
      configurationId: "ruud-k-series-central-ducted-cfg-66",
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
      configurationId: "ruud-k-series-central-ducted-cfg-67",
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
      configurationId: "ruud-k-series-central-ducted-cfg-68",
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
      configurationId: "ruud-k-series-central-ducted-cfg-69",
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
      configurationId: "ruud-k-series-central-ducted-cfg-70",
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
      configurationId: "ruud-k-series-central-ducted-cfg-71",
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
      configurationId: "ruud-k-series-central-ducted-cfg-72",
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
      configurationId: "ruud-k-series-central-ducted-cfg-73",
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
      configurationId: "ruud-k-series-central-ducted-cfg-74",
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
      configurationId: "ruud-k-series-central-ducted-cfg-75",
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
      configurationId: "ruud-k-series-central-ducted-cfg-76",
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
      configurationId: "ruud-k-series-central-ducted-cfg-77",
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
      configurationId: "ruud-k-series-central-ducted-cfg-78",
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
      configurationId: "ruud-k-series-central-ducted-cfg-79",
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
      configurationId: "ruud-k-series-central-ducted-cfg-80",
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
      configurationId: "ruud-k-series-central-ducted-cfg-81",
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
      configurationId: "ruud-k-series-central-ducted-cfg-82",
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
      configurationId: "ruud-k-series-central-ducted-cfg-83",
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
      configurationId: "ruud-k-series-central-ducted-cfg-84",
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
      configurationId: "ruud-k-series-central-ducted-cfg-85",
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
      configurationId: "ruud-k-series-central-ducted-cfg-86",
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
      configurationId: "ruud-k-series-central-ducted-cfg-87",
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
      configurationId: "ruud-k-series-central-ducted-cfg-88",
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
      configurationId: "ruud-k-series-central-ducted-cfg-89",
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
      configurationId: "ruud-k-series-central-ducted-cfg-90",
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
      configurationId: "ruud-k-series-central-ducted-cfg-91",
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
      configurationId: "ruud-k-series-central-ducted-cfg-92",
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
      configurationId: "ruud-k-series-central-ducted-cfg-93",
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
      configurationId: "ruud-k-series-central-ducted-cfg-94",
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
      configurationId: "ruud-k-series-central-ducted-cfg-95",
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
      configurationId: "ruud-k-series-central-ducted-cfg-96",
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
      configurationId: "ruud-k-series-central-ducted-cfg-97",
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
      configurationId: "ruud-k-series-central-ducted-cfg-98",
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
      configurationId: "ruud-k-series-central-ducted-cfg-99",
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
      configurationId: "ruud-k-series-central-ducted-cfg-100",
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
      configurationId: "ruud-k-series-central-ducted-cfg-101",
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
      configurationId: "ruud-k-series-central-ducted-cfg-102",
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
      configurationId: "ruud-k-series-central-ducted-cfg-103",
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
      configurationId: "ruud-k-series-central-ducted-cfg-104",
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
      configurationId: "ruud-k-series-central-ducted-cfg-105",
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
      configurationId: "ruud-k-series-central-ducted-cfg-106",
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
      configurationId: "ruud-k-series-central-ducted-cfg-107",
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
      configurationId: "ruud-k-series-central-ducted-cfg-108",
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
      configurationId: "ruud-k-series-central-ducted-cfg-109",
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
      configurationId: "ruud-k-series-central-ducted-cfg-110",
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
      configurationId: "ruud-k-series-central-ducted-cfg-111",
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
      configurationId: "ruud-k-series-central-ducted-cfg-112",
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
      configurationId: "ruud-k-series-central-ducted-cfg-113",
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
      configurationId: "ruud-k-series-central-ducted-cfg-114",
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
      configurationId: "ruud-k-series-central-ducted-cfg-115",
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
      configurationId: "ruud-k-series-central-ducted-cfg-116",
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
      configurationId: "ruud-k-series-central-ducted-cfg-117",
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
      configurationId: "ruud-k-series-central-ducted-cfg-118",
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
      configurationId: "ruud-k-series-central-ducted-cfg-119",
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
      configurationId: "ruud-k-series-central-ducted-cfg-120",
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
      configurationId: "ruud-k-series-central-ducted-cfg-121",
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
      configurationId: "ruud-k-series-central-ducted-cfg-122",
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
      configurationId: "ruud-k-series-central-ducted-cfg-123",
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
      configurationId: "ruud-floating-air-acheiver-wall-single-cfg-1",
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
      configurationId: "ruud-floating-air-acheiver-wall-single-cfg-2",
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
      configurationId: "ruud-floating-air-achiever-plus-wall-single-cfg-1",
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
      configurationId: "ruud-floating-air-achiever-plus-wall-single-cfg-2",
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
      configurationId: "ruud-floating-air-achiever-plus-wall-single-cfg-3",
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
      configurationId: "ruud-floating-air-achiever-plus-wall-single-cfg-4",
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
      configurationId: "ruud-floating-air-achiever-plus-wall-single-cfg-5",
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
      configurationId: "ruud-floating-air-achiever-plus-wall-single-cfg-6",
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
      configurationId: "ruud-ultra-central-ducted-cfg-1",
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
      configurationId: "ruud-ultra-central-ducted-cfg-2",
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
      configurationId: "ruud-ultra-central-ducted-cfg-3",
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
      configurationId: "ruud-ultra-central-ducted-cfg-4",
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
      configurationId: "ruud-ultra-central-ducted-cfg-5",
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
      configurationId: "ruud-ultra-central-ducted-cfg-6",
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
      configurationId: "ruud-ultra-central-ducted-cfg-7",
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
      configurationId: "ruud-ultra-central-ducted-cfg-8",
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
      configurationId: "ruud-ultra-central-ducted-cfg-9",
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
      configurationId: "ruud-ultra-central-ducted-cfg-10",
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
      configurationId: "ruud-ultra-central-ducted-cfg-11",
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
      configurationId: "ruud-ultra-central-ducted-cfg-12",
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
      configurationId: "ruud-ultra-central-ducted-cfg-13",
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
      configurationId: "ruud-ultra-central-ducted-cfg-14",
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
      configurationId: "ruud-ultra-central-ducted-cfg-15",
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
      configurationId: "ruud-ultra-central-ducted-cfg-16",
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
      configurationId: "ruud-ultra-central-ducted-cfg-17",
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
      configurationId: "ruud-ultra-central-ducted-cfg-18",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-1",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-2",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-3",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-4",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-5",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-6",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-7",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-8",
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
      configurationId: "ruud-floating-air-ultra-wall-single-cfg-9",
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
