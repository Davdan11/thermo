import type { BrandDataset } from "../../types";

export const durastarDataset: BrandDataset = {
  brand: {
    id: "durastar",
    slug: "durastar",
    name: "DURASTAR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "durastar-dra1",
      slug: "durastar-dra1",
      name: "DRA1",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2",
      slug: "durastar-dra2",
      name: "DRA2",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3",
      slug: "durastar-dra3",
      name: "DRA3",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series",
      slug: "durastar-dra-series",
      name: "DRA Series",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard",
      slug: "durastar-standard",
      name: "Standard",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra4",
      slug: "durastar-dra4",
      name: "DRA4",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5",
      slug: "durastar-dra5",
      name: "DRA5",
      brandId: "durastar",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series",
      slug: "durastar-dru-series",
      name: "DRU Series",
      brandId: "durastar",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "durastar-dra1-wall-single",
      slug: "durastar-dra1-wall-single",
      name: "DRA1",
      seriesId: "durastar-dra1",
      brandId: "durastar",
      modelNumber: "DRA1",
      normalizedModelNumber: "dra1",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 18,
      seer2Max: 26.4,
      hspf2Min: 8.5,
      hspf2Max: 12.4,
      cop5FMin: 1.75,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single",
      slug: "durastar-dra2-wall-single",
      name: "DRA2",
      seriesId: "durastar-dra2",
      brandId: "durastar",
      modelNumber: "DRA2",
      normalizedModelNumber: "dra2",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 19000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 16000,
      seer2Min: 19,
      seer2Max: 21,
      hspf2Min: 9,
      hspf2Max: 10.2,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single",
      slug: "durastar-dra3-wall-single",
      name: "DRA3",
      seriesId: "durastar-dra3",
      brandId: "durastar",
      modelNumber: "DRA3",
      normalizedModelNumber: "dra3",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 20,
      seer2Max: 23.5,
      hspf2Min: 9.2,
      hspf2Max: 9.8,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single",
      slug: "durastar-dra-series-wall-single",
      name: "DRA Series",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series",
      normalizedModelNumber: "dra-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 18,
      seer2Max: 27.2,
      hspf2Min: 9,
      hspf2Max: 14.6,
      cop5FMin: 1.68,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single",
      slug: "durastar-standard-wall-single",
      name: "Standard",
      seriesId: "durastar-standard",
      brandId: "durastar",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 19400,
      heatingCapacity5FMaxBtu: 45000,
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
      id: "durastar-dra4-wall-single",
      slug: "durastar-dra4-wall-single",
      name: "DRA4",
      seriesId: "durastar-dra4",
      brandId: "durastar",
      modelNumber: "DRA4",
      normalizedModelNumber: "dra4",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 35000,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 19.5,
      seer2Max: 20,
      hspf2Min: 9.7,
      hspf2Max: 9.85,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single",
      slug: "durastar-dra5-wall-single",
      name: "DRA5",
      seriesId: "durastar-dra5",
      brandId: "durastar",
      modelNumber: "DRA5",
      normalizedModelNumber: "dra5",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 34800,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 18.8,
      seer2Max: 21.2,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted",
      slug: "durastar-dra-series-central-ducted",
      name: "DRA Series",
      seriesId: "durastar-dra-series",
      brandId: "durastar",
      modelNumber: "DRA Series",
      normalizedModelNumber: "dra-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 17600,
      seer2Min: 17.6,
      seer2Max: 19.7,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.9,
      cop5FMax: 2.31,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted",
      slug: "durastar-dru-series-central-ducted",
      name: "DRU Series",
      seriesId: "durastar-dru-series",
      brandId: "durastar",
      modelNumber: "DRU Series",
      normalizedModelNumber: "dru-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19.3,
      hspf2Min: 8.1,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "durastar-dra1u09s1b",
      modelNumber: "DRA1U09S1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u12s1b",
      modelNumber: "DRA1U12S1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u18s1b",
      modelNumber: "DRA1U18S1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u24s1b",
      modelNumber: "DRA1U24S1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h09s1a",
      modelNumber: "DRA1H09S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h12s1a",
      modelNumber: "DRA1H12S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h18s1a",
      modelNumber: "DRA1H18S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h24s1a",
      modelNumber: "DRA1H24S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra2u18m1b",
      modelNumber: "DRA2U18M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra2h18m1a",
      modelNumber: "DRA2H18M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra3u28m1b",
      modelNumber: "DRA3U28M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra3h28m1a",
      modelNumber: "DRA3H28M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra4u36m1b",
      modelNumber: "DRA4U36M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5u48m1b",
      modelNumber: "DRA5U48M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h33s1a",
      modelNumber: "DRA1H33S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra3h18m2a",
      modelNumber: "DRA3H18M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra4h28m2a",
      modelNumber: "DRA4H28M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h36m2a",
      modelNumber: "DRA5H36M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra3u18m2a",
      modelNumber: "DRA3U18M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra4u28m2a",
      modelNumber: "DRA4U28M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5u36m2a",
      modelNumber: "DRA5U36M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h06s2a",
      modelNumber: "DRA1H06S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h09s2a",
      modelNumber: "DRA1H09S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h12s2a",
      modelNumber: "DRA1H12S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h18s2a",
      modelNumber: "DRA1H18S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h24s2a",
      modelNumber: "DRA1H24S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h33s2a",
      modelNumber: "DRA1H33S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u09s2a",
      modelNumber: "DRA1U09S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u12s2a",
      modelNumber: "DRA1U12S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u18s2a",
      modelNumber: "DRA1U18S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u24s2a",
      modelNumber: "DRA1U24S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra6h48m2a",
      modelNumber: "DRA6H48M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra6h55m2a",
      modelNumber: "DRA6H55M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra6u48m2a",
      modelNumber: "DRA6U48M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5u55m1b",
      modelNumber: "DRA5U55M1B",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u36s1a",
      modelNumber: "DRA1U36S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u48s1a",
      modelNumber: "DRA1U48S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u60s1a",
      modelNumber: "DRA1U60S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1u30s1a",
      modelNumber: "DRA1U30S1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra6u60m2a",
      modelNumber: "DRA6U60M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h48m2a",
      modelNumber: "DRA5H48M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h55m2a",
      modelNumber: "DRA5H55M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5u48m2a",
      modelNumber: "DRA5U48M2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h30s2a",
      modelNumber: "DRA1H30S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h36s2a",
      modelNumber: "DRA1H36S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra1h60s2a",
      modelNumber: "DRA1H60S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra4h36m1a",
      modelNumber: "DRA4H36M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h48m1a",
      modelNumber: "DRA5H48M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dra5h55m1a",
      modelNumber: "DRA5H55M1A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h18s2a",
      modelNumber: "DRU1H18S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h24s2a",
      modelNumber: "DRU1H24S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h36s2a",
      modelNumber: "DRU1H36S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h42s2a",
      modelNumber: "DRU1H42S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h48s2a",
      modelNumber: "DRU1H48S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h49s2a",
      modelNumber: "DRU1H49S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h60s2a",
      modelNumber: "DRU1H60S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u18s2a",
      modelNumber: "DRU1U18S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u24s2a",
      modelNumber: "DRU1U24S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u30s2a",
      modelNumber: "DRU1U30S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u36s2a",
      modelNumber: "DRU1U36S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u48s2a",
      modelNumber: "DRU1U48S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1u60s2a",
      modelNumber: "DRU1U60S2A",
      brandId: "durastar",
      refrigerant: null as any,
    },
    {
      id: "durastar-dru1h30s2a",
      modelNumber: "DRU1H30S2A",
      brandId: "durastar",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "durastar-dra1-wall-single-cfg-1",
      slug: "durastar-dra1-wall-single-cfg-1",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-2",
      slug: "durastar-dra1-wall-single-cfg-2",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-3",
      slug: "durastar-dra1-wall-single-cfg-3",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u18s1b",
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
      id: "durastar-dra1-wall-single-cfg-4",
      slug: "durastar-dra1-wall-single-cfg-4",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u24s1b",
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
      id: "durastar-dra1-wall-single-cfg-5",
      slug: "durastar-dra1-wall-single-cfg-5",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u09s1b",
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
      id: "durastar-dra1-wall-single-cfg-6",
      slug: "durastar-dra1-wall-single-cfg-6",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u09s1b",
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
      id: "durastar-dra1-wall-single-cfg-7",
      slug: "durastar-dra1-wall-single-cfg-7",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-8",
      slug: "durastar-dra1-wall-single-cfg-8",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-9",
      slug: "durastar-dra1-wall-single-cfg-9",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-10",
      slug: "durastar-dra1-wall-single-cfg-10",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-11",
      slug: "durastar-dra1-wall-single-cfg-11",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-12",
      slug: "durastar-dra1-wall-single-cfg-12",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-13",
      slug: "durastar-dra1-wall-single-cfg-13",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u18s1b",
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
      id: "durastar-dra1-wall-single-cfg-14",
      slug: "durastar-dra1-wall-single-cfg-14",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-15",
      slug: "durastar-dra1-wall-single-cfg-15",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-16",
      slug: "durastar-dra1-wall-single-cfg-16",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-17",
      slug: "durastar-dra1-wall-single-cfg-17",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 23.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-18",
      slug: "durastar-dra1-wall-single-cfg-18",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h09s1a",
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
      id: "durastar-dra1-wall-single-cfg-19",
      slug: "durastar-dra1-wall-single-cfg-19",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h12s1a",
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
      id: "durastar-dra1-wall-single-cfg-20",
      slug: "durastar-dra1-wall-single-cfg-20",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h18s1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-21",
      slug: "durastar-dra1-wall-single-cfg-21",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h24s1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-22",
      slug: "durastar-dra1-wall-single-cfg-22",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u09s1b",
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
      id: "durastar-dra1-wall-single-cfg-23",
      slug: "durastar-dra1-wall-single-cfg-23",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h09s1a",
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
      id: "durastar-dra1-wall-single-cfg-24",
      slug: "durastar-dra1-wall-single-cfg-24",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h12s1a",
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
      id: "durastar-dra1-wall-single-cfg-25",
      slug: "durastar-dra1-wall-single-cfg-25",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h18s1a",
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
      id: "durastar-dra1-wall-single-cfg-26",
      slug: "durastar-dra1-wall-single-cfg-26",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u09s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-27",
      slug: "durastar-dra1-wall-single-cfg-27",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-28",
      slug: "durastar-dra1-wall-single-cfg-28",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.8,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-29",
      slug: "durastar-dra1-wall-single-cfg-29",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h12s1a",
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
      id: "durastar-dra1-wall-single-cfg-30",
      slug: "durastar-dra1-wall-single-cfg-30",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1u12s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra1-wall-single-cfg-31",
      slug: "durastar-dra1-wall-single-cfg-31",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h09s1a",
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
      id: "durastar-dra1-wall-single-cfg-32",
      slug: "durastar-dra1-wall-single-cfg-32",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h12s1a",
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
      id: "durastar-dra1-wall-single-cfg-33",
      slug: "durastar-dra1-wall-single-cfg-33",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h18s1a",
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
      id: "durastar-dra1-wall-single-cfg-34",
      slug: "durastar-dra1-wall-single-cfg-34",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h24s1a",
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
      id: "durastar-dra1-wall-single-cfg-35",
      slug: "durastar-dra1-wall-single-cfg-35",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h09s1a",
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
      id: "durastar-dra1-wall-single-cfg-36",
      slug: "durastar-dra1-wall-single-cfg-36",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h12s1a",
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
      id: "durastar-dra1-wall-single-cfg-37",
      slug: "durastar-dra1-wall-single-cfg-37",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h18s1a",
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
      id: "durastar-dra1-wall-single-cfg-38",
      slug: "durastar-dra1-wall-single-cfg-38",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h24s1a",
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
      id: "durastar-dra1-wall-single-cfg-39",
      slug: "durastar-dra1-wall-single-cfg-39",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h18s1a",
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
      id: "durastar-dra1-wall-single-cfg-40",
      slug: "durastar-dra1-wall-single-cfg-40",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h24s1a",
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
      id: "durastar-dra1-wall-single-cfg-41",
      slug: "durastar-dra1-wall-single-cfg-41",
      modelId: "durastar-dra1-wall-single",
      outdoorUnitId: "durastar-dra1h12s1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-cfg-1",
      slug: "durastar-dra2-wall-single-cfg-1",
      modelId: "durastar-dra2-wall-single",
      outdoorUnitId: "durastar-dra2u18m1b",
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
      id: "durastar-dra2-wall-single-cfg-2",
      slug: "durastar-dra2-wall-single-cfg-2",
      modelId: "durastar-dra2-wall-single",
      outdoorUnitId: "durastar-dra2u18m1b",
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
      id: "durastar-dra2-wall-single-cfg-3",
      slug: "durastar-dra2-wall-single-cfg-3",
      modelId: "durastar-dra2-wall-single",
      outdoorUnitId: "durastar-dra2u18m1b",
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
      id: "durastar-dra2-wall-single-cfg-4",
      slug: "durastar-dra2-wall-single-cfg-4",
      modelId: "durastar-dra2-wall-single",
      outdoorUnitId: "durastar-dra2h18m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra2-wall-single-cfg-5",
      slug: "durastar-dra2-wall-single-cfg-5",
      modelId: "durastar-dra2-wall-single",
      outdoorUnitId: "durastar-dra2h18m1a",
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
      id: "durastar-dra2-wall-single-cfg-6",
      slug: "durastar-dra2-wall-single-cfg-6",
      modelId: "durastar-dra2-wall-single",
      outdoorUnitId: "durastar-dra2h18m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19.75,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-cfg-1",
      slug: "durastar-dra3-wall-single-cfg-1",
      modelId: "durastar-dra3-wall-single",
      outdoorUnitId: "durastar-dra3u28m1b",
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
      id: "durastar-dra3-wall-single-cfg-2",
      slug: "durastar-dra3-wall-single-cfg-2",
      modelId: "durastar-dra3-wall-single",
      outdoorUnitId: "durastar-dra3u28m1b",
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
      id: "durastar-dra3-wall-single-cfg-3",
      slug: "durastar-dra3-wall-single-cfg-3",
      modelId: "durastar-dra3-wall-single",
      outdoorUnitId: "durastar-dra3u28m1b",
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
      id: "durastar-dra3-wall-single-cfg-4",
      slug: "durastar-dra3-wall-single-cfg-4",
      modelId: "durastar-dra3-wall-single",
      outdoorUnitId: "durastar-dra3h28m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.6,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra3-wall-single-cfg-5",
      slug: "durastar-dra3-wall-single-cfg-5",
      modelId: "durastar-dra3-wall-single",
      outdoorUnitId: "durastar-dra3h28m1a",
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
      id: "durastar-dra3-wall-single-cfg-6",
      slug: "durastar-dra3-wall-single-cfg-6",
      modelId: "durastar-dra3-wall-single",
      outdoorUnitId: "durastar-dra3h28m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 21.3,
      hspf2: 9.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-1",
      slug: "durastar-dra-series-wall-single-cfg-1",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra4u36m1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-2",
      slug: "durastar-dra-series-wall-single-cfg-2",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra5u48m1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-3",
      slug: "durastar-dra-series-wall-single-cfg-3",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra5u48m1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.1,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-4",
      slug: "durastar-dra-series-wall-single-cfg-4",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h33s1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-5",
      slug: "durastar-dra-series-wall-single-cfg-5",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra3h18m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-6",
      slug: "durastar-dra-series-wall-single-cfg-6",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra3h18m2a",
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
      id: "durastar-dra-series-wall-single-cfg-7",
      slug: "durastar-dra-series-wall-single-cfg-7",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra3h18m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-8",
      slug: "durastar-dra-series-wall-single-cfg-8",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra4h28m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-9",
      slug: "durastar-dra-series-wall-single-cfg-9",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra4h28m2a",
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
      id: "durastar-dra-series-wall-single-cfg-10",
      slug: "durastar-dra-series-wall-single-cfg-10",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra4h28m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: 20,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-11",
      slug: "durastar-dra-series-wall-single-cfg-11",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra5h36m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.5,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-12",
      slug: "durastar-dra-series-wall-single-cfg-12",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra5h36m2a",
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
      id: "durastar-dra-series-wall-single-cfg-13",
      slug: "durastar-dra-series-wall-single-cfg-13",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra5h36m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.45,
      hspf2: 10.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-14",
      slug: "durastar-dra-series-wall-single-cfg-14",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra3u18m2a",
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
      id: "durastar-dra-series-wall-single-cfg-15",
      slug: "durastar-dra-series-wall-single-cfg-15",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra3u18m2a",
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
      id: "durastar-dra-series-wall-single-cfg-16",
      slug: "durastar-dra-series-wall-single-cfg-16",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra3u18m2a",
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
      id: "durastar-dra-series-wall-single-cfg-17",
      slug: "durastar-dra-series-wall-single-cfg-17",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra4u28m2a",
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
      id: "durastar-dra-series-wall-single-cfg-18",
      slug: "durastar-dra-series-wall-single-cfg-18",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra4u28m2a",
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
      id: "durastar-dra-series-wall-single-cfg-19",
      slug: "durastar-dra-series-wall-single-cfg-19",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra4u28m2a",
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
      id: "durastar-dra-series-wall-single-cfg-20",
      slug: "durastar-dra-series-wall-single-cfg-20",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra5u36m2a",
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
      id: "durastar-dra-series-wall-single-cfg-21",
      slug: "durastar-dra-series-wall-single-cfg-21",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra5u36m2a",
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
      id: "durastar-dra-series-wall-single-cfg-22",
      slug: "durastar-dra-series-wall-single-cfg-22",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra5u36m2a",
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
      id: "durastar-dra-series-wall-single-cfg-23",
      slug: "durastar-dra-series-wall-single-cfg-23",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h06s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-24",
      slug: "durastar-dra-series-wall-single-cfg-24",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h06s2a",
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
      id: "durastar-dra-series-wall-single-cfg-25",
      slug: "durastar-dra-series-wall-single-cfg-25",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h06s2a",
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
      id: "durastar-dra-series-wall-single-cfg-26",
      slug: "durastar-dra-series-wall-single-cfg-26",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-27",
      slug: "durastar-dra-series-wall-single-cfg-27",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h09s2a",
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
      id: "durastar-dra-series-wall-single-cfg-28",
      slug: "durastar-dra-series-wall-single-cfg-28",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h09s2a",
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
      id: "durastar-dra-series-wall-single-cfg-29",
      slug: "durastar-dra-series-wall-single-cfg-29",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h09s2a",
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
      id: "durastar-dra-series-wall-single-cfg-30",
      slug: "durastar-dra-series-wall-single-cfg-30",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h09s2a",
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
      id: "durastar-dra-series-wall-single-cfg-31",
      slug: "durastar-dra-series-wall-single-cfg-31",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h09s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-32",
      slug: "durastar-dra-series-wall-single-cfg-32",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h09s2a",
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
      id: "durastar-dra-series-wall-single-cfg-33",
      slug: "durastar-dra-series-wall-single-cfg-33",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h12s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-34",
      slug: "durastar-dra-series-wall-single-cfg-34",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h12s2a",
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
      id: "durastar-dra-series-wall-single-cfg-35",
      slug: "durastar-dra-series-wall-single-cfg-35",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h12s2a",
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
      id: "durastar-dra-series-wall-single-cfg-36",
      slug: "durastar-dra-series-wall-single-cfg-36",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h12s2a",
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
      id: "durastar-dra-series-wall-single-cfg-37",
      slug: "durastar-dra-series-wall-single-cfg-37",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h12s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-38",
      slug: "durastar-dra-series-wall-single-cfg-38",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h12s2a",
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
      id: "durastar-dra-series-wall-single-cfg-39",
      slug: "durastar-dra-series-wall-single-cfg-39",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.7,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-40",
      slug: "durastar-dra-series-wall-single-cfg-40",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h18s2a",
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
      id: "durastar-dra-series-wall-single-cfg-41",
      slug: "durastar-dra-series-wall-single-cfg-41",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h18s2a",
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
      id: "durastar-dra-series-wall-single-cfg-42",
      slug: "durastar-dra-series-wall-single-cfg-42",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h18s2a",
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
      id: "durastar-dra-series-wall-single-cfg-43",
      slug: "durastar-dra-series-wall-single-cfg-43",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h18s2a",
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
      id: "durastar-dra-series-wall-single-cfg-44",
      slug: "durastar-dra-series-wall-single-cfg-44",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-45",
      slug: "durastar-dra-series-wall-single-cfg-45",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h18s2a",
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
      id: "durastar-dra-series-wall-single-cfg-46",
      slug: "durastar-dra-series-wall-single-cfg-46",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h24s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-47",
      slug: "durastar-dra-series-wall-single-cfg-47",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h24s2a",
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
      id: "durastar-dra-series-wall-single-cfg-48",
      slug: "durastar-dra-series-wall-single-cfg-48",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h24s2a",
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
      id: "durastar-dra-series-wall-single-cfg-49",
      slug: "durastar-dra-series-wall-single-cfg-49",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h24s2a",
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
      id: "durastar-dra-series-wall-single-cfg-50",
      slug: "durastar-dra-series-wall-single-cfg-50",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h33s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-51",
      slug: "durastar-dra-series-wall-single-cfg-51",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u09s2a",
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
      id: "durastar-dra-series-wall-single-cfg-52",
      slug: "durastar-dra-series-wall-single-cfg-52",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.1,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-53",
      slug: "durastar-dra-series-wall-single-cfg-53",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-54",
      slug: "durastar-dra-series-wall-single-cfg-54",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 13.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-55",
      slug: "durastar-dra-series-wall-single-cfg-55",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 26,
      hspf2: 13.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-56",
      slug: "durastar-dra-series-wall-single-cfg-56",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-57",
      slug: "durastar-dra-series-wall-single-cfg-57",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u09s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-58",
      slug: "durastar-dra-series-wall-single-cfg-58",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u12s2a",
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
      id: "durastar-dra-series-wall-single-cfg-59",
      slug: "durastar-dra-series-wall-single-cfg-59",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-60",
      slug: "durastar-dra-series-wall-single-cfg-60",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-61",
      slug: "durastar-dra-series-wall-single-cfg-61",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-62",
      slug: "durastar-dra-series-wall-single-cfg-62",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-63",
      slug: "durastar-dra-series-wall-single-cfg-63",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u12s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-64",
      slug: "durastar-dra-series-wall-single-cfg-64",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u18s2a",
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
      id: "durastar-dra-series-wall-single-cfg-65",
      slug: "durastar-dra-series-wall-single-cfg-65",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-66",
      slug: "durastar-dra-series-wall-single-cfg-66",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-67",
      slug: "durastar-dra-series-wall-single-cfg-67",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.8,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-68",
      slug: "durastar-dra-series-wall-single-cfg-68",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-69",
      slug: "durastar-dra-series-wall-single-cfg-69",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u18s2a",
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
      id: "durastar-dra-series-wall-single-cfg-70",
      slug: "durastar-dra-series-wall-single-cfg-70",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-71",
      slug: "durastar-dra-series-wall-single-cfg-71",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u24s2a",
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
      id: "durastar-dra-series-wall-single-cfg-72",
      slug: "durastar-dra-series-wall-single-cfg-72",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-73",
      slug: "durastar-dra-series-wall-single-cfg-73",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-74",
      slug: "durastar-dra-series-wall-single-cfg-74",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-75",
      slug: "durastar-dra-series-wall-single-cfg-75",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6h48m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 21.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-76",
      slug: "durastar-dra-series-wall-single-cfg-76",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6h48m2a",
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
      id: "durastar-dra-series-wall-single-cfg-77",
      slug: "durastar-dra-series-wall-single-cfg-77",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6h48m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 20.8,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-78",
      slug: "durastar-dra-series-wall-single-cfg-78",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6h55m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 21.4,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-79",
      slug: "durastar-dra-series-wall-single-cfg-79",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6h55m2a",
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
      id: "durastar-dra-series-wall-single-cfg-80",
      slug: "durastar-dra-series-wall-single-cfg-80",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6h55m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 20.7,
      hspf2: 10.65,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-81",
      slug: "durastar-dra-series-wall-single-cfg-81",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6u48m2a",
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
      id: "durastar-dra-series-wall-single-cfg-82",
      slug: "durastar-dra-series-wall-single-cfg-82",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6u48m2a",
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
      id: "durastar-dra-series-wall-single-cfg-83",
      slug: "durastar-dra-series-wall-single-cfg-83",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra6u48m2a",
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
      id: "durastar-dra-series-wall-single-cfg-84",
      slug: "durastar-dra-series-wall-single-cfg-84",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-wall-single-cfg-85",
      slug: "durastar-dra-series-wall-single-cfg-85",
      modelId: "durastar-dra-series-wall-single",
      outdoorUnitId: "durastar-dra1h24s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 22.3,
      hspf2: 13.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-1",
      slug: "durastar-standard-wall-single-cfg-1",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5u55m1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-2",
      slug: "durastar-standard-wall-single-cfg-2",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5u55m1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-3",
      slug: "durastar-standard-wall-single-cfg-3",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1u36s1a",
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
      id: "durastar-standard-wall-single-cfg-4",
      slug: "durastar-standard-wall-single-cfg-4",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1u48s1a",
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
      id: "durastar-standard-wall-single-cfg-5",
      slug: "durastar-standard-wall-single-cfg-5",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1u60s1a",
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
      id: "durastar-standard-wall-single-cfg-6",
      slug: "durastar-standard-wall-single-cfg-6",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1u30s1a",
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
      id: "durastar-standard-wall-single-cfg-7",
      slug: "durastar-standard-wall-single-cfg-7",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1u36s1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-8",
      slug: "durastar-standard-wall-single-cfg-8",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1u36s1a",
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
      id: "durastar-standard-wall-single-cfg-9",
      slug: "durastar-standard-wall-single-cfg-9",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1u48s1a",
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
      id: "durastar-standard-wall-single-cfg-10",
      slug: "durastar-standard-wall-single-cfg-10",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1u60s1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-11",
      slug: "durastar-standard-wall-single-cfg-11",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra6u60m2a",
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
      id: "durastar-standard-wall-single-cfg-12",
      slug: "durastar-standard-wall-single-cfg-12",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra6u60m2a",
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
      id: "durastar-standard-wall-single-cfg-13",
      slug: "durastar-standard-wall-single-cfg-13",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra6u60m2a",
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
      id: "durastar-standard-wall-single-cfg-14",
      slug: "durastar-standard-wall-single-cfg-14",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5h48m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-15",
      slug: "durastar-standard-wall-single-cfg-15",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5h48m2a",
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
      id: "durastar-standard-wall-single-cfg-16",
      slug: "durastar-standard-wall-single-cfg-16",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5h48m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-17",
      slug: "durastar-standard-wall-single-cfg-17",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5h55m2a",
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
      id: "durastar-standard-wall-single-cfg-18",
      slug: "durastar-standard-wall-single-cfg-18",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5h55m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-19",
      slug: "durastar-standard-wall-single-cfg-19",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5h55m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-20",
      slug: "durastar-standard-wall-single-cfg-20",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5u48m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-21",
      slug: "durastar-standard-wall-single-cfg-21",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5u48m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-22",
      slug: "durastar-standard-wall-single-cfg-22",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra5u48m2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-standard-wall-single-cfg-23",
      slug: "durastar-standard-wall-single-cfg-23",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1h30s2a",
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
      id: "durastar-standard-wall-single-cfg-24",
      slug: "durastar-standard-wall-single-cfg-24",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1h30s2a",
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
      id: "durastar-standard-wall-single-cfg-25",
      slug: "durastar-standard-wall-single-cfg-25",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1h36s2a",
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
      id: "durastar-standard-wall-single-cfg-26",
      slug: "durastar-standard-wall-single-cfg-26",
      modelId: "durastar-standard-wall-single",
      outdoorUnitId: "durastar-dra1h60s2a",
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
      id: "durastar-dra4-wall-single-cfg-1",
      slug: "durastar-dra4-wall-single-cfg-1",
      modelId: "durastar-dra4-wall-single",
      outdoorUnitId: "durastar-dra4h36m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra4-wall-single-cfg-2",
      slug: "durastar-dra4-wall-single-cfg-2",
      modelId: "durastar-dra4-wall-single",
      outdoorUnitId: "durastar-dra4h36m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-cfg-1",
      slug: "durastar-dra5-wall-single-cfg-1",
      modelId: "durastar-dra5-wall-single",
      outdoorUnitId: "durastar-dra5h48m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-cfg-2",
      slug: "durastar-dra5-wall-single-cfg-2",
      modelId: "durastar-dra5-wall-single",
      outdoorUnitId: "durastar-dra5h48m1a",
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
      id: "durastar-dra5-wall-single-cfg-3",
      slug: "durastar-dra5-wall-single-cfg-3",
      modelId: "durastar-dra5-wall-single",
      outdoorUnitId: "durastar-dra5h48m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47500,
      coolingCapacityMaxBtu: 47500,
      seer2: 21.05,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-cfg-4",
      slug: "durastar-dra5-wall-single-cfg-4",
      modelId: "durastar-dra5-wall-single",
      outdoorUnitId: "durastar-dra5h55m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra5-wall-single-cfg-5",
      slug: "durastar-dra5-wall-single-cfg-5",
      modelId: "durastar-dra5-wall-single",
      outdoorUnitId: "durastar-dra5h55m1a",
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
      id: "durastar-dra5-wall-single-cfg-6",
      slug: "durastar-dra5-wall-single-cfg-6",
      modelId: "durastar-dra5-wall-single",
      outdoorUnitId: "durastar-dra5h55m1a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-cfg-1",
      slug: "durastar-dra-series-central-ducted-cfg-1",
      modelId: "durastar-dra-series-central-ducted",
      outdoorUnitId: "durastar-dra1h18s1a",
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
      id: "durastar-dra-series-central-ducted-cfg-2",
      slug: "durastar-dra-series-central-ducted-cfg-2",
      modelId: "durastar-dra-series-central-ducted",
      outdoorUnitId: "durastar-dra1u18s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.8,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-cfg-3",
      slug: "durastar-dra-series-central-ducted-cfg-3",
      modelId: "durastar-dra-series-central-ducted",
      outdoorUnitId: "durastar-dra1u24s1b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-cfg-4",
      slug: "durastar-dra-series-central-ducted-cfg-4",
      modelId: "durastar-dra-series-central-ducted",
      outdoorUnitId: "durastar-dra1h24s1a",
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
      id: "durastar-dra-series-central-ducted-cfg-5",
      slug: "durastar-dra-series-central-ducted-cfg-5",
      modelId: "durastar-dra-series-central-ducted",
      outdoorUnitId: "durastar-dra1u18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-cfg-6",
      slug: "durastar-dra-series-central-ducted-cfg-6",
      modelId: "durastar-dra-series-central-ducted",
      outdoorUnitId: "durastar-dra1u24s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dra-series-central-ducted-cfg-7",
      slug: "durastar-dra-series-central-ducted-cfg-7",
      modelId: "durastar-dra-series-central-ducted",
      outdoorUnitId: "durastar-dra1h18s2a",
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
      id: "durastar-dra-series-central-ducted-cfg-8",
      slug: "durastar-dra-series-central-ducted-cfg-8",
      modelId: "durastar-dra-series-central-ducted",
      outdoorUnitId: "durastar-dra1h24s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-1",
      slug: "durastar-dru-series-central-ducted-cfg-1",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h18s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-2",
      slug: "durastar-dru-series-central-ducted-cfg-2",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h24s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-3",
      slug: "durastar-dru-series-central-ducted-cfg-3",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h36s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-4",
      slug: "durastar-dru-series-central-ducted-cfg-4",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h42s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 16.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-5",
      slug: "durastar-dru-series-central-ducted-cfg-5",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h48s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-6",
      slug: "durastar-dru-series-central-ducted-cfg-6",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h49s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-7",
      slug: "durastar-dru-series-central-ducted-cfg-7",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h60s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-8",
      slug: "durastar-dru-series-central-ducted-cfg-8",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u18s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-9",
      slug: "durastar-dru-series-central-ducted-cfg-9",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u24s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-10",
      slug: "durastar-dru-series-central-ducted-cfg-10",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-11",
      slug: "durastar-dru-series-central-ducted-cfg-11",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u36s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-12",
      slug: "durastar-dru-series-central-ducted-cfg-12",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u48s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-13",
      slug: "durastar-dru-series-central-ducted-cfg-13",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u60s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-14",
      slug: "durastar-dru-series-central-ducted-cfg-14",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h30s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-15",
      slug: "durastar-dru-series-central-ducted-cfg-15",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-16",
      slug: "durastar-dru-series-central-ducted-cfg-16",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u24s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-17",
      slug: "durastar-dru-series-central-ducted-cfg-17",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-18",
      slug: "durastar-dru-series-central-ducted-cfg-18",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u36s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-19",
      slug: "durastar-dru-series-central-ducted-cfg-19",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h18s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.3,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-20",
      slug: "durastar-dru-series-central-ducted-cfg-20",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h24s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-21",
      slug: "durastar-dru-series-central-ducted-cfg-21",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h30s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-22",
      slug: "durastar-dru-series-central-ducted-cfg-22",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h36s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.8,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-23",
      slug: "durastar-dru-series-central-ducted-cfg-23",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h60s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-24",
      slug: "durastar-dru-series-central-ducted-cfg-24",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u18s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-25",
      slug: "durastar-dru-series-central-ducted-cfg-25",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u18s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-26",
      slug: "durastar-dru-series-central-ducted-cfg-26",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u24s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-27",
      slug: "durastar-dru-series-central-ducted-cfg-27",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u24s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-28",
      slug: "durastar-dru-series-central-ducted-cfg-28",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-29",
      slug: "durastar-dru-series-central-ducted-cfg-29",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-30",
      slug: "durastar-dru-series-central-ducted-cfg-30",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u30s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-31",
      slug: "durastar-dru-series-central-ducted-cfg-31",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u36s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-32",
      slug: "durastar-dru-series-central-ducted-cfg-32",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u36s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-33",
      slug: "durastar-dru-series-central-ducted-cfg-33",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u36s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-34",
      slug: "durastar-dru-series-central-ducted-cfg-34",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u48s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-35",
      slug: "durastar-dru-series-central-ducted-cfg-35",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u48s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-36",
      slug: "durastar-dru-series-central-ducted-cfg-36",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u60s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-37",
      slug: "durastar-dru-series-central-ducted-cfg-37",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1u60s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.2,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-38",
      slug: "durastar-dru-series-central-ducted-cfg-38",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h18s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-39",
      slug: "durastar-dru-series-central-ducted-cfg-39",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h24s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-40",
      slug: "durastar-dru-series-central-ducted-cfg-40",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h18s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-41",
      slug: "durastar-dru-series-central-ducted-cfg-41",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h24s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-42",
      slug: "durastar-dru-series-central-ducted-cfg-42",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h30s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 15.3,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "durastar-dru-series-central-ducted-cfg-43",
      slug: "durastar-dru-series-central-ducted-cfg-43",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h30s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-44",
      slug: "durastar-dru-series-central-ducted-cfg-44",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h36s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-45",
      slug: "durastar-dru-series-central-ducted-cfg-45",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h30s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-46",
      slug: "durastar-dru-series-central-ducted-cfg-46",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h36s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-47",
      slug: "durastar-dru-series-central-ducted-cfg-47",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h48s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-48",
      slug: "durastar-dru-series-central-ducted-cfg-48",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h48s2a",
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
      id: "durastar-dru-series-central-ducted-cfg-49",
      slug: "durastar-dru-series-central-ducted-cfg-49",
      modelId: "durastar-dru-series-central-ducted",
      outdoorUnitId: "durastar-dru1h60s2a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "durastar-dra1-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: 2.41,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-3",
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
      configurationId: "durastar-dra1-wall-single-cfg-4",
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
      configurationId: "durastar-dra1-wall-single-cfg-5",
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
      configurationId: "durastar-dra1-wall-single-cfg-6",
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
      configurationId: "durastar-dra1-wall-single-cfg-7",
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
      configurationId: "durastar-dra1-wall-single-cfg-8",
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
      configurationId: "durastar-dra1-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-11",
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
      configurationId: "durastar-dra1-wall-single-cfg-12",
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
      configurationId: "durastar-dra1-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-14",
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
      configurationId: "durastar-dra1-wall-single-cfg-15",
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
      configurationId: "durastar-dra1-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-18",
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
      configurationId: "durastar-dra1-wall-single-cfg-19",
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
      configurationId: "durastar-dra1-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11100,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-22",
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
      configurationId: "durastar-dra1-wall-single-cfg-23",
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
      configurationId: "durastar-dra1-wall-single-cfg-24",
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
      configurationId: "durastar-dra1-wall-single-cfg-25",
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
      configurationId: "durastar-dra1-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-29",
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
      configurationId: "durastar-dra1-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9200,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra1-wall-single-cfg-31",
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
      configurationId: "durastar-dra1-wall-single-cfg-32",
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
      configurationId: "durastar-dra1-wall-single-cfg-33",
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
      configurationId: "durastar-dra1-wall-single-cfg-34",
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
      configurationId: "durastar-dra1-wall-single-cfg-35",
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
      configurationId: "durastar-dra1-wall-single-cfg-36",
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
      configurationId: "durastar-dra1-wall-single-cfg-37",
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
      configurationId: "durastar-dra1-wall-single-cfg-38",
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
      configurationId: "durastar-dra1-wall-single-cfg-39",
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
      configurationId: "durastar-dra1-wall-single-cfg-40",
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
      configurationId: "durastar-dra1-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra2-wall-single-cfg-1",
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
      configurationId: "durastar-dra2-wall-single-cfg-2",
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
      configurationId: "durastar-dra2-wall-single-cfg-3",
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
      configurationId: "durastar-dra2-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra2-wall-single-cfg-5",
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
      configurationId: "durastar-dra2-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra3-wall-single-cfg-1",
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
      configurationId: "durastar-dra3-wall-single-cfg-2",
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
      configurationId: "durastar-dra3-wall-single-cfg-3",
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
      configurationId: "durastar-dra3-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra3-wall-single-cfg-5",
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
      configurationId: "durastar-dra3-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 1.68,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-6",
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
      configurationId: "durastar-dra-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-9",
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
      configurationId: "durastar-dra-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-12",
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
      configurationId: "durastar-dra-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-14",
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
      configurationId: "durastar-dra-series-wall-single-cfg-15",
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
      configurationId: "durastar-dra-series-wall-single-cfg-16",
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
      configurationId: "durastar-dra-series-wall-single-cfg-17",
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
      configurationId: "durastar-dra-series-wall-single-cfg-18",
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
      configurationId: "durastar-dra-series-wall-single-cfg-19",
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
      configurationId: "durastar-dra-series-wall-single-cfg-20",
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
      configurationId: "durastar-dra-series-wall-single-cfg-21",
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
      configurationId: "durastar-dra-series-wall-single-cfg-22",
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
      configurationId: "durastar-dra-series-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-24",
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
      configurationId: "durastar-dra-series-wall-single-cfg-25",
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
      configurationId: "durastar-dra-series-wall-single-cfg-26",
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
      configurationId: "durastar-dra-series-wall-single-cfg-27",
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
      configurationId: "durastar-dra-series-wall-single-cfg-28",
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
      configurationId: "durastar-dra-series-wall-single-cfg-29",
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
      configurationId: "durastar-dra-series-wall-single-cfg-30",
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
      configurationId: "durastar-dra-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-32",
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
      configurationId: "durastar-dra-series-wall-single-cfg-33",
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
      configurationId: "durastar-dra-series-wall-single-cfg-34",
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
      configurationId: "durastar-dra-series-wall-single-cfg-35",
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
      configurationId: "durastar-dra-series-wall-single-cfg-36",
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
      configurationId: "durastar-dra-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-38",
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
      configurationId: "durastar-dra-series-wall-single-cfg-39",
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
      configurationId: "durastar-dra-series-wall-single-cfg-40",
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
      configurationId: "durastar-dra-series-wall-single-cfg-41",
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
      configurationId: "durastar-dra-series-wall-single-cfg-42",
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
      configurationId: "durastar-dra-series-wall-single-cfg-43",
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
      configurationId: "durastar-dra-series-wall-single-cfg-44",
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
      configurationId: "durastar-dra-series-wall-single-cfg-45",
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
      configurationId: "durastar-dra-series-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-47",
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
      configurationId: "durastar-dra-series-wall-single-cfg-48",
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
      configurationId: "durastar-dra-series-wall-single-cfg-49",
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
      configurationId: "durastar-dra-series-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 1.91,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-51",
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
      configurationId: "durastar-dra-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-53",
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
      configurationId: "durastar-dra-series-wall-single-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-58",
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
      configurationId: "durastar-dra-series-wall-single-cfg-59",
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
      configurationId: "durastar-dra-series-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 2.25,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9100,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-64",
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
      configurationId: "durastar-dra-series-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13700,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-69",
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
      configurationId: "durastar-dra-series-wall-single-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-71",
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
      configurationId: "durastar-dra-series-wall-single-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-75",
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
      configurationId: "durastar-dra-series-wall-single-cfg-76",
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
      configurationId: "durastar-dra-series-wall-single-cfg-77",
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
      configurationId: "durastar-dra-series-wall-single-cfg-78",
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
      configurationId: "durastar-dra-series-wall-single-cfg-79",
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
      configurationId: "durastar-dra-series-wall-single-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-81",
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
      configurationId: "durastar-dra-series-wall-single-cfg-82",
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
      configurationId: "durastar-dra-series-wall-single-cfg-83",
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
      configurationId: "durastar-dra-series-wall-single-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-wall-single-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-10",
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
      configurationId: "durastar-standard-wall-single-cfg-11",
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
      configurationId: "durastar-standard-wall-single-cfg-12",
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
      configurationId: "durastar-standard-wall-single-cfg-13",
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
      configurationId: "durastar-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-20",
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
      configurationId: "durastar-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-24",
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
      configurationId: "durastar-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-standard-wall-single-cfg-26",
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
      configurationId: "durastar-dra4-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra4-wall-single-cfg-2",
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
      configurationId: "durastar-dra5-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra5-wall-single-cfg-2",
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
      configurationId: "durastar-dra5-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra5-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra5-wall-single-cfg-5",
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
      configurationId: "durastar-dra5-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-central-ducted-cfg-1",
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
      configurationId: "durastar-dra-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.31,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-central-ducted-cfg-3",
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
      configurationId: "durastar-dra-series-central-ducted-cfg-4",
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
      configurationId: "durastar-dra-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dra-series-central-ducted-cfg-7",
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
      configurationId: "durastar-dra-series-central-ducted-cfg-8",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-1",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-2",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-3",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-4",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-5",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-6",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-7",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-8",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-9",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-12",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-13",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-14",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-26",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-27",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-34",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-35",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-36",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-37",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-38",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-39",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-40",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-41",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "durastar-dru-series-central-ducted-cfg-43",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-44",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-45",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-46",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-47",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-48",
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
      configurationId: "durastar-dru-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
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
