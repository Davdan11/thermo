import type { BrandDataset } from "../../types";

export const capellaDataset: BrandDataset = {
  brand: {
    id: "capella",
    slug: "capella",
    name: "CAPELLA",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "capella-cpib-series",
      slug: "capella-cpib-series",
      name: "CPIB Series",
      brandId: "capella",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-standard",
      slug: "capella-standard",
      name: "Standard",
      brandId: "capella",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-cppb-series",
      slug: "capella-cppb-series",
      name: "CPPB Series",
      brandId: "capella",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-sicb-series",
      slug: "capella-sicb-series",
      name: "SICB Series",
      brandId: "capella",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-sfcb-series",
      slug: "capella-sfcb-series",
      name: "SFCB Series",
      brandId: "capella",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-cpm-series",
      slug: "capella-cpm-series",
      name: "CPM Series",
      brandId: "capella",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-cahb-series",
      slug: "capella-cahb-series",
      name: "CAHB Series",
      brandId: "capella",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-energia-b",
      slug: "capella-energia-b",
      name: "Energia B",
      brandId: "capella",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-ccb-series",
      slug: "capella-ccb-series",
      name: "CCB Series",
      brandId: "capella",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "capella-cpib-series-wall-single",
      slug: "capella-cpib-series-wall-single",
      name: "CPIB Series",
      seriesId: "capella-cpib-series",
      brandId: "capella",
      modelNumber: "CPIB Series",
      normalizedModelNumber: "cpib-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 17200,
      seer2Min: 18.5,
      seer2Max: 21.6,
      hspf2Min: 9,
      hspf2Max: 9.4,
      cop5FMin: 2,
      cop5FMax: 2.11,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-standard-wall-single",
      slug: "capella-standard-wall-single",
      name: "Standard",
      seriesId: "capella-standard",
      brandId: "capella",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 8300,
      heatingCapacity5FMaxBtu: 8300,
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
      id: "capella-cppb-series-wall-single",
      slug: "capella-cppb-series-wall-single",
      name: "CPPB Series",
      seriesId: "capella-cppb-series",
      brandId: "capella",
      modelNumber: "CPPB Series",
      normalizedModelNumber: "cppb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 9800,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 21,
      seer2Max: 27.4,
      hspf2Min: 10.5,
      hspf2Max: 13.5,
      cop5FMin: 1.8,
      cop5FMax: 2.34,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-sicb-series-wall-single",
      slug: "capella-sicb-series-wall-single",
      name: "SICB Series",
      seriesId: "capella-sicb-series",
      brandId: "capella",
      modelNumber: "SICB Series",
      normalizedModelNumber: "sicb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 23400,
      heatingCapacity5FMinBtu: 9700,
      heatingCapacity5FMaxBtu: 20400,
      seer2Min: 20,
      seer2Max: 22.6,
      hspf2Min: 11.6,
      hspf2Max: 12.3,
      cop5FMin: 1.84,
      cop5FMax: 2.23,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-sfcb-series-wall-single",
      slug: "capella-sfcb-series-wall-single",
      name: "SFCB Series",
      seriesId: "capella-sfcb-series",
      brandId: "capella",
      modelNumber: "SFCB Series",
      normalizedModelNumber: "sfcb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 10200,
      heatingCapacity5FMaxBtu: 21600,
      seer2Min: 18.4,
      seer2Max: 20.5,
      hspf2Min: 10.6,
      hspf2Max: 13.8,
      cop5FMin: 1.85,
      cop5FMax: 2.18,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-cpm-series-wall-single",
      slug: "capella-cpm-series-wall-single",
      name: "CPM Series",
      seriesId: "capella-cpm-series",
      brandId: "capella",
      modelNumber: "CPM Series",
      normalizedModelNumber: "cpm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 25,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 2,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-cahb-series-central-ducted",
      slug: "capella-cahb-series-central-ducted",
      name: "CAHB Series",
      seriesId: "capella-cahb-series",
      brandId: "capella",
      modelNumber: "CAHB Series",
      normalizedModelNumber: "cahb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 20000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16,
      seer2Max: 18.3,
      hspf2Min: 9,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 1.96,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-energia-b-wall-single",
      slug: "capella-energia-b-wall-single",
      name: "Energia B",
      seriesId: "capella-energia-b",
      brandId: "capella",
      modelNumber: "Energia B",
      normalizedModelNumber: "energia-b",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 21,
      seer2Max: 25,
      hspf2Min: 9.5,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-ccb-series-central-ducted",
      slug: "capella-ccb-series-central-ducted",
      name: "CCB Series",
      seriesId: "capella-ccb-series",
      brandId: "capella",
      modelNumber: "CCB Series",
      normalizedModelNumber: "ccb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 19700,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 15.2,
      seer2Max: 16,
      hspf2Min: 8.1,
      hspf2Max: 9.6,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "capella-cpib-h09a-o",
      modelNumber: "CPIB-H09A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpib-h18a-o",
      modelNumber: "CPIB-H18A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpib-h24a-o",
      modelNumber: "CPIB-H24A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpib-h12a-o",
      modelNumber: "CPIB-H12A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cppb-h09a-o",
      modelNumber: "CPPB-H09A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cppb-h12a-o",
      modelNumber: "CPPB-H12A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cppb-h18a-o",
      modelNumber: "CPPB-H18A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cppb-h24a-o",
      modelNumber: "CPPB-H24A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm2b1-h18a-o",
      modelNumber: "CPM2B1-H18A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm3b1-h27a-o",
      modelNumber: "CPM3B1-H27A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm4b1-h36a-o",
      modelNumber: "CPM4B1-H36A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm5b1-h48a-o",
      modelNumber: "CPM5B1-H48A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm5b1-h55a-o",
      modelNumber: "CPM5B1-H55A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm2b1v-h18a-o",
      modelNumber: "CPM2B1V-H18A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm3b1v-h27a-o",
      modelNumber: "CPM3B1V-H27A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm4b1v-h36a-o",
      modelNumber: "CPM4B1V-H36A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm5b1v-h48a-o",
      modelNumber: "CPM5B1V-H48A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpm5b1v-h55a-o",
      modelNumber: "CPM5B1V-H55A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-ccb1-h24a-o",
      modelNumber: "CCB1-H24A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-ccb1-h30a-o",
      modelNumber: "CCB1-H30A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-ccb1-h36a-o",
      modelNumber: "CCB1-H36A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-ccb1-h48a-o",
      modelNumber: "CCB1-H48A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-ccb1-h60a-o",
      modelNumber: "CCB1-H60A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpeb-h09a-o",
      modelNumber: "CPEB-H09A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpeb-h12a-o",
      modelNumber: "CPEB-H12A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpeb-h18a-o",
      modelNumber: "CPEB-H18A-O",
      brandId: "capella",
      refrigerant: null as any,
    },
    {
      id: "capella-cpeb-h24a-o",
      modelNumber: "CPEB-H24A-O",
      brandId: "capella",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "capella-cpib-series-wall-single-cfg-1",
      slug: "capella-cpib-series-wall-single-cfg-1",
      modelId: "capella-cpib-series-wall-single",
      outdoorUnitId: "capella-cpib-h09a-o",
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
      id: "capella-cpib-series-wall-single-cfg-2",
      slug: "capella-cpib-series-wall-single-cfg-2",
      modelId: "capella-cpib-series-wall-single",
      outdoorUnitId: "capella-cpib-h18a-o",
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
      id: "capella-cpib-series-wall-single-cfg-3",
      slug: "capella-cpib-series-wall-single-cfg-3",
      modelId: "capella-cpib-series-wall-single",
      outdoorUnitId: "capella-cpib-h24a-o",
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
      id: "capella-standard-wall-single-cfg-1",
      slug: "capella-standard-wall-single-cfg-1",
      modelId: "capella-standard-wall-single",
      outdoorUnitId: "capella-cpib-h12a-o",
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
      id: "capella-cppb-series-wall-single-cfg-1",
      slug: "capella-cppb-series-wall-single-cfg-1",
      modelId: "capella-cppb-series-wall-single",
      outdoorUnitId: "capella-cppb-h09a-o",
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
      id: "capella-cppb-series-wall-single-cfg-2",
      slug: "capella-cppb-series-wall-single-cfg-2",
      modelId: "capella-cppb-series-wall-single",
      outdoorUnitId: "capella-cppb-h12a-o",
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
      id: "capella-cppb-series-wall-single-cfg-3",
      slug: "capella-cppb-series-wall-single-cfg-3",
      modelId: "capella-cppb-series-wall-single",
      outdoorUnitId: "capella-cppb-h18a-o",
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
      id: "capella-cppb-series-wall-single-cfg-4",
      slug: "capella-cppb-series-wall-single-cfg-4",
      modelId: "capella-cppb-series-wall-single",
      outdoorUnitId: "capella-cppb-h24a-o",
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
      id: "capella-sicb-series-wall-single-cfg-1",
      slug: "capella-sicb-series-wall-single-cfg-1",
      modelId: "capella-sicb-series-wall-single",
      outdoorUnitId: "capella-cppb-h09a-o",
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
      id: "capella-sicb-series-wall-single-cfg-2",
      slug: "capella-sicb-series-wall-single-cfg-2",
      modelId: "capella-sicb-series-wall-single",
      outdoorUnitId: "capella-cppb-h12a-o",
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
      id: "capella-sicb-series-wall-single-cfg-3",
      slug: "capella-sicb-series-wall-single-cfg-3",
      modelId: "capella-sicb-series-wall-single",
      outdoorUnitId: "capella-cppb-h18a-o",
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
      id: "capella-sicb-series-wall-single-cfg-4",
      slug: "capella-sicb-series-wall-single-cfg-4",
      modelId: "capella-sicb-series-wall-single",
      outdoorUnitId: "capella-cppb-h24a-o",
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
      id: "capella-sfcb-series-wall-single-cfg-1",
      slug: "capella-sfcb-series-wall-single-cfg-1",
      modelId: "capella-sfcb-series-wall-single",
      outdoorUnitId: "capella-cppb-h09a-o",
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
      id: "capella-sfcb-series-wall-single-cfg-2",
      slug: "capella-sfcb-series-wall-single-cfg-2",
      modelId: "capella-sfcb-series-wall-single",
      outdoorUnitId: "capella-cppb-h12a-o",
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
      id: "capella-sfcb-series-wall-single-cfg-3",
      slug: "capella-sfcb-series-wall-single-cfg-3",
      modelId: "capella-sfcb-series-wall-single",
      outdoorUnitId: "capella-cppb-h18a-o",
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
      id: "capella-sfcb-series-wall-single-cfg-4",
      slug: "capella-sfcb-series-wall-single-cfg-4",
      modelId: "capella-sfcb-series-wall-single",
      outdoorUnitId: "capella-cppb-h24a-o",
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
      id: "capella-cpm-series-wall-single-cfg-1",
      slug: "capella-cpm-series-wall-single-cfg-1",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm2b1-h18a-o",
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
      id: "capella-cpm-series-wall-single-cfg-2",
      slug: "capella-cpm-series-wall-single-cfg-2",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm2b1-h18a-o",
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
      id: "capella-cpm-series-wall-single-cfg-3",
      slug: "capella-cpm-series-wall-single-cfg-3",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm2b1-h18a-o",
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
      id: "capella-cpm-series-wall-single-cfg-4",
      slug: "capella-cpm-series-wall-single-cfg-4",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm3b1-h27a-o",
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
      id: "capella-cpm-series-wall-single-cfg-5",
      slug: "capella-cpm-series-wall-single-cfg-5",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm3b1-h27a-o",
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
      id: "capella-cpm-series-wall-single-cfg-6",
      slug: "capella-cpm-series-wall-single-cfg-6",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm3b1-h27a-o",
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
      id: "capella-cpm-series-wall-single-cfg-7",
      slug: "capella-cpm-series-wall-single-cfg-7",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm4b1-h36a-o",
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
      id: "capella-cpm-series-wall-single-cfg-8",
      slug: "capella-cpm-series-wall-single-cfg-8",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm4b1-h36a-o",
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
      id: "capella-cpm-series-wall-single-cfg-9",
      slug: "capella-cpm-series-wall-single-cfg-9",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm4b1-h36a-o",
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
      id: "capella-cpm-series-wall-single-cfg-10",
      slug: "capella-cpm-series-wall-single-cfg-10",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1-h48a-o",
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
      id: "capella-cpm-series-wall-single-cfg-11",
      slug: "capella-cpm-series-wall-single-cfg-11",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1-h48a-o",
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
      id: "capella-cpm-series-wall-single-cfg-12",
      slug: "capella-cpm-series-wall-single-cfg-12",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1-h48a-o",
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
      id: "capella-cpm-series-wall-single-cfg-13",
      slug: "capella-cpm-series-wall-single-cfg-13",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1-h55a-o",
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
      id: "capella-cpm-series-wall-single-cfg-14",
      slug: "capella-cpm-series-wall-single-cfg-14",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1-h55a-o",
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
      id: "capella-cpm-series-wall-single-cfg-15",
      slug: "capella-cpm-series-wall-single-cfg-15",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1-h55a-o",
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
      id: "capella-cpm-series-wall-single-cfg-16",
      slug: "capella-cpm-series-wall-single-cfg-16",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm2b1v-h18a-o",
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
      id: "capella-cpm-series-wall-single-cfg-17",
      slug: "capella-cpm-series-wall-single-cfg-17",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm2b1v-h18a-o",
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
      id: "capella-cpm-series-wall-single-cfg-18",
      slug: "capella-cpm-series-wall-single-cfg-18",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm2b1v-h18a-o",
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
      id: "capella-cpm-series-wall-single-cfg-19",
      slug: "capella-cpm-series-wall-single-cfg-19",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm3b1v-h27a-o",
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
      id: "capella-cpm-series-wall-single-cfg-20",
      slug: "capella-cpm-series-wall-single-cfg-20",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm3b1v-h27a-o",
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
      id: "capella-cpm-series-wall-single-cfg-21",
      slug: "capella-cpm-series-wall-single-cfg-21",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm3b1v-h27a-o",
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
      id: "capella-cpm-series-wall-single-cfg-22",
      slug: "capella-cpm-series-wall-single-cfg-22",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm4b1v-h36a-o",
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
      id: "capella-cpm-series-wall-single-cfg-23",
      slug: "capella-cpm-series-wall-single-cfg-23",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm4b1v-h36a-o",
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
      id: "capella-cpm-series-wall-single-cfg-24",
      slug: "capella-cpm-series-wall-single-cfg-24",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm4b1v-h36a-o",
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
      id: "capella-cpm-series-wall-single-cfg-25",
      slug: "capella-cpm-series-wall-single-cfg-25",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1v-h48a-o",
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
      id: "capella-cpm-series-wall-single-cfg-26",
      slug: "capella-cpm-series-wall-single-cfg-26",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1v-h48a-o",
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
      id: "capella-cpm-series-wall-single-cfg-27",
      slug: "capella-cpm-series-wall-single-cfg-27",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1v-h48a-o",
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
      id: "capella-cpm-series-wall-single-cfg-28",
      slug: "capella-cpm-series-wall-single-cfg-28",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1v-h55a-o",
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
      id: "capella-cpm-series-wall-single-cfg-29",
      slug: "capella-cpm-series-wall-single-cfg-29",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1v-h55a-o",
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
      id: "capella-cpm-series-wall-single-cfg-30",
      slug: "capella-cpm-series-wall-single-cfg-30",
      modelId: "capella-cpm-series-wall-single",
      outdoorUnitId: "capella-cpm5b1v-h55a-o",
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
      id: "capella-cahb-series-central-ducted-cfg-1",
      slug: "capella-cahb-series-central-ducted-cfg-1",
      modelId: "capella-cahb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h24a-o",
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
      id: "capella-cahb-series-central-ducted-cfg-2",
      slug: "capella-cahb-series-central-ducted-cfg-2",
      modelId: "capella-cahb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h30a-o",
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
      id: "capella-cahb-series-central-ducted-cfg-3",
      slug: "capella-cahb-series-central-ducted-cfg-3",
      modelId: "capella-cahb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h36a-o",
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
      id: "capella-cahb-series-central-ducted-cfg-4",
      slug: "capella-cahb-series-central-ducted-cfg-4",
      modelId: "capella-cahb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h48a-o",
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
      id: "capella-cahb-series-central-ducted-cfg-5",
      slug: "capella-cahb-series-central-ducted-cfg-5",
      modelId: "capella-cahb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h60a-o",
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
      id: "capella-energia-b-wall-single-cfg-1",
      slug: "capella-energia-b-wall-single-cfg-1",
      modelId: "capella-energia-b-wall-single",
      outdoorUnitId: "capella-cpeb-h09a-o",
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
      id: "capella-energia-b-wall-single-cfg-2",
      slug: "capella-energia-b-wall-single-cfg-2",
      modelId: "capella-energia-b-wall-single",
      outdoorUnitId: "capella-cpeb-h12a-o",
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
      id: "capella-energia-b-wall-single-cfg-3",
      slug: "capella-energia-b-wall-single-cfg-3",
      modelId: "capella-energia-b-wall-single",
      outdoorUnitId: "capella-cpeb-h18a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-energia-b-wall-single-cfg-4",
      slug: "capella-energia-b-wall-single-cfg-4",
      modelId: "capella-energia-b-wall-single",
      outdoorUnitId: "capella-cpeb-h24a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "capella-ccb-series-central-ducted-cfg-1",
      slug: "capella-ccb-series-central-ducted-cfg-1",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h24a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-2",
      slug: "capella-ccb-series-central-ducted-cfg-2",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h24a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-3",
      slug: "capella-ccb-series-central-ducted-cfg-3",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h30a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-4",
      slug: "capella-ccb-series-central-ducted-cfg-4",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h30a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-5",
      slug: "capella-ccb-series-central-ducted-cfg-5",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h30a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-6",
      slug: "capella-ccb-series-central-ducted-cfg-6",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h36a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-7",
      slug: "capella-ccb-series-central-ducted-cfg-7",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h36a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-8",
      slug: "capella-ccb-series-central-ducted-cfg-8",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h60a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-9",
      slug: "capella-ccb-series-central-ducted-cfg-9",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h60a-o",
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
      id: "capella-ccb-series-central-ducted-cfg-10",
      slug: "capella-ccb-series-central-ducted-cfg-10",
      modelId: "capella-ccb-series-central-ducted",
      outdoorUnitId: "capella-ccb1-h48a-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "capella-cpib-series-wall-single-cfg-1",
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
      configurationId: "capella-cpib-series-wall-single-cfg-2",
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
      configurationId: "capella-cpib-series-wall-single-cfg-3",
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
      configurationId: "capella-standard-wall-single-cfg-1",
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
      configurationId: "capella-cppb-series-wall-single-cfg-1",
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
      configurationId: "capella-cppb-series-wall-single-cfg-2",
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
      configurationId: "capella-cppb-series-wall-single-cfg-3",
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
      configurationId: "capella-cppb-series-wall-single-cfg-4",
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
      configurationId: "capella-sicb-series-wall-single-cfg-1",
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
      configurationId: "capella-sicb-series-wall-single-cfg-2",
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
      configurationId: "capella-sicb-series-wall-single-cfg-3",
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
      configurationId: "capella-sicb-series-wall-single-cfg-4",
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
      configurationId: "capella-sfcb-series-wall-single-cfg-1",
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
      configurationId: "capella-sfcb-series-wall-single-cfg-2",
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
      configurationId: "capella-sfcb-series-wall-single-cfg-3",
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
      configurationId: "capella-sfcb-series-wall-single-cfg-4",
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
      configurationId: "capella-cpm-series-wall-single-cfg-1",
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
      configurationId: "capella-cpm-series-wall-single-cfg-2",
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
      configurationId: "capella-cpm-series-wall-single-cfg-3",
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
      configurationId: "capella-cpm-series-wall-single-cfg-4",
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
      configurationId: "capella-cpm-series-wall-single-cfg-5",
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
      configurationId: "capella-cpm-series-wall-single-cfg-6",
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
      configurationId: "capella-cpm-series-wall-single-cfg-7",
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
      configurationId: "capella-cpm-series-wall-single-cfg-8",
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
      configurationId: "capella-cpm-series-wall-single-cfg-9",
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
      configurationId: "capella-cpm-series-wall-single-cfg-10",
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
      configurationId: "capella-cpm-series-wall-single-cfg-11",
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
      configurationId: "capella-cpm-series-wall-single-cfg-12",
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
      configurationId: "capella-cpm-series-wall-single-cfg-13",
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
      configurationId: "capella-cpm-series-wall-single-cfg-14",
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
      configurationId: "capella-cpm-series-wall-single-cfg-15",
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
      configurationId: "capella-cpm-series-wall-single-cfg-16",
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
      configurationId: "capella-cpm-series-wall-single-cfg-17",
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
      configurationId: "capella-cpm-series-wall-single-cfg-18",
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
      configurationId: "capella-cpm-series-wall-single-cfg-19",
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
      configurationId: "capella-cpm-series-wall-single-cfg-20",
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
      configurationId: "capella-cpm-series-wall-single-cfg-21",
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
      configurationId: "capella-cpm-series-wall-single-cfg-22",
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
      configurationId: "capella-cpm-series-wall-single-cfg-23",
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
      configurationId: "capella-cpm-series-wall-single-cfg-24",
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
      configurationId: "capella-cpm-series-wall-single-cfg-25",
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
      configurationId: "capella-cpm-series-wall-single-cfg-26",
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
      configurationId: "capella-cpm-series-wall-single-cfg-27",
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
      configurationId: "capella-cpm-series-wall-single-cfg-28",
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
      configurationId: "capella-cpm-series-wall-single-cfg-29",
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
      configurationId: "capella-cpm-series-wall-single-cfg-30",
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
      configurationId: "capella-cahb-series-central-ducted-cfg-1",
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
      configurationId: "capella-cahb-series-central-ducted-cfg-2",
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
      configurationId: "capella-cahb-series-central-ducted-cfg-3",
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
      configurationId: "capella-cahb-series-central-ducted-cfg-4",
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
      configurationId: "capella-cahb-series-central-ducted-cfg-5",
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
      configurationId: "capella-energia-b-wall-single-cfg-1",
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
      configurationId: "capella-energia-b-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "capella-energia-b-wall-single-cfg-3",
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
      configurationId: "capella-energia-b-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "capella-ccb-series-central-ducted-cfg-1",
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
      configurationId: "capella-ccb-series-central-ducted-cfg-2",
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
      configurationId: "capella-ccb-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "capella-ccb-series-central-ducted-cfg-4",
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
      configurationId: "capella-ccb-series-central-ducted-cfg-5",
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
      configurationId: "capella-ccb-series-central-ducted-cfg-6",
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
      configurationId: "capella-ccb-series-central-ducted-cfg-7",
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
      configurationId: "capella-ccb-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "capella-ccb-series-central-ducted-cfg-9",
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
      configurationId: "capella-ccb-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: 1.85,
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
