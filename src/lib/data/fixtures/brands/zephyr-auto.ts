import type { BrandDataset } from "../../types";

export const zephyrDataset: BrandDataset = {
  brand: {
    id: "zephyr",
    slug: "zephyr",
    name: "Zephyr",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "zephyr-hi-ultra-hd",
      slug: "zephyr-hi-ultra-hd",
      name: "Hi ULTRA HD",
      brandId: "zephyr",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra",
      slug: "zephyr-ultra",
      name: "Ultra",
      brandId: "zephyr",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-coil",
      slug: "zephyr-ultra-coil",
      name: "Ultra-Coil",
      brandId: "zephyr",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra",
      slug: "zephyr-hiultra",
      name: "HiULTRA",
      brandId: "zephyr",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme",
      slug: "zephyr-hi-multi-xtreme",
      name: "Hi MULTI Xtreme",
      brandId: "zephyr",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "zephyr-hi-ultra-hd-central-ducted",
      slug: "zephyr-hi-ultra-hd-central-ducted",
      name: "Hi ULTRA HD",
      seriesId: "zephyr-hi-ultra-hd",
      brandId: "zephyr",
      modelNumber: "Hi ULTRA HD",
      normalizedModelNumber: "hi-ultra-hd",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 16900,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 16.5,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted",
      slug: "zephyr-ultra-central-ducted",
      name: "Ultra",
      seriesId: "zephyr-ultra",
      brandId: "zephyr",
      modelNumber: "Ultra",
      normalizedModelNumber: "ultra",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 20800,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 19,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 2.15,
      cop5FMax: 2.52,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-coil-central-ducted",
      slug: "zephyr-ultra-coil-central-ducted",
      name: "Ultra-Coil",
      seriesId: "zephyr-ultra-coil",
      brandId: "zephyr",
      modelNumber: "Ultra-Coil",
      normalizedModelNumber: "ultra-coil",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 16,
      seer2Max: 16.5,
      hspf2Min: 8.2,
      hspf2Max: 8.3,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone",
      slug: "zephyr-hiultra-multi-zone",
      name: "HiULTRA",
      seriesId: "zephyr-hiultra",
      brandId: "zephyr",
      modelNumber: "HiULTRA",
      normalizedModelNumber: "hiultra",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 5400,
      heatingCapacity5FMaxBtu: 19800,
      seer2Min: 20,
      seer2Max: 32,
      hspf2Min: 9,
      hspf2Max: 11.8,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone",
      slug: "zephyr-hi-multi-xtreme-multi-zone",
      name: "Hi MULTI Xtreme",
      seriesId: "zephyr-hi-multi-xtreme",
      brandId: "zephyr",
      modelNumber: "Hi MULTI Xtreme",
      normalizedModelNumber: "hi-multi-xtreme",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 17.5,
      seer2Max: 21.5,
      hspf2Min: 8.8,
      hspf2Max: 9.45,
      cop5FMin: 1.82,
      cop5FMax: 1.96,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "zephyr",
      modelNumber: "  -     ",
      brandId: "zephyr",
      refrigerant: "R-410A" as any,
    }
  ],
  indoorUnits: [
    {
      id: "zephyr",
      modelNumber: "  -   ",
      brandId: "zephyr",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "zephyr-hi-ultra-hd-central-ducted-cfg-1",
      slug: "zephyr-hi-ultra-hd-central-ducted-cfg-1",
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-ultra-hd-central-ducted-cfg-2",
      slug: "zephyr-hi-ultra-hd-central-ducted-cfg-2",
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-ultra-hd-central-ducted-cfg-3",
      slug: "zephyr-hi-ultra-hd-central-ducted-cfg-3",
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-1",
      slug: "zephyr-ultra-central-ducted-cfg-1",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-2",
      slug: "zephyr-ultra-central-ducted-cfg-2",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-3",
      slug: "zephyr-ultra-central-ducted-cfg-3",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-4",
      slug: "zephyr-ultra-central-ducted-cfg-4",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-5",
      slug: "zephyr-ultra-central-ducted-cfg-5",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-6",
      slug: "zephyr-ultra-central-ducted-cfg-6",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-7",
      slug: "zephyr-ultra-central-ducted-cfg-7",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-8",
      slug: "zephyr-ultra-central-ducted-cfg-8",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-coil-central-ducted-cfg-1",
      slug: "zephyr-ultra-coil-central-ducted-cfg-1",
      modelId: "zephyr-ultra-coil-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-coil-central-ducted-cfg-2",
      slug: "zephyr-ultra-coil-central-ducted-cfg-2",
      modelId: "zephyr-ultra-coil-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.5,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-coil-central-ducted-cfg-3",
      slug: "zephyr-ultra-coil-central-ducted-cfg-3",
      modelId: "zephyr-ultra-coil-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-coil-central-ducted-cfg-4",
      slug: "zephyr-ultra-coil-central-ducted-cfg-4",
      modelId: "zephyr-ultra-coil-central-ducted",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16.4,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-1",
      slug: "zephyr-hiultra-multi-zone-cfg-1",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-2",
      slug: "zephyr-hiultra-multi-zone-cfg-2",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-3",
      slug: "zephyr-hiultra-multi-zone-cfg-3",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-4",
      slug: "zephyr-hiultra-multi-zone-cfg-4",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-5",
      slug: "zephyr-hiultra-multi-zone-cfg-5",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-6",
      slug: "zephyr-hiultra-multi-zone-cfg-6",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-7",
      slug: "zephyr-hiultra-multi-zone-cfg-7",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 32,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-8",
      slug: "zephyr-hiultra-multi-zone-cfg-8",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-9",
      slug: "zephyr-hiultra-multi-zone-cfg-9",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-10",
      slug: "zephyr-hiultra-multi-zone-cfg-10",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-11",
      slug: "zephyr-hiultra-multi-zone-cfg-11",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 30,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-12",
      slug: "zephyr-hiultra-multi-zone-cfg-12",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 25.6,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-13",
      slug: "zephyr-hiultra-multi-zone-cfg-13",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-14",
      slug: "zephyr-hiultra-multi-zone-cfg-14",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-15",
      slug: "zephyr-hiultra-multi-zone-cfg-15",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-16",
      slug: "zephyr-hiultra-multi-zone-cfg-16",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-17",
      slug: "zephyr-hiultra-multi-zone-cfg-17",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-multi-zone-cfg-18",
      slug: "zephyr-hiultra-multi-zone-cfg-18",
      modelId: "zephyr-hiultra-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone-cfg-1",
      slug: "zephyr-hi-multi-xtreme-multi-zone-cfg-1",
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone-cfg-2",
      slug: "zephyr-hi-multi-xtreme-multi-zone-cfg-2",
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.83,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone-cfg-3",
      slug: "zephyr-hi-multi-xtreme-multi-zone-cfg-3",
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 20.25,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone-cfg-4",
      slug: "zephyr-hi-multi-xtreme-multi-zone-cfg-4",
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 8.88,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone-cfg-5",
      slug: "zephyr-hi-multi-xtreme-multi-zone-cfg-5",
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone-cfg-6",
      slug: "zephyr-hi-multi-xtreme-multi-zone-cfg-6",
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone-cfg-7",
      slug: "zephyr-hi-multi-xtreme-multi-zone-cfg-7",
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-multi-zone-cfg-8",
      slug: "zephyr-hi-multi-xtreme-multi-zone-cfg-8",
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      outdoorUnitId: "zephyr",
      indoorUnitId: "zephyr",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "zephyr-hi-ultra-hd-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-ultra-hd-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-ultra-hd-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.46,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 2.46,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-coil-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-coil-central-ducted-cfg-2",
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
      configurationId: "zephyr-ultra-coil-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-coil-central-ducted-cfg-4",
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
      configurationId: "zephyr-hiultra-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5700,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-3",
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
      configurationId: "zephyr-hiultra-multi-zone-cfg-4",
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
      configurationId: "zephyr-hiultra-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-9",
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
      configurationId: "zephyr-hiultra-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-15",
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
      configurationId: "zephyr-hiultra-multi-zone-cfg-16",
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
      configurationId: "zephyr-hiultra-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-multi-zone-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    }
  ],
  certifications: [],
  warranties: [
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-ultra-coil-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hiultra-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "zephyr-hi-multi-xtreme-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    }
  ],
  priceObservations: [],
  sources: [],
  editorial: [],
};
