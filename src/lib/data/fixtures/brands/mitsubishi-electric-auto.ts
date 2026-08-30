import type { BrandDataset } from "../../types";

export const mitsubishielectricDataset: BrandDataset = {
  brand: {
    id: "mitsubishi-electric",
    slug: "mitsubishi-electric",
    name: "Mitsubishi Electric",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "mitsubishi-electric-m-series",
      slug: "mitsubishi-electric-m-series",
      name: "M-Series",
      brandId: "mitsubishi-electric",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi",
      slug: "mitsubishi-electric-city-multi",
      name: "City Multi",
      brandId: "mitsubishi-electric",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series",
      slug: "mitsubishi-electric-s-series",
      name: "S-Series",
      brandId: "mitsubishi-electric",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series",
      slug: "mitsubishi-electric-p-series",
      name: "P series",
      brandId: "mitsubishi-electric",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "mitsubishi-electric-m-series-multi-zone",
      slug: "mitsubishi-electric-m-series-multi-zone",
      name: "M-Series",
      seriesId: "mitsubishi-electric-m-series",
      brandId: "mitsubishi-electric",
      modelNumber: "M-Series",
      normalizedModelNumber: "m-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 6200,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 15.2,
      seer2Max: 35,
      hspf2Min: 8.5,
      hspf2Max: 13.3,
      cop5FMin: 1.8,
      cop5FMax: 2.7,
      systemType: "multi-zone",
      categories: ["cold-climate"].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi-multi-zone",
      slug: "mitsubishi-electric-city-multi-multi-zone",
      name: "City Multi",
      seriesId: "mitsubishi-electric-city-multi",
      brandId: "mitsubishi-electric",
      modelNumber: "City Multi",
      normalizedModelNumber: "city-multi",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 60000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 60000,
      seer2Min: 16.4,
      seer2Max: 18.2,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.8,
      cop5FMax: 1.98,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone",
      slug: "mitsubishi-electric-s-series-multi-zone",
      name: "S-Series",
      seriesId: "mitsubishi-electric-s-series",
      brandId: "mitsubishi-electric",
      modelNumber: "S-Series",
      normalizedModelNumber: "s-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 60000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 47000,
      seer2Min: 15.5,
      seer2Max: 23,
      hspf2Min: 8.6,
      hspf2Max: 11,
      cop5FMin: 1.76,
      cop5FMax: 2.1,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone",
      slug: "mitsubishi-electric-p-series-multi-zone",
      name: "P series",
      seriesId: "mitsubishi-electric-p-series",
      brandId: "mitsubishi-electric",
      modelNumber: "P series",
      normalizedModelNumber: "p-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 52000,
      seer2Min: 15.9,
      seer2Max: 24.8,
      hspf2Min: 8.5,
      hspf2Max: 10.9,
      cop5FMin: 1.75,
      cop5FMax: 2.7,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "mitsubishi-electric",
      modelNumber: "   -        ***",
      brandId: "mitsubishi-electric",
      refrigerant: "R-454B" as any,
    }
  ],
  indoorUnits: [
    {
      id: "mitsubishi-electric",
      modelNumber: "   -      ***",
      brandId: "mitsubishi-electric",
      type: "multi-zone",
    }
  ],
  configurations: [
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-1",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-1",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 35,
      hspf2: 13,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-2",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-2",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 35,
      hspf2: 13,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-3",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-3",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-4",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-4",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-5",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-5",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.9,
      hspf2: 12.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-6",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-6",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.9,
      hspf2: 12.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-7",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-7",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 25.9,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-8",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-8",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 25.9,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-9",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-9",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 25.5,
      hspf2: 11.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-10",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-10",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 25.5,
      hspf2: 11.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-11",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-11",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 23.5,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-12",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-12",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 23.5,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-13",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-13",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.4,
      hspf2: 10.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-14",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-14",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.4,
      hspf2: 10.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-15",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-15",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.4,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-16",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-16",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.4,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-17",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-17",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.6,
      hspf2: 10.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-18",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-18",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.6,
      hspf2: 10.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-19",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-19",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.6,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-20",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-20",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.6,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-21",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-21",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 14000,
      coolingCapacityMaxBtu: 14000,
      seer2: 22.2,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-22",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-22",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 14000,
      coolingCapacityMaxBtu: 14000,
      seer2: 22.2,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-23",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-23",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 14000,
      coolingCapacityMaxBtu: 14000,
      seer2: 22.2,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-24",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-24",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 14000,
      coolingCapacityMaxBtu: 14000,
      seer2: 22.2,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-25",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-25",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-26",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-26",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-27",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-27",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-28",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-28",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-29",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-29",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 21.5,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-30",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-30",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 21.5,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-31",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-31",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 21.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-32",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-32",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 21.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-33",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-33",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-34",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-34",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-35",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-35",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-36",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-36",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-37",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-37",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 14000,
      coolingCapacityMaxBtu: 14000,
      seer2: 20,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-38",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-38",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-39",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-39",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-40",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-40",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-41",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-41",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-42",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-42",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-43",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-43",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-44",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-44",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-45",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-45",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-46",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-46",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-47",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-47",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-48",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-48",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-49",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-49",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-50",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-50",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.55,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-51",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-51",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.95,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-52",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-52",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-53",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-53",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17.2,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-54",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-54",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-55",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-55",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 16.1,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-56",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-56",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 19.2,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-57",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-57",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 16.2,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-58",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-58",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 16.2,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-59",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-59",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.2,
      hspf2: 9.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-60",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-60",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 16400,
      coolingCapacityMaxBtu: 16400,
      seer2: 17.2,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-61",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-61",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 16400,
      coolingCapacityMaxBtu: 16400,
      seer2: 17.5,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-62",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-62",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 16400,
      coolingCapacityMaxBtu: 16400,
      seer2: 17.5,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-63",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-63",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 16400,
      coolingCapacityMaxBtu: 16400,
      seer2: 17.5,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-64",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-64",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.3,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-65",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-65",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-66",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-66",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.5,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-67",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-67",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.2,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-68",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-68",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.3,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-69",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-69",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18.6,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-70",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-70",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.1,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-71",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-71",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.1,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-72",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-72",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-73",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-73",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 17.1,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-74",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-74",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 17.2,
      hspf2: 8.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-75",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-75",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 17.2,
      hspf2: 8.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-76",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-76",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-77",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-77",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.2,
      hspf2: 9.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-78",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-78",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 12,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-79",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-79",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.9,
      hspf2: 11.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-80",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-80",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 18.8,
      hspf2: 11.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-81",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-81",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 17.6,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-82",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-82",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-83",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-83",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.6,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-84",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-84",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 11300,
      coolingCapacityMaxBtu: 11300,
      seer2: 20.7,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-85",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-85",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.7,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-86",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-86",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-87",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-87",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.3,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-88",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-88",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 11400,
      coolingCapacityMaxBtu: 11400,
      seer2: 18.4,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-89",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-89",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 20.1,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-90",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-90",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 18.8,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-91",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-91",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 19.1,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-92",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-92",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 20.6,
      hspf2: 9.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-93",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-93",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.2,
      hspf2: 9.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-94",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-94",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 16400,
      coolingCapacityMaxBtu: 16400,
      seer2: 17.2,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-95",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-95",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.2,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-96",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-96",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.8,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-97",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-97",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.5,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-98",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-98",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.2,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-99",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-99",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 9.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-100",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-100",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 19.5,
      hspf2: 9.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-101",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-101",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.3,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-m-series-multi-zone-cfg-102",
      slug: "mitsubishi-electric-m-series-multi-zone-cfg-102",
      modelId: "mitsubishi-electric-m-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 17.8,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi-multi-zone-cfg-1",
      slug: "mitsubishi-electric-city-multi-multi-zone-cfg-1",
      modelId: "mitsubishi-electric-city-multi-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi-multi-zone-cfg-2",
      slug: "mitsubishi-electric-city-multi-multi-zone-cfg-2",
      modelId: "mitsubishi-electric-city-multi-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 17.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi-multi-zone-cfg-3",
      slug: "mitsubishi-electric-city-multi-multi-zone-cfg-3",
      modelId: "mitsubishi-electric-city-multi-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi-multi-zone-cfg-4",
      slug: "mitsubishi-electric-city-multi-multi-zone-cfg-4",
      modelId: "mitsubishi-electric-city-multi-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 16.4,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi-multi-zone-cfg-5",
      slug: "mitsubishi-electric-city-multi-multi-zone-cfg-5",
      modelId: "mitsubishi-electric-city-multi-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.2,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi-multi-zone-cfg-6",
      slug: "mitsubishi-electric-city-multi-multi-zone-cfg-6",
      modelId: "mitsubishi-electric-city-multi-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-city-multi-multi-zone-cfg-7",
      slug: "mitsubishi-electric-city-multi-multi-zone-cfg-7",
      modelId: "mitsubishi-electric-city-multi-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 16.4,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-1",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-1",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.5,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-2",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-2",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.6,
      hspf2: 9.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-3",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-3",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-4",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-4",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16.2,
      hspf2: 9.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-5",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-5",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-6",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-6",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.85,
      hspf2: 10.15,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-7",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-7",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.6,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-8",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-8",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-9",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-9",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.6,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-10",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-10",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23,
      hspf2: 10.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-11",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-11",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-12",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-12",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.85,
      hspf2: 9.35,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-13",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-13",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 15.5,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-14",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-14",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 17,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-s-series-multi-zone-cfg-15",
      slug: "mitsubishi-electric-s-series-multi-zone-cfg-15",
      modelId: "mitsubishi-electric-s-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 15.5,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-1",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-1",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.9,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-2",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-2",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 17.8,
      hspf2: 8.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-3",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-3",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.9,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-4",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-4",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 17.8,
      hspf2: 8.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-5",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-5",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 21800,
      coolingCapacityMaxBtu: 21800,
      seer2: 20.2,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-6",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-6",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 21200,
      coolingCapacityMaxBtu: 21200,
      seer2: 19.6,
      hspf2: 9.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-7",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-7",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-8",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-8",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.6,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-9",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-9",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19.2,
      hspf2: 8.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-10",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-10",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21.9,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-11",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-11",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-12",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-12",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-13",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-13",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.8,
      hspf2: 10.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-14",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-14",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-15",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-15",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.1,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-16",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-16",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24.7,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-17",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-17",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.6,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-18",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-18",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.9,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-19",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-19",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-20",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-20",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.9,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-21",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-21",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-22",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-22",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-23",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-23",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.3,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-24",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-24",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.8,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-25",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-25",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.8,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-26",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-26",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-27",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-27",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.6,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-28",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-28",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.6,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-29",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-29",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.9,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-30",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-30",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.7,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-31",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-31",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 23.2,
      hspf2: 9.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-32",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-32",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 23.8,
      hspf2: 10.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-33",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-33",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-34",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-34",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 18.1,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-35",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-35",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 18.1,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-36",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-36",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.6,
      hspf2: 9.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-37",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-37",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.1,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-38",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-38",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 20.3,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-39",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-39",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.3,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-40",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-40",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-41",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-41",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 18.1,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-42",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-42",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 18.1,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-43",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-43",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.2,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-44",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-44",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.7,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-45",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-45",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 22.1,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-46",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-46",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.3,
      hspf2: 9.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-47",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-47",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.2,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-48",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-48",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18.7,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-49",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-49",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 21,
      hspf2: 10.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-50",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-50",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 17.1,
      hspf2: 8.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-51",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-51",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 17.1,
      hspf2: 8.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-52",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-52",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18.3,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-53",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-53",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-54",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-54",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18.7,
      hspf2: 8.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-55",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-55",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.1,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-56",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-56",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.2,
      hspf2: 8.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "mitsubishi-electric-p-series-multi-zone-cfg-57",
      slug: "mitsubishi-electric-p-series-multi-zone-cfg-57",
      modelId: "mitsubishi-electric-p-series-multi-zone",
      outdoorUnitId: "mitsubishi-electric",
      indoorUnitId: "mitsubishi-electric",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.1,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-3",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-4",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-23",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-24",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-27",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-28",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-56",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-58",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-59",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-61",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-62",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-63",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-64",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-66",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-67",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-76",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 2.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6200,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-84",
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
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 2.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 2.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10700,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10500,
          cop: 2.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-m-series-multi-zone-cfg-102",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-city-multi-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-city-multi-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-city-multi-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 54000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-city-multi-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 60000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-city-multi-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-city-multi-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-city-multi-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.76,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-s-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-9",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9100,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-17",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.77,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.77,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-29",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-30",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-31",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-43",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-45",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-53",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-54",
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
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "mitsubishi-electric-p-series-multi-zone-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.9,
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
