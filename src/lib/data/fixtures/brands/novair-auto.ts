import type { BrandDataset } from "../../types";

export const novairDataset: BrandDataset = {
  brand: {
    id: "novair",
    slug: "novair",
    name: "NOVAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "novair-lea-series",
      slug: "novair-lea-series",
      name: "LEA SERIES",
      brandId: "novair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-standard",
      slug: "novair-standard",
      name: "Standard",
      brandId: "novair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "novair-lea-series-wall-single",
      slug: "novair-lea-series-wall-single",
      name: "LEA SERIES",
      seriesId: "novair-lea-series",
      brandId: "novair",
      modelNumber: "LEA SERIES",
      normalizedModelNumber: "lea-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 6300,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 19,
      seer2Max: 28.1,
      hspf2Min: 8.7,
      hspf2Max: 13.6,
      cop5FMin: 1.68,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-standard-wall-single",
      slug: "novair-standard-wall-single",
      name: "Standard",
      seriesId: "novair-standard",
      brandId: "novair",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7800,
      heatingCapacity5FMaxBtu: 7800,
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
      id: "novair-lea-series-central-ducted",
      slug: "novair-lea-series-central-ducted",
      name: "LEA series",
      seriesId: "novair-lea-series",
      brandId: "novair",
      modelNumber: "LEA series",
      normalizedModelNumber: "lea-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "novair-lea12sz25sk-o",
      modelNumber: "LEA12SZ25SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea09sz25sk-o",
      modelNumber: "LEA09SZ25SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea09sz35sk-o",
      modelNumber: "LEA09SZ35SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea18sz35sk-o",
      modelNumber: "LEA18SZ35SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea09sz15sk-o",
      modelNumber: "LEA09SZ15SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea18sz25sk-o",
      modelNumber: "LEA18SZ25SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea18sz15sk-o",
      modelNumber: "LEA18SZ15SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea12sz35sk-o",
      modelNumber: "LEA12SZ35SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea36mz-4p-25sk-o",
      modelNumber: "LEA36MZ-4P-25SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea27mz-3p-25sk-o",
      modelNumber: "LEA27MZ-3P-25SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea18mz-2p-25sk-o",
      modelNumber: "LEA18MZ-2P-25SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea24sz35sk-o",
      modelNumber: "LEA24SZ35SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea28mz-3p-35sk-o",
      modelNumber: "LEA28MZ-3P-35SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea20mz-2p-35sk-o",
      modelNumber: "LEA20MZ-2P-35SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea36mz-4p-35sk-o",
      modelNumber: "LEA36MZ-4P-35SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea24sz25sk-o",
      modelNumber: "LEA24SZ25SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea12sz15sk-o",
      modelNumber: "LEA12SZ15SK-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea30-evox-30-o",
      modelNumber: "LEA30-EVOX-30-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea36-evox-30-o",
      modelNumber: "LEA36-EVOX-30-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea18-evox-30-o",
      modelNumber: "LEA18-EVOX-30-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea60-evox-30-o",
      modelNumber: "LEA60-EVOX-30-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea24-evox-30-o",
      modelNumber: "LEA24-EVOX-30-O",
      brandId: "novair",
      refrigerant: null as any,
    },
    {
      id: "novair-lea48-evox-30-o",
      modelNumber: "LEA48-EVOX-30-O",
      brandId: "novair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "novair-lea-series-wall-single-cfg-1",
      slug: "novair-lea-series-wall-single-cfg-1",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea12sz25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-2",
      slug: "novair-lea-series-wall-single-cfg-2",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea09sz25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-3",
      slug: "novair-lea-series-wall-single-cfg-3",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea09sz35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-4",
      slug: "novair-lea-series-wall-single-cfg-4",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea18sz35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-5",
      slug: "novair-lea-series-wall-single-cfg-5",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea09sz15sk-o",
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
      id: "novair-lea-series-wall-single-cfg-6",
      slug: "novair-lea-series-wall-single-cfg-6",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea18sz25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-7",
      slug: "novair-lea-series-wall-single-cfg-7",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea18sz15sk-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-lea-series-wall-single-cfg-8",
      slug: "novair-lea-series-wall-single-cfg-8",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea12sz35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-9",
      slug: "novair-lea-series-wall-single-cfg-9",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea36mz-4p-25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-10",
      slug: "novair-lea-series-wall-single-cfg-10",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea27mz-3p-25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-11",
      slug: "novair-lea-series-wall-single-cfg-11",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea27mz-3p-25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-12",
      slug: "novair-lea-series-wall-single-cfg-12",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea27mz-3p-25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-13",
      slug: "novair-lea-series-wall-single-cfg-13",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea18mz-2p-25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-14",
      slug: "novair-lea-series-wall-single-cfg-14",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea18mz-2p-25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-15",
      slug: "novair-lea-series-wall-single-cfg-15",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea18mz-2p-25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-16",
      slug: "novair-lea-series-wall-single-cfg-16",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea24sz35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-17",
      slug: "novair-lea-series-wall-single-cfg-17",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea28mz-3p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-18",
      slug: "novair-lea-series-wall-single-cfg-18",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea28mz-3p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-19",
      slug: "novair-lea-series-wall-single-cfg-19",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea28mz-3p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-20",
      slug: "novair-lea-series-wall-single-cfg-20",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea20mz-2p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-21",
      slug: "novair-lea-series-wall-single-cfg-21",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea20mz-2p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-22",
      slug: "novair-lea-series-wall-single-cfg-22",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea20mz-2p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-23",
      slug: "novair-lea-series-wall-single-cfg-23",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea36mz-4p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-24",
      slug: "novair-lea-series-wall-single-cfg-24",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea36mz-4p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-25",
      slug: "novair-lea-series-wall-single-cfg-25",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea09sz25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-26",
      slug: "novair-lea-series-wall-single-cfg-26",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea12sz25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-27",
      slug: "novair-lea-series-wall-single-cfg-27",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea18sz25sk-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.5,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-lea-series-wall-single-cfg-28",
      slug: "novair-lea-series-wall-single-cfg-28",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea24sz25sk-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "novair-lea-series-wall-single-cfg-29",
      slug: "novair-lea-series-wall-single-cfg-29",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea09sz25sk-o",
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
      id: "novair-lea-series-wall-single-cfg-30",
      slug: "novair-lea-series-wall-single-cfg-30",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea09sz35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-31",
      slug: "novair-lea-series-wall-single-cfg-31",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea12sz35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-32",
      slug: "novair-lea-series-wall-single-cfg-32",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea18sz35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-33",
      slug: "novair-lea-series-wall-single-cfg-33",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea24sz35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-34",
      slug: "novair-lea-series-wall-single-cfg-34",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea20mz-2p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-35",
      slug: "novair-lea-series-wall-single-cfg-35",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea20mz-2p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-36",
      slug: "novair-lea-series-wall-single-cfg-36",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea20mz-2p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-37",
      slug: "novair-lea-series-wall-single-cfg-37",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea36mz-4p-35sk-o",
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
      id: "novair-lea-series-wall-single-cfg-38",
      slug: "novair-lea-series-wall-single-cfg-38",
      modelId: "novair-lea-series-wall-single",
      outdoorUnitId: "novair-lea36mz-4p-35sk-o",
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
      id: "novair-standard-wall-single-cfg-1",
      slug: "novair-standard-wall-single-cfg-1",
      modelId: "novair-standard-wall-single",
      outdoorUnitId: "novair-lea12sz15sk-o",
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
      id: "novair-lea-series-central-ducted-cfg-1",
      slug: "novair-lea-series-central-ducted-cfg-1",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea30-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-2",
      slug: "novair-lea-series-central-ducted-cfg-2",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea36-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-3",
      slug: "novair-lea-series-central-ducted-cfg-3",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea18-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-4",
      slug: "novair-lea-series-central-ducted-cfg-4",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea60-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-5",
      slug: "novair-lea-series-central-ducted-cfg-5",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea24-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-6",
      slug: "novair-lea-series-central-ducted-cfg-6",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea48-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-7",
      slug: "novair-lea-series-central-ducted-cfg-7",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea24-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-8",
      slug: "novair-lea-series-central-ducted-cfg-8",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea30-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-9",
      slug: "novair-lea-series-central-ducted-cfg-9",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea18-evox-30-o",
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
      id: "novair-lea-series-central-ducted-cfg-10",
      slug: "novair-lea-series-central-ducted-cfg-10",
      modelId: "novair-lea-series-central-ducted",
      outdoorUnitId: "novair-lea36-evox-30-o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "novair-lea-series-wall-single-cfg-1",
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
      configurationId: "novair-lea-series-wall-single-cfg-2",
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
      configurationId: "novair-lea-series-wall-single-cfg-3",
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
      configurationId: "novair-lea-series-wall-single-cfg-4",
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
      configurationId: "novair-lea-series-wall-single-cfg-5",
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
      configurationId: "novair-lea-series-wall-single-cfg-6",
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
      configurationId: "novair-lea-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "novair-lea-series-wall-single-cfg-8",
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
      configurationId: "novair-lea-series-wall-single-cfg-9",
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
      configurationId: "novair-lea-series-wall-single-cfg-10",
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
      configurationId: "novair-lea-series-wall-single-cfg-11",
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
      configurationId: "novair-lea-series-wall-single-cfg-12",
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
      configurationId: "novair-lea-series-wall-single-cfg-13",
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
      configurationId: "novair-lea-series-wall-single-cfg-14",
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
      configurationId: "novair-lea-series-wall-single-cfg-15",
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
      configurationId: "novair-lea-series-wall-single-cfg-16",
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
      configurationId: "novair-lea-series-wall-single-cfg-17",
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
      configurationId: "novair-lea-series-wall-single-cfg-18",
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
      configurationId: "novair-lea-series-wall-single-cfg-19",
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
      configurationId: "novair-lea-series-wall-single-cfg-20",
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
      configurationId: "novair-lea-series-wall-single-cfg-21",
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
      configurationId: "novair-lea-series-wall-single-cfg-22",
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
      configurationId: "novair-lea-series-wall-single-cfg-23",
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
      configurationId: "novair-lea-series-wall-single-cfg-24",
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
      configurationId: "novair-lea-series-wall-single-cfg-25",
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
      configurationId: "novair-lea-series-wall-single-cfg-26",
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
      configurationId: "novair-lea-series-wall-single-cfg-27",
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
      configurationId: "novair-lea-series-wall-single-cfg-28",
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
      configurationId: "novair-lea-series-wall-single-cfg-29",
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
      configurationId: "novair-lea-series-wall-single-cfg-30",
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
      configurationId: "novair-lea-series-wall-single-cfg-31",
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
      configurationId: "novair-lea-series-wall-single-cfg-32",
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
      configurationId: "novair-lea-series-wall-single-cfg-33",
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
      configurationId: "novair-lea-series-wall-single-cfg-34",
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
      configurationId: "novair-lea-series-wall-single-cfg-35",
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
      configurationId: "novair-lea-series-wall-single-cfg-36",
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
      configurationId: "novair-lea-series-wall-single-cfg-37",
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
      configurationId: "novair-lea-series-wall-single-cfg-38",
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
      configurationId: "novair-standard-wall-single-cfg-1",
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
      configurationId: "novair-lea-series-central-ducted-cfg-1",
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
      configurationId: "novair-lea-series-central-ducted-cfg-2",
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
      configurationId: "novair-lea-series-central-ducted-cfg-3",
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
      configurationId: "novair-lea-series-central-ducted-cfg-4",
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
      configurationId: "novair-lea-series-central-ducted-cfg-5",
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
      configurationId: "novair-lea-series-central-ducted-cfg-6",
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
      configurationId: "novair-lea-series-central-ducted-cfg-7",
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
      configurationId: "novair-lea-series-central-ducted-cfg-8",
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
      configurationId: "novair-lea-series-central-ducted-cfg-9",
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
      configurationId: "novair-lea-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 2,
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
