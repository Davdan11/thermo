import type { BrandDataset } from "../../types";

export const haxxairDataset: BrandDataset = {
  brand: {
    id: "haxxair",
    slug: "haxxair",
    name: "HAXXAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "haxxair-standard",
      slug: "haxxair-standard",
      name: "Standard",
      brandId: "haxxair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-uni",
      slug: "haxxair-hi-uni",
      name: "Hi UNI",
      brandId: "haxxair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-multi-xtreme",
      slug: "haxxair-hi-multi-xtreme",
      name: "Hi MULTI Xtreme",
      brandId: "haxxair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-ultra-hd",
      slug: "haxxair-hi-ultra-hd",
      name: "Hi ULTRA HD",
      brandId: "haxxair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-ultra",
      slug: "haxxair-ultra",
      name: "Ultra",
      brandId: "haxxair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "haxxair-standard-wall-single",
      slug: "haxxair-standard-wall-single",
      name: "Standard",
      seriesId: "haxxair-standard",
      brandId: "haxxair",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 11600,
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
      id: "haxxair-hi-uni-wall-single",
      slug: "haxxair-hi-uni-wall-single",
      name: "Hi UNI",
      seriesId: "haxxair-hi-uni",
      brandId: "haxxair",
      modelNumber: "Hi UNI",
      normalizedModelNumber: "hi-uni",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 18.5,
      seer2Max: 25,
      hspf2Min: 8.6,
      hspf2Max: 11,
      cop5FMin: 1.75,
      cop5FMax: 2.36,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-multi-xtreme-wall-single",
      slug: "haxxair-hi-multi-xtreme-wall-single",
      name: "Hi MULTI Xtreme",
      seriesId: "haxxair-hi-multi-xtreme",
      brandId: "haxxair",
      modelNumber: "Hi MULTI Xtreme",
      normalizedModelNumber: "hi-multi-xtreme",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 11500,
      heatingCapacity5FMaxBtu: 28400,
      seer2Min: 17.5,
      seer2Max: 23,
      hspf2Min: 8.6,
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
      id: "haxxair-hi-ultra-hd-central-ducted",
      slug: "haxxair-hi-ultra-hd-central-ducted",
      name: "Hi ULTRA HD",
      seriesId: "haxxair-hi-ultra-hd",
      brandId: "haxxair",
      modelNumber: "Hi ULTRA HD",
      normalizedModelNumber: "hi-ultra-hd",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 31200,
      seer2Min: 16.5,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-ultra-central-ducted",
      slug: "haxxair-ultra-central-ducted",
      name: "Ultra",
      seriesId: "haxxair-ultra",
      brandId: "haxxair",
      modelNumber: "Ultra",
      normalizedModelNumber: "ultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 20400,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 19,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 2.15,
      cop5FMax: 2.52,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "haxxair-hvh-18b2d",
      modelNumber: "HVH-18B2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhd-24e2d",
      modelNumber: "HVHD-24E2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhd-36e2d",
      modelNumber: "HVHD-36E2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhd-60e2d",
      modelNumber: "HVHD-60E2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhd-60e2d2",
      modelNumber: "HVHD-60E2D2",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhsc-36t2d",
      modelNumber: "HVHSC-36T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvh-09t2d",
      modelNumber: "HVH-09T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvh-12t2d",
      modelNumber: "HVH-12T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvh-18t2d",
      modelNumber: "HVH-18T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvh-24t2d",
      modelNumber: "HVH-24T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhsc-12t2d",
      modelNumber: "HVHSC-12T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhsc-18t2d",
      modelNumber: "HVHSC-18T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhsc-24t2d",
      modelNumber: "HVHSC-24T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhz-18v2d",
      modelNumber: "HVHZ-18V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhz-24v2d",
      modelNumber: "HVHZ-24V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhz-09v2d",
      modelNumber: "HVHZ-09V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhz-12v2d",
      modelNumber: "HVHZ-12V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhm-24t2d",
      modelNumber: "HVHM-24T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhm-36t2d",
      modelNumber: "HVHM-36T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhm-18t2d",
      modelNumber: "HVHM-18T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhm-42t2d",
      modelNumber: "HVHM-42T2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhmz-18v2d",
      modelNumber: "HVHMZ-18V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhmz-27v2d",
      modelNumber: "HVHMZ-27V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhmz-42v2d",
      modelNumber: "HVHMZ-42V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhmz-36v2d",
      modelNumber: "HVHMZ-36V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhd-24e2d2",
      modelNumber: "HVHD-24E2D2",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhd-36e2d2",
      modelNumber: "HVHD-36E2D2",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhd-48e2d2",
      modelNumber: "HVHD-48E2D2",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhdz-24v2d",
      modelNumber: "HVHDZ-24V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhdz-36v2d",
      modelNumber: "HVHDZ-36V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhdz-48v2d",
      modelNumber: "HVHDZ-48V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    },
    {
      id: "haxxair-hvhdz-60v2d",
      modelNumber: "HVHDZ-60V2D",
      brandId: "haxxair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "haxxair-standard-wall-single-cfg-1",
      slug: "haxxair-standard-wall-single-cfg-1",
      modelId: "haxxair-standard-wall-single",
      outdoorUnitId: "haxxair-hvh-18b2d",
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
      id: "haxxair-standard-wall-single-cfg-2",
      slug: "haxxair-standard-wall-single-cfg-2",
      modelId: "haxxair-standard-wall-single",
      outdoorUnitId: "haxxair-hvhd-24e2d",
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
      id: "haxxair-standard-wall-single-cfg-3",
      slug: "haxxair-standard-wall-single-cfg-3",
      modelId: "haxxair-standard-wall-single",
      outdoorUnitId: "haxxair-hvhd-36e2d",
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
      id: "haxxair-standard-wall-single-cfg-4",
      slug: "haxxair-standard-wall-single-cfg-4",
      modelId: "haxxair-standard-wall-single",
      outdoorUnitId: "haxxair-hvhd-60e2d",
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
      id: "haxxair-standard-wall-single-cfg-5",
      slug: "haxxair-standard-wall-single-cfg-5",
      modelId: "haxxair-standard-wall-single",
      outdoorUnitId: "haxxair-hvhd-60e2d2",
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
      id: "haxxair-standard-wall-single-cfg-6",
      slug: "haxxair-standard-wall-single-cfg-6",
      modelId: "haxxair-standard-wall-single",
      outdoorUnitId: "haxxair-hvhsc-36t2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-1",
      slug: "haxxair-hi-uni-wall-single-cfg-1",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvh-09t2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-2",
      slug: "haxxair-hi-uni-wall-single-cfg-2",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvh-12t2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-3",
      slug: "haxxair-hi-uni-wall-single-cfg-3",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvh-18t2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-4",
      slug: "haxxair-hi-uni-wall-single-cfg-4",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvh-24t2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-5",
      slug: "haxxair-hi-uni-wall-single-cfg-5",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhsc-12t2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-6",
      slug: "haxxair-hi-uni-wall-single-cfg-6",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhsc-12t2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-uni-wall-single-cfg-7",
      slug: "haxxair-hi-uni-wall-single-cfg-7",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhsc-18t2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-8",
      slug: "haxxair-hi-uni-wall-single-cfg-8",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhsc-18t2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-uni-wall-single-cfg-9",
      slug: "haxxair-hi-uni-wall-single-cfg-9",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhsc-24t2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-10",
      slug: "haxxair-hi-uni-wall-single-cfg-10",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhsc-12t2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-uni-wall-single-cfg-11",
      slug: "haxxair-hi-uni-wall-single-cfg-11",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhsc-18t2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-uni-wall-single-cfg-12",
      slug: "haxxair-hi-uni-wall-single-cfg-12",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhz-18v2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-13",
      slug: "haxxair-hi-uni-wall-single-cfg-13",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhz-24v2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-14",
      slug: "haxxair-hi-uni-wall-single-cfg-14",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhz-09v2d",
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
      id: "haxxair-hi-uni-wall-single-cfg-15",
      slug: "haxxair-hi-uni-wall-single-cfg-15",
      modelId: "haxxair-hi-uni-wall-single",
      outdoorUnitId: "haxxair-hvhz-12v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-1",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-1",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-24t2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-2",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-2",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-36t2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-3",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-3",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-24t2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.83,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-4",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-4",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-36t2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 20.25,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-5",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-5",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-36t2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-6",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-6",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-24t2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-7",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-7",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-18t2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-8",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-8",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-18t2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-9",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-9",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-18t2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-10",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-10",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-42t2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 8.88,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-11",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-11",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-42t2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-12",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-12",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhm-42t2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-13",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-13",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-18v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-14",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-14",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-18v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-15",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-15",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-18v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-16",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-16",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-27v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-17",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-17",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-27v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-18",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-18",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-27v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-19",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-19",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-42v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-20",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-20",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-42v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-21",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-21",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-42v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-22",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-22",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-36v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-23",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-23",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-36v2d",
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
      id: "haxxair-hi-multi-xtreme-wall-single-cfg-24",
      slug: "haxxair-hi-multi-xtreme-wall-single-cfg-24",
      modelId: "haxxair-hi-multi-xtreme-wall-single",
      outdoorUnitId: "haxxair-hvhmz-36v2d",
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
      id: "haxxair-hi-ultra-hd-central-ducted-cfg-1",
      slug: "haxxair-hi-ultra-hd-central-ducted-cfg-1",
      modelId: "haxxair-hi-ultra-hd-central-ducted",
      outdoorUnitId: "haxxair-hvhd-24e2d2",
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
      id: "haxxair-hi-ultra-hd-central-ducted-cfg-2",
      slug: "haxxair-hi-ultra-hd-central-ducted-cfg-2",
      modelId: "haxxair-hi-ultra-hd-central-ducted",
      outdoorUnitId: "haxxair-hvhd-36e2d2",
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
      id: "haxxair-hi-ultra-hd-central-ducted-cfg-3",
      slug: "haxxair-hi-ultra-hd-central-ducted-cfg-3",
      modelId: "haxxair-hi-ultra-hd-central-ducted",
      outdoorUnitId: "haxxair-hvhd-48e2d2",
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
      id: "haxxair-hi-ultra-hd-central-ducted-cfg-4",
      slug: "haxxair-hi-ultra-hd-central-ducted-cfg-4",
      modelId: "haxxair-hi-ultra-hd-central-ducted",
      outdoorUnitId: "haxxair-hvhd-36e2d2",
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
      id: "haxxair-hi-ultra-hd-central-ducted-cfg-5",
      slug: "haxxair-hi-ultra-hd-central-ducted-cfg-5",
      modelId: "haxxair-hi-ultra-hd-central-ducted",
      outdoorUnitId: "haxxair-hvhd-48e2d2",
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
      id: "haxxair-ultra-central-ducted-cfg-1",
      slug: "haxxair-ultra-central-ducted-cfg-1",
      modelId: "haxxair-ultra-central-ducted",
      outdoorUnitId: "haxxair-hvhdz-24v2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-ultra-central-ducted-cfg-2",
      slug: "haxxair-ultra-central-ducted-cfg-2",
      modelId: "haxxair-ultra-central-ducted",
      outdoorUnitId: "haxxair-hvhdz-36v2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-ultra-central-ducted-cfg-3",
      slug: "haxxair-ultra-central-ducted-cfg-3",
      modelId: "haxxair-ultra-central-ducted",
      outdoorUnitId: "haxxair-hvhdz-48v2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "haxxair-ultra-central-ducted-cfg-4",
      slug: "haxxair-ultra-central-ducted-cfg-4",
      modelId: "haxxair-ultra-central-ducted",
      outdoorUnitId: "haxxair-hvhdz-60v2d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "haxxair-standard-wall-single-cfg-1",
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
      configurationId: "haxxair-standard-wall-single-cfg-2",
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
      configurationId: "haxxair-standard-wall-single-cfg-3",
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
      configurationId: "haxxair-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haxxair-standard-wall-single-cfg-5",
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
      configurationId: "haxxair-standard-wall-single-cfg-6",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-1",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-2",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-3",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-4",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-5",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haxxair-hi-uni-wall-single-cfg-7",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haxxair-hi-uni-wall-single-cfg-9",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haxxair-hi-uni-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haxxair-hi-uni-wall-single-cfg-12",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-13",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-14",
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
      configurationId: "haxxair-hi-uni-wall-single-cfg-15",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-1",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-2",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-3",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-4",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-5",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-6",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-7",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-8",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-9",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-11",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-12",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-13",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-14",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-15",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-16",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-17",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-18",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-19",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-20",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-21",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-22",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-23",
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
      configurationId: "haxxair-hi-multi-xtreme-wall-single-cfg-24",
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
      configurationId: "haxxair-hi-ultra-hd-central-ducted-cfg-1",
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
      configurationId: "haxxair-hi-ultra-hd-central-ducted-cfg-2",
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
      configurationId: "haxxair-hi-ultra-hd-central-ducted-cfg-3",
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
      configurationId: "haxxair-hi-ultra-hd-central-ducted-cfg-4",
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
      configurationId: "haxxair-hi-ultra-hd-central-ducted-cfg-5",
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
      configurationId: "haxxair-ultra-central-ducted-cfg-1",
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
      configurationId: "haxxair-ultra-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haxxair-ultra-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "haxxair-ultra-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.46,
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
