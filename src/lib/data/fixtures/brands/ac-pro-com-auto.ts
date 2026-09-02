import type { BrandDataset } from "../../types";

export const acprocomDataset: BrandDataset = {
  brand: {
    id: "ac-pro-com",
    slug: "ac-pro-com",
    name: "AC PRO.COM",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "ac-pro-com-standard",
      slug: "ac-pro-com-standard",
      name: "Standard",
      brandId: "ac-pro-com",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-avc-series",
      slug: "ac-pro-com-avc-series",
      name: "AVC series",
      brandId: "ac-pro-com",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-a-series",
      slug: "ac-pro-com-a-series",
      name: "A series",
      brandId: "ac-pro-com",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aox-series",
      slug: "ac-pro-com-aox-series",
      name: "AOX Series",
      brandId: "ac-pro-com",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aod-series",
      slug: "ac-pro-com-aod-series",
      name: "AOD Series",
      brandId: "ac-pro-com",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-avbl-series",
      slug: "ac-pro-com-avbl-series",
      name: "AVBL series",
      brandId: "ac-pro-com",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aoe-series",
      slug: "ac-pro-com-aoe-series",
      name: "AOE Series",
      brandId: "ac-pro-com",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-sphp-series",
      slug: "ac-pro-com-sphp-series",
      name: "SPHP Series",
      brandId: "ac-pro-com",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "ac-pro-com-standard-wall-single",
      slug: "ac-pro-com-standard-wall-single",
      name: "Standard",
      seriesId: "ac-pro-com-standard",
      brandId: "ac-pro-com",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
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
      id: "ac-pro-com-avc-series-central-ducted",
      slug: "ac-pro-com-avc-series-central-ducted",
      name: "AVC series",
      seriesId: "ac-pro-com-avc-series",
      brandId: "ac-pro-com",
      modelNumber: "AVC series",
      normalizedModelNumber: "avc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 17000,
      heatingCapacity5FMaxBtu: 22600,
      seer2Min: 17,
      seer2Max: 17,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 2.1,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-a-series-wall-single",
      slug: "ac-pro-com-a-series-wall-single",
      name: "A series",
      seriesId: "ac-pro-com-a-series",
      brandId: "ac-pro-com",
      modelNumber: "A series",
      normalizedModelNumber: "a-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 19,
      seer2Max: 25.5,
      hspf2Min: 8.7,
      hspf2Max: 12.3,
      cop5FMin: 1.8,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aox-series-central-ducted",
      slug: "ac-pro-com-aox-series-central-ducted",
      name: "AOX Series",
      seriesId: "ac-pro-com-aox-series",
      brandId: "ac-pro-com",
      modelNumber: "AOX Series",
      normalizedModelNumber: "aox-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 22600,
      seer2Min: 15.7,
      seer2Max: 16.5,
      hspf2Min: 8.6,
      hspf2Max: 9.8,
      cop5FMin: 1.93,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aod-series-central-ducted",
      slug: "ac-pro-com-aod-series-central-ducted",
      name: "AOD Series",
      seriesId: "ac-pro-com-aod-series",
      brandId: "ac-pro-com",
      modelNumber: "AOD Series",
      normalizedModelNumber: "aod-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 20400,
      heatingCapacity5FMaxBtu: 20400,
      seer2Min: 17.5,
      seer2Max: 17.5,
      hspf2Min: 8.4,
      hspf2Max: 8.4,
      cop5FMin: 1.81,
      cop5FMax: 1.81,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-avbl-series-central-ducted",
      slug: "ac-pro-com-avbl-series-central-ducted",
      name: "AVBL series",
      seriesId: "ac-pro-com-avbl-series",
      brandId: "ac-pro-com",
      modelNumber: "AVBL series",
      normalizedModelNumber: "avbl-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 32800,
      seer2Min: 17,
      seer2Max: 19,
      hspf2Min: 8.8,
      hspf2Max: 9.9,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aoe-series-wall-single",
      slug: "ac-pro-com-aoe-series-wall-single",
      name: "AOE Series",
      seriesId: "ac-pro-com-aoe-series",
      brandId: "ac-pro-com",
      modelNumber: "AOE Series",
      normalizedModelNumber: "aoe-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 29000,
      heatingCapacity5FMaxBtu: 34000,
      seer2Min: 18.9,
      seer2Max: 18.9,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-sphp-series-central-ducted",
      slug: "ac-pro-com-sphp-series-central-ducted",
      name: "SPHP Series",
      seriesId: "ac-pro-com-sphp-series",
      brandId: "ac-pro-com",
      modelNumber: "SPHP Series",
      normalizedModelNumber: "sphp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 11800,
      heatingCapacity5FMaxBtu: 25600,
      seer2Min: 16.1,
      seer2Max: 19,
      hspf2Min: 8.7,
      hspf2Max: 10.1,
      cop5FMin: 1.8,
      cop5FMax: 2.14,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "ac-pro-com-aoba30-09hfn1-mt0w",
      modelNumber: "AOBA30-09HFN1-MT0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aoca31-18hfn1-mt0w",
      modelNumber: "AOCA31-18HFN1-MT0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod31-24hfn1-mt0w",
      modelNumber: "AOD31-24HFN1-MT0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30u-36hfn1-m",
      modelNumber: "AOD30U-36HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aoe30u-48hfn1-m",
      modelNumber: "AOE30U-48HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aob30-12hfn1-mt0w",
      modelNumber: "AOB30-12HFN1-MT0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aoba30-09hfn1-bs0w",
      modelNumber: "AOBA30-09HFN1-BS0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aob30-18hfn1-ms0w",
      modelNumber: "AOB30-18HFN1-MS0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30u-36hfn1-mp0",
      modelNumber: "AOD30U-36HFN1-MP0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aoe30u-48hfn1-mp0",
      modelNumber: "AOE30U-48HFN1-MP0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-a2of-18hfn1-m",
      modelNumber: "A2OF-18HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-a4of-36hfn1-m",
      modelNumber: "A4OF-36HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30u-36hfn1-mr0",
      modelNumber: "AOD30U-36HFN1-MR0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aoe30u-48hfn1-mr0",
      modelNumber: "AOE30U-48HFN1-MR0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aoe30u-60hfn1-mr0",
      modelNumber: "AOE30U-60HFN1-MR0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox330-18hfn1-ms0w",
      modelNumber: "AOX330-18HFN1-MS0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod31-36hfn1-mp0w",
      modelNumber: "AOD31-36HFN1-MP0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30u-30hfn1-mr0",
      modelNumber: "AOD30U-30HFN1-MR0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30u-36hfn1-mp0-ga",
      modelNumber: "AOD30U-36HFN1-MP0(GA)",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-a5oa-55hfn1-m",
      modelNumber: "A5OA-55HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30u-36hfn1-m-ga",
      modelNumber: "AOD30U-36HFN1-M(GA)",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-sphp-y-v030bb",
      modelNumber: "SPHP-Y-V030BB",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox430-24hfn1-mr0",
      modelNumber: "AOX430-24HFN1-MR0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-a2oa-18hfn1-m",
      modelNumber: "A2OA-18HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-a3oj-27hfn1-m",
      modelNumber: "A3OJ-27HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-a4og-36hfn1-m",
      modelNumber: "A4OG-36HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-a5og-48hfn1-m",
      modelNumber: "A5OG-48HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox230-09hfn1-bs5w",
      modelNumber: "AOX230-09HFN1-BS5W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox230-09hfn1-mt0w",
      modelNumber: "AOX230-09HFN1-MT0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox230-09hfn1-mw5w",
      modelNumber: "AOX230-09HFN1-MW5W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox230-12hfn1-mv5w",
      modelNumber: "AOX230-12HFN1-MV5W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox430-18hfn1-mu0w",
      modelNumber: "AOX430-18HFN1-MU0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod32-24hfn1-mt0w",
      modelNumber: "AOD32-24HFN1-MT0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox330-09hfn1-my5w",
      modelNumber: "AOX330-09HFN1-MY5W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox330-12hfn1-mw5w",
      modelNumber: "AOX330-12HFN1-MW5W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox430-17hfn1-mt0w",
      modelNumber: "AOX430-17HFN1-MT0W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox430-18hfn1-mt8w",
      modelNumber: "AOX430-18HFN1-MT8W",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox330-18hfn1-mr0",
      modelNumber: "AOX330-18HFN1-MR0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox330u-18hfn1-mr0",
      modelNumber: "AOX330U-18HFN1-MR0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox430u-24hfn1-mr0",
      modelNumber: "AOX430U-24HFN1-MR0",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30u-30hfn1-m-ga",
      modelNumber: "AOD30U-30HFN1-M(GA)",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aox430u-18hfn1-m",
      modelNumber: "AOX430U-18HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30-24hfn1-mw",
      modelNumber: "AOD30-24HFN1-MW",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aod30u-30hfn1-mr0-x",
      modelNumber: "AOD30U-30HFN1-MR0(X)",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aoe31u-36hfn1-m",
      modelNumber: "AOE31U-36HFN1-M",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-aoe30u-48hfn1-mp0-ga",
      modelNumber: "AOE30U-48HFN1-MP0(GA)",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-sphp-y-v018bb",
      modelNumber: "SPHP-Y-V018BB",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-sphp-y-v024bb",
      modelNumber: "SPHP-Y-V024BB",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-sphp-y-v036bb",
      modelNumber: "SPHP-Y-V036BB",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-sphp-z-v018bb",
      modelNumber: "SPHP-Z-V018BB",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    },
    {
      id: "ac-pro-com-sphp-z-v024bb",
      modelNumber: "SPHP-Z-V024BB",
      brandId: "ac-pro-com",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "ac-pro-com-standard-wall-single-cfg-1",
      slug: "ac-pro-com-standard-wall-single-cfg-1",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoba30-09hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-2",
      slug: "ac-pro-com-standard-wall-single-cfg-2",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoca31-18hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-3",
      slug: "ac-pro-com-standard-wall-single-cfg-3",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod31-24hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-4",
      slug: "ac-pro-com-standard-wall-single-cfg-4",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-5",
      slug: "ac-pro-com-standard-wall-single-cfg-5",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-6",
      slug: "ac-pro-com-standard-wall-single-cfg-6",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoba30-09hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-7",
      slug: "ac-pro-com-standard-wall-single-cfg-7",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aob30-12hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-8",
      slug: "ac-pro-com-standard-wall-single-cfg-8",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoca31-18hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-9",
      slug: "ac-pro-com-standard-wall-single-cfg-9",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod31-24hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-10",
      slug: "ac-pro-com-standard-wall-single-cfg-10",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-11",
      slug: "ac-pro-com-standard-wall-single-cfg-11",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-12",
      slug: "ac-pro-com-standard-wall-single-cfg-12",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aob30-12hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-13",
      slug: "ac-pro-com-standard-wall-single-cfg-13",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoca31-18hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-14",
      slug: "ac-pro-com-standard-wall-single-cfg-14",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod31-24hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-15",
      slug: "ac-pro-com-standard-wall-single-cfg-15",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-16",
      slug: "ac-pro-com-standard-wall-single-cfg-16",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoba30-09hfn1-bs0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-17",
      slug: "ac-pro-com-standard-wall-single-cfg-17",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aob30-18hfn1-ms0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-18",
      slug: "ac-pro-com-standard-wall-single-cfg-18",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mp0",
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
      id: "ac-pro-com-standard-wall-single-cfg-19",
      slug: "ac-pro-com-standard-wall-single-cfg-19",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-mp0",
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
      id: "ac-pro-com-standard-wall-single-cfg-20",
      slug: "ac-pro-com-standard-wall-single-cfg-20",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-a2of-18hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-21",
      slug: "ac-pro-com-standard-wall-single-cfg-21",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-a4of-36hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-22",
      slug: "ac-pro-com-standard-wall-single-cfg-22",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoba30-09hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-23",
      slug: "ac-pro-com-standard-wall-single-cfg-23",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aob30-12hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-24",
      slug: "ac-pro-com-standard-wall-single-cfg-24",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoca31-18hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-25",
      slug: "ac-pro-com-standard-wall-single-cfg-25",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod31-24hfn1-mt0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-26",
      slug: "ac-pro-com-standard-wall-single-cfg-26",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-27",
      slug: "ac-pro-com-standard-wall-single-cfg-27",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-28",
      slug: "ac-pro-com-standard-wall-single-cfg-28",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-60hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-29",
      slug: "ac-pro-com-standard-wall-single-cfg-29",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aox330-18hfn1-ms0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-30",
      slug: "ac-pro-com-standard-wall-single-cfg-30",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod31-36hfn1-mp0w",
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
      id: "ac-pro-com-standard-wall-single-cfg-31",
      slug: "ac-pro-com-standard-wall-single-cfg-31",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-30hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-32",
      slug: "ac-pro-com-standard-wall-single-cfg-32",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-33",
      slug: "ac-pro-com-standard-wall-single-cfg-33",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-34",
      slug: "ac-pro-com-standard-wall-single-cfg-34",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-60hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-35",
      slug: "ac-pro-com-standard-wall-single-cfg-35",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mp0-ga",
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
      id: "ac-pro-com-standard-wall-single-cfg-36",
      slug: "ac-pro-com-standard-wall-single-cfg-36",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-a5oa-55hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-37",
      slug: "ac-pro-com-standard-wall-single-cfg-37",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-a5oa-55hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-38",
      slug: "ac-pro-com-standard-wall-single-cfg-38",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-a5oa-55hfn1-m",
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
      id: "ac-pro-com-standard-wall-single-cfg-39",
      slug: "ac-pro-com-standard-wall-single-cfg-39",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-m-ga",
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
      id: "ac-pro-com-standard-wall-single-cfg-40",
      slug: "ac-pro-com-standard-wall-single-cfg-40",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mp0-ga",
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
      id: "ac-pro-com-standard-wall-single-cfg-41",
      slug: "ac-pro-com-standard-wall-single-cfg-41",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mp0-ga",
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
      id: "ac-pro-com-standard-wall-single-cfg-42",
      slug: "ac-pro-com-standard-wall-single-cfg-42",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-43",
      slug: "ac-pro-com-standard-wall-single-cfg-43",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-44",
      slug: "ac-pro-com-standard-wall-single-cfg-44",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-60hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-45",
      slug: "ac-pro-com-standard-wall-single-cfg-45",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-30hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-46",
      slug: "ac-pro-com-standard-wall-single-cfg-46",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-47",
      slug: "ac-pro-com-standard-wall-single-cfg-47",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-30hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-48",
      slug: "ac-pro-com-standard-wall-single-cfg-48",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-aod30u-36hfn1-mr0",
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
      id: "ac-pro-com-standard-wall-single-cfg-49",
      slug: "ac-pro-com-standard-wall-single-cfg-49",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-sphp-y-v030bb",
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
      id: "ac-pro-com-standard-wall-single-cfg-50",
      slug: "ac-pro-com-standard-wall-single-cfg-50",
      modelId: "ac-pro-com-standard-wall-single",
      outdoorUnitId: "ac-pro-com-sphp-y-v030bb",
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
      id: "ac-pro-com-avc-series-central-ducted-cfg-1",
      slug: "ac-pro-com-avc-series-central-ducted-cfg-1",
      modelId: "ac-pro-com-avc-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox430-24hfn1-mr0",
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
      id: "ac-pro-com-avc-series-central-ducted-cfg-2",
      slug: "ac-pro-com-avc-series-central-ducted-cfg-2",
      modelId: "ac-pro-com-avc-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox430-24hfn1-mr0",
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
      id: "ac-pro-com-avc-series-central-ducted-cfg-3",
      slug: "ac-pro-com-avc-series-central-ducted-cfg-3",
      modelId: "ac-pro-com-avc-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox430-24hfn1-mr0",
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
      id: "ac-pro-com-avc-series-central-ducted-cfg-4",
      slug: "ac-pro-com-avc-series-central-ducted-cfg-4",
      modelId: "ac-pro-com-avc-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox430-24hfn1-mr0",
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
      id: "ac-pro-com-a-series-wall-single-cfg-1",
      slug: "ac-pro-com-a-series-wall-single-cfg-1",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a2oa-18hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-2",
      slug: "ac-pro-com-a-series-wall-single-cfg-2",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a3oj-27hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-3",
      slug: "ac-pro-com-a-series-wall-single-cfg-3",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a3oj-27hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-4",
      slug: "ac-pro-com-a-series-wall-single-cfg-4",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a4og-36hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-5",
      slug: "ac-pro-com-a-series-wall-single-cfg-5",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a5og-48hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-6",
      slug: "ac-pro-com-a-series-wall-single-cfg-6",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a5og-48hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-7",
      slug: "ac-pro-com-a-series-wall-single-cfg-7",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a2oa-18hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-8",
      slug: "ac-pro-com-a-series-wall-single-cfg-8",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a2oa-18hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-9",
      slug: "ac-pro-com-a-series-wall-single-cfg-9",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a3oj-27hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-10",
      slug: "ac-pro-com-a-series-wall-single-cfg-10",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-a5og-48hfn1-m",
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
      id: "ac-pro-com-a-series-wall-single-cfg-11",
      slug: "ac-pro-com-a-series-wall-single-cfg-11",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-09hfn1-bs5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-12",
      slug: "ac-pro-com-a-series-wall-single-cfg-12",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-09hfn1-mt0w",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-a-series-wall-single-cfg-13",
      slug: "ac-pro-com-a-series-wall-single-cfg-13",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-09hfn1-mw5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-14",
      slug: "ac-pro-com-a-series-wall-single-cfg-14",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-12hfn1-mv5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-15",
      slug: "ac-pro-com-a-series-wall-single-cfg-15",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-18hfn1-mu0w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-16",
      slug: "ac-pro-com-a-series-wall-single-cfg-16",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aod32-24hfn1-mt0w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-17",
      slug: "ac-pro-com-a-series-wall-single-cfg-17",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox330-09hfn1-my5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-18",
      slug: "ac-pro-com-a-series-wall-single-cfg-18",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox330-12hfn1-mw5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-19",
      slug: "ac-pro-com-a-series-wall-single-cfg-19",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-17hfn1-mt0w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-20",
      slug: "ac-pro-com-a-series-wall-single-cfg-20",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox330-09hfn1-my5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-21",
      slug: "ac-pro-com-a-series-wall-single-cfg-21",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox330-12hfn1-mw5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-22",
      slug: "ac-pro-com-a-series-wall-single-cfg-22",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-17hfn1-mt0w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-23",
      slug: "ac-pro-com-a-series-wall-single-cfg-23",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aod32-24hfn1-mt0w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-24",
      slug: "ac-pro-com-a-series-wall-single-cfg-24",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox330-12hfn1-mw5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-25",
      slug: "ac-pro-com-a-series-wall-single-cfg-25",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-09hfn1-mw5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-26",
      slug: "ac-pro-com-a-series-wall-single-cfg-26",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-12hfn1-mv5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-27",
      slug: "ac-pro-com-a-series-wall-single-cfg-27",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-18hfn1-mt8w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-28",
      slug: "ac-pro-com-a-series-wall-single-cfg-28",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aod32-24hfn1-mt0w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-29",
      slug: "ac-pro-com-a-series-wall-single-cfg-29",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-09hfn1-mw5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-30",
      slug: "ac-pro-com-a-series-wall-single-cfg-30",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-12hfn1-mv5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-31",
      slug: "ac-pro-com-a-series-wall-single-cfg-31",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-18hfn1-mt8w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-32",
      slug: "ac-pro-com-a-series-wall-single-cfg-32",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-12hfn1-mv5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-33",
      slug: "ac-pro-com-a-series-wall-single-cfg-33",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-18hfn1-mt8w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-34",
      slug: "ac-pro-com-a-series-wall-single-cfg-34",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aod32-24hfn1-mt0w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-35",
      slug: "ac-pro-com-a-series-wall-single-cfg-35",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-18hfn1-mt8w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-36",
      slug: "ac-pro-com-a-series-wall-single-cfg-36",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-09hfn1-mw5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-37",
      slug: "ac-pro-com-a-series-wall-single-cfg-37",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox230-12hfn1-mv5w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-38",
      slug: "ac-pro-com-a-series-wall-single-cfg-38",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-18hfn1-mt8w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-39",
      slug: "ac-pro-com-a-series-wall-single-cfg-39",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aox430-18hfn1-mt8w",
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
      id: "ac-pro-com-a-series-wall-single-cfg-40",
      slug: "ac-pro-com-a-series-wall-single-cfg-40",
      modelId: "ac-pro-com-a-series-wall-single",
      outdoorUnitId: "ac-pro-com-aod32-24hfn1-mt0w",
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
      id: "ac-pro-com-aox-series-central-ducted-cfg-1",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-1",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox330-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aox-series-central-ducted-cfg-2",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-2",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox330u-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aox-series-central-ducted-cfg-3",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-3",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox430u-24hfn1-mr0",
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
      id: "ac-pro-com-aox-series-central-ducted-cfg-4",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-4",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox330u-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aox-series-central-ducted-cfg-5",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-5",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox330-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aox-series-central-ducted-cfg-6",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-6",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox430u-24hfn1-mr0",
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
      id: "ac-pro-com-aox-series-central-ducted-cfg-7",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-7",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox330u-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aox-series-central-ducted-cfg-8",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-8",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox430u-24hfn1-mr0",
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
      id: "ac-pro-com-aox-series-central-ducted-cfg-9",
      slug: "ac-pro-com-aox-series-central-ducted-cfg-9",
      modelId: "ac-pro-com-aox-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox330-18hfn1-mr0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 16.5,
      hspf2: 8.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aod-series-central-ducted-cfg-1",
      slug: "ac-pro-com-aod-series-central-ducted-cfg-1",
      modelId: "ac-pro-com-aod-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aod30u-30hfn1-m-ga",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.5,
      hspf2: 8.4,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-avbl-series-central-ducted-cfg-1",
      slug: "ac-pro-com-avbl-series-central-ducted-cfg-1",
      modelId: "ac-pro-com-avbl-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aox430u-18hfn1-m",
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
      id: "ac-pro-com-avbl-series-central-ducted-cfg-2",
      slug: "ac-pro-com-avbl-series-central-ducted-cfg-2",
      modelId: "ac-pro-com-avbl-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aod30-24hfn1-mw",
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
      id: "ac-pro-com-avbl-series-central-ducted-cfg-3",
      slug: "ac-pro-com-avbl-series-central-ducted-cfg-3",
      modelId: "ac-pro-com-avbl-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aod30u-30hfn1-mr0-x",
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
      id: "ac-pro-com-avbl-series-central-ducted-cfg-4",
      slug: "ac-pro-com-avbl-series-central-ducted-cfg-4",
      modelId: "ac-pro-com-avbl-series-central-ducted",
      outdoorUnitId: "ac-pro-com-aoe31u-36hfn1-m",
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
      id: "ac-pro-com-aoe-series-wall-single-cfg-1",
      slug: "ac-pro-com-aoe-series-wall-single-cfg-1",
      modelId: "ac-pro-com-aoe-series-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-mp0-ga",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aoe-series-wall-single-cfg-2",
      slug: "ac-pro-com-aoe-series-wall-single-cfg-2",
      modelId: "ac-pro-com-aoe-series-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-mp0-ga",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-aoe-series-wall-single-cfg-3",
      slug: "ac-pro-com-aoe-series-wall-single-cfg-3",
      modelId: "ac-pro-com-aoe-series-wall-single",
      outdoorUnitId: "ac-pro-com-aoe30u-48hfn1-mp0-ga",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "ac-pro-com-sphp-series-central-ducted-cfg-1",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-1",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v018bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-2",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-2",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v018bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-3",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-3",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v024bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-4",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-4",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v024bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-5",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-5",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v036bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-6",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-6",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v036bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-7",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-7",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v018bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-8",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-8",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v024bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-9",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-9",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-y-v036bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-10",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-10",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-z-v018bb",
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
      id: "ac-pro-com-sphp-series-central-ducted-cfg-11",
      slug: "ac-pro-com-sphp-series-central-ducted-cfg-11",
      modelId: "ac-pro-com-sphp-series-central-ducted",
      outdoorUnitId: "ac-pro-com-sphp-z-v024bb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-2",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-3",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-4",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-5",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-7",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-8",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-13",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-16",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-17",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-18",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-19",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-20",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-21",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-24",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-29",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-30",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-31",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-32",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-33",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-34",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-35",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-36",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-standard-wall-single-cfg-38",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-39",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-40",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-41",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-42",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-43",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-44",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-45",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-46",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-47",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-48",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-49",
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
      configurationId: "ac-pro-com-standard-wall-single-cfg-50",
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
      configurationId: "ac-pro-com-avc-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-avc-series-central-ducted-cfg-2",
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
      configurationId: "ac-pro-com-avc-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-avc-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-1",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-2",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-3",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-4",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-5",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-6",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-7",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-8",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-9",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-10",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-11",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-13",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-14",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-15",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-16",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-17",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-18",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-19",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-23",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-24",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-27",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-32",
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
      configurationId: "ac-pro-com-a-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14900,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.17,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-37",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-a-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-6",
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
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-8",
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
      configurationId: "ac-pro-com-aox-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12800,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aod-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-avbl-series-central-ducted-cfg-1",
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
      configurationId: "ac-pro-com-avbl-series-central-ducted-cfg-2",
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
      configurationId: "ac-pro-com-avbl-series-central-ducted-cfg-3",
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
      configurationId: "ac-pro-com-avbl-series-central-ducted-cfg-4",
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
      configurationId: "ac-pro-com-aoe-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-aoe-series-wall-single-cfg-2",
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
      configurationId: "ac-pro-com-aoe-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-1",
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
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-2",
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
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-5",
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
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-6",
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
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-7",
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
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-9",
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
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 2.12,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "ac-pro-com-sphp-series-central-ducted-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 2.14,
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
