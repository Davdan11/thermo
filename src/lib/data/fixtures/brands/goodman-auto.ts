import type { BrandDataset } from "../../types";

export const goodmanDataset: BrandDataset = {
  brand: {
    id: "goodman",
    slug: "goodman",
    name: "Goodman",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "goodman-glzs5b",
      slug: "goodman-glzs5b",
      name: "GLZS5B",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszc7",
      slug: "goodman-gszc7",
      name: "GSZC7",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-m",
      slug: "goodman-gzv6sa-m",
      name: "GZV6SA*M",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa",
      slug: "goodman-gzv6sa",
      name: "GZV6SA",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa",
      slug: "goodman-gzv7sa",
      name: "GZV7SA",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa",
      slug: "goodman-gzv9sa",
      name: "GZV9SA",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-20-series",
      slug: "goodman-20-series",
      name: "20 Series",
      brandId: "goodman",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series",
      slug: "goodman-msh-series",
      name: "MSH Series",
      brandId: "goodman",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series",
      slug: "goodman-mst-series",
      name: "MST Series",
      brandId: "goodman",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "goodman-glzs5b-central-ducted",
      slug: "goodman-glzs5b-central-ducted",
      name: "GLZS5B",
      seriesId: "goodman-glzs5b",
      brandId: "goodman",
      modelNumber: "GLZS5B",
      normalizedModelNumber: "glzs5b",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 7800,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 15.2,
      seer2Max: 16,
      hspf2Min: 7.8,
      hspf2Max: 8.2,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszc7-central-ducted",
      slug: "goodman-gszc7-central-ducted",
      name: "GSZC7",
      seriesId: "goodman-gszc7",
      brandId: "goodman",
      modelNumber: "GSZC7",
      normalizedModelNumber: "gszc7",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 34800,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 17000,
      seer2Min: 17.2,
      seer2Max: 17.2,
      hspf2Min: 8.1,
      hspf2Max: 8.2,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-m-central-ducted",
      slug: "goodman-gzv6sa-m-central-ducted",
      name: "GZV6SA*M",
      seriesId: "goodman-gzv6sa-m",
      brandId: "goodman",
      modelNumber: "GZV6SA*M",
      normalizedModelNumber: "gzv6sa-m",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 17000,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 13000,
      seer2Min: 16.5,
      seer2Max: 16.5,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted",
      slug: "goodman-gzv6sa-central-ducted",
      name: "GZV6SA",
      seriesId: "goodman-gzv6sa",
      brandId: "goodman",
      modelNumber: "GZV6SA",
      normalizedModelNumber: "gzv6sa",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17100,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 13000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 8.8,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted",
      slug: "goodman-gzv7sa-central-ducted",
      name: "GZV7SA",
      seriesId: "goodman-gzv7sa",
      brandId: "goodman",
      modelNumber: "GZV7SA",
      normalizedModelNumber: "gzv7sa",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 46000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted",
      slug: "goodman-gzv9sa-central-ducted",
      name: "GZV9SA",
      seriesId: "goodman-gzv9sa",
      brandId: "goodman",
      modelNumber: "GZV9SA",
      normalizedModelNumber: "gzv9sa",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 47000,
      seer2Min: 15.2,
      seer2Max: 21,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "central-ducted",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-20-series-multi-zone",
      slug: "goodman-20-series-multi-zone",
      name: "20 Series",
      seriesId: "goodman-20-series",
      brandId: "goodman",
      modelNumber: "20 Series",
      normalizedModelNumber: "20-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 13000,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 19.5,
      seer2Max: 20.5,
      hspf2Min: 9.3,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone",
      slug: "goodman-msh-series-multi-zone",
      name: "MSH Series",
      seriesId: "goodman-msh-series",
      brandId: "goodman",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 9800,
      heatingCapacity5FMaxBtu: 42500,
      seer2Min: 18,
      seer2Max: 29,
      hspf2Min: 8.7,
      hspf2Max: 14.5,
      cop5FMin: 1.59,
      cop5FMax: 2.89,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone",
      slug: "goodman-mst-series-multi-zone",
      name: "MST Series",
      seriesId: "goodman-mst-series",
      brandId: "goodman",
      modelNumber: "MST Series",
      normalizedModelNumber: "mst-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 11300,
      heatingCapacity5FMaxBtu: 27600,
      seer2Min: 18,
      seer2Max: 22.3,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.75,
      cop5FMax: 2.2,
      systemType: "multi-zone",
      categories: [""].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "goodman",
      modelNumber: "            *",
      brandId: "goodman",
      refrigerant: "R-32" as any,
    }
  ],
  indoorUnits: [
    {
      id: "goodman",
      modelNumber: "             *",
      brandId: "goodman",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "goodman-glzs5b-central-ducted-cfg-1",
      slug: "goodman-glzs5b-central-ducted-cfg-1",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-2",
      slug: "goodman-glzs5b-central-ducted-cfg-2",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-3",
      slug: "goodman-glzs5b-central-ducted-cfg-3",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-4",
      slug: "goodman-glzs5b-central-ducted-cfg-4",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-5",
      slug: "goodman-glzs5b-central-ducted-cfg-5",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-6",
      slug: "goodman-glzs5b-central-ducted-cfg-6",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-7",
      slug: "goodman-glzs5b-central-ducted-cfg-7",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-8",
      slug: "goodman-glzs5b-central-ducted-cfg-8",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-9",
      slug: "goodman-glzs5b-central-ducted-cfg-9",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-10",
      slug: "goodman-glzs5b-central-ducted-cfg-10",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-11",
      slug: "goodman-glzs5b-central-ducted-cfg-11",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-12",
      slug: "goodman-glzs5b-central-ducted-cfg-12",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-13",
      slug: "goodman-glzs5b-central-ducted-cfg-13",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-14",
      slug: "goodman-glzs5b-central-ducted-cfg-14",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 15.2,
      hspf2: 7.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-15",
      slug: "goodman-glzs5b-central-ducted-cfg-15",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 16,
      hspf2: 8.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-16",
      slug: "goodman-glzs5b-central-ducted-cfg-16",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 16,
      hspf2: 8.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-glzs5b-central-ducted-cfg-17",
      slug: "goodman-glzs5b-central-ducted-cfg-17",
      modelId: "goodman-glzs5b-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 16,
      hspf2: 8.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszc7-central-ducted-cfg-1",
      slug: "goodman-gszc7-central-ducted-cfg-1",
      modelId: "goodman-gszc7-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 17.2,
      hspf2: 8.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszc7-central-ducted-cfg-2",
      slug: "goodman-gszc7-central-ducted-cfg-2",
      modelId: "goodman-gszc7-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.2,
      hspf2: 8.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszc7-central-ducted-cfg-3",
      slug: "goodman-gszc7-central-ducted-cfg-3",
      modelId: "goodman-gszc7-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.2,
      hspf2: 8.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszc7-central-ducted-cfg-4",
      slug: "goodman-gszc7-central-ducted-cfg-4",
      modelId: "goodman-gszc7-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.2,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszc7-central-ducted-cfg-5",
      slug: "goodman-gszc7-central-ducted-cfg-5",
      modelId: "goodman-gszc7-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.2,
      hspf2: 8.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszc7-central-ducted-cfg-6",
      slug: "goodman-gszc7-central-ducted-cfg-6",
      modelId: "goodman-gszc7-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.2,
      hspf2: 8.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-m-central-ducted-cfg-1",
      slug: "goodman-gzv6sa-m-central-ducted-cfg-1",
      modelId: "goodman-gzv6sa-m-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 16.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-m-central-ducted-cfg-2",
      slug: "goodman-gzv6sa-m-central-ducted-cfg-2",
      modelId: "goodman-gzv6sa-m-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 16.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-1",
      slug: "goodman-gzv6sa-central-ducted-cfg-1",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-2",
      slug: "goodman-gzv6sa-central-ducted-cfg-2",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-3",
      slug: "goodman-gzv6sa-central-ducted-cfg-3",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-4",
      slug: "goodman-gzv6sa-central-ducted-cfg-4",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-5",
      slug: "goodman-gzv6sa-central-ducted-cfg-5",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-6",
      slug: "goodman-gzv6sa-central-ducted-cfg-6",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-7",
      slug: "goodman-gzv6sa-central-ducted-cfg-7",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-8",
      slug: "goodman-gzv6sa-central-ducted-cfg-8",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-9",
      slug: "goodman-gzv6sa-central-ducted-cfg-9",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-10",
      slug: "goodman-gzv6sa-central-ducted-cfg-10",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-11",
      slug: "goodman-gzv6sa-central-ducted-cfg-11",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-12",
      slug: "goodman-gzv6sa-central-ducted-cfg-12",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-13",
      slug: "goodman-gzv6sa-central-ducted-cfg-13",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-14",
      slug: "goodman-gzv6sa-central-ducted-cfg-14",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-15",
      slug: "goodman-gzv6sa-central-ducted-cfg-15",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-16",
      slug: "goodman-gzv6sa-central-ducted-cfg-16",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-17",
      slug: "goodman-gzv6sa-central-ducted-cfg-17",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-1",
      slug: "goodman-gzv7sa-central-ducted-cfg-1",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-2",
      slug: "goodman-gzv7sa-central-ducted-cfg-2",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-3",
      slug: "goodman-gzv7sa-central-ducted-cfg-3",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-4",
      slug: "goodman-gzv7sa-central-ducted-cfg-4",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-5",
      slug: "goodman-gzv7sa-central-ducted-cfg-5",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-6",
      slug: "goodman-gzv7sa-central-ducted-cfg-6",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-7",
      slug: "goodman-gzv7sa-central-ducted-cfg-7",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-8",
      slug: "goodman-gzv7sa-central-ducted-cfg-8",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-9",
      slug: "goodman-gzv7sa-central-ducted-cfg-9",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-10",
      slug: "goodman-gzv7sa-central-ducted-cfg-10",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-11",
      slug: "goodman-gzv7sa-central-ducted-cfg-11",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-12",
      slug: "goodman-gzv7sa-central-ducted-cfg-12",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-13",
      slug: "goodman-gzv7sa-central-ducted-cfg-13",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-14",
      slug: "goodman-gzv7sa-central-ducted-cfg-14",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-15",
      slug: "goodman-gzv7sa-central-ducted-cfg-15",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-16",
      slug: "goodman-gzv7sa-central-ducted-cfg-16",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-17",
      slug: "goodman-gzv7sa-central-ducted-cfg-17",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-18",
      slug: "goodman-gzv7sa-central-ducted-cfg-18",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-19",
      slug: "goodman-gzv7sa-central-ducted-cfg-19",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-20",
      slug: "goodman-gzv7sa-central-ducted-cfg-20",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-21",
      slug: "goodman-gzv7sa-central-ducted-cfg-21",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-22",
      slug: "goodman-gzv7sa-central-ducted-cfg-22",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-23",
      slug: "goodman-gzv7sa-central-ducted-cfg-23",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-24",
      slug: "goodman-gzv7sa-central-ducted-cfg-24",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-25",
      slug: "goodman-gzv7sa-central-ducted-cfg-25",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-26",
      slug: "goodman-gzv7sa-central-ducted-cfg-26",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-27",
      slug: "goodman-gzv7sa-central-ducted-cfg-27",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-28",
      slug: "goodman-gzv7sa-central-ducted-cfg-28",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-29",
      slug: "goodman-gzv7sa-central-ducted-cfg-29",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 15.2,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-30",
      slug: "goodman-gzv7sa-central-ducted-cfg-30",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-31",
      slug: "goodman-gzv7sa-central-ducted-cfg-31",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-32",
      slug: "goodman-gzv7sa-central-ducted-cfg-32",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-33",
      slug: "goodman-gzv7sa-central-ducted-cfg-33",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-34",
      slug: "goodman-gzv7sa-central-ducted-cfg-34",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-35",
      slug: "goodman-gzv7sa-central-ducted-cfg-35",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 15.2,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-36",
      slug: "goodman-gzv7sa-central-ducted-cfg-36",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-37",
      slug: "goodman-gzv7sa-central-ducted-cfg-37",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-38",
      slug: "goodman-gzv7sa-central-ducted-cfg-38",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-39",
      slug: "goodman-gzv7sa-central-ducted-cfg-39",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-40",
      slug: "goodman-gzv7sa-central-ducted-cfg-40",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-41",
      slug: "goodman-gzv7sa-central-ducted-cfg-41",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-42",
      slug: "goodman-gzv7sa-central-ducted-cfg-42",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-43",
      slug: "goodman-gzv7sa-central-ducted-cfg-43",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-44",
      slug: "goodman-gzv7sa-central-ducted-cfg-44",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.1,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-45",
      slug: "goodman-gzv7sa-central-ducted-cfg-45",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-46",
      slug: "goodman-gzv7sa-central-ducted-cfg-46",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-47",
      slug: "goodman-gzv7sa-central-ducted-cfg-47",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-48",
      slug: "goodman-gzv7sa-central-ducted-cfg-48",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-49",
      slug: "goodman-gzv7sa-central-ducted-cfg-49",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-50",
      slug: "goodman-gzv7sa-central-ducted-cfg-50",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-51",
      slug: "goodman-gzv7sa-central-ducted-cfg-51",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-52",
      slug: "goodman-gzv7sa-central-ducted-cfg-52",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-53",
      slug: "goodman-gzv7sa-central-ducted-cfg-53",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-54",
      slug: "goodman-gzv7sa-central-ducted-cfg-54",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-55",
      slug: "goodman-gzv7sa-central-ducted-cfg-55",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-56",
      slug: "goodman-gzv7sa-central-ducted-cfg-56",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-57",
      slug: "goodman-gzv7sa-central-ducted-cfg-57",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-58",
      slug: "goodman-gzv7sa-central-ducted-cfg-58",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-59",
      slug: "goodman-gzv7sa-central-ducted-cfg-59",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-60",
      slug: "goodman-gzv7sa-central-ducted-cfg-60",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-61",
      slug: "goodman-gzv7sa-central-ducted-cfg-61",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-62",
      slug: "goodman-gzv7sa-central-ducted-cfg-62",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-63",
      slug: "goodman-gzv7sa-central-ducted-cfg-63",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-64",
      slug: "goodman-gzv7sa-central-ducted-cfg-64",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-65",
      slug: "goodman-gzv7sa-central-ducted-cfg-65",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-66",
      slug: "goodman-gzv7sa-central-ducted-cfg-66",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-67",
      slug: "goodman-gzv7sa-central-ducted-cfg-67",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-68",
      slug: "goodman-gzv7sa-central-ducted-cfg-68",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-69",
      slug: "goodman-gzv7sa-central-ducted-cfg-69",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-70",
      slug: "goodman-gzv7sa-central-ducted-cfg-70",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-71",
      slug: "goodman-gzv7sa-central-ducted-cfg-71",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-72",
      slug: "goodman-gzv7sa-central-ducted-cfg-72",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-73",
      slug: "goodman-gzv7sa-central-ducted-cfg-73",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-74",
      slug: "goodman-gzv7sa-central-ducted-cfg-74",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-75",
      slug: "goodman-gzv7sa-central-ducted-cfg-75",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-76",
      slug: "goodman-gzv7sa-central-ducted-cfg-76",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-77",
      slug: "goodman-gzv7sa-central-ducted-cfg-77",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-78",
      slug: "goodman-gzv7sa-central-ducted-cfg-78",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-79",
      slug: "goodman-gzv7sa-central-ducted-cfg-79",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-80",
      slug: "goodman-gzv7sa-central-ducted-cfg-80",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-81",
      slug: "goodman-gzv7sa-central-ducted-cfg-81",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-82",
      slug: "goodman-gzv7sa-central-ducted-cfg-82",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-83",
      slug: "goodman-gzv7sa-central-ducted-cfg-83",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-84",
      slug: "goodman-gzv7sa-central-ducted-cfg-84",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-85",
      slug: "goodman-gzv7sa-central-ducted-cfg-85",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-86",
      slug: "goodman-gzv7sa-central-ducted-cfg-86",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-87",
      slug: "goodman-gzv7sa-central-ducted-cfg-87",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-88",
      slug: "goodman-gzv7sa-central-ducted-cfg-88",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-89",
      slug: "goodman-gzv7sa-central-ducted-cfg-89",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-90",
      slug: "goodman-gzv7sa-central-ducted-cfg-90",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-91",
      slug: "goodman-gzv7sa-central-ducted-cfg-91",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-1",
      slug: "goodman-gzv9sa-central-ducted-cfg-1",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 19.2,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-2",
      slug: "goodman-gzv9sa-central-ducted-cfg-2",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 19.2,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-3",
      slug: "goodman-gzv9sa-central-ducted-cfg-3",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19.2,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-4",
      slug: "goodman-gzv9sa-central-ducted-cfg-4",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 19.2,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-5",
      slug: "goodman-gzv9sa-central-ducted-cfg-5",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-6",
      slug: "goodman-gzv9sa-central-ducted-cfg-6",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16.9,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-7",
      slug: "goodman-gzv9sa-central-ducted-cfg-7",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.2,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-8",
      slug: "goodman-gzv9sa-central-ducted-cfg-8",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-9",
      slug: "goodman-gzv9sa-central-ducted-cfg-9",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-10",
      slug: "goodman-gzv9sa-central-ducted-cfg-10",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-11",
      slug: "goodman-gzv9sa-central-ducted-cfg-11",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-12",
      slug: "goodman-gzv9sa-central-ducted-cfg-12",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-13",
      slug: "goodman-gzv9sa-central-ducted-cfg-13",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-14",
      slug: "goodman-gzv9sa-central-ducted-cfg-14",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-15",
      slug: "goodman-gzv9sa-central-ducted-cfg-15",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-16",
      slug: "goodman-gzv9sa-central-ducted-cfg-16",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 21,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-17",
      slug: "goodman-gzv9sa-central-ducted-cfg-17",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 16.9,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-18",
      slug: "goodman-gzv9sa-central-ducted-cfg-18",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 18.2,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-19",
      slug: "goodman-gzv9sa-central-ducted-cfg-19",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-20",
      slug: "goodman-gzv9sa-central-ducted-cfg-20",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-21",
      slug: "goodman-gzv9sa-central-ducted-cfg-21",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17.5,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-22",
      slug: "goodman-gzv9sa-central-ducted-cfg-22",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-23",
      slug: "goodman-gzv9sa-central-ducted-cfg-23",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-24",
      slug: "goodman-gzv9sa-central-ducted-cfg-24",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-25",
      slug: "goodman-gzv9sa-central-ducted-cfg-25",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.2,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-26",
      slug: "goodman-gzv9sa-central-ducted-cfg-26",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-27",
      slug: "goodman-gzv9sa-central-ducted-cfg-27",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-28",
      slug: "goodman-gzv9sa-central-ducted-cfg-28",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-29",
      slug: "goodman-gzv9sa-central-ducted-cfg-29",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-30",
      slug: "goodman-gzv9sa-central-ducted-cfg-30",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-31",
      slug: "goodman-gzv9sa-central-ducted-cfg-31",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-32",
      slug: "goodman-gzv9sa-central-ducted-cfg-32",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-33",
      slug: "goodman-gzv9sa-central-ducted-cfg-33",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-34",
      slug: "goodman-gzv9sa-central-ducted-cfg-34",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-35",
      slug: "goodman-gzv9sa-central-ducted-cfg-35",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv9sa-central-ducted-cfg-36",
      slug: "goodman-gzv9sa-central-ducted-cfg-36",
      modelId: "goodman-gzv9sa-central-ducted",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-20-series-multi-zone-cfg-1",
      slug: "goodman-20-series-multi-zone-cfg-1",
      modelId: "goodman-20-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: 20.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-20-series-multi-zone-cfg-2",
      slug: "goodman-20-series-multi-zone-cfg-2",
      modelId: "goodman-20-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-20-series-multi-zone-cfg-3",
      slug: "goodman-20-series-multi-zone-cfg-3",
      modelId: "goodman-20-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-1",
      slug: "goodman-msh-series-multi-zone-cfg-1",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-2",
      slug: "goodman-msh-series-multi-zone-cfg-2",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-3",
      slug: "goodman-msh-series-multi-zone-cfg-3",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 12,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-4",
      slug: "goodman-msh-series-multi-zone-cfg-4",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-5",
      slug: "goodman-msh-series-multi-zone-cfg-5",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 29,
      hspf2: 14,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-6",
      slug: "goodman-msh-series-multi-zone-cfg-6",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-7",
      slug: "goodman-msh-series-multi-zone-cfg-7",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-8",
      slug: "goodman-msh-series-multi-zone-cfg-8",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-9",
      slug: "goodman-msh-series-multi-zone-cfg-9",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-10",
      slug: "goodman-msh-series-multi-zone-cfg-10",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27.5,
      hspf2: 14.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-11",
      slug: "goodman-msh-series-multi-zone-cfg-11",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 11.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-12",
      slug: "goodman-msh-series-multi-zone-cfg-12",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-13",
      slug: "goodman-msh-series-multi-zone-cfg-13",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-14",
      slug: "goodman-msh-series-multi-zone-cfg-14",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-15",
      slug: "goodman-msh-series-multi-zone-cfg-15",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-16",
      slug: "goodman-msh-series-multi-zone-cfg-16",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.5,
      hspf2: 8.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-17",
      slug: "goodman-msh-series-multi-zone-cfg-17",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-18",
      slug: "goodman-msh-series-multi-zone-cfg-18",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 26.3,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-19",
      slug: "goodman-msh-series-multi-zone-cfg-19",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-20",
      slug: "goodman-msh-series-multi-zone-cfg-20",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-21",
      slug: "goodman-msh-series-multi-zone-cfg-21",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-22",
      slug: "goodman-msh-series-multi-zone-cfg-22",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 10.3,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-23",
      slug: "goodman-msh-series-multi-zone-cfg-23",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 8.7,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-24",
      slug: "goodman-msh-series-multi-zone-cfg-24",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-25",
      slug: "goodman-msh-series-multi-zone-cfg-25",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 9.6,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-26",
      slug: "goodman-msh-series-multi-zone-cfg-26",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-multi-zone-cfg-27",
      slug: "goodman-msh-series-multi-zone-cfg-27",
      modelId: "goodman-msh-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.9,
      hspf2: 9,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone-cfg-1",
      slug: "goodman-mst-series-multi-zone-cfg-1",
      modelId: "goodman-mst-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone-cfg-2",
      slug: "goodman-mst-series-multi-zone-cfg-2",
      modelId: "goodman-mst-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone-cfg-3",
      slug: "goodman-mst-series-multi-zone-cfg-3",
      modelId: "goodman-mst-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone-cfg-4",
      slug: "goodman-mst-series-multi-zone-cfg-4",
      modelId: "goodman-mst-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone-cfg-5",
      slug: "goodman-mst-series-multi-zone-cfg-5",
      modelId: "goodman-mst-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone-cfg-6",
      slug: "goodman-mst-series-multi-zone-cfg-6",
      modelId: "goodman-mst-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22,
      hspf2: 11,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone-cfg-7",
      slug: "goodman-mst-series-multi-zone-cfg-7",
      modelId: "goodman-mst-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 10.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-multi-zone-cfg-8",
      slug: "goodman-mst-series-multi-zone-cfg-8",
      modelId: "goodman-mst-series-multi-zone",
      outdoorUnitId: "goodman",
      indoorUnitId: "goodman",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 9.5,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-glzs5b-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszc7-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszc7-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszc7-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszc7-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszc7-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszc7-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-m-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-m-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-24",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-25",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-87",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-88",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-89",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-90",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-91",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-3",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-4",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv9sa-central-ducted-cfg-28",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-29",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-30",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-31",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-32",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-33",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-34",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-35",
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
      configurationId: "goodman-gzv9sa-central-ducted-cfg-36",
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
      configurationId: "goodman-20-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-20-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-20-series-multi-zone-cfg-3",
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
      configurationId: "goodman-msh-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.59,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-2",
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
      configurationId: "goodman-msh-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-6",
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
      configurationId: "goodman-msh-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12100,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17700,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-21",
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
      configurationId: "goodman-msh-series-multi-zone-cfg-22",
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
      configurationId: "goodman-msh-series-multi-zone-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-24",
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
      configurationId: "goodman-msh-series-multi-zone-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-multi-zone-cfg-26",
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
      configurationId: "goodman-msh-series-multi-zone-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-mst-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-mst-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12100,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-mst-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-mst-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17700,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-mst-series-multi-zone-cfg-5",
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
      configurationId: "goodman-mst-series-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-mst-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-mst-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
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
