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
      id: "rheem-standard-wall-single",
      slug: "rheem-standard-wall-single",
      name: "Standard",
      seriesId: "rheem-standard",
      brandId: "rheem",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6200,
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
      id: "rheem-standard-central-ducted",
      slug: "rheem-standard-central-ducted",
      name: "Standard",
      seriesId: "rheem-standard",
      brandId: "rheem",
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
      id: "rheem-prestige-series-central-ducted",
      slug: "rheem-prestige-series-central-ducted",
      name: "PRESTIGE SERIES",
      seriesId: "rheem-prestige-series",
      brandId: "rheem",
      modelNumber: "PRESTIGE SERIES",
      normalizedModelNumber: "prestige-series",
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
      id: "rheem-classic-plus-wall-single",
      slug: "rheem-classic-plus-wall-single",
      name: "Classic Plus",
      seriesId: "rheem-classic-plus",
      brandId: "rheem",
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
      id: "rheem-classic-plus-central-ducted",
      slug: "rheem-classic-plus-central-ducted",
      name: "CLASSIC PLUS",
      seriesId: "rheem-classic-plus",
      brandId: "rheem",
      modelNumber: "CLASSIC PLUS",
      normalizedModelNumber: "classic-plus",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "rheem-f-series-plus-central-ducted",
      slug: "rheem-f-series-plus-central-ducted",
      name: "F - SERIES PLUS",
      seriesId: "rheem-f-series-plus",
      brandId: "rheem",
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
      id: "rheem-f-series-central-ducted",
      slug: "rheem-f-series-central-ducted",
      name: "F Series",
      seriesId: "rheem-f-series",
      brandId: "rheem",
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
      id: "rheem-k-series-central-ducted",
      slug: "rheem-k-series-central-ducted",
      name: "K-SERIES",
      seriesId: "rheem-k-series",
      brandId: "rheem",
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
      id: "rheem-floating-air-classic-wall-single",
      slug: "rheem-floating-air-classic-wall-single",
      name: "Floating Air Classic",
      seriesId: "rheem-floating-air-classic",
      brandId: "rheem",
      modelNumber: "Floating Air Classic",
      normalizedModelNumber: "floating-air-classic",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "rheem-floating-air-select-wall-single",
      slug: "rheem-floating-air-select-wall-single",
      name: "Floating  Air Select",
      seriesId: "rheem-floating-air-select",
      brandId: "rheem",
      modelNumber: "Floating  Air Select",
      normalizedModelNumber: "floating-air-select",
      isActive2026: true,
      thermomatchEligible: true,
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
      id: "rheem-floating-air-pro-wall-single",
      slug: "rheem-floating-air-pro-wall-single",
      name: "Floating Air Pro",
      seriesId: "rheem-floating-air-pro",
      brandId: "rheem",
      modelNumber: "Floating Air Pro",
      normalizedModelNumber: "floating-air-pro",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 9500,
      heatingCapacity5FMaxBtu: 18000,
      seer2Min: 21,
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
      id: "rheem-floating-air-classic-plus-wall-single",
      slug: "rheem-floating-air-classic-plus-wall-single",
      name: "Floating Air Classic Plus",
      seriesId: "rheem-floating-air-classic-plus",
      brandId: "rheem",
      modelNumber: "Floating Air Classic Plus",
      normalizedModelNumber: "floating-air-classic-plus",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 22,
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
      id: "rheem-floating-air-prestige-wall-single",
      slug: "rheem-floating-air-prestige-wall-single",
      name: "Floating Air Prestige",
      seriesId: "rheem-floating-air-prestige",
      brandId: "rheem",
      modelNumber: "Floating Air Prestige",
      normalizedModelNumber: "floating-air-prestige",
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
      id: "rheem-rosh09afwj",
      modelNumber: "ROSH09AFWJ",
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
      id: "rheem-rosh18asj",
      modelNumber: "ROSH18ASJ",
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
      id: "rheem-rosh12ahwj",
      modelNumber: "ROSH12AHWJ",
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
      id: "rheem-rosh09ahwj",
      modelNumber: "ROSH09AHWJ",
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
      id: "rheem-rosh24axfwj",
      modelNumber: "ROSH24AXFWJ",
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
      id: "rheem-rosh09ahhj",
      modelNumber: "ROSH09AHHJ",
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
      id: "rheem-rosh15ahhj",
      modelNumber: "ROSH15AHHJ",
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
      id: "rheem-rosh24ahxhj",
      modelNumber: "ROSH24AHXHJ",
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
      id: "rheem-rosh09affhj",
      modelNumber: "ROSH09AFFHJ",
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
      id: "rheem-rosh15affhj",
      modelNumber: "ROSH15AFFHJ",
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
      id: "rheem-rosh12affj",
      modelNumber: "ROSH12AFFJ",
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
      id: "rheem-rosh09afcj",
      modelNumber: "ROSH09AFCJ",
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
      id: "rheem-romh24fxzhj",
      modelNumber: "ROMH24FXZHJ",
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
      id: "rheem-rp2048bjv",
      modelNumber: "RP2048BJV",
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
      id: "rheem-rosh18vgsn",
      modelNumber: "ROSH18VGSN",
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
      id: "rheem-rosh30vgsn",
      modelNumber: "ROSH30VGSN",
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
      id: "rheem-rp1724hjvxa",
      modelNumber: "RP1724HJVXA",
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
      id: "rheem-rp1736hjvxa",
      modelNumber: "RP1736HJVXA",
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
      id: "rheem-rosh09bfwj",
      modelNumber: "ROSH09BFWJ",
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
      id: "rheem-rp18az48ajvc",
      modelNumber: "RP18AZ48AJVC",
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
      id: "rheem-ro1hfz09aj2s",
      modelNumber: "RO1HFZ09AJ2S",
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
      id: "rheem-ro1hfz15aj2s",
      modelNumber: "RO1HFZ15AJ2S",
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
      id: "rheem-ro1hfz12aj2h",
      modelNumber: "RO1HFZ12AJ2H",
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
      id: "rheem-ro1hfz18aj2h",
      modelNumber: "RO1HFZ18AJ2H",
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
      id: "rheem-ro1hfz30aj2h",
      modelNumber: "RO1HFZ30AJ2H",
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
      id: "rheem-ro1hhz12aj3s",
      modelNumber: "RO1HHZ12AJ3S",
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
      id: "rheem-ro1hhz18aj2s",
      modelNumber: "RO1HHZ18AJ2S",
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
      id: "rheem-ro1hhz18aj3s",
      modelNumber: "RO1HHZ18AJ3S",
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
      id: "rheem-ro1hhz09aj2s",
      modelNumber: "RO1HHZ09AJ2S",
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
      id: "rheem-ro1hhz09aj8s",
      modelNumber: "RO1HHZ09AJ8S",
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
      id: "rheem-ro1hhz18aj8s",
      modelNumber: "RO1HHZ18AJ8S",
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
      id: "rheem-ro1hgz48aj8s",
      modelNumber: "RO1HGZ48AJ8S",
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
      id: "rheem-rd16az48ajvua",
      modelNumber: "RD16AZ48AJVUA",
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
      id: "rheem-ro4hfz36aj1h",
      modelNumber: "RO4HFZ36AJ1H",
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
      id: "rheem-ro1hhz30aj8s",
      modelNumber: "RO1HHZ30AJ8S",
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
      id: "rheem-rd16az24ajvua",
      modelNumber: "RD16AZ24AJVUA",
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
      id: "rheem-fshsr12b1c",
      modelNumber: "FSHSR12B1C",
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
      id: "rheem-rd16ay36ajvc",
      modelNumber: "RD16AY36AJVC",
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
      id: "rheem-rd17az60aj3n",
      modelNumber: "RD17AZ60AJ3N",
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
      id: "rheem-rd17az48aj3n",
      modelNumber: "RD17AZ48AJ3N",
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
      id: "rheem-rp19ay48ajvc",
      modelNumber: "RP19AY48AJVC",
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
      id: "rheem-rd18ay60ajvc",
      modelNumber: "RD18AY60AJVC",
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
      id: "rheem-fphsr18a3d",
      modelNumber: "FPHSR18A3D",
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
      id: "rheem-fphsr09a3d",
      modelNumber: "FPHSR09A3D",
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
      id: "rheem-fphsr24a3d",
      modelNumber: "FPHSR24A3D",
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

  ],
  configurations: [
    {
      id: "rheem-standard-wall-single-cfg-1",
      slug: "rheem-standard-wall-single-cfg-1",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh09afwj",
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
      id: "rheem-standard-wall-single-cfg-2",
      slug: "rheem-standard-wall-single-cfg-2",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh12afwj",
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
      id: "rheem-standard-wall-single-cfg-3",
      slug: "rheem-standard-wall-single-cfg-3",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh18asj",
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
      id: "rheem-standard-wall-single-cfg-4",
      slug: "rheem-standard-wall-single-cfg-4",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh24asj",
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
      id: "rheem-standard-wall-single-cfg-5",
      slug: "rheem-standard-wall-single-cfg-5",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh12ahwj",
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
      id: "rheem-standard-wall-single-cfg-6",
      slug: "rheem-standard-wall-single-cfg-6",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh15ahwj",
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
      id: "rheem-standard-wall-single-cfg-7",
      slug: "rheem-standard-wall-single-cfg-7",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh09ahwj",
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
      id: "rheem-standard-wall-single-cfg-8",
      slug: "rheem-standard-wall-single-cfg-8",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh18axfwj",
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
      id: "rheem-standard-wall-single-cfg-9",
      slug: "rheem-standard-wall-single-cfg-9",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh24axfwj",
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
      id: "rheem-standard-wall-single-cfg-10",
      slug: "rheem-standard-wall-single-cfg-10",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh45afxzj",
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
      id: "rheem-standard-wall-single-cfg-11",
      slug: "rheem-standard-wall-single-cfg-11",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh09ahhj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9007,
      coolingCapacityMaxBtu: 9007,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-cfg-12",
      slug: "rheem-standard-wall-single-cfg-12",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh12ahhj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12010,
      coolingCapacityMaxBtu: 12010,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-cfg-13",
      slug: "rheem-standard-wall-single-cfg-13",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh15ahhj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 14501,
      coolingCapacityMaxBtu: 14501,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-cfg-14",
      slug: "rheem-standard-wall-single-cfg-14",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh18ahxhj",
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
      id: "rheem-standard-wall-single-cfg-15",
      slug: "rheem-standard-wall-single-cfg-15",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh24ahxhj",
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
      id: "rheem-standard-wall-single-cfg-16",
      slug: "rheem-standard-wall-single-cfg-16",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh30ahxhj",
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
      id: "rheem-standard-wall-single-cfg-17",
      slug: "rheem-standard-wall-single-cfg-17",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh09affhj",
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
      id: "rheem-standard-wall-single-cfg-18",
      slug: "rheem-standard-wall-single-cfg-18",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh12affhj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12010,
      coolingCapacityMaxBtu: 12010,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-cfg-19",
      slug: "rheem-standard-wall-single-cfg-19",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh15affhj",
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
      id: "rheem-standard-wall-single-cfg-20",
      slug: "rheem-standard-wall-single-cfg-20",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh09affj",
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
      id: "rheem-standard-wall-single-cfg-21",
      slug: "rheem-standard-wall-single-cfg-21",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh12affj",
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
      id: "rheem-standard-wall-single-cfg-22",
      slug: "rheem-standard-wall-single-cfg-22",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh15affj",
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
      id: "rheem-standard-wall-single-cfg-23",
      slug: "rheem-standard-wall-single-cfg-23",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh09afcj",
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
      id: "rheem-standard-wall-single-cfg-24",
      slug: "rheem-standard-wall-single-cfg-24",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh12afcj",
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
      id: "rheem-standard-wall-single-cfg-25",
      slug: "rheem-standard-wall-single-cfg-25",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh18afcj",
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
      id: "rheem-standard-wall-single-cfg-26",
      slug: "rheem-standard-wall-single-cfg-26",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh09afcj",
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
      id: "rheem-standard-wall-single-cfg-27",
      slug: "rheem-standard-wall-single-cfg-27",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh12afcj",
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
      id: "rheem-standard-wall-single-cfg-28",
      slug: "rheem-standard-wall-single-cfg-28",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh18afcj",
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
      id: "rheem-standard-wall-single-cfg-29",
      slug: "rheem-standard-wall-single-cfg-29",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh18fxzhj",
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
      id: "rheem-standard-wall-single-cfg-30",
      slug: "rheem-standard-wall-single-cfg-30",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh18fxzhj",
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
      id: "rheem-standard-wall-single-cfg-31",
      slug: "rheem-standard-wall-single-cfg-31",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh18fxzhj",
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
      id: "rheem-standard-wall-single-cfg-32",
      slug: "rheem-standard-wall-single-cfg-32",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh24fxzhj",
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
      id: "rheem-standard-wall-single-cfg-33",
      slug: "rheem-standard-wall-single-cfg-33",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh24fxzhj",
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
      id: "rheem-standard-wall-single-cfg-34",
      slug: "rheem-standard-wall-single-cfg-34",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh24fxzhj",
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
      id: "rheem-standard-wall-single-cfg-35",
      slug: "rheem-standard-wall-single-cfg-35",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh36fxzhj",
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
      id: "rheem-standard-wall-single-cfg-36",
      slug: "rheem-standard-wall-single-cfg-36",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh36fxzhj",
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
      id: "rheem-standard-wall-single-cfg-37",
      slug: "rheem-standard-wall-single-cfg-37",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh36fxzhj",
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
      id: "rheem-standard-wall-single-cfg-38",
      slug: "rheem-standard-wall-single-cfg-38",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh36afxzj",
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
      id: "rheem-standard-wall-single-cfg-39",
      slug: "rheem-standard-wall-single-cfg-39",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh45afxzj",
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
      id: "rheem-standard-wall-single-cfg-40",
      slug: "rheem-standard-wall-single-cfg-40",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-romh45afxzj",
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
      id: "rheem-standard-wall-single-cfg-41",
      slug: "rheem-standard-wall-single-cfg-41",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-wall-single-cfg-42",
      slug: "rheem-standard-wall-single-cfg-42",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp2048bjv",
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
      id: "rheem-standard-wall-single-cfg-43",
      slug: "rheem-standard-wall-single-cfg-43",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-wall-single-cfg-44",
      slug: "rheem-standard-wall-single-cfg-44",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh18vgsn",
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
      id: "rheem-standard-wall-single-cfg-45",
      slug: "rheem-standard-wall-single-cfg-45",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh24vgsn",
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
      id: "rheem-standard-wall-single-cfg-46",
      slug: "rheem-standard-wall-single-cfg-46",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh30vgsn",
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
      id: "rheem-standard-wall-single-cfg-47",
      slug: "rheem-standard-wall-single-cfg-47",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh36vgsn",
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
      id: "rheem-standard-wall-single-cfg-48",
      slug: "rheem-standard-wall-single-cfg-48",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp1724hjvxa",
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
      id: "rheem-standard-wall-single-cfg-49",
      slug: "rheem-standard-wall-single-cfg-49",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp1730hjvxa",
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
      id: "rheem-standard-wall-single-cfg-50",
      slug: "rheem-standard-wall-single-cfg-50",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp1736hjvxa",
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
      id: "rheem-standard-wall-single-cfg-51",
      slug: "rheem-standard-wall-single-cfg-51",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp1748hjvxa",
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
      id: "rheem-standard-wall-single-cfg-52",
      slug: "rheem-standard-wall-single-cfg-52",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh48vgsn",
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
      id: "rheem-standard-wall-single-cfg-53",
      slug: "rheem-standard-wall-single-cfg-53",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh09bfwj",
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
      id: "rheem-standard-wall-single-cfg-54",
      slug: "rheem-standard-wall-single-cfg-54",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rosh12bfwj",
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
      id: "rheem-standard-wall-single-cfg-55",
      slug: "rheem-standard-wall-single-cfg-55",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-wall-single-cfg-56",
      slug: "rheem-standard-wall-single-cfg-56",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-wall-single-cfg-57",
      slug: "rheem-standard-wall-single-cfg-57",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz09aj2s",
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
      id: "rheem-standard-wall-single-cfg-58",
      slug: "rheem-standard-wall-single-cfg-58",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz12aj2s",
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
      id: "rheem-standard-wall-single-cfg-59",
      slug: "rheem-standard-wall-single-cfg-59",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz15aj2s",
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
      id: "rheem-standard-wall-single-cfg-60",
      slug: "rheem-standard-wall-single-cfg-60",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz09aj2h",
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
      id: "rheem-standard-wall-single-cfg-61",
      slug: "rheem-standard-wall-single-cfg-61",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz12aj2h",
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
      id: "rheem-standard-wall-single-cfg-62",
      slug: "rheem-standard-wall-single-cfg-62",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz15aj2h",
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
      id: "rheem-standard-wall-single-cfg-63",
      slug: "rheem-standard-wall-single-cfg-63",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz18aj2h",
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
      id: "rheem-standard-wall-single-cfg-64",
      slug: "rheem-standard-wall-single-cfg-64",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz24aj2h",
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
      id: "rheem-standard-wall-single-cfg-65",
      slug: "rheem-standard-wall-single-cfg-65",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hfz30aj2h",
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
      id: "rheem-standard-wall-single-cfg-66",
      slug: "rheem-standard-wall-single-cfg-66",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz09aj2h",
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
      id: "rheem-standard-wall-single-cfg-67",
      slug: "rheem-standard-wall-single-cfg-67",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz09aj1s",
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
      id: "rheem-standard-wall-single-cfg-68",
      slug: "rheem-standard-wall-single-cfg-68",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz09aj1h",
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
      id: "rheem-standard-wall-single-cfg-69",
      slug: "rheem-standard-wall-single-cfg-69",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz12aj1s",
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
      id: "rheem-standard-wall-single-cfg-70",
      slug: "rheem-standard-wall-single-cfg-70",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz12aj1h",
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
      id: "rheem-standard-wall-single-cfg-71",
      slug: "rheem-standard-wall-single-cfg-71",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz15aj1s",
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
      id: "rheem-standard-wall-single-cfg-72",
      slug: "rheem-standard-wall-single-cfg-72",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz15aj1h",
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
      id: "rheem-standard-wall-single-cfg-73",
      slug: "rheem-standard-wall-single-cfg-73",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz12aj3s",
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
      id: "rheem-standard-wall-single-cfg-74",
      slug: "rheem-standard-wall-single-cfg-74",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz09aj3s",
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
      id: "rheem-standard-wall-single-cfg-75",
      slug: "rheem-standard-wall-single-cfg-75",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz18aj2s",
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
      id: "rheem-standard-wall-single-cfg-76",
      slug: "rheem-standard-wall-single-cfg-76",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz24aj2s",
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
      id: "rheem-standard-wall-single-cfg-77",
      slug: "rheem-standard-wall-single-cfg-77",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz18aj3s",
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
      id: "rheem-standard-wall-single-cfg-78",
      slug: "rheem-standard-wall-single-cfg-78",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz24aj3s",
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
      id: "rheem-standard-wall-single-cfg-79",
      slug: "rheem-standard-wall-single-cfg-79",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz30aj3s",
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
      id: "rheem-standard-wall-single-cfg-80",
      slug: "rheem-standard-wall-single-cfg-80",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz36aj3s",
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
      id: "rheem-standard-wall-single-cfg-81",
      slug: "rheem-standard-wall-single-cfg-81",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz09aj2s",
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
      id: "rheem-standard-wall-single-cfg-82",
      slug: "rheem-standard-wall-single-cfg-82",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz12aj2s",
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
      id: "rheem-standard-wall-single-cfg-83",
      slug: "rheem-standard-wall-single-cfg-83",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz09aj8s",
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
      id: "rheem-standard-wall-single-cfg-84",
      slug: "rheem-standard-wall-single-cfg-84",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz12aj8s",
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
      id: "rheem-standard-wall-single-cfg-85",
      slug: "rheem-standard-wall-single-cfg-85",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz18aj8s",
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
      id: "rheem-standard-wall-single-cfg-86",
      slug: "rheem-standard-wall-single-cfg-86",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz12aj8s",
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
      id: "rheem-standard-wall-single-cfg-87",
      slug: "rheem-standard-wall-single-cfg-87",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz42aj8s",
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
      id: "rheem-standard-wall-single-cfg-88",
      slug: "rheem-standard-wall-single-cfg-88",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz48aj8s",
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
      id: "rheem-standard-wall-single-cfg-89",
      slug: "rheem-standard-wall-single-cfg-89",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hgz48aj8s",
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
      id: "rheem-standard-wall-single-cfg-90",
      slug: "rheem-standard-wall-single-cfg-90",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rd16az36ajvua",
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
      id: "rheem-standard-wall-single-cfg-91",
      slug: "rheem-standard-wall-single-cfg-91",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rd16az48ajvua",
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
      id: "rheem-standard-wall-single-cfg-92",
      slug: "rheem-standard-wall-single-cfg-92",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro5hfz45aj2s",
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
      id: "rheem-standard-wall-single-cfg-93",
      slug: "rheem-standard-wall-single-cfg-93",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro4hfz36aj1h",
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
      id: "rheem-standard-wall-single-cfg-94",
      slug: "rheem-standard-wall-single-cfg-94",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro5hfz45aj2s",
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
      id: "rheem-standard-wall-single-cfg-95",
      slug: "rheem-standard-wall-single-cfg-95",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro4hfz36aj1h",
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
      id: "rheem-standard-wall-single-cfg-96",
      slug: "rheem-standard-wall-single-cfg-96",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz18aj8s",
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
      id: "rheem-standard-wall-single-cfg-97",
      slug: "rheem-standard-wall-single-cfg-97",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz24aj8s",
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
      id: "rheem-standard-wall-single-cfg-98",
      slug: "rheem-standard-wall-single-cfg-98",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz30aj8s",
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
      id: "rheem-standard-wall-single-cfg-99",
      slug: "rheem-standard-wall-single-cfg-99",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz36aj8s",
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
      id: "rheem-standard-wall-single-cfg-100",
      slug: "rheem-standard-wall-single-cfg-100",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz18aj8s",
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
      id: "rheem-standard-wall-single-cfg-101",
      slug: "rheem-standard-wall-single-cfg-101",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz24aj8s",
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
      id: "rheem-standard-wall-single-cfg-102",
      slug: "rheem-standard-wall-single-cfg-102",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz30aj8s",
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
      id: "rheem-standard-wall-single-cfg-103",
      slug: "rheem-standard-wall-single-cfg-103",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz36aj8s",
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
      id: "rheem-standard-wall-single-cfg-104",
      slug: "rheem-standard-wall-single-cfg-104",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz18aj8s",
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
      id: "rheem-standard-wall-single-cfg-105",
      slug: "rheem-standard-wall-single-cfg-105",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz24aj8s",
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
      id: "rheem-standard-wall-single-cfg-106",
      slug: "rheem-standard-wall-single-cfg-106",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz30aj8s",
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
      id: "rheem-standard-wall-single-cfg-107",
      slug: "rheem-standard-wall-single-cfg-107",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-ro1hhz36aj8s",
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
      id: "rheem-standard-wall-single-cfg-108",
      slug: "rheem-standard-wall-single-cfg-108",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rd16az24ajvua",
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
      id: "rheem-standard-wall-single-cfg-109",
      slug: "rheem-standard-wall-single-cfg-109",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rd16az30ajvua",
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
      id: "rheem-standard-wall-single-cfg-110",
      slug: "rheem-standard-wall-single-cfg-110",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rd16az30ajhua",
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
      id: "rheem-standard-wall-single-cfg-111",
      slug: "rheem-standard-wall-single-cfg-111",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rd16az36ajhua",
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
      id: "rheem-standard-wall-single-cfg-112",
      slug: "rheem-standard-wall-single-cfg-112",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rd16az48ajhua",
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
      id: "rheem-standard-wall-single-cfg-113",
      slug: "rheem-standard-wall-single-cfg-113",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rp19ay60ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-standard-wall-single-cfg-114",
      slug: "rheem-standard-wall-single-cfg-114",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-fshsr12b1c",
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
      id: "rheem-standard-wall-single-cfg-115",
      slug: "rheem-standard-wall-single-cfg-115",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-fshsr24b3d",
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
      id: "rheem-standard-wall-single-cfg-116",
      slug: "rheem-standard-wall-single-cfg-116",
      modelId: "rheem-standard-wall-single",
      outdoorUnitId: "rheem-rd16ay36ajvc",
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
      id: "rheem-standard-central-ducted-cfg-1",
      slug: "rheem-standard-central-ducted-cfg-1",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-2",
      slug: "rheem-standard-central-ducted-cfg-2",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-3",
      slug: "rheem-standard-central-ducted-cfg-3",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-4",
      slug: "rheem-standard-central-ducted-cfg-4",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-5",
      slug: "rheem-standard-central-ducted-cfg-5",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-6",
      slug: "rheem-standard-central-ducted-cfg-6",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-7",
      slug: "rheem-standard-central-ducted-cfg-7",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-8",
      slug: "rheem-standard-central-ducted-cfg-8",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-9",
      slug: "rheem-standard-central-ducted-cfg-9",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-10",
      slug: "rheem-standard-central-ducted-cfg-10",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2024bjv",
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
      id: "rheem-standard-central-ducted-cfg-11",
      slug: "rheem-standard-central-ducted-cfg-11",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-12",
      slug: "rheem-standard-central-ducted-cfg-12",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-13",
      slug: "rheem-standard-central-ducted-cfg-13",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-14",
      slug: "rheem-standard-central-ducted-cfg-14",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-15",
      slug: "rheem-standard-central-ducted-cfg-15",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-16",
      slug: "rheem-standard-central-ducted-cfg-16",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-17",
      slug: "rheem-standard-central-ducted-cfg-17",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-18",
      slug: "rheem-standard-central-ducted-cfg-18",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-19",
      slug: "rheem-standard-central-ducted-cfg-19",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-20",
      slug: "rheem-standard-central-ducted-cfg-20",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-21",
      slug: "rheem-standard-central-ducted-cfg-21",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-22",
      slug: "rheem-standard-central-ducted-cfg-22",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-23",
      slug: "rheem-standard-central-ducted-cfg-23",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-24",
      slug: "rheem-standard-central-ducted-cfg-24",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-25",
      slug: "rheem-standard-central-ducted-cfg-25",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2036bjv",
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
      id: "rheem-standard-central-ducted-cfg-26",
      slug: "rheem-standard-central-ducted-cfg-26",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2048bjv",
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
      id: "rheem-standard-central-ducted-cfg-27",
      slug: "rheem-standard-central-ducted-cfg-27",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp2048bjv",
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
      id: "rheem-standard-central-ducted-cfg-28",
      slug: "rheem-standard-central-ducted-cfg-28",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-29",
      slug: "rheem-standard-central-ducted-cfg-29",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-30",
      slug: "rheem-standard-central-ducted-cfg-30",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-31",
      slug: "rheem-standard-central-ducted-cfg-31",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-32",
      slug: "rheem-standard-central-ducted-cfg-32",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-33",
      slug: "rheem-standard-central-ducted-cfg-33",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-34",
      slug: "rheem-standard-central-ducted-cfg-34",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-35",
      slug: "rheem-standard-central-ducted-cfg-35",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-36",
      slug: "rheem-standard-central-ducted-cfg-36",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-37",
      slug: "rheem-standard-central-ducted-cfg-37",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-38",
      slug: "rheem-standard-central-ducted-cfg-38",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-39",
      slug: "rheem-standard-central-ducted-cfg-39",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-40",
      slug: "rheem-standard-central-ducted-cfg-40",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-41",
      slug: "rheem-standard-central-ducted-cfg-41",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-42",
      slug: "rheem-standard-central-ducted-cfg-42",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-43",
      slug: "rheem-standard-central-ducted-cfg-43",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-44",
      slug: "rheem-standard-central-ducted-cfg-44",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-45",
      slug: "rheem-standard-central-ducted-cfg-45",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-46",
      slug: "rheem-standard-central-ducted-cfg-46",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-47",
      slug: "rheem-standard-central-ducted-cfg-47",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-48",
      slug: "rheem-standard-central-ducted-cfg-48",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-49",
      slug: "rheem-standard-central-ducted-cfg-49",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-50",
      slug: "rheem-standard-central-ducted-cfg-50",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-51",
      slug: "rheem-standard-central-ducted-cfg-51",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-52",
      slug: "rheem-standard-central-ducted-cfg-52",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-53",
      slug: "rheem-standard-central-ducted-cfg-53",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-54",
      slug: "rheem-standard-central-ducted-cfg-54",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-55",
      slug: "rheem-standard-central-ducted-cfg-55",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-56",
      slug: "rheem-standard-central-ducted-cfg-56",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-57",
      slug: "rheem-standard-central-ducted-cfg-57",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az48ajvc",
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
      id: "rheem-standard-central-ducted-cfg-58",
      slug: "rheem-standard-central-ducted-cfg-58",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp18az60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-59",
      slug: "rheem-standard-central-ducted-cfg-59",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-60",
      slug: "rheem-standard-central-ducted-cfg-60",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-61",
      slug: "rheem-standard-central-ducted-cfg-61",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-62",
      slug: "rheem-standard-central-ducted-cfg-62",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-63",
      slug: "rheem-standard-central-ducted-cfg-63",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-64",
      slug: "rheem-standard-central-ducted-cfg-64",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-65",
      slug: "rheem-standard-central-ducted-cfg-65",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-66",
      slug: "rheem-standard-central-ducted-cfg-66",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-67",
      slug: "rheem-standard-central-ducted-cfg-67",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-68",
      slug: "rheem-standard-central-ducted-cfg-68",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-standard-central-ducted-cfg-69",
      slug: "rheem-standard-central-ducted-cfg-69",
      modelId: "rheem-standard-central-ducted",
      outdoorUnitId: "rheem-rp19ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-1",
      slug: "rheem-prestige-series-central-ducted-cfg-1",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-2",
      slug: "rheem-prestige-series-central-ducted-cfg-2",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-3",
      slug: "rheem-prestige-series-central-ducted-cfg-3",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-4",
      slug: "rheem-prestige-series-central-ducted-cfg-4",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-5",
      slug: "rheem-prestige-series-central-ducted-cfg-5",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-6",
      slug: "rheem-prestige-series-central-ducted-cfg-6",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-7",
      slug: "rheem-prestige-series-central-ducted-cfg-7",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-8",
      slug: "rheem-prestige-series-central-ducted-cfg-8",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-9",
      slug: "rheem-prestige-series-central-ducted-cfg-9",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-10",
      slug: "rheem-prestige-series-central-ducted-cfg-10",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-11",
      slug: "rheem-prestige-series-central-ducted-cfg-11",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-12",
      slug: "rheem-prestige-series-central-ducted-cfg-12",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-13",
      slug: "rheem-prestige-series-central-ducted-cfg-13",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-14",
      slug: "rheem-prestige-series-central-ducted-cfg-14",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-15",
      slug: "rheem-prestige-series-central-ducted-cfg-15",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-16",
      slug: "rheem-prestige-series-central-ducted-cfg-16",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-17",
      slug: "rheem-prestige-series-central-ducted-cfg-17",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-18",
      slug: "rheem-prestige-series-central-ducted-cfg-18",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-19",
      slug: "rheem-prestige-series-central-ducted-cfg-19",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-20",
      slug: "rheem-prestige-series-central-ducted-cfg-20",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-21",
      slug: "rheem-prestige-series-central-ducted-cfg-21",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-22",
      slug: "rheem-prestige-series-central-ducted-cfg-22",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-23",
      slug: "rheem-prestige-series-central-ducted-cfg-23",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-24",
      slug: "rheem-prestige-series-central-ducted-cfg-24",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-25",
      slug: "rheem-prestige-series-central-ducted-cfg-25",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-26",
      slug: "rheem-prestige-series-central-ducted-cfg-26",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-27",
      slug: "rheem-prestige-series-central-ducted-cfg-27",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-28",
      slug: "rheem-prestige-series-central-ducted-cfg-28",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-29",
      slug: "rheem-prestige-series-central-ducted-cfg-29",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-30",
      slug: "rheem-prestige-series-central-ducted-cfg-30",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-31",
      slug: "rheem-prestige-series-central-ducted-cfg-31",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-32",
      slug: "rheem-prestige-series-central-ducted-cfg-32",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-33",
      slug: "rheem-prestige-series-central-ducted-cfg-33",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-34",
      slug: "rheem-prestige-series-central-ducted-cfg-34",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-35",
      slug: "rheem-prestige-series-central-ducted-cfg-35",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-36",
      slug: "rheem-prestige-series-central-ducted-cfg-36",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-37",
      slug: "rheem-prestige-series-central-ducted-cfg-37",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-38",
      slug: "rheem-prestige-series-central-ducted-cfg-38",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-39",
      slug: "rheem-prestige-series-central-ducted-cfg-39",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-40",
      slug: "rheem-prestige-series-central-ducted-cfg-40",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-41",
      slug: "rheem-prestige-series-central-ducted-cfg-41",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-42",
      slug: "rheem-prestige-series-central-ducted-cfg-42",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-43",
      slug: "rheem-prestige-series-central-ducted-cfg-43",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-44",
      slug: "rheem-prestige-series-central-ducted-cfg-44",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-45",
      slug: "rheem-prestige-series-central-ducted-cfg-45",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-46",
      slug: "rheem-prestige-series-central-ducted-cfg-46",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-47",
      slug: "rheem-prestige-series-central-ducted-cfg-47",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az24ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-48",
      slug: "rheem-prestige-series-central-ducted-cfg-48",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-49",
      slug: "rheem-prestige-series-central-ducted-cfg-49",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp18az36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-50",
      slug: "rheem-prestige-series-central-ducted-cfg-50",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-51",
      slug: "rheem-prestige-series-central-ducted-cfg-51",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-52",
      slug: "rheem-prestige-series-central-ducted-cfg-52",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-53",
      slug: "rheem-prestige-series-central-ducted-cfg-53",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-54",
      slug: "rheem-prestige-series-central-ducted-cfg-54",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-55",
      slug: "rheem-prestige-series-central-ducted-cfg-55",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-56",
      slug: "rheem-prestige-series-central-ducted-cfg-56",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-57",
      slug: "rheem-prestige-series-central-ducted-cfg-57",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-58",
      slug: "rheem-prestige-series-central-ducted-cfg-58",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-59",
      slug: "rheem-prestige-series-central-ducted-cfg-59",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-60",
      slug: "rheem-prestige-series-central-ducted-cfg-60",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-61",
      slug: "rheem-prestige-series-central-ducted-cfg-61",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-62",
      slug: "rheem-prestige-series-central-ducted-cfg-62",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-63",
      slug: "rheem-prestige-series-central-ducted-cfg-63",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-64",
      slug: "rheem-prestige-series-central-ducted-cfg-64",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-65",
      slug: "rheem-prestige-series-central-ducted-cfg-65",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-66",
      slug: "rheem-prestige-series-central-ducted-cfg-66",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-67",
      slug: "rheem-prestige-series-central-ducted-cfg-67",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-68",
      slug: "rheem-prestige-series-central-ducted-cfg-68",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-69",
      slug: "rheem-prestige-series-central-ducted-cfg-69",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-70",
      slug: "rheem-prestige-series-central-ducted-cfg-70",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-71",
      slug: "rheem-prestige-series-central-ducted-cfg-71",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-72",
      slug: "rheem-prestige-series-central-ducted-cfg-72",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-73",
      slug: "rheem-prestige-series-central-ducted-cfg-73",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-74",
      slug: "rheem-prestige-series-central-ducted-cfg-74",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-75",
      slug: "rheem-prestige-series-central-ducted-cfg-75",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-76",
      slug: "rheem-prestige-series-central-ducted-cfg-76",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-77",
      slug: "rheem-prestige-series-central-ducted-cfg-77",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-78",
      slug: "rheem-prestige-series-central-ducted-cfg-78",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-79",
      slug: "rheem-prestige-series-central-ducted-cfg-79",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-80",
      slug: "rheem-prestige-series-central-ducted-cfg-80",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-81",
      slug: "rheem-prestige-series-central-ducted-cfg-81",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-82",
      slug: "rheem-prestige-series-central-ducted-cfg-82",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-83",
      slug: "rheem-prestige-series-central-ducted-cfg-83",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-84",
      slug: "rheem-prestige-series-central-ducted-cfg-84",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-85",
      slug: "rheem-prestige-series-central-ducted-cfg-85",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-86",
      slug: "rheem-prestige-series-central-ducted-cfg-86",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-87",
      slug: "rheem-prestige-series-central-ducted-cfg-87",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-88",
      slug: "rheem-prestige-series-central-ducted-cfg-88",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-prestige-series-central-ducted-cfg-89",
      slug: "rheem-prestige-series-central-ducted-cfg-89",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-90",
      slug: "rheem-prestige-series-central-ducted-cfg-90",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-91",
      slug: "rheem-prestige-series-central-ducted-cfg-91",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-92",
      slug: "rheem-prestige-series-central-ducted-cfg-92",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-93",
      slug: "rheem-prestige-series-central-ducted-cfg-93",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-94",
      slug: "rheem-prestige-series-central-ducted-cfg-94",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-95",
      slug: "rheem-prestige-series-central-ducted-cfg-95",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-96",
      slug: "rheem-prestige-series-central-ducted-cfg-96",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-97",
      slug: "rheem-prestige-series-central-ducted-cfg-97",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-98",
      slug: "rheem-prestige-series-central-ducted-cfg-98",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-99",
      slug: "rheem-prestige-series-central-ducted-cfg-99",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-100",
      slug: "rheem-prestige-series-central-ducted-cfg-100",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-101",
      slug: "rheem-prestige-series-central-ducted-cfg-101",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-102",
      slug: "rheem-prestige-series-central-ducted-cfg-102",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-103",
      slug: "rheem-prestige-series-central-ducted-cfg-103",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-104",
      slug: "rheem-prestige-series-central-ducted-cfg-104",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-105",
      slug: "rheem-prestige-series-central-ducted-cfg-105",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-106",
      slug: "rheem-prestige-series-central-ducted-cfg-106",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-107",
      slug: "rheem-prestige-series-central-ducted-cfg-107",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-108",
      slug: "rheem-prestige-series-central-ducted-cfg-108",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-109",
      slug: "rheem-prestige-series-central-ducted-cfg-109",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-110",
      slug: "rheem-prestige-series-central-ducted-cfg-110",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-111",
      slug: "rheem-prestige-series-central-ducted-cfg-111",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "rheem-prestige-series-central-ducted-cfg-112",
      slug: "rheem-prestige-series-central-ducted-cfg-112",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-113",
      slug: "rheem-prestige-series-central-ducted-cfg-113",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-114",
      slug: "rheem-prestige-series-central-ducted-cfg-114",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-115",
      slug: "rheem-prestige-series-central-ducted-cfg-115",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-116",
      slug: "rheem-prestige-series-central-ducted-cfg-116",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rp19ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-117",
      slug: "rheem-prestige-series-central-ducted-cfg-117",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-118",
      slug: "rheem-prestige-series-central-ducted-cfg-118",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-119",
      slug: "rheem-prestige-series-central-ducted-cfg-119",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-120",
      slug: "rheem-prestige-series-central-ducted-cfg-120",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-121",
      slug: "rheem-prestige-series-central-ducted-cfg-121",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-122",
      slug: "rheem-prestige-series-central-ducted-cfg-122",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-123",
      slug: "rheem-prestige-series-central-ducted-cfg-123",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-124",
      slug: "rheem-prestige-series-central-ducted-cfg-124",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-125",
      slug: "rheem-prestige-series-central-ducted-cfg-125",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-126",
      slug: "rheem-prestige-series-central-ducted-cfg-126",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-127",
      slug: "rheem-prestige-series-central-ducted-cfg-127",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-128",
      slug: "rheem-prestige-series-central-ducted-cfg-128",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-129",
      slug: "rheem-prestige-series-central-ducted-cfg-129",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-130",
      slug: "rheem-prestige-series-central-ducted-cfg-130",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-131",
      slug: "rheem-prestige-series-central-ducted-cfg-131",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-132",
      slug: "rheem-prestige-series-central-ducted-cfg-132",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-133",
      slug: "rheem-prestige-series-central-ducted-cfg-133",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-134",
      slug: "rheem-prestige-series-central-ducted-cfg-134",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-135",
      slug: "rheem-prestige-series-central-ducted-cfg-135",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-136",
      slug: "rheem-prestige-series-central-ducted-cfg-136",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-137",
      slug: "rheem-prestige-series-central-ducted-cfg-137",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-138",
      slug: "rheem-prestige-series-central-ducted-cfg-138",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-139",
      slug: "rheem-prestige-series-central-ducted-cfg-139",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-140",
      slug: "rheem-prestige-series-central-ducted-cfg-140",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-141",
      slug: "rheem-prestige-series-central-ducted-cfg-141",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-142",
      slug: "rheem-prestige-series-central-ducted-cfg-142",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-143",
      slug: "rheem-prestige-series-central-ducted-cfg-143",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-144",
      slug: "rheem-prestige-series-central-ducted-cfg-144",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-145",
      slug: "rheem-prestige-series-central-ducted-cfg-145",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-146",
      slug: "rheem-prestige-series-central-ducted-cfg-146",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-147",
      slug: "rheem-prestige-series-central-ducted-cfg-147",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-148",
      slug: "rheem-prestige-series-central-ducted-cfg-148",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-149",
      slug: "rheem-prestige-series-central-ducted-cfg-149",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-150",
      slug: "rheem-prestige-series-central-ducted-cfg-150",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-151",
      slug: "rheem-prestige-series-central-ducted-cfg-151",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-152",
      slug: "rheem-prestige-series-central-ducted-cfg-152",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-153",
      slug: "rheem-prestige-series-central-ducted-cfg-153",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-154",
      slug: "rheem-prestige-series-central-ducted-cfg-154",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-155",
      slug: "rheem-prestige-series-central-ducted-cfg-155",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-156",
      slug: "rheem-prestige-series-central-ducted-cfg-156",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-157",
      slug: "rheem-prestige-series-central-ducted-cfg-157",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-158",
      slug: "rheem-prestige-series-central-ducted-cfg-158",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-159",
      slug: "rheem-prestige-series-central-ducted-cfg-159",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-160",
      slug: "rheem-prestige-series-central-ducted-cfg-160",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-161",
      slug: "rheem-prestige-series-central-ducted-cfg-161",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-162",
      slug: "rheem-prestige-series-central-ducted-cfg-162",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-163",
      slug: "rheem-prestige-series-central-ducted-cfg-163",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-164",
      slug: "rheem-prestige-series-central-ducted-cfg-164",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-165",
      slug: "rheem-prestige-series-central-ducted-cfg-165",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-166",
      slug: "rheem-prestige-series-central-ducted-cfg-166",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-167",
      slug: "rheem-prestige-series-central-ducted-cfg-167",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-168",
      slug: "rheem-prestige-series-central-ducted-cfg-168",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-169",
      slug: "rheem-prestige-series-central-ducted-cfg-169",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-170",
      slug: "rheem-prestige-series-central-ducted-cfg-170",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-171",
      slug: "rheem-prestige-series-central-ducted-cfg-171",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-172",
      slug: "rheem-prestige-series-central-ducted-cfg-172",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-173",
      slug: "rheem-prestige-series-central-ducted-cfg-173",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-174",
      slug: "rheem-prestige-series-central-ducted-cfg-174",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-175",
      slug: "rheem-prestige-series-central-ducted-cfg-175",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-176",
      slug: "rheem-prestige-series-central-ducted-cfg-176",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-177",
      slug: "rheem-prestige-series-central-ducted-cfg-177",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-178",
      slug: "rheem-prestige-series-central-ducted-cfg-178",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-179",
      slug: "rheem-prestige-series-central-ducted-cfg-179",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-180",
      slug: "rheem-prestige-series-central-ducted-cfg-180",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-181",
      slug: "rheem-prestige-series-central-ducted-cfg-181",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-182",
      slug: "rheem-prestige-series-central-ducted-cfg-182",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-183",
      slug: "rheem-prestige-series-central-ducted-cfg-183",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-184",
      slug: "rheem-prestige-series-central-ducted-cfg-184",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-185",
      slug: "rheem-prestige-series-central-ducted-cfg-185",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-186",
      slug: "rheem-prestige-series-central-ducted-cfg-186",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-187",
      slug: "rheem-prestige-series-central-ducted-cfg-187",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-188",
      slug: "rheem-prestige-series-central-ducted-cfg-188",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-189",
      slug: "rheem-prestige-series-central-ducted-cfg-189",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-190",
      slug: "rheem-prestige-series-central-ducted-cfg-190",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-191",
      slug: "rheem-prestige-series-central-ducted-cfg-191",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-192",
      slug: "rheem-prestige-series-central-ducted-cfg-192",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-193",
      slug: "rheem-prestige-series-central-ducted-cfg-193",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-194",
      slug: "rheem-prestige-series-central-ducted-cfg-194",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-195",
      slug: "rheem-prestige-series-central-ducted-cfg-195",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-196",
      slug: "rheem-prestige-series-central-ducted-cfg-196",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-197",
      slug: "rheem-prestige-series-central-ducted-cfg-197",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-198",
      slug: "rheem-prestige-series-central-ducted-cfg-198",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-199",
      slug: "rheem-prestige-series-central-ducted-cfg-199",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-200",
      slug: "rheem-prestige-series-central-ducted-cfg-200",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-201",
      slug: "rheem-prestige-series-central-ducted-cfg-201",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-202",
      slug: "rheem-prestige-series-central-ducted-cfg-202",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-203",
      slug: "rheem-prestige-series-central-ducted-cfg-203",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-204",
      slug: "rheem-prestige-series-central-ducted-cfg-204",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-205",
      slug: "rheem-prestige-series-central-ducted-cfg-205",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-206",
      slug: "rheem-prestige-series-central-ducted-cfg-206",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-207",
      slug: "rheem-prestige-series-central-ducted-cfg-207",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-208",
      slug: "rheem-prestige-series-central-ducted-cfg-208",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-209",
      slug: "rheem-prestige-series-central-ducted-cfg-209",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-210",
      slug: "rheem-prestige-series-central-ducted-cfg-210",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-211",
      slug: "rheem-prestige-series-central-ducted-cfg-211",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-212",
      slug: "rheem-prestige-series-central-ducted-cfg-212",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-213",
      slug: "rheem-prestige-series-central-ducted-cfg-213",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-214",
      slug: "rheem-prestige-series-central-ducted-cfg-214",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-215",
      slug: "rheem-prestige-series-central-ducted-cfg-215",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-216",
      slug: "rheem-prestige-series-central-ducted-cfg-216",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-217",
      slug: "rheem-prestige-series-central-ducted-cfg-217",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-218",
      slug: "rheem-prestige-series-central-ducted-cfg-218",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-219",
      slug: "rheem-prestige-series-central-ducted-cfg-219",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-220",
      slug: "rheem-prestige-series-central-ducted-cfg-220",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-221",
      slug: "rheem-prestige-series-central-ducted-cfg-221",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-222",
      slug: "rheem-prestige-series-central-ducted-cfg-222",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-223",
      slug: "rheem-prestige-series-central-ducted-cfg-223",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-224",
      slug: "rheem-prestige-series-central-ducted-cfg-224",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-225",
      slug: "rheem-prestige-series-central-ducted-cfg-225",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-226",
      slug: "rheem-prestige-series-central-ducted-cfg-226",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-227",
      slug: "rheem-prestige-series-central-ducted-cfg-227",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-228",
      slug: "rheem-prestige-series-central-ducted-cfg-228",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-229",
      slug: "rheem-prestige-series-central-ducted-cfg-229",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-230",
      slug: "rheem-prestige-series-central-ducted-cfg-230",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-231",
      slug: "rheem-prestige-series-central-ducted-cfg-231",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-232",
      slug: "rheem-prestige-series-central-ducted-cfg-232",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-prestige-series-central-ducted-cfg-233",
      slug: "rheem-prestige-series-central-ducted-cfg-233",
      modelId: "rheem-prestige-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-classic-plus-wall-single-cfg-1",
      slug: "rheem-classic-plus-wall-single-cfg-1",
      modelId: "rheem-classic-plus-wall-single",
      outdoorUnitId: "rheem-ro2hfz18aj1h",
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
      id: "rheem-classic-plus-wall-single-cfg-2",
      slug: "rheem-classic-plus-wall-single-cfg-2",
      modelId: "rheem-classic-plus-wall-single",
      outdoorUnitId: "rheem-ro2hfz18aj1h",
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
      id: "rheem-classic-plus-wall-single-cfg-3",
      slug: "rheem-classic-plus-wall-single-cfg-3",
      modelId: "rheem-classic-plus-wall-single",
      outdoorUnitId: "rheem-ro3hfz24aj1h",
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
      id: "rheem-classic-plus-wall-single-cfg-4",
      slug: "rheem-classic-plus-wall-single-cfg-4",
      modelId: "rheem-classic-plus-wall-single",
      outdoorUnitId: "rheem-ro3hfz24aj1h",
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
      id: "rheem-classic-plus-central-ducted-cfg-1",
      slug: "rheem-classic-plus-central-ducted-cfg-1",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-2",
      slug: "rheem-classic-plus-central-ducted-cfg-2",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-3",
      slug: "rheem-classic-plus-central-ducted-cfg-3",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-4",
      slug: "rheem-classic-plus-central-ducted-cfg-4",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-5",
      slug: "rheem-classic-plus-central-ducted-cfg-5",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-6",
      slug: "rheem-classic-plus-central-ducted-cfg-6",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-7",
      slug: "rheem-classic-plus-central-ducted-cfg-7",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-8",
      slug: "rheem-classic-plus-central-ducted-cfg-8",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-9",
      slug: "rheem-classic-plus-central-ducted-cfg-9",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-10",
      slug: "rheem-classic-plus-central-ducted-cfg-10",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-11",
      slug: "rheem-classic-plus-central-ducted-cfg-11",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-12",
      slug: "rheem-classic-plus-central-ducted-cfg-12",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-classic-plus-central-ducted-cfg-13",
      slug: "rheem-classic-plus-central-ducted-cfg-13",
      modelId: "rheem-classic-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-1",
      slug: "rheem-f-series-plus-central-ducted-cfg-1",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-2",
      slug: "rheem-f-series-plus-central-ducted-cfg-2",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-3",
      slug: "rheem-f-series-plus-central-ducted-cfg-3",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-4",
      slug: "rheem-f-series-plus-central-ducted-cfg-4",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-5",
      slug: "rheem-f-series-plus-central-ducted-cfg-5",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-6",
      slug: "rheem-f-series-plus-central-ducted-cfg-6",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-7",
      slug: "rheem-f-series-plus-central-ducted-cfg-7",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-8",
      slug: "rheem-f-series-plus-central-ducted-cfg-8",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-9",
      slug: "rheem-f-series-plus-central-ducted-cfg-9",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-10",
      slug: "rheem-f-series-plus-central-ducted-cfg-10",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-11",
      slug: "rheem-f-series-plus-central-ducted-cfg-11",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-12",
      slug: "rheem-f-series-plus-central-ducted-cfg-12",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-13",
      slug: "rheem-f-series-plus-central-ducted-cfg-13",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-14",
      slug: "rheem-f-series-plus-central-ducted-cfg-14",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-15",
      slug: "rheem-f-series-plus-central-ducted-cfg-15",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-16",
      slug: "rheem-f-series-plus-central-ducted-cfg-16",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-17",
      slug: "rheem-f-series-plus-central-ducted-cfg-17",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-18",
      slug: "rheem-f-series-plus-central-ducted-cfg-18",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-19",
      slug: "rheem-f-series-plus-central-ducted-cfg-19",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-20",
      slug: "rheem-f-series-plus-central-ducted-cfg-20",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-21",
      slug: "rheem-f-series-plus-central-ducted-cfg-21",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-22",
      slug: "rheem-f-series-plus-central-ducted-cfg-22",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-23",
      slug: "rheem-f-series-plus-central-ducted-cfg-23",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-24",
      slug: "rheem-f-series-plus-central-ducted-cfg-24",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-25",
      slug: "rheem-f-series-plus-central-ducted-cfg-25",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-26",
      slug: "rheem-f-series-plus-central-ducted-cfg-26",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-27",
      slug: "rheem-f-series-plus-central-ducted-cfg-27",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-28",
      slug: "rheem-f-series-plus-central-ducted-cfg-28",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-29",
      slug: "rheem-f-series-plus-central-ducted-cfg-29",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-30",
      slug: "rheem-f-series-plus-central-ducted-cfg-30",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-31",
      slug: "rheem-f-series-plus-central-ducted-cfg-31",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-32",
      slug: "rheem-f-series-plus-central-ducted-cfg-32",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-33",
      slug: "rheem-f-series-plus-central-ducted-cfg-33",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-34",
      slug: "rheem-f-series-plus-central-ducted-cfg-34",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-35",
      slug: "rheem-f-series-plus-central-ducted-cfg-35",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-36",
      slug: "rheem-f-series-plus-central-ducted-cfg-36",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-37",
      slug: "rheem-f-series-plus-central-ducted-cfg-37",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-38",
      slug: "rheem-f-series-plus-central-ducted-cfg-38",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-39",
      slug: "rheem-f-series-plus-central-ducted-cfg-39",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-40",
      slug: "rheem-f-series-plus-central-ducted-cfg-40",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-41",
      slug: "rheem-f-series-plus-central-ducted-cfg-41",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-42",
      slug: "rheem-f-series-plus-central-ducted-cfg-42",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-43",
      slug: "rheem-f-series-plus-central-ducted-cfg-43",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-44",
      slug: "rheem-f-series-plus-central-ducted-cfg-44",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd17az36aj3n",
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
      id: "rheem-f-series-plus-central-ducted-cfg-45",
      slug: "rheem-f-series-plus-central-ducted-cfg-45",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd16ay24ajvc",
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
      id: "rheem-f-series-plus-central-ducted-cfg-46",
      slug: "rheem-f-series-plus-central-ducted-cfg-46",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd16ay48ajvc",
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
      id: "rheem-f-series-plus-central-ducted-cfg-47",
      slug: "rheem-f-series-plus-central-ducted-cfg-47",
      modelId: "rheem-f-series-plus-central-ducted",
      outdoorUnitId: "rheem-rd16ay60ajvc",
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
      id: "rheem-f-series-central-ducted-cfg-1",
      slug: "rheem-f-series-central-ducted-cfg-1",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-2",
      slug: "rheem-f-series-central-ducted-cfg-2",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-3",
      slug: "rheem-f-series-central-ducted-cfg-3",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-4",
      slug: "rheem-f-series-central-ducted-cfg-4",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-5",
      slug: "rheem-f-series-central-ducted-cfg-5",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-6",
      slug: "rheem-f-series-central-ducted-cfg-6",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-7",
      slug: "rheem-f-series-central-ducted-cfg-7",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-8",
      slug: "rheem-f-series-central-ducted-cfg-8",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-9",
      slug: "rheem-f-series-central-ducted-cfg-9",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-10",
      slug: "rheem-f-series-central-ducted-cfg-10",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-11",
      slug: "rheem-f-series-central-ducted-cfg-11",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-12",
      slug: "rheem-f-series-central-ducted-cfg-12",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-13",
      slug: "rheem-f-series-central-ducted-cfg-13",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-14",
      slug: "rheem-f-series-central-ducted-cfg-14",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-15",
      slug: "rheem-f-series-central-ducted-cfg-15",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-16",
      slug: "rheem-f-series-central-ducted-cfg-16",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-17",
      slug: "rheem-f-series-central-ducted-cfg-17",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-18",
      slug: "rheem-f-series-central-ducted-cfg-18",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-19",
      slug: "rheem-f-series-central-ducted-cfg-19",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-20",
      slug: "rheem-f-series-central-ducted-cfg-20",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-21",
      slug: "rheem-f-series-central-ducted-cfg-21",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-22",
      slug: "rheem-f-series-central-ducted-cfg-22",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-23",
      slug: "rheem-f-series-central-ducted-cfg-23",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-24",
      slug: "rheem-f-series-central-ducted-cfg-24",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-25",
      slug: "rheem-f-series-central-ducted-cfg-25",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-26",
      slug: "rheem-f-series-central-ducted-cfg-26",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-27",
      slug: "rheem-f-series-central-ducted-cfg-27",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-28",
      slug: "rheem-f-series-central-ducted-cfg-28",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-29",
      slug: "rheem-f-series-central-ducted-cfg-29",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-30",
      slug: "rheem-f-series-central-ducted-cfg-30",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-31",
      slug: "rheem-f-series-central-ducted-cfg-31",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-32",
      slug: "rheem-f-series-central-ducted-cfg-32",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-33",
      slug: "rheem-f-series-central-ducted-cfg-33",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-34",
      slug: "rheem-f-series-central-ducted-cfg-34",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-35",
      slug: "rheem-f-series-central-ducted-cfg-35",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-36",
      slug: "rheem-f-series-central-ducted-cfg-36",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-37",
      slug: "rheem-f-series-central-ducted-cfg-37",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-38",
      slug: "rheem-f-series-central-ducted-cfg-38",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-39",
      slug: "rheem-f-series-central-ducted-cfg-39",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-40",
      slug: "rheem-f-series-central-ducted-cfg-40",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-41",
      slug: "rheem-f-series-central-ducted-cfg-41",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-42",
      slug: "rheem-f-series-central-ducted-cfg-42",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-43",
      slug: "rheem-f-series-central-ducted-cfg-43",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-44",
      slug: "rheem-f-series-central-ducted-cfg-44",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-45",
      slug: "rheem-f-series-central-ducted-cfg-45",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-46",
      slug: "rheem-f-series-central-ducted-cfg-46",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-47",
      slug: "rheem-f-series-central-ducted-cfg-47",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-48",
      slug: "rheem-f-series-central-ducted-cfg-48",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-49",
      slug: "rheem-f-series-central-ducted-cfg-49",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-50",
      slug: "rheem-f-series-central-ducted-cfg-50",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-51",
      slug: "rheem-f-series-central-ducted-cfg-51",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-52",
      slug: "rheem-f-series-central-ducted-cfg-52",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-53",
      slug: "rheem-f-series-central-ducted-cfg-53",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-54",
      slug: "rheem-f-series-central-ducted-cfg-54",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-55",
      slug: "rheem-f-series-central-ducted-cfg-55",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-56",
      slug: "rheem-f-series-central-ducted-cfg-56",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-57",
      slug: "rheem-f-series-central-ducted-cfg-57",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-58",
      slug: "rheem-f-series-central-ducted-cfg-58",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-59",
      slug: "rheem-f-series-central-ducted-cfg-59",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-60",
      slug: "rheem-f-series-central-ducted-cfg-60",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-61",
      slug: "rheem-f-series-central-ducted-cfg-61",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-62",
      slug: "rheem-f-series-central-ducted-cfg-62",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-63",
      slug: "rheem-f-series-central-ducted-cfg-63",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-64",
      slug: "rheem-f-series-central-ducted-cfg-64",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-65",
      slug: "rheem-f-series-central-ducted-cfg-65",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-66",
      slug: "rheem-f-series-central-ducted-cfg-66",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-67",
      slug: "rheem-f-series-central-ducted-cfg-67",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-68",
      slug: "rheem-f-series-central-ducted-cfg-68",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-69",
      slug: "rheem-f-series-central-ducted-cfg-69",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-70",
      slug: "rheem-f-series-central-ducted-cfg-70",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-71",
      slug: "rheem-f-series-central-ducted-cfg-71",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-72",
      slug: "rheem-f-series-central-ducted-cfg-72",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-73",
      slug: "rheem-f-series-central-ducted-cfg-73",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-74",
      slug: "rheem-f-series-central-ducted-cfg-74",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-75",
      slug: "rheem-f-series-central-ducted-cfg-75",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-76",
      slug: "rheem-f-series-central-ducted-cfg-76",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-77",
      slug: "rheem-f-series-central-ducted-cfg-77",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-78",
      slug: "rheem-f-series-central-ducted-cfg-78",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-79",
      slug: "rheem-f-series-central-ducted-cfg-79",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-80",
      slug: "rheem-f-series-central-ducted-cfg-80",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-81",
      slug: "rheem-f-series-central-ducted-cfg-81",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-82",
      slug: "rheem-f-series-central-ducted-cfg-82",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-83",
      slug: "rheem-f-series-central-ducted-cfg-83",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-84",
      slug: "rheem-f-series-central-ducted-cfg-84",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-85",
      slug: "rheem-f-series-central-ducted-cfg-85",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-86",
      slug: "rheem-f-series-central-ducted-cfg-86",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-87",
      slug: "rheem-f-series-central-ducted-cfg-87",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-88",
      slug: "rheem-f-series-central-ducted-cfg-88",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-89",
      slug: "rheem-f-series-central-ducted-cfg-89",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-90",
      slug: "rheem-f-series-central-ducted-cfg-90",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-91",
      slug: "rheem-f-series-central-ducted-cfg-91",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-92",
      slug: "rheem-f-series-central-ducted-cfg-92",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-93",
      slug: "rheem-f-series-central-ducted-cfg-93",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-94",
      slug: "rheem-f-series-central-ducted-cfg-94",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-95",
      slug: "rheem-f-series-central-ducted-cfg-95",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-96",
      slug: "rheem-f-series-central-ducted-cfg-96",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-97",
      slug: "rheem-f-series-central-ducted-cfg-97",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-98",
      slug: "rheem-f-series-central-ducted-cfg-98",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-99",
      slug: "rheem-f-series-central-ducted-cfg-99",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-100",
      slug: "rheem-f-series-central-ducted-cfg-100",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-101",
      slug: "rheem-f-series-central-ducted-cfg-101",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-102",
      slug: "rheem-f-series-central-ducted-cfg-102",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-103",
      slug: "rheem-f-series-central-ducted-cfg-103",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-104",
      slug: "rheem-f-series-central-ducted-cfg-104",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-105",
      slug: "rheem-f-series-central-ducted-cfg-105",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-106",
      slug: "rheem-f-series-central-ducted-cfg-106",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-107",
      slug: "rheem-f-series-central-ducted-cfg-107",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-108",
      slug: "rheem-f-series-central-ducted-cfg-108",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-109",
      slug: "rheem-f-series-central-ducted-cfg-109",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-110",
      slug: "rheem-f-series-central-ducted-cfg-110",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-111",
      slug: "rheem-f-series-central-ducted-cfg-111",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-112",
      slug: "rheem-f-series-central-ducted-cfg-112",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-113",
      slug: "rheem-f-series-central-ducted-cfg-113",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-114",
      slug: "rheem-f-series-central-ducted-cfg-114",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-115",
      slug: "rheem-f-series-central-ducted-cfg-115",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-116",
      slug: "rheem-f-series-central-ducted-cfg-116",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-117",
      slug: "rheem-f-series-central-ducted-cfg-117",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-118",
      slug: "rheem-f-series-central-ducted-cfg-118",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-119",
      slug: "rheem-f-series-central-ducted-cfg-119",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-120",
      slug: "rheem-f-series-central-ducted-cfg-120",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-121",
      slug: "rheem-f-series-central-ducted-cfg-121",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-122",
      slug: "rheem-f-series-central-ducted-cfg-122",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-123",
      slug: "rheem-f-series-central-ducted-cfg-123",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-124",
      slug: "rheem-f-series-central-ducted-cfg-124",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-125",
      slug: "rheem-f-series-central-ducted-cfg-125",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-126",
      slug: "rheem-f-series-central-ducted-cfg-126",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-127",
      slug: "rheem-f-series-central-ducted-cfg-127",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-128",
      slug: "rheem-f-series-central-ducted-cfg-128",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-129",
      slug: "rheem-f-series-central-ducted-cfg-129",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-130",
      slug: "rheem-f-series-central-ducted-cfg-130",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-131",
      slug: "rheem-f-series-central-ducted-cfg-131",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-132",
      slug: "rheem-f-series-central-ducted-cfg-132",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-133",
      slug: "rheem-f-series-central-ducted-cfg-133",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az48aj3n",
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
      id: "rheem-f-series-central-ducted-cfg-134",
      slug: "rheem-f-series-central-ducted-cfg-134",
      modelId: "rheem-f-series-central-ducted",
      outdoorUnitId: "rheem-rd17az60aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-1",
      slug: "rheem-k-series-central-ducted-cfg-1",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-2",
      slug: "rheem-k-series-central-ducted-cfg-2",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-3",
      slug: "rheem-k-series-central-ducted-cfg-3",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-4",
      slug: "rheem-k-series-central-ducted-cfg-4",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-5",
      slug: "rheem-k-series-central-ducted-cfg-5",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-6",
      slug: "rheem-k-series-central-ducted-cfg-6",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-7",
      slug: "rheem-k-series-central-ducted-cfg-7",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-8",
      slug: "rheem-k-series-central-ducted-cfg-8",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-9",
      slug: "rheem-k-series-central-ducted-cfg-9",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-10",
      slug: "rheem-k-series-central-ducted-cfg-10",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-11",
      slug: "rheem-k-series-central-ducted-cfg-11",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-12",
      slug: "rheem-k-series-central-ducted-cfg-12",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-13",
      slug: "rheem-k-series-central-ducted-cfg-13",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-14",
      slug: "rheem-k-series-central-ducted-cfg-14",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-15",
      slug: "rheem-k-series-central-ducted-cfg-15",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-16",
      slug: "rheem-k-series-central-ducted-cfg-16",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-17",
      slug: "rheem-k-series-central-ducted-cfg-17",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-18",
      slug: "rheem-k-series-central-ducted-cfg-18",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-19",
      slug: "rheem-k-series-central-ducted-cfg-19",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-20",
      slug: "rheem-k-series-central-ducted-cfg-20",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-21",
      slug: "rheem-k-series-central-ducted-cfg-21",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-22",
      slug: "rheem-k-series-central-ducted-cfg-22",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-23",
      slug: "rheem-k-series-central-ducted-cfg-23",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-24",
      slug: "rheem-k-series-central-ducted-cfg-24",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-25",
      slug: "rheem-k-series-central-ducted-cfg-25",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-26",
      slug: "rheem-k-series-central-ducted-cfg-26",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-27",
      slug: "rheem-k-series-central-ducted-cfg-27",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-28",
      slug: "rheem-k-series-central-ducted-cfg-28",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-29",
      slug: "rheem-k-series-central-ducted-cfg-29",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-30",
      slug: "rheem-k-series-central-ducted-cfg-30",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-31",
      slug: "rheem-k-series-central-ducted-cfg-31",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-32",
      slug: "rheem-k-series-central-ducted-cfg-32",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-33",
      slug: "rheem-k-series-central-ducted-cfg-33",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-34",
      slug: "rheem-k-series-central-ducted-cfg-34",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-35",
      slug: "rheem-k-series-central-ducted-cfg-35",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-36",
      slug: "rheem-k-series-central-ducted-cfg-36",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-37",
      slug: "rheem-k-series-central-ducted-cfg-37",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-38",
      slug: "rheem-k-series-central-ducted-cfg-38",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-39",
      slug: "rheem-k-series-central-ducted-cfg-39",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-40",
      slug: "rheem-k-series-central-ducted-cfg-40",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-41",
      slug: "rheem-k-series-central-ducted-cfg-41",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-42",
      slug: "rheem-k-series-central-ducted-cfg-42",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd17az24aj3n",
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
      id: "rheem-k-series-central-ducted-cfg-43",
      slug: "rheem-k-series-central-ducted-cfg-43",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-44",
      slug: "rheem-k-series-central-ducted-cfg-44",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-45",
      slug: "rheem-k-series-central-ducted-cfg-45",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-46",
      slug: "rheem-k-series-central-ducted-cfg-46",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-47",
      slug: "rheem-k-series-central-ducted-cfg-47",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-48",
      slug: "rheem-k-series-central-ducted-cfg-48",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-49",
      slug: "rheem-k-series-central-ducted-cfg-49",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-50",
      slug: "rheem-k-series-central-ducted-cfg-50",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-51",
      slug: "rheem-k-series-central-ducted-cfg-51",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-52",
      slug: "rheem-k-series-central-ducted-cfg-52",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-53",
      slug: "rheem-k-series-central-ducted-cfg-53",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-54",
      slug: "rheem-k-series-central-ducted-cfg-54",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-55",
      slug: "rheem-k-series-central-ducted-cfg-55",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-56",
      slug: "rheem-k-series-central-ducted-cfg-56",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-57",
      slug: "rheem-k-series-central-ducted-cfg-57",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-58",
      slug: "rheem-k-series-central-ducted-cfg-58",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-59",
      slug: "rheem-k-series-central-ducted-cfg-59",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-60",
      slug: "rheem-k-series-central-ducted-cfg-60",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-61",
      slug: "rheem-k-series-central-ducted-cfg-61",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-62",
      slug: "rheem-k-series-central-ducted-cfg-62",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-63",
      slug: "rheem-k-series-central-ducted-cfg-63",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-64",
      slug: "rheem-k-series-central-ducted-cfg-64",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-65",
      slug: "rheem-k-series-central-ducted-cfg-65",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-66",
      slug: "rheem-k-series-central-ducted-cfg-66",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay60ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-67",
      slug: "rheem-k-series-central-ducted-cfg-67",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-68",
      slug: "rheem-k-series-central-ducted-cfg-68",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-69",
      slug: "rheem-k-series-central-ducted-cfg-69",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay24ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-70",
      slug: "rheem-k-series-central-ducted-cfg-70",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-71",
      slug: "rheem-k-series-central-ducted-cfg-71",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-72",
      slug: "rheem-k-series-central-ducted-cfg-72",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-73",
      slug: "rheem-k-series-central-ducted-cfg-73",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-74",
      slug: "rheem-k-series-central-ducted-cfg-74",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-75",
      slug: "rheem-k-series-central-ducted-cfg-75",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-76",
      slug: "rheem-k-series-central-ducted-cfg-76",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-77",
      slug: "rheem-k-series-central-ducted-cfg-77",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-78",
      slug: "rheem-k-series-central-ducted-cfg-78",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-79",
      slug: "rheem-k-series-central-ducted-cfg-79",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-80",
      slug: "rheem-k-series-central-ducted-cfg-80",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-81",
      slug: "rheem-k-series-central-ducted-cfg-81",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-82",
      slug: "rheem-k-series-central-ducted-cfg-82",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-83",
      slug: "rheem-k-series-central-ducted-cfg-83",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-84",
      slug: "rheem-k-series-central-ducted-cfg-84",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-85",
      slug: "rheem-k-series-central-ducted-cfg-85",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-86",
      slug: "rheem-k-series-central-ducted-cfg-86",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-87",
      slug: "rheem-k-series-central-ducted-cfg-87",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-88",
      slug: "rheem-k-series-central-ducted-cfg-88",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-89",
      slug: "rheem-k-series-central-ducted-cfg-89",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-90",
      slug: "rheem-k-series-central-ducted-cfg-90",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-91",
      slug: "rheem-k-series-central-ducted-cfg-91",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-92",
      slug: "rheem-k-series-central-ducted-cfg-92",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-93",
      slug: "rheem-k-series-central-ducted-cfg-93",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-94",
      slug: "rheem-k-series-central-ducted-cfg-94",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-95",
      slug: "rheem-k-series-central-ducted-cfg-95",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-96",
      slug: "rheem-k-series-central-ducted-cfg-96",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-97",
      slug: "rheem-k-series-central-ducted-cfg-97",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-98",
      slug: "rheem-k-series-central-ducted-cfg-98",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-99",
      slug: "rheem-k-series-central-ducted-cfg-99",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-100",
      slug: "rheem-k-series-central-ducted-cfg-100",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-101",
      slug: "rheem-k-series-central-ducted-cfg-101",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-102",
      slug: "rheem-k-series-central-ducted-cfg-102",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-103",
      slug: "rheem-k-series-central-ducted-cfg-103",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-104",
      slug: "rheem-k-series-central-ducted-cfg-104",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-105",
      slug: "rheem-k-series-central-ducted-cfg-105",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-106",
      slug: "rheem-k-series-central-ducted-cfg-106",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-107",
      slug: "rheem-k-series-central-ducted-cfg-107",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay48ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-108",
      slug: "rheem-k-series-central-ducted-cfg-108",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-109",
      slug: "rheem-k-series-central-ducted-cfg-109",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-110",
      slug: "rheem-k-series-central-ducted-cfg-110",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-111",
      slug: "rheem-k-series-central-ducted-cfg-111",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-112",
      slug: "rheem-k-series-central-ducted-cfg-112",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-113",
      slug: "rheem-k-series-central-ducted-cfg-113",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-114",
      slug: "rheem-k-series-central-ducted-cfg-114",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-115",
      slug: "rheem-k-series-central-ducted-cfg-115",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-116",
      slug: "rheem-k-series-central-ducted-cfg-116",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-117",
      slug: "rheem-k-series-central-ducted-cfg-117",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-118",
      slug: "rheem-k-series-central-ducted-cfg-118",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-119",
      slug: "rheem-k-series-central-ducted-cfg-119",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-120",
      slug: "rheem-k-series-central-ducted-cfg-120",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-121",
      slug: "rheem-k-series-central-ducted-cfg-121",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-122",
      slug: "rheem-k-series-central-ducted-cfg-122",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-123",
      slug: "rheem-k-series-central-ducted-cfg-123",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-k-series-central-ducted-cfg-124",
      slug: "rheem-k-series-central-ducted-cfg-124",
      modelId: "rheem-k-series-central-ducted",
      outdoorUnitId: "rheem-rd18ay36ajvc",
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
      id: "rheem-floating-air-classic-wall-single-cfg-1",
      slug: "rheem-floating-air-classic-wall-single-cfg-1",
      modelId: "rheem-floating-air-classic-wall-single",
      outdoorUnitId: "rheem-fshsr09b1c",
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
      id: "rheem-floating-air-select-wall-single-cfg-1",
      slug: "rheem-floating-air-select-wall-single-cfg-1",
      modelId: "rheem-floating-air-select-wall-single",
      outdoorUnitId: "rheem-fshsr18b3d",
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
      id: "rheem-floating-air-pro-wall-single-cfg-1",
      slug: "rheem-floating-air-pro-wall-single-cfg-1",
      modelId: "rheem-floating-air-pro-wall-single",
      outdoorUnitId: "rheem-fphsr09a1c",
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
      id: "rheem-floating-air-pro-wall-single-cfg-2",
      slug: "rheem-floating-air-pro-wall-single-cfg-2",
      modelId: "rheem-floating-air-pro-wall-single",
      outdoorUnitId: "rheem-fphsr18a3d",
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
      id: "rheem-floating-air-classic-plus-wall-single-cfg-1",
      slug: "rheem-floating-air-classic-plus-wall-single-cfg-1",
      modelId: "rheem-floating-air-classic-plus-wall-single",
      outdoorUnitId: "rheem-fphsr12a1c",
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
      id: "rheem-floating-air-classic-plus-wall-single-cfg-2",
      slug: "rheem-floating-air-classic-plus-wall-single-cfg-2",
      modelId: "rheem-floating-air-classic-plus-wall-single",
      outdoorUnitId: "rheem-fphsr09a3d",
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
      id: "rheem-floating-air-classic-plus-wall-single-cfg-3",
      slug: "rheem-floating-air-classic-plus-wall-single-cfg-3",
      modelId: "rheem-floating-air-classic-plus-wall-single",
      outdoorUnitId: "rheem-fphsr12a3d",
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
      id: "rheem-floating-air-classic-plus-wall-single-cfg-4",
      slug: "rheem-floating-air-classic-plus-wall-single-cfg-4",
      modelId: "rheem-floating-air-classic-plus-wall-single",
      outdoorUnitId: "rheem-fphsr24a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-1",
      slug: "rheem-floating-air-prestige-wall-single-cfg-1",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr09a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-2",
      slug: "rheem-floating-air-prestige-wall-single-cfg-2",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr12a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-3",
      slug: "rheem-floating-air-prestige-wall-single-cfg-3",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr09a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-4",
      slug: "rheem-floating-air-prestige-wall-single-cfg-4",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr12a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-5",
      slug: "rheem-floating-air-prestige-wall-single-cfg-5",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr18a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-6",
      slug: "rheem-floating-air-prestige-wall-single-cfg-6",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr24a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-7",
      slug: "rheem-floating-air-prestige-wall-single-cfg-7",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr18a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-8",
      slug: "rheem-floating-air-prestige-wall-single-cfg-8",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr24a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-9",
      slug: "rheem-floating-air-prestige-wall-single-cfg-9",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr36a3d",
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
      id: "rheem-floating-air-prestige-wall-single-cfg-10",
      slug: "rheem-floating-air-prestige-wall-single-cfg-10",
      modelId: "rheem-floating-air-prestige-wall-single",
      outdoorUnitId: "rheem-fphfr36a3d",
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
      configurationId: "rheem-standard-wall-single-cfg-1",
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
      configurationId: "rheem-standard-wall-single-cfg-2",
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
      configurationId: "rheem-standard-wall-single-cfg-3",
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
      configurationId: "rheem-standard-wall-single-cfg-4",
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
      configurationId: "rheem-standard-wall-single-cfg-5",
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
      configurationId: "rheem-standard-wall-single-cfg-6",
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
      configurationId: "rheem-standard-wall-single-cfg-7",
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
      configurationId: "rheem-standard-wall-single-cfg-8",
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
      configurationId: "rheem-standard-wall-single-cfg-9",
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
      configurationId: "rheem-standard-wall-single-cfg-10",
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
      configurationId: "rheem-standard-wall-single-cfg-11",
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
      configurationId: "rheem-standard-wall-single-cfg-12",
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
      configurationId: "rheem-standard-wall-single-cfg-13",
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
      configurationId: "rheem-standard-wall-single-cfg-14",
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
      configurationId: "rheem-standard-wall-single-cfg-15",
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
      configurationId: "rheem-standard-wall-single-cfg-16",
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
      configurationId: "rheem-standard-wall-single-cfg-17",
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
      configurationId: "rheem-standard-wall-single-cfg-18",
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
      configurationId: "rheem-standard-wall-single-cfg-19",
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
      configurationId: "rheem-standard-wall-single-cfg-20",
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
      configurationId: "rheem-standard-wall-single-cfg-21",
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
      configurationId: "rheem-standard-wall-single-cfg-22",
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
      configurationId: "rheem-standard-wall-single-cfg-23",
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
      configurationId: "rheem-standard-wall-single-cfg-24",
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
      configurationId: "rheem-standard-wall-single-cfg-25",
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
      configurationId: "rheem-standard-wall-single-cfg-26",
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
      configurationId: "rheem-standard-wall-single-cfg-27",
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
      configurationId: "rheem-standard-wall-single-cfg-28",
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
      configurationId: "rheem-standard-wall-single-cfg-29",
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
      configurationId: "rheem-standard-wall-single-cfg-30",
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
      configurationId: "rheem-standard-wall-single-cfg-31",
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
      configurationId: "rheem-standard-wall-single-cfg-32",
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
      configurationId: "rheem-standard-wall-single-cfg-33",
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
      configurationId: "rheem-standard-wall-single-cfg-34",
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
      configurationId: "rheem-standard-wall-single-cfg-35",
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
      configurationId: "rheem-standard-wall-single-cfg-36",
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
      configurationId: "rheem-standard-wall-single-cfg-37",
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
      configurationId: "rheem-standard-wall-single-cfg-38",
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
      configurationId: "rheem-standard-wall-single-cfg-39",
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
      configurationId: "rheem-standard-wall-single-cfg-40",
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
      configurationId: "rheem-standard-wall-single-cfg-41",
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
      configurationId: "rheem-standard-wall-single-cfg-42",
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
      configurationId: "rheem-standard-wall-single-cfg-43",
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
      configurationId: "rheem-standard-wall-single-cfg-44",
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
      configurationId: "rheem-standard-wall-single-cfg-45",
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
      configurationId: "rheem-standard-wall-single-cfg-46",
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
      configurationId: "rheem-standard-wall-single-cfg-47",
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
      configurationId: "rheem-standard-wall-single-cfg-48",
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
      configurationId: "rheem-standard-wall-single-cfg-49",
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
      configurationId: "rheem-standard-wall-single-cfg-50",
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
      configurationId: "rheem-standard-wall-single-cfg-51",
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
      configurationId: "rheem-standard-wall-single-cfg-52",
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
      configurationId: "rheem-standard-wall-single-cfg-53",
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
      configurationId: "rheem-standard-wall-single-cfg-54",
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
      configurationId: "rheem-standard-wall-single-cfg-55",
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
      configurationId: "rheem-standard-wall-single-cfg-56",
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
      configurationId: "rheem-standard-wall-single-cfg-57",
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
      configurationId: "rheem-standard-wall-single-cfg-58",
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
      configurationId: "rheem-standard-wall-single-cfg-59",
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
      configurationId: "rheem-standard-wall-single-cfg-60",
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
      configurationId: "rheem-standard-wall-single-cfg-61",
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
      configurationId: "rheem-standard-wall-single-cfg-62",
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
      configurationId: "rheem-standard-wall-single-cfg-63",
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
      configurationId: "rheem-standard-wall-single-cfg-64",
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
      configurationId: "rheem-standard-wall-single-cfg-65",
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
      configurationId: "rheem-standard-wall-single-cfg-66",
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
      configurationId: "rheem-standard-wall-single-cfg-67",
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
      configurationId: "rheem-standard-wall-single-cfg-68",
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
      configurationId: "rheem-standard-wall-single-cfg-69",
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
      configurationId: "rheem-standard-wall-single-cfg-70",
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
      configurationId: "rheem-standard-wall-single-cfg-71",
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
      configurationId: "rheem-standard-wall-single-cfg-72",
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
      configurationId: "rheem-standard-wall-single-cfg-73",
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
      configurationId: "rheem-standard-wall-single-cfg-74",
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
      configurationId: "rheem-standard-wall-single-cfg-75",
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
      configurationId: "rheem-standard-wall-single-cfg-76",
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
      configurationId: "rheem-standard-wall-single-cfg-77",
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
      configurationId: "rheem-standard-wall-single-cfg-78",
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
      configurationId: "rheem-standard-wall-single-cfg-79",
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
      configurationId: "rheem-standard-wall-single-cfg-80",
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
      configurationId: "rheem-standard-wall-single-cfg-81",
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
      configurationId: "rheem-standard-wall-single-cfg-82",
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
      configurationId: "rheem-standard-wall-single-cfg-83",
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
      configurationId: "rheem-standard-wall-single-cfg-84",
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
      configurationId: "rheem-standard-wall-single-cfg-85",
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
      configurationId: "rheem-standard-wall-single-cfg-86",
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
      configurationId: "rheem-standard-wall-single-cfg-87",
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
      configurationId: "rheem-standard-wall-single-cfg-88",
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
      configurationId: "rheem-standard-wall-single-cfg-89",
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
      configurationId: "rheem-standard-wall-single-cfg-90",
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
      configurationId: "rheem-standard-wall-single-cfg-91",
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
      configurationId: "rheem-standard-wall-single-cfg-92",
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
      configurationId: "rheem-standard-wall-single-cfg-93",
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
      configurationId: "rheem-standard-wall-single-cfg-94",
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
      configurationId: "rheem-standard-wall-single-cfg-95",
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
      configurationId: "rheem-standard-wall-single-cfg-96",
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
      configurationId: "rheem-standard-wall-single-cfg-97",
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
      configurationId: "rheem-standard-wall-single-cfg-98",
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
      configurationId: "rheem-standard-wall-single-cfg-99",
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
      configurationId: "rheem-standard-wall-single-cfg-100",
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
      configurationId: "rheem-standard-wall-single-cfg-101",
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
      configurationId: "rheem-standard-wall-single-cfg-102",
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
      configurationId: "rheem-standard-wall-single-cfg-103",
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
      configurationId: "rheem-standard-wall-single-cfg-104",
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
      configurationId: "rheem-standard-wall-single-cfg-105",
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
      configurationId: "rheem-standard-wall-single-cfg-106",
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
      configurationId: "rheem-standard-wall-single-cfg-107",
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
      configurationId: "rheem-standard-wall-single-cfg-108",
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
      configurationId: "rheem-standard-wall-single-cfg-109",
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
      configurationId: "rheem-standard-wall-single-cfg-110",
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
      configurationId: "rheem-standard-wall-single-cfg-111",
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
      configurationId: "rheem-standard-wall-single-cfg-112",
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
      configurationId: "rheem-standard-wall-single-cfg-113",
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
      configurationId: "rheem-standard-wall-single-cfg-114",
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
      configurationId: "rheem-standard-wall-single-cfg-115",
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
      configurationId: "rheem-standard-wall-single-cfg-116",
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
      configurationId: "rheem-standard-central-ducted-cfg-1",
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
      configurationId: "rheem-standard-central-ducted-cfg-2",
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
      configurationId: "rheem-standard-central-ducted-cfg-3",
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
      configurationId: "rheem-standard-central-ducted-cfg-4",
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
      configurationId: "rheem-standard-central-ducted-cfg-5",
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
      configurationId: "rheem-standard-central-ducted-cfg-6",
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
      configurationId: "rheem-standard-central-ducted-cfg-7",
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
      configurationId: "rheem-standard-central-ducted-cfg-8",
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
      configurationId: "rheem-standard-central-ducted-cfg-9",
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
      configurationId: "rheem-standard-central-ducted-cfg-10",
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
      configurationId: "rheem-standard-central-ducted-cfg-11",
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
      configurationId: "rheem-standard-central-ducted-cfg-12",
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
      configurationId: "rheem-standard-central-ducted-cfg-13",
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
      configurationId: "rheem-standard-central-ducted-cfg-14",
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
      configurationId: "rheem-standard-central-ducted-cfg-15",
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
      configurationId: "rheem-standard-central-ducted-cfg-16",
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
      configurationId: "rheem-standard-central-ducted-cfg-17",
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
      configurationId: "rheem-standard-central-ducted-cfg-18",
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
      configurationId: "rheem-standard-central-ducted-cfg-19",
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
      configurationId: "rheem-standard-central-ducted-cfg-20",
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
      configurationId: "rheem-standard-central-ducted-cfg-21",
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
      configurationId: "rheem-standard-central-ducted-cfg-22",
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
      configurationId: "rheem-standard-central-ducted-cfg-23",
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
      configurationId: "rheem-standard-central-ducted-cfg-24",
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
      configurationId: "rheem-standard-central-ducted-cfg-25",
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
      configurationId: "rheem-standard-central-ducted-cfg-26",
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
      configurationId: "rheem-standard-central-ducted-cfg-27",
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
      configurationId: "rheem-standard-central-ducted-cfg-28",
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
      configurationId: "rheem-standard-central-ducted-cfg-29",
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
      configurationId: "rheem-standard-central-ducted-cfg-30",
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
      configurationId: "rheem-standard-central-ducted-cfg-31",
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
      configurationId: "rheem-standard-central-ducted-cfg-32",
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
      configurationId: "rheem-standard-central-ducted-cfg-33",
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
      configurationId: "rheem-standard-central-ducted-cfg-34",
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
      configurationId: "rheem-standard-central-ducted-cfg-35",
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
      configurationId: "rheem-standard-central-ducted-cfg-36",
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
      configurationId: "rheem-standard-central-ducted-cfg-37",
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
      configurationId: "rheem-standard-central-ducted-cfg-38",
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
      configurationId: "rheem-standard-central-ducted-cfg-39",
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
      configurationId: "rheem-standard-central-ducted-cfg-40",
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
      configurationId: "rheem-standard-central-ducted-cfg-41",
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
      configurationId: "rheem-standard-central-ducted-cfg-42",
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
      configurationId: "rheem-standard-central-ducted-cfg-43",
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
      configurationId: "rheem-standard-central-ducted-cfg-44",
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
      configurationId: "rheem-standard-central-ducted-cfg-45",
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
      configurationId: "rheem-standard-central-ducted-cfg-46",
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
      configurationId: "rheem-standard-central-ducted-cfg-47",
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
      configurationId: "rheem-standard-central-ducted-cfg-48",
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
      configurationId: "rheem-standard-central-ducted-cfg-49",
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
      configurationId: "rheem-standard-central-ducted-cfg-50",
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
      configurationId: "rheem-standard-central-ducted-cfg-51",
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
      configurationId: "rheem-standard-central-ducted-cfg-52",
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
      configurationId: "rheem-standard-central-ducted-cfg-53",
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
      configurationId: "rheem-standard-central-ducted-cfg-54",
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
      configurationId: "rheem-standard-central-ducted-cfg-55",
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
      configurationId: "rheem-standard-central-ducted-cfg-56",
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
      configurationId: "rheem-standard-central-ducted-cfg-57",
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
      configurationId: "rheem-standard-central-ducted-cfg-58",
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
      configurationId: "rheem-standard-central-ducted-cfg-59",
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
      configurationId: "rheem-standard-central-ducted-cfg-60",
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
      configurationId: "rheem-standard-central-ducted-cfg-61",
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
      configurationId: "rheem-standard-central-ducted-cfg-62",
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
      configurationId: "rheem-standard-central-ducted-cfg-63",
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
      configurationId: "rheem-standard-central-ducted-cfg-64",
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
      configurationId: "rheem-standard-central-ducted-cfg-65",
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
      configurationId: "rheem-standard-central-ducted-cfg-66",
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
      configurationId: "rheem-standard-central-ducted-cfg-67",
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
      configurationId: "rheem-standard-central-ducted-cfg-68",
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
      configurationId: "rheem-standard-central-ducted-cfg-69",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-1",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-2",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-3",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-4",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-5",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-6",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-7",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-8",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-9",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-10",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-11",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-12",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-13",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-14",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-15",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-16",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-17",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-18",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-19",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-20",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-21",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-22",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-23",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-24",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-25",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-26",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-27",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-28",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-29",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-30",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-31",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-32",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-33",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-34",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-35",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-36",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-37",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-38",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-39",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-40",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-41",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-42",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-43",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-44",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-45",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-46",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-47",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-48",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-49",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-50",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-51",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-52",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-53",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-54",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-55",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-56",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-57",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-58",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-59",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-60",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-61",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-62",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-63",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-64",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-65",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-66",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-67",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-68",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-69",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-70",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-71",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-72",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-73",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-74",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-75",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-76",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-77",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-78",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-79",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-80",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-81",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-82",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-83",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-84",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-85",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-86",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-87",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-88",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-89",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-90",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-91",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-92",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-93",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-94",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-95",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-96",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-97",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-98",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-99",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-100",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-101",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-102",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-103",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-104",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-105",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-106",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-107",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-108",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-109",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-110",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-111",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-112",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-113",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-114",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-115",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-116",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-117",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-118",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-119",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-120",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-121",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-122",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-123",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-124",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-125",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-126",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-127",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-128",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-129",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-130",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-131",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-132",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-133",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-134",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-135",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-136",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-137",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-138",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-139",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-140",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-141",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-142",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-143",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-144",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-145",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-146",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-147",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-148",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-149",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-150",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-151",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-152",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-153",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-154",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-155",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-156",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-157",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-158",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-159",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-160",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-161",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-162",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-163",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-164",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-165",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-166",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-167",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-168",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-169",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-170",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-171",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-172",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-173",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-174",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-175",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-176",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-177",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-178",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-179",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-180",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-181",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-182",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-183",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-184",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-185",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-186",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-187",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-188",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-189",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-190",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-191",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-192",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-193",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-194",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-195",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-196",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-197",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-198",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-199",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-200",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-201",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-202",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-203",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-204",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-205",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-206",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-207",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-208",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-209",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-210",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-211",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-212",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-213",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-214",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-215",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-216",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-217",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-218",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-219",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-220",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-221",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-222",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-223",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-224",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-225",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-226",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-227",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-228",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-229",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-230",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-231",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-232",
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
      configurationId: "rheem-prestige-series-central-ducted-cfg-233",
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
      configurationId: "rheem-classic-plus-wall-single-cfg-1",
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
      configurationId: "rheem-classic-plus-wall-single-cfg-2",
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
      configurationId: "rheem-classic-plus-wall-single-cfg-3",
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
      configurationId: "rheem-classic-plus-wall-single-cfg-4",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-1",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-2",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-3",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-4",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-5",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-6",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-7",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-8",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-9",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-10",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-11",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-12",
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
      configurationId: "rheem-classic-plus-central-ducted-cfg-13",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-1",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-2",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-3",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-4",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-5",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-6",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-7",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-8",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-9",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-10",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-11",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-12",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-13",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-14",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-15",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-16",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-17",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-18",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-19",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-20",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-21",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-22",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-23",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-24",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-25",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-26",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-27",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-28",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-29",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-30",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-31",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-32",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-33",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-34",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-35",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-36",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-37",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-38",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-39",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-40",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-41",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-42",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-43",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-44",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-45",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-46",
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
      configurationId: "rheem-f-series-plus-central-ducted-cfg-47",
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
      configurationId: "rheem-f-series-central-ducted-cfg-1",
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
      configurationId: "rheem-f-series-central-ducted-cfg-2",
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
      configurationId: "rheem-f-series-central-ducted-cfg-3",
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
      configurationId: "rheem-f-series-central-ducted-cfg-4",
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
      configurationId: "rheem-f-series-central-ducted-cfg-5",
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
      configurationId: "rheem-f-series-central-ducted-cfg-6",
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
      configurationId: "rheem-f-series-central-ducted-cfg-7",
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
      configurationId: "rheem-f-series-central-ducted-cfg-8",
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
      configurationId: "rheem-f-series-central-ducted-cfg-9",
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
      configurationId: "rheem-f-series-central-ducted-cfg-10",
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
      configurationId: "rheem-f-series-central-ducted-cfg-11",
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
      configurationId: "rheem-f-series-central-ducted-cfg-12",
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
      configurationId: "rheem-f-series-central-ducted-cfg-13",
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
      configurationId: "rheem-f-series-central-ducted-cfg-14",
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
      configurationId: "rheem-f-series-central-ducted-cfg-15",
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
      configurationId: "rheem-f-series-central-ducted-cfg-16",
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
      configurationId: "rheem-f-series-central-ducted-cfg-17",
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
      configurationId: "rheem-f-series-central-ducted-cfg-18",
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
      configurationId: "rheem-f-series-central-ducted-cfg-19",
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
      configurationId: "rheem-f-series-central-ducted-cfg-20",
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
      configurationId: "rheem-f-series-central-ducted-cfg-21",
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
      configurationId: "rheem-f-series-central-ducted-cfg-22",
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
      configurationId: "rheem-f-series-central-ducted-cfg-23",
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
      configurationId: "rheem-f-series-central-ducted-cfg-24",
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
      configurationId: "rheem-f-series-central-ducted-cfg-25",
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
      configurationId: "rheem-f-series-central-ducted-cfg-26",
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
      configurationId: "rheem-f-series-central-ducted-cfg-27",
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
      configurationId: "rheem-f-series-central-ducted-cfg-28",
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
      configurationId: "rheem-f-series-central-ducted-cfg-29",
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
      configurationId: "rheem-f-series-central-ducted-cfg-30",
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
      configurationId: "rheem-f-series-central-ducted-cfg-31",
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
      configurationId: "rheem-f-series-central-ducted-cfg-32",
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
      configurationId: "rheem-f-series-central-ducted-cfg-33",
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
      configurationId: "rheem-f-series-central-ducted-cfg-34",
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
      configurationId: "rheem-f-series-central-ducted-cfg-35",
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
      configurationId: "rheem-f-series-central-ducted-cfg-36",
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
      configurationId: "rheem-f-series-central-ducted-cfg-37",
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
      configurationId: "rheem-f-series-central-ducted-cfg-38",
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
      configurationId: "rheem-f-series-central-ducted-cfg-39",
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
      configurationId: "rheem-f-series-central-ducted-cfg-40",
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
      configurationId: "rheem-f-series-central-ducted-cfg-41",
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
      configurationId: "rheem-f-series-central-ducted-cfg-42",
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
      configurationId: "rheem-f-series-central-ducted-cfg-43",
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
      configurationId: "rheem-f-series-central-ducted-cfg-44",
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
      configurationId: "rheem-f-series-central-ducted-cfg-45",
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
      configurationId: "rheem-f-series-central-ducted-cfg-46",
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
      configurationId: "rheem-f-series-central-ducted-cfg-47",
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
      configurationId: "rheem-f-series-central-ducted-cfg-48",
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
      configurationId: "rheem-f-series-central-ducted-cfg-49",
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
      configurationId: "rheem-f-series-central-ducted-cfg-50",
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
      configurationId: "rheem-f-series-central-ducted-cfg-51",
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
      configurationId: "rheem-f-series-central-ducted-cfg-52",
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
      configurationId: "rheem-f-series-central-ducted-cfg-53",
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
      configurationId: "rheem-f-series-central-ducted-cfg-54",
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
      configurationId: "rheem-f-series-central-ducted-cfg-55",
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
      configurationId: "rheem-f-series-central-ducted-cfg-56",
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
      configurationId: "rheem-f-series-central-ducted-cfg-57",
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
      configurationId: "rheem-f-series-central-ducted-cfg-58",
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
      configurationId: "rheem-f-series-central-ducted-cfg-59",
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
      configurationId: "rheem-f-series-central-ducted-cfg-60",
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
      configurationId: "rheem-f-series-central-ducted-cfg-61",
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
      configurationId: "rheem-f-series-central-ducted-cfg-62",
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
      configurationId: "rheem-f-series-central-ducted-cfg-63",
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
      configurationId: "rheem-f-series-central-ducted-cfg-64",
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
      configurationId: "rheem-f-series-central-ducted-cfg-65",
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
      configurationId: "rheem-f-series-central-ducted-cfg-66",
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
      configurationId: "rheem-f-series-central-ducted-cfg-67",
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
      configurationId: "rheem-f-series-central-ducted-cfg-68",
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
      configurationId: "rheem-f-series-central-ducted-cfg-69",
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
      configurationId: "rheem-f-series-central-ducted-cfg-70",
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
      configurationId: "rheem-f-series-central-ducted-cfg-71",
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
      configurationId: "rheem-f-series-central-ducted-cfg-72",
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
      configurationId: "rheem-f-series-central-ducted-cfg-73",
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
      configurationId: "rheem-f-series-central-ducted-cfg-74",
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
      configurationId: "rheem-f-series-central-ducted-cfg-75",
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
      configurationId: "rheem-f-series-central-ducted-cfg-76",
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
      configurationId: "rheem-f-series-central-ducted-cfg-77",
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
      configurationId: "rheem-f-series-central-ducted-cfg-78",
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
      configurationId: "rheem-f-series-central-ducted-cfg-79",
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
      configurationId: "rheem-f-series-central-ducted-cfg-80",
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
      configurationId: "rheem-f-series-central-ducted-cfg-81",
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
      configurationId: "rheem-f-series-central-ducted-cfg-82",
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
      configurationId: "rheem-f-series-central-ducted-cfg-83",
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
      configurationId: "rheem-f-series-central-ducted-cfg-84",
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
      configurationId: "rheem-f-series-central-ducted-cfg-85",
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
      configurationId: "rheem-f-series-central-ducted-cfg-86",
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
      configurationId: "rheem-f-series-central-ducted-cfg-87",
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
      configurationId: "rheem-f-series-central-ducted-cfg-88",
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
      configurationId: "rheem-f-series-central-ducted-cfg-89",
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
      configurationId: "rheem-f-series-central-ducted-cfg-90",
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
      configurationId: "rheem-f-series-central-ducted-cfg-91",
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
      configurationId: "rheem-f-series-central-ducted-cfg-92",
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
      configurationId: "rheem-f-series-central-ducted-cfg-93",
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
      configurationId: "rheem-f-series-central-ducted-cfg-94",
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
      configurationId: "rheem-f-series-central-ducted-cfg-95",
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
      configurationId: "rheem-f-series-central-ducted-cfg-96",
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
      configurationId: "rheem-f-series-central-ducted-cfg-97",
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
      configurationId: "rheem-f-series-central-ducted-cfg-98",
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
      configurationId: "rheem-f-series-central-ducted-cfg-99",
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
      configurationId: "rheem-f-series-central-ducted-cfg-100",
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
      configurationId: "rheem-f-series-central-ducted-cfg-101",
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
      configurationId: "rheem-f-series-central-ducted-cfg-102",
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
      configurationId: "rheem-f-series-central-ducted-cfg-103",
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
      configurationId: "rheem-f-series-central-ducted-cfg-104",
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
      configurationId: "rheem-f-series-central-ducted-cfg-105",
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
      configurationId: "rheem-f-series-central-ducted-cfg-106",
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
      configurationId: "rheem-f-series-central-ducted-cfg-107",
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
      configurationId: "rheem-f-series-central-ducted-cfg-108",
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
      configurationId: "rheem-f-series-central-ducted-cfg-109",
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
      configurationId: "rheem-f-series-central-ducted-cfg-110",
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
      configurationId: "rheem-f-series-central-ducted-cfg-111",
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
      configurationId: "rheem-f-series-central-ducted-cfg-112",
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
      configurationId: "rheem-f-series-central-ducted-cfg-113",
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
      configurationId: "rheem-f-series-central-ducted-cfg-114",
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
      configurationId: "rheem-f-series-central-ducted-cfg-115",
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
      configurationId: "rheem-f-series-central-ducted-cfg-116",
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
      configurationId: "rheem-f-series-central-ducted-cfg-117",
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
      configurationId: "rheem-f-series-central-ducted-cfg-118",
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
      configurationId: "rheem-f-series-central-ducted-cfg-119",
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
      configurationId: "rheem-f-series-central-ducted-cfg-120",
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
      configurationId: "rheem-f-series-central-ducted-cfg-121",
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
      configurationId: "rheem-f-series-central-ducted-cfg-122",
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
      configurationId: "rheem-f-series-central-ducted-cfg-123",
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
      configurationId: "rheem-f-series-central-ducted-cfg-124",
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
      configurationId: "rheem-f-series-central-ducted-cfg-125",
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
      configurationId: "rheem-f-series-central-ducted-cfg-126",
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
      configurationId: "rheem-f-series-central-ducted-cfg-127",
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
      configurationId: "rheem-f-series-central-ducted-cfg-128",
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
      configurationId: "rheem-f-series-central-ducted-cfg-129",
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
      configurationId: "rheem-f-series-central-ducted-cfg-130",
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
      configurationId: "rheem-f-series-central-ducted-cfg-131",
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
      configurationId: "rheem-f-series-central-ducted-cfg-132",
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
      configurationId: "rheem-f-series-central-ducted-cfg-133",
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
      configurationId: "rheem-f-series-central-ducted-cfg-134",
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
      configurationId: "rheem-k-series-central-ducted-cfg-1",
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
      configurationId: "rheem-k-series-central-ducted-cfg-2",
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
      configurationId: "rheem-k-series-central-ducted-cfg-3",
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
      configurationId: "rheem-k-series-central-ducted-cfg-4",
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
      configurationId: "rheem-k-series-central-ducted-cfg-5",
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
      configurationId: "rheem-k-series-central-ducted-cfg-6",
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
      configurationId: "rheem-k-series-central-ducted-cfg-7",
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
      configurationId: "rheem-k-series-central-ducted-cfg-8",
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
      configurationId: "rheem-k-series-central-ducted-cfg-9",
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
      configurationId: "rheem-k-series-central-ducted-cfg-10",
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
      configurationId: "rheem-k-series-central-ducted-cfg-11",
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
      configurationId: "rheem-k-series-central-ducted-cfg-12",
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
      configurationId: "rheem-k-series-central-ducted-cfg-13",
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
      configurationId: "rheem-k-series-central-ducted-cfg-14",
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
      configurationId: "rheem-k-series-central-ducted-cfg-15",
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
      configurationId: "rheem-k-series-central-ducted-cfg-16",
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
      configurationId: "rheem-k-series-central-ducted-cfg-17",
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
      configurationId: "rheem-k-series-central-ducted-cfg-18",
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
      configurationId: "rheem-k-series-central-ducted-cfg-19",
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
      configurationId: "rheem-k-series-central-ducted-cfg-20",
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
      configurationId: "rheem-k-series-central-ducted-cfg-21",
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
      configurationId: "rheem-k-series-central-ducted-cfg-22",
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
      configurationId: "rheem-k-series-central-ducted-cfg-23",
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
      configurationId: "rheem-k-series-central-ducted-cfg-24",
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
      configurationId: "rheem-k-series-central-ducted-cfg-25",
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
      configurationId: "rheem-k-series-central-ducted-cfg-26",
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
      configurationId: "rheem-k-series-central-ducted-cfg-27",
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
      configurationId: "rheem-k-series-central-ducted-cfg-28",
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
      configurationId: "rheem-k-series-central-ducted-cfg-29",
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
      configurationId: "rheem-k-series-central-ducted-cfg-30",
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
      configurationId: "rheem-k-series-central-ducted-cfg-31",
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
      configurationId: "rheem-k-series-central-ducted-cfg-32",
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
      configurationId: "rheem-k-series-central-ducted-cfg-33",
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
      configurationId: "rheem-k-series-central-ducted-cfg-34",
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
      configurationId: "rheem-k-series-central-ducted-cfg-35",
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
      configurationId: "rheem-k-series-central-ducted-cfg-36",
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
      configurationId: "rheem-k-series-central-ducted-cfg-37",
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
      configurationId: "rheem-k-series-central-ducted-cfg-38",
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
      configurationId: "rheem-k-series-central-ducted-cfg-39",
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
      configurationId: "rheem-k-series-central-ducted-cfg-40",
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
      configurationId: "rheem-k-series-central-ducted-cfg-41",
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
      configurationId: "rheem-k-series-central-ducted-cfg-42",
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
      configurationId: "rheem-k-series-central-ducted-cfg-43",
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
      configurationId: "rheem-k-series-central-ducted-cfg-44",
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
      configurationId: "rheem-k-series-central-ducted-cfg-45",
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
      configurationId: "rheem-k-series-central-ducted-cfg-46",
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
      configurationId: "rheem-k-series-central-ducted-cfg-47",
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
      configurationId: "rheem-k-series-central-ducted-cfg-48",
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
      configurationId: "rheem-k-series-central-ducted-cfg-49",
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
      configurationId: "rheem-k-series-central-ducted-cfg-50",
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
      configurationId: "rheem-k-series-central-ducted-cfg-51",
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
      configurationId: "rheem-k-series-central-ducted-cfg-52",
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
      configurationId: "rheem-k-series-central-ducted-cfg-53",
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
      configurationId: "rheem-k-series-central-ducted-cfg-54",
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
      configurationId: "rheem-k-series-central-ducted-cfg-55",
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
      configurationId: "rheem-k-series-central-ducted-cfg-56",
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
      configurationId: "rheem-k-series-central-ducted-cfg-57",
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
      configurationId: "rheem-k-series-central-ducted-cfg-58",
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
      configurationId: "rheem-k-series-central-ducted-cfg-59",
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
      configurationId: "rheem-k-series-central-ducted-cfg-60",
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
      configurationId: "rheem-k-series-central-ducted-cfg-61",
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
      configurationId: "rheem-k-series-central-ducted-cfg-62",
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
      configurationId: "rheem-k-series-central-ducted-cfg-63",
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
      configurationId: "rheem-k-series-central-ducted-cfg-64",
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
      configurationId: "rheem-k-series-central-ducted-cfg-65",
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
      configurationId: "rheem-k-series-central-ducted-cfg-66",
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
      configurationId: "rheem-k-series-central-ducted-cfg-67",
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
      configurationId: "rheem-k-series-central-ducted-cfg-68",
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
      configurationId: "rheem-k-series-central-ducted-cfg-69",
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
      configurationId: "rheem-k-series-central-ducted-cfg-70",
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
      configurationId: "rheem-k-series-central-ducted-cfg-71",
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
      configurationId: "rheem-k-series-central-ducted-cfg-72",
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
      configurationId: "rheem-k-series-central-ducted-cfg-73",
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
      configurationId: "rheem-k-series-central-ducted-cfg-74",
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
      configurationId: "rheem-k-series-central-ducted-cfg-75",
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
      configurationId: "rheem-k-series-central-ducted-cfg-76",
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
      configurationId: "rheem-k-series-central-ducted-cfg-77",
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
      configurationId: "rheem-k-series-central-ducted-cfg-78",
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
      configurationId: "rheem-k-series-central-ducted-cfg-79",
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
      configurationId: "rheem-k-series-central-ducted-cfg-80",
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
      configurationId: "rheem-k-series-central-ducted-cfg-81",
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
      configurationId: "rheem-k-series-central-ducted-cfg-82",
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
      configurationId: "rheem-k-series-central-ducted-cfg-83",
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
      configurationId: "rheem-k-series-central-ducted-cfg-84",
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
      configurationId: "rheem-k-series-central-ducted-cfg-85",
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
      configurationId: "rheem-k-series-central-ducted-cfg-86",
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
      configurationId: "rheem-k-series-central-ducted-cfg-87",
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
      configurationId: "rheem-k-series-central-ducted-cfg-88",
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
      configurationId: "rheem-k-series-central-ducted-cfg-89",
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
      configurationId: "rheem-k-series-central-ducted-cfg-90",
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
      configurationId: "rheem-k-series-central-ducted-cfg-91",
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
      configurationId: "rheem-k-series-central-ducted-cfg-92",
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
      configurationId: "rheem-k-series-central-ducted-cfg-93",
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
      configurationId: "rheem-k-series-central-ducted-cfg-94",
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
      configurationId: "rheem-k-series-central-ducted-cfg-95",
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
      configurationId: "rheem-k-series-central-ducted-cfg-96",
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
      configurationId: "rheem-k-series-central-ducted-cfg-97",
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
      configurationId: "rheem-k-series-central-ducted-cfg-98",
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
      configurationId: "rheem-k-series-central-ducted-cfg-99",
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
      configurationId: "rheem-k-series-central-ducted-cfg-100",
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
      configurationId: "rheem-k-series-central-ducted-cfg-101",
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
      configurationId: "rheem-k-series-central-ducted-cfg-102",
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
      configurationId: "rheem-k-series-central-ducted-cfg-103",
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
      configurationId: "rheem-k-series-central-ducted-cfg-104",
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
      configurationId: "rheem-k-series-central-ducted-cfg-105",
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
      configurationId: "rheem-k-series-central-ducted-cfg-106",
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
      configurationId: "rheem-k-series-central-ducted-cfg-107",
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
      configurationId: "rheem-k-series-central-ducted-cfg-108",
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
      configurationId: "rheem-k-series-central-ducted-cfg-109",
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
      configurationId: "rheem-k-series-central-ducted-cfg-110",
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
      configurationId: "rheem-k-series-central-ducted-cfg-111",
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
      configurationId: "rheem-k-series-central-ducted-cfg-112",
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
      configurationId: "rheem-k-series-central-ducted-cfg-113",
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
      configurationId: "rheem-k-series-central-ducted-cfg-114",
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
      configurationId: "rheem-k-series-central-ducted-cfg-115",
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
      configurationId: "rheem-k-series-central-ducted-cfg-116",
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
      configurationId: "rheem-k-series-central-ducted-cfg-117",
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
      configurationId: "rheem-k-series-central-ducted-cfg-118",
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
      configurationId: "rheem-k-series-central-ducted-cfg-119",
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
      configurationId: "rheem-k-series-central-ducted-cfg-120",
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
      configurationId: "rheem-k-series-central-ducted-cfg-121",
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
      configurationId: "rheem-k-series-central-ducted-cfg-122",
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
      configurationId: "rheem-k-series-central-ducted-cfg-123",
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
      configurationId: "rheem-k-series-central-ducted-cfg-124",
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
      configurationId: "rheem-floating-air-classic-wall-single-cfg-1",
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
      configurationId: "rheem-floating-air-select-wall-single-cfg-1",
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
      configurationId: "rheem-floating-air-pro-wall-single-cfg-1",
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
      configurationId: "rheem-floating-air-pro-wall-single-cfg-2",
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
      configurationId: "rheem-floating-air-classic-plus-wall-single-cfg-1",
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
      configurationId: "rheem-floating-air-classic-plus-wall-single-cfg-2",
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
      configurationId: "rheem-floating-air-classic-plus-wall-single-cfg-3",
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
      configurationId: "rheem-floating-air-classic-plus-wall-single-cfg-4",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-1",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-2",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-3",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-4",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-5",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-6",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-7",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-8",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-9",
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
      configurationId: "rheem-floating-air-prestige-wall-single-cfg-10",
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
