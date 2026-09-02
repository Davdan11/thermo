import type { BrandDataset } from "../../types";

export const zephyrDataset: BrandDataset = {
  brand: {
    id: "zephyr",
    slug: "zephyr",
    name: "ZEPHYR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "zephyr-standard",
      slug: "zephyr-standard",
      name: "Standard",
      brandId: "zephyr",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme",
      slug: "zephyr-hi-multi-xtreme",
      name: "Hi MULTI Xtreme",
      brandId: "zephyr",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-ultra-hd",
      slug: "zephyr-hi-ultra-hd",
      name: "Hi ULTRA HD",
      brandId: "zephyr",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra",
      slug: "zephyr-ultra",
      name: "Ultra",
      brandId: "zephyr",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra",
      slug: "zephyr-hiultra",
      name: "HiULTRA",
      brandId: "zephyr",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "zephyr-standard-wall-single",
      slug: "zephyr-standard-wall-single",
      name: "Standard",
      seriesId: "zephyr-standard",
      brandId: "zephyr",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5000,
      heatingCapacity5FMaxBtu: 40000,
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
      id: "zephyr-hi-multi-xtreme-wall-single",
      slug: "zephyr-hi-multi-xtreme-wall-single",
      name: "Hi MULTI Xtreme",
      seriesId: "zephyr-hi-multi-xtreme",
      brandId: "zephyr",
      modelNumber: "Hi MULTI Xtreme",
      normalizedModelNumber: "hi-multi-xtreme",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 42000,
      heatingCapacity5FMinBtu: 11500,
      heatingCapacity5FMaxBtu: 28200,
      seer2Min: 17.5,
      seer2Max: 23,
      hspf2Min: 8.8,
      hspf2Max: 10,
      cop5FMin: 1.82,
      cop5FMax: 1.99,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-ultra-hd-central-ducted",
      slug: "zephyr-hi-ultra-hd-central-ducted",
      name: "Hi ULTRA HD",
      seriesId: "zephyr-hi-ultra-hd",
      brandId: "zephyr",
      modelNumber: "Hi ULTRA HD",
      normalizedModelNumber: "hi-ultra-hd",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 16000,
      heatingCapacity5FMaxBtu: 31000,
      seer2Min: 16.5,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.9,
      cop5FMax: 2.05,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted",
      slug: "zephyr-ultra-central-ducted",
      name: "Ultra",
      seriesId: "zephyr-ultra",
      brandId: "zephyr",
      modelNumber: "Ultra",
      normalizedModelNumber: "ultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 57000,
      heatingCapacity5FMinBtu: 20400,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 19,
      seer2Max: 20,
      hspf2Min: 9,
      hspf2Max: 10.5,
      cop5FMin: 2.15,
      cop5FMax: 2.52,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-wall-single",
      slug: "zephyr-hiultra-wall-single",
      name: "HiULTRA",
      seriesId: "zephyr-hiultra",
      brandId: "zephyr",
      modelNumber: "HiULTRA",
      normalizedModelNumber: "hiultra",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 20,
      seer2Max: 25,
      hspf2Min: 9,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "zephyr-ze-18ca17ext",
      modelNumber: "ZE-18CA17EXT",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-18ca22ext",
      modelNumber: "ZE-18CA22EXT",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-12ca22ext",
      modelNumber: "ZE-12CA22EXT",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-09da17ext",
      modelNumber: "ZE-09DA17EXT",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-24hpa",
      modelNumber: "ZE-24HPA",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-36hpa",
      modelNumber: "ZE-36HPA",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-60hpa",
      modelNumber: "ZE-60HPA",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-60hpb",
      modelNumber: "ZE-60HPB",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-12cb22o",
      modelNumber: "ZE-12CB22O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-24cb22o",
      modelNumber: "ZE-24CB22O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-12db22o",
      modelNumber: "ZE-12DB22O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-18m222sco",
      modelNumber: "ZE-18M222SCO",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-24m322sco",
      modelNumber: "ZE-24M322SCO",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-42m522sco",
      modelNumber: "ZE-42M522SCO",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-36m422sco",
      modelNumber: "ZE-36M422SCO",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-518m225",
      modelNumber: "ZE-518M225",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-527m325",
      modelNumber: "ZE-527M325",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-542m525",
      modelNumber: "ZE-542M525",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-536m425",
      modelNumber: "ZE-536M425",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-24hpb",
      modelNumber: "ZE-24HPB",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-36hpb",
      modelNumber: "ZE-36HPB",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-48hpb",
      modelNumber: "ZE-48HPB",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-624hpa",
      modelNumber: "ZE-624HPA",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-636hpa",
      modelNumber: "ZE-636HPA",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-648hpa",
      modelNumber: "ZE-648HPA",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-660hpa",
      modelNumber: "ZE-660HPA",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-09cb22o",
      modelNumber: "ZE-09CB22O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-18cb22o",
      modelNumber: "ZE-18CB22O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-09db22o",
      modelNumber: "ZE-09DB22O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-09cb25o",
      modelNumber: "ZE-09CB25O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-12cb25o",
      modelNumber: "ZE-12CB25O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-18cb25o",
      modelNumber: "ZE-18CB25O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-24cb25o",
      modelNumber: "ZE-24CB25O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-09db25o",
      modelNumber: "ZE-09DB25O",
      brandId: "zephyr",
      refrigerant: null as any,
    },
    {
      id: "zephyr-ze-12db25o",
      modelNumber: "ZE-12DB25O",
      brandId: "zephyr",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "zephyr-standard-wall-single-cfg-1",
      slug: "zephyr-standard-wall-single-cfg-1",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-18ca17ext",
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
      id: "zephyr-standard-wall-single-cfg-2",
      slug: "zephyr-standard-wall-single-cfg-2",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-18ca22ext",
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
      id: "zephyr-standard-wall-single-cfg-3",
      slug: "zephyr-standard-wall-single-cfg-3",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-12ca22ext",
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
      id: "zephyr-standard-wall-single-cfg-4",
      slug: "zephyr-standard-wall-single-cfg-4",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-09da17ext",
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
      id: "zephyr-standard-wall-single-cfg-5",
      slug: "zephyr-standard-wall-single-cfg-5",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-24hpa",
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
      id: "zephyr-standard-wall-single-cfg-6",
      slug: "zephyr-standard-wall-single-cfg-6",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-36hpa",
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
      id: "zephyr-standard-wall-single-cfg-7",
      slug: "zephyr-standard-wall-single-cfg-7",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-60hpa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-standard-wall-single-cfg-8",
      slug: "zephyr-standard-wall-single-cfg-8",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-60hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 56000,
      coolingCapacityMaxBtu: 56000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-standard-wall-single-cfg-9",
      slug: "zephyr-standard-wall-single-cfg-9",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-12cb22o",
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
      id: "zephyr-standard-wall-single-cfg-10",
      slug: "zephyr-standard-wall-single-cfg-10",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-24cb22o",
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
      id: "zephyr-standard-wall-single-cfg-11",
      slug: "zephyr-standard-wall-single-cfg-11",
      modelId: "zephyr-standard-wall-single",
      outdoorUnitId: "zephyr-ze-12db22o",
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
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-1",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-1",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-18m222sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-2",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-2",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-18m222sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20,
      hspf2: 9.45,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-3",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-3",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-24m322sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.05,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-4",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-4",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-24m322sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 8.83,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-5",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-5",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-42m522sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-6",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-6",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-42m522sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 41500,
      coolingCapacityMaxBtu: 41500,
      seer2: 19,
      hspf2: 8.88,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-7",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-7",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-36m422sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-8",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-8",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-36m422sco",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 20.25,
      hspf2: 8.95,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-9",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-9",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-518m225",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-10",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-10",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-518m225",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 17.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-11",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-11",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-518m225",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.75,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-12",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-12",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-527m325",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-13",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-13",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-527m325",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-14",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-14",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-527m325",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-15",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-15",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-542m525",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 18,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-16",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-16",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-542m525",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-17",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-17",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-542m525",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: 20,
      hspf2: 9.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-18",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-18",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-536m425",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-19",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-19",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-536m425",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 22,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-multi-xtreme-wall-single-cfg-20",
      slug: "zephyr-hi-multi-xtreme-wall-single-cfg-20",
      modelId: "zephyr-hi-multi-xtreme-wall-single",
      outdoorUnitId: "zephyr-ze-536m425",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-ultra-hd-central-ducted-cfg-1",
      slug: "zephyr-hi-ultra-hd-central-ducted-cfg-1",
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      outdoorUnitId: "zephyr-ze-24hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-ultra-hd-central-ducted-cfg-2",
      slug: "zephyr-hi-ultra-hd-central-ducted-cfg-2",
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      outdoorUnitId: "zephyr-ze-36hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 34000,
      coolingCapacityMaxBtu: 34000,
      seer2: 18,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hi-ultra-hd-central-ducted-cfg-3",
      slug: "zephyr-hi-ultra-hd-central-ducted-cfg-3",
      modelId: "zephyr-hi-ultra-hd-central-ducted",
      outdoorUnitId: "zephyr-ze-48hpb",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.5,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-1",
      slug: "zephyr-ultra-central-ducted-cfg-1",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr-ze-624hpa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-2",
      slug: "zephyr-ultra-central-ducted-cfg-2",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr-ze-636hpa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 32000,
      coolingCapacityMaxBtu: 32000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-3",
      slug: "zephyr-ultra-central-ducted-cfg-3",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr-ze-648hpa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-ultra-central-ducted-cfg-4",
      slug: "zephyr-ultra-central-ducted-cfg-4",
      modelId: "zephyr-ultra-central-ducted",
      outdoorUnitId: "zephyr-ze-660hpa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 57000,
      coolingCapacityMaxBtu: 57000,
      seer2: 19,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-wall-single-cfg-1",
      slug: "zephyr-hiultra-wall-single-cfg-1",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-09cb22o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-wall-single-cfg-2",
      slug: "zephyr-hiultra-wall-single-cfg-2",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-18cb22o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-wall-single-cfg-3",
      slug: "zephyr-hiultra-wall-single-cfg-3",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-09db22o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-wall-single-cfg-4",
      slug: "zephyr-hiultra-wall-single-cfg-4",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-09cb25o",
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
      id: "zephyr-hiultra-wall-single-cfg-5",
      slug: "zephyr-hiultra-wall-single-cfg-5",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-12cb25o",
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
      id: "zephyr-hiultra-wall-single-cfg-6",
      slug: "zephyr-hiultra-wall-single-cfg-6",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-18cb25o",
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
      id: "zephyr-hiultra-wall-single-cfg-7",
      slug: "zephyr-hiultra-wall-single-cfg-7",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-24cb25o",
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
      id: "zephyr-hiultra-wall-single-cfg-8",
      slug: "zephyr-hiultra-wall-single-cfg-8",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-09db25o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "zephyr-hiultra-wall-single-cfg-9",
      slug: "zephyr-hiultra-wall-single-cfg-9",
      modelId: "zephyr-hiultra-wall-single",
      outdoorUnitId: "zephyr-ze-12db25o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "zephyr-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-standard-wall-single-cfg-3",
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
      configurationId: "zephyr-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-standard-wall-single-cfg-5",
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
      configurationId: "zephyr-standard-wall-single-cfg-6",
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
      configurationId: "zephyr-standard-wall-single-cfg-7",
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
      configurationId: "zephyr-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11900,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.82,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28200,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-multi-xtreme-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-ultra-hd-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-ultra-hd-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.05,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hi-ultra-hd-central-ducted-cfg-3",
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
      configurationId: "zephyr-ultra-central-ducted-cfg-1",
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
      configurationId: "zephyr-ultra-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.52,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-ultra-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 2.46,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14800,
          cop: 2.5,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-wall-single-cfg-4",
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
      configurationId: "zephyr-hiultra-wall-single-cfg-5",
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
      configurationId: "zephyr-hiultra-wall-single-cfg-6",
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
      configurationId: "zephyr-hiultra-wall-single-cfg-7",
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
      configurationId: "zephyr-hiultra-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "zephyr-hiultra-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 1.9,
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
