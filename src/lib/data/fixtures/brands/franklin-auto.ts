import type { BrandDataset } from "../../types";

export const franklinDataset: BrandDataset = {
  brand: {
    id: "franklin",
    slug: "franklin",
    name: "FRANKLIN",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "franklin-msh-series",
      slug: "franklin-msh-series",
      name: "MSH Series",
      brandId: "franklin",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series",
      slug: "franklin-mst-series",
      name: "MST Series",
      brandId: "franklin",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard",
      slug: "franklin-standard",
      name: "Standard",
      brandId: "franklin",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9",
      slug: "franklin-gszv9",
      name: "GSZV9",
      brandId: "franklin",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9",
      slug: "franklin-aszv9",
      name: "ASZV9",
      brandId: "franklin",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "franklin-msh-series-wall-single",
      slug: "franklin-msh-series-wall-single",
      name: "MSH Series",
      seriesId: "franklin-msh-series",
      brandId: "franklin",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 7100,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 18,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 12,
      cop5FMin: 1.59,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single",
      slug: "franklin-mst-series-wall-single",
      name: "MST Series",
      seriesId: "franklin-mst-series",
      brandId: "franklin",
      modelNumber: "MST Series",
      normalizedModelNumber: "mst-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 9900,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 18,
      seer2Max: 23,
      hspf2Min: 9,
      hspf2Max: 10.9,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single",
      slug: "franklin-standard-wall-single",
      name: "Standard",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 37600,
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
      id: "franklin-gszv9-central-ducted",
      slug: "franklin-gszv9-central-ducted",
      name: "GSZV9",
      seriesId: "franklin-gszv9",
      brandId: "franklin",
      modelNumber: "GSZV9",
      normalizedModelNumber: "gszv9",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 13800,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 8.2,
      hspf2Max: 8.2,
      cop5FMin: 1.82,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted",
      slug: "franklin-aszv9-central-ducted",
      name: "ASZV9",
      seriesId: "franklin-aszv9",
      brandId: "franklin",
      modelNumber: "ASZV9",
      normalizedModelNumber: "aszv9",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 13800,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 8.2,
      hspf2Max: 8.2,
      cop5FMin: 1.82,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted",
      slug: "franklin-standard-central-ducted",
      name: "Standard",
      seriesId: "franklin-standard",
      brandId: "franklin",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 32400,
      heatingCapacity5FMaxBtu: 33400,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "franklin-msh093e23mcaa",
      modelNumber: "MSH093E23MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh123e23mcaa",
      modelNumber: "MSH123E23MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh183e23mcaa",
      modelNumber: "MSH183E23MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh243e23mcaa",
      modelNumber: "MSH243E23MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh093f25mcaa",
      modelNumber: "MSH093F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh123f25mcaa",
      modelNumber: "MSH123F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh183f25mcaa",
      modelNumber: "MSH183F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh243f25mcaa",
      modelNumber: "MSH243F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh303f25mcaa",
      modelNumber: "MSH303F25MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst183e23mhaa",
      modelNumber: "MST183E23MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst183f25mhaa",
      modelNumber: "MST183F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst273f25mhaa",
      modelNumber: "MST273F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst363f25mhaa",
      modelNumber: "MST363F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst483f25mhaa",
      modelNumber: "MST483F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst283f25mhaa",
      modelNumber: "MST283F25MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst303e23mhaa",
      modelNumber: "MST303E23MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-mst363e23mhaa",
      modelNumber: "MST363E23MHAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh183e19mcaa",
      modelNumber: "MSH183E19MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh183e21mcaa",
      modelNumber: "MSH183E21MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh243e21mcaa",
      modelNumber: "MSH243E21MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh363e18mcaa",
      modelNumber: "MSH363E18MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh483e18mcaa",
      modelNumber: "MSH483E18MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh603e18mcaa",
      modelNumber: "MSH603E18MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-msh123e21mcaa",
      modelNumber: "MSH123E21MCAA",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-gszv906010a",
      modelNumber: "GSZV906010A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-aszv906010a",
      modelNumber: "ASZV906010A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-gszv903610a",
      modelNumber: "GSZV903610A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-gszv904810a",
      modelNumber: "GSZV904810A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-gszv902410a",
      modelNumber: "GSZV902410A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-aszv903610a",
      modelNumber: "ASZV903610A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-aszv904810a",
      modelNumber: "ASZV904810A*",
      brandId: "franklin",
      refrigerant: null as any,
    },
    {
      id: "franklin-aszv902410a",
      modelNumber: "ASZV902410A*",
      brandId: "franklin",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "franklin-msh-series-wall-single-cfg-1",
      slug: "franklin-msh-series-wall-single-cfg-1",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh093e23mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-cfg-2",
      slug: "franklin-msh-series-wall-single-cfg-2",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh123e23mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-cfg-3",
      slug: "franklin-msh-series-wall-single-cfg-3",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh183e23mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-cfg-4",
      slug: "franklin-msh-series-wall-single-cfg-4",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh243e23mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-cfg-5",
      slug: "franklin-msh-series-wall-single-cfg-5",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh093e23mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-6",
      slug: "franklin-msh-series-wall-single-cfg-6",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh123e23mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-7",
      slug: "franklin-msh-series-wall-single-cfg-7",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh183e23mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-8",
      slug: "franklin-msh-series-wall-single-cfg-8",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh243e23mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-9",
      slug: "franklin-msh-series-wall-single-cfg-9",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh093e23mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-10",
      slug: "franklin-msh-series-wall-single-cfg-10",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh123e23mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-11",
      slug: "franklin-msh-series-wall-single-cfg-11",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh183e23mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-12",
      slug: "franklin-msh-series-wall-single-cfg-12",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh093f25mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-13",
      slug: "franklin-msh-series-wall-single-cfg-13",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh123f25mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-14",
      slug: "franklin-msh-series-wall-single-cfg-14",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh183f25mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-15",
      slug: "franklin-msh-series-wall-single-cfg-15",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh243f25mcaa",
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
      id: "franklin-msh-series-wall-single-cfg-16",
      slug: "franklin-msh-series-wall-single-cfg-16",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh303f25mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-msh-series-wall-single-cfg-17",
      slug: "franklin-msh-series-wall-single-cfg-17",
      modelId: "franklin-msh-series-wall-single",
      outdoorUnitId: "franklin-msh123e23mcaa",
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
      id: "franklin-mst-series-wall-single-cfg-1",
      slug: "franklin-mst-series-wall-single-cfg-1",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst183e23mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-2",
      slug: "franklin-mst-series-wall-single-cfg-2",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst183e23mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-3",
      slug: "franklin-mst-series-wall-single-cfg-3",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst183e23mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-4",
      slug: "franklin-mst-series-wall-single-cfg-4",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst183f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-5",
      slug: "franklin-mst-series-wall-single-cfg-5",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst183f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-6",
      slug: "franklin-mst-series-wall-single-cfg-6",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst183f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-7",
      slug: "franklin-mst-series-wall-single-cfg-7",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst273f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-8",
      slug: "franklin-mst-series-wall-single-cfg-8",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst273f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-9",
      slug: "franklin-mst-series-wall-single-cfg-9",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst273f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-10",
      slug: "franklin-mst-series-wall-single-cfg-10",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst363f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22.4,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-cfg-11",
      slug: "franklin-mst-series-wall-single-cfg-11",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst363f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-cfg-12",
      slug: "franklin-mst-series-wall-single-cfg-12",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst363f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.9,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-cfg-13",
      slug: "franklin-mst-series-wall-single-cfg-13",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst483f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-14",
      slug: "franklin-mst-series-wall-single-cfg-14",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst483f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-15",
      slug: "franklin-mst-series-wall-single-cfg-15",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst483f25mhaa",
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
      id: "franklin-mst-series-wall-single-cfg-16",
      slug: "franklin-mst-series-wall-single-cfg-16",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-msh123f25mcaa",
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
      id: "franklin-mst-series-wall-single-cfg-17",
      slug: "franklin-mst-series-wall-single-cfg-17",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-msh183f25mcaa",
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
      id: "franklin-mst-series-wall-single-cfg-18",
      slug: "franklin-mst-series-wall-single-cfg-18",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-msh123f25mcaa",
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
      id: "franklin-mst-series-wall-single-cfg-19",
      slug: "franklin-mst-series-wall-single-cfg-19",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-msh183f25mcaa",
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
      id: "franklin-mst-series-wall-single-cfg-20",
      slug: "franklin-mst-series-wall-single-cfg-20",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-msh243f25mcaa",
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
      id: "franklin-mst-series-wall-single-cfg-21",
      slug: "franklin-mst-series-wall-single-cfg-21",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst283f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 23,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-cfg-22",
      slug: "franklin-mst-series-wall-single-cfg-22",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst283f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-mst-series-wall-single-cfg-23",
      slug: "franklin-mst-series-wall-single-cfg-23",
      modelId: "franklin-mst-series-wall-single",
      outdoorUnitId: "franklin-mst283f25mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.5,
      hspf2: 10.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-1",
      slug: "franklin-standard-wall-single-cfg-1",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-mst303e23mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-2",
      slug: "franklin-standard-wall-single-cfg-2",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-mst363e23mhaa",
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
      id: "franklin-standard-wall-single-cfg-3",
      slug: "franklin-standard-wall-single-cfg-3",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-mst363e23mhaa",
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
      id: "franklin-standard-wall-single-cfg-4",
      slug: "franklin-standard-wall-single-cfg-4",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh183e19mcaa",
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
      id: "franklin-standard-wall-single-cfg-5",
      slug: "franklin-standard-wall-single-cfg-5",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh183e21mcaa",
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
      id: "franklin-standard-wall-single-cfg-6",
      slug: "franklin-standard-wall-single-cfg-6",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh183e21mcaa",
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
      id: "franklin-standard-wall-single-cfg-7",
      slug: "franklin-standard-wall-single-cfg-7",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh243e21mcaa",
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
      id: "franklin-standard-wall-single-cfg-8",
      slug: "franklin-standard-wall-single-cfg-8",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh363e18mcaa",
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
      id: "franklin-standard-wall-single-cfg-9",
      slug: "franklin-standard-wall-single-cfg-9",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh483e18mcaa",
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
      id: "franklin-standard-wall-single-cfg-10",
      slug: "franklin-standard-wall-single-cfg-10",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh603e18mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-11",
      slug: "franklin-standard-wall-single-cfg-11",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh123e21mcaa",
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
      id: "franklin-standard-wall-single-cfg-12",
      slug: "franklin-standard-wall-single-cfg-12",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-msh183e21mcaa",
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
      id: "franklin-standard-wall-single-cfg-13",
      slug: "franklin-standard-wall-single-cfg-13",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-14",
      slug: "franklin-standard-wall-single-cfg-14",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52500,
      coolingCapacityMaxBtu: 52500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-15",
      slug: "franklin-standard-wall-single-cfg-15",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-16",
      slug: "franklin-standard-wall-single-cfg-16",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-17",
      slug: "franklin-standard-wall-single-cfg-17",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-18",
      slug: "franklin-standard-wall-single-cfg-18",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-wall-single-cfg-19",
      slug: "franklin-standard-wall-single-cfg-19",
      modelId: "franklin-standard-wall-single",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51500,
      coolingCapacityMaxBtu: 51500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-1",
      slug: "franklin-gszv9-central-ducted-cfg-1",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-2",
      slug: "franklin-gszv9-central-ducted-cfg-2",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-3",
      slug: "franklin-gszv9-central-ducted-cfg-3",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-4",
      slug: "franklin-gszv9-central-ducted-cfg-4",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-5",
      slug: "franklin-gszv9-central-ducted-cfg-5",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-6",
      slug: "franklin-gszv9-central-ducted-cfg-6",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-7",
      slug: "franklin-gszv9-central-ducted-cfg-7",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-8",
      slug: "franklin-gszv9-central-ducted-cfg-8",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-9",
      slug: "franklin-gszv9-central-ducted-cfg-9",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-10",
      slug: "franklin-gszv9-central-ducted-cfg-10",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-11",
      slug: "franklin-gszv9-central-ducted-cfg-11",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-12",
      slug: "franklin-gszv9-central-ducted-cfg-12",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-13",
      slug: "franklin-gszv9-central-ducted-cfg-13",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-14",
      slug: "franklin-gszv9-central-ducted-cfg-14",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-15",
      slug: "franklin-gszv9-central-ducted-cfg-15",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-16",
      slug: "franklin-gszv9-central-ducted-cfg-16",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-17",
      slug: "franklin-gszv9-central-ducted-cfg-17",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-18",
      slug: "franklin-gszv9-central-ducted-cfg-18",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-19",
      slug: "franklin-gszv9-central-ducted-cfg-19",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-20",
      slug: "franklin-gszv9-central-ducted-cfg-20",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-21",
      slug: "franklin-gszv9-central-ducted-cfg-21",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-22",
      slug: "franklin-gszv9-central-ducted-cfg-22",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-23",
      slug: "franklin-gszv9-central-ducted-cfg-23",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-24",
      slug: "franklin-gszv9-central-ducted-cfg-24",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-25",
      slug: "franklin-gszv9-central-ducted-cfg-25",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-26",
      slug: "franklin-gszv9-central-ducted-cfg-26",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-27",
      slug: "franklin-gszv9-central-ducted-cfg-27",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-28",
      slug: "franklin-gszv9-central-ducted-cfg-28",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-29",
      slug: "franklin-gszv9-central-ducted-cfg-29",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-30",
      slug: "franklin-gszv9-central-ducted-cfg-30",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-31",
      slug: "franklin-gszv9-central-ducted-cfg-31",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-32",
      slug: "franklin-gszv9-central-ducted-cfg-32",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-33",
      slug: "franklin-gszv9-central-ducted-cfg-33",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-34",
      slug: "franklin-gszv9-central-ducted-cfg-34",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-35",
      slug: "franklin-gszv9-central-ducted-cfg-35",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-36",
      slug: "franklin-gszv9-central-ducted-cfg-36",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-37",
      slug: "franklin-gszv9-central-ducted-cfg-37",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-38",
      slug: "franklin-gszv9-central-ducted-cfg-38",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-39",
      slug: "franklin-gszv9-central-ducted-cfg-39",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-40",
      slug: "franklin-gszv9-central-ducted-cfg-40",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-41",
      slug: "franklin-gszv9-central-ducted-cfg-41",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-42",
      slug: "franklin-gszv9-central-ducted-cfg-42",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-43",
      slug: "franklin-gszv9-central-ducted-cfg-43",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-44",
      slug: "franklin-gszv9-central-ducted-cfg-44",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-45",
      slug: "franklin-gszv9-central-ducted-cfg-45",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-46",
      slug: "franklin-gszv9-central-ducted-cfg-46",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-47",
      slug: "franklin-gszv9-central-ducted-cfg-47",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-48",
      slug: "franklin-gszv9-central-ducted-cfg-48",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-49",
      slug: "franklin-gszv9-central-ducted-cfg-49",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-50",
      slug: "franklin-gszv9-central-ducted-cfg-50",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-51",
      slug: "franklin-gszv9-central-ducted-cfg-51",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-52",
      slug: "franklin-gszv9-central-ducted-cfg-52",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-53",
      slug: "franklin-gszv9-central-ducted-cfg-53",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-54",
      slug: "franklin-gszv9-central-ducted-cfg-54",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-55",
      slug: "franklin-gszv9-central-ducted-cfg-55",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-56",
      slug: "franklin-gszv9-central-ducted-cfg-56",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-57",
      slug: "franklin-gszv9-central-ducted-cfg-57",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-58",
      slug: "franklin-gszv9-central-ducted-cfg-58",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-59",
      slug: "franklin-gszv9-central-ducted-cfg-59",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-60",
      slug: "franklin-gszv9-central-ducted-cfg-60",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-61",
      slug: "franklin-gszv9-central-ducted-cfg-61",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-62",
      slug: "franklin-gszv9-central-ducted-cfg-62",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-63",
      slug: "franklin-gszv9-central-ducted-cfg-63",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-64",
      slug: "franklin-gszv9-central-ducted-cfg-64",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-65",
      slug: "franklin-gszv9-central-ducted-cfg-65",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-66",
      slug: "franklin-gszv9-central-ducted-cfg-66",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-67",
      slug: "franklin-gszv9-central-ducted-cfg-67",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-68",
      slug: "franklin-gszv9-central-ducted-cfg-68",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-69",
      slug: "franklin-gszv9-central-ducted-cfg-69",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-70",
      slug: "franklin-gszv9-central-ducted-cfg-70",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-71",
      slug: "franklin-gszv9-central-ducted-cfg-71",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-72",
      slug: "franklin-gszv9-central-ducted-cfg-72",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-73",
      slug: "franklin-gszv9-central-ducted-cfg-73",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-74",
      slug: "franklin-gszv9-central-ducted-cfg-74",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-75",
      slug: "franklin-gszv9-central-ducted-cfg-75",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-76",
      slug: "franklin-gszv9-central-ducted-cfg-76",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-77",
      slug: "franklin-gszv9-central-ducted-cfg-77",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-78",
      slug: "franklin-gszv9-central-ducted-cfg-78",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-79",
      slug: "franklin-gszv9-central-ducted-cfg-79",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-80",
      slug: "franklin-gszv9-central-ducted-cfg-80",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-81",
      slug: "franklin-gszv9-central-ducted-cfg-81",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-82",
      slug: "franklin-gszv9-central-ducted-cfg-82",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-83",
      slug: "franklin-gszv9-central-ducted-cfg-83",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-84",
      slug: "franklin-gszv9-central-ducted-cfg-84",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-85",
      slug: "franklin-gszv9-central-ducted-cfg-85",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-86",
      slug: "franklin-gszv9-central-ducted-cfg-86",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-87",
      slug: "franklin-gszv9-central-ducted-cfg-87",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-88",
      slug: "franklin-gszv9-central-ducted-cfg-88",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-89",
      slug: "franklin-gszv9-central-ducted-cfg-89",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-90",
      slug: "franklin-gszv9-central-ducted-cfg-90",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-91",
      slug: "franklin-gszv9-central-ducted-cfg-91",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-92",
      slug: "franklin-gszv9-central-ducted-cfg-92",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-93",
      slug: "franklin-gszv9-central-ducted-cfg-93",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-94",
      slug: "franklin-gszv9-central-ducted-cfg-94",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-95",
      slug: "franklin-gszv9-central-ducted-cfg-95",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-96",
      slug: "franklin-gszv9-central-ducted-cfg-96",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-97",
      slug: "franklin-gszv9-central-ducted-cfg-97",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-98",
      slug: "franklin-gszv9-central-ducted-cfg-98",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-99",
      slug: "franklin-gszv9-central-ducted-cfg-99",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-100",
      slug: "franklin-gszv9-central-ducted-cfg-100",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-101",
      slug: "franklin-gszv9-central-ducted-cfg-101",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-102",
      slug: "franklin-gszv9-central-ducted-cfg-102",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-103",
      slug: "franklin-gszv9-central-ducted-cfg-103",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-104",
      slug: "franklin-gszv9-central-ducted-cfg-104",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-105",
      slug: "franklin-gszv9-central-ducted-cfg-105",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-106",
      slug: "franklin-gszv9-central-ducted-cfg-106",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-107",
      slug: "franklin-gszv9-central-ducted-cfg-107",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-108",
      slug: "franklin-gszv9-central-ducted-cfg-108",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-109",
      slug: "franklin-gszv9-central-ducted-cfg-109",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-110",
      slug: "franklin-gszv9-central-ducted-cfg-110",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-111",
      slug: "franklin-gszv9-central-ducted-cfg-111",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-112",
      slug: "franklin-gszv9-central-ducted-cfg-112",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-113",
      slug: "franklin-gszv9-central-ducted-cfg-113",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-114",
      slug: "franklin-gszv9-central-ducted-cfg-114",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-115",
      slug: "franklin-gszv9-central-ducted-cfg-115",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-116",
      slug: "franklin-gszv9-central-ducted-cfg-116",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-117",
      slug: "franklin-gszv9-central-ducted-cfg-117",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-118",
      slug: "franklin-gszv9-central-ducted-cfg-118",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-119",
      slug: "franklin-gszv9-central-ducted-cfg-119",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-120",
      slug: "franklin-gszv9-central-ducted-cfg-120",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-121",
      slug: "franklin-gszv9-central-ducted-cfg-121",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-122",
      slug: "franklin-gszv9-central-ducted-cfg-122",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-123",
      slug: "franklin-gszv9-central-ducted-cfg-123",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-124",
      slug: "franklin-gszv9-central-ducted-cfg-124",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-125",
      slug: "franklin-gszv9-central-ducted-cfg-125",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-126",
      slug: "franklin-gszv9-central-ducted-cfg-126",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-127",
      slug: "franklin-gszv9-central-ducted-cfg-127",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-128",
      slug: "franklin-gszv9-central-ducted-cfg-128",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-129",
      slug: "franklin-gszv9-central-ducted-cfg-129",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-130",
      slug: "franklin-gszv9-central-ducted-cfg-130",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-131",
      slug: "franklin-gszv9-central-ducted-cfg-131",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-132",
      slug: "franklin-gszv9-central-ducted-cfg-132",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-133",
      slug: "franklin-gszv9-central-ducted-cfg-133",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-134",
      slug: "franklin-gszv9-central-ducted-cfg-134",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-135",
      slug: "franklin-gszv9-central-ducted-cfg-135",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-gszv9-central-ducted-cfg-136",
      slug: "franklin-gszv9-central-ducted-cfg-136",
      modelId: "franklin-gszv9-central-ducted",
      outdoorUnitId: "franklin-gszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-1",
      slug: "franklin-aszv9-central-ducted-cfg-1",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-2",
      slug: "franklin-aszv9-central-ducted-cfg-2",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-3",
      slug: "franklin-aszv9-central-ducted-cfg-3",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-4",
      slug: "franklin-aszv9-central-ducted-cfg-4",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-5",
      slug: "franklin-aszv9-central-ducted-cfg-5",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-6",
      slug: "franklin-aszv9-central-ducted-cfg-6",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-7",
      slug: "franklin-aszv9-central-ducted-cfg-7",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-8",
      slug: "franklin-aszv9-central-ducted-cfg-8",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-9",
      slug: "franklin-aszv9-central-ducted-cfg-9",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-10",
      slug: "franklin-aszv9-central-ducted-cfg-10",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-11",
      slug: "franklin-aszv9-central-ducted-cfg-11",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-12",
      slug: "franklin-aszv9-central-ducted-cfg-12",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-13",
      slug: "franklin-aszv9-central-ducted-cfg-13",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-14",
      slug: "franklin-aszv9-central-ducted-cfg-14",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-15",
      slug: "franklin-aszv9-central-ducted-cfg-15",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-16",
      slug: "franklin-aszv9-central-ducted-cfg-16",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-17",
      slug: "franklin-aszv9-central-ducted-cfg-17",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-18",
      slug: "franklin-aszv9-central-ducted-cfg-18",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-19",
      slug: "franklin-aszv9-central-ducted-cfg-19",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-20",
      slug: "franklin-aszv9-central-ducted-cfg-20",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-21",
      slug: "franklin-aszv9-central-ducted-cfg-21",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-22",
      slug: "franklin-aszv9-central-ducted-cfg-22",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-23",
      slug: "franklin-aszv9-central-ducted-cfg-23",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-24",
      slug: "franklin-aszv9-central-ducted-cfg-24",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-25",
      slug: "franklin-aszv9-central-ducted-cfg-25",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-26",
      slug: "franklin-aszv9-central-ducted-cfg-26",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-27",
      slug: "franklin-aszv9-central-ducted-cfg-27",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-28",
      slug: "franklin-aszv9-central-ducted-cfg-28",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-29",
      slug: "franklin-aszv9-central-ducted-cfg-29",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-30",
      slug: "franklin-aszv9-central-ducted-cfg-30",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-31",
      slug: "franklin-aszv9-central-ducted-cfg-31",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-32",
      slug: "franklin-aszv9-central-ducted-cfg-32",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-33",
      slug: "franklin-aszv9-central-ducted-cfg-33",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-34",
      slug: "franklin-aszv9-central-ducted-cfg-34",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-35",
      slug: "franklin-aszv9-central-ducted-cfg-35",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-36",
      slug: "franklin-aszv9-central-ducted-cfg-36",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-37",
      slug: "franklin-aszv9-central-ducted-cfg-37",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-38",
      slug: "franklin-aszv9-central-ducted-cfg-38",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-39",
      slug: "franklin-aszv9-central-ducted-cfg-39",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-40",
      slug: "franklin-aszv9-central-ducted-cfg-40",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv902410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 21,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-41",
      slug: "franklin-aszv9-central-ducted-cfg-41",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-42",
      slug: "franklin-aszv9-central-ducted-cfg-42",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-43",
      slug: "franklin-aszv9-central-ducted-cfg-43",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-44",
      slug: "franklin-aszv9-central-ducted-cfg-44",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-45",
      slug: "franklin-aszv9-central-ducted-cfg-45",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-46",
      slug: "franklin-aszv9-central-ducted-cfg-46",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-47",
      slug: "franklin-aszv9-central-ducted-cfg-47",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-48",
      slug: "franklin-aszv9-central-ducted-cfg-48",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-49",
      slug: "franklin-aszv9-central-ducted-cfg-49",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-50",
      slug: "franklin-aszv9-central-ducted-cfg-50",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-51",
      slug: "franklin-aszv9-central-ducted-cfg-51",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-52",
      slug: "franklin-aszv9-central-ducted-cfg-52",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-53",
      slug: "franklin-aszv9-central-ducted-cfg-53",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-54",
      slug: "franklin-aszv9-central-ducted-cfg-54",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-55",
      slug: "franklin-aszv9-central-ducted-cfg-55",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-56",
      slug: "franklin-aszv9-central-ducted-cfg-56",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-57",
      slug: "franklin-aszv9-central-ducted-cfg-57",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-58",
      slug: "franklin-aszv9-central-ducted-cfg-58",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-59",
      slug: "franklin-aszv9-central-ducted-cfg-59",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-60",
      slug: "franklin-aszv9-central-ducted-cfg-60",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-61",
      slug: "franklin-aszv9-central-ducted-cfg-61",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-62",
      slug: "franklin-aszv9-central-ducted-cfg-62",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-63",
      slug: "franklin-aszv9-central-ducted-cfg-63",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-64",
      slug: "franklin-aszv9-central-ducted-cfg-64",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-65",
      slug: "franklin-aszv9-central-ducted-cfg-65",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-66",
      slug: "franklin-aszv9-central-ducted-cfg-66",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-67",
      slug: "franklin-aszv9-central-ducted-cfg-67",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-68",
      slug: "franklin-aszv9-central-ducted-cfg-68",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-69",
      slug: "franklin-aszv9-central-ducted-cfg-69",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-70",
      slug: "franklin-aszv9-central-ducted-cfg-70",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-71",
      slug: "franklin-aszv9-central-ducted-cfg-71",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-72",
      slug: "franklin-aszv9-central-ducted-cfg-72",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-73",
      slug: "franklin-aszv9-central-ducted-cfg-73",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-74",
      slug: "franklin-aszv9-central-ducted-cfg-74",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-75",
      slug: "franklin-aszv9-central-ducted-cfg-75",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-76",
      slug: "franklin-aszv9-central-ducted-cfg-76",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-77",
      slug: "franklin-aszv9-central-ducted-cfg-77",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-78",
      slug: "franklin-aszv9-central-ducted-cfg-78",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-79",
      slug: "franklin-aszv9-central-ducted-cfg-79",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-80",
      slug: "franklin-aszv9-central-ducted-cfg-80",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-81",
      slug: "franklin-aszv9-central-ducted-cfg-81",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-82",
      slug: "franklin-aszv9-central-ducted-cfg-82",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-83",
      slug: "franklin-aszv9-central-ducted-cfg-83",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-84",
      slug: "franklin-aszv9-central-ducted-cfg-84",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-85",
      slug: "franklin-aszv9-central-ducted-cfg-85",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-86",
      slug: "franklin-aszv9-central-ducted-cfg-86",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-87",
      slug: "franklin-aszv9-central-ducted-cfg-87",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-88",
      slug: "franklin-aszv9-central-ducted-cfg-88",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-89",
      slug: "franklin-aszv9-central-ducted-cfg-89",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-90",
      slug: "franklin-aszv9-central-ducted-cfg-90",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-91",
      slug: "franklin-aszv9-central-ducted-cfg-91",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-92",
      slug: "franklin-aszv9-central-ducted-cfg-92",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-93",
      slug: "franklin-aszv9-central-ducted-cfg-93",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-94",
      slug: "franklin-aszv9-central-ducted-cfg-94",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-95",
      slug: "franklin-aszv9-central-ducted-cfg-95",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-96",
      slug: "franklin-aszv9-central-ducted-cfg-96",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-97",
      slug: "franklin-aszv9-central-ducted-cfg-97",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-98",
      slug: "franklin-aszv9-central-ducted-cfg-98",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-99",
      slug: "franklin-aszv9-central-ducted-cfg-99",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-100",
      slug: "franklin-aszv9-central-ducted-cfg-100",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-101",
      slug: "franklin-aszv9-central-ducted-cfg-101",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-102",
      slug: "franklin-aszv9-central-ducted-cfg-102",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-103",
      slug: "franklin-aszv9-central-ducted-cfg-103",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-104",
      slug: "franklin-aszv9-central-ducted-cfg-104",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-105",
      slug: "franklin-aszv9-central-ducted-cfg-105",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-106",
      slug: "franklin-aszv9-central-ducted-cfg-106",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-107",
      slug: "franklin-aszv9-central-ducted-cfg-107",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-108",
      slug: "franklin-aszv9-central-ducted-cfg-108",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-109",
      slug: "franklin-aszv9-central-ducted-cfg-109",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-110",
      slug: "franklin-aszv9-central-ducted-cfg-110",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-111",
      slug: "franklin-aszv9-central-ducted-cfg-111",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-112",
      slug: "franklin-aszv9-central-ducted-cfg-112",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-113",
      slug: "franklin-aszv9-central-ducted-cfg-113",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-114",
      slug: "franklin-aszv9-central-ducted-cfg-114",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-115",
      slug: "franklin-aszv9-central-ducted-cfg-115",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-116",
      slug: "franklin-aszv9-central-ducted-cfg-116",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-117",
      slug: "franklin-aszv9-central-ducted-cfg-117",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-118",
      slug: "franklin-aszv9-central-ducted-cfg-118",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-119",
      slug: "franklin-aszv9-central-ducted-cfg-119",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-120",
      slug: "franklin-aszv9-central-ducted-cfg-120",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-121",
      slug: "franklin-aszv9-central-ducted-cfg-121",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-122",
      slug: "franklin-aszv9-central-ducted-cfg-122",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-123",
      slug: "franklin-aszv9-central-ducted-cfg-123",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-124",
      slug: "franklin-aszv9-central-ducted-cfg-124",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-125",
      slug: "franklin-aszv9-central-ducted-cfg-125",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-126",
      slug: "franklin-aszv9-central-ducted-cfg-126",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-127",
      slug: "franklin-aszv9-central-ducted-cfg-127",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-128",
      slug: "franklin-aszv9-central-ducted-cfg-128",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-129",
      slug: "franklin-aszv9-central-ducted-cfg-129",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-130",
      slug: "franklin-aszv9-central-ducted-cfg-130",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-131",
      slug: "franklin-aszv9-central-ducted-cfg-131",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-132",
      slug: "franklin-aszv9-central-ducted-cfg-132",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-133",
      slug: "franklin-aszv9-central-ducted-cfg-133",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-134",
      slug: "franklin-aszv9-central-ducted-cfg-134",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-135",
      slug: "franklin-aszv9-central-ducted-cfg-135",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-aszv9-central-ducted-cfg-136",
      slug: "franklin-aszv9-central-ducted-cfg-136",
      modelId: "franklin-aszv9-central-ducted",
      outdoorUnitId: "franklin-aszv904810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-1",
      slug: "franklin-standard-central-ducted-cfg-1",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-2",
      slug: "franklin-standard-central-ducted-cfg-2",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-3",
      slug: "franklin-standard-central-ducted-cfg-3",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-4",
      slug: "franklin-standard-central-ducted-cfg-4",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-5",
      slug: "franklin-standard-central-ducted-cfg-5",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-6",
      slug: "franklin-standard-central-ducted-cfg-6",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-7",
      slug: "franklin-standard-central-ducted-cfg-7",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-8",
      slug: "franklin-standard-central-ducted-cfg-8",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-9",
      slug: "franklin-standard-central-ducted-cfg-9",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-10",
      slug: "franklin-standard-central-ducted-cfg-10",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-11",
      slug: "franklin-standard-central-ducted-cfg-11",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-12",
      slug: "franklin-standard-central-ducted-cfg-12",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-13",
      slug: "franklin-standard-central-ducted-cfg-13",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-14",
      slug: "franklin-standard-central-ducted-cfg-14",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-15",
      slug: "franklin-standard-central-ducted-cfg-15",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-gszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-16",
      slug: "franklin-standard-central-ducted-cfg-16",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-17",
      slug: "franklin-standard-central-ducted-cfg-17",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-18",
      slug: "franklin-standard-central-ducted-cfg-18",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-19",
      slug: "franklin-standard-central-ducted-cfg-19",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-20",
      slug: "franklin-standard-central-ducted-cfg-20",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-21",
      slug: "franklin-standard-central-ducted-cfg-21",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-22",
      slug: "franklin-standard-central-ducted-cfg-22",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-23",
      slug: "franklin-standard-central-ducted-cfg-23",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-24",
      slug: "franklin-standard-central-ducted-cfg-24",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-25",
      slug: "franklin-standard-central-ducted-cfg-25",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-26",
      slug: "franklin-standard-central-ducted-cfg-26",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-27",
      slug: "franklin-standard-central-ducted-cfg-27",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-28",
      slug: "franklin-standard-central-ducted-cfg-28",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-29",
      slug: "franklin-standard-central-ducted-cfg-29",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "franklin-standard-central-ducted-cfg-30",
      slug: "franklin-standard-central-ducted-cfg-30",
      modelId: "franklin-standard-central-ducted",
      outdoorUnitId: "franklin-aszv906010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50500,
      coolingCapacityMaxBtu: 50500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "franklin-msh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 1.59,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-msh-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-msh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-msh-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-msh-series-wall-single-cfg-5",
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
      configurationId: "franklin-msh-series-wall-single-cfg-6",
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
      configurationId: "franklin-msh-series-wall-single-cfg-7",
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
      configurationId: "franklin-msh-series-wall-single-cfg-8",
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
      configurationId: "franklin-msh-series-wall-single-cfg-9",
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
      configurationId: "franklin-msh-series-wall-single-cfg-10",
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
      configurationId: "franklin-msh-series-wall-single-cfg-11",
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
      configurationId: "franklin-msh-series-wall-single-cfg-12",
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
      configurationId: "franklin-msh-series-wall-single-cfg-13",
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
      configurationId: "franklin-msh-series-wall-single-cfg-14",
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
      configurationId: "franklin-msh-series-wall-single-cfg-15",
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
      configurationId: "franklin-msh-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-msh-series-wall-single-cfg-17",
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
      configurationId: "franklin-mst-series-wall-single-cfg-1",
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
      configurationId: "franklin-mst-series-wall-single-cfg-2",
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
      configurationId: "franklin-mst-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-cfg-4",
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
      configurationId: "franklin-mst-series-wall-single-cfg-5",
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
      configurationId: "franklin-mst-series-wall-single-cfg-6",
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
      configurationId: "franklin-mst-series-wall-single-cfg-7",
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
      configurationId: "franklin-mst-series-wall-single-cfg-8",
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
      configurationId: "franklin-mst-series-wall-single-cfg-9",
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
      configurationId: "franklin-mst-series-wall-single-cfg-10",
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
      configurationId: "franklin-mst-series-wall-single-cfg-11",
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
      configurationId: "franklin-mst-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-cfg-13",
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
      configurationId: "franklin-mst-series-wall-single-cfg-14",
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
      configurationId: "franklin-mst-series-wall-single-cfg-15",
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
      configurationId: "franklin-mst-series-wall-single-cfg-16",
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
      configurationId: "franklin-mst-series-wall-single-cfg-17",
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
      configurationId: "franklin-mst-series-wall-single-cfg-18",
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
      configurationId: "franklin-mst-series-wall-single-cfg-19",
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
      configurationId: "franklin-mst-series-wall-single-cfg-20",
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
      configurationId: "franklin-mst-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-mst-series-wall-single-cfg-22",
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
      configurationId: "franklin-mst-series-wall-single-cfg-23",
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
      configurationId: "franklin-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-13",
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
      configurationId: "franklin-standard-wall-single-cfg-14",
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
      configurationId: "franklin-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-3",
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
      configurationId: "franklin-gszv9-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-102",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-107",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-110",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-114",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-118",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-124",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-126",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-127",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-gszv9-central-ducted-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-3",
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
      configurationId: "franklin-aszv9-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14200,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-101",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-102",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-103",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-104",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-105",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-107",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-110",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-113",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-114",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-115",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-116",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-117",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-118",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-123",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-124",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-125",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-126",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-127",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-aszv9-central-ducted-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "franklin-standard-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32400,
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
