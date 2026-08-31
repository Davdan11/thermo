import type { BrandDataset } from "../../types";

export const panasonicDataset: BrandDataset = {
  brand: {
    id: "panasonic",
    slug: "panasonic",
    name: "Panasonic",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "panasonic-cu-series",
      slug: "panasonic-cu-series",
      name: "CU Series",
      brandId: "panasonic",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz",
      slug: "panasonic-climapure-xz",
      name: "ClimaPure XZ",
      brandId: "panasonic",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z",
      slug: "panasonic-deluxe-z",
      name: "Deluxe Z",
      brandId: "panasonic",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone",
      slug: "panasonic-multizone",
      name: "MultiZone",
      brandId: "panasonic",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multi-zone",
      slug: "panasonic-multi-zone",
      name: "Multi Zone",
      brandId: "panasonic",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "panasonic-cu-series-central-ducted",
      slug: "panasonic-cu-series-central-ducted",
      name: "CU Series",
      seriesId: "panasonic-cu-series",
      brandId: "panasonic",
      modelNumber: "CU Series",
      normalizedModelNumber: "cu-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 11200,
      heatingCapacity5FMaxBtu: 52000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 10.3,
      cop5FMin: 1.75,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone",
      slug: "panasonic-climapure-xz-multi-zone",
      name: "ClimaPure XZ",
      seriesId: "panasonic-climapure-xz",
      brandId: "panasonic",
      modelNumber: "ClimaPure XZ",
      normalizedModelNumber: "climapure-xz",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 11700,
      heatingCapacity5FMaxBtu: 20400,
      seer2Min: 20.5,
      seer2Max: 27.5,
      hspf2Min: 11,
      hspf2Max: 12,
      cop5FMin: 2.11,
      cop5FMax: 2.31,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone",
      slug: "panasonic-deluxe-z-multi-zone",
      name: "Deluxe Z",
      seriesId: "panasonic-deluxe-z",
      brandId: "panasonic",
      modelNumber: "Deluxe Z",
      normalizedModelNumber: "deluxe-z",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 11700,
      heatingCapacity5FMaxBtu: 20400,
      seer2Min: 20.5,
      seer2Max: 27.5,
      hspf2Min: 11,
      hspf2Max: 12,
      cop5FMin: 2.11,
      cop5FMax: 2.31,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone",
      slug: "panasonic-cu-series-multi-zone",
      name: "CU Series",
      seriesId: "panasonic-cu-series",
      brandId: "panasonic",
      modelNumber: "CU Series",
      normalizedModelNumber: "cu-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 8200,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 19,
      seer2Max: 24.6,
      hspf2Min: 9,
      hspf2Max: 13,
      cop5FMin: 2,
      cop5FMax: 2.5,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-multi-zone",
      slug: "panasonic-multizone-multi-zone",
      name: "MultiZone",
      seriesId: "panasonic-multizone",
      brandId: "panasonic",
      modelNumber: "MultiZone",
      normalizedModelNumber: "multizone",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 22000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 22,
      seer2Max: 24.5,
      hspf2Min: 10.3,
      hspf2Max: 12.5,
      cop5FMin: 1.85,
      cop5FMax: 2.28,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multi-zone-multi-zone",
      slug: "panasonic-multi-zone-multi-zone",
      name: "Multi Zone",
      seriesId: "panasonic-multi-zone",
      brandId: "panasonic",
      modelNumber: "Multi Zone",
      normalizedModelNumber: "multi-zone",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 22000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 22,
      seer2Max: 24.5,
      hspf2Min: 10.3,
      hspf2Max: 12.5,
      cop5FMin: 1.85,
      cop5FMax: 2.28,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "panasonic",
      modelNumber: "  -        ",
      brandId: "panasonic",
      refrigerant: "R-454B" as any,
    }
  ],
  indoorUnits: [
    {
      id: "panasonic",
      modelNumber: "  -        ",
      brandId: "panasonic",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "panasonic-cu-series-central-ducted-cfg-1",
      slug: "panasonic-cu-series-central-ducted-cfg-1",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-2",
      slug: "panasonic-cu-series-central-ducted-cfg-2",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-3",
      slug: "panasonic-cu-series-central-ducted-cfg-3",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-4",
      slug: "panasonic-cu-series-central-ducted-cfg-4",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-5",
      slug: "panasonic-cu-series-central-ducted-cfg-5",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-6",
      slug: "panasonic-cu-series-central-ducted-cfg-6",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-7",
      slug: "panasonic-cu-series-central-ducted-cfg-7",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-8",
      slug: "panasonic-cu-series-central-ducted-cfg-8",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.3,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-9",
      slug: "panasonic-cu-series-central-ducted-cfg-9",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 15.5,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-10",
      slug: "panasonic-cu-series-central-ducted-cfg-10",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-11",
      slug: "panasonic-cu-series-central-ducted-cfg-11",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-12",
      slug: "panasonic-cu-series-central-ducted-cfg-12",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.6,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-13",
      slug: "panasonic-cu-series-central-ducted-cfg-13",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-14",
      slug: "panasonic-cu-series-central-ducted-cfg-14",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-15",
      slug: "panasonic-cu-series-central-ducted-cfg-15",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-16",
      slug: "panasonic-cu-series-central-ducted-cfg-16",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-17",
      slug: "panasonic-cu-series-central-ducted-cfg-17",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-18",
      slug: "panasonic-cu-series-central-ducted-cfg-18",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-19",
      slug: "panasonic-cu-series-central-ducted-cfg-19",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-20",
      slug: "panasonic-cu-series-central-ducted-cfg-20",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-21",
      slug: "panasonic-cu-series-central-ducted-cfg-21",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-22",
      slug: "panasonic-cu-series-central-ducted-cfg-22",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-23",
      slug: "panasonic-cu-series-central-ducted-cfg-23",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.1,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-24",
      slug: "panasonic-cu-series-central-ducted-cfg-24",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.1,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-25",
      slug: "panasonic-cu-series-central-ducted-cfg-25",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-26",
      slug: "panasonic-cu-series-central-ducted-cfg-26",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-27",
      slug: "panasonic-cu-series-central-ducted-cfg-27",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-28",
      slug: "panasonic-cu-series-central-ducted-cfg-28",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 15.2,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-29",
      slug: "panasonic-cu-series-central-ducted-cfg-29",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-central-ducted-cfg-30",
      slug: "panasonic-cu-series-central-ducted-cfg-30",
      modelId: "panasonic-cu-series-central-ducted",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.2,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-1",
      slug: "panasonic-climapure-xz-multi-zone-cfg-1",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 25,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-2",
      slug: "panasonic-climapure-xz-multi-zone-cfg-2",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 14700,
      coolingCapacityMaxBtu: 14700,
      seer2: 22.4,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-3",
      slug: "panasonic-climapure-xz-multi-zone-cfg-3",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 22,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-4",
      slug: "panasonic-climapure-xz-multi-zone-cfg-4",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-5",
      slug: "panasonic-climapure-xz-multi-zone-cfg-5",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      seer2: 27.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-6",
      slug: "panasonic-climapure-xz-multi-zone-cfg-6",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 25,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-7",
      slug: "panasonic-climapure-xz-multi-zone-cfg-7",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 14700,
      coolingCapacityMaxBtu: 14700,
      seer2: 22.4,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-8",
      slug: "panasonic-climapure-xz-multi-zone-cfg-8",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 22,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-9",
      slug: "panasonic-climapure-xz-multi-zone-cfg-9",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-climapure-xz-multi-zone-cfg-10",
      slug: "panasonic-climapure-xz-multi-zone-cfg-10",
      modelId: "panasonic-climapure-xz-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      seer2: 27.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-1",
      slug: "panasonic-deluxe-z-multi-zone-cfg-1",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 25,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-2",
      slug: "panasonic-deluxe-z-multi-zone-cfg-2",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 14700,
      coolingCapacityMaxBtu: 14700,
      seer2: 22.4,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-3",
      slug: "panasonic-deluxe-z-multi-zone-cfg-3",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 22,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-4",
      slug: "panasonic-deluxe-z-multi-zone-cfg-4",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-5",
      slug: "panasonic-deluxe-z-multi-zone-cfg-5",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      seer2: 27.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-6",
      slug: "panasonic-deluxe-z-multi-zone-cfg-6",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 25,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-7",
      slug: "panasonic-deluxe-z-multi-zone-cfg-7",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 14700,
      coolingCapacityMaxBtu: 14700,
      seer2: 22.4,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-8",
      slug: "panasonic-deluxe-z-multi-zone-cfg-8",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 22,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-9",
      slug: "panasonic-deluxe-z-multi-zone-cfg-9",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-deluxe-z-multi-zone-cfg-10",
      slug: "panasonic-deluxe-z-multi-zone-cfg-10",
      modelId: "panasonic-deluxe-z-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 8700,
      coolingCapacityMaxBtu: 8700,
      seer2: 27.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-1",
      slug: "panasonic-cu-series-multi-zone-cfg-1",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-2",
      slug: "panasonic-cu-series-multi-zone-cfg-2",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-3",
      slug: "panasonic-cu-series-multi-zone-cfg-3",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-4",
      slug: "panasonic-cu-series-multi-zone-cfg-4",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-5",
      slug: "panasonic-cu-series-multi-zone-cfg-5",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-6",
      slug: "panasonic-cu-series-multi-zone-cfg-6",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-7",
      slug: "panasonic-cu-series-multi-zone-cfg-7",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-8",
      slug: "panasonic-cu-series-multi-zone-cfg-8",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-9",
      slug: "panasonic-cu-series-multi-zone-cfg-9",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-10",
      slug: "panasonic-cu-series-multi-zone-cfg-10",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-11",
      slug: "panasonic-cu-series-multi-zone-cfg-11",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-12",
      slug: "panasonic-cu-series-multi-zone-cfg-12",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-13",
      slug: "panasonic-cu-series-multi-zone-cfg-13",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-14",
      slug: "panasonic-cu-series-multi-zone-cfg-14",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-15",
      slug: "panasonic-cu-series-multi-zone-cfg-15",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-16",
      slug: "panasonic-cu-series-multi-zone-cfg-16",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-cu-series-multi-zone-cfg-17",
      slug: "panasonic-cu-series-multi-zone-cfg-17",
      modelId: "panasonic-cu-series-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-multi-zone-cfg-1",
      slug: "panasonic-multizone-multi-zone-cfg-1",
      modelId: "panasonic-multizone-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-multi-zone-cfg-2",
      slug: "panasonic-multizone-multi-zone-cfg-2",
      modelId: "panasonic-multizone-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-multi-zone-cfg-3",
      slug: "panasonic-multizone-multi-zone-cfg-3",
      modelId: "panasonic-multizone-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multizone-multi-zone-cfg-4",
      slug: "panasonic-multizone-multi-zone-cfg-4",
      modelId: "panasonic-multizone-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multi-zone-multi-zone-cfg-1",
      slug: "panasonic-multi-zone-multi-zone-cfg-1",
      modelId: "panasonic-multi-zone-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multi-zone-multi-zone-cfg-2",
      slug: "panasonic-multi-zone-multi-zone-cfg-2",
      modelId: "panasonic-multi-zone-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multi-zone-multi-zone-cfg-3",
      slug: "panasonic-multi-zone-multi-zone-cfg-3",
      modelId: "panasonic-multi-zone-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "panasonic-multi-zone-multi-zone-cfg-4",
      slug: "panasonic-multi-zone-multi-zone-cfg-4",
      modelId: "panasonic-multi-zone-multi-zone",
      outdoorUnitId: "panasonic",
      indoorUnitId: "panasonic",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-4",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-8",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-11",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-12",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-25",
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
      configurationId: "panasonic-cu-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-climapure-xz-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-deluxe-z-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-4",
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
      configurationId: "panasonic-cu-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-cu-series-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8200,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multizone-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multi-zone-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multi-zone-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multi-zone-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "panasonic-multi-zone-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    }
  ],
  certifications: [],
  warranties: [
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-climapure-xz-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-deluxe-z-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-cu-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multizone-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "panasonic-multi-zone-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    }
  ],
  priceObservations: [],
  sources: [],
  editorial: [],
};
