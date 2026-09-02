import type { BrandDataset } from "../../types";

export const infinitylivingDataset: BrandDataset = {
  brand: {
    id: "infinityliving",
    slug: "infinityliving",
    name: "INFINITYLIVING",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "infinityliving-ez-series",
      slug: "infinityliving-ez-series",
      name: "EZ Series",
      brandId: "infinityliving",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-es-series",
      slug: "infinityliving-es-series",
      name: "ES SERIES",
      brandId: "infinityliving",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-standard",
      slug: "infinityliving-standard",
      name: "Standard",
      brandId: "infinityliving",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "infinityliving-ez-series-central-ducted",
      slug: "infinityliving-ez-series-central-ducted",
      name: "EZ Series",
      seriesId: "infinityliving-ez-series",
      brandId: "infinityliving",
      modelNumber: "EZ Series",
      normalizedModelNumber: "ez-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 19200,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 18.4,
      hspf2Min: 8.4,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-es-series-wall-single",
      slug: "infinityliving-es-series-wall-single",
      name: "ES SERIES",
      seriesId: "infinityliving-es-series",
      brandId: "infinityliving",
      modelNumber: "ES SERIES",
      normalizedModelNumber: "es-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 20.2,
      seer2Max: 20.5,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 1.8,
      cop5FMax: 2.07,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single",
      slug: "infinityliving-ez-series-wall-single",
      name: "EZ Series",
      seriesId: "infinityliving-ez-series",
      brandId: "infinityliving",
      modelNumber: "EZ Series",
      normalizedModelNumber: "ez-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 43000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 37800,
      seer2Min: 19,
      seer2Max: 23.9,
      hspf2Min: 9,
      hspf2Max: 11.5,
      cop5FMin: 1.9,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-standard-wall-single",
      slug: "infinityliving-standard-wall-single",
      name: "Standard",
      seriesId: "infinityliving-standard",
      brandId: "infinityliving",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7400,
      heatingCapacity5FMaxBtu: 23400,
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
    }
  ],
  outdoorUnits: [
    {
      id: "infinityliving-ez-24-hp",
      modelNumber: "EZ-24-HP",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-48-hp",
      modelNumber: "EZ-48-HP",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-60-hp",
      modelNumber: "EZ-60-HP",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-36-hp",
      modelNumber: "EZ-36-HP",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-24-ehpb",
      modelNumber: "EZ-24-EHPB",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-36-ehpb",
      modelNumber: "EZ-36-EHPB",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-48-ehpb",
      modelNumber: "EZ-48-EHPB",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-60-ehpb",
      modelNumber: "EZ-60-EHPB",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-24-hpb",
      modelNumber: "EZ-24-HPB",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-36-hpb",
      modelNumber: "EZ-36-HPB",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-48-hpb",
      modelNumber: "EZ-48-HPB",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-60-hpb",
      modelNumber: "EZ-60-HPB",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-48z-m5",
      modelNumber: "EZ-48Z-M5",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-09z-hp115b",
      modelNumber: "EZ-09Z-HP115B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-12zpl-hp115",
      modelNumber: "EZ-12ZPL-HP115",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-18zpl-hp230",
      modelNumber: "EZ-18ZPL-HP230",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-24zpl-hp230",
      modelNumber: "EZ-24ZPL-HP230",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-18z-m2",
      modelNumber: "EZ-18Z-M2",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-27z-m3",
      modelNumber: "EZ-27Z-M3",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-12zpl-hp115b",
      modelNumber: "EZ-12ZPL-HP115B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-18zpl-hp230b",
      modelNumber: "EZ-18ZPL-HP230B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-24zpl-hp230b",
      modelNumber: "EZ-24ZPL-HP230B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-18z-m2b",
      modelNumber: "EZ-18Z-M2B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-27z-m3b",
      modelNumber: "EZ-27Z-M3B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-36z-m4b",
      modelNumber: "EZ-36Z-M4B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-48z-m5b",
      modelNumber: "EZ-48Z-M5B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-12z-hp115b",
      modelNumber: "EZ-12Z-HP115B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-18z-hp230b",
      modelNumber: "EZ-18Z-HP230B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-24z-hp230b",
      modelNumber: "EZ-24Z-HP230B",
      brandId: "infinityliving",
      refrigerant: null as any,
    },
    {
      id: "infinityliving-ez-36zpl-hp230b",
      modelNumber: "EZ-36ZPL-HP230B",
      brandId: "infinityliving",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "infinityliving-ez-series-central-ducted-cfg-1",
      slug: "infinityliving-ez-series-central-ducted-cfg-1",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-24-hp",
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
      id: "infinityliving-ez-series-central-ducted-cfg-2",
      slug: "infinityliving-ez-series-central-ducted-cfg-2",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-48-hp",
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
      id: "infinityliving-ez-series-central-ducted-cfg-3",
      slug: "infinityliving-ez-series-central-ducted-cfg-3",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-60-hp",
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
      id: "infinityliving-ez-series-central-ducted-cfg-4",
      slug: "infinityliving-ez-series-central-ducted-cfg-4",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-36-hp",
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
      id: "infinityliving-ez-series-central-ducted-cfg-5",
      slug: "infinityliving-ez-series-central-ducted-cfg-5",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-24-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.1,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-central-ducted-cfg-6",
      slug: "infinityliving-ez-series-central-ducted-cfg-6",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-36-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.2,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-central-ducted-cfg-7",
      slug: "infinityliving-ez-series-central-ducted-cfg-7",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-48-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-central-ducted-cfg-8",
      slug: "infinityliving-ez-series-central-ducted-cfg-8",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-60-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-central-ducted-cfg-9",
      slug: "infinityliving-ez-series-central-ducted-cfg-9",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-24-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-central-ducted-cfg-10",
      slug: "infinityliving-ez-series-central-ducted-cfg-10",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-36-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-central-ducted-cfg-11",
      slug: "infinityliving-ez-series-central-ducted-cfg-11",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-48-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-central-ducted-cfg-12",
      slug: "infinityliving-ez-series-central-ducted-cfg-12",
      modelId: "infinityliving-ez-series-central-ducted",
      outdoorUnitId: "infinityliving-ez-60-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-es-series-wall-single-cfg-1",
      slug: "infinityliving-es-series-wall-single-cfg-1",
      modelId: "infinityliving-es-series-wall-single",
      outdoorUnitId: "infinityliving-ez-48z-m5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.5,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-es-series-wall-single-cfg-2",
      slug: "infinityliving-es-series-wall-single-cfg-2",
      modelId: "infinityliving-es-series-wall-single",
      outdoorUnitId: "infinityliving-ez-09z-hp115b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-1",
      slug: "infinityliving-ez-series-wall-single-cfg-1",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-12zpl-hp115",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-2",
      slug: "infinityliving-ez-series-wall-single-cfg-2",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-18zpl-hp230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-3",
      slug: "infinityliving-ez-series-wall-single-cfg-3",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-24zpl-hp230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-4",
      slug: "infinityliving-ez-series-wall-single-cfg-4",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-18z-m2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.2,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-5",
      slug: "infinityliving-ez-series-wall-single-cfg-5",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-27z-m3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-6",
      slug: "infinityliving-ez-series-wall-single-cfg-6",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-12zpl-hp115b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-7",
      slug: "infinityliving-ez-series-wall-single-cfg-7",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-18zpl-hp230b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-8",
      slug: "infinityliving-ez-series-wall-single-cfg-8",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-24zpl-hp230b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-9",
      slug: "infinityliving-ez-series-wall-single-cfg-9",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-18z-m2b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-10",
      slug: "infinityliving-ez-series-wall-single-cfg-10",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-27z-m3b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-11",
      slug: "infinityliving-ez-series-wall-single-cfg-11",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-27z-m3b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-12",
      slug: "infinityliving-ez-series-wall-single-cfg-12",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-27z-m3b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 21.5,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-13",
      slug: "infinityliving-ez-series-wall-single-cfg-13",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-36z-m4b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 23,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-14",
      slug: "infinityliving-ez-series-wall-single-cfg-14",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-36z-m4b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-15",
      slug: "infinityliving-ez-series-wall-single-cfg-15",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-36z-m4b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 21,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-16",
      slug: "infinityliving-ez-series-wall-single-cfg-16",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-48z-m5b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 21.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-17",
      slug: "infinityliving-ez-series-wall-single-cfg-17",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-48z-m5b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-ez-series-wall-single-cfg-18",
      slug: "infinityliving-ez-series-wall-single-cfg-18",
      modelId: "infinityliving-ez-series-wall-single",
      outdoorUnitId: "infinityliving-ez-48z-m5b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 20.9,
      hspf2: 10.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "infinityliving-standard-wall-single-cfg-1",
      slug: "infinityliving-standard-wall-single-cfg-1",
      modelId: "infinityliving-standard-wall-single",
      outdoorUnitId: "infinityliving-ez-12z-hp115b",
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
      id: "infinityliving-standard-wall-single-cfg-2",
      slug: "infinityliving-standard-wall-single-cfg-2",
      modelId: "infinityliving-standard-wall-single",
      outdoorUnitId: "infinityliving-ez-18z-hp230b",
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
      id: "infinityliving-standard-wall-single-cfg-3",
      slug: "infinityliving-standard-wall-single-cfg-3",
      modelId: "infinityliving-standard-wall-single",
      outdoorUnitId: "infinityliving-ez-24z-hp230b",
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
      id: "infinityliving-standard-wall-single-cfg-4",
      slug: "infinityliving-standard-wall-single-cfg-4",
      modelId: "infinityliving-standard-wall-single",
      outdoorUnitId: "infinityliving-ez-36zpl-hp230b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-1",
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
      configurationId: "infinityliving-ez-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-es-series-wall-single-cfg-1",
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
      configurationId: "infinityliving-es-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.07,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17900,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-5",
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
      configurationId: "infinityliving-ez-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-8",
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
      configurationId: "infinityliving-ez-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-11",
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
      configurationId: "infinityliving-ez-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-13",
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
      configurationId: "infinityliving-ez-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-ez-series-wall-single-cfg-18",
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
      configurationId: "infinityliving-standard-wall-single-cfg-1",
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
      configurationId: "infinityliving-standard-wall-single-cfg-2",
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
      configurationId: "infinityliving-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "infinityliving-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
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
