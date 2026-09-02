import type { BrandDataset } from "../../types";

export const viessmannDataset: BrandDataset = {
  brand: {
    id: "viessmann",
    slug: "viessmann",
    name: "VIESSMANN",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "viessmann-dlc-series",
      slug: "viessmann-dlc-series",
      name: "DLC-series",
      brandId: "viessmann",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-standard",
      slug: "viessmann-standard",
      name: "Standard",
      brandId: "viessmann",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlseries",
      slug: "viessmann-dlseries",
      name: "Dlseries",
      brandId: "viessmann",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dl-series",
      slug: "viessmann-dl-series",
      name: "DL series",
      brandId: "viessmann",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series",
      slug: "viessmann-d5c-series",
      name: "D5C Series",
      brandId: "viessmann",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "viessmann-dlc-series-wall-single",
      slug: "viessmann-dlc-series-wall-single",
      name: "DLC-series",
      seriesId: "viessmann-dlc-series",
      brandId: "viessmann",
      modelNumber: "DLC-series",
      normalizedModelNumber: "dlc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 39000,
      seer2Min: 15.2,
      seer2Max: 28.1,
      hspf2Min: 8.7,
      hspf2Max: 13.6,
      cop5FMin: 1.68,
      cop5FMax: 2.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-standard-wall-single",
      slug: "viessmann-standard-wall-single",
      name: "Standard",
      seriesId: "viessmann-standard",
      brandId: "viessmann",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 37800,
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
      id: "viessmann-dlseries-central-ducted",
      slug: "viessmann-dlseries-central-ducted",
      name: "Dlseries",
      seriesId: "viessmann-dlseries",
      brandId: "viessmann",
      modelNumber: "Dlseries",
      normalizedModelNumber: "dlseries",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.3,
      seer2Max: 18.4,
      hspf2Min: 8.9,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dl-series-central-ducted",
      slug: "viessmann-dl-series-central-ducted",
      name: "DL series",
      seriesId: "viessmann-dl-series",
      brandId: "viessmann",
      modelNumber: "DL series",
      normalizedModelNumber: "dl-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 14700,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 16.5,
      hspf2Min: 8.6,
      hspf2Max: 10,
      cop5FMin: 1.85,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted",
      slug: "viessmann-d5c-series-central-ducted",
      name: "D5C Series",
      seriesId: "viessmann-d5c-series",
      brandId: "viessmann",
      modelNumber: "D5C Series",
      normalizedModelNumber: "d5c-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19,
      hspf2Min: 8.4,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single",
      slug: "viessmann-d5c-series-wall-single",
      name: "D5C Series",
      seriesId: "viessmann-d5c-series",
      brandId: "viessmann",
      modelNumber: "D5C Series",
      normalizedModelNumber: "d5c-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.9,
      seer2Max: 27.5,
      hspf2Min: 9.5,
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
      id: "viessmann-dlclrch48aak",
      modelNumber: "DLCLRCH48AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh09aak",
      modelNumber: "DLCSRBH09AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh12aak",
      modelNumber: "DLCSRBH12AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh18aak",
      modelNumber: "DLCSRBH18AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh24aak",
      modelNumber: "DLCSRBH24AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh12aaj",
      modelNumber: "DLCSRBH12AAJ",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh06aak",
      modelNumber: "DLCSRBH06AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcmrbh18bak",
      modelNumber: "DLCMRBH18BAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcmrbh36dak",
      modelNumber: "DLCMRBH36DAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcmhbh48eak",
      modelNumber: "DLCMHBH48EAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcmhbh36dak",
      modelNumber: "DLCMHBH36DAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcmrbh48eak",
      modelNumber: "DLCMRBH48EAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcprbh18aak",
      modelNumber: "DLCPRBH18AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh30aak11",
      modelNumber: "DLCSRBH30AAK11",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh30aak",
      modelNumber: "DLCSRBH30AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcerbh09aaj",
      modelNumber: "DLCERBH09AAJ",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcerbh18aak",
      modelNumber: "DLCERBH18AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcerbh30aak",
      modelNumber: "DLCERBH30AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcerbh09aak",
      modelNumber: "DLCERBH09AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlclrch58aak",
      modelNumber: "DLCLRCH58AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlclrch36aak",
      modelNumber: "DLCLRCH36AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcsrbh36abk",
      modelNumber: "DLCSRBH36ABK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah48aak",
      modelNumber: "DLCURAH48AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah60aak",
      modelNumber: "DLCURAH60AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah18aak",
      modelNumber: "DLCURAH18AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah36aak",
      modelNumber: "DLCURAH36AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcerbh12aaj",
      modelNumber: "DLCERBH12AAJ",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcerbh12aak",
      modelNumber: "DLCERBH12AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcerbh24aak",
      modelNumber: "DLCERBH24AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5csrah36aak",
      modelNumber: "D5CSRAH36AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah24aak",
      modelNumber: "DLCURAH24AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah18abk",
      modelNumber: "DLCURAH18ABK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah24abk",
      modelNumber: "DLCURAH24ABK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah48abk",
      modelNumber: "DLCURAH48ABK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah36abk",
      modelNumber: "DLCURAH36ABK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah30abk",
      modelNumber: "DLCURAH30ABK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-dlcurah60abk",
      modelNumber: "DLCURAH60ABK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cshah18aak",
      modelNumber: "D5CSHAH18AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cshah24aak",
      modelNumber: "D5CSHAH24AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cshah33aak",
      modelNumber: "D5CSHAH33AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5csrah30aak",
      modelNumber: "D5CSRAH30AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5clhah36aak",
      modelNumber: "D5CLHAH36AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5clhah48aak",
      modelNumber: "D5CLHAH48AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5clhah58aak",
      modelNumber: "D5CLHAH58AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cuhah18aak",
      modelNumber: "D5CUHAH18AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cuhah24aak",
      modelNumber: "D5CUHAH24AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cuhah30aak",
      modelNumber: "D5CUHAH30AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cuhah36aak",
      modelNumber: "D5CUHAH36AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cuhah48aak",
      modelNumber: "D5CUHAH48AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cuhah60aak",
      modelNumber: "D5CUHAH60AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5curah18aak",
      modelNumber: "D5CURAH18AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5curah24aak",
      modelNumber: "D5CURAH24AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5curah30aak",
      modelNumber: "D5CURAH30AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5curah36aak",
      modelNumber: "D5CURAH36AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5curah48aak",
      modelNumber: "D5CURAH48AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5curah60aak",
      modelNumber: "D5CURAH60AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cshah06aak",
      modelNumber: "D5CSHAH06AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cshah09aak",
      modelNumber: "D5CSHAH09AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cshah12aak",
      modelNumber: "D5CSHAH12AAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cmhah18cak",
      modelNumber: "D5CMHAH18CAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cmhah24dak",
      modelNumber: "D5CMHAH24DAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cmhah30eak",
      modelNumber: "D5CMHAH30EAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cmhah36eak",
      modelNumber: "D5CMHAH36EAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cmhah48fak",
      modelNumber: "D5CMHAH48FAK",
      brandId: "viessmann",
      refrigerant: null as any,
    },
    {
      id: "viessmann-d5cmhah55fak",
      modelNumber: "D5CMHAH55FAK",
      brandId: "viessmann",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "viessmann-dlc-series-wall-single-cfg-1",
      slug: "viessmann-dlc-series-wall-single-cfg-1",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlclrch48aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-2",
      slug: "viessmann-dlc-series-wall-single-cfg-2",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh09aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-3",
      slug: "viessmann-dlc-series-wall-single-cfg-3",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh09aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-4",
      slug: "viessmann-dlc-series-wall-single-cfg-4",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-5",
      slug: "viessmann-dlc-series-wall-single-cfg-5",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-6",
      slug: "viessmann-dlc-series-wall-single-cfg-6",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-7",
      slug: "viessmann-dlc-series-wall-single-cfg-7",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-8",
      slug: "viessmann-dlc-series-wall-single-cfg-8",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-9",
      slug: "viessmann-dlc-series-wall-single-cfg-9",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-10",
      slug: "viessmann-dlc-series-wall-single-cfg-10",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh24aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-11",
      slug: "viessmann-dlc-series-wall-single-cfg-11",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh24aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-12",
      slug: "viessmann-dlc-series-wall-single-cfg-12",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aaj",
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
      id: "viessmann-dlc-series-wall-single-cfg-13",
      slug: "viessmann-dlc-series-wall-single-cfg-13",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh09aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-14",
      slug: "viessmann-dlc-series-wall-single-cfg-14",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-15",
      slug: "viessmann-dlc-series-wall-single-cfg-15",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-16",
      slug: "viessmann-dlc-series-wall-single-cfg-16",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh24aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-17",
      slug: "viessmann-dlc-series-wall-single-cfg-17",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh06aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-18",
      slug: "viessmann-dlc-series-wall-single-cfg-18",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmrbh18bak",
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
      id: "viessmann-dlc-series-wall-single-cfg-19",
      slug: "viessmann-dlc-series-wall-single-cfg-19",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmrbh18bak",
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
      id: "viessmann-dlc-series-wall-single-cfg-20",
      slug: "viessmann-dlc-series-wall-single-cfg-20",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmrbh18bak",
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
      id: "viessmann-dlc-series-wall-single-cfg-21",
      slug: "viessmann-dlc-series-wall-single-cfg-21",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmrbh36dak",
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
      id: "viessmann-dlc-series-wall-single-cfg-22",
      slug: "viessmann-dlc-series-wall-single-cfg-22",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmhbh48eak",
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
      id: "viessmann-dlc-series-wall-single-cfg-23",
      slug: "viessmann-dlc-series-wall-single-cfg-23",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmhbh48eak",
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
      id: "viessmann-dlc-series-wall-single-cfg-24",
      slug: "viessmann-dlc-series-wall-single-cfg-24",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmhbh36dak",
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
      id: "viessmann-dlc-series-wall-single-cfg-25",
      slug: "viessmann-dlc-series-wall-single-cfg-25",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmrbh48eak",
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
      id: "viessmann-dlc-series-wall-single-cfg-26",
      slug: "viessmann-dlc-series-wall-single-cfg-26",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlclrch48aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-27",
      slug: "viessmann-dlc-series-wall-single-cfg-27",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlclrch48aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-28",
      slug: "viessmann-dlc-series-wall-single-cfg-28",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh24aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-29",
      slug: "viessmann-dlc-series-wall-single-cfg-29",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcprbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-30",
      slug: "viessmann-dlc-series-wall-single-cfg-30",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh30aak11",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-31",
      slug: "viessmann-dlc-series-wall-single-cfg-31",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-32",
      slug: "viessmann-dlc-series-wall-single-cfg-32",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh24aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-33",
      slug: "viessmann-dlc-series-wall-single-cfg-33",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh09aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-34",
      slug: "viessmann-dlc-series-wall-single-cfg-34",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh30aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.1,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-35",
      slug: "viessmann-dlc-series-wall-single-cfg-35",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-36",
      slug: "viessmann-dlc-series-wall-single-cfg-36",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aaj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-37",
      slug: "viessmann-dlc-series-wall-single-cfg-37",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh06aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-38",
      slug: "viessmann-dlc-series-wall-single-cfg-38",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcerbh09aaj",
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
      id: "viessmann-dlc-series-wall-single-cfg-39",
      slug: "viessmann-dlc-series-wall-single-cfg-39",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcerbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-40",
      slug: "viessmann-dlc-series-wall-single-cfg-40",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcerbh30aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-41",
      slug: "viessmann-dlc-series-wall-single-cfg-41",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcerbh09aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-42",
      slug: "viessmann-dlc-series-wall-single-cfg-42",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh09aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-43",
      slug: "viessmann-dlc-series-wall-single-cfg-43",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-44",
      slug: "viessmann-dlc-series-wall-single-cfg-44",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-45",
      slug: "viessmann-dlc-series-wall-single-cfg-45",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh09aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-46",
      slug: "viessmann-dlc-series-wall-single-cfg-46",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh06aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-47",
      slug: "viessmann-dlc-series-wall-single-cfg-47",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-48",
      slug: "viessmann-dlc-series-wall-single-cfg-48",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aak",
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
      id: "viessmann-dlc-series-wall-single-cfg-49",
      slug: "viessmann-dlc-series-wall-single-cfg-49",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-50",
      slug: "viessmann-dlc-series-wall-single-cfg-50",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-51",
      slug: "viessmann-dlc-series-wall-single-cfg-51",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-52",
      slug: "viessmann-dlc-series-wall-single-cfg-52",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlclrch48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 15.2,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-53",
      slug: "viessmann-dlc-series-wall-single-cfg-53",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-dlc-series-wall-single-cfg-54",
      slug: "viessmann-dlc-series-wall-single-cfg-54",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmhbh48eak",
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
      id: "viessmann-dlc-series-wall-single-cfg-55",
      slug: "viessmann-dlc-series-wall-single-cfg-55",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmhbh36dak",
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
      id: "viessmann-dlc-series-wall-single-cfg-56",
      slug: "viessmann-dlc-series-wall-single-cfg-56",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlcmrbh48eak",
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
      id: "viessmann-dlc-series-wall-single-cfg-57",
      slug: "viessmann-dlc-series-wall-single-cfg-57",
      modelId: "viessmann-dlc-series-wall-single",
      outdoorUnitId: "viessmann-dlclrch48aak",
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
      id: "viessmann-standard-wall-single-cfg-1",
      slug: "viessmann-standard-wall-single-cfg-1",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch58aak",
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
      id: "viessmann-standard-wall-single-cfg-2",
      slug: "viessmann-standard-wall-single-cfg-2",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch36aak",
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
      id: "viessmann-standard-wall-single-cfg-3",
      slug: "viessmann-standard-wall-single-cfg-3",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlcsrbh36abk",
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
      id: "viessmann-standard-wall-single-cfg-4",
      slug: "viessmann-standard-wall-single-cfg-4",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlcurah48aak",
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
      id: "viessmann-standard-wall-single-cfg-5",
      slug: "viessmann-standard-wall-single-cfg-5",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlcurah60aak",
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
      id: "viessmann-standard-wall-single-cfg-6",
      slug: "viessmann-standard-wall-single-cfg-6",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlcurah18aak",
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
      id: "viessmann-standard-wall-single-cfg-7",
      slug: "viessmann-standard-wall-single-cfg-7",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlcurah36aak",
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
      id: "viessmann-standard-wall-single-cfg-8",
      slug: "viessmann-standard-wall-single-cfg-8",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch36aak",
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
      id: "viessmann-standard-wall-single-cfg-9",
      slug: "viessmann-standard-wall-single-cfg-9",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch36aak",
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
      id: "viessmann-standard-wall-single-cfg-10",
      slug: "viessmann-standard-wall-single-cfg-10",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch36aak",
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
      id: "viessmann-standard-wall-single-cfg-11",
      slug: "viessmann-standard-wall-single-cfg-11",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch58aak",
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
      id: "viessmann-standard-wall-single-cfg-12",
      slug: "viessmann-standard-wall-single-cfg-12",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch58aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-standard-wall-single-cfg-13",
      slug: "viessmann-standard-wall-single-cfg-13",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlcerbh12aaj",
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
      id: "viessmann-standard-wall-single-cfg-14",
      slug: "viessmann-standard-wall-single-cfg-14",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlcerbh12aak",
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
      id: "viessmann-standard-wall-single-cfg-15",
      slug: "viessmann-standard-wall-single-cfg-15",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlcerbh24aak",
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
      id: "viessmann-standard-wall-single-cfg-16",
      slug: "viessmann-standard-wall-single-cfg-16",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch36aak",
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
      id: "viessmann-standard-wall-single-cfg-17",
      slug: "viessmann-standard-wall-single-cfg-17",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-dlclrch58aak",
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
      id: "viessmann-standard-wall-single-cfg-18",
      slug: "viessmann-standard-wall-single-cfg-18",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-d5csrah36aak",
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
      id: "viessmann-standard-wall-single-cfg-19",
      slug: "viessmann-standard-wall-single-cfg-19",
      modelId: "viessmann-standard-wall-single",
      outdoorUnitId: "viessmann-d5csrah36aak",
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
      id: "viessmann-dlseries-central-ducted-cfg-1",
      slug: "viessmann-dlseries-central-ducted-cfg-1",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah24aak",
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
      id: "viessmann-dlseries-central-ducted-cfg-2",
      slug: "viessmann-dlseries-central-ducted-cfg-2",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah18abk",
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
      id: "viessmann-dlseries-central-ducted-cfg-3",
      slug: "viessmann-dlseries-central-ducted-cfg-3",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah24abk",
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
      id: "viessmann-dlseries-central-ducted-cfg-4",
      slug: "viessmann-dlseries-central-ducted-cfg-4",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah48abk",
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
      id: "viessmann-dlseries-central-ducted-cfg-5",
      slug: "viessmann-dlseries-central-ducted-cfg-5",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah36abk",
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
      id: "viessmann-dlseries-central-ducted-cfg-6",
      slug: "viessmann-dlseries-central-ducted-cfg-6",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah30abk",
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
      id: "viessmann-dlseries-central-ducted-cfg-7",
      slug: "viessmann-dlseries-central-ducted-cfg-7",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah60abk",
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
      id: "viessmann-dlseries-central-ducted-cfg-8",
      slug: "viessmann-dlseries-central-ducted-cfg-8",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah48abk",
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
      id: "viessmann-dlseries-central-ducted-cfg-9",
      slug: "viessmann-dlseries-central-ducted-cfg-9",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcurah60abk",
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
      id: "viessmann-dlseries-central-ducted-cfg-10",
      slug: "viessmann-dlseries-central-ducted-cfg-10",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcsrbh18aak",
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
      id: "viessmann-dlseries-central-ducted-cfg-11",
      slug: "viessmann-dlseries-central-ducted-cfg-11",
      modelId: "viessmann-dlseries-central-ducted",
      outdoorUnitId: "viessmann-dlcsrbh24aak",
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
      id: "viessmann-dl-series-central-ducted-cfg-1",
      slug: "viessmann-dl-series-central-ducted-cfg-1",
      modelId: "viessmann-dl-series-central-ducted",
      outdoorUnitId: "viessmann-dlcurah18abk",
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
      id: "viessmann-dl-series-central-ducted-cfg-2",
      slug: "viessmann-dl-series-central-ducted-cfg-2",
      modelId: "viessmann-dl-series-central-ducted",
      outdoorUnitId: "viessmann-dlcurah24abk",
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
      id: "viessmann-dl-series-central-ducted-cfg-3",
      slug: "viessmann-dl-series-central-ducted-cfg-3",
      modelId: "viessmann-dl-series-central-ducted",
      outdoorUnitId: "viessmann-dlcurah24abk",
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
      id: "viessmann-dl-series-central-ducted-cfg-4",
      slug: "viessmann-dl-series-central-ducted-cfg-4",
      modelId: "viessmann-dl-series-central-ducted",
      outdoorUnitId: "viessmann-dlcurah30abk",
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
      id: "viessmann-dl-series-central-ducted-cfg-5",
      slug: "viessmann-dl-series-central-ducted-cfg-5",
      modelId: "viessmann-dl-series-central-ducted",
      outdoorUnitId: "viessmann-dlcurah36abk",
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
      id: "viessmann-dl-series-central-ducted-cfg-6",
      slug: "viessmann-dl-series-central-ducted-cfg-6",
      modelId: "viessmann-dl-series-central-ducted",
      outdoorUnitId: "viessmann-dlcurah36abk",
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
      id: "viessmann-d5c-series-central-ducted-cfg-1",
      slug: "viessmann-d5c-series-central-ducted-cfg-1",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cshah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.2,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-2",
      slug: "viessmann-d5c-series-central-ducted-cfg-2",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cshah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-3",
      slug: "viessmann-d5c-series-central-ducted-cfg-3",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cshah33aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-4",
      slug: "viessmann-d5c-series-central-ducted-cfg-4",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5csrah30aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-5",
      slug: "viessmann-d5c-series-central-ducted-cfg-5",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5clhah36aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.3,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-6",
      slug: "viessmann-d5c-series-central-ducted-cfg-6",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5clhah48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-7",
      slug: "viessmann-d5c-series-central-ducted-cfg-7",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5clhah58aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 15.4,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-8",
      slug: "viessmann-d5c-series-central-ducted-cfg-8",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah18aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-9",
      slug: "viessmann-d5c-series-central-ducted-cfg-9",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah24aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-10",
      slug: "viessmann-d5c-series-central-ducted-cfg-10",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-11",
      slug: "viessmann-d5c-series-central-ducted-cfg-11",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah30aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.9,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-12",
      slug: "viessmann-d5c-series-central-ducted-cfg-12",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah36aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-13",
      slug: "viessmann-d5c-series-central-ducted-cfg-13",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah36aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-14",
      slug: "viessmann-d5c-series-central-ducted-cfg-14",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah48aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-15",
      slug: "viessmann-d5c-series-central-ducted-cfg-15",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah60aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-16",
      slug: "viessmann-d5c-series-central-ducted-cfg-16",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah60aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-17",
      slug: "viessmann-d5c-series-central-ducted-cfg-17",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-18",
      slug: "viessmann-d5c-series-central-ducted-cfg-18",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah30aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-19",
      slug: "viessmann-d5c-series-central-ducted-cfg-19",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5cuhah48aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-20",
      slug: "viessmann-d5c-series-central-ducted-cfg-20",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5curah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-21",
      slug: "viessmann-d5c-series-central-ducted-cfg-21",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5curah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.2,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-central-ducted-cfg-22",
      slug: "viessmann-d5c-series-central-ducted-cfg-22",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5curah30aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-23",
      slug: "viessmann-d5c-series-central-ducted-cfg-23",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5curah36aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-24",
      slug: "viessmann-d5c-series-central-ducted-cfg-24",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5curah48aak",
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
      id: "viessmann-d5c-series-central-ducted-cfg-25",
      slug: "viessmann-d5c-series-central-ducted-cfg-25",
      modelId: "viessmann-d5c-series-central-ducted",
      outdoorUnitId: "viessmann-d5curah60aak",
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
      id: "viessmann-d5c-series-wall-single-cfg-1",
      slug: "viessmann-d5c-series-wall-single-cfg-1",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah06aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.7,
      hspf2: 14.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-2",
      slug: "viessmann-d5c-series-wall-single-cfg-2",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah06aak",
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
      id: "viessmann-d5c-series-wall-single-cfg-3",
      slug: "viessmann-d5c-series-wall-single-cfg-3",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.5,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-4",
      slug: "viessmann-d5c-series-wall-single-cfg-4",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-5",
      slug: "viessmann-d5c-series-wall-single-cfg-5",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.7,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-6",
      slug: "viessmann-d5c-series-wall-single-cfg-6",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.3,
      hspf2: 10.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-7",
      slug: "viessmann-d5c-series-wall-single-cfg-7",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-8",
      slug: "viessmann-d5c-series-wall-single-cfg-8",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.6,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-9",
      slug: "viessmann-d5c-series-wall-single-cfg-9",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-10",
      slug: "viessmann-d5c-series-wall-single-cfg-10",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-11",
      slug: "viessmann-d5c-series-wall-single-cfg-11",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.3,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-12",
      slug: "viessmann-d5c-series-wall-single-cfg-12",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-13",
      slug: "viessmann-d5c-series-wall-single-cfg-13",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-14",
      slug: "viessmann-d5c-series-wall-single-cfg-14",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20.2,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-15",
      slug: "viessmann-d5c-series-wall-single-cfg-15",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-16",
      slug: "viessmann-d5c-series-wall-single-cfg-16",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.7,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-17",
      slug: "viessmann-d5c-series-wall-single-cfg-17",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-18",
      slug: "viessmann-d5c-series-wall-single-cfg-18",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20.2,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-19",
      slug: "viessmann-d5c-series-wall-single-cfg-19",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.5,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-20",
      slug: "viessmann-d5c-series-wall-single-cfg-20",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-21",
      slug: "viessmann-d5c-series-wall-single-cfg-21",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18.5,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-22",
      slug: "viessmann-d5c-series-wall-single-cfg-22",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-23",
      slug: "viessmann-d5c-series-wall-single-cfg-23",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.8,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-24",
      slug: "viessmann-d5c-series-wall-single-cfg-24",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.5,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-25",
      slug: "viessmann-d5c-series-wall-single-cfg-25",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.2,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-26",
      slug: "viessmann-d5c-series-wall-single-cfg-26",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cshah33aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.6,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-27",
      slug: "viessmann-d5c-series-wall-single-cfg-27",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5csrah30aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-28",
      slug: "viessmann-d5c-series-wall-single-cfg-28",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5clhah36aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36600,
      coolingCapacityMaxBtu: 36600,
      seer2: 21.3,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-29",
      slug: "viessmann-d5c-series-wall-single-cfg-29",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5clhah36aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36400,
      coolingCapacityMaxBtu: 36400,
      seer2: 20.2,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-30",
      slug: "viessmann-d5c-series-wall-single-cfg-30",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5clhah36aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.8,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-31",
      slug: "viessmann-d5c-series-wall-single-cfg-31",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5clhah48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.2,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-32",
      slug: "viessmann-d5c-series-wall-single-cfg-32",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5clhah48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18.7,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-33",
      slug: "viessmann-d5c-series-wall-single-cfg-33",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5clhah48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.8,
      hspf2: 10.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-34",
      slug: "viessmann-d5c-series-wall-single-cfg-34",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5clhah58aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 18.1,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-35",
      slug: "viessmann-d5c-series-wall-single-cfg-35",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5clhah58aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 15.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-36",
      slug: "viessmann-d5c-series-wall-single-cfg-36",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah18cak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-37",
      slug: "viessmann-d5c-series-wall-single-cfg-37",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah18cak",
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
      id: "viessmann-d5c-series-wall-single-cfg-38",
      slug: "viessmann-d5c-series-wall-single-cfg-38",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah18cak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 22.5,
      hspf2: 10.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-39",
      slug: "viessmann-d5c-series-wall-single-cfg-39",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah24dak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-40",
      slug: "viessmann-d5c-series-wall-single-cfg-40",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah24dak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-41",
      slug: "viessmann-d5c-series-wall-single-cfg-41",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah24dak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-42",
      slug: "viessmann-d5c-series-wall-single-cfg-42",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah30eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 24,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-43",
      slug: "viessmann-d5c-series-wall-single-cfg-43",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah30eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-44",
      slug: "viessmann-d5c-series-wall-single-cfg-44",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah30eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21.75,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-45",
      slug: "viessmann-d5c-series-wall-single-cfg-45",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah36eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 23.1,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-46",
      slug: "viessmann-d5c-series-wall-single-cfg-46",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah36eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-47",
      slug: "viessmann-d5c-series-wall-single-cfg-47",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah36eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 21.3,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-48",
      slug: "viessmann-d5c-series-wall-single-cfg-48",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah48fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 23,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-49",
      slug: "viessmann-d5c-series-wall-single-cfg-49",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah48fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-50",
      slug: "viessmann-d5c-series-wall-single-cfg-50",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah48fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 21.75,
      hspf2: 11.15,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-51",
      slug: "viessmann-d5c-series-wall-single-cfg-51",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah55fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 22.3,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-52",
      slug: "viessmann-d5c-series-wall-single-cfg-52",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah55fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 53000,
      coolingCapacityMaxBtu: 53000,
      seer2: 20.2,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "viessmann-d5c-series-wall-single-cfg-53",
      slug: "viessmann-d5c-series-wall-single-cfg-53",
      modelId: "viessmann-d5c-series-wall-single",
      outdoorUnitId: "viessmann-d5cmhah55fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 21.25,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 38000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-2",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-3",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-4",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-5",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-6",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-7",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-8",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-9",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-10",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-11",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-12",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-13",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-14",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-15",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-16",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-17",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-18",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-19",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-20",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-21",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-22",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-23",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-24",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-25",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-26",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-27",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-28",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-29",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-31",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-32",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-33",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-35",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-37",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-38",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-39",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-41",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-42",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-43",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-44",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-45",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-46",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-47",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-48",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15700,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9700,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.93,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlc-series-wall-single-cfg-53",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-54",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-55",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-56",
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
      configurationId: "viessmann-dlc-series-wall-single-cfg-57",
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
      configurationId: "viessmann-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-standard-wall-single-cfg-2",
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
      configurationId: "viessmann-standard-wall-single-cfg-3",
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
      configurationId: "viessmann-standard-wall-single-cfg-4",
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
      configurationId: "viessmann-standard-wall-single-cfg-5",
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
      configurationId: "viessmann-standard-wall-single-cfg-6",
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
      configurationId: "viessmann-standard-wall-single-cfg-7",
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
      configurationId: "viessmann-standard-wall-single-cfg-8",
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
      configurationId: "viessmann-standard-wall-single-cfg-9",
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
      configurationId: "viessmann-standard-wall-single-cfg-10",
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
      configurationId: "viessmann-standard-wall-single-cfg-11",
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
      configurationId: "viessmann-standard-wall-single-cfg-12",
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
      configurationId: "viessmann-standard-wall-single-cfg-13",
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
      configurationId: "viessmann-standard-wall-single-cfg-14",
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
      configurationId: "viessmann-standard-wall-single-cfg-15",
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
      configurationId: "viessmann-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-standard-wall-single-cfg-17",
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
      configurationId: "viessmann-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17900,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-dlseries-central-ducted-cfg-1",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-2",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-3",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-4",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-5",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-6",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-7",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-8",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-9",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-10",
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
      configurationId: "viessmann-dlseries-central-ducted-cfg-11",
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
      configurationId: "viessmann-dl-series-central-ducted-cfg-1",
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
      configurationId: "viessmann-dl-series-central-ducted-cfg-2",
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
      configurationId: "viessmann-dl-series-central-ducted-cfg-3",
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
      configurationId: "viessmann-dl-series-central-ducted-cfg-4",
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
      configurationId: "viessmann-dl-series-central-ducted-cfg-5",
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
      configurationId: "viessmann-dl-series-central-ducted-cfg-6",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-1",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-2",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 2.06,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-central-ducted-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 41000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-central-ducted-cfg-8",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-9",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-10",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-11",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-12",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-13",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-14",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-15",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-16",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-17",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-18",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-19",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-20",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-21",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-22",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-23",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-24",
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
      configurationId: "viessmann-d5c-series-central-ducted-cfg-25",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-1",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-2",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-3",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-4",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-5",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-6",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-7",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-8",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-9",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-10",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-11",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-12",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-13",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-14",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-wall-single-cfg-16",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-17",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-18",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-19",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-20",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-21",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-22",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-23",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-24",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-25",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 2.03,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-wall-single-cfg-28",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-29",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-30",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-31",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-wall-single-cfg-32",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-33",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-34",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-35",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-36",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-37",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-38",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-39",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23600,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-wall-single-cfg-40",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-wall-single-cfg-41",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-42",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 33000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31400,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "viessmann-d5c-series-wall-single-cfg-45",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-46",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-47",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-48",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-49",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-50",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-51",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-52",
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
      configurationId: "viessmann-d5c-series-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 44500,
          cop: 2.05,
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
