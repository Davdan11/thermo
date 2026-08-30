import type { BrandDataset } from "../../types";

export const moovairDataset: BrandDataset = {
  brand: {
    id: "moovair",
    slug: "moovair",
    name: "MOOVAIR",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "moovair-dm-series",
      slug: "moovair-dm-series",
      name: "DM series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series",
      slug: "moovair-msh-series",
      name: "MSH Series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series",
      slug: "moovair-mah-series",
      name: "MAH Series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma-series",
      slug: "moovair-dma-series",
      name: "DMA Series",
      brandId: "moovair",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series",
      slug: "moovair-mxh-series",
      name: "MXH Series",
      brandId: "moovair",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "moovair-dm-series-central-ducted",
      slug: "moovair-dm-series-central-ducted",
      name: "DM series",
      seriesId: "moovair-dm-series",
      brandId: "moovair",
      modelNumber: "DM series",
      normalizedModelNumber: "dm-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 16.5,
      seer2Max: 16.5,
      hspf2Min: 9.5,
      hspf2Max: 9.5,
      cop5FMin: 1.95,
      cop5FMax: 1.95,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted",
      slug: "moovair-msh-series-central-ducted",
      name: "MSH Series",
      seriesId: "moovair-msh-series",
      brandId: "moovair",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 43000,
      seer2Min: 15.2,
      seer2Max: 19.3,
      hspf2Min: 8.1,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series-central-ducted",
      slug: "moovair-mah-series-central-ducted",
      name: "MAH Series",
      seriesId: "moovair-mah-series",
      brandId: "moovair",
      modelNumber: "MAH Series",
      normalizedModelNumber: "mah-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 52000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 9,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma-series-multi-zone",
      slug: "moovair-dma-series-multi-zone",
      name: "DMA Series",
      seriesId: "moovair-dma-series",
      brandId: "moovair",
      modelNumber: "DMA Series",
      normalizedModelNumber: "dma-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 12600,
      seer2Min: 21.5,
      seer2Max: 21.5,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.75,
      cop5FMax: 1.75,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-multi-zone",
      slug: "moovair-dm-series-multi-zone",
      name: "DM Series",
      seriesId: "moovair-dm-series",
      brandId: "moovair",
      modelNumber: "DM Series",
      normalizedModelNumber: "dm-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 13700,
      heatingCapacity5FMaxBtu: 13700,
      seer2Min: 27,
      seer2Max: 27,
      hspf2Min: 12,
      hspf2Max: 12,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone",
      slug: "moovair-msh-series-multi-zone",
      name: "MSH Series",
      seriesId: "moovair-msh-series",
      brandId: "moovair",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 8000,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 18.4,
      seer2Max: 29.4,
      hspf2Min: 9.9,
      hspf2Max: 16.2,
      cop5FMin: 1.8,
      cop5FMax: 2.54,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone",
      slug: "moovair-mxh-series-multi-zone",
      name: "MXH Series",
      seriesId: "moovair-mxh-series",
      brandId: "moovair",
      modelNumber: "MXH Series",
      normalizedModelNumber: "mxh-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 47000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 9,
      hspf2Max: 11,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "moovair",
      modelNumber: "              *",
      brandId: "moovair",
      refrigerant: "R-410A" as any,
    }
  ],
  indoorUnits: [
    {
      id: "moovair",
      modelNumber: "               ",
      brandId: "moovair",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "moovair-dm-series-central-ducted-cfg-1",
      slug: "moovair-dm-series-central-ducted-cfg-1",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-1",
      slug: "moovair-msh-series-central-ducted-cfg-1",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-2",
      slug: "moovair-msh-series-central-ducted-cfg-2",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-3",
      slug: "moovair-msh-series-central-ducted-cfg-3",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-4",
      slug: "moovair-msh-series-central-ducted-cfg-4",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.8,
      hspf2: 10.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-5",
      slug: "moovair-msh-series-central-ducted-cfg-5",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-6",
      slug: "moovair-msh-series-central-ducted-cfg-6",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-7",
      slug: "moovair-msh-series-central-ducted-cfg-7",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.3,
      hspf2: 10.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-8",
      slug: "moovair-msh-series-central-ducted-cfg-8",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.4,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-9",
      slug: "moovair-msh-series-central-ducted-cfg-9",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-10",
      slug: "moovair-msh-series-central-ducted-cfg-10",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-11",
      slug: "moovair-msh-series-central-ducted-cfg-11",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-12",
      slug: "moovair-msh-series-central-ducted-cfg-12",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-13",
      slug: "moovair-msh-series-central-ducted-cfg-13",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-14",
      slug: "moovair-msh-series-central-ducted-cfg-14",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-15",
      slug: "moovair-msh-series-central-ducted-cfg-15",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-16",
      slug: "moovair-msh-series-central-ducted-cfg-16",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-17",
      slug: "moovair-msh-series-central-ducted-cfg-17",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.5,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-18",
      slug: "moovair-msh-series-central-ducted-cfg-18",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-19",
      slug: "moovair-msh-series-central-ducted-cfg-19",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-20",
      slug: "moovair-msh-series-central-ducted-cfg-20",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-21",
      slug: "moovair-msh-series-central-ducted-cfg-21",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.3,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-22",
      slug: "moovair-msh-series-central-ducted-cfg-22",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-23",
      slug: "moovair-msh-series-central-ducted-cfg-23",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-24",
      slug: "moovair-msh-series-central-ducted-cfg-24",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-25",
      slug: "moovair-msh-series-central-ducted-cfg-25",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-26",
      slug: "moovair-msh-series-central-ducted-cfg-26",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.8,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series-central-ducted-cfg-1",
      slug: "moovair-mah-series-central-ducted-cfg-1",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series-central-ducted-cfg-2",
      slug: "moovair-mah-series-central-ducted-cfg-2",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series-central-ducted-cfg-3",
      slug: "moovair-mah-series-central-ducted-cfg-3",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series-central-ducted-cfg-4",
      slug: "moovair-mah-series-central-ducted-cfg-4",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series-central-ducted-cfg-5",
      slug: "moovair-mah-series-central-ducted-cfg-5",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series-central-ducted-cfg-6",
      slug: "moovair-mah-series-central-ducted-cfg-6",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma-series-multi-zone-cfg-1",
      slug: "moovair-dma-series-multi-zone-cfg-1",
      modelId: "moovair-dma-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 21.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-multi-zone-cfg-1",
      slug: "moovair-dm-series-multi-zone-cfg-1",
      modelId: "moovair-dm-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27,
      hspf2: 12,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-1",
      slug: "moovair-msh-series-multi-zone-cfg-1",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.8,
      hspf2: 12.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-2",
      slug: "moovair-msh-series-multi-zone-cfg-2",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-3",
      slug: "moovair-msh-series-multi-zone-cfg-3",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-4",
      slug: "moovair-msh-series-multi-zone-cfg-4",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.8,
      hspf2: 12.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-5",
      slug: "moovair-msh-series-multi-zone-cfg-5",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-6",
      slug: "moovair-msh-series-multi-zone-cfg-6",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-7",
      slug: "moovair-msh-series-multi-zone-cfg-7",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-8",
      slug: "moovair-msh-series-multi-zone-cfg-8",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-9",
      slug: "moovair-msh-series-multi-zone-cfg-9",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.1,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-10",
      slug: "moovair-msh-series-multi-zone-cfg-10",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-11",
      slug: "moovair-msh-series-multi-zone-cfg-11",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 23.5,
      hspf2: 9.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-12",
      slug: "moovair-msh-series-multi-zone-cfg-12",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-13",
      slug: "moovair-msh-series-multi-zone-cfg-13",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-14",
      slug: "moovair-msh-series-multi-zone-cfg-14",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-15",
      slug: "moovair-msh-series-multi-zone-cfg-15",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-16",
      slug: "moovair-msh-series-multi-zone-cfg-16",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-17",
      slug: "moovair-msh-series-multi-zone-cfg-17",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-18",
      slug: "moovair-msh-series-multi-zone-cfg-18",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-19",
      slug: "moovair-msh-series-multi-zone-cfg-19",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 11.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-20",
      slug: "moovair-msh-series-multi-zone-cfg-20",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-21",
      slug: "moovair-msh-series-multi-zone-cfg-21",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.6,
      hspf2: 16.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-22",
      slug: "moovair-msh-series-multi-zone-cfg-22",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-23",
      slug: "moovair-msh-series-multi-zone-cfg-23",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-24",
      slug: "moovair-msh-series-multi-zone-cfg-24",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-25",
      slug: "moovair-msh-series-multi-zone-cfg-25",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-26",
      slug: "moovair-msh-series-multi-zone-cfg-26",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-27",
      slug: "moovair-msh-series-multi-zone-cfg-27",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-28",
      slug: "moovair-msh-series-multi-zone-cfg-28",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-29",
      slug: "moovair-msh-series-multi-zone-cfg-29",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-30",
      slug: "moovair-msh-series-multi-zone-cfg-30",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-31",
      slug: "moovair-msh-series-multi-zone-cfg-31",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-32",
      slug: "moovair-msh-series-multi-zone-cfg-32",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 15400,
      coolingCapacityMaxBtu: 15400,
      seer2: 22.2,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-33",
      slug: "moovair-msh-series-multi-zone-cfg-33",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-34",
      slug: "moovair-msh-series-multi-zone-cfg-34",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.4,
      hspf2: 11.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-35",
      slug: "moovair-msh-series-multi-zone-cfg-35",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-36",
      slug: "moovair-msh-series-multi-zone-cfg-36",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-37",
      slug: "moovair-msh-series-multi-zone-cfg-37",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-38",
      slug: "moovair-msh-series-multi-zone-cfg-38",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-39",
      slug: "moovair-msh-series-multi-zone-cfg-39",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-40",
      slug: "moovair-msh-series-multi-zone-cfg-40",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-multi-zone-cfg-41",
      slug: "moovair-msh-series-multi-zone-cfg-41",
      modelId: "moovair-msh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone-cfg-1",
      slug: "moovair-mxh-series-multi-zone-cfg-1",
      modelId: "moovair-mxh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone-cfg-2",
      slug: "moovair-mxh-series-multi-zone-cfg-2",
      modelId: "moovair-mxh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone-cfg-3",
      slug: "moovair-mxh-series-multi-zone-cfg-3",
      modelId: "moovair-mxh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone-cfg-4",
      slug: "moovair-mxh-series-multi-zone-cfg-4",
      modelId: "moovair-mxh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone-cfg-5",
      slug: "moovair-mxh-series-multi-zone-cfg-5",
      modelId: "moovair-mxh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone-cfg-6",
      slug: "moovair-mxh-series-multi-zone-cfg-6",
      modelId: "moovair-mxh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone-cfg-7",
      slug: "moovair-mxh-series-multi-zone-cfg-7",
      modelId: "moovair-mxh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-multi-zone-cfg-8",
      slug: "moovair-mxh-series-multi-zone-cfg-8",
      modelId: "moovair-mxh-series-multi-zone",
      outdoorUnitId: "moovair",
      indoorUnitId: "moovair",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "moovair-dm-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-2",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-3",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-4",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-5",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-6",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-8",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-9",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-10",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-17",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-22",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-23",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-24",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-25",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mah-series-central-ducted-cfg-1",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-2",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-3",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-4",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-5",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-6",
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
      configurationId: "moovair-dma-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-3",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-6",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-7",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-8",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-11",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-12",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-13",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-14",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13100,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-16",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-17",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-18",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 2.54,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-20",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-22",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-23",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-24",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-25",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-26",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-27",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-28",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-29",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-30",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-31",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-33",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-34",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-35",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-37",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-38",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-multi-zone-cfg-40",
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
      configurationId: "moovair-msh-series-multi-zone-cfg-41",
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
      configurationId: "moovair-mxh-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mxh-series-multi-zone-cfg-2",
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
      configurationId: "moovair-mxh-series-multi-zone-cfg-3",
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
      configurationId: "moovair-mxh-series-multi-zone-cfg-4",
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
      configurationId: "moovair-mxh-series-multi-zone-cfg-5",
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
      configurationId: "moovair-mxh-series-multi-zone-cfg-6",
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
      configurationId: "moovair-mxh-series-multi-zone-cfg-7",
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
      configurationId: "moovair-mxh-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
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
