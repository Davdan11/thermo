import type { BrandDataset } from "../../types";

export const napoleonDataset: BrandDataset = {
  brand: {
    id: "napoleon",
    slug: "napoleon",
    name: "Napoleon",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "napoleon-wsc-series",
      slug: "napoleon-wsc-series",
      name: "WSC Series",
      brandId: "napoleon",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series",
      slug: "napoleon-f-series",
      name: "F Series",
      brandId: "napoleon",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series",
      slug: "napoleon-ndh-series",
      name: "NDH Series",
      brandId: "napoleon",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "napoleon-wsc-series-central-ducted",
      slug: "napoleon-wsc-series-central-ducted",
      name: "WSC Series",
      seriesId: "napoleon-wsc-series",
      brandId: "napoleon",
      modelNumber: "WSC Series",
      normalizedModelNumber: "wsc-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 19000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 15.2,
      seer2Max: 16,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted",
      slug: "napoleon-f-series-central-ducted",
      name: "F Series",
      seriesId: "napoleon-f-series",
      brandId: "napoleon",
      modelNumber: "F Series",
      normalizedModelNumber: "f-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 24000,
      heatingCapacity5FMaxBtu: 48000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone",
      slug: "napoleon-ndh-series-multi-zone",
      name: "NDH Series",
      seriesId: "napoleon-ndh-series",
      brandId: "napoleon",
      modelNumber: "NDH Series",
      normalizedModelNumber: "ndh-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 47000,
      seer2Min: 18.4,
      seer2Max: 27.4,
      hspf2Min: 9.5,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "napoleon",
      modelNumber: "            - ",
      brandId: "napoleon",
      refrigerant: "R-454B" as any,
    }
  ],
  indoorUnits: [
    {
      id: "napoleon",
      modelNumber: "          ",
      brandId: "napoleon",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "napoleon-wsc-series-central-ducted-cfg-1",
      slug: "napoleon-wsc-series-central-ducted-cfg-1",
      modelId: "napoleon-wsc-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-wsc-series-central-ducted-cfg-2",
      slug: "napoleon-wsc-series-central-ducted-cfg-2",
      modelId: "napoleon-wsc-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-wsc-series-central-ducted-cfg-3",
      slug: "napoleon-wsc-series-central-ducted-cfg-3",
      modelId: "napoleon-wsc-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-1",
      slug: "napoleon-f-series-central-ducted-cfg-1",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-2",
      slug: "napoleon-f-series-central-ducted-cfg-2",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-3",
      slug: "napoleon-f-series-central-ducted-cfg-3",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-4",
      slug: "napoleon-f-series-central-ducted-cfg-4",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-5",
      slug: "napoleon-f-series-central-ducted-cfg-5",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-6",
      slug: "napoleon-f-series-central-ducted-cfg-6",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-7",
      slug: "napoleon-f-series-central-ducted-cfg-7",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-8",
      slug: "napoleon-f-series-central-ducted-cfg-8",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-9",
      slug: "napoleon-f-series-central-ducted-cfg-9",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-10",
      slug: "napoleon-f-series-central-ducted-cfg-10",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-11",
      slug: "napoleon-f-series-central-ducted-cfg-11",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-12",
      slug: "napoleon-f-series-central-ducted-cfg-12",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-13",
      slug: "napoleon-f-series-central-ducted-cfg-13",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-f-series-central-ducted-cfg-14",
      slug: "napoleon-f-series-central-ducted-cfg-14",
      modelId: "napoleon-f-series-central-ducted",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-1",
      slug: "napoleon-ndh-series-multi-zone-cfg-1",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-2",
      slug: "napoleon-ndh-series-multi-zone-cfg-2",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-3",
      slug: "napoleon-ndh-series-multi-zone-cfg-3",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-4",
      slug: "napoleon-ndh-series-multi-zone-cfg-4",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-5",
      slug: "napoleon-ndh-series-multi-zone-cfg-5",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-6",
      slug: "napoleon-ndh-series-multi-zone-cfg-6",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-7",
      slug: "napoleon-ndh-series-multi-zone-cfg-7",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-8",
      slug: "napoleon-ndh-series-multi-zone-cfg-8",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-9",
      slug: "napoleon-ndh-series-multi-zone-cfg-9",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-10",
      slug: "napoleon-ndh-series-multi-zone-cfg-10",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-11",
      slug: "napoleon-ndh-series-multi-zone-cfg-11",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.8,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-12",
      slug: "napoleon-ndh-series-multi-zone-cfg-12",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-13",
      slug: "napoleon-ndh-series-multi-zone-cfg-13",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-14",
      slug: "napoleon-ndh-series-multi-zone-cfg-14",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-15",
      slug: "napoleon-ndh-series-multi-zone-cfg-15",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-16",
      slug: "napoleon-ndh-series-multi-zone-cfg-16",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.5,
      hspf2: 14.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-17",
      slug: "napoleon-ndh-series-multi-zone-cfg-17",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-18",
      slug: "napoleon-ndh-series-multi-zone-cfg-18",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-19",
      slug: "napoleon-ndh-series-multi-zone-cfg-19",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.2,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-20",
      slug: "napoleon-ndh-series-multi-zone-cfg-20",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-21",
      slug: "napoleon-ndh-series-multi-zone-cfg-21",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-22",
      slug: "napoleon-ndh-series-multi-zone-cfg-22",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-23",
      slug: "napoleon-ndh-series-multi-zone-cfg-23",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-24",
      slug: "napoleon-ndh-series-multi-zone-cfg-24",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-25",
      slug: "napoleon-ndh-series-multi-zone-cfg-25",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-26",
      slug: "napoleon-ndh-series-multi-zone-cfg-26",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-27",
      slug: "napoleon-ndh-series-multi-zone-cfg-27",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-28",
      slug: "napoleon-ndh-series-multi-zone-cfg-28",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.4,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-29",
      slug: "napoleon-ndh-series-multi-zone-cfg-29",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-30",
      slug: "napoleon-ndh-series-multi-zone-cfg-30",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "napoleon-ndh-series-multi-zone-cfg-31",
      slug: "napoleon-ndh-series-multi-zone-cfg-31",
      modelId: "napoleon-ndh-series-multi-zone",
      outdoorUnitId: "napoleon",
      indoorUnitId: "napoleon",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "napoleon-wsc-series-central-ducted-cfg-1",
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
      configurationId: "napoleon-wsc-series-central-ducted-cfg-2",
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
      configurationId: "napoleon-wsc-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-7",
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
      configurationId: "napoleon-f-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-f-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-1",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-2",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-3",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-5",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-6",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-7",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-9",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-10",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13100,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-12",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-13",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-14",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-15",
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
      configurationId: "napoleon-ndh-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11900,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "napoleon-ndh-series-multi-zone-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    }
  ],
  certifications: [],
  warranties: [
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-wsc-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-f-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "napoleon-ndh-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    }
  ],
  priceObservations: [],
  sources: [],
  editorial: [],
};
