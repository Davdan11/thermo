import type { BrandDataset } from "../../types";

export const lbgproductsDataset: BrandDataset = {
  brand: {
    id: "lbg-products",
    slug: "lbg-products",
    name: "LBG PRODUCTS",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "lbg-products-standard",
      slug: "lbg-products-standard",
      name: "Standard",
      brandId: "lbg-products",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series",
      slug: "lbg-products-lbh-series",
      name: "LBH series",
      brandId: "lbg-products",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do",
      slug: "lbg-products-lmhb18do",
      name: "LMHB18DO",
      brandId: "lbg-products",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmh-series",
      slug: "lbg-products-lmh-series",
      name: "LMH Series",
      brandId: "lbg-products",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series",
      slug: "lbg-products-luh-series",
      name: "LUH series",
      brandId: "lbg-products",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lchb-series",
      slug: "lbg-products-lchb-series",
      name: "LCHB series",
      brandId: "lbg-products",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series",
      slug: "lbg-products-lcuh-series",
      name: "LCUH series",
      brandId: "lbg-products",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "lbg-products-standard-wall-single",
      slug: "lbg-products-standard-wall-single",
      name: "Standard",
      seriesId: "lbg-products-standard",
      brandId: "lbg-products",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 37000,
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
      id: "lbg-products-lbh-series-wall-single",
      slug: "lbg-products-lbh-series-wall-single",
      name: "LBH series",
      seriesId: "lbg-products-lbh-series",
      brandId: "lbg-products",
      modelNumber: "LBH series",
      normalizedModelNumber: "lbh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 18,
      seer2Max: 29,
      hspf2Min: 8.5,
      hspf2Max: 14.5,
      cop5FMin: 1.75,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single",
      slug: "lbg-products-lmhb18do-wall-single",
      name: "LMHB18DO",
      seriesId: "lbg-products-lmhb18do",
      brandId: "lbg-products",
      modelNumber: "LMHB18DO",
      normalizedModelNumber: "lmhb18do",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 19,
      seer2Max: 23.5,
      hspf2Min: 9,
      hspf2Max: 10.2,
      cop5FMin: 1.7,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmh-series-wall-single",
      slug: "lbg-products-lmh-series-wall-single",
      name: "LMH Series",
      seriesId: "lbg-products-lmh-series",
      brandId: "lbg-products",
      modelNumber: "LMH Series",
      normalizedModelNumber: "lmh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 26400,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 20,
      seer2Max: 21.1,
      hspf2Min: 9.2,
      hspf2Max: 9.5,
      cop5FMin: 1.68,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single",
      slug: "lbg-products-luh-series-wall-single",
      name: "LUH series",
      seriesId: "lbg-products-luh-series",
      brandId: "lbg-products",
      modelNumber: "LUH series",
      normalizedModelNumber: "luh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 16.5,
      seer2Max: 19.4,
      hspf2Min: 9.8,
      hspf2Max: 11,
      cop5FMin: 1.75,
      cop5FMax: 1.98,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lchb-series-central-ducted",
      slug: "lbg-products-lchb-series-central-ducted",
      name: "LCHB series",
      seriesId: "lbg-products-lchb-series",
      brandId: "lbg-products",
      modelNumber: "LCHB series",
      normalizedModelNumber: "lchb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 14700,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 17,
      hspf2Min: 9.2,
      hspf2Max: 10,
      cop5FMin: 1.85,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted",
      slug: "lbg-products-lcuh-series-central-ducted",
      name: "LCUH series",
      seriesId: "lbg-products-lcuh-series",
      brandId: "lbg-products",
      modelNumber: "LCUH series",
      normalizedModelNumber: "lcuh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.3,
      seer2Max: 18,
      hspf2Min: 8.9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.04,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "lbg-products-lch24036do",
      modelNumber: "LCH24036DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbh24dwo",
      modelNumber: "LBH24DWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbh12ato",
      modelNumber: "LBH12ATO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbh24dto",
      modelNumber: "LBH24DTO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbh36dto",
      modelNumber: "LBH36DTO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbh12dto",
      modelNumber: "LBH12DTO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lchb60do",
      modelNumber: "LCHB60DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-luhb36do",
      modelNumber: "LUHB36DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-luhb60do",
      modelNumber: "LUHB60DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lchb18do",
      modelNumber: "LCHB18DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lchb30do",
      modelNumber: "LCHB30DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lchb36do",
      modelNumber: "LCHB36DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lchb48do",
      modelNumber: "LCHB48DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbh09ato",
      modelNumber: "LBH09ATO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbh09dto",
      modelNumber: "LBH09DTO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbh18dto",
      modelNumber: "LBH18DTO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb09dywo",
      modelNumber: "LBHB09DYWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb12dywo",
      modelNumber: "LBHB12DYWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb18dywo",
      modelNumber: "LBHB18DYWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb09duwo",
      modelNumber: "LBHB09DUWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb12duwo",
      modelNumber: "LBHB12DUWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb18duwo",
      modelNumber: "LBHB18DUWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb24duwo",
      modelNumber: "LBHB24DUWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb06dvwo",
      modelNumber: "LBHB06DVWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb09dvwo",
      modelNumber: "LBHB09DVWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb12dvwo",
      modelNumber: "LBHB12DVWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb18dvwo",
      modelNumber: "LBHB18DVWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lbhb24dvwo",
      modelNumber: "LBHB24DVWO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lmhb18do",
      modelNumber: "LMHB18DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lmhb27do",
      modelNumber: "LMHB27DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lmuhb18do",
      modelNumber: "LMUHB18DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lmuhb27do",
      modelNumber: "LMUHB27DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lmuhb36do",
      modelNumber: "LMUHB36DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lmuhb48do",
      modelNumber: "LMUHB48DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lmhb36do",
      modelNumber: "LMHB36DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lmhb48do",
      modelNumber: "LMHB48DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-luhb48do",
      modelNumber: "LUHB48DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-luuhb36do",
      modelNumber: "LUUHB36DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-luuhb48do",
      modelNumber: "LUUHB48DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lchb24do",
      modelNumber: "LCHB24DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lcuhb18do",
      modelNumber: "LCUHB18DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lcuhb24do",
      modelNumber: "LCUHB24DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lcuhb30do",
      modelNumber: "LCUHB30DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lcuhb36do",
      modelNumber: "LCUHB36DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lcuhb48do",
      modelNumber: "LCUHB48DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    },
    {
      id: "lbg-products-lcuhb60do",
      modelNumber: "LCUHB60DO",
      brandId: "lbg-products",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "lbg-products-standard-wall-single-cfg-1",
      slug: "lbg-products-standard-wall-single-cfg-1",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lch24036do",
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
      id: "lbg-products-standard-wall-single-cfg-2",
      slug: "lbg-products-standard-wall-single-cfg-2",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lbh24dwo",
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
      id: "lbg-products-standard-wall-single-cfg-3",
      slug: "lbg-products-standard-wall-single-cfg-3",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lbh12ato",
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
      id: "lbg-products-standard-wall-single-cfg-4",
      slug: "lbg-products-standard-wall-single-cfg-4",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lbh24dto",
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
      id: "lbg-products-standard-wall-single-cfg-5",
      slug: "lbg-products-standard-wall-single-cfg-5",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lbh36dto",
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
      id: "lbg-products-standard-wall-single-cfg-6",
      slug: "lbg-products-standard-wall-single-cfg-6",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lbh12dto",
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
      id: "lbg-products-standard-wall-single-cfg-7",
      slug: "lbg-products-standard-wall-single-cfg-7",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb60do",
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
      id: "lbg-products-standard-wall-single-cfg-8",
      slug: "lbg-products-standard-wall-single-cfg-8",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-luhb36do",
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
      id: "lbg-products-standard-wall-single-cfg-9",
      slug: "lbg-products-standard-wall-single-cfg-9",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-luhb36do",
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
      id: "lbg-products-standard-wall-single-cfg-10",
      slug: "lbg-products-standard-wall-single-cfg-10",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-luhb60do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 59000,
      coolingCapacityMaxBtu: 59000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-standard-wall-single-cfg-11",
      slug: "lbg-products-standard-wall-single-cfg-11",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-luhb36do",
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
      id: "lbg-products-standard-wall-single-cfg-12",
      slug: "lbg-products-standard-wall-single-cfg-12",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-luhb60do",
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
      id: "lbg-products-standard-wall-single-cfg-13",
      slug: "lbg-products-standard-wall-single-cfg-13",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb18do",
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
      id: "lbg-products-standard-wall-single-cfg-14",
      slug: "lbg-products-standard-wall-single-cfg-14",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb30do",
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
      id: "lbg-products-standard-wall-single-cfg-15",
      slug: "lbg-products-standard-wall-single-cfg-15",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb36do",
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
      id: "lbg-products-standard-wall-single-cfg-16",
      slug: "lbg-products-standard-wall-single-cfg-16",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb48do",
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
      id: "lbg-products-standard-wall-single-cfg-17",
      slug: "lbg-products-standard-wall-single-cfg-17",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb60do",
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
      id: "lbg-products-standard-wall-single-cfg-18",
      slug: "lbg-products-standard-wall-single-cfg-18",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb18do",
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
      id: "lbg-products-standard-wall-single-cfg-19",
      slug: "lbg-products-standard-wall-single-cfg-19",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb30do",
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
      id: "lbg-products-standard-wall-single-cfg-20",
      slug: "lbg-products-standard-wall-single-cfg-20",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb36do",
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
      id: "lbg-products-standard-wall-single-cfg-21",
      slug: "lbg-products-standard-wall-single-cfg-21",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb48do",
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
      id: "lbg-products-standard-wall-single-cfg-22",
      slug: "lbg-products-standard-wall-single-cfg-22",
      modelId: "lbg-products-standard-wall-single",
      outdoorUnitId: "lbg-products-lchb60do",
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
      id: "lbg-products-lbh-series-wall-single-cfg-1",
      slug: "lbg-products-lbh-series-wall-single-cfg-1",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbh09ato",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-2",
      slug: "lbg-products-lbh-series-wall-single-cfg-2",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbh09dto",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-3",
      slug: "lbg-products-lbh-series-wall-single-cfg-3",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbh18dto",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-4",
      slug: "lbg-products-lbh-series-wall-single-cfg-4",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb09dywo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 29,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-5",
      slug: "lbg-products-lbh-series-wall-single-cfg-5",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12dywo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27.5,
      hspf2: 14.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-6",
      slug: "lbg-products-lbh-series-wall-single-cfg-6",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18dywo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-7",
      slug: "lbg-products-lbh-series-wall-single-cfg-7",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb09duwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-8",
      slug: "lbg-products-lbh-series-wall-single-cfg-8",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12duwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-9",
      slug: "lbg-products-lbh-series-wall-single-cfg-9",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18duwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-10",
      slug: "lbg-products-lbh-series-wall-single-cfg-10",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb24duwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-11",
      slug: "lbg-products-lbh-series-wall-single-cfg-11",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb09duwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-12",
      slug: "lbg-products-lbh-series-wall-single-cfg-12",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12duwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-13",
      slug: "lbg-products-lbh-series-wall-single-cfg-13",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18duwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-14",
      slug: "lbg-products-lbh-series-wall-single-cfg-14",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb24duwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-15",
      slug: "lbg-products-lbh-series-wall-single-cfg-15",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb09duwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-16",
      slug: "lbg-products-lbh-series-wall-single-cfg-16",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12duwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-17",
      slug: "lbg-products-lbh-series-wall-single-cfg-17",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18duwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-18",
      slug: "lbg-products-lbh-series-wall-single-cfg-18",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb24duwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-19",
      slug: "lbg-products-lbh-series-wall-single-cfg-19",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12duwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-20",
      slug: "lbg-products-lbh-series-wall-single-cfg-20",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18duwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-21",
      slug: "lbg-products-lbh-series-wall-single-cfg-21",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb24duwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-22",
      slug: "lbg-products-lbh-series-wall-single-cfg-22",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb06dvwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-23",
      slug: "lbg-products-lbh-series-wall-single-cfg-23",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb09dvwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-24",
      slug: "lbg-products-lbh-series-wall-single-cfg-24",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12dvwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-25",
      slug: "lbg-products-lbh-series-wall-single-cfg-25",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18dvwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-26",
      slug: "lbg-products-lbh-series-wall-single-cfg-26",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb24dvwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-27",
      slug: "lbg-products-lbh-series-wall-single-cfg-27",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb09dvwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-28",
      slug: "lbg-products-lbh-series-wall-single-cfg-28",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12dvwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-29",
      slug: "lbg-products-lbh-series-wall-single-cfg-29",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18dvwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-30",
      slug: "lbg-products-lbh-series-wall-single-cfg-30",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb24dvwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-31",
      slug: "lbg-products-lbh-series-wall-single-cfg-31",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb09dvwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-32",
      slug: "lbg-products-lbh-series-wall-single-cfg-32",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12dvwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-33",
      slug: "lbg-products-lbh-series-wall-single-cfg-33",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18dvwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-34",
      slug: "lbg-products-lbh-series-wall-single-cfg-34",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb24dvwo",
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
      id: "lbg-products-lbh-series-wall-single-cfg-35",
      slug: "lbg-products-lbh-series-wall-single-cfg-35",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb12dvwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-36",
      slug: "lbg-products-lbh-series-wall-single-cfg-36",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb18dvwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lbh-series-wall-single-cfg-37",
      slug: "lbg-products-lbh-series-wall-single-cfg-37",
      modelId: "lbg-products-lbh-series-wall-single",
      outdoorUnitId: "lbg-products-lbhb24dvwo",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-1",
      slug: "lbg-products-lmhb18do-wall-single-cfg-1",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmhb18do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-2",
      slug: "lbg-products-lmhb18do-wall-single-cfg-2",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmhb18do",
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
      id: "lbg-products-lmhb18do-wall-single-cfg-3",
      slug: "lbg-products-lmhb18do-wall-single-cfg-3",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmhb18do",
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
      id: "lbg-products-lmhb18do-wall-single-cfg-4",
      slug: "lbg-products-lmhb18do-wall-single-cfg-4",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmhb27do",
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
      id: "lbg-products-lmhb18do-wall-single-cfg-5",
      slug: "lbg-products-lmhb18do-wall-single-cfg-5",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmhb27do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-6",
      slug: "lbg-products-lmhb18do-wall-single-cfg-6",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmhb27do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-7",
      slug: "lbg-products-lmhb18do-wall-single-cfg-7",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb18do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-8",
      slug: "lbg-products-lmhb18do-wall-single-cfg-8",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb18do",
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
      id: "lbg-products-lmhb18do-wall-single-cfg-9",
      slug: "lbg-products-lmhb18do-wall-single-cfg-9",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb18do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19.75,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-10",
      slug: "lbg-products-lmhb18do-wall-single-cfg-10",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb27do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.6,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-11",
      slug: "lbg-products-lmhb18do-wall-single-cfg-11",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb27do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.3,
      hspf2: 9.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-12",
      slug: "lbg-products-lmhb18do-wall-single-cfg-12",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-13",
      slug: "lbg-products-lmhb18do-wall-single-cfg-13",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-14",
      slug: "lbg-products-lmhb18do-wall-single-cfg-14",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-15",
      slug: "lbg-products-lmhb18do-wall-single-cfg-15",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmhb18do-wall-single-cfg-16",
      slug: "lbg-products-lmhb18do-wall-single-cfg-16",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb48do",
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
      id: "lbg-products-lmhb18do-wall-single-cfg-17",
      slug: "lbg-products-lmhb18do-wall-single-cfg-17",
      modelId: "lbg-products-lmhb18do-wall-single",
      outdoorUnitId: "lbg-products-lmuhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.05,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmh-series-wall-single-cfg-1",
      slug: "lbg-products-lmh-series-wall-single-cfg-1",
      modelId: "lbg-products-lmh-series-wall-single",
      outdoorUnitId: "lbg-products-lmhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmh-series-wall-single-cfg-2",
      slug: "lbg-products-lmh-series-wall-single-cfg-2",
      modelId: "lbg-products-lmh-series-wall-single",
      outdoorUnitId: "lbg-products-lmhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmh-series-wall-single-cfg-3",
      slug: "lbg-products-lmh-series-wall-single-cfg-3",
      modelId: "lbg-products-lmh-series-wall-single",
      outdoorUnitId: "lbg-products-lmhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lmh-series-wall-single-cfg-4",
      slug: "lbg-products-lmh-series-wall-single-cfg-4",
      modelId: "lbg-products-lmh-series-wall-single",
      outdoorUnitId: "lbg-products-lmhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-1",
      slug: "lbg-products-luh-series-wall-single-cfg-1",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-2",
      slug: "lbg-products-luh-series-wall-single-cfg-2",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-3",
      slug: "lbg-products-luh-series-wall-single-cfg-3",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-4",
      slug: "lbg-products-luh-series-wall-single-cfg-4",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luuhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-5",
      slug: "lbg-products-luh-series-wall-single-cfg-5",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luuhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-6",
      slug: "lbg-products-luh-series-wall-single-cfg-6",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luuhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-7",
      slug: "lbg-products-luh-series-wall-single-cfg-7",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luuhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-8",
      slug: "lbg-products-luh-series-wall-single-cfg-8",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luuhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-luh-series-wall-single-cfg-9",
      slug: "lbg-products-luh-series-wall-single-cfg-9",
      modelId: "lbg-products-luh-series-wall-single",
      outdoorUnitId: "lbg-products-luuhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lchb-series-central-ducted-cfg-1",
      slug: "lbg-products-lchb-series-central-ducted-cfg-1",
      modelId: "lbg-products-lchb-series-central-ducted",
      outdoorUnitId: "lbg-products-lchb24do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lchb-series-central-ducted-cfg-2",
      slug: "lbg-products-lchb-series-central-ducted-cfg-2",
      modelId: "lbg-products-lchb-series-central-ducted",
      outdoorUnitId: "lbg-products-lchb24do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lchb-series-central-ducted-cfg-3",
      slug: "lbg-products-lchb-series-central-ducted-cfg-3",
      modelId: "lbg-products-lchb-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb18do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lchb-series-central-ducted-cfg-4",
      slug: "lbg-products-lchb-series-central-ducted-cfg-4",
      modelId: "lbg-products-lchb-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb24do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lchb-series-central-ducted-cfg-5",
      slug: "lbg-products-lchb-series-central-ducted-cfg-5",
      modelId: "lbg-products-lchb-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb30do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lchb-series-central-ducted-cfg-6",
      slug: "lbg-products-lchb-series-central-ducted-cfg-6",
      modelId: "lbg-products-lchb-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted-cfg-1",
      slug: "lbg-products-lcuh-series-central-ducted-cfg-1",
      modelId: "lbg-products-lcuh-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted-cfg-2",
      slug: "lbg-products-lcuh-series-central-ducted-cfg-2",
      modelId: "lbg-products-lcuh-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb60do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted-cfg-3",
      slug: "lbg-products-lcuh-series-central-ducted-cfg-3",
      modelId: "lbg-products-lcuh-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb18do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted-cfg-4",
      slug: "lbg-products-lcuh-series-central-ducted-cfg-4",
      modelId: "lbg-products-lcuh-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb24do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted-cfg-5",
      slug: "lbg-products-lcuh-series-central-ducted-cfg-5",
      modelId: "lbg-products-lcuh-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb30do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted-cfg-6",
      slug: "lbg-products-lcuh-series-central-ducted-cfg-6",
      modelId: "lbg-products-lcuh-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb36do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted-cfg-7",
      slug: "lbg-products-lcuh-series-central-ducted-cfg-7",
      modelId: "lbg-products-lcuh-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb48do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lbg-products-lcuh-series-central-ducted-cfg-8",
      slug: "lbg-products-lcuh-series-central-ducted-cfg-8",
      modelId: "lbg-products-lcuh-series-central-ducted",
      outdoorUnitId: "lbg-products-lcuhb60do",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "lbg-products-standard-wall-single-cfg-1",
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
      configurationId: "lbg-products-standard-wall-single-cfg-2",
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
      configurationId: "lbg-products-standard-wall-single-cfg-3",
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
      configurationId: "lbg-products-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-standard-wall-single-cfg-5",
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
      configurationId: "lbg-products-standard-wall-single-cfg-6",
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
      configurationId: "lbg-products-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-standard-wall-single-cfg-8",
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
      configurationId: "lbg-products-standard-wall-single-cfg-9",
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
      configurationId: "lbg-products-standard-wall-single-cfg-10",
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
      configurationId: "lbg-products-standard-wall-single-cfg-11",
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
      configurationId: "lbg-products-standard-wall-single-cfg-12",
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
      configurationId: "lbg-products-standard-wall-single-cfg-13",
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
      configurationId: "lbg-products-standard-wall-single-cfg-14",
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
      configurationId: "lbg-products-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-standard-wall-single-cfg-16",
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
      configurationId: "lbg-products-standard-wall-single-cfg-17",
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
      configurationId: "lbg-products-standard-wall-single-cfg-18",
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
      configurationId: "lbg-products-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-standard-wall-single-cfg-21",
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
      configurationId: "lbg-products-standard-wall-single-cfg-22",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-6",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.41,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-11",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-12",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-13",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-14",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-15",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-16",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-17",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-18",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-27",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-28",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-29",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-30",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-31",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-32",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-33",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-34",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-35",
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
      configurationId: "lbg-products-lbh-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lbh-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-2",
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
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-4",
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
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-6",
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
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-8",
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
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-14",
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
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-15",
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
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-16",
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
      configurationId: "lbg-products-lmhb18do-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.68,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmh-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lmh-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-luh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-luh-series-wall-single-cfg-2",
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
      configurationId: "lbg-products-luh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-luh-series-wall-single-cfg-4",
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
      configurationId: "lbg-products-luh-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-luh-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-luh-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-luh-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-luh-series-wall-single-cfg-9",
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
      configurationId: "lbg-products-lchb-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lchb-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lchb-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lchb-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lchb-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lchb-series-central-ducted-cfg-6",
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
      configurationId: "lbg-products-lcuh-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lcuh-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lcuh-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lcuh-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lcuh-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lcuh-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lcuh-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lbg-products-lcuh-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
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
