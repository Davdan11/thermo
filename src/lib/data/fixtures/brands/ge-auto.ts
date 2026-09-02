import type { BrandDataset } from "../../types";

export const geDataset: BrandDataset = {
  brand: {
    id: "ge",
    slug: "ge",
    name: "GE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ge-ns18h-series",
      slug: "ge-ns18h-series",
      name: "NS18H SERIES",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-standard",
      slug: "ge-standard",
      name: "Standard",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series",
      slug: "ge-ns22h-series",
      name: "NS22H SERIES",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series",
      slug: "ge-ns22-series",
      name: "NS22 Series",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-connect",
      slug: "ge-connect",
      name: "Connect",
      brandId: "ge",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ge-ns18h-series-central-ducted",
      slug: "ge-ns18h-series-central-ducted",
      name: "NS18H SERIES",
      seriesId: "ge-ns18h-series",
      brandId: "ge",
      modelNumber: "NS18H SERIES",
      normalizedModelNumber: "ns18h-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 34400,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 22600,
      seer2Min: 17.1,
      seer2Max: 19,
      hspf2Min: 7.8,
      hspf2Max: 8.5,
      cop5FMin: 1.85,
      cop5FMax: 2.18,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-standard-central-ducted",
      slug: "ge-standard-central-ducted",
      name: "Standard",
      seriesId: "ge-standard",
      brandId: "ge",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 30400,
      heatingCapacity5FMaxBtu: 30400,
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
      id: "ge-ns22h-series-central-ducted",
      slug: "ge-ns22h-series-central-ducted",
      name: "NS22H SERIES",
      seriesId: "ge-ns22h-series",
      brandId: "ge",
      modelNumber: "NS22H SERIES",
      normalizedModelNumber: "ns22h-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13900,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 17,
      seer2Max: 22,
      hspf2Min: 7.8,
      hspf2Max: 9.5,
      cop5FMin: 1.82,
      cop5FMax: 2.32,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted",
      slug: "ge-ns22-series-central-ducted",
      name: "NS22 Series",
      seriesId: "ge-ns22-series",
      brandId: "ge",
      modelNumber: "NS22 Series",
      normalizedModelNumber: "ns22-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 37000,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 8,
      hspf2Max: 8,
      cop5FMin: 1.86,
      cop5FMax: 1.86,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-connect-central-ducted",
      slug: "ge-connect-central-ducted",
      name: "Connect",
      seriesId: "ge-connect",
      brandId: "ge",
      modelNumber: "Connect",
      normalizedModelNumber: "connect",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 31200,
      seer2Min: 16,
      seer2Max: 17,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ge-ns18h36ma4",
      modelNumber: "NS18H36MA4-**",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns18h60ma4",
      modelNumber: "NS18H60MA4-**",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns22h36ma4-a",
      modelNumber: "NS22H36MA4-**A",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns22h48ma4-a",
      modelNumber: "NS22H48MA4-**A",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns22h24ma4-a",
      modelNumber: "NS22H24MA4-**A",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-ns22h60ma4-a",
      modelNumber: "NS22H60MA4-**A",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-auh2436zgda",
      modelNumber: "AUH2436ZGDA*",
      brandId: "ge",
      refrigerant: null as any,
    },
    {
      id: "ge-auh4860zgda",
      modelNumber: "AUH4860ZGDA*",
      brandId: "ge",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ge-ns18h-series-central-ducted-cfg-1",
      slug: "ge-ns18h-series-central-ducted-cfg-1",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-2",
      slug: "ge-ns18h-series-central-ducted-cfg-2",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-3",
      slug: "ge-ns18h-series-central-ducted-cfg-3",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-4",
      slug: "ge-ns18h-series-central-ducted-cfg-4",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-5",
      slug: "ge-ns18h-series-central-ducted-cfg-5",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-6",
      slug: "ge-ns18h-series-central-ducted-cfg-6",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-7",
      slug: "ge-ns18h-series-central-ducted-cfg-7",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-8",
      slug: "ge-ns18h-series-central-ducted-cfg-8",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-9",
      slug: "ge-ns18h-series-central-ducted-cfg-9",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-10",
      slug: "ge-ns18h-series-central-ducted-cfg-10",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-11",
      slug: "ge-ns18h-series-central-ducted-cfg-11",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-12",
      slug: "ge-ns18h-series-central-ducted-cfg-12",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-13",
      slug: "ge-ns18h-series-central-ducted-cfg-13",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-14",
      slug: "ge-ns18h-series-central-ducted-cfg-14",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-15",
      slug: "ge-ns18h-series-central-ducted-cfg-15",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-16",
      slug: "ge-ns18h-series-central-ducted-cfg-16",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-17",
      slug: "ge-ns18h-series-central-ducted-cfg-17",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-18",
      slug: "ge-ns18h-series-central-ducted-cfg-18",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-19",
      slug: "ge-ns18h-series-central-ducted-cfg-19",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-20",
      slug: "ge-ns18h-series-central-ducted-cfg-20",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-21",
      slug: "ge-ns18h-series-central-ducted-cfg-21",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-22",
      slug: "ge-ns18h-series-central-ducted-cfg-22",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-23",
      slug: "ge-ns18h-series-central-ducted-cfg-23",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-24",
      slug: "ge-ns18h-series-central-ducted-cfg-24",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-25",
      slug: "ge-ns18h-series-central-ducted-cfg-25",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-26",
      slug: "ge-ns18h-series-central-ducted-cfg-26",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-27",
      slug: "ge-ns18h-series-central-ducted-cfg-27",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-28",
      slug: "ge-ns18h-series-central-ducted-cfg-28",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-29",
      slug: "ge-ns18h-series-central-ducted-cfg-29",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-30",
      slug: "ge-ns18h-series-central-ducted-cfg-30",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-31",
      slug: "ge-ns18h-series-central-ducted-cfg-31",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-32",
      slug: "ge-ns18h-series-central-ducted-cfg-32",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-33",
      slug: "ge-ns18h-series-central-ducted-cfg-33",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-34",
      slug: "ge-ns18h-series-central-ducted-cfg-34",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-35",
      slug: "ge-ns18h-series-central-ducted-cfg-35",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-36",
      slug: "ge-ns18h-series-central-ducted-cfg-36",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-37",
      slug: "ge-ns18h-series-central-ducted-cfg-37",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-38",
      slug: "ge-ns18h-series-central-ducted-cfg-38",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-39",
      slug: "ge-ns18h-series-central-ducted-cfg-39",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-40",
      slug: "ge-ns18h-series-central-ducted-cfg-40",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-41",
      slug: "ge-ns18h-series-central-ducted-cfg-41",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-42",
      slug: "ge-ns18h-series-central-ducted-cfg-42",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-43",
      slug: "ge-ns18h-series-central-ducted-cfg-43",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-44",
      slug: "ge-ns18h-series-central-ducted-cfg-44",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-45",
      slug: "ge-ns18h-series-central-ducted-cfg-45",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-46",
      slug: "ge-ns18h-series-central-ducted-cfg-46",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-47",
      slug: "ge-ns18h-series-central-ducted-cfg-47",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-48",
      slug: "ge-ns18h-series-central-ducted-cfg-48",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-49",
      slug: "ge-ns18h-series-central-ducted-cfg-49",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-50",
      slug: "ge-ns18h-series-central-ducted-cfg-50",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-51",
      slug: "ge-ns18h-series-central-ducted-cfg-51",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-52",
      slug: "ge-ns18h-series-central-ducted-cfg-52",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-53",
      slug: "ge-ns18h-series-central-ducted-cfg-53",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-54",
      slug: "ge-ns18h-series-central-ducted-cfg-54",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-55",
      slug: "ge-ns18h-series-central-ducted-cfg-55",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-56",
      slug: "ge-ns18h-series-central-ducted-cfg-56",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-57",
      slug: "ge-ns18h-series-central-ducted-cfg-57",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-58",
      slug: "ge-ns18h-series-central-ducted-cfg-58",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-59",
      slug: "ge-ns18h-series-central-ducted-cfg-59",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns18h-series-central-ducted-cfg-60",
      slug: "ge-ns18h-series-central-ducted-cfg-60",
      modelId: "ge-ns18h-series-central-ducted",
      outdoorUnitId: "ge-ns18h36ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 18,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-standard-central-ducted-cfg-1",
      slug: "ge-standard-central-ducted-cfg-1",
      modelId: "ge-standard-central-ducted",
      outdoorUnitId: "ge-ns18h60ma4",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-1",
      slug: "ge-ns22h-series-central-ducted-cfg-1",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-2",
      slug: "ge-ns22h-series-central-ducted-cfg-2",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-3",
      slug: "ge-ns22h-series-central-ducted-cfg-3",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-4",
      slug: "ge-ns22h-series-central-ducted-cfg-4",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-5",
      slug: "ge-ns22h-series-central-ducted-cfg-5",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-6",
      slug: "ge-ns22h-series-central-ducted-cfg-6",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-7",
      slug: "ge-ns22h-series-central-ducted-cfg-7",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-8",
      slug: "ge-ns22h-series-central-ducted-cfg-8",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-9",
      slug: "ge-ns22h-series-central-ducted-cfg-9",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-10",
      slug: "ge-ns22h-series-central-ducted-cfg-10",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-11",
      slug: "ge-ns22h-series-central-ducted-cfg-11",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-12",
      slug: "ge-ns22h-series-central-ducted-cfg-12",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-13",
      slug: "ge-ns22h-series-central-ducted-cfg-13",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-14",
      slug: "ge-ns22h-series-central-ducted-cfg-14",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-15",
      slug: "ge-ns22h-series-central-ducted-cfg-15",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-16",
      slug: "ge-ns22h-series-central-ducted-cfg-16",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-17",
      slug: "ge-ns22h-series-central-ducted-cfg-17",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-18",
      slug: "ge-ns22h-series-central-ducted-cfg-18",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-19",
      slug: "ge-ns22h-series-central-ducted-cfg-19",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-20",
      slug: "ge-ns22h-series-central-ducted-cfg-20",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-21",
      slug: "ge-ns22h-series-central-ducted-cfg-21",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-22",
      slug: "ge-ns22h-series-central-ducted-cfg-22",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-23",
      slug: "ge-ns22h-series-central-ducted-cfg-23",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-24",
      slug: "ge-ns22h-series-central-ducted-cfg-24",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-25",
      slug: "ge-ns22h-series-central-ducted-cfg-25",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-26",
      slug: "ge-ns22h-series-central-ducted-cfg-26",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-27",
      slug: "ge-ns22h-series-central-ducted-cfg-27",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-28",
      slug: "ge-ns22h-series-central-ducted-cfg-28",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-29",
      slug: "ge-ns22h-series-central-ducted-cfg-29",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-30",
      slug: "ge-ns22h-series-central-ducted-cfg-30",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-31",
      slug: "ge-ns22h-series-central-ducted-cfg-31",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-32",
      slug: "ge-ns22h-series-central-ducted-cfg-32",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-33",
      slug: "ge-ns22h-series-central-ducted-cfg-33",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-34",
      slug: "ge-ns22h-series-central-ducted-cfg-34",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-35",
      slug: "ge-ns22h-series-central-ducted-cfg-35",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-36",
      slug: "ge-ns22h-series-central-ducted-cfg-36",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-37",
      slug: "ge-ns22h-series-central-ducted-cfg-37",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-38",
      slug: "ge-ns22h-series-central-ducted-cfg-38",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-39",
      slug: "ge-ns22h-series-central-ducted-cfg-39",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-40",
      slug: "ge-ns22h-series-central-ducted-cfg-40",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-41",
      slug: "ge-ns22h-series-central-ducted-cfg-41",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-42",
      slug: "ge-ns22h-series-central-ducted-cfg-42",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-43",
      slug: "ge-ns22h-series-central-ducted-cfg-43",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-44",
      slug: "ge-ns22h-series-central-ducted-cfg-44",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-45",
      slug: "ge-ns22h-series-central-ducted-cfg-45",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-46",
      slug: "ge-ns22h-series-central-ducted-cfg-46",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-47",
      slug: "ge-ns22h-series-central-ducted-cfg-47",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-48",
      slug: "ge-ns22h-series-central-ducted-cfg-48",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-49",
      slug: "ge-ns22h-series-central-ducted-cfg-49",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-50",
      slug: "ge-ns22h-series-central-ducted-cfg-50",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-51",
      slug: "ge-ns22h-series-central-ducted-cfg-51",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-52",
      slug: "ge-ns22h-series-central-ducted-cfg-52",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-53",
      slug: "ge-ns22h-series-central-ducted-cfg-53",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-54",
      slug: "ge-ns22h-series-central-ducted-cfg-54",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-55",
      slug: "ge-ns22h-series-central-ducted-cfg-55",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-56",
      slug: "ge-ns22h-series-central-ducted-cfg-56",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-57",
      slug: "ge-ns22h-series-central-ducted-cfg-57",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-58",
      slug: "ge-ns22h-series-central-ducted-cfg-58",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-59",
      slug: "ge-ns22h-series-central-ducted-cfg-59",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-60",
      slug: "ge-ns22h-series-central-ducted-cfg-60",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-61",
      slug: "ge-ns22h-series-central-ducted-cfg-61",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-62",
      slug: "ge-ns22h-series-central-ducted-cfg-62",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-63",
      slug: "ge-ns22h-series-central-ducted-cfg-63",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-64",
      slug: "ge-ns22h-series-central-ducted-cfg-64",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-65",
      slug: "ge-ns22h-series-central-ducted-cfg-65",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-66",
      slug: "ge-ns22h-series-central-ducted-cfg-66",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-67",
      slug: "ge-ns22h-series-central-ducted-cfg-67",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-68",
      slug: "ge-ns22h-series-central-ducted-cfg-68",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-69",
      slug: "ge-ns22h-series-central-ducted-cfg-69",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-70",
      slug: "ge-ns22h-series-central-ducted-cfg-70",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-71",
      slug: "ge-ns22h-series-central-ducted-cfg-71",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-72",
      slug: "ge-ns22h-series-central-ducted-cfg-72",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-73",
      slug: "ge-ns22h-series-central-ducted-cfg-73",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-74",
      slug: "ge-ns22h-series-central-ducted-cfg-74",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-75",
      slug: "ge-ns22h-series-central-ducted-cfg-75",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-76",
      slug: "ge-ns22h-series-central-ducted-cfg-76",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-77",
      slug: "ge-ns22h-series-central-ducted-cfg-77",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-78",
      slug: "ge-ns22h-series-central-ducted-cfg-78",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-79",
      slug: "ge-ns22h-series-central-ducted-cfg-79",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-80",
      slug: "ge-ns22h-series-central-ducted-cfg-80",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-81",
      slug: "ge-ns22h-series-central-ducted-cfg-81",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-82",
      slug: "ge-ns22h-series-central-ducted-cfg-82",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-83",
      slug: "ge-ns22h-series-central-ducted-cfg-83",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-84",
      slug: "ge-ns22h-series-central-ducted-cfg-84",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-85",
      slug: "ge-ns22h-series-central-ducted-cfg-85",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-86",
      slug: "ge-ns22h-series-central-ducted-cfg-86",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-87",
      slug: "ge-ns22h-series-central-ducted-cfg-87",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-88",
      slug: "ge-ns22h-series-central-ducted-cfg-88",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-89",
      slug: "ge-ns22h-series-central-ducted-cfg-89",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-90",
      slug: "ge-ns22h-series-central-ducted-cfg-90",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-91",
      slug: "ge-ns22h-series-central-ducted-cfg-91",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-92",
      slug: "ge-ns22h-series-central-ducted-cfg-92",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-93",
      slug: "ge-ns22h-series-central-ducted-cfg-93",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-94",
      slug: "ge-ns22h-series-central-ducted-cfg-94",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-95",
      slug: "ge-ns22h-series-central-ducted-cfg-95",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-96",
      slug: "ge-ns22h-series-central-ducted-cfg-96",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-97",
      slug: "ge-ns22h-series-central-ducted-cfg-97",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-98",
      slug: "ge-ns22h-series-central-ducted-cfg-98",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-99",
      slug: "ge-ns22h-series-central-ducted-cfg-99",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-100",
      slug: "ge-ns22h-series-central-ducted-cfg-100",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-101",
      slug: "ge-ns22h-series-central-ducted-cfg-101",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-102",
      slug: "ge-ns22h-series-central-ducted-cfg-102",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-103",
      slug: "ge-ns22h-series-central-ducted-cfg-103",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-104",
      slug: "ge-ns22h-series-central-ducted-cfg-104",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-105",
      slug: "ge-ns22h-series-central-ducted-cfg-105",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-106",
      slug: "ge-ns22h-series-central-ducted-cfg-106",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-107",
      slug: "ge-ns22h-series-central-ducted-cfg-107",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-108",
      slug: "ge-ns22h-series-central-ducted-cfg-108",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-109",
      slug: "ge-ns22h-series-central-ducted-cfg-109",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-110",
      slug: "ge-ns22h-series-central-ducted-cfg-110",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-111",
      slug: "ge-ns22h-series-central-ducted-cfg-111",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-112",
      slug: "ge-ns22h-series-central-ducted-cfg-112",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-113",
      slug: "ge-ns22h-series-central-ducted-cfg-113",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-114",
      slug: "ge-ns22h-series-central-ducted-cfg-114",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-115",
      slug: "ge-ns22h-series-central-ducted-cfg-115",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-116",
      slug: "ge-ns22h-series-central-ducted-cfg-116",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-117",
      slug: "ge-ns22h-series-central-ducted-cfg-117",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-118",
      slug: "ge-ns22h-series-central-ducted-cfg-118",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-119",
      slug: "ge-ns22h-series-central-ducted-cfg-119",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-120",
      slug: "ge-ns22h-series-central-ducted-cfg-120",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-121",
      slug: "ge-ns22h-series-central-ducted-cfg-121",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-122",
      slug: "ge-ns22h-series-central-ducted-cfg-122",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-123",
      slug: "ge-ns22h-series-central-ducted-cfg-123",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-124",
      slug: "ge-ns22h-series-central-ducted-cfg-124",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-125",
      slug: "ge-ns22h-series-central-ducted-cfg-125",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-126",
      slug: "ge-ns22h-series-central-ducted-cfg-126",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-127",
      slug: "ge-ns22h-series-central-ducted-cfg-127",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-128",
      slug: "ge-ns22h-series-central-ducted-cfg-128",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-129",
      slug: "ge-ns22h-series-central-ducted-cfg-129",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-130",
      slug: "ge-ns22h-series-central-ducted-cfg-130",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-131",
      slug: "ge-ns22h-series-central-ducted-cfg-131",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-132",
      slug: "ge-ns22h-series-central-ducted-cfg-132",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-133",
      slug: "ge-ns22h-series-central-ducted-cfg-133",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-134",
      slug: "ge-ns22h-series-central-ducted-cfg-134",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-135",
      slug: "ge-ns22h-series-central-ducted-cfg-135",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-136",
      slug: "ge-ns22h-series-central-ducted-cfg-136",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-137",
      slug: "ge-ns22h-series-central-ducted-cfg-137",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-138",
      slug: "ge-ns22h-series-central-ducted-cfg-138",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-139",
      slug: "ge-ns22h-series-central-ducted-cfg-139",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-140",
      slug: "ge-ns22h-series-central-ducted-cfg-140",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-141",
      slug: "ge-ns22h-series-central-ducted-cfg-141",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-142",
      slug: "ge-ns22h-series-central-ducted-cfg-142",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-143",
      slug: "ge-ns22h-series-central-ducted-cfg-143",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-144",
      slug: "ge-ns22h-series-central-ducted-cfg-144",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-145",
      slug: "ge-ns22h-series-central-ducted-cfg-145",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-146",
      slug: "ge-ns22h-series-central-ducted-cfg-146",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-147",
      slug: "ge-ns22h-series-central-ducted-cfg-147",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-148",
      slug: "ge-ns22h-series-central-ducted-cfg-148",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-149",
      slug: "ge-ns22h-series-central-ducted-cfg-149",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-150",
      slug: "ge-ns22h-series-central-ducted-cfg-150",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-151",
      slug: "ge-ns22h-series-central-ducted-cfg-151",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-152",
      slug: "ge-ns22h-series-central-ducted-cfg-152",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-153",
      slug: "ge-ns22h-series-central-ducted-cfg-153",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-154",
      slug: "ge-ns22h-series-central-ducted-cfg-154",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-155",
      slug: "ge-ns22h-series-central-ducted-cfg-155",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-156",
      slug: "ge-ns22h-series-central-ducted-cfg-156",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-157",
      slug: "ge-ns22h-series-central-ducted-cfg-157",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-158",
      slug: "ge-ns22h-series-central-ducted-cfg-158",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-159",
      slug: "ge-ns22h-series-central-ducted-cfg-159",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-160",
      slug: "ge-ns22h-series-central-ducted-cfg-160",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-161",
      slug: "ge-ns22h-series-central-ducted-cfg-161",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-162",
      slug: "ge-ns22h-series-central-ducted-cfg-162",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-163",
      slug: "ge-ns22h-series-central-ducted-cfg-163",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-164",
      slug: "ge-ns22h-series-central-ducted-cfg-164",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-165",
      slug: "ge-ns22h-series-central-ducted-cfg-165",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-166",
      slug: "ge-ns22h-series-central-ducted-cfg-166",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-167",
      slug: "ge-ns22h-series-central-ducted-cfg-167",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-168",
      slug: "ge-ns22h-series-central-ducted-cfg-168",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-169",
      slug: "ge-ns22h-series-central-ducted-cfg-169",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-170",
      slug: "ge-ns22h-series-central-ducted-cfg-170",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-171",
      slug: "ge-ns22h-series-central-ducted-cfg-171",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-172",
      slug: "ge-ns22h-series-central-ducted-cfg-172",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-173",
      slug: "ge-ns22h-series-central-ducted-cfg-173",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-174",
      slug: "ge-ns22h-series-central-ducted-cfg-174",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-175",
      slug: "ge-ns22h-series-central-ducted-cfg-175",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-176",
      slug: "ge-ns22h-series-central-ducted-cfg-176",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-177",
      slug: "ge-ns22h-series-central-ducted-cfg-177",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-178",
      slug: "ge-ns22h-series-central-ducted-cfg-178",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-179",
      slug: "ge-ns22h-series-central-ducted-cfg-179",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-180",
      slug: "ge-ns22h-series-central-ducted-cfg-180",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-181",
      slug: "ge-ns22h-series-central-ducted-cfg-181",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-182",
      slug: "ge-ns22h-series-central-ducted-cfg-182",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-183",
      slug: "ge-ns22h-series-central-ducted-cfg-183",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-184",
      slug: "ge-ns22h-series-central-ducted-cfg-184",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-185",
      slug: "ge-ns22h-series-central-ducted-cfg-185",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-186",
      slug: "ge-ns22h-series-central-ducted-cfg-186",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-187",
      slug: "ge-ns22h-series-central-ducted-cfg-187",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-188",
      slug: "ge-ns22h-series-central-ducted-cfg-188",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-189",
      slug: "ge-ns22h-series-central-ducted-cfg-189",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-190",
      slug: "ge-ns22h-series-central-ducted-cfg-190",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-191",
      slug: "ge-ns22h-series-central-ducted-cfg-191",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-192",
      slug: "ge-ns22h-series-central-ducted-cfg-192",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-193",
      slug: "ge-ns22h-series-central-ducted-cfg-193",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-194",
      slug: "ge-ns22h-series-central-ducted-cfg-194",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-195",
      slug: "ge-ns22h-series-central-ducted-cfg-195",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-196",
      slug: "ge-ns22h-series-central-ducted-cfg-196",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-197",
      slug: "ge-ns22h-series-central-ducted-cfg-197",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-198",
      slug: "ge-ns22h-series-central-ducted-cfg-198",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-199",
      slug: "ge-ns22h-series-central-ducted-cfg-199",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-200",
      slug: "ge-ns22h-series-central-ducted-cfg-200",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-201",
      slug: "ge-ns22h-series-central-ducted-cfg-201",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-202",
      slug: "ge-ns22h-series-central-ducted-cfg-202",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-203",
      slug: "ge-ns22h-series-central-ducted-cfg-203",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-204",
      slug: "ge-ns22h-series-central-ducted-cfg-204",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-205",
      slug: "ge-ns22h-series-central-ducted-cfg-205",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-206",
      slug: "ge-ns22h-series-central-ducted-cfg-206",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-207",
      slug: "ge-ns22h-series-central-ducted-cfg-207",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-208",
      slug: "ge-ns22h-series-central-ducted-cfg-208",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-209",
      slug: "ge-ns22h-series-central-ducted-cfg-209",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-210",
      slug: "ge-ns22h-series-central-ducted-cfg-210",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-211",
      slug: "ge-ns22h-series-central-ducted-cfg-211",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-212",
      slug: "ge-ns22h-series-central-ducted-cfg-212",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-213",
      slug: "ge-ns22h-series-central-ducted-cfg-213",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-214",
      slug: "ge-ns22h-series-central-ducted-cfg-214",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-215",
      slug: "ge-ns22h-series-central-ducted-cfg-215",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-216",
      slug: "ge-ns22h-series-central-ducted-cfg-216",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-217",
      slug: "ge-ns22h-series-central-ducted-cfg-217",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-218",
      slug: "ge-ns22h-series-central-ducted-cfg-218",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-219",
      slug: "ge-ns22h-series-central-ducted-cfg-219",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-220",
      slug: "ge-ns22h-series-central-ducted-cfg-220",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-221",
      slug: "ge-ns22h-series-central-ducted-cfg-221",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-222",
      slug: "ge-ns22h-series-central-ducted-cfg-222",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-223",
      slug: "ge-ns22h-series-central-ducted-cfg-223",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-224",
      slug: "ge-ns22h-series-central-ducted-cfg-224",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-225",
      slug: "ge-ns22h-series-central-ducted-cfg-225",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-226",
      slug: "ge-ns22h-series-central-ducted-cfg-226",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-227",
      slug: "ge-ns22h-series-central-ducted-cfg-227",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-228",
      slug: "ge-ns22h-series-central-ducted-cfg-228",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-229",
      slug: "ge-ns22h-series-central-ducted-cfg-229",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-230",
      slug: "ge-ns22h-series-central-ducted-cfg-230",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-231",
      slug: "ge-ns22h-series-central-ducted-cfg-231",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-232",
      slug: "ge-ns22h-series-central-ducted-cfg-232",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 22,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-233",
      slug: "ge-ns22h-series-central-ducted-cfg-233",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 22,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-234",
      slug: "ge-ns22h-series-central-ducted-cfg-234",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-235",
      slug: "ge-ns22h-series-central-ducted-cfg-235",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-236",
      slug: "ge-ns22h-series-central-ducted-cfg-236",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-237",
      slug: "ge-ns22h-series-central-ducted-cfg-237",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-238",
      slug: "ge-ns22h-series-central-ducted-cfg-238",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-239",
      slug: "ge-ns22h-series-central-ducted-cfg-239",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-240",
      slug: "ge-ns22h-series-central-ducted-cfg-240",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-241",
      slug: "ge-ns22h-series-central-ducted-cfg-241",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-242",
      slug: "ge-ns22h-series-central-ducted-cfg-242",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-243",
      slug: "ge-ns22h-series-central-ducted-cfg-243",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-244",
      slug: "ge-ns22h-series-central-ducted-cfg-244",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-245",
      slug: "ge-ns22h-series-central-ducted-cfg-245",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-246",
      slug: "ge-ns22h-series-central-ducted-cfg-246",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-247",
      slug: "ge-ns22h-series-central-ducted-cfg-247",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-248",
      slug: "ge-ns22h-series-central-ducted-cfg-248",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-249",
      slug: "ge-ns22h-series-central-ducted-cfg-249",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 22,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-250",
      slug: "ge-ns22h-series-central-ducted-cfg-250",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 22,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-251",
      slug: "ge-ns22h-series-central-ducted-cfg-251",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-252",
      slug: "ge-ns22h-series-central-ducted-cfg-252",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-253",
      slug: "ge-ns22h-series-central-ducted-cfg-253",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-254",
      slug: "ge-ns22h-series-central-ducted-cfg-254",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-255",
      slug: "ge-ns22h-series-central-ducted-cfg-255",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-256",
      slug: "ge-ns22h-series-central-ducted-cfg-256",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-257",
      slug: "ge-ns22h-series-central-ducted-cfg-257",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-258",
      slug: "ge-ns22h-series-central-ducted-cfg-258",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-259",
      slug: "ge-ns22h-series-central-ducted-cfg-259",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-260",
      slug: "ge-ns22h-series-central-ducted-cfg-260",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-261",
      slug: "ge-ns22h-series-central-ducted-cfg-261",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 20.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-262",
      slug: "ge-ns22h-series-central-ducted-cfg-262",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-263",
      slug: "ge-ns22h-series-central-ducted-cfg-263",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-264",
      slug: "ge-ns22h-series-central-ducted-cfg-264",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-265",
      slug: "ge-ns22h-series-central-ducted-cfg-265",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-266",
      slug: "ge-ns22h-series-central-ducted-cfg-266",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-267",
      slug: "ge-ns22h-series-central-ducted-cfg-267",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-268",
      slug: "ge-ns22h-series-central-ducted-cfg-268",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-269",
      slug: "ge-ns22h-series-central-ducted-cfg-269",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-270",
      slug: "ge-ns22h-series-central-ducted-cfg-270",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-271",
      slug: "ge-ns22h-series-central-ducted-cfg-271",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-272",
      slug: "ge-ns22h-series-central-ducted-cfg-272",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-273",
      slug: "ge-ns22h-series-central-ducted-cfg-273",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-274",
      slug: "ge-ns22h-series-central-ducted-cfg-274",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h24ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-275",
      slug: "ge-ns22h-series-central-ducted-cfg-275",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-276",
      slug: "ge-ns22h-series-central-ducted-cfg-276",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-277",
      slug: "ge-ns22h-series-central-ducted-cfg-277",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-278",
      slug: "ge-ns22h-series-central-ducted-cfg-278",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-279",
      slug: "ge-ns22h-series-central-ducted-cfg-279",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-280",
      slug: "ge-ns22h-series-central-ducted-cfg-280",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-281",
      slug: "ge-ns22h-series-central-ducted-cfg-281",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-282",
      slug: "ge-ns22h-series-central-ducted-cfg-282",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-283",
      slug: "ge-ns22h-series-central-ducted-cfg-283",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-284",
      slug: "ge-ns22h-series-central-ducted-cfg-284",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-285",
      slug: "ge-ns22h-series-central-ducted-cfg-285",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-286",
      slug: "ge-ns22h-series-central-ducted-cfg-286",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-287",
      slug: "ge-ns22h-series-central-ducted-cfg-287",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-288",
      slug: "ge-ns22h-series-central-ducted-cfg-288",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-289",
      slug: "ge-ns22h-series-central-ducted-cfg-289",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-290",
      slug: "ge-ns22h-series-central-ducted-cfg-290",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-291",
      slug: "ge-ns22h-series-central-ducted-cfg-291",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-292",
      slug: "ge-ns22h-series-central-ducted-cfg-292",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-293",
      slug: "ge-ns22h-series-central-ducted-cfg-293",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-294",
      slug: "ge-ns22h-series-central-ducted-cfg-294",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-295",
      slug: "ge-ns22h-series-central-ducted-cfg-295",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-296",
      slug: "ge-ns22h-series-central-ducted-cfg-296",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-297",
      slug: "ge-ns22h-series-central-ducted-cfg-297",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-298",
      slug: "ge-ns22h-series-central-ducted-cfg-298",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-299",
      slug: "ge-ns22h-series-central-ducted-cfg-299",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-300",
      slug: "ge-ns22h-series-central-ducted-cfg-300",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-301",
      slug: "ge-ns22h-series-central-ducted-cfg-301",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-302",
      slug: "ge-ns22h-series-central-ducted-cfg-302",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-303",
      slug: "ge-ns22h-series-central-ducted-cfg-303",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-304",
      slug: "ge-ns22h-series-central-ducted-cfg-304",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-305",
      slug: "ge-ns22h-series-central-ducted-cfg-305",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-306",
      slug: "ge-ns22h-series-central-ducted-cfg-306",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-307",
      slug: "ge-ns22h-series-central-ducted-cfg-307",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-308",
      slug: "ge-ns22h-series-central-ducted-cfg-308",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-309",
      slug: "ge-ns22h-series-central-ducted-cfg-309",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-310",
      slug: "ge-ns22h-series-central-ducted-cfg-310",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-311",
      slug: "ge-ns22h-series-central-ducted-cfg-311",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-312",
      slug: "ge-ns22h-series-central-ducted-cfg-312",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-313",
      slug: "ge-ns22h-series-central-ducted-cfg-313",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h48ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-314",
      slug: "ge-ns22h-series-central-ducted-cfg-314",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-315",
      slug: "ge-ns22h-series-central-ducted-cfg-315",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-316",
      slug: "ge-ns22h-series-central-ducted-cfg-316",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-317",
      slug: "ge-ns22h-series-central-ducted-cfg-317",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-318",
      slug: "ge-ns22h-series-central-ducted-cfg-318",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-319",
      slug: "ge-ns22h-series-central-ducted-cfg-319",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-320",
      slug: "ge-ns22h-series-central-ducted-cfg-320",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-321",
      slug: "ge-ns22h-series-central-ducted-cfg-321",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-322",
      slug: "ge-ns22h-series-central-ducted-cfg-322",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-323",
      slug: "ge-ns22h-series-central-ducted-cfg-323",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-324",
      slug: "ge-ns22h-series-central-ducted-cfg-324",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-325",
      slug: "ge-ns22h-series-central-ducted-cfg-325",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-326",
      slug: "ge-ns22h-series-central-ducted-cfg-326",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-327",
      slug: "ge-ns22h-series-central-ducted-cfg-327",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-328",
      slug: "ge-ns22h-series-central-ducted-cfg-328",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-329",
      slug: "ge-ns22h-series-central-ducted-cfg-329",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-330",
      slug: "ge-ns22h-series-central-ducted-cfg-330",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-331",
      slug: "ge-ns22h-series-central-ducted-cfg-331",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-332",
      slug: "ge-ns22h-series-central-ducted-cfg-332",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-333",
      slug: "ge-ns22h-series-central-ducted-cfg-333",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-334",
      slug: "ge-ns22h-series-central-ducted-cfg-334",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-335",
      slug: "ge-ns22h-series-central-ducted-cfg-335",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-336",
      slug: "ge-ns22h-series-central-ducted-cfg-336",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-337",
      slug: "ge-ns22h-series-central-ducted-cfg-337",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-338",
      slug: "ge-ns22h-series-central-ducted-cfg-338",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-339",
      slug: "ge-ns22h-series-central-ducted-cfg-339",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-340",
      slug: "ge-ns22h-series-central-ducted-cfg-340",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-341",
      slug: "ge-ns22h-series-central-ducted-cfg-341",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-342",
      slug: "ge-ns22h-series-central-ducted-cfg-342",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-343",
      slug: "ge-ns22h-series-central-ducted-cfg-343",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-344",
      slug: "ge-ns22h-series-central-ducted-cfg-344",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-345",
      slug: "ge-ns22h-series-central-ducted-cfg-345",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-346",
      slug: "ge-ns22h-series-central-ducted-cfg-346",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-347",
      slug: "ge-ns22h-series-central-ducted-cfg-347",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-348",
      slug: "ge-ns22h-series-central-ducted-cfg-348",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-349",
      slug: "ge-ns22h-series-central-ducted-cfg-349",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-350",
      slug: "ge-ns22h-series-central-ducted-cfg-350",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-351",
      slug: "ge-ns22h-series-central-ducted-cfg-351",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-352",
      slug: "ge-ns22h-series-central-ducted-cfg-352",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-353",
      slug: "ge-ns22h-series-central-ducted-cfg-353",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-354",
      slug: "ge-ns22h-series-central-ducted-cfg-354",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-355",
      slug: "ge-ns22h-series-central-ducted-cfg-355",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-356",
      slug: "ge-ns22h-series-central-ducted-cfg-356",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-357",
      slug: "ge-ns22h-series-central-ducted-cfg-357",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-358",
      slug: "ge-ns22h-series-central-ducted-cfg-358",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-359",
      slug: "ge-ns22h-series-central-ducted-cfg-359",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-360",
      slug: "ge-ns22h-series-central-ducted-cfg-360",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-361",
      slug: "ge-ns22h-series-central-ducted-cfg-361",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-362",
      slug: "ge-ns22h-series-central-ducted-cfg-362",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-363",
      slug: "ge-ns22h-series-central-ducted-cfg-363",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-364",
      slug: "ge-ns22h-series-central-ducted-cfg-364",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-365",
      slug: "ge-ns22h-series-central-ducted-cfg-365",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-366",
      slug: "ge-ns22h-series-central-ducted-cfg-366",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-367",
      slug: "ge-ns22h-series-central-ducted-cfg-367",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-368",
      slug: "ge-ns22h-series-central-ducted-cfg-368",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-369",
      slug: "ge-ns22h-series-central-ducted-cfg-369",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-370",
      slug: "ge-ns22h-series-central-ducted-cfg-370",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-371",
      slug: "ge-ns22h-series-central-ducted-cfg-371",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-372",
      slug: "ge-ns22h-series-central-ducted-cfg-372",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 20,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-373",
      slug: "ge-ns22h-series-central-ducted-cfg-373",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-374",
      slug: "ge-ns22h-series-central-ducted-cfg-374",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-375",
      slug: "ge-ns22h-series-central-ducted-cfg-375",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-376",
      slug: "ge-ns22h-series-central-ducted-cfg-376",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-377",
      slug: "ge-ns22h-series-central-ducted-cfg-377",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-378",
      slug: "ge-ns22h-series-central-ducted-cfg-378",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-379",
      slug: "ge-ns22h-series-central-ducted-cfg-379",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-380",
      slug: "ge-ns22h-series-central-ducted-cfg-380",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-381",
      slug: "ge-ns22h-series-central-ducted-cfg-381",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-382",
      slug: "ge-ns22h-series-central-ducted-cfg-382",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-383",
      slug: "ge-ns22h-series-central-ducted-cfg-383",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-384",
      slug: "ge-ns22h-series-central-ducted-cfg-384",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20.5,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-385",
      slug: "ge-ns22h-series-central-ducted-cfg-385",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22h-series-central-ducted-cfg-386",
      slug: "ge-ns22h-series-central-ducted-cfg-386",
      modelId: "ge-ns22h-series-central-ducted",
      outdoorUnitId: "ge-ns22h36ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35600,
      coolingCapacityMaxBtu: 35600,
      seer2: 20,
      hspf2: 8.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-cfg-1",
      slug: "ge-ns22-series-central-ducted-cfg-1",
      modelId: "ge-ns22-series-central-ducted",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-cfg-2",
      slug: "ge-ns22-series-central-ducted-cfg-2",
      modelId: "ge-ns22-series-central-ducted",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-cfg-3",
      slug: "ge-ns22-series-central-ducted-cfg-3",
      modelId: "ge-ns22-series-central-ducted",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-ns22-series-central-ducted-cfg-4",
      slug: "ge-ns22-series-central-ducted-cfg-4",
      modelId: "ge-ns22-series-central-ducted",
      outdoorUnitId: "ge-ns22h60ma4-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 19,
      hspf2: 8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-connect-central-ducted-cfg-1",
      slug: "ge-connect-central-ducted-cfg-1",
      modelId: "ge-connect-central-ducted",
      outdoorUnitId: "ge-auh2436zgda",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ge-connect-central-ducted-cfg-2",
      slug: "ge-connect-central-ducted-cfg-2",
      modelId: "ge-connect-central-ducted",
      outdoorUnitId: "ge-auh4860zgda",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-47",
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
      configurationId: "ge-ns18h-series-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns18h-series-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-standard-central-ducted-cfg-1",
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
      configurationId: "ge-ns22h-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-102",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-107",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-110",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-114",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-118",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-124",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-126",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-127",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-137",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-138",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-139",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-142",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-143",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-144",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-145",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-147",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-149",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-152",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-153",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-154",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-155",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-156",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-157",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-158",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-159",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-160",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-161",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-162",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-163",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-164",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-173",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-174",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-175",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-176",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-190",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-191",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-192",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-194",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-196",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-197",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-198",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-199",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-200",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-201",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-202",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-203",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-204",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-205",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-206",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-207",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-208",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-209",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-210",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-211",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-212",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-213",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-214",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-215",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-216",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-217",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-218",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-219",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-220",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-221",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-222",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-223",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-224",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-225",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-226",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-227",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-228",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-229",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-230",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-231",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-232",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-233",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-234",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-235",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-236",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-237",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-238",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-239",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-240",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-241",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-242",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-243",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-244",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-245",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-246",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-247",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-248",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-249",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-250",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-251",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-252",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-253",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-254",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-255",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-256",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-257",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-258",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-259",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-260",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-261",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-262",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-263",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-264",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-265",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-266",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-267",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-268",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-269",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-270",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-271",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-272",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-273",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-274",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-275",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-276",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-277",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-278",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-279",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-280",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-281",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-282",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-283",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-284",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-285",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-286",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-287",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-288",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-289",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-290",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-291",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-292",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-293",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-294",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-295",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-296",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-297",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-298",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-299",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-300",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-301",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-302",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-303",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-304",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-305",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-306",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-307",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-308",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-309",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-310",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-311",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-312",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-313",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-314",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-315",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-316",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-317",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-318",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-319",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-320",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-321",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-322",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-323",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-324",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-325",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-326",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-327",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-328",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-329",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-330",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-331",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-332",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-333",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-334",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-335",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-336",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-337",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-338",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-339",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-340",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-341",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-342",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-343",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-344",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-345",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-346",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-347",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-348",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-349",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-350",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-351",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-352",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-353",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-354",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-355",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-356",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-357",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-358",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-359",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-360",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-361",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-362",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-363",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-364",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-365",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-366",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-367",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-368",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-369",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-370",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-371",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-372",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-373",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-374",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-375",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-376",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-377",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-378",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-379",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-380",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-381",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-382",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-383",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-384",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-385",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22h-series-central-ducted-cfg-386",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-ns22-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-connect-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ge-connect-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.8,
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
