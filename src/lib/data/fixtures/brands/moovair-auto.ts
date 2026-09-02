import type { BrandDataset } from "../../types";

export const moovairDataset: BrandDataset = {
  brand: {
    id: "moovair",
    slug: "moovair",
    name: "MOOVAIR",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "moovair-standard",
      slug: "moovair-standard",
      name: "Standard",
      brandId: "moovair",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series",
      slug: "moovair-dm-series",
      name: "DM series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma12-series",
      slug: "moovair-dma12-series",
      name: "DMA12 series",
      brandId: "moovair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-cub-series",
      slug: "moovair-cub-series",
      name: "CUB series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dmb-series",
      slug: "moovair-dmb-series",
      name: "DMB series",
      brandId: "moovair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma-series",
      slug: "moovair-dma-series",
      name: "DMA series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dmc-series",
      slug: "moovair-dmc-series",
      name: "DMC series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-shc-series",
      slug: "moovair-shc-series",
      name: "SHC Series",
      brandId: "moovair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series",
      slug: "moovair-msh-series",
      name: "MSH Series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series",
      slug: "moovair-mah-series",
      name: "MAH Series",
      brandId: "moovair",
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series",
      slug: "moovair-mxh-series",
      name: "MXH Series",
      brandId: "moovair",
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "moovair-standard-wall-single",
      slug: "moovair-standard-wall-single",
      name: "Standard",
      seriesId: "moovair-standard",
      brandId: "moovair",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 5800,
      heatingCapacity5FMaxBtu: 37600,
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
      id: "moovair-dm-series-central-ducted",
      slug: "moovair-dm-series-central-ducted",
      name: "DM series",
      seriesId: "moovair-dm-series",
      brandId: "moovair",
      modelNumber: "DM series",
      normalizedModelNumber: "dm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 42000,
      seer2Min: 15.2,
      seer2Max: 18,
      hspf2Min: 8.5,
      hspf2Max: 10,
      cop5FMin: 1.6,
      cop5FMax: 2.2,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-wall-single",
      slug: "moovair-dm-series-wall-single",
      name: "DM-series",
      seriesId: "moovair-dm-series",
      brandId: "moovair",
      modelNumber: "DM-series",
      normalizedModelNumber: "dm-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 55000,
      heatingCapacity5FMinBtu: 6800,
      heatingCapacity5FMaxBtu: 39500,
      seer2Min: 16.5,
      seer2Max: 28.5,
      hspf2Min: 8.7,
      hspf2Max: 13.6,
      cop5FMin: 1.59,
      cop5FMax: 2.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma12-series-wall-single",
      slug: "moovair-dma12-series-wall-single",
      name: "DMA12 series",
      seriesId: "moovair-dma12-series",
      brandId: "moovair",
      modelNumber: "DMA12 series",
      normalizedModelNumber: "dma12-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 9200,
      heatingCapacity5FMaxBtu: 10200,
      seer2Min: 24.2,
      seer2Max: 25,
      hspf2Min: 10.7,
      hspf2Max: 11,
      cop5FMin: 1.99,
      cop5FMax: 2.38,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-cub-series-central-ducted",
      slug: "moovair-cub-series-central-ducted",
      name: "CUB series",
      seriesId: "moovair-cub-series",
      brandId: "moovair",
      modelNumber: "CUB series",
      normalizedModelNumber: "cub-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 27400,
      heatingCapacity5FMaxBtu: 27400,
      seer2Min: 15.5,
      seer2Max: 15.5,
      hspf2Min: 8.6,
      hspf2Max: 8.6,
      cop5FMin: 1.85,
      cop5FMax: 1.85,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dmb-series-wall-single",
      slug: "moovair-dmb-series-wall-single",
      name: "DMB series",
      seriesId: "moovair-dmb-series",
      brandId: "moovair",
      modelNumber: "DMB series",
      normalizedModelNumber: "dmb-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 18000,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 20200,
      seer2Min: 26.3,
      seer2Max: 29,
      hspf2Min: 11,
      hspf2Max: 14.5,
      cop5FMin: 1.86,
      cop5FMax: 2.89,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma-series-central-ducted",
      slug: "moovair-dma-series-central-ducted",
      name: "DMA series",
      seriesId: "moovair-dma-series",
      brandId: "moovair",
      modelNumber: "DMA series",
      normalizedModelNumber: "dma-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 29000,
      coolingCapacityMaxBtu: 29000,
      heatingCapacity5FMinBtu: 19600,
      heatingCapacity5FMaxBtu: 19600,
      seer2Min: 15.2,
      seer2Max: 15.2,
      hspf2Min: 8.5,
      hspf2Max: 8.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dmc-series-central-ducted",
      slug: "moovair-dmc-series-central-ducted",
      name: "DMC series",
      seriesId: "moovair-dmc-series",
      brandId: "moovair",
      modelNumber: "DMC series",
      normalizedModelNumber: "dmc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      heatingCapacity5FMinBtu: 27000,
      heatingCapacity5FMaxBtu: 31800,
      seer2Min: 15.2,
      seer2Max: 16.3,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.8,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-shc-series-wall-single",
      slug: "moovair-shc-series-wall-single",
      name: "SHC Series",
      seriesId: "moovair-shc-series",
      brandId: "moovair",
      modelNumber: "SHC Series",
      normalizedModelNumber: "shc-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 11400,
      seer2Min: 27.5,
      seer2Max: 27.5,
      hspf2Min: 14.5,
      hspf2Max: 14.5,
      cop5FMin: 1.86,
      cop5FMax: 1.86,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma-series-wall-single",
      slug: "moovair-dma-series-wall-single",
      name: "DMA Series",
      seriesId: "moovair-dma-series",
      brandId: "moovair",
      modelNumber: "DMA Series",
      normalizedModelNumber: "dma-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      heatingCapacity5FMinBtu: 11400,
      heatingCapacity5FMaxBtu: 11400,
      seer2Min: 27.5,
      seer2Max: 27.5,
      hspf2Min: 14.5,
      hspf2Max: 14.5,
      cop5FMin: 1.86,
      cop5FMax: 1.86,
      systemType: "wall-single",
      categories: ["cold-climate", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted",
      slug: "moovair-msh-series-central-ducted",
      name: "MSH Series",
      seriesId: "moovair-msh-series",
      brandId: "moovair",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 12600,
      heatingCapacity5FMaxBtu: 36000,
      seer2Min: 15.2,
      seer2Max: 19.3,
      hspf2Min: 8.1,
      hspf2Max: 10.8,
      cop5FMin: 1.8,
      cop5FMax: 2.1,
      systemType: "central-ducted",
      categories: ["cold-climate", "ducted"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mah-series-central-ducted",
      slug: "moovair-mah-series-central-ducted",
      name: "MAH Series",
      seriesId: "moovair-mah-series",
      brandId: "moovair",
      modelNumber: "MAH Series",
      normalizedModelNumber: "mah-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 14700,
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
      id: "moovair-msh-series-wall-single",
      slug: "moovair-msh-series-wall-single",
      name: "MSH Series",
      seriesId: "moovair-msh-series",
      brandId: "moovair",
      modelNumber: "MSH Series",
      normalizedModelNumber: "msh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 33000,
      heatingCapacity5FMinBtu: 8100,
      heatingCapacity5FMaxBtu: 30000,
      seer2Min: 18.4,
      seer2Max: 29.4,
      hspf2Min: 9.9,
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
      id: "moovair-mxh-series-wall-single",
      slug: "moovair-mxh-series-wall-single",
      name: "MXH Series",
      seriesId: "moovair-mxh-series",
      brandId: "moovair",
      modelNumber: "MXH Series",
      normalizedModelNumber: "mxh-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 47000,
      heatingCapacity5FMinBtu: 13600,
      heatingCapacity5FMaxBtu: 44500,
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
    }
  ],
  outdoorUnits: [
    {
      id: "moovair-dm09hos19115s1",
      modelNumber: "DM09HOS19115S1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm18hos19230s1",
      modelNumber: "DM18HOS19230S1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm18hom23230x2",
      modelNumber: "DM18HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm27hom23230x2",
      modelNumber: "DM27HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm48hom23230x2",
      modelNumber: "DM48HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm09hos23230e2",
      modelNumber: "DM09HOS23230E2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm12hos23230e2",
      modelNumber: "DM12HOS23230E2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm18hos23230e2",
      modelNumber: "DM18HOS23230E2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm24hos23230e2",
      modelNumber: "DM24HOS23230E2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm36hom23230x2",
      modelNumber: "DM36HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm09hos25230e3",
      modelNumber: "DM09HOS25230E3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm12hos25230e3",
      modelNumber: "DM12HOS25230E3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm36hom25230x3",
      modelNumber: "DM36HOM25230X3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm36hos18230e5",
      modelNumber: "DM36HOS18230E5",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm48hos18230e5",
      modelNumber: "DM48HOS18230E5",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm60hos18230e5",
      modelNumber: "DM60HOS18230E5",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm27hom25230x3",
      modelNumber: "DM27HOM25230X3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm48hom25230x3",
      modelNumber: "DM48HOM25230X3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm09hos42230e4",
      modelNumber: "DM09HOS42230E4",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm12hos42230e4",
      modelNumber: "DM12HOS42230E4",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm48hos25230e3",
      modelNumber: "DM48HOS25230E3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma18hos21230s1",
      modelNumber: "DMA18HOS21230S1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma36hos21230s1",
      modelNumber: "DMA36HOS21230S1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma36hos18230s5",
      modelNumber: "DMA36HOS18230S5",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma48hos18230s5",
      modelNumber: "DMA48HOS18230S5",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma60hos18230s5",
      modelNumber: "DMA60HOS18230S5",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma60hos19230e7",
      modelNumber: "DMA60HOS19230E7",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma55hom23230x2",
      modelNumber: "DMA55HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea30r2an1",
      modelNumber: "MSHEA30R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea36r2an1",
      modelNumber: "MSHEA36R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea60r2an1",
      modelNumber: "MSHEA60R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea15c2an1",
      modelNumber: "MSHEA15C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma15c2an1",
      modelNumber: "MSHMA15C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm24hos25230e3",
      modelNumber: "DM24HOS25230E3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma24hos20230e7",
      modelNumber: "DMA24HOS20230E7",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma30hos20230e7",
      modelNumber: "DMA30HOS20230E7",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma36hos20230e7",
      modelNumber: "DMA36HOS20230E7",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma48hos20230e7",
      modelNumber: "DMA48HOS20230E7",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm24hos25230e3a",
      modelNumber: "DM24HOS25230E3A",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma18hos20230e7",
      modelNumber: "DMA18HOS20230E7",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma24hos28230e8",
      modelNumber: "DMA24HOS28230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma60hos20230e7",
      modelNumber: "DMA60HOS20230E7",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm18hos25230e3a",
      modelNumber: "DM18HOS25230E3A",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dm36hos25230e3",
      modelNumber: "DM36HOS25230E3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma09hos21115s1",
      modelNumber: "DMA09HOS21115S1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma09hos25230e8",
      modelNumber: "DMA09HOS25230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma12hos25230e8",
      modelNumber: "DMA12HOS25230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma18hos25230e8",
      modelNumber: "DMA18HOS25230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma24hos25230e8",
      modelNumber: "DMA24HOS25230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma06hos28230e8",
      modelNumber: "DMA06HOS28230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma09hos28230e8",
      modelNumber: "DMA09HOS28230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma12hos28230e8",
      modelNumber: "DMA12HOS28230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma18hos28230e8",
      modelNumber: "DMA18HOS28230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma09hos42230e4",
      modelNumber: "DMA09HOS42230E4",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma12hos42230e4",
      modelNumber: "DMA12HOS42230E4",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma18hos42230e4",
      modelNumber: "DMA18HOS42230E4",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma36hos28230e8",
      modelNumber: "DMA36HOS28230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma48hos28230e8",
      modelNumber: "DMA48HOS28230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma18hom23230x2",
      modelNumber: "DMA18HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma27hom23230x2",
      modelNumber: "DMA27HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma36hom23230x2",
      modelNumber: "DMA36HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma48hom23230x2",
      modelNumber: "DMA48HOM23230X2",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma18hom25230x3",
      modelNumber: "DMA18HOM25230X3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma27hom25230x3",
      modelNumber: "DMA27HOM25230X3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma36hom25230x3",
      modelNumber: "DMA36HOM25230X3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma48hom25230x3",
      modelNumber: "DMA48HOM25230X3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dma55hom25230x3",
      modelNumber: "DMA55HOM25230X3",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dmb12hos42230e8",
      modelNumber: "DMB12HOS42230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dmb09hos42230e8",
      modelNumber: "DMB09HOS42230E8",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dmb18hos42230e8b",
      modelNumber: "DMB18HOS42230E8B",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-dmc36hos20230e7",
      modelNumber: "DMC36HOS20230E7",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-shc24vh2ag",
      modelNumber: "SHC24VH2AG",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea18r2an1",
      modelNumber: "MSHEA18R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea24r2an1",
      modelNumber: "MSHEA24R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea48r2an1",
      modelNumber: "MSHEA48R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma18r2an1",
      modelNumber: "MSHMA18R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma24r2an1",
      modelNumber: "MSHMA24R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma30r2an1",
      modelNumber: "MSHMA30R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshmb36r2an1",
      modelNumber: "MSHMB36R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma60r2an1",
      modelNumber: "MSHMA60R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma48r2an1",
      modelNumber: "MSHMA48R2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea09c2an1",
      modelNumber: "MSHEA09C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea12c2an1",
      modelNumber: "MSHEA12C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea18c2an1",
      modelNumber: "MSHEA18C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea24c2an1",
      modelNumber: "MSHEA24C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma09c2an1",
      modelNumber: "MSHMA09C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma12c2an1",
      modelNumber: "MSHMA12C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma18c2an1",
      modelNumber: "MSHMA18C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma24c2an1",
      modelNumber: "MSHMA24C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshma33c2an1",
      modelNumber: "MSHMA33C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshha18c2an1",
      modelNumber: "MSHHA18C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshha12c2an1",
      modelNumber: "MSHHA12C2AN1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mshea15c2an",
      modelNumber: "MSHEA15C2AN*",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mxhsa2742av1",
      modelNumber: "MXHSA2742AV1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mxhsa3652av1",
      modelNumber: "MXHSA3652AV1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mxhsa4862av1",
      modelNumber: "MXHSA4862AV1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mxhza1832av1",
      modelNumber: "MXHZA1832AV1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mxhza2742av1",
      modelNumber: "MXHZA2742AV1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mxhza3652av1",
      modelNumber: "MXHZA3652AV1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mxhza4862av1",
      modelNumber: "MXHZA4862AV1",
      brandId: "moovair",
      refrigerant: null as any,
    },
    {
      id: "moovair-mxhsa1832an1",
      modelNumber: "MXHSA1832AN1",
      brandId: "moovair",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "moovair-standard-wall-single-cfg-1",
      slug: "moovair-standard-wall-single-cfg-1",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm09hos19115s1",
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
      id: "moovair-standard-wall-single-cfg-2",
      slug: "moovair-standard-wall-single-cfg-2",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm18hos19230s1",
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
      id: "moovair-standard-wall-single-cfg-3",
      slug: "moovair-standard-wall-single-cfg-3",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm18hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-4",
      slug: "moovair-standard-wall-single-cfg-4",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm27hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-5",
      slug: "moovair-standard-wall-single-cfg-5",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm48hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-6",
      slug: "moovair-standard-wall-single-cfg-6",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm09hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-7",
      slug: "moovair-standard-wall-single-cfg-7",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm12hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-8",
      slug: "moovair-standard-wall-single-cfg-8",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm18hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-9",
      slug: "moovair-standard-wall-single-cfg-9",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm24hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-10",
      slug: "moovair-standard-wall-single-cfg-10",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm18hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-11",
      slug: "moovair-standard-wall-single-cfg-11",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm27hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-12",
      slug: "moovair-standard-wall-single-cfg-12",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm48hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-13",
      slug: "moovair-standard-wall-single-cfg-13",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm36hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-14",
      slug: "moovair-standard-wall-single-cfg-14",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm09hos25230e3",
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
      id: "moovair-standard-wall-single-cfg-15",
      slug: "moovair-standard-wall-single-cfg-15",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm12hos25230e3",
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
      id: "moovair-standard-wall-single-cfg-16",
      slug: "moovair-standard-wall-single-cfg-16",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm09hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-17",
      slug: "moovair-standard-wall-single-cfg-17",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm18hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-18",
      slug: "moovair-standard-wall-single-cfg-18",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm24hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-19",
      slug: "moovair-standard-wall-single-cfg-19",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm09hos25230e3",
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
      id: "moovair-standard-wall-single-cfg-20",
      slug: "moovair-standard-wall-single-cfg-20",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm12hos25230e3",
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
      id: "moovair-standard-wall-single-cfg-21",
      slug: "moovair-standard-wall-single-cfg-21",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm09hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-22",
      slug: "moovair-standard-wall-single-cfg-22",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm12hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-23",
      slug: "moovair-standard-wall-single-cfg-23",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm18hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-24",
      slug: "moovair-standard-wall-single-cfg-24",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm24hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-25",
      slug: "moovair-standard-wall-single-cfg-25",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm12hos25230e3",
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
      id: "moovair-standard-wall-single-cfg-26",
      slug: "moovair-standard-wall-single-cfg-26",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm36hom25230x3",
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
      id: "moovair-standard-wall-single-cfg-27",
      slug: "moovair-standard-wall-single-cfg-27",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm36hos18230e5",
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
      id: "moovair-standard-wall-single-cfg-28",
      slug: "moovair-standard-wall-single-cfg-28",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm48hos18230e5",
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
      id: "moovair-standard-wall-single-cfg-29",
      slug: "moovair-standard-wall-single-cfg-29",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm60hos18230e5",
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
      id: "moovair-standard-wall-single-cfg-30",
      slug: "moovair-standard-wall-single-cfg-30",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm36hos18230e5",
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
      id: "moovair-standard-wall-single-cfg-31",
      slug: "moovair-standard-wall-single-cfg-31",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm48hos18230e5",
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
      id: "moovair-standard-wall-single-cfg-32",
      slug: "moovair-standard-wall-single-cfg-32",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm36hom25230x3",
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
      id: "moovair-standard-wall-single-cfg-33",
      slug: "moovair-standard-wall-single-cfg-33",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm27hom25230x3",
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
      id: "moovair-standard-wall-single-cfg-34",
      slug: "moovair-standard-wall-single-cfg-34",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm48hom25230x3",
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
      id: "moovair-standard-wall-single-cfg-35",
      slug: "moovair-standard-wall-single-cfg-35",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm48hom25230x3",
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
      id: "moovair-standard-wall-single-cfg-36",
      slug: "moovair-standard-wall-single-cfg-36",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm12hos23230e2",
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
      id: "moovair-standard-wall-single-cfg-37",
      slug: "moovair-standard-wall-single-cfg-37",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm09hos42230e4",
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
      id: "moovair-standard-wall-single-cfg-38",
      slug: "moovair-standard-wall-single-cfg-38",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm12hos42230e4",
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
      id: "moovair-standard-wall-single-cfg-39",
      slug: "moovair-standard-wall-single-cfg-39",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm48hos25230e3",
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
      id: "moovair-standard-wall-single-cfg-40",
      slug: "moovair-standard-wall-single-cfg-40",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dm48hos25230e3",
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
      id: "moovair-standard-wall-single-cfg-41",
      slug: "moovair-standard-wall-single-cfg-41",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma18hos21230s1",
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
      id: "moovair-standard-wall-single-cfg-42",
      slug: "moovair-standard-wall-single-cfg-42",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma36hos21230s1",
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
      id: "moovair-standard-wall-single-cfg-43",
      slug: "moovair-standard-wall-single-cfg-43",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma36hos18230s5",
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
      id: "moovair-standard-wall-single-cfg-44",
      slug: "moovair-standard-wall-single-cfg-44",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma48hos18230s5",
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
      id: "moovair-standard-wall-single-cfg-45",
      slug: "moovair-standard-wall-single-cfg-45",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma36hos18230s5",
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
      id: "moovair-standard-wall-single-cfg-46",
      slug: "moovair-standard-wall-single-cfg-46",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma48hos18230s5",
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
      id: "moovair-standard-wall-single-cfg-47",
      slug: "moovair-standard-wall-single-cfg-47",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma60hos18230s5",
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
      id: "moovair-standard-wall-single-cfg-48",
      slug: "moovair-standard-wall-single-cfg-48",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma60hos19230e7",
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
      id: "moovair-standard-wall-single-cfg-49",
      slug: "moovair-standard-wall-single-cfg-49",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma55hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-50",
      slug: "moovair-standard-wall-single-cfg-50",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma55hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-51",
      slug: "moovair-standard-wall-single-cfg-51",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-dma55hom23230x2",
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
      id: "moovair-standard-wall-single-cfg-52",
      slug: "moovair-standard-wall-single-cfg-52",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea30r2an1",
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
      id: "moovair-standard-wall-single-cfg-53",
      slug: "moovair-standard-wall-single-cfg-53",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea36r2an1",
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
      id: "moovair-standard-wall-single-cfg-54",
      slug: "moovair-standard-wall-single-cfg-54",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea60r2an1",
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
      id: "moovair-standard-wall-single-cfg-55",
      slug: "moovair-standard-wall-single-cfg-55",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea15c2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-standard-wall-single-cfg-56",
      slug: "moovair-standard-wall-single-cfg-56",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshma15c2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15400,
      coolingCapacityMaxBtu: 15400,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-standard-wall-single-cfg-57",
      slug: "moovair-standard-wall-single-cfg-57",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea30r2an1",
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
      id: "moovair-standard-wall-single-cfg-58",
      slug: "moovair-standard-wall-single-cfg-58",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea36r2an1",
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
      id: "moovair-standard-wall-single-cfg-59",
      slug: "moovair-standard-wall-single-cfg-59",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea30r2an1",
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
      id: "moovair-standard-wall-single-cfg-60",
      slug: "moovair-standard-wall-single-cfg-60",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea30r2an1",
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
      id: "moovair-standard-wall-single-cfg-61",
      slug: "moovair-standard-wall-single-cfg-61",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea36r2an1",
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
      id: "moovair-standard-wall-single-cfg-62",
      slug: "moovair-standard-wall-single-cfg-62",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea36r2an1",
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
      id: "moovair-standard-wall-single-cfg-63",
      slug: "moovair-standard-wall-single-cfg-63",
      modelId: "moovair-standard-wall-single",
      outdoorUnitId: "moovair-mshea60r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 50000,
      coolingCapacityMaxBtu: 50000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-central-ducted-cfg-1",
      slug: "moovair-dm-series-central-ducted-cfg-1",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dm24hos25230e3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-central-ducted-cfg-2",
      slug: "moovair-dm-series-central-ducted-cfg-2",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dm24hos25230e3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-central-ducted-cfg-3",
      slug: "moovair-dm-series-central-ducted-cfg-3",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma24hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-4",
      slug: "moovair-dm-series-central-ducted-cfg-4",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma30hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-5",
      slug: "moovair-dm-series-central-ducted-cfg-5",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma36hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-6",
      slug: "moovair-dm-series-central-ducted-cfg-6",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma48hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-7",
      slug: "moovair-dm-series-central-ducted-cfg-7",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dm24hos25230e3",
      indoorUnitId: null,
      coolingCapacityMinBtu: 20800,
      coolingCapacityMaxBtu: 20800,
      seer2: 16.2,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-central-ducted-cfg-8",
      slug: "moovair-dm-series-central-ducted-cfg-8",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dm24hos25230e3a",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-central-ducted-cfg-9",
      slug: "moovair-dm-series-central-ducted-cfg-9",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma18hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-10",
      slug: "moovair-dm-series-central-ducted-cfg-10",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma24hos28230e8",
      indoorUnitId: null,
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 16.6,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-central-ducted-cfg-11",
      slug: "moovair-dm-series-central-ducted-cfg-11",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma60hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-12",
      slug: "moovair-dm-series-central-ducted-cfg-12",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma18hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-13",
      slug: "moovair-dm-series-central-ducted-cfg-13",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma24hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-14",
      slug: "moovair-dm-series-central-ducted-cfg-14",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma30hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-15",
      slug: "moovair-dm-series-central-ducted-cfg-15",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma36hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-16",
      slug: "moovair-dm-series-central-ducted-cfg-16",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma48hos20230e7",
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
      id: "moovair-dm-series-central-ducted-cfg-17",
      slug: "moovair-dm-series-central-ducted-cfg-17",
      modelId: "moovair-dm-series-central-ducted",
      outdoorUnitId: "moovair-dma60hos20230e7",
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
      id: "moovair-dm-series-wall-single-cfg-1",
      slug: "moovair-dm-series-wall-single-cfg-1",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm18hos25230e3a",
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
      id: "moovair-dm-series-wall-single-cfg-2",
      slug: "moovair-dm-series-wall-single-cfg-2",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm18hos25230e3a",
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
      id: "moovair-dm-series-wall-single-cfg-3",
      slug: "moovair-dm-series-wall-single-cfg-3",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm18hos25230e3a",
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
      id: "moovair-dm-series-wall-single-cfg-4",
      slug: "moovair-dm-series-wall-single-cfg-4",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm24hos25230e3a",
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
      id: "moovair-dm-series-wall-single-cfg-5",
      slug: "moovair-dm-series-wall-single-cfg-5",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm24hos25230e3a",
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
      id: "moovair-dm-series-wall-single-cfg-6",
      slug: "moovair-dm-series-wall-single-cfg-6",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm24hos25230e3a",
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
      id: "moovair-dm-series-wall-single-cfg-7",
      slug: "moovair-dm-series-wall-single-cfg-7",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm36hos25230e3",
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
      id: "moovair-dm-series-wall-single-cfg-8",
      slug: "moovair-dm-series-wall-single-cfg-8",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm24hos25230e3a",
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
      id: "moovair-dm-series-wall-single-cfg-9",
      slug: "moovair-dm-series-wall-single-cfg-9",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dm36hos25230e3",
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
      id: "moovair-dm-series-wall-single-cfg-10",
      slug: "moovair-dm-series-wall-single-cfg-10",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos21115s1",
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
      id: "moovair-dm-series-wall-single-cfg-11",
      slug: "moovair-dm-series-wall-single-cfg-11",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-12",
      slug: "moovair-dm-series-wall-single-cfg-12",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-13",
      slug: "moovair-dm-series-wall-single-cfg-13",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-14",
      slug: "moovair-dm-series-wall-single-cfg-14",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma24hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-15",
      slug: "moovair-dm-series-wall-single-cfg-15",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma06hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-16",
      slug: "moovair-dm-series-wall-single-cfg-16",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-17",
      slug: "moovair-dm-series-wall-single-cfg-17",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-18",
      slug: "moovair-dm-series-wall-single-cfg-18",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-19",
      slug: "moovair-dm-series-wall-single-cfg-19",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma24hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-20",
      slug: "moovair-dm-series-wall-single-cfg-20",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos42230e4",
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
      id: "moovair-dm-series-wall-single-cfg-21",
      slug: "moovair-dm-series-wall-single-cfg-21",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos42230e4",
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
      id: "moovair-dm-series-wall-single-cfg-22",
      slug: "moovair-dm-series-wall-single-cfg-22",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos42230e4",
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
      id: "moovair-dm-series-wall-single-cfg-23",
      slug: "moovair-dm-series-wall-single-cfg-23",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos25230e8",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-wall-single-cfg-24",
      slug: "moovair-dm-series-wall-single-cfg-24",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-25",
      slug: "moovair-dm-series-wall-single-cfg-25",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-26",
      slug: "moovair-dm-series-wall-single-cfg-26",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma24hos25230e8",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21.5,
      hspf2: 9.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-wall-single-cfg-27",
      slug: "moovair-dm-series-wall-single-cfg-27",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-28",
      slug: "moovair-dm-series-wall-single-cfg-28",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-29",
      slug: "moovair-dm-series-wall-single-cfg-29",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-30",
      slug: "moovair-dm-series-wall-single-cfg-30",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma24hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-31",
      slug: "moovair-dm-series-wall-single-cfg-31",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma36hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-32",
      slug: "moovair-dm-series-wall-single-cfg-32",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma48hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-33",
      slug: "moovair-dm-series-wall-single-cfg-33",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos25230e8",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 19.2,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-wall-single-cfg-34",
      slug: "moovair-dm-series-wall-single-cfg-34",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-35",
      slug: "moovair-dm-series-wall-single-cfg-35",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-36",
      slug: "moovair-dm-series-wall-single-cfg-36",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma24hos25230e8",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 19,
      hspf2: 11.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-wall-single-cfg-37",
      slug: "moovair-dm-series-wall-single-cfg-37",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-38",
      slug: "moovair-dm-series-wall-single-cfg-38",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-39",
      slug: "moovair-dm-series-wall-single-cfg-39",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-40",
      slug: "moovair-dm-series-wall-single-cfg-40",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma24hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-41",
      slug: "moovair-dm-series-wall-single-cfg-41",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma36hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-42",
      slug: "moovair-dm-series-wall-single-cfg-42",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma48hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-43",
      slug: "moovair-dm-series-wall-single-cfg-43",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-44",
      slug: "moovair-dm-series-wall-single-cfg-44",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos25230e8",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.7,
      hspf2: 10.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dm-series-wall-single-cfg-45",
      slug: "moovair-dm-series-wall-single-cfg-45",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-46",
      slug: "moovair-dm-series-wall-single-cfg-46",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-47",
      slug: "moovair-dm-series-wall-single-cfg-47",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-48",
      slug: "moovair-dm-series-wall-single-cfg-48",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma27hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-49",
      slug: "moovair-dm-series-wall-single-cfg-49",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma27hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-50",
      slug: "moovair-dm-series-wall-single-cfg-50",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma27hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-51",
      slug: "moovair-dm-series-wall-single-cfg-51",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma36hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-52",
      slug: "moovair-dm-series-wall-single-cfg-52",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma48hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-53",
      slug: "moovair-dm-series-wall-single-cfg-53",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma48hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-54",
      slug: "moovair-dm-series-wall-single-cfg-54",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma48hom23230x2",
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
      id: "moovair-dm-series-wall-single-cfg-55",
      slug: "moovair-dm-series-wall-single-cfg-55",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-56",
      slug: "moovair-dm-series-wall-single-cfg-56",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-57",
      slug: "moovair-dm-series-wall-single-cfg-57",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-58",
      slug: "moovair-dm-series-wall-single-cfg-58",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma27hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-59",
      slug: "moovair-dm-series-wall-single-cfg-59",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma27hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-60",
      slug: "moovair-dm-series-wall-single-cfg-60",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma27hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-61",
      slug: "moovair-dm-series-wall-single-cfg-61",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma36hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-62",
      slug: "moovair-dm-series-wall-single-cfg-62",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma36hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-63",
      slug: "moovair-dm-series-wall-single-cfg-63",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma36hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-64",
      slug: "moovair-dm-series-wall-single-cfg-64",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma48hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-65",
      slug: "moovair-dm-series-wall-single-cfg-65",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma48hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-66",
      slug: "moovair-dm-series-wall-single-cfg-66",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma48hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-67",
      slug: "moovair-dm-series-wall-single-cfg-67",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-68",
      slug: "moovair-dm-series-wall-single-cfg-68",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos25230e8",
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
      id: "moovair-dm-series-wall-single-cfg-69",
      slug: "moovair-dm-series-wall-single-cfg-69",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma09hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-70",
      slug: "moovair-dm-series-wall-single-cfg-70",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma12hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-71",
      slug: "moovair-dm-series-wall-single-cfg-71",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma18hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-72",
      slug: "moovair-dm-series-wall-single-cfg-72",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma24hos28230e8",
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
      id: "moovair-dm-series-wall-single-cfg-73",
      slug: "moovair-dm-series-wall-single-cfg-73",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma55hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-74",
      slug: "moovair-dm-series-wall-single-cfg-74",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma55hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-75",
      slug: "moovair-dm-series-wall-single-cfg-75",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dma55hom25230x3",
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
      id: "moovair-dm-series-wall-single-cfg-76",
      slug: "moovair-dm-series-wall-single-cfg-76",
      modelId: "moovair-dm-series-wall-single",
      outdoorUnitId: "moovair-dmb12hos42230e8",
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
      id: "moovair-dma12-series-wall-single-cfg-1",
      slug: "moovair-dma12-series-wall-single-cfg-1",
      modelId: "moovair-dma12-series-wall-single",
      outdoorUnitId: "moovair-dma12hos25230e8",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-dma12-series-wall-single-cfg-2",
      slug: "moovair-dma12-series-wall-single-cfg-2",
      modelId: "moovair-dma12-series-wall-single",
      outdoorUnitId: "moovair-dma12hos28230e8",
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
      id: "moovair-cub-series-central-ducted-cfg-1",
      slug: "moovair-cub-series-central-ducted-cfg-1",
      modelId: "moovair-cub-series-central-ducted",
      outdoorUnitId: "moovair-dma36hos20230e7",
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
      id: "moovair-dmb-series-wall-single-cfg-1",
      slug: "moovair-dmb-series-wall-single-cfg-1",
      modelId: "moovair-dmb-series-wall-single",
      outdoorUnitId: "moovair-dmb09hos42230e8",
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
      id: "moovair-dmb-series-wall-single-cfg-2",
      slug: "moovair-dmb-series-wall-single-cfg-2",
      modelId: "moovair-dmb-series-wall-single",
      outdoorUnitId: "moovair-dmb12hos42230e8",
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
      id: "moovair-dmb-series-wall-single-cfg-3",
      slug: "moovair-dmb-series-wall-single-cfg-3",
      modelId: "moovair-dmb-series-wall-single",
      outdoorUnitId: "moovair-dmb18hos42230e8b",
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
      id: "moovair-dma-series-central-ducted-cfg-1",
      slug: "moovair-dma-series-central-ducted-cfg-1",
      modelId: "moovair-dma-series-central-ducted",
      outdoorUnitId: "moovair-dma30hos20230e7",
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
      id: "moovair-dmc-series-central-ducted-cfg-1",
      slug: "moovair-dmc-series-central-ducted-cfg-1",
      modelId: "moovair-dmc-series-central-ducted",
      outdoorUnitId: "moovair-dmc36hos20230e7",
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
      id: "moovair-dmc-series-central-ducted-cfg-2",
      slug: "moovair-dmc-series-central-ducted-cfg-2",
      modelId: "moovair-dmc-series-central-ducted",
      outdoorUnitId: "moovair-dmc36hos20230e7",
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
      id: "moovair-dmc-series-central-ducted-cfg-3",
      slug: "moovair-dmc-series-central-ducted-cfg-3",
      modelId: "moovair-dmc-series-central-ducted",
      outdoorUnitId: "moovair-dmc36hos20230e7",
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
      id: "moovair-shc-series-wall-single-cfg-1",
      slug: "moovair-shc-series-wall-single-cfg-1",
      modelId: "moovair-shc-series-wall-single",
      outdoorUnitId: "moovair-shc24vh2ag",
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
      id: "moovair-dma-series-wall-single-cfg-1",
      slug: "moovair-dma-series-wall-single-cfg-1",
      modelId: "moovair-dma-series-wall-single",
      outdoorUnitId: "moovair-dma12hos42230e4",
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
      id: "moovair-msh-series-central-ducted-cfg-1",
      slug: "moovair-msh-series-central-ducted-cfg-1",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshea18r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-2",
      slug: "moovair-msh-series-central-ducted-cfg-2",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshea24r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-3",
      slug: "moovair-msh-series-central-ducted-cfg-3",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshea48r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-4",
      slug: "moovair-msh-series-central-ducted-cfg-4",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma18r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-5",
      slug: "moovair-msh-series-central-ducted-cfg-5",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma24r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-6",
      slug: "moovair-msh-series-central-ducted-cfg-6",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-7",
      slug: "moovair-msh-series-central-ducted-cfg-7",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-8",
      slug: "moovair-msh-series-central-ducted-cfg-8",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-9",
      slug: "moovair-msh-series-central-ducted-cfg-9",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-10",
      slug: "moovair-msh-series-central-ducted-cfg-10",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma60r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-11",
      slug: "moovair-msh-series-central-ducted-cfg-11",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma18r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-12",
      slug: "moovair-msh-series-central-ducted-cfg-12",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma24r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-13",
      slug: "moovair-msh-series-central-ducted-cfg-13",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-14",
      slug: "moovair-msh-series-central-ducted-cfg-14",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-15",
      slug: "moovair-msh-series-central-ducted-cfg-15",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-16",
      slug: "moovair-msh-series-central-ducted-cfg-16",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-17",
      slug: "moovair-msh-series-central-ducted-cfg-17",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma48r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-18",
      slug: "moovair-msh-series-central-ducted-cfg-18",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma48r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-19",
      slug: "moovair-msh-series-central-ducted-cfg-19",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshea24r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-20",
      slug: "moovair-msh-series-central-ducted-cfg-20",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshea18r2an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 18.5,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-msh-series-central-ducted-cfg-21",
      slug: "moovair-msh-series-central-ducted-cfg-21",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshea18r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-22",
      slug: "moovair-msh-series-central-ducted-cfg-22",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshea24r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-23",
      slug: "moovair-msh-series-central-ducted-cfg-23",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshea48r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-24",
      slug: "moovair-msh-series-central-ducted-cfg-24",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma18r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-25",
      slug: "moovair-msh-series-central-ducted-cfg-25",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma24r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-26",
      slug: "moovair-msh-series-central-ducted-cfg-26",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-msh-series-central-ducted-cfg-27",
      slug: "moovair-msh-series-central-ducted-cfg-27",
      modelId: "moovair-msh-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-1",
      slug: "moovair-mah-series-central-ducted-cfg-1",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma18r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-2",
      slug: "moovair-mah-series-central-ducted-cfg-2",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma24r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-3",
      slug: "moovair-mah-series-central-ducted-cfg-3",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-4",
      slug: "moovair-mah-series-central-ducted-cfg-4",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-5",
      slug: "moovair-mah-series-central-ducted-cfg-5",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma48r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-6",
      slug: "moovair-mah-series-central-ducted-cfg-6",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma60r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-7",
      slug: "moovair-mah-series-central-ducted-cfg-7",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma18r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-8",
      slug: "moovair-mah-series-central-ducted-cfg-8",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma24r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-9",
      slug: "moovair-mah-series-central-ducted-cfg-9",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-10",
      slug: "moovair-mah-series-central-ducted-cfg-10",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-11",
      slug: "moovair-mah-series-central-ducted-cfg-11",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma48r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-12",
      slug: "moovair-mah-series-central-ducted-cfg-12",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma60r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-13",
      slug: "moovair-mah-series-central-ducted-cfg-13",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma18r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-14",
      slug: "moovair-mah-series-central-ducted-cfg-14",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma24r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-15",
      slug: "moovair-mah-series-central-ducted-cfg-15",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-16",
      slug: "moovair-mah-series-central-ducted-cfg-16",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma30r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-17",
      slug: "moovair-mah-series-central-ducted-cfg-17",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-18",
      slug: "moovair-mah-series-central-ducted-cfg-18",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshmb36r2an1",
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
      id: "moovair-mah-series-central-ducted-cfg-19",
      slug: "moovair-mah-series-central-ducted-cfg-19",
      modelId: "moovair-mah-series-central-ducted",
      outdoorUnitId: "moovair-mshma60r2an1",
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
      id: "moovair-msh-series-wall-single-cfg-1",
      slug: "moovair-msh-series-wall-single-cfg-1",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea09c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-2",
      slug: "moovair-msh-series-wall-single-cfg-2",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-3",
      slug: "moovair-msh-series-wall-single-cfg-3",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-4",
      slug: "moovair-msh-series-wall-single-cfg-4",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea24c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-5",
      slug: "moovair-msh-series-wall-single-cfg-5",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma09c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-6",
      slug: "moovair-msh-series-wall-single-cfg-6",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-7",
      slug: "moovair-msh-series-wall-single-cfg-7",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-8",
      slug: "moovair-msh-series-wall-single-cfg-8",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma24c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-9",
      slug: "moovair-msh-series-wall-single-cfg-9",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma33c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-10",
      slug: "moovair-msh-series-wall-single-cfg-10",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshha18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-11",
      slug: "moovair-msh-series-wall-single-cfg-11",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea09c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-12",
      slug: "moovair-msh-series-wall-single-cfg-12",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-13",
      slug: "moovair-msh-series-wall-single-cfg-13",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-14",
      slug: "moovair-msh-series-wall-single-cfg-14",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea24c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-15",
      slug: "moovair-msh-series-wall-single-cfg-15",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma09c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-16",
      slug: "moovair-msh-series-wall-single-cfg-16",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-17",
      slug: "moovair-msh-series-wall-single-cfg-17",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-18",
      slug: "moovair-msh-series-wall-single-cfg-18",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma24c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-19",
      slug: "moovair-msh-series-wall-single-cfg-19",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-20",
      slug: "moovair-msh-series-wall-single-cfg-20",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-21",
      slug: "moovair-msh-series-wall-single-cfg-21",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea09c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-22",
      slug: "moovair-msh-series-wall-single-cfg-22",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-23",
      slug: "moovair-msh-series-wall-single-cfg-23",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-24",
      slug: "moovair-msh-series-wall-single-cfg-24",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea24c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-25",
      slug: "moovair-msh-series-wall-single-cfg-25",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma09c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-26",
      slug: "moovair-msh-series-wall-single-cfg-26",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-27",
      slug: "moovair-msh-series-wall-single-cfg-27",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma18c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-28",
      slug: "moovair-msh-series-wall-single-cfg-28",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma24c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-29",
      slug: "moovair-msh-series-wall-single-cfg-29",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-30",
      slug: "moovair-msh-series-wall-single-cfg-30",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-31",
      slug: "moovair-msh-series-wall-single-cfg-31",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-32",
      slug: "moovair-msh-series-wall-single-cfg-32",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshma12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-33",
      slug: "moovair-msh-series-wall-single-cfg-33",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshha12c2an1",
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
      id: "moovair-msh-series-wall-single-cfg-34",
      slug: "moovair-msh-series-wall-single-cfg-34",
      modelId: "moovair-msh-series-wall-single",
      outdoorUnitId: "moovair-mshea15c2an",
      indoorUnitId: null,
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 23.5,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "moovair-mxh-series-wall-single-cfg-1",
      slug: "moovair-mxh-series-wall-single-cfg-1",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa2742av1",
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
      id: "moovair-mxh-series-wall-single-cfg-2",
      slug: "moovair-mxh-series-wall-single-cfg-2",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa2742av1",
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
      id: "moovair-mxh-series-wall-single-cfg-3",
      slug: "moovair-mxh-series-wall-single-cfg-3",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa2742av1",
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
      id: "moovair-mxh-series-wall-single-cfg-4",
      slug: "moovair-mxh-series-wall-single-cfg-4",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa3652av1",
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
      id: "moovair-mxh-series-wall-single-cfg-5",
      slug: "moovair-mxh-series-wall-single-cfg-5",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa3652av1",
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
      id: "moovair-mxh-series-wall-single-cfg-6",
      slug: "moovair-mxh-series-wall-single-cfg-6",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa3652av1",
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
      id: "moovair-mxh-series-wall-single-cfg-7",
      slug: "moovair-mxh-series-wall-single-cfg-7",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa4862av1",
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
      id: "moovair-mxh-series-wall-single-cfg-8",
      slug: "moovair-mxh-series-wall-single-cfg-8",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa4862av1",
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
      id: "moovair-mxh-series-wall-single-cfg-9",
      slug: "moovair-mxh-series-wall-single-cfg-9",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa4862av1",
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
      id: "moovair-mxh-series-wall-single-cfg-10",
      slug: "moovair-mxh-series-wall-single-cfg-10",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza1832av1",
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
      id: "moovair-mxh-series-wall-single-cfg-11",
      slug: "moovair-mxh-series-wall-single-cfg-11",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza1832av1",
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
      id: "moovair-mxh-series-wall-single-cfg-12",
      slug: "moovair-mxh-series-wall-single-cfg-12",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza1832av1",
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
      id: "moovair-mxh-series-wall-single-cfg-13",
      slug: "moovair-mxh-series-wall-single-cfg-13",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza2742av1",
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
      id: "moovair-mxh-series-wall-single-cfg-14",
      slug: "moovair-mxh-series-wall-single-cfg-14",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza2742av1",
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
      id: "moovair-mxh-series-wall-single-cfg-15",
      slug: "moovair-mxh-series-wall-single-cfg-15",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza2742av1",
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
      id: "moovair-mxh-series-wall-single-cfg-16",
      slug: "moovair-mxh-series-wall-single-cfg-16",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza3652av1",
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
      id: "moovair-mxh-series-wall-single-cfg-17",
      slug: "moovair-mxh-series-wall-single-cfg-17",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza3652av1",
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
      id: "moovair-mxh-series-wall-single-cfg-18",
      slug: "moovair-mxh-series-wall-single-cfg-18",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza3652av1",
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
      id: "moovair-mxh-series-wall-single-cfg-19",
      slug: "moovair-mxh-series-wall-single-cfg-19",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza4862av1",
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
      id: "moovair-mxh-series-wall-single-cfg-20",
      slug: "moovair-mxh-series-wall-single-cfg-20",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza4862av1",
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
      id: "moovair-mxh-series-wall-single-cfg-21",
      slug: "moovair-mxh-series-wall-single-cfg-21",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhza4862av1",
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
      id: "moovair-mxh-series-wall-single-cfg-22",
      slug: "moovair-mxh-series-wall-single-cfg-22",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa1832an1",
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
      id: "moovair-mxh-series-wall-single-cfg-23",
      slug: "moovair-mxh-series-wall-single-cfg-23",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa1832an1",
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
      id: "moovair-mxh-series-wall-single-cfg-24",
      slug: "moovair-mxh-series-wall-single-cfg-24",
      modelId: "moovair-mxh-series-wall-single",
      outdoorUnitId: "moovair-mxhsa1832an1",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 22.55,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "moovair-standard-wall-single-cfg-1",
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
      configurationId: "moovair-standard-wall-single-cfg-2",
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
      configurationId: "moovair-standard-wall-single-cfg-3",
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
      configurationId: "moovair-standard-wall-single-cfg-4",
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
      configurationId: "moovair-standard-wall-single-cfg-5",
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
      configurationId: "moovair-standard-wall-single-cfg-6",
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
      configurationId: "moovair-standard-wall-single-cfg-7",
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
      configurationId: "moovair-standard-wall-single-cfg-8",
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
      configurationId: "moovair-standard-wall-single-cfg-9",
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
      configurationId: "moovair-standard-wall-single-cfg-10",
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
      configurationId: "moovair-standard-wall-single-cfg-11",
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
      configurationId: "moovair-standard-wall-single-cfg-12",
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
      configurationId: "moovair-standard-wall-single-cfg-13",
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
      configurationId: "moovair-standard-wall-single-cfg-14",
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
      configurationId: "moovair-standard-wall-single-cfg-15",
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
      configurationId: "moovair-standard-wall-single-cfg-16",
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
      configurationId: "moovair-standard-wall-single-cfg-17",
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
      configurationId: "moovair-standard-wall-single-cfg-18",
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
      configurationId: "moovair-standard-wall-single-cfg-19",
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
      configurationId: "moovair-standard-wall-single-cfg-20",
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
      configurationId: "moovair-standard-wall-single-cfg-21",
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
      configurationId: "moovair-standard-wall-single-cfg-22",
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
      configurationId: "moovair-standard-wall-single-cfg-23",
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
      configurationId: "moovair-standard-wall-single-cfg-24",
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
      configurationId: "moovair-standard-wall-single-cfg-25",
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
      configurationId: "moovair-standard-wall-single-cfg-26",
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
      configurationId: "moovair-standard-wall-single-cfg-27",
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
      configurationId: "moovair-standard-wall-single-cfg-28",
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
      configurationId: "moovair-standard-wall-single-cfg-29",
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
      configurationId: "moovair-standard-wall-single-cfg-30",
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
      configurationId: "moovair-standard-wall-single-cfg-31",
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
      configurationId: "moovair-standard-wall-single-cfg-32",
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
      configurationId: "moovair-standard-wall-single-cfg-33",
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
      configurationId: "moovair-standard-wall-single-cfg-34",
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
      configurationId: "moovair-standard-wall-single-cfg-35",
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
      configurationId: "moovair-standard-wall-single-cfg-36",
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
      configurationId: "moovair-standard-wall-single-cfg-37",
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
      configurationId: "moovair-standard-wall-single-cfg-38",
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
      configurationId: "moovair-standard-wall-single-cfg-39",
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
      configurationId: "moovair-standard-wall-single-cfg-40",
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
      configurationId: "moovair-standard-wall-single-cfg-41",
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
      configurationId: "moovair-standard-wall-single-cfg-42",
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
      configurationId: "moovair-standard-wall-single-cfg-43",
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
      configurationId: "moovair-standard-wall-single-cfg-44",
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
      configurationId: "moovair-standard-wall-single-cfg-45",
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
      configurationId: "moovair-standard-wall-single-cfg-46",
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
      configurationId: "moovair-standard-wall-single-cfg-47",
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
      configurationId: "moovair-standard-wall-single-cfg-48",
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
      configurationId: "moovair-standard-wall-single-cfg-49",
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
      configurationId: "moovair-standard-wall-single-cfg-50",
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
      configurationId: "moovair-standard-wall-single-cfg-51",
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
      configurationId: "moovair-standard-wall-single-cfg-52",
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
      configurationId: "moovair-standard-wall-single-cfg-53",
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
      configurationId: "moovair-standard-wall-single-cfg-54",
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
      configurationId: "moovair-standard-wall-single-cfg-55",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-standard-wall-single-cfg-56",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-standard-wall-single-cfg-57",
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
      configurationId: "moovair-standard-wall-single-cfg-58",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-standard-wall-single-cfg-59",
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
      configurationId: "moovair-standard-wall-single-cfg-60",
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
      configurationId: "moovair-standard-wall-single-cfg-61",
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
      configurationId: "moovair-standard-wall-single-cfg-62",
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
      configurationId: "moovair-standard-wall-single-cfg-63",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17200,
          cop: 1.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-central-ducted-cfg-3",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-4",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-5",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-6",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.6,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-central-ducted-cfg-9",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: 1.7,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-central-ducted-cfg-11",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-12",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-13",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-14",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-15",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-16",
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
      configurationId: "moovair-dm-series-central-ducted-cfg-17",
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
      configurationId: "moovair-dm-series-wall-single-cfg-1",
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
      configurationId: "moovair-dm-series-wall-single-cfg-2",
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
      configurationId: "moovair-dm-series-wall-single-cfg-3",
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
      configurationId: "moovair-dm-series-wall-single-cfg-4",
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
      configurationId: "moovair-dm-series-wall-single-cfg-5",
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
      configurationId: "moovair-dm-series-wall-single-cfg-6",
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
      configurationId: "moovair-dm-series-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 28000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 16500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25400,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-10",
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
      configurationId: "moovair-dm-series-wall-single-cfg-11",
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
      configurationId: "moovair-dm-series-wall-single-cfg-12",
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
      configurationId: "moovair-dm-series-wall-single-cfg-13",
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
      configurationId: "moovair-dm-series-wall-single-cfg-14",
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
      configurationId: "moovair-dm-series-wall-single-cfg-15",
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
      configurationId: "moovair-dm-series-wall-single-cfg-16",
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
      configurationId: "moovair-dm-series-wall-single-cfg-17",
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
      configurationId: "moovair-dm-series-wall-single-cfg-18",
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
      configurationId: "moovair-dm-series-wall-single-cfg-19",
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
      configurationId: "moovair-dm-series-wall-single-cfg-20",
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
      configurationId: "moovair-dm-series-wall-single-cfg-21",
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
      configurationId: "moovair-dm-series-wall-single-cfg-22",
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
      configurationId: "moovair-dm-series-wall-single-cfg-23",
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
      configurationId: "moovair-dm-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8900,
          cop: 2.27,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-25",
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
      configurationId: "moovair-dm-series-wall-single-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-27",
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
      configurationId: "moovair-dm-series-wall-single-cfg-28",
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
      configurationId: "moovair-dm-series-wall-single-cfg-29",
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
      configurationId: "moovair-dm-series-wall-single-cfg-30",
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
      configurationId: "moovair-dm-series-wall-single-cfg-31",
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
      configurationId: "moovair-dm-series-wall-single-cfg-32",
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
      configurationId: "moovair-dm-series-wall-single-cfg-33",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9300,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-35",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-36",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.3,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-37",
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
      configurationId: "moovair-dm-series-wall-single-cfg-38",
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
      configurationId: "moovair-dm-series-wall-single-cfg-39",
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
      configurationId: "moovair-dm-series-wall-single-cfg-40",
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
      configurationId: "moovair-dm-series-wall-single-cfg-41",
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
      configurationId: "moovair-dm-series-wall-single-cfg-42",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39500,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-43",
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
      configurationId: "moovair-dm-series-wall-single-cfg-44",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9000,
          cop: 2.26,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-45",
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
      configurationId: "moovair-dm-series-wall-single-cfg-46",
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
      configurationId: "moovair-dm-series-wall-single-cfg-47",
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
      configurationId: "moovair-dm-series-wall-single-cfg-48",
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
      configurationId: "moovair-dm-series-wall-single-cfg-49",
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
      configurationId: "moovair-dm-series-wall-single-cfg-50",
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
      configurationId: "moovair-dm-series-wall-single-cfg-51",
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
      configurationId: "moovair-dm-series-wall-single-cfg-52",
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
      configurationId: "moovair-dm-series-wall-single-cfg-53",
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
      configurationId: "moovair-dm-series-wall-single-cfg-54",
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
      configurationId: "moovair-dm-series-wall-single-cfg-55",
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
      configurationId: "moovair-dm-series-wall-single-cfg-56",
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
      configurationId: "moovair-dm-series-wall-single-cfg-57",
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
      configurationId: "moovair-dm-series-wall-single-cfg-58",
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
      configurationId: "moovair-dm-series-wall-single-cfg-59",
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
      configurationId: "moovair-dm-series-wall-single-cfg-60",
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
      configurationId: "moovair-dm-series-wall-single-cfg-61",
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
      configurationId: "moovair-dm-series-wall-single-cfg-62",
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
      configurationId: "moovair-dm-series-wall-single-cfg-63",
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
      configurationId: "moovair-dm-series-wall-single-cfg-64",
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
      configurationId: "moovair-dm-series-wall-single-cfg-65",
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
      configurationId: "moovair-dm-series-wall-single-cfg-66",
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
      configurationId: "moovair-dm-series-wall-single-cfg-67",
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
      configurationId: "moovair-dm-series-wall-single-cfg-68",
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
      configurationId: "moovair-dm-series-wall-single-cfg-69",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7100,
          cop: 1.59,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-70",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dm-series-wall-single-cfg-71",
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
      configurationId: "moovair-dm-series-wall-single-cfg-72",
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
      configurationId: "moovair-dm-series-wall-single-cfg-73",
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
      configurationId: "moovair-dm-series-wall-single-cfg-74",
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
      configurationId: "moovair-dm-series-wall-single-cfg-75",
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
      configurationId: "moovair-dm-series-wall-single-cfg-76",
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
      configurationId: "moovair-dma12-series-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9200,
          cop: 2.38,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-dma12-series-wall-single-cfg-2",
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
      configurationId: "moovair-cub-series-central-ducted-cfg-1",
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
      configurationId: "moovair-dmb-series-wall-single-cfg-1",
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
      configurationId: "moovair-dmb-series-wall-single-cfg-2",
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
      configurationId: "moovair-dmb-series-wall-single-cfg-3",
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
      configurationId: "moovair-dma-series-central-ducted-cfg-1",
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
      configurationId: "moovair-dmc-series-central-ducted-cfg-1",
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
      configurationId: "moovair-dmc-series-central-ducted-cfg-2",
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
      configurationId: "moovair-dmc-series-central-ducted-cfg-3",
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
      configurationId: "moovair-shc-series-wall-single-cfg-1",
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
      configurationId: "moovair-dma-series-wall-single-cfg-1",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-1",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-2",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-3",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-4",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-5",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-6",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-7",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-8",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-9",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-10",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-11",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-12",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-13",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-14",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-15",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-16",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-17",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-18",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20800,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12600,
          cop: 2.1,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13400,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-central-ducted-cfg-22",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-23",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-24",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-25",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-26",
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
      configurationId: "moovair-msh-series-central-ducted-cfg-27",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-1",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-2",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-3",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-4",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-5",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-6",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14700,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mah-series-central-ducted-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mah-series-central-ducted-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mah-series-central-ducted-cfg-10",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-11",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-12",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mah-series-central-ducted-cfg-14",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mah-series-central-ducted-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mah-series-central-ducted-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mah-series-central-ducted-cfg-18",
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
      configurationId: "moovair-mah-series-central-ducted-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35600,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-msh-series-wall-single-cfg-1",
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
      configurationId: "moovair-msh-series-wall-single-cfg-2",
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
      configurationId: "moovair-msh-series-wall-single-cfg-3",
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
      configurationId: "moovair-msh-series-wall-single-cfg-4",
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
      configurationId: "moovair-msh-series-wall-single-cfg-5",
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
      configurationId: "moovair-msh-series-wall-single-cfg-6",
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
      configurationId: "moovair-msh-series-wall-single-cfg-7",
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
      configurationId: "moovair-msh-series-wall-single-cfg-8",
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
      configurationId: "moovair-msh-series-wall-single-cfg-9",
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
      configurationId: "moovair-msh-series-wall-single-cfg-10",
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
      configurationId: "moovair-msh-series-wall-single-cfg-11",
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
      configurationId: "moovair-msh-series-wall-single-cfg-12",
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
      configurationId: "moovair-msh-series-wall-single-cfg-13",
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
      configurationId: "moovair-msh-series-wall-single-cfg-14",
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
      configurationId: "moovair-msh-series-wall-single-cfg-15",
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
      configurationId: "moovair-msh-series-wall-single-cfg-16",
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
      configurationId: "moovair-msh-series-wall-single-cfg-17",
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
      configurationId: "moovair-msh-series-wall-single-cfg-18",
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
      configurationId: "moovair-msh-series-wall-single-cfg-19",
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
      configurationId: "moovair-msh-series-wall-single-cfg-20",
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
      configurationId: "moovair-msh-series-wall-single-cfg-21",
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
      configurationId: "moovair-msh-series-wall-single-cfg-22",
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
      configurationId: "moovair-msh-series-wall-single-cfg-23",
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
      configurationId: "moovair-msh-series-wall-single-cfg-24",
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
      configurationId: "moovair-msh-series-wall-single-cfg-25",
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
      configurationId: "moovair-msh-series-wall-single-cfg-26",
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
      configurationId: "moovair-msh-series-wall-single-cfg-27",
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
      configurationId: "moovair-msh-series-wall-single-cfg-28",
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
      configurationId: "moovair-msh-series-wall-single-cfg-29",
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
      configurationId: "moovair-msh-series-wall-single-cfg-30",
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
      configurationId: "moovair-msh-series-wall-single-cfg-31",
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
      configurationId: "moovair-msh-series-wall-single-cfg-32",
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
      configurationId: "moovair-msh-series-wall-single-cfg-33",
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
      configurationId: "moovair-msh-series-wall-single-cfg-34",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10100,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "moovair-mxh-series-wall-single-cfg-1",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-2",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-3",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-4",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-5",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-6",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-7",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-8",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-9",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-10",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-11",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-12",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-13",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-14",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-15",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-16",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-17",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-18",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-19",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-20",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-21",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-22",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-23",
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
      configurationId: "moovair-mxh-series-wall-single-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 14100,
          cop: 2.3,
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
