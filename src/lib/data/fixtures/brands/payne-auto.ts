import type { BrandDataset } from "../../types";

export const payneDataset: BrandDataset = {
  brand: {
    id: "payne",
    slug: "payne",
    name: "PAYNE",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "payne-standard",
      slug: "payne-standard",
      name: "Standard",
      brandId: "payne",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mar-series",
      slug: "payne-38mar-series",
      name: "38MAR-series",
      brandId: "payne",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38m-series",
      slug: "payne-38m-series",
      name: "38M series",
      brandId: "payne",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mp-series",
      slug: "payne-38mp-series",
      name: "38MP-series",
      brandId: "payne",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mg-series",
      slug: "payne-38mg-series",
      name: "38MG-series",
      brandId: "payne",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mb-series",
      slug: "payne-38mb-series",
      name: "38MB-series",
      brandId: "payne",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mseries",
      slug: "payne-38mseries",
      name: "38Mseries",
      brandId: "payne",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mh-series",
      slug: "payne-38mh-series",
      name: "38MH-series",
      brandId: "payne",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mu-series",
      slug: "payne-38mu-series",
      name: "38MU series",
      brandId: "payne",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-45m-series",
      slug: "payne-45m-series",
      name: "45M Series",
      brandId: "payne",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-37m-series",
      slug: "payne-37m-series",
      name: "37M Series",
      brandId: "payne",
      systemType: "central-ducted",
      categories: ["conventional", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-d5m-series",
      slug: "payne-d5m-series",
      name: "D5M Series",
      brandId: "payne",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "payne-standard-wall-single",
      slug: "payne-standard-wall-single",
      name: "Standard",
      seriesId: "payne-standard",
      brandId: "payne",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 6400,
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
      id: "payne-38mar-series-wall-single",
      slug: "payne-38mar-series-wall-single",
      name: "38MAR-series",
      seriesId: "payne-38mar-series",
      brandId: "payne",
      modelNumber: "38MAR-series",
      normalizedModelNumber: "38mar-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6100,
      heatingCapacity5FMaxBtu: 21000,
      seer2Min: 18,
      seer2Max: 28.1,
      hspf2Min: 9.5,
      hspf2Max: 12,
      cop5FMin: 1.59,
      cop5FMax: 2.21,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38m-series-wall-single",
      slug: "payne-38m-series-wall-single",
      name: "38M series",
      seriesId: "payne-38m-series",
      brandId: "payne",
      modelNumber: "38M series",
      normalizedModelNumber: "38m-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 19.5,
      seer2Max: 21.95,
      hspf2Min: 8.7,
      hspf2Max: 9.2,
      cop5FMin: 1.75,
      cop5FMax: 2.06,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mp-series-wall-single",
      slug: "payne-38mp-series-wall-single",
      name: "38MP-series",
      seriesId: "payne-38mp-series",
      brandId: "payne",
      modelNumber: "38MP-series",
      normalizedModelNumber: "38mp-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 10400,
      heatingCapacity5FMaxBtu: 20200,
      seer2Min: 26.3,
      seer2Max: 28.5,
      hspf2Min: 11,
      hspf2Max: 12,
      cop5FMin: 1.85,
      cop5FMax: 2.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mg-series-wall-single",
      slug: "payne-38mg-series-wall-single",
      name: "38MG-series",
      seriesId: "payne-38mg-series",
      brandId: "payne",
      modelNumber: "38MG-series",
      normalizedModelNumber: "38mg-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 11000,
      heatingCapacity5FMaxBtu: 30400,
      seer2Min: 19,
      seer2Max: 26,
      hspf2Min: 8.7,
      hspf2Max: 10.5,
      cop5FMin: 1.68,
      cop5FMax: 2,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mb-series-wall-single",
      slug: "payne-38mb-series-wall-single",
      name: "38MB-series",
      seriesId: "payne-38mb-series",
      brandId: "payne",
      modelNumber: "38MB-series",
      normalizedModelNumber: "38mb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      heatingCapacity5FMinBtu: 30000,
      heatingCapacity5FMaxBtu: 37400,
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
      id: "payne-38mseries-central-ducted",
      slug: "payne-38mseries-central-ducted",
      name: "38Mseries",
      seriesId: "payne-38mseries",
      brandId: "payne",
      modelNumber: "38Mseries",
      normalizedModelNumber: "38mseries",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 12000,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 15.6,
      seer2Max: 18,
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
      id: "payne-38m-series-central-ducted",
      slug: "payne-38m-series-central-ducted",
      name: "38M series",
      seriesId: "payne-38m-series",
      brandId: "payne",
      modelNumber: "38M series",
      normalizedModelNumber: "38m-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 14700,
      heatingCapacity5FMaxBtu: 37000,
      seer2Min: 15.3,
      seer2Max: 17.5,
      hspf2Min: 8.4,
      hspf2Max: 9.8,
      cop5FMin: 1.81,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mh-series-wall-single",
      slug: "payne-38mh-series-wall-single",
      name: "38MH-series",
      seriesId: "payne-38mh-series",
      brandId: "payne",
      modelNumber: "38MH-series",
      normalizedModelNumber: "38mh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 6000,
      heatingCapacity5FMaxBtu: 20000,
      seer2Min: 21,
      seer2Max: 21.7,
      hspf2Min: 8.7,
      hspf2Max: 9.4,
      cop5FMin: 1.85,
      cop5FMax: 2.16,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mu-series-central-ducted",
      slug: "payne-38mu-series-central-ducted",
      name: "38MU series",
      seriesId: "payne-38mu-series",
      brandId: "payne",
      modelNumber: "38MU series",
      normalizedModelNumber: "38mu-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 33000,
      heatingCapacity5FMaxBtu: 33000,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 10,
      hspf2Max: 10,
      cop5FMin: 2,
      cop5FMax: 2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-45m-series-central-ducted",
      slug: "payne-45m-series-central-ducted",
      name: "45M Series",
      seriesId: "payne-45m-series",
      brandId: "payne",
      modelNumber: "45M Series",
      normalizedModelNumber: "45m-series",
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
      id: "payne-37m-series-central-ducted",
      slug: "payne-37m-series-central-ducted",
      name: "37M Series",
      seriesId: "payne-37m-series",
      brandId: "payne",
      modelNumber: "37M Series",
      normalizedModelNumber: "37m-series",
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
      id: "payne-45m-series-wall-single",
      slug: "payne-45m-series-wall-single",
      name: "45M Series",
      seriesId: "payne-45m-series",
      brandId: "payne",
      modelNumber: "45M Series",
      normalizedModelNumber: "45m-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6600,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.9,
      seer2Max: 27.3,
      hspf2Min: 9,
      hspf2Max: 13.9,
      cop5FMin: 1.83,
      cop5FMax: 2.5,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-d5m-series-wall-single",
      slug: "payne-d5m-series-wall-single",
      name: "D5M Series",
      seriesId: "payne-d5m-series",
      brandId: "payne",
      modelNumber: "D5M Series",
      normalizedModelNumber: "d5m-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 7900,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 17,
      seer2Max: 35.1,
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
      id: "payne-37m-series-wall-single",
      slug: "payne-37m-series-wall-single",
      name: "37M Series",
      seriesId: "payne-37m-series",
      brandId: "payne",
      modelNumber: "37M Series",
      normalizedModelNumber: "37m-series",
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
      id: "payne-38mpraq09aa3",
      modelNumber: "38MPRAQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mpraq12aa3",
      modelNumber: "38MPRAQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38maqb12r-1",
      modelNumber: "38MAQB12R--1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38maqb12r-3",
      modelNumber: "38MAQB12R--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38maqb18r-3",
      modelNumber: "38MAQB18R--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38maqb09r-3",
      modelNumber: "38MAQB09R--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38maqb24r-3",
      modelNumber: "38MAQB24R--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mgrq18b-3",
      modelNumber: "38MGRQ18B--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mgrq36d-3",
      modelNumber: "38MGRQ36D--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mgrq48e-3",
      modelNumber: "38MGRQ48E--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mbrq36a-3",
      modelNumber: "38MBRQ36A--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mbrq48a-3",
      modelNumber: "38MBRQ48A--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mbrq58a-3",
      modelNumber: "38MBRQ58A--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mpraq18aa3",
      modelNumber: "38MPRAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mpraq24aa3",
      modelNumber: "38MPRAQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38maqb30r-3",
      modelNumber: "38MAQB30R--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38maqb36r-3",
      modelNumber: "38MAQB36R--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mgrq24c-3",
      modelNumber: "38MGRQ24C--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mgrq30d-3",
      modelNumber: "38MGRQ30D--3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mbrbq36aa3",
      modelNumber: "38MBRBQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mbrbq48aa3",
      modelNumber: "38MBRBQ48AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mbrcq36aa3",
      modelNumber: "38MBRCQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mbrcq58aa3",
      modelNumber: "38MBRCQ58AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38marbq36ab3",
      modelNumber: "38MARBQ36AB3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mhrcq12aa3",
      modelNumber: "38MHRCQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mhrcq24aa3",
      modelNumber: "38MHRCQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mhrcq12aa1",
      modelNumber: "38MHRCQ12AA1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq48aa3",
      modelNumber: "38MURAQ48AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq36aa3",
      modelNumber: "38MURAQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq60aa3",
      modelNumber: "38MURAQ60AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq30aa3",
      modelNumber: "38MURAQ30AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq18aa3",
      modelNumber: "38MURAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mbraq58aa3",
      modelNumber: "37MBRAQ58AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mvraq09aa1",
      modelNumber: "37MVRAQ09AA1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mvraq12aa1",
      modelNumber: "37MVRAQ12AA1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mvraq12aa3",
      modelNumber: "37MVRAQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mvraq18aa3",
      modelNumber: "37MVRAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mgraq55fa3",
      modelNumber: "37MGRAQ55FA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37maraq36aa3",
      modelNumber: "37MARAQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mhraq12aa1",
      modelNumber: "37MHRAQ12AA1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mhraq12aa3",
      modelNumber: "37MHRAQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mhraq24aa3",
      modelNumber: "37MHRAQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mhraq36aa3",
      modelNumber: "37MHRAQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38marbq24aa3",
      modelNumber: "38MARBQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38marbq12aa1",
      modelNumber: "38MARBQ12AA1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38marbq09aa3",
      modelNumber: "38MARBQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38marbq12aa3",
      modelNumber: "38MARBQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38marbq18aa3",
      modelNumber: "38MARBQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38marbq30aa3",
      modelNumber: "38MARBQ30AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mgrbq48ea3",
      modelNumber: "38MGRBQ48EA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38marbq30aa311",
      modelNumber: "38MARBQ30AA311",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mhrcq18aa3",
      modelNumber: "38MHRCQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mprbq09aa3",
      modelNumber: "38MPRBQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mprbq12aa3",
      modelNumber: "38MPRBQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mprbq18aa3",
      modelNumber: "38MPRBQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mgrbq18ba3",
      modelNumber: "38MGRBQ18BA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mghbq24ca3",
      modelNumber: "38MGHBQ24CA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mghbq30da3",
      modelNumber: "38MGHBQ30DA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mgrbq36da3",
      modelNumber: "38MGRBQ36DA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mghbq48ea3",
      modelNumber: "38MGHBQ48EA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mghbq36da3",
      modelNumber: "38MGHBQ36DA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mbrcq48aa3",
      modelNumber: "38MBRCQ48AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq24aa3",
      modelNumber: "38MURAQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq48ab3",
      modelNumber: "38MURAQ48AB3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq36ab3",
      modelNumber: "38MURAQ36AB3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq30ab3",
      modelNumber: "38MURAQ30AB3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq18ab3",
      modelNumber: "38MURAQ18AB3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq24ab3",
      modelNumber: "38MURAQ24AB3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38muraq60ab3",
      modelNumber: "38MURAQ60AB3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mhrcq09aa1",
      modelNumber: "38MHRCQ09AA1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mhrcq09aa3",
      modelNumber: "38MHRCQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-38mhrcq30aa3",
      modelNumber: "38MHRCQ30AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muhaq18aa3",
      modelNumber: "37MUHAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muhaq24aa3",
      modelNumber: "37MUHAQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muhaq30aa3",
      modelNumber: "37MUHAQ30AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muhaq36aa3",
      modelNumber: "37MUHAQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muhaq48aa3",
      modelNumber: "37MUHAQ48AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muhaq60aa3",
      modelNumber: "37MUHAQ60AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muraq24aa3",
      modelNumber: "37MURAQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muraq36aa3",
      modelNumber: "37MURAQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muraq48aa3",
      modelNumber: "37MURAQ48AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muraq60aa3",
      modelNumber: "37MURAQ60AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mahaq18aa3",
      modelNumber: "37MAHAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mahaq24aa3",
      modelNumber: "37MAHAQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mahaq33aa3",
      modelNumber: "37MAHAQ33AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37maraq18aa3",
      modelNumber: "37MARAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37maraq24aa3",
      modelNumber: "37MARAQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mbhaq36aa3",
      modelNumber: "37MBHAQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mbhaq48aa3",
      modelNumber: "37MBHAQ48AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mbhaq58aa3",
      modelNumber: "37MBHAQ58AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mbraq48aa3",
      modelNumber: "37MBRAQ48AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37maraq30aa3",
      modelNumber: "37MARAQ30AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muraq18aa3",
      modelNumber: "37MURAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37muraq30aa3",
      modelNumber: "37MURAQ30AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mbraq36aa3",
      modelNumber: "37MBRAQ36AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mahaq06aa3",
      modelNumber: "37MAHAQ06AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mahaq09aa3",
      modelNumber: "37MAHAQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mahaq12aa3",
      modelNumber: "37MAHAQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37maraq09aa3",
      modelNumber: "37MARAQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37maraq12aa3",
      modelNumber: "37MARAQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mhraq09aa1",
      modelNumber: "37MHRAQ09AA1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mhraq09aa3",
      modelNumber: "37MHRAQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mhraq30aa3",
      modelNumber: "37MHRAQ30AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37maraq12aa1",
      modelNumber: "37MARAQ12AA1",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mvraq09aa3",
      modelNumber: "37MVRAQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mvraq24aa3",
      modelNumber: "37MVRAQ24AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mpraq06aa3",
      modelNumber: "37MPRAQ06AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mpraq09aa3",
      modelNumber: "37MPRAQ09AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mpraq12aa3",
      modelNumber: "37MPRAQ12AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mpraq18aa3",
      modelNumber: "37MPRAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mghaq18ca3",
      modelNumber: "37MGHAQ18CA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mghaq24da3",
      modelNumber: "37MGHAQ24DA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mghaq30ea3",
      modelNumber: "37MGHAQ30EA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mghaq36ea3",
      modelNumber: "37MGHAQ36EA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mghaq48fa3",
      modelNumber: "37MGHAQ48FA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mghaq55fa3",
      modelNumber: "37MGHAQ55FA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mgraq18ca3",
      modelNumber: "37MGRAQ18CA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mgraq24da3",
      modelNumber: "37MGRAQ24DA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mgraq30ea3",
      modelNumber: "37MGRAQ30EA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mgraq36ea3",
      modelNumber: "37MGRAQ36EA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mgraq48fa3",
      modelNumber: "37MGRAQ48FA3",
      brandId: "payne",
      refrigerant: null as any,
    },
    {
      id: "payne-37mhraq18aa3",
      modelNumber: "37MHRAQ18AA3",
      brandId: "payne",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "payne-standard-wall-single-cfg-1",
      slug: "payne-standard-wall-single-cfg-1",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mpraq09aa3",
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
      id: "payne-standard-wall-single-cfg-2",
      slug: "payne-standard-wall-single-cfg-2",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mpraq12aa3",
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
      id: "payne-standard-wall-single-cfg-3",
      slug: "payne-standard-wall-single-cfg-3",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb12r-1",
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
      id: "payne-standard-wall-single-cfg-4",
      slug: "payne-standard-wall-single-cfg-4",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb12r-3",
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
      id: "payne-standard-wall-single-cfg-5",
      slug: "payne-standard-wall-single-cfg-5",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb18r-3",
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
      id: "payne-standard-wall-single-cfg-6",
      slug: "payne-standard-wall-single-cfg-6",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb09r-3",
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
      id: "payne-standard-wall-single-cfg-7",
      slug: "payne-standard-wall-single-cfg-7",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb12r-3",
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
      id: "payne-standard-wall-single-cfg-8",
      slug: "payne-standard-wall-single-cfg-8",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb18r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-9",
      slug: "payne-standard-wall-single-cfg-9",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb09r-3",
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
      id: "payne-standard-wall-single-cfg-10",
      slug: "payne-standard-wall-single-cfg-10",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb12r-3",
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
      id: "payne-standard-wall-single-cfg-11",
      slug: "payne-standard-wall-single-cfg-11",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb18r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 16500,
      coolingCapacityMaxBtu: 16500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-12",
      slug: "payne-standard-wall-single-cfg-12",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb24r-3",
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
      id: "payne-standard-wall-single-cfg-13",
      slug: "payne-standard-wall-single-cfg-13",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb12r-3",
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
      id: "payne-standard-wall-single-cfg-14",
      slug: "payne-standard-wall-single-cfg-14",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb18r-3",
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
      id: "payne-standard-wall-single-cfg-15",
      slug: "payne-standard-wall-single-cfg-15",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq18b-3",
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
      id: "payne-standard-wall-single-cfg-16",
      slug: "payne-standard-wall-single-cfg-16",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq36d-3",
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
      id: "payne-standard-wall-single-cfg-17",
      slug: "payne-standard-wall-single-cfg-17",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq48e-3",
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
      id: "payne-standard-wall-single-cfg-18",
      slug: "payne-standard-wall-single-cfg-18",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb24r-3",
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
      id: "payne-standard-wall-single-cfg-19",
      slug: "payne-standard-wall-single-cfg-19",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrq36a-3",
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
      id: "payne-standard-wall-single-cfg-20",
      slug: "payne-standard-wall-single-cfg-20",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrq48a-3",
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
      id: "payne-standard-wall-single-cfg-21",
      slug: "payne-standard-wall-single-cfg-21",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrq36a-3",
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
      id: "payne-standard-wall-single-cfg-22",
      slug: "payne-standard-wall-single-cfg-22",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrq48a-3",
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
      id: "payne-standard-wall-single-cfg-23",
      slug: "payne-standard-wall-single-cfg-23",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrq58a-3",
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
      id: "payne-standard-wall-single-cfg-24",
      slug: "payne-standard-wall-single-cfg-24",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb24r-3",
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
      id: "payne-standard-wall-single-cfg-25",
      slug: "payne-standard-wall-single-cfg-25",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrq36a-3",
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
      id: "payne-standard-wall-single-cfg-26",
      slug: "payne-standard-wall-single-cfg-26",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrq48a-3",
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
      id: "payne-standard-wall-single-cfg-27",
      slug: "payne-standard-wall-single-cfg-27",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrq58a-3",
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
      id: "payne-standard-wall-single-cfg-28",
      slug: "payne-standard-wall-single-cfg-28",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq18b-3",
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
      id: "payne-standard-wall-single-cfg-29",
      slug: "payne-standard-wall-single-cfg-29",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq36d-3",
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
      id: "payne-standard-wall-single-cfg-30",
      slug: "payne-standard-wall-single-cfg-30",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq48e-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 49000,
      coolingCapacityMaxBtu: 49000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-31",
      slug: "payne-standard-wall-single-cfg-31",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mpraq18aa3",
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
      id: "payne-standard-wall-single-cfg-32",
      slug: "payne-standard-wall-single-cfg-32",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mpraq24aa3",
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
      id: "payne-standard-wall-single-cfg-33",
      slug: "payne-standard-wall-single-cfg-33",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb12r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11800,
      coolingCapacityMaxBtu: 11800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-34",
      slug: "payne-standard-wall-single-cfg-34",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb18r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17200,
      coolingCapacityMaxBtu: 17200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-35",
      slug: "payne-standard-wall-single-cfg-35",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb30r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 29200,
      coolingCapacityMaxBtu: 29200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-36",
      slug: "payne-standard-wall-single-cfg-36",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb18r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17600,
      coolingCapacityMaxBtu: 17600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-37",
      slug: "payne-standard-wall-single-cfg-37",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb24r-3",
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
      id: "payne-standard-wall-single-cfg-38",
      slug: "payne-standard-wall-single-cfg-38",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb30r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28600,
      coolingCapacityMaxBtu: 28600,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-39",
      slug: "payne-standard-wall-single-cfg-39",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb36r-3",
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
      id: "payne-standard-wall-single-cfg-40",
      slug: "payne-standard-wall-single-cfg-40",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb12r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 11200,
      coolingCapacityMaxBtu: 11200,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-41",
      slug: "payne-standard-wall-single-cfg-41",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb18r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17800,
      coolingCapacityMaxBtu: 17800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-42",
      slug: "payne-standard-wall-single-cfg-42",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb24r-3",
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
      id: "payne-standard-wall-single-cfg-43",
      slug: "payne-standard-wall-single-cfg-43",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb30r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 28800,
      coolingCapacityMaxBtu: 28800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-44",
      slug: "payne-standard-wall-single-cfg-44",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq24c-3",
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
      id: "payne-standard-wall-single-cfg-45",
      slug: "payne-standard-wall-single-cfg-45",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq24c-3",
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
      id: "payne-standard-wall-single-cfg-46",
      slug: "payne-standard-wall-single-cfg-46",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq30d-3",
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
      id: "payne-standard-wall-single-cfg-47",
      slug: "payne-standard-wall-single-cfg-47",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq18b-3",
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
      id: "payne-standard-wall-single-cfg-48",
      slug: "payne-standard-wall-single-cfg-48",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq24c-3",
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
      id: "payne-standard-wall-single-cfg-49",
      slug: "payne-standard-wall-single-cfg-49",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq30d-3",
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
      id: "payne-standard-wall-single-cfg-50",
      slug: "payne-standard-wall-single-cfg-50",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq36d-3",
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
      id: "payne-standard-wall-single-cfg-51",
      slug: "payne-standard-wall-single-cfg-51",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq48e-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48500,
      coolingCapacityMaxBtu: 48500,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-52",
      slug: "payne-standard-wall-single-cfg-52",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mgrq30d-3",
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
      id: "payne-standard-wall-single-cfg-53",
      slug: "payne-standard-wall-single-cfg-53",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrbq36aa3",
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
      id: "payne-standard-wall-single-cfg-54",
      slug: "payne-standard-wall-single-cfg-54",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrbq48aa3",
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
      id: "payne-standard-wall-single-cfg-55",
      slug: "payne-standard-wall-single-cfg-55",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb24r-3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-standard-wall-single-cfg-56",
      slug: "payne-standard-wall-single-cfg-56",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrbq36aa3",
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
      id: "payne-standard-wall-single-cfg-57",
      slug: "payne-standard-wall-single-cfg-57",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrbq36aa3",
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
      id: "payne-standard-wall-single-cfg-58",
      slug: "payne-standard-wall-single-cfg-58",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrbq36aa3",
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
      id: "payne-standard-wall-single-cfg-59",
      slug: "payne-standard-wall-single-cfg-59",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrbq48aa3",
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
      id: "payne-standard-wall-single-cfg-60",
      slug: "payne-standard-wall-single-cfg-60",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrbq48aa3",
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
      id: "payne-standard-wall-single-cfg-61",
      slug: "payne-standard-wall-single-cfg-61",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrbq48aa3",
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
      id: "payne-standard-wall-single-cfg-62",
      slug: "payne-standard-wall-single-cfg-62",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb09r-3",
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
      id: "payne-standard-wall-single-cfg-63",
      slug: "payne-standard-wall-single-cfg-63",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb12r-3",
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
      id: "payne-standard-wall-single-cfg-64",
      slug: "payne-standard-wall-single-cfg-64",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb18r-3",
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
      id: "payne-standard-wall-single-cfg-65",
      slug: "payne-standard-wall-single-cfg-65",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38maqb24r-3",
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
      id: "payne-standard-wall-single-cfg-66",
      slug: "payne-standard-wall-single-cfg-66",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrcq36aa3",
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
      id: "payne-standard-wall-single-cfg-67",
      slug: "payne-standard-wall-single-cfg-67",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mbrcq58aa3",
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
      id: "payne-standard-wall-single-cfg-68",
      slug: "payne-standard-wall-single-cfg-68",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38marbq36ab3",
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
      id: "payne-standard-wall-single-cfg-69",
      slug: "payne-standard-wall-single-cfg-69",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mhrcq12aa3",
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
      id: "payne-standard-wall-single-cfg-70",
      slug: "payne-standard-wall-single-cfg-70",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mhrcq24aa3",
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
      id: "payne-standard-wall-single-cfg-71",
      slug: "payne-standard-wall-single-cfg-71",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38mhrcq12aa1",
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
      id: "payne-standard-wall-single-cfg-72",
      slug: "payne-standard-wall-single-cfg-72",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38muraq48aa3",
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
      id: "payne-standard-wall-single-cfg-73",
      slug: "payne-standard-wall-single-cfg-73",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38muraq36aa3",
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
      id: "payne-standard-wall-single-cfg-74",
      slug: "payne-standard-wall-single-cfg-74",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38muraq60aa3",
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
      id: "payne-standard-wall-single-cfg-75",
      slug: "payne-standard-wall-single-cfg-75",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38muraq30aa3",
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
      id: "payne-standard-wall-single-cfg-76",
      slug: "payne-standard-wall-single-cfg-76",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-38muraq18aa3",
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
      id: "payne-standard-wall-single-cfg-77",
      slug: "payne-standard-wall-single-cfg-77",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mbraq58aa3",
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
      id: "payne-standard-wall-single-cfg-78",
      slug: "payne-standard-wall-single-cfg-78",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mvraq09aa1",
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
      id: "payne-standard-wall-single-cfg-79",
      slug: "payne-standard-wall-single-cfg-79",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mvraq12aa1",
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
      id: "payne-standard-wall-single-cfg-80",
      slug: "payne-standard-wall-single-cfg-80",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mvraq12aa3",
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
      id: "payne-standard-wall-single-cfg-81",
      slug: "payne-standard-wall-single-cfg-81",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mvraq18aa3",
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
      id: "payne-standard-wall-single-cfg-82",
      slug: "payne-standard-wall-single-cfg-82",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mbraq58aa3",
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
      id: "payne-standard-wall-single-cfg-83",
      slug: "payne-standard-wall-single-cfg-83",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mbraq58aa3",
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
      id: "payne-standard-wall-single-cfg-84",
      slug: "payne-standard-wall-single-cfg-84",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mvraq12aa1",
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
      id: "payne-standard-wall-single-cfg-85",
      slug: "payne-standard-wall-single-cfg-85",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mvraq12aa3",
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
      id: "payne-standard-wall-single-cfg-86",
      slug: "payne-standard-wall-single-cfg-86",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mvraq18aa3",
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
      id: "payne-standard-wall-single-cfg-87",
      slug: "payne-standard-wall-single-cfg-87",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mgraq55fa3",
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
      id: "payne-standard-wall-single-cfg-88",
      slug: "payne-standard-wall-single-cfg-88",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mgraq55fa3",
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
      id: "payne-standard-wall-single-cfg-89",
      slug: "payne-standard-wall-single-cfg-89",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mgraq55fa3",
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
      id: "payne-standard-wall-single-cfg-90",
      slug: "payne-standard-wall-single-cfg-90",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37maraq36aa3",
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
      id: "payne-standard-wall-single-cfg-91",
      slug: "payne-standard-wall-single-cfg-91",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37maraq36aa3",
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
      id: "payne-standard-wall-single-cfg-92",
      slug: "payne-standard-wall-single-cfg-92",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mhraq12aa1",
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
      id: "payne-standard-wall-single-cfg-93",
      slug: "payne-standard-wall-single-cfg-93",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mhraq12aa3",
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
      id: "payne-standard-wall-single-cfg-94",
      slug: "payne-standard-wall-single-cfg-94",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mhraq24aa3",
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
      id: "payne-standard-wall-single-cfg-95",
      slug: "payne-standard-wall-single-cfg-95",
      modelId: "payne-standard-wall-single",
      outdoorUnitId: "payne-37mhraq36aa3",
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
      id: "payne-38mar-series-wall-single-cfg-1",
      slug: "payne-38mar-series-wall-single-cfg-1",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq24aa3",
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
      id: "payne-38mar-series-wall-single-cfg-2",
      slug: "payne-38mar-series-wall-single-cfg-2",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq12aa1",
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
      id: "payne-38mar-series-wall-single-cfg-3",
      slug: "payne-38mar-series-wall-single-cfg-3",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq09aa3",
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
      id: "payne-38mar-series-wall-single-cfg-4",
      slug: "payne-38mar-series-wall-single-cfg-4",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq12aa3",
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
      id: "payne-38mar-series-wall-single-cfg-5",
      slug: "payne-38mar-series-wall-single-cfg-5",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq18aa3",
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
      id: "payne-38mar-series-wall-single-cfg-6",
      slug: "payne-38mar-series-wall-single-cfg-6",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq24aa3",
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
      id: "payne-38mar-series-wall-single-cfg-7",
      slug: "payne-38mar-series-wall-single-cfg-7",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq09aa3",
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
      id: "payne-38mar-series-wall-single-cfg-8",
      slug: "payne-38mar-series-wall-single-cfg-8",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq09aa3",
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
      id: "payne-38mar-series-wall-single-cfg-9",
      slug: "payne-38mar-series-wall-single-cfg-9",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq12aa3",
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
      id: "payne-38mar-series-wall-single-cfg-10",
      slug: "payne-38mar-series-wall-single-cfg-10",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq12aa3",
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
      id: "payne-38mar-series-wall-single-cfg-11",
      slug: "payne-38mar-series-wall-single-cfg-11",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq12aa3",
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
      id: "payne-38mar-series-wall-single-cfg-12",
      slug: "payne-38mar-series-wall-single-cfg-12",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq18aa3",
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
      id: "payne-38mar-series-wall-single-cfg-13",
      slug: "payne-38mar-series-wall-single-cfg-13",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq18aa3",
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
      id: "payne-38mar-series-wall-single-cfg-14",
      slug: "payne-38mar-series-wall-single-cfg-14",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq24aa3",
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
      id: "payne-38mar-series-wall-single-cfg-15",
      slug: "payne-38mar-series-wall-single-cfg-15",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq24aa3",
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
      id: "payne-38mar-series-wall-single-cfg-16",
      slug: "payne-38mar-series-wall-single-cfg-16",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq24aa3",
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
      id: "payne-38mar-series-wall-single-cfg-17",
      slug: "payne-38mar-series-wall-single-cfg-17",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq09aa3",
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
      id: "payne-38mar-series-wall-single-cfg-18",
      slug: "payne-38mar-series-wall-single-cfg-18",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq12aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23.6,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mar-series-wall-single-cfg-19",
      slug: "payne-38mar-series-wall-single-cfg-19",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq18aa3",
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
      id: "payne-38mar-series-wall-single-cfg-20",
      slug: "payne-38mar-series-wall-single-cfg-20",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq24aa3",
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
      id: "payne-38mar-series-wall-single-cfg-21",
      slug: "payne-38mar-series-wall-single-cfg-21",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq24aa3",
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
      id: "payne-38mar-series-wall-single-cfg-22",
      slug: "payne-38mar-series-wall-single-cfg-22",
      modelId: "payne-38mar-series-wall-single",
      outdoorUnitId: "payne-38marbq18aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17500,
      coolingCapacityMaxBtu: 17500,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38m-series-wall-single-cfg-1",
      slug: "payne-38m-series-wall-single-cfg-1",
      modelId: "payne-38m-series-wall-single",
      outdoorUnitId: "payne-38marbq30aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38m-series-wall-single-cfg-2",
      slug: "payne-38m-series-wall-single-cfg-2",
      modelId: "payne-38m-series-wall-single",
      outdoorUnitId: "payne-38mgrbq48ea3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 21.95,
      hspf2: 9.2,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38m-series-wall-single-cfg-3",
      slug: "payne-38m-series-wall-single-cfg-3",
      modelId: "payne-38m-series-wall-single",
      outdoorUnitId: "payne-38marbq30aa311",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20.1,
      hspf2: 9,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38m-series-wall-single-cfg-4",
      slug: "payne-38m-series-wall-single-cfg-4",
      modelId: "payne-38m-series-wall-single",
      outdoorUnitId: "payne-38mhrcq18aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 19.5,
      hspf2: 8.7,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mp-series-wall-single-cfg-1",
      slug: "payne-38mp-series-wall-single-cfg-1",
      modelId: "payne-38mp-series-wall-single",
      outdoorUnitId: "payne-38mprbq09aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 28.5,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mp-series-wall-single-cfg-2",
      slug: "payne-38mp-series-wall-single-cfg-2",
      modelId: "payne-38mp-series-wall-single",
      outdoorUnitId: "payne-38mprbq12aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 27,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mp-series-wall-single-cfg-3",
      slug: "payne-38mp-series-wall-single-cfg-3",
      modelId: "payne-38mp-series-wall-single",
      outdoorUnitId: "payne-38mprbq18aa3",
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
      id: "payne-38mg-series-wall-single-cfg-1",
      slug: "payne-38mg-series-wall-single-cfg-1",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mgrbq18ba3",
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
      id: "payne-38mg-series-wall-single-cfg-2",
      slug: "payne-38mg-series-wall-single-cfg-2",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mgrbq18ba3",
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
      id: "payne-38mg-series-wall-single-cfg-3",
      slug: "payne-38mg-series-wall-single-cfg-3",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mgrbq18ba3",
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
      id: "payne-38mg-series-wall-single-cfg-4",
      slug: "payne-38mg-series-wall-single-cfg-4",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq24ca3",
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
      id: "payne-38mg-series-wall-single-cfg-5",
      slug: "payne-38mg-series-wall-single-cfg-5",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq24ca3",
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
      id: "payne-38mg-series-wall-single-cfg-6",
      slug: "payne-38mg-series-wall-single-cfg-6",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq24ca3",
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
      id: "payne-38mg-series-wall-single-cfg-7",
      slug: "payne-38mg-series-wall-single-cfg-7",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq30da3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 26,
      hspf2: 9.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mg-series-wall-single-cfg-8",
      slug: "payne-38mg-series-wall-single-cfg-8",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq30da3",
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
      id: "payne-38mg-series-wall-single-cfg-9",
      slug: "payne-38mg-series-wall-single-cfg-9",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq30da3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 23,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38mg-series-wall-single-cfg-10",
      slug: "payne-38mg-series-wall-single-cfg-10",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mgrbq36da3",
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
      id: "payne-38mg-series-wall-single-cfg-11",
      slug: "payne-38mg-series-wall-single-cfg-11",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq48ea3",
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
      id: "payne-38mg-series-wall-single-cfg-12",
      slug: "payne-38mg-series-wall-single-cfg-12",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq48ea3",
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
      id: "payne-38mg-series-wall-single-cfg-13",
      slug: "payne-38mg-series-wall-single-cfg-13",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq48ea3",
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
      id: "payne-38mg-series-wall-single-cfg-14",
      slug: "payne-38mg-series-wall-single-cfg-14",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq36da3",
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
      id: "payne-38mg-series-wall-single-cfg-15",
      slug: "payne-38mg-series-wall-single-cfg-15",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq36da3",
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
      id: "payne-38mg-series-wall-single-cfg-16",
      slug: "payne-38mg-series-wall-single-cfg-16",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mghbq36da3",
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
      id: "payne-38mg-series-wall-single-cfg-17",
      slug: "payne-38mg-series-wall-single-cfg-17",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mgrbq48ea3",
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
      id: "payne-38mg-series-wall-single-cfg-18",
      slug: "payne-38mg-series-wall-single-cfg-18",
      modelId: "payne-38mg-series-wall-single",
      outdoorUnitId: "payne-38mgrbq48ea3",
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
      id: "payne-38mb-series-wall-single-cfg-1",
      slug: "payne-38mb-series-wall-single-cfg-1",
      modelId: "payne-38mb-series-wall-single",
      outdoorUnitId: "payne-38mbrcq48aa3",
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
      id: "payne-38mb-series-wall-single-cfg-2",
      slug: "payne-38mb-series-wall-single-cfg-2",
      modelId: "payne-38mb-series-wall-single",
      outdoorUnitId: "payne-38mbrcq48aa3",
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
      id: "payne-38mseries-central-ducted-cfg-1",
      slug: "payne-38mseries-central-ducted-cfg-1",
      modelId: "payne-38mseries-central-ducted",
      outdoorUnitId: "payne-38marbq18aa3",
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
      id: "payne-38mseries-central-ducted-cfg-2",
      slug: "payne-38mseries-central-ducted-cfg-2",
      modelId: "payne-38mseries-central-ducted",
      outdoorUnitId: "payne-38muraq24aa3",
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
      id: "payne-38mseries-central-ducted-cfg-3",
      slug: "payne-38mseries-central-ducted-cfg-3",
      modelId: "payne-38mseries-central-ducted",
      outdoorUnitId: "payne-38muraq48ab3",
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
      id: "payne-38mseries-central-ducted-cfg-4",
      slug: "payne-38mseries-central-ducted-cfg-4",
      modelId: "payne-38mseries-central-ducted",
      outdoorUnitId: "payne-38muraq36ab3",
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
      id: "payne-38mseries-central-ducted-cfg-5",
      slug: "payne-38mseries-central-ducted-cfg-5",
      modelId: "payne-38mseries-central-ducted",
      outdoorUnitId: "payne-38muraq30ab3",
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
      id: "payne-38mseries-central-ducted-cfg-6",
      slug: "payne-38mseries-central-ducted-cfg-6",
      modelId: "payne-38mseries-central-ducted",
      outdoorUnitId: "payne-38muraq18ab3",
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
      id: "payne-38mseries-central-ducted-cfg-7",
      slug: "payne-38mseries-central-ducted-cfg-7",
      modelId: "payne-38mseries-central-ducted",
      outdoorUnitId: "payne-38muraq24ab3",
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
      id: "payne-38m-series-central-ducted-cfg-1",
      slug: "payne-38m-series-central-ducted-cfg-1",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38marbq30aa311",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.5,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38m-series-central-ducted-cfg-2",
      slug: "payne-38m-series-central-ducted-cfg-2",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38marbq30aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 17.5,
      hspf2: 8.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-38m-series-central-ducted-cfg-3",
      slug: "payne-38m-series-central-ducted-cfg-3",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38muraq18ab3",
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
      id: "payne-38m-series-central-ducted-cfg-4",
      slug: "payne-38m-series-central-ducted-cfg-4",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38muraq24ab3",
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
      id: "payne-38m-series-central-ducted-cfg-5",
      slug: "payne-38m-series-central-ducted-cfg-5",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38muraq24ab3",
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
      id: "payne-38m-series-central-ducted-cfg-6",
      slug: "payne-38m-series-central-ducted-cfg-6",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38muraq30ab3",
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
      id: "payne-38m-series-central-ducted-cfg-7",
      slug: "payne-38m-series-central-ducted-cfg-7",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38muraq36ab3",
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
      id: "payne-38m-series-central-ducted-cfg-8",
      slug: "payne-38m-series-central-ducted-cfg-8",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38muraq48ab3",
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
      id: "payne-38m-series-central-ducted-cfg-9",
      slug: "payne-38m-series-central-ducted-cfg-9",
      modelId: "payne-38m-series-central-ducted",
      outdoorUnitId: "payne-38muraq60ab3",
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
      id: "payne-38mh-series-wall-single-cfg-1",
      slug: "payne-38mh-series-wall-single-cfg-1",
      modelId: "payne-38mh-series-wall-single",
      outdoorUnitId: "payne-38mhrcq09aa1",
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
      id: "payne-38mh-series-wall-single-cfg-2",
      slug: "payne-38mh-series-wall-single-cfg-2",
      modelId: "payne-38mh-series-wall-single",
      outdoorUnitId: "payne-38mhrcq09aa3",
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
      id: "payne-38mh-series-wall-single-cfg-3",
      slug: "payne-38mh-series-wall-single-cfg-3",
      modelId: "payne-38mh-series-wall-single",
      outdoorUnitId: "payne-38mhrcq30aa3",
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
      id: "payne-38mu-series-central-ducted-cfg-1",
      slug: "payne-38mu-series-central-ducted-cfg-1",
      modelId: "payne-38mu-series-central-ducted",
      outdoorUnitId: "payne-38muraq36ab3",
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
      id: "payne-45m-series-central-ducted-cfg-1",
      slug: "payne-45m-series-central-ducted-cfg-1",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq18aa3",
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
      id: "payne-45m-series-central-ducted-cfg-2",
      slug: "payne-45m-series-central-ducted-cfg-2",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq24aa3",
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
      id: "payne-45m-series-central-ducted-cfg-3",
      slug: "payne-45m-series-central-ducted-cfg-3",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq24aa3",
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
      id: "payne-45m-series-central-ducted-cfg-4",
      slug: "payne-45m-series-central-ducted-cfg-4",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq30aa3",
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
      id: "payne-45m-series-central-ducted-cfg-5",
      slug: "payne-45m-series-central-ducted-cfg-5",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq36aa3",
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
      id: "payne-45m-series-central-ducted-cfg-6",
      slug: "payne-45m-series-central-ducted-cfg-6",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq48aa3",
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
      id: "payne-45m-series-central-ducted-cfg-7",
      slug: "payne-45m-series-central-ducted-cfg-7",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq60aa3",
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
      id: "payne-45m-series-central-ducted-cfg-8",
      slug: "payne-45m-series-central-ducted-cfg-8",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq60aa3",
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
      id: "payne-45m-series-central-ducted-cfg-9",
      slug: "payne-45m-series-central-ducted-cfg-9",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muraq24aa3",
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
      id: "payne-45m-series-central-ducted-cfg-10",
      slug: "payne-45m-series-central-ducted-cfg-10",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muraq36aa3",
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
      id: "payne-45m-series-central-ducted-cfg-11",
      slug: "payne-45m-series-central-ducted-cfg-11",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muraq48aa3",
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
      id: "payne-45m-series-central-ducted-cfg-12",
      slug: "payne-45m-series-central-ducted-cfg-12",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muraq60aa3",
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
      id: "payne-45m-series-central-ducted-cfg-13",
      slug: "payne-45m-series-central-ducted-cfg-13",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq18aa3",
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
      id: "payne-45m-series-central-ducted-cfg-14",
      slug: "payne-45m-series-central-ducted-cfg-14",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq30aa3",
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
      id: "payne-45m-series-central-ducted-cfg-15",
      slug: "payne-45m-series-central-ducted-cfg-15",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq48aa3",
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
      id: "payne-45m-series-central-ducted-cfg-16",
      slug: "payne-45m-series-central-ducted-cfg-16",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37mahaq18aa3",
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
      id: "payne-45m-series-central-ducted-cfg-17",
      slug: "payne-45m-series-central-ducted-cfg-17",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37mahaq24aa3",
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
      id: "payne-45m-series-central-ducted-cfg-18",
      slug: "payne-45m-series-central-ducted-cfg-18",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37mahaq33aa3",
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
      id: "payne-45m-series-central-ducted-cfg-19",
      slug: "payne-45m-series-central-ducted-cfg-19",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37maraq18aa3",
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
      id: "payne-45m-series-central-ducted-cfg-20",
      slug: "payne-45m-series-central-ducted-cfg-20",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37maraq24aa3",
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
      id: "payne-45m-series-central-ducted-cfg-21",
      slug: "payne-45m-series-central-ducted-cfg-21",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37mbhaq36aa3",
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
      id: "payne-45m-series-central-ducted-cfg-22",
      slug: "payne-45m-series-central-ducted-cfg-22",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37mbhaq48aa3",
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
      id: "payne-45m-series-central-ducted-cfg-23",
      slug: "payne-45m-series-central-ducted-cfg-23",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37mbhaq58aa3",
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
      id: "payne-45m-series-central-ducted-cfg-24",
      slug: "payne-45m-series-central-ducted-cfg-24",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37mbraq48aa3",
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
      id: "payne-45m-series-central-ducted-cfg-25",
      slug: "payne-45m-series-central-ducted-cfg-25",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37muhaq36aa3",
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
      id: "payne-45m-series-central-ducted-cfg-26",
      slug: "payne-45m-series-central-ducted-cfg-26",
      modelId: "payne-45m-series-central-ducted",
      outdoorUnitId: "payne-37maraq30aa3",
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
      id: "payne-37m-series-central-ducted-cfg-1",
      slug: "payne-37m-series-central-ducted-cfg-1",
      modelId: "payne-37m-series-central-ducted",
      outdoorUnitId: "payne-37muraq18aa3",
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
      id: "payne-37m-series-central-ducted-cfg-2",
      slug: "payne-37m-series-central-ducted-cfg-2",
      modelId: "payne-37m-series-central-ducted",
      outdoorUnitId: "payne-37muraq30aa3",
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
      id: "payne-45m-series-wall-single-cfg-1",
      slug: "payne-45m-series-wall-single-cfg-1",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbraq36aa3",
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
      id: "payne-45m-series-wall-single-cfg-2",
      slug: "payne-45m-series-wall-single-cfg-2",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq06aa3",
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
      id: "payne-45m-series-wall-single-cfg-3",
      slug: "payne-45m-series-wall-single-cfg-3",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq06aa3",
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
      id: "payne-45m-series-wall-single-cfg-4",
      slug: "payne-45m-series-wall-single-cfg-4",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-5",
      slug: "payne-45m-series-wall-single-cfg-5",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-6",
      slug: "payne-45m-series-wall-single-cfg-6",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-7",
      slug: "payne-45m-series-wall-single-cfg-7",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-8",
      slug: "payne-45m-series-wall-single-cfg-8",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-9",
      slug: "payne-45m-series-wall-single-cfg-9",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-10",
      slug: "payne-45m-series-wall-single-cfg-10",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-11",
      slug: "payne-45m-series-wall-single-cfg-11",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-12",
      slug: "payne-45m-series-wall-single-cfg-12",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-13",
      slug: "payne-45m-series-wall-single-cfg-13",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-14",
      slug: "payne-45m-series-wall-single-cfg-14",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-15",
      slug: "payne-45m-series-wall-single-cfg-15",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-16",
      slug: "payne-45m-series-wall-single-cfg-16",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-17",
      slug: "payne-45m-series-wall-single-cfg-17",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-18",
      slug: "payne-45m-series-wall-single-cfg-18",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-19",
      slug: "payne-45m-series-wall-single-cfg-19",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-20",
      slug: "payne-45m-series-wall-single-cfg-20",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq24aa3",
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
      id: "payne-45m-series-wall-single-cfg-21",
      slug: "payne-45m-series-wall-single-cfg-21",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq24aa3",
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
      id: "payne-45m-series-wall-single-cfg-22",
      slug: "payne-45m-series-wall-single-cfg-22",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mahaq24aa3",
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
      id: "payne-45m-series-wall-single-cfg-23",
      slug: "payne-45m-series-wall-single-cfg-23",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-24",
      slug: "payne-45m-series-wall-single-cfg-24",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-25",
      slug: "payne-45m-series-wall-single-cfg-25",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-26",
      slug: "payne-45m-series-wall-single-cfg-26",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-27",
      slug: "payne-45m-series-wall-single-cfg-27",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-28",
      slug: "payne-45m-series-wall-single-cfg-28",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-29",
      slug: "payne-45m-series-wall-single-cfg-29",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-30",
      slug: "payne-45m-series-wall-single-cfg-30",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-31",
      slug: "payne-45m-series-wall-single-cfg-31",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq12aa3",
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
      id: "payne-45m-series-wall-single-cfg-32",
      slug: "payne-45m-series-wall-single-cfg-32",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-33",
      slug: "payne-45m-series-wall-single-cfg-33",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-34",
      slug: "payne-45m-series-wall-single-cfg-34",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-35",
      slug: "payne-45m-series-wall-single-cfg-35",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-36",
      slug: "payne-45m-series-wall-single-cfg-36",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-37",
      slug: "payne-45m-series-wall-single-cfg-37",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq18aa3",
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
      id: "payne-45m-series-wall-single-cfg-38",
      slug: "payne-45m-series-wall-single-cfg-38",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq24aa3",
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
      id: "payne-45m-series-wall-single-cfg-39",
      slug: "payne-45m-series-wall-single-cfg-39",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq24aa3",
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
      id: "payne-45m-series-wall-single-cfg-40",
      slug: "payne-45m-series-wall-single-cfg-40",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37maraq24aa3",
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
      id: "payne-45m-series-wall-single-cfg-41",
      slug: "payne-45m-series-wall-single-cfg-41",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbhaq36aa3",
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
      id: "payne-45m-series-wall-single-cfg-42",
      slug: "payne-45m-series-wall-single-cfg-42",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbhaq36aa3",
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
      id: "payne-45m-series-wall-single-cfg-43",
      slug: "payne-45m-series-wall-single-cfg-43",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbhaq36aa3",
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
      id: "payne-45m-series-wall-single-cfg-44",
      slug: "payne-45m-series-wall-single-cfg-44",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbhaq48aa3",
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
      id: "payne-45m-series-wall-single-cfg-45",
      slug: "payne-45m-series-wall-single-cfg-45",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbhaq48aa3",
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
      id: "payne-45m-series-wall-single-cfg-46",
      slug: "payne-45m-series-wall-single-cfg-46",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbhaq48aa3",
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
      id: "payne-45m-series-wall-single-cfg-47",
      slug: "payne-45m-series-wall-single-cfg-47",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbhaq58aa3",
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
      id: "payne-45m-series-wall-single-cfg-48",
      slug: "payne-45m-series-wall-single-cfg-48",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbhaq58aa3",
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
      id: "payne-45m-series-wall-single-cfg-49",
      slug: "payne-45m-series-wall-single-cfg-49",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbraq36aa3",
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
      id: "payne-45m-series-wall-single-cfg-50",
      slug: "payne-45m-series-wall-single-cfg-50",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbraq36aa3",
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
      id: "payne-45m-series-wall-single-cfg-51",
      slug: "payne-45m-series-wall-single-cfg-51",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbraq36aa3",
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
      id: "payne-45m-series-wall-single-cfg-52",
      slug: "payne-45m-series-wall-single-cfg-52",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbraq48aa3",
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
      id: "payne-45m-series-wall-single-cfg-53",
      slug: "payne-45m-series-wall-single-cfg-53",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbraq48aa3",
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
      id: "payne-45m-series-wall-single-cfg-54",
      slug: "payne-45m-series-wall-single-cfg-54",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mbraq48aa3",
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
      id: "payne-45m-series-wall-single-cfg-55",
      slug: "payne-45m-series-wall-single-cfg-55",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mhraq09aa1",
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
      id: "payne-45m-series-wall-single-cfg-56",
      slug: "payne-45m-series-wall-single-cfg-56",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mhraq09aa3",
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
      id: "payne-45m-series-wall-single-cfg-57",
      slug: "payne-45m-series-wall-single-cfg-57",
      modelId: "payne-45m-series-wall-single",
      outdoorUnitId: "payne-37mhraq30aa3",
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
      id: "payne-d5m-series-wall-single-cfg-1",
      slug: "payne-d5m-series-wall-single-cfg-1",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mahaq06aa3",
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
      id: "payne-d5m-series-wall-single-cfg-2",
      slug: "payne-d5m-series-wall-single-cfg-2",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mahaq09aa3",
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
      id: "payne-d5m-series-wall-single-cfg-3",
      slug: "payne-d5m-series-wall-single-cfg-3",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mahaq12aa3",
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
      id: "payne-d5m-series-wall-single-cfg-4",
      slug: "payne-d5m-series-wall-single-cfg-4",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mahaq18aa3",
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
      id: "payne-d5m-series-wall-single-cfg-5",
      slug: "payne-d5m-series-wall-single-cfg-5",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mahaq24aa3",
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
      id: "payne-d5m-series-wall-single-cfg-6",
      slug: "payne-d5m-series-wall-single-cfg-6",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mahaq33aa3",
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
      id: "payne-d5m-series-wall-single-cfg-7",
      slug: "payne-d5m-series-wall-single-cfg-7",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37maraq12aa1",
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
      id: "payne-d5m-series-wall-single-cfg-8",
      slug: "payne-d5m-series-wall-single-cfg-8",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37maraq09aa3",
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
      id: "payne-d5m-series-wall-single-cfg-9",
      slug: "payne-d5m-series-wall-single-cfg-9",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37maraq12aa3",
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
      id: "payne-d5m-series-wall-single-cfg-10",
      slug: "payne-d5m-series-wall-single-cfg-10",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37maraq18aa3",
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
      id: "payne-d5m-series-wall-single-cfg-11",
      slug: "payne-d5m-series-wall-single-cfg-11",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37maraq24aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 23.1,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-d5m-series-wall-single-cfg-12",
      slug: "payne-d5m-series-wall-single-cfg-12",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mvraq09aa3",
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
      id: "payne-d5m-series-wall-single-cfg-13",
      slug: "payne-d5m-series-wall-single-cfg-13",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mvraq24aa3",
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
      id: "payne-d5m-series-wall-single-cfg-14",
      slug: "payne-d5m-series-wall-single-cfg-14",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mvraq09aa3",
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
      id: "payne-d5m-series-wall-single-cfg-15",
      slug: "payne-d5m-series-wall-single-cfg-15",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mvraq24aa3",
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
      id: "payne-d5m-series-wall-single-cfg-16",
      slug: "payne-d5m-series-wall-single-cfg-16",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mpraq06aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 35.1,
      hspf2: 15.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-d5m-series-wall-single-cfg-17",
      slug: "payne-d5m-series-wall-single-cfg-17",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mpraq09aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.5,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-d5m-series-wall-single-cfg-18",
      slug: "payne-d5m-series-wall-single-cfg-18",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mpraq12aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.5,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-d5m-series-wall-single-cfg-19",
      slug: "payne-d5m-series-wall-single-cfg-19",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37mpraq18aa3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.8,
      hspf2: 16.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "payne-d5m-series-wall-single-cfg-20",
      slug: "payne-d5m-series-wall-single-cfg-20",
      modelId: "payne-d5m-series-wall-single",
      outdoorUnitId: "payne-37maraq30aa3",
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
      id: "payne-37m-series-wall-single-cfg-1",
      slug: "payne-37m-series-wall-single-cfg-1",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq18ca3",
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
      id: "payne-37m-series-wall-single-cfg-2",
      slug: "payne-37m-series-wall-single-cfg-2",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq18ca3",
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
      id: "payne-37m-series-wall-single-cfg-3",
      slug: "payne-37m-series-wall-single-cfg-3",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq18ca3",
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
      id: "payne-37m-series-wall-single-cfg-4",
      slug: "payne-37m-series-wall-single-cfg-4",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq24da3",
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
      id: "payne-37m-series-wall-single-cfg-5",
      slug: "payne-37m-series-wall-single-cfg-5",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq24da3",
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
      id: "payne-37m-series-wall-single-cfg-6",
      slug: "payne-37m-series-wall-single-cfg-6",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq24da3",
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
      id: "payne-37m-series-wall-single-cfg-7",
      slug: "payne-37m-series-wall-single-cfg-7",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq30ea3",
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
      id: "payne-37m-series-wall-single-cfg-8",
      slug: "payne-37m-series-wall-single-cfg-8",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq30ea3",
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
      id: "payne-37m-series-wall-single-cfg-9",
      slug: "payne-37m-series-wall-single-cfg-9",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq30ea3",
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
      id: "payne-37m-series-wall-single-cfg-10",
      slug: "payne-37m-series-wall-single-cfg-10",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq36ea3",
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
      id: "payne-37m-series-wall-single-cfg-11",
      slug: "payne-37m-series-wall-single-cfg-11",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq36ea3",
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
      id: "payne-37m-series-wall-single-cfg-12",
      slug: "payne-37m-series-wall-single-cfg-12",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq36ea3",
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
      id: "payne-37m-series-wall-single-cfg-13",
      slug: "payne-37m-series-wall-single-cfg-13",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq48fa3",
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
      id: "payne-37m-series-wall-single-cfg-14",
      slug: "payne-37m-series-wall-single-cfg-14",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq48fa3",
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
      id: "payne-37m-series-wall-single-cfg-15",
      slug: "payne-37m-series-wall-single-cfg-15",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq48fa3",
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
      id: "payne-37m-series-wall-single-cfg-16",
      slug: "payne-37m-series-wall-single-cfg-16",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq55fa3",
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
      id: "payne-37m-series-wall-single-cfg-17",
      slug: "payne-37m-series-wall-single-cfg-17",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq55fa3",
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
      id: "payne-37m-series-wall-single-cfg-18",
      slug: "payne-37m-series-wall-single-cfg-18",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mghaq55fa3",
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
      id: "payne-37m-series-wall-single-cfg-19",
      slug: "payne-37m-series-wall-single-cfg-19",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq18ca3",
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
      id: "payne-37m-series-wall-single-cfg-20",
      slug: "payne-37m-series-wall-single-cfg-20",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq18ca3",
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
      id: "payne-37m-series-wall-single-cfg-21",
      slug: "payne-37m-series-wall-single-cfg-21",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq18ca3",
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
      id: "payne-37m-series-wall-single-cfg-22",
      slug: "payne-37m-series-wall-single-cfg-22",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq24da3",
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
      id: "payne-37m-series-wall-single-cfg-23",
      slug: "payne-37m-series-wall-single-cfg-23",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq24da3",
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
      id: "payne-37m-series-wall-single-cfg-24",
      slug: "payne-37m-series-wall-single-cfg-24",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq24da3",
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
      id: "payne-37m-series-wall-single-cfg-25",
      slug: "payne-37m-series-wall-single-cfg-25",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq30ea3",
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
      id: "payne-37m-series-wall-single-cfg-26",
      slug: "payne-37m-series-wall-single-cfg-26",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq30ea3",
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
      id: "payne-37m-series-wall-single-cfg-27",
      slug: "payne-37m-series-wall-single-cfg-27",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq30ea3",
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
      id: "payne-37m-series-wall-single-cfg-28",
      slug: "payne-37m-series-wall-single-cfg-28",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq36ea3",
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
      id: "payne-37m-series-wall-single-cfg-29",
      slug: "payne-37m-series-wall-single-cfg-29",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq36ea3",
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
      id: "payne-37m-series-wall-single-cfg-30",
      slug: "payne-37m-series-wall-single-cfg-30",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq36ea3",
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
      id: "payne-37m-series-wall-single-cfg-31",
      slug: "payne-37m-series-wall-single-cfg-31",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq48fa3",
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
      id: "payne-37m-series-wall-single-cfg-32",
      slug: "payne-37m-series-wall-single-cfg-32",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq48fa3",
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
      id: "payne-37m-series-wall-single-cfg-33",
      slug: "payne-37m-series-wall-single-cfg-33",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mgraq48fa3",
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
      id: "payne-37m-series-wall-single-cfg-34",
      slug: "payne-37m-series-wall-single-cfg-34",
      modelId: "payne-37m-series-wall-single",
      outdoorUnitId: "payne-37mhraq18aa3",
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
      configurationId: "payne-standard-wall-single-cfg-1",
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
      configurationId: "payne-standard-wall-single-cfg-2",
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
      configurationId: "payne-standard-wall-single-cfg-3",
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
      configurationId: "payne-standard-wall-single-cfg-4",
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
      configurationId: "payne-standard-wall-single-cfg-5",
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
      configurationId: "payne-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-7",
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
      configurationId: "payne-standard-wall-single-cfg-8",
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
      configurationId: "payne-standard-wall-single-cfg-9",
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
      configurationId: "payne-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17300,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-15",
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
      configurationId: "payne-standard-wall-single-cfg-16",
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
      configurationId: "payne-standard-wall-single-cfg-17",
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
      configurationId: "payne-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-19",
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
      configurationId: "payne-standard-wall-single-cfg-20",
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
      configurationId: "payne-standard-wall-single-cfg-21",
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
      configurationId: "payne-standard-wall-single-cfg-22",
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
      configurationId: "payne-standard-wall-single-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-24",
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
      configurationId: "payne-standard-wall-single-cfg-25",
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
      configurationId: "payne-standard-wall-single-cfg-26",
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
      configurationId: "payne-standard-wall-single-cfg-27",
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
      configurationId: "payne-standard-wall-single-cfg-28",
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
      configurationId: "payne-standard-wall-single-cfg-29",
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
      configurationId: "payne-standard-wall-single-cfg-30",
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
      configurationId: "payne-standard-wall-single-cfg-31",
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
      configurationId: "payne-standard-wall-single-cfg-32",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15450,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-33",
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
      configurationId: "payne-standard-wall-single-cfg-34",
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
      configurationId: "payne-standard-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-37",
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
      configurationId: "payne-standard-wall-single-cfg-38",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-39",
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
      configurationId: "payne-standard-wall-single-cfg-40",
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
      configurationId: "payne-standard-wall-single-cfg-41",
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
      configurationId: "payne-standard-wall-single-cfg-42",
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
      configurationId: "payne-standard-wall-single-cfg-43",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-45",
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
      configurationId: "payne-standard-wall-single-cfg-46",
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
      configurationId: "payne-standard-wall-single-cfg-47",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11700,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-48",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-49",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-50",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-51",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 31800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-52",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-53",
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
      configurationId: "payne-standard-wall-single-cfg-54",
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
      configurationId: "payne-standard-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-56",
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
      configurationId: "payne-standard-wall-single-cfg-57",
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
      configurationId: "payne-standard-wall-single-cfg-58",
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
      configurationId: "payne-standard-wall-single-cfg-59",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-60",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-61",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-62",
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
      configurationId: "payne-standard-wall-single-cfg-63",
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
      configurationId: "payne-standard-wall-single-cfg-64",
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
      configurationId: "payne-standard-wall-single-cfg-65",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-standard-wall-single-cfg-66",
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
      configurationId: "payne-standard-wall-single-cfg-67",
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
      configurationId: "payne-standard-wall-single-cfg-68",
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
      configurationId: "payne-standard-wall-single-cfg-69",
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
      configurationId: "payne-standard-wall-single-cfg-70",
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
      configurationId: "payne-standard-wall-single-cfg-71",
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
      configurationId: "payne-standard-wall-single-cfg-72",
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
      configurationId: "payne-standard-wall-single-cfg-73",
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
      configurationId: "payne-standard-wall-single-cfg-74",
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
      configurationId: "payne-standard-wall-single-cfg-75",
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
      configurationId: "payne-standard-wall-single-cfg-76",
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
      configurationId: "payne-standard-wall-single-cfg-77",
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
      configurationId: "payne-standard-wall-single-cfg-78",
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
      configurationId: "payne-standard-wall-single-cfg-79",
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
      configurationId: "payne-standard-wall-single-cfg-80",
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
      configurationId: "payne-standard-wall-single-cfg-81",
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
      configurationId: "payne-standard-wall-single-cfg-82",
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
      configurationId: "payne-standard-wall-single-cfg-83",
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
      configurationId: "payne-standard-wall-single-cfg-84",
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
      configurationId: "payne-standard-wall-single-cfg-85",
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
      configurationId: "payne-standard-wall-single-cfg-86",
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
      configurationId: "payne-standard-wall-single-cfg-87",
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
      configurationId: "payne-standard-wall-single-cfg-88",
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
      configurationId: "payne-standard-wall-single-cfg-89",
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
      configurationId: "payne-standard-wall-single-cfg-90",
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
      configurationId: "payne-standard-wall-single-cfg-91",
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
      configurationId: "payne-standard-wall-single-cfg-92",
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
      configurationId: "payne-standard-wall-single-cfg-93",
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
      configurationId: "payne-standard-wall-single-cfg-94",
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
      configurationId: "payne-standard-wall-single-cfg-95",
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
      configurationId: "payne-38mar-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7400,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6400,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7900,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8300,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8400,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12700,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-13",
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
      configurationId: "payne-38mar-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.21,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-15",
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
      configurationId: "payne-38mar-series-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14500,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.59,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19800,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mar-series-wall-single-cfg-21",
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
      configurationId: "payne-38mar-series-wall-single-cfg-22",
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
      configurationId: "payne-38m-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.95,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38m-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 30000,
          cop: 1.75,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38m-series-wall-single-cfg-3",
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
      configurationId: "payne-38m-series-wall-single-cfg-4",
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
      configurationId: "payne-38mp-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mp-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mp-series-wall-single-cfg-3",
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
      configurationId: "payne-38mg-series-wall-single-cfg-1",
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
      configurationId: "payne-38mg-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-4",
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
      configurationId: "payne-38mg-series-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18500,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16700,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.68,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18200,
          cop: 1.74,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-10",
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
      configurationId: "payne-38mg-series-wall-single-cfg-11",
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
      configurationId: "payne-38mg-series-wall-single-cfg-12",
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
      configurationId: "payne-38mg-series-wall-single-cfg-13",
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
      configurationId: "payne-38mg-series-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23200,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-15",
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
      configurationId: "payne-38mg-series-wall-single-cfg-16",
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
      configurationId: "payne-38mg-series-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mg-series-wall-single-cfg-18",
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
      configurationId: "payne-38mb-series-wall-single-cfg-1",
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
      configurationId: "payne-38mb-series-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 37400,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mseries-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38mseries-central-ducted-cfg-2",
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
      configurationId: "payne-38mseries-central-ducted-cfg-3",
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
      configurationId: "payne-38mseries-central-ducted-cfg-4",
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
      configurationId: "payne-38mseries-central-ducted-cfg-5",
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
      configurationId: "payne-38mseries-central-ducted-cfg-6",
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
      configurationId: "payne-38mseries-central-ducted-cfg-7",
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
      configurationId: "payne-38m-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19200,
          cop: 1.81,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "payne-38m-series-central-ducted-cfg-2",
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
      configurationId: "payne-38m-series-central-ducted-cfg-3",
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
      configurationId: "payne-38m-series-central-ducted-cfg-4",
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
      configurationId: "payne-38m-series-central-ducted-cfg-5",
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
      configurationId: "payne-38m-series-central-ducted-cfg-6",
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
      configurationId: "payne-38m-series-central-ducted-cfg-7",
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
      configurationId: "payne-38m-series-central-ducted-cfg-8",
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
      configurationId: "payne-38m-series-central-ducted-cfg-9",
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
      configurationId: "payne-38mh-series-wall-single-cfg-1",
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
      configurationId: "payne-38mh-series-wall-single-cfg-2",
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
      configurationId: "payne-38mh-series-wall-single-cfg-3",
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
      configurationId: "payne-38mu-series-central-ducted-cfg-1",
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
      configurationId: "payne-45m-series-central-ducted-cfg-1",
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
      configurationId: "payne-45m-series-central-ducted-cfg-2",
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
      configurationId: "payne-45m-series-central-ducted-cfg-3",
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
      configurationId: "payne-45m-series-central-ducted-cfg-4",
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
      configurationId: "payne-45m-series-central-ducted-cfg-5",
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
      configurationId: "payne-45m-series-central-ducted-cfg-6",
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
      configurationId: "payne-45m-series-central-ducted-cfg-7",
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
      configurationId: "payne-45m-series-central-ducted-cfg-8",
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
      configurationId: "payne-45m-series-central-ducted-cfg-9",
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
      configurationId: "payne-45m-series-central-ducted-cfg-10",
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
      configurationId: "payne-45m-series-central-ducted-cfg-11",
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
      configurationId: "payne-45m-series-central-ducted-cfg-12",
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
      configurationId: "payne-45m-series-central-ducted-cfg-13",
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
      configurationId: "payne-45m-series-central-ducted-cfg-14",
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
      configurationId: "payne-45m-series-central-ducted-cfg-15",
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
      configurationId: "payne-45m-series-central-ducted-cfg-16",
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
      configurationId: "payne-45m-series-central-ducted-cfg-17",
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
      configurationId: "payne-45m-series-central-ducted-cfg-18",
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
      configurationId: "payne-45m-series-central-ducted-cfg-19",
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
      configurationId: "payne-45m-series-central-ducted-cfg-20",
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
      configurationId: "payne-45m-series-central-ducted-cfg-21",
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
      configurationId: "payne-45m-series-central-ducted-cfg-22",
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
      configurationId: "payne-45m-series-central-ducted-cfg-23",
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
      configurationId: "payne-45m-series-central-ducted-cfg-24",
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
      configurationId: "payne-45m-series-central-ducted-cfg-25",
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
      configurationId: "payne-45m-series-central-ducted-cfg-26",
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
      configurationId: "payne-37m-series-central-ducted-cfg-1",
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
      configurationId: "payne-37m-series-central-ducted-cfg-2",
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
      configurationId: "payne-45m-series-wall-single-cfg-1",
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
      configurationId: "payne-45m-series-wall-single-cfg-2",
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
      configurationId: "payne-45m-series-wall-single-cfg-3",
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
      configurationId: "payne-45m-series-wall-single-cfg-4",
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
      configurationId: "payne-45m-series-wall-single-cfg-5",
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
      configurationId: "payne-45m-series-wall-single-cfg-6",
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
      configurationId: "payne-45m-series-wall-single-cfg-7",
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
      configurationId: "payne-45m-series-wall-single-cfg-8",
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
      configurationId: "payne-45m-series-wall-single-cfg-9",
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
      configurationId: "payne-45m-series-wall-single-cfg-10",
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
      configurationId: "payne-45m-series-wall-single-cfg-11",
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
      configurationId: "payne-45m-series-wall-single-cfg-12",
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
      configurationId: "payne-45m-series-wall-single-cfg-13",
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
      configurationId: "payne-45m-series-wall-single-cfg-14",
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
      configurationId: "payne-45m-series-wall-single-cfg-15",
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
      configurationId: "payne-45m-series-wall-single-cfg-16",
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
      configurationId: "payne-45m-series-wall-single-cfg-17",
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
      configurationId: "payne-45m-series-wall-single-cfg-18",
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
      configurationId: "payne-45m-series-wall-single-cfg-19",
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
      configurationId: "payne-45m-series-wall-single-cfg-20",
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
      configurationId: "payne-45m-series-wall-single-cfg-21",
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
      configurationId: "payne-45m-series-wall-single-cfg-22",
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
      configurationId: "payne-45m-series-wall-single-cfg-23",
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
      configurationId: "payne-45m-series-wall-single-cfg-24",
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
      configurationId: "payne-45m-series-wall-single-cfg-25",
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
      configurationId: "payne-45m-series-wall-single-cfg-26",
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
      configurationId: "payne-45m-series-wall-single-cfg-27",
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
      configurationId: "payne-45m-series-wall-single-cfg-28",
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
      configurationId: "payne-45m-series-wall-single-cfg-29",
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
      configurationId: "payne-45m-series-wall-single-cfg-30",
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
      configurationId: "payne-45m-series-wall-single-cfg-31",
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
      configurationId: "payne-45m-series-wall-single-cfg-32",
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
      configurationId: "payne-45m-series-wall-single-cfg-33",
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
      configurationId: "payne-45m-series-wall-single-cfg-34",
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
      configurationId: "payne-45m-series-wall-single-cfg-35",
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
      configurationId: "payne-45m-series-wall-single-cfg-36",
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
      configurationId: "payne-45m-series-wall-single-cfg-37",
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
      configurationId: "payne-45m-series-wall-single-cfg-38",
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
      configurationId: "payne-45m-series-wall-single-cfg-39",
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
      configurationId: "payne-45m-series-wall-single-cfg-40",
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
      configurationId: "payne-45m-series-wall-single-cfg-41",
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
      configurationId: "payne-45m-series-wall-single-cfg-42",
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
      configurationId: "payne-45m-series-wall-single-cfg-43",
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
      configurationId: "payne-45m-series-wall-single-cfg-44",
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
      configurationId: "payne-45m-series-wall-single-cfg-45",
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
      configurationId: "payne-45m-series-wall-single-cfg-46",
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
      configurationId: "payne-45m-series-wall-single-cfg-47",
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
      configurationId: "payne-45m-series-wall-single-cfg-48",
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
      configurationId: "payne-45m-series-wall-single-cfg-49",
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
      configurationId: "payne-45m-series-wall-single-cfg-50",
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
      configurationId: "payne-45m-series-wall-single-cfg-51",
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
      configurationId: "payne-45m-series-wall-single-cfg-52",
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
      configurationId: "payne-45m-series-wall-single-cfg-53",
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
      configurationId: "payne-45m-series-wall-single-cfg-54",
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
      configurationId: "payne-45m-series-wall-single-cfg-55",
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
      configurationId: "payne-45m-series-wall-single-cfg-56",
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
      configurationId: "payne-45m-series-wall-single-cfg-57",
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
      configurationId: "payne-d5m-series-wall-single-cfg-1",
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
      configurationId: "payne-d5m-series-wall-single-cfg-2",
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
      configurationId: "payne-d5m-series-wall-single-cfg-3",
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
      configurationId: "payne-d5m-series-wall-single-cfg-4",
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
      configurationId: "payne-d5m-series-wall-single-cfg-5",
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
      configurationId: "payne-d5m-series-wall-single-cfg-6",
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
      configurationId: "payne-d5m-series-wall-single-cfg-7",
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
      configurationId: "payne-d5m-series-wall-single-cfg-8",
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
      configurationId: "payne-d5m-series-wall-single-cfg-9",
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
      configurationId: "payne-d5m-series-wall-single-cfg-10",
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
      configurationId: "payne-d5m-series-wall-single-cfg-11",
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
      configurationId: "payne-d5m-series-wall-single-cfg-12",
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
      configurationId: "payne-d5m-series-wall-single-cfg-13",
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
      configurationId: "payne-d5m-series-wall-single-cfg-14",
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
      configurationId: "payne-d5m-series-wall-single-cfg-15",
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
      configurationId: "payne-d5m-series-wall-single-cfg-16",
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
      configurationId: "payne-d5m-series-wall-single-cfg-17",
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
      configurationId: "payne-d5m-series-wall-single-cfg-18",
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
      configurationId: "payne-d5m-series-wall-single-cfg-19",
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
      configurationId: "payne-d5m-series-wall-single-cfg-20",
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
      configurationId: "payne-37m-series-wall-single-cfg-1",
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
      configurationId: "payne-37m-series-wall-single-cfg-2",
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
      configurationId: "payne-37m-series-wall-single-cfg-3",
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
      configurationId: "payne-37m-series-wall-single-cfg-4",
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
      configurationId: "payne-37m-series-wall-single-cfg-5",
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
      configurationId: "payne-37m-series-wall-single-cfg-6",
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
      configurationId: "payne-37m-series-wall-single-cfg-7",
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
      configurationId: "payne-37m-series-wall-single-cfg-8",
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
      configurationId: "payne-37m-series-wall-single-cfg-9",
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
      configurationId: "payne-37m-series-wall-single-cfg-10",
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
      configurationId: "payne-37m-series-wall-single-cfg-11",
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
      configurationId: "payne-37m-series-wall-single-cfg-12",
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
      configurationId: "payne-37m-series-wall-single-cfg-13",
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
      configurationId: "payne-37m-series-wall-single-cfg-14",
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
      configurationId: "payne-37m-series-wall-single-cfg-15",
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
      configurationId: "payne-37m-series-wall-single-cfg-16",
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
      configurationId: "payne-37m-series-wall-single-cfg-17",
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
      configurationId: "payne-37m-series-wall-single-cfg-18",
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
      configurationId: "payne-37m-series-wall-single-cfg-19",
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
      configurationId: "payne-37m-series-wall-single-cfg-20",
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
      configurationId: "payne-37m-series-wall-single-cfg-21",
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
      configurationId: "payne-37m-series-wall-single-cfg-22",
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
      configurationId: "payne-37m-series-wall-single-cfg-23",
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
      configurationId: "payne-37m-series-wall-single-cfg-24",
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
      configurationId: "payne-37m-series-wall-single-cfg-25",
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
      configurationId: "payne-37m-series-wall-single-cfg-26",
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
      configurationId: "payne-37m-series-wall-single-cfg-27",
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
      configurationId: "payne-37m-series-wall-single-cfg-28",
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
      configurationId: "payne-37m-series-wall-single-cfg-29",
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
      configurationId: "payne-37m-series-wall-single-cfg-30",
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
      configurationId: "payne-37m-series-wall-single-cfg-31",
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
      configurationId: "payne-37m-series-wall-single-cfg-32",
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
      configurationId: "payne-37m-series-wall-single-cfg-33",
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
      configurationId: "payne-37m-series-wall-single-cfg-34",
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
