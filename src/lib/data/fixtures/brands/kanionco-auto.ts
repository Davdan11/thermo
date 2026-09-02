import type { BrandDataset } from "../../types";

export const kanioncoDataset: BrandDataset = {
  brand: {
    id: "kanionco",
    slug: "kanionco",
    name: "KANIONCO",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "kanionco-standard",
      slug: "kanionco-standard",
      name: "Standard",
      brandId: "kanionco",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-k-series",
      slug: "kanionco-k-series",
      name: "K series",
      brandId: "kanionco",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-kwsm-series",
      slug: "kanionco-kwsm-series",
      name: "KWSM series",
      brandId: "kanionco",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-kd-series",
      slug: "kanionco-kd-series",
      name: "KD series",
      brandId: "kanionco",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-premium-series",
      slug: "kanionco-premium-series",
      name: "PREMIUM SERIES",
      brandId: "kanionco",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "kanionco-standard-wall-single",
      slug: "kanionco-standard-wall-single",
      name: "Standard",
      seriesId: "kanionco-standard",
      brandId: "kanionco",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 36000,
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
      id: "kanionco-k-series-wall-single",
      slug: "kanionco-k-series-wall-single",
      name: "K series",
      seriesId: "kanionco-k-series",
      brandId: "kanionco",
      modelNumber: "K series",
      normalizedModelNumber: "k-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 28000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 22000,
      seer2Min: 19,
      seer2Max: 24,
      hspf2Min: 9,
      hspf2Max: 11.4,
      cop5FMin: 1.89,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-kwsm-series-wall-single",
      slug: "kanionco-kwsm-series-wall-single",
      name: "KWSM series",
      seriesId: "kanionco-kwsm-series",
      brandId: "kanionco",
      modelNumber: "KWSM series",
      normalizedModelNumber: "kwsm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6300,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 21.5,
      seer2Max: 28.1,
      hspf2Min: 9.1,
      hspf2Max: 13.6,
      cop5FMin: 1.8,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-kd-series-wall-single",
      slug: "kanionco-kd-series-wall-single",
      name: "KD series",
      seriesId: "kanionco-kd-series",
      brandId: "kanionco",
      modelNumber: "KD series",
      normalizedModelNumber: "kd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 10100,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 18,
      seer2Max: 20.2,
      hspf2Min: 9.5,
      hspf2Max: 12,
      cop5FMin: 1.85,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-premium-series-wall-single",
      slug: "kanionco-premium-series-wall-single",
      name: "PREMIUM SERIES",
      seriesId: "kanionco-premium-series",
      brandId: "kanionco",
      modelNumber: "PREMIUM SERIES",
      normalizedModelNumber: "premium-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 18100,
      heatingCapacity5FMaxBtu: 21200,
      seer2Min: 21.5,
      seer2Max: 22,
      hspf2Min: 9,
      hspf2Max: 9,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "kanionco-kwsm-09ir410ahs19l",
      modelNumber: "KWSM-09IR410AHS19L",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs19",
      modelNumber: "KWSM-18IR410AHS19",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs21l",
      modelNumber: "KWSM-12IR410AHS21L",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs21",
      modelNumber: "KWSM-09IR410AHS21",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs21",
      modelNumber: "KWSM-18IR410AHS21",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-09r410ah",
      modelNumber: "KD-09R410AH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-18r410ah",
      modelNumber: "KD-18R410AH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-24r410ah",
      modelNumber: "KD-24R410AH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-36r410ah",
      modelNumber: "KD-36R410AH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-48r410ah",
      modelNumber: "KD-48R410AH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs25",
      modelNumber: "KWSM-12IR410AHS25",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-18r410aih",
      modelNumber: "KWSMO-18R410AIH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-30r410aih",
      modelNumber: "KWSMO-30R410AIH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-36r410aih",
      modelNumber: "KWSMO-36R410AIH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs25",
      modelNumber: "KWSM-09IR410AHS25",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs26mvl",
      modelNumber: "KWSM-09IR410AHS26MVL",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs21-7mvl",
      modelNumber: "KWSM-12IR410AHS21.7MVL",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs26mv",
      modelNumber: "KWSM-09IR410AHS26MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs24mv",
      modelNumber: "KWSM-12IR410AHS24MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs23-7mv",
      modelNumber: "KWSM-18IR410AHS23.7MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs20-7mvl",
      modelNumber: "KWSM-09IR410AHS20.7MVL",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs21-7mv",
      modelNumber: "KWSM-09IR410AHS21.7MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs21mv",
      modelNumber: "KWSM-18IR410AHS21MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-48r410aihmv",
      modelNumber: "KWSMO-48R410AIHMV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-36r410aihmv",
      modelNumber: "KWSMO-36R410AIHMV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs19mv",
      modelNumber: "KWSM-18IR410AHS19MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs22l",
      modelNumber: "KWSM-09IR410AHS22L",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs22l",
      modelNumber: "KWSM-12IR410AHS22L",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs23",
      modelNumber: "KWSM-09IR410AHS23",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs23",
      modelNumber: "KWSM-12IR410AHS23",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs21-5",
      modelNumber: "KWSM-18IR410AHS21.5",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-24ir410ahs20",
      modelNumber: "KWSM-24IR410AHS20",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs20mvlodu",
      modelNumber: "KWSM-12IR410AHS20MVLODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs20-5mvodu",
      modelNumber: "KWSM-12IR410AHS20.5MVODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs19-5mvodu",
      modelNumber: "KWSM-18IR410AHS19.5MVODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-24ir410ahs18-5mvodu",
      modelNumber: "KWSM-24IR410AHS18.5MVODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-36r410aihh",
      modelNumber: "KWSMO-36R410AIHH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-48r410aihh",
      modelNumber: "KWSMO-48R410AIHH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-60ir410ahsodu",
      modelNumber: "KD-60IR410AHSODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-36ir410ahsodu",
      modelNumber: "KD-36IR410AHSODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-48ir410ahsodu",
      modelNumber: "KD-48IR410AHSODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-18ir410ahsp",
      modelNumber: "KWSMO-18IR410AHSP",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-24ir410ahs23mv",
      modelNumber: "KWSM-24IR410AHS23MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-18r410aihmv",
      modelNumber: "KWSMO-18R410AIHMV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-30r410aihmv",
      modelNumber: "KWSMO-30R410AIHMV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs24mvl",
      modelNumber: "KWSM-09IR410AHS24MVL",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs21-5mvl",
      modelNumber: "KWSM-12IR410AHS21.5MVL",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs24mv",
      modelNumber: "KWSM-09IR410AHS24MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs22mv",
      modelNumber: "KWSM-12IR410AHS22MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs23-5mv",
      modelNumber: "KWSM-18IR410AHS23.5MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-24ir410ahs21mv",
      modelNumber: "KWSM-24IR410AHS21MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs20-5mvl",
      modelNumber: "KWSM-09IR410AHS20.5MVL",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs21-5mv",
      modelNumber: "KWSM-09IR410AHS21.5MV",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs21-5mvodu",
      modelNumber: "KWSM-09IR410AHS21.5MVODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-18r410aihh",
      modelNumber: "KWSMO-18R410AIHH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-27r410aihh",
      modelNumber: "KWSMO-27R410AIHH",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs20mvlodu",
      modelNumber: "KWSM-09IR410AHS20MVLODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-06ir410ahs26-5odu",
      modelNumber: "KWSM-06IR410AHS26.5ODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-09ir410ahs28-1odu",
      modelNumber: "KWSM-09IR410AHS28.1ODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-12ir410ahs25-5odu",
      modelNumber: "KWSM-12IR410AHS25.5ODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-18ir410ahs21-5odu",
      modelNumber: "KWSM-18IR410AHS21.5ODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsm-24ir410ahs21-5odu",
      modelNumber: "KWSM-24IR410AHS21.5ODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-09ir410ahsodu",
      modelNumber: "KD-09IR410AHSODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-24ir410ahsodu",
      modelNumber: "KD-24IR410AHSODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-12ir410ahsodu",
      modelNumber: "KD-12IR410AHSODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kd-18ir410ahsodu",
      modelNumber: "KD-18IR410AHSODU",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-36ir410ahsp",
      modelNumber: "KWSMO-36IR410AHSP",
      brandId: "kanionco",
      refrigerant: null as any,
    },
    {
      id: "kanionco-kwsmo-27ir410ahsp",
      modelNumber: "KWSMO-27IR410AHSP",
      brandId: "kanionco",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "kanionco-standard-wall-single-cfg-1",
      slug: "kanionco-standard-wall-single-cfg-1",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs19l",
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
      id: "kanionco-standard-wall-single-cfg-2",
      slug: "kanionco-standard-wall-single-cfg-2",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs19",
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
      id: "kanionco-standard-wall-single-cfg-3",
      slug: "kanionco-standard-wall-single-cfg-3",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs21l",
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
      id: "kanionco-standard-wall-single-cfg-4",
      slug: "kanionco-standard-wall-single-cfg-4",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs21",
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
      id: "kanionco-standard-wall-single-cfg-5",
      slug: "kanionco-standard-wall-single-cfg-5",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs21",
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
      id: "kanionco-standard-wall-single-cfg-6",
      slug: "kanionco-standard-wall-single-cfg-6",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kd-09r410ah",
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
      id: "kanionco-standard-wall-single-cfg-7",
      slug: "kanionco-standard-wall-single-cfg-7",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kd-18r410ah",
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
      id: "kanionco-standard-wall-single-cfg-8",
      slug: "kanionco-standard-wall-single-cfg-8",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kd-24r410ah",
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
      id: "kanionco-standard-wall-single-cfg-9",
      slug: "kanionco-standard-wall-single-cfg-9",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kd-36r410ah",
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
      id: "kanionco-standard-wall-single-cfg-10",
      slug: "kanionco-standard-wall-single-cfg-10",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kd-48r410ah",
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
      id: "kanionco-standard-wall-single-cfg-11",
      slug: "kanionco-standard-wall-single-cfg-11",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs25",
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
      id: "kanionco-standard-wall-single-cfg-12",
      slug: "kanionco-standard-wall-single-cfg-12",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-18r410aih",
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
      id: "kanionco-standard-wall-single-cfg-13",
      slug: "kanionco-standard-wall-single-cfg-13",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-30r410aih",
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
      id: "kanionco-standard-wall-single-cfg-14",
      slug: "kanionco-standard-wall-single-cfg-14",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-36r410aih",
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
      id: "kanionco-standard-wall-single-cfg-15",
      slug: "kanionco-standard-wall-single-cfg-15",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs25",
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
      id: "kanionco-standard-wall-single-cfg-16",
      slug: "kanionco-standard-wall-single-cfg-16",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs26mvl",
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
      id: "kanionco-standard-wall-single-cfg-17",
      slug: "kanionco-standard-wall-single-cfg-17",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs21-7mvl",
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
      id: "kanionco-standard-wall-single-cfg-18",
      slug: "kanionco-standard-wall-single-cfg-18",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs26mv",
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
      id: "kanionco-standard-wall-single-cfg-19",
      slug: "kanionco-standard-wall-single-cfg-19",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs24mv",
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
      id: "kanionco-standard-wall-single-cfg-20",
      slug: "kanionco-standard-wall-single-cfg-20",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs23-7mv",
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
      id: "kanionco-standard-wall-single-cfg-21",
      slug: "kanionco-standard-wall-single-cfg-21",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs20-7mvl",
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
      id: "kanionco-standard-wall-single-cfg-22",
      slug: "kanionco-standard-wall-single-cfg-22",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs21-7mv",
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
      id: "kanionco-standard-wall-single-cfg-23",
      slug: "kanionco-standard-wall-single-cfg-23",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs21mv",
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
      id: "kanionco-standard-wall-single-cfg-24",
      slug: "kanionco-standard-wall-single-cfg-24",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-48r410aihmv",
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
      id: "kanionco-standard-wall-single-cfg-25",
      slug: "kanionco-standard-wall-single-cfg-25",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-48r410aihmv",
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
      id: "kanionco-standard-wall-single-cfg-26",
      slug: "kanionco-standard-wall-single-cfg-26",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-36r410aihmv",
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
      id: "kanionco-standard-wall-single-cfg-27",
      slug: "kanionco-standard-wall-single-cfg-27",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs19mv",
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
      id: "kanionco-standard-wall-single-cfg-28",
      slug: "kanionco-standard-wall-single-cfg-28",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs22l",
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
      id: "kanionco-standard-wall-single-cfg-29",
      slug: "kanionco-standard-wall-single-cfg-29",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs22l",
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
      id: "kanionco-standard-wall-single-cfg-30",
      slug: "kanionco-standard-wall-single-cfg-30",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs23",
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
      id: "kanionco-standard-wall-single-cfg-31",
      slug: "kanionco-standard-wall-single-cfg-31",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs23",
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
      id: "kanionco-standard-wall-single-cfg-32",
      slug: "kanionco-standard-wall-single-cfg-32",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs21-5",
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
      id: "kanionco-standard-wall-single-cfg-33",
      slug: "kanionco-standard-wall-single-cfg-33",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-24ir410ahs20",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-standard-wall-single-cfg-34",
      slug: "kanionco-standard-wall-single-cfg-34",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs20mvlodu",
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
      id: "kanionco-standard-wall-single-cfg-35",
      slug: "kanionco-standard-wall-single-cfg-35",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs20-5mvodu",
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
      id: "kanionco-standard-wall-single-cfg-36",
      slug: "kanionco-standard-wall-single-cfg-36",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs19-5mvodu",
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
      id: "kanionco-standard-wall-single-cfg-37",
      slug: "kanionco-standard-wall-single-cfg-37",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsm-24ir410ahs18-5mvodu",
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
      id: "kanionco-standard-wall-single-cfg-38",
      slug: "kanionco-standard-wall-single-cfg-38",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-36r410aihh",
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
      id: "kanionco-standard-wall-single-cfg-39",
      slug: "kanionco-standard-wall-single-cfg-39",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-48r410aihh",
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
      id: "kanionco-standard-wall-single-cfg-40",
      slug: "kanionco-standard-wall-single-cfg-40",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-48r410aihh",
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
      id: "kanionco-standard-wall-single-cfg-41",
      slug: "kanionco-standard-wall-single-cfg-41",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kd-60ir410ahsodu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 59000,
      coolingCapacityMaxBtu: 59000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-standard-wall-single-cfg-42",
      slug: "kanionco-standard-wall-single-cfg-42",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kd-36ir410ahsodu",
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
      id: "kanionco-standard-wall-single-cfg-43",
      slug: "kanionco-standard-wall-single-cfg-43",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kd-48ir410ahsodu",
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
      id: "kanionco-standard-wall-single-cfg-44",
      slug: "kanionco-standard-wall-single-cfg-44",
      modelId: "kanionco-standard-wall-single",
      outdoorUnitId: "kanionco-kwsmo-18ir410ahsp",
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
      id: "kanionco-k-series-wall-single-cfg-1",
      slug: "kanionco-k-series-wall-single-cfg-1",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-24ir410ahs23mv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-k-series-wall-single-cfg-2",
      slug: "kanionco-k-series-wall-single-cfg-2",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-18r410aihmv",
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
      id: "kanionco-k-series-wall-single-cfg-3",
      slug: "kanionco-k-series-wall-single-cfg-3",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-30r410aihmv",
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
      id: "kanionco-k-series-wall-single-cfg-4",
      slug: "kanionco-k-series-wall-single-cfg-4",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-30r410aihmv",
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
      id: "kanionco-k-series-wall-single-cfg-5",
      slug: "kanionco-k-series-wall-single-cfg-5",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-30r410aihmv",
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
      id: "kanionco-k-series-wall-single-cfg-6",
      slug: "kanionco-k-series-wall-single-cfg-6",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs24mvl",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 9.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-k-series-wall-single-cfg-7",
      slug: "kanionco-k-series-wall-single-cfg-7",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs21-5mvl",
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
      id: "kanionco-k-series-wall-single-cfg-8",
      slug: "kanionco-k-series-wall-single-cfg-8",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs24mv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-k-series-wall-single-cfg-9",
      slug: "kanionco-k-series-wall-single-cfg-9",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs22mv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.1,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-k-series-wall-single-cfg-10",
      slug: "kanionco-k-series-wall-single-cfg-10",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs23-5mv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 23.7,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-k-series-wall-single-cfg-11",
      slug: "kanionco-k-series-wall-single-cfg-11",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-24ir410ahs21mv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-k-series-wall-single-cfg-12",
      slug: "kanionco-k-series-wall-single-cfg-12",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs20-5mvl",
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
      id: "kanionco-k-series-wall-single-cfg-13",
      slug: "kanionco-k-series-wall-single-cfg-13",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs21-5mv",
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
      id: "kanionco-k-series-wall-single-cfg-14",
      slug: "kanionco-k-series-wall-single-cfg-14",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-18r410aihmv",
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
      id: "kanionco-k-series-wall-single-cfg-15",
      slug: "kanionco-k-series-wall-single-cfg-15",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-18r410aihmv",
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
      id: "kanionco-k-series-wall-single-cfg-16",
      slug: "kanionco-k-series-wall-single-cfg-16",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs21-5mvodu",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-k-series-wall-single-cfg-17",
      slug: "kanionco-k-series-wall-single-cfg-17",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-18r410aihh",
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
      id: "kanionco-k-series-wall-single-cfg-18",
      slug: "kanionco-k-series-wall-single-cfg-18",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-18r410aihh",
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
      id: "kanionco-k-series-wall-single-cfg-19",
      slug: "kanionco-k-series-wall-single-cfg-19",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-18r410aihh",
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
      id: "kanionco-k-series-wall-single-cfg-20",
      slug: "kanionco-k-series-wall-single-cfg-20",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-27r410aihh",
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
      id: "kanionco-k-series-wall-single-cfg-21",
      slug: "kanionco-k-series-wall-single-cfg-21",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-27r410aihh",
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
      id: "kanionco-k-series-wall-single-cfg-22",
      slug: "kanionco-k-series-wall-single-cfg-22",
      modelId: "kanionco-k-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-27r410aihh",
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
      id: "kanionco-kwsm-series-wall-single-cfg-1",
      slug: "kanionco-kwsm-series-wall-single-cfg-1",
      modelId: "kanionco-kwsm-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs20mvlodu",
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
      id: "kanionco-kwsm-series-wall-single-cfg-2",
      slug: "kanionco-kwsm-series-wall-single-cfg-2",
      modelId: "kanionco-kwsm-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-06ir410ahs26-5odu",
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
      id: "kanionco-kwsm-series-wall-single-cfg-3",
      slug: "kanionco-kwsm-series-wall-single-cfg-3",
      modelId: "kanionco-kwsm-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-09ir410ahs28-1odu",
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
      id: "kanionco-kwsm-series-wall-single-cfg-4",
      slug: "kanionco-kwsm-series-wall-single-cfg-4",
      modelId: "kanionco-kwsm-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-12ir410ahs25-5odu",
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
      id: "kanionco-kwsm-series-wall-single-cfg-5",
      slug: "kanionco-kwsm-series-wall-single-cfg-5",
      modelId: "kanionco-kwsm-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-18ir410ahs21-5odu",
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
      id: "kanionco-kwsm-series-wall-single-cfg-6",
      slug: "kanionco-kwsm-series-wall-single-cfg-6",
      modelId: "kanionco-kwsm-series-wall-single",
      outdoorUnitId: "kanionco-kwsm-24ir410ahs21-5odu",
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
      id: "kanionco-kd-series-wall-single-cfg-1",
      slug: "kanionco-kd-series-wall-single-cfg-1",
      modelId: "kanionco-kd-series-wall-single",
      outdoorUnitId: "kanionco-kd-09ir410ahsodu",
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
      id: "kanionco-kd-series-wall-single-cfg-2",
      slug: "kanionco-kd-series-wall-single-cfg-2",
      modelId: "kanionco-kd-series-wall-single",
      outdoorUnitId: "kanionco-kd-24ir410ahsodu",
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
      id: "kanionco-kd-series-wall-single-cfg-3",
      slug: "kanionco-kd-series-wall-single-cfg-3",
      modelId: "kanionco-kd-series-wall-single",
      outdoorUnitId: "kanionco-kd-12ir410ahsodu",
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
      id: "kanionco-kd-series-wall-single-cfg-4",
      slug: "kanionco-kd-series-wall-single-cfg-4",
      modelId: "kanionco-kd-series-wall-single",
      outdoorUnitId: "kanionco-kd-18ir410ahsodu",
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
      id: "kanionco-premium-series-wall-single-cfg-1",
      slug: "kanionco-premium-series-wall-single-cfg-1",
      modelId: "kanionco-premium-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-36ir410ahsp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "kanionco-premium-series-wall-single-cfg-2",
      slug: "kanionco-premium-series-wall-single-cfg-2",
      modelId: "kanionco-premium-series-wall-single",
      outdoorUnitId: "kanionco-kwsmo-27ir410ahsp",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "kanionco-standard-wall-single-cfg-1",
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
      configurationId: "kanionco-standard-wall-single-cfg-2",
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
      configurationId: "kanionco-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-5",
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
      configurationId: "kanionco-standard-wall-single-cfg-6",
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
      configurationId: "kanionco-standard-wall-single-cfg-7",
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
      configurationId: "kanionco-standard-wall-single-cfg-8",
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
      configurationId: "kanionco-standard-wall-single-cfg-9",
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
      configurationId: "kanionco-standard-wall-single-cfg-10",
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
      configurationId: "kanionco-standard-wall-single-cfg-11",
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
      configurationId: "kanionco-standard-wall-single-cfg-12",
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
      configurationId: "kanionco-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-14",
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
      configurationId: "kanionco-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-18",
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
      configurationId: "kanionco-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-21",
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
      configurationId: "kanionco-standard-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-23",
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
      configurationId: "kanionco-standard-wall-single-cfg-24",
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
      configurationId: "kanionco-standard-wall-single-cfg-25",
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
      configurationId: "kanionco-standard-wall-single-cfg-26",
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
      configurationId: "kanionco-standard-wall-single-cfg-27",
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
      configurationId: "kanionco-standard-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 5900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-standard-wall-single-cfg-34",
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
      configurationId: "kanionco-standard-wall-single-cfg-35",
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
      configurationId: "kanionco-standard-wall-single-cfg-36",
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
      configurationId: "kanionco-standard-wall-single-cfg-37",
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
      configurationId: "kanionco-standard-wall-single-cfg-38",
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
      configurationId: "kanionco-standard-wall-single-cfg-39",
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
      configurationId: "kanionco-standard-wall-single-cfg-40",
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
      configurationId: "kanionco-standard-wall-single-cfg-41",
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
      configurationId: "kanionco-standard-wall-single-cfg-42",
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
      configurationId: "kanionco-standard-wall-single-cfg-43",
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
      configurationId: "kanionco-standard-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-2",
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
      configurationId: "kanionco-k-series-wall-single-cfg-3",
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
      configurationId: "kanionco-k-series-wall-single-cfg-4",
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
      configurationId: "kanionco-k-series-wall-single-cfg-5",
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
      configurationId: "kanionco-k-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8200,
          cop: 2.24,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14000,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-12",
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
      configurationId: "kanionco-k-series-wall-single-cfg-13",
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
      configurationId: "kanionco-k-series-wall-single-cfg-14",
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
      configurationId: "kanionco-k-series-wall-single-cfg-15",
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
      configurationId: "kanionco-k-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-k-series-wall-single-cfg-17",
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
      configurationId: "kanionco-k-series-wall-single-cfg-18",
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
      configurationId: "kanionco-k-series-wall-single-cfg-19",
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
      configurationId: "kanionco-k-series-wall-single-cfg-20",
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
      configurationId: "kanionco-k-series-wall-single-cfg-21",
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
      configurationId: "kanionco-k-series-wall-single-cfg-22",
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
      configurationId: "kanionco-kwsm-series-wall-single-cfg-1",
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
      configurationId: "kanionco-kwsm-series-wall-single-cfg-2",
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
      configurationId: "kanionco-kwsm-series-wall-single-cfg-3",
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
      configurationId: "kanionco-kwsm-series-wall-single-cfg-4",
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
      configurationId: "kanionco-kwsm-series-wall-single-cfg-5",
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
      configurationId: "kanionco-kwsm-series-wall-single-cfg-6",
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
      configurationId: "kanionco-kd-series-wall-single-cfg-1",
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
      configurationId: "kanionco-kd-series-wall-single-cfg-2",
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
      configurationId: "kanionco-kd-series-wall-single-cfg-3",
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
      configurationId: "kanionco-kd-series-wall-single-cfg-4",
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
      configurationId: "kanionco-premium-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "kanionco-premium-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
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
