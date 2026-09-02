import type { BrandDataset } from "../../types";

export const ducaneDataset: BrandDataset = {
  brand: {
    id: "ducane",
    slug: "ducane",
    name: "DUCANE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ducane-4hp18v-series",
      slug: "ducane-4hp18v-series",
      name: "4HP18V SERIES",
      brandId: "ducane",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4dh-series",
      slug: "ducane-4dh-series",
      name: "4DH SERIES",
      brandId: "ducane",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-standard",
      slug: "ducane-standard",
      name: "Standard",
      brandId: "ducane",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series",
      slug: "ducane-7scp18v-series",
      name: "7SCP18V Series",
      brandId: "ducane",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ducane-4hp18v-series-central-ducted",
      slug: "ducane-4hp18v-series-central-ducted",
      name: "4HP18V SERIES",
      seriesId: "ducane-4hp18v-series",
      brandId: "ducane",
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
      id: "ducane-4dh-series-wall-single",
      slug: "ducane-4dh-series-wall-single",
      name: "4DH SERIES",
      seriesId: "ducane-4dh-series",
      brandId: "ducane",
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
      id: "ducane-standard-wall-single",
      slug: "ducane-standard-wall-single",
      name: "Standard",
      seriesId: "ducane-standard",
      brandId: "ducane",
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
    },
    {
      id: "ducane-7scp18v-series-central-ducted",
      slug: "ducane-7scp18v-series-central-ducted",
      name: "7SCP18V Series",
      seriesId: "ducane-7scp18v-series",
      brandId: "ducane",
      modelNumber: "7SCP18V Series",
      normalizedModelNumber: "7scp18v-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 55500,
      heatingCapacity5FMinBtu: 18000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 18.7,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.75,
      cop5FMax: 1.95,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ducane-4hp18v36p",
      modelNumber: "4HP18V36P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4hp18v60p",
      modelNumber: "4HP18V60P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s12s-1p",
      modelNumber: "4DHP2S12S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s18s-1p",
      modelNumber: "4DHP2S18S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s24s-1p",
      modelNumber: "4DHP2S24S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s12s-1l",
      modelNumber: "4DHP2S12S-1L",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhps209s-1p",
      modelNumber: "4DHPS209S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhv2s09s-1l",
      modelNumber: "4DHV2S09S-1L",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhv2s09s-1p",
      modelNumber: "4DHV2S09S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s18m-1p",
      modelNumber: "4DHP2S18M-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s24m-1p",
      modelNumber: "4DHP2S24M-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s30m-1p",
      modelNumber: "4DHP2S30M-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s36m-1p",
      modelNumber: "4DHP2S36M-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s48m-1p",
      modelNumber: "4DHP2S48M-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhv2s12s-1l",
      modelNumber: "4DHV2S12S-1L",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhv2s12s-1p",
      modelNumber: "4DHV2S12S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhv2s18s-1p",
      modelNumber: "4DHV2S18S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhv2s24s-1p",
      modelNumber: "4DHV2S24S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s36s-1p",
      modelNumber: "4DHP2S36S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s48s-1p",
      modelNumber: "4DHP2S48S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-4dhp2s30s-1p",
      modelNumber: "4DHP2S30S-1P",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-7scp18v24p-a",
      modelNumber: "7SCP18V24P-**A",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-7scp18v36p-a",
      modelNumber: "7SCP18V36P-**A",
      brandId: "ducane",
      refrigerant: null as any,
    },
    {
      id: "ducane-7scp18v60p-a",
      modelNumber: "7SCP18V60P-**A",
      brandId: "ducane",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-1",
      slug: "ducane-4hp18v-series-central-ducted-cfg-1",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-2",
      slug: "ducane-4hp18v-series-central-ducted-cfg-2",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-3",
      slug: "ducane-4hp18v-series-central-ducted-cfg-3",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-4",
      slug: "ducane-4hp18v-series-central-ducted-cfg-4",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-5",
      slug: "ducane-4hp18v-series-central-ducted-cfg-5",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-6",
      slug: "ducane-4hp18v-series-central-ducted-cfg-6",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-7",
      slug: "ducane-4hp18v-series-central-ducted-cfg-7",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-8",
      slug: "ducane-4hp18v-series-central-ducted-cfg-8",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-9",
      slug: "ducane-4hp18v-series-central-ducted-cfg-9",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-10",
      slug: "ducane-4hp18v-series-central-ducted-cfg-10",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-11",
      slug: "ducane-4hp18v-series-central-ducted-cfg-11",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-12",
      slug: "ducane-4hp18v-series-central-ducted-cfg-12",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-13",
      slug: "ducane-4hp18v-series-central-ducted-cfg-13",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-14",
      slug: "ducane-4hp18v-series-central-ducted-cfg-14",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-15",
      slug: "ducane-4hp18v-series-central-ducted-cfg-15",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-16",
      slug: "ducane-4hp18v-series-central-ducted-cfg-16",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-17",
      slug: "ducane-4hp18v-series-central-ducted-cfg-17",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-18",
      slug: "ducane-4hp18v-series-central-ducted-cfg-18",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-19",
      slug: "ducane-4hp18v-series-central-ducted-cfg-19",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-20",
      slug: "ducane-4hp18v-series-central-ducted-cfg-20",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-21",
      slug: "ducane-4hp18v-series-central-ducted-cfg-21",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-22",
      slug: "ducane-4hp18v-series-central-ducted-cfg-22",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-23",
      slug: "ducane-4hp18v-series-central-ducted-cfg-23",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-24",
      slug: "ducane-4hp18v-series-central-ducted-cfg-24",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-25",
      slug: "ducane-4hp18v-series-central-ducted-cfg-25",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-26",
      slug: "ducane-4hp18v-series-central-ducted-cfg-26",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-27",
      slug: "ducane-4hp18v-series-central-ducted-cfg-27",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-28",
      slug: "ducane-4hp18v-series-central-ducted-cfg-28",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-29",
      slug: "ducane-4hp18v-series-central-ducted-cfg-29",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-30",
      slug: "ducane-4hp18v-series-central-ducted-cfg-30",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-31",
      slug: "ducane-4hp18v-series-central-ducted-cfg-31",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-32",
      slug: "ducane-4hp18v-series-central-ducted-cfg-32",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-33",
      slug: "ducane-4hp18v-series-central-ducted-cfg-33",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-34",
      slug: "ducane-4hp18v-series-central-ducted-cfg-34",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-35",
      slug: "ducane-4hp18v-series-central-ducted-cfg-35",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-36",
      slug: "ducane-4hp18v-series-central-ducted-cfg-36",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-37",
      slug: "ducane-4hp18v-series-central-ducted-cfg-37",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-38",
      slug: "ducane-4hp18v-series-central-ducted-cfg-38",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-39",
      slug: "ducane-4hp18v-series-central-ducted-cfg-39",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-40",
      slug: "ducane-4hp18v-series-central-ducted-cfg-40",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-41",
      slug: "ducane-4hp18v-series-central-ducted-cfg-41",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-42",
      slug: "ducane-4hp18v-series-central-ducted-cfg-42",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-43",
      slug: "ducane-4hp18v-series-central-ducted-cfg-43",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-44",
      slug: "ducane-4hp18v-series-central-ducted-cfg-44",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-45",
      slug: "ducane-4hp18v-series-central-ducted-cfg-45",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-46",
      slug: "ducane-4hp18v-series-central-ducted-cfg-46",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-47",
      slug: "ducane-4hp18v-series-central-ducted-cfg-47",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-48",
      slug: "ducane-4hp18v-series-central-ducted-cfg-48",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-49",
      slug: "ducane-4hp18v-series-central-ducted-cfg-49",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-50",
      slug: "ducane-4hp18v-series-central-ducted-cfg-50",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-51",
      slug: "ducane-4hp18v-series-central-ducted-cfg-51",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-52",
      slug: "ducane-4hp18v-series-central-ducted-cfg-52",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-53",
      slug: "ducane-4hp18v-series-central-ducted-cfg-53",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-54",
      slug: "ducane-4hp18v-series-central-ducted-cfg-54",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-55",
      slug: "ducane-4hp18v-series-central-ducted-cfg-55",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-56",
      slug: "ducane-4hp18v-series-central-ducted-cfg-56",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-57",
      slug: "ducane-4hp18v-series-central-ducted-cfg-57",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-58",
      slug: "ducane-4hp18v-series-central-ducted-cfg-58",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-59",
      slug: "ducane-4hp18v-series-central-ducted-cfg-59",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-60",
      slug: "ducane-4hp18v-series-central-ducted-cfg-60",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-61",
      slug: "ducane-4hp18v-series-central-ducted-cfg-61",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-62",
      slug: "ducane-4hp18v-series-central-ducted-cfg-62",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-63",
      slug: "ducane-4hp18v-series-central-ducted-cfg-63",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-64",
      slug: "ducane-4hp18v-series-central-ducted-cfg-64",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-65",
      slug: "ducane-4hp18v-series-central-ducted-cfg-65",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-66",
      slug: "ducane-4hp18v-series-central-ducted-cfg-66",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-67",
      slug: "ducane-4hp18v-series-central-ducted-cfg-67",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-68",
      slug: "ducane-4hp18v-series-central-ducted-cfg-68",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-69",
      slug: "ducane-4hp18v-series-central-ducted-cfg-69",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-70",
      slug: "ducane-4hp18v-series-central-ducted-cfg-70",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-71",
      slug: "ducane-4hp18v-series-central-ducted-cfg-71",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-72",
      slug: "ducane-4hp18v-series-central-ducted-cfg-72",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-73",
      slug: "ducane-4hp18v-series-central-ducted-cfg-73",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-74",
      slug: "ducane-4hp18v-series-central-ducted-cfg-74",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-75",
      slug: "ducane-4hp18v-series-central-ducted-cfg-75",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-76",
      slug: "ducane-4hp18v-series-central-ducted-cfg-76",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-77",
      slug: "ducane-4hp18v-series-central-ducted-cfg-77",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-78",
      slug: "ducane-4hp18v-series-central-ducted-cfg-78",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-79",
      slug: "ducane-4hp18v-series-central-ducted-cfg-79",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-80",
      slug: "ducane-4hp18v-series-central-ducted-cfg-80",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-81",
      slug: "ducane-4hp18v-series-central-ducted-cfg-81",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-82",
      slug: "ducane-4hp18v-series-central-ducted-cfg-82",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-83",
      slug: "ducane-4hp18v-series-central-ducted-cfg-83",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-84",
      slug: "ducane-4hp18v-series-central-ducted-cfg-84",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-85",
      slug: "ducane-4hp18v-series-central-ducted-cfg-85",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-86",
      slug: "ducane-4hp18v-series-central-ducted-cfg-86",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-87",
      slug: "ducane-4hp18v-series-central-ducted-cfg-87",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-88",
      slug: "ducane-4hp18v-series-central-ducted-cfg-88",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-89",
      slug: "ducane-4hp18v-series-central-ducted-cfg-89",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-90",
      slug: "ducane-4hp18v-series-central-ducted-cfg-90",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-91",
      slug: "ducane-4hp18v-series-central-ducted-cfg-91",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-92",
      slug: "ducane-4hp18v-series-central-ducted-cfg-92",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-93",
      slug: "ducane-4hp18v-series-central-ducted-cfg-93",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-94",
      slug: "ducane-4hp18v-series-central-ducted-cfg-94",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-95",
      slug: "ducane-4hp18v-series-central-ducted-cfg-95",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-96",
      slug: "ducane-4hp18v-series-central-ducted-cfg-96",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-97",
      slug: "ducane-4hp18v-series-central-ducted-cfg-97",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-98",
      slug: "ducane-4hp18v-series-central-ducted-cfg-98",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-99",
      slug: "ducane-4hp18v-series-central-ducted-cfg-99",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-100",
      slug: "ducane-4hp18v-series-central-ducted-cfg-100",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-101",
      slug: "ducane-4hp18v-series-central-ducted-cfg-101",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-102",
      slug: "ducane-4hp18v-series-central-ducted-cfg-102",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-103",
      slug: "ducane-4hp18v-series-central-ducted-cfg-103",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-104",
      slug: "ducane-4hp18v-series-central-ducted-cfg-104",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-105",
      slug: "ducane-4hp18v-series-central-ducted-cfg-105",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-106",
      slug: "ducane-4hp18v-series-central-ducted-cfg-106",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-107",
      slug: "ducane-4hp18v-series-central-ducted-cfg-107",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-108",
      slug: "ducane-4hp18v-series-central-ducted-cfg-108",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-109",
      slug: "ducane-4hp18v-series-central-ducted-cfg-109",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-110",
      slug: "ducane-4hp18v-series-central-ducted-cfg-110",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-111",
      slug: "ducane-4hp18v-series-central-ducted-cfg-111",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-112",
      slug: "ducane-4hp18v-series-central-ducted-cfg-112",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-113",
      slug: "ducane-4hp18v-series-central-ducted-cfg-113",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-114",
      slug: "ducane-4hp18v-series-central-ducted-cfg-114",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-115",
      slug: "ducane-4hp18v-series-central-ducted-cfg-115",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-116",
      slug: "ducane-4hp18v-series-central-ducted-cfg-116",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-117",
      slug: "ducane-4hp18v-series-central-ducted-cfg-117",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-118",
      slug: "ducane-4hp18v-series-central-ducted-cfg-118",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-119",
      slug: "ducane-4hp18v-series-central-ducted-cfg-119",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-120",
      slug: "ducane-4hp18v-series-central-ducted-cfg-120",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-121",
      slug: "ducane-4hp18v-series-central-ducted-cfg-121",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-122",
      slug: "ducane-4hp18v-series-central-ducted-cfg-122",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-123",
      slug: "ducane-4hp18v-series-central-ducted-cfg-123",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-124",
      slug: "ducane-4hp18v-series-central-ducted-cfg-124",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-125",
      slug: "ducane-4hp18v-series-central-ducted-cfg-125",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-126",
      slug: "ducane-4hp18v-series-central-ducted-cfg-126",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-127",
      slug: "ducane-4hp18v-series-central-ducted-cfg-127",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-128",
      slug: "ducane-4hp18v-series-central-ducted-cfg-128",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-129",
      slug: "ducane-4hp18v-series-central-ducted-cfg-129",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-130",
      slug: "ducane-4hp18v-series-central-ducted-cfg-130",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-131",
      slug: "ducane-4hp18v-series-central-ducted-cfg-131",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-132",
      slug: "ducane-4hp18v-series-central-ducted-cfg-132",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-133",
      slug: "ducane-4hp18v-series-central-ducted-cfg-133",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-134",
      slug: "ducane-4hp18v-series-central-ducted-cfg-134",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-135",
      slug: "ducane-4hp18v-series-central-ducted-cfg-135",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-136",
      slug: "ducane-4hp18v-series-central-ducted-cfg-136",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-137",
      slug: "ducane-4hp18v-series-central-ducted-cfg-137",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-138",
      slug: "ducane-4hp18v-series-central-ducted-cfg-138",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-139",
      slug: "ducane-4hp18v-series-central-ducted-cfg-139",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-140",
      slug: "ducane-4hp18v-series-central-ducted-cfg-140",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-141",
      slug: "ducane-4hp18v-series-central-ducted-cfg-141",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-142",
      slug: "ducane-4hp18v-series-central-ducted-cfg-142",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-143",
      slug: "ducane-4hp18v-series-central-ducted-cfg-143",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-144",
      slug: "ducane-4hp18v-series-central-ducted-cfg-144",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-145",
      slug: "ducane-4hp18v-series-central-ducted-cfg-145",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-146",
      slug: "ducane-4hp18v-series-central-ducted-cfg-146",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-147",
      slug: "ducane-4hp18v-series-central-ducted-cfg-147",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-148",
      slug: "ducane-4hp18v-series-central-ducted-cfg-148",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-149",
      slug: "ducane-4hp18v-series-central-ducted-cfg-149",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-150",
      slug: "ducane-4hp18v-series-central-ducted-cfg-150",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-151",
      slug: "ducane-4hp18v-series-central-ducted-cfg-151",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-152",
      slug: "ducane-4hp18v-series-central-ducted-cfg-152",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-153",
      slug: "ducane-4hp18v-series-central-ducted-cfg-153",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-154",
      slug: "ducane-4hp18v-series-central-ducted-cfg-154",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-155",
      slug: "ducane-4hp18v-series-central-ducted-cfg-155",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-156",
      slug: "ducane-4hp18v-series-central-ducted-cfg-156",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-157",
      slug: "ducane-4hp18v-series-central-ducted-cfg-157",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-158",
      slug: "ducane-4hp18v-series-central-ducted-cfg-158",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-159",
      slug: "ducane-4hp18v-series-central-ducted-cfg-159",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-160",
      slug: "ducane-4hp18v-series-central-ducted-cfg-160",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-161",
      slug: "ducane-4hp18v-series-central-ducted-cfg-161",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-162",
      slug: "ducane-4hp18v-series-central-ducted-cfg-162",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-163",
      slug: "ducane-4hp18v-series-central-ducted-cfg-163",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-164",
      slug: "ducane-4hp18v-series-central-ducted-cfg-164",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-165",
      slug: "ducane-4hp18v-series-central-ducted-cfg-165",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-166",
      slug: "ducane-4hp18v-series-central-ducted-cfg-166",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-167",
      slug: "ducane-4hp18v-series-central-ducted-cfg-167",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-168",
      slug: "ducane-4hp18v-series-central-ducted-cfg-168",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-169",
      slug: "ducane-4hp18v-series-central-ducted-cfg-169",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-170",
      slug: "ducane-4hp18v-series-central-ducted-cfg-170",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-171",
      slug: "ducane-4hp18v-series-central-ducted-cfg-171",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-172",
      slug: "ducane-4hp18v-series-central-ducted-cfg-172",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-173",
      slug: "ducane-4hp18v-series-central-ducted-cfg-173",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-174",
      slug: "ducane-4hp18v-series-central-ducted-cfg-174",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-175",
      slug: "ducane-4hp18v-series-central-ducted-cfg-175",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-176",
      slug: "ducane-4hp18v-series-central-ducted-cfg-176",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-177",
      slug: "ducane-4hp18v-series-central-ducted-cfg-177",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-178",
      slug: "ducane-4hp18v-series-central-ducted-cfg-178",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-179",
      slug: "ducane-4hp18v-series-central-ducted-cfg-179",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-180",
      slug: "ducane-4hp18v-series-central-ducted-cfg-180",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-181",
      slug: "ducane-4hp18v-series-central-ducted-cfg-181",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-182",
      slug: "ducane-4hp18v-series-central-ducted-cfg-182",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-183",
      slug: "ducane-4hp18v-series-central-ducted-cfg-183",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-184",
      slug: "ducane-4hp18v-series-central-ducted-cfg-184",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-185",
      slug: "ducane-4hp18v-series-central-ducted-cfg-185",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-186",
      slug: "ducane-4hp18v-series-central-ducted-cfg-186",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-187",
      slug: "ducane-4hp18v-series-central-ducted-cfg-187",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-188",
      slug: "ducane-4hp18v-series-central-ducted-cfg-188",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-189",
      slug: "ducane-4hp18v-series-central-ducted-cfg-189",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-190",
      slug: "ducane-4hp18v-series-central-ducted-cfg-190",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-191",
      slug: "ducane-4hp18v-series-central-ducted-cfg-191",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-192",
      slug: "ducane-4hp18v-series-central-ducted-cfg-192",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-193",
      slug: "ducane-4hp18v-series-central-ducted-cfg-193",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-194",
      slug: "ducane-4hp18v-series-central-ducted-cfg-194",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-195",
      slug: "ducane-4hp18v-series-central-ducted-cfg-195",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-196",
      slug: "ducane-4hp18v-series-central-ducted-cfg-196",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-197",
      slug: "ducane-4hp18v-series-central-ducted-cfg-197",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-198",
      slug: "ducane-4hp18v-series-central-ducted-cfg-198",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-199",
      slug: "ducane-4hp18v-series-central-ducted-cfg-199",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-200",
      slug: "ducane-4hp18v-series-central-ducted-cfg-200",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-201",
      slug: "ducane-4hp18v-series-central-ducted-cfg-201",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-202",
      slug: "ducane-4hp18v-series-central-ducted-cfg-202",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-203",
      slug: "ducane-4hp18v-series-central-ducted-cfg-203",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-204",
      slug: "ducane-4hp18v-series-central-ducted-cfg-204",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-205",
      slug: "ducane-4hp18v-series-central-ducted-cfg-205",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-206",
      slug: "ducane-4hp18v-series-central-ducted-cfg-206",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-207",
      slug: "ducane-4hp18v-series-central-ducted-cfg-207",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-208",
      slug: "ducane-4hp18v-series-central-ducted-cfg-208",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-209",
      slug: "ducane-4hp18v-series-central-ducted-cfg-209",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-210",
      slug: "ducane-4hp18v-series-central-ducted-cfg-210",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-211",
      slug: "ducane-4hp18v-series-central-ducted-cfg-211",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-212",
      slug: "ducane-4hp18v-series-central-ducted-cfg-212",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-213",
      slug: "ducane-4hp18v-series-central-ducted-cfg-213",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-214",
      slug: "ducane-4hp18v-series-central-ducted-cfg-214",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-215",
      slug: "ducane-4hp18v-series-central-ducted-cfg-215",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-216",
      slug: "ducane-4hp18v-series-central-ducted-cfg-216",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-217",
      slug: "ducane-4hp18v-series-central-ducted-cfg-217",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-218",
      slug: "ducane-4hp18v-series-central-ducted-cfg-218",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-219",
      slug: "ducane-4hp18v-series-central-ducted-cfg-219",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-220",
      slug: "ducane-4hp18v-series-central-ducted-cfg-220",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-221",
      slug: "ducane-4hp18v-series-central-ducted-cfg-221",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-222",
      slug: "ducane-4hp18v-series-central-ducted-cfg-222",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-223",
      slug: "ducane-4hp18v-series-central-ducted-cfg-223",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-224",
      slug: "ducane-4hp18v-series-central-ducted-cfg-224",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-225",
      slug: "ducane-4hp18v-series-central-ducted-cfg-225",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-226",
      slug: "ducane-4hp18v-series-central-ducted-cfg-226",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-227",
      slug: "ducane-4hp18v-series-central-ducted-cfg-227",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-228",
      slug: "ducane-4hp18v-series-central-ducted-cfg-228",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-229",
      slug: "ducane-4hp18v-series-central-ducted-cfg-229",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-230",
      slug: "ducane-4hp18v-series-central-ducted-cfg-230",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-231",
      slug: "ducane-4hp18v-series-central-ducted-cfg-231",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-232",
      slug: "ducane-4hp18v-series-central-ducted-cfg-232",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-233",
      slug: "ducane-4hp18v-series-central-ducted-cfg-233",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-234",
      slug: "ducane-4hp18v-series-central-ducted-cfg-234",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-235",
      slug: "ducane-4hp18v-series-central-ducted-cfg-235",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-236",
      slug: "ducane-4hp18v-series-central-ducted-cfg-236",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-237",
      slug: "ducane-4hp18v-series-central-ducted-cfg-237",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-238",
      slug: "ducane-4hp18v-series-central-ducted-cfg-238",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-239",
      slug: "ducane-4hp18v-series-central-ducted-cfg-239",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-240",
      slug: "ducane-4hp18v-series-central-ducted-cfg-240",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-241",
      slug: "ducane-4hp18v-series-central-ducted-cfg-241",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-242",
      slug: "ducane-4hp18v-series-central-ducted-cfg-242",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-243",
      slug: "ducane-4hp18v-series-central-ducted-cfg-243",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-244",
      slug: "ducane-4hp18v-series-central-ducted-cfg-244",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-245",
      slug: "ducane-4hp18v-series-central-ducted-cfg-245",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-246",
      slug: "ducane-4hp18v-series-central-ducted-cfg-246",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-247",
      slug: "ducane-4hp18v-series-central-ducted-cfg-247",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-248",
      slug: "ducane-4hp18v-series-central-ducted-cfg-248",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-249",
      slug: "ducane-4hp18v-series-central-ducted-cfg-249",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-250",
      slug: "ducane-4hp18v-series-central-ducted-cfg-250",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-251",
      slug: "ducane-4hp18v-series-central-ducted-cfg-251",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-252",
      slug: "ducane-4hp18v-series-central-ducted-cfg-252",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-253",
      slug: "ducane-4hp18v-series-central-ducted-cfg-253",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-254",
      slug: "ducane-4hp18v-series-central-ducted-cfg-254",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-255",
      slug: "ducane-4hp18v-series-central-ducted-cfg-255",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-256",
      slug: "ducane-4hp18v-series-central-ducted-cfg-256",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-257",
      slug: "ducane-4hp18v-series-central-ducted-cfg-257",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-258",
      slug: "ducane-4hp18v-series-central-ducted-cfg-258",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-259",
      slug: "ducane-4hp18v-series-central-ducted-cfg-259",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-260",
      slug: "ducane-4hp18v-series-central-ducted-cfg-260",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-261",
      slug: "ducane-4hp18v-series-central-ducted-cfg-261",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-262",
      slug: "ducane-4hp18v-series-central-ducted-cfg-262",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-263",
      slug: "ducane-4hp18v-series-central-ducted-cfg-263",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-264",
      slug: "ducane-4hp18v-series-central-ducted-cfg-264",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-265",
      slug: "ducane-4hp18v-series-central-ducted-cfg-265",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-266",
      slug: "ducane-4hp18v-series-central-ducted-cfg-266",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-267",
      slug: "ducane-4hp18v-series-central-ducted-cfg-267",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-268",
      slug: "ducane-4hp18v-series-central-ducted-cfg-268",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-269",
      slug: "ducane-4hp18v-series-central-ducted-cfg-269",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-270",
      slug: "ducane-4hp18v-series-central-ducted-cfg-270",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-271",
      slug: "ducane-4hp18v-series-central-ducted-cfg-271",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-272",
      slug: "ducane-4hp18v-series-central-ducted-cfg-272",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-273",
      slug: "ducane-4hp18v-series-central-ducted-cfg-273",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-274",
      slug: "ducane-4hp18v-series-central-ducted-cfg-274",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-275",
      slug: "ducane-4hp18v-series-central-ducted-cfg-275",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-276",
      slug: "ducane-4hp18v-series-central-ducted-cfg-276",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-277",
      slug: "ducane-4hp18v-series-central-ducted-cfg-277",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-278",
      slug: "ducane-4hp18v-series-central-ducted-cfg-278",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-279",
      slug: "ducane-4hp18v-series-central-ducted-cfg-279",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-280",
      slug: "ducane-4hp18v-series-central-ducted-cfg-280",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-281",
      slug: "ducane-4hp18v-series-central-ducted-cfg-281",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-282",
      slug: "ducane-4hp18v-series-central-ducted-cfg-282",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-283",
      slug: "ducane-4hp18v-series-central-ducted-cfg-283",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-284",
      slug: "ducane-4hp18v-series-central-ducted-cfg-284",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-285",
      slug: "ducane-4hp18v-series-central-ducted-cfg-285",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-286",
      slug: "ducane-4hp18v-series-central-ducted-cfg-286",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-287",
      slug: "ducane-4hp18v-series-central-ducted-cfg-287",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-288",
      slug: "ducane-4hp18v-series-central-ducted-cfg-288",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-289",
      slug: "ducane-4hp18v-series-central-ducted-cfg-289",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-290",
      slug: "ducane-4hp18v-series-central-ducted-cfg-290",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-291",
      slug: "ducane-4hp18v-series-central-ducted-cfg-291",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-292",
      slug: "ducane-4hp18v-series-central-ducted-cfg-292",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-293",
      slug: "ducane-4hp18v-series-central-ducted-cfg-293",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-294",
      slug: "ducane-4hp18v-series-central-ducted-cfg-294",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-295",
      slug: "ducane-4hp18v-series-central-ducted-cfg-295",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-296",
      slug: "ducane-4hp18v-series-central-ducted-cfg-296",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-297",
      slug: "ducane-4hp18v-series-central-ducted-cfg-297",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-298",
      slug: "ducane-4hp18v-series-central-ducted-cfg-298",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-299",
      slug: "ducane-4hp18v-series-central-ducted-cfg-299",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-300",
      slug: "ducane-4hp18v-series-central-ducted-cfg-300",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-301",
      slug: "ducane-4hp18v-series-central-ducted-cfg-301",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-302",
      slug: "ducane-4hp18v-series-central-ducted-cfg-302",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-303",
      slug: "ducane-4hp18v-series-central-ducted-cfg-303",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-304",
      slug: "ducane-4hp18v-series-central-ducted-cfg-304",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-305",
      slug: "ducane-4hp18v-series-central-ducted-cfg-305",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-306",
      slug: "ducane-4hp18v-series-central-ducted-cfg-306",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-307",
      slug: "ducane-4hp18v-series-central-ducted-cfg-307",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-308",
      slug: "ducane-4hp18v-series-central-ducted-cfg-308",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-309",
      slug: "ducane-4hp18v-series-central-ducted-cfg-309",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-310",
      slug: "ducane-4hp18v-series-central-ducted-cfg-310",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-311",
      slug: "ducane-4hp18v-series-central-ducted-cfg-311",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-312",
      slug: "ducane-4hp18v-series-central-ducted-cfg-312",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-313",
      slug: "ducane-4hp18v-series-central-ducted-cfg-313",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-314",
      slug: "ducane-4hp18v-series-central-ducted-cfg-314",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-315",
      slug: "ducane-4hp18v-series-central-ducted-cfg-315",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-316",
      slug: "ducane-4hp18v-series-central-ducted-cfg-316",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-317",
      slug: "ducane-4hp18v-series-central-ducted-cfg-317",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-318",
      slug: "ducane-4hp18v-series-central-ducted-cfg-318",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-319",
      slug: "ducane-4hp18v-series-central-ducted-cfg-319",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-320",
      slug: "ducane-4hp18v-series-central-ducted-cfg-320",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-321",
      slug: "ducane-4hp18v-series-central-ducted-cfg-321",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-322",
      slug: "ducane-4hp18v-series-central-ducted-cfg-322",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-323",
      slug: "ducane-4hp18v-series-central-ducted-cfg-323",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-324",
      slug: "ducane-4hp18v-series-central-ducted-cfg-324",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-325",
      slug: "ducane-4hp18v-series-central-ducted-cfg-325",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-326",
      slug: "ducane-4hp18v-series-central-ducted-cfg-326",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-327",
      slug: "ducane-4hp18v-series-central-ducted-cfg-327",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-328",
      slug: "ducane-4hp18v-series-central-ducted-cfg-328",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-329",
      slug: "ducane-4hp18v-series-central-ducted-cfg-329",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-330",
      slug: "ducane-4hp18v-series-central-ducted-cfg-330",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-331",
      slug: "ducane-4hp18v-series-central-ducted-cfg-331",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-332",
      slug: "ducane-4hp18v-series-central-ducted-cfg-332",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-333",
      slug: "ducane-4hp18v-series-central-ducted-cfg-333",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-334",
      slug: "ducane-4hp18v-series-central-ducted-cfg-334",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-335",
      slug: "ducane-4hp18v-series-central-ducted-cfg-335",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-336",
      slug: "ducane-4hp18v-series-central-ducted-cfg-336",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-337",
      slug: "ducane-4hp18v-series-central-ducted-cfg-337",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-338",
      slug: "ducane-4hp18v-series-central-ducted-cfg-338",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-339",
      slug: "ducane-4hp18v-series-central-ducted-cfg-339",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-340",
      slug: "ducane-4hp18v-series-central-ducted-cfg-340",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-341",
      slug: "ducane-4hp18v-series-central-ducted-cfg-341",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-342",
      slug: "ducane-4hp18v-series-central-ducted-cfg-342",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-343",
      slug: "ducane-4hp18v-series-central-ducted-cfg-343",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-344",
      slug: "ducane-4hp18v-series-central-ducted-cfg-344",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-345",
      slug: "ducane-4hp18v-series-central-ducted-cfg-345",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-346",
      slug: "ducane-4hp18v-series-central-ducted-cfg-346",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-347",
      slug: "ducane-4hp18v-series-central-ducted-cfg-347",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-348",
      slug: "ducane-4hp18v-series-central-ducted-cfg-348",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-349",
      slug: "ducane-4hp18v-series-central-ducted-cfg-349",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-350",
      slug: "ducane-4hp18v-series-central-ducted-cfg-350",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-351",
      slug: "ducane-4hp18v-series-central-ducted-cfg-351",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-352",
      slug: "ducane-4hp18v-series-central-ducted-cfg-352",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-353",
      slug: "ducane-4hp18v-series-central-ducted-cfg-353",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-354",
      slug: "ducane-4hp18v-series-central-ducted-cfg-354",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-355",
      slug: "ducane-4hp18v-series-central-ducted-cfg-355",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-356",
      slug: "ducane-4hp18v-series-central-ducted-cfg-356",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-357",
      slug: "ducane-4hp18v-series-central-ducted-cfg-357",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-358",
      slug: "ducane-4hp18v-series-central-ducted-cfg-358",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-359",
      slug: "ducane-4hp18v-series-central-ducted-cfg-359",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-360",
      slug: "ducane-4hp18v-series-central-ducted-cfg-360",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-361",
      slug: "ducane-4hp18v-series-central-ducted-cfg-361",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-362",
      slug: "ducane-4hp18v-series-central-ducted-cfg-362",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-363",
      slug: "ducane-4hp18v-series-central-ducted-cfg-363",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-364",
      slug: "ducane-4hp18v-series-central-ducted-cfg-364",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-365",
      slug: "ducane-4hp18v-series-central-ducted-cfg-365",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-366",
      slug: "ducane-4hp18v-series-central-ducted-cfg-366",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-367",
      slug: "ducane-4hp18v-series-central-ducted-cfg-367",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-368",
      slug: "ducane-4hp18v-series-central-ducted-cfg-368",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-369",
      slug: "ducane-4hp18v-series-central-ducted-cfg-369",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-370",
      slug: "ducane-4hp18v-series-central-ducted-cfg-370",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-371",
      slug: "ducane-4hp18v-series-central-ducted-cfg-371",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-372",
      slug: "ducane-4hp18v-series-central-ducted-cfg-372",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-373",
      slug: "ducane-4hp18v-series-central-ducted-cfg-373",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-374",
      slug: "ducane-4hp18v-series-central-ducted-cfg-374",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-375",
      slug: "ducane-4hp18v-series-central-ducted-cfg-375",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-376",
      slug: "ducane-4hp18v-series-central-ducted-cfg-376",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-377",
      slug: "ducane-4hp18v-series-central-ducted-cfg-377",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-378",
      slug: "ducane-4hp18v-series-central-ducted-cfg-378",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-379",
      slug: "ducane-4hp18v-series-central-ducted-cfg-379",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-380",
      slug: "ducane-4hp18v-series-central-ducted-cfg-380",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-381",
      slug: "ducane-4hp18v-series-central-ducted-cfg-381",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-382",
      slug: "ducane-4hp18v-series-central-ducted-cfg-382",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-383",
      slug: "ducane-4hp18v-series-central-ducted-cfg-383",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-384",
      slug: "ducane-4hp18v-series-central-ducted-cfg-384",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-385",
      slug: "ducane-4hp18v-series-central-ducted-cfg-385",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-386",
      slug: "ducane-4hp18v-series-central-ducted-cfg-386",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-387",
      slug: "ducane-4hp18v-series-central-ducted-cfg-387",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-388",
      slug: "ducane-4hp18v-series-central-ducted-cfg-388",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-389",
      slug: "ducane-4hp18v-series-central-ducted-cfg-389",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-390",
      slug: "ducane-4hp18v-series-central-ducted-cfg-390",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-391",
      slug: "ducane-4hp18v-series-central-ducted-cfg-391",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-392",
      slug: "ducane-4hp18v-series-central-ducted-cfg-392",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-393",
      slug: "ducane-4hp18v-series-central-ducted-cfg-393",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-394",
      slug: "ducane-4hp18v-series-central-ducted-cfg-394",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-395",
      slug: "ducane-4hp18v-series-central-ducted-cfg-395",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-396",
      slug: "ducane-4hp18v-series-central-ducted-cfg-396",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-397",
      slug: "ducane-4hp18v-series-central-ducted-cfg-397",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-398",
      slug: "ducane-4hp18v-series-central-ducted-cfg-398",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-399",
      slug: "ducane-4hp18v-series-central-ducted-cfg-399",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-400",
      slug: "ducane-4hp18v-series-central-ducted-cfg-400",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-401",
      slug: "ducane-4hp18v-series-central-ducted-cfg-401",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-402",
      slug: "ducane-4hp18v-series-central-ducted-cfg-402",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-403",
      slug: "ducane-4hp18v-series-central-ducted-cfg-403",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-404",
      slug: "ducane-4hp18v-series-central-ducted-cfg-404",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-405",
      slug: "ducane-4hp18v-series-central-ducted-cfg-405",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-406",
      slug: "ducane-4hp18v-series-central-ducted-cfg-406",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-407",
      slug: "ducane-4hp18v-series-central-ducted-cfg-407",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-408",
      slug: "ducane-4hp18v-series-central-ducted-cfg-408",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-409",
      slug: "ducane-4hp18v-series-central-ducted-cfg-409",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-410",
      slug: "ducane-4hp18v-series-central-ducted-cfg-410",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-411",
      slug: "ducane-4hp18v-series-central-ducted-cfg-411",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-412",
      slug: "ducane-4hp18v-series-central-ducted-cfg-412",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-413",
      slug: "ducane-4hp18v-series-central-ducted-cfg-413",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-414",
      slug: "ducane-4hp18v-series-central-ducted-cfg-414",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-415",
      slug: "ducane-4hp18v-series-central-ducted-cfg-415",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-416",
      slug: "ducane-4hp18v-series-central-ducted-cfg-416",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-417",
      slug: "ducane-4hp18v-series-central-ducted-cfg-417",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-418",
      slug: "ducane-4hp18v-series-central-ducted-cfg-418",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-419",
      slug: "ducane-4hp18v-series-central-ducted-cfg-419",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-420",
      slug: "ducane-4hp18v-series-central-ducted-cfg-420",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-421",
      slug: "ducane-4hp18v-series-central-ducted-cfg-421",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-422",
      slug: "ducane-4hp18v-series-central-ducted-cfg-422",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-423",
      slug: "ducane-4hp18v-series-central-ducted-cfg-423",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-424",
      slug: "ducane-4hp18v-series-central-ducted-cfg-424",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-425",
      slug: "ducane-4hp18v-series-central-ducted-cfg-425",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-426",
      slug: "ducane-4hp18v-series-central-ducted-cfg-426",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-427",
      slug: "ducane-4hp18v-series-central-ducted-cfg-427",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-428",
      slug: "ducane-4hp18v-series-central-ducted-cfg-428",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-429",
      slug: "ducane-4hp18v-series-central-ducted-cfg-429",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-430",
      slug: "ducane-4hp18v-series-central-ducted-cfg-430",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-431",
      slug: "ducane-4hp18v-series-central-ducted-cfg-431",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-432",
      slug: "ducane-4hp18v-series-central-ducted-cfg-432",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-433",
      slug: "ducane-4hp18v-series-central-ducted-cfg-433",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-434",
      slug: "ducane-4hp18v-series-central-ducted-cfg-434",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-435",
      slug: "ducane-4hp18v-series-central-ducted-cfg-435",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-436",
      slug: "ducane-4hp18v-series-central-ducted-cfg-436",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-437",
      slug: "ducane-4hp18v-series-central-ducted-cfg-437",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-438",
      slug: "ducane-4hp18v-series-central-ducted-cfg-438",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-439",
      slug: "ducane-4hp18v-series-central-ducted-cfg-439",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-440",
      slug: "ducane-4hp18v-series-central-ducted-cfg-440",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-441",
      slug: "ducane-4hp18v-series-central-ducted-cfg-441",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-442",
      slug: "ducane-4hp18v-series-central-ducted-cfg-442",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-443",
      slug: "ducane-4hp18v-series-central-ducted-cfg-443",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-444",
      slug: "ducane-4hp18v-series-central-ducted-cfg-444",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-445",
      slug: "ducane-4hp18v-series-central-ducted-cfg-445",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-446",
      slug: "ducane-4hp18v-series-central-ducted-cfg-446",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-447",
      slug: "ducane-4hp18v-series-central-ducted-cfg-447",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-448",
      slug: "ducane-4hp18v-series-central-ducted-cfg-448",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-449",
      slug: "ducane-4hp18v-series-central-ducted-cfg-449",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-450",
      slug: "ducane-4hp18v-series-central-ducted-cfg-450",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-451",
      slug: "ducane-4hp18v-series-central-ducted-cfg-451",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-452",
      slug: "ducane-4hp18v-series-central-ducted-cfg-452",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-453",
      slug: "ducane-4hp18v-series-central-ducted-cfg-453",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-454",
      slug: "ducane-4hp18v-series-central-ducted-cfg-454",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-455",
      slug: "ducane-4hp18v-series-central-ducted-cfg-455",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-456",
      slug: "ducane-4hp18v-series-central-ducted-cfg-456",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-457",
      slug: "ducane-4hp18v-series-central-ducted-cfg-457",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-458",
      slug: "ducane-4hp18v-series-central-ducted-cfg-458",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-459",
      slug: "ducane-4hp18v-series-central-ducted-cfg-459",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-460",
      slug: "ducane-4hp18v-series-central-ducted-cfg-460",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-461",
      slug: "ducane-4hp18v-series-central-ducted-cfg-461",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-462",
      slug: "ducane-4hp18v-series-central-ducted-cfg-462",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-463",
      slug: "ducane-4hp18v-series-central-ducted-cfg-463",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-464",
      slug: "ducane-4hp18v-series-central-ducted-cfg-464",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-465",
      slug: "ducane-4hp18v-series-central-ducted-cfg-465",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-466",
      slug: "ducane-4hp18v-series-central-ducted-cfg-466",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-467",
      slug: "ducane-4hp18v-series-central-ducted-cfg-467",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v60p",
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
      id: "ducane-4hp18v-series-central-ducted-cfg-468",
      slug: "ducane-4hp18v-series-central-ducted-cfg-468",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-469",
      slug: "ducane-4hp18v-series-central-ducted-cfg-469",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-470",
      slug: "ducane-4hp18v-series-central-ducted-cfg-470",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-471",
      slug: "ducane-4hp18v-series-central-ducted-cfg-471",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-472",
      slug: "ducane-4hp18v-series-central-ducted-cfg-472",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-473",
      slug: "ducane-4hp18v-series-central-ducted-cfg-473",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-474",
      slug: "ducane-4hp18v-series-central-ducted-cfg-474",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-475",
      slug: "ducane-4hp18v-series-central-ducted-cfg-475",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-476",
      slug: "ducane-4hp18v-series-central-ducted-cfg-476",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4hp18v-series-central-ducted-cfg-477",
      slug: "ducane-4hp18v-series-central-ducted-cfg-477",
      modelId: "ducane-4hp18v-series-central-ducted",
      outdoorUnitId: "ducane-4hp18v36p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-4dh-series-wall-single-cfg-1",
      slug: "ducane-4dh-series-wall-single-cfg-1",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s12s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-2",
      slug: "ducane-4dh-series-wall-single-cfg-2",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-3",
      slug: "ducane-4dh-series-wall-single-cfg-3",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-4",
      slug: "ducane-4dh-series-wall-single-cfg-4",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s12s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-5",
      slug: "ducane-4dh-series-wall-single-cfg-5",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-6",
      slug: "ducane-4dh-series-wall-single-cfg-6",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-7",
      slug: "ducane-4dh-series-wall-single-cfg-7",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s12s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-8",
      slug: "ducane-4dh-series-wall-single-cfg-8",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-9",
      slug: "ducane-4dh-series-wall-single-cfg-9",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-10",
      slug: "ducane-4dh-series-wall-single-cfg-10",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s12s-1l",
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
      id: "ducane-4dh-series-wall-single-cfg-11",
      slug: "ducane-4dh-series-wall-single-cfg-11",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhps209s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-12",
      slug: "ducane-4dh-series-wall-single-cfg-12",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhv2s09s-1l",
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
      id: "ducane-4dh-series-wall-single-cfg-13",
      slug: "ducane-4dh-series-wall-single-cfg-13",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhv2s09s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-14",
      slug: "ducane-4dh-series-wall-single-cfg-14",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-15",
      slug: "ducane-4dh-series-wall-single-cfg-15",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-16",
      slug: "ducane-4dh-series-wall-single-cfg-16",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-17",
      slug: "ducane-4dh-series-wall-single-cfg-17",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-18",
      slug: "ducane-4dh-series-wall-single-cfg-18",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-19",
      slug: "ducane-4dh-series-wall-single-cfg-19",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-20",
      slug: "ducane-4dh-series-wall-single-cfg-20",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s30m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-21",
      slug: "ducane-4dh-series-wall-single-cfg-21",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s30m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-22",
      slug: "ducane-4dh-series-wall-single-cfg-22",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s30m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-23",
      slug: "ducane-4dh-series-wall-single-cfg-23",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s36m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-24",
      slug: "ducane-4dh-series-wall-single-cfg-24",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s48m-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-25",
      slug: "ducane-4dh-series-wall-single-cfg-25",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s12s-1l",
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
      id: "ducane-4dh-series-wall-single-cfg-26",
      slug: "ducane-4dh-series-wall-single-cfg-26",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhps209s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-27",
      slug: "ducane-4dh-series-wall-single-cfg-27",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s12s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-28",
      slug: "ducane-4dh-series-wall-single-cfg-28",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-29",
      slug: "ducane-4dh-series-wall-single-cfg-29",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-30",
      slug: "ducane-4dh-series-wall-single-cfg-30",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhps209s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-31",
      slug: "ducane-4dh-series-wall-single-cfg-31",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s12s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-32",
      slug: "ducane-4dh-series-wall-single-cfg-32",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-33",
      slug: "ducane-4dh-series-wall-single-cfg-33",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-34",
      slug: "ducane-4dh-series-wall-single-cfg-34",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhps209s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-35",
      slug: "ducane-4dh-series-wall-single-cfg-35",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s12s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-36",
      slug: "ducane-4dh-series-wall-single-cfg-36",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s18s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-37",
      slug: "ducane-4dh-series-wall-single-cfg-37",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhp2s24s-1p",
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
      id: "ducane-4dh-series-wall-single-cfg-38",
      slug: "ducane-4dh-series-wall-single-cfg-38",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhv2s09s-1l",
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
      id: "ducane-4dh-series-wall-single-cfg-39",
      slug: "ducane-4dh-series-wall-single-cfg-39",
      modelId: "ducane-4dh-series-wall-single",
      outdoorUnitId: "ducane-4dhv2s09s-1p",
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
      id: "ducane-standard-wall-single-cfg-1",
      slug: "ducane-standard-wall-single-cfg-1",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhv2s12s-1l",
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
      id: "ducane-standard-wall-single-cfg-2",
      slug: "ducane-standard-wall-single-cfg-2",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhv2s12s-1p",
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
      id: "ducane-standard-wall-single-cfg-3",
      slug: "ducane-standard-wall-single-cfg-3",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhv2s18s-1p",
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
      id: "ducane-standard-wall-single-cfg-4",
      slug: "ducane-standard-wall-single-cfg-4",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhv2s24s-1p",
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
      id: "ducane-standard-wall-single-cfg-5",
      slug: "ducane-standard-wall-single-cfg-5",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s36s-1p",
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
      id: "ducane-standard-wall-single-cfg-6",
      slug: "ducane-standard-wall-single-cfg-6",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s48s-1p",
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
      id: "ducane-standard-wall-single-cfg-7",
      slug: "ducane-standard-wall-single-cfg-7",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s36s-1p",
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
      id: "ducane-standard-wall-single-cfg-8",
      slug: "ducane-standard-wall-single-cfg-8",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s48s-1p",
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
      id: "ducane-standard-wall-single-cfg-9",
      slug: "ducane-standard-wall-single-cfg-9",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s30s-1p",
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
      id: "ducane-standard-wall-single-cfg-10",
      slug: "ducane-standard-wall-single-cfg-10",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s36s-1p",
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
      id: "ducane-standard-wall-single-cfg-11",
      slug: "ducane-standard-wall-single-cfg-11",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s48s-1p",
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
      id: "ducane-standard-wall-single-cfg-12",
      slug: "ducane-standard-wall-single-cfg-12",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s36s-1p",
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
      id: "ducane-standard-wall-single-cfg-13",
      slug: "ducane-standard-wall-single-cfg-13",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhp2s48s-1p",
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
      id: "ducane-standard-wall-single-cfg-14",
      slug: "ducane-standard-wall-single-cfg-14",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhv2s12s-1l",
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
      id: "ducane-standard-wall-single-cfg-15",
      slug: "ducane-standard-wall-single-cfg-15",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhv2s12s-1p",
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
      id: "ducane-standard-wall-single-cfg-16",
      slug: "ducane-standard-wall-single-cfg-16",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhv2s18s-1p",
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
      id: "ducane-standard-wall-single-cfg-17",
      slug: "ducane-standard-wall-single-cfg-17",
      modelId: "ducane-standard-wall-single",
      outdoorUnitId: "ducane-4dhv2s24s-1p",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-1",
      slug: "ducane-7scp18v-series-central-ducted-cfg-1",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-2",
      slug: "ducane-7scp18v-series-central-ducted-cfg-2",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-3",
      slug: "ducane-7scp18v-series-central-ducted-cfg-3",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-4",
      slug: "ducane-7scp18v-series-central-ducted-cfg-4",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-5",
      slug: "ducane-7scp18v-series-central-ducted-cfg-5",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 15.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-6",
      slug: "ducane-7scp18v-series-central-ducted-cfg-6",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-7",
      slug: "ducane-7scp18v-series-central-ducted-cfg-7",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-8",
      slug: "ducane-7scp18v-series-central-ducted-cfg-8",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-9",
      slug: "ducane-7scp18v-series-central-ducted-cfg-9",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-10",
      slug: "ducane-7scp18v-series-central-ducted-cfg-10",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-11",
      slug: "ducane-7scp18v-series-central-ducted-cfg-11",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-12",
      slug: "ducane-7scp18v-series-central-ducted-cfg-12",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 17.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-13",
      slug: "ducane-7scp18v-series-central-ducted-cfg-13",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-14",
      slug: "ducane-7scp18v-series-central-ducted-cfg-14",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-15",
      slug: "ducane-7scp18v-series-central-ducted-cfg-15",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-16",
      slug: "ducane-7scp18v-series-central-ducted-cfg-16",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-17",
      slug: "ducane-7scp18v-series-central-ducted-cfg-17",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-18",
      slug: "ducane-7scp18v-series-central-ducted-cfg-18",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35800,
      coolingCapacityMaxBtu: 35800,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-19",
      slug: "ducane-7scp18v-series-central-ducted-cfg-19",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-20",
      slug: "ducane-7scp18v-series-central-ducted-cfg-20",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 17.6,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-21",
      slug: "ducane-7scp18v-series-central-ducted-cfg-21",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.6,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-22",
      slug: "ducane-7scp18v-series-central-ducted-cfg-22",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-23",
      slug: "ducane-7scp18v-series-central-ducted-cfg-23",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-24",
      slug: "ducane-7scp18v-series-central-ducted-cfg-24",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-25",
      slug: "ducane-7scp18v-series-central-ducted-cfg-25",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-26",
      slug: "ducane-7scp18v-series-central-ducted-cfg-26",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-27",
      slug: "ducane-7scp18v-series-central-ducted-cfg-27",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-28",
      slug: "ducane-7scp18v-series-central-ducted-cfg-28",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-29",
      slug: "ducane-7scp18v-series-central-ducted-cfg-29",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-30",
      slug: "ducane-7scp18v-series-central-ducted-cfg-30",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-31",
      slug: "ducane-7scp18v-series-central-ducted-cfg-31",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-32",
      slug: "ducane-7scp18v-series-central-ducted-cfg-32",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-33",
      slug: "ducane-7scp18v-series-central-ducted-cfg-33",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-34",
      slug: "ducane-7scp18v-series-central-ducted-cfg-34",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-35",
      slug: "ducane-7scp18v-series-central-ducted-cfg-35",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-36",
      slug: "ducane-7scp18v-series-central-ducted-cfg-36",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-37",
      slug: "ducane-7scp18v-series-central-ducted-cfg-37",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-38",
      slug: "ducane-7scp18v-series-central-ducted-cfg-38",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-39",
      slug: "ducane-7scp18v-series-central-ducted-cfg-39",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-40",
      slug: "ducane-7scp18v-series-central-ducted-cfg-40",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-41",
      slug: "ducane-7scp18v-series-central-ducted-cfg-41",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-42",
      slug: "ducane-7scp18v-series-central-ducted-cfg-42",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-43",
      slug: "ducane-7scp18v-series-central-ducted-cfg-43",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-44",
      slug: "ducane-7scp18v-series-central-ducted-cfg-44",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-45",
      slug: "ducane-7scp18v-series-central-ducted-cfg-45",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-46",
      slug: "ducane-7scp18v-series-central-ducted-cfg-46",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-47",
      slug: "ducane-7scp18v-series-central-ducted-cfg-47",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-48",
      slug: "ducane-7scp18v-series-central-ducted-cfg-48",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-49",
      slug: "ducane-7scp18v-series-central-ducted-cfg-49",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-50",
      slug: "ducane-7scp18v-series-central-ducted-cfg-50",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-51",
      slug: "ducane-7scp18v-series-central-ducted-cfg-51",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-52",
      slug: "ducane-7scp18v-series-central-ducted-cfg-52",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-53",
      slug: "ducane-7scp18v-series-central-ducted-cfg-53",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-54",
      slug: "ducane-7scp18v-series-central-ducted-cfg-54",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-55",
      slug: "ducane-7scp18v-series-central-ducted-cfg-55",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-56",
      slug: "ducane-7scp18v-series-central-ducted-cfg-56",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-57",
      slug: "ducane-7scp18v-series-central-ducted-cfg-57",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-58",
      slug: "ducane-7scp18v-series-central-ducted-cfg-58",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-59",
      slug: "ducane-7scp18v-series-central-ducted-cfg-59",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-60",
      slug: "ducane-7scp18v-series-central-ducted-cfg-60",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-61",
      slug: "ducane-7scp18v-series-central-ducted-cfg-61",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-62",
      slug: "ducane-7scp18v-series-central-ducted-cfg-62",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-63",
      slug: "ducane-7scp18v-series-central-ducted-cfg-63",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55500,
      coolingCapacityMaxBtu: 55500,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-64",
      slug: "ducane-7scp18v-series-central-ducted-cfg-64",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-65",
      slug: "ducane-7scp18v-series-central-ducted-cfg-65",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-66",
      slug: "ducane-7scp18v-series-central-ducted-cfg-66",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-67",
      slug: "ducane-7scp18v-series-central-ducted-cfg-67",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.45,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-68",
      slug: "ducane-7scp18v-series-central-ducted-cfg-68",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-69",
      slug: "ducane-7scp18v-series-central-ducted-cfg-69",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.45,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-70",
      slug: "ducane-7scp18v-series-central-ducted-cfg-70",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-71",
      slug: "ducane-7scp18v-series-central-ducted-cfg-71",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-72",
      slug: "ducane-7scp18v-series-central-ducted-cfg-72",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-73",
      slug: "ducane-7scp18v-series-central-ducted-cfg-73",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-74",
      slug: "ducane-7scp18v-series-central-ducted-cfg-74",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-75",
      slug: "ducane-7scp18v-series-central-ducted-cfg-75",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-76",
      slug: "ducane-7scp18v-series-central-ducted-cfg-76",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-77",
      slug: "ducane-7scp18v-series-central-ducted-cfg-77",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-78",
      slug: "ducane-7scp18v-series-central-ducted-cfg-78",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-79",
      slug: "ducane-7scp18v-series-central-ducted-cfg-79",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-80",
      slug: "ducane-7scp18v-series-central-ducted-cfg-80",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-81",
      slug: "ducane-7scp18v-series-central-ducted-cfg-81",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-82",
      slug: "ducane-7scp18v-series-central-ducted-cfg-82",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-83",
      slug: "ducane-7scp18v-series-central-ducted-cfg-83",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-84",
      slug: "ducane-7scp18v-series-central-ducted-cfg-84",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-85",
      slug: "ducane-7scp18v-series-central-ducted-cfg-85",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-86",
      slug: "ducane-7scp18v-series-central-ducted-cfg-86",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-87",
      slug: "ducane-7scp18v-series-central-ducted-cfg-87",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-88",
      slug: "ducane-7scp18v-series-central-ducted-cfg-88",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-89",
      slug: "ducane-7scp18v-series-central-ducted-cfg-89",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-90",
      slug: "ducane-7scp18v-series-central-ducted-cfg-90",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-91",
      slug: "ducane-7scp18v-series-central-ducted-cfg-91",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-92",
      slug: "ducane-7scp18v-series-central-ducted-cfg-92",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-93",
      slug: "ducane-7scp18v-series-central-ducted-cfg-93",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-94",
      slug: "ducane-7scp18v-series-central-ducted-cfg-94",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-95",
      slug: "ducane-7scp18v-series-central-ducted-cfg-95",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-96",
      slug: "ducane-7scp18v-series-central-ducted-cfg-96",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-97",
      slug: "ducane-7scp18v-series-central-ducted-cfg-97",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-98",
      slug: "ducane-7scp18v-series-central-ducted-cfg-98",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-99",
      slug: "ducane-7scp18v-series-central-ducted-cfg-99",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-100",
      slug: "ducane-7scp18v-series-central-ducted-cfg-100",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 16.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-101",
      slug: "ducane-7scp18v-series-central-ducted-cfg-101",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-102",
      slug: "ducane-7scp18v-series-central-ducted-cfg-102",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.05,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-103",
      slug: "ducane-7scp18v-series-central-ducted-cfg-103",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.05,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-104",
      slug: "ducane-7scp18v-series-central-ducted-cfg-104",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-105",
      slug: "ducane-7scp18v-series-central-ducted-cfg-105",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-106",
      slug: "ducane-7scp18v-series-central-ducted-cfg-106",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.45,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-107",
      slug: "ducane-7scp18v-series-central-ducted-cfg-107",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.35,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-108",
      slug: "ducane-7scp18v-series-central-ducted-cfg-108",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.85,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-109",
      slug: "ducane-7scp18v-series-central-ducted-cfg-109",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.85,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-110",
      slug: "ducane-7scp18v-series-central-ducted-cfg-110",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-111",
      slug: "ducane-7scp18v-series-central-ducted-cfg-111",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-112",
      slug: "ducane-7scp18v-series-central-ducted-cfg-112",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-113",
      slug: "ducane-7scp18v-series-central-ducted-cfg-113",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-114",
      slug: "ducane-7scp18v-series-central-ducted-cfg-114",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-115",
      slug: "ducane-7scp18v-series-central-ducted-cfg-115",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-116",
      slug: "ducane-7scp18v-series-central-ducted-cfg-116",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.05,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-117",
      slug: "ducane-7scp18v-series-central-ducted-cfg-117",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.45,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-118",
      slug: "ducane-7scp18v-series-central-ducted-cfg-118",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.45,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-119",
      slug: "ducane-7scp18v-series-central-ducted-cfg-119",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-120",
      slug: "ducane-7scp18v-series-central-ducted-cfg-120",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-121",
      slug: "ducane-7scp18v-series-central-ducted-cfg-121",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-122",
      slug: "ducane-7scp18v-series-central-ducted-cfg-122",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-123",
      slug: "ducane-7scp18v-series-central-ducted-cfg-123",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-124",
      slug: "ducane-7scp18v-series-central-ducted-cfg-124",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-125",
      slug: "ducane-7scp18v-series-central-ducted-cfg-125",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-126",
      slug: "ducane-7scp18v-series-central-ducted-cfg-126",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-127",
      slug: "ducane-7scp18v-series-central-ducted-cfg-127",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.35,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-128",
      slug: "ducane-7scp18v-series-central-ducted-cfg-128",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-129",
      slug: "ducane-7scp18v-series-central-ducted-cfg-129",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.35,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-130",
      slug: "ducane-7scp18v-series-central-ducted-cfg-130",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-131",
      slug: "ducane-7scp18v-series-central-ducted-cfg-131",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-132",
      slug: "ducane-7scp18v-series-central-ducted-cfg-132",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-133",
      slug: "ducane-7scp18v-series-central-ducted-cfg-133",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-134",
      slug: "ducane-7scp18v-series-central-ducted-cfg-134",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-135",
      slug: "ducane-7scp18v-series-central-ducted-cfg-135",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-136",
      slug: "ducane-7scp18v-series-central-ducted-cfg-136",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 17.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-137",
      slug: "ducane-7scp18v-series-central-ducted-cfg-137",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-138",
      slug: "ducane-7scp18v-series-central-ducted-cfg-138",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.75,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-139",
      slug: "ducane-7scp18v-series-central-ducted-cfg-139",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.75,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-140",
      slug: "ducane-7scp18v-series-central-ducted-cfg-140",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-141",
      slug: "ducane-7scp18v-series-central-ducted-cfg-141",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-142",
      slug: "ducane-7scp18v-series-central-ducted-cfg-142",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.45,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-143",
      slug: "ducane-7scp18v-series-central-ducted-cfg-143",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-144",
      slug: "ducane-7scp18v-series-central-ducted-cfg-144",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-145",
      slug: "ducane-7scp18v-series-central-ducted-cfg-145",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-146",
      slug: "ducane-7scp18v-series-central-ducted-cfg-146",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.2,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-147",
      slug: "ducane-7scp18v-series-central-ducted-cfg-147",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-148",
      slug: "ducane-7scp18v-series-central-ducted-cfg-148",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-149",
      slug: "ducane-7scp18v-series-central-ducted-cfg-149",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.15,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-150",
      slug: "ducane-7scp18v-series-central-ducted-cfg-150",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.15,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-151",
      slug: "ducane-7scp18v-series-central-ducted-cfg-151",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.85,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-152",
      slug: "ducane-7scp18v-series-central-ducted-cfg-152",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.85,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-153",
      slug: "ducane-7scp18v-series-central-ducted-cfg-153",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-154",
      slug: "ducane-7scp18v-series-central-ducted-cfg-154",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-155",
      slug: "ducane-7scp18v-series-central-ducted-cfg-155",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-156",
      slug: "ducane-7scp18v-series-central-ducted-cfg-156",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-157",
      slug: "ducane-7scp18v-series-central-ducted-cfg-157",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.35,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-158",
      slug: "ducane-7scp18v-series-central-ducted-cfg-158",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.55,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-159",
      slug: "ducane-7scp18v-series-central-ducted-cfg-159",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-160",
      slug: "ducane-7scp18v-series-central-ducted-cfg-160",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-161",
      slug: "ducane-7scp18v-series-central-ducted-cfg-161",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-162",
      slug: "ducane-7scp18v-series-central-ducted-cfg-162",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-163",
      slug: "ducane-7scp18v-series-central-ducted-cfg-163",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-164",
      slug: "ducane-7scp18v-series-central-ducted-cfg-164",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-165",
      slug: "ducane-7scp18v-series-central-ducted-cfg-165",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-166",
      slug: "ducane-7scp18v-series-central-ducted-cfg-166",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-167",
      slug: "ducane-7scp18v-series-central-ducted-cfg-167",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-168",
      slug: "ducane-7scp18v-series-central-ducted-cfg-168",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-169",
      slug: "ducane-7scp18v-series-central-ducted-cfg-169",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-170",
      slug: "ducane-7scp18v-series-central-ducted-cfg-170",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-171",
      slug: "ducane-7scp18v-series-central-ducted-cfg-171",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-172",
      slug: "ducane-7scp18v-series-central-ducted-cfg-172",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-173",
      slug: "ducane-7scp18v-series-central-ducted-cfg-173",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-174",
      slug: "ducane-7scp18v-series-central-ducted-cfg-174",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-175",
      slug: "ducane-7scp18v-series-central-ducted-cfg-175",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-176",
      slug: "ducane-7scp18v-series-central-ducted-cfg-176",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-177",
      slug: "ducane-7scp18v-series-central-ducted-cfg-177",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-178",
      slug: "ducane-7scp18v-series-central-ducted-cfg-178",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-179",
      slug: "ducane-7scp18v-series-central-ducted-cfg-179",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.25,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-180",
      slug: "ducane-7scp18v-series-central-ducted-cfg-180",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-181",
      slug: "ducane-7scp18v-series-central-ducted-cfg-181",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-182",
      slug: "ducane-7scp18v-series-central-ducted-cfg-182",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 16.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-183",
      slug: "ducane-7scp18v-series-central-ducted-cfg-183",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 16.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-184",
      slug: "ducane-7scp18v-series-central-ducted-cfg-184",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-185",
      slug: "ducane-7scp18v-series-central-ducted-cfg-185",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 16.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-186",
      slug: "ducane-7scp18v-series-central-ducted-cfg-186",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-187",
      slug: "ducane-7scp18v-series-central-ducted-cfg-187",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-188",
      slug: "ducane-7scp18v-series-central-ducted-cfg-188",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-189",
      slug: "ducane-7scp18v-series-central-ducted-cfg-189",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-190",
      slug: "ducane-7scp18v-series-central-ducted-cfg-190",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-191",
      slug: "ducane-7scp18v-series-central-ducted-cfg-191",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-192",
      slug: "ducane-7scp18v-series-central-ducted-cfg-192",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-193",
      slug: "ducane-7scp18v-series-central-ducted-cfg-193",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-194",
      slug: "ducane-7scp18v-series-central-ducted-cfg-194",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-195",
      slug: "ducane-7scp18v-series-central-ducted-cfg-195",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-196",
      slug: "ducane-7scp18v-series-central-ducted-cfg-196",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-197",
      slug: "ducane-7scp18v-series-central-ducted-cfg-197",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-198",
      slug: "ducane-7scp18v-series-central-ducted-cfg-198",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-199",
      slug: "ducane-7scp18v-series-central-ducted-cfg-199",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-200",
      slug: "ducane-7scp18v-series-central-ducted-cfg-200",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-201",
      slug: "ducane-7scp18v-series-central-ducted-cfg-201",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-202",
      slug: "ducane-7scp18v-series-central-ducted-cfg-202",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 16.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-203",
      slug: "ducane-7scp18v-series-central-ducted-cfg-203",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-204",
      slug: "ducane-7scp18v-series-central-ducted-cfg-204",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-205",
      slug: "ducane-7scp18v-series-central-ducted-cfg-205",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-206",
      slug: "ducane-7scp18v-series-central-ducted-cfg-206",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-207",
      slug: "ducane-7scp18v-series-central-ducted-cfg-207",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-208",
      slug: "ducane-7scp18v-series-central-ducted-cfg-208",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-209",
      slug: "ducane-7scp18v-series-central-ducted-cfg-209",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-210",
      slug: "ducane-7scp18v-series-central-ducted-cfg-210",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.75,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-211",
      slug: "ducane-7scp18v-series-central-ducted-cfg-211",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.75,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-212",
      slug: "ducane-7scp18v-series-central-ducted-cfg-212",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18.6,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-213",
      slug: "ducane-7scp18v-series-central-ducted-cfg-213",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-214",
      slug: "ducane-7scp18v-series-central-ducted-cfg-214",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-215",
      slug: "ducane-7scp18v-series-central-ducted-cfg-215",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-216",
      slug: "ducane-7scp18v-series-central-ducted-cfg-216",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-217",
      slug: "ducane-7scp18v-series-central-ducted-cfg-217",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-218",
      slug: "ducane-7scp18v-series-central-ducted-cfg-218",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-219",
      slug: "ducane-7scp18v-series-central-ducted-cfg-219",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-220",
      slug: "ducane-7scp18v-series-central-ducted-cfg-220",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-221",
      slug: "ducane-7scp18v-series-central-ducted-cfg-221",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-222",
      slug: "ducane-7scp18v-series-central-ducted-cfg-222",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 18.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-223",
      slug: "ducane-7scp18v-series-central-ducted-cfg-223",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 16.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-224",
      slug: "ducane-7scp18v-series-central-ducted-cfg-224",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 16.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-225",
      slug: "ducane-7scp18v-series-central-ducted-cfg-225",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 16.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-226",
      slug: "ducane-7scp18v-series-central-ducted-cfg-226",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-227",
      slug: "ducane-7scp18v-series-central-ducted-cfg-227",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-228",
      slug: "ducane-7scp18v-series-central-ducted-cfg-228",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 16.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-229",
      slug: "ducane-7scp18v-series-central-ducted-cfg-229",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-230",
      slug: "ducane-7scp18v-series-central-ducted-cfg-230",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-231",
      slug: "ducane-7scp18v-series-central-ducted-cfg-231",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 16.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-232",
      slug: "ducane-7scp18v-series-central-ducted-cfg-232",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 16.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-233",
      slug: "ducane-7scp18v-series-central-ducted-cfg-233",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32600,
      coolingCapacityMaxBtu: 32600,
      seer2: 17.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-234",
      slug: "ducane-7scp18v-series-central-ducted-cfg-234",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-235",
      slug: "ducane-7scp18v-series-central-ducted-cfg-235",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 17.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-236",
      slug: "ducane-7scp18v-series-central-ducted-cfg-236",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32200,
      coolingCapacityMaxBtu: 32200,
      seer2: 17.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-237",
      slug: "ducane-7scp18v-series-central-ducted-cfg-237",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-238",
      slug: "ducane-7scp18v-series-central-ducted-cfg-238",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-239",
      slug: "ducane-7scp18v-series-central-ducted-cfg-239",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.45,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-240",
      slug: "ducane-7scp18v-series-central-ducted-cfg-240",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-241",
      slug: "ducane-7scp18v-series-central-ducted-cfg-241",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-242",
      slug: "ducane-7scp18v-series-central-ducted-cfg-242",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-243",
      slug: "ducane-7scp18v-series-central-ducted-cfg-243",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 18.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-244",
      slug: "ducane-7scp18v-series-central-ducted-cfg-244",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.25,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-245",
      slug: "ducane-7scp18v-series-central-ducted-cfg-245",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-246",
      slug: "ducane-7scp18v-series-central-ducted-cfg-246",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-247",
      slug: "ducane-7scp18v-series-central-ducted-cfg-247",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-248",
      slug: "ducane-7scp18v-series-central-ducted-cfg-248",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-249",
      slug: "ducane-7scp18v-series-central-ducted-cfg-249",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.05,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-250",
      slug: "ducane-7scp18v-series-central-ducted-cfg-250",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-251",
      slug: "ducane-7scp18v-series-central-ducted-cfg-251",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-252",
      slug: "ducane-7scp18v-series-central-ducted-cfg-252",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-253",
      slug: "ducane-7scp18v-series-central-ducted-cfg-253",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 16.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-254",
      slug: "ducane-7scp18v-series-central-ducted-cfg-254",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-255",
      slug: "ducane-7scp18v-series-central-ducted-cfg-255",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-256",
      slug: "ducane-7scp18v-series-central-ducted-cfg-256",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.85,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-257",
      slug: "ducane-7scp18v-series-central-ducted-cfg-257",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-258",
      slug: "ducane-7scp18v-series-central-ducted-cfg-258",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-259",
      slug: "ducane-7scp18v-series-central-ducted-cfg-259",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-260",
      slug: "ducane-7scp18v-series-central-ducted-cfg-260",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-261",
      slug: "ducane-7scp18v-series-central-ducted-cfg-261",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-262",
      slug: "ducane-7scp18v-series-central-ducted-cfg-262",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-263",
      slug: "ducane-7scp18v-series-central-ducted-cfg-263",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-264",
      slug: "ducane-7scp18v-series-central-ducted-cfg-264",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-265",
      slug: "ducane-7scp18v-series-central-ducted-cfg-265",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-266",
      slug: "ducane-7scp18v-series-central-ducted-cfg-266",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-267",
      slug: "ducane-7scp18v-series-central-ducted-cfg-267",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-268",
      slug: "ducane-7scp18v-series-central-ducted-cfg-268",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-269",
      slug: "ducane-7scp18v-series-central-ducted-cfg-269",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-270",
      slug: "ducane-7scp18v-series-central-ducted-cfg-270",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-271",
      slug: "ducane-7scp18v-series-central-ducted-cfg-271",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-272",
      slug: "ducane-7scp18v-series-central-ducted-cfg-272",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 17.05,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-273",
      slug: "ducane-7scp18v-series-central-ducted-cfg-273",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-274",
      slug: "ducane-7scp18v-series-central-ducted-cfg-274",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-275",
      slug: "ducane-7scp18v-series-central-ducted-cfg-275",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.85,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-276",
      slug: "ducane-7scp18v-series-central-ducted-cfg-276",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.55,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-277",
      slug: "ducane-7scp18v-series-central-ducted-cfg-277",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.55,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-278",
      slug: "ducane-7scp18v-series-central-ducted-cfg-278",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-279",
      slug: "ducane-7scp18v-series-central-ducted-cfg-279",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-280",
      slug: "ducane-7scp18v-series-central-ducted-cfg-280",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-281",
      slug: "ducane-7scp18v-series-central-ducted-cfg-281",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.25,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-282",
      slug: "ducane-7scp18v-series-central-ducted-cfg-282",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-283",
      slug: "ducane-7scp18v-series-central-ducted-cfg-283",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-284",
      slug: "ducane-7scp18v-series-central-ducted-cfg-284",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-285",
      slug: "ducane-7scp18v-series-central-ducted-cfg-285",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-286",
      slug: "ducane-7scp18v-series-central-ducted-cfg-286",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-287",
      slug: "ducane-7scp18v-series-central-ducted-cfg-287",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-288",
      slug: "ducane-7scp18v-series-central-ducted-cfg-288",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-289",
      slug: "ducane-7scp18v-series-central-ducted-cfg-289",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-290",
      slug: "ducane-7scp18v-series-central-ducted-cfg-290",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-291",
      slug: "ducane-7scp18v-series-central-ducted-cfg-291",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-292",
      slug: "ducane-7scp18v-series-central-ducted-cfg-292",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-293",
      slug: "ducane-7scp18v-series-central-ducted-cfg-293",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42500,
      coolingCapacityMaxBtu: 42500,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-294",
      slug: "ducane-7scp18v-series-central-ducted-cfg-294",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-295",
      slug: "ducane-7scp18v-series-central-ducted-cfg-295",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-296",
      slug: "ducane-7scp18v-series-central-ducted-cfg-296",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-297",
      slug: "ducane-7scp18v-series-central-ducted-cfg-297",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-298",
      slug: "ducane-7scp18v-series-central-ducted-cfg-298",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-299",
      slug: "ducane-7scp18v-series-central-ducted-cfg-299",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-300",
      slug: "ducane-7scp18v-series-central-ducted-cfg-300",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-301",
      slug: "ducane-7scp18v-series-central-ducted-cfg-301",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-302",
      slug: "ducane-7scp18v-series-central-ducted-cfg-302",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-303",
      slug: "ducane-7scp18v-series-central-ducted-cfg-303",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-304",
      slug: "ducane-7scp18v-series-central-ducted-cfg-304",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 17.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-305",
      slug: "ducane-7scp18v-series-central-ducted-cfg-305",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-306",
      slug: "ducane-7scp18v-series-central-ducted-cfg-306",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-307",
      slug: "ducane-7scp18v-series-central-ducted-cfg-307",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-308",
      slug: "ducane-7scp18v-series-central-ducted-cfg-308",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.85,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-309",
      slug: "ducane-7scp18v-series-central-ducted-cfg-309",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.85,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-310",
      slug: "ducane-7scp18v-series-central-ducted-cfg-310",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-311",
      slug: "ducane-7scp18v-series-central-ducted-cfg-311",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 17.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-312",
      slug: "ducane-7scp18v-series-central-ducted-cfg-312",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-313",
      slug: "ducane-7scp18v-series-central-ducted-cfg-313",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-314",
      slug: "ducane-7scp18v-series-central-ducted-cfg-314",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-315",
      slug: "ducane-7scp18v-series-central-ducted-cfg-315",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-316",
      slug: "ducane-7scp18v-series-central-ducted-cfg-316",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-317",
      slug: "ducane-7scp18v-series-central-ducted-cfg-317",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-318",
      slug: "ducane-7scp18v-series-central-ducted-cfg-318",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-319",
      slug: "ducane-7scp18v-series-central-ducted-cfg-319",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-320",
      slug: "ducane-7scp18v-series-central-ducted-cfg-320",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-321",
      slug: "ducane-7scp18v-series-central-ducted-cfg-321",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-322",
      slug: "ducane-7scp18v-series-central-ducted-cfg-322",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 17.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-323",
      slug: "ducane-7scp18v-series-central-ducted-cfg-323",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 15.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-324",
      slug: "ducane-7scp18v-series-central-ducted-cfg-324",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-325",
      slug: "ducane-7scp18v-series-central-ducted-cfg-325",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-326",
      slug: "ducane-7scp18v-series-central-ducted-cfg-326",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-327",
      slug: "ducane-7scp18v-series-central-ducted-cfg-327",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-328",
      slug: "ducane-7scp18v-series-central-ducted-cfg-328",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-329",
      slug: "ducane-7scp18v-series-central-ducted-cfg-329",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 15.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-330",
      slug: "ducane-7scp18v-series-central-ducted-cfg-330",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-331",
      slug: "ducane-7scp18v-series-central-ducted-cfg-331",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-332",
      slug: "ducane-7scp18v-series-central-ducted-cfg-332",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-333",
      slug: "ducane-7scp18v-series-central-ducted-cfg-333",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-334",
      slug: "ducane-7scp18v-series-central-ducted-cfg-334",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-335",
      slug: "ducane-7scp18v-series-central-ducted-cfg-335",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-336",
      slug: "ducane-7scp18v-series-central-ducted-cfg-336",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-337",
      slug: "ducane-7scp18v-series-central-ducted-cfg-337",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 15.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-338",
      slug: "ducane-7scp18v-series-central-ducted-cfg-338",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-339",
      slug: "ducane-7scp18v-series-central-ducted-cfg-339",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-340",
      slug: "ducane-7scp18v-series-central-ducted-cfg-340",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-341",
      slug: "ducane-7scp18v-series-central-ducted-cfg-341",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-342",
      slug: "ducane-7scp18v-series-central-ducted-cfg-342",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-343",
      slug: "ducane-7scp18v-series-central-ducted-cfg-343",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-344",
      slug: "ducane-7scp18v-series-central-ducted-cfg-344",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.9,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-345",
      slug: "ducane-7scp18v-series-central-ducted-cfg-345",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.9,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-346",
      slug: "ducane-7scp18v-series-central-ducted-cfg-346",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: 15.7,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-347",
      slug: "ducane-7scp18v-series-central-ducted-cfg-347",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-348",
      slug: "ducane-7scp18v-series-central-ducted-cfg-348",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.7,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-349",
      slug: "ducane-7scp18v-series-central-ducted-cfg-349",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.7,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-350",
      slug: "ducane-7scp18v-series-central-ducted-cfg-350",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-351",
      slug: "ducane-7scp18v-series-central-ducted-cfg-351",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-352",
      slug: "ducane-7scp18v-series-central-ducted-cfg-352",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.35,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-353",
      slug: "ducane-7scp18v-series-central-ducted-cfg-353",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.85,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-354",
      slug: "ducane-7scp18v-series-central-ducted-cfg-354",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-355",
      slug: "ducane-7scp18v-series-central-ducted-cfg-355",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-356",
      slug: "ducane-7scp18v-series-central-ducted-cfg-356",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 17,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-357",
      slug: "ducane-7scp18v-series-central-ducted-cfg-357",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.85,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-358",
      slug: "ducane-7scp18v-series-central-ducted-cfg-358",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.85,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-359",
      slug: "ducane-7scp18v-series-central-ducted-cfg-359",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
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
      id: "ducane-7scp18v-series-central-ducted-cfg-360",
      slug: "ducane-7scp18v-series-central-ducted-cfg-360",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-361",
      slug: "ducane-7scp18v-series-central-ducted-cfg-361",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-362",
      slug: "ducane-7scp18v-series-central-ducted-cfg-362",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.6,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-363",
      slug: "ducane-7scp18v-series-central-ducted-cfg-363",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-364",
      slug: "ducane-7scp18v-series-central-ducted-cfg-364",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-365",
      slug: "ducane-7scp18v-series-central-ducted-cfg-365",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-366",
      slug: "ducane-7scp18v-series-central-ducted-cfg-366",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-367",
      slug: "ducane-7scp18v-series-central-ducted-cfg-367",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-368",
      slug: "ducane-7scp18v-series-central-ducted-cfg-368",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23600,
      coolingCapacityMaxBtu: 23600,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-369",
      slug: "ducane-7scp18v-series-central-ducted-cfg-369",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-370",
      slug: "ducane-7scp18v-series-central-ducted-cfg-370",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-371",
      slug: "ducane-7scp18v-series-central-ducted-cfg-371",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.6,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-372",
      slug: "ducane-7scp18v-series-central-ducted-cfg-372",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-373",
      slug: "ducane-7scp18v-series-central-ducted-cfg-373",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-374",
      slug: "ducane-7scp18v-series-central-ducted-cfg-374",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-375",
      slug: "ducane-7scp18v-series-central-ducted-cfg-375",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.35,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-376",
      slug: "ducane-7scp18v-series-central-ducted-cfg-376",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.85,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-377",
      slug: "ducane-7scp18v-series-central-ducted-cfg-377",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-378",
      slug: "ducane-7scp18v-series-central-ducted-cfg-378",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.55,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-379",
      slug: "ducane-7scp18v-series-central-ducted-cfg-379",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-380",
      slug: "ducane-7scp18v-series-central-ducted-cfg-380",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-381",
      slug: "ducane-7scp18v-series-central-ducted-cfg-381",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-382",
      slug: "ducane-7scp18v-series-central-ducted-cfg-382",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-383",
      slug: "ducane-7scp18v-series-central-ducted-cfg-383",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-384",
      slug: "ducane-7scp18v-series-central-ducted-cfg-384",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-385",
      slug: "ducane-7scp18v-series-central-ducted-cfg-385",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 16.9,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-386",
      slug: "ducane-7scp18v-series-central-ducted-cfg-386",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v24p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23800,
      coolingCapacityMaxBtu: 23800,
      seer2: 17,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-387",
      slug: "ducane-7scp18v-series-central-ducted-cfg-387",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-388",
      slug: "ducane-7scp18v-series-central-ducted-cfg-388",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-389",
      slug: "ducane-7scp18v-series-central-ducted-cfg-389",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-390",
      slug: "ducane-7scp18v-series-central-ducted-cfg-390",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.3,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-391",
      slug: "ducane-7scp18v-series-central-ducted-cfg-391",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-392",
      slug: "ducane-7scp18v-series-central-ducted-cfg-392",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-393",
      slug: "ducane-7scp18v-series-central-ducted-cfg-393",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-394",
      slug: "ducane-7scp18v-series-central-ducted-cfg-394",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-395",
      slug: "ducane-7scp18v-series-central-ducted-cfg-395",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-396",
      slug: "ducane-7scp18v-series-central-ducted-cfg-396",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-397",
      slug: "ducane-7scp18v-series-central-ducted-cfg-397",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-398",
      slug: "ducane-7scp18v-series-central-ducted-cfg-398",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-399",
      slug: "ducane-7scp18v-series-central-ducted-cfg-399",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-400",
      slug: "ducane-7scp18v-series-central-ducted-cfg-400",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 18.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-401",
      slug: "ducane-7scp18v-series-central-ducted-cfg-401",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-402",
      slug: "ducane-7scp18v-series-central-ducted-cfg-402",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-403",
      slug: "ducane-7scp18v-series-central-ducted-cfg-403",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 17.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-404",
      slug: "ducane-7scp18v-series-central-ducted-cfg-404",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-405",
      slug: "ducane-7scp18v-series-central-ducted-cfg-405",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 18.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-406",
      slug: "ducane-7scp18v-series-central-ducted-cfg-406",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-407",
      slug: "ducane-7scp18v-series-central-ducted-cfg-407",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-408",
      slug: "ducane-7scp18v-series-central-ducted-cfg-408",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-409",
      slug: "ducane-7scp18v-series-central-ducted-cfg-409",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-410",
      slug: "ducane-7scp18v-series-central-ducted-cfg-410",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-411",
      slug: "ducane-7scp18v-series-central-ducted-cfg-411",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-412",
      slug: "ducane-7scp18v-series-central-ducted-cfg-412",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-413",
      slug: "ducane-7scp18v-series-central-ducted-cfg-413",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32400,
      coolingCapacityMaxBtu: 32400,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-414",
      slug: "ducane-7scp18v-series-central-ducted-cfg-414",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-415",
      slug: "ducane-7scp18v-series-central-ducted-cfg-415",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-416",
      slug: "ducane-7scp18v-series-central-ducted-cfg-416",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.55,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-417",
      slug: "ducane-7scp18v-series-central-ducted-cfg-417",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 17.85,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-418",
      slug: "ducane-7scp18v-series-central-ducted-cfg-418",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-419",
      slug: "ducane-7scp18v-series-central-ducted-cfg-419",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: 17.35,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-420",
      slug: "ducane-7scp18v-series-central-ducted-cfg-420",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 17.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-421",
      slug: "ducane-7scp18v-series-central-ducted-cfg-421",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 16.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-422",
      slug: "ducane-7scp18v-series-central-ducted-cfg-422",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34800,
      coolingCapacityMaxBtu: 34800,
      seer2: 18.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-423",
      slug: "ducane-7scp18v-series-central-ducted-cfg-423",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 16.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-424",
      slug: "ducane-7scp18v-series-central-ducted-cfg-424",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-425",
      slug: "ducane-7scp18v-series-central-ducted-cfg-425",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.35,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-426",
      slug: "ducane-7scp18v-series-central-ducted-cfg-426",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-427",
      slug: "ducane-7scp18v-series-central-ducted-cfg-427",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 16.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-428",
      slug: "ducane-7scp18v-series-central-ducted-cfg-428",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 16.95,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-429",
      slug: "ducane-7scp18v-series-central-ducted-cfg-429",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34400,
      coolingCapacityMaxBtu: 34400,
      seer2: 17.4,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-430",
      slug: "ducane-7scp18v-series-central-ducted-cfg-430",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 17.25,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-431",
      slug: "ducane-7scp18v-series-central-ducted-cfg-431",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34600,
      coolingCapacityMaxBtu: 34600,
      seer2: 17.55,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-432",
      slug: "ducane-7scp18v-series-central-ducted-cfg-432",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 18.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-433",
      slug: "ducane-7scp18v-series-central-ducted-cfg-433",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35200,
      coolingCapacityMaxBtu: 35200,
      seer2: 17.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-434",
      slug: "ducane-7scp18v-series-central-ducted-cfg-434",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v36p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 17.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-435",
      slug: "ducane-7scp18v-series-central-ducted-cfg-435",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-436",
      slug: "ducane-7scp18v-series-central-ducted-cfg-436",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-437",
      slug: "ducane-7scp18v-series-central-ducted-cfg-437",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.7,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-438",
      slug: "ducane-7scp18v-series-central-ducted-cfg-438",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-439",
      slug: "ducane-7scp18v-series-central-ducted-cfg-439",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17.05,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-440",
      slug: "ducane-7scp18v-series-central-ducted-cfg-440",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-441",
      slug: "ducane-7scp18v-series-central-ducted-cfg-441",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-442",
      slug: "ducane-7scp18v-series-central-ducted-cfg-442",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-443",
      slug: "ducane-7scp18v-series-central-ducted-cfg-443",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.6,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-444",
      slug: "ducane-7scp18v-series-central-ducted-cfg-444",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-445",
      slug: "ducane-7scp18v-series-central-ducted-cfg-445",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-446",
      slug: "ducane-7scp18v-series-central-ducted-cfg-446",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.55,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-447",
      slug: "ducane-7scp18v-series-central-ducted-cfg-447",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 17.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-448",
      slug: "ducane-7scp18v-series-central-ducted-cfg-448",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.65,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-449",
      slug: "ducane-7scp18v-series-central-ducted-cfg-449",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.55,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-450",
      slug: "ducane-7scp18v-series-central-ducted-cfg-450",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.95,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-451",
      slug: "ducane-7scp18v-series-central-ducted-cfg-451",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-452",
      slug: "ducane-7scp18v-series-central-ducted-cfg-452",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-453",
      slug: "ducane-7scp18v-series-central-ducted-cfg-453",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-454",
      slug: "ducane-7scp18v-series-central-ducted-cfg-454",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-455",
      slug: "ducane-7scp18v-series-central-ducted-cfg-455",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-456",
      slug: "ducane-7scp18v-series-central-ducted-cfg-456",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-457",
      slug: "ducane-7scp18v-series-central-ducted-cfg-457",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-458",
      slug: "ducane-7scp18v-series-central-ducted-cfg-458",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-459",
      slug: "ducane-7scp18v-series-central-ducted-cfg-459",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.9,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-460",
      slug: "ducane-7scp18v-series-central-ducted-cfg-460",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-461",
      slug: "ducane-7scp18v-series-central-ducted-cfg-461",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-462",
      slug: "ducane-7scp18v-series-central-ducted-cfg-462",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.45,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-463",
      slug: "ducane-7scp18v-series-central-ducted-cfg-463",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-464",
      slug: "ducane-7scp18v-series-central-ducted-cfg-464",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 15.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-465",
      slug: "ducane-7scp18v-series-central-ducted-cfg-465",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-466",
      slug: "ducane-7scp18v-series-central-ducted-cfg-466",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43500,
      coolingCapacityMaxBtu: 43500,
      seer2: 16.15,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-467",
      slug: "ducane-7scp18v-series-central-ducted-cfg-467",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 17.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-468",
      slug: "ducane-7scp18v-series-central-ducted-cfg-468",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: 17.25,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-469",
      slug: "ducane-7scp18v-series-central-ducted-cfg-469",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-470",
      slug: "ducane-7scp18v-series-central-ducted-cfg-470",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 16.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-471",
      slug: "ducane-7scp18v-series-central-ducted-cfg-471",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-472",
      slug: "ducane-7scp18v-series-central-ducted-cfg-472",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 15.9,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-473",
      slug: "ducane-7scp18v-series-central-ducted-cfg-473",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 16,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-474",
      slug: "ducane-7scp18v-series-central-ducted-cfg-474",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 17.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-475",
      slug: "ducane-7scp18v-series-central-ducted-cfg-475",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-476",
      slug: "ducane-7scp18v-series-central-ducted-cfg-476",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54500,
      coolingCapacityMaxBtu: 54500,
      seer2: 16.8,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-477",
      slug: "ducane-7scp18v-series-central-ducted-cfg-477",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: 15.7,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-478",
      slug: "ducane-7scp18v-series-central-ducted-cfg-478",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.65,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-479",
      slug: "ducane-7scp18v-series-central-ducted-cfg-479",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-480",
      slug: "ducane-7scp18v-series-central-ducted-cfg-480",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 16.25,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-481",
      slug: "ducane-7scp18v-series-central-ducted-cfg-481",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44000,
      coolingCapacityMaxBtu: 44000,
      seer2: 16.75,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-482",
      slug: "ducane-7scp18v-series-central-ducted-cfg-482",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16.1,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-483",
      slug: "ducane-7scp18v-series-central-ducted-cfg-483",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-484",
      slug: "ducane-7scp18v-series-central-ducted-cfg-484",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16.15,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ducane-7scp18v-series-central-ducted-cfg-485",
      slug: "ducane-7scp18v-series-central-ducted-cfg-485",
      modelId: "ducane-7scp18v-series-central-ducted",
      outdoorUnitId: "ducane-7scp18v60p-a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: 16.25,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-1",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-2",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-3",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-4",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-5",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-6",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-7",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-8",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-9",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-10",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-11",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-12",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-13",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-14",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-15",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-16",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-17",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-18",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-19",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-20",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-21",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-22",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-23",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-24",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-25",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-26",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-27",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-28",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-29",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-30",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-31",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-32",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-33",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-34",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-35",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-36",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-37",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-38",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-39",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-40",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-41",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-42",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-43",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-44",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-45",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-46",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-47",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-48",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-49",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-50",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-51",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-52",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-53",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-54",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-55",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-56",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-57",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-58",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-59",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-60",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-61",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-62",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-63",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-64",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-65",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-66",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-67",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-68",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-69",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-70",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-71",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-72",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-73",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-74",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-75",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-76",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-77",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-78",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-79",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-80",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-81",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-82",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-83",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-84",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-85",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-86",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-87",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-88",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-89",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-90",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-91",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-92",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-93",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-94",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-95",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-96",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-97",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-98",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-99",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-100",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-101",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-102",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-103",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-104",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-105",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-106",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-107",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-108",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-109",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-110",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-111",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-112",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-113",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-114",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-115",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-116",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-117",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-118",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-119",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-120",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-121",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-122",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-123",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-124",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-125",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-126",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-127",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-128",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-129",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-130",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-131",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-132",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-133",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-134",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-135",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-136",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-137",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-138",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-139",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-140",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-141",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-142",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-143",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-144",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-145",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-146",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-147",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-148",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-149",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-150",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-151",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-152",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-153",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-154",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-155",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-156",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-157",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-158",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-159",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-160",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-161",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-162",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-163",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-164",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-165",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-166",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-167",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-168",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-169",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-170",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-171",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-172",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-173",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-174",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-175",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-176",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-177",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-178",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-179",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-180",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-181",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-182",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-183",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-184",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-185",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-186",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-187",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-188",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-189",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-190",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-191",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-192",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-193",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-194",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-195",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-196",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-197",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-198",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-199",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-200",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-201",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-202",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-203",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-204",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-205",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-206",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-207",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-208",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-209",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-210",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-211",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-212",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-213",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-214",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-215",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-216",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-217",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-218",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-219",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-220",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-221",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-222",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-223",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-224",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-225",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-226",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-227",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-228",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-229",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-230",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-231",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-232",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-233",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-234",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-235",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-236",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-237",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-238",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-239",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-240",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-241",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-242",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-243",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-244",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-245",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-246",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-247",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-248",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-249",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-250",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-251",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-252",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-253",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-254",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-255",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-256",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-257",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-258",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-259",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-260",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-261",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-262",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-263",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-264",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-265",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-266",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-267",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-268",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-269",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-270",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-271",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-272",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-273",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-274",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-275",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-276",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-277",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-278",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-279",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-280",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-281",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-282",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-283",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-284",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-285",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-286",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-287",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-288",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-289",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-290",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-291",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-292",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-293",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-294",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-295",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-296",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-297",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-298",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-299",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-300",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-301",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-302",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-303",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-304",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-305",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-306",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-307",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-308",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-309",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-310",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-311",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-312",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-313",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-314",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-315",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-316",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-317",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-318",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-319",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-320",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-321",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-322",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-323",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-324",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-325",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-326",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-327",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-328",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-329",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-330",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-331",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-332",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-333",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-334",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-335",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-336",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-337",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-338",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-339",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-340",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-341",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-342",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-343",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-344",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-345",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-346",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-347",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-348",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-349",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-350",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-351",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-352",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-353",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-354",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-355",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-356",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-357",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-358",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-359",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-360",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-361",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-362",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-363",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-364",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-365",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-366",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-367",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-368",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-369",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-370",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-371",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-372",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-373",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-374",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-375",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-376",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-377",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-378",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-379",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-380",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-381",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-382",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-383",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-384",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-385",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-386",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-387",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-388",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-389",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-390",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-391",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-392",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-393",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-394",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-395",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-396",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-397",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-398",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-399",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-400",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-401",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-402",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-403",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-404",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-405",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-406",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-407",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-408",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-409",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-410",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-411",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-412",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-413",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-414",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-415",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-416",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-417",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-418",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-419",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-420",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-421",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-422",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-423",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-424",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-425",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-426",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-427",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-428",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-429",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-430",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-431",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-432",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-433",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-434",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-435",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-436",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-437",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-438",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-439",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-440",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-441",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-442",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-443",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-444",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-445",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-446",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-447",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-448",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-449",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-450",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-451",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-452",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-453",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-454",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-455",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-456",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-457",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-458",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-459",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-460",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-461",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-462",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-463",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-464",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-465",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-466",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-467",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-468",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-469",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-470",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-471",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-472",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-473",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-474",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-475",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-476",
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
      configurationId: "ducane-4hp18v-series-central-ducted-cfg-477",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-1",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-2",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-3",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-4",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-5",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-6",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-7",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-8",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-9",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-10",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-11",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-12",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-13",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-14",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-15",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-16",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-17",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-18",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-19",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-20",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-21",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-22",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-23",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-24",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-25",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-26",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-27",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-28",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-29",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-30",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-31",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-32",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-33",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-34",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-35",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-36",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-37",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-38",
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
      configurationId: "ducane-4dh-series-wall-single-cfg-39",
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
      configurationId: "ducane-standard-wall-single-cfg-1",
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
      configurationId: "ducane-standard-wall-single-cfg-2",
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
      configurationId: "ducane-standard-wall-single-cfg-3",
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
      configurationId: "ducane-standard-wall-single-cfg-4",
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
      configurationId: "ducane-standard-wall-single-cfg-5",
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
      configurationId: "ducane-standard-wall-single-cfg-6",
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
      configurationId: "ducane-standard-wall-single-cfg-7",
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
      configurationId: "ducane-standard-wall-single-cfg-8",
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
      configurationId: "ducane-standard-wall-single-cfg-9",
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
      configurationId: "ducane-standard-wall-single-cfg-10",
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
      configurationId: "ducane-standard-wall-single-cfg-11",
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
      configurationId: "ducane-standard-wall-single-cfg-12",
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
      configurationId: "ducane-standard-wall-single-cfg-13",
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
      configurationId: "ducane-standard-wall-single-cfg-14",
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
      configurationId: "ducane-standard-wall-single-cfg-15",
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
      configurationId: "ducane-standard-wall-single-cfg-16",
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
      configurationId: "ducane-standard-wall-single-cfg-17",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-1",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-2",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-4",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-6",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-7",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-16",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-18",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-19",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-20",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-21",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-22",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-34",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-35",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-36",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-37",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-38",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-41",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-42",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-43",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-44",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-45",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-46",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-47",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-48",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-49",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-51",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-58",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-59",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-60",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-64",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-65",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-68",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-69",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-70",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-71",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-90",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-94",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-98",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-99",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-101",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-102",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-103",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-107",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-108",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-109",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-110",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-111",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-112",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-113",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-114",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-115",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-117",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-118",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-123",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-124",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-126",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-127",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-128",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-129",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-131",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-132",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-133",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-136",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-137",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-138",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-139",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-140",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-141",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-142",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-143",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-144",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-145",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-147",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-149",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-152",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-153",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-154",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-155",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-156",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-157",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-158",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-159",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-160",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-161",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-162",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-163",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-164",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-173",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-174",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-175",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-176",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-190",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-191",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-192",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-194",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-196",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-197",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-198",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-199",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-200",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-201",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-202",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-203",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-204",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-205",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-206",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-207",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-208",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-209",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-210",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-211",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-212",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-213",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-214",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-215",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-216",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-217",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-218",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-219",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-220",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-221",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-222",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-223",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-224",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-225",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-226",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-227",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-228",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-229",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-230",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-231",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-232",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-233",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-234",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-235",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-236",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-237",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-238",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-239",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-240",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-241",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-242",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-243",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-244",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-245",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-246",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-247",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-248",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-249",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-250",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-251",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-252",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-253",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-254",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-255",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-256",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-257",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-258",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-259",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-260",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-261",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-262",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-263",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-264",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-265",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-266",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-267",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-268",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-269",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-270",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-271",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-272",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-273",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-274",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-275",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-276",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-277",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-278",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-279",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-280",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-281",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-282",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-283",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-284",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-285",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-286",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-287",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-288",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-289",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-290",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-291",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-292",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-293",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-294",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-295",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-296",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-297",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-298",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-299",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-300",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-301",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-302",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-303",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-304",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-305",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-306",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-307",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-308",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-309",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-310",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-311",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-312",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-313",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-314",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-315",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-316",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-317",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-318",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-319",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-320",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-321",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-322",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-323",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-324",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-325",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-326",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-327",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-328",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-329",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-330",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-331",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-332",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-333",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-334",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-335",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-336",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-337",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-338",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-339",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-340",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-341",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-342",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-343",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-344",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-345",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-346",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-347",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-348",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-349",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-350",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-351",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-352",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-353",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-354",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-355",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-356",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-357",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-358",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-359",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-360",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-361",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-362",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-363",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-364",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-365",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-366",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-367",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-368",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-369",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-370",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-371",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-372",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-373",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-374",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-375",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-376",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-377",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-378",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-379",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-380",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-381",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-382",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-383",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-384",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-385",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-386",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-387",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-388",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-389",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-390",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-391",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-392",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-393",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-394",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-395",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-396",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-397",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-398",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-399",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-400",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-401",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-402",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-403",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-404",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-405",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-406",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-407",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-408",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-409",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-410",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-411",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-412",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-413",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-414",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-415",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-416",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-417",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-418",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-419",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-420",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-421",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-422",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-423",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-424",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-425",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-426",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-427",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-428",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-429",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-430",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-431",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-432",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-433",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-434",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-435",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-436",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-437",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-438",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-439",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-440",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-441",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-442",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-443",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-444",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-445",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-446",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-447",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-448",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-449",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-450",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-451",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-452",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-453",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-454",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-455",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-456",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-457",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-458",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-459",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-460",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-461",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-462",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-463",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-464",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-465",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-466",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-467",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-468",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-469",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-470",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-471",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-472",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-473",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-474",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-475",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-476",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-477",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-478",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-479",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-480",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-481",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-482",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-483",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-484",
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
      configurationId: "ducane-7scp18v-series-central-ducted-cfg-485",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
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
