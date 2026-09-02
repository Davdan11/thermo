import type { BrandDataset } from "../../types";

export const ngtradeDataset: BrandDataset = {
  brand: {
    id: "ng-trade",
    slug: "ng-trade",
    name: "NG TRADE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ng-trade-obmh-series",
      slug: "ng-trade-obmh-series",
      name: "OBMH series",
      brandId: "ng-trade",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-standard",
      slug: "ng-trade-standard",
      name: "Standard",
      brandId: "ng-trade",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mobmh-series",
      slug: "ng-trade-mobmh-series",
      name: "MOBMH series",
      brandId: "ng-trade",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series",
      slug: "ng-trade-mob-series",
      name: "MOB series",
      brandId: "ng-trade",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series",
      slug: "ng-trade-omeg-series",
      name: "OMEG series",
      brandId: "ng-trade",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-obm-series",
      slug: "ng-trade-obm-series",
      name: "OBM Series",
      brandId: "ng-trade",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-oms-series",
      slug: "ng-trade-oms-series",
      name: "OMS Series",
      brandId: "ng-trade",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-ezc-series",
      slug: "ng-trade-ezc-series",
      name: "EZC Series",
      brandId: "ng-trade",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ng-trade-obmh-series-wall-single",
      slug: "ng-trade-obmh-series-wall-single",
      name: "OBMH series",
      seriesId: "ng-trade-obmh-series",
      brandId: "ng-trade",
      modelNumber: "OBMH series",
      normalizedModelNumber: "obmh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6300,
      heatingCapacity5FMaxBtu: 6300,
      seer2Min: 21.5,
      seer2Max: 21.5,
      hspf2Min: 9.1,
      hspf2Max: 9.1,
      cop5FMin: 2.16,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-standard-wall-single",
      slug: "ng-trade-standard-wall-single",
      name: "Standard",
      seriesId: "ng-trade-standard",
      brandId: "ng-trade",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 39000,
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
      id: "ng-trade-mobmh-series-wall-single",
      slug: "ng-trade-mobmh-series-wall-single",
      name: "MOBMH series",
      seriesId: "ng-trade-mobmh-series",
      brandId: "ng-trade",
      modelNumber: "MOBMH series",
      normalizedModelNumber: "mobmh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 14400,
      heatingCapacity5FMaxBtu: 14800,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 9.8,
      hspf2Max: 10.2,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single",
      slug: "ng-trade-mob-series-wall-single",
      name: "MOB series",
      seriesId: "ng-trade-mob-series",
      brandId: "ng-trade",
      modelNumber: "MOB series",
      normalizedModelNumber: "mob-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 45000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 20,
      seer2Max: 23.5,
      hspf2Min: 9,
      hspf2Max: 10.6,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series-wall-single",
      slug: "ng-trade-omeg-series-wall-single",
      name: "OMEG series",
      seriesId: "ng-trade-omeg-series",
      brandId: "ng-trade",
      modelNumber: "OMEG series",
      normalizedModelNumber: "omeg-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 8900,
      heatingCapacity5FMaxBtu: 18900,
      seer2Min: 21,
      seer2Max: 26.4,
      hspf2Min: 8.5,
      hspf2Max: 11.6,
      cop5FMin: 1.85,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-obm-series-wall-single",
      slug: "ng-trade-obm-series-wall-single",
      name: "OBM Series",
      seriesId: "ng-trade-obm-series",
      brandId: "ng-trade",
      modelNumber: "OBM Series",
      normalizedModelNumber: "obm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 18.5,
      seer2Max: 22.3,
      hspf2Min: 9,
      hspf2Max: 9.4,
      cop5FMin: 1.94,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-oms-series-wall-single",
      slug: "ng-trade-oms-series-wall-single",
      name: "OMS Series",
      seriesId: "ng-trade-oms-series",
      brandId: "ng-trade",
      modelNumber: "OMS Series",
      normalizedModelNumber: "oms-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 8600,
      heatingCapacity5FMaxBtu: 19500,
      seer2Min: 23.1,
      seer2Max: 24.6,
      hspf2Min: 10,
      hspf2Max: 13,
      cop5FMin: 2.15,
      cop5FMax: 2.35,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-ezc-series-central-ducted",
      slug: "ng-trade-ezc-series-central-ducted",
      name: "EZC Series",
      seriesId: "ng-trade-ezc-series",
      brandId: "ng-trade",
      modelNumber: "EZC Series",
      normalizedModelNumber: "ezc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 18.8,
      hspf2Min: 8.4,
      hspf2Max: 9.7,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ng-trade-obmh090a",
      modelNumber: "OBMH090A",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh120a",
      modelNumber: "OBMH120A",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh121a",
      modelNumber: "OBMH121A",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh181a",
      modelNumber: "OBMH181A",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh241a",
      modelNumber: "OBMH241A",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh360c",
      modelNumber: "MOBMH360C",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh480c",
      modelNumber: "MOBMH480C",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh120b",
      modelNumber: "OBMH120B",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh121b",
      modelNumber: "OBMH121B",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh361b",
      modelNumber: "OBMH361B",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh600d",
      modelNumber: "MOBMH600D",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-ezceno30k",
      modelNumber: "EZCENO30K",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh180c",
      modelNumber: "MOBMH180C",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh270c",
      modelNumber: "MOBMH270C",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh180d",
      modelNumber: "MOBMH180D",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh270d",
      modelNumber: "MOBMH270D",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh360d",
      modelNumber: "MOBMH360D",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-mobmh480d",
      modelNumber: "MOBMH480D",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omega120e",
      modelNumber: "OMEGA120E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omega091e",
      modelNumber: "OMEGA091E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omega121e",
      modelNumber: "OMEGA121E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omega181e",
      modelNumber: "OMEGA181E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omega241e",
      modelNumber: "OMEGA241E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh090b",
      modelNumber: "OBMH090B",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh091b",
      modelNumber: "OBMH091B",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh181b",
      modelNumber: "OBMH181B",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh241b",
      modelNumber: "OBMH241B",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-obmh301b",
      modelNumber: "OBMH301B",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omstar120e",
      modelNumber: "OMSTAR120E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omstar091e",
      modelNumber: "OMSTAR091E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omstar121e",
      modelNumber: "OMSTAR121E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omstar181e",
      modelNumber: "OMSTAR181E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-omstar241e",
      modelNumber: "OMSTAR241E",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-ezceno18k",
      modelNumber: "EZCENO18K",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-ezceno24k",
      modelNumber: "EZCENO24K",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-ezceno36k",
      modelNumber: "EZCENO36K",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-ezceno48k",
      modelNumber: "EZCENO48K",
      brandId: "ng-trade",
      refrigerant: null as any,
    },
    {
      id: "ng-trade-ezceno60k",
      modelNumber: "EZCENO60K",
      brandId: "ng-trade",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ng-trade-obmh-series-wall-single-cfg-1",
      slug: "ng-trade-obmh-series-wall-single-cfg-1",
      modelId: "ng-trade-obmh-series-wall-single",
      outdoorUnitId: "ng-trade-obmh090a",
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
      id: "ng-trade-standard-wall-single-cfg-1",
      slug: "ng-trade-standard-wall-single-cfg-1",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-obmh120a",
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
      id: "ng-trade-standard-wall-single-cfg-2",
      slug: "ng-trade-standard-wall-single-cfg-2",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-obmh121a",
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
      id: "ng-trade-standard-wall-single-cfg-3",
      slug: "ng-trade-standard-wall-single-cfg-3",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-obmh181a",
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
      id: "ng-trade-standard-wall-single-cfg-4",
      slug: "ng-trade-standard-wall-single-cfg-4",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-obmh241a",
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
      id: "ng-trade-standard-wall-single-cfg-5",
      slug: "ng-trade-standard-wall-single-cfg-5",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-mobmh360c",
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
      id: "ng-trade-standard-wall-single-cfg-6",
      slug: "ng-trade-standard-wall-single-cfg-6",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-mobmh480c",
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
      id: "ng-trade-standard-wall-single-cfg-7",
      slug: "ng-trade-standard-wall-single-cfg-7",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-mobmh480c",
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
      id: "ng-trade-standard-wall-single-cfg-8",
      slug: "ng-trade-standard-wall-single-cfg-8",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-obmh120b",
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
      id: "ng-trade-standard-wall-single-cfg-9",
      slug: "ng-trade-standard-wall-single-cfg-9",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-obmh121b",
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
      id: "ng-trade-standard-wall-single-cfg-10",
      slug: "ng-trade-standard-wall-single-cfg-10",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-obmh361b",
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
      id: "ng-trade-standard-wall-single-cfg-11",
      slug: "ng-trade-standard-wall-single-cfg-11",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-mobmh600d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-standard-wall-single-cfg-12",
      slug: "ng-trade-standard-wall-single-cfg-12",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-mobmh600d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-standard-wall-single-cfg-13",
      slug: "ng-trade-standard-wall-single-cfg-13",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-mobmh600d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 60000,
      coolingCapacityMaxBtu: 60000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-standard-wall-single-cfg-14",
      slug: "ng-trade-standard-wall-single-cfg-14",
      modelId: "ng-trade-standard-wall-single",
      outdoorUnitId: "ng-trade-ezceno30k",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mobmh-series-wall-single-cfg-1",
      slug: "ng-trade-mobmh-series-wall-single-cfg-1",
      modelId: "ng-trade-mobmh-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh180c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mobmh-series-wall-single-cfg-2",
      slug: "ng-trade-mobmh-series-wall-single-cfg-2",
      modelId: "ng-trade-mobmh-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh180c",
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
      id: "ng-trade-mobmh-series-wall-single-cfg-3",
      slug: "ng-trade-mobmh-series-wall-single-cfg-3",
      modelId: "ng-trade-mobmh-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh180c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-1",
      slug: "ng-trade-mob-series-wall-single-cfg-1",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh270c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-2",
      slug: "ng-trade-mob-series-wall-single-cfg-2",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh270c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-3",
      slug: "ng-trade-mob-series-wall-single-cfg-3",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh270c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 22.25,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-4",
      slug: "ng-trade-mob-series-wall-single-cfg-4",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh180d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-5",
      slug: "ng-trade-mob-series-wall-single-cfg-5",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh180d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-6",
      slug: "ng-trade-mob-series-wall-single-cfg-6",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh180d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-7",
      slug: "ng-trade-mob-series-wall-single-cfg-7",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh270d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-8",
      slug: "ng-trade-mob-series-wall-single-cfg-8",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh270d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26600,
      coolingCapacityMaxBtu: 26600,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-9",
      slug: "ng-trade-mob-series-wall-single-cfg-9",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh270d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26200,
      coolingCapacityMaxBtu: 26200,
      seer2: 22,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-10",
      slug: "ng-trade-mob-series-wall-single-cfg-10",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh360d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 23.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-11",
      slug: "ng-trade-mob-series-wall-single-cfg-11",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh360d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-12",
      slug: "ng-trade-mob-series-wall-single-cfg-12",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh360d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 21.55,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-13",
      slug: "ng-trade-mob-series-wall-single-cfg-13",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh480d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-14",
      slug: "ng-trade-mob-series-wall-single-cfg-14",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh480d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-mob-series-wall-single-cfg-15",
      slug: "ng-trade-mob-series-wall-single-cfg-15",
      modelId: "ng-trade-mob-series-wall-single",
      outdoorUnitId: "ng-trade-mobmh480d",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.85,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series-wall-single-cfg-1",
      slug: "ng-trade-omeg-series-wall-single-cfg-1",
      modelId: "ng-trade-omeg-series-wall-single",
      outdoorUnitId: "ng-trade-omega120e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series-wall-single-cfg-2",
      slug: "ng-trade-omeg-series-wall-single-cfg-2",
      modelId: "ng-trade-omeg-series-wall-single",
      outdoorUnitId: "ng-trade-omega091e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26.4,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series-wall-single-cfg-3",
      slug: "ng-trade-omeg-series-wall-single-cfg-3",
      modelId: "ng-trade-omeg-series-wall-single",
      outdoorUnitId: "ng-trade-omega121e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series-wall-single-cfg-4",
      slug: "ng-trade-omeg-series-wall-single-cfg-4",
      modelId: "ng-trade-omeg-series-wall-single",
      outdoorUnitId: "ng-trade-omega181e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series-wall-single-cfg-5",
      slug: "ng-trade-omeg-series-wall-single-cfg-5",
      modelId: "ng-trade-omeg-series-wall-single",
      outdoorUnitId: "ng-trade-omega241e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series-wall-single-cfg-6",
      slug: "ng-trade-omeg-series-wall-single-cfg-6",
      modelId: "ng-trade-omeg-series-wall-single",
      outdoorUnitId: "ng-trade-omega181e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-omeg-series-wall-single-cfg-7",
      slug: "ng-trade-omeg-series-wall-single-cfg-7",
      modelId: "ng-trade-omeg-series-wall-single",
      outdoorUnitId: "ng-trade-omega241e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-obm-series-wall-single-cfg-1",
      slug: "ng-trade-obm-series-wall-single-cfg-1",
      modelId: "ng-trade-obm-series-wall-single",
      outdoorUnitId: "ng-trade-obmh090b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-obm-series-wall-single-cfg-2",
      slug: "ng-trade-obm-series-wall-single-cfg-2",
      modelId: "ng-trade-obm-series-wall-single",
      outdoorUnitId: "ng-trade-obmh091b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-obm-series-wall-single-cfg-3",
      slug: "ng-trade-obm-series-wall-single-cfg-3",
      modelId: "ng-trade-obm-series-wall-single",
      outdoorUnitId: "ng-trade-obmh181b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.2,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-obm-series-wall-single-cfg-4",
      slug: "ng-trade-obm-series-wall-single-cfg-4",
      modelId: "ng-trade-obm-series-wall-single",
      outdoorUnitId: "ng-trade-obmh241b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-obm-series-wall-single-cfg-5",
      slug: "ng-trade-obm-series-wall-single-cfg-5",
      modelId: "ng-trade-obm-series-wall-single",
      outdoorUnitId: "ng-trade-obmh301b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-oms-series-wall-single-cfg-1",
      slug: "ng-trade-oms-series-wall-single-cfg-1",
      modelId: "ng-trade-oms-series-wall-single",
      outdoorUnitId: "ng-trade-omstar120e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.2,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-oms-series-wall-single-cfg-2",
      slug: "ng-trade-oms-series-wall-single-cfg-2",
      modelId: "ng-trade-oms-series-wall-single",
      outdoorUnitId: "ng-trade-omstar091e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.6,
      hspf2: 13,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-oms-series-wall-single-cfg-3",
      slug: "ng-trade-oms-series-wall-single-cfg-3",
      modelId: "ng-trade-oms-series-wall-single",
      outdoorUnitId: "ng-trade-omstar121e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-oms-series-wall-single-cfg-4",
      slug: "ng-trade-oms-series-wall-single-cfg-4",
      modelId: "ng-trade-oms-series-wall-single",
      outdoorUnitId: "ng-trade-omstar181e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-oms-series-wall-single-cfg-5",
      slug: "ng-trade-oms-series-wall-single-cfg-5",
      modelId: "ng-trade-oms-series-wall-single",
      outdoorUnitId: "ng-trade-omstar241e",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-ezc-series-central-ducted-cfg-1",
      slug: "ng-trade-ezc-series-central-ducted-cfg-1",
      modelId: "ng-trade-ezc-series-central-ducted",
      outdoorUnitId: "ng-trade-ezceno18k",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-ezc-series-central-ducted-cfg-2",
      slug: "ng-trade-ezc-series-central-ducted-cfg-2",
      modelId: "ng-trade-ezc-series-central-ducted",
      outdoorUnitId: "ng-trade-ezceno24k",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.1,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-ezc-series-central-ducted-cfg-3",
      slug: "ng-trade-ezc-series-central-ducted-cfg-3",
      modelId: "ng-trade-ezc-series-central-ducted",
      outdoorUnitId: "ng-trade-ezceno36k",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.1,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-ezc-series-central-ducted-cfg-4",
      slug: "ng-trade-ezc-series-central-ducted-cfg-4",
      modelId: "ng-trade-ezc-series-central-ducted",
      outdoorUnitId: "ng-trade-ezceno48k",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ng-trade-ezc-series-central-ducted-cfg-5",
      slug: "ng-trade-ezc-series-central-ducted-cfg-5",
      modelId: "ng-trade-ezc-series-central-ducted",
      outdoorUnitId: "ng-trade-ezceno60k",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ng-trade-obmh-series-wall-single-cfg-1",
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
      configurationId: "ng-trade-standard-wall-single-cfg-1",
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
      configurationId: "ng-trade-standard-wall-single-cfg-2",
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
      configurationId: "ng-trade-standard-wall-single-cfg-3",
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
      configurationId: "ng-trade-standard-wall-single-cfg-4",
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
      configurationId: "ng-trade-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-standard-wall-single-cfg-8",
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
      configurationId: "ng-trade-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mobmh-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mobmh-series-wall-single-cfg-2",
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
      configurationId: "ng-trade-mobmh-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mob-series-wall-single-cfg-1",
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
      configurationId: "ng-trade-mob-series-wall-single-cfg-2",
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
      configurationId: "ng-trade-mob-series-wall-single-cfg-3",
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
      configurationId: "ng-trade-mob-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mob-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mob-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mob-series-wall-single-cfg-7",
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
      configurationId: "ng-trade-mob-series-wall-single-cfg-8",
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
      configurationId: "ng-trade-mob-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mob-series-wall-single-cfg-10",
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
      configurationId: "ng-trade-mob-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mob-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mob-series-wall-single-cfg-13",
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
      configurationId: "ng-trade-mob-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-mob-series-wall-single-cfg-15",
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
      configurationId: "ng-trade-omeg-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-omeg-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-omeg-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-omeg-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-omeg-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-omeg-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-omeg-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-obm-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-obm-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-obm-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-obm-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-obm-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-oms-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-oms-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-oms-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-oms-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.35,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-oms-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-ezc-series-central-ducted-cfg-1",
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
      configurationId: "ng-trade-ezc-series-central-ducted-cfg-2",
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
      configurationId: "ng-trade-ezc-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ng-trade-ezc-series-central-ducted-cfg-4",
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
      configurationId: "ng-trade-ezc-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
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
