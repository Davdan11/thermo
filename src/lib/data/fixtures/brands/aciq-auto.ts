import type { BrandDataset } from "../../types";

export const aciqDataset: BrandDataset = {
  brand: {
    id: "aciq",
    slug: "aciq",
    name: "ACIQ",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "aciq-standard",
      slug: "aciq-standard",
      name: "Standard",
      brandId: "aciq",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq",
      slug: "aciq-aciq",
      name: "ACIQ",
      brandId: "aciq",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series",
      slug: "aciq-aciq-series",
      name: "ACIQ series",
      brandId: "aciq",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-es-series",
      slug: "aciq-es-series",
      name: "ES SERIES",
      brandId: "aciq",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "aciq-standard-wall-single",
      slug: "aciq-standard-wall-single",
      name: "Standard",
      seriesId: "aciq-standard",
      brandId: "aciq",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6000,
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
      id: "aciq-aciq-wall-single",
      slug: "aciq-aciq-wall-single",
      name: "ACIQ",
      seriesId: "aciq-aciq",
      brandId: "aciq",
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
      cop5FMin: 1.7,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted",
      slug: "aciq-aciq-series-central-ducted",
      name: "ACIQ series",
      seriesId: "aciq-aciq-series",
      brandId: "aciq",
      modelNumber: "ACIQ series",
      normalizedModelNumber: "aciq-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 11800,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19.3,
      hspf2Min: 8.1,
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
      id: "aciq-es-series-wall-single",
      slug: "aciq-es-series-wall-single",
      name: "ES SERIES",
      seriesId: "aciq-es-series",
      brandId: "aciq",
      modelNumber: "ES SERIES",
      normalizedModelNumber: "es-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 13600,
      heatingCapacity5FMaxBtu: 38000,
      seer2Min: 19,
      seer2Max: 25.1,
      hspf2Min: 8.7,
      hspf2Max: 10.6,
      cop5FMin: 1.75,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-wall-single",
      slug: "aciq-aciq-series-wall-single",
      name: "ACIQ Series",
      seriesId: "aciq-aciq-series",
      brandId: "aciq",
      modelNumber: "ACIQ Series",
      normalizedModelNumber: "aciq-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 27.4,
      hspf2Min: 9,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "aciq-aciq-09z-hp115",
      modelNumber: "ACIQ-09Z-HP115",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18z-hp230",
      modelNumber: "ACIQ-18Z-HP230",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24-hp",
      modelNumber: "ACIQ-24-HP",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36-hp",
      modelNumber: "ACIQ-36-HP",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48-hp",
      modelNumber: "ACIQ-48-HP",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-27z-hh-m3",
      modelNumber: "ACIQ-27Z-HH-M3",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48z-hh-m5",
      modelNumber: "ACIQ-48Z-HH-M5",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18z-hp230b",
      modelNumber: "ACIQ-18Z-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36z-hp230b",
      modelNumber: "ACIQ-36Z-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-55z-m5b",
      modelNumber: "ES-55Z-M5B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18-ehpb",
      modelNumber: "ACIQ-18-EHPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-30-ehpb",
      modelNumber: "ACIQ-30-EHPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36-ehpb",
      modelNumber: "ACIQ-36-EHPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48-ehpb",
      modelNumber: "ACIQ-48-EHPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-60-ehpb",
      modelNumber: "ACIQ-60-EHPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-30-ehpd",
      modelNumber: "ACIQ-30-EHPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-12z-hp115c",
      modelNumber: "ACIQ-12Z-HP115C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-12z-hp230c",
      modelNumber: "ACIQ-12Z-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18z-hp230c",
      modelNumber: "ACIQ-18Z-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36z-hp230c",
      modelNumber: "ACIQ-36Z-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-55z-m6c",
      modelNumber: "ES-55Z-M6C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-09z-hp115b",
      modelNumber: "ACIQ-09Z-HP115B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-09zpl-hp230b",
      modelNumber: "ACIQ-09ZPL-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-12zpl-hp230b",
      modelNumber: "ACIQ-12ZPL-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18zpl-hp230b",
      modelNumber: "ACIQ-18ZPL-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24zpl-hp230b",
      modelNumber: "ACIQ-24ZPL-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18z-hh-m2b",
      modelNumber: "ACIQ-18Z-HH-M2B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-27z-hh-m3b",
      modelNumber: "ACIQ-27Z-HH-M3B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36z-hh-m4b",
      modelNumber: "ACIQ-36Z-HH-M4B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48z-hh-m5b",
      modelNumber: "ACIQ-48Z-HH-M5B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-06zpl-hp230b",
      modelNumber: "ACIQ-06ZPL-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36zpl-hp230b",
      modelNumber: "ACIQ-36ZPL-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48zpl-hp230b",
      modelNumber: "ACIQ-48ZPL-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-60zpl-hp230b",
      modelNumber: "ACIQ-60ZPL-HP230B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-55z-hh-m5b",
      modelNumber: "ACIQ-55Z-HH-M5B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-30z-hp230c",
      modelNumber: "ACIQ-30Z-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24-hpb",
      modelNumber: "ACIQ-24-HPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36-hpb",
      modelNumber: "ACIQ-36-HPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48-hpb",
      modelNumber: "ACIQ-48-HPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-60hpb",
      modelNumber: "ACIQ-60HPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24-ehpb",
      modelNumber: "ACIQ-24-EHPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18-hpb",
      modelNumber: "ACIQ-18-HPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-30-hpb",
      modelNumber: "ACIQ-30-HPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36-hpc",
      modelNumber: "ACIQ-36-HPC",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-12-ehpb",
      modelNumber: "ACIQ-12-EHPB",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18-ehpd",
      modelNumber: "ACIQ-18-EHPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24-ehpd",
      modelNumber: "ACIQ-24-EHPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36-ehpd",
      modelNumber: "ACIQ-36-EHPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48-ehpd",
      modelNumber: "ACIQ-48-EHPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-60-ehpd",
      modelNumber: "ACIQ-60-EHPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18-hpd",
      modelNumber: "ACIQ-18-HPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24-hpd",
      modelNumber: "ACIQ-24-HPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-30-hpd",
      modelNumber: "ACIQ-30-HPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36-hpd",
      modelNumber: "ACIQ-36-HPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-42-hpd",
      modelNumber: "ACIQ-42-HPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48-hpd",
      modelNumber: "ACIQ-48-HPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-60-hpd",
      modelNumber: "ACIQ-60-HPD",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-18z-m2b",
      modelNumber: "ES-18Z-M2B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-27z-m3b",
      modelNumber: "ES-27Z-M3B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-36z-m4b",
      modelNumber: "ES-36Z-M4B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-48z-m5b",
      modelNumber: "ES-48Z-M5B",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-18z-m3c",
      modelNumber: "ES-18Z-M3C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-27z-m4c",
      modelNumber: "ES-27Z-M4C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-36z-m5c",
      modelNumber: "ES-36Z-M5C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-es-48z-m6c",
      modelNumber: "ES-48Z-M6C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-09z-hp115c",
      modelNumber: "ACIQ-09Z-HP115C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-09z-hp230c",
      modelNumber: "ACIQ-09Z-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24z-hp230c",
      modelNumber: "ACIQ-24Z-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-06zpl-hp230c",
      modelNumber: "ACIQ-06ZPL-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-09zpl-hp230c",
      modelNumber: "ACIQ-09ZPL-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-12zpl-hp230c",
      modelNumber: "ACIQ-12ZPL-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18zpl-hp230c",
      modelNumber: "ACIQ-18ZPL-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24zpl-hp230c",
      modelNumber: "ACIQ-24ZPL-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36zpl-hp230c",
      modelNumber: "ACIQ-36ZPL-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48zpl-hp230c",
      modelNumber: "ACIQ-48ZPL-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-60zpl-hp230c",
      modelNumber: "ACIQ-60ZPL-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18z-hh-m3c",
      modelNumber: "ACIQ-18Z-HH-M3C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-27z-hh-m4c",
      modelNumber: "ACIQ-27Z-HH-M4C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-36z-hh-m5c",
      modelNumber: "ACIQ-36Z-HH-M5C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-48z-hh-m6c",
      modelNumber: "ACIQ-48Z-HH-M6C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-55z-hh-m6c",
      modelNumber: "ACIQ-55Z-HH-M6C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-09zs-hp115c",
      modelNumber: "ACIQ-09ZS-HP115C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-12zs-hp115c",
      modelNumber: "ACIQ-12ZS-HP115C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-09zs-hp230c",
      modelNumber: "ACIQ-09ZS-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-12zs-hp230c",
      modelNumber: "ACIQ-12ZS-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-18zs-hp230c",
      modelNumber: "ACIQ-18ZS-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    },
    {
      id: "aciq-aciq-24zs-hp230c",
      modelNumber: "ACIQ-24ZS-HP230C",
      brandId: "aciq",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "aciq-standard-wall-single-cfg-1",
      slug: "aciq-standard-wall-single-cfg-1",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-09z-hp115",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-standard-wall-single-cfg-2",
      slug: "aciq-standard-wall-single-cfg-2",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hp230",
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
      id: "aciq-standard-wall-single-cfg-3",
      slug: "aciq-standard-wall-single-cfg-3",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-24-hp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-standard-wall-single-cfg-4",
      slug: "aciq-standard-wall-single-cfg-4",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-36-hp",
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
      id: "aciq-standard-wall-single-cfg-5",
      slug: "aciq-standard-wall-single-cfg-5",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-48-hp",
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
      id: "aciq-standard-wall-single-cfg-6",
      slug: "aciq-standard-wall-single-cfg-6",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-27z-hh-m3",
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
      id: "aciq-standard-wall-single-cfg-7",
      slug: "aciq-standard-wall-single-cfg-7",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-48z-hh-m5",
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
      id: "aciq-standard-wall-single-cfg-8",
      slug: "aciq-standard-wall-single-cfg-8",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hp230b",
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
      id: "aciq-standard-wall-single-cfg-9",
      slug: "aciq-standard-wall-single-cfg-9",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-36z-hp230b",
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
      id: "aciq-standard-wall-single-cfg-10",
      slug: "aciq-standard-wall-single-cfg-10",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-es-55z-m5b",
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
      id: "aciq-standard-wall-single-cfg-11",
      slug: "aciq-standard-wall-single-cfg-11",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-es-55z-m5b",
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
      id: "aciq-standard-wall-single-cfg-12",
      slug: "aciq-standard-wall-single-cfg-12",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-18-ehpb",
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
      id: "aciq-standard-wall-single-cfg-13",
      slug: "aciq-standard-wall-single-cfg-13",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-30-ehpb",
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
      id: "aciq-standard-wall-single-cfg-14",
      slug: "aciq-standard-wall-single-cfg-14",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-36-ehpb",
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
      id: "aciq-standard-wall-single-cfg-15",
      slug: "aciq-standard-wall-single-cfg-15",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-48-ehpb",
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
      id: "aciq-standard-wall-single-cfg-16",
      slug: "aciq-standard-wall-single-cfg-16",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-60-ehpb",
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
      id: "aciq-standard-wall-single-cfg-17",
      slug: "aciq-standard-wall-single-cfg-17",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-18-ehpb",
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
      id: "aciq-standard-wall-single-cfg-18",
      slug: "aciq-standard-wall-single-cfg-18",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-36-ehpb",
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
      id: "aciq-standard-wall-single-cfg-19",
      slug: "aciq-standard-wall-single-cfg-19",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-48-ehpb",
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
      id: "aciq-standard-wall-single-cfg-20",
      slug: "aciq-standard-wall-single-cfg-20",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-60-ehpb",
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
      id: "aciq-standard-wall-single-cfg-21",
      slug: "aciq-standard-wall-single-cfg-21",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-18-ehpb",
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
      id: "aciq-standard-wall-single-cfg-22",
      slug: "aciq-standard-wall-single-cfg-22",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-36-ehpb",
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
      id: "aciq-standard-wall-single-cfg-23",
      slug: "aciq-standard-wall-single-cfg-23",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-18-ehpb",
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
      id: "aciq-standard-wall-single-cfg-24",
      slug: "aciq-standard-wall-single-cfg-24",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-30-ehpb",
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
      id: "aciq-standard-wall-single-cfg-25",
      slug: "aciq-standard-wall-single-cfg-25",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-36-ehpb",
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
      id: "aciq-standard-wall-single-cfg-26",
      slug: "aciq-standard-wall-single-cfg-26",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-30-ehpd",
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
      id: "aciq-standard-wall-single-cfg-27",
      slug: "aciq-standard-wall-single-cfg-27",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-12z-hp115c",
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
      id: "aciq-standard-wall-single-cfg-28",
      slug: "aciq-standard-wall-single-cfg-28",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-12z-hp230c",
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
      id: "aciq-standard-wall-single-cfg-29",
      slug: "aciq-standard-wall-single-cfg-29",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hp230c",
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
      id: "aciq-standard-wall-single-cfg-30",
      slug: "aciq-standard-wall-single-cfg-30",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-36z-hp230c",
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
      id: "aciq-standard-wall-single-cfg-31",
      slug: "aciq-standard-wall-single-cfg-31",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-es-55z-m6c",
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
      id: "aciq-standard-wall-single-cfg-32",
      slug: "aciq-standard-wall-single-cfg-32",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-es-55z-m6c",
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
      id: "aciq-standard-wall-single-cfg-33",
      slug: "aciq-standard-wall-single-cfg-33",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-es-55z-m6c",
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
      id: "aciq-standard-wall-single-cfg-34",
      slug: "aciq-standard-wall-single-cfg-34",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-30-ehpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-standard-wall-single-cfg-35",
      slug: "aciq-standard-wall-single-cfg-35",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-30-ehpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-standard-wall-single-cfg-36",
      slug: "aciq-standard-wall-single-cfg-36",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-30-ehpd",
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
      id: "aciq-standard-wall-single-cfg-37",
      slug: "aciq-standard-wall-single-cfg-37",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-30-ehpd",
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
      id: "aciq-standard-wall-single-cfg-38",
      slug: "aciq-standard-wall-single-cfg-38",
      modelId: "aciq-standard-wall-single",
      outdoorUnitId: "aciq-aciq-30-ehpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-wall-single-cfg-1",
      slug: "aciq-aciq-wall-single-cfg-1",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-09z-hp115b",
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
      id: "aciq-aciq-wall-single-cfg-2",
      slug: "aciq-aciq-wall-single-cfg-2",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-3",
      slug: "aciq-aciq-wall-single-cfg-3",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-4",
      slug: "aciq-aciq-wall-single-cfg-4",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-5",
      slug: "aciq-aciq-wall-single-cfg-5",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-24zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-6",
      slug: "aciq-aciq-wall-single-cfg-6",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-7",
      slug: "aciq-aciq-wall-single-cfg-7",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-8",
      slug: "aciq-aciq-wall-single-cfg-8",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-9",
      slug: "aciq-aciq-wall-single-cfg-9",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-10",
      slug: "aciq-aciq-wall-single-cfg-10",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-11",
      slug: "aciq-aciq-wall-single-cfg-11",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-12",
      slug: "aciq-aciq-wall-single-cfg-12",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-24zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-13",
      slug: "aciq-aciq-wall-single-cfg-13",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-14",
      slug: "aciq-aciq-wall-single-cfg-14",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-15",
      slug: "aciq-aciq-wall-single-cfg-15",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-24zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-16",
      slug: "aciq-aciq-wall-single-cfg-16",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hh-m2b",
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
      id: "aciq-aciq-wall-single-cfg-17",
      slug: "aciq-aciq-wall-single-cfg-17",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hh-m2b",
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
      id: "aciq-aciq-wall-single-cfg-18",
      slug: "aciq-aciq-wall-single-cfg-18",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hh-m2b",
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
      id: "aciq-aciq-wall-single-cfg-19",
      slug: "aciq-aciq-wall-single-cfg-19",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-27z-hh-m3b",
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
      id: "aciq-aciq-wall-single-cfg-20",
      slug: "aciq-aciq-wall-single-cfg-20",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-27z-hh-m3b",
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
      id: "aciq-aciq-wall-single-cfg-21",
      slug: "aciq-aciq-wall-single-cfg-21",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-27z-hh-m3b",
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
      id: "aciq-aciq-wall-single-cfg-22",
      slug: "aciq-aciq-wall-single-cfg-22",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-36z-hh-m4b",
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
      id: "aciq-aciq-wall-single-cfg-23",
      slug: "aciq-aciq-wall-single-cfg-23",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-36z-hh-m4b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-wall-single-cfg-24",
      slug: "aciq-aciq-wall-single-cfg-24",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-36z-hh-m4b",
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
      id: "aciq-aciq-wall-single-cfg-25",
      slug: "aciq-aciq-wall-single-cfg-25",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-48z-hh-m5b",
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
      id: "aciq-aciq-wall-single-cfg-26",
      slug: "aciq-aciq-wall-single-cfg-26",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-48z-hh-m5b",
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
      id: "aciq-aciq-wall-single-cfg-27",
      slug: "aciq-aciq-wall-single-cfg-27",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-48z-hh-m5b",
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
      id: "aciq-aciq-wall-single-cfg-28",
      slug: "aciq-aciq-wall-single-cfg-28",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-06zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-29",
      slug: "aciq-aciq-wall-single-cfg-29",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-30",
      slug: "aciq-aciq-wall-single-cfg-30",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-31",
      slug: "aciq-aciq-wall-single-cfg-31",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-32",
      slug: "aciq-aciq-wall-single-cfg-32",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-24zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-33",
      slug: "aciq-aciq-wall-single-cfg-33",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-36zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-34",
      slug: "aciq-aciq-wall-single-cfg-34",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-48zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-35",
      slug: "aciq-aciq-wall-single-cfg-35",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-36zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-36",
      slug: "aciq-aciq-wall-single-cfg-36",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-48zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-37",
      slug: "aciq-aciq-wall-single-cfg-37",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-60zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-38",
      slug: "aciq-aciq-wall-single-cfg-38",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-36zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-39",
      slug: "aciq-aciq-wall-single-cfg-39",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-48zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-40",
      slug: "aciq-aciq-wall-single-cfg-40",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-60zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-41",
      slug: "aciq-aciq-wall-single-cfg-41",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-06zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-42",
      slug: "aciq-aciq-wall-single-cfg-42",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-43",
      slug: "aciq-aciq-wall-single-cfg-43",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-44",
      slug: "aciq-aciq-wall-single-cfg-44",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-45",
      slug: "aciq-aciq-wall-single-cfg-45",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-46",
      slug: "aciq-aciq-wall-single-cfg-46",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230b",
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
      id: "aciq-aciq-wall-single-cfg-47",
      slug: "aciq-aciq-wall-single-cfg-47",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-55z-hh-m5b",
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
      id: "aciq-aciq-wall-single-cfg-48",
      slug: "aciq-aciq-wall-single-cfg-48",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-55z-hh-m5b",
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
      id: "aciq-aciq-wall-single-cfg-49",
      slug: "aciq-aciq-wall-single-cfg-49",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-55z-hh-m5b",
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
      id: "aciq-aciq-wall-single-cfg-50",
      slug: "aciq-aciq-wall-single-cfg-50",
      modelId: "aciq-aciq-wall-single",
      outdoorUnitId: "aciq-aciq-30z-hp230c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-1",
      slug: "aciq-aciq-series-central-ducted-cfg-1",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-2",
      slug: "aciq-aciq-series-central-ducted-cfg-2",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-3",
      slug: "aciq-aciq-series-central-ducted-cfg-3",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-4",
      slug: "aciq-aciq-series-central-ducted-cfg-4",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-5",
      slug: "aciq-aciq-series-central-ducted-cfg-5",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18zpl-hp230b",
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
      id: "aciq-aciq-series-central-ducted-cfg-6",
      slug: "aciq-aciq-series-central-ducted-cfg-6",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24zpl-hp230b",
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
      id: "aciq-aciq-series-central-ducted-cfg-7",
      slug: "aciq-aciq-series-central-ducted-cfg-7",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-8",
      slug: "aciq-aciq-series-central-ducted-cfg-8",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-9",
      slug: "aciq-aciq-series-central-ducted-cfg-9",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-10",
      slug: "aciq-aciq-series-central-ducted-cfg-10",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-11",
      slug: "aciq-aciq-series-central-ducted-cfg-11",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-12",
      slug: "aciq-aciq-series-central-ducted-cfg-12",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-13",
      slug: "aciq-aciq-series-central-ducted-cfg-13",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-14",
      slug: "aciq-aciq-series-central-ducted-cfg-14",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-15",
      slug: "aciq-aciq-series-central-ducted-cfg-15",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-16",
      slug: "aciq-aciq-series-central-ducted-cfg-16",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-17",
      slug: "aciq-aciq-series-central-ducted-cfg-17",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-18",
      slug: "aciq-aciq-series-central-ducted-cfg-18",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-19",
      slug: "aciq-aciq-series-central-ducted-cfg-19",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-20",
      slug: "aciq-aciq-series-central-ducted-cfg-20",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-21",
      slug: "aciq-aciq-series-central-ducted-cfg-21",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-22",
      slug: "aciq-aciq-series-central-ducted-cfg-22",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-23",
      slug: "aciq-aciq-series-central-ducted-cfg-23",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-24",
      slug: "aciq-aciq-series-central-ducted-cfg-24",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpc",
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
      id: "aciq-aciq-series-central-ducted-cfg-25",
      slug: "aciq-aciq-series-central-ducted-cfg-25",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpc",
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
      id: "aciq-aciq-series-central-ducted-cfg-26",
      slug: "aciq-aciq-series-central-ducted-cfg-26",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpc",
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
      id: "aciq-aciq-series-central-ducted-cfg-27",
      slug: "aciq-aciq-series-central-ducted-cfg-27",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-28",
      slug: "aciq-aciq-series-central-ducted-cfg-28",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-29",
      slug: "aciq-aciq-series-central-ducted-cfg-29",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-30",
      slug: "aciq-aciq-series-central-ducted-cfg-30",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-31",
      slug: "aciq-aciq-series-central-ducted-cfg-31",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-32",
      slug: "aciq-aciq-series-central-ducted-cfg-32",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-33",
      slug: "aciq-aciq-series-central-ducted-cfg-33",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpc",
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
      id: "aciq-aciq-series-central-ducted-cfg-34",
      slug: "aciq-aciq-series-central-ducted-cfg-34",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-12-ehpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-35",
      slug: "aciq-aciq-series-central-ducted-cfg-35",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-36",
      slug: "aciq-aciq-series-central-ducted-cfg-36",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpb",
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
      id: "aciq-aciq-series-central-ducted-cfg-37",
      slug: "aciq-aciq-series-central-ducted-cfg-37",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-38",
      slug: "aciq-aciq-series-central-ducted-cfg-38",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-39",
      slug: "aciq-aciq-series-central-ducted-cfg-39",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-40",
      slug: "aciq-aciq-series-central-ducted-cfg-40",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-41",
      slug: "aciq-aciq-series-central-ducted-cfg-41",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-42",
      slug: "aciq-aciq-series-central-ducted-cfg-42",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-43",
      slug: "aciq-aciq-series-central-ducted-cfg-43",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-44",
      slug: "aciq-aciq-series-central-ducted-cfg-44",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-45",
      slug: "aciq-aciq-series-central-ducted-cfg-45",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-46",
      slug: "aciq-aciq-series-central-ducted-cfg-46",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-42-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-47",
      slug: "aciq-aciq-series-central-ducted-cfg-47",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-48",
      slug: "aciq-aciq-series-central-ducted-cfg-48",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-49",
      slug: "aciq-aciq-series-central-ducted-cfg-49",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-50",
      slug: "aciq-aciq-series-central-ducted-cfg-50",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-51",
      slug: "aciq-aciq-series-central-ducted-cfg-51",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.2,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-52",
      slug: "aciq-aciq-series-central-ducted-cfg-52",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-53",
      slug: "aciq-aciq-series-central-ducted-cfg-53",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-54",
      slug: "aciq-aciq-series-central-ducted-cfg-54",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 17.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-55",
      slug: "aciq-aciq-series-central-ducted-cfg-55",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-ehpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-56",
      slug: "aciq-aciq-series-central-ducted-cfg-56",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-ehpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-57",
      slug: "aciq-aciq-series-central-ducted-cfg-57",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-58",
      slug: "aciq-aciq-series-central-ducted-cfg-58",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-59",
      slug: "aciq-aciq-series-central-ducted-cfg-59",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-60",
      slug: "aciq-aciq-series-central-ducted-cfg-60",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-61",
      slug: "aciq-aciq-series-central-ducted-cfg-61",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-62",
      slug: "aciq-aciq-series-central-ducted-cfg-62",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-63",
      slug: "aciq-aciq-series-central-ducted-cfg-63",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-64",
      slug: "aciq-aciq-series-central-ducted-cfg-64",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-65",
      slug: "aciq-aciq-series-central-ducted-cfg-65",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-66",
      slug: "aciq-aciq-series-central-ducted-cfg-66",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-67",
      slug: "aciq-aciq-series-central-ducted-cfg-67",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-68",
      slug: "aciq-aciq-series-central-ducted-cfg-68",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-69",
      slug: "aciq-aciq-series-central-ducted-cfg-69",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-70",
      slug: "aciq-aciq-series-central-ducted-cfg-70",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-71",
      slug: "aciq-aciq-series-central-ducted-cfg-71",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-72",
      slug: "aciq-aciq-series-central-ducted-cfg-72",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-73",
      slug: "aciq-aciq-series-central-ducted-cfg-73",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-ehpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-74",
      slug: "aciq-aciq-series-central-ducted-cfg-74",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-75",
      slug: "aciq-aciq-series-central-ducted-cfg-75",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-76",
      slug: "aciq-aciq-series-central-ducted-cfg-76",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-77",
      slug: "aciq-aciq-series-central-ducted-cfg-77",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-78",
      slug: "aciq-aciq-series-central-ducted-cfg-78",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-79",
      slug: "aciq-aciq-series-central-ducted-cfg-79",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-80",
      slug: "aciq-aciq-series-central-ducted-cfg-80",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-ehpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-81",
      slug: "aciq-aciq-series-central-ducted-cfg-81",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-82",
      slug: "aciq-aciq-series-central-ducted-cfg-82",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-ehpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.4,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-83",
      slug: "aciq-aciq-series-central-ducted-cfg-83",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-18-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.8,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-84",
      slug: "aciq-aciq-series-central-ducted-cfg-84",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-24-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17.5,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-85",
      slug: "aciq-aciq-series-central-ducted-cfg-85",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-30-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-86",
      slug: "aciq-aciq-series-central-ducted-cfg-86",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-hpd",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.4,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-central-ducted-cfg-87",
      slug: "aciq-aciq-series-central-ducted-cfg-87",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-36-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-88",
      slug: "aciq-aciq-series-central-ducted-cfg-88",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-89",
      slug: "aciq-aciq-series-central-ducted-cfg-89",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-90",
      slug: "aciq-aciq-series-central-ducted-cfg-90",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-91",
      slug: "aciq-aciq-series-central-ducted-cfg-91",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-60-ehpd",
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
      id: "aciq-aciq-series-central-ducted-cfg-92",
      slug: "aciq-aciq-series-central-ducted-cfg-92",
      modelId: "aciq-aciq-series-central-ducted",
      outdoorUnitId: "aciq-aciq-48-hpd",
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
      id: "aciq-es-series-wall-single-cfg-1",
      slug: "aciq-es-series-wall-single-cfg-1",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-18z-m2b",
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
      id: "aciq-es-series-wall-single-cfg-2",
      slug: "aciq-es-series-wall-single-cfg-2",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-18z-m2b",
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
      id: "aciq-es-series-wall-single-cfg-3",
      slug: "aciq-es-series-wall-single-cfg-3",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-18z-m2b",
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
      id: "aciq-es-series-wall-single-cfg-4",
      slug: "aciq-es-series-wall-single-cfg-4",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-27z-m3b",
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
      id: "aciq-es-series-wall-single-cfg-5",
      slug: "aciq-es-series-wall-single-cfg-5",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-27z-m3b",
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
      id: "aciq-es-series-wall-single-cfg-6",
      slug: "aciq-es-series-wall-single-cfg-6",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-27z-m3b",
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
      id: "aciq-es-series-wall-single-cfg-7",
      slug: "aciq-es-series-wall-single-cfg-7",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-36z-m4b",
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
      id: "aciq-es-series-wall-single-cfg-8",
      slug: "aciq-es-series-wall-single-cfg-8",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-48z-m5b",
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
      id: "aciq-es-series-wall-single-cfg-9",
      slug: "aciq-es-series-wall-single-cfg-9",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-48z-m5b",
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
      id: "aciq-es-series-wall-single-cfg-10",
      slug: "aciq-es-series-wall-single-cfg-10",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-18z-m3c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-es-series-wall-single-cfg-11",
      slug: "aciq-es-series-wall-single-cfg-11",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-18z-m3c",
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
      id: "aciq-es-series-wall-single-cfg-12",
      slug: "aciq-es-series-wall-single-cfg-12",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-18z-m3c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.55,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-es-series-wall-single-cfg-13",
      slug: "aciq-es-series-wall-single-cfg-13",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-27z-m4c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 25,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-es-series-wall-single-cfg-14",
      slug: "aciq-es-series-wall-single-cfg-14",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-27z-m4c",
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
      id: "aciq-es-series-wall-single-cfg-15",
      slug: "aciq-es-series-wall-single-cfg-15",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-27z-m4c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 26800,
      coolingCapacityMaxBtu: 26800,
      seer2: 23,
      hspf2: 9.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-es-series-wall-single-cfg-16",
      slug: "aciq-es-series-wall-single-cfg-16",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-36z-m5c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 24,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-es-series-wall-single-cfg-17",
      slug: "aciq-es-series-wall-single-cfg-17",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-36z-m5c",
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
      id: "aciq-es-series-wall-single-cfg-18",
      slug: "aciq-es-series-wall-single-cfg-18",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-36z-m5c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35400,
      coolingCapacityMaxBtu: 35400,
      seer2: 22,
      hspf2: 9.35,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-es-series-wall-single-cfg-19",
      slug: "aciq-es-series-wall-single-cfg-19",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-48z-m6c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 24,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-es-series-wall-single-cfg-20",
      slug: "aciq-es-series-wall-single-cfg-20",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-48z-m6c",
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
      id: "aciq-es-series-wall-single-cfg-21",
      slug: "aciq-es-series-wall-single-cfg-21",
      modelId: "aciq-es-series-wall-single",
      outdoorUnitId: "aciq-es-48z-m6c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 22.2,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-wall-single-cfg-1",
      slug: "aciq-aciq-series-wall-single-cfg-1",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09z-hp115c",
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
      id: "aciq-aciq-series-wall-single-cfg-2",
      slug: "aciq-aciq-series-wall-single-cfg-2",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09z-hp230c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.2,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-wall-single-cfg-3",
      slug: "aciq-aciq-series-wall-single-cfg-3",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-24z-hp230c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-wall-single-cfg-4",
      slug: "aciq-aciq-series-wall-single-cfg-4",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-06zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-5",
      slug: "aciq-aciq-series-wall-single-cfg-5",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-6",
      slug: "aciq-aciq-series-wall-single-cfg-6",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-7",
      slug: "aciq-aciq-series-wall-single-cfg-7",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-8",
      slug: "aciq-aciq-series-wall-single-cfg-8",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-24zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-9",
      slug: "aciq-aciq-series-wall-single-cfg-9",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-10",
      slug: "aciq-aciq-series-wall-single-cfg-10",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-11",
      slug: "aciq-aciq-series-wall-single-cfg-11",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-12",
      slug: "aciq-aciq-series-wall-single-cfg-12",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-24zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-13",
      slug: "aciq-aciq-series-wall-single-cfg-13",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-36zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-14",
      slug: "aciq-aciq-series-wall-single-cfg-14",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-48zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-15",
      slug: "aciq-aciq-series-wall-single-cfg-15",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-16",
      slug: "aciq-aciq-series-wall-single-cfg-16",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-17",
      slug: "aciq-aciq-series-wall-single-cfg-17",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-18",
      slug: "aciq-aciq-series-wall-single-cfg-18",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-24zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-19",
      slug: "aciq-aciq-series-wall-single-cfg-19",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-36zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-20",
      slug: "aciq-aciq-series-wall-single-cfg-20",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-48zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-21",
      slug: "aciq-aciq-series-wall-single-cfg-21",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-60zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-22",
      slug: "aciq-aciq-series-wall-single-cfg-22",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-23",
      slug: "aciq-aciq-series-wall-single-cfg-23",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-12zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-24",
      slug: "aciq-aciq-series-wall-single-cfg-24",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-25",
      slug: "aciq-aciq-series-wall-single-cfg-25",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-24zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-26",
      slug: "aciq-aciq-series-wall-single-cfg-26",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-36zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-27",
      slug: "aciq-aciq-series-wall-single-cfg-27",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-48zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-28",
      slug: "aciq-aciq-series-wall-single-cfg-28",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-60zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-29",
      slug: "aciq-aciq-series-wall-single-cfg-29",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-06zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-30",
      slug: "aciq-aciq-series-wall-single-cfg-30",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-31",
      slug: "aciq-aciq-series-wall-single-cfg-31",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18zpl-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-32",
      slug: "aciq-aciq-series-wall-single-cfg-32",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hh-m3c",
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
      id: "aciq-aciq-series-wall-single-cfg-33",
      slug: "aciq-aciq-series-wall-single-cfg-33",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hh-m3c",
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
      id: "aciq-aciq-series-wall-single-cfg-34",
      slug: "aciq-aciq-series-wall-single-cfg-34",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18z-hh-m3c",
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
      id: "aciq-aciq-series-wall-single-cfg-35",
      slug: "aciq-aciq-series-wall-single-cfg-35",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-27z-hh-m4c",
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
      id: "aciq-aciq-series-wall-single-cfg-36",
      slug: "aciq-aciq-series-wall-single-cfg-36",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-27z-hh-m4c",
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
      id: "aciq-aciq-series-wall-single-cfg-37",
      slug: "aciq-aciq-series-wall-single-cfg-37",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-27z-hh-m4c",
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
      id: "aciq-aciq-series-wall-single-cfg-38",
      slug: "aciq-aciq-series-wall-single-cfg-38",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-36z-hh-m5c",
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
      id: "aciq-aciq-series-wall-single-cfg-39",
      slug: "aciq-aciq-series-wall-single-cfg-39",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-36z-hh-m5c",
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
      id: "aciq-aciq-series-wall-single-cfg-40",
      slug: "aciq-aciq-series-wall-single-cfg-40",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-36z-hh-m5c",
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
      id: "aciq-aciq-series-wall-single-cfg-41",
      slug: "aciq-aciq-series-wall-single-cfg-41",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-48z-hh-m6c",
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
      id: "aciq-aciq-series-wall-single-cfg-42",
      slug: "aciq-aciq-series-wall-single-cfg-42",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-48z-hh-m6c",
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
      id: "aciq-aciq-series-wall-single-cfg-43",
      slug: "aciq-aciq-series-wall-single-cfg-43",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-48z-hh-m6c",
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
      id: "aciq-aciq-series-wall-single-cfg-44",
      slug: "aciq-aciq-series-wall-single-cfg-44",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-55z-hh-m6c",
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
      id: "aciq-aciq-series-wall-single-cfg-45",
      slug: "aciq-aciq-series-wall-single-cfg-45",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-55z-hh-m6c",
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
      id: "aciq-aciq-series-wall-single-cfg-46",
      slug: "aciq-aciq-series-wall-single-cfg-46",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-55z-hh-m6c",
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
      id: "aciq-aciq-series-wall-single-cfg-47",
      slug: "aciq-aciq-series-wall-single-cfg-47",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09zs-hp115c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "aciq-aciq-series-wall-single-cfg-48",
      slug: "aciq-aciq-series-wall-single-cfg-48",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-12zs-hp115c",
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
      id: "aciq-aciq-series-wall-single-cfg-49",
      slug: "aciq-aciq-series-wall-single-cfg-49",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-09zs-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-50",
      slug: "aciq-aciq-series-wall-single-cfg-50",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-12zs-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-51",
      slug: "aciq-aciq-series-wall-single-cfg-51",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-18zs-hp230c",
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
      id: "aciq-aciq-series-wall-single-cfg-52",
      slug: "aciq-aciq-series-wall-single-cfg-52",
      modelId: "aciq-aciq-series-wall-single",
      outdoorUnitId: "aciq-aciq-24zs-hp230c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "aciq-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-standard-wall-single-cfg-2",
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
      configurationId: "aciq-standard-wall-single-cfg-3",
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
      configurationId: "aciq-standard-wall-single-cfg-4",
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
      configurationId: "aciq-standard-wall-single-cfg-5",
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
      configurationId: "aciq-standard-wall-single-cfg-6",
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
      configurationId: "aciq-standard-wall-single-cfg-7",
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
      configurationId: "aciq-standard-wall-single-cfg-8",
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
      configurationId: "aciq-standard-wall-single-cfg-9",
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
      configurationId: "aciq-standard-wall-single-cfg-10",
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
      configurationId: "aciq-standard-wall-single-cfg-11",
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
      configurationId: "aciq-standard-wall-single-cfg-12",
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
      configurationId: "aciq-standard-wall-single-cfg-13",
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
      configurationId: "aciq-standard-wall-single-cfg-14",
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
      configurationId: "aciq-standard-wall-single-cfg-15",
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
      configurationId: "aciq-standard-wall-single-cfg-16",
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
      configurationId: "aciq-standard-wall-single-cfg-17",
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
      configurationId: "aciq-standard-wall-single-cfg-18",
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
      configurationId: "aciq-standard-wall-single-cfg-19",
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
      configurationId: "aciq-standard-wall-single-cfg-20",
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
      configurationId: "aciq-standard-wall-single-cfg-21",
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
      configurationId: "aciq-standard-wall-single-cfg-22",
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
      configurationId: "aciq-standard-wall-single-cfg-23",
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
      configurationId: "aciq-standard-wall-single-cfg-24",
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
      configurationId: "aciq-standard-wall-single-cfg-25",
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
      configurationId: "aciq-standard-wall-single-cfg-26",
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
      configurationId: "aciq-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-standard-wall-single-cfg-30",
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
      configurationId: "aciq-standard-wall-single-cfg-31",
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
      configurationId: "aciq-standard-wall-single-cfg-32",
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
      configurationId: "aciq-standard-wall-single-cfg-33",
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
      configurationId: "aciq-standard-wall-single-cfg-34",
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
      configurationId: "aciq-standard-wall-single-cfg-35",
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
      configurationId: "aciq-standard-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-standard-wall-single-cfg-37",
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
      configurationId: "aciq-standard-wall-single-cfg-38",
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
      configurationId: "aciq-aciq-wall-single-cfg-1",
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
      configurationId: "aciq-aciq-wall-single-cfg-2",
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
      configurationId: "aciq-aciq-wall-single-cfg-3",
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
      configurationId: "aciq-aciq-wall-single-cfg-4",
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
      configurationId: "aciq-aciq-wall-single-cfg-5",
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
      configurationId: "aciq-aciq-wall-single-cfg-6",
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
      configurationId: "aciq-aciq-wall-single-cfg-7",
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
      configurationId: "aciq-aciq-wall-single-cfg-8",
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
      configurationId: "aciq-aciq-wall-single-cfg-9",
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
      configurationId: "aciq-aciq-wall-single-cfg-10",
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
      configurationId: "aciq-aciq-wall-single-cfg-11",
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
      configurationId: "aciq-aciq-wall-single-cfg-12",
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
      configurationId: "aciq-aciq-wall-single-cfg-13",
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
      configurationId: "aciq-aciq-wall-single-cfg-14",
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
      configurationId: "aciq-aciq-wall-single-cfg-15",
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
      configurationId: "aciq-aciq-wall-single-cfg-16",
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
      configurationId: "aciq-aciq-wall-single-cfg-17",
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
      configurationId: "aciq-aciq-wall-single-cfg-18",
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
      configurationId: "aciq-aciq-wall-single-cfg-19",
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
      configurationId: "aciq-aciq-wall-single-cfg-20",
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
      configurationId: "aciq-aciq-wall-single-cfg-21",
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
      configurationId: "aciq-aciq-wall-single-cfg-22",
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
      configurationId: "aciq-aciq-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-wall-single-cfg-24",
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
      configurationId: "aciq-aciq-wall-single-cfg-25",
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
      configurationId: "aciq-aciq-wall-single-cfg-26",
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
      configurationId: "aciq-aciq-wall-single-cfg-27",
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
      configurationId: "aciq-aciq-wall-single-cfg-28",
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
      configurationId: "aciq-aciq-wall-single-cfg-29",
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
      configurationId: "aciq-aciq-wall-single-cfg-30",
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
      configurationId: "aciq-aciq-wall-single-cfg-31",
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
      configurationId: "aciq-aciq-wall-single-cfg-32",
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
      configurationId: "aciq-aciq-wall-single-cfg-33",
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
      configurationId: "aciq-aciq-wall-single-cfg-34",
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
      configurationId: "aciq-aciq-wall-single-cfg-35",
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
      configurationId: "aciq-aciq-wall-single-cfg-36",
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
      configurationId: "aciq-aciq-wall-single-cfg-37",
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
      configurationId: "aciq-aciq-wall-single-cfg-38",
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
      configurationId: "aciq-aciq-wall-single-cfg-39",
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
      configurationId: "aciq-aciq-wall-single-cfg-40",
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
      configurationId: "aciq-aciq-wall-single-cfg-41",
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
      configurationId: "aciq-aciq-wall-single-cfg-42",
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
      configurationId: "aciq-aciq-wall-single-cfg-43",
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
      configurationId: "aciq-aciq-wall-single-cfg-44",
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
      configurationId: "aciq-aciq-wall-single-cfg-45",
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
      configurationId: "aciq-aciq-wall-single-cfg-46",
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
      configurationId: "aciq-aciq-wall-single-cfg-47",
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
      configurationId: "aciq-aciq-wall-single-cfg-48",
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
      configurationId: "aciq-aciq-wall-single-cfg-49",
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
      configurationId: "aciq-aciq-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-1",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-2",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-3",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-4",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-5",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-6",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-7",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-8",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-9",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-10",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-11",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-12",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-13",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-14",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-15",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-16",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-17",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-18",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-19",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-20",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-21",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-22",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-23",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-24",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-25",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-26",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-27",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-28",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-29",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-30",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-31",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-32",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-33",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-34",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-35",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-36",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-37",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-38",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-39",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-40",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-41",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-42",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-43",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-44",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-45",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-46",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-47",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-48",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.97,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-53",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-54",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-57",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-58",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-59",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-60",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-61",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-62",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-63",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-64",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-65",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-66",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-67",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-68",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-69",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-70",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-71",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-72",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-74",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-75",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-76",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-77",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-78",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-79",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-81",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24600,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-83",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-central-ducted-cfg-87",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-88",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-89",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-90",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-91",
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
      configurationId: "aciq-aciq-series-central-ducted-cfg-92",
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
      configurationId: "aciq-es-series-wall-single-cfg-1",
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
      configurationId: "aciq-es-series-wall-single-cfg-2",
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
      configurationId: "aciq-es-series-wall-single-cfg-3",
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
      configurationId: "aciq-es-series-wall-single-cfg-4",
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
      configurationId: "aciq-es-series-wall-single-cfg-5",
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
      configurationId: "aciq-es-series-wall-single-cfg-6",
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
      configurationId: "aciq-es-series-wall-single-cfg-7",
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
      configurationId: "aciq-es-series-wall-single-cfg-8",
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
      configurationId: "aciq-es-series-wall-single-cfg-9",
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
      configurationId: "aciq-es-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-es-series-wall-single-cfg-11",
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
      configurationId: "aciq-es-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-es-series-wall-single-cfg-13",
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
      configurationId: "aciq-es-series-wall-single-cfg-14",
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
      configurationId: "aciq-es-series-wall-single-cfg-15",
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
      configurationId: "aciq-es-series-wall-single-cfg-16",
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
      configurationId: "aciq-es-series-wall-single-cfg-17",
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
      configurationId: "aciq-es-series-wall-single-cfg-18",
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
      configurationId: "aciq-es-series-wall-single-cfg-19",
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
      configurationId: "aciq-es-series-wall-single-cfg-20",
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
      configurationId: "aciq-es-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 2.07,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16900,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "aciq-aciq-series-wall-single-cfg-4",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-5",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-6",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-7",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-8",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-9",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-10",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-11",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-12",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-13",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-14",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-15",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-16",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-17",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-18",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-19",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-20",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-21",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-22",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-23",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-24",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-25",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-26",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-27",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-28",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-29",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-30",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-31",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-32",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-33",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-34",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-35",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-36",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-37",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-38",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-39",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-40",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-41",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-42",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-43",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-44",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-45",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-46",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-47",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-48",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-49",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-50",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-51",
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
      configurationId: "aciq-aciq-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: 2.15,
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
