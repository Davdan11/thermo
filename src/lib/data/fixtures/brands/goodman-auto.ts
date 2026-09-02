import type { BrandDataset } from "../../types";

export const goodmanDataset: BrandDataset = {
  brand: {
    id: "goodman",
    slug: "goodman",
    name: "GOODMAN",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "goodman-standard",
      slug: "goodman-standard",
      name: "Standard",
      brandId: "goodman",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series",
      slug: "goodman-msh-series",
      name: "MSH Series",
      brandId: "goodman",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszv9",
      slug: "goodman-gszv9",
      name: "GSZV9",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series",
      slug: "goodman-mst-series",
      name: "MST Series",
      brandId: "goodman",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa",
      slug: "goodman-gzv6sa",
      name: "GZV6SA",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa",
      slug: "goodman-gzv7sa",
      name: "GZV7SA",
      brandId: "goodman",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "goodman-standard-wall-single",
      slug: "goodman-standard-wall-single",
      name: "Standard",
      seriesId: "goodman-standard",
      brandId: "goodman",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 34800,
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
      id: "goodman-msh-series-wall-single",
      slug: "goodman-msh-series-wall-single",
      name: "MSH Series",
      seriesId: "goodman-msh-series",
      brandId: "goodman",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 9000,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 18,
      seer2Max: 29,
      hspf2Min: 8.7,
      hspf2Max: 14.5,
      cop5FMin: 1.75,
      cop5FMax: 2.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszv9-central-ducted",
      slug: "goodman-gszv9-central-ducted",
      name: "GSZV9",
      seriesId: "goodman-gszv9",
      brandId: "goodman",
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
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted",
      slug: "goodman-standard-central-ducted",
      name: "Standard",
      seriesId: "goodman-standard",
      brandId: "goodman",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 10800,
      heatingCapacity5FMaxBtu: 34800,
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
    },
    {
      id: "goodman-mst-series-wall-single",
      slug: "goodman-mst-series-wall-single",
      name: "MST Series",
      seriesId: "goodman-mst-series",
      brandId: "goodman",
      modelNumber: "MST Series",
      normalizedModelNumber: "mst-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 9900,
      heatingCapacity5FMaxBtu: 27000,
      seer2Min: 18,
      seer2Max: 22.6,
      hspf2Min: 9.5,
      hspf2Max: 10.5,
      cop5FMin: 1.75,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted",
      slug: "goodman-gzv6sa-central-ducted",
      name: "GZV6SA",
      seriesId: "goodman-gzv6sa",
      brandId: "goodman",
      modelNumber: "GZV6SA",
      normalizedModelNumber: "gzv6sa",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17100,
      heatingCapacity5FMinBtu: 10800,
      heatingCapacity5FMaxBtu: 10800,
      seer2Min: 19,
      seer2Max: 19,
      hspf2Min: 8.8,
      hspf2Max: 8.8,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted",
      slug: "goodman-gzv7sa-central-ducted",
      name: "GZV7SA",
      seriesId: "goodman-gzv7sa",
      brandId: "goodman",
      modelNumber: "GZV7SA",
      normalizedModelNumber: "gzv7sa",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 15800,
      heatingCapacity5FMaxBtu: 33400,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.1,
      hspf2Max: 9,
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
      id: "goodman-msh183e21mcaa",
      modelNumber: "MSH183E21MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh123e21mcaa",
      modelNumber: "MSH123E21MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-mst183e21mcaa",
      modelNumber: "MST183E21MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-mst363e21mcaa",
      modelNumber: "MST363E21MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh243e21mcaa",
      modelNumber: "MSH243E21MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh183e19mcaa",
      modelNumber: "MSH183E19MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gvzc200481a",
      modelNumber: "GVZC200481A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszv906010a",
      modelNumber: "GSZV906010A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszs601810a",
      modelNumber: "GSZS601810A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszs602410a",
      modelNumber: "GSZS602410A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszs603010a",
      modelNumber: "GSZS603010A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszs603610a",
      modelNumber: "GSZS603610A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszs604210a",
      modelNumber: "GSZS604210A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszs604810a",
      modelNumber: "GSZS604810A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszs606010a",
      modelNumber: "GSZS606010A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh121g20mcaa",
      modelNumber: "MSH121G20MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh123g20mcaa",
      modelNumber: "MSH123G20MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh243g20mcaa",
      modelNumber: "MSH243G20MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv6sa2410a",
      modelNumber: "GZV6SA2410A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv6sa3010a",
      modelNumber: "GZV6SA3010A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv6sa3610a",
      modelNumber: "GZV6SA3610A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv6sa4210a",
      modelNumber: "GZV6SA4210A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv6sa6010a",
      modelNumber: "GZV6SA6010A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv6sa4810a",
      modelNumber: "GZV6SA4810A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh093e23mcaa",
      modelNumber: "MSH093E23MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh183e23mcaa",
      modelNumber: "MSH183E23MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh243e23mcaa",
      modelNumber: "MSH243E23MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh123e23mcaa",
      modelNumber: "MSH123E23MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh123g22mcaa",
      modelNumber: "MSH123G22MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh183g22mcaa",
      modelNumber: "MSH183G22MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh093g26mcaa",
      modelNumber: "MSH093G26MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh123g26mcaa",
      modelNumber: "MSH123G26MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh183g26mcaa",
      modelNumber: "MSH183G26MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh093g22mcaa",
      modelNumber: "MSH093G22MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh243g22mcaa",
      modelNumber: "MSH243G22MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-mst183g22mhaa",
      modelNumber: "MST183G22MHAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-mst273g22mhaa",
      modelNumber: "MST273G22MHAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-mst363g22mhaa",
      modelNumber: "MST363G22MHAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-mst483g22mhaa",
      modelNumber: "MST483G22MHAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-msh183g20mcaa",
      modelNumber: "MSH183G20MCAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszv903610a",
      modelNumber: "GSZV903610A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszv904810a",
      modelNumber: "GSZV904810A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gszv902410a",
      modelNumber: "GSZV902410A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-mst283g22mhaa",
      modelNumber: "MST283G22MHAA",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv6sa1810a",
      modelNumber: "GZV6SA1810A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv7sa2410a",
      modelNumber: "GZV7SA2410A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv7sa3610a",
      modelNumber: "GZV7SA3610A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv7sa4210a",
      modelNumber: "GZV7SA4210A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv7sa4810a",
      modelNumber: "GZV7SA4810A*",
      brandId: "goodman",
      refrigerant: null as any,
    },
    {
      id: "goodman-gzv7sa6010a",
      modelNumber: "GZV7SA6010A*",
      brandId: "goodman",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "goodman-standard-wall-single-cfg-1",
      slug: "goodman-standard-wall-single-cfg-1",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh183e21mcaa",
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
      id: "goodman-standard-wall-single-cfg-2",
      slug: "goodman-standard-wall-single-cfg-2",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh123e21mcaa",
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
      id: "goodman-standard-wall-single-cfg-3",
      slug: "goodman-standard-wall-single-cfg-3",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh183e21mcaa",
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
      id: "goodman-standard-wall-single-cfg-4",
      slug: "goodman-standard-wall-single-cfg-4",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-mst183e21mcaa",
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
      id: "goodman-standard-wall-single-cfg-5",
      slug: "goodman-standard-wall-single-cfg-5",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-mst363e21mcaa",
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
      id: "goodman-standard-wall-single-cfg-6",
      slug: "goodman-standard-wall-single-cfg-6",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh183e21mcaa",
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
      id: "goodman-standard-wall-single-cfg-7",
      slug: "goodman-standard-wall-single-cfg-7",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh243e21mcaa",
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
      id: "goodman-standard-wall-single-cfg-8",
      slug: "goodman-standard-wall-single-cfg-8",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh183e19mcaa",
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
      id: "goodman-standard-wall-single-cfg-9",
      slug: "goodman-standard-wall-single-cfg-9",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gvzc200481a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 44500,
      coolingCapacityMaxBtu: 44500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-10",
      slug: "goodman-standard-wall-single-cfg-10",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-wall-single-cfg-11",
      slug: "goodman-standard-wall-single-cfg-11",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-wall-single-cfg-12",
      slug: "goodman-standard-wall-single-cfg-12",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-wall-single-cfg-13",
      slug: "goodman-standard-wall-single-cfg-13",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-14",
      slug: "goodman-standard-wall-single-cfg-14",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-15",
      slug: "goodman-standard-wall-single-cfg-15",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-16",
      slug: "goodman-standard-wall-single-cfg-16",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-17",
      slug: "goodman-standard-wall-single-cfg-17",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-18",
      slug: "goodman-standard-wall-single-cfg-18",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-19",
      slug: "goodman-standard-wall-single-cfg-19",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-wall-single-cfg-20",
      slug: "goodman-standard-wall-single-cfg-20",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-21",
      slug: "goodman-standard-wall-single-cfg-21",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-22",
      slug: "goodman-standard-wall-single-cfg-22",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-23",
      slug: "goodman-standard-wall-single-cfg-23",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-24",
      slug: "goodman-standard-wall-single-cfg-24",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-25",
      slug: "goodman-standard-wall-single-cfg-25",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-26",
      slug: "goodman-standard-wall-single-cfg-26",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-27",
      slug: "goodman-standard-wall-single-cfg-27",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-28",
      slug: "goodman-standard-wall-single-cfg-28",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-29",
      slug: "goodman-standard-wall-single-cfg-29",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-30",
      slug: "goodman-standard-wall-single-cfg-30",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-31",
      slug: "goodman-standard-wall-single-cfg-31",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-32",
      slug: "goodman-standard-wall-single-cfg-32",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-33",
      slug: "goodman-standard-wall-single-cfg-33",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-34",
      slug: "goodman-standard-wall-single-cfg-34",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-35",
      slug: "goodman-standard-wall-single-cfg-35",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-36",
      slug: "goodman-standard-wall-single-cfg-36",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-37",
      slug: "goodman-standard-wall-single-cfg-37",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-38",
      slug: "goodman-standard-wall-single-cfg-38",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-39",
      slug: "goodman-standard-wall-single-cfg-39",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-40",
      slug: "goodman-standard-wall-single-cfg-40",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 40000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-41",
      slug: "goodman-standard-wall-single-cfg-41",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-42",
      slug: "goodman-standard-wall-single-cfg-42",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-43",
      slug: "goodman-standard-wall-single-cfg-43",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-wall-single-cfg-44",
      slug: "goodman-standard-wall-single-cfg-44",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-45",
      slug: "goodman-standard-wall-single-cfg-45",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-46",
      slug: "goodman-standard-wall-single-cfg-46",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-47",
      slug: "goodman-standard-wall-single-cfg-47",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-48",
      slug: "goodman-standard-wall-single-cfg-48",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-49",
      slug: "goodman-standard-wall-single-cfg-49",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-50",
      slug: "goodman-standard-wall-single-cfg-50",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-51",
      slug: "goodman-standard-wall-single-cfg-51",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-52",
      slug: "goodman-standard-wall-single-cfg-52",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-53",
      slug: "goodman-standard-wall-single-cfg-53",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-54",
      slug: "goodman-standard-wall-single-cfg-54",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-wall-single-cfg-55",
      slug: "goodman-standard-wall-single-cfg-55",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-56",
      slug: "goodman-standard-wall-single-cfg-56",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-57",
      slug: "goodman-standard-wall-single-cfg-57",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27800,
      coolingCapacityMaxBtu: 27800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-58",
      slug: "goodman-standard-wall-single-cfg-58",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-59",
      slug: "goodman-standard-wall-single-cfg-59",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-60",
      slug: "goodman-standard-wall-single-cfg-60",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-61",
      slug: "goodman-standard-wall-single-cfg-61",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-wall-single-cfg-62",
      slug: "goodman-standard-wall-single-cfg-62",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-63",
      slug: "goodman-standard-wall-single-cfg-63",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-64",
      slug: "goodman-standard-wall-single-cfg-64",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-65",
      slug: "goodman-standard-wall-single-cfg-65",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-66",
      slug: "goodman-standard-wall-single-cfg-66",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-67",
      slug: "goodman-standard-wall-single-cfg-67",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-68",
      slug: "goodman-standard-wall-single-cfg-68",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-69",
      slug: "goodman-standard-wall-single-cfg-69",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-70",
      slug: "goodman-standard-wall-single-cfg-70",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-71",
      slug: "goodman-standard-wall-single-cfg-71",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-72",
      slug: "goodman-standard-wall-single-cfg-72",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-73",
      slug: "goodman-standard-wall-single-cfg-73",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-74",
      slug: "goodman-standard-wall-single-cfg-74",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-75",
      slug: "goodman-standard-wall-single-cfg-75",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-76",
      slug: "goodman-standard-wall-single-cfg-76",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-77",
      slug: "goodman-standard-wall-single-cfg-77",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-78",
      slug: "goodman-standard-wall-single-cfg-78",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-79",
      slug: "goodman-standard-wall-single-cfg-79",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-80",
      slug: "goodman-standard-wall-single-cfg-80",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-81",
      slug: "goodman-standard-wall-single-cfg-81",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-82",
      slug: "goodman-standard-wall-single-cfg-82",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 40000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-83",
      slug: "goodman-standard-wall-single-cfg-83",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-84",
      slug: "goodman-standard-wall-single-cfg-84",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-wall-single-cfg-85",
      slug: "goodman-standard-wall-single-cfg-85",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-wall-single-cfg-86",
      slug: "goodman-standard-wall-single-cfg-86",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh121g20mcaa",
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
      id: "goodman-standard-wall-single-cfg-87",
      slug: "goodman-standard-wall-single-cfg-87",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh123g20mcaa",
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
      id: "goodman-standard-wall-single-cfg-88",
      slug: "goodman-standard-wall-single-cfg-88",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-msh243g20mcaa",
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
      id: "goodman-standard-wall-single-cfg-89",
      slug: "goodman-standard-wall-single-cfg-89",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-90",
      slug: "goodman-standard-wall-single-cfg-90",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-91",
      slug: "goodman-standard-wall-single-cfg-91",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-92",
      slug: "goodman-standard-wall-single-cfg-92",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-93",
      slug: "goodman-standard-wall-single-cfg-93",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-94",
      slug: "goodman-standard-wall-single-cfg-94",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-95",
      slug: "goodman-standard-wall-single-cfg-95",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-96",
      slug: "goodman-standard-wall-single-cfg-96",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-97",
      slug: "goodman-standard-wall-single-cfg-97",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-98",
      slug: "goodman-standard-wall-single-cfg-98",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-99",
      slug: "goodman-standard-wall-single-cfg-99",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-100",
      slug: "goodman-standard-wall-single-cfg-100",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-101",
      slug: "goodman-standard-wall-single-cfg-101",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-102",
      slug: "goodman-standard-wall-single-cfg-102",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-103",
      slug: "goodman-standard-wall-single-cfg-103",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-104",
      slug: "goodman-standard-wall-single-cfg-104",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-105",
      slug: "goodman-standard-wall-single-cfg-105",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-106",
      slug: "goodman-standard-wall-single-cfg-106",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-107",
      slug: "goodman-standard-wall-single-cfg-107",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-108",
      slug: "goodman-standard-wall-single-cfg-108",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-109",
      slug: "goodman-standard-wall-single-cfg-109",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-110",
      slug: "goodman-standard-wall-single-cfg-110",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-111",
      slug: "goodman-standard-wall-single-cfg-111",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-112",
      slug: "goodman-standard-wall-single-cfg-112",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-113",
      slug: "goodman-standard-wall-single-cfg-113",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-114",
      slug: "goodman-standard-wall-single-cfg-114",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-115",
      slug: "goodman-standard-wall-single-cfg-115",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-116",
      slug: "goodman-standard-wall-single-cfg-116",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-117",
      slug: "goodman-standard-wall-single-cfg-117",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-118",
      slug: "goodman-standard-wall-single-cfg-118",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-119",
      slug: "goodman-standard-wall-single-cfg-119",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-120",
      slug: "goodman-standard-wall-single-cfg-120",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-121",
      slug: "goodman-standard-wall-single-cfg-121",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-122",
      slug: "goodman-standard-wall-single-cfg-122",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33800,
      coolingCapacityMaxBtu: 33800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-123",
      slug: "goodman-standard-wall-single-cfg-123",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-124",
      slug: "goodman-standard-wall-single-cfg-124",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-125",
      slug: "goodman-standard-wall-single-cfg-125",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-126",
      slug: "goodman-standard-wall-single-cfg-126",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-127",
      slug: "goodman-standard-wall-single-cfg-127",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-128",
      slug: "goodman-standard-wall-single-cfg-128",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-129",
      slug: "goodman-standard-wall-single-cfg-129",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-130",
      slug: "goodman-standard-wall-single-cfg-130",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-131",
      slug: "goodman-standard-wall-single-cfg-131",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-132",
      slug: "goodman-standard-wall-single-cfg-132",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-133",
      slug: "goodman-standard-wall-single-cfg-133",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34200,
      coolingCapacityMaxBtu: 34200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-134",
      slug: "goodman-standard-wall-single-cfg-134",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-135",
      slug: "goodman-standard-wall-single-cfg-135",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-136",
      slug: "goodman-standard-wall-single-cfg-136",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-137",
      slug: "goodman-standard-wall-single-cfg-137",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-138",
      slug: "goodman-standard-wall-single-cfg-138",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-139",
      slug: "goodman-standard-wall-single-cfg-139",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-140",
      slug: "goodman-standard-wall-single-cfg-140",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-141",
      slug: "goodman-standard-wall-single-cfg-141",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-142",
      slug: "goodman-standard-wall-single-cfg-142",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-143",
      slug: "goodman-standard-wall-single-cfg-143",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-144",
      slug: "goodman-standard-wall-single-cfg-144",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-145",
      slug: "goodman-standard-wall-single-cfg-145",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-wall-single-cfg-146",
      slug: "goodman-standard-wall-single-cfg-146",
      modelId: "goodman-standard-wall-single",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-wall-single-cfg-1",
      slug: "goodman-msh-series-wall-single-cfg-1",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh093e23mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-2",
      slug: "goodman-msh-series-wall-single-cfg-2",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh183e23mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-3",
      slug: "goodman-msh-series-wall-single-cfg-3",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh243e23mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-4",
      slug: "goodman-msh-series-wall-single-cfg-4",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh093e23mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-5",
      slug: "goodman-msh-series-wall-single-cfg-5",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh123e23mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-6",
      slug: "goodman-msh-series-wall-single-cfg-6",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh183e23mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-7",
      slug: "goodman-msh-series-wall-single-cfg-7",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh123g22mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-8",
      slug: "goodman-msh-series-wall-single-cfg-8",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh183g22mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-9",
      slug: "goodman-msh-series-wall-single-cfg-9",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh093g26mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 29,
      hspf2: 14,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-wall-single-cfg-10",
      slug: "goodman-msh-series-wall-single-cfg-10",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh123g26mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27.5,
      hspf2: 14.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-wall-single-cfg-11",
      slug: "goodman-msh-series-wall-single-cfg-11",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh183g26mcaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 26.3,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-wall-single-cfg-12",
      slug: "goodman-msh-series-wall-single-cfg-12",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh093g22mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-13",
      slug: "goodman-msh-series-wall-single-cfg-13",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh243g22mcaa",
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
      id: "goodman-msh-series-wall-single-cfg-14",
      slug: "goodman-msh-series-wall-single-cfg-14",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst183g22mhaa",
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
      id: "goodman-msh-series-wall-single-cfg-15",
      slug: "goodman-msh-series-wall-single-cfg-15",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst183g22mhaa",
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
      id: "goodman-msh-series-wall-single-cfg-16",
      slug: "goodman-msh-series-wall-single-cfg-16",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst183g22mhaa",
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
      id: "goodman-msh-series-wall-single-cfg-17",
      slug: "goodman-msh-series-wall-single-cfg-17",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst273g22mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.5,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-wall-single-cfg-18",
      slug: "goodman-msh-series-wall-single-cfg-18",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst273g22mhaa",
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
      id: "goodman-msh-series-wall-single-cfg-19",
      slug: "goodman-msh-series-wall-single-cfg-19",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst273g22mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19.75,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-wall-single-cfg-20",
      slug: "goodman-msh-series-wall-single-cfg-20",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst363g22mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-wall-single-cfg-21",
      slug: "goodman-msh-series-wall-single-cfg-21",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst363g22mhaa",
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
      id: "goodman-msh-series-wall-single-cfg-22",
      slug: "goodman-msh-series-wall-single-cfg-22",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst363g22mhaa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.2,
      hspf2: 10.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-msh-series-wall-single-cfg-23",
      slug: "goodman-msh-series-wall-single-cfg-23",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst483g22mhaa",
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
      id: "goodman-msh-series-wall-single-cfg-24",
      slug: "goodman-msh-series-wall-single-cfg-24",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst483g22mhaa",
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
      id: "goodman-msh-series-wall-single-cfg-25",
      slug: "goodman-msh-series-wall-single-cfg-25",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-mst483g22mhaa",
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
      id: "goodman-msh-series-wall-single-cfg-26",
      slug: "goodman-msh-series-wall-single-cfg-26",
      modelId: "goodman-msh-series-wall-single",
      outdoorUnitId: "goodman-msh183g20mcaa",
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
      id: "goodman-gszv9-central-ducted-cfg-1",
      slug: "goodman-gszv9-central-ducted-cfg-1",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-2",
      slug: "goodman-gszv9-central-ducted-cfg-2",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-3",
      slug: "goodman-gszv9-central-ducted-cfg-3",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-4",
      slug: "goodman-gszv9-central-ducted-cfg-4",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-5",
      slug: "goodman-gszv9-central-ducted-cfg-5",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszv9-central-ducted-cfg-6",
      slug: "goodman-gszv9-central-ducted-cfg-6",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-7",
      slug: "goodman-gszv9-central-ducted-cfg-7",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-8",
      slug: "goodman-gszv9-central-ducted-cfg-8",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-9",
      slug: "goodman-gszv9-central-ducted-cfg-9",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-10",
      slug: "goodman-gszv9-central-ducted-cfg-10",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-11",
      slug: "goodman-gszv9-central-ducted-cfg-11",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-12",
      slug: "goodman-gszv9-central-ducted-cfg-12",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-13",
      slug: "goodman-gszv9-central-ducted-cfg-13",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-14",
      slug: "goodman-gszv9-central-ducted-cfg-14",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-15",
      slug: "goodman-gszv9-central-ducted-cfg-15",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-16",
      slug: "goodman-gszv9-central-ducted-cfg-16",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-17",
      slug: "goodman-gszv9-central-ducted-cfg-17",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-18",
      slug: "goodman-gszv9-central-ducted-cfg-18",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-19",
      slug: "goodman-gszv9-central-ducted-cfg-19",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-20",
      slug: "goodman-gszv9-central-ducted-cfg-20",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-21",
      slug: "goodman-gszv9-central-ducted-cfg-21",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-22",
      slug: "goodman-gszv9-central-ducted-cfg-22",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-23",
      slug: "goodman-gszv9-central-ducted-cfg-23",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-24",
      slug: "goodman-gszv9-central-ducted-cfg-24",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-25",
      slug: "goodman-gszv9-central-ducted-cfg-25",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-26",
      slug: "goodman-gszv9-central-ducted-cfg-26",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-27",
      slug: "goodman-gszv9-central-ducted-cfg-27",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-28",
      slug: "goodman-gszv9-central-ducted-cfg-28",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-29",
      slug: "goodman-gszv9-central-ducted-cfg-29",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-30",
      slug: "goodman-gszv9-central-ducted-cfg-30",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-31",
      slug: "goodman-gszv9-central-ducted-cfg-31",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-32",
      slug: "goodman-gszv9-central-ducted-cfg-32",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-33",
      slug: "goodman-gszv9-central-ducted-cfg-33",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-34",
      slug: "goodman-gszv9-central-ducted-cfg-34",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-35",
      slug: "goodman-gszv9-central-ducted-cfg-35",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-36",
      slug: "goodman-gszv9-central-ducted-cfg-36",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-37",
      slug: "goodman-gszv9-central-ducted-cfg-37",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-38",
      slug: "goodman-gszv9-central-ducted-cfg-38",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-39",
      slug: "goodman-gszv9-central-ducted-cfg-39",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-40",
      slug: "goodman-gszv9-central-ducted-cfg-40",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv902410a",
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
      id: "goodman-gszv9-central-ducted-cfg-41",
      slug: "goodman-gszv9-central-ducted-cfg-41",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-42",
      slug: "goodman-gszv9-central-ducted-cfg-42",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-43",
      slug: "goodman-gszv9-central-ducted-cfg-43",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-44",
      slug: "goodman-gszv9-central-ducted-cfg-44",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-45",
      slug: "goodman-gszv9-central-ducted-cfg-45",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-46",
      slug: "goodman-gszv9-central-ducted-cfg-46",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-47",
      slug: "goodman-gszv9-central-ducted-cfg-47",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-48",
      slug: "goodman-gszv9-central-ducted-cfg-48",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-49",
      slug: "goodman-gszv9-central-ducted-cfg-49",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-50",
      slug: "goodman-gszv9-central-ducted-cfg-50",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-51",
      slug: "goodman-gszv9-central-ducted-cfg-51",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-52",
      slug: "goodman-gszv9-central-ducted-cfg-52",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-53",
      slug: "goodman-gszv9-central-ducted-cfg-53",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-54",
      slug: "goodman-gszv9-central-ducted-cfg-54",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-55",
      slug: "goodman-gszv9-central-ducted-cfg-55",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-56",
      slug: "goodman-gszv9-central-ducted-cfg-56",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-57",
      slug: "goodman-gszv9-central-ducted-cfg-57",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-58",
      slug: "goodman-gszv9-central-ducted-cfg-58",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-59",
      slug: "goodman-gszv9-central-ducted-cfg-59",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszv9-central-ducted-cfg-60",
      slug: "goodman-gszv9-central-ducted-cfg-60",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszv9-central-ducted-cfg-61",
      slug: "goodman-gszv9-central-ducted-cfg-61",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: 19,
      hspf2: 8.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gszv9-central-ducted-cfg-62",
      slug: "goodman-gszv9-central-ducted-cfg-62",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-63",
      slug: "goodman-gszv9-central-ducted-cfg-63",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-64",
      slug: "goodman-gszv9-central-ducted-cfg-64",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-65",
      slug: "goodman-gszv9-central-ducted-cfg-65",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-66",
      slug: "goodman-gszv9-central-ducted-cfg-66",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-67",
      slug: "goodman-gszv9-central-ducted-cfg-67",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-68",
      slug: "goodman-gszv9-central-ducted-cfg-68",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-69",
      slug: "goodman-gszv9-central-ducted-cfg-69",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-70",
      slug: "goodman-gszv9-central-ducted-cfg-70",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-71",
      slug: "goodman-gszv9-central-ducted-cfg-71",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-72",
      slug: "goodman-gszv9-central-ducted-cfg-72",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-73",
      slug: "goodman-gszv9-central-ducted-cfg-73",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-74",
      slug: "goodman-gszv9-central-ducted-cfg-74",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-75",
      slug: "goodman-gszv9-central-ducted-cfg-75",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-76",
      slug: "goodman-gszv9-central-ducted-cfg-76",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-77",
      slug: "goodman-gszv9-central-ducted-cfg-77",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-78",
      slug: "goodman-gszv9-central-ducted-cfg-78",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-79",
      slug: "goodman-gszv9-central-ducted-cfg-79",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-80",
      slug: "goodman-gszv9-central-ducted-cfg-80",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-81",
      slug: "goodman-gszv9-central-ducted-cfg-81",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-82",
      slug: "goodman-gszv9-central-ducted-cfg-82",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-83",
      slug: "goodman-gszv9-central-ducted-cfg-83",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-84",
      slug: "goodman-gszv9-central-ducted-cfg-84",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-85",
      slug: "goodman-gszv9-central-ducted-cfg-85",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-86",
      slug: "goodman-gszv9-central-ducted-cfg-86",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-87",
      slug: "goodman-gszv9-central-ducted-cfg-87",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-88",
      slug: "goodman-gszv9-central-ducted-cfg-88",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-89",
      slug: "goodman-gszv9-central-ducted-cfg-89",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-90",
      slug: "goodman-gszv9-central-ducted-cfg-90",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-91",
      slug: "goodman-gszv9-central-ducted-cfg-91",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-92",
      slug: "goodman-gszv9-central-ducted-cfg-92",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-93",
      slug: "goodman-gszv9-central-ducted-cfg-93",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-94",
      slug: "goodman-gszv9-central-ducted-cfg-94",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-95",
      slug: "goodman-gszv9-central-ducted-cfg-95",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-96",
      slug: "goodman-gszv9-central-ducted-cfg-96",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-97",
      slug: "goodman-gszv9-central-ducted-cfg-97",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-98",
      slug: "goodman-gszv9-central-ducted-cfg-98",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-99",
      slug: "goodman-gszv9-central-ducted-cfg-99",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-100",
      slug: "goodman-gszv9-central-ducted-cfg-100",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-101",
      slug: "goodman-gszv9-central-ducted-cfg-101",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-102",
      slug: "goodman-gszv9-central-ducted-cfg-102",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv903610a",
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
      id: "goodman-gszv9-central-ducted-cfg-103",
      slug: "goodman-gszv9-central-ducted-cfg-103",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-104",
      slug: "goodman-gszv9-central-ducted-cfg-104",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-105",
      slug: "goodman-gszv9-central-ducted-cfg-105",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-106",
      slug: "goodman-gszv9-central-ducted-cfg-106",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-107",
      slug: "goodman-gszv9-central-ducted-cfg-107",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-108",
      slug: "goodman-gszv9-central-ducted-cfg-108",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-109",
      slug: "goodman-gszv9-central-ducted-cfg-109",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-110",
      slug: "goodman-gszv9-central-ducted-cfg-110",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-111",
      slug: "goodman-gszv9-central-ducted-cfg-111",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-112",
      slug: "goodman-gszv9-central-ducted-cfg-112",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-113",
      slug: "goodman-gszv9-central-ducted-cfg-113",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-114",
      slug: "goodman-gszv9-central-ducted-cfg-114",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-115",
      slug: "goodman-gszv9-central-ducted-cfg-115",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-116",
      slug: "goodman-gszv9-central-ducted-cfg-116",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-117",
      slug: "goodman-gszv9-central-ducted-cfg-117",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-118",
      slug: "goodman-gszv9-central-ducted-cfg-118",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-119",
      slug: "goodman-gszv9-central-ducted-cfg-119",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-120",
      slug: "goodman-gszv9-central-ducted-cfg-120",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-121",
      slug: "goodman-gszv9-central-ducted-cfg-121",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-122",
      slug: "goodman-gszv9-central-ducted-cfg-122",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-123",
      slug: "goodman-gszv9-central-ducted-cfg-123",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-124",
      slug: "goodman-gszv9-central-ducted-cfg-124",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-125",
      slug: "goodman-gszv9-central-ducted-cfg-125",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-126",
      slug: "goodman-gszv9-central-ducted-cfg-126",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-127",
      slug: "goodman-gszv9-central-ducted-cfg-127",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-128",
      slug: "goodman-gszv9-central-ducted-cfg-128",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-129",
      slug: "goodman-gszv9-central-ducted-cfg-129",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-130",
      slug: "goodman-gszv9-central-ducted-cfg-130",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-131",
      slug: "goodman-gszv9-central-ducted-cfg-131",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-132",
      slug: "goodman-gszv9-central-ducted-cfg-132",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-133",
      slug: "goodman-gszv9-central-ducted-cfg-133",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-134",
      slug: "goodman-gszv9-central-ducted-cfg-134",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-135",
      slug: "goodman-gszv9-central-ducted-cfg-135",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-gszv9-central-ducted-cfg-136",
      slug: "goodman-gszv9-central-ducted-cfg-136",
      modelId: "goodman-gszv9-central-ducted",
      outdoorUnitId: "goodman-gszv904810a",
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
      id: "goodman-standard-central-ducted-cfg-1",
      slug: "goodman-standard-central-ducted-cfg-1",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-2",
      slug: "goodman-standard-central-ducted-cfg-2",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-3",
      slug: "goodman-standard-central-ducted-cfg-3",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-4",
      slug: "goodman-standard-central-ducted-cfg-4",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-5",
      slug: "goodman-standard-central-ducted-cfg-5",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-6",
      slug: "goodman-standard-central-ducted-cfg-6",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-7",
      slug: "goodman-standard-central-ducted-cfg-7",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-8",
      slug: "goodman-standard-central-ducted-cfg-8",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-9",
      slug: "goodman-standard-central-ducted-cfg-9",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-10",
      slug: "goodman-standard-central-ducted-cfg-10",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-11",
      slug: "goodman-standard-central-ducted-cfg-11",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-12",
      slug: "goodman-standard-central-ducted-cfg-12",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-13",
      slug: "goodman-standard-central-ducted-cfg-13",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-14",
      slug: "goodman-standard-central-ducted-cfg-14",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-15",
      slug: "goodman-standard-central-ducted-cfg-15",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszv906010a",
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
      id: "goodman-standard-central-ducted-cfg-16",
      slug: "goodman-standard-central-ducted-cfg-16",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-17",
      slug: "goodman-standard-central-ducted-cfg-17",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-18",
      slug: "goodman-standard-central-ducted-cfg-18",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-19",
      slug: "goodman-standard-central-ducted-cfg-19",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-20",
      slug: "goodman-standard-central-ducted-cfg-20",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-21",
      slug: "goodman-standard-central-ducted-cfg-21",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-22",
      slug: "goodman-standard-central-ducted-cfg-22",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-23",
      slug: "goodman-standard-central-ducted-cfg-23",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-24",
      slug: "goodman-standard-central-ducted-cfg-24",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-25",
      slug: "goodman-standard-central-ducted-cfg-25",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-26",
      slug: "goodman-standard-central-ducted-cfg-26",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-27",
      slug: "goodman-standard-central-ducted-cfg-27",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-28",
      slug: "goodman-standard-central-ducted-cfg-28",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-29",
      slug: "goodman-standard-central-ducted-cfg-29",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-30",
      slug: "goodman-standard-central-ducted-cfg-30",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-31",
      slug: "goodman-standard-central-ducted-cfg-31",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-32",
      slug: "goodman-standard-central-ducted-cfg-32",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-33",
      slug: "goodman-standard-central-ducted-cfg-33",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs601810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16600,
      coolingCapacityMaxBtu: 16600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-34",
      slug: "goodman-standard-central-ducted-cfg-34",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-35",
      slug: "goodman-standard-central-ducted-cfg-35",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-36",
      slug: "goodman-standard-central-ducted-cfg-36",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-37",
      slug: "goodman-standard-central-ducted-cfg-37",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-38",
      slug: "goodman-standard-central-ducted-cfg-38",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-39",
      slug: "goodman-standard-central-ducted-cfg-39",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-40",
      slug: "goodman-standard-central-ducted-cfg-40",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-41",
      slug: "goodman-standard-central-ducted-cfg-41",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-42",
      slug: "goodman-standard-central-ducted-cfg-42",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-43",
      slug: "goodman-standard-central-ducted-cfg-43",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-44",
      slug: "goodman-standard-central-ducted-cfg-44",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-45",
      slug: "goodman-standard-central-ducted-cfg-45",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-46",
      slug: "goodman-standard-central-ducted-cfg-46",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-47",
      slug: "goodman-standard-central-ducted-cfg-47",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-48",
      slug: "goodman-standard-central-ducted-cfg-48",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-49",
      slug: "goodman-standard-central-ducted-cfg-49",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-50",
      slug: "goodman-standard-central-ducted-cfg-50",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-51",
      slug: "goodman-standard-central-ducted-cfg-51",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs602410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22200,
      coolingCapacityMaxBtu: 22200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-52",
      slug: "goodman-standard-central-ducted-cfg-52",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-53",
      slug: "goodman-standard-central-ducted-cfg-53",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-54",
      slug: "goodman-standard-central-ducted-cfg-54",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-55",
      slug: "goodman-standard-central-ducted-cfg-55",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-56",
      slug: "goodman-standard-central-ducted-cfg-56",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-57",
      slug: "goodman-standard-central-ducted-cfg-57",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-58",
      slug: "goodman-standard-central-ducted-cfg-58",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-59",
      slug: "goodman-standard-central-ducted-cfg-59",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-60",
      slug: "goodman-standard-central-ducted-cfg-60",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-61",
      slug: "goodman-standard-central-ducted-cfg-61",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-62",
      slug: "goodman-standard-central-ducted-cfg-62",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-63",
      slug: "goodman-standard-central-ducted-cfg-63",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-64",
      slug: "goodman-standard-central-ducted-cfg-64",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-65",
      slug: "goodman-standard-central-ducted-cfg-65",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-66",
      slug: "goodman-standard-central-ducted-cfg-66",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-67",
      slug: "goodman-standard-central-ducted-cfg-67",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-68",
      slug: "goodman-standard-central-ducted-cfg-68",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-69",
      slug: "goodman-standard-central-ducted-cfg-69",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-70",
      slug: "goodman-standard-central-ducted-cfg-70",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-71",
      slug: "goodman-standard-central-ducted-cfg-71",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-72",
      slug: "goodman-standard-central-ducted-cfg-72",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-73",
      slug: "goodman-standard-central-ducted-cfg-73",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27400,
      coolingCapacityMaxBtu: 27400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-74",
      slug: "goodman-standard-central-ducted-cfg-74",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-75",
      slug: "goodman-standard-central-ducted-cfg-75",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-76",
      slug: "goodman-standard-central-ducted-cfg-76",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-77",
      slug: "goodman-standard-central-ducted-cfg-77",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-78",
      slug: "goodman-standard-central-ducted-cfg-78",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-79",
      slug: "goodman-standard-central-ducted-cfg-79",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-80",
      slug: "goodman-standard-central-ducted-cfg-80",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-81",
      slug: "goodman-standard-central-ducted-cfg-81",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-82",
      slug: "goodman-standard-central-ducted-cfg-82",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-83",
      slug: "goodman-standard-central-ducted-cfg-83",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-84",
      slug: "goodman-standard-central-ducted-cfg-84",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-85",
      slug: "goodman-standard-central-ducted-cfg-85",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-86",
      slug: "goodman-standard-central-ducted-cfg-86",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs603610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33200,
      coolingCapacityMaxBtu: 33200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-87",
      slug: "goodman-standard-central-ducted-cfg-87",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-88",
      slug: "goodman-standard-central-ducted-cfg-88",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-89",
      slug: "goodman-standard-central-ducted-cfg-89",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-90",
      slug: "goodman-standard-central-ducted-cfg-90",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-91",
      slug: "goodman-standard-central-ducted-cfg-91",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 39500,
      coolingCapacityMaxBtu: 39500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-92",
      slug: "goodman-standard-central-ducted-cfg-92",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 40000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-93",
      slug: "goodman-standard-central-ducted-cfg-93",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40000,
      coolingCapacityMaxBtu: 40000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-94",
      slug: "goodman-standard-central-ducted-cfg-94",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-central-ducted-cfg-95",
      slug: "goodman-standard-central-ducted-cfg-95",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-central-ducted-cfg-96",
      slug: "goodman-standard-central-ducted-cfg-96",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-central-ducted-cfg-97",
      slug: "goodman-standard-central-ducted-cfg-97",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-central-ducted-cfg-98",
      slug: "goodman-standard-central-ducted-cfg-98",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-central-ducted-cfg-99",
      slug: "goodman-standard-central-ducted-cfg-99",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-central-ducted-cfg-100",
      slug: "goodman-standard-central-ducted-cfg-100",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs604810a",
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
      id: "goodman-standard-central-ducted-cfg-101",
      slug: "goodman-standard-central-ducted-cfg-101",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-central-ducted-cfg-102",
      slug: "goodman-standard-central-ducted-cfg-102",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-central-ducted-cfg-103",
      slug: "goodman-standard-central-ducted-cfg-103",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-central-ducted-cfg-104",
      slug: "goodman-standard-central-ducted-cfg-104",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-central-ducted-cfg-105",
      slug: "goodman-standard-central-ducted-cfg-105",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-central-ducted-cfg-106",
      slug: "goodman-standard-central-ducted-cfg-106",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gszs606010a",
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
      id: "goodman-standard-central-ducted-cfg-107",
      slug: "goodman-standard-central-ducted-cfg-107",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-108",
      slug: "goodman-standard-central-ducted-cfg-108",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-109",
      slug: "goodman-standard-central-ducted-cfg-109",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-110",
      slug: "goodman-standard-central-ducted-cfg-110",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-111",
      slug: "goodman-standard-central-ducted-cfg-111",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-112",
      slug: "goodman-standard-central-ducted-cfg-112",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-113",
      slug: "goodman-standard-central-ducted-cfg-113",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-114",
      slug: "goodman-standard-central-ducted-cfg-114",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-115",
      slug: "goodman-standard-central-ducted-cfg-115",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-116",
      slug: "goodman-standard-central-ducted-cfg-116",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-117",
      slug: "goodman-standard-central-ducted-cfg-117",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-118",
      slug: "goodman-standard-central-ducted-cfg-118",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-119",
      slug: "goodman-standard-central-ducted-cfg-119",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-120",
      slug: "goodman-standard-central-ducted-cfg-120",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-121",
      slug: "goodman-standard-central-ducted-cfg-121",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-122",
      slug: "goodman-standard-central-ducted-cfg-122",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-123",
      slug: "goodman-standard-central-ducted-cfg-123",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-124",
      slug: "goodman-standard-central-ducted-cfg-124",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-125",
      slug: "goodman-standard-central-ducted-cfg-125",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-126",
      slug: "goodman-standard-central-ducted-cfg-126",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-127",
      slug: "goodman-standard-central-ducted-cfg-127",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-128",
      slug: "goodman-standard-central-ducted-cfg-128",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-129",
      slug: "goodman-standard-central-ducted-cfg-129",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-130",
      slug: "goodman-standard-central-ducted-cfg-130",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-131",
      slug: "goodman-standard-central-ducted-cfg-131",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-132",
      slug: "goodman-standard-central-ducted-cfg-132",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-133",
      slug: "goodman-standard-central-ducted-cfg-133",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-134",
      slug: "goodman-standard-central-ducted-cfg-134",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-135",
      slug: "goodman-standard-central-ducted-cfg-135",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-136",
      slug: "goodman-standard-central-ducted-cfg-136",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-137",
      slug: "goodman-standard-central-ducted-cfg-137",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-138",
      slug: "goodman-standard-central-ducted-cfg-138",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-139",
      slug: "goodman-standard-central-ducted-cfg-139",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-140",
      slug: "goodman-standard-central-ducted-cfg-140",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-141",
      slug: "goodman-standard-central-ducted-cfg-141",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-142",
      slug: "goodman-standard-central-ducted-cfg-142",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-143",
      slug: "goodman-standard-central-ducted-cfg-143",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-144",
      slug: "goodman-standard-central-ducted-cfg-144",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-145",
      slug: "goodman-standard-central-ducted-cfg-145",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-146",
      slug: "goodman-standard-central-ducted-cfg-146",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-147",
      slug: "goodman-standard-central-ducted-cfg-147",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-148",
      slug: "goodman-standard-central-ducted-cfg-148",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-149",
      slug: "goodman-standard-central-ducted-cfg-149",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-150",
      slug: "goodman-standard-central-ducted-cfg-150",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-151",
      slug: "goodman-standard-central-ducted-cfg-151",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-152",
      slug: "goodman-standard-central-ducted-cfg-152",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-153",
      slug: "goodman-standard-central-ducted-cfg-153",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-154",
      slug: "goodman-standard-central-ducted-cfg-154",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-155",
      slug: "goodman-standard-central-ducted-cfg-155",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-156",
      slug: "goodman-standard-central-ducted-cfg-156",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-157",
      slug: "goodman-standard-central-ducted-cfg-157",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-158",
      slug: "goodman-standard-central-ducted-cfg-158",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-159",
      slug: "goodman-standard-central-ducted-cfg-159",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-160",
      slug: "goodman-standard-central-ducted-cfg-160",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-161",
      slug: "goodman-standard-central-ducted-cfg-161",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-162",
      slug: "goodman-standard-central-ducted-cfg-162",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-163",
      slug: "goodman-standard-central-ducted-cfg-163",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-164",
      slug: "goodman-standard-central-ducted-cfg-164",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-165",
      slug: "goodman-standard-central-ducted-cfg-165",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-166",
      slug: "goodman-standard-central-ducted-cfg-166",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-167",
      slug: "goodman-standard-central-ducted-cfg-167",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-168",
      slug: "goodman-standard-central-ducted-cfg-168",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-169",
      slug: "goodman-standard-central-ducted-cfg-169",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-170",
      slug: "goodman-standard-central-ducted-cfg-170",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-171",
      slug: "goodman-standard-central-ducted-cfg-171",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-172",
      slug: "goodman-standard-central-ducted-cfg-172",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-173",
      slug: "goodman-standard-central-ducted-cfg-173",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-174",
      slug: "goodman-standard-central-ducted-cfg-174",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-175",
      slug: "goodman-standard-central-ducted-cfg-175",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-176",
      slug: "goodman-standard-central-ducted-cfg-176",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-177",
      slug: "goodman-standard-central-ducted-cfg-177",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-178",
      slug: "goodman-standard-central-ducted-cfg-178",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-179",
      slug: "goodman-standard-central-ducted-cfg-179",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-180",
      slug: "goodman-standard-central-ducted-cfg-180",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-181",
      slug: "goodman-standard-central-ducted-cfg-181",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-182",
      slug: "goodman-standard-central-ducted-cfg-182",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-183",
      slug: "goodman-standard-central-ducted-cfg-183",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-184",
      slug: "goodman-standard-central-ducted-cfg-184",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-185",
      slug: "goodman-standard-central-ducted-cfg-185",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-186",
      slug: "goodman-standard-central-ducted-cfg-186",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-187",
      slug: "goodman-standard-central-ducted-cfg-187",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-188",
      slug: "goodman-standard-central-ducted-cfg-188",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-189",
      slug: "goodman-standard-central-ducted-cfg-189",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-190",
      slug: "goodman-standard-central-ducted-cfg-190",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-191",
      slug: "goodman-standard-central-ducted-cfg-191",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-192",
      slug: "goodman-standard-central-ducted-cfg-192",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-193",
      slug: "goodman-standard-central-ducted-cfg-193",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-194",
      slug: "goodman-standard-central-ducted-cfg-194",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-195",
      slug: "goodman-standard-central-ducted-cfg-195",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-196",
      slug: "goodman-standard-central-ducted-cfg-196",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-197",
      slug: "goodman-standard-central-ducted-cfg-197",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-198",
      slug: "goodman-standard-central-ducted-cfg-198",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-199",
      slug: "goodman-standard-central-ducted-cfg-199",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-200",
      slug: "goodman-standard-central-ducted-cfg-200",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-201",
      slug: "goodman-standard-central-ducted-cfg-201",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-202",
      slug: "goodman-standard-central-ducted-cfg-202",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-203",
      slug: "goodman-standard-central-ducted-cfg-203",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-204",
      slug: "goodman-standard-central-ducted-cfg-204",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-205",
      slug: "goodman-standard-central-ducted-cfg-205",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-206",
      slug: "goodman-standard-central-ducted-cfg-206",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-207",
      slug: "goodman-standard-central-ducted-cfg-207",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-208",
      slug: "goodman-standard-central-ducted-cfg-208",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-209",
      slug: "goodman-standard-central-ducted-cfg-209",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-210",
      slug: "goodman-standard-central-ducted-cfg-210",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-211",
      slug: "goodman-standard-central-ducted-cfg-211",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-212",
      slug: "goodman-standard-central-ducted-cfg-212",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-213",
      slug: "goodman-standard-central-ducted-cfg-213",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-214",
      slug: "goodman-standard-central-ducted-cfg-214",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-215",
      slug: "goodman-standard-central-ducted-cfg-215",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-216",
      slug: "goodman-standard-central-ducted-cfg-216",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-217",
      slug: "goodman-standard-central-ducted-cfg-217",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-218",
      slug: "goodman-standard-central-ducted-cfg-218",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-219",
      slug: "goodman-standard-central-ducted-cfg-219",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-220",
      slug: "goodman-standard-central-ducted-cfg-220",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-221",
      slug: "goodman-standard-central-ducted-cfg-221",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-222",
      slug: "goodman-standard-central-ducted-cfg-222",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-223",
      slug: "goodman-standard-central-ducted-cfg-223",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-224",
      slug: "goodman-standard-central-ducted-cfg-224",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-225",
      slug: "goodman-standard-central-ducted-cfg-225",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-226",
      slug: "goodman-standard-central-ducted-cfg-226",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-227",
      slug: "goodman-standard-central-ducted-cfg-227",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-228",
      slug: "goodman-standard-central-ducted-cfg-228",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-229",
      slug: "goodman-standard-central-ducted-cfg-229",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-230",
      slug: "goodman-standard-central-ducted-cfg-230",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-231",
      slug: "goodman-standard-central-ducted-cfg-231",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-232",
      slug: "goodman-standard-central-ducted-cfg-232",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-233",
      slug: "goodman-standard-central-ducted-cfg-233",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-234",
      slug: "goodman-standard-central-ducted-cfg-234",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-235",
      slug: "goodman-standard-central-ducted-cfg-235",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-236",
      slug: "goodman-standard-central-ducted-cfg-236",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-237",
      slug: "goodman-standard-central-ducted-cfg-237",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-238",
      slug: "goodman-standard-central-ducted-cfg-238",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-239",
      slug: "goodman-standard-central-ducted-cfg-239",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-240",
      slug: "goodman-standard-central-ducted-cfg-240",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-241",
      slug: "goodman-standard-central-ducted-cfg-241",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-242",
      slug: "goodman-standard-central-ducted-cfg-242",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-243",
      slug: "goodman-standard-central-ducted-cfg-243",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-244",
      slug: "goodman-standard-central-ducted-cfg-244",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-245",
      slug: "goodman-standard-central-ducted-cfg-245",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-246",
      slug: "goodman-standard-central-ducted-cfg-246",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-247",
      slug: "goodman-standard-central-ducted-cfg-247",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-248",
      slug: "goodman-standard-central-ducted-cfg-248",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-249",
      slug: "goodman-standard-central-ducted-cfg-249",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-250",
      slug: "goodman-standard-central-ducted-cfg-250",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-251",
      slug: "goodman-standard-central-ducted-cfg-251",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-252",
      slug: "goodman-standard-central-ducted-cfg-252",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-253",
      slug: "goodman-standard-central-ducted-cfg-253",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-254",
      slug: "goodman-standard-central-ducted-cfg-254",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-255",
      slug: "goodman-standard-central-ducted-cfg-255",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-256",
      slug: "goodman-standard-central-ducted-cfg-256",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-257",
      slug: "goodman-standard-central-ducted-cfg-257",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-258",
      slug: "goodman-standard-central-ducted-cfg-258",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-259",
      slug: "goodman-standard-central-ducted-cfg-259",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-260",
      slug: "goodman-standard-central-ducted-cfg-260",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-261",
      slug: "goodman-standard-central-ducted-cfg-261",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-262",
      slug: "goodman-standard-central-ducted-cfg-262",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-263",
      slug: "goodman-standard-central-ducted-cfg-263",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-264",
      slug: "goodman-standard-central-ducted-cfg-264",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-265",
      slug: "goodman-standard-central-ducted-cfg-265",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-266",
      slug: "goodman-standard-central-ducted-cfg-266",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-267",
      slug: "goodman-standard-central-ducted-cfg-267",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-268",
      slug: "goodman-standard-central-ducted-cfg-268",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-269",
      slug: "goodman-standard-central-ducted-cfg-269",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-270",
      slug: "goodman-standard-central-ducted-cfg-270",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-271",
      slug: "goodman-standard-central-ducted-cfg-271",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-272",
      slug: "goodman-standard-central-ducted-cfg-272",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-273",
      slug: "goodman-standard-central-ducted-cfg-273",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-274",
      slug: "goodman-standard-central-ducted-cfg-274",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-275",
      slug: "goodman-standard-central-ducted-cfg-275",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-276",
      slug: "goodman-standard-central-ducted-cfg-276",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-277",
      slug: "goodman-standard-central-ducted-cfg-277",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-278",
      slug: "goodman-standard-central-ducted-cfg-278",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-279",
      slug: "goodman-standard-central-ducted-cfg-279",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-280",
      slug: "goodman-standard-central-ducted-cfg-280",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-281",
      slug: "goodman-standard-central-ducted-cfg-281",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-282",
      slug: "goodman-standard-central-ducted-cfg-282",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-283",
      slug: "goodman-standard-central-ducted-cfg-283",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-284",
      slug: "goodman-standard-central-ducted-cfg-284",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-285",
      slug: "goodman-standard-central-ducted-cfg-285",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-286",
      slug: "goodman-standard-central-ducted-cfg-286",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-287",
      slug: "goodman-standard-central-ducted-cfg-287",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-288",
      slug: "goodman-standard-central-ducted-cfg-288",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-289",
      slug: "goodman-standard-central-ducted-cfg-289",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-290",
      slug: "goodman-standard-central-ducted-cfg-290",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-291",
      slug: "goodman-standard-central-ducted-cfg-291",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-292",
      slug: "goodman-standard-central-ducted-cfg-292",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-293",
      slug: "goodman-standard-central-ducted-cfg-293",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-294",
      slug: "goodman-standard-central-ducted-cfg-294",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-295",
      slug: "goodman-standard-central-ducted-cfg-295",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-296",
      slug: "goodman-standard-central-ducted-cfg-296",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-297",
      slug: "goodman-standard-central-ducted-cfg-297",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-298",
      slug: "goodman-standard-central-ducted-cfg-298",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-299",
      slug: "goodman-standard-central-ducted-cfg-299",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-300",
      slug: "goodman-standard-central-ducted-cfg-300",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-301",
      slug: "goodman-standard-central-ducted-cfg-301",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-302",
      slug: "goodman-standard-central-ducted-cfg-302",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-303",
      slug: "goodman-standard-central-ducted-cfg-303",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-304",
      slug: "goodman-standard-central-ducted-cfg-304",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-305",
      slug: "goodman-standard-central-ducted-cfg-305",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-306",
      slug: "goodman-standard-central-ducted-cfg-306",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-307",
      slug: "goodman-standard-central-ducted-cfg-307",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-308",
      slug: "goodman-standard-central-ducted-cfg-308",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-309",
      slug: "goodman-standard-central-ducted-cfg-309",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-310",
      slug: "goodman-standard-central-ducted-cfg-310",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-311",
      slug: "goodman-standard-central-ducted-cfg-311",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-312",
      slug: "goodman-standard-central-ducted-cfg-312",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-313",
      slug: "goodman-standard-central-ducted-cfg-313",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-314",
      slug: "goodman-standard-central-ducted-cfg-314",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-315",
      slug: "goodman-standard-central-ducted-cfg-315",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-316",
      slug: "goodman-standard-central-ducted-cfg-316",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-317",
      slug: "goodman-standard-central-ducted-cfg-317",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-318",
      slug: "goodman-standard-central-ducted-cfg-318",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-319",
      slug: "goodman-standard-central-ducted-cfg-319",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-320",
      slug: "goodman-standard-central-ducted-cfg-320",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-321",
      slug: "goodman-standard-central-ducted-cfg-321",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-322",
      slug: "goodman-standard-central-ducted-cfg-322",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-323",
      slug: "goodman-standard-central-ducted-cfg-323",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-324",
      slug: "goodman-standard-central-ducted-cfg-324",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-325",
      slug: "goodman-standard-central-ducted-cfg-325",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-326",
      slug: "goodman-standard-central-ducted-cfg-326",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-327",
      slug: "goodman-standard-central-ducted-cfg-327",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-328",
      slug: "goodman-standard-central-ducted-cfg-328",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-329",
      slug: "goodman-standard-central-ducted-cfg-329",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-330",
      slug: "goodman-standard-central-ducted-cfg-330",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-331",
      slug: "goodman-standard-central-ducted-cfg-331",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-332",
      slug: "goodman-standard-central-ducted-cfg-332",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-333",
      slug: "goodman-standard-central-ducted-cfg-333",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-334",
      slug: "goodman-standard-central-ducted-cfg-334",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-335",
      slug: "goodman-standard-central-ducted-cfg-335",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-336",
      slug: "goodman-standard-central-ducted-cfg-336",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-337",
      slug: "goodman-standard-central-ducted-cfg-337",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-338",
      slug: "goodman-standard-central-ducted-cfg-338",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-339",
      slug: "goodman-standard-central-ducted-cfg-339",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-340",
      slug: "goodman-standard-central-ducted-cfg-340",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-341",
      slug: "goodman-standard-central-ducted-cfg-341",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-342",
      slug: "goodman-standard-central-ducted-cfg-342",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-343",
      slug: "goodman-standard-central-ducted-cfg-343",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-344",
      slug: "goodman-standard-central-ducted-cfg-344",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-345",
      slug: "goodman-standard-central-ducted-cfg-345",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-346",
      slug: "goodman-standard-central-ducted-cfg-346",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-347",
      slug: "goodman-standard-central-ducted-cfg-347",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-348",
      slug: "goodman-standard-central-ducted-cfg-348",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-349",
      slug: "goodman-standard-central-ducted-cfg-349",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-350",
      slug: "goodman-standard-central-ducted-cfg-350",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-351",
      slug: "goodman-standard-central-ducted-cfg-351",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-352",
      slug: "goodman-standard-central-ducted-cfg-352",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-353",
      slug: "goodman-standard-central-ducted-cfg-353",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-354",
      slug: "goodman-standard-central-ducted-cfg-354",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-355",
      slug: "goodman-standard-central-ducted-cfg-355",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-356",
      slug: "goodman-standard-central-ducted-cfg-356",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-357",
      slug: "goodman-standard-central-ducted-cfg-357",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-358",
      slug: "goodman-standard-central-ducted-cfg-358",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-359",
      slug: "goodman-standard-central-ducted-cfg-359",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-360",
      slug: "goodman-standard-central-ducted-cfg-360",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-361",
      slug: "goodman-standard-central-ducted-cfg-361",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-362",
      slug: "goodman-standard-central-ducted-cfg-362",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-363",
      slug: "goodman-standard-central-ducted-cfg-363",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
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
      id: "goodman-standard-central-ducted-cfg-364",
      slug: "goodman-standard-central-ducted-cfg-364",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-365",
      slug: "goodman-standard-central-ducted-cfg-365",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-366",
      slug: "goodman-standard-central-ducted-cfg-366",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-367",
      slug: "goodman-standard-central-ducted-cfg-367",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-368",
      slug: "goodman-standard-central-ducted-cfg-368",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-369",
      slug: "goodman-standard-central-ducted-cfg-369",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-370",
      slug: "goodman-standard-central-ducted-cfg-370",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-371",
      slug: "goodman-standard-central-ducted-cfg-371",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-372",
      slug: "goodman-standard-central-ducted-cfg-372",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-373",
      slug: "goodman-standard-central-ducted-cfg-373",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-374",
      slug: "goodman-standard-central-ducted-cfg-374",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-375",
      slug: "goodman-standard-central-ducted-cfg-375",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-376",
      slug: "goodman-standard-central-ducted-cfg-376",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-377",
      slug: "goodman-standard-central-ducted-cfg-377",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-378",
      slug: "goodman-standard-central-ducted-cfg-378",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-379",
      slug: "goodman-standard-central-ducted-cfg-379",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-380",
      slug: "goodman-standard-central-ducted-cfg-380",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-381",
      slug: "goodman-standard-central-ducted-cfg-381",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-382",
      slug: "goodman-standard-central-ducted-cfg-382",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-383",
      slug: "goodman-standard-central-ducted-cfg-383",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-384",
      slug: "goodman-standard-central-ducted-cfg-384",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-385",
      slug: "goodman-standard-central-ducted-cfg-385",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-386",
      slug: "goodman-standard-central-ducted-cfg-386",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-387",
      slug: "goodman-standard-central-ducted-cfg-387",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-388",
      slug: "goodman-standard-central-ducted-cfg-388",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-389",
      slug: "goodman-standard-central-ducted-cfg-389",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-390",
      slug: "goodman-standard-central-ducted-cfg-390",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-391",
      slug: "goodman-standard-central-ducted-cfg-391",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-392",
      slug: "goodman-standard-central-ducted-cfg-392",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-393",
      slug: "goodman-standard-central-ducted-cfg-393",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28400,
      coolingCapacityMaxBtu: 28400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-394",
      slug: "goodman-standard-central-ducted-cfg-394",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-395",
      slug: "goodman-standard-central-ducted-cfg-395",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-396",
      slug: "goodman-standard-central-ducted-cfg-396",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-397",
      slug: "goodman-standard-central-ducted-cfg-397",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-398",
      slug: "goodman-standard-central-ducted-cfg-398",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-399",
      slug: "goodman-standard-central-ducted-cfg-399",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-400",
      slug: "goodman-standard-central-ducted-cfg-400",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-401",
      slug: "goodman-standard-central-ducted-cfg-401",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-402",
      slug: "goodman-standard-central-ducted-cfg-402",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-403",
      slug: "goodman-standard-central-ducted-cfg-403",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-404",
      slug: "goodman-standard-central-ducted-cfg-404",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-405",
      slug: "goodman-standard-central-ducted-cfg-405",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-406",
      slug: "goodman-standard-central-ducted-cfg-406",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-407",
      slug: "goodman-standard-central-ducted-cfg-407",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-408",
      slug: "goodman-standard-central-ducted-cfg-408",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-409",
      slug: "goodman-standard-central-ducted-cfg-409",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-410",
      slug: "goodman-standard-central-ducted-cfg-410",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-411",
      slug: "goodman-standard-central-ducted-cfg-411",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-412",
      slug: "goodman-standard-central-ducted-cfg-412",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-413",
      slug: "goodman-standard-central-ducted-cfg-413",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-414",
      slug: "goodman-standard-central-ducted-cfg-414",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-415",
      slug: "goodman-standard-central-ducted-cfg-415",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-416",
      slug: "goodman-standard-central-ducted-cfg-416",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-417",
      slug: "goodman-standard-central-ducted-cfg-417",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-418",
      slug: "goodman-standard-central-ducted-cfg-418",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-419",
      slug: "goodman-standard-central-ducted-cfg-419",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-420",
      slug: "goodman-standard-central-ducted-cfg-420",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-421",
      slug: "goodman-standard-central-ducted-cfg-421",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-422",
      slug: "goodman-standard-central-ducted-cfg-422",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-423",
      slug: "goodman-standard-central-ducted-cfg-423",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-424",
      slug: "goodman-standard-central-ducted-cfg-424",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-425",
      slug: "goodman-standard-central-ducted-cfg-425",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-426",
      slug: "goodman-standard-central-ducted-cfg-426",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33600,
      coolingCapacityMaxBtu: 33600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-427",
      slug: "goodman-standard-central-ducted-cfg-427",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-428",
      slug: "goodman-standard-central-ducted-cfg-428",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-429",
      slug: "goodman-standard-central-ducted-cfg-429",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-430",
      slug: "goodman-standard-central-ducted-cfg-430",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-431",
      slug: "goodman-standard-central-ducted-cfg-431",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-432",
      slug: "goodman-standard-central-ducted-cfg-432",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-433",
      slug: "goodman-standard-central-ducted-cfg-433",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-434",
      slug: "goodman-standard-central-ducted-cfg-434",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-435",
      slug: "goodman-standard-central-ducted-cfg-435",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-436",
      slug: "goodman-standard-central-ducted-cfg-436",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-437",
      slug: "goodman-standard-central-ducted-cfg-437",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-438",
      slug: "goodman-standard-central-ducted-cfg-438",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-439",
      slug: "goodman-standard-central-ducted-cfg-439",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-440",
      slug: "goodman-standard-central-ducted-cfg-440",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-441",
      slug: "goodman-standard-central-ducted-cfg-441",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-442",
      slug: "goodman-standard-central-ducted-cfg-442",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-443",
      slug: "goodman-standard-central-ducted-cfg-443",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-444",
      slug: "goodman-standard-central-ducted-cfg-444",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-445",
      slug: "goodman-standard-central-ducted-cfg-445",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-446",
      slug: "goodman-standard-central-ducted-cfg-446",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-447",
      slug: "goodman-standard-central-ducted-cfg-447",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-448",
      slug: "goodman-standard-central-ducted-cfg-448",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-449",
      slug: "goodman-standard-central-ducted-cfg-449",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-450",
      slug: "goodman-standard-central-ducted-cfg-450",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-451",
      slug: "goodman-standard-central-ducted-cfg-451",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-452",
      slug: "goodman-standard-central-ducted-cfg-452",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-453",
      slug: "goodman-standard-central-ducted-cfg-453",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-454",
      slug: "goodman-standard-central-ducted-cfg-454",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-455",
      slug: "goodman-standard-central-ducted-cfg-455",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-456",
      slug: "goodman-standard-central-ducted-cfg-456",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-457",
      slug: "goodman-standard-central-ducted-cfg-457",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-458",
      slug: "goodman-standard-central-ducted-cfg-458",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-459",
      slug: "goodman-standard-central-ducted-cfg-459",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-460",
      slug: "goodman-standard-central-ducted-cfg-460",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-461",
      slug: "goodman-standard-central-ducted-cfg-461",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-462",
      slug: "goodman-standard-central-ducted-cfg-462",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-463",
      slug: "goodman-standard-central-ducted-cfg-463",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-464",
      slug: "goodman-standard-central-ducted-cfg-464",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-465",
      slug: "goodman-standard-central-ducted-cfg-465",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-466",
      slug: "goodman-standard-central-ducted-cfg-466",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-467",
      slug: "goodman-standard-central-ducted-cfg-467",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-468",
      slug: "goodman-standard-central-ducted-cfg-468",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53500,
      coolingCapacityMaxBtu: 53500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-469",
      slug: "goodman-standard-central-ducted-cfg-469",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-470",
      slug: "goodman-standard-central-ducted-cfg-470",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa6010a",
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
      id: "goodman-standard-central-ducted-cfg-471",
      slug: "goodman-standard-central-ducted-cfg-471",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-472",
      slug: "goodman-standard-central-ducted-cfg-472",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-473",
      slug: "goodman-standard-central-ducted-cfg-473",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-474",
      slug: "goodman-standard-central-ducted-cfg-474",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-475",
      slug: "goodman-standard-central-ducted-cfg-475",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-476",
      slug: "goodman-standard-central-ducted-cfg-476",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-477",
      slug: "goodman-standard-central-ducted-cfg-477",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-478",
      slug: "goodman-standard-central-ducted-cfg-478",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-479",
      slug: "goodman-standard-central-ducted-cfg-479",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-480",
      slug: "goodman-standard-central-ducted-cfg-480",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-481",
      slug: "goodman-standard-central-ducted-cfg-481",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-482",
      slug: "goodman-standard-central-ducted-cfg-482",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-483",
      slug: "goodman-standard-central-ducted-cfg-483",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-484",
      slug: "goodman-standard-central-ducted-cfg-484",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-485",
      slug: "goodman-standard-central-ducted-cfg-485",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-486",
      slug: "goodman-standard-central-ducted-cfg-486",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-487",
      slug: "goodman-standard-central-ducted-cfg-487",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-488",
      slug: "goodman-standard-central-ducted-cfg-488",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-489",
      slug: "goodman-standard-central-ducted-cfg-489",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-490",
      slug: "goodman-standard-central-ducted-cfg-490",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-491",
      slug: "goodman-standard-central-ducted-cfg-491",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-492",
      slug: "goodman-standard-central-ducted-cfg-492",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-493",
      slug: "goodman-standard-central-ducted-cfg-493",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-494",
      slug: "goodman-standard-central-ducted-cfg-494",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-495",
      slug: "goodman-standard-central-ducted-cfg-495",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-496",
      slug: "goodman-standard-central-ducted-cfg-496",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-497",
      slug: "goodman-standard-central-ducted-cfg-497",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-498",
      slug: "goodman-standard-central-ducted-cfg-498",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-499",
      slug: "goodman-standard-central-ducted-cfg-499",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-500",
      slug: "goodman-standard-central-ducted-cfg-500",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-501",
      slug: "goodman-standard-central-ducted-cfg-501",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-502",
      slug: "goodman-standard-central-ducted-cfg-502",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-503",
      slug: "goodman-standard-central-ducted-cfg-503",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-504",
      slug: "goodman-standard-central-ducted-cfg-504",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-505",
      slug: "goodman-standard-central-ducted-cfg-505",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-506",
      slug: "goodman-standard-central-ducted-cfg-506",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-507",
      slug: "goodman-standard-central-ducted-cfg-507",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-508",
      slug: "goodman-standard-central-ducted-cfg-508",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-509",
      slug: "goodman-standard-central-ducted-cfg-509",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-510",
      slug: "goodman-standard-central-ducted-cfg-510",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-511",
      slug: "goodman-standard-central-ducted-cfg-511",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-512",
      slug: "goodman-standard-central-ducted-cfg-512",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-513",
      slug: "goodman-standard-central-ducted-cfg-513",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-514",
      slug: "goodman-standard-central-ducted-cfg-514",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-515",
      slug: "goodman-standard-central-ducted-cfg-515",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-516",
      slug: "goodman-standard-central-ducted-cfg-516",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-517",
      slug: "goodman-standard-central-ducted-cfg-517",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-518",
      slug: "goodman-standard-central-ducted-cfg-518",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-519",
      slug: "goodman-standard-central-ducted-cfg-519",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-520",
      slug: "goodman-standard-central-ducted-cfg-520",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-521",
      slug: "goodman-standard-central-ducted-cfg-521",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-522",
      slug: "goodman-standard-central-ducted-cfg-522",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-523",
      slug: "goodman-standard-central-ducted-cfg-523",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-524",
      slug: "goodman-standard-central-ducted-cfg-524",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-525",
      slug: "goodman-standard-central-ducted-cfg-525",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-526",
      slug: "goodman-standard-central-ducted-cfg-526",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-527",
      slug: "goodman-standard-central-ducted-cfg-527",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-528",
      slug: "goodman-standard-central-ducted-cfg-528",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-529",
      slug: "goodman-standard-central-ducted-cfg-529",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-530",
      slug: "goodman-standard-central-ducted-cfg-530",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-531",
      slug: "goodman-standard-central-ducted-cfg-531",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-532",
      slug: "goodman-standard-central-ducted-cfg-532",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-533",
      slug: "goodman-standard-central-ducted-cfg-533",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-534",
      slug: "goodman-standard-central-ducted-cfg-534",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-535",
      slug: "goodman-standard-central-ducted-cfg-535",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-536",
      slug: "goodman-standard-central-ducted-cfg-536",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-537",
      slug: "goodman-standard-central-ducted-cfg-537",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-538",
      slug: "goodman-standard-central-ducted-cfg-538",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-539",
      slug: "goodman-standard-central-ducted-cfg-539",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-540",
      slug: "goodman-standard-central-ducted-cfg-540",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-541",
      slug: "goodman-standard-central-ducted-cfg-541",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-standard-central-ducted-cfg-542",
      slug: "goodman-standard-central-ducted-cfg-542",
      modelId: "goodman-standard-central-ducted",
      outdoorUnitId: "goodman-gzv6sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-mst-series-wall-single-cfg-1",
      slug: "goodman-mst-series-wall-single-cfg-1",
      modelId: "goodman-mst-series-wall-single",
      outdoorUnitId: "goodman-msh123g22mcaa",
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
      id: "goodman-mst-series-wall-single-cfg-2",
      slug: "goodman-mst-series-wall-single-cfg-2",
      modelId: "goodman-mst-series-wall-single",
      outdoorUnitId: "goodman-msh183g22mcaa",
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
      id: "goodman-mst-series-wall-single-cfg-3",
      slug: "goodman-mst-series-wall-single-cfg-3",
      modelId: "goodman-mst-series-wall-single",
      outdoorUnitId: "goodman-msh123g22mcaa",
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
      id: "goodman-mst-series-wall-single-cfg-4",
      slug: "goodman-mst-series-wall-single-cfg-4",
      modelId: "goodman-mst-series-wall-single",
      outdoorUnitId: "goodman-msh183g22mcaa",
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
      id: "goodman-mst-series-wall-single-cfg-5",
      slug: "goodman-mst-series-wall-single-cfg-5",
      modelId: "goodman-mst-series-wall-single",
      outdoorUnitId: "goodman-msh243g22mcaa",
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
      id: "goodman-mst-series-wall-single-cfg-6",
      slug: "goodman-mst-series-wall-single-cfg-6",
      modelId: "goodman-mst-series-wall-single",
      outdoorUnitId: "goodman-mst283g22mhaa",
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
      id: "goodman-mst-series-wall-single-cfg-7",
      slug: "goodman-mst-series-wall-single-cfg-7",
      modelId: "goodman-mst-series-wall-single",
      outdoorUnitId: "goodman-mst283g22mhaa",
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
      id: "goodman-mst-series-wall-single-cfg-8",
      slug: "goodman-mst-series-wall-single-cfg-8",
      modelId: "goodman-mst-series-wall-single",
      outdoorUnitId: "goodman-mst283g22mhaa",
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
      id: "goodman-gzv6sa-central-ducted-cfg-1",
      slug: "goodman-gzv6sa-central-ducted-cfg-1",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-2",
      slug: "goodman-gzv6sa-central-ducted-cfg-2",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-3",
      slug: "goodman-gzv6sa-central-ducted-cfg-3",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-4",
      slug: "goodman-gzv6sa-central-ducted-cfg-4",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-5",
      slug: "goodman-gzv6sa-central-ducted-cfg-5",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-6",
      slug: "goodman-gzv6sa-central-ducted-cfg-6",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-7",
      slug: "goodman-gzv6sa-central-ducted-cfg-7",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-8",
      slug: "goodman-gzv6sa-central-ducted-cfg-8",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-9",
      slug: "goodman-gzv6sa-central-ducted-cfg-9",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-10",
      slug: "goodman-gzv6sa-central-ducted-cfg-10",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-11",
      slug: "goodman-gzv6sa-central-ducted-cfg-11",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-12",
      slug: "goodman-gzv6sa-central-ducted-cfg-12",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-13",
      slug: "goodman-gzv6sa-central-ducted-cfg-13",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-14",
      slug: "goodman-gzv6sa-central-ducted-cfg-14",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-15",
      slug: "goodman-gzv6sa-central-ducted-cfg-15",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-16",
      slug: "goodman-gzv6sa-central-ducted-cfg-16",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-17",
      slug: "goodman-gzv6sa-central-ducted-cfg-17",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-18",
      slug: "goodman-gzv6sa-central-ducted-cfg-18",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-19",
      slug: "goodman-gzv6sa-central-ducted-cfg-19",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-20",
      slug: "goodman-gzv6sa-central-ducted-cfg-20",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-21",
      slug: "goodman-gzv6sa-central-ducted-cfg-21",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-22",
      slug: "goodman-gzv6sa-central-ducted-cfg-22",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-23",
      slug: "goodman-gzv6sa-central-ducted-cfg-23",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-24",
      slug: "goodman-gzv6sa-central-ducted-cfg-24",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-25",
      slug: "goodman-gzv6sa-central-ducted-cfg-25",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-26",
      slug: "goodman-gzv6sa-central-ducted-cfg-26",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-27",
      slug: "goodman-gzv6sa-central-ducted-cfg-27",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-28",
      slug: "goodman-gzv6sa-central-ducted-cfg-28",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-29",
      slug: "goodman-gzv6sa-central-ducted-cfg-29",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-30",
      slug: "goodman-gzv6sa-central-ducted-cfg-30",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-31",
      slug: "goodman-gzv6sa-central-ducted-cfg-31",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-32",
      slug: "goodman-gzv6sa-central-ducted-cfg-32",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-33",
      slug: "goodman-gzv6sa-central-ducted-cfg-33",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-34",
      slug: "goodman-gzv6sa-central-ducted-cfg-34",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-35",
      slug: "goodman-gzv6sa-central-ducted-cfg-35",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-36",
      slug: "goodman-gzv6sa-central-ducted-cfg-36",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-37",
      slug: "goodman-gzv6sa-central-ducted-cfg-37",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-38",
      slug: "goodman-gzv6sa-central-ducted-cfg-38",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-39",
      slug: "goodman-gzv6sa-central-ducted-cfg-39",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-40",
      slug: "goodman-gzv6sa-central-ducted-cfg-40",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-41",
      slug: "goodman-gzv6sa-central-ducted-cfg-41",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-42",
      slug: "goodman-gzv6sa-central-ducted-cfg-42",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-43",
      slug: "goodman-gzv6sa-central-ducted-cfg-43",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-44",
      slug: "goodman-gzv6sa-central-ducted-cfg-44",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-45",
      slug: "goodman-gzv6sa-central-ducted-cfg-45",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-46",
      slug: "goodman-gzv6sa-central-ducted-cfg-46",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-47",
      slug: "goodman-gzv6sa-central-ducted-cfg-47",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-48",
      slug: "goodman-gzv6sa-central-ducted-cfg-48",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-49",
      slug: "goodman-gzv6sa-central-ducted-cfg-49",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-50",
      slug: "goodman-gzv6sa-central-ducted-cfg-50",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-51",
      slug: "goodman-gzv6sa-central-ducted-cfg-51",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-52",
      slug: "goodman-gzv6sa-central-ducted-cfg-52",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-53",
      slug: "goodman-gzv6sa-central-ducted-cfg-53",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-54",
      slug: "goodman-gzv6sa-central-ducted-cfg-54",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-55",
      slug: "goodman-gzv6sa-central-ducted-cfg-55",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-56",
      slug: "goodman-gzv6sa-central-ducted-cfg-56",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-57",
      slug: "goodman-gzv6sa-central-ducted-cfg-57",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-58",
      slug: "goodman-gzv6sa-central-ducted-cfg-58",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-59",
      slug: "goodman-gzv6sa-central-ducted-cfg-59",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-60",
      slug: "goodman-gzv6sa-central-ducted-cfg-60",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-61",
      slug: "goodman-gzv6sa-central-ducted-cfg-61",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-62",
      slug: "goodman-gzv6sa-central-ducted-cfg-62",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-63",
      slug: "goodman-gzv6sa-central-ducted-cfg-63",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-64",
      slug: "goodman-gzv6sa-central-ducted-cfg-64",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-65",
      slug: "goodman-gzv6sa-central-ducted-cfg-65",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-66",
      slug: "goodman-gzv6sa-central-ducted-cfg-66",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-67",
      slug: "goodman-gzv6sa-central-ducted-cfg-67",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-68",
      slug: "goodman-gzv6sa-central-ducted-cfg-68",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-69",
      slug: "goodman-gzv6sa-central-ducted-cfg-69",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-70",
      slug: "goodman-gzv6sa-central-ducted-cfg-70",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-71",
      slug: "goodman-gzv6sa-central-ducted-cfg-71",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-72",
      slug: "goodman-gzv6sa-central-ducted-cfg-72",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-73",
      slug: "goodman-gzv6sa-central-ducted-cfg-73",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-74",
      slug: "goodman-gzv6sa-central-ducted-cfg-74",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-75",
      slug: "goodman-gzv6sa-central-ducted-cfg-75",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-76",
      slug: "goodman-gzv6sa-central-ducted-cfg-76",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-77",
      slug: "goodman-gzv6sa-central-ducted-cfg-77",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-78",
      slug: "goodman-gzv6sa-central-ducted-cfg-78",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-79",
      slug: "goodman-gzv6sa-central-ducted-cfg-79",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-80",
      slug: "goodman-gzv6sa-central-ducted-cfg-80",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv6sa-central-ducted-cfg-81",
      slug: "goodman-gzv6sa-central-ducted-cfg-81",
      modelId: "goodman-gzv6sa-central-ducted",
      outdoorUnitId: "goodman-gzv6sa1810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17100,
      coolingCapacityMaxBtu: 17100,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-1",
      slug: "goodman-gzv7sa-central-ducted-cfg-1",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-2",
      slug: "goodman-gzv7sa-central-ducted-cfg-2",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-3",
      slug: "goodman-gzv7sa-central-ducted-cfg-3",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-4",
      slug: "goodman-gzv7sa-central-ducted-cfg-4",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-5",
      slug: "goodman-gzv7sa-central-ducted-cfg-5",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-6",
      slug: "goodman-gzv7sa-central-ducted-cfg-6",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-7",
      slug: "goodman-gzv7sa-central-ducted-cfg-7",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-8",
      slug: "goodman-gzv7sa-central-ducted-cfg-8",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-9",
      slug: "goodman-gzv7sa-central-ducted-cfg-9",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-10",
      slug: "goodman-gzv7sa-central-ducted-cfg-10",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-11",
      slug: "goodman-gzv7sa-central-ducted-cfg-11",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-12",
      slug: "goodman-gzv7sa-central-ducted-cfg-12",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-13",
      slug: "goodman-gzv7sa-central-ducted-cfg-13",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-14",
      slug: "goodman-gzv7sa-central-ducted-cfg-14",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-15",
      slug: "goodman-gzv7sa-central-ducted-cfg-15",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-16",
      slug: "goodman-gzv7sa-central-ducted-cfg-16",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-17",
      slug: "goodman-gzv7sa-central-ducted-cfg-17",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-18",
      slug: "goodman-gzv7sa-central-ducted-cfg-18",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-19",
      slug: "goodman-gzv7sa-central-ducted-cfg-19",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-20",
      slug: "goodman-gzv7sa-central-ducted-cfg-20",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-21",
      slug: "goodman-gzv7sa-central-ducted-cfg-21",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-22",
      slug: "goodman-gzv7sa-central-ducted-cfg-22",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-23",
      slug: "goodman-gzv7sa-central-ducted-cfg-23",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-24",
      slug: "goodman-gzv7sa-central-ducted-cfg-24",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-25",
      slug: "goodman-gzv7sa-central-ducted-cfg-25",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-26",
      slug: "goodman-gzv7sa-central-ducted-cfg-26",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-27",
      slug: "goodman-gzv7sa-central-ducted-cfg-27",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-28",
      slug: "goodman-gzv7sa-central-ducted-cfg-28",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-29",
      slug: "goodman-gzv7sa-central-ducted-cfg-29",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-30",
      slug: "goodman-gzv7sa-central-ducted-cfg-30",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-31",
      slug: "goodman-gzv7sa-central-ducted-cfg-31",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-32",
      slug: "goodman-gzv7sa-central-ducted-cfg-32",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-33",
      slug: "goodman-gzv7sa-central-ducted-cfg-33",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-34",
      slug: "goodman-gzv7sa-central-ducted-cfg-34",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-35",
      slug: "goodman-gzv7sa-central-ducted-cfg-35",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-36",
      slug: "goodman-gzv7sa-central-ducted-cfg-36",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-37",
      slug: "goodman-gzv7sa-central-ducted-cfg-37",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-38",
      slug: "goodman-gzv7sa-central-ducted-cfg-38",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-39",
      slug: "goodman-gzv7sa-central-ducted-cfg-39",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-40",
      slug: "goodman-gzv7sa-central-ducted-cfg-40",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-41",
      slug: "goodman-gzv7sa-central-ducted-cfg-41",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-42",
      slug: "goodman-gzv7sa-central-ducted-cfg-42",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-43",
      slug: "goodman-gzv7sa-central-ducted-cfg-43",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-44",
      slug: "goodman-gzv7sa-central-ducted-cfg-44",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-45",
      slug: "goodman-gzv7sa-central-ducted-cfg-45",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-46",
      slug: "goodman-gzv7sa-central-ducted-cfg-46",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-47",
      slug: "goodman-gzv7sa-central-ducted-cfg-47",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-48",
      slug: "goodman-gzv7sa-central-ducted-cfg-48",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-49",
      slug: "goodman-gzv7sa-central-ducted-cfg-49",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-50",
      slug: "goodman-gzv7sa-central-ducted-cfg-50",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-51",
      slug: "goodman-gzv7sa-central-ducted-cfg-51",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-52",
      slug: "goodman-gzv7sa-central-ducted-cfg-52",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-53",
      slug: "goodman-gzv7sa-central-ducted-cfg-53",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-54",
      slug: "goodman-gzv7sa-central-ducted-cfg-54",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-55",
      slug: "goodman-gzv7sa-central-ducted-cfg-55",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-56",
      slug: "goodman-gzv7sa-central-ducted-cfg-56",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-57",
      slug: "goodman-gzv7sa-central-ducted-cfg-57",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-58",
      slug: "goodman-gzv7sa-central-ducted-cfg-58",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-59",
      slug: "goodman-gzv7sa-central-ducted-cfg-59",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-60",
      slug: "goodman-gzv7sa-central-ducted-cfg-60",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-61",
      slug: "goodman-gzv7sa-central-ducted-cfg-61",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-62",
      slug: "goodman-gzv7sa-central-ducted-cfg-62",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-63",
      slug: "goodman-gzv7sa-central-ducted-cfg-63",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-64",
      slug: "goodman-gzv7sa-central-ducted-cfg-64",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-65",
      slug: "goodman-gzv7sa-central-ducted-cfg-65",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-66",
      slug: "goodman-gzv7sa-central-ducted-cfg-66",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-67",
      slug: "goodman-gzv7sa-central-ducted-cfg-67",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-68",
      slug: "goodman-gzv7sa-central-ducted-cfg-68",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-69",
      slug: "goodman-gzv7sa-central-ducted-cfg-69",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-70",
      slug: "goodman-gzv7sa-central-ducted-cfg-70",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-71",
      slug: "goodman-gzv7sa-central-ducted-cfg-71",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-72",
      slug: "goodman-gzv7sa-central-ducted-cfg-72",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-73",
      slug: "goodman-gzv7sa-central-ducted-cfg-73",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-74",
      slug: "goodman-gzv7sa-central-ducted-cfg-74",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-75",
      slug: "goodman-gzv7sa-central-ducted-cfg-75",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-76",
      slug: "goodman-gzv7sa-central-ducted-cfg-76",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-77",
      slug: "goodman-gzv7sa-central-ducted-cfg-77",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-78",
      slug: "goodman-gzv7sa-central-ducted-cfg-78",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-79",
      slug: "goodman-gzv7sa-central-ducted-cfg-79",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-80",
      slug: "goodman-gzv7sa-central-ducted-cfg-80",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-81",
      slug: "goodman-gzv7sa-central-ducted-cfg-81",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-82",
      slug: "goodman-gzv7sa-central-ducted-cfg-82",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-83",
      slug: "goodman-gzv7sa-central-ducted-cfg-83",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-84",
      slug: "goodman-gzv7sa-central-ducted-cfg-84",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-85",
      slug: "goodman-gzv7sa-central-ducted-cfg-85",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-86",
      slug: "goodman-gzv7sa-central-ducted-cfg-86",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-87",
      slug: "goodman-gzv7sa-central-ducted-cfg-87",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-88",
      slug: "goodman-gzv7sa-central-ducted-cfg-88",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-89",
      slug: "goodman-gzv7sa-central-ducted-cfg-89",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-90",
      slug: "goodman-gzv7sa-central-ducted-cfg-90",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-91",
      slug: "goodman-gzv7sa-central-ducted-cfg-91",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-92",
      slug: "goodman-gzv7sa-central-ducted-cfg-92",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-93",
      slug: "goodman-gzv7sa-central-ducted-cfg-93",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-94",
      slug: "goodman-gzv7sa-central-ducted-cfg-94",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-95",
      slug: "goodman-gzv7sa-central-ducted-cfg-95",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-96",
      slug: "goodman-gzv7sa-central-ducted-cfg-96",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-97",
      slug: "goodman-gzv7sa-central-ducted-cfg-97",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-98",
      slug: "goodman-gzv7sa-central-ducted-cfg-98",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-99",
      slug: "goodman-gzv7sa-central-ducted-cfg-99",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-100",
      slug: "goodman-gzv7sa-central-ducted-cfg-100",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-101",
      slug: "goodman-gzv7sa-central-ducted-cfg-101",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-102",
      slug: "goodman-gzv7sa-central-ducted-cfg-102",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-103",
      slug: "goodman-gzv7sa-central-ducted-cfg-103",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-104",
      slug: "goodman-gzv7sa-central-ducted-cfg-104",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-105",
      slug: "goodman-gzv7sa-central-ducted-cfg-105",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-106",
      slug: "goodman-gzv7sa-central-ducted-cfg-106",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-107",
      slug: "goodman-gzv7sa-central-ducted-cfg-107",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-108",
      slug: "goodman-gzv7sa-central-ducted-cfg-108",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-109",
      slug: "goodman-gzv7sa-central-ducted-cfg-109",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-110",
      slug: "goodman-gzv7sa-central-ducted-cfg-110",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-111",
      slug: "goodman-gzv7sa-central-ducted-cfg-111",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-112",
      slug: "goodman-gzv7sa-central-ducted-cfg-112",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-113",
      slug: "goodman-gzv7sa-central-ducted-cfg-113",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-114",
      slug: "goodman-gzv7sa-central-ducted-cfg-114",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-115",
      slug: "goodman-gzv7sa-central-ducted-cfg-115",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-116",
      slug: "goodman-gzv7sa-central-ducted-cfg-116",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-117",
      slug: "goodman-gzv7sa-central-ducted-cfg-117",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-118",
      slug: "goodman-gzv7sa-central-ducted-cfg-118",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-119",
      slug: "goodman-gzv7sa-central-ducted-cfg-119",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-120",
      slug: "goodman-gzv7sa-central-ducted-cfg-120",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-121",
      slug: "goodman-gzv7sa-central-ducted-cfg-121",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-122",
      slug: "goodman-gzv7sa-central-ducted-cfg-122",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-123",
      slug: "goodman-gzv7sa-central-ducted-cfg-123",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-124",
      slug: "goodman-gzv7sa-central-ducted-cfg-124",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-125",
      slug: "goodman-gzv7sa-central-ducted-cfg-125",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-126",
      slug: "goodman-gzv7sa-central-ducted-cfg-126",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-127",
      slug: "goodman-gzv7sa-central-ducted-cfg-127",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-128",
      slug: "goodman-gzv7sa-central-ducted-cfg-128",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-129",
      slug: "goodman-gzv7sa-central-ducted-cfg-129",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-130",
      slug: "goodman-gzv7sa-central-ducted-cfg-130",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-131",
      slug: "goodman-gzv7sa-central-ducted-cfg-131",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-132",
      slug: "goodman-gzv7sa-central-ducted-cfg-132",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-133",
      slug: "goodman-gzv7sa-central-ducted-cfg-133",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-134",
      slug: "goodman-gzv7sa-central-ducted-cfg-134",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-135",
      slug: "goodman-gzv7sa-central-ducted-cfg-135",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-136",
      slug: "goodman-gzv7sa-central-ducted-cfg-136",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-137",
      slug: "goodman-gzv7sa-central-ducted-cfg-137",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-138",
      slug: "goodman-gzv7sa-central-ducted-cfg-138",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-139",
      slug: "goodman-gzv7sa-central-ducted-cfg-139",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-140",
      slug: "goodman-gzv7sa-central-ducted-cfg-140",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-141",
      slug: "goodman-gzv7sa-central-ducted-cfg-141",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-142",
      slug: "goodman-gzv7sa-central-ducted-cfg-142",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-143",
      slug: "goodman-gzv7sa-central-ducted-cfg-143",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-144",
      slug: "goodman-gzv7sa-central-ducted-cfg-144",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-145",
      slug: "goodman-gzv7sa-central-ducted-cfg-145",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-146",
      slug: "goodman-gzv7sa-central-ducted-cfg-146",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-147",
      slug: "goodman-gzv7sa-central-ducted-cfg-147",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-148",
      slug: "goodman-gzv7sa-central-ducted-cfg-148",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-149",
      slug: "goodman-gzv7sa-central-ducted-cfg-149",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-150",
      slug: "goodman-gzv7sa-central-ducted-cfg-150",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-151",
      slug: "goodman-gzv7sa-central-ducted-cfg-151",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-152",
      slug: "goodman-gzv7sa-central-ducted-cfg-152",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-153",
      slug: "goodman-gzv7sa-central-ducted-cfg-153",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-154",
      slug: "goodman-gzv7sa-central-ducted-cfg-154",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-155",
      slug: "goodman-gzv7sa-central-ducted-cfg-155",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-156",
      slug: "goodman-gzv7sa-central-ducted-cfg-156",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-157",
      slug: "goodman-gzv7sa-central-ducted-cfg-157",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-158",
      slug: "goodman-gzv7sa-central-ducted-cfg-158",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-159",
      slug: "goodman-gzv7sa-central-ducted-cfg-159",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-160",
      slug: "goodman-gzv7sa-central-ducted-cfg-160",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-161",
      slug: "goodman-gzv7sa-central-ducted-cfg-161",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-162",
      slug: "goodman-gzv7sa-central-ducted-cfg-162",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-163",
      slug: "goodman-gzv7sa-central-ducted-cfg-163",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-164",
      slug: "goodman-gzv7sa-central-ducted-cfg-164",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-165",
      slug: "goodman-gzv7sa-central-ducted-cfg-165",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-166",
      slug: "goodman-gzv7sa-central-ducted-cfg-166",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-167",
      slug: "goodman-gzv7sa-central-ducted-cfg-167",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-168",
      slug: "goodman-gzv7sa-central-ducted-cfg-168",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-169",
      slug: "goodman-gzv7sa-central-ducted-cfg-169",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-170",
      slug: "goodman-gzv7sa-central-ducted-cfg-170",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-171",
      slug: "goodman-gzv7sa-central-ducted-cfg-171",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-172",
      slug: "goodman-gzv7sa-central-ducted-cfg-172",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-173",
      slug: "goodman-gzv7sa-central-ducted-cfg-173",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-174",
      slug: "goodman-gzv7sa-central-ducted-cfg-174",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-175",
      slug: "goodman-gzv7sa-central-ducted-cfg-175",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-176",
      slug: "goodman-gzv7sa-central-ducted-cfg-176",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-177",
      slug: "goodman-gzv7sa-central-ducted-cfg-177",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-178",
      slug: "goodman-gzv7sa-central-ducted-cfg-178",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-179",
      slug: "goodman-gzv7sa-central-ducted-cfg-179",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-180",
      slug: "goodman-gzv7sa-central-ducted-cfg-180",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-181",
      slug: "goodman-gzv7sa-central-ducted-cfg-181",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-182",
      slug: "goodman-gzv7sa-central-ducted-cfg-182",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-183",
      slug: "goodman-gzv7sa-central-ducted-cfg-183",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-184",
      slug: "goodman-gzv7sa-central-ducted-cfg-184",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-185",
      slug: "goodman-gzv7sa-central-ducted-cfg-185",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-186",
      slug: "goodman-gzv7sa-central-ducted-cfg-186",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-187",
      slug: "goodman-gzv7sa-central-ducted-cfg-187",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-188",
      slug: "goodman-gzv7sa-central-ducted-cfg-188",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-189",
      slug: "goodman-gzv7sa-central-ducted-cfg-189",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-190",
      slug: "goodman-gzv7sa-central-ducted-cfg-190",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-191",
      slug: "goodman-gzv7sa-central-ducted-cfg-191",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-192",
      slug: "goodman-gzv7sa-central-ducted-cfg-192",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-193",
      slug: "goodman-gzv7sa-central-ducted-cfg-193",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-194",
      slug: "goodman-gzv7sa-central-ducted-cfg-194",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-195",
      slug: "goodman-gzv7sa-central-ducted-cfg-195",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-196",
      slug: "goodman-gzv7sa-central-ducted-cfg-196",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-197",
      slug: "goodman-gzv7sa-central-ducted-cfg-197",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-198",
      slug: "goodman-gzv7sa-central-ducted-cfg-198",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-199",
      slug: "goodman-gzv7sa-central-ducted-cfg-199",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-200",
      slug: "goodman-gzv7sa-central-ducted-cfg-200",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-201",
      slug: "goodman-gzv7sa-central-ducted-cfg-201",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-202",
      slug: "goodman-gzv7sa-central-ducted-cfg-202",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-203",
      slug: "goodman-gzv7sa-central-ducted-cfg-203",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-204",
      slug: "goodman-gzv7sa-central-ducted-cfg-204",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-205",
      slug: "goodman-gzv7sa-central-ducted-cfg-205",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-206",
      slug: "goodman-gzv7sa-central-ducted-cfg-206",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-207",
      slug: "goodman-gzv7sa-central-ducted-cfg-207",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-208",
      slug: "goodman-gzv7sa-central-ducted-cfg-208",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-209",
      slug: "goodman-gzv7sa-central-ducted-cfg-209",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-210",
      slug: "goodman-gzv7sa-central-ducted-cfg-210",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-211",
      slug: "goodman-gzv7sa-central-ducted-cfg-211",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-212",
      slug: "goodman-gzv7sa-central-ducted-cfg-212",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-213",
      slug: "goodman-gzv7sa-central-ducted-cfg-213",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-214",
      slug: "goodman-gzv7sa-central-ducted-cfg-214",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-215",
      slug: "goodman-gzv7sa-central-ducted-cfg-215",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-216",
      slug: "goodman-gzv7sa-central-ducted-cfg-216",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-217",
      slug: "goodman-gzv7sa-central-ducted-cfg-217",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-218",
      slug: "goodman-gzv7sa-central-ducted-cfg-218",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-219",
      slug: "goodman-gzv7sa-central-ducted-cfg-219",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-220",
      slug: "goodman-gzv7sa-central-ducted-cfg-220",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-221",
      slug: "goodman-gzv7sa-central-ducted-cfg-221",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-222",
      slug: "goodman-gzv7sa-central-ducted-cfg-222",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-223",
      slug: "goodman-gzv7sa-central-ducted-cfg-223",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-224",
      slug: "goodman-gzv7sa-central-ducted-cfg-224",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-225",
      slug: "goodman-gzv7sa-central-ducted-cfg-225",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-226",
      slug: "goodman-gzv7sa-central-ducted-cfg-226",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-227",
      slug: "goodman-gzv7sa-central-ducted-cfg-227",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-228",
      slug: "goodman-gzv7sa-central-ducted-cfg-228",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-229",
      slug: "goodman-gzv7sa-central-ducted-cfg-229",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-230",
      slug: "goodman-gzv7sa-central-ducted-cfg-230",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-231",
      slug: "goodman-gzv7sa-central-ducted-cfg-231",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-232",
      slug: "goodman-gzv7sa-central-ducted-cfg-232",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-233",
      slug: "goodman-gzv7sa-central-ducted-cfg-233",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-234",
      slug: "goodman-gzv7sa-central-ducted-cfg-234",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-235",
      slug: "goodman-gzv7sa-central-ducted-cfg-235",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-236",
      slug: "goodman-gzv7sa-central-ducted-cfg-236",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-237",
      slug: "goodman-gzv7sa-central-ducted-cfg-237",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-238",
      slug: "goodman-gzv7sa-central-ducted-cfg-238",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-239",
      slug: "goodman-gzv7sa-central-ducted-cfg-239",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-240",
      slug: "goodman-gzv7sa-central-ducted-cfg-240",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-241",
      slug: "goodman-gzv7sa-central-ducted-cfg-241",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-242",
      slug: "goodman-gzv7sa-central-ducted-cfg-242",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-243",
      slug: "goodman-gzv7sa-central-ducted-cfg-243",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-244",
      slug: "goodman-gzv7sa-central-ducted-cfg-244",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-245",
      slug: "goodman-gzv7sa-central-ducted-cfg-245",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-246",
      slug: "goodman-gzv7sa-central-ducted-cfg-246",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-247",
      slug: "goodman-gzv7sa-central-ducted-cfg-247",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-248",
      slug: "goodman-gzv7sa-central-ducted-cfg-248",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa2410a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23200,
      coolingCapacityMaxBtu: 23200,
      seer2: 19,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-249",
      slug: "goodman-gzv7sa-central-ducted-cfg-249",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-250",
      slug: "goodman-gzv7sa-central-ducted-cfg-250",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-251",
      slug: "goodman-gzv7sa-central-ducted-cfg-251",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-252",
      slug: "goodman-gzv7sa-central-ducted-cfg-252",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-253",
      slug: "goodman-gzv7sa-central-ducted-cfg-253",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-254",
      slug: "goodman-gzv7sa-central-ducted-cfg-254",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-255",
      slug: "goodman-gzv7sa-central-ducted-cfg-255",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-256",
      slug: "goodman-gzv7sa-central-ducted-cfg-256",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-257",
      slug: "goodman-gzv7sa-central-ducted-cfg-257",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-258",
      slug: "goodman-gzv7sa-central-ducted-cfg-258",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-259",
      slug: "goodman-gzv7sa-central-ducted-cfg-259",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-260",
      slug: "goodman-gzv7sa-central-ducted-cfg-260",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-261",
      slug: "goodman-gzv7sa-central-ducted-cfg-261",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-262",
      slug: "goodman-gzv7sa-central-ducted-cfg-262",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-263",
      slug: "goodman-gzv7sa-central-ducted-cfg-263",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-264",
      slug: "goodman-gzv7sa-central-ducted-cfg-264",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-265",
      slug: "goodman-gzv7sa-central-ducted-cfg-265",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 18.5,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-266",
      slug: "goodman-gzv7sa-central-ducted-cfg-266",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-267",
      slug: "goodman-gzv7sa-central-ducted-cfg-267",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-268",
      slug: "goodman-gzv7sa-central-ducted-cfg-268",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-269",
      slug: "goodman-gzv7sa-central-ducted-cfg-269",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-270",
      slug: "goodman-gzv7sa-central-ducted-cfg-270",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-271",
      slug: "goodman-gzv7sa-central-ducted-cfg-271",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-272",
      slug: "goodman-gzv7sa-central-ducted-cfg-272",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa3610a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: 19,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-273",
      slug: "goodman-gzv7sa-central-ducted-cfg-273",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-274",
      slug: "goodman-gzv7sa-central-ducted-cfg-274",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-275",
      slug: "goodman-gzv7sa-central-ducted-cfg-275",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-276",
      slug: "goodman-gzv7sa-central-ducted-cfg-276",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-277",
      slug: "goodman-gzv7sa-central-ducted-cfg-277",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-278",
      slug: "goodman-gzv7sa-central-ducted-cfg-278",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-279",
      slug: "goodman-gzv7sa-central-ducted-cfg-279",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-280",
      slug: "goodman-gzv7sa-central-ducted-cfg-280",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-281",
      slug: "goodman-gzv7sa-central-ducted-cfg-281",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-282",
      slug: "goodman-gzv7sa-central-ducted-cfg-282",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-283",
      slug: "goodman-gzv7sa-central-ducted-cfg-283",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-284",
      slug: "goodman-gzv7sa-central-ducted-cfg-284",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-285",
      slug: "goodman-gzv7sa-central-ducted-cfg-285",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-286",
      slug: "goodman-gzv7sa-central-ducted-cfg-286",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-287",
      slug: "goodman-gzv7sa-central-ducted-cfg-287",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-288",
      slug: "goodman-gzv7sa-central-ducted-cfg-288",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-289",
      slug: "goodman-gzv7sa-central-ducted-cfg-289",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-290",
      slug: "goodman-gzv7sa-central-ducted-cfg-290",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-291",
      slug: "goodman-gzv7sa-central-ducted-cfg-291",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-292",
      slug: "goodman-gzv7sa-central-ducted-cfg-292",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-293",
      slug: "goodman-gzv7sa-central-ducted-cfg-293",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-294",
      slug: "goodman-gzv7sa-central-ducted-cfg-294",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-295",
      slug: "goodman-gzv7sa-central-ducted-cfg-295",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-296",
      slug: "goodman-gzv7sa-central-ducted-cfg-296",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-297",
      slug: "goodman-gzv7sa-central-ducted-cfg-297",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-298",
      slug: "goodman-gzv7sa-central-ducted-cfg-298",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-299",
      slug: "goodman-gzv7sa-central-ducted-cfg-299",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41000,
      coolingCapacityMaxBtu: 41000,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-300",
      slug: "goodman-gzv7sa-central-ducted-cfg-300",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-301",
      slug: "goodman-gzv7sa-central-ducted-cfg-301",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-302",
      slug: "goodman-gzv7sa-central-ducted-cfg-302",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4210a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 40500,
      coolingCapacityMaxBtu: 40500,
      seer2: 17,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-303",
      slug: "goodman-gzv7sa-central-ducted-cfg-303",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-304",
      slug: "goodman-gzv7sa-central-ducted-cfg-304",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-305",
      slug: "goodman-gzv7sa-central-ducted-cfg-305",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-306",
      slug: "goodman-gzv7sa-central-ducted-cfg-306",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-307",
      slug: "goodman-gzv7sa-central-ducted-cfg-307",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-308",
      slug: "goodman-gzv7sa-central-ducted-cfg-308",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-309",
      slug: "goodman-gzv7sa-central-ducted-cfg-309",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-310",
      slug: "goodman-gzv7sa-central-ducted-cfg-310",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-311",
      slug: "goodman-gzv7sa-central-ducted-cfg-311",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-312",
      slug: "goodman-gzv7sa-central-ducted-cfg-312",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-313",
      slug: "goodman-gzv7sa-central-ducted-cfg-313",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-314",
      slug: "goodman-gzv7sa-central-ducted-cfg-314",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-315",
      slug: "goodman-gzv7sa-central-ducted-cfg-315",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-316",
      slug: "goodman-gzv7sa-central-ducted-cfg-316",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-317",
      slug: "goodman-gzv7sa-central-ducted-cfg-317",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-318",
      slug: "goodman-gzv7sa-central-ducted-cfg-318",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-319",
      slug: "goodman-gzv7sa-central-ducted-cfg-319",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-320",
      slug: "goodman-gzv7sa-central-ducted-cfg-320",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-321",
      slug: "goodman-gzv7sa-central-ducted-cfg-321",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-322",
      slug: "goodman-gzv7sa-central-ducted-cfg-322",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-323",
      slug: "goodman-gzv7sa-central-ducted-cfg-323",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-324",
      slug: "goodman-gzv7sa-central-ducted-cfg-324",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-325",
      slug: "goodman-gzv7sa-central-ducted-cfg-325",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-326",
      slug: "goodman-gzv7sa-central-ducted-cfg-326",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-327",
      slug: "goodman-gzv7sa-central-ducted-cfg-327",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-328",
      slug: "goodman-gzv7sa-central-ducted-cfg-328",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-329",
      slug: "goodman-gzv7sa-central-ducted-cfg-329",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-330",
      slug: "goodman-gzv7sa-central-ducted-cfg-330",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-331",
      slug: "goodman-gzv7sa-central-ducted-cfg-331",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45500,
      coolingCapacityMaxBtu: 45500,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-332",
      slug: "goodman-gzv7sa-central-ducted-cfg-332",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa4810a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46500,
      coolingCapacityMaxBtu: 46500,
      seer2: 17.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-333",
      slug: "goodman-gzv7sa-central-ducted-cfg-333",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-334",
      slug: "goodman-gzv7sa-central-ducted-cfg-334",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-335",
      slug: "goodman-gzv7sa-central-ducted-cfg-335",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-336",
      slug: "goodman-gzv7sa-central-ducted-cfg-336",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-337",
      slug: "goodman-gzv7sa-central-ducted-cfg-337",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-338",
      slug: "goodman-gzv7sa-central-ducted-cfg-338",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-339",
      slug: "goodman-gzv7sa-central-ducted-cfg-339",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-340",
      slug: "goodman-gzv7sa-central-ducted-cfg-340",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-341",
      slug: "goodman-gzv7sa-central-ducted-cfg-341",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-342",
      slug: "goodman-gzv7sa-central-ducted-cfg-342",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-343",
      slug: "goodman-gzv7sa-central-ducted-cfg-343",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-344",
      slug: "goodman-gzv7sa-central-ducted-cfg-344",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-345",
      slug: "goodman-gzv7sa-central-ducted-cfg-345",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-346",
      slug: "goodman-gzv7sa-central-ducted-cfg-346",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-347",
      slug: "goodman-gzv7sa-central-ducted-cfg-347",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-348",
      slug: "goodman-gzv7sa-central-ducted-cfg-348",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-349",
      slug: "goodman-gzv7sa-central-ducted-cfg-349",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-350",
      slug: "goodman-gzv7sa-central-ducted-cfg-350",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-351",
      slug: "goodman-gzv7sa-central-ducted-cfg-351",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-352",
      slug: "goodman-gzv7sa-central-ducted-cfg-352",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-353",
      slug: "goodman-gzv7sa-central-ducted-cfg-353",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-354",
      slug: "goodman-gzv7sa-central-ducted-cfg-354",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-355",
      slug: "goodman-gzv7sa-central-ducted-cfg-355",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-356",
      slug: "goodman-gzv7sa-central-ducted-cfg-356",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 18,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-357",
      slug: "goodman-gzv7sa-central-ducted-cfg-357",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-358",
      slug: "goodman-gzv7sa-central-ducted-cfg-358",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
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
      id: "goodman-gzv7sa-central-ducted-cfg-359",
      slug: "goodman-gzv7sa-central-ducted-cfg-359",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 15.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-360",
      slug: "goodman-gzv7sa-central-ducted-cfg-360",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16.5,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "goodman-gzv7sa-central-ducted-cfg-361",
      slug: "goodman-gzv7sa-central-ducted-cfg-361",
      modelId: "goodman-gzv7sa-central-ducted",
      outdoorUnitId: "goodman-gzv7sa6010a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "goodman-standard-wall-single-cfg-1",
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
      configurationId: "goodman-standard-wall-single-cfg-2",
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
      configurationId: "goodman-standard-wall-single-cfg-3",
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
      configurationId: "goodman-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-6",
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
      configurationId: "goodman-standard-wall-single-cfg-7",
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
      configurationId: "goodman-standard-wall-single-cfg-8",
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
      configurationId: "goodman-standard-wall-single-cfg-9",
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
      configurationId: "goodman-standard-wall-single-cfg-10",
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
      configurationId: "goodman-standard-wall-single-cfg-11",
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
      configurationId: "goodman-standard-wall-single-cfg-12",
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
      configurationId: "goodman-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-15",
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
      configurationId: "goodman-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-17",
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
      configurationId: "goodman-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-19",
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
      configurationId: "goodman-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-21",
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
      configurationId: "goodman-standard-wall-single-cfg-22",
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
      configurationId: "goodman-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-32",
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
      configurationId: "goodman-standard-wall-single-cfg-33",
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
      configurationId: "goodman-standard-wall-single-cfg-34",
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
      configurationId: "goodman-standard-wall-single-cfg-35",
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
      configurationId: "goodman-standard-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-39",
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
      configurationId: "goodman-standard-wall-single-cfg-40",
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
      configurationId: "goodman-standard-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-43",
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
      configurationId: "goodman-standard-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-45",
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
      configurationId: "goodman-standard-wall-single-cfg-46",
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
      configurationId: "goodman-standard-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-50",
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
      configurationId: "goodman-standard-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-52",
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
      configurationId: "goodman-standard-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-54",
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
      configurationId: "goodman-standard-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-57",
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
      configurationId: "goodman-standard-wall-single-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-59",
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
      configurationId: "goodman-standard-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-61",
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
      configurationId: "goodman-standard-wall-single-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-63",
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
      configurationId: "goodman-standard-wall-single-cfg-64",
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
      configurationId: "goodman-standard-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-74",
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
      configurationId: "goodman-standard-wall-single-cfg-75",
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
      configurationId: "goodman-standard-wall-single-cfg-76",
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
      configurationId: "goodman-standard-wall-single-cfg-77",
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
      configurationId: "goodman-standard-wall-single-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-81",
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
      configurationId: "goodman-standard-wall-single-cfg-82",
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
      configurationId: "goodman-standard-wall-single-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-85",
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
      configurationId: "goodman-standard-wall-single-cfg-86",
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
      configurationId: "goodman-standard-wall-single-cfg-87",
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
      configurationId: "goodman-standard-wall-single-cfg-88",
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
      configurationId: "goodman-standard-wall-single-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-90",
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
      configurationId: "goodman-standard-wall-single-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-92",
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
      configurationId: "goodman-standard-wall-single-cfg-93",
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
      configurationId: "goodman-standard-wall-single-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-95",
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
      configurationId: "goodman-standard-wall-single-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-99",
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
      configurationId: "goodman-standard-wall-single-cfg-100",
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
      configurationId: "goodman-standard-wall-single-cfg-101",
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
      configurationId: "goodman-standard-wall-single-cfg-102",
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
      configurationId: "goodman-standard-wall-single-cfg-103",
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
      configurationId: "goodman-standard-wall-single-cfg-104",
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
      configurationId: "goodman-standard-wall-single-cfg-105",
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
      configurationId: "goodman-standard-wall-single-cfg-106",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-107",
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
      configurationId: "goodman-standard-wall-single-cfg-108",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-109",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-110",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-111",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-112",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-113",
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
      configurationId: "goodman-standard-wall-single-cfg-114",
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
      configurationId: "goodman-standard-wall-single-cfg-115",
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
      configurationId: "goodman-standard-wall-single-cfg-116",
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
      configurationId: "goodman-standard-wall-single-cfg-117",
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
      configurationId: "goodman-standard-wall-single-cfg-118",
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
      configurationId: "goodman-standard-wall-single-cfg-119",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-120",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-121",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-122",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-123",
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
      configurationId: "goodman-standard-wall-single-cfg-124",
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
      configurationId: "goodman-standard-wall-single-cfg-125",
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
      configurationId: "goodman-standard-wall-single-cfg-126",
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
      configurationId: "goodman-standard-wall-single-cfg-127",
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
      configurationId: "goodman-standard-wall-single-cfg-128",
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
      configurationId: "goodman-standard-wall-single-cfg-129",
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
      configurationId: "goodman-standard-wall-single-cfg-130",
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
      configurationId: "goodman-standard-wall-single-cfg-131",
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
      configurationId: "goodman-standard-wall-single-cfg-132",
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
      configurationId: "goodman-standard-wall-single-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-137",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-138",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-139",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-142",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-143",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-144",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-145",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-wall-single-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-wall-single-cfg-1",
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
      configurationId: "goodman-msh-series-wall-single-cfg-2",
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
      configurationId: "goodman-msh-series-wall-single-cfg-3",
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
      configurationId: "goodman-msh-series-wall-single-cfg-4",
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
      configurationId: "goodman-msh-series-wall-single-cfg-5",
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
      configurationId: "goodman-msh-series-wall-single-cfg-6",
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
      configurationId: "goodman-msh-series-wall-single-cfg-7",
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
      configurationId: "goodman-msh-series-wall-single-cfg-8",
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
      configurationId: "goodman-msh-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: 2.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-wall-single-cfg-12",
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
      configurationId: "goodman-msh-series-wall-single-cfg-13",
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
      configurationId: "goodman-msh-series-wall-single-cfg-14",
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
      configurationId: "goodman-msh-series-wall-single-cfg-15",
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
      configurationId: "goodman-msh-series-wall-single-cfg-16",
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
      configurationId: "goodman-msh-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-wall-single-cfg-18",
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
      configurationId: "goodman-msh-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-wall-single-cfg-21",
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
      configurationId: "goodman-msh-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28600,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-msh-series-wall-single-cfg-23",
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
      configurationId: "goodman-msh-series-wall-single-cfg-24",
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
      configurationId: "goodman-msh-series-wall-single-cfg-25",
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
      configurationId: "goodman-msh-series-wall-single-cfg-26",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-1",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-2",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-3",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-4",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszv9-central-ducted-cfg-6",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-7",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-8",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-9",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-10",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-11",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-12",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-13",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-14",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-15",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-16",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-17",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-18",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-19",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-20",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-21",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-22",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-23",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-24",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-25",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-26",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-27",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-28",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-29",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-30",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-31",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-32",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-33",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-34",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-35",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-36",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-37",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-38",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-39",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-40",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-41",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-42",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-43",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-44",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-45",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-46",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-47",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-48",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-49",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-50",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-51",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-52",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-53",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-54",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-55",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-56",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-57",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-58",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszv9-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszv9-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gszv9-central-ducted-cfg-62",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-63",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-64",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-65",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-66",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-67",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-68",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-69",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-70",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-71",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-72",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-73",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-74",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-75",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-76",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-77",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-78",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-79",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-80",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-81",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-82",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-83",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-84",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-85",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-86",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-87",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-88",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-89",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-90",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-91",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-92",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-93",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-94",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-95",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-96",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-97",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-98",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-99",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-100",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-101",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-102",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-103",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-104",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-105",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-106",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-107",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-108",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-109",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-110",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-111",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-112",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-113",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-114",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-115",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-116",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-117",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-118",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-119",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-120",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-121",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-122",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-123",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-124",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-125",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-126",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-127",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-128",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-129",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-130",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-131",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-132",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-133",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-134",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-135",
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
      configurationId: "goodman-gszv9-central-ducted-cfg-136",
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
      configurationId: "goodman-standard-central-ducted-cfg-1",
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
      configurationId: "goodman-standard-central-ducted-cfg-2",
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
      configurationId: "goodman-standard-central-ducted-cfg-3",
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
      configurationId: "goodman-standard-central-ducted-cfg-4",
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
      configurationId: "goodman-standard-central-ducted-cfg-5",
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
      configurationId: "goodman-standard-central-ducted-cfg-6",
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
      configurationId: "goodman-standard-central-ducted-cfg-7",
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
      configurationId: "goodman-standard-central-ducted-cfg-8",
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
      configurationId: "goodman-standard-central-ducted-cfg-9",
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
      configurationId: "goodman-standard-central-ducted-cfg-10",
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
      configurationId: "goodman-standard-central-ducted-cfg-11",
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
      configurationId: "goodman-standard-central-ducted-cfg-12",
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
      configurationId: "goodman-standard-central-ducted-cfg-13",
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
      configurationId: "goodman-standard-central-ducted-cfg-14",
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
      configurationId: "goodman-standard-central-ducted-cfg-15",
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
      configurationId: "goodman-standard-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-52",
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
      configurationId: "goodman-standard-central-ducted-cfg-53",
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
      configurationId: "goodman-standard-central-ducted-cfg-54",
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
      configurationId: "goodman-standard-central-ducted-cfg-55",
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
      configurationId: "goodman-standard-central-ducted-cfg-56",
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
      configurationId: "goodman-standard-central-ducted-cfg-57",
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
      configurationId: "goodman-standard-central-ducted-cfg-58",
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
      configurationId: "goodman-standard-central-ducted-cfg-59",
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
      configurationId: "goodman-standard-central-ducted-cfg-60",
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
      configurationId: "goodman-standard-central-ducted-cfg-61",
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
      configurationId: "goodman-standard-central-ducted-cfg-62",
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
      configurationId: "goodman-standard-central-ducted-cfg-63",
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
      configurationId: "goodman-standard-central-ducted-cfg-64",
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
      configurationId: "goodman-standard-central-ducted-cfg-65",
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
      configurationId: "goodman-standard-central-ducted-cfg-66",
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
      configurationId: "goodman-standard-central-ducted-cfg-67",
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
      configurationId: "goodman-standard-central-ducted-cfg-68",
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
      configurationId: "goodman-standard-central-ducted-cfg-69",
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
      configurationId: "goodman-standard-central-ducted-cfg-70",
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
      configurationId: "goodman-standard-central-ducted-cfg-71",
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
      configurationId: "goodman-standard-central-ducted-cfg-72",
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
      configurationId: "goodman-standard-central-ducted-cfg-73",
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
      configurationId: "goodman-standard-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-87",
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
      configurationId: "goodman-standard-central-ducted-cfg-88",
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
      configurationId: "goodman-standard-central-ducted-cfg-89",
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
      configurationId: "goodman-standard-central-ducted-cfg-90",
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
      configurationId: "goodman-standard-central-ducted-cfg-91",
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
      configurationId: "goodman-standard-central-ducted-cfg-92",
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
      configurationId: "goodman-standard-central-ducted-cfg-93",
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
      configurationId: "goodman-standard-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-95",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-96",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-97",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-98",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-99",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-100",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-101",
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
      configurationId: "goodman-standard-central-ducted-cfg-102",
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
      configurationId: "goodman-standard-central-ducted-cfg-103",
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
      configurationId: "goodman-standard-central-ducted-cfg-104",
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
      configurationId: "goodman-standard-central-ducted-cfg-105",
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
      configurationId: "goodman-standard-central-ducted-cfg-106",
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
      configurationId: "goodman-standard-central-ducted-cfg-107",
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
      configurationId: "goodman-standard-central-ducted-cfg-108",
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
      configurationId: "goodman-standard-central-ducted-cfg-109",
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
      configurationId: "goodman-standard-central-ducted-cfg-110",
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
      configurationId: "goodman-standard-central-ducted-cfg-111",
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
      configurationId: "goodman-standard-central-ducted-cfg-112",
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
      configurationId: "goodman-standard-central-ducted-cfg-113",
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
      configurationId: "goodman-standard-central-ducted-cfg-114",
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
      configurationId: "goodman-standard-central-ducted-cfg-115",
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
      configurationId: "goodman-standard-central-ducted-cfg-116",
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
      configurationId: "goodman-standard-central-ducted-cfg-117",
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
      configurationId: "goodman-standard-central-ducted-cfg-118",
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
      configurationId: "goodman-standard-central-ducted-cfg-119",
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
      configurationId: "goodman-standard-central-ducted-cfg-120",
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
      configurationId: "goodman-standard-central-ducted-cfg-121",
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
      configurationId: "goodman-standard-central-ducted-cfg-122",
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
      configurationId: "goodman-standard-central-ducted-cfg-123",
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
      configurationId: "goodman-standard-central-ducted-cfg-124",
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
      configurationId: "goodman-standard-central-ducted-cfg-125",
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
      configurationId: "goodman-standard-central-ducted-cfg-126",
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
      configurationId: "goodman-standard-central-ducted-cfg-127",
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
      configurationId: "goodman-standard-central-ducted-cfg-128",
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
      configurationId: "goodman-standard-central-ducted-cfg-129",
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
      configurationId: "goodman-standard-central-ducted-cfg-130",
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
      configurationId: "goodman-standard-central-ducted-cfg-131",
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
      configurationId: "goodman-standard-central-ducted-cfg-132",
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
      configurationId: "goodman-standard-central-ducted-cfg-133",
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
      configurationId: "goodman-standard-central-ducted-cfg-134",
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
      configurationId: "goodman-standard-central-ducted-cfg-135",
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
      configurationId: "goodman-standard-central-ducted-cfg-136",
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
      configurationId: "goodman-standard-central-ducted-cfg-137",
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
      configurationId: "goodman-standard-central-ducted-cfg-138",
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
      configurationId: "goodman-standard-central-ducted-cfg-139",
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
      configurationId: "goodman-standard-central-ducted-cfg-140",
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
      configurationId: "goodman-standard-central-ducted-cfg-141",
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
      configurationId: "goodman-standard-central-ducted-cfg-142",
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
      configurationId: "goodman-standard-central-ducted-cfg-143",
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
      configurationId: "goodman-standard-central-ducted-cfg-144",
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
      configurationId: "goodman-standard-central-ducted-cfg-145",
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
      configurationId: "goodman-standard-central-ducted-cfg-146",
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
      configurationId: "goodman-standard-central-ducted-cfg-147",
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
      configurationId: "goodman-standard-central-ducted-cfg-148",
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
      configurationId: "goodman-standard-central-ducted-cfg-149",
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
      configurationId: "goodman-standard-central-ducted-cfg-150",
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
      configurationId: "goodman-standard-central-ducted-cfg-151",
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
      configurationId: "goodman-standard-central-ducted-cfg-152",
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
      configurationId: "goodman-standard-central-ducted-cfg-153",
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
      configurationId: "goodman-standard-central-ducted-cfg-154",
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
      configurationId: "goodman-standard-central-ducted-cfg-155",
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
      configurationId: "goodman-standard-central-ducted-cfg-156",
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
      configurationId: "goodman-standard-central-ducted-cfg-157",
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
      configurationId: "goodman-standard-central-ducted-cfg-158",
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
      configurationId: "goodman-standard-central-ducted-cfg-159",
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
      configurationId: "goodman-standard-central-ducted-cfg-160",
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
      configurationId: "goodman-standard-central-ducted-cfg-161",
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
      configurationId: "goodman-standard-central-ducted-cfg-162",
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
      configurationId: "goodman-standard-central-ducted-cfg-163",
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
      configurationId: "goodman-standard-central-ducted-cfg-164",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-173",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-174",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-175",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-176",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-190",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-191",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-192",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-194",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-196",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-197",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-198",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-199",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-200",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-201",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-202",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-203",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-204",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-205",
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
      configurationId: "goodman-standard-central-ducted-cfg-206",
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
      configurationId: "goodman-standard-central-ducted-cfg-207",
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
      configurationId: "goodman-standard-central-ducted-cfg-208",
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
      configurationId: "goodman-standard-central-ducted-cfg-209",
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
      configurationId: "goodman-standard-central-ducted-cfg-210",
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
      configurationId: "goodman-standard-central-ducted-cfg-211",
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
      configurationId: "goodman-standard-central-ducted-cfg-212",
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
      configurationId: "goodman-standard-central-ducted-cfg-213",
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
      configurationId: "goodman-standard-central-ducted-cfg-214",
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
      configurationId: "goodman-standard-central-ducted-cfg-215",
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
      configurationId: "goodman-standard-central-ducted-cfg-216",
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
      configurationId: "goodman-standard-central-ducted-cfg-217",
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
      configurationId: "goodman-standard-central-ducted-cfg-218",
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
      configurationId: "goodman-standard-central-ducted-cfg-219",
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
      configurationId: "goodman-standard-central-ducted-cfg-220",
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
      configurationId: "goodman-standard-central-ducted-cfg-221",
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
      configurationId: "goodman-standard-central-ducted-cfg-222",
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
      configurationId: "goodman-standard-central-ducted-cfg-223",
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
      configurationId: "goodman-standard-central-ducted-cfg-224",
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
      configurationId: "goodman-standard-central-ducted-cfg-225",
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
      configurationId: "goodman-standard-central-ducted-cfg-226",
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
      configurationId: "goodman-standard-central-ducted-cfg-227",
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
      configurationId: "goodman-standard-central-ducted-cfg-228",
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
      configurationId: "goodman-standard-central-ducted-cfg-229",
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
      configurationId: "goodman-standard-central-ducted-cfg-230",
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
      configurationId: "goodman-standard-central-ducted-cfg-231",
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
      configurationId: "goodman-standard-central-ducted-cfg-232",
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
      configurationId: "goodman-standard-central-ducted-cfg-233",
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
      configurationId: "goodman-standard-central-ducted-cfg-234",
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
      configurationId: "goodman-standard-central-ducted-cfg-235",
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
      configurationId: "goodman-standard-central-ducted-cfg-236",
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
      configurationId: "goodman-standard-central-ducted-cfg-237",
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
      configurationId: "goodman-standard-central-ducted-cfg-238",
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
      configurationId: "goodman-standard-central-ducted-cfg-239",
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
      configurationId: "goodman-standard-central-ducted-cfg-240",
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
      configurationId: "goodman-standard-central-ducted-cfg-241",
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
      configurationId: "goodman-standard-central-ducted-cfg-242",
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
      configurationId: "goodman-standard-central-ducted-cfg-243",
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
      configurationId: "goodman-standard-central-ducted-cfg-244",
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
      configurationId: "goodman-standard-central-ducted-cfg-245",
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
      configurationId: "goodman-standard-central-ducted-cfg-246",
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
      configurationId: "goodman-standard-central-ducted-cfg-247",
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
      configurationId: "goodman-standard-central-ducted-cfg-248",
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
      configurationId: "goodman-standard-central-ducted-cfg-249",
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
      configurationId: "goodman-standard-central-ducted-cfg-250",
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
      configurationId: "goodman-standard-central-ducted-cfg-251",
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
      configurationId: "goodman-standard-central-ducted-cfg-252",
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
      configurationId: "goodman-standard-central-ducted-cfg-253",
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
      configurationId: "goodman-standard-central-ducted-cfg-254",
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
      configurationId: "goodman-standard-central-ducted-cfg-255",
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
      configurationId: "goodman-standard-central-ducted-cfg-256",
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
      configurationId: "goodman-standard-central-ducted-cfg-257",
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
      configurationId: "goodman-standard-central-ducted-cfg-258",
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
      configurationId: "goodman-standard-central-ducted-cfg-259",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-260",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-261",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-262",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-263",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-264",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-265",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-266",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-267",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-268",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-269",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-270",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-271",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-272",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-273",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-274",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-275",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-276",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-277",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-278",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-279",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-280",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-281",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-282",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-283",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-284",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-285",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-286",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-287",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-288",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-289",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-290",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-291",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-292",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-293",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-294",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-295",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-296",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-297",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-298",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-299",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-300",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-301",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-302",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-303",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-304",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-305",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-306",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-307",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-308",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-309",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-310",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-311",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-312",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-313",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-314",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-315",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-316",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-317",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-318",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-319",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-320",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-321",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-322",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-323",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-324",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-325",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-326",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-327",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-328",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-329",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-330",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-331",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-332",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-333",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-334",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-335",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-336",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-337",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-338",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-339",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-340",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-341",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-342",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-343",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-344",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-345",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-346",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-347",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-348",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-349",
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
      configurationId: "goodman-standard-central-ducted-cfg-350",
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
      configurationId: "goodman-standard-central-ducted-cfg-351",
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
      configurationId: "goodman-standard-central-ducted-cfg-352",
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
      configurationId: "goodman-standard-central-ducted-cfg-353",
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
      configurationId: "goodman-standard-central-ducted-cfg-354",
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
      configurationId: "goodman-standard-central-ducted-cfg-355",
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
      configurationId: "goodman-standard-central-ducted-cfg-356",
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
      configurationId: "goodman-standard-central-ducted-cfg-357",
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
      configurationId: "goodman-standard-central-ducted-cfg-358",
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
      configurationId: "goodman-standard-central-ducted-cfg-359",
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
      configurationId: "goodman-standard-central-ducted-cfg-360",
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
      configurationId: "goodman-standard-central-ducted-cfg-361",
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
      configurationId: "goodman-standard-central-ducted-cfg-362",
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
      configurationId: "goodman-standard-central-ducted-cfg-363",
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
      configurationId: "goodman-standard-central-ducted-cfg-364",
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
      configurationId: "goodman-standard-central-ducted-cfg-365",
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
      configurationId: "goodman-standard-central-ducted-cfg-366",
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
      configurationId: "goodman-standard-central-ducted-cfg-367",
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
      configurationId: "goodman-standard-central-ducted-cfg-368",
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
      configurationId: "goodman-standard-central-ducted-cfg-369",
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
      configurationId: "goodman-standard-central-ducted-cfg-370",
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
      configurationId: "goodman-standard-central-ducted-cfg-371",
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
      configurationId: "goodman-standard-central-ducted-cfg-372",
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
      configurationId: "goodman-standard-central-ducted-cfg-373",
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
      configurationId: "goodman-standard-central-ducted-cfg-374",
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
      configurationId: "goodman-standard-central-ducted-cfg-375",
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
      configurationId: "goodman-standard-central-ducted-cfg-376",
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
      configurationId: "goodman-standard-central-ducted-cfg-377",
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
      configurationId: "goodman-standard-central-ducted-cfg-378",
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
      configurationId: "goodman-standard-central-ducted-cfg-379",
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
      configurationId: "goodman-standard-central-ducted-cfg-380",
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
      configurationId: "goodman-standard-central-ducted-cfg-381",
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
      configurationId: "goodman-standard-central-ducted-cfg-382",
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
      configurationId: "goodman-standard-central-ducted-cfg-383",
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
      configurationId: "goodman-standard-central-ducted-cfg-384",
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
      configurationId: "goodman-standard-central-ducted-cfg-385",
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
      configurationId: "goodman-standard-central-ducted-cfg-386",
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
      configurationId: "goodman-standard-central-ducted-cfg-387",
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
      configurationId: "goodman-standard-central-ducted-cfg-388",
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
      configurationId: "goodman-standard-central-ducted-cfg-389",
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
      configurationId: "goodman-standard-central-ducted-cfg-390",
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
      configurationId: "goodman-standard-central-ducted-cfg-391",
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
      configurationId: "goodman-standard-central-ducted-cfg-392",
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
      configurationId: "goodman-standard-central-ducted-cfg-393",
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
      configurationId: "goodman-standard-central-ducted-cfg-394",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-395",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-396",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-397",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-398",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-399",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-400",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-401",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-402",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-403",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-404",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-405",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-406",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-407",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-408",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-409",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-410",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-411",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-412",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-413",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-414",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-415",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-416",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-417",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-418",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-419",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-420",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-421",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-422",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-423",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-424",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-425",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-426",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-427",
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
      configurationId: "goodman-standard-central-ducted-cfg-428",
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
      configurationId: "goodman-standard-central-ducted-cfg-429",
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
      configurationId: "goodman-standard-central-ducted-cfg-430",
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
      configurationId: "goodman-standard-central-ducted-cfg-431",
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
      configurationId: "goodman-standard-central-ducted-cfg-432",
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
      configurationId: "goodman-standard-central-ducted-cfg-433",
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
      configurationId: "goodman-standard-central-ducted-cfg-434",
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
      configurationId: "goodman-standard-central-ducted-cfg-435",
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
      configurationId: "goodman-standard-central-ducted-cfg-436",
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
      configurationId: "goodman-standard-central-ducted-cfg-437",
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
      configurationId: "goodman-standard-central-ducted-cfg-438",
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
      configurationId: "goodman-standard-central-ducted-cfg-439",
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
      configurationId: "goodman-standard-central-ducted-cfg-440",
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
      configurationId: "goodman-standard-central-ducted-cfg-441",
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
      configurationId: "goodman-standard-central-ducted-cfg-442",
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
      configurationId: "goodman-standard-central-ducted-cfg-443",
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
      configurationId: "goodman-standard-central-ducted-cfg-444",
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
      configurationId: "goodman-standard-central-ducted-cfg-445",
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
      configurationId: "goodman-standard-central-ducted-cfg-446",
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
      configurationId: "goodman-standard-central-ducted-cfg-447",
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
      configurationId: "goodman-standard-central-ducted-cfg-448",
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
      configurationId: "goodman-standard-central-ducted-cfg-449",
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
      configurationId: "goodman-standard-central-ducted-cfg-450",
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
      configurationId: "goodman-standard-central-ducted-cfg-451",
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
      configurationId: "goodman-standard-central-ducted-cfg-452",
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
      configurationId: "goodman-standard-central-ducted-cfg-453",
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
      configurationId: "goodman-standard-central-ducted-cfg-454",
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
      configurationId: "goodman-standard-central-ducted-cfg-455",
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
      configurationId: "goodman-standard-central-ducted-cfg-456",
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
      configurationId: "goodman-standard-central-ducted-cfg-457",
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
      configurationId: "goodman-standard-central-ducted-cfg-458",
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
      configurationId: "goodman-standard-central-ducted-cfg-459",
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
      configurationId: "goodman-standard-central-ducted-cfg-460",
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
      configurationId: "goodman-standard-central-ducted-cfg-461",
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
      configurationId: "goodman-standard-central-ducted-cfg-462",
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
      configurationId: "goodman-standard-central-ducted-cfg-463",
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
      configurationId: "goodman-standard-central-ducted-cfg-464",
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
      configurationId: "goodman-standard-central-ducted-cfg-465",
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
      configurationId: "goodman-standard-central-ducted-cfg-466",
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
      configurationId: "goodman-standard-central-ducted-cfg-467",
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
      configurationId: "goodman-standard-central-ducted-cfg-468",
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
      configurationId: "goodman-standard-central-ducted-cfg-469",
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
      configurationId: "goodman-standard-central-ducted-cfg-470",
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
      configurationId: "goodman-standard-central-ducted-cfg-471",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-472",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-473",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-474",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-475",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-476",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-477",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-478",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-479",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-480",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-481",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-482",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-483",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-484",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-485",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-486",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-487",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-488",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-489",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-490",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-491",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-492",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-493",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-494",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-495",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-496",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-497",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-498",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-499",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-500",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-501",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-502",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-503",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-504",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-505",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-506",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-507",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-508",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-509",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-510",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-511",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-512",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-513",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-514",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-515",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-516",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-517",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-518",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-519",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-520",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-521",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-522",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-523",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-524",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-525",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-526",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-527",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-528",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-529",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-530",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-531",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-532",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-533",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-534",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-535",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-536",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-537",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-538",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-539",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-540",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-541",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-standard-central-ducted-cfg-542",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-mst-series-wall-single-cfg-1",
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
      configurationId: "goodman-mst-series-wall-single-cfg-2",
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
      configurationId: "goodman-mst-series-wall-single-cfg-3",
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
      configurationId: "goodman-mst-series-wall-single-cfg-4",
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
      configurationId: "goodman-mst-series-wall-single-cfg-5",
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
      configurationId: "goodman-mst-series-wall-single-cfg-6",
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
      configurationId: "goodman-mst-series-wall-single-cfg-7",
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
      configurationId: "goodman-mst-series-wall-single-cfg-8",
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
      configurationId: "goodman-gzv6sa-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv6sa-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-2",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-6",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-7",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-8",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-9",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-10",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-11",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-12",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-21",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-22",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-23",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-24",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-25",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-26",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-45",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-54",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-57",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-67",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-74",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-76",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-78",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-79",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-80",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-81",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-82",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-83",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-84",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-85",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-86",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-87",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-88",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-89",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-90",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-91",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-92",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-93",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-94",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-95",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-96",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-97",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-98",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-99",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-100",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-101",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-102",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-103",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-104",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-105",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-106",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-107",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-108",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-109",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-110",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-111",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-112",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-113",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-114",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-115",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-116",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-117",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-118",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-119",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-120",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-121",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-122",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-123",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-124",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-125",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-126",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-127",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-128",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-129",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-130",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-131",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-132",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-133",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-134",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-135",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-136",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-137",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-138",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-139",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-140",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-141",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-142",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-143",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-144",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-145",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-146",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-147",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-148",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-149",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-150",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-151",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-152",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-153",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-154",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-155",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-156",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-157",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-158",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-159",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-160",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-161",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-162",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-163",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-164",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-165",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-166",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-167",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-168",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-169",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-170",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-171",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-172",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-173",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-174",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-175",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-176",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-177",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-178",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-179",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-180",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-181",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-182",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-183",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-184",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-185",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-186",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-187",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-188",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-189",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-190",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-191",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-192",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-193",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-194",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-195",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-196",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-197",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-198",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-199",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-200",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-201",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-202",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-203",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-204",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-205",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-206",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-207",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-208",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-209",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-210",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-211",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-212",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-213",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-214",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-215",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-216",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-217",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-218",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-219",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-220",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-221",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-222",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-223",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-224",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-225",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-226",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-227",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-228",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-229",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-230",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-231",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-232",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-233",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-234",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-235",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-236",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-237",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-238",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-239",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-240",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-241",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-242",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-243",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-244",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-245",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-246",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-247",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-248",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-249",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-250",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-251",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-252",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-253",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-254",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-255",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-256",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-257",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-258",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-259",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-260",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-261",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-262",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-263",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-264",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-265",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-266",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-267",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-268",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-269",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-270",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-271",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-272",
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
      configurationId: "goodman-gzv7sa-central-ducted-cfg-273",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-274",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-275",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-276",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-277",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-278",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-279",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-280",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-281",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-282",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-283",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-284",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-285",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-286",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-287",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-288",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-289",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-290",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-291",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-292",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-293",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-294",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-295",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-296",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-297",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-298",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-299",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-300",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-301",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-302",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-303",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-304",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-305",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-306",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-307",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-308",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-309",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-310",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-311",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-312",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-313",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-314",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-315",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-316",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-317",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-318",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-319",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-320",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-321",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-322",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-323",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-324",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-325",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-326",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-327",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-328",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-329",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-330",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-331",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-332",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-333",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-334",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-335",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-336",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-337",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-338",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-339",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-340",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-341",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-342",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-343",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-344",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-345",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-346",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-347",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-348",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-349",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-350",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-351",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-352",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-353",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-354",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-355",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-356",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-357",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-358",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-359",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-360",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "goodman-gzv7sa-central-ducted-cfg-361",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33400,
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
