import type { BrandDataset } from "../../types";

export const canairDataset: BrandDataset = {
  brand: {
    id: "canair",
    slug: "canair",
    name: "CANAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "canair-standard",
      slug: "canair-standard",
      name: "Standard",
      brandId: "canair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c23-series",
      slug: "canair-c23-series",
      name: "C23 Series",
      brandId: "canair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c22-series",
      slug: "canair-c22-series",
      name: "C22 Series",
      brandId: "canair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c28-series",
      slug: "canair-c28-series",
      name: "C28 Series",
      brandId: "canair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-cdh-series",
      slug: "canair-cdh-series",
      name: "CDH series",
      brandId: "canair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-bz33-series",
      slug: "canair-bz33-series",
      name: "BZ33 series",
      brandId: "canair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c25-series",
      slug: "canair-c25-series",
      name: "C25 Series",
      brandId: "canair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-4cdh-series",
      slug: "canair-4cdh-series",
      name: "4CDH Series",
      brandId: "canair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-4c22-series",
      slug: "canair-4c22-series",
      name: "4C22 Series",
      brandId: "canair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-4c-series",
      slug: "canair-4c-series",
      name: "4C Series",
      brandId: "canair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-4cd-series",
      slug: "canair-4cd-series",
      name: "4CD Series",
      brandId: "canair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "canair-standard-wall-single",
      slug: "canair-standard-wall-single",
      name: "Standard",
      seriesId: "canair-standard",
      brandId: "canair",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6000,
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
      id: "canair-c23-series-wall-single",
      slug: "canair-c23-series-wall-single",
      name: "C23 Series",
      seriesId: "canair-c23-series",
      brandId: "canair",
      modelNumber: "C23 Series",
      normalizedModelNumber: "c23-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 21600,
      heatingCapacity5FMinBtu: 10900,
      heatingCapacity5FMaxBtu: 19400,
      seer2Min: 18.9,
      seer2Max: 21.5,
      hspf2Min: 10,
      hspf2Max: 11.3,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c22-series-wall-single",
      slug: "canair-c22-series-wall-single",
      name: "C22 Series",
      seriesId: "canair-c22-series",
      brandId: "canair",
      modelNumber: "C22 Series",
      normalizedModelNumber: "c22-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 6900,
      seer2Min: 21.5,
      seer2Max: 21.7,
      hspf2Min: 9,
      hspf2Max: 9.1,
      cop5FMin: 1.89,
      cop5FMax: 1.96,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c28-series-wall-single",
      slug: "canair-c28-series-wall-single",
      name: "C28 Series",
      seriesId: "canair-c28-series",
      brandId: "canair",
      modelNumber: "C28 Series",
      normalizedModelNumber: "c28-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 9500,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 19,
      seer2Max: 28.1,
      hspf2Min: 9,
      hspf2Max: 11.5,
      cop5FMin: 1.8,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-cdh-series-central-ducted",
      slug: "canair-cdh-series-central-ducted",
      name: "CDH series",
      seriesId: "canair-cdh-series",
      brandId: "canair",
      modelNumber: "CDH series",
      normalizedModelNumber: "cdh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13000,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 10.2,
      cop5FMin: 1.8,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-bz33-series-wall-single",
      slug: "canair-bz33-series-wall-single",
      name: "BZ33 series",
      seriesId: "canair-bz33-series",
      brandId: "canair",
      modelNumber: "BZ33 series",
      normalizedModelNumber: "bz33-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      heatingCapacity5FMinBtu: 33000,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 22.2,
      seer2Max: 22.2,
      hspf2Min: 10.3,
      hspf2Max: 10.3,
      cop5FMin: 1.9,
      cop5FMax: 1.9,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c25-series-wall-single",
      slug: "canair-c25-series-wall-single",
      name: "C25 Series",
      seriesId: "canair-c25-series",
      brandId: "canair",
      modelNumber: "C25 Series",
      normalizedModelNumber: "c25-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 8500,
      heatingCapacity5FMaxBtu: 9000,
      seer2Min: 24.6,
      seer2Max: 25.5,
      hspf2Min: 10.7,
      hspf2Max: 12.3,
      cop5FMin: 2.17,
      cop5FMax: 2.39,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-4cdh-series-central-ducted",
      slug: "canair-4cdh-series-central-ducted",
      name: "4CDH Series",
      seriesId: "canair-4cdh-series",
      brandId: "canair",
      modelNumber: "4CDH Series",
      normalizedModelNumber: "4cdh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 15000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 16,
      seer2Max: 19,
      hspf2Min: 9,
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
      id: "canair-4c22-series-wall-single",
      slug: "canair-4c22-series-wall-single",
      name: "4C22 Series",
      seriesId: "canair-4c22-series",
      brandId: "canair",
      modelNumber: "4C22 Series",
      normalizedModelNumber: "4c22-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 53000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 18.7,
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
      id: "canair-4c-series-wall-single",
      slug: "canair-4c-series-wall-single",
      name: "4C Series",
      seriesId: "canair-4c-series",
      brandId: "canair",
      modelNumber: "4C Series",
      normalizedModelNumber: "4c-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 7300,
      heatingCapacity5FMaxBtu: 12300,
      seer2Min: 20.2,
      seer2Max: 21.3,
      hspf2Min: 8.7,
      hspf2Max: 9.2,
      cop5FMin: 1.8,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-4cd-series-central-ducted",
      slug: "canair-4cd-series-central-ducted",
      name: "4CD Series",
      seriesId: "canair-4cd-series",
      brandId: "canair",
      modelNumber: "4CD Series",
      normalizedModelNumber: "4cd-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 15200,
      heatingCapacity5FMaxBtu: 37800,
      seer2Min: 15.2,
      seer2Max: 16.1,
      hspf2Min: 8.1,
      hspf2Max: 9.6,
      cop5FMin: 1.8,
      cop5FMax: 2.06,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "canair-c19sch09h11",
      modelNumber: "C19SCH09H11",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c19sch18h21",
      modelNumber: "C19SCH18H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c23sch09h21",
      modelNumber: "C23SCH09H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c23sch12h21",
      modelNumber: "C23SCH12H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c23mc218h21",
      modelNumber: "C23MC218H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c23mc327h21",
      modelNumber: "C23MC327H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c23mc548h21",
      modelNumber: "C23MC548H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c22sch18h21",
      modelNumber: "C22SCH18H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-cdh2060c21",
      modelNumber: "CDH2060C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c22sch12h21",
      modelNumber: "C22SCH12H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28sch36h21",
      modelNumber: "4C28SCH36H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c23sch18h22",
      modelNumber: "C23SCH18H22",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c23sch24h22",
      modelNumber: "C23SCH24H22",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c22sch09h11",
      modelNumber: "C22SCH09H11",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c22sch09h21",
      modelNumber: "C22SCH09H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28sch09h21",
      modelNumber: "C28SCH09H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28sch12h21",
      modelNumber: "C28SCH12H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28sch18h21",
      modelNumber: "C28SCH18H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28sch24h21",
      modelNumber: "C28SCH24H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28mc218h21",
      modelNumber: "C28MC218H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28mc324h21",
      modelNumber: "C28MC324H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28mc436h21",
      modelNumber: "C28MC436H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28mc548h21",
      modelNumber: "C28MC548H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28mc328h21",
      modelNumber: "C28MC328H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28mc436h22",
      modelNumber: "C28MC436H22",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c28mc218h22",
      modelNumber: "C28MC218H22",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-cdh2018c21",
      modelNumber: "CDH2018C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-cdh2024c21",
      modelNumber: "CDH2024C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-cdh2030c21",
      modelNumber: "CDH2030C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-cdh2036c21",
      modelNumber: "CDH2036C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-cdh2048c21",
      modelNumber: "CDH2048C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-cdh2060c22",
      modelNumber: "CDH2060C22",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-cdh2036c22",
      modelNumber: "CDH2036C22",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-bz33-hyp364z2-g2-p",
      modelNumber: "BZ33-HYP364Z2-G2-P",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c25sch12h21",
      modelNumber: "C25SCH12H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-c25sch09h21",
      modelNumber: "C25SCH09H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4cdh2018c21",
      modelNumber: "4CDH2018C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4cdh2024c21",
      modelNumber: "4CDH2024C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4cdh2030c21",
      modelNumber: "4CDH2030C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4cdh2036c21",
      modelNumber: "4CDH2036C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4cdh2048c21",
      modelNumber: "4CDH2048C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4cdh2060c21",
      modelNumber: "4CDH2060C21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c22sch09h11",
      modelNumber: "4C22SCH09H11",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c22sch09h21",
      modelNumber: "4C22SCH09H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c22sch24h21",
      modelNumber: "4C22SCH24H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28sch06h21",
      modelNumber: "4C28SCH06H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28sch09h21",
      modelNumber: "4C28SCH09H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28sch12h21",
      modelNumber: "4C28SCH12H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28sch18h21",
      modelNumber: "4C28SCH18H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28sch24h21",
      modelNumber: "4C28SCH24H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28sch30h21",
      modelNumber: "4C28SCH30H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28sch33h21",
      modelNumber: "4C28SCH33H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28mc318h21",
      modelNumber: "4C28MC318H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28mc428h21",
      modelNumber: "4C28MC428H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28mc536h21",
      modelNumber: "4C28MC536H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28mc648h21",
      modelNumber: "4C28MC648H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c28mc655h21",
      modelNumber: "4C28MC655H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c25sch09h21",
      modelNumber: "4C25SCH09H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c25sch12h21",
      modelNumber: "4C25SCH12H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c25sch18h21",
      modelNumber: "4C25SCH18H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c25sch24h21",
      modelNumber: "4C25SCH24H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c22sch12h11",
      modelNumber: "4C22SCH12H11",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c22sch12h21",
      modelNumber: "4C22SCH12H21",
      brandId: "canair",
      refrigerant: null as any,
    },
    {
      id: "canair-4c22sch18h21",
      modelNumber: "4C22SCH18H21",
      brandId: "canair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "canair-standard-wall-single-cfg-1",
      slug: "canair-standard-wall-single-cfg-1",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c19sch09h11",
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
      id: "canair-standard-wall-single-cfg-2",
      slug: "canair-standard-wall-single-cfg-2",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c19sch18h21",
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
      id: "canair-standard-wall-single-cfg-3",
      slug: "canair-standard-wall-single-cfg-3",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c23sch09h21",
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
      id: "canair-standard-wall-single-cfg-4",
      slug: "canair-standard-wall-single-cfg-4",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c23sch12h21",
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
      id: "canair-standard-wall-single-cfg-5",
      slug: "canair-standard-wall-single-cfg-5",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c23mc218h21",
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
      id: "canair-standard-wall-single-cfg-6",
      slug: "canair-standard-wall-single-cfg-6",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c23mc327h21",
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
      id: "canair-standard-wall-single-cfg-7",
      slug: "canair-standard-wall-single-cfg-7",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c23mc548h21",
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
      id: "canair-standard-wall-single-cfg-8",
      slug: "canair-standard-wall-single-cfg-8",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c22sch18h21",
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
      id: "canair-standard-wall-single-cfg-9",
      slug: "canair-standard-wall-single-cfg-9",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-cdh2060c21",
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
      id: "canair-standard-wall-single-cfg-10",
      slug: "canair-standard-wall-single-cfg-10",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-cdh2060c21",
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
      id: "canair-standard-wall-single-cfg-11",
      slug: "canair-standard-wall-single-cfg-11",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-cdh2060c21",
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
      id: "canair-standard-wall-single-cfg-12",
      slug: "canair-standard-wall-single-cfg-12",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-c22sch12h21",
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
      id: "canair-standard-wall-single-cfg-13",
      slug: "canair-standard-wall-single-cfg-13",
      modelId: "canair-standard-wall-single",
      outdoorUnitId: "canair-4c28sch36h21",
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
      id: "canair-c23-series-wall-single-cfg-1",
      slug: "canair-c23-series-wall-single-cfg-1",
      modelId: "canair-c23-series-wall-single",
      outdoorUnitId: "canair-c23sch18h22",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c23-series-wall-single-cfg-2",
      slug: "canair-c23-series-wall-single-cfg-2",
      modelId: "canair-c23-series-wall-single",
      outdoorUnitId: "canair-c23sch24h22",
      indoorUnitId: null,
      coolingCapacityMinBtu: 21600,
      coolingCapacityMaxBtu: 21600,
      seer2: 18.9,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c23-series-wall-single-cfg-3",
      slug: "canair-c23-series-wall-single-cfg-3",
      modelId: "canair-c23-series-wall-single",
      outdoorUnitId: "canair-c23sch18h22",
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
      id: "canair-c22-series-wall-single-cfg-1",
      slug: "canair-c22-series-wall-single-cfg-1",
      modelId: "canair-c22-series-wall-single",
      outdoorUnitId: "canair-c22sch09h11",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c22-series-wall-single-cfg-2",
      slug: "canair-c22-series-wall-single-cfg-2",
      modelId: "canair-c22-series-wall-single",
      outdoorUnitId: "canair-c22sch09h21",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.7,
      hspf2: 9.1,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c28-series-wall-single-cfg-1",
      slug: "canair-c28-series-wall-single-cfg-1",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28sch09h21",
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
      id: "canair-c28-series-wall-single-cfg-2",
      slug: "canair-c28-series-wall-single-cfg-2",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28sch12h21",
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
      id: "canair-c28-series-wall-single-cfg-3",
      slug: "canair-c28-series-wall-single-cfg-3",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28sch18h21",
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
      id: "canair-c28-series-wall-single-cfg-4",
      slug: "canair-c28-series-wall-single-cfg-4",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28sch24h21",
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
      id: "canair-c28-series-wall-single-cfg-5",
      slug: "canair-c28-series-wall-single-cfg-5",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc218h21",
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
      id: "canair-c28-series-wall-single-cfg-6",
      slug: "canair-c28-series-wall-single-cfg-6",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc218h21",
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
      id: "canair-c28-series-wall-single-cfg-7",
      slug: "canair-c28-series-wall-single-cfg-7",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc218h21",
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
      id: "canair-c28-series-wall-single-cfg-8",
      slug: "canair-c28-series-wall-single-cfg-8",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc324h21",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 24.6,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c28-series-wall-single-cfg-9",
      slug: "canair-c28-series-wall-single-cfg-9",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc324h21",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.3,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c28-series-wall-single-cfg-10",
      slug: "canair-c28-series-wall-single-cfg-10",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc324h21",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 22.95,
      hspf2: 9.85,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-c28-series-wall-single-cfg-11",
      slug: "canair-c28-series-wall-single-cfg-11",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc436h21",
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
      id: "canair-c28-series-wall-single-cfg-12",
      slug: "canair-c28-series-wall-single-cfg-12",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc548h21",
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
      id: "canair-c28-series-wall-single-cfg-13",
      slug: "canair-c28-series-wall-single-cfg-13",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc548h21",
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
      id: "canair-c28-series-wall-single-cfg-14",
      slug: "canair-c28-series-wall-single-cfg-14",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc548h21",
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
      id: "canair-c28-series-wall-single-cfg-15",
      slug: "canair-c28-series-wall-single-cfg-15",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc328h21",
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
      id: "canair-c28-series-wall-single-cfg-16",
      slug: "canair-c28-series-wall-single-cfg-16",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc328h21",
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
      id: "canair-c28-series-wall-single-cfg-17",
      slug: "canair-c28-series-wall-single-cfg-17",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc328h21",
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
      id: "canair-c28-series-wall-single-cfg-18",
      slug: "canair-c28-series-wall-single-cfg-18",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc436h22",
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
      id: "canair-c28-series-wall-single-cfg-19",
      slug: "canair-c28-series-wall-single-cfg-19",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc436h22",
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
      id: "canair-c28-series-wall-single-cfg-20",
      slug: "canair-c28-series-wall-single-cfg-20",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc218h22",
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
      id: "canair-c28-series-wall-single-cfg-21",
      slug: "canair-c28-series-wall-single-cfg-21",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc218h22",
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
      id: "canair-c28-series-wall-single-cfg-22",
      slug: "canair-c28-series-wall-single-cfg-22",
      modelId: "canair-c28-series-wall-single",
      outdoorUnitId: "canair-c28mc218h22",
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
      id: "canair-cdh-series-central-ducted-cfg-1",
      slug: "canair-cdh-series-central-ducted-cfg-1",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2018c21",
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
      id: "canair-cdh-series-central-ducted-cfg-2",
      slug: "canair-cdh-series-central-ducted-cfg-2",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2024c21",
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
      id: "canair-cdh-series-central-ducted-cfg-3",
      slug: "canair-cdh-series-central-ducted-cfg-3",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2030c21",
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
      id: "canair-cdh-series-central-ducted-cfg-4",
      slug: "canair-cdh-series-central-ducted-cfg-4",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2036c21",
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
      id: "canair-cdh-series-central-ducted-cfg-5",
      slug: "canair-cdh-series-central-ducted-cfg-5",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2048c21",
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
      id: "canair-cdh-series-central-ducted-cfg-6",
      slug: "canair-cdh-series-central-ducted-cfg-6",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2018c21",
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
      id: "canair-cdh-series-central-ducted-cfg-7",
      slug: "canair-cdh-series-central-ducted-cfg-7",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2024c21",
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
      id: "canair-cdh-series-central-ducted-cfg-8",
      slug: "canair-cdh-series-central-ducted-cfg-8",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2030c21",
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
      id: "canair-cdh-series-central-ducted-cfg-9",
      slug: "canair-cdh-series-central-ducted-cfg-9",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2036c21",
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
      id: "canair-cdh-series-central-ducted-cfg-10",
      slug: "canair-cdh-series-central-ducted-cfg-10",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2048c21",
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
      id: "canair-cdh-series-central-ducted-cfg-11",
      slug: "canair-cdh-series-central-ducted-cfg-11",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2060c22",
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
      id: "canair-cdh-series-central-ducted-cfg-12",
      slug: "canair-cdh-series-central-ducted-cfg-12",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2048c21",
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
      id: "canair-cdh-series-central-ducted-cfg-13",
      slug: "canair-cdh-series-central-ducted-cfg-13",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2036c21",
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
      id: "canair-cdh-series-central-ducted-cfg-14",
      slug: "canair-cdh-series-central-ducted-cfg-14",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2024c21",
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
      id: "canair-cdh-series-central-ducted-cfg-15",
      slug: "canair-cdh-series-central-ducted-cfg-15",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2030c21",
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
      id: "canair-cdh-series-central-ducted-cfg-16",
      slug: "canair-cdh-series-central-ducted-cfg-16",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2018c21",
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
      id: "canair-cdh-series-central-ducted-cfg-17",
      slug: "canair-cdh-series-central-ducted-cfg-17",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2060c22",
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
      id: "canair-cdh-series-central-ducted-cfg-18",
      slug: "canair-cdh-series-central-ducted-cfg-18",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2036c21",
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
      id: "canair-cdh-series-central-ducted-cfg-19",
      slug: "canair-cdh-series-central-ducted-cfg-19",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2060c22",
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
      id: "canair-cdh-series-central-ducted-cfg-20",
      slug: "canair-cdh-series-central-ducted-cfg-20",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2060c22",
      indoorUnitId: null,
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-cdh-series-central-ducted-cfg-21",
      slug: "canair-cdh-series-central-ducted-cfg-21",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2036c22",
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
      id: "canair-cdh-series-central-ducted-cfg-22",
      slug: "canair-cdh-series-central-ducted-cfg-22",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2036c22",
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
      id: "canair-cdh-series-central-ducted-cfg-23",
      slug: "canair-cdh-series-central-ducted-cfg-23",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2036c22",
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
      id: "canair-cdh-series-central-ducted-cfg-24",
      slug: "canair-cdh-series-central-ducted-cfg-24",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2024c21",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20000,
      coolingCapacityMaxBtu: 20000,
      seer2: 16.3,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-cdh-series-central-ducted-cfg-25",
      slug: "canair-cdh-series-central-ducted-cfg-25",
      modelId: "canair-cdh-series-central-ducted",
      outdoorUnitId: "canair-cdh2024c21",
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
      id: "canair-bz33-series-wall-single-cfg-1",
      slug: "canair-bz33-series-wall-single-cfg-1",
      modelId: "canair-bz33-series-wall-single",
      outdoorUnitId: "canair-bz33-hyp364z2-g2-p",
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
      id: "canair-c25-series-wall-single-cfg-1",
      slug: "canair-c25-series-wall-single-cfg-1",
      modelId: "canair-c25-series-wall-single",
      outdoorUnitId: "canair-c25sch12h21",
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
      id: "canair-c25-series-wall-single-cfg-2",
      slug: "canair-c25-series-wall-single-cfg-2",
      modelId: "canair-c25-series-wall-single",
      outdoorUnitId: "canair-c25sch09h21",
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
      id: "canair-4cdh-series-central-ducted-cfg-1",
      slug: "canair-4cdh-series-central-ducted-cfg-1",
      modelId: "canair-4cdh-series-central-ducted",
      outdoorUnitId: "canair-4cdh2018c21",
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
      id: "canair-4cdh-series-central-ducted-cfg-2",
      slug: "canair-4cdh-series-central-ducted-cfg-2",
      modelId: "canair-4cdh-series-central-ducted",
      outdoorUnitId: "canair-4cdh2024c21",
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
      id: "canair-4cdh-series-central-ducted-cfg-3",
      slug: "canair-4cdh-series-central-ducted-cfg-3",
      modelId: "canair-4cdh-series-central-ducted",
      outdoorUnitId: "canair-4cdh2030c21",
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
      id: "canair-4cdh-series-central-ducted-cfg-4",
      slug: "canair-4cdh-series-central-ducted-cfg-4",
      modelId: "canair-4cdh-series-central-ducted",
      outdoorUnitId: "canair-4cdh2036c21",
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
      id: "canair-4cdh-series-central-ducted-cfg-5",
      slug: "canair-4cdh-series-central-ducted-cfg-5",
      modelId: "canair-4cdh-series-central-ducted",
      outdoorUnitId: "canair-4cdh2048c21",
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
      id: "canair-4cdh-series-central-ducted-cfg-6",
      slug: "canair-4cdh-series-central-ducted-cfg-6",
      modelId: "canair-4cdh-series-central-ducted",
      outdoorUnitId: "canair-4cdh2060c21",
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
      id: "canair-4cdh-series-central-ducted-cfg-7",
      slug: "canair-4cdh-series-central-ducted-cfg-7",
      modelId: "canair-4cdh-series-central-ducted",
      outdoorUnitId: "canair-4cdh2048c21",
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
      id: "canair-4c22-series-wall-single-cfg-1",
      slug: "canair-4c22-series-wall-single-cfg-1",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c22sch09h11",
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
      id: "canair-4c22-series-wall-single-cfg-2",
      slug: "canair-4c22-series-wall-single-cfg-2",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c22sch09h21",
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
      id: "canair-4c22-series-wall-single-cfg-3",
      slug: "canair-4c22-series-wall-single-cfg-3",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c22sch24h21",
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
      id: "canair-4c22-series-wall-single-cfg-4",
      slug: "canair-4c22-series-wall-single-cfg-4",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28sch06h21",
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
      id: "canair-4c22-series-wall-single-cfg-5",
      slug: "canair-4c22-series-wall-single-cfg-5",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28sch09h21",
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
      id: "canair-4c22-series-wall-single-cfg-6",
      slug: "canair-4c22-series-wall-single-cfg-6",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28sch12h21",
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
      id: "canair-4c22-series-wall-single-cfg-7",
      slug: "canair-4c22-series-wall-single-cfg-7",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28sch18h21",
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
      id: "canair-4c22-series-wall-single-cfg-8",
      slug: "canair-4c22-series-wall-single-cfg-8",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28sch24h21",
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
      id: "canair-4c22-series-wall-single-cfg-9",
      slug: "canair-4c22-series-wall-single-cfg-9",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28sch30h21",
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
      id: "canair-4c22-series-wall-single-cfg-10",
      slug: "canair-4c22-series-wall-single-cfg-10",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28sch33h21",
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
      id: "canair-4c22-series-wall-single-cfg-11",
      slug: "canair-4c22-series-wall-single-cfg-11",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc318h21",
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
      id: "canair-4c22-series-wall-single-cfg-12",
      slug: "canair-4c22-series-wall-single-cfg-12",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc318h21",
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
      id: "canair-4c22-series-wall-single-cfg-13",
      slug: "canair-4c22-series-wall-single-cfg-13",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc318h21",
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
      id: "canair-4c22-series-wall-single-cfg-14",
      slug: "canair-4c22-series-wall-single-cfg-14",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc428h21",
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
      id: "canair-4c22-series-wall-single-cfg-15",
      slug: "canair-4c22-series-wall-single-cfg-15",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc428h21",
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
      id: "canair-4c22-series-wall-single-cfg-16",
      slug: "canair-4c22-series-wall-single-cfg-16",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc428h21",
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
      id: "canair-4c22-series-wall-single-cfg-17",
      slug: "canair-4c22-series-wall-single-cfg-17",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc536h21",
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
      id: "canair-4c22-series-wall-single-cfg-18",
      slug: "canair-4c22-series-wall-single-cfg-18",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc536h21",
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
      id: "canair-4c22-series-wall-single-cfg-19",
      slug: "canair-4c22-series-wall-single-cfg-19",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc536h21",
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
      id: "canair-4c22-series-wall-single-cfg-20",
      slug: "canair-4c22-series-wall-single-cfg-20",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc648h21",
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
      id: "canair-4c22-series-wall-single-cfg-21",
      slug: "canair-4c22-series-wall-single-cfg-21",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc648h21",
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
      id: "canair-4c22-series-wall-single-cfg-22",
      slug: "canair-4c22-series-wall-single-cfg-22",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc648h21",
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
      id: "canair-4c22-series-wall-single-cfg-23",
      slug: "canair-4c22-series-wall-single-cfg-23",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc655h21",
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
      id: "canair-4c22-series-wall-single-cfg-24",
      slug: "canair-4c22-series-wall-single-cfg-24",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc655h21",
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
      id: "canair-4c22-series-wall-single-cfg-25",
      slug: "canair-4c22-series-wall-single-cfg-25",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c28mc655h21",
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
      id: "canair-4c22-series-wall-single-cfg-26",
      slug: "canair-4c22-series-wall-single-cfg-26",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c25sch09h21",
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
      id: "canair-4c22-series-wall-single-cfg-27",
      slug: "canair-4c22-series-wall-single-cfg-27",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c25sch12h21",
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
      id: "canair-4c22-series-wall-single-cfg-28",
      slug: "canair-4c22-series-wall-single-cfg-28",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c25sch18h21",
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
      id: "canair-4c22-series-wall-single-cfg-29",
      slug: "canair-4c22-series-wall-single-cfg-29",
      modelId: "canair-4c22-series-wall-single",
      outdoorUnitId: "canair-4c25sch24h21",
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
      id: "canair-4c-series-wall-single-cfg-1",
      slug: "canair-4c-series-wall-single-cfg-1",
      modelId: "canair-4c-series-wall-single",
      outdoorUnitId: "canair-4c22sch12h11",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.3,
      hspf2: 8.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-4c-series-wall-single-cfg-2",
      slug: "canair-4c-series-wall-single-cfg-2",
      modelId: "canair-4c-series-wall-single",
      outdoorUnitId: "canair-4c22sch12h21",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 21.3,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "canair-4c-series-wall-single-cfg-3",
      slug: "canair-4c-series-wall-single-cfg-3",
      modelId: "canair-4c-series-wall-single",
      outdoorUnitId: "canair-4c22sch18h21",
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
      id: "canair-4cd-series-central-ducted-cfg-1",
      slug: "canair-4cd-series-central-ducted-cfg-1",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2018c21",
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
      id: "canair-4cd-series-central-ducted-cfg-2",
      slug: "canair-4cd-series-central-ducted-cfg-2",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2018c21",
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
      id: "canair-4cd-series-central-ducted-cfg-3",
      slug: "canair-4cd-series-central-ducted-cfg-3",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2024c21",
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
      id: "canair-4cd-series-central-ducted-cfg-4",
      slug: "canair-4cd-series-central-ducted-cfg-4",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2024c21",
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
      id: "canair-4cd-series-central-ducted-cfg-5",
      slug: "canair-4cd-series-central-ducted-cfg-5",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2030c21",
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
      id: "canair-4cd-series-central-ducted-cfg-6",
      slug: "canair-4cd-series-central-ducted-cfg-6",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2030c21",
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
      id: "canair-4cd-series-central-ducted-cfg-7",
      slug: "canair-4cd-series-central-ducted-cfg-7",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2030c21",
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
      id: "canair-4cd-series-central-ducted-cfg-8",
      slug: "canair-4cd-series-central-ducted-cfg-8",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2036c21",
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
      id: "canair-4cd-series-central-ducted-cfg-9",
      slug: "canair-4cd-series-central-ducted-cfg-9",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2036c21",
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
      id: "canair-4cd-series-central-ducted-cfg-10",
      slug: "canair-4cd-series-central-ducted-cfg-10",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2048c21",
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
      id: "canair-4cd-series-central-ducted-cfg-11",
      slug: "canair-4cd-series-central-ducted-cfg-11",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2060c21",
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
      id: "canair-4cd-series-central-ducted-cfg-12",
      slug: "canair-4cd-series-central-ducted-cfg-12",
      modelId: "canair-4cd-series-central-ducted",
      outdoorUnitId: "canair-4cdh2060c21",
      indoorUnitId: null,
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 15.2,
      hspf2: 8.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "canair-standard-wall-single-cfg-1",
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
      configurationId: "canair-standard-wall-single-cfg-2",
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
      configurationId: "canair-standard-wall-single-cfg-3",
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
      configurationId: "canair-standard-wall-single-cfg-4",
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
      configurationId: "canair-standard-wall-single-cfg-5",
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
      configurationId: "canair-standard-wall-single-cfg-6",
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
      configurationId: "canair-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-standard-wall-single-cfg-8",
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
      configurationId: "canair-standard-wall-single-cfg-9",
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
      configurationId: "canair-standard-wall-single-cfg-10",
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
      configurationId: "canair-standard-wall-single-cfg-11",
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
      configurationId: "canair-standard-wall-single-cfg-12",
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
      configurationId: "canair-standard-wall-single-cfg-13",
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
      configurationId: "canair-c23-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10900,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-c23-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-c23-series-wall-single-cfg-3",
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
      configurationId: "canair-c22-series-wall-single-cfg-1",
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
      configurationId: "canair-c22-series-wall-single-cfg-2",
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
      configurationId: "canair-c28-series-wall-single-cfg-1",
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
      configurationId: "canair-c28-series-wall-single-cfg-2",
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
      configurationId: "canair-c28-series-wall-single-cfg-3",
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
      configurationId: "canair-c28-series-wall-single-cfg-4",
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
      configurationId: "canair-c28-series-wall-single-cfg-5",
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
      configurationId: "canair-c28-series-wall-single-cfg-6",
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
      configurationId: "canair-c28-series-wall-single-cfg-7",
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
      configurationId: "canair-c28-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-c28-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-c28-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-c28-series-wall-single-cfg-11",
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
      configurationId: "canair-c28-series-wall-single-cfg-12",
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
      configurationId: "canair-c28-series-wall-single-cfg-13",
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
      configurationId: "canair-c28-series-wall-single-cfg-14",
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
      configurationId: "canair-c28-series-wall-single-cfg-15",
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
      configurationId: "canair-c28-series-wall-single-cfg-16",
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
      configurationId: "canair-c28-series-wall-single-cfg-17",
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
      configurationId: "canair-c28-series-wall-single-cfg-18",
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
      configurationId: "canair-c28-series-wall-single-cfg-19",
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
      configurationId: "canair-c28-series-wall-single-cfg-20",
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
      configurationId: "canair-c28-series-wall-single-cfg-21",
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
      configurationId: "canair-c28-series-wall-single-cfg-22",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13000,
          cop: 2.04,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-cdh-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-cdh-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-cdh-series-central-ducted-cfg-4",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-5",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-6",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-7",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-8",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-9",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-10",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-11",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-12",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-13",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-14",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-15",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-16",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-17",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-18",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-19",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-cdh-series-central-ducted-cfg-21",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-22",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-23",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-24",
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
      configurationId: "canair-cdh-series-central-ducted-cfg-25",
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
      configurationId: "canair-bz33-series-wall-single-cfg-1",
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
      configurationId: "canair-c25-series-wall-single-cfg-1",
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
      configurationId: "canair-c25-series-wall-single-cfg-2",
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
      configurationId: "canair-4cdh-series-central-ducted-cfg-1",
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
      configurationId: "canair-4cdh-series-central-ducted-cfg-2",
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
      configurationId: "canair-4cdh-series-central-ducted-cfg-3",
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
      configurationId: "canair-4cdh-series-central-ducted-cfg-4",
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
      configurationId: "canair-4cdh-series-central-ducted-cfg-5",
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
      configurationId: "canair-4cdh-series-central-ducted-cfg-6",
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
      configurationId: "canair-4cdh-series-central-ducted-cfg-7",
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
      configurationId: "canair-4c22-series-wall-single-cfg-1",
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
      configurationId: "canair-4c22-series-wall-single-cfg-2",
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
      configurationId: "canair-4c22-series-wall-single-cfg-3",
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
      configurationId: "canair-4c22-series-wall-single-cfg-4",
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
      configurationId: "canair-4c22-series-wall-single-cfg-5",
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
      configurationId: "canair-4c22-series-wall-single-cfg-6",
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
      configurationId: "canair-4c22-series-wall-single-cfg-7",
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
      configurationId: "canair-4c22-series-wall-single-cfg-8",
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
      configurationId: "canair-4c22-series-wall-single-cfg-9",
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
      configurationId: "canair-4c22-series-wall-single-cfg-10",
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
      configurationId: "canair-4c22-series-wall-single-cfg-11",
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
      configurationId: "canair-4c22-series-wall-single-cfg-12",
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
      configurationId: "canair-4c22-series-wall-single-cfg-13",
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
      configurationId: "canair-4c22-series-wall-single-cfg-14",
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
      configurationId: "canair-4c22-series-wall-single-cfg-15",
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
      configurationId: "canair-4c22-series-wall-single-cfg-16",
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
      configurationId: "canair-4c22-series-wall-single-cfg-17",
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
      configurationId: "canair-4c22-series-wall-single-cfg-18",
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
      configurationId: "canair-4c22-series-wall-single-cfg-19",
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
      configurationId: "canair-4c22-series-wall-single-cfg-20",
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
      configurationId: "canair-4c22-series-wall-single-cfg-21",
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
      configurationId: "canair-4c22-series-wall-single-cfg-22",
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
      configurationId: "canair-4c22-series-wall-single-cfg-23",
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
      configurationId: "canair-4c22-series-wall-single-cfg-24",
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
      configurationId: "canair-4c22-series-wall-single-cfg-25",
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
      configurationId: "canair-4c22-series-wall-single-cfg-26",
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
      configurationId: "canair-4c22-series-wall-single-cfg-27",
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
      configurationId: "canair-4c22-series-wall-single-cfg-28",
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
      configurationId: "canair-4c22-series-wall-single-cfg-29",
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
      configurationId: "canair-4c-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7300,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-4c-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8700,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-4c-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12300,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-4cd-series-central-ducted-cfg-1",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-2",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-3",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-4",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23400,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "canair-4cd-series-central-ducted-cfg-6",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-7",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-8",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-9",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-10",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-11",
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
      configurationId: "canair-4cd-series-central-ducted-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.83,
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
