import type { BrandDataset } from "../../types";

export const polarwaveDataset: BrandDataset = {
  brand: {
    id: "polarwave",
    slug: "polarwave",
    name: "POLARWAVE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "polarwave-aciq",
      slug: "polarwave-aciq",
      name: "ACIQ",
      brandId: "polarwave",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-standard",
      slug: "polarwave-standard",
      name: "Standard",
      brandId: "polarwave",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-es-series",
      slug: "polarwave-es-series",
      name: "ES SERIES",
      brandId: "polarwave",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series",
      slug: "polarwave-aciq-series",
      name: "ACIQ series",
      brandId: "polarwave",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series",
      slug: "polarwave-ez-series",
      name: "EZ Series",
      brandId: "polarwave",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "polarwave-aciq-wall-single",
      slug: "polarwave-aciq-wall-single",
      name: "ACIQ",
      seriesId: "polarwave-aciq",
      brandId: "polarwave",
      modelNumber: "ACIQ",
      normalizedModelNumber: "aciq",
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
      id: "polarwave-standard-wall-single",
      slug: "polarwave-standard-wall-single",
      name: "Standard",
      seriesId: "polarwave-standard",
      brandId: "polarwave",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7400,
      heatingCapacity5FMaxBtu: 37000,
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
      id: "polarwave-es-series-wall-single",
      slug: "polarwave-es-series-wall-single",
      name: "ES SERIES",
      seriesId: "polarwave-es-series",
      brandId: "polarwave",
      modelNumber: "ES SERIES",
      normalizedModelNumber: "es-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 19,
      seer2Max: 24.6,
      hspf2Min: 8.7,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2.07,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted",
      slug: "polarwave-aciq-series-central-ducted",
      name: "ACIQ series",
      seriesId: "polarwave-aciq-series",
      brandId: "polarwave",
      modelNumber: "ACIQ series",
      normalizedModelNumber: "aciq-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 15.2,
      seer2Max: 19.3,
      hspf2Min: 8.5,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.6,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-central-ducted",
      slug: "polarwave-ez-series-central-ducted",
      name: "EZ Series",
      seriesId: "polarwave-ez-series",
      brandId: "polarwave",
      modelNumber: "EZ Series",
      normalizedModelNumber: "ez-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 19200,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 18.4,
      hspf2Min: 8.4,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single",
      slug: "polarwave-ez-series-wall-single",
      name: "EZ Series",
      seriesId: "polarwave-ez-series",
      brandId: "polarwave",
      modelNumber: "EZ Series",
      normalizedModelNumber: "ez-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 43000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 37800,
      seer2Min: 19,
      seer2Max: 23.9,
      hspf2Min: 9,
      hspf2Max: 11.5,
      cop5FMin: 1.9,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "polarwave-aciq-09z-hp115b",
      modelNumber: "ACIQ-09Z-HP115B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-09zpl-hp230b",
      modelNumber: "ACIQ-09ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-12zpl-hp230b",
      modelNumber: "ACIQ-12ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-18zpl-hp230b",
      modelNumber: "ACIQ-18ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-24zpl-hp230b",
      modelNumber: "ACIQ-24ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-18z-hh-m2b",
      modelNumber: "ACIQ-18Z-HH-M2B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-27z-hh-m3b",
      modelNumber: "ACIQ-27Z-HH-M3B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-36z-hh-m4b",
      modelNumber: "ACIQ-36Z-HH-M4B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-48z-hh-m5b",
      modelNumber: "ACIQ-48Z-HH-M5B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-06zpl-hp230b",
      modelNumber: "ACIQ-06ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-36zpl-hp230b",
      modelNumber: "ACIQ-36ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-48zpl-hp230b",
      modelNumber: "ACIQ-48ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-60zpl-hp230b",
      modelNumber: "ACIQ-60ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-55z-hh-m5b",
      modelNumber: "ACIQ-55Z-HH-M5B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-18z-hp230b",
      modelNumber: "ACIQ-18Z-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-36z-hp230b",
      modelNumber: "ACIQ-36Z-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-es-55z-m5b",
      modelNumber: "ES-55Z-M5B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-18-ehpb",
      modelNumber: "ACIQ-18-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-30-ehpb",
      modelNumber: "ACIQ-30-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-36-ehpb",
      modelNumber: "ACIQ-36-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-48-ehpb",
      modelNumber: "ACIQ-48-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-60-ehpb",
      modelNumber: "ACIQ-60-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-12z-hp115b",
      modelNumber: "EZ-12Z-HP115B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-18z-hp230b",
      modelNumber: "EZ-18Z-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-24z-hp230b",
      modelNumber: "EZ-24Z-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-36zpl-hp230b",
      modelNumber: "EZ-36ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-es-18z-m2b",
      modelNumber: "ES-18Z-M2B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-es-27z-m3b",
      modelNumber: "ES-27Z-M3B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-es-36z-m4b",
      modelNumber: "ES-36Z-M4B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-es-48z-m5b",
      modelNumber: "ES-48Z-M5B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-48z-m5",
      modelNumber: "EZ-48Z-M5",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-09z-hp115b",
      modelNumber: "EZ-09Z-HP115B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-24-ehpb",
      modelNumber: "ACIQ-24-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-18-hpb",
      modelNumber: "ACIQ-18-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-24-hpb",
      modelNumber: "ACIQ-24-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-30-hpb",
      modelNumber: "ACIQ-30-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-36-hpb",
      modelNumber: "ACIQ-36-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-48-hpb",
      modelNumber: "ACIQ-48-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-60hpb",
      modelNumber: "ACIQ-60HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-36-hpc",
      modelNumber: "ACIQ-36-HPC",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-aciq-12-ehpb",
      modelNumber: "ACIQ-12-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-24-hp",
      modelNumber: "EZ-24-HP",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-48-hp",
      modelNumber: "EZ-48-HP",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-60-hp",
      modelNumber: "EZ-60-HP",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-36-hp",
      modelNumber: "EZ-36-HP",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-24-ehpb",
      modelNumber: "EZ-24-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-36-ehpb",
      modelNumber: "EZ-36-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-48-ehpb",
      modelNumber: "EZ-48-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-60-ehpb",
      modelNumber: "EZ-60-EHPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-24-hpb",
      modelNumber: "EZ-24-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-36-hpb",
      modelNumber: "EZ-36-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-48-hpb",
      modelNumber: "EZ-48-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-60-hpb",
      modelNumber: "EZ-60-HPB",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-12zpl-hp115",
      modelNumber: "EZ-12ZPL-HP115",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-18zpl-hp230",
      modelNumber: "EZ-18ZPL-HP230",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-24zpl-hp230",
      modelNumber: "EZ-24ZPL-HP230",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-18z-m2",
      modelNumber: "EZ-18Z-M2",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-27z-m3",
      modelNumber: "EZ-27Z-M3",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-12zpl-hp115b",
      modelNumber: "EZ-12ZPL-HP115B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-18zpl-hp230b",
      modelNumber: "EZ-18ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-24zpl-hp230b",
      modelNumber: "EZ-24ZPL-HP230B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-18z-m2b",
      modelNumber: "EZ-18Z-M2B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-27z-m3b",
      modelNumber: "EZ-27Z-M3B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-36z-m4b",
      modelNumber: "EZ-36Z-M4B",
      brandId: "polarwave",
      refrigerant: null as any,
    },
    {
      id: "polarwave-ez-48z-m5b",
      modelNumber: "EZ-48Z-M5B",
      brandId: "polarwave",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "polarwave-aciq-wall-single-cfg-1",
      slug: "polarwave-aciq-wall-single-cfg-1",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-09z-hp115b",
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
      id: "polarwave-aciq-wall-single-cfg-2",
      slug: "polarwave-aciq-wall-single-cfg-2",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-09zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-3",
      slug: "polarwave-aciq-wall-single-cfg-3",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-12zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-4",
      slug: "polarwave-aciq-wall-single-cfg-4",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-5",
      slug: "polarwave-aciq-wall-single-cfg-5",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-24zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-6",
      slug: "polarwave-aciq-wall-single-cfg-6",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-09zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-7",
      slug: "polarwave-aciq-wall-single-cfg-7",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-12zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-8",
      slug: "polarwave-aciq-wall-single-cfg-8",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-9",
      slug: "polarwave-aciq-wall-single-cfg-9",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-09zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-10",
      slug: "polarwave-aciq-wall-single-cfg-10",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-12zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-11",
      slug: "polarwave-aciq-wall-single-cfg-11",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-12",
      slug: "polarwave-aciq-wall-single-cfg-12",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-24zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-13",
      slug: "polarwave-aciq-wall-single-cfg-13",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-12zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-14",
      slug: "polarwave-aciq-wall-single-cfg-14",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-15",
      slug: "polarwave-aciq-wall-single-cfg-15",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-24zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-16",
      slug: "polarwave-aciq-wall-single-cfg-16",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18z-hh-m2b",
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
      id: "polarwave-aciq-wall-single-cfg-17",
      slug: "polarwave-aciq-wall-single-cfg-17",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18z-hh-m2b",
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
      id: "polarwave-aciq-wall-single-cfg-18",
      slug: "polarwave-aciq-wall-single-cfg-18",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18z-hh-m2b",
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
      id: "polarwave-aciq-wall-single-cfg-19",
      slug: "polarwave-aciq-wall-single-cfg-19",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-27z-hh-m3b",
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
      id: "polarwave-aciq-wall-single-cfg-20",
      slug: "polarwave-aciq-wall-single-cfg-20",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-27z-hh-m3b",
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
      id: "polarwave-aciq-wall-single-cfg-21",
      slug: "polarwave-aciq-wall-single-cfg-21",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-27z-hh-m3b",
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
      id: "polarwave-aciq-wall-single-cfg-22",
      slug: "polarwave-aciq-wall-single-cfg-22",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-36z-hh-m4b",
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
      id: "polarwave-aciq-wall-single-cfg-23",
      slug: "polarwave-aciq-wall-single-cfg-23",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-36z-hh-m4b",
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
      id: "polarwave-aciq-wall-single-cfg-24",
      slug: "polarwave-aciq-wall-single-cfg-24",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-48z-hh-m5b",
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
      id: "polarwave-aciq-wall-single-cfg-25",
      slug: "polarwave-aciq-wall-single-cfg-25",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-48z-hh-m5b",
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
      id: "polarwave-aciq-wall-single-cfg-26",
      slug: "polarwave-aciq-wall-single-cfg-26",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-48z-hh-m5b",
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
      id: "polarwave-aciq-wall-single-cfg-27",
      slug: "polarwave-aciq-wall-single-cfg-27",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-06zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-28",
      slug: "polarwave-aciq-wall-single-cfg-28",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-09zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-29",
      slug: "polarwave-aciq-wall-single-cfg-29",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-12zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-30",
      slug: "polarwave-aciq-wall-single-cfg-30",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-31",
      slug: "polarwave-aciq-wall-single-cfg-31",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-24zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-32",
      slug: "polarwave-aciq-wall-single-cfg-32",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-36zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-33",
      slug: "polarwave-aciq-wall-single-cfg-33",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-48zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-34",
      slug: "polarwave-aciq-wall-single-cfg-34",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-36zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-35",
      slug: "polarwave-aciq-wall-single-cfg-35",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-48zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-36",
      slug: "polarwave-aciq-wall-single-cfg-36",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-60zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-37",
      slug: "polarwave-aciq-wall-single-cfg-37",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-36zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-38",
      slug: "polarwave-aciq-wall-single-cfg-38",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-48zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-39",
      slug: "polarwave-aciq-wall-single-cfg-39",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-60zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-40",
      slug: "polarwave-aciq-wall-single-cfg-40",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-06zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-41",
      slug: "polarwave-aciq-wall-single-cfg-41",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-09zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-42",
      slug: "polarwave-aciq-wall-single-cfg-42",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-12zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-43",
      slug: "polarwave-aciq-wall-single-cfg-43",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-44",
      slug: "polarwave-aciq-wall-single-cfg-44",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-12zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-45",
      slug: "polarwave-aciq-wall-single-cfg-45",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-18zpl-hp230b",
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
      id: "polarwave-aciq-wall-single-cfg-46",
      slug: "polarwave-aciq-wall-single-cfg-46",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-55z-hh-m5b",
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
      id: "polarwave-aciq-wall-single-cfg-47",
      slug: "polarwave-aciq-wall-single-cfg-47",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-55z-hh-m5b",
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
      id: "polarwave-aciq-wall-single-cfg-48",
      slug: "polarwave-aciq-wall-single-cfg-48",
      modelId: "polarwave-aciq-wall-single",
      outdoorUnitId: "polarwave-aciq-55z-hh-m5b",
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
      id: "polarwave-standard-wall-single-cfg-1",
      slug: "polarwave-standard-wall-single-cfg-1",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-18z-hp230b",
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
      id: "polarwave-standard-wall-single-cfg-2",
      slug: "polarwave-standard-wall-single-cfg-2",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-36z-hp230b",
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
      id: "polarwave-standard-wall-single-cfg-3",
      slug: "polarwave-standard-wall-single-cfg-3",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-es-55z-m5b",
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
      id: "polarwave-standard-wall-single-cfg-4",
      slug: "polarwave-standard-wall-single-cfg-4",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-es-55z-m5b",
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
      id: "polarwave-standard-wall-single-cfg-5",
      slug: "polarwave-standard-wall-single-cfg-5",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-18-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-6",
      slug: "polarwave-standard-wall-single-cfg-6",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-30-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-7",
      slug: "polarwave-standard-wall-single-cfg-7",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-36-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-8",
      slug: "polarwave-standard-wall-single-cfg-8",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-48-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-9",
      slug: "polarwave-standard-wall-single-cfg-9",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-60-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-10",
      slug: "polarwave-standard-wall-single-cfg-10",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-18-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-11",
      slug: "polarwave-standard-wall-single-cfg-11",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-36-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-12",
      slug: "polarwave-standard-wall-single-cfg-12",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-48-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-13",
      slug: "polarwave-standard-wall-single-cfg-13",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-60-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-14",
      slug: "polarwave-standard-wall-single-cfg-14",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-18-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-15",
      slug: "polarwave-standard-wall-single-cfg-15",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-36-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-16",
      slug: "polarwave-standard-wall-single-cfg-16",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-18-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-17",
      slug: "polarwave-standard-wall-single-cfg-17",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-30-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-18",
      slug: "polarwave-standard-wall-single-cfg-18",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-aciq-36-ehpb",
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
      id: "polarwave-standard-wall-single-cfg-19",
      slug: "polarwave-standard-wall-single-cfg-19",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-ez-12z-hp115b",
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
      id: "polarwave-standard-wall-single-cfg-20",
      slug: "polarwave-standard-wall-single-cfg-20",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-ez-18z-hp230b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-standard-wall-single-cfg-21",
      slug: "polarwave-standard-wall-single-cfg-21",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-ez-24z-hp230b",
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
      id: "polarwave-standard-wall-single-cfg-22",
      slug: "polarwave-standard-wall-single-cfg-22",
      modelId: "polarwave-standard-wall-single",
      outdoorUnitId: "polarwave-ez-36zpl-hp230b",
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
      id: "polarwave-es-series-wall-single-cfg-1",
      slug: "polarwave-es-series-wall-single-cfg-1",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-18z-m2b",
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
      id: "polarwave-es-series-wall-single-cfg-2",
      slug: "polarwave-es-series-wall-single-cfg-2",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-18z-m2b",
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
      id: "polarwave-es-series-wall-single-cfg-3",
      slug: "polarwave-es-series-wall-single-cfg-3",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-18z-m2b",
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
      id: "polarwave-es-series-wall-single-cfg-4",
      slug: "polarwave-es-series-wall-single-cfg-4",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-27z-m3b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 24.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-es-series-wall-single-cfg-5",
      slug: "polarwave-es-series-wall-single-cfg-5",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-27z-m3b",
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
      id: "polarwave-es-series-wall-single-cfg-6",
      slug: "polarwave-es-series-wall-single-cfg-6",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-27z-m3b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 22.8,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-es-series-wall-single-cfg-7",
      slug: "polarwave-es-series-wall-single-cfg-7",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-36z-m4b",
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
      id: "polarwave-es-series-wall-single-cfg-8",
      slug: "polarwave-es-series-wall-single-cfg-8",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-48z-m5b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 23.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-es-series-wall-single-cfg-9",
      slug: "polarwave-es-series-wall-single-cfg-9",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-es-48z-m5b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.95,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-es-series-wall-single-cfg-10",
      slug: "polarwave-es-series-wall-single-cfg-10",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-ez-48z-m5",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 20.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-es-series-wall-single-cfg-11",
      slug: "polarwave-es-series-wall-single-cfg-11",
      modelId: "polarwave-es-series-wall-single",
      outdoorUnitId: "polarwave-ez-09z-hp115b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-1",
      slug: "polarwave-aciq-series-central-ducted-cfg-1",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-24-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-2",
      slug: "polarwave-aciq-series-central-ducted-cfg-2",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-18-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-3",
      slug: "polarwave-aciq-series-central-ducted-cfg-3",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-24-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-4",
      slug: "polarwave-aciq-series-central-ducted-cfg-4",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-30-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-5",
      slug: "polarwave-aciq-series-central-ducted-cfg-5",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-36-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-6",
      slug: "polarwave-aciq-series-central-ducted-cfg-6",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-48-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-7",
      slug: "polarwave-aciq-series-central-ducted-cfg-7",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-24-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-8",
      slug: "polarwave-aciq-series-central-ducted-cfg-8",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-60hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-9",
      slug: "polarwave-aciq-series-central-ducted-cfg-9",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-24-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-10",
      slug: "polarwave-aciq-series-central-ducted-cfg-10",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-18-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-11",
      slug: "polarwave-aciq-series-central-ducted-cfg-11",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-24-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-12",
      slug: "polarwave-aciq-series-central-ducted-cfg-12",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-30-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.9,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-13",
      slug: "polarwave-aciq-series-central-ducted-cfg-13",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-36-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.6,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-14",
      slug: "polarwave-aciq-series-central-ducted-cfg-14",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-18-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-15",
      slug: "polarwave-aciq-series-central-ducted-cfg-15",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-24-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-16",
      slug: "polarwave-aciq-series-central-ducted-cfg-16",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-30-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 18.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-17",
      slug: "polarwave-aciq-series-central-ducted-cfg-17",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-36-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-18",
      slug: "polarwave-aciq-series-central-ducted-cfg-18",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-36-hpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-19",
      slug: "polarwave-aciq-series-central-ducted-cfg-19",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-36-hpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-20",
      slug: "polarwave-aciq-series-central-ducted-cfg-20",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-36-hpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-21",
      slug: "polarwave-aciq-series-central-ducted-cfg-21",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-18-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-22",
      slug: "polarwave-aciq-series-central-ducted-cfg-22",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-24-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-23",
      slug: "polarwave-aciq-series-central-ducted-cfg-23",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-30-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-24",
      slug: "polarwave-aciq-series-central-ducted-cfg-24",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-30-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-25",
      slug: "polarwave-aciq-series-central-ducted-cfg-25",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-36-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-26",
      slug: "polarwave-aciq-series-central-ducted-cfg-26",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-24-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 15.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-27",
      slug: "polarwave-aciq-series-central-ducted-cfg-27",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-36-hpc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 16.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-28",
      slug: "polarwave-aciq-series-central-ducted-cfg-28",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-12-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 17.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-aciq-series-central-ducted-cfg-29",
      slug: "polarwave-aciq-series-central-ducted-cfg-29",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-18-hpb",
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
      id: "polarwave-aciq-series-central-ducted-cfg-30",
      slug: "polarwave-aciq-series-central-ducted-cfg-30",
      modelId: "polarwave-aciq-series-central-ducted",
      outdoorUnitId: "polarwave-aciq-30-hpb",
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
      id: "polarwave-ez-series-central-ducted-cfg-1",
      slug: "polarwave-ez-series-central-ducted-cfg-1",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-24-hp",
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
      id: "polarwave-ez-series-central-ducted-cfg-2",
      slug: "polarwave-ez-series-central-ducted-cfg-2",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-48-hp",
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
      id: "polarwave-ez-series-central-ducted-cfg-3",
      slug: "polarwave-ez-series-central-ducted-cfg-3",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-60-hp",
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
      id: "polarwave-ez-series-central-ducted-cfg-4",
      slug: "polarwave-ez-series-central-ducted-cfg-4",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-36-hp",
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
      id: "polarwave-ez-series-central-ducted-cfg-5",
      slug: "polarwave-ez-series-central-ducted-cfg-5",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-24-ehpb",
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
      id: "polarwave-ez-series-central-ducted-cfg-6",
      slug: "polarwave-ez-series-central-ducted-cfg-6",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-36-ehpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 16.2,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-central-ducted-cfg-7",
      slug: "polarwave-ez-series-central-ducted-cfg-7",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-48-ehpb",
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
      id: "polarwave-ez-series-central-ducted-cfg-8",
      slug: "polarwave-ez-series-central-ducted-cfg-8",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-60-ehpb",
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
      id: "polarwave-ez-series-central-ducted-cfg-9",
      slug: "polarwave-ez-series-central-ducted-cfg-9",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-24-hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-central-ducted-cfg-10",
      slug: "polarwave-ez-series-central-ducted-cfg-10",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-36-hpb",
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
      id: "polarwave-ez-series-central-ducted-cfg-11",
      slug: "polarwave-ez-series-central-ducted-cfg-11",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-48-hpb",
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
      id: "polarwave-ez-series-central-ducted-cfg-12",
      slug: "polarwave-ez-series-central-ducted-cfg-12",
      modelId: "polarwave-ez-series-central-ducted",
      outdoorUnitId: "polarwave-ez-60-hpb",
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
      id: "polarwave-ez-series-wall-single-cfg-1",
      slug: "polarwave-ez-series-wall-single-cfg-1",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-12zpl-hp115",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-2",
      slug: "polarwave-ez-series-wall-single-cfg-2",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-18zpl-hp230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.7,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-3",
      slug: "polarwave-ez-series-wall-single-cfg-3",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-24zpl-hp230",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 20.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-4",
      slug: "polarwave-ez-series-wall-single-cfg-4",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-18z-m2",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.2,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-5",
      slug: "polarwave-ez-series-wall-single-cfg-5",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-27z-m3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-6",
      slug: "polarwave-ez-series-wall-single-cfg-6",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-12zpl-hp115b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-7",
      slug: "polarwave-ez-series-wall-single-cfg-7",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-18zpl-hp230b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.5,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-8",
      slug: "polarwave-ez-series-wall-single-cfg-8",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-24zpl-hp230b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.7,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-9",
      slug: "polarwave-ez-series-wall-single-cfg-9",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-18z-m2b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-10",
      slug: "polarwave-ez-series-wall-single-cfg-10",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-27z-m3b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 23,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-11",
      slug: "polarwave-ez-series-wall-single-cfg-11",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-27z-m3b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-12",
      slug: "polarwave-ez-series-wall-single-cfg-12",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-27z-m3b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26000,
      coolingCapacityMaxBtu: 26000,
      seer2: 21.5,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-13",
      slug: "polarwave-ez-series-wall-single-cfg-13",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-36z-m4b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 23,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-14",
      slug: "polarwave-ez-series-wall-single-cfg-14",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-36z-m4b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-15",
      slug: "polarwave-ez-series-wall-single-cfg-15",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-36z-m4b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33400,
      coolingCapacityMaxBtu: 33400,
      seer2: 21,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-16",
      slug: "polarwave-ez-series-wall-single-cfg-16",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-48z-m5b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 21.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-17",
      slug: "polarwave-ez-series-wall-single-cfg-17",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-48z-m5b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "polarwave-ez-series-wall-single-cfg-18",
      slug: "polarwave-ez-series-wall-single-cfg-18",
      modelId: "polarwave-ez-series-wall-single",
      outdoorUnitId: "polarwave-ez-48z-m5b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 20.9,
      hspf2: 10.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "polarwave-aciq-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-wall-single-cfg-2",
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
      configurationId: "polarwave-aciq-wall-single-cfg-3",
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
      configurationId: "polarwave-aciq-wall-single-cfg-4",
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
      configurationId: "polarwave-aciq-wall-single-cfg-5",
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
      configurationId: "polarwave-aciq-wall-single-cfg-6",
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
      configurationId: "polarwave-aciq-wall-single-cfg-7",
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
      configurationId: "polarwave-aciq-wall-single-cfg-8",
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
      configurationId: "polarwave-aciq-wall-single-cfg-9",
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
      configurationId: "polarwave-aciq-wall-single-cfg-10",
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
      configurationId: "polarwave-aciq-wall-single-cfg-11",
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
      configurationId: "polarwave-aciq-wall-single-cfg-12",
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
      configurationId: "polarwave-aciq-wall-single-cfg-13",
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
      configurationId: "polarwave-aciq-wall-single-cfg-14",
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
      configurationId: "polarwave-aciq-wall-single-cfg-15",
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
      configurationId: "polarwave-aciq-wall-single-cfg-16",
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
      configurationId: "polarwave-aciq-wall-single-cfg-17",
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
      configurationId: "polarwave-aciq-wall-single-cfg-18",
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
      configurationId: "polarwave-aciq-wall-single-cfg-19",
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
      configurationId: "polarwave-aciq-wall-single-cfg-20",
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
      configurationId: "polarwave-aciq-wall-single-cfg-21",
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
      configurationId: "polarwave-aciq-wall-single-cfg-22",
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
      configurationId: "polarwave-aciq-wall-single-cfg-23",
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
      configurationId: "polarwave-aciq-wall-single-cfg-24",
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
      configurationId: "polarwave-aciq-wall-single-cfg-25",
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
      configurationId: "polarwave-aciq-wall-single-cfg-26",
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
      configurationId: "polarwave-aciq-wall-single-cfg-27",
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
      configurationId: "polarwave-aciq-wall-single-cfg-28",
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
      configurationId: "polarwave-aciq-wall-single-cfg-29",
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
      configurationId: "polarwave-aciq-wall-single-cfg-30",
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
      configurationId: "polarwave-aciq-wall-single-cfg-31",
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
      configurationId: "polarwave-aciq-wall-single-cfg-32",
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
      configurationId: "polarwave-aciq-wall-single-cfg-33",
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
      configurationId: "polarwave-aciq-wall-single-cfg-34",
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
      configurationId: "polarwave-aciq-wall-single-cfg-35",
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
      configurationId: "polarwave-aciq-wall-single-cfg-36",
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
      configurationId: "polarwave-aciq-wall-single-cfg-37",
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
      configurationId: "polarwave-aciq-wall-single-cfg-38",
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
      configurationId: "polarwave-aciq-wall-single-cfg-39",
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
      configurationId: "polarwave-aciq-wall-single-cfg-40",
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
      configurationId: "polarwave-aciq-wall-single-cfg-41",
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
      configurationId: "polarwave-aciq-wall-single-cfg-42",
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
      configurationId: "polarwave-aciq-wall-single-cfg-43",
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
      configurationId: "polarwave-aciq-wall-single-cfg-44",
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
      configurationId: "polarwave-aciq-wall-single-cfg-45",
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
      configurationId: "polarwave-aciq-wall-single-cfg-46",
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
      configurationId: "polarwave-aciq-wall-single-cfg-47",
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
      configurationId: "polarwave-aciq-wall-single-cfg-48",
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
      configurationId: "polarwave-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-6",
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
      configurationId: "polarwave-standard-wall-single-cfg-7",
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
      configurationId: "polarwave-standard-wall-single-cfg-8",
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
      configurationId: "polarwave-standard-wall-single-cfg-9",
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
      configurationId: "polarwave-standard-wall-single-cfg-10",
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
      configurationId: "polarwave-standard-wall-single-cfg-11",
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
      configurationId: "polarwave-standard-wall-single-cfg-12",
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
      configurationId: "polarwave-standard-wall-single-cfg-13",
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
      configurationId: "polarwave-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-15",
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
      configurationId: "polarwave-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-17",
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
      configurationId: "polarwave-standard-wall-single-cfg-18",
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
      configurationId: "polarwave-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-standard-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-es-series-wall-single-cfg-1",
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
      configurationId: "polarwave-es-series-wall-single-cfg-2",
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
      configurationId: "polarwave-es-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-es-series-wall-single-cfg-4",
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
      configurationId: "polarwave-es-series-wall-single-cfg-5",
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
      configurationId: "polarwave-es-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-es-series-wall-single-cfg-7",
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
      configurationId: "polarwave-es-series-wall-single-cfg-8",
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
      configurationId: "polarwave-es-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-es-series-wall-single-cfg-10",
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
      configurationId: "polarwave-es-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.07,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-2",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-3",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-4",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-5",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-6",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-8",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-11",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-12",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-15",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-16",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-17",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-19",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-20",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-21",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-22",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-23",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-24",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-25",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-aciq-series-central-ducted-cfg-29",
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
      configurationId: "polarwave-aciq-series-central-ducted-cfg-30",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-1",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-central-ducted-cfg-3",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30400,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-central-ducted-cfg-5",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-6",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-7",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-8",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-9",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-10",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-11",
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
      configurationId: "polarwave-ez-series-central-ducted-cfg-12",
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
      configurationId: "polarwave-ez-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13800,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17900,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-5",
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
      configurationId: "polarwave-ez-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: 2.08,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.44,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17900,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-11",
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
      configurationId: "polarwave-ez-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-13",
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
      configurationId: "polarwave-ez-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "polarwave-ez-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
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
