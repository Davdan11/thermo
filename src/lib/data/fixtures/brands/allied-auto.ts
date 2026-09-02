import type { BrandDataset } from "../../types";

export const alliedDataset: BrandDataset = {
  brand: {
    id: "allied",
    slug: "allied",
    name: "ALLIED",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "allied-4hp18v-series",
      slug: "allied-4hp18v-series",
      name: "4HP18V SERIES",
      brandId: "allied",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series",
      slug: "allied-4dh-series",
      name: "4DH SERIES",
      brandId: "allied",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard",
      slug: "allied-standard",
      name: "Standard",
      brandId: "allied",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "allied-4hp18v-series-central-ducted",
      slug: "allied-4hp18v-series-central-ducted",
      name: "4HP18V SERIES",
      seriesId: "allied-4hp18v-series",
      brandId: "allied",
      modelNumber: "4HP18V SERIES",
      normalizedModelNumber: "4hp18v-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 46000,
      heatingCapacity5FMinBtu: 14800,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 7.8,
      hspf2Max: 8.5,
      cop5FMin: 1.78,
      cop5FMax: 2.18,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single",
      slug: "allied-4dh-series-wall-single",
      name: "4DH SERIES",
      seriesId: "allied-4dh-series",
      brandId: "allied",
      modelNumber: "4DH SERIES",
      normalizedModelNumber: "4dh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 8900,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 18.8,
      seer2Max: 25.5,
      hspf2Min: 7.8,
      hspf2Max: 12.3,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single",
      slug: "allied-standard-wall-single",
      name: "Standard",
      seriesId: "allied-standard",
      brandId: "allied",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 34000,
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
      id: "allied-4hp18v36p",
      modelNumber: "4HP18V36P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4hp18v60p",
      modelNumber: "4HP18V60P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s12s-1p",
      modelNumber: "4DHP2S12S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s18s-1p",
      modelNumber: "4DHP2S18S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s24s-1p",
      modelNumber: "4DHP2S24S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhps209s-1p",
      modelNumber: "4DHPS209S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s09s-1l",
      modelNumber: "4DHV2S09S-1L",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s09s-1p",
      modelNumber: "4DHV2S09S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s18m-1p",
      modelNumber: "4DHP2S18M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s24m-1p",
      modelNumber: "4DHP2S24M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s30m-1p",
      modelNumber: "4DHP2S30M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s36m-1p",
      modelNumber: "4DHP2S36M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s48m-1p",
      modelNumber: "4DHP2S48M-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s12s-1l",
      modelNumber: "4DHP2S12S-1L",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s12s-1l",
      modelNumber: "4DHV2S12S-1L",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s12s-1p",
      modelNumber: "4DHV2S12S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s18s-1p",
      modelNumber: "4DHV2S18S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhv2s24s-1p",
      modelNumber: "4DHV2S24S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s36s-1p",
      modelNumber: "4DHP2S36S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s48s-1p",
      modelNumber: "4DHP2S48S-1P",
      brandId: "allied",
      refrigerant: null as any,
    },
    {
      id: "allied-4dhp2s30s-1p",
      modelNumber: "4DHP2S30S-1P",
      brandId: "allied",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "allied-4hp18v-series-central-ducted-cfg-1",
      slug: "allied-4hp18v-series-central-ducted-cfg-1",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-2",
      slug: "allied-4hp18v-series-central-ducted-cfg-2",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-3",
      slug: "allied-4hp18v-series-central-ducted-cfg-3",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-4",
      slug: "allied-4hp18v-series-central-ducted-cfg-4",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-5",
      slug: "allied-4hp18v-series-central-ducted-cfg-5",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-6",
      slug: "allied-4hp18v-series-central-ducted-cfg-6",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-7",
      slug: "allied-4hp18v-series-central-ducted-cfg-7",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-8",
      slug: "allied-4hp18v-series-central-ducted-cfg-8",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-9",
      slug: "allied-4hp18v-series-central-ducted-cfg-9",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-10",
      slug: "allied-4hp18v-series-central-ducted-cfg-10",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-11",
      slug: "allied-4hp18v-series-central-ducted-cfg-11",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-12",
      slug: "allied-4hp18v-series-central-ducted-cfg-12",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-13",
      slug: "allied-4hp18v-series-central-ducted-cfg-13",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-14",
      slug: "allied-4hp18v-series-central-ducted-cfg-14",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-15",
      slug: "allied-4hp18v-series-central-ducted-cfg-15",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-16",
      slug: "allied-4hp18v-series-central-ducted-cfg-16",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-17",
      slug: "allied-4hp18v-series-central-ducted-cfg-17",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-18",
      slug: "allied-4hp18v-series-central-ducted-cfg-18",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-19",
      slug: "allied-4hp18v-series-central-ducted-cfg-19",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-20",
      slug: "allied-4hp18v-series-central-ducted-cfg-20",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-21",
      slug: "allied-4hp18v-series-central-ducted-cfg-21",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-22",
      slug: "allied-4hp18v-series-central-ducted-cfg-22",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-23",
      slug: "allied-4hp18v-series-central-ducted-cfg-23",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-24",
      slug: "allied-4hp18v-series-central-ducted-cfg-24",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-25",
      slug: "allied-4hp18v-series-central-ducted-cfg-25",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-26",
      slug: "allied-4hp18v-series-central-ducted-cfg-26",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-27",
      slug: "allied-4hp18v-series-central-ducted-cfg-27",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-28",
      slug: "allied-4hp18v-series-central-ducted-cfg-28",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-29",
      slug: "allied-4hp18v-series-central-ducted-cfg-29",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-30",
      slug: "allied-4hp18v-series-central-ducted-cfg-30",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-31",
      slug: "allied-4hp18v-series-central-ducted-cfg-31",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-32",
      slug: "allied-4hp18v-series-central-ducted-cfg-32",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-33",
      slug: "allied-4hp18v-series-central-ducted-cfg-33",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-34",
      slug: "allied-4hp18v-series-central-ducted-cfg-34",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-35",
      slug: "allied-4hp18v-series-central-ducted-cfg-35",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-36",
      slug: "allied-4hp18v-series-central-ducted-cfg-36",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-37",
      slug: "allied-4hp18v-series-central-ducted-cfg-37",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-38",
      slug: "allied-4hp18v-series-central-ducted-cfg-38",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-39",
      slug: "allied-4hp18v-series-central-ducted-cfg-39",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-40",
      slug: "allied-4hp18v-series-central-ducted-cfg-40",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22600,
      coolingCapacityMaxBtu: 22600,
      seer2: 16.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-41",
      slug: "allied-4hp18v-series-central-ducted-cfg-41",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-42",
      slug: "allied-4hp18v-series-central-ducted-cfg-42",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-43",
      slug: "allied-4hp18v-series-central-ducted-cfg-43",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-44",
      slug: "allied-4hp18v-series-central-ducted-cfg-44",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-45",
      slug: "allied-4hp18v-series-central-ducted-cfg-45",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-46",
      slug: "allied-4hp18v-series-central-ducted-cfg-46",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-47",
      slug: "allied-4hp18v-series-central-ducted-cfg-47",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-48",
      slug: "allied-4hp18v-series-central-ducted-cfg-48",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-49",
      slug: "allied-4hp18v-series-central-ducted-cfg-49",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-50",
      slug: "allied-4hp18v-series-central-ducted-cfg-50",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-51",
      slug: "allied-4hp18v-series-central-ducted-cfg-51",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-52",
      slug: "allied-4hp18v-series-central-ducted-cfg-52",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-53",
      slug: "allied-4hp18v-series-central-ducted-cfg-53",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-54",
      slug: "allied-4hp18v-series-central-ducted-cfg-54",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-55",
      slug: "allied-4hp18v-series-central-ducted-cfg-55",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-56",
      slug: "allied-4hp18v-series-central-ducted-cfg-56",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-57",
      slug: "allied-4hp18v-series-central-ducted-cfg-57",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-58",
      slug: "allied-4hp18v-series-central-ducted-cfg-58",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-59",
      slug: "allied-4hp18v-series-central-ducted-cfg-59",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-60",
      slug: "allied-4hp18v-series-central-ducted-cfg-60",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-61",
      slug: "allied-4hp18v-series-central-ducted-cfg-61",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-62",
      slug: "allied-4hp18v-series-central-ducted-cfg-62",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-63",
      slug: "allied-4hp18v-series-central-ducted-cfg-63",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-64",
      slug: "allied-4hp18v-series-central-ducted-cfg-64",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-65",
      slug: "allied-4hp18v-series-central-ducted-cfg-65",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-66",
      slug: "allied-4hp18v-series-central-ducted-cfg-66",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-67",
      slug: "allied-4hp18v-series-central-ducted-cfg-67",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-68",
      slug: "allied-4hp18v-series-central-ducted-cfg-68",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-69",
      slug: "allied-4hp18v-series-central-ducted-cfg-69",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-70",
      slug: "allied-4hp18v-series-central-ducted-cfg-70",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-71",
      slug: "allied-4hp18v-series-central-ducted-cfg-71",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-72",
      slug: "allied-4hp18v-series-central-ducted-cfg-72",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-73",
      slug: "allied-4hp18v-series-central-ducted-cfg-73",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-74",
      slug: "allied-4hp18v-series-central-ducted-cfg-74",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-75",
      slug: "allied-4hp18v-series-central-ducted-cfg-75",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-76",
      slug: "allied-4hp18v-series-central-ducted-cfg-76",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-77",
      slug: "allied-4hp18v-series-central-ducted-cfg-77",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-78",
      slug: "allied-4hp18v-series-central-ducted-cfg-78",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-79",
      slug: "allied-4hp18v-series-central-ducted-cfg-79",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-80",
      slug: "allied-4hp18v-series-central-ducted-cfg-80",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-81",
      slug: "allied-4hp18v-series-central-ducted-cfg-81",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-82",
      slug: "allied-4hp18v-series-central-ducted-cfg-82",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-83",
      slug: "allied-4hp18v-series-central-ducted-cfg-83",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-84",
      slug: "allied-4hp18v-series-central-ducted-cfg-84",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-85",
      slug: "allied-4hp18v-series-central-ducted-cfg-85",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-86",
      slug: "allied-4hp18v-series-central-ducted-cfg-86",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-87",
      slug: "allied-4hp18v-series-central-ducted-cfg-87",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-88",
      slug: "allied-4hp18v-series-central-ducted-cfg-88",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-89",
      slug: "allied-4hp18v-series-central-ducted-cfg-89",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 17.5,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-90",
      slug: "allied-4hp18v-series-central-ducted-cfg-90",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-91",
      slug: "allied-4hp18v-series-central-ducted-cfg-91",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-92",
      slug: "allied-4hp18v-series-central-ducted-cfg-92",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-93",
      slug: "allied-4hp18v-series-central-ducted-cfg-93",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-94",
      slug: "allied-4hp18v-series-central-ducted-cfg-94",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-95",
      slug: "allied-4hp18v-series-central-ducted-cfg-95",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-96",
      slug: "allied-4hp18v-series-central-ducted-cfg-96",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-97",
      slug: "allied-4hp18v-series-central-ducted-cfg-97",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-98",
      slug: "allied-4hp18v-series-central-ducted-cfg-98",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-99",
      slug: "allied-4hp18v-series-central-ducted-cfg-99",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-100",
      slug: "allied-4hp18v-series-central-ducted-cfg-100",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-101",
      slug: "allied-4hp18v-series-central-ducted-cfg-101",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-102",
      slug: "allied-4hp18v-series-central-ducted-cfg-102",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-103",
      slug: "allied-4hp18v-series-central-ducted-cfg-103",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-104",
      slug: "allied-4hp18v-series-central-ducted-cfg-104",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-105",
      slug: "allied-4hp18v-series-central-ducted-cfg-105",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-106",
      slug: "allied-4hp18v-series-central-ducted-cfg-106",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-107",
      slug: "allied-4hp18v-series-central-ducted-cfg-107",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-108",
      slug: "allied-4hp18v-series-central-ducted-cfg-108",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-109",
      slug: "allied-4hp18v-series-central-ducted-cfg-109",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-110",
      slug: "allied-4hp18v-series-central-ducted-cfg-110",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-111",
      slug: "allied-4hp18v-series-central-ducted-cfg-111",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-112",
      slug: "allied-4hp18v-series-central-ducted-cfg-112",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-113",
      slug: "allied-4hp18v-series-central-ducted-cfg-113",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-114",
      slug: "allied-4hp18v-series-central-ducted-cfg-114",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-115",
      slug: "allied-4hp18v-series-central-ducted-cfg-115",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-116",
      slug: "allied-4hp18v-series-central-ducted-cfg-116",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-117",
      slug: "allied-4hp18v-series-central-ducted-cfg-117",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-118",
      slug: "allied-4hp18v-series-central-ducted-cfg-118",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-119",
      slug: "allied-4hp18v-series-central-ducted-cfg-119",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-120",
      slug: "allied-4hp18v-series-central-ducted-cfg-120",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-121",
      slug: "allied-4hp18v-series-central-ducted-cfg-121",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-122",
      slug: "allied-4hp18v-series-central-ducted-cfg-122",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-123",
      slug: "allied-4hp18v-series-central-ducted-cfg-123",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-124",
      slug: "allied-4hp18v-series-central-ducted-cfg-124",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-125",
      slug: "allied-4hp18v-series-central-ducted-cfg-125",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-126",
      slug: "allied-4hp18v-series-central-ducted-cfg-126",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-127",
      slug: "allied-4hp18v-series-central-ducted-cfg-127",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-128",
      slug: "allied-4hp18v-series-central-ducted-cfg-128",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-129",
      slug: "allied-4hp18v-series-central-ducted-cfg-129",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-130",
      slug: "allied-4hp18v-series-central-ducted-cfg-130",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-131",
      slug: "allied-4hp18v-series-central-ducted-cfg-131",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-132",
      slug: "allied-4hp18v-series-central-ducted-cfg-132",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-133",
      slug: "allied-4hp18v-series-central-ducted-cfg-133",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-134",
      slug: "allied-4hp18v-series-central-ducted-cfg-134",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-135",
      slug: "allied-4hp18v-series-central-ducted-cfg-135",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-136",
      slug: "allied-4hp18v-series-central-ducted-cfg-136",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-137",
      slug: "allied-4hp18v-series-central-ducted-cfg-137",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-138",
      slug: "allied-4hp18v-series-central-ducted-cfg-138",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-139",
      slug: "allied-4hp18v-series-central-ducted-cfg-139",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-140",
      slug: "allied-4hp18v-series-central-ducted-cfg-140",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-141",
      slug: "allied-4hp18v-series-central-ducted-cfg-141",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-142",
      slug: "allied-4hp18v-series-central-ducted-cfg-142",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-143",
      slug: "allied-4hp18v-series-central-ducted-cfg-143",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-144",
      slug: "allied-4hp18v-series-central-ducted-cfg-144",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-145",
      slug: "allied-4hp18v-series-central-ducted-cfg-145",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-146",
      slug: "allied-4hp18v-series-central-ducted-cfg-146",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-147",
      slug: "allied-4hp18v-series-central-ducted-cfg-147",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-148",
      slug: "allied-4hp18v-series-central-ducted-cfg-148",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-149",
      slug: "allied-4hp18v-series-central-ducted-cfg-149",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-150",
      slug: "allied-4hp18v-series-central-ducted-cfg-150",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-151",
      slug: "allied-4hp18v-series-central-ducted-cfg-151",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-152",
      slug: "allied-4hp18v-series-central-ducted-cfg-152",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-153",
      slug: "allied-4hp18v-series-central-ducted-cfg-153",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-154",
      slug: "allied-4hp18v-series-central-ducted-cfg-154",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-155",
      slug: "allied-4hp18v-series-central-ducted-cfg-155",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-156",
      slug: "allied-4hp18v-series-central-ducted-cfg-156",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-157",
      slug: "allied-4hp18v-series-central-ducted-cfg-157",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-158",
      slug: "allied-4hp18v-series-central-ducted-cfg-158",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-159",
      slug: "allied-4hp18v-series-central-ducted-cfg-159",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-160",
      slug: "allied-4hp18v-series-central-ducted-cfg-160",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-161",
      slug: "allied-4hp18v-series-central-ducted-cfg-161",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-162",
      slug: "allied-4hp18v-series-central-ducted-cfg-162",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-163",
      slug: "allied-4hp18v-series-central-ducted-cfg-163",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-164",
      slug: "allied-4hp18v-series-central-ducted-cfg-164",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-165",
      slug: "allied-4hp18v-series-central-ducted-cfg-165",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-166",
      slug: "allied-4hp18v-series-central-ducted-cfg-166",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-167",
      slug: "allied-4hp18v-series-central-ducted-cfg-167",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-168",
      slug: "allied-4hp18v-series-central-ducted-cfg-168",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-169",
      slug: "allied-4hp18v-series-central-ducted-cfg-169",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-170",
      slug: "allied-4hp18v-series-central-ducted-cfg-170",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-171",
      slug: "allied-4hp18v-series-central-ducted-cfg-171",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-172",
      slug: "allied-4hp18v-series-central-ducted-cfg-172",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-173",
      slug: "allied-4hp18v-series-central-ducted-cfg-173",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-174",
      slug: "allied-4hp18v-series-central-ducted-cfg-174",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-175",
      slug: "allied-4hp18v-series-central-ducted-cfg-175",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-176",
      slug: "allied-4hp18v-series-central-ducted-cfg-176",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-177",
      slug: "allied-4hp18v-series-central-ducted-cfg-177",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-178",
      slug: "allied-4hp18v-series-central-ducted-cfg-178",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-179",
      slug: "allied-4hp18v-series-central-ducted-cfg-179",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-180",
      slug: "allied-4hp18v-series-central-ducted-cfg-180",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-181",
      slug: "allied-4hp18v-series-central-ducted-cfg-181",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-182",
      slug: "allied-4hp18v-series-central-ducted-cfg-182",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-183",
      slug: "allied-4hp18v-series-central-ducted-cfg-183",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-184",
      slug: "allied-4hp18v-series-central-ducted-cfg-184",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-185",
      slug: "allied-4hp18v-series-central-ducted-cfg-185",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-186",
      slug: "allied-4hp18v-series-central-ducted-cfg-186",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-187",
      slug: "allied-4hp18v-series-central-ducted-cfg-187",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-188",
      slug: "allied-4hp18v-series-central-ducted-cfg-188",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-189",
      slug: "allied-4hp18v-series-central-ducted-cfg-189",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-190",
      slug: "allied-4hp18v-series-central-ducted-cfg-190",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-191",
      slug: "allied-4hp18v-series-central-ducted-cfg-191",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-192",
      slug: "allied-4hp18v-series-central-ducted-cfg-192",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-193",
      slug: "allied-4hp18v-series-central-ducted-cfg-193",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-194",
      slug: "allied-4hp18v-series-central-ducted-cfg-194",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-195",
      slug: "allied-4hp18v-series-central-ducted-cfg-195",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-196",
      slug: "allied-4hp18v-series-central-ducted-cfg-196",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-197",
      slug: "allied-4hp18v-series-central-ducted-cfg-197",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-198",
      slug: "allied-4hp18v-series-central-ducted-cfg-198",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-199",
      slug: "allied-4hp18v-series-central-ducted-cfg-199",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-200",
      slug: "allied-4hp18v-series-central-ducted-cfg-200",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-201",
      slug: "allied-4hp18v-series-central-ducted-cfg-201",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-202",
      slug: "allied-4hp18v-series-central-ducted-cfg-202",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-203",
      slug: "allied-4hp18v-series-central-ducted-cfg-203",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-204",
      slug: "allied-4hp18v-series-central-ducted-cfg-204",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-205",
      slug: "allied-4hp18v-series-central-ducted-cfg-205",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-206",
      slug: "allied-4hp18v-series-central-ducted-cfg-206",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-207",
      slug: "allied-4hp18v-series-central-ducted-cfg-207",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-208",
      slug: "allied-4hp18v-series-central-ducted-cfg-208",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-209",
      slug: "allied-4hp18v-series-central-ducted-cfg-209",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-210",
      slug: "allied-4hp18v-series-central-ducted-cfg-210",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-211",
      slug: "allied-4hp18v-series-central-ducted-cfg-211",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-212",
      slug: "allied-4hp18v-series-central-ducted-cfg-212",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-213",
      slug: "allied-4hp18v-series-central-ducted-cfg-213",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-214",
      slug: "allied-4hp18v-series-central-ducted-cfg-214",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-215",
      slug: "allied-4hp18v-series-central-ducted-cfg-215",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-216",
      slug: "allied-4hp18v-series-central-ducted-cfg-216",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-217",
      slug: "allied-4hp18v-series-central-ducted-cfg-217",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-218",
      slug: "allied-4hp18v-series-central-ducted-cfg-218",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-219",
      slug: "allied-4hp18v-series-central-ducted-cfg-219",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-220",
      slug: "allied-4hp18v-series-central-ducted-cfg-220",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-221",
      slug: "allied-4hp18v-series-central-ducted-cfg-221",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-222",
      slug: "allied-4hp18v-series-central-ducted-cfg-222",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-223",
      slug: "allied-4hp18v-series-central-ducted-cfg-223",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-224",
      slug: "allied-4hp18v-series-central-ducted-cfg-224",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-225",
      slug: "allied-4hp18v-series-central-ducted-cfg-225",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-226",
      slug: "allied-4hp18v-series-central-ducted-cfg-226",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-227",
      slug: "allied-4hp18v-series-central-ducted-cfg-227",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-228",
      slug: "allied-4hp18v-series-central-ducted-cfg-228",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-229",
      slug: "allied-4hp18v-series-central-ducted-cfg-229",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-230",
      slug: "allied-4hp18v-series-central-ducted-cfg-230",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-231",
      slug: "allied-4hp18v-series-central-ducted-cfg-231",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-232",
      slug: "allied-4hp18v-series-central-ducted-cfg-232",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-233",
      slug: "allied-4hp18v-series-central-ducted-cfg-233",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-234",
      slug: "allied-4hp18v-series-central-ducted-cfg-234",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-235",
      slug: "allied-4hp18v-series-central-ducted-cfg-235",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-236",
      slug: "allied-4hp18v-series-central-ducted-cfg-236",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-237",
      slug: "allied-4hp18v-series-central-ducted-cfg-237",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-238",
      slug: "allied-4hp18v-series-central-ducted-cfg-238",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-239",
      slug: "allied-4hp18v-series-central-ducted-cfg-239",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-240",
      slug: "allied-4hp18v-series-central-ducted-cfg-240",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-241",
      slug: "allied-4hp18v-series-central-ducted-cfg-241",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-242",
      slug: "allied-4hp18v-series-central-ducted-cfg-242",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-243",
      slug: "allied-4hp18v-series-central-ducted-cfg-243",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-244",
      slug: "allied-4hp18v-series-central-ducted-cfg-244",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-245",
      slug: "allied-4hp18v-series-central-ducted-cfg-245",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-246",
      slug: "allied-4hp18v-series-central-ducted-cfg-246",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-247",
      slug: "allied-4hp18v-series-central-ducted-cfg-247",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-248",
      slug: "allied-4hp18v-series-central-ducted-cfg-248",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-249",
      slug: "allied-4hp18v-series-central-ducted-cfg-249",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-250",
      slug: "allied-4hp18v-series-central-ducted-cfg-250",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-251",
      slug: "allied-4hp18v-series-central-ducted-cfg-251",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-252",
      slug: "allied-4hp18v-series-central-ducted-cfg-252",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-253",
      slug: "allied-4hp18v-series-central-ducted-cfg-253",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-254",
      slug: "allied-4hp18v-series-central-ducted-cfg-254",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-255",
      slug: "allied-4hp18v-series-central-ducted-cfg-255",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-256",
      slug: "allied-4hp18v-series-central-ducted-cfg-256",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-257",
      slug: "allied-4hp18v-series-central-ducted-cfg-257",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-258",
      slug: "allied-4hp18v-series-central-ducted-cfg-258",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-259",
      slug: "allied-4hp18v-series-central-ducted-cfg-259",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-260",
      slug: "allied-4hp18v-series-central-ducted-cfg-260",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-261",
      slug: "allied-4hp18v-series-central-ducted-cfg-261",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-262",
      slug: "allied-4hp18v-series-central-ducted-cfg-262",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-263",
      slug: "allied-4hp18v-series-central-ducted-cfg-263",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-264",
      slug: "allied-4hp18v-series-central-ducted-cfg-264",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-265",
      slug: "allied-4hp18v-series-central-ducted-cfg-265",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-266",
      slug: "allied-4hp18v-series-central-ducted-cfg-266",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-267",
      slug: "allied-4hp18v-series-central-ducted-cfg-267",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-268",
      slug: "allied-4hp18v-series-central-ducted-cfg-268",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-269",
      slug: "allied-4hp18v-series-central-ducted-cfg-269",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-270",
      slug: "allied-4hp18v-series-central-ducted-cfg-270",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-271",
      slug: "allied-4hp18v-series-central-ducted-cfg-271",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
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
      id: "allied-4hp18v-series-central-ducted-cfg-272",
      slug: "allied-4hp18v-series-central-ducted-cfg-272",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-273",
      slug: "allied-4hp18v-series-central-ducted-cfg-273",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-274",
      slug: "allied-4hp18v-series-central-ducted-cfg-274",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-275",
      slug: "allied-4hp18v-series-central-ducted-cfg-275",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-276",
      slug: "allied-4hp18v-series-central-ducted-cfg-276",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-277",
      slug: "allied-4hp18v-series-central-ducted-cfg-277",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-278",
      slug: "allied-4hp18v-series-central-ducted-cfg-278",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-279",
      slug: "allied-4hp18v-series-central-ducted-cfg-279",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-280",
      slug: "allied-4hp18v-series-central-ducted-cfg-280",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-281",
      slug: "allied-4hp18v-series-central-ducted-cfg-281",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-282",
      slug: "allied-4hp18v-series-central-ducted-cfg-282",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-283",
      slug: "allied-4hp18v-series-central-ducted-cfg-283",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-284",
      slug: "allied-4hp18v-series-central-ducted-cfg-284",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-285",
      slug: "allied-4hp18v-series-central-ducted-cfg-285",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-286",
      slug: "allied-4hp18v-series-central-ducted-cfg-286",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-287",
      slug: "allied-4hp18v-series-central-ducted-cfg-287",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-288",
      slug: "allied-4hp18v-series-central-ducted-cfg-288",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-289",
      slug: "allied-4hp18v-series-central-ducted-cfg-289",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-290",
      slug: "allied-4hp18v-series-central-ducted-cfg-290",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-291",
      slug: "allied-4hp18v-series-central-ducted-cfg-291",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-292",
      slug: "allied-4hp18v-series-central-ducted-cfg-292",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-293",
      slug: "allied-4hp18v-series-central-ducted-cfg-293",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-294",
      slug: "allied-4hp18v-series-central-ducted-cfg-294",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-295",
      slug: "allied-4hp18v-series-central-ducted-cfg-295",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-296",
      slug: "allied-4hp18v-series-central-ducted-cfg-296",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-297",
      slug: "allied-4hp18v-series-central-ducted-cfg-297",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-298",
      slug: "allied-4hp18v-series-central-ducted-cfg-298",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-299",
      slug: "allied-4hp18v-series-central-ducted-cfg-299",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-300",
      slug: "allied-4hp18v-series-central-ducted-cfg-300",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-301",
      slug: "allied-4hp18v-series-central-ducted-cfg-301",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-302",
      slug: "allied-4hp18v-series-central-ducted-cfg-302",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-303",
      slug: "allied-4hp18v-series-central-ducted-cfg-303",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-304",
      slug: "allied-4hp18v-series-central-ducted-cfg-304",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-305",
      slug: "allied-4hp18v-series-central-ducted-cfg-305",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-306",
      slug: "allied-4hp18v-series-central-ducted-cfg-306",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-307",
      slug: "allied-4hp18v-series-central-ducted-cfg-307",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-308",
      slug: "allied-4hp18v-series-central-ducted-cfg-308",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-309",
      slug: "allied-4hp18v-series-central-ducted-cfg-309",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-310",
      slug: "allied-4hp18v-series-central-ducted-cfg-310",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-311",
      slug: "allied-4hp18v-series-central-ducted-cfg-311",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-312",
      slug: "allied-4hp18v-series-central-ducted-cfg-312",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-313",
      slug: "allied-4hp18v-series-central-ducted-cfg-313",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-314",
      slug: "allied-4hp18v-series-central-ducted-cfg-314",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-315",
      slug: "allied-4hp18v-series-central-ducted-cfg-315",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-316",
      slug: "allied-4hp18v-series-central-ducted-cfg-316",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-317",
      slug: "allied-4hp18v-series-central-ducted-cfg-317",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-318",
      slug: "allied-4hp18v-series-central-ducted-cfg-318",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-319",
      slug: "allied-4hp18v-series-central-ducted-cfg-319",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-320",
      slug: "allied-4hp18v-series-central-ducted-cfg-320",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-321",
      slug: "allied-4hp18v-series-central-ducted-cfg-321",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-322",
      slug: "allied-4hp18v-series-central-ducted-cfg-322",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-323",
      slug: "allied-4hp18v-series-central-ducted-cfg-323",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-324",
      slug: "allied-4hp18v-series-central-ducted-cfg-324",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-325",
      slug: "allied-4hp18v-series-central-ducted-cfg-325",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-326",
      slug: "allied-4hp18v-series-central-ducted-cfg-326",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-327",
      slug: "allied-4hp18v-series-central-ducted-cfg-327",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-328",
      slug: "allied-4hp18v-series-central-ducted-cfg-328",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-329",
      slug: "allied-4hp18v-series-central-ducted-cfg-329",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-330",
      slug: "allied-4hp18v-series-central-ducted-cfg-330",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-331",
      slug: "allied-4hp18v-series-central-ducted-cfg-331",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-332",
      slug: "allied-4hp18v-series-central-ducted-cfg-332",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-333",
      slug: "allied-4hp18v-series-central-ducted-cfg-333",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-334",
      slug: "allied-4hp18v-series-central-ducted-cfg-334",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-335",
      slug: "allied-4hp18v-series-central-ducted-cfg-335",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-336",
      slug: "allied-4hp18v-series-central-ducted-cfg-336",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-337",
      slug: "allied-4hp18v-series-central-ducted-cfg-337",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-338",
      slug: "allied-4hp18v-series-central-ducted-cfg-338",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-339",
      slug: "allied-4hp18v-series-central-ducted-cfg-339",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-340",
      slug: "allied-4hp18v-series-central-ducted-cfg-340",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-341",
      slug: "allied-4hp18v-series-central-ducted-cfg-341",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-342",
      slug: "allied-4hp18v-series-central-ducted-cfg-342",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-343",
      slug: "allied-4hp18v-series-central-ducted-cfg-343",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-344",
      slug: "allied-4hp18v-series-central-ducted-cfg-344",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-345",
      slug: "allied-4hp18v-series-central-ducted-cfg-345",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-346",
      slug: "allied-4hp18v-series-central-ducted-cfg-346",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-347",
      slug: "allied-4hp18v-series-central-ducted-cfg-347",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-348",
      slug: "allied-4hp18v-series-central-ducted-cfg-348",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-349",
      slug: "allied-4hp18v-series-central-ducted-cfg-349",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-350",
      slug: "allied-4hp18v-series-central-ducted-cfg-350",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-351",
      slug: "allied-4hp18v-series-central-ducted-cfg-351",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-352",
      slug: "allied-4hp18v-series-central-ducted-cfg-352",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-353",
      slug: "allied-4hp18v-series-central-ducted-cfg-353",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-354",
      slug: "allied-4hp18v-series-central-ducted-cfg-354",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-355",
      slug: "allied-4hp18v-series-central-ducted-cfg-355",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-356",
      slug: "allied-4hp18v-series-central-ducted-cfg-356",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-357",
      slug: "allied-4hp18v-series-central-ducted-cfg-357",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-358",
      slug: "allied-4hp18v-series-central-ducted-cfg-358",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22400,
      coolingCapacityMaxBtu: 22400,
      seer2: 17.1,
      hspf2: 7.8,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-359",
      slug: "allied-4hp18v-series-central-ducted-cfg-359",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22800,
      coolingCapacityMaxBtu: 22800,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-360",
      slug: "allied-4hp18v-series-central-ducted-cfg-360",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-361",
      slug: "allied-4hp18v-series-central-ducted-cfg-361",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-362",
      slug: "allied-4hp18v-series-central-ducted-cfg-362",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-363",
      slug: "allied-4hp18v-series-central-ducted-cfg-363",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-364",
      slug: "allied-4hp18v-series-central-ducted-cfg-364",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-365",
      slug: "allied-4hp18v-series-central-ducted-cfg-365",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-366",
      slug: "allied-4hp18v-series-central-ducted-cfg-366",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-367",
      slug: "allied-4hp18v-series-central-ducted-cfg-367",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-368",
      slug: "allied-4hp18v-series-central-ducted-cfg-368",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-369",
      slug: "allied-4hp18v-series-central-ducted-cfg-369",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-370",
      slug: "allied-4hp18v-series-central-ducted-cfg-370",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-371",
      slug: "allied-4hp18v-series-central-ducted-cfg-371",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-372",
      slug: "allied-4hp18v-series-central-ducted-cfg-372",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-373",
      slug: "allied-4hp18v-series-central-ducted-cfg-373",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-374",
      slug: "allied-4hp18v-series-central-ducted-cfg-374",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-375",
      slug: "allied-4hp18v-series-central-ducted-cfg-375",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-376",
      slug: "allied-4hp18v-series-central-ducted-cfg-376",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.1,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-377",
      slug: "allied-4hp18v-series-central-ducted-cfg-377",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-378",
      slug: "allied-4hp18v-series-central-ducted-cfg-378",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-379",
      slug: "allied-4hp18v-series-central-ducted-cfg-379",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-380",
      slug: "allied-4hp18v-series-central-ducted-cfg-380",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-381",
      slug: "allied-4hp18v-series-central-ducted-cfg-381",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-382",
      slug: "allied-4hp18v-series-central-ducted-cfg-382",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-383",
      slug: "allied-4hp18v-series-central-ducted-cfg-383",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-384",
      slug: "allied-4hp18v-series-central-ducted-cfg-384",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-385",
      slug: "allied-4hp18v-series-central-ducted-cfg-385",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-386",
      slug: "allied-4hp18v-series-central-ducted-cfg-386",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-387",
      slug: "allied-4hp18v-series-central-ducted-cfg-387",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-388",
      slug: "allied-4hp18v-series-central-ducted-cfg-388",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-389",
      slug: "allied-4hp18v-series-central-ducted-cfg-389",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-390",
      slug: "allied-4hp18v-series-central-ducted-cfg-390",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-391",
      slug: "allied-4hp18v-series-central-ducted-cfg-391",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-392",
      slug: "allied-4hp18v-series-central-ducted-cfg-392",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-393",
      slug: "allied-4hp18v-series-central-ducted-cfg-393",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-394",
      slug: "allied-4hp18v-series-central-ducted-cfg-394",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-395",
      slug: "allied-4hp18v-series-central-ducted-cfg-395",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-396",
      slug: "allied-4hp18v-series-central-ducted-cfg-396",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-397",
      slug: "allied-4hp18v-series-central-ducted-cfg-397",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-398",
      slug: "allied-4hp18v-series-central-ducted-cfg-398",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-399",
      slug: "allied-4hp18v-series-central-ducted-cfg-399",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-400",
      slug: "allied-4hp18v-series-central-ducted-cfg-400",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-401",
      slug: "allied-4hp18v-series-central-ducted-cfg-401",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-402",
      slug: "allied-4hp18v-series-central-ducted-cfg-402",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-403",
      slug: "allied-4hp18v-series-central-ducted-cfg-403",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-404",
      slug: "allied-4hp18v-series-central-ducted-cfg-404",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-405",
      slug: "allied-4hp18v-series-central-ducted-cfg-405",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-406",
      slug: "allied-4hp18v-series-central-ducted-cfg-406",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-407",
      slug: "allied-4hp18v-series-central-ducted-cfg-407",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-408",
      slug: "allied-4hp18v-series-central-ducted-cfg-408",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-409",
      slug: "allied-4hp18v-series-central-ducted-cfg-409",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-410",
      slug: "allied-4hp18v-series-central-ducted-cfg-410",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-411",
      slug: "allied-4hp18v-series-central-ducted-cfg-411",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-412",
      slug: "allied-4hp18v-series-central-ducted-cfg-412",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-413",
      slug: "allied-4hp18v-series-central-ducted-cfg-413",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-414",
      slug: "allied-4hp18v-series-central-ducted-cfg-414",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-415",
      slug: "allied-4hp18v-series-central-ducted-cfg-415",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-416",
      slug: "allied-4hp18v-series-central-ducted-cfg-416",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-417",
      slug: "allied-4hp18v-series-central-ducted-cfg-417",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-418",
      slug: "allied-4hp18v-series-central-ducted-cfg-418",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-419",
      slug: "allied-4hp18v-series-central-ducted-cfg-419",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-420",
      slug: "allied-4hp18v-series-central-ducted-cfg-420",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-421",
      slug: "allied-4hp18v-series-central-ducted-cfg-421",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-422",
      slug: "allied-4hp18v-series-central-ducted-cfg-422",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-423",
      slug: "allied-4hp18v-series-central-ducted-cfg-423",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-424",
      slug: "allied-4hp18v-series-central-ducted-cfg-424",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-425",
      slug: "allied-4hp18v-series-central-ducted-cfg-425",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-426",
      slug: "allied-4hp18v-series-central-ducted-cfg-426",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-427",
      slug: "allied-4hp18v-series-central-ducted-cfg-427",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-428",
      slug: "allied-4hp18v-series-central-ducted-cfg-428",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-429",
      slug: "allied-4hp18v-series-central-ducted-cfg-429",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-430",
      slug: "allied-4hp18v-series-central-ducted-cfg-430",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-431",
      slug: "allied-4hp18v-series-central-ducted-cfg-431",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-432",
      slug: "allied-4hp18v-series-central-ducted-cfg-432",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-433",
      slug: "allied-4hp18v-series-central-ducted-cfg-433",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-434",
      slug: "allied-4hp18v-series-central-ducted-cfg-434",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-435",
      slug: "allied-4hp18v-series-central-ducted-cfg-435",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-436",
      slug: "allied-4hp18v-series-central-ducted-cfg-436",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-437",
      slug: "allied-4hp18v-series-central-ducted-cfg-437",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-438",
      slug: "allied-4hp18v-series-central-ducted-cfg-438",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-439",
      slug: "allied-4hp18v-series-central-ducted-cfg-439",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-440",
      slug: "allied-4hp18v-series-central-ducted-cfg-440",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-441",
      slug: "allied-4hp18v-series-central-ducted-cfg-441",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-442",
      slug: "allied-4hp18v-series-central-ducted-cfg-442",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-443",
      slug: "allied-4hp18v-series-central-ducted-cfg-443",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-444",
      slug: "allied-4hp18v-series-central-ducted-cfg-444",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-445",
      slug: "allied-4hp18v-series-central-ducted-cfg-445",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-446",
      slug: "allied-4hp18v-series-central-ducted-cfg-446",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-447",
      slug: "allied-4hp18v-series-central-ducted-cfg-447",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-448",
      slug: "allied-4hp18v-series-central-ducted-cfg-448",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-449",
      slug: "allied-4hp18v-series-central-ducted-cfg-449",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-450",
      slug: "allied-4hp18v-series-central-ducted-cfg-450",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-451",
      slug: "allied-4hp18v-series-central-ducted-cfg-451",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-452",
      slug: "allied-4hp18v-series-central-ducted-cfg-452",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-453",
      slug: "allied-4hp18v-series-central-ducted-cfg-453",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-454",
      slug: "allied-4hp18v-series-central-ducted-cfg-454",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-455",
      slug: "allied-4hp18v-series-central-ducted-cfg-455",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-456",
      slug: "allied-4hp18v-series-central-ducted-cfg-456",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-457",
      slug: "allied-4hp18v-series-central-ducted-cfg-457",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-458",
      slug: "allied-4hp18v-series-central-ducted-cfg-458",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-459",
      slug: "allied-4hp18v-series-central-ducted-cfg-459",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-460",
      slug: "allied-4hp18v-series-central-ducted-cfg-460",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-461",
      slug: "allied-4hp18v-series-central-ducted-cfg-461",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-462",
      slug: "allied-4hp18v-series-central-ducted-cfg-462",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-463",
      slug: "allied-4hp18v-series-central-ducted-cfg-463",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-464",
      slug: "allied-4hp18v-series-central-ducted-cfg-464",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-465",
      slug: "allied-4hp18v-series-central-ducted-cfg-465",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-466",
      slug: "allied-4hp18v-series-central-ducted-cfg-466",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-467",
      slug: "allied-4hp18v-series-central-ducted-cfg-467",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v60p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-468",
      slug: "allied-4hp18v-series-central-ducted-cfg-468",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-469",
      slug: "allied-4hp18v-series-central-ducted-cfg-469",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-470",
      slug: "allied-4hp18v-series-central-ducted-cfg-470",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-471",
      slug: "allied-4hp18v-series-central-ducted-cfg-471",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-472",
      slug: "allied-4hp18v-series-central-ducted-cfg-472",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-473",
      slug: "allied-4hp18v-series-central-ducted-cfg-473",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-474",
      slug: "allied-4hp18v-series-central-ducted-cfg-474",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-475",
      slug: "allied-4hp18v-series-central-ducted-cfg-475",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-476",
      slug: "allied-4hp18v-series-central-ducted-cfg-476",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4hp18v-series-central-ducted-cfg-477",
      slug: "allied-4hp18v-series-central-ducted-cfg-477",
      modelId: "allied-4hp18v-series-central-ducted",
      outdoorUnitId: "allied-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-1",
      slug: "allied-4dh-series-wall-single-cfg-1",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-2",
      slug: "allied-4dh-series-wall-single-cfg-2",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-3",
      slug: "allied-4dh-series-wall-single-cfg-3",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-4",
      slug: "allied-4dh-series-wall-single-cfg-4",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: 22.7,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-5",
      slug: "allied-4dh-series-wall-single-cfg-5",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-6",
      slug: "allied-4dh-series-wall-single-cfg-6",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-7",
      slug: "allied-4dh-series-wall-single-cfg-7",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 18.8,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-8",
      slug: "allied-4dh-series-wall-single-cfg-8",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-9",
      slug: "allied-4dh-series-wall-single-cfg-9",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-10",
      slug: "allied-4dh-series-wall-single-cfg-10",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.5,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-11",
      slug: "allied-4dh-series-wall-single-cfg-11",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-12",
      slug: "allied-4dh-series-wall-single-cfg-12",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-13",
      slug: "allied-4dh-series-wall-single-cfg-13",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhv2s09s-1l",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-14",
      slug: "allied-4dh-series-wall-single-cfg-14",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhv2s09s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-15",
      slug: "allied-4dh-series-wall-single-cfg-15",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.9,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-16",
      slug: "allied-4dh-series-wall-single-cfg-16",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-17",
      slug: "allied-4dh-series-wall-single-cfg-17",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.95,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-18",
      slug: "allied-4dh-series-wall-single-cfg-18",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-19",
      slug: "allied-4dh-series-wall-single-cfg-19",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.3,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-20",
      slug: "allied-4dh-series-wall-single-cfg-20",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.95,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-21",
      slug: "allied-4dh-series-wall-single-cfg-21",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s30m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 24.6,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-22",
      slug: "allied-4dh-series-wall-single-cfg-22",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s30m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20.7,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-23",
      slug: "allied-4dh-series-wall-single-cfg-23",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s30m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.65,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-24",
      slug: "allied-4dh-series-wall-single-cfg-24",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s36m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.9,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-25",
      slug: "allied-4dh-series-wall-single-cfg-25",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s48m-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.8,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-26",
      slug: "allied-4dh-series-wall-single-cfg-26",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s12s-1l",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.4,
      hspf2: 7.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-27",
      slug: "allied-4dh-series-wall-single-cfg-27",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s12s-1l",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-28",
      slug: "allied-4dh-series-wall-single-cfg-28",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.5,
      hspf2: 11.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-29",
      slug: "allied-4dh-series-wall-single-cfg-29",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-30",
      slug: "allied-4dh-series-wall-single-cfg-30",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-31",
      slug: "allied-4dh-series-wall-single-cfg-31",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-32",
      slug: "allied-4dh-series-wall-single-cfg-32",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-33",
      slug: "allied-4dh-series-wall-single-cfg-33",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 18.8,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-34",
      slug: "allied-4dh-series-wall-single-cfg-34",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-35",
      slug: "allied-4dh-series-wall-single-cfg-35",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-36",
      slug: "allied-4dh-series-wall-single-cfg-36",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhps209s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 8900,
      coolingCapacityMaxBtu: 8900,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-37",
      slug: "allied-4dh-series-wall-single-cfg-37",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s12s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: 22.7,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-38",
      slug: "allied-4dh-series-wall-single-cfg-38",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-39",
      slug: "allied-4dh-series-wall-single-cfg-39",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhp2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 21.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-40",
      slug: "allied-4dh-series-wall-single-cfg-40",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhv2s09s-1l",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-4dh-series-wall-single-cfg-41",
      slug: "allied-4dh-series-wall-single-cfg-41",
      modelId: "allied-4dh-series-wall-single",
      outdoorUnitId: "allied-4dhv2s09s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-1",
      slug: "allied-standard-wall-single-cfg-1",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhv2s12s-1l",
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
      id: "allied-standard-wall-single-cfg-2",
      slug: "allied-standard-wall-single-cfg-2",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhv2s12s-1p",
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
      id: "allied-standard-wall-single-cfg-3",
      slug: "allied-standard-wall-single-cfg-3",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhv2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-4",
      slug: "allied-standard-wall-single-cfg-4",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhv2s24s-1p",
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
      id: "allied-standard-wall-single-cfg-5",
      slug: "allied-standard-wall-single-cfg-5",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s36s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-6",
      slug: "allied-standard-wall-single-cfg-6",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s48s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-7",
      slug: "allied-standard-wall-single-cfg-7",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s36s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-8",
      slug: "allied-standard-wall-single-cfg-8",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s48s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-9",
      slug: "allied-standard-wall-single-cfg-9",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s30s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29600,
      coolingCapacityMaxBtu: 29600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-10",
      slug: "allied-standard-wall-single-cfg-10",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s36s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-11",
      slug: "allied-standard-wall-single-cfg-11",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s48s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-12",
      slug: "allied-standard-wall-single-cfg-12",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s36s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-13",
      slug: "allied-standard-wall-single-cfg-13",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhp2s48s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-14",
      slug: "allied-standard-wall-single-cfg-14",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhv2s12s-1l",
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
      id: "allied-standard-wall-single-cfg-15",
      slug: "allied-standard-wall-single-cfg-15",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhv2s12s-1p",
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
      id: "allied-standard-wall-single-cfg-16",
      slug: "allied-standard-wall-single-cfg-16",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhv2s18s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "allied-standard-wall-single-cfg-17",
      slug: "allied-standard-wall-single-cfg-17",
      modelId: "allied-standard-wall-single",
      outdoorUnitId: "allied-4dhv2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-1",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-2",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-3",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-8",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-9",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-12",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-13",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-14",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-15",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-84",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-85",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-86",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-87",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-102",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-106",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-107",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-108",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-109",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-110",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-114",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-118",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-124",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-126",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-127",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-137",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-138",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-139",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-142",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-143",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-144",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-145",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-147",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-149",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-152",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-153",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-154",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-155",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-156",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-157",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-158",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-159",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-160",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-161",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-162",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-163",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-164",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-173",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-174",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-175",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-176",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-190",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-191",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-192",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-194",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-196",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-197",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-198",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-199",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-200",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-201",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-202",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-203",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-204",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-205",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-206",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-207",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-208",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-209",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-210",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-211",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-212",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-213",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-214",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-215",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-216",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-217",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-218",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-219",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-220",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-221",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-222",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-223",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-224",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-225",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-226",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-227",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-228",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-229",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-230",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-231",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-232",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-233",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-234",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-235",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-236",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-237",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-238",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-239",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-240",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-241",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-242",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-243",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-244",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-245",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-246",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-247",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-248",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-249",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-250",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-251",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-252",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-253",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-254",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-255",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-256",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-257",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-258",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-259",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-260",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-261",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-262",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-263",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-264",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-265",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-266",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-267",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-268",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-269",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-270",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-271",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-272",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-273",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-274",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-275",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-276",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-277",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-278",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-279",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-280",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-281",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-282",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-283",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-284",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-285",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-286",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-287",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-288",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-289",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-290",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-291",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-292",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-293",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-294",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-295",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-296",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-297",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-298",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-299",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-300",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-301",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-302",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-303",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-304",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-305",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-306",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-307",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-308",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-309",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-310",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-311",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-312",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-313",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-314",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-315",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-316",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-317",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-318",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-319",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-320",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-321",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-322",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-323",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-324",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-325",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-326",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-327",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-328",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-329",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-330",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-331",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-332",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-333",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-334",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-335",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-336",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-337",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-338",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-339",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-340",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-341",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-342",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-343",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-344",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-345",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-346",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-347",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-348",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-349",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22800,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-350",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-351",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-352",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-353",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-354",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-355",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-356",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15100,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-357",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-358",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 1.78,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-359",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-360",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-361",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-362",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-363",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-364",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-365",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-366",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-367",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-368",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-369",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-370",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-371",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-372",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-373",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-374",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-375",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-376",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-377",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-378",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-379",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-380",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-381",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-382",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-383",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-384",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-385",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-386",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-387",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-388",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-389",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-390",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-391",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-392",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-393",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-394",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-395",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-396",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-397",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-398",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-399",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-400",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-401",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-402",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-403",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-404",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-405",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-406",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-407",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-408",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-409",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-410",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-411",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-412",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-413",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-414",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-415",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-416",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-417",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-418",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-419",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-420",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-421",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-422",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-423",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-424",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-425",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-426",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-427",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-428",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-429",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-430",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-431",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-432",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-433",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-434",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-435",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-436",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-437",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-438",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-439",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-440",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-441",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-442",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-443",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-444",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-445",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-446",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-447",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-448",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-449",
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
      configurationId: "allied-4hp18v-series-central-ducted-cfg-450",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-451",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-452",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-453",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-454",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-455",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-456",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-457",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-458",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-459",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-460",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-461",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-462",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-463",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-464",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-465",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-466",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-467",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-468",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-469",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-470",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-471",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-472",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-473",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-474",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-475",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-476",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22200,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4hp18v-series-central-ducted-cfg-477",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-9",
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
      configurationId: "allied-4dh-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-12",
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
      configurationId: "allied-4dh-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-14",
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
      configurationId: "allied-4dh-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-21",
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
      configurationId: "allied-4dh-series-wall-single-cfg-22",
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
      configurationId: "allied-4dh-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-25",
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
      configurationId: "allied-4dh-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.01,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-32",
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
      configurationId: "allied-4dh-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6300,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-4dh-series-wall-single-cfg-41",
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
      configurationId: "allied-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "allied-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
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
