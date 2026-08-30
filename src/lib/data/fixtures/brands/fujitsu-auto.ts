import type { BrandDataset } from "../../types";

export const fujitsuDataset: BrandDataset = {
  brand: {
    id: "fujitsu",
    slug: "fujitsu",
    name: "Fujitsu",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "fujitsu-f-series",
      slug: "fujitsu-f-series",
      name: "F Series",
      brandId: "fujitsu",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-w-series",
      slug: "fujitsu-w-series",
      name: "W Series",
      brandId: "fujitsu",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rdfxyc",
      slug: "fujitsu-rdfxyc",
      name: "RDFXYC",
      brandId: "fujitsu",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rhpxyc",
      slug: "fujitsu-rhpxyc",
      name: "RHPXYC",
      brandId: "fujitsu",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series",
      slug: "fujitsu-airstage-h-series",
      name: "AIRSTAGE H series",
      brandId: "fujitsu",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s",
      slug: "fujitsu-j-7s",
      name: "J-7S",
      brandId: "fujitsu",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7",
      slug: "fujitsu-j-7",
      name: "J-7",
      brandId: "fujitsu",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "fujitsu-f-series-central-ducted",
      slug: "fujitsu-f-series-central-ducted",
      name: "F Series",
      seriesId: "fujitsu-f-series",
      brandId: "fujitsu",
      modelNumber: "F Series",
      normalizedModelNumber: "f-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 55500,
      heatingCapacity5FMinBtu: null,
      heatingCapacity5FMaxBtu: null,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 7.8,
      hspf2Max: 7.8,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-w-series-central-ducted",
      slug: "fujitsu-w-series-central-ducted",
      name: "W Series",
      seriesId: "fujitsu-w-series",
      brandId: "fujitsu",
      modelNumber: "W Series",
      normalizedModelNumber: "w-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 55500,
      heatingCapacity5FMinBtu: null,
      heatingCapacity5FMaxBtu: null,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 7.8,
      hspf2Max: 7.8,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rdfxyc-central-ducted",
      slug: "fujitsu-rdfxyc-central-ducted",
      name: "RDFXYC",
      seriesId: "fujitsu-rdfxyc",
      brandId: "fujitsu",
      modelNumber: "RDFXYC",
      normalizedModelNumber: "rdfxyc",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 13800,
      heatingCapacity5FMaxBtu: 25000,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 7.2,
      hspf2Max: 7.2,
      cop5FMin: 1.44,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rhpxyc-central-ducted",
      slug: "fujitsu-rhpxyc-central-ducted",
      name: "RHPXYC",
      seriesId: "fujitsu-rhpxyc",
      brandId: "fujitsu",
      modelNumber: "RHPXYC",
      normalizedModelNumber: "rhpxyc",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      heatingCapacity5FMinBtu: 14000,
      heatingCapacity5FMaxBtu: 14000,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 7.2,
      hspf2Max: 7.2,
      cop5FMin: 1.7,
      cop5FMax: 1.7,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone",
      slug: "fujitsu-airstage-h-series-multi-zone",
      name: "AIRSTAGE H series",
      seriesId: "fujitsu-airstage-h-series",
      brandId: "fujitsu",
      modelNumber: "AIRSTAGE H series",
      normalizedModelNumber: "airstage-h-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 46000,
      heatingCapacity5FMinBtu: 7100,
      heatingCapacity5FMaxBtu: 51000,
      seer2Min: 16.4,
      seer2Max: 33.5,
      hspf2Min: 9,
      hspf2Max: 14,
      cop5FMin: 1.9,
      cop5FMax: 2.62,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-multi-zone",
      slug: "fujitsu-j-7s-multi-zone",
      name: "J-7S",
      seriesId: "fujitsu-j-7s",
      brandId: "fujitsu",
      modelNumber: "J-7S",
      normalizedModelNumber: "j-7s",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 40500,
      seer2Min: 15.4,
      seer2Max: 16.1,
      hspf2Min: 9,
      hspf2Max: 9.4,
      cop5FMin: 1.94,
      cop5FMax: 2.06,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7-multi-zone",
      slug: "fujitsu-j-7-multi-zone",
      name: "J-7",
      seriesId: "fujitsu-j-7",
      brandId: "fujitsu",
      modelNumber: "J-7",
      normalizedModelNumber: "j-7",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 60000,
      heatingCapacity5FMinBtu: 40500,
      heatingCapacity5FMaxBtu: 46500,
      seer2Min: 22.2,
      seer2Max: 23.1,
      hspf2Min: 9.5,
      hspf2Max: 10.3,
      cop5FMin: 2.32,
      cop5FMax: 2.36,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "fujitsu",
      modelNumber: "             ",
      brandId: "fujitsu",
      refrigerant: "R-454B" as any,
    }
  ],
  indoorUnits: [
    {
      id: "fujitsu",
      modelNumber: "            ",
      brandId: "fujitsu",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "fujitsu-f-series-central-ducted-cfg-1",
      slug: "fujitsu-f-series-central-ducted-cfg-1",
      modelId: "fujitsu-f-series-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 40000,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-f-series-central-ducted-cfg-2",
      slug: "fujitsu-f-series-central-ducted-cfg-2",
      modelId: "fujitsu-f-series-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-w-series-central-ducted-cfg-1",
      slug: "fujitsu-w-series-central-ducted-cfg-1",
      modelId: "fujitsu-w-series-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 40000,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-w-series-central-ducted-cfg-2",
      slug: "fujitsu-w-series-central-ducted-cfg-2",
      modelId: "fujitsu-w-series-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rdfxyc-central-ducted-cfg-1",
      slug: "fujitsu-rdfxyc-central-ducted-cfg-1",
      modelId: "fujitsu-rdfxyc-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 15.2,
      hspf2: 7.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rdfxyc-central-ducted-cfg-2",
      slug: "fujitsu-rdfxyc-central-ducted-cfg-2",
      modelId: "fujitsu-rdfxyc-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 15.2,
      hspf2: 7.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rdfxyc-central-ducted-cfg-3",
      slug: "fujitsu-rdfxyc-central-ducted-cfg-3",
      modelId: "fujitsu-rdfxyc-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 15.2,
      hspf2: 7.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rdfxyc-central-ducted-cfg-4",
      slug: "fujitsu-rdfxyc-central-ducted-cfg-4",
      modelId: "fujitsu-rdfxyc-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 15.2,
      hspf2: 7.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-rhpxyc-central-ducted-cfg-1",
      slug: "fujitsu-rhpxyc-central-ducted-cfg-1",
      modelId: "fujitsu-rhpxyc-central-ducted",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 15.2,
      hspf2: 7.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-1",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-1",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 12.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-2",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-2",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 30,
      hspf2: 12.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-3",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-3",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 10.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-4",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-4",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 10.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-5",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-5",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-6",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-6",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-7",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-7",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-8",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-8",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-9",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-9",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.4,
      hspf2: 11.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-10",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-10",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.4,
      hspf2: 11.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-11",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-11",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 11.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-12",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-12",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-13",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-13",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.1,
      hspf2: 13.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-14",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-14",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27.5,
      hspf2: 11.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-15",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-15",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27.5,
      hspf2: 11.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-16",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-16",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-17",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-17",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-18",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-18",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 31.5,
      hspf2: 13.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-19",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-19",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 31.5,
      hspf2: 13.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-20",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-20",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 31.5,
      hspf2: 13.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-21",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-21",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 31.5,
      hspf2: 13.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-22",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-22",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.7,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-23",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-23",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.9,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-24",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-24",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.1,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-25",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-25",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.7,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-26",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-26",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-27",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-27",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 14200,
      coolingCapacityMaxBtu: 14200,
      seer2: 24,
      hspf2: 10.95,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-28",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-28",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.9,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-29",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-29",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.1,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-30",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-30",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 30.5,
      hspf2: 12.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-31",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-31",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 30.5,
      hspf2: 12.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-32",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-32",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 28.7,
      hspf2: 13,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-33",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-33",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 28.7,
      hspf2: 13,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-34",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-34",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 28.7,
      hspf2: 13,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-35",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-35",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 28.7,
      hspf2: 13,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-36",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-36",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 27.5,
      hspf2: 12.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-37",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-37",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 14500,
      coolingCapacityMaxBtu: 14500,
      seer2: 27.5,
      hspf2: 12.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-38",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-38",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-39",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-39",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-40",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-40",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-41",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-41",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.4,
      hspf2: 11.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-42",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-42",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.9,
      hspf2: 11.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-43",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-43",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.2,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-44",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-44",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.6,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-45",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-45",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 26.3,
      hspf2: 11.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-46",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-46",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-47",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-47",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-48",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-48",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.5,
      hspf2: 12.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-49",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-49",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.5,
      hspf2: 12.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-50",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-50",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-51",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-51",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 21.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-52",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-52",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.7,
      hspf2: 10.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-53",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-53",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.7,
      hspf2: 10.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-54",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-54",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-55",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-55",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.2,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-56",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-56",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.5,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-57",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-57",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 19.5,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-58",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-58",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24,
      hspf2: 11.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-59",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-59",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 24,
      hspf2: 11.9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-60",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-60",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-61",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-61",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-62",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-62",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.5,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-63",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-63",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.8,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-64",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-64",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-65",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-65",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 23,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-66",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-66",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.8,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-67",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-67",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-68",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-68",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-69",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-69",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.4,
      hspf2: 10.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-70",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-70",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 21,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-71",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-71",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 21,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-72",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-72",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.8,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-73",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-73",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.3,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-74",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-74",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-75",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-75",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22,
      hspf2: 10.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-76",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-76",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.3,
      hspf2: 10.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-77",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-77",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-78",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-78",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-79",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-79",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.3,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-80",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-80",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-81",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-81",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 19,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-82",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-82",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 19,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-83",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-83",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 19.5,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-84",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-84",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22,
      hspf2: 10.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-85",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-85",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 17.3,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-86",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-86",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 19,
      hspf2: 10.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-87",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-87",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 19,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-88",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-88",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 19,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-89",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-89",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 19,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-90",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-90",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 19,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-91",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-91",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 21.5,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-92",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-92",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-93",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-93",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.4,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-airstage-h-series-multi-zone-cfg-94",
      slug: "fujitsu-airstage-h-series-multi-zone-cfg-94",
      modelId: "fujitsu-airstage-h-series-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18.2,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-multi-zone-cfg-1",
      slug: "fujitsu-j-7s-multi-zone-cfg-1",
      modelId: "fujitsu-j-7s-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-multi-zone-cfg-2",
      slug: "fujitsu-j-7s-multi-zone-cfg-2",
      modelId: "fujitsu-j-7s-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 9.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7s-multi-zone-cfg-3",
      slug: "fujitsu-j-7s-multi-zone-cfg-3",
      modelId: "fujitsu-j-7s-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 15.4,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7-multi-zone-cfg-1",
      slug: "fujitsu-j-7-multi-zone-cfg-1",
      modelId: "fujitsu-j-7-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.1,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7-multi-zone-cfg-2",
      slug: "fujitsu-j-7-multi-zone-cfg-2",
      modelId: "fujitsu-j-7-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23,
      hspf2: 9.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "fujitsu-j-7-multi-zone-cfg-3",
      slug: "fujitsu-j-7-multi-zone-cfg-3",
      modelId: "fujitsu-j-7-multi-zone",
      outdoorUnitId: "fujitsu",
      indoorUnitId: "fujitsu",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 22.2,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "fujitsu-rdfxyc-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-rdfxyc-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-rdfxyc-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-rdfxyc-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-rhpxyc-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.48,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 2.22,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.62,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.62,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.62,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.62,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-36",
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
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-37",
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
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-46",
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
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.28,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48000,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 51000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-airstage-h-series-multi-zone-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33800,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7s-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.32,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "fujitsu-j-7-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46500,
          cop: 2.35,
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
