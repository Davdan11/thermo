import type { BrandDataset } from "../../types";

export const customcomfortDataset: BrandDataset = {
  brand: {
    id: "custom-comfort",
    slug: "custom-comfort",
    name: "CUSTOM COMFORT",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "custom-comfort-cco-series",
      slug: "custom-comfort-cco-series",
      name: "CCO Series",
      brandId: "custom-comfort",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series",
      slug: "custom-comfort-ccox-series",
      name: "CCOX series",
      brandId: "custom-comfort",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series",
      slug: "custom-comfort-coox-series",
      name: "COOX Series",
      brandId: "custom-comfort",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "custom-comfort-cco-series-wall-single",
      slug: "custom-comfort-cco-series-wall-single",
      name: "CCO Series",
      seriesId: "custom-comfort-cco-series",
      brandId: "custom-comfort",
      modelNumber: "CCO Series",
      normalizedModelNumber: "cco-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 15.8,
      seer2Max: 28.1,
      hspf2Min: 8.9,
      hspf2Max: 13.6,
      cop5FMin: 1.75,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted",
      slug: "custom-comfort-ccox-series-central-ducted",
      name: "CCOX series",
      seriesId: "custom-comfort-ccox-series",
      brandId: "custom-comfort",
      modelNumber: "CCOX series",
      normalizedModelNumber: "ccox-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.5,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single",
      slug: "custom-comfort-coox-series-wall-single",
      name: "COOX Series",
      seriesId: "custom-comfort-coox-series",
      brandId: "custom-comfort",
      modelNumber: "COOX Series",
      normalizedModelNumber: "coox-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 27.4,
      hspf2Min: 9.5,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted",
      slug: "custom-comfort-cco-series-central-ducted",
      name: "CCO Series",
      seriesId: "custom-comfort-cco-series",
      brandId: "custom-comfort",
      modelNumber: "CCO Series",
      normalizedModelNumber: "cco-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 15200,
      heatingCapacity5FMaxBtu: 37800,
      seer2Min: 15.2,
      seer2Max: 16.1,
      hspf2Min: 8.1,
      hspf2Max: 9.6,
      cop5FMin: 1.8,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "custom-comfort-ccoxhasz06hp",
      modelNumber: "CCOXHASZ06HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhasz09hp",
      modelNumber: "CCOXHASZ09HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhasz12hp",
      modelNumber: "CCOXHASZ12HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhasz17hp",
      modelNumber: "CCOXHASZ17HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhasz24hp",
      modelNumber: "CCOXHASZ24HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhasz33hp",
      modelNumber: "CCOXHASZ33HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhasz36chp",
      modelNumber: "CCOXHASZ36CHP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhasz48chp",
      modelNumber: "CCOXHASZ48CHP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhasz60chp",
      modelNumber: "CCOXHASZ60CHP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhamz218hp",
      modelNumber: "CCOXHAMZ218HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhamz436hp",
      modelNumber: "CCOXHAMZ436HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhamz548hp",
      modelNumber: "CCOXHAMZ548HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhamz555hp",
      modelNumber: "CCOXHAMZ555HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhamz327hp",
      modelNumber: "CCOXHAMZ327HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxha24v18hp",
      modelNumber: "CCOXHA24V18HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxha24v24hp",
      modelNumber: "CCOXHA24V24HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxha24v30hp",
      modelNumber: "CCOXHA24V30HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxha24v36hp",
      modelNumber: "CCOXHA24V36HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxha24v48hp",
      modelNumber: "CCOXHA24V48HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxha24v60hp",
      modelNumber: "CCOXHA24V60HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz17hp",
      modelNumber: "CCOXHBSZ17HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz24hp",
      modelNumber: "CCOXHBSZ24HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz33hp",
      modelNumber: "CCOXHBSZ33HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz36chp",
      modelNumber: "CCOXHBSZ36CHP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz48chp",
      modelNumber: "CCOXHBSZ48CHP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz60chp",
      modelNumber: "CCOXHBSZ60CHP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhb24v18hp",
      modelNumber: "CCOXHB24V18HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhb24v24hp",
      modelNumber: "CCOXHB24V24HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhb24v30hp",
      modelNumber: "CCOXHB24V30HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhb24v36hp",
      modelNumber: "CCOXHB24V36HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhb24v48hp",
      modelNumber: "CCOXHB24V48HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhb24v60hp",
      modelNumber: "CCOXHB24V60HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz06hp",
      modelNumber: "CCOXHBSZ06HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz09hp",
      modelNumber: "CCOXHBSZ09HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbsz12hp",
      modelNumber: "CCOXHBSZ12HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbmz318hp",
      modelNumber: "CCOXHBMZ318HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbmz427hp",
      modelNumber: "CCOXHBMZ427HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbmz536hp",
      modelNumber: "CCOXHBMZ536HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbmz648hp",
      modelNumber: "CCOXHBMZ648HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    },
    {
      id: "custom-comfort-ccoxhbmz655hp",
      modelNumber: "CCOXHBMZ655HP",
      brandId: "custom-comfort",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "custom-comfort-cco-series-wall-single-cfg-1",
      slug: "custom-comfort-cco-series-wall-single-cfg-1",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz06hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 26.5,
      hspf2: 13.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-2",
      slug: "custom-comfort-cco-series-wall-single-cfg-2",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-3",
      slug: "custom-comfort-cco-series-wall-single-cfg-3",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-4",
      slug: "custom-comfort-cco-series-wall-single-cfg-4",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-5",
      slug: "custom-comfort-cco-series-wall-single-cfg-5",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-6",
      slug: "custom-comfort-cco-series-wall-single-cfg-6",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz33hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-7",
      slug: "custom-comfort-cco-series-wall-single-cfg-7",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-8",
      slug: "custom-comfort-cco-series-wall-single-cfg-8",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-9",
      slug: "custom-comfort-cco-series-wall-single-cfg-9",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-10",
      slug: "custom-comfort-cco-series-wall-single-cfg-10",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-11",
      slug: "custom-comfort-cco-series-wall-single-cfg-11",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz36chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-12",
      slug: "custom-comfort-cco-series-wall-single-cfg-12",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz48chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-13",
      slug: "custom-comfort-cco-series-wall-single-cfg-13",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-14",
      slug: "custom-comfort-cco-series-wall-single-cfg-14",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-15",
      slug: "custom-comfort-cco-series-wall-single-cfg-15",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-16",
      slug: "custom-comfort-cco-series-wall-single-cfg-16",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-17",
      slug: "custom-comfort-cco-series-wall-single-cfg-17",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz36chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-18",
      slug: "custom-comfort-cco-series-wall-single-cfg-18",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz48chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-19",
      slug: "custom-comfort-cco-series-wall-single-cfg-19",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz60chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-20",
      slug: "custom-comfort-cco-series-wall-single-cfg-20",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.2,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-21",
      slug: "custom-comfort-cco-series-wall-single-cfg-21",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-22",
      slug: "custom-comfort-cco-series-wall-single-cfg-22",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-23",
      slug: "custom-comfort-cco-series-wall-single-cfg-23",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-24",
      slug: "custom-comfort-cco-series-wall-single-cfg-24",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz36chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-25",
      slug: "custom-comfort-cco-series-wall-single-cfg-25",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz48chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-26",
      slug: "custom-comfort-cco-series-wall-single-cfg-26",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz60chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 17.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-27",
      slug: "custom-comfort-cco-series-wall-single-cfg-27",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz06hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-28",
      slug: "custom-comfort-cco-series-wall-single-cfg-28",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-29",
      slug: "custom-comfort-cco-series-wall-single-cfg-29",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-30",
      slug: "custom-comfort-cco-series-wall-single-cfg-30",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 19.8,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-31",
      slug: "custom-comfort-cco-series-wall-single-cfg-31",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz218hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-32",
      slug: "custom-comfort-cco-series-wall-single-cfg-32",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz218hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-33",
      slug: "custom-comfort-cco-series-wall-single-cfg-33",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz218hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-34",
      slug: "custom-comfort-cco-series-wall-single-cfg-34",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz436hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-35",
      slug: "custom-comfort-cco-series-wall-single-cfg-35",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz436hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.6,
      hspf2: 10.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-36",
      slug: "custom-comfort-cco-series-wall-single-cfg-36",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz548hp",
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
      id: "custom-comfort-cco-series-wall-single-cfg-37",
      slug: "custom-comfort-cco-series-wall-single-cfg-37",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz548hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-38",
      slug: "custom-comfort-cco-series-wall-single-cfg-38",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz548hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.35,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-39",
      slug: "custom-comfort-cco-series-wall-single-cfg-39",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz555hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-40",
      slug: "custom-comfort-cco-series-wall-single-cfg-40",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz555hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 18.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-41",
      slug: "custom-comfort-cco-series-wall-single-cfg-41",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz555hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-42",
      slug: "custom-comfort-cco-series-wall-single-cfg-42",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz36chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-43",
      slug: "custom-comfort-cco-series-wall-single-cfg-43",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhasz48chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-44",
      slug: "custom-comfort-cco-series-wall-single-cfg-44",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz327hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-45",
      slug: "custom-comfort-cco-series-wall-single-cfg-45",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz327hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-wall-single-cfg-46",
      slug: "custom-comfort-cco-series-wall-single-cfg-46",
      modelId: "custom-comfort-cco-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhamz327hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-1",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-1",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhasz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.6,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-2",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-2",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhasz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.4,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-3",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-3",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhasz60chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-4",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-4",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v18hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-5",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-5",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-6",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-6",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v30hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.2,
      hspf2: 8.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-7",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-7",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v36hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-8",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-8",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v48hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-9",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-9",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v60hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-10",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-10",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v18hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-11",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-11",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-12",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-12",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v30hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-13",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-13",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v36hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-14",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-14",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v48hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-15",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-15",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v30hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-16",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-16",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v36hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-17",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-17",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-18",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-18",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-19",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-19",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v30hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-20",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-20",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v36hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-21",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-21",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v60hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-22",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-22",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxha24v60hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.3,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-23",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-23",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhbsz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-24",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-24",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhbsz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-25",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-25",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhbsz33hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-26",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-26",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhbsz36chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.2,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-27",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-27",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhbsz48chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-28",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-28",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhbsz60chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-29",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-29",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v18hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-30",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-30",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-31",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-31",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v30hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-32",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-32",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v36hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-33",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-33",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v48hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-34",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-34",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v60hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-ccox-series-central-ducted-cfg-35",
      slug: "custom-comfort-ccox-series-central-ducted-cfg-35",
      modelId: "custom-comfort-ccox-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v48hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-1",
      slug: "custom-comfort-coox-series-wall-single-cfg-1",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz06hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.5,
      hspf2: 14.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-2",
      slug: "custom-comfort-coox-series-wall-single-cfg-2",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-3",
      slug: "custom-comfort-coox-series-wall-single-cfg-3",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-4",
      slug: "custom-comfort-coox-series-wall-single-cfg-4",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-5",
      slug: "custom-comfort-coox-series-wall-single-cfg-5",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-6",
      slug: "custom-comfort-coox-series-wall-single-cfg-6",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz33hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-7",
      slug: "custom-comfort-coox-series-wall-single-cfg-7",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-8",
      slug: "custom-comfort-coox-series-wall-single-cfg-8",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-9",
      slug: "custom-comfort-coox-series-wall-single-cfg-9",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-10",
      slug: "custom-comfort-coox-series-wall-single-cfg-10",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-11",
      slug: "custom-comfort-coox-series-wall-single-cfg-11",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz06hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 21.4,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-12",
      slug: "custom-comfort-coox-series-wall-single-cfg-12",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-13",
      slug: "custom-comfort-coox-series-wall-single-cfg-13",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-14",
      slug: "custom-comfort-coox-series-wall-single-cfg-14",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.4,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-15",
      slug: "custom-comfort-coox-series-wall-single-cfg-15",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-16",
      slug: "custom-comfort-coox-series-wall-single-cfg-16",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.2,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-17",
      slug: "custom-comfort-coox-series-wall-single-cfg-17",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-18",
      slug: "custom-comfort-coox-series-wall-single-cfg-18",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-19",
      slug: "custom-comfort-coox-series-wall-single-cfg-19",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-20",
      slug: "custom-comfort-coox-series-wall-single-cfg-20",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.4,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-21",
      slug: "custom-comfort-coox-series-wall-single-cfg-21",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz06hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-22",
      slug: "custom-comfort-coox-series-wall-single-cfg-22",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz09hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-23",
      slug: "custom-comfort-coox-series-wall-single-cfg-23",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz12hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-24",
      slug: "custom-comfort-coox-series-wall-single-cfg-24",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz17hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-25",
      slug: "custom-comfort-coox-series-wall-single-cfg-25",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz36chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36600,
      coolingCapacityMaxBtu: 36600,
      seer2: 21.2,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-26",
      slug: "custom-comfort-coox-series-wall-single-cfg-26",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz48chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-27",
      slug: "custom-comfort-coox-series-wall-single-cfg-27",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz36chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.7,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-28",
      slug: "custom-comfort-coox-series-wall-single-cfg-28",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz48chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-29",
      slug: "custom-comfort-coox-series-wall-single-cfg-29",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz60chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.8,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-30",
      slug: "custom-comfort-coox-series-wall-single-cfg-30",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz36chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: 20,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-31",
      slug: "custom-comfort-coox-series-wall-single-cfg-31",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz48chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.5,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-32",
      slug: "custom-comfort-coox-series-wall-single-cfg-32",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbsz60chp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-33",
      slug: "custom-comfort-coox-series-wall-single-cfg-33",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz318hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 25,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-34",
      slug: "custom-comfort-coox-series-wall-single-cfg-34",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz318hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-35",
      slug: "custom-comfort-coox-series-wall-single-cfg-35",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz318hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-36",
      slug: "custom-comfort-coox-series-wall-single-cfg-36",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz427hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-37",
      slug: "custom-comfort-coox-series-wall-single-cfg-37",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz427hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-38",
      slug: "custom-comfort-coox-series-wall-single-cfg-38",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz427hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-39",
      slug: "custom-comfort-coox-series-wall-single-cfg-39",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz536hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-40",
      slug: "custom-comfort-coox-series-wall-single-cfg-40",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz536hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-41",
      slug: "custom-comfort-coox-series-wall-single-cfg-41",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz536hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.2,
      hspf2: 10.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-42",
      slug: "custom-comfort-coox-series-wall-single-cfg-42",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz648hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 23,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-43",
      slug: "custom-comfort-coox-series-wall-single-cfg-43",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz648hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-44",
      slug: "custom-comfort-coox-series-wall-single-cfg-44",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz648hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 21.7,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-45",
      slug: "custom-comfort-coox-series-wall-single-cfg-45",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz655hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 22.2,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-46",
      slug: "custom-comfort-coox-series-wall-single-cfg-46",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz655hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 20,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-coox-series-wall-single-cfg-47",
      slug: "custom-comfort-coox-series-wall-single-cfg-47",
      modelId: "custom-comfort-coox-series-wall-single",
      outdoorUnitId: "custom-comfort-ccoxhbmz655hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 21.1,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-1",
      slug: "custom-comfort-cco-series-central-ducted-cfg-1",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v18hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-2",
      slug: "custom-comfort-cco-series-central-ducted-cfg-2",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-3",
      slug: "custom-comfort-cco-series-central-ducted-cfg-3",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v18hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-4",
      slug: "custom-comfort-cco-series-central-ducted-cfg-4",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v24hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-5",
      slug: "custom-comfort-cco-series-central-ducted-cfg-5",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v30hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-6",
      slug: "custom-comfort-cco-series-central-ducted-cfg-6",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v36hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-7",
      slug: "custom-comfort-cco-series-central-ducted-cfg-7",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v30hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: 16,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-8",
      slug: "custom-comfort-cco-series-central-ducted-cfg-8",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v36hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-9",
      slug: "custom-comfort-cco-series-central-ducted-cfg-9",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v48hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "custom-comfort-cco-series-central-ducted-cfg-10",
      slug: "custom-comfort-cco-series-central-ducted-cfg-10",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v60hp",
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
      id: "custom-comfort-cco-series-central-ducted-cfg-11",
      slug: "custom-comfort-cco-series-central-ducted-cfg-11",
      modelId: "custom-comfort-cco-series-central-ducted",
      outdoorUnitId: "custom-comfort-ccoxhb24v60hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-3",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-6",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9900,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15600,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-10",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-11",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-12",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-15",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-16",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.76,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-34",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-35",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-36",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-37",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-38",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-42",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-wall-single-cfg-44",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-45",
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
      configurationId: "custom-comfort-cco-series-wall-single-cfg-46",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-6",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-8",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-10",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-11",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-14",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-15",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-19",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-23",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-27",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-29",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-33",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-34",
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
      configurationId: "custom-comfort-ccox-series-central-ducted-cfg-35",
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
      configurationId: "custom-comfort-coox-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9800,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 2.02,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38500,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-33",
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
      configurationId: "custom-comfort-coox-series-wall-single-cfg-34",
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
      configurationId: "custom-comfort-coox-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-38",
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
      configurationId: "custom-comfort-coox-series-wall-single-cfg-39",
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
      configurationId: "custom-comfort-coox-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-coox-series-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "custom-comfort-cco-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.83,
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
