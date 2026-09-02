import type { BrandDataset } from "../../types";

export const westinghouseDataset: BrandDataset = {
  brand: {
    id: "westinghouse",
    slug: "westinghouse",
    name: "WESTINGHOUSE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "westinghouse-hi-uni",
      slug: "westinghouse-hi-uni",
      name: "Hi UNI",
      brandId: "westinghouse",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-standard",
      slug: "westinghouse-standard",
      name: "Standard",
      brandId: "westinghouse",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-multi-xtreme",
      slug: "westinghouse-hi-multi-xtreme",
      name: "Hi MULTI Xtreme",
      brandId: "westinghouse",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "westinghouse-hi-uni-wall-single",
      slug: "westinghouse-hi-uni-wall-single",
      name: "Hi UNI",
      seriesId: "westinghouse-hi-uni",
      brandId: "westinghouse",
      modelNumber: "Hi UNI",
      normalizedModelNumber: "hi-uni",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 19300,
      seer2Min: 18,
      seer2Max: 27.5,
      hspf2Min: 8.6,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-standard-wall-single",
      slug: "westinghouse-standard-wall-single",
      name: "Standard",
      seriesId: "westinghouse-standard",
      brandId: "westinghouse",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 40000,
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
      id: "westinghouse-hi-multi-xtreme-wall-single",
      slug: "westinghouse-hi-multi-xtreme-wall-single",
      name: "Hi MULTI Xtreme",
      seriesId: "westinghouse-hi-multi-xtreme",
      brandId: "westinghouse",
      modelNumber: "Hi MULTI Xtreme",
      normalizedModelNumber: "hi-multi-xtreme",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 12700,
      heatingCapacity5FMaxBtu: 28400,
      seer2Min: 18,
      seer2Max: 22,
      hspf2Min: 8.6,
      hspf2Max: 9.5,
      cop5FMin: 1.84,
      cop5FMax: 1.84,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "westinghouse-whp09sza21s",
      modelNumber: "WHP09SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whp18sza21s",
      modelNumber: "WHP18SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whp24sza21s",
      modelNumber: "WHP24SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whu09sza21s",
      modelNumber: "WHU09SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whu12sza21s",
      modelNumber: "WHU12SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whu18sza21s",
      modelNumber: "WHU18SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whu24sza21s",
      modelNumber: "WHU24SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whz09sza21s",
      modelNumber: "WHZ09SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whz12sza21s",
      modelNumber: "WHZ12SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whp12sza21s",
      modelNumber: "WHP12SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whu36sza21s",
      modelNumber: "WHU36SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whm24sza21s",
      modelNumber: "WHM24SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whm36sza21s",
      modelNumber: "WHM36SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whm48sza21s",
      modelNumber: "WHM48SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whm60sza21s",
      modelNumber: "WHM60SZA21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whp36m4a21s",
      modelNumber: "WHP36M4A21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whp18m2a21s",
      modelNumber: "WHP18M2A21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whp24m3a21s",
      modelNumber: "WHP24M3A21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    },
    {
      id: "westinghouse-whp42m5a21s",
      modelNumber: "WHP42M5A21S",
      brandId: "westinghouse",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "westinghouse-hi-uni-wall-single-cfg-1",
      slug: "westinghouse-hi-uni-wall-single-cfg-1",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whp09sza21s",
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
      id: "westinghouse-hi-uni-wall-single-cfg-2",
      slug: "westinghouse-hi-uni-wall-single-cfg-2",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whp18sza21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-uni-wall-single-cfg-3",
      slug: "westinghouse-hi-uni-wall-single-cfg-3",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whp24sza21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-uni-wall-single-cfg-4",
      slug: "westinghouse-hi-uni-wall-single-cfg-4",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whu09sza21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-uni-wall-single-cfg-5",
      slug: "westinghouse-hi-uni-wall-single-cfg-5",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whu12sza21s",
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
      id: "westinghouse-hi-uni-wall-single-cfg-6",
      slug: "westinghouse-hi-uni-wall-single-cfg-6",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whu18sza21s",
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
      id: "westinghouse-hi-uni-wall-single-cfg-7",
      slug: "westinghouse-hi-uni-wall-single-cfg-7",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whu24sza21s",
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
      id: "westinghouse-hi-uni-wall-single-cfg-8",
      slug: "westinghouse-hi-uni-wall-single-cfg-8",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whu09sza21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-uni-wall-single-cfg-9",
      slug: "westinghouse-hi-uni-wall-single-cfg-9",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whu12sza21s",
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
      id: "westinghouse-hi-uni-wall-single-cfg-10",
      slug: "westinghouse-hi-uni-wall-single-cfg-10",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whu18sza21s",
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
      id: "westinghouse-hi-uni-wall-single-cfg-11",
      slug: "westinghouse-hi-uni-wall-single-cfg-11",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whu24sza21s",
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
      id: "westinghouse-hi-uni-wall-single-cfg-12",
      slug: "westinghouse-hi-uni-wall-single-cfg-12",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whz09sza21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-uni-wall-single-cfg-13",
      slug: "westinghouse-hi-uni-wall-single-cfg-13",
      modelId: "westinghouse-hi-uni-wall-single",
      outdoorUnitId: "westinghouse-whz12sza21s",
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
      id: "westinghouse-standard-wall-single-cfg-1",
      slug: "westinghouse-standard-wall-single-cfg-1",
      modelId: "westinghouse-standard-wall-single",
      outdoorUnitId: "westinghouse-whp12sza21s",
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
      id: "westinghouse-standard-wall-single-cfg-2",
      slug: "westinghouse-standard-wall-single-cfg-2",
      modelId: "westinghouse-standard-wall-single",
      outdoorUnitId: "westinghouse-whu36sza21s",
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
      id: "westinghouse-standard-wall-single-cfg-3",
      slug: "westinghouse-standard-wall-single-cfg-3",
      modelId: "westinghouse-standard-wall-single",
      outdoorUnitId: "westinghouse-whu36sza21s",
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
      id: "westinghouse-standard-wall-single-cfg-4",
      slug: "westinghouse-standard-wall-single-cfg-4",
      modelId: "westinghouse-standard-wall-single",
      outdoorUnitId: "westinghouse-whm24sza21s",
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
      id: "westinghouse-standard-wall-single-cfg-5",
      slug: "westinghouse-standard-wall-single-cfg-5",
      modelId: "westinghouse-standard-wall-single",
      outdoorUnitId: "westinghouse-whm36sza21s",
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
      id: "westinghouse-standard-wall-single-cfg-6",
      slug: "westinghouse-standard-wall-single-cfg-6",
      modelId: "westinghouse-standard-wall-single",
      outdoorUnitId: "westinghouse-whm48sza21s",
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
      id: "westinghouse-standard-wall-single-cfg-7",
      slug: "westinghouse-standard-wall-single-cfg-7",
      modelId: "westinghouse-standard-wall-single",
      outdoorUnitId: "westinghouse-whm60sza21s",
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
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-1",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-1",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp36m4a21s",
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
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-2",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-2",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp18m2a21s",
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
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-3",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-3",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp24m3a21s",
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
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-4",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-4",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp42m5a21s",
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
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-5",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-5",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp18m2a21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-6",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-6",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp18m2a21s",
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
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-7",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-7",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp24m3a21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-8",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-8",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp24m3a21s",
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
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-9",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-9",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp36m4a21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-10",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-10",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp36m4a21s",
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
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-11",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-11",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp42m5a21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "westinghouse-hi-multi-xtreme-wall-single-cfg-12",
      slug: "westinghouse-hi-multi-xtreme-wall-single-cfg-12",
      modelId: "westinghouse-hi-multi-xtreme-wall-single",
      outdoorUnitId: "westinghouse-whp42m5a21s",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-1",
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
      configurationId: "westinghouse-hi-uni-wall-single-cfg-2",
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
      configurationId: "westinghouse-hi-uni-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-7",
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
      configurationId: "westinghouse-hi-uni-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19300,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-uni-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-standard-wall-single-cfg-1",
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
      configurationId: "westinghouse-standard-wall-single-cfg-2",
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
      configurationId: "westinghouse-standard-wall-single-cfg-3",
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
      configurationId: "westinghouse-standard-wall-single-cfg-4",
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
      configurationId: "westinghouse-standard-wall-single-cfg-5",
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
      configurationId: "westinghouse-standard-wall-single-cfg-6",
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
      configurationId: "westinghouse-standard-wall-single-cfg-7",
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
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "westinghouse-hi-multi-xtreme-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.84,
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
