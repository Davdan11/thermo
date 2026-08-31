import type { BrandDataset } from "../../types";

export const boschDataset: BrandDataset = {
  brand: {
    id: "bosch",
    slug: "bosch",
    name: "Bosch",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "bosch-ids-edge",
      slug: "bosch-ids-edge",
      name: "IDS Edge",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp",
      slug: "bosch-ids-light-lgwp",
      name: "IDS Light-LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp",
      slug: "bosch-ids-premium-lgwp",
      name: "IDS Premium LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra",
      slug: "bosch-ids-ultra",
      name: "IDS Ultra",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp",
      slug: "bosch-idp-premium-lgwp",
      name: "IDP Premium LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-plus-lgwp",
      slug: "bosch-idp-plus-lgwp",
      name: "IDP Plus LGWP",
      brandId: "bosch",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series",
      slug: "bosch-bms-series",
      name: "BMS Series",
      brandId: "bosch",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bm-series",
      slug: "bosch-bm-series",
      name: "BM Series",
      brandId: "bosch",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "bosch-ids-edge-central-ducted",
      slug: "bosch-ids-edge-central-ducted",
      name: "IDS Edge",
      seriesId: "bosch-ids-edge",
      brandId: "bosch",
      modelNumber: "IDS Edge",
      normalizedModelNumber: "ids-edge",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 60000,
      heatingCapacity5FMinBtu: 16800,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8,
      hspf2Max: 9.4,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted",
      slug: "bosch-ids-light-lgwp-central-ducted",
      name: "IDS Light-LGWP",
      seriesId: "bosch-ids-light-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Light-LGWP",
      normalizedModelNumber: "ids-light-lgwp",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 12800,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.88,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted",
      slug: "bosch-ids-premium-lgwp-central-ducted",
      name: "IDS Premium LGWP",
      seriesId: "bosch-ids-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDS Premium LGWP",
      normalizedModelNumber: "ids-premium-lgwp",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 16800,
      heatingCapacity5FMaxBtu: 38500,
      seer2Min: 15.2,
      seer2Max: 20,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted",
      slug: "bosch-ids-ultra-central-ducted",
      name: "IDS Ultra",
      seriesId: "bosch-ids-ultra",
      brandId: "bosch",
      modelNumber: "IDS Ultra",
      normalizedModelNumber: "ids-ultra",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 53500,
      heatingCapacity5FMinBtu: 32200,
      heatingCapacity5FMaxBtu: 55000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted",
      slug: "bosch-idp-premium-lgwp-central-ducted",
      name: "IDP Premium LGWP",
      seriesId: "bosch-idp-premium-lgwp",
      brandId: "bosch",
      modelNumber: "IDP Premium LGWP",
      normalizedModelNumber: "idp-premium-lgwp",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 23000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 18,
      seer2Max: 19,
      hspf2Min: 8.1,
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
      id: "bosch-idp-plus-lgwp-central-ducted",
      slug: "bosch-idp-plus-lgwp-central-ducted",
      name: "IDP Plus LGWP",
      seriesId: "bosch-idp-plus-lgwp",
      brandId: "bosch",
      modelNumber: "IDP Plus LGWP",
      normalizedModelNumber: "idp-plus-lgwp",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 40000,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 16,
      seer2Max: 16,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone",
      slug: "bosch-bms-series-multi-zone",
      name: "BMS Series",
      seriesId: "bosch-bms-series",
      brandId: "bosch",
      modelNumber: "BMS Series",
      normalizedModelNumber: "bms-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 47000,
      seer2Min: 17.1,
      seer2Max: 27.4,
      hspf2Min: 9,
      hspf2Max: 13.5,
      cop5FMin: 1.8,
      cop5FMax: 2.54,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bm-series-multi-zone",
      slug: "bosch-bm-series-multi-zone",
      name: "BM Series",
      seriesId: "bosch-bm-series",
      brandId: "bosch",
      modelNumber: "BM Series",
      normalizedModelNumber: "bm-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      heatingCapacity5FMinBtu: 8300,
      heatingCapacity5FMaxBtu: 8300,
      seer2Min: 25,
      seer2Max: 25,
      hspf2Min: 12.5,
      hspf2Max: 12.5,
      cop5FMin: 2.4,
      cop5FMax: 2.4,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-multi-zone",
      slug: "bosch-ids-edge-multi-zone",
      name: "IDS Edge",
      seriesId: "bosch-ids-edge",
      brandId: "bosch",
      modelNumber: "IDS Edge",
      normalizedModelNumber: "ids-edge",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 60000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 16.5,
      seer2Max: 17.8,
      hspf2Min: 8.5,
      hspf2Max: 9.6,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "bosch",
      modelNumber: "    -     -    ",
      brandId: "bosch",
      refrigerant: "R-454B" as any,
    }
  ],
  indoorUnits: [
    {
      id: "bosch",
      modelNumber: "    -     -    ",
      brandId: "bosch",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "bosch-ids-edge-central-ducted-cfg-1",
      slug: "bosch-ids-edge-central-ducted-cfg-1",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-2",
      slug: "bosch-ids-edge-central-ducted-cfg-2",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.7,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-3",
      slug: "bosch-ids-edge-central-ducted-cfg-3",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-4",
      slug: "bosch-ids-edge-central-ducted-cfg-4",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.7,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-5",
      slug: "bosch-ids-edge-central-ducted-cfg-5",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.7,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-6",
      slug: "bosch-ids-edge-central-ducted-cfg-6",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-7",
      slug: "bosch-ids-edge-central-ducted-cfg-7",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-8",
      slug: "bosch-ids-edge-central-ducted-cfg-8",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-9",
      slug: "bosch-ids-edge-central-ducted-cfg-9",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-10",
      slug: "bosch-ids-edge-central-ducted-cfg-10",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-11",
      slug: "bosch-ids-edge-central-ducted-cfg-11",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-12",
      slug: "bosch-ids-edge-central-ducted-cfg-12",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-13",
      slug: "bosch-ids-edge-central-ducted-cfg-13",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-14",
      slug: "bosch-ids-edge-central-ducted-cfg-14",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-15",
      slug: "bosch-ids-edge-central-ducted-cfg-15",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 16.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-16",
      slug: "bosch-ids-edge-central-ducted-cfg-16",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 15.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-17",
      slug: "bosch-ids-edge-central-ducted-cfg-17",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 15.5,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-18",
      slug: "bosch-ids-edge-central-ducted-cfg-18",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.2,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-19",
      slug: "bosch-ids-edge-central-ducted-cfg-19",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-20",
      slug: "bosch-ids-edge-central-ducted-cfg-20",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.2,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-21",
      slug: "bosch-ids-edge-central-ducted-cfg-21",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.2,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-22",
      slug: "bosch-ids-edge-central-ducted-cfg-22",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-23",
      slug: "bosch-ids-edge-central-ducted-cfg-23",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-24",
      slug: "bosch-ids-edge-central-ducted-cfg-24",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-25",
      slug: "bosch-ids-edge-central-ducted-cfg-25",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.3,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-26",
      slug: "bosch-ids-edge-central-ducted-cfg-26",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-27",
      slug: "bosch-ids-edge-central-ducted-cfg-27",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-28",
      slug: "bosch-ids-edge-central-ducted-cfg-28",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-29",
      slug: "bosch-ids-edge-central-ducted-cfg-29",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-30",
      slug: "bosch-ids-edge-central-ducted-cfg-30",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.7,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-31",
      slug: "bosch-ids-edge-central-ducted-cfg-31",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-32",
      slug: "bosch-ids-edge-central-ducted-cfg-32",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-33",
      slug: "bosch-ids-edge-central-ducted-cfg-33",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-34",
      slug: "bosch-ids-edge-central-ducted-cfg-34",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-35",
      slug: "bosch-ids-edge-central-ducted-cfg-35",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 16,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-36",
      slug: "bosch-ids-edge-central-ducted-cfg-36",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 16,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-37",
      slug: "bosch-ids-edge-central-ducted-cfg-37",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-38",
      slug: "bosch-ids-edge-central-ducted-cfg-38",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 8.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-39",
      slug: "bosch-ids-edge-central-ducted-cfg-39",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-40",
      slug: "bosch-ids-edge-central-ducted-cfg-40",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-41",
      slug: "bosch-ids-edge-central-ducted-cfg-41",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-42",
      slug: "bosch-ids-edge-central-ducted-cfg-42",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-43",
      slug: "bosch-ids-edge-central-ducted-cfg-43",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-44",
      slug: "bosch-ids-edge-central-ducted-cfg-44",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-45",
      slug: "bosch-ids-edge-central-ducted-cfg-45",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-46",
      slug: "bosch-ids-edge-central-ducted-cfg-46",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-47",
      slug: "bosch-ids-edge-central-ducted-cfg-47",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-48",
      slug: "bosch-ids-edge-central-ducted-cfg-48",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-49",
      slug: "bosch-ids-edge-central-ducted-cfg-49",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.6,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-50",
      slug: "bosch-ids-edge-central-ducted-cfg-50",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-51",
      slug: "bosch-ids-edge-central-ducted-cfg-51",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-52",
      slug: "bosch-ids-edge-central-ducted-cfg-52",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-53",
      slug: "bosch-ids-edge-central-ducted-cfg-53",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.3,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-54",
      slug: "bosch-ids-edge-central-ducted-cfg-54",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-55",
      slug: "bosch-ids-edge-central-ducted-cfg-55",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 16.7,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-56",
      slug: "bosch-ids-edge-central-ducted-cfg-56",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-57",
      slug: "bosch-ids-edge-central-ducted-cfg-57",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 16.8,
      hspf2: 8.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-58",
      slug: "bosch-ids-edge-central-ducted-cfg-58",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-59",
      slug: "bosch-ids-edge-central-ducted-cfg-59",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-60",
      slug: "bosch-ids-edge-central-ducted-cfg-60",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-61",
      slug: "bosch-ids-edge-central-ducted-cfg-61",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-62",
      slug: "bosch-ids-edge-central-ducted-cfg-62",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-63",
      slug: "bosch-ids-edge-central-ducted-cfg-63",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-64",
      slug: "bosch-ids-edge-central-ducted-cfg-64",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-65",
      slug: "bosch-ids-edge-central-ducted-cfg-65",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-66",
      slug: "bosch-ids-edge-central-ducted-cfg-66",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 15.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-67",
      slug: "bosch-ids-edge-central-ducted-cfg-67",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 15.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-68",
      slug: "bosch-ids-edge-central-ducted-cfg-68",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 15.5,
      hspf2: 8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-69",
      slug: "bosch-ids-edge-central-ducted-cfg-69",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-central-ducted-cfg-70",
      slug: "bosch-ids-edge-central-ducted-cfg-70",
      modelId: "bosch-ids-edge-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-1",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-1",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-2",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-2",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-3",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-3",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-4",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-4",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-5",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-5",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-6",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-6",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-7",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-7",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-8",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-8",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-9",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-9",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-10",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-10",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-11",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-11",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-12",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-12",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-13",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-13",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-14",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-14",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-15",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-15",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-16",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-16",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-17",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-17",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-18",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-18",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-19",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-19",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-20",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-20",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-21",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-21",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-22",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-22",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-23",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-23",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-24",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-24",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-25",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-25",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-26",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-26",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-27",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-27",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-28",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-28",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-29",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-29",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-30",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-30",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-31",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-31",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-32",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-32",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-33",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-33",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-34",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-34",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-35",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-35",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-36",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-36",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-37",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-37",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-38",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-38",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-39",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-39",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-40",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-40",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-41",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-41",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-42",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-42",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-43",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-43",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-44",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-44",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-45",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-45",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-46",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-46",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-47",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-47",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-48",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-48",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-49",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-49",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-50",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-50",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-51",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-51",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-52",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-52",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-53",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-53",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-54",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-54",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-55",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-55",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-56",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-56",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-57",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-57",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-58",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-58",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-59",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-59",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-light-lgwp-central-ducted-cfg-60",
      slug: "bosch-ids-light-lgwp-central-ducted-cfg-60",
      modelId: "bosch-ids-light-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-1",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-1",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-2",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-2",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-3",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-3",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-4",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-4",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-5",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-5",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-6",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-6",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-7",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-7",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-8",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-8",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-9",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-9",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-10",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-10",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-11",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-11",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-12",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-12",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-13",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-13",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-14",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-14",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-15",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-15",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-16",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-16",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-17",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-17",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-18",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-18",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-19",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-19",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-20",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-20",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-21",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-21",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-22",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-22",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-23",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-23",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-24",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-24",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-25",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-25",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-26",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-26",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-27",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-27",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-28",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-28",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-29",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-29",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-30",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-30",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-31",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-31",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-32",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-32",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-33",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-33",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-34",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-34",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-35",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-35",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-36",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-36",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-37",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-37",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-38",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-38",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-39",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-39",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-40",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-40",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-41",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-41",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-42",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-42",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-43",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-43",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32800,
      coolingCapacityMaxBtu: 32800,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-44",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-44",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-45",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-45",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-46",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-46",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-47",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-47",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-48",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-48",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-49",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-49",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-50",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-50",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-51",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-51",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-52",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-52",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-53",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-53",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-54",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-54",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-55",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-55",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 18.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-56",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-56",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-57",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-57",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-58",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-58",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-59",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-59",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-60",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-60",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-61",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-61",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-62",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-62",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-63",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-63",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-64",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-64",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-65",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-65",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-premium-lgwp-central-ducted-cfg-66",
      slug: "bosch-ids-premium-lgwp-central-ducted-cfg-66",
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-1",
      slug: "bosch-ids-ultra-central-ducted-cfg-1",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48500,
      coolingCapacityMaxBtu: 48500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-2",
      slug: "bosch-ids-ultra-central-ducted-cfg-2",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-3",
      slug: "bosch-ids-ultra-central-ducted-cfg-3",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48500,
      coolingCapacityMaxBtu: 48500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-4",
      slug: "bosch-ids-ultra-central-ducted-cfg-4",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-5",
      slug: "bosch-ids-ultra-central-ducted-cfg-5",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-6",
      slug: "bosch-ids-ultra-central-ducted-cfg-6",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-7",
      slug: "bosch-ids-ultra-central-ducted-cfg-7",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-8",
      slug: "bosch-ids-ultra-central-ducted-cfg-8",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-9",
      slug: "bosch-ids-ultra-central-ducted-cfg-9",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-10",
      slug: "bosch-ids-ultra-central-ducted-cfg-10",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-11",
      slug: "bosch-ids-ultra-central-ducted-cfg-11",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-12",
      slug: "bosch-ids-ultra-central-ducted-cfg-12",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-13",
      slug: "bosch-ids-ultra-central-ducted-cfg-13",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-14",
      slug: "bosch-ids-ultra-central-ducted-cfg-14",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-15",
      slug: "bosch-ids-ultra-central-ducted-cfg-15",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-16",
      slug: "bosch-ids-ultra-central-ducted-cfg-16",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-17",
      slug: "bosch-ids-ultra-central-ducted-cfg-17",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48500,
      coolingCapacityMaxBtu: 48500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-18",
      slug: "bosch-ids-ultra-central-ducted-cfg-18",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-19",
      slug: "bosch-ids-ultra-central-ducted-cfg-19",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48500,
      coolingCapacityMaxBtu: 48500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-20",
      slug: "bosch-ids-ultra-central-ducted-cfg-20",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-21",
      slug: "bosch-ids-ultra-central-ducted-cfg-21",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-22",
      slug: "bosch-ids-ultra-central-ducted-cfg-22",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-23",
      slug: "bosch-ids-ultra-central-ducted-cfg-23",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-24",
      slug: "bosch-ids-ultra-central-ducted-cfg-24",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-ultra-central-ducted-cfg-25",
      slug: "bosch-ids-ultra-central-ducted-cfg-25",
      modelId: "bosch-ids-ultra-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-cfg-1",
      slug: "bosch-idp-premium-lgwp-central-ducted-cfg-1",
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-cfg-2",
      slug: "bosch-idp-premium-lgwp-central-ducted-cfg-2",
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-cfg-3",
      slug: "bosch-idp-premium-lgwp-central-ducted-cfg-3",
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-premium-lgwp-central-ducted-cfg-4",
      slug: "bosch-idp-premium-lgwp-central-ducted-cfg-4",
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-idp-plus-lgwp-central-ducted-cfg-1",
      slug: "bosch-idp-plus-lgwp-central-ducted-cfg-1",
      modelId: "bosch-idp-plus-lgwp-central-ducted",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-1",
      slug: "bosch-bms-series-multi-zone-cfg-1",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-2",
      slug: "bosch-bms-series-multi-zone-cfg-2",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-3",
      slug: "bosch-bms-series-multi-zone-cfg-3",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-4",
      slug: "bosch-bms-series-multi-zone-cfg-4",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-5",
      slug: "bosch-bms-series-multi-zone-cfg-5",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-6",
      slug: "bosch-bms-series-multi-zone-cfg-6",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-7",
      slug: "bosch-bms-series-multi-zone-cfg-7",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-8",
      slug: "bosch-bms-series-multi-zone-cfg-8",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-9",
      slug: "bosch-bms-series-multi-zone-cfg-9",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-10",
      slug: "bosch-bms-series-multi-zone-cfg-10",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-11",
      slug: "bosch-bms-series-multi-zone-cfg-11",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-12",
      slug: "bosch-bms-series-multi-zone-cfg-12",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-13",
      slug: "bosch-bms-series-multi-zone-cfg-13",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-14",
      slug: "bosch-bms-series-multi-zone-cfg-14",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-15",
      slug: "bosch-bms-series-multi-zone-cfg-15",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.8,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-16",
      slug: "bosch-bms-series-multi-zone-cfg-16",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.1,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-17",
      slug: "bosch-bms-series-multi-zone-cfg-17",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.4,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-18",
      slug: "bosch-bms-series-multi-zone-cfg-18",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-19",
      slug: "bosch-bms-series-multi-zone-cfg-19",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-20",
      slug: "bosch-bms-series-multi-zone-cfg-20",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-21",
      slug: "bosch-bms-series-multi-zone-cfg-21",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-22",
      slug: "bosch-bms-series-multi-zone-cfg-22",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-23",
      slug: "bosch-bms-series-multi-zone-cfg-23",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-24",
      slug: "bosch-bms-series-multi-zone-cfg-24",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-25",
      slug: "bosch-bms-series-multi-zone-cfg-25",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-26",
      slug: "bosch-bms-series-multi-zone-cfg-26",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-27",
      slug: "bosch-bms-series-multi-zone-cfg-27",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-28",
      slug: "bosch-bms-series-multi-zone-cfg-28",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-29",
      slug: "bosch-bms-series-multi-zone-cfg-29",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-30",
      slug: "bosch-bms-series-multi-zone-cfg-30",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-31",
      slug: "bosch-bms-series-multi-zone-cfg-31",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-32",
      slug: "bosch-bms-series-multi-zone-cfg-32",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-33",
      slug: "bosch-bms-series-multi-zone-cfg-33",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-34",
      slug: "bosch-bms-series-multi-zone-cfg-34",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-35",
      slug: "bosch-bms-series-multi-zone-cfg-35",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-36",
      slug: "bosch-bms-series-multi-zone-cfg-36",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-37",
      slug: "bosch-bms-series-multi-zone-cfg-37",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-38",
      slug: "bosch-bms-series-multi-zone-cfg-38",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-39",
      slug: "bosch-bms-series-multi-zone-cfg-39",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-40",
      slug: "bosch-bms-series-multi-zone-cfg-40",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-41",
      slug: "bosch-bms-series-multi-zone-cfg-41",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-42",
      slug: "bosch-bms-series-multi-zone-cfg-42",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bms-series-multi-zone-cfg-43",
      slug: "bosch-bms-series-multi-zone-cfg-43",
      modelId: "bosch-bms-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-bm-series-multi-zone-cfg-1",
      slug: "bosch-bm-series-multi-zone-cfg-1",
      modelId: "bosch-bm-series-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-multi-zone-cfg-1",
      slug: "bosch-ids-edge-multi-zone-cfg-1",
      modelId: "bosch-ids-edge-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-multi-zone-cfg-2",
      slug: "bosch-ids-edge-multi-zone-cfg-2",
      modelId: "bosch-ids-edge-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-multi-zone-cfg-3",
      slug: "bosch-ids-edge-multi-zone-cfg-3",
      modelId: "bosch-ids-edge-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.8,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-multi-zone-cfg-4",
      slug: "bosch-ids-edge-multi-zone-cfg-4",
      modelId: "bosch-ids-edge-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-multi-zone-cfg-5",
      slug: "bosch-ids-edge-multi-zone-cfg-5",
      modelId: "bosch-ids-edge-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "bosch-ids-edge-multi-zone-cfg-6",
      slug: "bosch-ids-edge-multi-zone-cfg-6",
      modelId: "bosch-ids-edge-multi-zone",
      outdoorUnitId: "bosch",
      indoorUnitId: "bosch",
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-2",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-3",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-4",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-5",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-7",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-8",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-9",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-10",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-18",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-19",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-20",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-21",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-23",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-25",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-26",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-27",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-28",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-29",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-30",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-37",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-39",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-49",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-51",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-53",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-54",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-55",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-57",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-central-ducted-cfg-68",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-69",
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
      configurationId: "bosch-ids-edge-central-ducted-cfg-70",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12900,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-14",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-18",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12900,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-44",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-48",
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
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-light-lgwp-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-20",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-22",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-28",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-29",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-53",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-55",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-61",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-62",
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
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-premium-lgwp-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 55000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 55000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-5",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-6",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-7",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-8",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-9",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-12",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-13",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 55000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 48500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 55000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-ultra-central-ducted-cfg-21",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-22",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-23",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-24",
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
      configurationId: "bosch-ids-ultra-central-ducted-cfg-25",
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
      configurationId: "bosch-idp-premium-lgwp-central-ducted-cfg-1",
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
      configurationId: "bosch-idp-premium-lgwp-central-ducted-cfg-2",
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
      configurationId: "bosch-idp-premium-lgwp-central-ducted-cfg-3",
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
      configurationId: "bosch-idp-premium-lgwp-central-ducted-cfg-4",
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
      configurationId: "bosch-idp-plus-lgwp-central-ducted-cfg-1",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-1",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-2",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-3",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-4",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-5",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-6",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-7",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-8",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-9",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-11",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-13",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-14",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-15",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-18",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-20",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-21",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-22",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-23",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-24",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-25",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-26",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-27",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-28",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-29",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-30",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-32",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-33",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-34",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-35",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-36",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-37",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-38",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-39",
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
      configurationId: "bosch-bms-series-multi-zone-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-bms-series-multi-zone-cfg-43",
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
      configurationId: "bosch-bm-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-multi-zone-cfg-1",
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
      configurationId: "bosch-ids-edge-multi-zone-cfg-2",
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
      configurationId: "bosch-ids-edge-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "bosch-ids-edge-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    }
  ],
  certifications: [],
  warranties: [
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-light-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-ultra-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-premium-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-plus-lgwp-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-plus-lgwp-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-idp-plus-lgwp-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bms-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bm-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bm-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-bm-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "bosch-ids-edge-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    }
  ],
  priceObservations: [],
  sources: [],
  editorial: [],
};
