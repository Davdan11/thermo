import type { BrandDataset } from "../../types";

export const blueridgeDataset: BrandDataset = {
  brand: {
    id: "blueridge",
    slug: "blueridge",
    name: "BLUERIDGE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "blueridge-standard",
      slug: "blueridge-standard",
      name: "Standard",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bm-series",
      slug: "blueridge-bm-series",
      name: "BM series",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bmah-series",
      slug: "blueridge-bmah-series",
      name: "BMAH series",
      brandId: "blueridge",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bmm-series",
      slug: "blueridge-bmm-series",
      name: "BMM series",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series",
      slug: "blueridge-bms-series",
      name: "BMS Series",
      brandId: "blueridge",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series",
      slug: "blueridge-bxs-series",
      name: "BXS Series",
      brandId: "blueridge",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bng-series",
      slug: "blueridge-bng-series",
      name: "BNG Series",
      brandId: "blueridge",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series",
      slug: "blueridge-bxl-series",
      name: "BXL Series",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bd-series",
      slug: "blueridge-bd-series",
      name: "BD Series",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bds-series",
      slug: "blueridge-bds-series",
      name: "BDS Series",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxm-series",
      slug: "blueridge-bxm-series",
      name: "BXM Series",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bdm-series",
      slug: "blueridge-bdm-series",
      name: "BDM Series",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-xs4",
      slug: "blueridge-xs4",
      name: "XS4",
      brandId: "blueridge",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "blueridge-standard-wall-single",
      slug: "blueridge-standard-wall-single",
      name: "Standard",
      seriesId: "blueridge-standard",
      brandId: "blueridge",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6900,
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
      id: "blueridge-bm-series-wall-single",
      slug: "blueridge-bm-series-wall-single",
      name: "BM series",
      seriesId: "blueridge-bm-series",
      brandId: "blueridge",
      modelNumber: "BM series",
      normalizedModelNumber: "bm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 5700,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 16.5,
      seer2Max: 28.1,
      hspf2Min: 8.7,
      hspf2Max: 13.6,
      cop5FMin: 1.68,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bmah-series-central-ducted",
      slug: "blueridge-bmah-series-central-ducted",
      name: "BMAH series",
      seriesId: "blueridge-bmah-series",
      brandId: "blueridge",
      modelNumber: "BMAH series",
      normalizedModelNumber: "bmah-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18.4,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bmm-series-wall-single",
      slug: "blueridge-bmm-series-wall-single",
      name: "BMM series",
      seriesId: "blueridge-bmm-series",
      brandId: "blueridge",
      modelNumber: "BMM series",
      normalizedModelNumber: "bmm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 13600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 25.1,
      hspf2Min: 9,
      hspf2Max: 11,
      cop5FMin: 1.8,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-central-ducted",
      slug: "blueridge-bms-series-central-ducted",
      name: "BMS Series",
      seriesId: "blueridge-bms-series",
      brandId: "blueridge",
      modelNumber: "BMS Series",
      normalizedModelNumber: "bms-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 19.7,
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
      id: "blueridge-bms-series-wall-single",
      slug: "blueridge-bms-series-wall-single",
      name: "BMS Series",
      seriesId: "blueridge-bms-series",
      brandId: "blueridge",
      modelNumber: "BMS Series",
      normalizedModelNumber: "bms-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 27.4,
      hspf2Min: 9,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.54,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-central-ducted",
      slug: "blueridge-bxs-series-central-ducted",
      name: "BXS Series",
      seriesId: "blueridge-bxs-series",
      brandId: "blueridge",
      modelNumber: "BXS Series",
      normalizedModelNumber: "bxs-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 13200,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 16.5,
      seer2Max: 19.7,
      hspf2Min: 9,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bng-series-central-ducted",
      slug: "blueridge-bng-series-central-ducted",
      name: "BNG Series",
      seriesId: "blueridge-bng-series",
      brandId: "blueridge",
      modelNumber: "BNG Series",
      normalizedModelNumber: "bng-series",
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
      cop5FMax: 2.14,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single",
      slug: "blueridge-bxs-series-wall-single",
      name: "BXS Series",
      seriesId: "blueridge-bxs-series",
      brandId: "blueridge",
      modelNumber: "BXS Series",
      normalizedModelNumber: "bxs-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 17,
      seer2Max: 35,
      hspf2Min: 8.5,
      hspf2Max: 16.2,
      cop5FMin: 1.8,
      cop5FMax: 2.54,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single",
      slug: "blueridge-bxl-series-wall-single",
      name: "BXL Series",
      seriesId: "blueridge-bxl-series",
      brandId: "blueridge",
      modelNumber: "BXL Series",
      normalizedModelNumber: "bxl-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 26400,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.8,
      seer2Max: 21.2,
      hspf2Min: 9.8,
      hspf2Max: 11.1,
      cop5FMin: 1.83,
      cop5FMax: 2.2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bd-series-wall-single",
      slug: "blueridge-bd-series-wall-single",
      name: "BD Series",
      seriesId: "blueridge-bd-series",
      brandId: "blueridge",
      modelNumber: "BD Series",
      normalizedModelNumber: "bd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 7000,
      heatingCapacity5FMaxBtu: 7000,
      seer2Min: 20.2,
      seer2Max: 20.2,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 2.07,
      cop5FMax: 2.07,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bds-series-wall-single",
      slug: "blueridge-bds-series-wall-single",
      name: "BDS Series",
      seriesId: "blueridge-bds-series",
      brandId: "blueridge",
      modelNumber: "BDS Series",
      normalizedModelNumber: "bds-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 17900,
      seer2Min: 21.2,
      seer2Max: 23.6,
      hspf2Min: 9.5,
      hspf2Max: 11.5,
      cop5FMin: 1.8,
      cop5FMax: 2.44,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxm-series-wall-single",
      slug: "blueridge-bxm-series-wall-single",
      name: "BXM Series",
      seriesId: "blueridge-bxm-series",
      brandId: "blueridge",
      modelNumber: "BXM Series",
      normalizedModelNumber: "bxm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 13600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 19,
      seer2Max: 25.1,
      hspf2Min: 9,
      hspf2Max: 11,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bdm-series-wall-single",
      slug: "blueridge-bdm-series-wall-single",
      name: "BDM Series",
      seriesId: "blueridge-bdm-series",
      brandId: "blueridge",
      modelNumber: "BDM Series",
      normalizedModelNumber: "bdm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 13400,
      heatingCapacity5FMaxBtu: 44000,
      seer2Min: 19,
      seer2Max: 23.9,
      hspf2Min: 9,
      hspf2Max: 10.6,
      cop5FMin: 2,
      cop5FMax: 2.3,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-xs4-wall-single",
      slug: "blueridge-xs4-wall-single",
      name: "XS4",
      seriesId: "blueridge-xs4",
      brandId: "blueridge",
      modelNumber: "XS4",
      normalizedModelNumber: "xs4",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 40000,
      seer2Min: 18,
      seer2Max: 24.5,
      hspf2Min: 8.1,
      hspf2Max: 10,
      cop5FMin: 1.75,
      cop5FMax: 2.1,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "blueridge-bm18y19c",
      modelNumber: "BM18Y19C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmhh36m17c",
      modelNumber: "BMHH36M17C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmhh27m18c",
      modelNumber: "BMHH27M18C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmhh27m22c",
      modelNumber: "BMHH27M22C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmhh48m22c",
      modelNumber: "BMHH48M22C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy1221c",
      modelNumber: "BMY1221C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy2419c",
      modelNumber: "BMY2419C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy3618c",
      modelNumber: "BMY3618C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy36diy18c",
      modelNumber: "BMY36DIY18C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy36uc",
      modelNumber: "BMY36UC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy60uc",
      modelNumber: "BMY60UC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmx1220c",
      modelNumber: "BMX1220C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm55c",
      modelNumber: "BMM55C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy60uc2",
      modelNumber: "BMY60UC2",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmahm3618c",
      modelNumber: "BMAHM3618C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms3620yc",
      modelNumber: "BMS3620YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsahs3017c",
      modelNumber: "BMSAHS3017C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms1218yc",
      modelNumber: "BMS1218YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms1221xc",
      modelNumber: "BMS1221XC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms1221yc",
      modelNumber: "BMS1221YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms60uyc",
      modelNumber: "BMS60UYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz60c",
      modelNumber: "BMMZ60C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng2a30scn",
      modelNumber: "BNG2A30SCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs1a09scv",
      modelNumber: "BXS1A09SCV",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs1a12scv",
      modelNumber: "BXS1A12SCV",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs1a12sc0",
      modelNumber: "BXS1A12SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs1a18sc0",
      modelNumber: "BXS1A18SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxl1a60sc0",
      modelNumber: "BXL1A60SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds1a12scv",
      modelNumber: "BDS1A12SCV",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds1a18sc0",
      modelNumber: "BDS1A18SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds1a24sc0",
      modelNumber: "BDS1A24SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds2a36sc0",
      modelNumber: "BDS2A36SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm1a60sc0",
      modelNumber: "BXM1A60SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs2a12sc0",
      modelNumber: "BXS2A12SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs2a36sc0",
      modelNumber: "BXS2A36SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy922c",
      modelNumber: "BMY922C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy1820c",
      modelNumber: "BMY1820C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy12diy22c",
      modelNumber: "BMY12DIY22C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy18diy22c",
      modelNumber: "BMY18DIY22C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy24diy21c",
      modelNumber: "BMY24DIY21C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy9hh28c",
      modelNumber: "BMY9HH28C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy12hh26c",
      modelNumber: "BMY12HH26C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy18hh22c",
      modelNumber: "BMY18HH22C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy24hh22c",
      modelNumber: "BMY24HH22C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy48uc",
      modelNumber: "BMY48UC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm18c",
      modelNumber: "BMM18C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm27c",
      modelNumber: "BMM27C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm36c",
      modelNumber: "BMM36C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm48c",
      modelNumber: "BMM48C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm18hhc",
      modelNumber: "BMM18HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm27hhc",
      modelNumber: "BMM27HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm36hhc",
      modelNumber: "BMM36HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm48hhc",
      modelNumber: "BMM48HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmx922c",
      modelNumber: "BMX922C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy6hh27c",
      modelNumber: "BMY6HH27C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm55hhc",
      modelNumber: "BMM55HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy36hhuc",
      modelNumber: "BMY36HHUC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy48hhuc",
      modelNumber: "BMY48HHUC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy3021c",
      modelNumber: "BMY3021C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy60hhuc",
      modelNumber: "BMY60HHUC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmy33hh20c",
      modelNumber: "BMY33HH20C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmah1820c",
      modelNumber: "BMAH1820C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmah2420c",
      modelNumber: "BMAH2420C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmah3018c",
      modelNumber: "BMAH3018C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmah3618c",
      modelNumber: "BMAH3618C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmah4816c",
      modelNumber: "BMAH4816C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmah6016c",
      modelNumber: "BMAH6016C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm27hh2c",
      modelNumber: "BMM27HH2C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmm36hh2c",
      modelNumber: "BMM36HH2C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz18c",
      modelNumber: "BMMZ18C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz27c",
      modelNumber: "BMMZ27C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz36c",
      modelNumber: "BMMZ36C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz48c",
      modelNumber: "BMMZ48C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz18hhc",
      modelNumber: "BMMZ18HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz27hhc",
      modelNumber: "BMMZ27HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz36hhc",
      modelNumber: "BMMZ36HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz48hhc",
      modelNumber: "BMMZ48HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmmz55hhc",
      modelNumber: "BMMZ55HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms1824yc",
      modelNumber: "BMS1824YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms2423yc",
      modelNumber: "BMS2423YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms1821hhyc",
      modelNumber: "BMS1821HHYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms2421hhyc",
      modelNumber: "BMS2421HHYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms3320hhyc",
      modelNumber: "BMS3320HHYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsahs1819c",
      modelNumber: "BMSAHS1819C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsahs2418c",
      modelNumber: "BMSAHS2418C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsahs3616c",
      modelNumber: "BMSAHS3616C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsahs4816c",
      modelNumber: "BMSAHS4816C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsahs6015c",
      modelNumber: "BMSAHS6015C",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsah18hhc",
      modelNumber: "BMSAH18HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsah24hhc",
      modelNumber: "BMSAH24HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsah30hhc",
      modelNumber: "BMSAH30HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsah36hhc",
      modelNumber: "BMSAH36HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsah48hhc",
      modelNumber: "BMSAH48HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bmsah60hhc",
      modelNumber: "BMSAH60HHC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms3022yc",
      modelNumber: "BMS3022YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms919yc",
      modelNumber: "BMS919YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms922xc",
      modelNumber: "BMS922XC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms922yc",
      modelNumber: "BMS922YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms1820yc",
      modelNumber: "BMS1820YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms2419yc",
      modelNumber: "BMS2419YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms626hhyc",
      modelNumber: "BMS626HHYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms927hhyc",
      modelNumber: "BMS927HHYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms1225hhyc",
      modelNumber: "BMS1225HHYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms926yc",
      modelNumber: "BMS926YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms1226yc",
      modelNumber: "BMS1226YC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms36uyc",
      modelNumber: "BMS36UYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms48uyc",
      modelNumber: "BMS48UYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms36hhuyc",
      modelNumber: "BMS36HHUYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms48hhuyc",
      modelNumber: "BMS48HHUYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bms60hhuyc",
      modelNumber: "BMS60HHUYC",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs3a18sc0",
      modelNumber: "BXS3A18SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs3a24sc0",
      modelNumber: "BXS3A24SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs5a18uc0",
      modelNumber: "BXS5A18UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs5a24uc0",
      modelNumber: "BXS5A24UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs5a33uc0",
      modelNumber: "BXS5A33UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng2a18scn",
      modelNumber: "BNG2A18SCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng2a24scn",
      modelNumber: "BNG2A24SCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng2a36scn",
      modelNumber: "BNG2A36SCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng2a48scn",
      modelNumber: "BNG2A48SCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng2a60scn",
      modelNumber: "BNG2A60SCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng3a18ucn",
      modelNumber: "BNG3A18UCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng3a24ucn",
      modelNumber: "BNG3A24UCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng3a30ucn",
      modelNumber: "BNG3A30UCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng3a36ucn",
      modelNumber: "BNG3A36UCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng3a48ucn",
      modelNumber: "BNG3A48UCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bng3a60ucn",
      modelNumber: "BNG3A60UCN",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs1a09sc0",
      modelNumber: "BXS1A09SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs1a24sc0",
      modelNumber: "BXS1A24SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs3a09sc0",
      modelNumber: "BXS3A09SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs3a12sc0",
      modelNumber: "BXS3A12SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs5a06uc0",
      modelNumber: "BXS5A06UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs5a09uc0",
      modelNumber: "BXS5A09UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs5a12uc0",
      modelNumber: "BXS5A12UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs6a06uc0",
      modelNumber: "BXS6A06UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs6a09uc0",
      modelNumber: "BXS6A09UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs6a12uc0",
      modelNumber: "BXS6A12UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs6a18uc0",
      modelNumber: "BXS6A18UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs2a09sc0",
      modelNumber: "BXS2A09SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs2a18sc0",
      modelNumber: "BXS2A18SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs2a24sc0",
      modelNumber: "BXS2A24SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs2a30sc0",
      modelNumber: "BXS2A30SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxl1a36sc0",
      modelNumber: "BXL1A36SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxl1a48sc0",
      modelNumber: "BXL1A48SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxl2a36uc0",
      modelNumber: "BXL2A36UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxl2a48uc0",
      modelNumber: "BXL2A48UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxl2a60uc0",
      modelNumber: "BXL2A60UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds1a09scv",
      modelNumber: "BDS1A09SCV",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds2a09scv",
      modelNumber: "BDS2A09SCV",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds2a12scv",
      modelNumber: "BDS2A12SCV",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds2a18sc0",
      modelNumber: "BDS2A18SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds2a24sc0",
      modelNumber: "BDS2A24SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds3a12uc0",
      modelNumber: "BDS3A12UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bds3a18uc0",
      modelNumber: "BDS3A18UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm1a18sc0",
      modelNumber: "BXM1A18SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm1a27sc0",
      modelNumber: "BXM1A27SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm1a36sc0",
      modelNumber: "BXM1A36SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm1a48sc0",
      modelNumber: "BXM1A48SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm3a18uc0",
      modelNumber: "BXM3A18UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm3a27uc0",
      modelNumber: "BXM3A27UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm3a36uc0",
      modelNumber: "BXM3A36UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm3a48uc0",
      modelNumber: "BXM3A48UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm3a55uc0",
      modelNumber: "BXM3A55UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bdm1a18sc0",
      modelNumber: "BDM1A18SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bdm1a27sc0",
      modelNumber: "BDM1A27SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bdm1a36sc0",
      modelNumber: "BDM1A36SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bdm1a48sc0",
      modelNumber: "BDM1A48SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bdm1a55sc0",
      modelNumber: "BDM1A55SC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxm2z48uc0",
      modelNumber: "BXM2Z48UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs4z09uc0",
      modelNumber: "BXS4Z09UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs4z12uc0",
      modelNumber: "BXS4Z12UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    },
    {
      id: "blueridge-bxs4z18uc0",
      modelNumber: "BXS4Z18UC0",
      brandId: "blueridge",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "blueridge-standard-wall-single-cfg-1",
      slug: "blueridge-standard-wall-single-cfg-1",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bm18y19c",
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
      id: "blueridge-standard-wall-single-cfg-2",
      slug: "blueridge-standard-wall-single-cfg-2",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmhh36m17c",
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
      id: "blueridge-standard-wall-single-cfg-3",
      slug: "blueridge-standard-wall-single-cfg-3",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmhh27m18c",
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
      id: "blueridge-standard-wall-single-cfg-4",
      slug: "blueridge-standard-wall-single-cfg-4",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmhh36m17c",
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
      id: "blueridge-standard-wall-single-cfg-5",
      slug: "blueridge-standard-wall-single-cfg-5",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmhh27m22c",
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
      id: "blueridge-standard-wall-single-cfg-6",
      slug: "blueridge-standard-wall-single-cfg-6",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmhh48m22c",
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
      id: "blueridge-standard-wall-single-cfg-7",
      slug: "blueridge-standard-wall-single-cfg-7",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmhh48m22c",
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
      id: "blueridge-standard-wall-single-cfg-8",
      slug: "blueridge-standard-wall-single-cfg-8",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy1221c",
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
      id: "blueridge-standard-wall-single-cfg-9",
      slug: "blueridge-standard-wall-single-cfg-9",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy2419c",
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
      id: "blueridge-standard-wall-single-cfg-10",
      slug: "blueridge-standard-wall-single-cfg-10",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy3618c",
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
      id: "blueridge-standard-wall-single-cfg-11",
      slug: "blueridge-standard-wall-single-cfg-11",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy36diy18c",
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
      id: "blueridge-standard-wall-single-cfg-12",
      slug: "blueridge-standard-wall-single-cfg-12",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy36uc",
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
      id: "blueridge-standard-wall-single-cfg-13",
      slug: "blueridge-standard-wall-single-cfg-13",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy36uc",
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
      id: "blueridge-standard-wall-single-cfg-14",
      slug: "blueridge-standard-wall-single-cfg-14",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy60uc",
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
      id: "blueridge-standard-wall-single-cfg-15",
      slug: "blueridge-standard-wall-single-cfg-15",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmx1220c",
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
      id: "blueridge-standard-wall-single-cfg-16",
      slug: "blueridge-standard-wall-single-cfg-16",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmm55c",
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
      id: "blueridge-standard-wall-single-cfg-17",
      slug: "blueridge-standard-wall-single-cfg-17",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmm55c",
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
      id: "blueridge-standard-wall-single-cfg-18",
      slug: "blueridge-standard-wall-single-cfg-18",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmm55c",
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
      id: "blueridge-standard-wall-single-cfg-19",
      slug: "blueridge-standard-wall-single-cfg-19",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy60uc2",
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
      id: "blueridge-standard-wall-single-cfg-20",
      slug: "blueridge-standard-wall-single-cfg-20",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmahm3618c",
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
      id: "blueridge-standard-wall-single-cfg-21",
      slug: "blueridge-standard-wall-single-cfg-21",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmy36uc",
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
      id: "blueridge-standard-wall-single-cfg-22",
      slug: "blueridge-standard-wall-single-cfg-22",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bms3620yc",
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
      id: "blueridge-standard-wall-single-cfg-23",
      slug: "blueridge-standard-wall-single-cfg-23",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmsahs3017c",
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
      id: "blueridge-standard-wall-single-cfg-24",
      slug: "blueridge-standard-wall-single-cfg-24",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bms1218yc",
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
      id: "blueridge-standard-wall-single-cfg-25",
      slug: "blueridge-standard-wall-single-cfg-25",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bms1221xc",
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
      id: "blueridge-standard-wall-single-cfg-26",
      slug: "blueridge-standard-wall-single-cfg-26",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bms1221yc",
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
      id: "blueridge-standard-wall-single-cfg-27",
      slug: "blueridge-standard-wall-single-cfg-27",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bms3620yc",
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
      id: "blueridge-standard-wall-single-cfg-28",
      slug: "blueridge-standard-wall-single-cfg-28",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bms60uyc",
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
      id: "blueridge-standard-wall-single-cfg-29",
      slug: "blueridge-standard-wall-single-cfg-29",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bms60uyc",
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
      id: "blueridge-standard-wall-single-cfg-30",
      slug: "blueridge-standard-wall-single-cfg-30",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmmz60c",
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
      id: "blueridge-standard-wall-single-cfg-31",
      slug: "blueridge-standard-wall-single-cfg-31",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmmz60c",
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
      id: "blueridge-standard-wall-single-cfg-32",
      slug: "blueridge-standard-wall-single-cfg-32",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bmmz60c",
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
      id: "blueridge-standard-wall-single-cfg-33",
      slug: "blueridge-standard-wall-single-cfg-33",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bng2a30scn",
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
      id: "blueridge-standard-wall-single-cfg-34",
      slug: "blueridge-standard-wall-single-cfg-34",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxs1a09scv",
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
      id: "blueridge-standard-wall-single-cfg-35",
      slug: "blueridge-standard-wall-single-cfg-35",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxs1a12scv",
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
      id: "blueridge-standard-wall-single-cfg-36",
      slug: "blueridge-standard-wall-single-cfg-36",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxs1a12sc0",
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
      id: "blueridge-standard-wall-single-cfg-37",
      slug: "blueridge-standard-wall-single-cfg-37",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxs1a18sc0",
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
      id: "blueridge-standard-wall-single-cfg-38",
      slug: "blueridge-standard-wall-single-cfg-38",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxl1a60sc0",
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
      id: "blueridge-standard-wall-single-cfg-39",
      slug: "blueridge-standard-wall-single-cfg-39",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxl1a60sc0",
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
      id: "blueridge-standard-wall-single-cfg-40",
      slug: "blueridge-standard-wall-single-cfg-40",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bds1a12scv",
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
      id: "blueridge-standard-wall-single-cfg-41",
      slug: "blueridge-standard-wall-single-cfg-41",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bds1a18sc0",
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
      id: "blueridge-standard-wall-single-cfg-42",
      slug: "blueridge-standard-wall-single-cfg-42",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bds1a24sc0",
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
      id: "blueridge-standard-wall-single-cfg-43",
      slug: "blueridge-standard-wall-single-cfg-43",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bds2a36sc0",
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
      id: "blueridge-standard-wall-single-cfg-44",
      slug: "blueridge-standard-wall-single-cfg-44",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxm1a60sc0",
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
      id: "blueridge-standard-wall-single-cfg-45",
      slug: "blueridge-standard-wall-single-cfg-45",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxm1a60sc0",
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
      id: "blueridge-standard-wall-single-cfg-46",
      slug: "blueridge-standard-wall-single-cfg-46",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxm1a60sc0",
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
      id: "blueridge-standard-wall-single-cfg-47",
      slug: "blueridge-standard-wall-single-cfg-47",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxs2a12sc0",
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
      id: "blueridge-standard-wall-single-cfg-48",
      slug: "blueridge-standard-wall-single-cfg-48",
      modelId: "blueridge-standard-wall-single",
      outdoorUnitId: "blueridge-bxs2a36sc0",
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
      id: "blueridge-bm-series-wall-single-cfg-1",
      slug: "blueridge-bm-series-wall-single-cfg-1",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy922c",
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
      id: "blueridge-bm-series-wall-single-cfg-2",
      slug: "blueridge-bm-series-wall-single-cfg-2",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy1820c",
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
      id: "blueridge-bm-series-wall-single-cfg-3",
      slug: "blueridge-bm-series-wall-single-cfg-3",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy12diy22c",
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
      id: "blueridge-bm-series-wall-single-cfg-4",
      slug: "blueridge-bm-series-wall-single-cfg-4",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy18diy22c",
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
      id: "blueridge-bm-series-wall-single-cfg-5",
      slug: "blueridge-bm-series-wall-single-cfg-5",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy24diy21c",
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
      id: "blueridge-bm-series-wall-single-cfg-6",
      slug: "blueridge-bm-series-wall-single-cfg-6",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy9hh28c",
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
      id: "blueridge-bm-series-wall-single-cfg-7",
      slug: "blueridge-bm-series-wall-single-cfg-7",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy12hh26c",
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
      id: "blueridge-bm-series-wall-single-cfg-8",
      slug: "blueridge-bm-series-wall-single-cfg-8",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy18hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-9",
      slug: "blueridge-bm-series-wall-single-cfg-9",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy24hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-10",
      slug: "blueridge-bm-series-wall-single-cfg-10",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy48uc",
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
      id: "blueridge-bm-series-wall-single-cfg-11",
      slug: "blueridge-bm-series-wall-single-cfg-11",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy9hh28c",
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
      id: "blueridge-bm-series-wall-single-cfg-12",
      slug: "blueridge-bm-series-wall-single-cfg-12",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy12hh26c",
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
      id: "blueridge-bm-series-wall-single-cfg-13",
      slug: "blueridge-bm-series-wall-single-cfg-13",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy12hh26c",
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
      id: "blueridge-bm-series-wall-single-cfg-14",
      slug: "blueridge-bm-series-wall-single-cfg-14",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy12hh26c",
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
      id: "blueridge-bm-series-wall-single-cfg-15",
      slug: "blueridge-bm-series-wall-single-cfg-15",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy18hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-16",
      slug: "blueridge-bm-series-wall-single-cfg-16",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy18hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-17",
      slug: "blueridge-bm-series-wall-single-cfg-17",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy18hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-18",
      slug: "blueridge-bm-series-wall-single-cfg-18",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy24hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-19",
      slug: "blueridge-bm-series-wall-single-cfg-19",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy24hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-20",
      slug: "blueridge-bm-series-wall-single-cfg-20",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm18c",
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
      id: "blueridge-bm-series-wall-single-cfg-21",
      slug: "blueridge-bm-series-wall-single-cfg-21",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm18c",
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
      id: "blueridge-bm-series-wall-single-cfg-22",
      slug: "blueridge-bm-series-wall-single-cfg-22",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm18c",
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
      id: "blueridge-bm-series-wall-single-cfg-23",
      slug: "blueridge-bm-series-wall-single-cfg-23",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27c",
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
      id: "blueridge-bm-series-wall-single-cfg-24",
      slug: "blueridge-bm-series-wall-single-cfg-24",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27c",
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
      id: "blueridge-bm-series-wall-single-cfg-25",
      slug: "blueridge-bm-series-wall-single-cfg-25",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27c",
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
      id: "blueridge-bm-series-wall-single-cfg-26",
      slug: "blueridge-bm-series-wall-single-cfg-26",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm36c",
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
      id: "blueridge-bm-series-wall-single-cfg-27",
      slug: "blueridge-bm-series-wall-single-cfg-27",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm48c",
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
      id: "blueridge-bm-series-wall-single-cfg-28",
      slug: "blueridge-bm-series-wall-single-cfg-28",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm48c",
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
      id: "blueridge-bm-series-wall-single-cfg-29",
      slug: "blueridge-bm-series-wall-single-cfg-29",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm48c",
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
      id: "blueridge-bm-series-wall-single-cfg-30",
      slug: "blueridge-bm-series-wall-single-cfg-30",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm18hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-31",
      slug: "blueridge-bm-series-wall-single-cfg-31",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm18hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-32",
      slug: "blueridge-bm-series-wall-single-cfg-32",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm18hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-33",
      slug: "blueridge-bm-series-wall-single-cfg-33",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-34",
      slug: "blueridge-bm-series-wall-single-cfg-34",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-35",
      slug: "blueridge-bm-series-wall-single-cfg-35",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-36",
      slug: "blueridge-bm-series-wall-single-cfg-36",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm36hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-37",
      slug: "blueridge-bm-series-wall-single-cfg-37",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm36hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-38",
      slug: "blueridge-bm-series-wall-single-cfg-38",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm36hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-39",
      slug: "blueridge-bm-series-wall-single-cfg-39",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm48hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-40",
      slug: "blueridge-bm-series-wall-single-cfg-40",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm48hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-41",
      slug: "blueridge-bm-series-wall-single-cfg-41",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm48hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-42",
      slug: "blueridge-bm-series-wall-single-cfg-42",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmx922c",
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
      id: "blueridge-bm-series-wall-single-cfg-43",
      slug: "blueridge-bm-series-wall-single-cfg-43",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy6hh27c",
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
      id: "blueridge-bm-series-wall-single-cfg-44",
      slug: "blueridge-bm-series-wall-single-cfg-44",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm55hhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bm-series-wall-single-cfg-45",
      slug: "blueridge-bm-series-wall-single-cfg-45",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm55hhc",
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
      id: "blueridge-bm-series-wall-single-cfg-46",
      slug: "blueridge-bm-series-wall-single-cfg-46",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmm55hhc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 55000,
      coolingCapacityMaxBtu: 55000,
      seer2: 19.4,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bm-series-wall-single-cfg-47",
      slug: "blueridge-bm-series-wall-single-cfg-47",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy36hhuc",
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
      id: "blueridge-bm-series-wall-single-cfg-48",
      slug: "blueridge-bm-series-wall-single-cfg-48",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy36hhuc",
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
      id: "blueridge-bm-series-wall-single-cfg-49",
      slug: "blueridge-bm-series-wall-single-cfg-49",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy48hhuc",
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
      id: "blueridge-bm-series-wall-single-cfg-50",
      slug: "blueridge-bm-series-wall-single-cfg-50",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy6hh27c",
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
      id: "blueridge-bm-series-wall-single-cfg-51",
      slug: "blueridge-bm-series-wall-single-cfg-51",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy9hh28c",
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
      id: "blueridge-bm-series-wall-single-cfg-52",
      slug: "blueridge-bm-series-wall-single-cfg-52",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy12hh26c",
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
      id: "blueridge-bm-series-wall-single-cfg-53",
      slug: "blueridge-bm-series-wall-single-cfg-53",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy18hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-54",
      slug: "blueridge-bm-series-wall-single-cfg-54",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy12hh26c",
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
      id: "blueridge-bm-series-wall-single-cfg-55",
      slug: "blueridge-bm-series-wall-single-cfg-55",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy18hh22c",
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
      id: "blueridge-bm-series-wall-single-cfg-56",
      slug: "blueridge-bm-series-wall-single-cfg-56",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy3021c",
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
      id: "blueridge-bm-series-wall-single-cfg-57",
      slug: "blueridge-bm-series-wall-single-cfg-57",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy60hhuc",
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
      id: "blueridge-bm-series-wall-single-cfg-58",
      slug: "blueridge-bm-series-wall-single-cfg-58",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy33hh20c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bm-series-wall-single-cfg-59",
      slug: "blueridge-bm-series-wall-single-cfg-59",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy3021c",
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
      id: "blueridge-bm-series-wall-single-cfg-60",
      slug: "blueridge-bm-series-wall-single-cfg-60",
      modelId: "blueridge-bm-series-wall-single",
      outdoorUnitId: "blueridge-bmy36hhuc",
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
      id: "blueridge-bmah-series-central-ducted-cfg-1",
      slug: "blueridge-bmah-series-central-ducted-cfg-1",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah1820c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-2",
      slug: "blueridge-bmah-series-central-ducted-cfg-2",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah2420c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-3",
      slug: "blueridge-bmah-series-central-ducted-cfg-3",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah3018c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-4",
      slug: "blueridge-bmah-series-central-ducted-cfg-4",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah3618c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-5",
      slug: "blueridge-bmah-series-central-ducted-cfg-5",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah4816c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-6",
      slug: "blueridge-bmah-series-central-ducted-cfg-6",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah6016c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-7",
      slug: "blueridge-bmah-series-central-ducted-cfg-7",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmy18hh22c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-8",
      slug: "blueridge-bmah-series-central-ducted-cfg-8",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmy24hh22c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-9",
      slug: "blueridge-bmah-series-central-ducted-cfg-9",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah1820c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-10",
      slug: "blueridge-bmah-series-central-ducted-cfg-10",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah2420c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-11",
      slug: "blueridge-bmah-series-central-ducted-cfg-11",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah2420c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-12",
      slug: "blueridge-bmah-series-central-ducted-cfg-12",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah3018c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-13",
      slug: "blueridge-bmah-series-central-ducted-cfg-13",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah3018c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-14",
      slug: "blueridge-bmah-series-central-ducted-cfg-14",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah3618c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-15",
      slug: "blueridge-bmah-series-central-ducted-cfg-15",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah3618c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-16",
      slug: "blueridge-bmah-series-central-ducted-cfg-16",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah4816c",
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
      id: "blueridge-bmah-series-central-ducted-cfg-17",
      slug: "blueridge-bmah-series-central-ducted-cfg-17",
      modelId: "blueridge-bmah-series-central-ducted",
      outdoorUnitId: "blueridge-bmah6016c",
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
      id: "blueridge-bmm-series-wall-single-cfg-1",
      slug: "blueridge-bmm-series-wall-single-cfg-1",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27hh2c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 21.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bmm-series-wall-single-cfg-2",
      slug: "blueridge-bmm-series-wall-single-cfg-2",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27hh2c",
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
      id: "blueridge-bmm-series-wall-single-cfg-3",
      slug: "blueridge-bmm-series-wall-single-cfg-3",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmm27hh2c",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 20.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bmm-series-wall-single-cfg-4",
      slug: "blueridge-bmm-series-wall-single-cfg-4",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmm36hh2c",
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
      id: "blueridge-bmm-series-wall-single-cfg-5",
      slug: "blueridge-bmm-series-wall-single-cfg-5",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmm36hh2c",
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
      id: "blueridge-bmm-series-wall-single-cfg-6",
      slug: "blueridge-bmm-series-wall-single-cfg-6",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmm36hh2c",
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
      id: "blueridge-bmm-series-wall-single-cfg-7",
      slug: "blueridge-bmm-series-wall-single-cfg-7",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz18c",
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
      id: "blueridge-bmm-series-wall-single-cfg-8",
      slug: "blueridge-bmm-series-wall-single-cfg-8",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz18c",
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
      id: "blueridge-bmm-series-wall-single-cfg-9",
      slug: "blueridge-bmm-series-wall-single-cfg-9",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz18c",
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
      id: "blueridge-bmm-series-wall-single-cfg-10",
      slug: "blueridge-bmm-series-wall-single-cfg-10",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz27c",
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
      id: "blueridge-bmm-series-wall-single-cfg-11",
      slug: "blueridge-bmm-series-wall-single-cfg-11",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz27c",
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
      id: "blueridge-bmm-series-wall-single-cfg-12",
      slug: "blueridge-bmm-series-wall-single-cfg-12",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz27c",
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
      id: "blueridge-bmm-series-wall-single-cfg-13",
      slug: "blueridge-bmm-series-wall-single-cfg-13",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz36c",
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
      id: "blueridge-bmm-series-wall-single-cfg-14",
      slug: "blueridge-bmm-series-wall-single-cfg-14",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz36c",
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
      id: "blueridge-bmm-series-wall-single-cfg-15",
      slug: "blueridge-bmm-series-wall-single-cfg-15",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz36c",
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
      id: "blueridge-bmm-series-wall-single-cfg-16",
      slug: "blueridge-bmm-series-wall-single-cfg-16",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz48c",
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
      id: "blueridge-bmm-series-wall-single-cfg-17",
      slug: "blueridge-bmm-series-wall-single-cfg-17",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz48c",
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
      id: "blueridge-bmm-series-wall-single-cfg-18",
      slug: "blueridge-bmm-series-wall-single-cfg-18",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz48c",
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
      id: "blueridge-bmm-series-wall-single-cfg-19",
      slug: "blueridge-bmm-series-wall-single-cfg-19",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz18hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-20",
      slug: "blueridge-bmm-series-wall-single-cfg-20",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz18hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-21",
      slug: "blueridge-bmm-series-wall-single-cfg-21",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz18hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-22",
      slug: "blueridge-bmm-series-wall-single-cfg-22",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz27hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-23",
      slug: "blueridge-bmm-series-wall-single-cfg-23",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz27hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-24",
      slug: "blueridge-bmm-series-wall-single-cfg-24",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz27hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-25",
      slug: "blueridge-bmm-series-wall-single-cfg-25",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz36hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-26",
      slug: "blueridge-bmm-series-wall-single-cfg-26",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz36hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-27",
      slug: "blueridge-bmm-series-wall-single-cfg-27",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz36hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-28",
      slug: "blueridge-bmm-series-wall-single-cfg-28",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz48hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-29",
      slug: "blueridge-bmm-series-wall-single-cfg-29",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz48hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-30",
      slug: "blueridge-bmm-series-wall-single-cfg-30",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz48hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-31",
      slug: "blueridge-bmm-series-wall-single-cfg-31",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz55hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-32",
      slug: "blueridge-bmm-series-wall-single-cfg-32",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz55hhc",
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
      id: "blueridge-bmm-series-wall-single-cfg-33",
      slug: "blueridge-bmm-series-wall-single-cfg-33",
      modelId: "blueridge-bmm-series-wall-single",
      outdoorUnitId: "blueridge-bmmz55hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-1",
      slug: "blueridge-bms-series-central-ducted-cfg-1",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bms1824yc",
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
      id: "blueridge-bms-series-central-ducted-cfg-2",
      slug: "blueridge-bms-series-central-ducted-cfg-2",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bms2423yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-central-ducted-cfg-3",
      slug: "blueridge-bms-series-central-ducted-cfg-3",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bms1821hhyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-central-ducted-cfg-4",
      slug: "blueridge-bms-series-central-ducted-cfg-4",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bms2421hhyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-central-ducted-cfg-5",
      slug: "blueridge-bms-series-central-ducted-cfg-5",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bms3320hhyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-central-ducted-cfg-6",
      slug: "blueridge-bms-series-central-ducted-cfg-6",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsahs1819c",
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
      id: "blueridge-bms-series-central-ducted-cfg-7",
      slug: "blueridge-bms-series-central-ducted-cfg-7",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsahs2418c",
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
      id: "blueridge-bms-series-central-ducted-cfg-8",
      slug: "blueridge-bms-series-central-ducted-cfg-8",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsahs3616c",
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
      id: "blueridge-bms-series-central-ducted-cfg-9",
      slug: "blueridge-bms-series-central-ducted-cfg-9",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsahs4816c",
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
      id: "blueridge-bms-series-central-ducted-cfg-10",
      slug: "blueridge-bms-series-central-ducted-cfg-10",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsahs6015c",
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
      id: "blueridge-bms-series-central-ducted-cfg-11",
      slug: "blueridge-bms-series-central-ducted-cfg-11",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah18hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-12",
      slug: "blueridge-bms-series-central-ducted-cfg-12",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah24hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-13",
      slug: "blueridge-bms-series-central-ducted-cfg-13",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah30hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-14",
      slug: "blueridge-bms-series-central-ducted-cfg-14",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah36hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-15",
      slug: "blueridge-bms-series-central-ducted-cfg-15",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah48hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-16",
      slug: "blueridge-bms-series-central-ducted-cfg-16",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah60hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-17",
      slug: "blueridge-bms-series-central-ducted-cfg-17",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah18hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-18",
      slug: "blueridge-bms-series-central-ducted-cfg-18",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah24hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-19",
      slug: "blueridge-bms-series-central-ducted-cfg-19",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah30hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-20",
      slug: "blueridge-bms-series-central-ducted-cfg-20",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah36hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-21",
      slug: "blueridge-bms-series-central-ducted-cfg-21",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah48hhc",
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
      id: "blueridge-bms-series-central-ducted-cfg-22",
      slug: "blueridge-bms-series-central-ducted-cfg-22",
      modelId: "blueridge-bms-series-central-ducted",
      outdoorUnitId: "blueridge-bmsah60hhc",
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
      id: "blueridge-bms-series-wall-single-cfg-1",
      slug: "blueridge-bms-series-wall-single-cfg-1",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms3022yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-2",
      slug: "blueridge-bms-series-wall-single-cfg-2",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms919yc",
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
      id: "blueridge-bms-series-wall-single-cfg-3",
      slug: "blueridge-bms-series-wall-single-cfg-3",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms922xc",
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
      id: "blueridge-bms-series-wall-single-cfg-4",
      slug: "blueridge-bms-series-wall-single-cfg-4",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms922yc",
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
      id: "blueridge-bms-series-wall-single-cfg-5",
      slug: "blueridge-bms-series-wall-single-cfg-5",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1820yc",
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
      id: "blueridge-bms-series-wall-single-cfg-6",
      slug: "blueridge-bms-series-wall-single-cfg-6",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms2419yc",
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
      id: "blueridge-bms-series-wall-single-cfg-7",
      slug: "blueridge-bms-series-wall-single-cfg-7",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms3022yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-8",
      slug: "blueridge-bms-series-wall-single-cfg-8",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms2423yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-9",
      slug: "blueridge-bms-series-wall-single-cfg-9",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms626hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-10",
      slug: "blueridge-bms-series-wall-single-cfg-10",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms927hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-11",
      slug: "blueridge-bms-series-wall-single-cfg-11",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1225hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-12",
      slug: "blueridge-bms-series-wall-single-cfg-12",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1821hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-13",
      slug: "blueridge-bms-series-wall-single-cfg-13",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1824yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-14",
      slug: "blueridge-bms-series-wall-single-cfg-14",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms2423yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-15",
      slug: "blueridge-bms-series-wall-single-cfg-15",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1824yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-16",
      slug: "blueridge-bms-series-wall-single-cfg-16",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms926yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-17",
      slug: "blueridge-bms-series-wall-single-cfg-17",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1226yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-18",
      slug: "blueridge-bms-series-wall-single-cfg-18",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1824yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-19",
      slug: "blueridge-bms-series-wall-single-cfg-19",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms926yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-20",
      slug: "blueridge-bms-series-wall-single-cfg-20",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1226yc",
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
      id: "blueridge-bms-series-wall-single-cfg-21",
      slug: "blueridge-bms-series-wall-single-cfg-21",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1824yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-22",
      slug: "blueridge-bms-series-wall-single-cfg-22",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms2423yc",
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
      id: "blueridge-bms-series-wall-single-cfg-23",
      slug: "blueridge-bms-series-wall-single-cfg-23",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1824yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.8,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-24",
      slug: "blueridge-bms-series-wall-single-cfg-24",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1824yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-25",
      slug: "blueridge-bms-series-wall-single-cfg-25",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms2423yc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-26",
      slug: "blueridge-bms-series-wall-single-cfg-26",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1225hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-27",
      slug: "blueridge-bms-series-wall-single-cfg-27",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1821hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-28",
      slug: "blueridge-bms-series-wall-single-cfg-28",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms2421hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-29",
      slug: "blueridge-bms-series-wall-single-cfg-29",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms626hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-30",
      slug: "blueridge-bms-series-wall-single-cfg-30",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1225hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-31",
      slug: "blueridge-bms-series-wall-single-cfg-31",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1821hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-32",
      slug: "blueridge-bms-series-wall-single-cfg-32",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms626hhyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 21.4,
      hspf2: 13.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-33",
      slug: "blueridge-bms-series-wall-single-cfg-33",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms927hhyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-34",
      slug: "blueridge-bms-series-wall-single-cfg-34",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1225hhyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-35",
      slug: "blueridge-bms-series-wall-single-cfg-35",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1821hhyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-36",
      slug: "blueridge-bms-series-wall-single-cfg-36",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms927hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-37",
      slug: "blueridge-bms-series-wall-single-cfg-37",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1225hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-38",
      slug: "blueridge-bms-series-wall-single-cfg-38",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1821hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-39",
      slug: "blueridge-bms-series-wall-single-cfg-39",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms2421hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-40",
      slug: "blueridge-bms-series-wall-single-cfg-40",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms927hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-41",
      slug: "blueridge-bms-series-wall-single-cfg-41",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1225hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-42",
      slug: "blueridge-bms-series-wall-single-cfg-42",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1821hhyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-43",
      slug: "blueridge-bms-series-wall-single-cfg-43",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms1821hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-44",
      slug: "blueridge-bms-series-wall-single-cfg-44",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms2421hhyc",
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
      id: "blueridge-bms-series-wall-single-cfg-45",
      slug: "blueridge-bms-series-wall-single-cfg-45",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms36uyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-46",
      slug: "blueridge-bms-series-wall-single-cfg-46",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms48uyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-47",
      slug: "blueridge-bms-series-wall-single-cfg-47",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms36uyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-48",
      slug: "blueridge-bms-series-wall-single-cfg-48",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms48uyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-49",
      slug: "blueridge-bms-series-wall-single-cfg-49",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms36uyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-50",
      slug: "blueridge-bms-series-wall-single-cfg-50",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms48uyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.8,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-51",
      slug: "blueridge-bms-series-wall-single-cfg-51",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms36hhuyc",
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
      id: "blueridge-bms-series-wall-single-cfg-52",
      slug: "blueridge-bms-series-wall-single-cfg-52",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms48hhuyc",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bms-series-wall-single-cfg-53",
      slug: "blueridge-bms-series-wall-single-cfg-53",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms36hhuyc",
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
      id: "blueridge-bms-series-wall-single-cfg-54",
      slug: "blueridge-bms-series-wall-single-cfg-54",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms48hhuyc",
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
      id: "blueridge-bms-series-wall-single-cfg-55",
      slug: "blueridge-bms-series-wall-single-cfg-55",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms60hhuyc",
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
      id: "blueridge-bms-series-wall-single-cfg-56",
      slug: "blueridge-bms-series-wall-single-cfg-56",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms36hhuyc",
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
      id: "blueridge-bms-series-wall-single-cfg-57",
      slug: "blueridge-bms-series-wall-single-cfg-57",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms48hhuyc",
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
      id: "blueridge-bms-series-wall-single-cfg-58",
      slug: "blueridge-bms-series-wall-single-cfg-58",
      modelId: "blueridge-bms-series-wall-single",
      outdoorUnitId: "blueridge-bms60hhuyc",
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
      id: "blueridge-bxs-series-central-ducted-cfg-1",
      slug: "blueridge-bxs-series-central-ducted-cfg-1",
      modelId: "blueridge-bxs-series-central-ducted",
      outdoorUnitId: "blueridge-bxs3a18sc0",
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
      id: "blueridge-bxs-series-central-ducted-cfg-2",
      slug: "blueridge-bxs-series-central-ducted-cfg-2",
      modelId: "blueridge-bxs-series-central-ducted",
      outdoorUnitId: "blueridge-bxs3a24sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19.7,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-central-ducted-cfg-3",
      slug: "blueridge-bxs-series-central-ducted-cfg-3",
      modelId: "blueridge-bxs-series-central-ducted",
      outdoorUnitId: "blueridge-bxs5a18uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-central-ducted-cfg-4",
      slug: "blueridge-bxs-series-central-ducted-cfg-4",
      modelId: "blueridge-bxs-series-central-ducted",
      outdoorUnitId: "blueridge-bxs5a24uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.7,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-central-ducted-cfg-5",
      slug: "blueridge-bxs-series-central-ducted-cfg-5",
      modelId: "blueridge-bxs-series-central-ducted",
      outdoorUnitId: "blueridge-bxs5a33uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 16.5,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bng-series-central-ducted-cfg-1",
      slug: "blueridge-bng-series-central-ducted-cfg-1",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng2a18scn",
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
      id: "blueridge-bng-series-central-ducted-cfg-2",
      slug: "blueridge-bng-series-central-ducted-cfg-2",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng2a24scn",
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
      id: "blueridge-bng-series-central-ducted-cfg-3",
      slug: "blueridge-bng-series-central-ducted-cfg-3",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng2a36scn",
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
      id: "blueridge-bng-series-central-ducted-cfg-4",
      slug: "blueridge-bng-series-central-ducted-cfg-4",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng2a48scn",
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
      id: "blueridge-bng-series-central-ducted-cfg-5",
      slug: "blueridge-bng-series-central-ducted-cfg-5",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng2a60scn",
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
      id: "blueridge-bng-series-central-ducted-cfg-6",
      slug: "blueridge-bng-series-central-ducted-cfg-6",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a18ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-7",
      slug: "blueridge-bng-series-central-ducted-cfg-7",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a24ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-8",
      slug: "blueridge-bng-series-central-ducted-cfg-8",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a30ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-9",
      slug: "blueridge-bng-series-central-ducted-cfg-9",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a36ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-10",
      slug: "blueridge-bng-series-central-ducted-cfg-10",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a48ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-11",
      slug: "blueridge-bng-series-central-ducted-cfg-11",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a60ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-12",
      slug: "blueridge-bng-series-central-ducted-cfg-12",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a18ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-13",
      slug: "blueridge-bng-series-central-ducted-cfg-13",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a24ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-14",
      slug: "blueridge-bng-series-central-ducted-cfg-14",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a30ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-15",
      slug: "blueridge-bng-series-central-ducted-cfg-15",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a36ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-16",
      slug: "blueridge-bng-series-central-ducted-cfg-16",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a48ucn",
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
      id: "blueridge-bng-series-central-ducted-cfg-17",
      slug: "blueridge-bng-series-central-ducted-cfg-17",
      modelId: "blueridge-bng-series-central-ducted",
      outdoorUnitId: "blueridge-bng3a60ucn",
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
      id: "blueridge-bxs-series-wall-single-cfg-1",
      slug: "blueridge-bxs-series-wall-single-cfg-1",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs1a09sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-2",
      slug: "blueridge-bxs-series-wall-single-cfg-2",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs1a24sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-3",
      slug: "blueridge-bxs-series-wall-single-cfg-3",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a09sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 25.8,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-4",
      slug: "blueridge-bxs-series-wall-single-cfg-4",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a12sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.5,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-5",
      slug: "blueridge-bxs-series-wall-single-cfg-5",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a18sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-6",
      slug: "blueridge-bxs-series-wall-single-cfg-6",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a24sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-7",
      slug: "blueridge-bxs-series-wall-single-cfg-7",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a06uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-8",
      slug: "blueridge-bxs-series-wall-single-cfg-8",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a09uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-9",
      slug: "blueridge-bxs-series-wall-single-cfg-9",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a12uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-10",
      slug: "blueridge-bxs-series-wall-single-cfg-10",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a18uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-11",
      slug: "blueridge-bxs-series-wall-single-cfg-11",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a24uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-12",
      slug: "blueridge-bxs-series-wall-single-cfg-12",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a33uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-13",
      slug: "blueridge-bxs-series-wall-single-cfg-13",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs6a06uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 35,
      hspf2: 15.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-14",
      slug: "blueridge-bxs-series-wall-single-cfg-14",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs6a09uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-15",
      slug: "blueridge-bxs-series-wall-single-cfg-15",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs6a12uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-16",
      slug: "blueridge-bxs-series-wall-single-cfg-16",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs6a18uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.6,
      hspf2: 16.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-17",
      slug: "blueridge-bxs-series-wall-single-cfg-17",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a09sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.6,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-18",
      slug: "blueridge-bxs-series-wall-single-cfg-18",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a12sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.1,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-19",
      slug: "blueridge-bxs-series-wall-single-cfg-19",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a18sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16800,
      coolingCapacityMaxBtu: 16800,
      seer2: 20.7,
      hspf2: 11.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-20",
      slug: "blueridge-bxs-series-wall-single-cfg-20",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a24sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-21",
      slug: "blueridge-bxs-series-wall-single-cfg-21",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a09sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.1,
      hspf2: 11.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-22",
      slug: "blueridge-bxs-series-wall-single-cfg-22",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a12sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.1,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-23",
      slug: "blueridge-bxs-series-wall-single-cfg-23",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a18sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.2,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-24",
      slug: "blueridge-bxs-series-wall-single-cfg-24",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a09sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.5,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-25",
      slug: "blueridge-bxs-series-wall-single-cfg-25",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a12sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11500,
      coolingCapacityMaxBtu: 11500,
      seer2: 19,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-26",
      slug: "blueridge-bxs-series-wall-single-cfg-26",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a18sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-27",
      slug: "blueridge-bxs-series-wall-single-cfg-27",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a09sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.7,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-28",
      slug: "blueridge-bxs-series-wall-single-cfg-28",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a12sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-29",
      slug: "blueridge-bxs-series-wall-single-cfg-29",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a18sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 20,
      hspf2: 11.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-30",
      slug: "blueridge-bxs-series-wall-single-cfg-30",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a24sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-31",
      slug: "blueridge-bxs-series-wall-single-cfg-31",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a09sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-32",
      slug: "blueridge-bxs-series-wall-single-cfg-32",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a12sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 24.6,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-33",
      slug: "blueridge-bxs-series-wall-single-cfg-33",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a18sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 23.8,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-34",
      slug: "blueridge-bxs-series-wall-single-cfg-34",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a18sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.3,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-35",
      slug: "blueridge-bxs-series-wall-single-cfg-35",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs3a24sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.1,
      hspf2: 11.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-36",
      slug: "blueridge-bxs-series-wall-single-cfg-36",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a09uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-37",
      slug: "blueridge-bxs-series-wall-single-cfg-37",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a12uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-38",
      slug: "blueridge-bxs-series-wall-single-cfg-38",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a18uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-39",
      slug: "blueridge-bxs-series-wall-single-cfg-39",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a24uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-40",
      slug: "blueridge-bxs-series-wall-single-cfg-40",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a06uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-41",
      slug: "blueridge-bxs-series-wall-single-cfg-41",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a09uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-42",
      slug: "blueridge-bxs-series-wall-single-cfg-42",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a12uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-43",
      slug: "blueridge-bxs-series-wall-single-cfg-43",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a18uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-44",
      slug: "blueridge-bxs-series-wall-single-cfg-44",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a09uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-45",
      slug: "blueridge-bxs-series-wall-single-cfg-45",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a12uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-46",
      slug: "blueridge-bxs-series-wall-single-cfg-46",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a18uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-47",
      slug: "blueridge-bxs-series-wall-single-cfg-47",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a09uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-48",
      slug: "blueridge-bxs-series-wall-single-cfg-48",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a12uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-49",
      slug: "blueridge-bxs-series-wall-single-cfg-49",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a18uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-50",
      slug: "blueridge-bxs-series-wall-single-cfg-50",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a24uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-51",
      slug: "blueridge-bxs-series-wall-single-cfg-51",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a09uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-52",
      slug: "blueridge-bxs-series-wall-single-cfg-52",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a12uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-53",
      slug: "blueridge-bxs-series-wall-single-cfg-53",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a18uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxs-series-wall-single-cfg-54",
      slug: "blueridge-bxs-series-wall-single-cfg-54",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a18uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-55",
      slug: "blueridge-bxs-series-wall-single-cfg-55",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs5a24uc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-56",
      slug: "blueridge-bxs-series-wall-single-cfg-56",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs2a09sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-57",
      slug: "blueridge-bxs-series-wall-single-cfg-57",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs2a18sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-58",
      slug: "blueridge-bxs-series-wall-single-cfg-58",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs2a24sc0",
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
      id: "blueridge-bxs-series-wall-single-cfg-59",
      slug: "blueridge-bxs-series-wall-single-cfg-59",
      modelId: "blueridge-bxs-series-wall-single",
      outdoorUnitId: "blueridge-bxs2a30sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 22.3,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single-cfg-1",
      slug: "blueridge-bxl-series-wall-single-cfg-1",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl1a36sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single-cfg-2",
      slug: "blueridge-bxl-series-wall-single-cfg-2",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl1a48sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single-cfg-3",
      slug: "blueridge-bxl-series-wall-single-cfg-3",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl1a36sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single-cfg-4",
      slug: "blueridge-bxl-series-wall-single-cfg-4",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl1a48sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 17.1,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single-cfg-5",
      slug: "blueridge-bxl-series-wall-single-cfg-5",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl1a36sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 20,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single-cfg-6",
      slug: "blueridge-bxl-series-wall-single-cfg-6",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl1a48sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 19.8,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single-cfg-7",
      slug: "blueridge-bxl-series-wall-single-cfg-7",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl2a36uc0",
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
      id: "blueridge-bxl-series-wall-single-cfg-8",
      slug: "blueridge-bxl-series-wall-single-cfg-8",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl2a48uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxl-series-wall-single-cfg-9",
      slug: "blueridge-bxl-series-wall-single-cfg-9",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl2a36uc0",
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
      id: "blueridge-bxl-series-wall-single-cfg-10",
      slug: "blueridge-bxl-series-wall-single-cfg-10",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl2a48uc0",
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
      id: "blueridge-bxl-series-wall-single-cfg-11",
      slug: "blueridge-bxl-series-wall-single-cfg-11",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl2a60uc0",
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
      id: "blueridge-bxl-series-wall-single-cfg-12",
      slug: "blueridge-bxl-series-wall-single-cfg-12",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl2a36uc0",
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
      id: "blueridge-bxl-series-wall-single-cfg-13",
      slug: "blueridge-bxl-series-wall-single-cfg-13",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl2a48uc0",
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
      id: "blueridge-bxl-series-wall-single-cfg-14",
      slug: "blueridge-bxl-series-wall-single-cfg-14",
      modelId: "blueridge-bxl-series-wall-single",
      outdoorUnitId: "blueridge-bxl2a60uc0",
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
      id: "blueridge-bd-series-wall-single-cfg-1",
      slug: "blueridge-bd-series-wall-single-cfg-1",
      modelId: "blueridge-bd-series-wall-single",
      outdoorUnitId: "blueridge-bds1a09scv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20.2,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bds-series-wall-single-cfg-1",
      slug: "blueridge-bds-series-wall-single-cfg-1",
      modelId: "blueridge-bds-series-wall-single",
      outdoorUnitId: "blueridge-bds2a09scv",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 23.6,
      hspf2: 11.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bds-series-wall-single-cfg-2",
      slug: "blueridge-bds-series-wall-single-cfg-2",
      modelId: "blueridge-bds-series-wall-single",
      outdoorUnitId: "blueridge-bds2a12scv",
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
      id: "blueridge-bds-series-wall-single-cfg-3",
      slug: "blueridge-bds-series-wall-single-cfg-3",
      modelId: "blueridge-bds-series-wall-single",
      outdoorUnitId: "blueridge-bds2a18sc0",
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
      id: "blueridge-bds-series-wall-single-cfg-4",
      slug: "blueridge-bds-series-wall-single-cfg-4",
      modelId: "blueridge-bds-series-wall-single",
      outdoorUnitId: "blueridge-bds2a24sc0",
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
      id: "blueridge-bds-series-wall-single-cfg-5",
      slug: "blueridge-bds-series-wall-single-cfg-5",
      modelId: "blueridge-bds-series-wall-single",
      outdoorUnitId: "blueridge-bds3a12uc0",
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
      id: "blueridge-bds-series-wall-single-cfg-6",
      slug: "blueridge-bds-series-wall-single-cfg-6",
      modelId: "blueridge-bds-series-wall-single",
      outdoorUnitId: "blueridge-bds3a18uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.2,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bxm-series-wall-single-cfg-1",
      slug: "blueridge-bxm-series-wall-single-cfg-1",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a18sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-2",
      slug: "blueridge-bxm-series-wall-single-cfg-2",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a18sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-3",
      slug: "blueridge-bxm-series-wall-single-cfg-3",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a18sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-4",
      slug: "blueridge-bxm-series-wall-single-cfg-4",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a27sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-5",
      slug: "blueridge-bxm-series-wall-single-cfg-5",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a27sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-6",
      slug: "blueridge-bxm-series-wall-single-cfg-6",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a27sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-7",
      slug: "blueridge-bxm-series-wall-single-cfg-7",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a36sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-8",
      slug: "blueridge-bxm-series-wall-single-cfg-8",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a36sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-9",
      slug: "blueridge-bxm-series-wall-single-cfg-9",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a36sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-10",
      slug: "blueridge-bxm-series-wall-single-cfg-10",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a48sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-11",
      slug: "blueridge-bxm-series-wall-single-cfg-11",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a48sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-12",
      slug: "blueridge-bxm-series-wall-single-cfg-12",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm1a48sc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-13",
      slug: "blueridge-bxm-series-wall-single-cfg-13",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a18uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-14",
      slug: "blueridge-bxm-series-wall-single-cfg-14",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a18uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-15",
      slug: "blueridge-bxm-series-wall-single-cfg-15",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a18uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-16",
      slug: "blueridge-bxm-series-wall-single-cfg-16",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a27uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-17",
      slug: "blueridge-bxm-series-wall-single-cfg-17",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a27uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-18",
      slug: "blueridge-bxm-series-wall-single-cfg-18",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a27uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-19",
      slug: "blueridge-bxm-series-wall-single-cfg-19",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a36uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-20",
      slug: "blueridge-bxm-series-wall-single-cfg-20",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a36uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-21",
      slug: "blueridge-bxm-series-wall-single-cfg-21",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a36uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-22",
      slug: "blueridge-bxm-series-wall-single-cfg-22",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a48uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-23",
      slug: "blueridge-bxm-series-wall-single-cfg-23",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a48uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-24",
      slug: "blueridge-bxm-series-wall-single-cfg-24",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a48uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-25",
      slug: "blueridge-bxm-series-wall-single-cfg-25",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a55uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-26",
      slug: "blueridge-bxm-series-wall-single-cfg-26",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a55uc0",
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
      id: "blueridge-bxm-series-wall-single-cfg-27",
      slug: "blueridge-bxm-series-wall-single-cfg-27",
      modelId: "blueridge-bxm-series-wall-single",
      outdoorUnitId: "blueridge-bxm3a55uc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-1",
      slug: "blueridge-bdm-series-wall-single-cfg-1",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a18sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-2",
      slug: "blueridge-bdm-series-wall-single-cfg-2",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a27sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-3",
      slug: "blueridge-bdm-series-wall-single-cfg-3",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a27sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-4",
      slug: "blueridge-bdm-series-wall-single-cfg-4",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a27sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-5",
      slug: "blueridge-bdm-series-wall-single-cfg-5",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a36sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-6",
      slug: "blueridge-bdm-series-wall-single-cfg-6",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a36sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-7",
      slug: "blueridge-bdm-series-wall-single-cfg-7",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a36sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-8",
      slug: "blueridge-bdm-series-wall-single-cfg-8",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a48sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-9",
      slug: "blueridge-bdm-series-wall-single-cfg-9",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a48sc0",
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
      id: "blueridge-bdm-series-wall-single-cfg-10",
      slug: "blueridge-bdm-series-wall-single-cfg-10",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a48sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 43000,
      coolingCapacityMaxBtu: 43000,
      seer2: 20.9,
      hspf2: 10.25,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bdm-series-wall-single-cfg-11",
      slug: "blueridge-bdm-series-wall-single-cfg-11",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a55sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 22,
      hspf2: 10.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bdm-series-wall-single-cfg-12",
      slug: "blueridge-bdm-series-wall-single-cfg-12",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a55sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-bdm-series-wall-single-cfg-13",
      slug: "blueridge-bdm-series-wall-single-cfg-13",
      modelId: "blueridge-bdm-series-wall-single",
      outdoorUnitId: "blueridge-bdm1a55sc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 21,
      hspf2: 10.55,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-xs4-wall-single-cfg-1",
      slug: "blueridge-xs4-wall-single-cfg-1",
      modelId: "blueridge-xs4-wall-single",
      outdoorUnitId: "blueridge-bxm2z48uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-xs4-wall-single-cfg-2",
      slug: "blueridge-xs4-wall-single-cfg-2",
      modelId: "blueridge-xs4-wall-single",
      outdoorUnitId: "blueridge-bxm2z48uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 18,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-xs4-wall-single-cfg-3",
      slug: "blueridge-xs4-wall-single-cfg-3",
      modelId: "blueridge-xs4-wall-single",
      outdoorUnitId: "blueridge-bxm2z48uc0",
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
      id: "blueridge-xs4-wall-single-cfg-4",
      slug: "blueridge-xs4-wall-single-cfg-4",
      modelId: "blueridge-xs4-wall-single",
      outdoorUnitId: "blueridge-bxs4z09uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9100,
      coolingCapacityMaxBtu: 9100,
      seer2: 23,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-xs4-wall-single-cfg-5",
      slug: "blueridge-xs4-wall-single-cfg-5",
      modelId: "blueridge-xs4-wall-single",
      outdoorUnitId: "blueridge-bxs4z12uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "blueridge-xs4-wall-single-cfg-6",
      slug: "blueridge-xs4-wall-single-cfg-6",
      modelId: "blueridge-xs4-wall-single",
      outdoorUnitId: "blueridge-bxs4z18uc0",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 24.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "blueridge-standard-wall-single-cfg-1",
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
      configurationId: "blueridge-standard-wall-single-cfg-2",
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
      configurationId: "blueridge-standard-wall-single-cfg-3",
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
      configurationId: "blueridge-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-standard-wall-single-cfg-5",
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
      configurationId: "blueridge-standard-wall-single-cfg-6",
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
      configurationId: "blueridge-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-standard-wall-single-cfg-8",
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
      configurationId: "blueridge-standard-wall-single-cfg-9",
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
      configurationId: "blueridge-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-standard-wall-single-cfg-11",
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
      configurationId: "blueridge-standard-wall-single-cfg-12",
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
      configurationId: "blueridge-standard-wall-single-cfg-13",
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
      configurationId: "blueridge-standard-wall-single-cfg-14",
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
      configurationId: "blueridge-standard-wall-single-cfg-15",
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
      configurationId: "blueridge-standard-wall-single-cfg-16",
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
      configurationId: "blueridge-standard-wall-single-cfg-17",
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
      configurationId: "blueridge-standard-wall-single-cfg-18",
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
      configurationId: "blueridge-standard-wall-single-cfg-19",
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
      configurationId: "blueridge-standard-wall-single-cfg-20",
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
      configurationId: "blueridge-standard-wall-single-cfg-21",
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
      configurationId: "blueridge-standard-wall-single-cfg-22",
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
      configurationId: "blueridge-standard-wall-single-cfg-23",
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
      configurationId: "blueridge-standard-wall-single-cfg-24",
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
      configurationId: "blueridge-standard-wall-single-cfg-25",
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
      configurationId: "blueridge-standard-wall-single-cfg-26",
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
      configurationId: "blueridge-standard-wall-single-cfg-27",
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
      configurationId: "blueridge-standard-wall-single-cfg-28",
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
      configurationId: "blueridge-standard-wall-single-cfg-29",
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
      configurationId: "blueridge-standard-wall-single-cfg-30",
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
      configurationId: "blueridge-standard-wall-single-cfg-31",
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
      configurationId: "blueridge-standard-wall-single-cfg-32",
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
      configurationId: "blueridge-standard-wall-single-cfg-33",
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
      configurationId: "blueridge-standard-wall-single-cfg-34",
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
      configurationId: "blueridge-standard-wall-single-cfg-35",
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
      configurationId: "blueridge-standard-wall-single-cfg-36",
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
      configurationId: "blueridge-standard-wall-single-cfg-37",
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
      configurationId: "blueridge-standard-wall-single-cfg-38",
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
      configurationId: "blueridge-standard-wall-single-cfg-39",
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
      configurationId: "blueridge-standard-wall-single-cfg-40",
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
      configurationId: "blueridge-standard-wall-single-cfg-41",
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
      configurationId: "blueridge-standard-wall-single-cfg-42",
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
      configurationId: "blueridge-standard-wall-single-cfg-43",
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
      configurationId: "blueridge-standard-wall-single-cfg-44",
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
      configurationId: "blueridge-standard-wall-single-cfg-45",
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
      configurationId: "blueridge-standard-wall-single-cfg-46",
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
      configurationId: "blueridge-standard-wall-single-cfg-47",
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
      configurationId: "blueridge-standard-wall-single-cfg-48",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-1",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-2",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-3",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-4",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-5",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-6",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-7",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-8",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-9",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-10",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-11",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-12",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-13",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-14",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-15",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-16",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-17",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-18",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-19",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-20",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-21",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-22",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-23",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-24",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-25",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-26",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-27",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-28",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-29",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-30",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-31",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-32",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-33",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-34",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-35",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-36",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-37",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-38",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-39",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-40",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-41",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-42",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-43",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 34800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bm-series-wall-single-cfg-45",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-46",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bm-series-wall-single-cfg-47",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-48",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-49",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-50",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-51",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-52",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-53",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-54",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-55",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-56",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-57",
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
      configurationId: "blueridge-bm-series-wall-single-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bm-series-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bm-series-wall-single-cfg-60",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-1",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-2",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-3",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-4",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-5",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-6",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-7",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-8",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-9",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-10",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-11",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-12",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-13",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-14",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-15",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-16",
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
      configurationId: "blueridge-bmah-series-central-ducted-cfg-17",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-1",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-2",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-3",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-4",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-5",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-6",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-7",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-8",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-9",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-10",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-11",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-12",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-13",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-14",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-15",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-16",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-17",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-18",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-19",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-20",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-21",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-22",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-23",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-24",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-25",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-26",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-27",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-28",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-29",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-30",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-31",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-32",
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
      configurationId: "blueridge-bmm-series-wall-single-cfg-33",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-1",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-2",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-3",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-4",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-5",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-6",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-7",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-8",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-9",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-10",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-11",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-12",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-13",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-14",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-15",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-16",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-17",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-18",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-19",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-20",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-21",
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
      configurationId: "blueridge-bms-series-central-ducted-cfg-22",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.94,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bms-series-wall-single-cfg-2",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-3",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-4",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-5",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-6",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-7",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.54,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bms-series-wall-single-cfg-9",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-10",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-11",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-12",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-13",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-14",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-15",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-16",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-17",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-18",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-19",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-20",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-21",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-22",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-23",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-24",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-25",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-26",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-27",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-28",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-29",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-30",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-31",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-32",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-33",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-34",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-35",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-36",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-37",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-38",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-39",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-40",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-41",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-42",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-43",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-44",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-45",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-46",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-47",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-48",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-49",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-50",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-51",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-52",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-53",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-54",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-55",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-56",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-57",
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
      configurationId: "blueridge-bms-series-wall-single-cfg-58",
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
      configurationId: "blueridge-bxs-series-central-ducted-cfg-1",
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
      configurationId: "blueridge-bxs-series-central-ducted-cfg-2",
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
      configurationId: "blueridge-bxs-series-central-ducted-cfg-3",
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
      configurationId: "blueridge-bxs-series-central-ducted-cfg-4",
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
      configurationId: "blueridge-bxs-series-central-ducted-cfg-5",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-1",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-2",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-3",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-4",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-5",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-6",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-7",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-8",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-9",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-10",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-11",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-12",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-13",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-14",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-15",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-16",
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
      configurationId: "blueridge-bng-series-central-ducted-cfg-17",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-1",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-2",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-3",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-4",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-5",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: 2.54,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bxs-series-wall-single-cfg-7",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-8",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-9",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-10",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-11",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-12",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-13",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-14",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-15",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-16",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-17",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-18",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-19",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-20",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-21",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-22",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-23",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-24",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-25",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-26",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-27",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-28",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-29",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-30",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-31",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-32",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-33",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-34",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-35",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-36",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-37",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-38",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-39",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-40",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-41",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-42",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-43",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-44",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-45",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-46",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-47",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-48",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-49",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-50",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-51",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-52",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-53",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-54",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-55",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-56",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-57",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-58",
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
      configurationId: "blueridge-bxs-series-wall-single-cfg-59",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-1",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-2",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-3",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-4",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-5",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-6",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-7",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-8",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-9",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-10",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-11",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-12",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-13",
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
      configurationId: "blueridge-bxl-series-wall-single-cfg-14",
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
      configurationId: "blueridge-bd-series-wall-single-cfg-1",
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
      configurationId: "blueridge-bds-series-wall-single-cfg-1",
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
      configurationId: "blueridge-bds-series-wall-single-cfg-2",
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
      configurationId: "blueridge-bds-series-wall-single-cfg-3",
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
      configurationId: "blueridge-bds-series-wall-single-cfg-4",
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
      configurationId: "blueridge-bds-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bds-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 1.99,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bxm-series-wall-single-cfg-1",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-2",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-3",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-4",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-5",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-6",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-7",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-8",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-9",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-10",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-11",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-12",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-13",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-14",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-15",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-16",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-17",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-18",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-19",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-20",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-21",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-22",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-23",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-24",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-25",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-26",
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
      configurationId: "blueridge-bxm-series-wall-single-cfg-27",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-1",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-2",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-3",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-4",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-5",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-6",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-7",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-8",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-9",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bdm-series-wall-single-cfg-11",
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
      configurationId: "blueridge-bdm-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-bdm-series-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 43000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-xs4-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-xs4-wall-single-cfg-2",
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
      configurationId: "blueridge-xs4-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 40000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-xs4-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8800,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-xs4-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "blueridge-xs4-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
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
