import type { BrandDataset } from "../../types";

export const guardianDataset: BrandDataset = {
  brand: {
    id: "guardian",
    slug: "guardian",
    name: "GUARDIAN",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "guardian-urac",
      slug: "guardian-urac",
      name: "URAC",
      brandId: "guardian",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti",
      slug: "guardian-umulti",
      name: "UMULTI",
      brandId: "guardian",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac",
      slug: "guardian-upac",
      name: "UPAC",
      brandId: "guardian",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "guardian-urac-wall-single",
      slug: "guardian-urac-wall-single",
      name: "URAC",
      seriesId: "guardian-urac",
      brandId: "guardian",
      modelNumber: "URAC",
      normalizedModelNumber: "urac",
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
      id: "guardian-umulti-wall-single",
      slug: "guardian-umulti-wall-single",
      name: "UMULTI",
      seriesId: "guardian-umulti",
      brandId: "guardian",
      modelNumber: "UMULTI",
      normalizedModelNumber: "umulti",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 11500,
      heatingCapacity5FMaxBtu: 28200,
      seer2Min: 17.5,
      seer2Max: 23,
      hspf2Min: 8.8,
      hspf2Max: 10,
      cop5FMin: 1.82,
      cop5FMax: 1.99,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single",
      slug: "guardian-upac-wall-single",
      name: "UPAC",
      seriesId: "guardian-upac",
      brandId: "guardian",
      modelNumber: "UPAC",
      normalizedModelNumber: "upac",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 44000,
      heatingCapacity5FMinBtu: 8700,
      heatingCapacity5FMaxBtu: 35600,
      seer2Min: 18.5,
      seer2Max: 22,
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
      id: "guardian-urc09cn23stg1",
      modelNumber: "URC09CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-urc12cn23stg1",
      modelNumber: "URC12CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-urc18cn23stg1",
      modelNumber: "URC18CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-urc24cn23stg1",
      modelNumber: "URC24CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-urc09cn15stg1",
      modelNumber: "URC09CN15STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-urc12cn15stg1",
      modelNumber: "URC12CN15STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-umc18cn23stg1",
      modelNumber: "UMC18CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-umc24cn23stg1",
      modelNumber: "UMC24CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-umc48cn23stg1",
      modelNumber: "UMC48CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-umc36cn23stg1",
      modelNumber: "UMC36CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-upc09cn23stg1",
      modelNumber: "UPC09CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-upc12cn23stg1",
      modelNumber: "UPC12CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-upc36cn23stg1",
      modelNumber: "UPC36CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-upc48cn23stg1",
      modelNumber: "UPC48CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-upc18cn23stg1",
      modelNumber: "UPC18CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    },
    {
      id: "guardian-upc24cn23stg1",
      modelNumber: "UPC24CN23STG1",
      brandId: "guardian",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "guardian-urac-wall-single-cfg-1",
      slug: "guardian-urac-wall-single-cfg-1",
      modelId: "guardian-urac-wall-single",
      outdoorUnitId: "guardian-urc09cn23stg1",
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
      id: "guardian-urac-wall-single-cfg-2",
      slug: "guardian-urac-wall-single-cfg-2",
      modelId: "guardian-urac-wall-single",
      outdoorUnitId: "guardian-urc12cn23stg1",
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
      id: "guardian-urac-wall-single-cfg-3",
      slug: "guardian-urac-wall-single-cfg-3",
      modelId: "guardian-urac-wall-single",
      outdoorUnitId: "guardian-urc18cn23stg1",
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
      id: "guardian-urac-wall-single-cfg-4",
      slug: "guardian-urac-wall-single-cfg-4",
      modelId: "guardian-urac-wall-single",
      outdoorUnitId: "guardian-urc24cn23stg1",
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
      id: "guardian-urac-wall-single-cfg-5",
      slug: "guardian-urac-wall-single-cfg-5",
      modelId: "guardian-urac-wall-single",
      outdoorUnitId: "guardian-urc09cn15stg1",
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
      id: "guardian-urac-wall-single-cfg-6",
      slug: "guardian-urac-wall-single-cfg-6",
      modelId: "guardian-urac-wall-single",
      outdoorUnitId: "guardian-urc12cn15stg1",
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
      id: "guardian-umulti-wall-single-cfg-1",
      slug: "guardian-umulti-wall-single-cfg-1",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc18cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-2",
      slug: "guardian-umulti-wall-single-cfg-2",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc24cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-3",
      slug: "guardian-umulti-wall-single-cfg-3",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc18cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-4",
      slug: "guardian-umulti-wall-single-cfg-4",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc18cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.75,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-5",
      slug: "guardian-umulti-wall-single-cfg-5",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc24cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-6",
      slug: "guardian-umulti-wall-single-cfg-6",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc24cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-7",
      slug: "guardian-umulti-wall-single-cfg-7",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc48cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-8",
      slug: "guardian-umulti-wall-single-cfg-8",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc48cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-9",
      slug: "guardian-umulti-wall-single-cfg-9",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc48cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-10",
      slug: "guardian-umulti-wall-single-cfg-10",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc36cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-11",
      slug: "guardian-umulti-wall-single-cfg-11",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc36cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-umulti-wall-single-cfg-12",
      slug: "guardian-umulti-wall-single-cfg-12",
      modelId: "guardian-umulti-wall-single",
      outdoorUnitId: "guardian-umc36cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single-cfg-1",
      slug: "guardian-upac-wall-single-cfg-1",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc09cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single-cfg-2",
      slug: "guardian-upac-wall-single-cfg-2",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc12cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single-cfg-3",
      slug: "guardian-upac-wall-single-cfg-3",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc36cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-4",
      slug: "guardian-upac-wall-single-cfg-4",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc48cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single-cfg-5",
      slug: "guardian-upac-wall-single-cfg-5",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc36cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-6",
      slug: "guardian-upac-wall-single-cfg-6",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc48cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single-cfg-7",
      slug: "guardian-upac-wall-single-cfg-7",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc09cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-8",
      slug: "guardian-upac-wall-single-cfg-8",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc12cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-9",
      slug: "guardian-upac-wall-single-cfg-9",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc09cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-10",
      slug: "guardian-upac-wall-single-cfg-10",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc12cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-11",
      slug: "guardian-upac-wall-single-cfg-11",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc18cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-12",
      slug: "guardian-upac-wall-single-cfg-12",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc36cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-13",
      slug: "guardian-upac-wall-single-cfg-13",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc48cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 19.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single-cfg-14",
      slug: "guardian-upac-wall-single-cfg-14",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc24cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single-cfg-15",
      slug: "guardian-upac-wall-single-cfg-15",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc18cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-16",
      slug: "guardian-upac-wall-single-cfg-16",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc24cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-17",
      slug: "guardian-upac-wall-single-cfg-17",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc36cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "guardian-upac-wall-single-cfg-18",
      slug: "guardian-upac-wall-single-cfg-18",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc24cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-19",
      slug: "guardian-upac-wall-single-cfg-19",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc24cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-20",
      slug: "guardian-upac-wall-single-cfg-20",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc18cn23stg1",
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
      id: "guardian-upac-wall-single-cfg-21",
      slug: "guardian-upac-wall-single-cfg-21",
      modelId: "guardian-upac-wall-single",
      outdoorUnitId: "guardian-upc24cn23stg1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "guardian-urac-wall-single-cfg-1",
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
      configurationId: "guardian-urac-wall-single-cfg-2",
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
      configurationId: "guardian-urac-wall-single-cfg-3",
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
      configurationId: "guardian-urac-wall-single-cfg-4",
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
      configurationId: "guardian-urac-wall-single-cfg-5",
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
      configurationId: "guardian-urac-wall-single-cfg-6",
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
      configurationId: "guardian-umulti-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-umulti-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-1",
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
      configurationId: "guardian-upac-wall-single-cfg-2",
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
      configurationId: "guardian-upac-wall-single-cfg-3",
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
      configurationId: "guardian-upac-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-5",
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
      configurationId: "guardian-upac-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-7",
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
      configurationId: "guardian-upac-wall-single-cfg-8",
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
      configurationId: "guardian-upac-wall-single-cfg-9",
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
      configurationId: "guardian-upac-wall-single-cfg-10",
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
      configurationId: "guardian-upac-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-15",
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
      configurationId: "guardian-upac-wall-single-cfg-16",
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
      configurationId: "guardian-upac-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "guardian-upac-wall-single-cfg-20",
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
      configurationId: "guardian-upac-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
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
