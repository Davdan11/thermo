import type { BrandDataset } from "../../types";

export const lpslegacyDataset: BrandDataset = {
  brand: {
    id: "lps-legacy",
    slug: "lps-legacy",
    name: "LPS LEGACY",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "lps-legacy-standard",
      slug: "lps-legacy-standard",
      name: "Standard",
      brandId: "lps-legacy",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlc-series",
      slug: "lps-legacy-dlc-series",
      name: "DLC-series",
      brandId: "lps-legacy",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dlseries",
      slug: "lps-legacy-dlseries",
      name: "Dlseries",
      brandId: "lps-legacy",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dl-series",
      slug: "lps-legacy-dl-series",
      name: "DL series",
      brandId: "lps-legacy",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series",
      slug: "lps-legacy-d5f-series",
      name: "D5F Series",
      brandId: "lps-legacy",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series",
      slug: "lps-legacy-d5c-series",
      name: "D5C Series",
      brandId: "lps-legacy",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "lps-legacy-standard-wall-single",
      slug: "lps-legacy-standard-wall-single",
      name: "Standard",
      seriesId: "lps-legacy-standard",
      brandId: "lps-legacy",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 40500,
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
      id: "lps-legacy-dlc-series-wall-single",
      slug: "lps-legacy-dlc-series-wall-single",
      name: "DLC-series",
      seriesId: "lps-legacy-dlc-series",
      brandId: "lps-legacy",
      modelNumber: "DLC-series",
      normalizedModelNumber: "dlc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 35000,
      seer2Min: 15.2,
      seer2Max: 28.1,
      hspf2Min: 8.7,
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
      id: "lps-legacy-dlseries-central-ducted",
      slug: "lps-legacy-dlseries-central-ducted",
      name: "Dlseries",
      seriesId: "lps-legacy-dlseries",
      brandId: "lps-legacy",
      modelNumber: "Dlseries",
      normalizedModelNumber: "dlseries",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 32000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.3,
      seer2Max: 15.6,
      hspf2Min: 9.4,
      hspf2Max: 9.4,
      cop5FMin: 1.9,
      cop5FMax: 1.91,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-dl-series-central-ducted",
      slug: "lps-legacy-dl-series-central-ducted",
      name: "DL series",
      seriesId: "lps-legacy-dl-series",
      brandId: "lps-legacy",
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
      id: "lps-legacy-d5f-series-central-ducted",
      slug: "lps-legacy-d5f-series-central-ducted",
      name: "D5F Series",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series",
      normalizedModelNumber: "d5f-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19.8,
      hspf2Min: 8.4,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-central-ducted",
      slug: "lps-legacy-d5c-series-central-ducted",
      name: "D5C Series",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series",
      normalizedModelNumber: "d5c-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 18500,
      seer2Min: 18.6,
      seer2Max: 18.8,
      hspf2Min: 8.7,
      hspf2Max: 9.2,
      cop5FMin: 1.99,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single",
      slug: "lps-legacy-d5f-series-wall-single",
      name: "D5F Series",
      seriesId: "lps-legacy-d5f-series",
      brandId: "lps-legacy",
      modelNumber: "D5F Series",
      normalizedModelNumber: "d5f-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.9,
      seer2Max: 33.1,
      hspf2Min: 8.5,
      hspf2Max: 15.6,
      cop5FMin: 1.8,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single",
      slug: "lps-legacy-d5c-series-wall-single",
      name: "D5C Series",
      seriesId: "lps-legacy-d5c-series",
      brandId: "lps-legacy",
      modelNumber: "D5C Series",
      normalizedModelNumber: "d5c-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 11700,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19.5,
      seer2Max: 25.2,
      hspf2Min: 9.1,
      hspf2Max: 11.3,
      cop5FMin: 1.9,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "lps-legacy-dlclrch36aak",
      modelNumber: "DLCLRCH36AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlclrch58aak",
      modelNumber: "DLCLRCH58AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcerbh12aak",
      modelNumber: "DLCERBH12AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcerbh12aaj",
      modelNumber: "DLCERBH12AAJ",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcerbh24aak",
      modelNumber: "DLCERBH24AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5clrah58aak",
      modelNumber: "D5CLRAH58AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cvrah12aaj",
      modelNumber: "D5CVRAH12AAJ",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cvrah12aak",
      modelNumber: "D5CVRAH12AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cvrah18aak",
      modelNumber: "D5CVRAH18AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmrah55fak",
      modelNumber: "D5CMRAH55FAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5csrah36aak",
      modelNumber: "D5CSRAH36AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah12aaj",
      modelNumber: "D5CERAH12AAJ",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah12aak",
      modelNumber: "D5CERAH12AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah24aak",
      modelNumber: "D5CERAH24AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah36aak",
      modelNumber: "D5CERAH36AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlclrch48aak",
      modelNumber: "DLCLRCH48AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcerbh18aak",
      modelNumber: "DLCERBH18AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcsrbh30aak",
      modelNumber: "DLCSRBH30AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcsrbh12aaj",
      modelNumber: "DLCSRBH12AAJ",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcerbh30aak",
      modelNumber: "DLCERBH30AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcsrbh30aak11",
      modelNumber: "DLCSRBH30AAK11",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcsrbh06aak",
      modelNumber: "DLCSRBH06AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcsrbh24aak",
      modelNumber: "DLCSRBH24AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcsrbh09aak",
      modelNumber: "DLCSRBH09AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcsrbh12aak",
      modelNumber: "DLCSRBH12AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcsrbh18aak",
      modelNumber: "DLCSRBH18AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcerbh09aaj",
      modelNumber: "DLCERBH09AAJ",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcerbh09aak",
      modelNumber: "DLCERBH09AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcurah60abk",
      modelNumber: "DLCURAH60ABK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcurah48abk",
      modelNumber: "DLCURAH48ABK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcurah18abk",
      modelNumber: "DLCURAH18ABK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcurah24abk",
      modelNumber: "DLCURAH24ABK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcurah30abk",
      modelNumber: "DLCURAH30ABK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-dlcurah36abk",
      modelNumber: "DLCURAH36ABK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cuhah18aak",
      modelNumber: "D5CUHAH18AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cuhah24aak",
      modelNumber: "D5CUHAH24AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cuhah30aak",
      modelNumber: "D5CUHAH30AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cuhah36aak",
      modelNumber: "D5CUHAH36AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cuhah48aak",
      modelNumber: "D5CUHAH48AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cuhah60aak",
      modelNumber: "D5CUHAH60AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5curah24aak",
      modelNumber: "D5CURAH24AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5curah36aak",
      modelNumber: "D5CURAH36AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5curah48aak",
      modelNumber: "D5CURAH48AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5curah60aak",
      modelNumber: "D5CURAH60AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cshah18aak",
      modelNumber: "D5CSHAH18AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cshah24aak",
      modelNumber: "D5CSHAH24AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cshah33aak",
      modelNumber: "D5CSHAH33AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5csrah18aak",
      modelNumber: "D5CSRAH18AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5csrah24aak",
      modelNumber: "D5CSRAH24AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5clhah36aak",
      modelNumber: "D5CLHAH36AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5clhah48aak",
      modelNumber: "D5CLHAH48AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5clhah58aak",
      modelNumber: "D5CLHAH58AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5clrah48aak",
      modelNumber: "D5CLRAH48AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5csrah30aak",
      modelNumber: "D5CSRAH30AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5curah18aak",
      modelNumber: "D5CURAH18AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5curah30aak",
      modelNumber: "D5CURAH30AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5clrah36aak",
      modelNumber: "D5CLRAH36AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cshah06aak",
      modelNumber: "D5CSHAH06AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cshah09aak",
      modelNumber: "D5CSHAH09AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cshah12aak",
      modelNumber: "D5CSHAH12AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5csrah12aaj",
      modelNumber: "D5CSRAH12AAJ",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5csrah09aak",
      modelNumber: "D5CSRAH09AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5csrah12aak",
      modelNumber: "D5CSRAH12AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cvrah09aak",
      modelNumber: "D5CVRAH09AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cvrah24aak",
      modelNumber: "D5CVRAH24AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cprah06aak",
      modelNumber: "D5CPRAH06AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cprah09aak",
      modelNumber: "D5CPRAH09AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cprah12aak",
      modelNumber: "D5CPRAH12AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cprah18aa",
      modelNumber: "D5CPRAH18AA",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah09aaj",
      modelNumber: "D5CERAH09AAJ",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah09aak",
      modelNumber: "D5CERAH09AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah30aak",
      modelNumber: "D5CERAH30AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmhah18cak",
      modelNumber: "D5CMHAH18CAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmhah24dak",
      modelNumber: "D5CMHAH24DAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmhah30eak",
      modelNumber: "D5CMHAH30EAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmhah36eak",
      modelNumber: "D5CMHAH36EAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmhah48fak",
      modelNumber: "D5CMHAH48FAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmhah55fak",
      modelNumber: "D5CMHAH55FAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmrah18cak",
      modelNumber: "D5CMRAH18CAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmrah24dak",
      modelNumber: "D5CMRAH24DAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmrah30eak",
      modelNumber: "D5CMRAH30EAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmrah36eak",
      modelNumber: "D5CMRAH36EAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cmrah48fak",
      modelNumber: "D5CMRAH48FAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    },
    {
      id: "lps-legacy-d5cerah18aak",
      modelNumber: "D5CERAH18AAK",
      brandId: "lps-legacy",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "lps-legacy-standard-wall-single-cfg-1",
      slug: "lps-legacy-standard-wall-single-cfg-1",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch36aak",
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
      id: "lps-legacy-standard-wall-single-cfg-2",
      slug: "lps-legacy-standard-wall-single-cfg-2",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch36aak",
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
      id: "lps-legacy-standard-wall-single-cfg-3",
      slug: "lps-legacy-standard-wall-single-cfg-3",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch36aak",
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
      id: "lps-legacy-standard-wall-single-cfg-4",
      slug: "lps-legacy-standard-wall-single-cfg-4",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch36aak",
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
      id: "lps-legacy-standard-wall-single-cfg-5",
      slug: "lps-legacy-standard-wall-single-cfg-5",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch58aak",
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
      id: "lps-legacy-standard-wall-single-cfg-6",
      slug: "lps-legacy-standard-wall-single-cfg-6",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlcerbh12aak",
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
      id: "lps-legacy-standard-wall-single-cfg-7",
      slug: "lps-legacy-standard-wall-single-cfg-7",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlcerbh12aaj",
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
      id: "lps-legacy-standard-wall-single-cfg-8",
      slug: "lps-legacy-standard-wall-single-cfg-8",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlcerbh24aak",
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
      id: "lps-legacy-standard-wall-single-cfg-9",
      slug: "lps-legacy-standard-wall-single-cfg-9",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch58aak",
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
      id: "lps-legacy-standard-wall-single-cfg-10",
      slug: "lps-legacy-standard-wall-single-cfg-10",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah58aak",
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
      id: "lps-legacy-standard-wall-single-cfg-11",
      slug: "lps-legacy-standard-wall-single-cfg-11",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah12aaj",
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
      id: "lps-legacy-standard-wall-single-cfg-12",
      slug: "lps-legacy-standard-wall-single-cfg-12",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah12aak",
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
      id: "lps-legacy-standard-wall-single-cfg-13",
      slug: "lps-legacy-standard-wall-single-cfg-13",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah18aak",
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
      id: "lps-legacy-standard-wall-single-cfg-14",
      slug: "lps-legacy-standard-wall-single-cfg-14",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah58aak",
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
      id: "lps-legacy-standard-wall-single-cfg-15",
      slug: "lps-legacy-standard-wall-single-cfg-15",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah58aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 58000,
      coolingCapacityMaxBtu: 58000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-standard-wall-single-cfg-16",
      slug: "lps-legacy-standard-wall-single-cfg-16",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah12aaj",
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
      id: "lps-legacy-standard-wall-single-cfg-17",
      slug: "lps-legacy-standard-wall-single-cfg-17",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah12aak",
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
      id: "lps-legacy-standard-wall-single-cfg-18",
      slug: "lps-legacy-standard-wall-single-cfg-18",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah18aak",
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
      id: "lps-legacy-standard-wall-single-cfg-19",
      slug: "lps-legacy-standard-wall-single-cfg-19",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah55fak",
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
      id: "lps-legacy-standard-wall-single-cfg-20",
      slug: "lps-legacy-standard-wall-single-cfg-20",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah55fak",
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
      id: "lps-legacy-standard-wall-single-cfg-21",
      slug: "lps-legacy-standard-wall-single-cfg-21",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah55fak",
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
      id: "lps-legacy-standard-wall-single-cfg-22",
      slug: "lps-legacy-standard-wall-single-cfg-22",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah36aak",
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
      id: "lps-legacy-standard-wall-single-cfg-23",
      slug: "lps-legacy-standard-wall-single-cfg-23",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah36aak",
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
      id: "lps-legacy-standard-wall-single-cfg-24",
      slug: "lps-legacy-standard-wall-single-cfg-24",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cerah12aaj",
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
      id: "lps-legacy-standard-wall-single-cfg-25",
      slug: "lps-legacy-standard-wall-single-cfg-25",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cerah12aak",
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
      id: "lps-legacy-standard-wall-single-cfg-26",
      slug: "lps-legacy-standard-wall-single-cfg-26",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cerah24aak",
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
      id: "lps-legacy-standard-wall-single-cfg-27",
      slug: "lps-legacy-standard-wall-single-cfg-27",
      modelId: "lps-legacy-standard-wall-single",
      outdoorUnitId: "lps-legacy-d5cerah36aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-1",
      slug: "lps-legacy-dlc-series-wall-single-cfg-1",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch48aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-2",
      slug: "lps-legacy-dlc-series-wall-single-cfg-2",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcerbh18aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-3",
      slug: "lps-legacy-dlc-series-wall-single-cfg-3",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh30aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-4",
      slug: "lps-legacy-dlc-series-wall-single-cfg-4",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh12aaj",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-5",
      slug: "lps-legacy-dlc-series-wall-single-cfg-5",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcerbh30aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-6",
      slug: "lps-legacy-dlc-series-wall-single-cfg-6",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh30aak11",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-7",
      slug: "lps-legacy-dlc-series-wall-single-cfg-7",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh12aaj",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-8",
      slug: "lps-legacy-dlc-series-wall-single-cfg-8",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch48aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-9",
      slug: "lps-legacy-dlc-series-wall-single-cfg-9",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh06aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-10",
      slug: "lps-legacy-dlc-series-wall-single-cfg-10",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch48aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-11",
      slug: "lps-legacy-dlc-series-wall-single-cfg-11",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh24aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-12",
      slug: "lps-legacy-dlc-series-wall-single-cfg-12",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh09aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-13",
      slug: "lps-legacy-dlc-series-wall-single-cfg-13",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh12aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-14",
      slug: "lps-legacy-dlc-series-wall-single-cfg-14",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh18aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-15",
      slug: "lps-legacy-dlc-series-wall-single-cfg-15",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh24aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-16",
      slug: "lps-legacy-dlc-series-wall-single-cfg-16",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh18aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-17",
      slug: "lps-legacy-dlc-series-wall-single-cfg-17",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh12aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-18",
      slug: "lps-legacy-dlc-series-wall-single-cfg-18",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh24aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-19",
      slug: "lps-legacy-dlc-series-wall-single-cfg-19",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcerbh09aaj",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-20",
      slug: "lps-legacy-dlc-series-wall-single-cfg-20",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh18aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-21",
      slug: "lps-legacy-dlc-series-wall-single-cfg-21",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh09aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-22",
      slug: "lps-legacy-dlc-series-wall-single-cfg-22",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh12aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-23",
      slug: "lps-legacy-dlc-series-wall-single-cfg-23",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlclrch48aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-24",
      slug: "lps-legacy-dlc-series-wall-single-cfg-24",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh24aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-25",
      slug: "lps-legacy-dlc-series-wall-single-cfg-25",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh12aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-26",
      slug: "lps-legacy-dlc-series-wall-single-cfg-26",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh09aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-27",
      slug: "lps-legacy-dlc-series-wall-single-cfg-27",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh06aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-28",
      slug: "lps-legacy-dlc-series-wall-single-cfg-28",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh18aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-29",
      slug: "lps-legacy-dlc-series-wall-single-cfg-29",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh12aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-30",
      slug: "lps-legacy-dlc-series-wall-single-cfg-30",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh06aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-31",
      slug: "lps-legacy-dlc-series-wall-single-cfg-31",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcerbh09aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-32",
      slug: "lps-legacy-dlc-series-wall-single-cfg-32",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh09aak",
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
      id: "lps-legacy-dlc-series-wall-single-cfg-33",
      slug: "lps-legacy-dlc-series-wall-single-cfg-33",
      modelId: "lps-legacy-dlc-series-wall-single",
      outdoorUnitId: "lps-legacy-dlcsrbh18aak",
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
      id: "lps-legacy-dlseries-central-ducted-cfg-1",
      slug: "lps-legacy-dlseries-central-ducted-cfg-1",
      modelId: "lps-legacy-dlseries-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah60abk",
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
      id: "lps-legacy-dlseries-central-ducted-cfg-2",
      slug: "lps-legacy-dlseries-central-ducted-cfg-2",
      modelId: "lps-legacy-dlseries-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah48abk",
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
      id: "lps-legacy-dlseries-central-ducted-cfg-3",
      slug: "lps-legacy-dlseries-central-ducted-cfg-3",
      modelId: "lps-legacy-dlseries-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah60abk",
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
      id: "lps-legacy-dl-series-central-ducted-cfg-1",
      slug: "lps-legacy-dl-series-central-ducted-cfg-1",
      modelId: "lps-legacy-dl-series-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah18abk",
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
      id: "lps-legacy-dl-series-central-ducted-cfg-2",
      slug: "lps-legacy-dl-series-central-ducted-cfg-2",
      modelId: "lps-legacy-dl-series-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah24abk",
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
      id: "lps-legacy-dl-series-central-ducted-cfg-3",
      slug: "lps-legacy-dl-series-central-ducted-cfg-3",
      modelId: "lps-legacy-dl-series-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah24abk",
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
      id: "lps-legacy-dl-series-central-ducted-cfg-4",
      slug: "lps-legacy-dl-series-central-ducted-cfg-4",
      modelId: "lps-legacy-dl-series-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah30abk",
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
      id: "lps-legacy-dl-series-central-ducted-cfg-5",
      slug: "lps-legacy-dl-series-central-ducted-cfg-5",
      modelId: "lps-legacy-dl-series-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah36abk",
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
      id: "lps-legacy-dl-series-central-ducted-cfg-6",
      slug: "lps-legacy-dl-series-central-ducted-cfg-6",
      modelId: "lps-legacy-dl-series-central-ducted",
      outdoorUnitId: "lps-legacy-dlcurah36abk",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-1",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-1",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah18aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-2",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-2",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah24aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-3",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-3",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah24aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-4",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-4",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah30aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-5",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-5",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah36aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-6",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-6",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah48aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-7",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-7",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah60aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-8",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-8",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah60aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-9",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-9",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5curah24aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-10",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-10",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5curah36aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-11",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-11",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5curah48aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-12",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-12",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5curah60aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-13",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-13",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah18aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-14",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-14",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah30aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-15",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-15",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah48aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-16",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-16",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cshah18aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-17",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-17",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cshah24aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-18",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-18",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cshah33aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-19",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-19",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5csrah18aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-20",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-20",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5csrah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.8,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-central-ducted-cfg-21",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-21",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5clhah36aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-22",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-22",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5clhah48aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-23",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-23",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5clhah58aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-24",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-24",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5clrah48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-central-ducted-cfg-25",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-25",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5cuhah36aak",
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
      id: "lps-legacy-d5f-series-central-ducted-cfg-26",
      slug: "lps-legacy-d5f-series-central-ducted-cfg-26",
      modelId: "lps-legacy-d5f-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5csrah30aak",
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
      id: "lps-legacy-d5c-series-central-ducted-cfg-1",
      slug: "lps-legacy-d5c-series-central-ducted-cfg-1",
      modelId: "lps-legacy-d5c-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5curah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.8,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-central-ducted-cfg-2",
      slug: "lps-legacy-d5c-series-central-ducted-cfg-2",
      modelId: "lps-legacy-d5c-series-central-ducted",
      outdoorUnitId: "lps-legacy-d5curah30aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 18.6,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-1",
      slug: "lps-legacy-d5f-series-wall-single-cfg-1",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah36aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-2",
      slug: "lps-legacy-d5f-series-wall-single-cfg-2",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah06aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-3",
      slug: "lps-legacy-d5f-series-wall-single-cfg-3",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah06aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-4",
      slug: "lps-legacy-d5f-series-wall-single-cfg-4",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah06aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 21.5,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-5",
      slug: "lps-legacy-d5f-series-wall-single-cfg-5",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-6",
      slug: "lps-legacy-d5f-series-wall-single-cfg-6",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-7",
      slug: "lps-legacy-d5f-series-wall-single-cfg-7",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-8",
      slug: "lps-legacy-d5f-series-wall-single-cfg-8",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-9",
      slug: "lps-legacy-d5f-series-wall-single-cfg-9",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-10",
      slug: "lps-legacy-d5f-series-wall-single-cfg-10",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-11",
      slug: "lps-legacy-d5f-series-wall-single-cfg-11",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah12aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-12",
      slug: "lps-legacy-d5f-series-wall-single-cfg-12",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah12aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-13",
      slug: "lps-legacy-d5f-series-wall-single-cfg-13",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah12aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-14",
      slug: "lps-legacy-d5f-series-wall-single-cfg-14",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah12aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-15",
      slug: "lps-legacy-d5f-series-wall-single-cfg-15",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah12aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-16",
      slug: "lps-legacy-d5f-series-wall-single-cfg-16",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah12aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-17",
      slug: "lps-legacy-d5f-series-wall-single-cfg-17",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-18",
      slug: "lps-legacy-d5f-series-wall-single-cfg-18",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-19",
      slug: "lps-legacy-d5f-series-wall-single-cfg-19",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-20",
      slug: "lps-legacy-d5f-series-wall-single-cfg-20",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-21",
      slug: "lps-legacy-d5f-series-wall-single-cfg-21",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-22",
      slug: "lps-legacy-d5f-series-wall-single-cfg-22",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-23",
      slug: "lps-legacy-d5f-series-wall-single-cfg-23",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-24",
      slug: "lps-legacy-d5f-series-wall-single-cfg-24",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah24aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-25",
      slug: "lps-legacy-d5f-series-wall-single-cfg-25",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah24aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-26",
      slug: "lps-legacy-d5f-series-wall-single-cfg-26",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah24aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-27",
      slug: "lps-legacy-d5f-series-wall-single-cfg-27",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cshah33aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-28",
      slug: "lps-legacy-d5f-series-wall-single-cfg-28",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah12aaj",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-29",
      slug: "lps-legacy-d5f-series-wall-single-cfg-29",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-30",
      slug: "lps-legacy-d5f-series-wall-single-cfg-30",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.2,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-31",
      slug: "lps-legacy-d5f-series-wall-single-cfg-31",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-32",
      slug: "lps-legacy-d5f-series-wall-single-cfg-32",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-33",
      slug: "lps-legacy-d5f-series-wall-single-cfg-33",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-34",
      slug: "lps-legacy-d5f-series-wall-single-cfg-34",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.8,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-35",
      slug: "lps-legacy-d5f-series-wall-single-cfg-35",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-36",
      slug: "lps-legacy-d5f-series-wall-single-cfg-36",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 10.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-37",
      slug: "lps-legacy-d5f-series-wall-single-cfg-37",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.2,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-38",
      slug: "lps-legacy-d5f-series-wall-single-cfg-38",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.7,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-39",
      slug: "lps-legacy-d5f-series-wall-single-cfg-39",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah12aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-40",
      slug: "lps-legacy-d5f-series-wall-single-cfg-40",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah12aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-41",
      slug: "lps-legacy-d5f-series-wall-single-cfg-41",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-42",
      slug: "lps-legacy-d5f-series-wall-single-cfg-42",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-43",
      slug: "lps-legacy-d5f-series-wall-single-cfg-43",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.8,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-44",
      slug: "lps-legacy-d5f-series-wall-single-cfg-44",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.9,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-45",
      slug: "lps-legacy-d5f-series-wall-single-cfg-45",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-46",
      slug: "lps-legacy-d5f-series-wall-single-cfg-46",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah18aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-47",
      slug: "lps-legacy-d5f-series-wall-single-cfg-47",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-48",
      slug: "lps-legacy-d5f-series-wall-single-cfg-48",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-49",
      slug: "lps-legacy-d5f-series-wall-single-cfg-49",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.1,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-50",
      slug: "lps-legacy-d5f-series-wall-single-cfg-50",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.2,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-51",
      slug: "lps-legacy-d5f-series-wall-single-cfg-51",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah24aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-52",
      slug: "lps-legacy-d5f-series-wall-single-cfg-52",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-53",
      slug: "lps-legacy-d5f-series-wall-single-cfg-53",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-54",
      slug: "lps-legacy-d5f-series-wall-single-cfg-54",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clhah36aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-55",
      slug: "lps-legacy-d5f-series-wall-single-cfg-55",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clhah36aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-56",
      slug: "lps-legacy-d5f-series-wall-single-cfg-56",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clhah36aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-57",
      slug: "lps-legacy-d5f-series-wall-single-cfg-57",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clhah48aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-58",
      slug: "lps-legacy-d5f-series-wall-single-cfg-58",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clhah48aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-59",
      slug: "lps-legacy-d5f-series-wall-single-cfg-59",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clhah48aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-60",
      slug: "lps-legacy-d5f-series-wall-single-cfg-60",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clhah58aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-61",
      slug: "lps-legacy-d5f-series-wall-single-cfg-61",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clhah58aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-62",
      slug: "lps-legacy-d5f-series-wall-single-cfg-62",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah36aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-63",
      slug: "lps-legacy-d5f-series-wall-single-cfg-63",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah36aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-64",
      slug: "lps-legacy-d5f-series-wall-single-cfg-64",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah36aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-65",
      slug: "lps-legacy-d5f-series-wall-single-cfg-65",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.1,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-66",
      slug: "lps-legacy-d5f-series-wall-single-cfg-66",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.9,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-67",
      slug: "lps-legacy-d5f-series-wall-single-cfg-67",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5clrah48aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.2,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-68",
      slug: "lps-legacy-d5f-series-wall-single-cfg-68",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-69",
      slug: "lps-legacy-d5f-series-wall-single-cfg-69",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cvrah24aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 17,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-70",
      slug: "lps-legacy-d5f-series-wall-single-cfg-70",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cprah06aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 33.1,
      hspf2: 15.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-71",
      slug: "lps-legacy-d5f-series-wall-single-cfg-71",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cprah09aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 31.5,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-72",
      slug: "lps-legacy-d5f-series-wall-single-cfg-72",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cprah12aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 28,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-73",
      slug: "lps-legacy-d5f-series-wall-single-cfg-73",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cprah18aa",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24.5,
      hspf2: 15.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5f-series-wall-single-cfg-74",
      slug: "lps-legacy-d5f-series-wall-single-cfg-74",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5csrah30aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-75",
      slug: "lps-legacy-d5f-series-wall-single-cfg-75",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cerah09aaj",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-76",
      slug: "lps-legacy-d5f-series-wall-single-cfg-76",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cerah09aak",
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
      id: "lps-legacy-d5f-series-wall-single-cfg-77",
      slug: "lps-legacy-d5f-series-wall-single-cfg-77",
      modelId: "lps-legacy-d5f-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cerah30aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.4,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-1",
      slug: "lps-legacy-d5c-series-wall-single-cfg-1",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah18cak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-2",
      slug: "lps-legacy-d5c-series-wall-single-cfg-2",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah18cak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-3",
      slug: "lps-legacy-d5c-series-wall-single-cfg-3",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah18cak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-4",
      slug: "lps-legacy-d5c-series-wall-single-cfg-4",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah24dak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-5",
      slug: "lps-legacy-d5c-series-wall-single-cfg-5",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah24dak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-6",
      slug: "lps-legacy-d5c-series-wall-single-cfg-6",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah24dak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-7",
      slug: "lps-legacy-d5c-series-wall-single-cfg-7",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah30eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-8",
      slug: "lps-legacy-d5c-series-wall-single-cfg-8",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah30eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-9",
      slug: "lps-legacy-d5c-series-wall-single-cfg-9",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah30eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-10",
      slug: "lps-legacy-d5c-series-wall-single-cfg-10",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah36eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-11",
      slug: "lps-legacy-d5c-series-wall-single-cfg-11",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah36eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-12",
      slug: "lps-legacy-d5c-series-wall-single-cfg-12",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah36eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-13",
      slug: "lps-legacy-d5c-series-wall-single-cfg-13",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah48fak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-14",
      slug: "lps-legacy-d5c-series-wall-single-cfg-14",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah48fak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-15",
      slug: "lps-legacy-d5c-series-wall-single-cfg-15",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah48fak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-16",
      slug: "lps-legacy-d5c-series-wall-single-cfg-16",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah55fak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-17",
      slug: "lps-legacy-d5c-series-wall-single-cfg-17",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah55fak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-18",
      slug: "lps-legacy-d5c-series-wall-single-cfg-18",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmhah55fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 21.25,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-19",
      slug: "lps-legacy-d5c-series-wall-single-cfg-19",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah18cak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.2,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-20",
      slug: "lps-legacy-d5c-series-wall-single-cfg-20",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah18cak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-21",
      slug: "lps-legacy-d5c-series-wall-single-cfg-21",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah18cak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.6,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-22",
      slug: "lps-legacy-d5c-series-wall-single-cfg-22",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah24dak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 25,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-23",
      slug: "lps-legacy-d5c-series-wall-single-cfg-23",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah24dak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-24",
      slug: "lps-legacy-d5c-series-wall-single-cfg-24",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah24dak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-25",
      slug: "lps-legacy-d5c-series-wall-single-cfg-25",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah30eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 25,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-26",
      slug: "lps-legacy-d5c-series-wall-single-cfg-26",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah30eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 21,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-27",
      slug: "lps-legacy-d5c-series-wall-single-cfg-27",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah30eak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 23,
      hspf2: 9.75,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-28",
      slug: "lps-legacy-d5c-series-wall-single-cfg-28",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah36eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-29",
      slug: "lps-legacy-d5c-series-wall-single-cfg-29",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah36eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-30",
      slug: "lps-legacy-d5c-series-wall-single-cfg-30",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah36eak",
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
      id: "lps-legacy-d5c-series-wall-single-cfg-31",
      slug: "lps-legacy-d5c-series-wall-single-cfg-31",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah48fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 24,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-32",
      slug: "lps-legacy-d5c-series-wall-single-cfg-32",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah48fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 20.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-33",
      slug: "lps-legacy-d5c-series-wall-single-cfg-33",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cmrah48fak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 46000,
      coolingCapacityMaxBtu: 46000,
      seer2: 22.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "lps-legacy-d5c-series-wall-single-cfg-34",
      slug: "lps-legacy-d5c-series-wall-single-cfg-34",
      modelId: "lps-legacy-d5c-series-wall-single",
      outdoorUnitId: "lps-legacy-d5cerah18aak",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 20.3,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "lps-legacy-standard-wall-single-cfg-1",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-2",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-3",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-4",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-5",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-6",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-7",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-8",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-9",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-10",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-11",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-standard-wall-single-cfg-15",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-16",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-standard-wall-single-cfg-19",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-20",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-21",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-22",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-23",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-24",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-25",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-26",
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
      configurationId: "lps-legacy-standard-wall-single-cfg-27",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-1",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-2",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-3",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-4",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-5",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-6",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-7",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-8",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-9",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-10",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-11",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-12",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-13",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-14",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-15",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-16",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-17",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-18",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-19",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-20",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-21",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-22",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-23",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-24",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-25",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-26",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-27",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-28",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-29",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-30",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-31",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-32",
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
      configurationId: "lps-legacy-dlc-series-wall-single-cfg-33",
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
      configurationId: "lps-legacy-dlseries-central-ducted-cfg-1",
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
      configurationId: "lps-legacy-dlseries-central-ducted-cfg-2",
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
      configurationId: "lps-legacy-dlseries-central-ducted-cfg-3",
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
      configurationId: "lps-legacy-dl-series-central-ducted-cfg-1",
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
      configurationId: "lps-legacy-dl-series-central-ducted-cfg-2",
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
      configurationId: "lps-legacy-dl-series-central-ducted-cfg-3",
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
      configurationId: "lps-legacy-dl-series-central-ducted-cfg-4",
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
      configurationId: "lps-legacy-dl-series-central-ducted-cfg-5",
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
      configurationId: "lps-legacy-dl-series-central-ducted-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-1",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-8",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-9",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-10",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-11",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-12",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-13",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-14",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-15",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-16",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-17",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-18",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-19",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-20",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-21",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-22",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-23",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-25",
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
      configurationId: "lps-legacy-d5f-series-central-ducted-cfg-26",
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
      configurationId: "lps-legacy-d5c-series-central-ducted-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-central-ducted-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-2",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-3",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-4",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-5",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-6",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-7",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-8",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-9",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-10",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-11",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-12",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-13",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-14",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-15",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-16",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-17",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-18",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-19",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-20",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-21",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-22",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-23",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-24",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-25",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-26",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-27",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 2.33,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.36,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-30",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-31",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-32",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-33",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-34",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-36",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-37",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-38",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-39",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-40",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-41",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-42",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-43",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-44",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-45",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-46",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-47",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-49",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-50",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-51",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-53",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.01,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-54",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-55",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-56",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-57",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-58",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-59",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-60",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-61",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-62",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26800,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-63",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-64",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27400,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36600,
          cop: 2.11,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-66",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-67",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-68",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8000,
          cop: 2.15,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17100,
          cop: 2.01,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-71",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-72",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-73",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19300,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-74",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-75",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6600,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-76",
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
      configurationId: "lps-legacy-d5f-series-wall-single-cfg-77",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-1",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-2",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-3",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-4",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-5",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-6",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-7",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-8",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-9",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-10",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-11",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-12",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-13",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-14",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-15",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-16",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-17",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-18",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-19",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-20",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-21",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-23",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-24",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-25",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 26200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-28",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-29",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-30",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-31",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-32",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-33",
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
      configurationId: "lps-legacy-d5c-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
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
